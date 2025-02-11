import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { llm } from '../llm';
import { GraphState } from '../state';

export const createNewTests = async (state: typeof GraphState.State) => {
  const template = `
    Your task is to create comprehensive test cases for the component specified in {fileName}.
    The component's content is provided below:

    Component content: {fileContent}
    
    Guidelines:
    1. Write tests that thoroughly cover the component's functionality.
    2. Test all possible inputs and their variations.
    3. Include tests for user interactions and edge cases.
    4. Ensure robust error handling and test boundary conditions.
    5. Aim for a test coverage of over 80%.
    
    Use modern testing practices and frameworks that are appropriate for the language of the component.
    `;

  const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

  const formattedPrompt = await prompt.formatMessages({
    fileName: state.fileName,
    fileContent: state.fileContent,
    messages: state.messages
  });

  const res = await llm.invoke(formattedPrompt);
  return {
    ...state,
    messages: [res]
  };
};
