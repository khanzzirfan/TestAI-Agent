// write a zod schema to format the test result
import { z } from 'zod';

export const testResultFormat = z.object({
  status: z.enum(['passed', 'failed', 'skipped']),
  errorMessage: z.string().max(100, 'Must be at most 100 characters').optional(),
  stackTrace: z.string().max(100, 'Must be at most 100 characters').optional()
});
