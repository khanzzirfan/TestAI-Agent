import type { AIMessage } from '@langchain/core/messages'
import { TavilySearchResults } from '@langchain/community/tools/tavily_search'
import { ChatOpenAI } from '@langchain/openai'
import { MemorySaver } from '@langchain/langgraph'
import { BaseMessage, HumanMessage } from '@langchain/core/messages'

import { MessagesAnnotation, StateGraph } from '@langchain/langgraph'
import { ToolNode } from '@langchain/langgraph/prebuilt'
import { workflow } from './graph'
import * as core from '@actions/core'

export const MainGraphRun = async () => {
  // Initialize memory to persist state between graph runs
  const checkpointer = new MemorySaver()
  const filename: string = core.getInput('file_name')

  // Finally, we compile it!
  // This compiles it into a LangChain Runnable,
  // meaning you can use it as you would any other runnable
  const app = workflow.compile({ checkpointer })

  const query = `Generate and execute tests for ${filename}.
  Steps:
  1. Verify the source file exists
  2. Check for existing test file
  3. Create or improve tests
  4. Save test file
  5. Run tests with coverage
  6. Fix any failures`

  // Use the Runnable
  const finalState = await app.invoke(
    {
      messages: [new HumanMessage(query)],
      fileName: filename
    },
    { recursionLimit: 100, configurable: { thread_id: '49' } }
  )

  console.log('result of graph')
  // console.log(resultOfGraph.messages.map((m) => m.content).join("\n"));
  const outputContent = finalState.messages.map(m => m.content).join('\n')
  console.log(outputContent)
}
