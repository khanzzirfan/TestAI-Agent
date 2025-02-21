import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { llm } from '../llm';
import { State, Update } from '../state';

export const finalNotesAgent = async (state: State): Promise<Update> => {
  const template = `
    ### Task: Write Summary of the Test Results
    
    - file: **{fileName}**
    - Test Results: **{testResults}**

    Summarize the test results and provide a detailed report of the test coverage and accuracy.      
 `;

  const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

  const formattedPrompt = await prompt.formatMessages({
    fileName: state.fileName,
    messages: state.messages,
    testResults: state.testResults
  });

  const res = await llm.invoke(formattedPrompt);
  return {
    // @ts-ignore
    messages: [res],
    finalComments: res && res?.content && JSON.stringify(res?.content)
  };
};
