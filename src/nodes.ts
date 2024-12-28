import type { AIMessage } from '@langchain/core/messages'
import { TavilySearchResults } from '@langchain/community/tools/tavily_search'
import { ChatOpenAI } from '@langchain/openai'
import {
  ChatPromptTemplate,
  MessagesPlaceholder
} from '@langchain/core/prompts'

import { MessagesAnnotation, StateGraph } from '@langchain/langgraph'
import { ToolNode } from '@langchain/langgraph/prebuilt'
import { CodeAssistantTools } from './coding-assistant'

const tools = [
  new TavilySearchResults({ maxResults: 3 }),
  ...CodeAssistantTools
]

// Define the tools for the agent to use
const toolNode = new ToolNode(tools)

// Define the function that calls the model
async function callModel(state: typeof MessagesAnnotation.State) {
  /**
   * Call the LLM powering our agent.
   * Feel free to customize the prompt, model, and other logic!
   */
  // const model = new ChatOpenAI({
  //   model: 'gpt-4o'
  // }).bindTools(tools)

  const model = new ChatOpenAI({
    model: 'gpt-4o-mini',
    temperature: 0,
    verbose: true
  }).bindTools(tools)

  const PROMPT_TEMPLATE = `You are an agent designed to interact with a Node.js project.
        Given an input command, execute the appropriate npm command in the provided directory and return the output.
        Only use the below tools.
        Only use the information returned by the below tools to construct your final answer.
        You MUST double check your command before executing it. If you get an error while executing a command, rewrite the command and try again.

        DO NOT make any destructive changes (e.g., npm uninstall, npm run clean) to the project.
        You have access to the following tools: {tool_names}.
        Current time: {time}.
        You should use the tools to interact with the project and execute the npm commands.
        If the command does not seem related to npm, just return "I don't know" as the answer.

        INSTRUCTIONS: 
          1. Test Execution:
            - Set up test environment
            - Run tests cases using the provided test runner tools.
            - Run tests with --prefix option to specify the test directory and then add -- for any additional options.
            - Run tests with suffix coverage option to get test coverage report and test results in json.
                Example: 
                  npm test --prefix ./ -- --coverage --json
            - Capture test results including:
                - Number of tests passed/failed
                - Test execution time
                - Coverage metrics
                - Error messages for failed tests
          
          2. Results Analysis:
            - Generate detailed test execution report
            - Categorize test results:
                - Critical failures
                - Warnings
                - Successful tests
                - Skipped tests
            - Identify:
                - Performance bottlenecks
                - Memory usage issues
                - Test stability problems
          
          3. Output Requirements:
            - Provide structured feedback including:
                - Summary statistics
                - Detailed error logs
                - Test coverage report
                - Performance metrics
                - Recommendations for failed tests
          
          CONSTRAINTS:
          - Must handle test timeouts gracefully
          - Must capture all console outputs
          - Must maintain test isolation
          - Must report accurate stack traces
          
          ERROR HANDLING:
          - Handle missing test files
          - Handle invalid test syntax
          - Handle runtime errors
          - Handle environment setup failures
          
          REPORTING FORMAT:
          {{
              "summary": {{
                  "total": <number>,
                  "passed": <number>,
                  "failed": <number>,
                  "skipped": <number>,
                  "duration": <time>
              }},
              "failures": [
                  {{
                      "testName": <string>,
                      "error": <string>,
                      "stackTrace": <string>
                  }}
              ],
              "coverage": {{
                  "statements": <percentage>,
                  "branches": <percentage>,
                  "functions": <percentage>,
                  "lines": <percentage>
              }},
              "recommendations": [<string>]
          }}

        Thought: I should always double check the command before executing it. 
        {agent_scratchpad}
        `

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', PROMPT_TEMPLATE],
    new MessagesPlaceholder('messages')
  ])

  const formattedPrompt = await prompt.formatMessages({
    time: new Date().toISOString(),
    tool_names: tools.map(tool => tool.name).join(', '),
    messages: state.messages,
    agent_scratchpad: ''
  })

  const result = await model.invoke(formattedPrompt)
  return { messages: [result] }
}

// Define the function that determines whether to continue or not
function shouldContinue(state: typeof MessagesAnnotation.State) {
  const messages = state.messages
  const lastMessage: AIMessage = messages[messages.length - 1]
  // If the LLM is invoking tools, route there.
  if ((lastMessage?.tool_calls?.length ?? 0) > 0) {
    return 'tools'
  }
  // Otherwise end the graph.
  return '__end__'
}

export { callModel, shouldContinue, toolNode, tools }
