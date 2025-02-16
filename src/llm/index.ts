import { ChatOpenAI } from '@langchain/openai';
import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { MemorySaver } from '@langchain/langgraph';
// import { ToolNode } from '@langchain/langgraph/prebuilt';
import { CustomTools } from '../tools';

const tools = [...CustomTools];

// Initialize memory to persist state between graph runs
const checkpointer = new MemorySaver();
// Define the tools for the agent to use
// const toolNode = new ToolNode(tools);

export function initializeLLM(modelName: string, tools: any[]) {
  const model = new ChatOpenAI({
    model: modelName,
    temperature: 0,
    verbose: false
  });

  // const toolNode = new ToolNode(tools);
  return model.bindTools(tools);
}

export function initializeReactAgent(modelName: string, tools: any[]) {
  const model = new ChatOpenAI({
    model: modelName,
    temperature: 0,
    verbose: false
  });

  // const toolNode = new ToolNode(tools);
  return createReactAgent({
    llm: model,
    tools: tools,
    checkpointSaver: checkpointer
  });
}

export const llm = new ChatOpenAI({
  model: 'gpt-4o',
  temperature: 0,
  verbose: false
}).bindTools(tools);
