import { z } from 'zod';
import { DynamicStructuredTool } from '@langchain/core/tools';
import { ToolMessage } from '@langchain/core/messages';

export const TestResultAnalyzerTools = [
  // New tool: Json Test Result Analyzer
  new DynamicStructuredTool({
    name: 'json-test-result-analyzer',
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
    func: async ({ result }, runManager: any) => {
      try {
        const testResults = result;
        const totalTests = testResults.numTotalTests;
        const totalPassed = testResults.numPassedTests;
        const totalFailed = testResults.numFailedTests;
        const totalSkipped = testResults.numPendingTests;

        return {
          testSummary: {
            totalTests,
            totalPassed,
            totalFailed,
            totalSkipped,
            failureReasons: testResults.failureReasons || [],
            coverage: {
              lines: {
                total: testResults.coverage.lines.total,
                covered: testResults.coverage.lines.covered,
                skipped: testResults.coverage.lines.skipped,
                pct: testResults.coverage.lines.pct
              },
              statements: {
                total: testResults.coverage.statements.total,
                covered: testResults.coverage.statements.covered,
                skipped: testResults.coverage.statements.skipped,
                pct: testResults.coverage.statements.pct
              },
              functions: {
                total: testResults.coverage.functions.total,
                covered: testResults.coverage.functions.covered,
                skipped: testResults.coverage.functions.skipped,
                pct: testResults.coverage.functions.pct
              },
              branches: {
                total: testResults.coverage.branches.total,
                covered: testResults.coverage.branches.covered,
                skipped: testResults.coverage.branches.skipped,
                pct: testResults.coverage.branches.pct
              }
            }
          },
          messages: [
            new ToolMessage({
              content: `Test results analyzed: ${totalPassed} passed, ${totalFailed} failed, ${totalSkipped} skipped`,
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        };
      } catch (error: unknown | any) {
        return {
          testSummary: {
            error: error.message
          },
          messages: [
            new ToolMessage({
              content: `Error analyzing test results: ${error.message}`,
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        };
      }
    }
  })
];
