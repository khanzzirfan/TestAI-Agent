import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { AIMessage } from '@langchain/core/messages';
import { llm } from '../llm';
import { State, Update } from '../state';

export const fixErrors = async (state: State): Promise<Update> => {
  const template = `
    Fix and update test cases for {fileName}, then save the updated file.
    
    ### **Test Failures:**  
    {failureReasons}
    
    ### **Instructions:**  
    - **Analyze** test failures and identify root causes.  
    - **Fix errors** and update test cases accordingly.  
    - **Ensure tests remain accurate, reliable, and compatible.**  
    - **Maintain best practices** and follow existing test structure.  
    
    ### **Test File Name:**  
    {testFileName}
    
    ### **Test File Path:**  
    {testFilePath}
    
    ### **Existing Test Content:**  
    {testFileContent}
    
    ### **Component Content:**  
    {fileContent}
    
    ### **Output:**  
    1. Return the **fully updated test file**, ready to run.  
    2. **Use the 'write-file' tool call** to save the updated test file.  
    `;

  const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

  const formattedPrompt = await prompt.formatMessages({
    fileName: state.fileName,
    testFileName: state.testFileName,
    testFilePath: state.testFilePath,
    fileContent: state.fileContent,
    testFileContent: state.testFileContent,
    failureReasons: state.testResults ? JSON.stringify(state.testResults.failures, null, 2) : 'No test results found',
    messages: state.messages
  });

  const res = await llm.invoke(formattedPrompt);
  return {
    // @ts-ignore
    messages: [res],
    iteration: state.iteration + 1,
    // reset error flags
    hasError: false,
    testResults: null,
    testSummary: null
  };
};

// Edge
export const fixErrorsEdges = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools';
  }
  if (state.iteration > 5) {
    return '__end__';
  }
  return 'run-tests';
};
