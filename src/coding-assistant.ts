import { z } from 'zod'
import { DynamicStructuredTool } from '@langchain/core/tools'
// 4. Import dotenv for loading environment variables and fs for file system operations
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { exec } from 'child_process'
dotenv.config()

const nodeExecutor = promisify(exec)

function listFilesRecursively(dirPath: string): string[] {
  let results: string[] = []
  const list = fs.readdirSync(dirPath)

  list.forEach(file => {
    const filePath = path.join(dirPath, file)
    const stat = fs.statSync(filePath)

    if (stat && stat.isDirectory()) {
      // Recursively list files in subdirectory
      results = results.concat(listFilesRecursively(filePath))
    } else {
      // Add file path to results
      results.push(filePath)
    }
  })

  return results
}

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
  }),

  // list files in a directory tool
  new DynamicStructuredTool({
    name: 'list-files',
    description: 'list files in a directory',
    schema: z.object({
      path: z.string().describe('path to the directory')
    }),
    func: async ({ path }) => {
      const files = listFilesRecursively(path)
      files.forEach(file => console.log(file))
      return fs.readdirSync(path)
    }
  })
]
