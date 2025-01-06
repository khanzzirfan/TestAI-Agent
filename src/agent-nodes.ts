import type { AIMessage } from '@langchain/core/messages'
import { Runnable } from '@langchain/core/runnables'
import { END, Annotation } from '@langchain/langgraph'
import { TavilySearchResults } from '@langchain/community/tools/tavily_search'
import { ChatOpenAI } from '@langchain/openai'
import type { RunnableConfig } from '@langchain/core/runnables'
import {
  HumanMessage,
  BaseMessage,
  SystemMessage
} from '@langchain/core/messages'
import { MessagesAnnotation, StateGraph } from '@langchain/langgraph'
import { ToolNode } from '@langchain/langgraph/prebuilt'
import { createAgent } from './agent-utility'
import { createReactAgent } from '@langchain/langgraph/prebuilt'
const tools = [new TavilySearchResults({ maxResults: 3 })]
const tavilyTool = new TavilySearchResults({ maxResults: 3 })

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

/** Experimental */
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

const llm = new ChatOpenAI({ modelName: 'gpt-4o' })

// Research agent and node
const researchAgent = createReactAgent({
  llm,
  tools: [tavilyTool],
  stateModifier: new SystemMessage(
    'You are a web researcher. You may use the Tavily search engine to search the web for' +
      ' important information, so the Chart Generator in your team can make useful plots.'
  )
})

async function researchNode(
  state: typeof AgentState.State,
  config?: RunnableConfig
) {
  return runAgentNode({
    state: state,
    agent: researchAgent,
    name: 'Researcher',
    config
  })
}

// Chart Generator
const chartAgent = createReactAgent({
  llm,
  tools: [tavilyTool],
  stateModifier: new SystemMessage(
    'You are a web researcher. You may use the Tavily search engine to search the web for' +
      ' important information, so the Chart Generator in your team can make useful plots.'
  )
})

async function chartNode(state: typeof AgentState.State) {
  return runAgentNode({
    state: state,
    agent: chartAgent,
    name: 'ChartGenerator'
  })
}
