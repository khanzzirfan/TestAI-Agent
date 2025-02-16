/**
 */
import { expect } from '@jest/globals';
import { appWorkflowRun } from '../src/testapp/test-agent';
import { appCityWorkflowRun } from '../src/testapp/test-agent-v2';

describe('graph agent test', () => {
  it('should return the result ', async () => {
    const result = await appWorkflowRun();
    expect(result).toEqual([
      'what is the weather in sf',
      '',
      "It's 60 degrees and foggy.",
      'The current weather in San Francisco is 60 degrees and foggy.',
      'what about ny',
      '',
      "It's 90 degrees and sunny.",
      'The current weather in New York is 90 degrees and sunny.'
    ]);
  }, 30000);

  it('should return the cities, restaurants, beaches information ', async () => {
    const result = await appCityWorkflowRun();
    expect(result[0]).toContain(
      'You are a city assistant to a traveller. For a given state \"california\", find the best places to visit in a city.'
    );
    expect(result[4]).toContain('List of popular restaurants in San Francisco');
    expect(result[6]).toContain('List of public libraries in San Francisco');
  }, 130000);
});
