import { HumanMessage, AIMessage, ToolMessage } from '@langchain/core/messages';
import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { MemorySaver } from '@langchain/langgraph';
import { ToolNode } from '@langchain/langgraph/prebuilt';
import { StateGraph, MessagesAnnotation, START, END } from '@langchain/langgraph';
import dotenv from 'dotenv';
import {
  testSearch,
  getCoolestCities,
  getCityBeaches,
  getCityMonuments,
  getCityLibraries,
  getCityRestaurants,
  getCityZipCodes
} from '../tools/testing-tools';
import { initializeLLM } from '../llm';
import { Annotation } from '@langchain/langgraph';
import { BaseMessage } from '@langchain/core/messages';
import { isCommand, Command } from '@langchain/langgraph';
import { tool } from '@langchain/core/tools';
import { isAIMessage } from '@langchain/core/messages';

dotenv.config();

const AgentState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y)
  }),
  hasCity: Annotation<boolean>(),
  hasCityBeaches: Annotation<boolean>(),
  hasCityMonuments: Annotation<boolean>(),
  hasCityLibraries: Annotation<boolean>(),
  hasCityRestaurants: Annotation<boolean>(),
  hasCityZipCodes: Annotation<boolean>()
});

export type State = typeof AgentState.State;
export type Update = typeof AgentState.Update;

// Define the tools for the agent to use
const tools = [
  testSearch,
  getCoolestCities,
  getCityBeaches,
  getCityMonuments,
  getCityLibraries,
  getCityRestaurants,
  getCityZipCodes
];

const toolMap = new Map(tools.map(tool => [tool.name, tool]));
// Initialize the LLM
const model = initializeLLM('gpt-4o', tools);

const toolExecutor = async (state: State) => {
  const message = state.messages.at(-1);
  if (
    message === undefined ||
    !isAIMessage(message) ||
    message.tool_calls === undefined ||
    message.tool_calls.length === 0
  ) {
    throw new Error('Most recent message must be an AIMessage with a tool call.');
  }
  // Execute all tool calls in parallel with proper error handling
  const toolResults = (await Promise.allSettled(
    message.tool_calls.map(async (toolCall: any) => {
      try {
        const tool = toolMap.get(toolCall.name);
        if (!tool) {
          throw new Error(`Tool ${toolCall.name} not found`);
        }

        const result = await tool.invoke(toolCall.args);
        return {
          success: true,
          result
        };
      } catch (error) {
        return {
          success: false,
          result: null,
          error: error instanceof Error ? error.message : String(error)
        };
      }
    })
  )) as any[];

  // Process results and create state updates
  const stateUpdates = toolResults.map((result: any, index: number) => {
    // @ts-ignore
    const toolCall = message?.tool_calls[index];

    if (result.status === 'rejected') {
      // Handle promise rejection
      return {
        update: {
          messages: [
            new ToolMessage({
              content: `Tool execution failed: ${result.reason}`,
              // @ts-ignore
              tool_call_id: toolCall.id,
              additional_kwargs: { error: result.reason }
            })
          ]
        }
      };
    }

    const toolResult = result.value;
    if (!toolResult.success) {
      // Handle tool execution error
      return {
        update: {
          messages: [
            new ToolMessage({
              content: `Tool execution failed: ${toolResult.error}`,
              // @ts-ignore
              tool_call_id: toolCall.id,
              additional_kwargs: { error: toolResult.error }
            })
          ]
        }
      };
    }

    // Handle successful tool execution
    if (isCommand(toolResult.result)) {
      return toolResult.result;
    }

    const { messages: toolMessage, ...restResult } = toolResult.result;
    // Convert regular tool output to Command
    return {
      ...restResult,
      messages: [
        new ToolMessage({
          content:
            typeof toolResult.result === 'string' ? toolResult.result : JSON.stringify(toolResult.result, null, 2),
          // @ts-ignore
          tool_call_id: toolCall.id,
          additional_kwargs: { result: toolResult.result }
        })
      ]
    };
  });

  const stateUpdateReducer = stateUpdates.reduce(
    (acc, update) => {
      const { messages, ...restUpdate } = update;
      return {
        ...restUpdate,
        messages: [...acc.messages, ...messages]
      };
    },
    { fileContent: null, filePath: null, messages: [] }
  );

  const { messages: updatedMessages, ...restStateUpdates } = stateUpdateReducer;

  // Combine all state updates
  return {
    ...state,
    ...restStateUpdates,
    messages: updatedMessages
  };
};

const getCitiLibraryEdge = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools';
  }
  return 'getbeaches';
};

const getCitiBeachesEdge = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools';
  }
  return '__end__';
};

const getCitiEdge = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools';
  }
  return 'getrestaurants';
};

const getRestaurantsEdge = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools';
  }
  return 'getmonuments';
};

const getCityMonumentEdge = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools';
  }
  return 'getlibraries';
};

const getCities = async (state: State): Promise<Update> => {
  const template = `
    Get the favorite cities of the user.
    use the tool to get the favorite cities of the user.
  `;

  const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

  const formattedPrompt = await prompt.formatMessages({
    messages: state.messages
  });

  const res = await model.invoke(formattedPrompt);
  return {
    // @ts-ignore
    messages: [res],
    hasCity: true
  };
};

const getRestaurants = async (state: State): Promise<Update> => {
  const template = `
      Get the favorite restaurants for a given city.
      use the tool to get the favorite restaurants for a given city.
    `;

  const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

  const formattedPrompt = await prompt.formatMessages({
    messages: state.messages
  });

  const res = await model.invoke(formattedPrompt);
  return {
    // @ts-ignore
    messages: [res],
    hasCityRestaurants: true
  };
};

const getCityMonument = async (state: State): Promise<Update> => {
  const template = `
        Get the favorite monuments for a given city.
        use the tool to get monuments.
      `;

  const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

  const formattedPrompt = await prompt.formatMessages({
    messages: state.messages
  });

  const res = await model.invoke(formattedPrompt);
  return {
    // @ts-ignore
    messages: [res],
    hasCityMonuments: true
  };
};

const getXCityLibraries = async (state: State): Promise<Update> => {
  const template = `
        Get the favorite libraries for a given city.
        use the tool to get libraries.
      `;

  const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

  const formattedPrompt = await prompt.formatMessages({
    messages: state.messages
  });

  const res = await model.invoke(formattedPrompt);
  return {
    messages: [res]
  };
};

const getXCityBeaches = async (state: State): Promise<Update> => {
  const template = `
        Get the favorite beaches for a given city.
        use the tool to get beaches.
      `;

  const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

  const formattedPrompt = await prompt.formatMessages({
    messages: state.messages
  });

  const res = await model.invoke(formattedPrompt);
  return {
    messages: [res]
  };
};

const callToolsEdge = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools';
  }

  if (state.hasCityBeaches) {
    return END;
  }

  if (state.hasCityLibraries) {
    return 'getbeaches';
  }

  if (state.hasCityMonuments) {
    return 'getlibraries';
  }
  if (state.hasCityRestaurants) {
    return 'getmonuments';
  }
  if (state.hasCity) {
    return 'getrestaurants';
  }

  return END;
};

const routeShouldContinue = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools';
  }
  if (state.hasCityBeaches) {
    return END;
  }
  if (state.hasCityLibraries) {
    return 'getbeaches';
  }
  if (state.hasCityMonuments) {
    return 'getlibraries';
  }
  if (state.hasCityRestaurants) {
    return 'getmonuments';
  }
  if (state.hasCity) {
    return 'getrestaurants';
  }
  return END;
};

export const appCityWorkflowRun = async () => {
  // Define a new graph
  const workflow = new StateGraph(AgentState)
    .addNode('getcities', getCities)
    .addNode('getrestaurants', getRestaurants)
    .addNode('getmonuments', getCityMonument)
    .addNode('getlibraries', getXCityLibraries)
    .addNode('getbeaches', getXCityBeaches)
    .addNode('tools', toolExecutor)
    .addNode('route', callToolsEdge)
    .addEdge(START, 'getcities')
    .addConditionalEdges('getcities', getCitiEdge)
    .addConditionalEdges('getrestaurants', getRestaurantsEdge)
    .addConditionalEdges('getmonuments', getCityMonumentEdge)
    .addConditionalEdges('getlibraries', getCitiLibraryEdge)
    .addConditionalEdges('getbeaches', getCitiBeachesEdge)
    .addConditionalEdges('tools', callToolsEdge)
    .addEdge('getbeaches', '__end__')
    .addConditionalEdges('route', routeShouldContinue, ['tools', '__end__']);

  const checkpointer = new MemorySaver();
  // Finally, we compile it into a LangChain Runnable.
  const app = workflow.compile({ checkpointer });

  const toolNames = tools.map(tool => tool.name).join(', ');

  const query = `
  You are a city assistant to a traveller. For a given state "california", find the best places to visit in a city.

  Use the available tools: ${toolNames}.
  Current time: {time}

  Guidelines:
    1. Find the coolest cities
    2. Get the best restaurants
    3. Find the best monuments
    4. Find the best libraries
    5. Find the best beaches
  `;
  const currentDate = new Date().toISOString().replace('T', ' ').split('.')[0];
  const finalState = await app.invoke(
    {
      messages: [new HumanMessage(query)]
    },
    { recursionLimit: 100, configurable: { thread_id: currentDate } }
  );

  // console.log(nextState.messages[nextState.messages.length - 1].content);
  const messages = finalState.messages.map((m: any) => m.content);
  return messages;
};

// execute the workflow
// appCityWorkflowRun().then(console.log).catch(console.error);
