import { AIMessage } from '@langchain/core/messages';
import { State } from '../state';

export const callToolsEdge = async (state: State) => {
  const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools';
  }
  const hasFile = state.fileName && state.filePath;
  const hasTestFile = state.testFileName && state.testFilePath;
  const hasBothFiles = hasFile && hasTestFile;

  console.log('callToolsEdge state params', JSON.stringify(state, null, 2));

  if (state.iteration > 5) {
    return '__end__';
  }

  if (state.testSummary && state.testSummary?.failureReasons?.length > 0) {
    return 'fix-errors';
  } else if (state.testSummary && state.testSummary?.failureReasons?.length === 0) {
    return '__end__';
  }

  if (state.testResults) {
    return 'analyze-results';
  }

  if (hasBothFiles) {
    return 'analyze-existing-tests';
  } else if (state.fileName && state.filePath && !state.testFileFound) {
    return 'create-new-tests';
  }

  if (state.filePath) {
    // found source file, now find test file
    return 'find-test-file';
  }

  return 'find-file';
};
