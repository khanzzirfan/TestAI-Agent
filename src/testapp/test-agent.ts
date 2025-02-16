import { HumanMessage, AIMessage } from '@langchain/core/messages';
import { ToolNode } from '@langchain/langgraph/prebuilt';
import { StateGraph, MessagesAnnotation, START, END } from '@langchain/langgraph';
import dotenv from 'dotenv';
import { testSearch } from '../tools/testing-tools';
import { initializeLLM } from '../llm';
import { Annotation } from '@langchain/langgraph';
import { BaseMessage } from '@langchain/core/messages';

dotenv.config();

const AgentState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y)
  })
});

// Define the tools for the agent to use
const tools = [testSearch];
const toolNode = new ToolNode<typeof AgentState.State>([testSearch]);

// Initialize the LLM
const model = initializeLLM('gpt-4o', tools);

// Define the function that determines whether to continue or not
function shouldContinue({ messages }: typeof MessagesAnnotation.State) {
  const lastMessage = messages[messages.length - 1] as AIMessage;
  // If the LLM makes a tool call, then we route to the "tools" node
  if (lastMessage.tool_calls?.length) {
    return 'tools';
  }
  // Otherwise, we stop (reply to the user) using the special "__end__" node
  return '__end__';
}

// Define the function that calls the model
async function callModel(state: typeof MessagesAnnotation.State) {
  const response = await model.invoke(state.messages);
  // We return a list, because this will get added to the existing list
  return { messages: [response] };
}

export const appWorkflowRun = async () => {
  // Define a new graph
  const workflow = new StateGraph(MessagesAnnotation)
    .addNode('agent', callModel)
    .addEdge(START, 'agent') // __start__ is a special name for the entrypoint
    .addNode('tools', toolNode)
    .addEdge('tools', 'agent')
    .addConditionalEdges('agent', shouldContinue, ['tools', END]);

  // Finally, we compile it into a LangChain Runnable.
  const app = workflow.compile();

  // Use the agent
  const finalState = await app.invoke({
    messages: [new HumanMessage('what is the weather in sf')]
  });

  const nextState = await app.invoke({
    // Including the messages from the previous run gives the LLM context.
    // This way it knows we're asking about the weather in NY
    messages: [...finalState.messages, new HumanMessage('what about ny')]
  });
  // console.log(nextState.messages[nextState.messages.length - 1].content);
  const messages = nextState.messages.map((m: any) => m.content);
  return messages;
};
