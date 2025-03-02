import { z } from 'zod';
import { DynamicStructuredTool } from '@langchain/core/tools';
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
        updateSnapshots: z.boolean().optional().describe('Update test snapshots')
      })
      .optional()
  }),
  func: async ({ command, options = {} }, runManager: any) => {
    try {
      let fullCommand = command;
      // Add options to the command
      if (options.directory_path) fullCommand += ` --prefix ${options.directory_path}`;
      if (options.force) fullCommand += ' --force';
      if (options.legacyPeerDeps) fullCommand += ' --legacy-peer-deps';
      if (options.coverage) fullCommand += ' --coverage';
      if (options.json) fullCommand += ' --json';
      if (options.watch) fullCommand += ' --watch';
      if (options.testRegex) fullCommand += ` --testRegex="${options.testRegex}"`;
      if (options.updateSnapshots) fullCommand += ' -u';

      const { stdout, stderr } = await nodeExecutor(fullCommand);

      return {
        executionResults: { success: true, output: stdout },
        hasError: false,
        messageValue: stdout
      };
    } catch (error: unknown | any) {
      return {
        hasError: true,
        executionResults: {
          success: false,
          error: error.message,
          output: error.stdout || ''
        },
        messageValue: error.message
      };
    }
  }
});

export const npmTestTool = new DynamicStructuredTool({
  name: 'npm_test',
  description: 'Executes npm test commands with support for various options including coverage and watch mode',
  schema: z.object({
    command: z.string().describe('npm command to execute'),
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
        updateSnapshots: z.boolean().optional().describe('Update test snapshots')
      })
      .optional()
  }),
  func: async ({ command, options = {} }) => {
    try {
      const testCommandCheck = command.includes('test');
      let fullCommand = !command.startsWith('npm') ? `npm ${testCommandCheck ? '' : 'test'} ${command}` : command;
      // Add options to the command
      if (options.directory_path) fullCommand += ` --prefix ${options.directory_path}`;
      // suffix json
      fullCommand += ` -- --json`;
      if (options.coverage) fullCommand += ' --coverage';
      // if (options.json) fullCommand += " --json";
      if (options.testRegex) fullCommand += ` --testRegex="${options.testRegex}"`;
      if (options.updateSnapshots) fullCommand += ' -u';

      // append silent flag to suppress npm notices
      // fullCommand += " --silent 2>/dev/null";
      const { stdout, stderr } = await nodeExecutor(fullCommand);

      return {
        testResults: { success: true, output: JSON.stringify(stdout) },
        hasError: false,
        messageValue: stdout
      };
    } catch (error: unknown | any) {
      return {
        hasError: true,
        testResults: {
          success: false,
          error: error.message,
          output: error.stdout || ''
        },
        messageValue: error.message
      };
    }
  }
});

export const yarnTestTool = new DynamicStructuredTool({
  name: 'yarn_test',
  description: 'Executes yarn test commands with support for various options including coverage and watch mode',
  schema: z.object({
    command: z.string().describe('yarn command to execute'),
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
        updateSnapshots: z.boolean().optional().describe('Update test snapshots')
      })
      .optional()
  }),
  func: async ({ command, options = {} }) => {
    try {
      const testCommandCheck = command.includes('test');
      let fullCommand = !command.startsWith('yarn') ? `yarn ${testCommandCheck ? '' : 'test'} ${command}` : command;
      // Add options to the command
      if (options.directory_path) fullCommand += ` --cwd ${options.directory_path}`;
      // suffix json
      fullCommand += ` --json`;
      if (options.coverage) fullCommand += ' --coverage';
      if (options.watch) fullCommand += ' --watch';
      if (options.testRegex) fullCommand += ` --testRegex="${options.testRegex}"`;
      if (options.updateSnapshots) fullCommand += ' -u';

      const { stdout, stderr } = await nodeExecutor(fullCommand);

      return {
        testResults: { success: true, output: JSON.stringify(stdout) },
        hasError: false,
        messageValue: stdout
      };
    } catch (error: unknown | any) {
      return {
        hasError: true,
        testResults: {
          success: false,
          error: error.message,
          output: error.stdout || ''
        },
        messageValue: error.message
      };
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
