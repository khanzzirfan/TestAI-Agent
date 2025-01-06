import {
  ToolMessage,
  type AIMessage,
  type BaseMessage
} from '@langchain/core/messages'
import { TavilySearchResults } from '@langchain/community/tools/tavily_search'
import { ChatOpenAI } from '@langchain/openai'
import {
  ChatPromptTemplate,
  MessagesPlaceholder
} from '@langchain/core/prompts'

import { MessagesAnnotation, StateGraph } from '@langchain/langgraph'
import { ToolNode } from '@langchain/langgraph/prebuilt'
// import { CodeAssistantTools } from './coding-assistant'
import { CustomTools } from './custom-tools'
import { GraphState } from './state'

const tools = [new TavilySearchResults({ maxResults: 3 }), ...CustomTools]

// Define the tools for the agent to use
const toolNode = new ToolNode(tools)

const llm = new ChatOpenAI({
  model: 'gpt-4o-mini',
  temperature: 0,
  verbose: true
}).bindTools(tools)

// define edges
const runTestsEdges = async (state: typeof GraphState.State) => {
  // check last message type
  const messages = state.messages
  const lastMessage = messages[messages.length - 1] as AIMessage
  // If the LLM makes a tool call, then we route to the "tools" node
  if (lastMessage.tool_calls?.length) {
    return 'tools-run-tests'
  }

  if (lastMessage instanceof ToolMessage) {
    return 'run-tests'
  }
  return '__end__'
}

const addTestEdges = async (state: typeof GraphState.State) => {
  // check last message type
  const messages = state.messages
  const lastMessage = messages[messages.length - 1] as AIMessage
  if (lastMessage.tool_calls?.length) {
    return 'tools-add-tests'
  }
  return 'run-tests'
}

const listFilesDirectoryEdges = async (state: typeof GraphState.State) => {
  // check last message type
  const messages = state.messages
  const lastMessage = messages[messages.length - 1] as AIMessage
  if (lastMessage.tool_calls?.length) {
    return 'tools-list-files'
  }
  return 'add-tests'
}

const toolRunTestsEdges = async (state: typeof GraphState.State) => {
  // check last message type
  const messages = state.messages
  const lastMessage = messages[messages.length - 1] as AIMessage
  if (lastMessage.tool_calls?.length) {
    return 'tools-run-test-again'
  }
  return '__end__'
}

const toolReviewAndFixErrorsEdges = async (state: typeof GraphState.State) => {
  // check last message type
  const messages = state.messages
  const lastMessage = messages[messages.length - 1] as AIMessage
  if (lastMessage.tool_calls?.length) {
    return 'tools-review-and-fix-errors'
  }
  if (state.iteration > 5) {
    return '__end__'
  }
  return 'run-tests'
}

// Nodes
const listFilesDirectory = async (state: typeof GraphState.State) => {
  const directoryListingTemplate = `You are an expert to analyse the file directory structure.
        Given a directory path, list all the files in the directory.
        You have access to the following tools: {tool_names}.
        Current time: {time}.
        You should use the tools to interact with the directory.
        You should return the list of files in the directory.
        If the directory does not exist, return an error message.
         {agent_scratchpad}
        `

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', directoryListingTemplate],
    new MessagesPlaceholder('messages')
  ])

  const formattedPrompt = await prompt.formatMessages({
    time: new Date().toISOString(),
    tool_names: tools.map(tool => tool.name).join(', '),
    messages: state.messages,
    agent_scratchpad: ''
  })

  const res = await llm.invoke(formattedPrompt)
  console.log('Process listFilesDirectory Message Result', res)
  return {
    messages: [...state.messages, res]
  }
}

const runTests = async (state: typeof GraphState.State) => {
  const runTestsTemplate = `You are an expert javascript test engineer specializing in test automation.
        you have following tools Available:
          - {tool_names}
          - Current timestamp: {time}
        Your task is to execute npm tests with coverage option and with json output.
        Follow the instructions carefully to execute the tests.
        Example commands: 
          When package.json is in the root directory
          - npm test -- --coverage --json
          or if package.json is not in the root directory use below command
          - npm test --prefix <directory_path> -- --coverage --json
    `

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', runTestsTemplate],
    new MessagesPlaceholder('messages')
  ])

  const formattedPrompt = await prompt.formatMessages({
    time: new Date().toISOString(),
    tool_names: tools.map(tool => tool.name).join(', '),
    messages: state.messages,
    agent_scratchpad: ''
  })

  const res = await llm.invoke(formattedPrompt)
  console.log('Process run test Message Result', res)
  return {
    messages: [...state.messages, res]
  }
}

const addTests = async (state: typeof GraphState.State) => {
  const addTestsTemplate = `You are an expert at writing test cases in a javascript/node.js projects.
  Given a file name and its content, add or update test cases for a React component.
  
  Guidelines:
  1. Read the file content before writing tests.
  2. Make accurate assertions based on the file content.
  3. Focus on testing the component's core functionality based on the file content.
  4. Write tests for:
     - Component rendering
     - Props validation
     - State changes
     - Side effects
     - Event handling
     - Edge cases
  4. Use appropriate testing libraries (Jest, React Testing Library) and follow existing patterns.
  5. Follow testing best practices:
     - Arrange-Act-Assert pattern
     - Meaningful test descriptions
     - Isolated tests
     - Clear assertions
  
  Constraints:
  - Do not write unnecessary import statements which can fail linting
  - Do not write new tests if they are not required or not related to the task
  - Do not modify existing tests
  - Do not write tests if total tests are already more than 10
  - Do not make assumptions about the file content
  
  You have access to the following tools: {tool_names}
  Current time: {time}
  {agent_scratchpad}
`

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', addTestsTemplate],
    new MessagesPlaceholder('messages')
  ])

  const formattedPrompt = await prompt.formatMessages({
    time: new Date().toISOString(),
    tool_names: tools.map(tool => tool.name).join(', '),
    messages: state.messages,
    agent_scratchpad: ''
  })

  const res = await llm.invoke(formattedPrompt)
  console.log('Process listFilesDirectory Message Result', res)
  return {
    messages: [...state.messages, res]
  }
}

const reviewAndFixErrors = async (state: typeof GraphState.State) => {
  const reviewAndFixErrorsTemplate = `You are an javascript engineer expert at reviewing code and fixing errors in test cases.
  Given a set of test cases, code, review and fix any errors or issues in the test cases.
  you have following tools Available:
    - {tool_names}
    - Current timestamp: {time}
  Your task is to review the code, test cases and fix any issues or errors in the test cases.
  You should also fix issues like linting errors, syntax errors, and other code quality issues.
  Follow the instructions carefully to review and fix the test cases.
`

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', reviewAndFixErrorsTemplate],
    new MessagesPlaceholder('messages')
  ])

  const formattedPrompt = await prompt.formatMessages({
    time: new Date().toISOString(),
    tool_names: tools.map(tool => tool.name).join(', '),
    messages: state.messages,
    agent_scratchpad: ''
  })

  const res = await llm.invoke(formattedPrompt)
  console.log('Process reviewAndFixErrors Message Result', res)
  return {
    messages: [...state.messages, res],
    iteration: state.iteration + 1
  }
}

const runTestAgain = async (state: typeof GraphState.State) => {
  const runTestsTemplate = `You are an expert javascript test engineer specializing in test automation.
      you have following tools Available:
        - {tool_names}
        - Current timestamp: {time}
      Your task is to execute npm tests with coverage option and with json output.
      Follow the instructions carefully to execute the tests.
      Example command:
        When package.json is in the root directory
        - npm test -- --coverage --json
        or if package.json is not in the root directory use below command
        - npm test --prefix <directory_path> -- --coverage --json
  `

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', runTestsTemplate],
    new MessagesPlaceholder('messages')
  ])

  const formattedPrompt = await prompt.formatMessages({
    time: new Date().toISOString(),
    tool_names: tools.map(tool => tool.name).join(', '),
    messages: state.messages,
    agent_scratchpad: ''
  })

  const res = await llm.invoke(formattedPrompt)
  console.log('Process listFilesDirectory Message Result', res)
  return {
    messages: [...state.messages, res]
  }
}

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

export {
  callModel,
  shouldContinue,
  toolNode,
  tools,
  GraphState,
  runTestAgain,
  reviewAndFixErrors,
  addTests,
  runTests,
  listFilesDirectory,
  listFilesDirectoryEdges,
  addTestEdges,
  runTestsEdges,
  toolRunTestsEdges,
  toolReviewAndFixErrorsEdges
}
