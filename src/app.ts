import { MemorySaver, InMemoryStore, Command } from '@langchain/langgraph';
import { HumanMessage } from '@langchain/core/messages';
import * as core from '@actions/core';
import { StateGraph } from '@langchain/langgraph';
import { BaseMessage } from '@langchain/core/messages';
import { Annotation } from '@langchain/langgraph';
import { AIMessage } from '@langchain/core/messages';
import { isAIMessage } from '@langchain/core/messages';
import { ToolMessage } from '@langchain/core/messages';
import { isCommand } from '@langchain/langgraph';
import { CustomTools } from './tools';

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
  analyzeTestResultsEdges
} from './agents';

export const MainGraphRun = async () => {
  // Initialize memory to persist state between graph runs
  const checkpointer = new MemorySaver();
  const inMemoryStore = new InMemoryStore();

  const filename: string = core.getInput('file_name');
  const toolNames = CustomTools.map(tool => tool.name).join(', ');

  // Define the graph state with additional properties
  const GraphState = Annotation.Root({
    messages: Annotation<BaseMessage[]>({
      reducer: (x, y) => x.concat(y),
      default: () => []
    }),
    iteration: Annotation<number>({
      reducer: x => x,
      default: () => 0
    }),
    hasError: Annotation<boolean>({
      reducer: z => z,
      default: () => false
    }),
    fileName: Annotation<string>({
      reducer: z => z,
      default: () => ''
    }),
    testFileName: Annotation<string>({
      reducer: z => z,
      default: () => ''
    }),
    fileContent: Annotation<string>({
      reducer: z => z,
      default: () => ''
    }),
    filePath: Annotation<string>({
      reducer: z => z,
      default: () => ''
    }),
    testFileContent: Annotation<string>({
      reducer: z => z,
      default: () => ''
    }),
    testFilePath: Annotation<string>({
      reducer: z => z,
      default: () => ''
    }),
    testFileFound: Annotation<boolean>({
      reducer: z => z,
      default: () => false
    }),
    testResults: Annotation<any>({
      reducer: z => z,
      default: () => null
    }),
    testSummary: Annotation<any>({
      reducer: z => z,
      default: () => null
    })
  });

  type State = typeof GraphState.State;
  type Update = typeof GraphState.Update;

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
          const { messageValue, ...restResult } = result;
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
        return output;
      }
      // Tool invocation result is a ToolMessage, return a normal state update
      if (output.messages?.length) {
        return { messages: output.messages };
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
    } else if (state.fileName && state.filePath && !state.testFileFound) {
      return 'create-new-tests';
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
    .addNode('tools', toolExecutor)
    .addNode('find-test-file', checkTestFile)
    .addNode('create-new-tests', createNewTests)
    .addNode('analyze-existing-tests', analyzeExistingTests)
    .addNode('save-tests', saveTests)
    .addNode('run-tests', runTests)
    .addNode('analyze-results', analyzeTestResults)
    .addNode('fix-errors', fixErrors)

    // Add edges with fixed flow
    .addEdge('__start__', 'find-file')
    .addConditionalEdges('find-file', checkFileExistsEdges)
    .addConditionalEdges('find-test-file', checkTestFileEdges)
    .addConditionalEdges('create-new-tests', writeTestsEdges)
    .addConditionalEdges('analyze-existing-tests', analyzeExistingTestEdges)
    .addConditionalEdges('save-tests', saveTestsEdges) // Use new edge handler
    .addConditionalEdges('run-tests', runTestsEdges)
    .addConditionalEdges('analyze-results', analyzeTestResultsEdges)
    .addConditionalEdges('fix-errors', fixErrorsEdges)
    .addConditionalEdges('tools', callToolsEdge)
    .addEdge('analyze-results', '__end__');

  const app = workflow.compile({ checkpointer, store: inMemoryStore });
  console.log('app version', 'v0.1.52-alpha.5');

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
