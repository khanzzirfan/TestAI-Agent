import type { AIMessage } from '@langchain/core/messages'
import { TavilySearchResults } from '@langchain/community/tools/tavily_search'
import { ChatOpenAI } from '@langchain/openai'
import { MemorySaver } from '@langchain/langgraph'
import { BaseMessage, HumanMessage } from '@langchain/core/messages'

import { MessagesAnnotation, StateGraph } from '@langchain/langgraph'
import { ToolNode } from '@langchain/langgraph/prebuilt'
import { workflow } from './graph'

export const MainGraphRun = async () => {
  // Initialize memory to persist state between graph runs
  const checkpointer = new MemorySaver()
  // Finally, we compile it!
  // This compiles it into a LangChain Runnable,
  // meaning you can use it as you would any other runnable
  const app = workflow.compile({ checkpointer })

  const query = `Execute npm test command in the provided directory './appcode' and return the output.`

  // Use the Runnable
  const finalState = await app.invoke(
    {
      messages: [new HumanMessage(query)]
    },
    { recursionLimit: 15, configurable: { thread_id: '42' } }
  )

  console.log('result of graph')
  // console.log(resultOfGraph.messages.map((m) => m.content).join("\n"));
  const outputContent = finalState.messages.map(m => m.content).join('\n')
  console.log(outputContent)
}
