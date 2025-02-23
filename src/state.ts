import { BaseMessage } from '@langchain/core/messages';
import { Annotation } from '@langchain/langgraph';

// Define the graph state with additional properties
export const GraphState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y)
  }),
  iteration: Annotation<number>({
    reducer: (x, y) => y ?? x ?? 0,
    default: () => 0
  }),
  hasError: Annotation<boolean>({
    reducer: (x, y) => y
  }),
  fileName: Annotation<string>({
    reducer: (x, y) => y ?? x ?? ''
  }),
  testFileName: Annotation<string>({
    reducer: (x, y) => y ?? x ?? ''
  }),
  fileContent: Annotation<string>({
    reducer: (x, y) => y ?? x ?? ''
  }),
  filePath: Annotation<string>({
    reducer: (x, y) => y ?? x ?? ''
  }),
  testFileContent: Annotation<string>({
    reducer: (x, y) => y ?? x ?? ''
  }),
  testFilePath: Annotation<string>({
    reducer: (x, y) => y ?? x ?? ''
  }),
  testFileFound: Annotation<boolean>({
    reducer: (x, y) => y
  }),
  testResults: Annotation<any>({
    reducer: (x, y) => y
  }),
  testSummary: Annotation<any>({
    reducer: (x, y) => y
  }),
  finalComments: Annotation<string>({
    reducer: (x, y) => y ?? x ?? '',
    default: () => ''
  })
});

export type State = typeof GraphState.State;
export type Update = typeof GraphState.Update;
