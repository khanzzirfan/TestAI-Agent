import { MemorySaver, InMemoryStore, Command } from '@langchain/langgraph';
import { HumanMessage } from '@langchain/core/messages';
import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { createSupervisor } from '@langchain/langgraph-supervisor';
import {
  findFileTool,
  findTestFileTool,
  createFileTool,
  writeFileTool,
  readFileTool,
  NodeExecutorTool,
  testResultAnalyzerTools
} from './tools';
import { GraphState, State, Update } from './state';
import { llm } from './llm';

const tools = [
  findFileTool,
  findTestFileTool,
  createFileTool,
  writeFileTool,
  readFileTool,
  NodeExecutorTool,
  testResultAnalyzerTools
];

const toolMap = new Map(tools.map(tool => [tool.name, tool]));

export const MainGraphRun = async ({
  fileName,
  recursionLimit,
  additionalPrompt
}: {
  fileName: string;
  recursionLimit: number;
  additionalPrompt: string;
}): Promise<string> => {
  // Initialize memory to persist state between graph runs
  const checkpointer = new MemorySaver();
  const inMemoryStore = new InMemoryStore();

  const filename: string = fileName;

  // Create agents
  const findFilesAgent = createReactAgent({
    llm: llm,
    tools: [findFileTool, findTestFileTool],
    name: 'find_files_expert',
    prompt:
      "You are directory search expert in finding files. Always use one  tool at a time. You can use the 'find_file' tool to search for a file or the 'find_test_file' tool to search for a test file. Please specify the file name you are looking for."
  });

  const createFileAgent = createReactAgent({
    llm: llm,
    tools: [createFileTool],
    name: 'create_file_expert',
    prompt: 'You are a file creation expert. Please specify the name of the file you would like to create.'
  });

  const readFileAgent = createReactAgent({
    llm: llm,
    tools: [readFileTool],
    name: 'read_file_expert',
    prompt: 'You are a file reading expert. Please specify the name of the file you would like to read.'
  });

  const writeFileAgent = createReactAgent({
    llm: llm,
    tools: [writeFileTool],
    name: 'write_file_expert',
    prompt: 'You are a file writing expert. Please specify the name of the file you would like to write to.'
  });

  const npmTestAgent = createReactAgent({
    llm: llm,
    tools: [NodeExecutorTool],
    name: 'npm_expert',
    prompt: 'You are a nodejs execution expert. Please specify the name of the test file you would like to run.'
  });

  const workflow = createSupervisor({
    agents: [findFilesAgent, createFileAgent, readFileAgent, writeFileAgent, npmTestAgent],
    llm: llm,
    prompt:
      'You are a team supervisor managing a file system expert, a file creation expert, a file reading expert, a file writing expert, and a test runner expert. ' +
      'For finding files, use find_files. ' +
      'For creating files, use create_file. ' +
      'For reading files, use read_file. ' +
      'For writing files, use write_file. ' +
      'For running tests, use npm_exec.',
    supervisorName: 'code_assistant_supervisor',
    outputMode: 'full_history'
  });

  const app = workflow.compile({ checkpointer, store: inMemoryStore });
  console.log('app version', 'v0.1.54-alpha.10');

  const additionalPromptNotes = `
  Additional Notes: ${additionalPrompt}
  `;

  const query = `
  You are a coding assistant with expertise in test automation.
  You have been assigned with the following task:
  Generate and execute tests for ${filename}.

  Guidelines:
  1. Verify the source file exists
  2. Check for existing test file
  3. Improve existing tests or create new tests
  4. Save test file
  5. Run tests with coverage
  6. Fix any failures
  7. Analyze test results
  8. Provide final notes

  ${additionalPrompt ? additionalPromptNotes : ''}

  `;

  // Use the Runnable
  const currentDate = new Date().toISOString().replace('T', ' ').split('.')[0];
  const finalState = await app.invoke(
    {
      messages: [new HumanMessage(query)]
    },
    { recursionLimit: recursionLimit || 200, configurable: { thread_id: 1001 } }
  );

  const resultOfGraph = finalState.messages[finalState.messages.length - 1].content as string;
  console.log('result of graph for a threadId:', currentDate);
  // console.log(resultOfGraph.messages.map((m) => m.content).join("\n"));
  console.log(resultOfGraph);
  return resultOfGraph;
};
