import type { AIMessage } from '@langchain/core/messages'
import { TavilySearchResults } from '@langchain/community/tools/tavily_search'
import { ChatOpenAI } from '@langchain/openai'

import { MessagesAnnotation, StateGraph } from '@langchain/langgraph'
import { ToolNode } from '@langchain/langgraph/prebuilt'
import { tools, callModel, shouldContinue } from './nodes'

// Define a new graph.
// See https://langchain-ai.github.io/langgraphjs/how-tos/define-state/#getting-started for
// more on defining custom graph states.
const workflow = new StateGraph(MessagesAnnotation)
  // Define the two nodes we will cycle between
  .addNode('callModel', callModel)
  .addNode('tools', new ToolNode(tools))
  // Set the entrypoint as `callModel`
  // This means that this node is the first one called
  .addEdge('__start__', 'callModel')
  .addConditionalEdges(
    // First, we define the edges' source node. We use `callModel`.
    // This means these are the edges taken after the `callModel` node is called.
    'callModel',
    // Next, we pass in the function that will determine the sink node(s), which
    // will be called after the source node is called.
    shouldContinue,
    // List of the possible destinations the conditional edge can route to.
    // Required for conditional edges to properly render the graph in Studio
    ['tools', '__end__']
  )
  // This means that after `tools` is called, `callModel` node is called next.
  .addEdge('tools', 'callModel')

export { workflow }
