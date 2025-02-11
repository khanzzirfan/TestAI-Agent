import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { AIMessage } from '@langchain/core/messages';

import { llm } from '../llm';
import { GraphState } from '../state';

export const runTests = async (state: typeof GraphState.State) => {
  const template = `
    ### Task: Run Tests and Analyze Results

    Execute the test suite using the appropriate **npm test command**.

    use the **tool call** npm-test to run the tests.
    
    Output:
    - Return a summary of the test results, highlighting any failures.
    - Include coverage information if available.;
  `;

  const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

  const formattedPrompt = await prompt.formatMessages({
    fileName: state.fileName,
    messages: state.messages
  });

  const res = await llm.invoke(formattedPrompt);
  return {
    ...state,
    messages: [res]
  };
};

// edge
export const runTestsEdges = async (state: typeof GraphState.State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools-run-tests';
  }

  // if (state.hasError) {
  //   return "fix-errors";
  // }
  return 'analyze-results';
  // return "__end__";
};
