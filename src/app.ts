import { MemorySaver, InMemoryStore, Command } from '@langchain/langgraph';
import { HumanMessage } from '@langchain/core/messages';
import * as core from '@actions/core';
import { StateGraph } from '@langchain/langgraph';
import { BaseMessage } from '@langchain/core/messages';
import { Annotation } from '@langchain/langgraph';
import { AIMessage } from '@langchain/core/messages';
import { isAIMessage } from '@langchain/core/messages';
import { ToolMessage } from '@langchain/core/messages';
import { isCommand } from '@langchain/langgraph';
import { CustomTools } from './tools';
import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { llm } from './llm';
const tools = [...CustomTools];
const toolMap = new Map(tools.map(tool => [tool.name, tool]));

export const MainGraphRun = async () => {
  // Initialize memory to persist state between graph runs
  const checkpointer = new MemorySaver();
  const inMemoryStore = new InMemoryStore();

  const filename: string = core.getInput('file_name');
  const toolNames = CustomTools.map(tool => tool.name).join(', ');

  // Define the graph state with additional properties
  const GraphState = Annotation.Root({
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
    testFileFound: Annotation<boolean>({
      reducer: z => z,
      default: () => false
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

  type State = typeof GraphState.State;
  type Update = typeof GraphState.Update;

  const toolExecutor = async (state: State) => {
    const message = state.messages.at(-1);
    // @ts-ignore
    if (!isAIMessage(message) || message.tool_calls === undefined || message.tool_calls.length === 0) {
      throw new Error('Most recent message must be an AIMessage with a tool call.');
    }

    // Execute all tool calls in parallel with proper error handling
    const toolResults = (await Promise.allSettled(
      message.tool_calls.map(async (toolCall: any) => {
        try {
          const tool = toolMap.get(toolCall.name);
          if (!tool) {
            throw new Error(`Tool ${toolCall.name} not found`);
          }

          const result = await tool.invoke(toolCall.args);
          return {
            success: true,
            result
          };
        } catch (error) {
          return {
            success: false,
            result: null,
            error: error instanceof Error ? error.message : String(error)
          };
        }
      })
    )) as any[];

    // Process results and create state updates
    const stateUpdates = toolResults.map((result: any, index: number) => {
      // @ts-ignore
      const toolCall = message?.tool_calls[index];

      if (result.status === 'rejected') {
        // Handle promise rejection
        return new Command({
          update: {
            messages: [
              new ToolMessage({
                content: `Tool execution failed: ${result.reason}`,
                // @ts-ignore
                tool_call_id: toolCall.id,
                additional_kwargs: { error: result.reason }
              })
            ]
          }
        });
      }

      const toolResult = result.value;
      if (!toolResult.success) {
        // Handle tool execution error
        return new Command({
          update: {
            messages: [
              new ToolMessage({
                content: `Tool execution failed: ${toolResult.error}`,
                // @ts-ignore
                tool_call_id: toolCall.id,
                additional_kwargs: { error: toolResult.error }
              })
            ]
          }
        });
      }

      // Handle successful tool execution
      if (isCommand(toolResult.result)) {
        return toolResult.result;
      }

      const { messages: xmsg, ...restResult } = toolResult.result;
      // Convert regular tool output to Command
      return new Command({
        ...restResult,
        messages: [
          new ToolMessage({
            content:
              typeof toolResult.result === 'string' ? toolResult.result : JSON.stringify(toolResult.result, null, 2),
            // @ts-ignore
            tool_call_id: toolCall.id,
            additional_kwargs: { result: toolResult.result }
          })
        ]
      });
    });

    // Handle mixed Command and non-Command outputs
    const combinedOutputs = stateUpdates.map(output => {
      if (isCommand(output)) {
        return output;
      }
      // Tool invocation result is a ToolMessage, return a normal state update
      return { messages: [output] };
    });
    // Return an array of values instead of an object
    return combinedOutputs;

    // // after tool call execution, update the state
    // const stateUpdateReducer = stateUpdates.reduce(
    //   (acc, update) => {
    //     const { messages, ...restUpdate } = update;
    //     return {
    //       ...restUpdate,
    //       messages: [...acc.messages, ...messages]
    //     };
    //   },
    //   { fileContent: null, filePath: null, messages: [] }
    // );

    // const { messages: updatedMessages, ...restStateUpdates } = stateUpdateReducer;

    // // Combine all state updates
    // console.log('stateUpdateReducer', JSON.stringify(stateUpdateReducer, null, 2));
    // return {
    //   ...state,
    //   ...restStateUpdates,
    //   messages: updatedMessages
    // };
  };

  const callToolsEdge = async (state: State) => {
    const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
    if (lastMessage.tool_calls?.length) {
      return 'tools';
    }
    const hasFile = state.fileName && state.filePath;
    const hasTestFile = state.testFileName && state.testFilePath;
    const hasBothFiles = hasFile && hasTestFile;
    const { messages, ...restOfTheState } = state;
    console.log('callToolsEdge state params', JSON.stringify(restOfTheState, null, 2));

    if (state.iteration > 5) {
      return '__end__';
    }

    if (state.testSummary && state.testSummary?.failureReasons?.length > 0) {
      return 'fix-errors';
    } else if (state.testSummary && state.testSummary?.failureReasons?.length === 0) {
      return '__end__';
    }

    if (state.testResults) {
      return 'analyze-results';
    }

    if (hasBothFiles) {
      return 'analyze-existing-tests';
    } else if (state.fileName && state.filePath && !state.testFileFound) {
      return 'create-new-tests';
    }

    if (state.filePath) {
      // found source file, now find test file
      return 'find-test-file';
    }

    return 'find-file';
  };

  const analyzeExistingTests = async (state: State): Promise<Update> => {
    const template = `
    All necessary test cases and component details are included below.
    Analyze the existing test cases for {fileName} and determine if they are sufficient.
    If the tests are inadequate, create new test cases to improve coverage.

    ### Test File Name: {testFileName}
    ### Test file path: {testFilePath}
    ### **Existing Test Content:**
    {testFileContent}

    ### **Component Content:**
    {fileContent}

    ### **Guidelines:**
    - **Analyze** the existing test cases for coverage and accuracy.
    - **Identify** any gaps or missing test scenarios.
    - **Create** new test cases to improve coverage if necessary.
    - **Maintain** consistency with existing test structure.
    - **Ensure** the tests are accurate, reliable, and compatible with the component.

    ### **Output:**
    - Return the updated test file content only.
    - If new test cases are created, use write-file tool call to save the test file.
  `;

    const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

    const formattedPrompt = await prompt.formatMessages({
      fileName: state.fileName,
      testFileName: state.testFileName,
      testFilePath: state.testFilePath,
      testFileContent: state.testFileContent,
      fileContent: state.fileContent,
      messages: state.messages
    });

    const res = await llm.invoke(formattedPrompt);
    return {
      // @ts-ignore
      messages: [res]
    };
  };

  // edge
  const analyzeExistingTestEdges = async (state: State) => {
    const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
    if (lastMessage.tool_calls?.length) {
      return 'tools';
    }
    return 'run-tests';
  };

  const analyzeTestResults = async (state: State): Promise<Update> => {
    const template = `
Analyze the test results and return the parsed JSON output for further reporting.
IMPORTANT: Call the tool 'json-test-result-analyzer' with the final json.

### **Test Results:**  
{testResults}

`;

    const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

    const formattedPrompt = await prompt.formatMessages({
      fileName: state.fileName,
      messages: state.messages,
      testResults: JSON.stringify(state.testResults, null, 2)
    });

    const res = await llm.invoke(formattedPrompt);
    return {
      ...state,
      // @ts-ignore
      messages: [res]
    };
  };

  // examin test results edges
  const analyzeTestResultsEdges = async (state: State) => {
    const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
    if (lastMessage.tool_calls?.length) {
      return 'tools';
    } else if (state.testSummary && state.testSummary.failureReasons?.length > 0) {
      return 'fix-errors';
    }
    return '__end__';
  };

  const checkFileExists = async (state: State): Promise<Update> => {
    const template = `
    Given the filename {fileName}, verify it exists in the codebase.
    Use the available tool: find-file.
    Current time: {time}
    `;

    const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

    const formattedPrompt = await prompt.formatMessages({
      fileName: state.fileName,
      time: new Date().toISOString(),
      messages: state.messages
    });

    const res = await llm.invoke(formattedPrompt);
    return {
      // @ts-ignore
      messages: [res]
    };
  };

  // Edge
  const checkFileExistsEdges = async (state: State) => {
    const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
    if (lastMessage.tool_calls?.length) {
      return 'tools';
    }
    if (state.fileContent === null) {
      return 'find-file';
    } else if (state.testFileName && state.testFileContent) {
      return 'analyze-existing-tests';
    } else return 'find-test-file';
  };

  const checkTestFile = async (state: State): Promise<Update> => {
    const template = `
    Your task is to check if a test file exists for {fileName}.
    
    ### **Guidelines:**
    1. Look for both .test.tsx and .spec.tsx extensions.
    2. If found, read and store the existing test content.
    
    ### **Tools:**
    - Use the available tool: find-test-file.
    
    ### **Expected Output:**
    1. Return the content of the test file if found.
    2. If no test file is found, indicate that no test file exists.
    
    Current time: {time}
    IMPORTANT: Strictly follow the provided guidelines.
    `;

    const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

    const formattedPrompt = await prompt.formatMessages({
      fileName: state.fileName,
      time: new Date().toISOString(),
      messages: state.messages
    });

    const res = await llm.invoke(formattedPrompt);
    return {
      // @ts-ignore
      messages: [res]
    };
  };

  // Edge
  const checkTestFileEdges = async (state: State) => {
    const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
    if (lastMessage.tool_calls?.length) {
      return 'tools';
    }

    // Route based on whether test file exists
    return state.testFileContent ? 'analyze-existing-tests' : 'create-new-tests';
  };

  const createNewTests = async (state: State): Promise<Update> => {
    const template = `
    Your task is to create comprehensive test cases for the component specified in {fileName}.
    The component's content is provided below:

    Component content: {fileContent}
    
    Guidelines:
    1. Write tests that thoroughly cover the component's functionality.
    2. Test all possible inputs and their variations.
    3. Include tests for user interactions and edge cases.
    4. Ensure robust error handling and test boundary conditions.
    5. Aim for a test coverage of over 80%.
    
    Use modern testing practices and frameworks that are appropriate for the language of the component.
    `;

    const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

    const formattedPrompt = await prompt.formatMessages({
      fileName: state.fileName,
      fileContent: state.fileContent,
      messages: state.messages
    });

    const res = await llm.invoke(formattedPrompt);
    return {
      // @ts-ignore
      messages: [res]
    };
  };

  const fixErrors = async (state: State): Promise<Update> => {
    const template = `
    Fix and update test cases for {fileName}, then save the updated file.
    
    ### **Test Failures:**  
    {failureReasons}
    
    ### **Instructions:**  
    - **Analyze** test failures and identify root causes.  
    - **Fix errors** and update test cases accordingly.  
    - **Ensure tests remain accurate, reliable, and compatible.**  
    - **Maintain best practices** and follow existing test structure.  
    
    ### **Test File Name:**  
    {testFileName}
    
    ### **Test File Path:**  
    {testFilePath}
    
    ### **Existing Test Content:**  
    {testFileContent}
    
    ### **Component Content:**  
    {fileContent}
    
    ### **Output:**  
    1. Return the **fully updated test file**, ready to run.  
    2. **Use the 'write-file' tool call** to save the updated test file.  
    `;

    const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

    const formattedPrompt = await prompt.formatMessages({
      fileName: state.fileName,
      testFileName: state.testFileName,
      testFilePath: state.testFilePath,
      fileContent: state.fileContent,
      testFileContent: state.testFileContent,
      failureReasons: state.testResults ? JSON.stringify(state.testResults.failures, null, 2) : 'No test results found',
      messages: state.messages
    });

    const res = await llm.invoke(formattedPrompt);
    return {
      // @ts-ignore
      messages: [res],
      iteration: state.iteration + 1,
      // reset error flags
      hasError: false,
      testResults: null,
      testSummary: null
    };
  };

  // Edge
  const fixErrorsEdges = async (state: State) => {
    const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
    if (lastMessage.tool_calls?.length) {
      return 'tools';
    }
    if (state.iteration > 5) {
      return '__end__';
    }
    return 'run-tests';
  };

  const runTests = async (state: State): Promise<Update> => {
    const template = `
    ### Task: Run Tests and Analyze Results

    Execute the test suite using the appropriate **npm test command**.

    use the **tool call** npm-test to run the tests.
    
    Output:
    - Return a summary of the test results, highlighting any failures.
    - Include coverage information if available.;
  `;

    const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

    const formattedPrompt = await prompt.formatMessages({
      fileName: state.fileName,
      messages: state.messages
    });

    const res = await llm.invoke(formattedPrompt);
    return {
      // @ts-ignore
      messages: [res]
    };
  };

  // edge
  const runTestsEdges = async (state: State) => {
    const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
    if (lastMessage.tool_calls?.length) {
      return 'tools';
    }
    return 'analyze-results';
  };

  const saveTests = async (state: State): Promise<Update> => {
    const template = `
    Save the generated test content to a file with correct naming convention and path.

### **File Naming Rules:**
- Use the appropriate test file extension: **'.test.tsx'** or **.spec.tsx**.
- Maintain the same directory structure as {fileName}.
- Ensure consistency with existing test files.

### **Expected Action:**
- Save the file using a **tool call** write-file with the correct **file path and name**.
- Test file path: **{testFilePath}**

 `;

    const prompt = ChatPromptTemplate.fromMessages([['system', template], new MessagesPlaceholder('messages')]);

    const formattedPrompt = await prompt.formatMessages({
      fileName: state.fileName,
      messages: state.messages,
      testFilePath: state.testFilePath
    });

    const res = await llm.invoke(formattedPrompt);
    return {
      // @ts-ignore
      messages: [res]
    };
  };

  const writeTestsEdges = async (state: State) => {
    const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
    if (lastMessage.tool_calls?.length) {
      return 'tools';
    }
    return 'find-test-file';
  };

  // Define a separate edge handler for save tests
  const saveTestsEdges = async (state: State) => {
    const lastMessage = state.messages[state.messages.length - 1] as AIMessage;
    if (lastMessage.tool_calls?.length) {
      return 'tools';
    }
    return 'run-tests'; // After saving, proceed to run tests
  };

  // Create and compile the graph
  const workflow = new StateGraph(GraphState)
    // Add nodes
    .addNode('find-file', checkFileExists)
    .addNode('tools', toolExecutor)
    .addNode('find-test-file', checkTestFile)
    .addNode('create-new-tests', createNewTests)
    .addNode('analyze-existing-tests', analyzeExistingTests)
    .addNode('save-tests', saveTests)
    .addNode('run-tests', runTests)
    .addNode('analyze-results', analyzeTestResults)
    .addNode('fix-errors', fixErrors)

    // Add edges with fixed flow
    .addEdge('__start__', 'find-file')
    .addConditionalEdges('find-file', checkFileExistsEdges)
    .addConditionalEdges('find-test-file', checkTestFileEdges)
    .addConditionalEdges('create-new-tests', writeTestsEdges)
    .addConditionalEdges('analyze-existing-tests', analyzeExistingTestEdges)
    .addConditionalEdges('save-tests', saveTestsEdges) // Use new edge handler
    .addConditionalEdges('run-tests', runTestsEdges)
    .addConditionalEdges('analyze-results', analyzeTestResultsEdges)
    .addConditionalEdges('fix-errors', fixErrorsEdges)
    .addConditionalEdges('tools', callToolsEdge)
    .addEdge('analyze-results', '__end__');

  const app = workflow.compile({ checkpointer, store: inMemoryStore });
  console.log('app version', 'v0.1.52-alpha.5');

  const query = `
  You are a coding assistant with expertise in test automation.
  Generate and execute tests for ${filename}.

  Use the available tools: ${toolNames}.
  Current time: {time}

  Guidelines:
  1. Verify the source file exists
  2. Check for existing test file
  3. Improve existing tests or create new tests
  4. Save test file
  5. Run tests with coverage
  6. Fix any failures`;

  // Use the Runnable
  const currentDate = new Date().toISOString().replace('T', ' ').split('.')[0];
  const outputContent = await app.invoke(
    {
      messages: [new HumanMessage(query)],
      fileName: filename
    },
    { recursionLimit: 100, configurable: { thread_id: 1001 } }
  );

  console.log('result of graph for a threadId:', currentDate);

  // console.log(resultOfGraph.messages.map((m) => m.content).join("\n"));
  console.log(outputContent);
};
