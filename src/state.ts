import { BaseMessage } from '@langchain/core/messages'
import { Annotation } from '@langchain/langgraph'

// Define the graph state
export const GraphState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y),
    default: () => []
  }),
  next: Annotation<string>({
    reducer: (x, y) => y ?? x,
    default: () => 'supervisor'
  }),
  instructions: Annotation<string>({
    reducer: (x, y) => y ?? x,
    default: () => "Solve the human's question."
  }),
  iteration: Annotation<number>({
    reducer: z => z,
    default: () => 0
  }),
  hasError: Annotation<boolean>({ reducer: z => z, default: () => false })
})
