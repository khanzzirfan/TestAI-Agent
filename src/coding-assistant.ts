import { z } from 'zod'
import * as exec from '@actions/exec'
import { DynamicStructuredTool } from '@langchain/core/tools'
// 4. Import dotenv for loading environment variables and fs for file system operations
import dotenv from 'dotenv'
import fs from 'fs'

/// import { exec } from 'child_process'
dotenv.config()

// const nodeExec = async (command: string) => {
//   return new Promise((resolve, reject) => {
//     exec(command, (error, stdout, stderr) => {
//       if (error) {
//         reject(error)
//       }
//       console.log(`npm command success stdout: ${stdout}`)
//       resolve(stdout)
//     })
//   })
// }

export const CodeAssistantTools = [
  new DynamicStructuredTool({
    name: 'npm-runner',
    description:
      "call this tool to execute nodejs code on user's machine. It will execute the code and return the output. It will also print the output to the console.",
    schema: z.object({
      command: z.string().describe('npm command')
    }),
    func: async ({ command }) => {
      try {
        let output = ''
        let error = ''

        const options = {
          listeners: {
            stdout: (data: Buffer) => {
              output += data.toString()
            },
            stderr: (data: Buffer) => {
              error += data.toString()
            }
          },
          ignoreReturnCode: true // Do not fail on non-zero exit code
        }

        const exitCode = await exec.exec('npm', command.split(' '), options)

        if (exitCode !== 0) {
          return `Command failed with exit code ${exitCode}. Error: ${error || 'Unknown error'}`
        }
        return output
      } catch (err: unknown | any) {
        return `Execution failed: ${err?.message || 'Unknown failure'}`
      }
    }
  }),
  // File system tool
  new DynamicStructuredTool({
    name: 'write-file',
    description:
      "call this tool to write file on user's machine. Provide file name and content as input.",
    schema: z.object({
      path: z.string().describe('path to the file'),
      fileName: z.string().describe('name of the file'),
      content: z.string().describe('content to write in the file')
    }),
    func: async ({ path, fileName, content }) => {
      if (!content || !fileName) return 'No input provided'
      fs.writeFileSync(`${path}/${fileName}`, content, 'utf-8')
      // write dummy echo await to make it async
      await exec.exec('echo', [''])
      return `File ${fileName} created successfully`
    }
  })
]
