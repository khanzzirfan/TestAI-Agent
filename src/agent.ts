import type { AIMessage } from '@langchain/core/messages'
import { Runnable } from '@langchain/core/runnables'
import { TavilySearchResults } from '@langchain/community/tools/tavily_search'
import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage } from '@langchain/core/messages'
import type { RunnableConfig } from '@langchain/core/runnables'
import { BaseMessage } from '@langchain/core/messages'
import { Annotation } from '@langchain/langgraph'
import { MessagesAnnotation, StateGraph } from '@langchain/langgraph'
import { ToolNode } from '@langchain/langgraph/prebuilt'

const tools = [new TavilySearchResults({ maxResults: 3 })]

// This defines the object that is passed between each node
// in the graph. We will create different nodes for each agent and tool
const AgentState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y)
  }),
  sender: Annotation<string>({
    reducer: (x, y) => y ?? x ?? 'user',
    default: () => 'user'
  })
})

// Helper function to run a node for a given agent
async function runAgentNode(props: {
  state: typeof AgentState.State
  agent: Runnable
  name: string
  config?: RunnableConfig
}) {
  const { state, agent, name, config } = props
  let result = await agent.invoke(state, config)
  // We convert the agent output into a format that is suitable
  // to append to the global state
  if (!result?.tool_calls || result.tool_calls.length === 0) {
    // If the agent is NOT calling a tool, we want it to
    // look like a human message.
    result = new HumanMessage({ ...result, name: name })
  }
  return {
    messages: [result],
    // Since we have a strict workflow, we can
    // track the sender so we know who to pass to next.
    sender: name
  }
}

// Define the function that calls the model
async function callModel(state: typeof MessagesAnnotation.State) {
  /**
   * Call the LLM powering our agent.
   * Feel free to customize the prompt, model, and other logic!
   */
  const model = new ChatOpenAI({
    model: 'gpt-4o'
  }).bindTools(tools)

  const response = await model.invoke([
    {
      role: 'system',
      content: `You are a helpful assistant. The current date is ${new Date().getTime()}.`
    },
    ...state.messages
  ])

  // MessagesAnnotation supports returning a single message or array of messages
  return { messages: response }
}

// Define the function that determines whether to continue or not
function shouldContinue(state: typeof MessagesAnnotation.State) {
  const messages = state.messages
  const lastMessage: AIMessage = messages[messages.length - 1]
  // If the LLM is invoking tools, route there.
  if ((lastMessage?.tool_calls?.length ?? 0) > 0) {
    return 'tools'
  }
  // Otherwise end the graph.
  return '__end__'
}

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

// Finally, we compile it!
// This compiles it into a graph you can invoke and deploy.
export const graph = workflow.compile({
  // if you want to update the state before calling the tools
  // interruptBefore: [],
})
