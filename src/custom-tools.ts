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

const listFilesRecursively = (
  dir: string,
  excludeDirs = ['node_modules', 'public', 'dist', 'coverage']
) => {
  let results: string[] = []

  const listFiles = (currentDir: string) => {
    const files = fs.readdirSync(currentDir)

    files.forEach(file => {
      const filePath = path.join(currentDir, file)
      const stat = fs.statSync(filePath)

      if (stat && stat.isDirectory()) {
        if (!excludeDirs.includes(file)) {
          listFiles(filePath)
        }
      } else {
        results.push(filePath)
      }
    })
  }

  listFiles(dir)
  return results
}

export const CustomTools = [
  new DynamicStructuredTool({
    name: 'npm-test',
    description:
      'Tool to run npm test. It runs jest tests or any javascript tests. call this tool to execute tests. It will execute the code and return the output. It will also print the output to the console.',
    schema: z.object({
      command: z.string().describe('npm command')
    }),
    // func: async ({ command }) => {
    //   await nodeExec(command);
    //   return "Code executed successfully";
    // },
    func: async ({ command }) => {
      try {
        // if command missing npm prefix, add it
        if (!command.startsWith('npm')) {
          command = `npm ${command}`
        }

        const { stdout, stderr } = await nodeExecutor(command)
        if (stderr) {
          return `Error: ${stderr}`
        }

        // async wait for few seconds to get the output
        await new Promise(resolve => setTimeout(resolve, 3000))

        return stdout
      } catch (error: any) {
        return `Execution failed: ${error.message}`
      }
    }
  }),
  // File system tool
  new DynamicStructuredTool({
    name: 'create-file',
    description:
      "Creates an empty file on user's machine at the specified path.",
    schema: z.object({
      path: z.string().describe('path to the file'),
      fileName: z.string().describe('name of the file')
    }),
    func: async ({ path: dirPath, fileName }) => {
      try {
        // Input validation
        if (!dirPath || !fileName) {
          throw new Error('Both path and fileName are required')
        }

        // Normalize path and create full file path
        const normalizedPath = path.normalize(dirPath)
        const fullPath = path.join(normalizedPath, fileName)

        // Ensure directory exists
        if (!fs.existsSync(normalizedPath)) {
          fs.mkdirSync(normalizedPath, { recursive: true })
        }

        // Create empty file if it doesn't exist
        if (!fs.existsSync(fullPath)) {
          fs.writeFileSync(fullPath, '', 'utf-8')
          return `File ${fileName} created successfully at ${normalizedPath}`
        } else {
          return `File ${fileName} already exists at ${normalizedPath}`
        }
      } catch (error: any) {
        return `Error creating file: ${error.message}`
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

  // File system tool. list all files in a directory
  new DynamicStructuredTool({
    name: 'list-files',
    description:
      "call this tool to list all files in a directory on user's machine. Provide path as input.",
    schema: z.object({ path: z.string().describe('path to the directory') }),
    func: async ({ path }) => {
      // get executing directory path
      const executingPath = process.cwd()
      const files = listFilesRecursively(path)
      return files
    }
  }),

  // read file tool
  new DynamicStructuredTool({
    name: 'read-file',
    description:
      "call this tool to read file on user's machine. Provide file name as input.",
    schema: z.object({ path: z.string().describe('path to the file') }),
    func: async ({ path }) => {
      if (!path) return 'No input provided'
      const data = fs.readFileSync(path, 'utf-8')
      return data
    }
  }),

  // File system tool
  new DynamicStructuredTool({
    name: 'delete-file',
    description:
      "call this tool to delete file on user's machine. Provide file name as input.",
    schema: z.object({ path: z.string().describe('path to the file') }),
    func: async ({ path }) => {
      if (!path) return 'No input provided'
      fs.unlinkSync(path)
      return `File ${path} deleted successfully`
    }
  })
]
