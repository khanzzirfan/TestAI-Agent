/**
 */
import { expect } from '@jest/globals';
import { appWorkflowRun as appSupervisorWorkflowRun } from '../src/testapp/test-supervisor-v3';

describe('supervisor graph npm agent test', () => {
  it('should return the result for supervisor agent with npm tests', async () => {
    const result = await appSupervisorWorkflowRun();
    expect(result.testFileName).toContain('sumOfNumbers.test.js');
    expect(result.fileName).toContain('sumOfNumbers.js');
    expect(result.testFilePath).toContain('/mnt/c/code/project/src');
    expect(result.testFileName).toContain('sumOfNumbers.test.js');
    expect(result.testFileContent).toContain(`const sumOfNumbers`);
    expect(result.filePath).toContain('/mnt/c/code/project/src');
    expect(result.fileContent).toContain(`function sum(a, b)`);
  }, 130000);
});
