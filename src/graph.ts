import { StateGraph } from '@langchain/langgraph';
import { GraphState } from './state';
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
  callToolsEdge
} from './agents';
import { toolExecutor } from './tool-executor-utility';

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

export { workflow };
