import * as core from '@actions/core'
import * as github from '@actions/github'
import * as exec from '@actions/exec'
import { wait } from './wait'
import { MainGraphRun } from './app'
import { SampleRun } from './sample-run'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    /** Sample Run code */
    await SampleRun()
    /** Sample code to run */
    const ms: string = core.getInput('milliseconds')

    // The `who-to-greet` input is defined in action metadata file
    const whoToGreet = core.getInput('who-to-greet', { required: false })
    core.info(`Hello, ${whoToGreet}!`)

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`Waiting ${ms} milliseconds ...`)

    // Log the current timestamp, wait, then log the new timestamp
    core.debug(new Date().toTimeString())
    await wait(parseInt(ms, 10))
    core.debug(new Date().toTimeString())

    // Set outputs for other workflow steps to use
    core.setOutput('time', new Date().toTimeString())

    // Sample LangChain code
    try {
      core.debug('Running the main graph')
      await MainGraphRun()
      core.debug('Finished running the main graph')
    } catch (error) {
      core.setFailed(`LangChain code failed: ${error}`)
      return
    }
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
