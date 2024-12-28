import { z } from 'zod'
import { DynamicStructuredTool } from '@langchain/core/tools'
// 4. Import dotenv for loading environment variables and fs for file system operations
import dotenv from 'dotenv'
import fs from 'fs'
import { promisify } from 'util'
import { exec } from 'child_process'
dotenv.config()

const nodeExecutor = promisify(exec)
const nodeExec = async (command: string) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      }
      console.log(`npm command success stdout: ${stdout}`)
      resolve(stdout)
    })
  })
}

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
        const { stdout, stderr } = await nodeExecutor(command)
        if (stderr) {
          return `Error: ${stderr}`
        }
        return stdout
      } catch (error: unknown | any) {
        return `Execution failed: ${error?.message}`
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
      return `File ${fileName} created successfully`
    }
  })
]
