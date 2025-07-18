// write a zod schema to format the test result
import { z } from 'zod';

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

export const exampleTestFileAndItsContentFormat = z.object({
  summary: z
    .string()
    .max(300, 'Must be at most 500 characters')
    .describe('A brief summary of what the test file covers'),
  keySnippets: z
    .array(z.string().max(1000))
    .nullable()
    .describe(
      'Key imports, test wrappers, mock style, key code snippets or assertions that are useful for learning and observability'
    )
});

export const createFileResponseFormat = z.object({
  success: z.boolean(),
  error: z.string().max(100, 'Must be at most 100 characters').nullable(),
  fileName: z.string().max(100, 'Must be at most 100 characters').nullable(),
  filePath: z.string().max(200, 'Must be at most 200 characters').nullable(),
  fileContent: z.string().max(1000, 'Must be at most 1000 characters').nullable(),
  fileFound: z.boolean().nullable()
});

export const writeFileResponseFormat = z.object({
  success: z.boolean(),
  error: z.string().max(100, 'Must be at most 100 characters').nullable(),
  fileName: z.string().max(100, 'Must be at most 100 characters').nullable(),
  filePath: z.string().max(200, 'Must be at most 200 characters').nullable(),
  fileContent: z.string().max(1000, 'Must be at most 1000 characters').nullable(),
  fileFound: z.boolean().nullable()
});

export const findFilesAndTestFilesResponseFormat = z.object({
  fileName: z.string().max(100, 'Must be at most 100 characters').nullable(),
  filePath: z.string().max(200, 'Must be at most 200 characters').nullable(),
  fileContent: z.string().max(1000, 'Must be at most 1000 characters').nullable(),
  fileFound: z.boolean().nullable(),
  testFileName: z.string().max(100, 'Must be at most 100 characters').nullable(),
  testFilePath: z.string().max(200, 'Must be at most 200 characters').nullable(),
  testFileContent: z.string().max(1000, 'Must be at most 1000 characters').nullable(),
  testFileFound: z.boolean().nullable()
});
