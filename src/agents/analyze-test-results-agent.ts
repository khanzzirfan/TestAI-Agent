import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { AIMessage } from '@langchain/core/messages';
import { llm } from '../llm';
import { State, Update } from '../state';

export const analyzeTestResults = async (state: State): Promise<Update> => {
  const template = `
Analyze the test results and return the parsed JSON output for further reporting.
IMPORTANT: Call the tool 'json-test-result-analyzer' with the final json.
Note: Ignore the warning messages and focus on the test results only and fix the errors if any.

### **Test Results:**  
{testResults}

`;

  const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

  const formattedPrompt = await prompt.formatMessages({
    fileName: state.fileName,
    messages: state.messages,
    testResults: JSON.stringify(state.testResults, null, 2)
  });

  const res = await llm.invoke(formattedPrompt);
  return {
    messages: [res]
  };
};

// examin test results edges
export const analyzeTestResultsEdges = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    const toolCallNames = lastMessage.tool_calls.map(call => call.name);
    if (toolCallNames.includes('write-file')) {
      return 'tools-write-tests';
    }
    return 'tools-examine-test-results';
  } else if (state.testSummary && state.testSummary.failureReasons?.length > 0) {
    return 'fix-errors';
  } else if (!state.testSummary) {
    return 'run-tests';
  }
  return 'final-notes';
};
