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
    path: z.string().describe('path or name of the file to find'),
    searchRoot: z.string().optional().describe('current root directory to start search from'),
    excludeDirs: z.array(z.string()).optional().describe('directories to exclude from search'),
    encoding: z.string().optional().describe('encoding to use when reading file content')
  }),
  func: async (
    {
      path: filePath,
      excludeDirs = [],
      encoding = 'utf8'
    }: {
      path: string;
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
            fileName: 'example.txt',
            content: 'This is an example file content.',
            path: '/path/to/example.txt'
          },
          {
            fileName: 'example2.txt',
            content: 'This is another example file content.',
            path: '/path/to/example2.txt'
          }
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
              content: 'Successfully looked up user information',
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
      extensions = ['.test.tsx', '.spec.tsx', '.test.ts', '.spec.ts']
    }: {
      sourcePath: string;
      extensions?: string[];
    },
    runManager: any,
    config: any
  ) => {
    try {
      const mockDummyResult = {
        testFileFound: true,
        testFileName: 'example.test.ts',
        testFilePath: '/path/to/example.test.ts',
        testFileContent: 'This is an example test file content.',
        message: 'Test file found'
      };
      const testFile = mockDummyResult;
      const testFileFound = !!testFile;

      return new Command({
        // update state keys
        update: {
          testFileFound: true,
          testFileName: 'example.test.ts',
          testFilePath: '/path/to/example.test.ts',
          testFileContent: 'This is an example test file content.',
          messages: [
            new ToolMessage({
              content: 'Successfully found test file',
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

  // @ts-ignore
  const { createSupervisor } = await loadSupervisor();
  // @ts-ignore
  const workflow = createSupervisor({
    agents: [findFilesAgent],
    llm: llm,
    prompt:
      'You are a team supervisor managing a file system expert, a file creation expert, a file reading expert, a file writing expert, and a test runner expert. ' +
      'For finding files, use find_files. ',
    supervisorName: 'code_assistant_supervisor',
    outputMode: 'full_history',
    stateSchema: GraphState
  });

  const app = workflow.compile();
  console.log('app version', 'v0.1.60-alpha.01');

  const prompt = `
  You are a coding assistant with expertise in test automation.
  You have been assigned with the following task:
  find source and test files for "example.txt".

  Guidelines:
  1. Verify the source file exists
  2. Check for existing test file for a given source file
  `;

  // Use the agent
  const finalState = await app.invoke({
    messages: [new HumanMessage(prompt)]
  });

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
