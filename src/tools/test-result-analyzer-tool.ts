import { z } from 'zod';
import { ToolMessage } from '@langchain/core/messages';
import { DynamicStructuredTool } from '@langchain/core/tools';
import { Command } from '@langchain/langgraph';
// New tool: Json Test Result Analyzer
export const testResultAnalyzerTools = new DynamicStructuredTool({
  name: 'json_test_result_analyzer',
  description: 'Analyzes and summarizes test results from JSON output',
  schema: z.object({
    result: z
      .object({
        numTotalTests: z.number().describe('total number of tests'),
        numPassedTests: z.number().describe('number of passed tests'),
        numFailedTests: z.number().describe('number of failed tests'),
        numPendingTests: z.number().describe('number of skipped tests'),
        failureReasons: z.array(z.string()).optional().describe('failure reasons'),
        coverage: z
          .object({
            lines: z
              .object({
                total: z.number().describe('total lines'),
                covered: z.number().describe('covered lines'),
                skipped: z.number().describe('skipped lines'),
                pct: z.number().describe('coverage percentage')
              })
              .describe('line coverage'),
            statements: z
              .object({
                total: z.number().describe('total statements'),
                covered: z.number().describe('covered statements'),
                skipped: z.number().describe('skipped statements'),
                pct: z.number().describe('coverage percentage')
              })
              .describe('statement coverage'),
            functions: z
              .object({
                total: z.number().describe('total functions'),
                covered: z.number().describe('covered functions'),
                skipped: z.number().describe('skipped functions'),
                pct: z.number().describe('coverage percentage')
              })
              .describe('function coverage'),
            branches: z
              .object({
                total: z.number().describe('total branches'),
                covered: z.number().describe('covered branches'),
                skipped: z.number().describe('skipped branches'),
                pct: z.number().describe('coverage percentage')
              })
              .describe('branch coverage')
          })
          .describe('test coverage  metrics')
      })
      .describe('parsed JSON test results')
  }),
  func: async ({ result }, runManager: any, config: any) => {
    try {
      const testResults = result;
      const totalTests = testResults.numTotalTests;
      const totalPassed = testResults.numPassedTests;
      const totalFailed = testResults.numFailedTests;
      const totalSkipped = testResults.numPendingTests;

      return new Command({
        // update state keys
        update: {
          testResults: testResults,
          testSummary: {
            totalTests,
            totalPassed,
            totalFailed,
            totalSkipped,
            failureReasons: testResults.failureReasons || [],
            coverage: testResults.coverage || {}
          },
          messages: [
            new ToolMessage({
              content: `Test results analyzed: ${totalPassed} passed, ${totalFailed} failed, ${totalSkipped} skipped.`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    } catch (error: unknown | any) {
      return {
        testSummary: {
          error: error.message
        },
        output: error.message
      };
    }
  }
});
