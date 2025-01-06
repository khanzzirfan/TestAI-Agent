import { MessagesAnnotation, StateGraph } from '@langchain/langgraph'
import {
  toolNode,
  GraphState,
  reviewAndFixErrors,
  addTests,
  runTests,
  listFilesDirectory,
  listFilesDirectoryEdges,
  addTestEdges,
  runTestsEdges,
  toolReviewAndFixErrorsEdges
} from './nodes'

// Define a new graph.
// See https://langchain-ai.github.io/langgraphjs/how-tos/define-state/#getting-started for
// more on defining custom graph states.
const workflow = new StateGraph(GraphState)
  .addNode('list-files', listFilesDirectory)
  .addNode('tools-list-files', toolNode)
  .addNode('tools', toolNode)
  .addNode('add-tests', addTests)
  .addNode('tools-add-tests', toolNode)
  .addNode('run-tests', runTests)
  .addNode('tools-run-tests', toolNode)
  .addNode('review-and-fix-errors', reviewAndFixErrors)
  .addNode('tools-review-and-fix-errors', toolNode)
  .addEdge('__start__', 'list-files')
  .addConditionalEdges('list-files', listFilesDirectoryEdges)
  .addConditionalEdges('add-tests', addTestEdges)
  .addConditionalEdges('run-tests', runTestsEdges)
  .addConditionalEdges('tools-list-files', listFilesDirectoryEdges)
  .addConditionalEdges('tools-run-tests', runTestsEdges)
  .addConditionalEdges('tools-add-tests', addTestEdges)
  .addConditionalEdges('review-and-fix-errors', toolReviewAndFixErrorsEdges)
  .addConditionalEdges(
    'tools-review-and-fix-errors',
    toolReviewAndFixErrorsEdges
  )
  .addEdge('run-tests', '__end__')

export { workflow }
