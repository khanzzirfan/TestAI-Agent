import { BaseMessage } from '@langchain/core/messages'
import { Annotation, messagesStateReducer } from '@langchain/langgraph'

export const GraphState = Annotation.Root({
  messages: Annotation<any[]>({
    reducer: messagesStateReducer,
    default: () => []
  }),
  iteration: Annotation<number>({
    reducer: x => x,
    default: () => 0
  }),
  hasError: Annotation<boolean>({ reducer: x => x, default: () => false }),
  fileName: Annotation<string>({ reducer: x => x, default: () => '' }),
  testFileName: Annotation<string>({
    reducer: x => x,
    default: () => ''
  }),
  fileContent: Annotation<string>({
    reducer: x => x,
    default: () => ''
  }),
  filePath: Annotation<string>({ reducer: x => x, default: () => '' }),
  testFileContent: Annotation<string>({
    reducer: x => x,
    default: () => ''
  }),
  testFilePath: Annotation<string>({
    reducer: x => x,
    default: () => ''
  }),
  testResults: Annotation<any>({
    reducer: x => x,
    default: () => undefined
  })
})
