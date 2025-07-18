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
  masterPlanningAgent,
  replanningAgent,
  finalResponseValidationAgent
} from './agents/supervisor-agents';
import { llm } from './llm';
import { GraphState } from './utils/state';

// Initialize memory to persist state between graph runs
const checkpointer = new MemorySaver();
const inMemoryStore = new InMemoryStore();

const workflow = createSupervisor({
  agents: [
    masterPlanningAgent,
    replanningAgent,
    finalResponseValidationAgent,
    findExampleTestFileAgent,
    findFilesAgent,
    findPackageManagerFileAgent,
    createFileAgent,
    readFileAgent,
    writeFileAgent,
    npmTestAgent,
    yarnTestAgent
  ],
  llm: llm,
  prompt:
    'You are a team supervisor managing various file system experts and a test runner expert. ' +
    'For the given objective, come up with a simple step by step plan. ' +
    'This plan should involve individual tasks, that if executed correctly will yield the correct answer. Do not add any superfluous steps. ' +
    'The result of the final step should be the final answer. Make sure that each step has all the information needed - do not skip steps.' +
    'For planning, use master_planning_expert. ' +
    'For replanning, use replanning_expert. ' +
    'For validating final response, use final_response_validation_expert. ' +
    'For finding example test files in repository, use find_example_test_file_and_its_content. ' +
    'For finding package manager files and script commands, use find_package_manager_file. ' +
    'For finding files, use find_files. ' +
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
