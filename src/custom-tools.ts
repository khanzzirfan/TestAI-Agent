import { z } from 'zod'
import { DynamicStructuredTool, tool } from '@langchain/core/tools'
import dotenv from 'dotenv'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import { exec } from 'child_process'
import { ToolMessage } from '@langchain/core/messages'
// 4. Import dotenv for loading environment variables and fs for file system operations
dotenv.config()

// Configuration constants
const DEFAULT_EXCLUDE_DIRS = [
  'node_modules',
  'public',
  'dist',
  'coverage',
  '.git',
  'build'
]
const DEFAULT_FILE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.vue']

interface FileInfo {
  path: string
  size: number
  modified: Date
  created: Date
}

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

// Enhanced find file function with recursive search
const findFileRecursively = (
  searchPath: string,
  targetFile: string,
  excludeDirs = DEFAULT_EXCLUDE_DIRS
) => {
  let results: any = []
  const search = (currentDir: string) => {
    try {
      const files = fs.readdirSync(currentDir)

      for (const file of files) {
        const filePath = path.join(currentDir, file)
        const stat = fs.statSync(filePath)

        if (stat.isDirectory()) {
          if (!excludeDirs.includes(file)) {
            // Recurse into subdirectories that aren't excluded
            search(filePath)
          }
        } else if (file === targetFile || filePath.endsWith(targetFile)) {
          // Match either exact filename or path ending with the target
          results.push({
            path: filePath,
            isDirectory: false,
            metadata: {
              size: stat.size,
              created: stat.birthtime,
              modified: stat.mtime,
              accessed: stat.atime
            }
          })
        }
      }
    } catch (error) {
      console.error(`Error searching directory ${currentDir}:`, error)
    }
  }

  search(searchPath)
  return results
}

const listFilesRecursively = (
  dir: string,
  excludeDirs: string[] = [
    'node_modules',
    'public',
    'dist',
    'coverage',
    '.git'
  ],
  filePattern: string | null = null
): FileInfo[] => {
  let results: FileInfo[] = []

  const listFiles = (currentDir: string) => {
    try {
      const files = fs.readdirSync(currentDir)

      files.forEach(file => {
        const filePath = path.join(currentDir, file)
        const stat = fs.statSync(filePath)

        if (stat && stat.isDirectory()) {
          if (!excludeDirs.includes(file)) {
            listFiles(filePath)
          }
        } else {
          if (!filePattern || new RegExp(filePattern).test(file)) {
            results.push({
              path: filePath,
              size: stat.size,
              modified: stat.mtime,
              created: stat.birthtime
            })
          }
        }
      })
    } catch (error) {
      console.error(`Error reading directory ${currentDir}:`, error)
    }
  }

  listFiles(dir)
  return results
}

const validateFilePath = (filePath: string): string => {
  if (!filePath) throw new Error('File path is required')

  const normalizedPath = path.normalize(filePath)
  const absolutePath = path.resolve(normalizedPath)

  // Security check - ensure path is within project directory
  const projectRoot = process.cwd()
  if (!absolutePath.startsWith(projectRoot)) {
    throw new Error('Access denied: File path must be within project directory')
  }

  return absolutePath
}

const getRelativePathFromCwd = (filePath: string): string => {
  const absolutePath = validateFilePath(filePath)
  const projectRoot = process.cwd()
  return path.relative(projectRoot, absolutePath)
}

export const CustomTools = [
  new DynamicStructuredTool({
    name: 'npm-test',
    description:
      'Executes npm test commands with support for various options including coverage and watch mode',
    schema: z.object({
      command: z.string().describe('npm command to execute'),
      options: z
        .object({
          directory_path: z
            .string()
            .optional()
            .describe(
              'path to the directory where the command will be executed. i.e where the package.json file is located'
            ),
          coverage: z.boolean().optional().describe('Run tests with coverage'),
          watch: z.boolean().optional().describe('Run tests in watch mode'),
          testRegex: z
            .string()
            .optional()
            .describe('Regular expression to match test files'),
          updateSnapshots: z
            .boolean()
            .optional()
            .describe('Update test snapshots')
        })
        .optional()
    }),
    func: async (
      {
        command,
        options = {}
      }: {
        command: string
        options?: {
          directory_path?: string
          coverage?: boolean
          watch?: boolean
          testRegex?: string
          updateSnapshots?: boolean
        }
      },
      runManager: any
    ) => {
      try {
        const testCommandCheck = command.includes('test')
        let fullCommand = !command.startsWith('npm')
          ? `npm ${testCommandCheck ? '' : 'test'} ${command}`
          : command
        // Add options to the command
        if (options.directory_path)
          fullCommand += ` --prefix ${options.directory_path}`
        if (options.coverage) fullCommand += ' --coverage'
        if (options.watch) fullCommand += ' --watch'
        if (options.testRegex)
          fullCommand += ` --testRegex="${options.testRegex}"`
        if (options.updateSnapshots) fullCommand += ' -u'

        const { stdout, stderr } = await nodeExecutor(fullCommand)

        if (stderr && !stderr.includes('npm notice')) {
          throw new Error(stderr)
        }

        return {
          test_results: { success: true, output: stdout },
          messages: [
            new ToolMessage({
              content: `Test execution completed successfully`,
              tool_call_id: runManager?.toolCall?.id,
              additional_kwargs: { stdout }
            })
          ]
        }
      } catch (error: any) {
        return {
          hasError: true,
          testResults: {
            success: false,
            error: error.message,
            output: error.stdout || ''
          },
          messages: [
            new ToolMessage({
              content: `Test execution failed: ${error.message}`,
              tool_call_id: runManager?.toolCall?.id,
              additional_kwargs: { error: error.message }
            })
          ]
        }
      }
    }
  }),

  // Enhanced create file tool
  new DynamicStructuredTool({
    name: 'create-file',
    description:
      'Creates a new file with optional template content and validation',
    schema: z.object({
      path: z.string().describe('path to the file'),
      fileName: z.string().describe('name of the file'),
      template: z.string().optional().describe('template name to use'),
      overwrite: z.boolean().optional().describe('overwrite if file exists')
    }),
    func: async (
      {
        path: dirPath,
        fileName,
        template,
        overwrite = false
      }: {
        path: string
        fileName: string
        template?: string
        overwrite?: boolean
      },
      runManager: any
    ) => {
      try {
        const normalizedPath = path.normalize(dirPath)
        const fullPath = path.join(normalizedPath, fileName)
        validateFilePath(fullPath)

        if (!fs.existsSync(normalizedPath)) {
          fs.mkdirSync(normalizedPath, { recursive: true })
        }

        if (fs.existsSync(fullPath) && !overwrite) {
          return {
            file_operation: {
              success: false,
              error: 'File already exists and overwrite is not enabled'
            },
            messages: [
              new ToolMessage({
                content:
                  'File creation failed: File already exists and overwrite is not enabled',
                tool_call_id: runManager?.toolCall?.id
              })
            ]
          }
        }

        let content = template ? '// Generated file\n\n' : ''
        fs.writeFileSync(fullPath, content, 'utf-8')

        return {
          file_operation: {
            success: true,
            path: fullPath,
            message: `File created successfully at ${fullPath}`
          },
          messages: [
            new ToolMessage({
              content: `File created successfully at ${fullPath}`,
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        }
      } catch (error: any) {
        return {
          file_operation: {
            success: false,
            error: error.message
          },
          messages: [
            new ToolMessage({
              content: `File creation failed: ${error.message}`,
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        }
      }
    }
  }),

  // Enhanced write file tool
  new DynamicStructuredTool({
    name: 'write-file',
    description: 'Writes content to a file with backup and validation options',
    schema: z.object({
      path: z.string().describe('path to the file'),
      fileName: z.string().describe('name of the file'),
      content: z.string().describe('content to write'),
      createBackup: z
        .boolean()
        .optional()
        .describe('create backup of existing file'),
      appendContent: z
        .boolean()
        .optional()
        .describe('append instead of overwrite')
    }),
    func: async (
      {
        path: dirPath,
        fileName,
        content,
        createBackup = false,
        appendContent = false
      }: {
        path: string
        fileName: string
        content: string
        createBackup?: boolean
        appendContent?: boolean
      },
      runManager: any
    ) => {
      try {
        const fullPath = path.join(dirPath, fileName)
        validateFilePath(fullPath)

        // Create backup if requested and file exists
        if (createBackup && fs.existsSync(fullPath)) {
          const backupPath = `${fullPath}.backup-${Date.now()}`
          fs.copyFileSync(fullPath, backupPath)
        }

        // Write content
        if (appendContent && fs.existsSync(fullPath)) {
          fs.appendFileSync(fullPath, '\n' + content, 'utf-8')
        } else {
          fs.writeFileSync(fullPath, content, 'utf-8')
        }

        return {
          success: true,
          path: fullPath,
          messages: [
            new ToolMessage({
              content: `File write successful. File ${
                appendContent ? 'updated' : 'written'
              } successfully`,
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        }
      } catch (error: any) {
        return {
          success: false,
          error: error.message,
          messages: [
            new ToolMessage({
              content: `File write failed: ${error.message}`,
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        }
      }
    }
  }),

  // Enhanced list files tool
  new DynamicStructuredTool({
    name: 'list-files',
    description:
      'Lists files in a directory with filtering and detailed information',
    schema: z.object({
      path: z.string().describe('path to the directory'),
      pattern: z.string().optional().describe('file pattern to match'),
      exclude: z
        .array(z.string())
        .optional()
        .describe('directories to exclude'),
      includeDetails: z.boolean().optional().describe('include file details')
    }),
    func: async (
      {
        path: dirPath,
        pattern,
        exclude,
        includeDetails = false
      }: {
        path: string
        pattern?: string
        exclude?: string[]
        includeDetails?: boolean
      },
      runManager: any
    ) => {
      try {
        const absolutePath = validateFilePath(dirPath)
        const files = listFilesRecursively(
          absolutePath,
          exclude || ['node_modules', 'public', 'dist', 'coverage', '.git'],
          pattern
        )

        if (!includeDetails) {
          return {
            success: true,
            files: files.map(f => f.path),
            messages: [
              new ToolMessage({
                content: `Files listed successfully in ${dirPath}`,
                additional_kwargs: { files: files.map(f => f.path) },
                tool_call_id: runManager?.toolCall?.id
              })
            ]
          }
        }

        return {
          success: true,
          files: files,
          messages: [
            new ToolMessage({
              content: `Files listed successfully in ${dirPath}`,
              additional_kwargs: { files },
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        }
      } catch (error: any) {
        return {
          success: false,
          error: error.message,
          messages: [
            new ToolMessage({
              content: `Failed to list files: ${error.message}`,
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        }
      }
    }
  }),
  // Enhanced read file tool with Command
  new DynamicStructuredTool({
    name: 'read-file',
    description: 'Reads file content with encoding options and metadata',
    schema: z.object({
      path: z.string().describe('path to the file'),
      encoding: z.string().optional().describe('file encoding'),
      includeMetadata: z.boolean().optional().describe('include file metadata')
    }),
    func: async (
      {
        path: filePath,
        encoding = 'utf-8',
        includeMetadata = false
      }: {
        path: string
        encoding?: string
        includeMetadata?: boolean
      },
      runManager: any
    ) => {
      try {
        const absolutePath = validateFilePath(filePath)
        const content = fs.readFileSync(absolutePath, {
          encoding: encoding as BufferEncoding
        })
        let result: { content: string; metadata?: any } = { content }

        if (includeMetadata) {
          const stats = fs.statSync(absolutePath)
          result.metadata = {
            size: stats.size,
            created: stats.birthtime,
            modified: stats.mtime,
            accessed: stats.atime
          }
        }

        return {
          file_content: {
            success: true,
            ...result
          },
          messages: [
            new ToolMessage({
              content: `File read successfully: ${filePath}`,
              tool_call_id: runManager?.toolCall?.id,
              additional_kwargs: result
            })
          ]
        }
      } catch (error: any) {
        return {
          file_content: {
            success: false,
            error: error.message
          },
          messages: [
            new ToolMessage({
              content: `Failed to read file: ${error.message}`,
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        }
      }
    }
  })
]

export const checkFileTool = tool(
  async (
    {
      path: filePath,
      searchRoot,
      excludeDirs = DEFAULT_EXCLUDE_DIRS,
      encoding = 'utf8'
    }: {
      path: string
      searchRoot?: string
      excludeDirs?: string[]
      encoding?: string
    },
    runManager: any
  ) => {
    try {
      const searchRootEx = process.cwd()
      const rootDir = searchRootEx
        ? validateFilePath(searchRootEx)
        : process.cwd()
      const fileName = path.basename(filePath)

      // Find all matching files and get their content
      const results = findFileRecursively(rootDir, fileName, excludeDirs).map(
        (location: any) => {
          try {
            return {
              path: location.path,
              content: fs.readFileSync(location.path, {
                encoding: encoding as BufferEncoding
              })
            }
          } catch (err) {
            return {
              path: location.path,
              content: null
            }
          }
        }
      )

      const result =
        results.length === 0
          ? {
              exists: false,
              message: 'File not found'
            }
          : {
              exists: true,
              files: results,
              message: 'Files found'
            }

      return {
        fileContent: result.files?.map((f: any) => f.content).join('\n'),
        filePath: result.files?.map((f: any) => f.path).join('\n'),
        messages: [
          new ToolMessage({
            content: result.message,
            tool_call_id: runManager?.toolCall?.id
          })
        ]
      }
    } catch (error: any) {
      return {
        file_check: {
          exists: false,
          error: error.message
        },
        messages: [
          new ToolMessage({
            content: `Error: ${error.message}`,
            tool_call_id: runManager?.toolCall?.id
          })
        ]
      }
    }
  },
  {
    name: 'check-file',
    description: 'Recursively searches for a file and returns its content',
    schema: z.object({
      path: z.string().describe('path or name of the file to find'),
      searchRoot: z
        .string()
        .optional()
        .describe(
          'root directory to start search from. Only include valid search paths'
        ),
      excludeDirs: z
        .array(z.string())
        .optional()
        .describe('directories to exclude from search'),
      encoding: z
        .string()
        .optional()
        .describe('encoding to use when reading file content')
    })
  }
)
interface TestFileResult {
  path: string
  content: string
}

export const findTestFileTool = tool(
  async (
    {
      sourcePath,
      extensions = ['.test.tsx', '.spec.tsx', '.test.ts', '.spec.ts'],
      searchRoot
    }: {
      sourcePath: string
      extensions?: string[]
      searchRoot?: string
    },
    runManager: any
  ) => {
    try {
      const searchRootEx = process.cwd()
      // searchRoot && searchRoot === '.' ? process.cwd() : searchRoot
      // Get the file name without extension to search for test files
      const sourceFileName = path.basename(sourcePath, path.extname(sourcePath))
      const rootDir = searchRootEx
        ? validateFilePath(searchRootEx)
        : process.cwd()

      // Function to check if a file is a test file for our source
      const isMatchingTestFile = (fileName: string): boolean => {
        return extensions.some(
          ext =>
            fileName === `${sourceFileName}${ext}` ||
            fileName.endsWith(`/${sourceFileName}${ext}`)
        )
      }

      // Find matching test file recursively
      const findTestFile = (dir: string): TestFileResult | null => {
        let result: TestFileResult | null = null
        const search = (currentDir: string) => {
          if (result) return // Stop if we found a match

          const files = fs.readdirSync(currentDir)
          for (const file of files) {
            if (result) break // Stop if we found a match

            const filePath = path.join(currentDir, file)
            const stat = fs.statSync(filePath)

            if (stat.isDirectory() && !DEFAULT_EXCLUDE_DIRS.includes(file)) {
              search(filePath) // Recurse into subdirectories
            } else if (isMatchingTestFile(file)) {
              try {
                const content = fs.readFileSync(filePath, 'utf8')
                result = {
                  path: filePath,
                  content: content
                }
                break
              } catch (err) {
                console.warn(`Could not read file: ${filePath}`)
              }
            }
          }
        }

        search(dir)
        return result
      }

      const testFile = findTestFile(rootDir)

      return {
        testFileContent: testFile ? testFile.content : null,
        testFilePath: testFile ? testFile.path : null,
        messages: [
          new ToolMessage({
            content: testFile
              ? `Found test file: ${testFile.path}`
              : `No test file found for ${sourceFileName}`,
            tool_call_id: runManager?.toolCall?.id
          })
        ]
      }
    } catch (error: any) {
      return {
        testFileContent: null,
        messages: [
          new ToolMessage({
            content: `Error finding test file: ${error.message}`,
            tool_call_id: runManager?.toolCall?.id
          })
        ]
      }
    }
  },
  {
    name: 'find-test-file',
    description: 'Recursively finds and reads corresponding test file content',
    schema: z.object({
      sourcePath: z.string().describe('path to the source file'),
      extensions: z
        .array(z.string())
        .optional()
        .describe('test file extensions to look for'),
      searchRoot: z
        .string()
        .optional()
        .describe(
          'root directory to start search from. Default is project root. Example value: /'
        )
    })
  }
)
