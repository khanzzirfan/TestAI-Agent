import { HumanMessage } from '@langchain/core/messages';
import { graph as app } from './agent';

export const MainGraphRun = async ({
  fileName,
  recursionLimit = 25,
  additionalPrompt,
  useDefaultPrompt
}: {
  fileName: string;
  recursionLimit: number;
  additionalPrompt: string;
  useDefaultPrompt: boolean;
}): Promise<string> => {
  const filename: string = fileName;
  console.log('app version', 'v0.1.60-alpha.01');

  const additionalPromptNotes = `
  Additional Notes: ${additionalPrompt}
  `;

  const prompt = `
  You are a coding assistant with expertise in test automation.
  You have been assigned with the following task:
  Generate and execute tests for ${filename}.

  Guidelines:
  1. Find example test files in the project directory for learning and observation.
  2. Verify the given source file exists.
  3. Verify the corresponding test file exists for the source file.
  4. If the test file does not exist, create a new test file and write the test content.
  5. If the test file exists, improve existing tests or create new tests for the source file.
  6. Run the test for source file with coverage enabled in silent mode and json output. Test Coverage should be collected for the source file only.
  7. Fix any failures by ignoring warnings. If component missing statements or imports, add them to the test file and update the file using correct tool call.
  8. Run the tests again to ensure they pass and coverage is collected. 
  9. Provide final summary of the test results and coverage details in markdown format.
  `;

  const finalPrompt = useDefaultPrompt ? `${prompt}\n${additionalPromptNotes}` : additionalPromptNotes;
  const uniqueGuid = '8bd49e81-43d6-4688-afff-bc425833c8c7';

  // Use the Runnable
  const currentDate = new Date().toISOString().replace('T', ' ').split('.')[0];
  const finalState = await app.invoke(
    {
      messages: [new HumanMessage(finalPrompt)]
    },
    { recursionLimit: recursionLimit || 200, configurable: { thread_id: uniqueGuid } }
  );

  const resultOfGraph = finalState.messages[finalState.messages.length - 1].content as string;
  console.log('result of graph for a threadId:', currentDate);
  // console.log(resultOfGraph.messages.map((m) => m.content).join("\n"));
  console.log(resultOfGraph);
  return resultOfGraph;
};
