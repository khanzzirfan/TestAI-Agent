import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { AIMessage } from '@langchain/core/messages';
import { llm } from '../llm';
import { State, Update } from '../state';

export const runTests = async (state: State): Promise<Update> => {
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
    // @ts-ignore
    messages: [res],
    hasError: false,
    testResults: null,
    testSummary: null
  };
};

// edge
export const runTestsEdges = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools-run-tests';
  }
  return 'analyze-results';
};
