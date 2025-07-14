import { z } from 'zod';
import { ToolMessage } from '@langchain/core/messages';
import { DynamicStructuredTool } from '@langchain/core/tools';
import { Command } from '@langchain/langgraph';
import { promisify } from 'util';
import { exec } from 'child_process';

const nodeExecutor = promisify(exec);

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
    try {
      let fullCommand = command;
      // Add options to the command
      if (options.directory_path) fullCommand += ` --prefix ${options.directory_path}`;
      if (options.force) fullCommand += ' --force';
      if (options.legacyPeerDeps) fullCommand += ' --legacy-peer-deps';
      if (options.coverage) {
        fullCommand += ' --coverage';
        // run coverage with test file name --collectCoverageFrom=testFileName
        if (options.testFilePath) {
          fullCommand += ` --collectCoverageFrom="${options.testFilePath}"`;
        }
      }
      if (options.json) fullCommand += ' --json';
      if (options.watch) fullCommand += ' --watch';
      if (options.testRegex) fullCommand += ` --testRegex="${options.testRegex}"`;
      if (options.updateSnapshots) fullCommand += ' -u';

      let { stdout, stderr } = await nodeExecutor(fullCommand);
      // check the length of stdout and trim it to max 10000 characters
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
              content: 'Command executed successfully',
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
              content: `Error executing command: ${error.message}`,
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
        fullCommand += ` --collectCoverageFrom=**/${options.testFilePath}*`;
      }
      // if (options.json) fullCommand += " --json";
      if (options.testRegex) fullCommand += ` --testRegex="${options.testRegex}"`;
      if (options.updateSnapshots) fullCommand += ' -u';

      // append silent flag to suppress npm notices
      // fullCommand += " --silent 2>/dev/null";
      let { stdout, stderr } = await nodeExecutor(fullCommand);
      // check the length of stdout and trim it to max 10000 characters
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

export const yarnTestTool = new DynamicStructuredTool({
  name: 'yarn_test',
  description: 'Executes yarn test commands with support for various options including coverage and watch mode',
  schema: z.object({
    command: z.string().describe('yarn command to execute'),
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
        coverage: z.boolean().optional().describe('Run tests with coverage'),
        json: z.boolean().optional().describe('Output test results as JSON'),
        watch: z.boolean().optional().describe('Run tests in watch mode'),
        testRegex: z.string().optional().describe('Regular expression to match test files'),
        updateSnapshots: z.boolean().optional().describe('Update test snapshots'),
        testFilePath: z.string().optional().describe('Path to the single test file to run and collect coverage')
      })
      .optional()
  }),
  func: async ({ command, silent = true, options = {} }, runManager: any, config: any) => {
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
      if (options.testRegex) fullCommand += ` --testRegex="${options.testRegex}"`;
      if (options.updateSnapshots) fullCommand += ' -u';

      let { stdout, stderr } = await nodeExecutor(fullCommand);
      // check the length of stdout and trim it to max 10000 characters
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
              content: 'Yarn test command executed successfully',
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

        const { stdout, stderr } = await nodeExecutor(fullCommand);

        return {
          installResults: { success: true, output: stdout },
          hasError: false,
          messageValue: stdout
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

        const { stdout, stderr } = await nodeExecutor(fullCommand);

        return {
          installResults: { success: true, output: stdout },
          hasError: false,
          messageValue: stdout
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

        const { stdout, stderr } = await nodeExecutor(fullCommand);

        return {
          installResults: { success: true, output: stdout },
          hasError: false,
          messageValue: stdout
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
