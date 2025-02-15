import { isAIMessage } from '@langchain/core/messages';
import { ToolMessage } from '@langchain/core/messages';
import { isCommand } from '@langchain/langgraph';
import { CustomTools } from './tools';
import { GraphState } from './state';

const tools = [...CustomTools];
const toolMap = new Map(tools.map(tool => [tool.name, tool]));

export const toolExecutor = async (state: typeof GraphState.State) => {
  // debug state
  console.log('tool executor state', JSON.stringify(state));
  const message = state.messages.at(-1);
  // @ts-ignore
  if (!isAIMessage(message) || message.tool_calls === undefined || message.tool_calls.length === 0) {
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
          content: typeof toolResult.result === 'string' ? toolResult.result : JSON.stringify(toolMessage, null, 2),
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
    messages: [...state.messages, ...stateUpdateReducer.messages]
  };
};
