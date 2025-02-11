import { TavilySearchResults } from '@langchain/community/tools/tavily_search';
import { ChatOpenAI } from '@langchain/openai';

import { ToolNode } from '@langchain/langgraph/prebuilt';
import { CustomTools } from '../tools';

const tools = [new TavilySearchResults({ maxResults: 3 }), ...CustomTools];

// Define the tools for the agent to use
const toolNode = new ToolNode(tools);

export const llm = new ChatOpenAI({
  model: 'gpt-4o',
  temperature: 0,
  verbose: true
}).bindTools(tools);
