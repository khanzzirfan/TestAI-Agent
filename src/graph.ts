import { MessagesAnnotation, StateGraph } from '@langchain/langgraph'
import {
  toolNode,
  GraphState,
  checkFileExistsEdges,
  checkFileExists,
  checkTestFile,
  checkTestFileEdges,
  createNewTests,
  readExistingTests,
  saveTests,
  writeTestsEdges,
  readExistingTestEdges,
  saveTestsEdges,
  runTests,
  runTestsEdges,
  fixErrors,
  fixErrorsEdges,
  toolExecutor,
  listFilesDirectory,
  listFilesDirectoryEdges
} from './nodes'

// Define a new graph.
// See https://langchain-ai.github.io/langgraphjs/how-tos/define-state/#getting-started for
// more on defining custom graph states.
// Create and compile the graph
const workflow = new StateGraph(GraphState)
  // Add nodes
  .addNode('list-files', listFilesDirectory)
  .addNode('tools-list-files', toolNode)
  .addNode('check-file', checkFileExists)
  .addNode('tools-check-file', toolExecutor)
  .addNode('check-test-file', checkTestFile)
  .addNode('tools-check-test-file', toolExecutor)
  .addNode('create-new-tests', createNewTests)
  .addNode('read-existing-tests', readExistingTests)
  .addNode('save-tests', saveTests)
  .addNode('tools-write-tests', toolExecutor)
  .addNode('run-tests', runTests)
  .addNode('tools-run-tests', toolExecutor)
  .addNode('fix-errors', fixErrors)
  .addNode('tools-fix-errors', toolExecutor)

  // Add edges with fixed flow
  .addEdge('__start__', 'list-files')
  .addConditionalEdges('list-files', listFilesDirectoryEdges)
  .addConditionalEdges('check-file', checkFileExistsEdges)
  .addConditionalEdges('check-test-file', checkTestFileEdges)
  .addConditionalEdges('create-new-tests', writeTestsEdges)
  .addConditionalEdges('read-existing-tests', readExistingTestEdges)
  .addConditionalEdges('save-tests', saveTestsEdges) // Use new edge handler
  .addConditionalEdges('tools-write-tests', saveTestsEdges) // Route back through save flow
  .addConditionalEdges('run-tests', runTestsEdges)
  .addConditionalEdges('fix-errors', fixErrorsEdges)
  .addConditionalEdges('tools-check-file', checkFileExistsEdges)
  .addConditionalEdges('tools-check-test-file', checkTestFileEdges)
  .addConditionalEdges('tools-run-tests', runTestsEdges)
  .addConditionalEdges('tools-fix-errors', fixErrorsEdges)
export { workflow }
