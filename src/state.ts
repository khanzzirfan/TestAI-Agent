import { BaseMessage } from '@langchain/core/messages';
import { Annotation } from '@langchain/langgraph';

// Define the graph state with additional properties
export const GraphState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y),
    default: () => []
  }),
  iteration: Annotation<number>({
    reducer: x => x,
    default: () => 0
  }),
  hasError: Annotation<boolean>({
    reducer: z => z,
    default: () => false
  }),
  fileName: Annotation<string>({
    reducer: z => z,
    default: () => ''
  }),
  testFileName: Annotation<string>({
    reducer: z => z,
    default: () => ''
  }),
  fileContent: Annotation<string>({
    reducer: z => z,
    default: () => ''
  }),
  filePath: Annotation<string>({
    reducer: z => z,
    default: () => ''
  }),
  testFileContent: Annotation<string>({
    reducer: z => z,
    default: () => ''
  }),
  testFilePath: Annotation<string>({
    reducer: z => z,
    default: () => ''
  }),
  testResults: Annotation<any>({
    reducer: z => z,
    default: () => null
  }),
  testSummary: Annotation<any>({
    reducer: z => z,
    default: () => null
  })
});

export type State = typeof GraphState.State;
export type Update = typeof GraphState.Update;
