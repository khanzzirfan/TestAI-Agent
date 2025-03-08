import * as core from '@actions/core';
import * as exec from '@actions/exec';
import { wait } from './wait';
import { MainGraphRun } from './app';

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    /** Sample Run code */
    /// await SampleRun()
    /** Sample code to run */
    const ms: string = core.getInput('milliseconds');
    const fileName: string = core.getInput('file_name');
    const recursionLimit: number = parseInt(core.getInput('recursion_limit'), 100);
    const additionalPrompt: string = core.getInput('additional_prompt');
    const useDefaultPrompt: boolean = core.getInput('use_default_prompt') === 'true';

    core.info(`The file name is ${fileName} and the recursion limit is ${recursionLimit}`);

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`Waiting ${ms} milliseconds ...`);

    // Log the current timestamp, wait, then log the new timestamp
    core.debug(new Date().toTimeString());
    await wait(parseInt(ms, 10));
    core.debug(new Date().toTimeString());

    // Set outputs for other workflow steps to use
    core.setOutput('time', new Date().toTimeString());

    // Sample LangChain code
    try {
      core.debug('Running the main graph');
      const response = await MainGraphRun({
        fileName,
        recursionLimit,
        additionalPrompt,
        useDefaultPrompt
      });
      core.debug('Finished running the main graph');
      // wirte the final comments to the output
      core.setOutput('final_comments', response);
    } catch (error) {
      core.setFailed(`LangChain code failed: ${error}`);
      return;
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message);
  }
}
