import { MemorySaver, InMemoryStore } from '@langchain/langgraph';
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
  npmTestTool,
  yarnTestTool,
  findPackageManagerFileTool,
  findExampleTestFileAndItsContent
} from './tools';
import { llm } from './llm';
import {
  testResultFormat,
  exampleTestFileAndItsContentFormat,
  createFileResponseFormat,
  writeFileResponseFormat,
  findFilesAndTestFilesResponseFormat
} from './structured_format';
import { GraphState } from './utils/state';
// @ts-ignore
// const createSupervisor = require('@langchain/langgraph-supervisor').createSupervisor;

// Initialize memory to persist state between graph runs
const checkpointer = new MemorySaver();
const inMemoryStore = new InMemoryStore();

// Create agents
const findFilesAgent = createReactAgent({
  llm: llm,
  tools: [findFileTool, findTestFileTool],
  name: 'find_files_expert',
  prompt:
    "You are directory search expert in finding files. Always use one  tool at a time. You can use the 'find_file' tool to search for a file or the 'find_test_file' tool to search for a test file. Please specify the file name you are looking for.",
  stateSchema: GraphState,
  responseFormat: findFilesAndTestFilesResponseFormat
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
  tools: [createFileTool],
  name: 'create_file_expert',
  responseFormat: createFileResponseFormat,
  prompt: 'You are a file creation expert. Please specify the name of the file you would like to create.',
  stateSchema: GraphState
});

const readFileAgent = createReactAgent({
  llm: llm,
  tools: [readFileTool],
  name: 'read_file_expert',
  prompt: 'You are a file reading expert. Please specify the name of the file you would like to read.',
  stateSchema: GraphState
});

const writeFileAgent = createReactAgent({
  llm: llm,
  tools: [writeFileTool],
  name: 'write_file_expert',
  responseFormat: writeFileResponseFormat,
  prompt: 'You are a file writing expert. Please specify the name of the file you would like to write to.',
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
  tools: [npmTestTool],
  name: 'npm_test_expert',
  prompt: 'You are a test runner expert. Please use the "npm_test" tool to run the tests from root directory path.',
  responseFormat: testResultFormat,
  stateSchema: GraphState
});

const yarnTestAgent = createReactAgent({
  llm: llm,
  tools: [yarnTestTool],
  name: 'yarn_test_expert',
  prompt: 'You are a test runner expert. Please use the "yarn_test" tool to run the tests.',
  responseFormat: testResultFormat,
  stateSchema: GraphState
});

const workflow = createSupervisor({
  agents: [
    findFilesAgent,
    findExampleTestFileAgent,
    findPackageManagerFileAgent,
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
    'For finding package manager files and script commands, use find_package_manager_file. ' +
    'For creating files, use create_file. ' +
    'For reading files, use read_file. ' +
    'For writing files, use write_file. ' +
    'For running tests, use npm_test.' +
    'For running nodejs scripts, use node_exec.',
  supervisorName: 'code_assistant_supervisor',
  outputMode: 'full_history',
  stateSchema: GraphState
});

export const graph = workflow.compile({ checkpointer, store: inMemoryStore });
