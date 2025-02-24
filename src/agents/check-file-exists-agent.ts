import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { AIMessage } from '@langchain/core/messages';

import { llm } from '../llm';
import { State, Update } from '../state';

export const checkFileExists = async (state: State): Promise<Update> => {
  const template = `
    Given the filename {fileName}, verify it exists in the codebase.
    Use the available tool: find-file.
    Current time: {time}
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

// Edge definitions
export const checkFileExistsEdges = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools-find-file';
  }
  if (state.fileContent === null) {
    return 'find-file';
  } else if (state.testFileName && state.testFileContent) {
    return 'analyze-existing-tests';
  } else return 'find-test-file';
};
