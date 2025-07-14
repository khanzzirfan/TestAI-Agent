import { BaseMessage } from '@langchain/core/messages';
import { Messages, Annotation, messagesStateReducer } from '@langchain/langgraph';

// Define the graph state with additional properties
export const GraphState = Annotation.Root({
  messages: Annotation<BaseMessage[], Messages>({
    reducer: messagesStateReducer
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
  fileContent: Annotation<string>({
    reducer: (x, y) => y ?? x ?? ''
  }),
  filePath: Annotation<string>({
    reducer: (x, y) => y ?? x ?? ''
  }),
  testFileName: Annotation<string>({
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
  }),
  packageManager: Annotation<string>({
    reducer: (x, y) => y ?? x ?? 'npm',
    default: () => 'npm'
  }),
  packageManagerContent: Annotation<any>({
    reducer: (x, y) => y ?? x ?? {},
    default: () => ({})
  }),
  exampleTestFiles: Annotation<any[]>({
    reducer: (x, y) => y ?? x ?? [],
    default: () => []
  })
});

export type State = typeof GraphState.State;
export type Update = typeof GraphState.Update;
