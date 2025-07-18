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
  yarnTestAgent,
  finalResponseValidationAgent
} from './agents/supervisor-agents';
import { llm } from './llm';
import { GraphState } from './utils/state';

// Initialize memory to persist state between graph runs
const checkpointer = new MemorySaver();
const inMemoryStore = new InMemoryStore();

const workflow = createSupervisor({
  agents: [
    findExampleTestFileAgent,
    findFilesAgent,
    findPackageManagerFileAgent,
    createFileAgent,
    readFileAgent,
    writeFileAgent,
    finalResponseValidationAgent,
    npmTestAgent,
    yarnTestAgent
  ],
  llm: llm,
  prompt:
    'You are a team supervisor managing various file system experts and a test runner expert. ' +
    'This plan should involve individual tasks, that if executed correctly will yield the correct answer. Do not add any superfluous steps. ' +
    'For finding example test files in repository, use find_example_test_file_and_its_content. ' +
    'For finding package manager files and script commands, use find_package_manager_file. ' +
    'For finding files, use find_files. ' +
    'For creating files, use create_file. ' +
    'For reading files, use read_file. ' +
    'For writing files, use write_file. ' +
    'For running tests, use npm_test.' +
    'For validating final response, use final_response_validation_expert. ' +
    'For running nodejs scripts, use node_exec.',
  supervisorName: 'code_assistant_supervisor',
  outputMode: 'full_history',
  stateSchema: GraphState
});

export const graph = workflow.compile({ checkpointer, store: inMemoryStore });
