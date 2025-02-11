import { z } from 'zod';
import { DynamicStructuredTool } from '@langchain/core/tools';
import { promisify } from 'util';
import { exec } from 'child_process';
import { ToolMessage } from '@langchain/core/messages';

const nodeExecutor = promisify(exec);

export const TestTools = [
  // Enhanced npm test tool with Command
  new DynamicStructuredTool({
    name: 'npm-test',
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
    func: async ({ command, options = {} }, runManager: any) => {
      try {
        const testCommandCheck = command.includes('test');
        let fullCommand = !command.startsWith('npm') ? `npm ${testCommandCheck ? '' : 'test'} ${command}` : command;
        // Add options to the command
        if (options.directory_path) fullCommand += ` --prefix ./appcode`;
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
          testResults: { success: true, output: stdout },
          messages: [
            new ToolMessage({
              content: `Test execution completed successfully`,
              tool_call_id: runManager?.toolCall?.id,
              additional_kwargs: { stdout }
            })
          ]
        };
      } catch (error: unknown | any) {
        return {
          hasError: true,
          testResults: {
            success: false,
            error: error.message,
            output: error.stdout || ''
          },
          messages: [
            new ToolMessage({
              content: `Test execution failed: ${error.message}`,
              tool_call_id: runManager?.toolCall?.id,
              additional_kwargs: { error: error.message }
            })
          ]
        };
      }
    }
  })
];
