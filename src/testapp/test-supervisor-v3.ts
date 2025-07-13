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
import { promisify } from 'util';
import { exec } from 'child_process';

dotenv.config();

const AgentState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y)
  })
});

const nodeExecutor = promisify(exec);

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
              content: `Files found: ${mockDummyResult.files?.map(f => f.path).join(', ')}.`,
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
              content: `File created successfully at ${dirPath}. File name: ${fileName}`,
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

export const testResultFormat = z.object({
  status: z.enum(['passed', 'failed', 'skipped']),
  errorMessage: z.string().max(100, 'Must be at most 100 characters').nullable(),
  stackTrace: z.string().max(100, 'Must be at most 100 characters').nullable(),
  coverage: z
    .object({
      total: z.number().describe('Total number of lines covered by tests'),
      covered: z.number().describe('Number of lines covered by tests'),
      percentage: z.number().describe('Percentage of lines covered by tests')
    })
    .nullable()
});

export const npmTestTool = new DynamicStructuredTool({
  name: 'npm_test',
  description:
    'Executes npm test commands from root directory with support for various options including coverage and watch mode',
  schema: z.object({
    command: z.string().describe('npm command to execute'),
    silent: z.boolean().describe('Run command in silent mode'),
    json: z.boolean().describe('Output test results as JSON'),
    options: z
      .object({
        directory_path: z
          .string()
          .optional()
          .describe(
            'path to the directory where the command will be executed. i.e where the package.json file is located'
          ),
        testFilePath: z.string().optional().describe('Path to the single test file to run and collect coverage'),
        coverage: z.boolean().optional().describe('Run tests with coverage'),
        watch: z.boolean().optional().describe('Run tests in watch mode'),
        testRegex: z.string().optional().describe('Regular expression to match test files'),
        updateSnapshots: z.boolean().optional().describe('Update test snapshots')
      })
      .optional()
  }),
  func: async ({ command, silent = true, options = {} }, runManager: any, config: any) => {
    try {
      const testCommandCheck = command.includes('test');
      let fullCommand = !command.startsWith('npm') ? `npm ${testCommandCheck ? '' : 'test'} ${command}` : command;
      // Add options to the command
      if (options.directory_path) fullCommand += ` --prefix ${options.directory_path}`;
      // suffix json
      fullCommand += ` -- --json`;
      if (silent) fullCommand += ' --silent';
      if (options.coverage && !fullCommand.includes('--coverage') && options.testFilePath) {
        fullCommand += ' --coverage';
        // run coverage with test file name --collectCoverageFrom=testFileName
        fullCommand += ` --collectCoverageFrom="${options.testFilePath || ''}"`;
      }
      // if (options.json) fullCommand += " --json";
      if (options.testRegex) fullCommand += ` --testRegex="${options.testRegex}"`;
      if (options.updateSnapshots) fullCommand += ' -u';

      // // append silent flag to suppress npm notices
      // // fullCommand += " --silent 2>/dev/null";
      // let { stdout, stderr } = await nodeExecutor(fullCommand);

      // Mock the command execution and return a dummy result
      const mockFileName = 'sumOfNumbers.js';
      const mockFilePath = '/mnt/c/code/project/src/sumOfNumbers.js';

      let stdout = `
        yarn run v1.22.22
        $ C:\\code\\JobPixels\\jp-web\\node_modules\\.bin\\jest ${mockFileName.replace('.js', '')} --coverage --json --collectCoverageFrom=**/${mockFileName.replace('.js', '')}* --silent
        (node:2264) [DEP0040] DeprecationWarning: The \`punycode\` module is deprecated. Please use a userland alternative instead.
        (Use \`node --trace-deprecation ...\` to show where the warning was created)
        PASS  ${mockFilePath}

        Test Suites: 1 passed, 1 total
        Tests:       5 passed, 5 total
        Snapshots:   0 total
        Time:        4.077 s, estimated 7 s
        {"numFailedTestSuites":0,"numFailedTests":0,"numPassedTestSuites":1,"numPassedTests":5,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":1,"numTotalTests":5,"openHandles":[],"snapshot":{"added":0,"didUpdate":false,"failure":false,"filesAdded":0,"filesRemoved":0,"filesRemovedList":[],"filesUnmatched":0,"filesUpdated":0,"matched":0,"total":0,"unchecked":0,"uncheckedKeysByFile":[],"unmatched":0,"updated":0},"startTime":1752443233346,"success":true,"testResults":[{"assertionResults":[{"ancestorTitles":["${mockFileName.replace('.js', '')}"],"duration":288,"failureDetails":[],"failureMessages":[],"fullName":"${mockFileName.replace('.js', '')} renders ${mockFileName.replace('.js', '')} component correctly","invocations":1,"location":null,"numPassingAsserts":8,"retryReasons":[],"status":"passed","title":"renders ${mockFileName.replace('.js', '')} component correctly"}],"endTime":1752443237041,"message":"","name":"${mockFilePath}","startTime":1752443234343,"status":"passed","summary":""}],"wasInterrupted":false,"coverageMap":{"${mockFilePath}":{"path":"${mockFilePath}","statementMap":{}}},"startTime":1752443233346,"success":true}
        Done in 5.43s.
        `;

      // // check the length of stdout and trim it to max 10000 characters
      if (stdout.length > 10000) {
        console.warn('stdout is too long, trimming to 10000 characters');
        stdout = stdout.substring(0, 5000);
      }
      return new Command({
        // update state keys
        update: {
          testResults: { success: true, output: JSON.stringify(stdout) },
          hasError: false,
          messages: [
            new ToolMessage({
              content: 'Test command executed successfully',
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
          testResults: {
            success: false,
            error: error.message,
            output: error.stdout || ''
          },
          messages: [
            new ToolMessage({
              content: `Error executing test command: ${error.message}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    }
  }
});

const npmTestAgent = createReactAgent({
  llm: llm,
  tools: [npmTestTool],
  name: 'npm_test_expert',
  prompt: 'You are a test runner expert. Please use the "npm_test" tool to run the tests from root directory path.',
  responseFormat: testResultFormat,
  stateSchema: GraphState
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
    agents: [findFilesAgent, createFileAgent, npmTestAgent],
    llm: llm,
    prompt:
      'You are a team supervisor managing a file system expert, a file creation expert, a file reading expert, a file writing expert, and a test runner expert. ' +
      'For finding files, use find_files. ' +
      'For creating files, use create_file. ' +
      'For running tests, use npm_test.' +
      'For running nodejs scripts, use node_exec.',
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
  5. Run the tests with coverage enabled in silent mode and json output. Test Coverage should be collected for the source file only.
  6. Fix any failures by ignoring warnings and re-run tests until all tests pass. Continue to improve the tests until they are comprehensive.
  7. Provide final summary of the test results and coverage details in markdown format.
  `;

  // Use the agent
  const finalState = await app.invoke(
    {
      messages: [new HumanMessage(prompt)]
    },
    {
      recursionLimit: 100,
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
