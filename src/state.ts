import { BaseMessage } from '@langchain/core/messages';
import { Annotation } from '@langchain/langgraph';

// Define the graph state with additional properties
export const GraphState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y)
  }),
  iteration: Annotation<number>({
    reducer: x => x,
    default: () => 0
  }),
  hasError: Annotation<boolean>({
    reducer: z => z
  }),
  fileName: Annotation<string>({
    reducer: z => z
  }),
  testFileName: Annotation<string>({
    reducer: z => z
  }),
  fileContent: Annotation<string>({
    reducer: z => z
  }),
  filePath: Annotation<string>({
    reducer: z => z
  }),
  testFileContent: Annotation<string>({
    reducer: z => z
  }),
  testFilePath: Annotation<string>({
    reducer: z => z
  }),
  testFileFound: Annotation<boolean>({
    reducer: z => z
  }),
  testResults: Annotation<any>({
    reducer: z => z
  }),
  testSummary: Annotation<any>({
    reducer: z => z
  })
});

export type State = typeof GraphState.State;
export type Update = typeof GraphState.Update;
