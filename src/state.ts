import { BaseMessage } from '@langchain/core/messages';
import { Annotation } from '@langchain/langgraph';

// Define the graph state with additional properties
export const GraphState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y),
    default: () => []
  }),
  iteration: Annotation<number>({
    reducer: z => z,
    default: () => 0
  }),
  hasError: Annotation<boolean>({
    reducer: z => z,
    default: () => false
  }),
  fileName: Annotation<string>({
    reducer: (x, y) => y ?? x,
    default: () => ''
  }),
  testFileName: Annotation<string>({
    reducer: (x, y) => y ?? x,
    default: () => ''
  }),
  fileContent: Annotation<string>({
    reducer: (x, y) => y ?? x,
    default: () => ''
  }),
  filePath: Annotation<string>({
    reducer: (x, y) => y ?? x,
    default: () => ''
  }),
  testFileContent: Annotation<string>({
    reducer: (x, y) => y ?? x,
    default: () => ''
  }),
  testFilePath: Annotation<string>({
    reducer: (x, y) => y ?? x,
    default: () => ''
  }),
  testResults: Annotation<any>({
    reducer: (x, y) => y ?? x,
    default: () => null
  }),
  testSummary: Annotation<any>({
    reducer: (x, y) => y ?? x,
    default: () => null
  })
});
