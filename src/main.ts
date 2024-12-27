import * as core from '@actions/core'
import * as github from '@actions/github'
import * as exec from '@actions/exec'
import { wait } from './wait'
import { MainGraphRun } from './app'
/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    // Get inputs from the workflow file
    const token = core.getInput('repo-token', { required: true })
    const octokit = github.getOctokit(token)

    // Get the pull request context
    const context = github.context
    if (!context.payload.pull_request) {
      core.setFailed('This action must be run on a pull request event.')
      return
    }

    const prNumber = context.payload.pull_request.number
    const repo = context.repo.repo
    const owner = context.repo.owner

    // Log the PR number and branch
    core.info(`Working on PR #${prNumber}`)
    core.info(`Branch: ${context.payload.pull_request.head.ref}`)

    // Fetch changes in the PR branch
    await exec.exec('git', [
      'fetch',
      'origin',
      `pull/${prNumber}/head:pr-${prNumber}`
    ])
    await exec.exec('git', ['checkout', `pr-${prNumber}`])

    // Run linting (replace with any other action specific to your repo)
    core.info('Running linting checks...')

    try {
      await exec.exec('npm', ['install'])
      await exec.exec('npm', ['run', 'lint'])
    } catch (error) {
      core.setFailed(`Linting failed: ${error}`)
      return
    }

    // Optionally, post a comment on the PR
    const commentBody =
      'Linting completed successfully. Your PR is ready for review!'
    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: prNumber,
      body: commentBody
    })

    core.info('Action completed successfully.')

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
