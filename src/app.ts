import { MemorySaver } from '@langchain/langgraph';
import { HumanMessage } from '@langchain/core/messages';
import { workflow } from './graph';
import * as core from '@actions/core';
import { CustomTools } from './tools';

export const MainGraphRun = async () => {
  // Initialize memory to persist state between graph runs
  const checkpointer = new MemorySaver();
  const filename: string = core.getInput('file_name');
  const toolNames = CustomTools.map(tool => tool.name).join(', ');
  // Finally, we compile it!
  // This compiles it into a LangChain Runnable,
  // meaning you can use it as you would any other runnable
  const app = workflow.compile({ checkpointer });

  const query = `
  You are a coding assistant with expertise in test automation.
  Generate and execute tests for ${filename}.

  Use the available tools: ${toolNames}.
  Current time: {time}

  Guidelines:
  1. Verify the source file exists
  2. Check for existing test file
  3. Improve existing tests or create new tests
  4. Save test file
  5. Run tests with coverage
  6. Fix any failures`;

  // Use the Runnable
  const currentDate = new Date().toISOString().replace('T', ' ').split('.')[0];
  const outputContent = await app.invoke(
    {
      messages: [new HumanMessage(query)],
      fileName: filename
    },
    { recursionLimit: 100, configurable: { thread_id: currentDate } }
  );

  console.log('result of graph for a threadId:', currentDate);

  // console.log(resultOfGraph.messages.map((m) => m.content).join("\n"));
  console.log(outputContent);
};
