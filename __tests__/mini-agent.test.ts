/**
 * Unit tests for mini-agent.test.ts
 */
import { expect } from '@jest/globals';
import { initializeLLM } from '../src/llm';
import { testSearch } from '../src/tools/testing-tools';
import { AIMessage } from '@langchain/core/messages';

describe('llm agent test', () => {
  const llm = initializeLLM('gpt-4o', [testSearch]);

  it('should return the result ', async () => {
    // Use the agent
    const result = await llm.invoke(
      {
        messages: [
          {
            role: 'user',
            content: 'what is the weather in sf'
          }
        ]
      },
      { configurable: { thread_id: 1245 } }
    );
    const messages = result.messages.map((m: any) => m.content);
    const lastMessage = messages[messages.length - 1];
    const lastMessageContent = result.messages.at(-1)?.content;
    expect(lastMessage).toBe('The current weather in San Francisco is 60 degrees and foggy.');
    expect(lastMessageContent).toBe('The current weather in San Francisco is 60 degrees and foggy.');
    expect(result.messages.at(-1)).toBeInstanceOf(AIMessage);
  }, 10000);
});
