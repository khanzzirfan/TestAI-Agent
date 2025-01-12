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

import { MessagesAnnotation, StateGraph, isCommand } from '@langchain/langgraph'
import { ToolNode } from '@langchain/langgraph/prebuilt'
// import { CodeAssistantTools } from './coding-assistant'
import { CustomTools, findTestFileTool, checkFileTool } from './custom-tools'
import { GraphState } from './state'
import { isAIMessage } from '@langchain/core/messages'

const tools = [
  new TavilySearchResults({ maxResults: 3 }),
  ...CustomTools,
  findTestFileTool,
  checkFileTool
]

// Define the tools for the agent to use
const toolNode = new ToolNode(tools)
const toolMap = new Map(tools.map(tool => [tool.name, tool]))

const model = new ChatOpenAI({
  model: 'gpt-4o-mini',
  temperature: 0,
  verbose: true
}).bindTools(tools)

const toolExecutor = async (state: typeof GraphState.State) => {
  const message = state.messages.at(-1)
  if (
    !isAIMessage(message) ||
    message.tool_calls === undefined ||
    message.tool_calls.length === 0
  ) {
    throw new Error(
      'Most recent message must be an AIMessage with a tool call.'
    )
  }

  // Execute all tool calls in parallel with proper error handling
  const toolResults = await Promise.allSettled(
    message.tool_calls.map(async (toolCall: any) => {
      try {
        const tool = toolMap.get(toolCall.name)
        if (!tool) {
          throw new Error(`Tool ${toolCall.name} not found`)
        }

        const result = await tool.invoke(toolCall.args)
        return {
          success: true,
          result
        }
      } catch (error) {
        return {
          success: false,
          result: null,
          error: error instanceof Error ? error.message : String(error)
        }
      }
    })
  )

  // Process results and create state updates
  const stateUpdates = toolResults.map((result, index) => {
    const toolCall = message.tool_calls ? message.tool_calls[index] : undefined

    if (result.status === 'rejected') {
      // Handle promise rejection
      return {
        update: {
          messages: [
            new ToolMessage({
              content: `Tool execution failed: ${result.reason}`,
              tool_call_id: toolCall?.id ?? '',
              additional_kwargs: { error: result.reason }
            })
          ]
        }
      }
    }

    const toolResult = result.value
    if (!toolResult.success) {
      // Handle tool execution error
      return {
        update: {
          messages: [
            new ToolMessage({
              content: `Tool execution failed: ${toolResult.error}`,
              tool_call_id: toolCall?.id ?? '',
              additional_kwargs: { error: toolResult.error }
            })
          ]
        }
      }
    }

    // Handle successful tool execution
    if (isCommand(toolResult.result)) {
      return toolResult.result
    }

    const { messages: toolMessage, ...restResult } = toolResult.result
    // Convert regular tool output to Command
    return {
      ...restResult,
      messages: [
        new ToolMessage({
          content:
            typeof toolResult.result === 'string'
              ? toolResult.result
              : JSON.stringify(toolMessage, null, 2),
          tool_call_id: toolCall?.id ?? '',
          additional_kwargs: { result: toolResult.result }
        })
      ]
    }
  })

  const stateUpdateReducer = stateUpdates.reduce(
    (acc, update) => {
      const { messages, ...restUpdate } = update
      return {
        ...restUpdate,
        messages: [...acc.messages, ...messages]
      }
    },
    { fileContent: null, filePath: null, messages: [] }
  )

  const { messages: updatedMessages, ...restStateUpdates } = stateUpdateReducer

  console.log('Tool Executor State Updates', JSON.stringify(stateUpdateReducer))

  // Combine all state updates
  return {
    ...state,
    ...restStateUpdates,
    messages: [...state.messages, ...stateUpdateReducer.messages]
  }
}

// Edge definitions
const listFilesDirectoryEdges = async (state: typeof GraphState.State) => {
  // check last message type
  const messages = state.messages
  const lastMessage = messages[messages.length - 1] as AIMessage
  if (lastMessage.tool_calls?.length) {
    return 'tools-list-files'
  }
  return 'check-file'
}

const checkFileExistsEdges = async (state: typeof GraphState.State) => {
  const lastMessage = state.messages[state.messages.length - 1]
  if (lastMessage.tool_calls?.length) {
    return 'tools-check-file'
  }
  return 'check-test-file'
}

const checkTestFileEdges = async (state: typeof GraphState.State) => {
  const lastMessage = state.messages[state.messages.length - 1]
  if (lastMessage.tool_calls?.length) {
    return 'tools-check-test-file'
  }

  // Route based on whether test file exists
  return state.testFileContent ? 'read-existing-tests' : 'create-new-tests'
}

const writeTestsEdges = async (state: typeof GraphState.State) => {
  const lastMessage = state.messages[state.messages.length - 1]
  if (lastMessage.tool_calls?.length) {
    return 'tools-write-tests'
  }
  return 'save-tests'
}

const readExistingTestEdges = async (state: typeof GraphState.State) => {
  const lastMessage = state.messages[state.messages.length - 1]
  if (lastMessage.tool_calls?.length) {
    return 'tools-write-tests'
  }
  return 'save-tests'
}

// Define a separate edge handler for save tests
const saveTestsEdges = async (state: typeof GraphState.State) => {
  const lastMessage = state.messages[state.messages.length - 1]
  if (lastMessage.tool_calls?.length) {
    return 'tools-write-tests'
  }
  return 'run-tests' // After saving, proceed to run tests
}

const runTestsEdges = async (state: typeof GraphState.State) => {
  const lastMessage = state.messages[state.messages.length - 1]
  if (lastMessage.tool_calls?.length) {
    return 'tools-run-tests'
  }
  if (state.hasError) {
    return 'fix-errors'
  }
  return '__end__'
}

const fixErrorsEdges = async (state: typeof GraphState.State) => {
  const lastMessage = state.messages[state.messages.length - 1]
  if (lastMessage.tool_calls?.length) {
    return 'tools-fix-errors'
  }
  if (state.iteration > 5) {
    return '__end__'
  }
  return 'run-tests'
}

// Nodes

// Node definitions

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

  const res = await model.invoke(formattedPrompt)
  console.log('Process listFilesDirectory Message Result', res)
  return {
    messages: [...state.messages, res]
  }
}

const checkFileExists = async (state: typeof GraphState.State) => {
  const template = `You are a code assistant checking for the existence of a source file.
    Given the filename {fileName}, verify it exists in the codebase.
    Use the available tools: {tool_names}
    Current time: {time}
    If the file exists, read and store its content.`

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', template],
    new MessagesPlaceholder('messages')
  ])

  const formattedPrompt = await prompt.formatMessages({
    fileName: state.fileName,
    time: new Date().toISOString(),
    tool_names: tools.map(tool => tool.name).join(', '),
    messages: state.messages
  })

  const res = await model.invoke(formattedPrompt)
  return {
    ...state,
    messages: [...state.messages, res]
  }
}

const checkTestFile = async (state: typeof GraphState.State) => {
  const template = `You are a test file analyzer.
    Check if a test file exists for {fileName}.
    Look for both .test.tsx and .spec.tsx extensions.
    Use the available tools: {tool_names}
    If found, read and store the existing test content.`

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', template],
    new MessagesPlaceholder('messages')
  ])

  const formattedPrompt = await prompt.formatMessages({
    fileName: state.fileName,
    time: new Date().toISOString(),
    tool_names: tools.map(tool => tool.name).join(', '),
    messages: state.messages
  })

  const res = await model.invoke(formattedPrompt)
  return {
    ...state,
    messages: [...state.messages, res]
  }
}

const createNewTests = async (state: typeof GraphState.State) => {
  const template = `You are an expert test writer for React components.
    Create comprehensive test cases for the component in {fileName}.
    Component content: {fileContent}
    
    Guidelines:
    1. Write tests for component rendering
    2. Test all props and their variations
    3. Test user interactions
    4. Test error states
    5. Ensure >80% coverage
    
    Use modern testing practices with Jest and React Testing Library.`

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', template],
    new MessagesPlaceholder('messages')
  ])

  const formattedPrompt = await prompt.formatMessages({
    fileName: state.fileName,
    fileContent: state.fileContent,
    messages: state.messages
  })

  const res = await model.invoke(formattedPrompt)
  return {
    ...state,
    messages: [...state.messages, res]
  }
}

const readExistingTests = async (state: typeof GraphState.State) => {
  const template = `
    You are a JavaScript test improvement specialist.

Your task:
1. Analyze the provided test file content and suggest improvements directly, without additional tool calls to read the file again.
2. Do not request additional information or tools unless explicitly instructed.

Details:
Component: {fileName}
Existing Tests: {testFileContent}

Guidelines for Analysis:
1. Identify missing test cases.
2. Improve assertion quality.
3. Add edge cases.
4. Maintain the existing test structure.
5. Ensure backward compatibility.
`

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', template],
    new MessagesPlaceholder('messages')
  ])

  const formattedPrompt = await prompt.formatMessages({
    fileName: state.fileName,
    testFileContent: state.testFileContent,
    messages: state.messages
  })

  const res = await model.invoke(formattedPrompt)
  return {
    ...state,
    messages: [...state.messages, res]
  }
}

const saveTests = async (state: typeof GraphState.State) => {
  const template = `You are a test file manager.
    Save the new/updated test file for {fileName}.
    Use the appropriate test file extension (.test.tsx or .spec.tsx).
    Ensure proper formatting and documentation.`

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', template],
    new MessagesPlaceholder('messages')
  ])

  const formattedPrompt = await prompt.formatMessages({
    fileName: state.fileName,
    messages: state.messages
  })

  const res = await model.invoke(formattedPrompt)
  return {
    ...state,
    messages: [...state.messages, res]
  }
}

const runTests = async (state: typeof GraphState.State) => {
  const template = `You are a test execution specialist.
      Use the npm test command for running the tests.       
      Output:
      - Return a summary of the test results, highlighting any failures.
      - Include coverage information if available.;
    `

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', template],
    new MessagesPlaceholder('messages')
  ])

  const formattedPrompt = await prompt.formatMessages({
    fileName: state.fileName,
    messages: state.messages
  })

  const res = await model.invoke(formattedPrompt)
  return {
    ...state,
    messages: [...state.messages, res]
  }
}

const fixErrors = async (state: typeof GraphState.State) => {
  const template = `You are a test debugging expert.
    Review the failed tests for {fileName}:
    {testResults}
    
    Guidelines:
    1. Analyze each failure
    2. Identify root causes
    3. Propose fixes
    4. Update test cases
    5. Maintain test integrity`

  const prompt = ChatPromptTemplate.fromMessages([
    ['system', template],
    new MessagesPlaceholder('messages')
  ])

  const formattedPrompt = await prompt.formatMessages({
    fileName: state.fileName,
    testResults: JSON.stringify(state.testResults, null, 2),
    messages: state.messages
  })

  const res = await model.invoke(formattedPrompt)
  return {
    ...state,
    messages: [...state.messages, res],
    iteration: state.iteration + 1
  }
}

export {
  toolNode,
  tools,
  GraphState,
  runTests,
  checkFileExists,
  checkTestFile,
  createNewTests,
  readExistingTests,
  saveTests,
  fixErrors,
  toolExecutor,
  checkFileExistsEdges,
  checkTestFileEdges,
  writeTestsEdges,
  readExistingTestEdges,
  saveTestsEdges,
  runTestsEdges,
  fixErrorsEdges,
  listFilesDirectory,
  listFilesDirectoryEdges
}
