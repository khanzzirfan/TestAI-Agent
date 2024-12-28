import * as core from '@actions/core'
import * as github from '@actions/github'
import * as exec from '@actions/exec'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function SampleRun(): Promise<void> {
  try {
    // Get inputs from the workflow file
    const token = core.getInput('repo_token', { required: true })
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
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
