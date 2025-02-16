import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { AIMessage } from '@langchain/core/messages';
import { llm } from '../llm';
import { State, Update } from '../state';

export const checkTestFile = async (state: State): Promise<Update> => {
  const template = `
    Your task is to check if a test file exists for {fileName}.
    
    ### **Guidelines:**
    1. Look for both .test.tsx and .spec.tsx extensions.
    2. If found, read and store the existing test content.
    
    ### **Tools:**
    - Use the available tool: find-test-file.
    
    ### **Expected Output:**
    1. Return the content of the test file if found.
    2. If no test file is found, indicate that no test file exists.
    
    Current time: {time}
    IMPORTANT: Strictly follow the provided guidelines.
    `;

  const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

  const formattedPrompt = await prompt.formatMessages({
    fileName: state.fileName,
    time: new Date().toISOString(),
    messages: state.messages
  });

  const res = await llm.invoke(formattedPrompt);
  return {
    // @ts-ignore
    messages: [res]
  };
};

// Edge

export const checkTestFileEdges = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools-find-test-file';
  }

  // Route based on whether test file exists
  return state.testFileContent ? 'analyze-existing-tests' : 'create-new-tests';
};
