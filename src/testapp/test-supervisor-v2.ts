import { Annotation } from '@langchain/langgraph';
import { BaseMessage, ToolMessage } from '@langchain/core/messages';
import { HumanMessage } from '@langchain/core/messages';
import { ToolNode } from '@langchain/langgraph/prebuilt';
import { isCommand, Command } from '@langchain/langgraph';
import dotenv from 'dotenv';
import { createReactAgent } from '@langchain/langgraph/prebuilt';
// import { createSupervisor } from '@langchain/langgraph-supervisor';
import { z } from 'zod';
import { DynamicStructuredTool } from '@langchain/core/tools';

import { llm } from '../llm';
import { findFilesAndTestFilesResponseFormat } from '../structured_format';
import { GraphState } from '../utils/state';

dotenv.config();

const AgentState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y)
  })
});

async function loadSupervisor() {
  const supervisor = await import('@langchain/langgraph-supervisor');
  return supervisor;
}

export const findFileTool = new DynamicStructuredTool({
  name: 'find_file',
  description: 'Recursively searches for a file and returns its content',
  schema: z.object({
    reason: z.string().describe('What is the prompt that chose to call this tool from the context?'),
    fileName: z.string().describe('file name to search for'),
    searchRoot: z.string().optional().describe('current root directory to start search from'),
    excludeDirs: z.array(z.string()).optional().describe('directories to exclude from search'),
    encoding: z.string().optional().describe('encoding to use when reading file content')
  }),
  func: async (
    {
      fileName: fileNamePath,
      excludeDirs = [],
      encoding = 'utf8'
    }: {
      fileName: string;
      excludeDirs?: string[];
      encoding?: string;
    },
    runManager: any,
    config: any
  ) => {
    try {
      const mockDummyResult = {
        exists: true,
        files: [
          {
            fileName: 'sumOfNumbers.js',
            content: `function sum(a, b) {
                        return a + b;
                      }`,
            path: '/mnt/c/code/project/src/sumOfNumbers.js'
          }
          // {
          //   fileName: 'multipleNumbers.js',
          //   content: `
          //             function multiply(a, b) {
          //               return a * b;
          //             }`,
          //   path: '/mnt/c/code/project/src/multipleNumbers.js'
          // }
        ],
        message: 'Files found'
      };

      return new Command({
        // update state keys
        update: {
          fileName: mockDummyResult.files?.map(f => f.fileName).join('\n'),
          fileContent: mockDummyResult.files?.map(f => f.content).join('\n'),
          filePath: mockDummyResult.files?.map(f => f.path).join('\n'),
          messages: [
            new ToolMessage({
              content: `Files found: ${mockDummyResult.files?.map(f => f.path).join(', ')}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    } catch (error: any) {
      return {
        messageValue: {
          exists: false,
          error: error.message
        }
      };
    }
  }
});

export const findTestFileTool = new DynamicStructuredTool({
  name: 'find_test_file',
  description: 'Recursively finds and reads corresponding test file content',
  schema: z.object({
    reason: z.string().describe('What is the prompt that chose to call this tool from the context?'),
    sourcePath: z.string().describe('path to the source file'),
    extensions: z.array(z.string()).optional().describe('test file extensions to look for'),
    searchRoot: z.string().optional().describe('current root directory to start search from')
  }),
  func: async (
    {
      sourcePath,
      extensions = ['.test.tsx', '.spec.tsx', '.test.ts', '.spec.ts', '.test.js', '.spec.js', '.test.jsx', '.spec.jsx']
    }: {
      sourcePath: string;
      extensions?: string[];
    },
    runManager: any,
    config: any
  ) => {
    try {
      // Mock no test file found
      const mockDummyResult = {
        exists: false,
        testFileFound: false,
        testFileName: null,
        testFilePath: null,
        testFileContent: null
      };

      return new Command({
        // update state keys
        update: {
          testFileContent: mockDummyResult.testFileContent,
          testFileName: mockDummyResult.testFileName,
          testFilePath: mockDummyResult.testFilePath,
          testFileFound: mockDummyResult.testFileFound,
          messages: [
            new ToolMessage({
              content: 'No matching test file found',
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    } catch (error: any) {
      return {
        testFileContent: null,
        messageValue: {
          success: false,
          error: error.message
        }
      };
    }
  }
});

export const createFileTool = new DynamicStructuredTool({
  name: 'create_file',
  description: 'Creates a new file with completed content',
  schema: z.object({
    reason: z.string().describe('What is the reason that choose to call this tool from the context?'),
    path: z
      .string()
      .describe('path to the directory where the file should be created (must be a full path, not relative)'),
    fileName: z.string().describe('name of the file'),
    content: z.string().describe('content to write in the file'),
    overwrite: z.boolean().optional().describe('overwrite if file exists')
  }),
  func: async ({ path: dirPath, fileName, content, overwrite = false }, runManager: any, config: any) => {
    try {
      // Mock file creation
      return new Command({
        // update state keys
        update: {
          testFileName: fileName,
          testFilePath: dirPath,
          testFileContent: content,
          testFileFound: true,
          messages: [
            new ToolMessage({
              content: `File created successfully at ${dirPath}. File name: ${fileName} with content: ${content}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    } catch (error: unknown | any) {
      return new Command({
        // update state keys
        update: {
          hasError: true,
          messages: [
            new ToolMessage({
              content: `Error creating file: ${error.message}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    }
  }
});

export const appWorkflowRun = async () => {
  // Create agents
  const findFilesAgent = createReactAgent({
    llm: llm,
    tools: [findFileTool, findTestFileTool],
    name: 'find_files_expert',
    prompt:
      "You are directory search expert in finding files. Always use one  tool at a time. You can use the 'find_file' tool to search for a file or the 'find_test_file' tool to search for a test file. Please specify the file name you are looking for.",
    stateSchema: GraphState,
    responseFormat: findFilesAndTestFilesResponseFormat
  });

  const createFileAgent = createReactAgent({
    llm: llm,
    tools: [createFileTool],
    name: 'create_file_expert',
    prompt: `
          You are a file creation expert.
          The source file path is: {state.filePath}
          When creating a file, use these state values to determine the correct absolute path.
          Do NOT use placeholders or random paths.
            `.trim(),
    stateSchema: GraphState
  });

  // @ts-ignore
  const { createSupervisor } = await loadSupervisor();
  // @ts-ignore
  const workflow = createSupervisor({
    agents: [findFilesAgent, createFileAgent],
    llm: llm,
    prompt:
      'You are a team supervisor managing a file system expert, a file creation expert, a file reading expert, a file writing expert, and a test runner expert. ' +
      'For finding files, use find_files. ' +
      'For creating files, use create_file. ',
    supervisorName: 'code_assistant_supervisor',
    outputMode: 'full_history',
    stateSchema: GraphState
  });

  const app = workflow.compile();

  const prompt = `
  You are a coding assistant with expertise in test automation.
  You have been assigned with the following task:
  Generate and execute tests for "sumOfNumbers.js".

  Guidelines:
  1. Verify the source file exists
  2. Verify the test file exists
  3. If the test file does not exist, create a new test file relative to the source file and write the test content.
  4. If the test file exists, improve existing tests or create new tests for the source file.
  `;

  // Use the agent
  const finalState = await app.invoke(
    {
      messages: [new HumanMessage(prompt)]
    },
    {
      recursionLimit: 200,
      configurable: { thread_id: '1f88883e-42bf-4227-8331-b50fc75d0590' }
    }
  );

  // console.log(nextState.messages[nextState.messages.length - 1].content);
  const finalcontent = finalState.messages.map((m: any) => m.content);
  const testFileName = finalState.testFileName;
  const testFilePath = finalState.testFilePath;
  const fileName = finalState.fileName;
  const filePath = finalState.filePath;
  return {
    messages: finalcontent,
    testFileName,
    testFilePath,
    fileName,
    filePath,
    testFileContent: finalState.testFileContent,
    fileContent: finalState.fileContent
  };
};
