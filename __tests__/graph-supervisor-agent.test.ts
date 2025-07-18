/**
 */
import { expect } from '@jest/globals';
import { appWorkflowRun as appSupervisorWorkflowRun } from '../src/testapp/test-supervisor-v1';

describe('supervisor graph agent test', () => {
  it('should return the result for supervisor agent', async () => {
    const result = await appSupervisorWorkflowRun();
    expect(result.testFileName).toContain('example.test.ts');
    expect(result.fileName).toContain('example.txt');
    expect(result.testFilePath).toContain('/path/to/example.test.ts');
    expect(result.testFileContent).toContain('This is an example test file content.');
    expect(result.filePath).toContain('/path/to/example.txt');
    expect(result.fileContent).toContain('This is another example file content.');
  }, 130000);
});
