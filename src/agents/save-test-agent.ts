import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { AIMessage } from '@langchain/core/messages';
import { llm } from '../llm';
import { State, Update } from '../state';

export const saveTests = async (state: State): Promise<Update> => {
  const template = `
    Save the generated test content to a file with correct naming convention and path.

### **File Naming Rules:**
- Use the appropriate test file extension: **'.test.tsx'** or **.spec.tsx**.
- Maintain the same directory structure as {fileName}.
- Ensure consistency with existing test files.

### **Expected Action:**
- Save the file using a **tool call** write-file with the correct **file path and name**.
- Test file path: **{testFilePath}**

 `;

  const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

  const formattedPrompt = await prompt.formatMessages({
    fileName: state.fileName,
    messages: state.messages,
    testFilePath: state.testFilePath
  });

  const res = await llm.invoke(formattedPrompt);
  return {
    messages: [res]
  };
};

export const writeTestsEdges = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools-create-new-tests';
  }
  return 'find-test-file';
};

// Define a separate edge handler for save tests
export const saveTestsEdges = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools-write-tests';
  }
  return 'run-tests'; // After saving, proceed to run tests
};
