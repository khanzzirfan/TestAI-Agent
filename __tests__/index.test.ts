/**
 * Unit tests for the action's entrypoint, src/index.ts
 */
import * as main from '../src/main';

// write jest mock for the action
jest.mock('../src/app', () => ({
  MainGraphRun: jest.fn()
}));

jest.mock('../src/sample-run', () => ({
  SampleRun: jest.fn()
}));

// Mock the action's entrypoint
const runMock = jest.spyOn(main, 'run').mockImplementation();

describe('index', () => {
  beforeAll(() => {
    // Mock environment variables
    process.env.TAVILY_API_KEY = 'test-api-key';
    // open api key
    process.env.OPENAI_API = 'test-api';
  });

  it('calls run when imported', () => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('../src/index');

    expect(runMock).toHaveBeenCalled();
  });
});
