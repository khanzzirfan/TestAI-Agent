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

  const query = `Write and Execute jest unit test cases for ${filename} file.
  Guidelines:
    - All the code is written in Typescript.
    - List all the files in the src directory to find the ${filename} file.
    - Read the ${filename} file content at right location in the project directory before writing tests.
    - Read the corresponding ${filename}.test.tsx or ${filename}.spec.tsx file content to understand the existing tests.
    - Make sure tests are passing by executing tests and coverage is generated in json format.
  `
  // Use the Runnable
  const finalState = await app.invoke(
    {
      messages: [new HumanMessage(query)]
    },
    { recursionLimit: 100, configurable: { thread_id: '42' } }
  )

  console.log('result of graph')
  // console.log(resultOfGraph.messages.map((m) => m.content).join("\n"));
  const outputContent = finalState.messages.map(m => m.content).join('\n')
  console.log(outputContent)
}
