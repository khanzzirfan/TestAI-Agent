// write a zod schema to format the test result
import { z } from 'zod';

export const testResultFormat = z.object({
  status: z.enum(['passed', 'failed', 'skipped']),
  errorMessage: z.string().max(100, 'Must be at most 100 characters').optional(),
  stackTrace: z.string().max(100, 'Must be at most 100 characters').optional()
});

export const exampleTestFileAndItsContentFormat = z.object({
  summary: z
    .string()
    .max(300, 'Must be at most 300 characters')
    .describe('A brief summary of what the test file covers'),
  keySnippets: z
    .array(z.string().max(1000))
    .optional()
    .describe(
      'Key imports, test wrappers, mock style, key code snippets or assertions that are useful for learning and observability'
    )
});

export const createFileResponseFormat = z.object({
  success: z.boolean(),
  error: z.string().max(100, 'Must be at most 100 characters').optional(),
  fileName: z.string().max(100, 'Must be at most 100 characters').optional(),
  filePath: z.string().max(200, 'Must be at most 200 characters').optional(),
  fileContent: z.string().max(1000, 'Must be at most 1000 characters').optional(),
  fileFound: z.boolean().optional()
});

export const writeFileResponseFormat = z.object({
  success: z.boolean(),
  error: z.string().max(100, 'Must be at most 100 characters').optional(),
  fileName: z.string().max(100, 'Must be at most 100 characters').optional(),
  filePath: z.string().max(200, 'Must be at most 200 characters').optional(),
  fileContent: z.string().max(1000, 'Must be at most 1000 characters').optional(),
  fileFound: z.boolean().optional()
});

export const findFilesAndTestFilesResponseFormat = z.object({
  fileName: z.string().max(100, 'Must be at most 100 characters').optional(),
  filePath: z.string().max(200, 'Must be at most 200 characters').optional(),
  fileContent: z.string().max(1000, 'Must be at most 1000 characters').optional(),
  fileFound: z.boolean().optional(),
  testFileName: z.string().max(100, 'Must be at most 100 characters').optional(),
  testFilePath: z.string().max(200, 'Must be at most 200 characters').optional(),
  testFileContent: z.string().max(1000, 'Must be at most 1000 characters').optional(),
  testFileFound: z.boolean().optional()
});
