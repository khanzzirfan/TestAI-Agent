import { MemorySaver, InMemoryStore, Command } from '@langchain/langgraph';
import { HumanMessage } from '@langchain/core/messages';
import { createReactAgent } from '@langchain/langgraph/prebuilt';
// import { createSupervisor } from '@langchain/langgraph-supervisor';
import {
  findFileTool,
  findTestFileTool,
  createFileTool,
  writeFileTool,
  readFileTool,
  NodeExecutorTool,
  testResultAnalyzerTools,
  npmTestTool,
  yarnTestTool,
  jsonDiffTool
} from './tools';
import { llm } from './llm';

// @ts-ignore
// const createSupervisor = require('@langchain/langgraph-supervisor').createSupervisor;

const tools = [
  findFileTool,
  findTestFileTool,
  createFileTool,
  writeFileTool,
  readFileTool,
  NodeExecutorTool,
  testResultAnalyzerTools
];

async function loadSupervisor() {
  const supervisor = await import('@langchain/langgraph-supervisor');
  return supervisor;
}

export const MainGraphRun = async ({
  fileName,
  recursionLimit,
  additionalPrompt,
  useDefaultPrompt
}: {
  fileName: string;
  recursionLimit: number;
  additionalPrompt: string;
  useDefaultPrompt: boolean;
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

  const nodeExecutorAgent = createReactAgent({
    llm: llm,
    tools: [NodeExecutorTool],
    name: 'node_expert',
    prompt: 'You are a nodejs execution expert. Please use the "node_exec" tool to run the nodejs script.'
  });

  const npmTestAgent = createReactAgent({
    llm: llm,
    tools: [npmTestTool],
    name: 'npm_test_expert',
    prompt: 'You are a test runner expert. Please use the "npm_test" tool to run the tests.'
  });

  const yarnTestAgent = createReactAgent({
    llm: llm,
    tools: [yarnTestTool],
    name: 'yarn_test_expert',
    prompt: 'You are a test runner expert. Please use the "yarn_test" tool to run the tests.'
  });

  const localiseTransformerAgent = createReactAgent({
    llm: llm,
    tools: [],
    name: 'localise_transformer',
    prompt:
      'You are a localisation expert without tools. Please use the knowledge built in you to transform the text to the desired language.'
  });

  const jsonDiffAgent = createReactAgent({
    llm: llm,
    tools: [jsonDiffTool],
    name: 'json_diff_expert',
    prompt: 'You are a json diff expert. Please use the "json_diff" tool to compare two json objects.'
  });

  // @ts-ignore
  const { createSupervisor } = await loadSupervisor();
  // @ts-ignore
  const workflow = createSupervisor({
    agents: [
      findFilesAgent,
      createFileAgent,
      readFileAgent,
      writeFileAgent,
      npmTestAgent,
      yarnTestAgent,
      nodeExecutorAgent,
      localiseTransformerAgent,
      jsonDiffAgent
    ],
    llm: llm,
    prompt:
      'You are a team supervisor managing a file system expert, a file creation expert, a file reading expert, a file writing expert, and a test runner expert. ' +
      'For finding files, use find_files. ' +
      'For creating files, use create_file. ' +
      'For reading files, use read_file. ' +
      'For writing files, use write_file. ' +
      'For running tests, use npm_test.' +
      'For running localisation, use localise_transformer.' +
      'For comparing json objects, use json_diff.' +
      'For running nodejs scripts, use node_exec.',
    supervisorName: 'code_assistant_supervisor',
    outputMode: 'full_history'
  });

  const app = workflow.compile({ checkpointer, store: inMemoryStore });
  console.log('app version', 'v0.1.54-alpha.10');

  const additionalPromptNotes = `
  Additional Notes: ${additionalPrompt}
  `;

  const prompt = `
  You are a coding assistant with expertise in test automation.
  You have been assigned with the following task:
  Generate and execute tests for ${filename}.

  Guidelines:
  1. Verify the source file exists
  2. Check for existing test file
  3. Improve existing tests or create new tests
  4. Save test file
  5. Run tests with coverage in silent mode
  6. Analyze test results and ignore warnings
  7. Fix any failures by ignoring warnings and re-run tests until all tests pass
  8. Provide final summary of the test results and coverage details in markdown format

  `;

  const finalPrompt = useDefaultPrompt ? `${prompt}\n${additionalPromptNotes}` : additionalPromptNotes;

  // Use the Runnable
  const currentDate = new Date().toISOString().replace('T', ' ').split('.')[0];
  const finalState = await app.invoke(
    {
      messages: [new HumanMessage(finalPrompt)]
    },
    { recursionLimit: recursionLimit || 200, configurable: { thread_id: 1001 } }
  );

  const resultOfGraph = finalState.messages[finalState.messages.length - 1].content as string;
  console.log('result of graph for a threadId:', currentDate);
  // console.log(resultOfGraph.messages.map((m) => m.content).join("\n"));
  console.log(resultOfGraph);
  return resultOfGraph;
};
