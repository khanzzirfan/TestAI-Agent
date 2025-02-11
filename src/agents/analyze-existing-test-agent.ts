import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { AIMessage } from '@langchain/core/messages';
import { llm } from '../llm';
import { State, Update } from '../state';

export const analyzeExistingTests = async (state: State): Promise<Update> => {
  const template = `
    All necessary test cases and component details are included below.
    Analyze the existing test cases for {fileName} and determine if they are sufficient.
    If the tests are inadequate, create new test cases to improve coverage.

    ### Test File Name: {testFileName}
    ### Test file path: {testFilePath}
    ### **Existing Test Content:**
    {testFileContent}

    ### **Component Content:**
    {fileContent}

    ### **Guidelines:**
    - **Analyze** the existing test cases for coverage and accuracy.
    - **Identify** any gaps or missing test scenarios.
    - **Create** new test cases to improve coverage if necessary.
    - **Maintain** consistency with existing test structure.
    - **Ensure** the tests are accurate, reliable, and compatible with the component.

    ### **Output:**
    - Return the updated test file content only.
    - If new test cases are created, use write-file tool call to save the test file.
  `;

  const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

  const formattedPrompt = await prompt.formatMessages({
    fileName: state.fileName,
    testFileName: state.testFileName,
    testFilePath: state.testFilePath,
    testFileContent: state.testFileContent,
    fileContent: state.fileContent,
    messages: state.messages
  });

  const res = await llm.invoke(formattedPrompt);
  return {
    messages: [res]
  };
};

// edge
export const analyzeExistingTestEdges = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools-write-tests';
  }
  return 'run-tests';
};
