import { z } from 'zod';
import { ToolMessage } from '@langchain/core/messages';
import { DynamicStructuredTool } from '@langchain/core/tools';
import { Command } from '@langchain/langgraph';
import { promisify } from 'util';
import { exec } from 'child_process';

// nodeExecutor: return status, stdout (filtered), and error message
const nodeExecutor = async (cmd: string, options: any = {}) => {
  try {
    const { stdout } = await promisify(exec)(cmd, { ...options, maxBuffer: 1024 * 1024 * 10 });
    // Filter out lines containing 'warning' (case-insensitive)
    const filteredStdout = stdout
      .toString()
      .split('\n')
      .filter((line: string) => !/warning/i.test(line))
      .join('\n');
    return { success: true, stdout: filteredStdout };
  } catch (error: any) {
    // Filter out warnings from error.stdout if present
    let filteredStdout = '';
    if (error.stdout) {
      filteredStdout = error.stdout
        .toString()
        .split('\n')
        .filter((line: string) => !/warning/i.test(line))
        .join('\n');
    }
    return { success: false, error: error.message, stdout: filteredStdout };
  }
};

export const NodeExecutorTool = new DynamicStructuredTool({
  name: 'npm_exec',
  description: 'Executes npm or Node.js commands with support for various options',
  schema: z.object({
    command: z.string().describe('npm or Node.js command to execute'),
    options: z
      .object({
        directory_path: z
          .string()
          .optional()
          .describe(
            'path to the directory where the command will be executed. i.e where the package.json file is located'
          ),
        force: z.boolean().optional().describe('Run command with --force'),
        legacyPeerDeps: z.boolean().optional().describe('Run command with --legacy-peer-deps'),
        coverage: z.boolean().optional().describe('Run tests with coverage'),
        json: z.boolean().optional().describe('Output test results as JSON'),
        watch: z.boolean().optional().describe('Run tests in watch mode'),
        testRegex: z.string().optional().describe('Regular expression to match test files'),
        updateSnapshots: z.boolean().optional().describe('Update test snapshots'),
        testFilePath: z.string().optional().describe('Path to the single test file to run and collect coverage')
      })
      .optional()
  }),
  func: async ({ command, options = {} }, runManager: any, config: any) => {
    let fullCommand = command;
    // Add options to the command
    if (options.directory_path) fullCommand += ` --prefix ${options.directory_path}`;
    if (options.force) fullCommand += ' --force';
    if (options.legacyPeerDeps) fullCommand += ' --legacy-peer-deps';
    if (options.coverage) {
      fullCommand += ' --coverage';
      // run coverage with test file name --collectCoverageFrom=testFileName
      if (options.testFilePath) {
        fullCommand += ` --collectCoverageFrom=\"${options.testFilePath}\"`;
      }
    }
    if (options.json) fullCommand += ' --json';
    if (options.watch) fullCommand += ' --watch';
    if (options.testRegex) fullCommand += ` --testRegex=\"${options.testRegex}\"`;
    if (options.updateSnapshots) fullCommand += ' -u';

    const result = await nodeExecutor(fullCommand);
    if (result.success) {
      return new Command({
        update: {
          testResults: { success: true, output: result.stdout },
          hasError: false,
          messages: [
            new ToolMessage({
              content: 'Command executed successfully',
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    } else {
      return new Command({
        update: {
          hasError: true,
          testResults: {
            success: false,
            error: result.error,
            output: result.stdout
          },
          messages: [
            new ToolMessage({
              content: `Error executing command: ${result.error}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    }
  }
});

export const npmTestTool = new DynamicStructuredTool({
  name: 'npm_test',
  description:
    'Executes npm test commands from root directory with support for various options including coverage, json mode, silent mode, testPath and snapshot updates.',
  schema: z.object({
    command: z.string().describe('npm command to execute, e.g. test, test <file>, etc.'),
    silent: z.boolean().default(true).describe('Run command in silent mode'),
    json: z.boolean().default(true).describe('Output test results as JSON'),
    findRelatedTests: z.string().describe('Run tests related to a specific file'),
    options: z
      .object({
        directory_path: z.string().optional().describe('Path where package.json is located (cwd override)'),
        testFilePath: z.string().optional().describe('Path to a single test file to run and collect coverage from'),
        coverage: z.boolean().optional().describe('Enable code coverage'),
        watch: z.boolean().optional().describe('Enable watch mode'),
        updateSnapshots: z.boolean().optional().describe('Update test snapshots')
      })
      .optional()
  }),
  func: async (
    { command, silent = true, json = true, findRelatedTests, options = {} },
    runManager: any,
    config: any
  ) => {
    try {
      const { directory_path, testFilePath, coverage, watch, updateSnapshots } = options;

      // Ensure command starts with `npm`
      let baseCommand = command.trim();
      if (!baseCommand.startsWith('npm')) {
        baseCommand = `npm test ${baseCommand}`;
      }

      // Prepare arguments
      const args: string[] = [];

      if (findRelatedTests) {
        args.push('--findRelatedTests', findRelatedTests);
      }

      if (json) args.push('--json');
      if (silent) args.push('--silent');
      if (coverage && testFilePath) {
        args.push('--coverage', `--collectCoverageFrom=**/${testFilePath}*`);
      }

      if (watch) args.push('--watch');
      if (updateSnapshots) args.push('-u');

      // Combine full command
      let fullCommand = `${baseCommand} -- ${args.join(' ')}`;

      // Execute command (in directory if provided)
      const execOptions = directory_path ? { cwd: directory_path } : undefined;
      let result = await nodeExecutor(fullCommand, execOptions);
      let stdout = result.stdout || '';
      // check the length of stdout and trim it to max 10000 characters
      if (stdout.length > 5000) {
        console.warn('stdout is too long, trimming to 10000 characters');
        stdout = stdout.substring(0, 5000);
      }
      return new Command({
        update: {
          testResults: { success: result.success, output: stdout },
          hasError: !result.success,
          messages: [
            new ToolMessage({
              content: result.success
                ? 'Test command executed successfully. Analyze the output for results.'
                : `Error executing test command: ${result.error}. Check if the test file exists and is valid. Use the write_file tool to create or update the test file.`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    } catch (error: any) {
      return new Command({
        update: {
          hasError: true,
          testResults: {
            success: false,
            error: error.message,
            output: error.stdout || ''
          },
          messages: [
            new ToolMessage({
              content: `Error executing test command: ${error.message}. Check if the test file exists and is valid. Use the write_file tool to create or update the test file.`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    }
  }
});

export const yarnTestTool = new DynamicStructuredTool({
  name: 'yarn_test',
  description: 'Executes yarn test commands with support for various options including coverage and watch mode',
  schema: z.object({
    command: z.string().describe('yarn command to execute'),
    silent: z.boolean().describe('Run command in silent mode'),
    json: z.boolean().describe('Output test results as JSON'),
    testRegex: z.string().describe('Regular expression to match test files'),
    options: z
      .object({
        directory_path: z
          .string()
          .optional()
          .describe(
            'path to the directory where the command will be executed. i.e where the package.json file is located'
          ),
        coverage: z.boolean().optional().describe('Run tests with coverage'),
        json: z.boolean().optional().describe('Output test results as JSON'),
        watch: z.boolean().optional().describe('Run tests in watch mode'),
        updateSnapshots: z.boolean().optional().describe('Update test snapshots'),
        testFilePath: z.string().optional().describe('Path to the single test file to run and collect coverage')
      })
      .optional()
  }),
  func: async ({ command, silent = true, testRegex, options = {} }, runManager: any, config: any) => {
    try {
      const testCommandCheck = command.includes('test');
      let fullCommand = !command.startsWith('yarn') ? `yarn ${testCommandCheck ? '' : 'test'} ${command}` : command;
      // Add options to the command
      if (options.directory_path) fullCommand += ` --cwd ${options.directory_path}`;
      // suffix json
      fullCommand += ` --json`;
      if (silent) fullCommand += ' --silent';
      if (options.coverage && options.testFilePath) {
        fullCommand += ' --coverage';
        // run coverage with test file name --collectCoverageFrom=testFileName
        fullCommand += ` --collectCoverageFrom="${options.testFilePath}"`;
      }
      if (options.watch) fullCommand += ' --watch';
      if (testRegex) fullCommand += ` --testRegex="${testRegex}"`;
      if (options.updateSnapshots) fullCommand += ' -u';

      let result = await nodeExecutor(fullCommand);
      let stdout = result.stdout || '';
      // check the length of stdout and trim it to max 10000 characters
      if (stdout.length > 5000) {
        console.warn('stdout is too long, trimming to 10000 characters');
        stdout = stdout.substring(0, 5000);
      }

      return new Command({
        // update state keys
        update: {
          testResults: { success: result.success, output: stdout },
          hasError: !result.success,
          messages: [
            new ToolMessage({
              content: result.success
                ? 'Yarn test command executed successfully'
                : `Error executing yarn test command: ${result.error}`,
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
              content: `Error executing yarn test command: ${error.message}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    }
  }
});

export const InstallTools = [
  // Enhanced npm install tool with Command
  new DynamicStructuredTool({
    name: 'npm-install',
    description: 'Executes npm install commands with support for various options including force and legacy-peer-deps',
    schema: z.object({
      options: z
        .object({
          directory_path: z
            .string()
            .optional()
            .describe(
              'path to the directory where the command will be executed. i.e where the package.json file is located'
            ),
          force: z.boolean().optional().describe('Run install with --force'),
          legacyPeerDeps: z.boolean().optional().describe('Run install with --legacy-peer-deps')
        })
        .optional()
    }),
    func: async ({ options = {} }, runManager: any) => {
      try {
        let fullCommand = 'npm install';
        // Add options to the command
        if (options.directory_path) fullCommand += ` --prefix ${options.directory_path}`;
        if (options.force) fullCommand += ' --force';
        if (options.legacyPeerDeps) fullCommand += ' --legacy-peer-deps';

        const result = await nodeExecutor(fullCommand);

        return {
          installResults: { success: result.success, output: result.stdout },
          hasError: !result.success,
          messageValue: result.success ? 'Install command executed successfully' : result.error
        };
      } catch (error: unknown | any) {
        return {
          hasError: true,
          installResults: {
            success: false,
            error: error.message,
            output: error.stdout || ''
          },
          messageValue: error.message
        };
      }
    }
  }),

  // Enhanced yarn install tool with Command
  new DynamicStructuredTool({
    name: 'yarn-install',
    description: 'Executes yarn install commands with support for various options including force and legacy-peer-deps',
    schema: z.object({
      options: z
        .object({
          directory_path: z
            .string()
            .optional()
            .describe(
              'path to the directory where the command will be executed. i.e where the package.json file is located'
            ),
          force: z.boolean().optional().describe('Run install with --force'),
          legacyPeerDeps: z.boolean().optional().describe('Run install with --legacy-peer-deps')
        })
        .optional()
    }),
    func: async ({ options = {} }, runManager: any) => {
      try {
        let fullCommand = 'yarn install';
        // Add options to the command
        if (options.directory_path) fullCommand += ` --cwd ${options.directory_path}`;
        if (options.force) fullCommand += ' --force';
        if (options.legacyPeerDeps) fullCommand += ' --legacy-peer-deps';

        const result = await nodeExecutor(fullCommand);

        return {
          installResults: { success: result.success, output: result.stdout },
          hasError: !result.success,
          messageValue: result.success ? 'Install command executed successfully' : result.error
        };
      } catch (error: unknown | any) {
        return {
          hasError: true,
          installResults: {
            success: false,
            error: error.message,
            output: error.stdout || ''
          },
          messageValue: error.message
        };
      }
    }
  }),

  // Enhanced pnpm install tool with Command
  new DynamicStructuredTool({
    name: 'pnpm-install',
    description: 'Executes pnpm install commands with support for various options including force and legacy-peer-deps',
    schema: z.object({
      options: z
        .object({
          directory_path: z
            .string()
            .optional()
            .describe(
              'path to the directory where the command will be executed. i.e where the package.json file is located'
            ),
          force: z.boolean().optional().describe('Run install with --force'),
          legacyPeerDeps: z.boolean().optional().describe('Run install with --legacy-peer-deps')
        })
        .optional()
    }),
    func: async ({ options = {} }, runManager: any) => {
      try {
        let fullCommand = 'pnpm install';
        // Add options to the command
        if (options.directory_path) fullCommand += ` --prefix ${options.directory_path}`;
        if (options.force) fullCommand += ' --force';
        if (options.legacyPeerDeps) fullCommand += ' --legacy-peer-deps';

        const result = await nodeExecutor(fullCommand);

        return {
          installResults: { success: result.success, output: result.stdout },
          hasError: !result.success,
          messageValue: result.success ? 'Install command executed successfully' : result.error
        };
      } catch (error: unknown | any) {
        return {
          hasError: true,
          installResults: {
            success: false,
            error: error.message,
            output: error.stdout || ''
          },
          messageValue: error.message
        };
      }
    }
  })
];
