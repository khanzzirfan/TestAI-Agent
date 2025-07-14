import { MemorySaver, InMemoryStore } from '@langchain/langgraph';
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
  npmTestTool,
  yarnTestTool,
  findPackageManagerFileTool,
  findExampleTestFileAndItsContent,
  // Transfer tools
  transferToNpmTestTool,
  transferToWriteFileTool,
  transferToReadFileTool,
  transferToCreateFileTool
} from './tools';
import { llm } from './llm';
import {
  testResultFormat,
  exampleTestFileAndItsContentFormat,
  findFilesAndTestFilesResponseFormat
} from './structured_format';
import { GraphState } from './utils/state';
// @ts-ignore
// const createSupervisor = require('@langchain/langgraph-supervisor').createSupervisor;

async function loadSupervisor() {
  const supervisor = await import('@langchain/langgraph-supervisor');
  return supervisor;
}

export const MainGraphRun = async ({
  fileName,
  recursionLimit = 25,
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
      "You are directory search expert in finding files. Always use one  tool at a time. You can use the 'find_file' tool to search for a file or the 'find_test_file' tool to search for a test file. Please specify the file name you are looking for.",
    stateSchema: GraphState
  });

  // find example test files
  const findExampleTestFileAgent = createReactAgent({
    llm: llm,
    tools: [findExampleTestFileAndItsContent],
    name: 'find_example_test_file_expert',
    prompt:
      'You are an example test file search expert. Please specify the reason for finding example test files. ' +
      "You can use the 'find_example_test_file_and_its_content' tool to search for example test files in the project directory. " +
      'The example test files will be used for observation and learning. ' +
      'The example test files will be used to improve the existing tests or create new tests.',
    responseFormat: exampleTestFileAndItsContentFormat,
    stateSchema: GraphState
  });

  // find package manager file
  const findPackageManagerFileAgent = createReactAgent({
    llm: llm,
    tools: [findPackageManagerFileTool],
    name: 'find_package_manager_file_expert',
    prompt:
      'You are a package manager file search expert. Please specify the package manager file you would like to find. ' +
      "You can use the 'find_package_manager_file' tool to search for a package manager file. " +
      "The package manager is 'package.json' ",
    stateSchema: GraphState
  });

  const createFileAgent = createReactAgent({
    llm: llm,
    tools: [createFileTool, transferToNpmTestTool],
    name: 'create_file_expert',
    prompt: `
          You are a file creation expert.
          The source file path is: {state.filePath}
          The example test content is {state.exampleTestFiles}
          When creating a file, use these state values to determine the correct absolute path.
          Do NOT use placeholders or random paths.
          If you need to transfer to another tool, use the 'transferToNpmTestTool' tool.
            `.trim(),
    stateSchema: GraphState
  });

  const readFileAgent = createReactAgent({
    llm: llm,
    tools: [readFileTool, transferToNpmTestTool],
    name: 'read_file_expert',
    prompt: `You are a file reading expert. Please specify the name of the file you would like to read.
    If you need to transfer to another tool, use the 'transferToNpmTestTool' tool.
    `,
    stateSchema: GraphState
  });

  const writeFileAgent = createReactAgent({
    llm: llm,
    tools: [writeFileTool, transferToNpmTestTool],
    name: 'write_file_expert',
    prompt: `You are a file writing expert. Please specify the name of the file you would like to write to.
    If you need to transfer to another tool, use the 'transferToNpmTestTool' tool.
    `,
    stateSchema: GraphState
  });

  const nodeExecutorAgent = createReactAgent({
    llm: llm,
    tools: [NodeExecutorTool],
    name: 'node_expert',
    prompt: 'You are a nodejs execution expert. Please use the "node_exec" tool to run the nodejs script.',
    stateSchema: GraphState
  });

  const npmTestAgent = createReactAgent({
    llm: llm,
    tools: [npmTestTool, transferToWriteFileTool, transferToReadFileTool, transferToCreateFileTool],
    name: 'npm_test_expert',
    prompt: `You are a test runner expert. Your task is to execute all relevant tests in the project using the "npm_test" tool from the root directory.
    Use the provided testRegex to accurately match and select test files.
    If you need to transfer to another tool, use the 'transferToWriteFileTool', 'transferToReadFileTool', or 'transferToCreateFileTool' tools.
    `,
    responseFormat: testResultFormat,
    stateSchema: GraphState
  });

  const yarnTestAgent = createReactAgent({
    llm: llm,
    tools: [yarnTestTool, transferToWriteFileTool, transferToReadFileTool, transferToCreateFileTool],
    name: 'yarn_test_expert',
    prompt: `You are a test runner expert. Please use the "yarn_test" tool to run the tests.
    If you need to transfer to another tool, use the 'transferToWriteFileTool', 'transferToReadFileTool', or 'transferToCreateFileTool' tools.
    `,
    responseFormat: testResultFormat,
    stateSchema: GraphState
  });

  // @ts-ignore
  const { createSupervisor } = await loadSupervisor();
  // @ts-ignore
  const workflow = createSupervisor({
    agents: [
      findFilesAgent,
      findExampleTestFileAgent,
      createFileAgent,
      readFileAgent,
      writeFileAgent,
      npmTestAgent,
      yarnTestAgent,
      nodeExecutorAgent
    ],
    llm: llm,
    prompt:
      'You are a team supervisor managing a file system expert, a file creation expert, a file reading expert, a file writing expert, and a test runner expert. ' +
      'For finding files, use find_files. ' +
      'For finding example test files, use find_example_test_file_and_its_content. ' +
      'For creating files, use create_file. ' +
      'For reading files, use read_file. ' +
      'For writing files, use write_file. ' +
      'For updating files, use write_file. ' +
      'For modifying files, use write_file. ' +
      'For running tests, use npm_test.' +
      'For running nodejs scripts, use node_exec.',
    supervisorName: 'code_assistant_supervisor',
    outputMode: 'full_history',
    stateSchema: GraphState
  });

  const app = workflow.compile({ checkpointer, store: inMemoryStore });
  console.log('app version', 'v0.1.60-alpha.01');

  const additionalPromptNotes = `
  Additional Notes: ${additionalPrompt}
  `;

  const prompt = `
  You are a coding assistant with expertise in test automation.
  You have been assigned with the following task:
  Generate and execute tests for ${filename}.

  Guidelines:
  1. Find example test files in the project directory for learning and observation.
  2. Verify the given source file exists.
  3. Verify the corresponding test file exists for the source file.
  4. If the test file does not exist, create a new test file and write the test content.
  5. If the test file exists, improve existing tests or create new tests for the source file.
  6. Run the test for source file with coverage enabled in silent mode and json output. Test Coverage should be collected for the source file only.
  7. Fix any failures by ignoring warnings. If component missing statements or imports, add them to the test file and update the file using correct tool call.
  8. Run the tests again to ensure they pass and coverage is collected. 
  9. Provide final summary of the test results and coverage details in markdown format.
  `;

  const finalPrompt = useDefaultPrompt ? `${prompt}\n${additionalPromptNotes}` : additionalPromptNotes;
  const uniqueGuid = Math.random().toString(36).substring(2, 15);
  // Use the Runnable
  const currentDate = new Date().toISOString().replace('T', ' ').split('.')[0];
  const finalState = await app.invoke(
    {
      messages: [new HumanMessage(finalPrompt)]
    },
    { recursionLimit: recursionLimit || 200, configurable: { thread_id: uniqueGuid } }
  );

  const resultOfGraph = finalState.messages[finalState.messages.length - 1].content as string;
  console.log('result of graph for a threadId:', currentDate);
  // console.log(resultOfGraph.messages.map((m) => m.content).join("\n"));
  console.log(resultOfGraph);
  return resultOfGraph;
};
