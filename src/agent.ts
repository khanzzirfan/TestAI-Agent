import { MemorySaver, InMemoryStore } from '@langchain/langgraph';
import { createSupervisor } from '@langchain/langgraph-supervisor';
import {
  findFilesAgent,
  findExampleTestFileAgent,
  findPackageManagerFileAgent,
  createFileAgent,
  readFileAgent,
  writeFileAgent,
  npmTestAgent,
  yarnTestAgent
} from './agents/supervisor-agents';
import { llm } from './llm';
import { GraphState } from './utils/state';

// Initialize memory to persist state between graph runs
const checkpointer = new MemorySaver();
const inMemoryStore = new InMemoryStore();

const workflow = createSupervisor({
  agents: [
    findFilesAgent,
    findExampleTestFileAgent,
    findPackageManagerFileAgent,
    createFileAgent,
    readFileAgent,
    writeFileAgent,
    npmTestAgent,
    yarnTestAgent
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
