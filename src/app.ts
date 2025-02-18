import { MemorySaver, InMemoryStore, Command } from '@langchain/langgraph';
import { HumanMessage } from '@langchain/core/messages';
import * as core from '@actions/core';
import { StateGraph } from '@langchain/langgraph';
import { AIMessage } from '@langchain/core/messages';
import { isAIMessage } from '@langchain/core/messages';
import { ToolMessage } from '@langchain/core/messages';
import { isCommand } from '@langchain/langgraph';
import { CustomTools } from './tools';
import { GraphState, State, Update } from './state';

const tools = [...CustomTools];
const toolMap = new Map(tools.map(tool => [tool.name, tool]));

import {
  checkFileExists,
  createNewTests,
  analyzeExistingTestEdges,
  analyzeTestResults,
  checkTestFile,
  saveTests,
  saveTestsEdges,
  runTests,
  runTestsEdges,
  analyzeExistingTests,
  fixErrors,
  fixErrorsEdges,
  checkFileExistsEdges,
  checkTestFileEdges,
  writeTestsEdges,
  analyzeTestResultsEdges,
  finalNotesAgent
} from './agents';

export const MainGraphRun = async () => {
  // Initialize memory to persist state between graph runs
  const checkpointer = new MemorySaver();
  const inMemoryStore = new InMemoryStore();

  const filename: string = core.getInput('file_name');
  const toolNames = CustomTools.map(tool => tool.name).join(', ');

  const toolExecutor = async (state: State) => {
    const message = state.messages.at(-1);
    // @ts-ignore
    if (!isAIMessage(message) || message.tool_calls === undefined || message.tool_calls.length === 0) {
      throw new Error('Most recent message must be an AIMessage with a tool call.');
    }

    // Execute all tool calls in parallel with proper error handling
    const toolResults = (await Promise.all(
      message.tool_calls.map(async (toolCall: any) => {
        try {
          const tool = toolMap.get(toolCall.name);
          if (!tool) {
            throw new Error(`Tool ${toolCall.name} not found`);
          }

          const result = await tool.invoke(toolCall.args);
          const { messageValue = {}, ...restResult } = result;
          return new Command({
            update: {
              ...restResult,
              messages: [
                new ToolMessage({
                  content: JSON.stringify(messageValue, null, 2),
                  tool_call_id: toolCall.id,
                  additional_kwargs: { result }
                })
              ]
            }
          });
        } catch (error) {
          return new Command({
            update: {
              messages: [
                new ToolMessage({
                  content: `Tool ${toolCall.name} failed: ${error instanceof Error ? error.message : String(error)}`,
                  tool_call_id: toolCall.id,
                  additional_kwargs: { error }
                })
              ]
            }
          });
        }
      })
    )) as any[];

    // Handle mixed Command and non-Command outputs
    const combinedOutputs = toolResults.map(output => {
      if (isCommand(output)) {
        console.log('running  command output', output);
        return output;
      }
      // Tool invocation result is a string, convert it to a ToolMessage
      return { messages: [output] };
    });
    // Return an array of values instead of an object
    return combinedOutputs;
  };

  const callToolsEdge = async (state: State) => {
    const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
    if (lastMessage.tool_calls?.length) {
      return 'tools';
    }
    const hasFile = state.fileName && state.filePath;
    const hasTestFile = state.testFileName && state.testFilePath;
    const hasBothFiles = hasFile && hasTestFile;
    const { messages, ...restOfTheState } = state;
    console.log('callToolsEdge state params', JSON.stringify(restOfTheState, null, 2));

    if (state.iteration > 5) {
      return '__end__';
    }

    if (state.testSummary && state.testSummary?.failureReasons?.length > 0) {
      return 'fix-errors';
    } else if (state.testSummary && state.testSummary?.failureReasons?.length === 0) {
      return '__end__';
    }

    if (state.testResults) {
      return 'analyze-results';
    }

    if (hasBothFiles) {
      return 'analyze-existing-tests';
    }

    if (state.filePath) {
      // found source file, now find test file
      return 'find-test-file';
    }

    return 'find-file';
  };

  // Create and compile the graph
  const workflow = new StateGraph(GraphState)
    // Add nodes
    .addNode('find-file', checkFileExists)
    .addNode('find-test-file', checkTestFile)
    .addNode('create-new-tests', createNewTests)
    .addNode('analyze-existing-tests', analyzeExistingTests)
    .addNode('save-tests', saveTests)
    .addNode('run-tests', runTests)
    .addNode('analyze-results', analyzeTestResults)
    .addNode('fix-errors', fixErrors)
    .addNode('tools-find-file', toolExecutor)
    .addNode('tools-find-test-file', toolExecutor)
    .addNode('tools-read-file', toolExecutor)
    .addNode('tools-write-tests', toolExecutor)
    .addNode('tools-run-tests', toolExecutor)
    .addNode('tools-fix-errors', toolExecutor)
    .addNode('tools-examine-test-results', toolExecutor)
    .addNode('tools-create-new-tests', toolExecutor)
    .addNode('final-notes', finalNotesAgent)

    // Add edges with fixed flow
    .addEdge('__start__', 'find-file')
    .addEdge('tools-read-file', 'analyze-existing-tests')
    .addEdge('tools-create-new-tests', 'find-test-file')
    .addConditionalEdges('find-file', checkFileExistsEdges)
    .addConditionalEdges('find-test-file', checkTestFileEdges)
    .addConditionalEdges('create-new-tests', writeTestsEdges)
    .addConditionalEdges('analyze-existing-tests', analyzeExistingTestEdges)
    .addConditionalEdges('save-tests', saveTestsEdges) // Use new edge handler
    .addConditionalEdges('run-tests', runTestsEdges)
    .addConditionalEdges('analyze-results', analyzeTestResultsEdges)
    .addConditionalEdges('fix-errors', fixErrorsEdges)
    .addConditionalEdges('tools-write-tests', saveTestsEdges) // Route
    .addConditionalEdges('tools-find-file', checkFileExistsEdges)
    .addConditionalEdges('tools-find-test-file', checkTestFileEdges)
    .addConditionalEdges('tools-run-tests', runTestsEdges)
    .addConditionalEdges('tools-fix-errors', fixErrorsEdges)
    .addConditionalEdges('tools-examine-test-results', analyzeTestResultsEdges)
    .addEdge('final-notes', '__end__');

  const app = workflow.compile({ checkpointer, store: inMemoryStore });
  console.log('app version', 'v0.1.54-alpha.10');

  const query = `
  You are a coding assistant with expertise in test automation.
  Generate and execute tests for ${filename}.

  Use the available tools: ${toolNames}.
  Current time: {time}

  Guidelines:
  1. Verify the source file exists
  2. Check for existing test file
  3. Improve existing tests or create new tests
  4. Save test file
  5. Run tests with coverage
  6. Fix any failures`;

  // Use the Runnable
  const currentDate = new Date().toISOString().replace('T', ' ').split('.')[0];
  const outputContent = await app.invoke(
    {
      messages: [new HumanMessage(query)],
      fileName: filename
    },
    { recursionLimit: 100, configurable: { thread_id: 1001 } }
  );

  console.log('result of graph for a threadId:', currentDate);

  // console.log(resultOfGraph.messages.map((m) => m.content).join("\n"));
  console.log(outputContent);
};
