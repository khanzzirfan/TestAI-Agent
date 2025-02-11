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
  analyzeTestResultsEdges
} from './agents';
import { toolExecutor } from './tool-executor-utility';


// Create and compile the graph
const workflow = new StateGraph(GraphState)
  // Add nodes
  .addNode('find-file', checkFileExists)
  .addNode('tools-find-file', toolExecutor)
  .addNode('find-test-file', checkTestFile)
  .addNode('tools-find-test-file', toolExecutor)
  .addNode('create-new-tests', createNewTests)
  .addNode('analyze-existing-tests', analyzeExistingTests)
  .addNode('save-tests', saveTests)
  .addNode('tools-write-tests', toolExecutor)
  .addNode('run-tests', runTests)
  .addNode('tools-run-tests', toolExecutor)
  .addNode('analyze-results', analyzeTestResults)
  .addNode('fix-errors', fixErrors)
  .addNode('tools-fix-errors', toolExecutor)
  .addNode('tools-examine-test-results', toolExecutor)
  .addNode('tools-create-new-tests', toolExecutor)

  // Add edges with fixed flow
  .addEdge('__start__', 'find-file')
  .addConditionalEdges('find-file', checkFileExistsEdges)
  .addConditionalEdges('find-test-file', checkTestFileEdges)
  .addConditionalEdges('create-new-tests', writeTestsEdges)
  .addConditionalEdges('analyze-existing-tests', analyzeExistingTestEdges)
  .addConditionalEdges('save-tests', saveTestsEdges) // Use new edge handler
  .addConditionalEdges('tools-write-tests', saveTestsEdges) // Route back through save flow
  .addConditionalEdges('run-tests', runTestsEdges)
  .addConditionalEdges('analyze-results', analyzeTestResultsEdges)
  .addConditionalEdges('fix-errors', fixErrorsEdges)
  .addConditionalEdges('tools-find-file', checkFileExistsEdges)
  .addConditionalEdges('tools-find-test-file', checkTestFileEdges)
  .addConditionalEdges('tools-run-tests', runTestsEdges)
  .addConditionalEdges('tools-fix-errors', fixErrorsEdges)
  .addConditionalEdges('tools-create-new-tests', writeTestsEdges)
  .addConditionalEdges('tools-examine-test-results', analyzeTestResultsEdges)
  .addEdge('run-tests', '__end__');

export { workflow };
