import { createReactAgent } from '@langchain/langgraph/prebuilt';
import {
  findFileTool,
  findTestFileTool,
  createFileTool,
  writeFileTool,
  readFileTool,
  npmTestTool,
  yarnTestTool,
  findPackageManagerFileTool,
  findExampleTestFileAndItsContent,
  // Transfer tools
  transferToNpmTestTool,
  transferToWriteFileTool,
  transferToReadFileTool,
  transferToCreateFileTool,
  transferToFindFilesTool,
  transferToRePlanningTool
} from '../tools';
import { llm } from '../llm';
import { testResultFormat, exampleTestFileAndItsContentFormat, planResponseObject } from '../structured_format';
import { GraphState } from '../utils/state';

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
  tools: [findExampleTestFileAndItsContent, transferToFindFilesTool],
  name: 'find_example_test_file_expert',
  prompt:
    'You are an example test file search expert in the repository.' +
    "You can use the 'find_example_test_file_and_its_content' tool to search for example test files in the project directory. " +
    'The example test files will be used for observation and learning. ' +
    'The example test files will be used to improve the existing tests or create new tests.' +
    'If you need to transfer to another tool, use the "transferToFindFilesTool" tool.',
  responseFormat: exampleTestFileAndItsContentFormat,
  stateSchema: GraphState
});

// find package manager file
const findPackageManagerFileAgent = createReactAgent({
  llm: llm,
  tools: [findPackageManagerFileTool, transferToNpmTestTool],
  name: 'find_package_manager_file_expert',
  prompt:
    'You are a package manager file search expert. Please specify the package manager file you would like to find. ' +
    "You can use the 'find_package_manager_file' tool to search for a package manager file. " +
    "The package manager is 'package.json' " +
    "if you need to transfer to another tool, use the 'transferToNpmTestTool' tool.",
  stateSchema: GraphState
});

const createFileAgent = createReactAgent({
  llm: llm,
  tools: [createFileTool, transferToNpmTestTool],
  name: 'create_file_expert',
  prompt: `
          You are a file creation expert.
          The source file path is: {state.filePath}
          The existing tests in the repo and their content is \n {state.exampleTestFiles} \n
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

const npmTestAgent = createReactAgent({
  llm: llm,
  tools: [npmTestTool, transferToWriteFileTool, transferToReadFileTool, transferToCreateFileTool],
  name: 'npm_test_expert',
  prompt: `You are a test runner expert. Your task is to execute all relevant tests in the project using the "npm_test" tool from the root directory.
    Only run tests that are relevant to the source file.
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

const masterPlanningAgent = createReactAgent({
  llm: llm,
  tools: [transferToFindFilesTool, transferToWriteFileTool, transferToReadFileTool, transferToCreateFileTool],
  name: 'master_planning_expert',
  prompt: `You are a master planning expert. Your task is to plan the execution of the agents in the workflow.
    You will use the state values to determine the correct order of execution.
    You will use the 'find_files_expert' to find files, 'find_example_test_file_expert' to find example test files, 'find_package_manager_file_expert' to find package manager files,
    'create_file_expert' to create files, 'read_file_expert' to read files, 'write_file_expert' to write files, 'npm_test_expert' to run npm tests, and 'yarn_test_expert' to run yarn tests.
    If you need to transfer to another tool, use the 'transferToNpmTestTool', 'transferToWriteFileTool', 'transferToReadFileTool', or 'transferToCreateFileTool' tools.
    `,
  responseFormat: planResponseObject,
  stateSchema: GraphState
});

const replanningAgent = createReactAgent({
  llm: llm,
  tools: [npmTestTool, transferToWriteFileTool, transferToReadFileTool, transferToCreateFileTool],
  name: 'replanning_expert',
  prompt: `You are a replanning expert. Your task is to replan the execution of the agents in the workflow.
    You will use the state values to determine the correct order of execution.
    You will use the 'find_files_expert' to find files, 
    'find_example_test_file_expert' to find example test files, 
    'find_package_manager_file_expert' to find package manager files,
    'create_file_expert' to create files, 
    'read_file_expert' to read files, 
    'write_file_expert' to write files, 
    'npm_test_expert' to run npm tests, 
    and 'yarn_test_expert' to run yarn tests.
    If you need to transfer to another tool, use the 'transferToNpmTestTool', 'transferToWriteFileTool', 'transferToReadFileTool', or 'transferToCreateFileTool' tools.
    plannedSteps: {state.plan} \n
    pastSteps: {state.pastSteps} \n
    `,
  responseFormat: planResponseObject,
  stateSchema: GraphState
});

const finalResponseValidationAgent = createReactAgent({
  llm: llm,
  tools: [npmTestTool, transferToWriteFileTool, transferToReadFileTool, transferToCreateFileTool],
  name: 'final_response_validation_expert',
  prompt: `You are a final response validation expert. Your task is to validate the final response of the workflow.
    You will use the state values to determine the correctness of the final response.
    You will check if the final response contains the correct information about the source file, test file, and test results.
    If the final response is not correct, you will replan the execution of the agents in the workflow.
    If you need to transfer to another tool, use the 'transferToRePlanningTool', 'transferToNpmTestTool', 'transferToWriteFileTool', 'transferToReadFileTool', or 'transferToCreateFileTool' tools.
    state results: 
    testResults: {state.testResults} \n
    testSummary: {state.testSummary} \n
    finalComments: {state.finalComments} \n
    hasError: {state.hasError} \n
    `,
  stateSchema: GraphState
});

export {
  findFilesAgent,
  findExampleTestFileAgent,
  findPackageManagerFileAgent,
  createFileAgent,
  readFileAgent,
  writeFileAgent,
  npmTestAgent,
  yarnTestAgent,
  finalResponseValidationAgent
};
