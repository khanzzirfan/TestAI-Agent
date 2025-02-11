import { z } from 'zod';
import { DynamicStructuredTool } from '@langchain/core/tools';
import fs from 'fs';
import path from 'path';
import { ToolMessage } from '@langchain/core/messages';

// Configuration constants
const DEFAULT_EXCLUDE_DIRS = ['node_modules', 'public', 'dist', 'coverage', '.git', 'build'];

// Enhanced find file function with recursive search
interface FileMetadata {
  size: number;
  created: Date;
  modified: Date;
  accessed: Date;
}

interface FileResult {
  path: string;
  isDirectory: boolean;
  metadata: FileMetadata;
}

const findFileRecursively = (
  searchPath: string,
  targetFile: string,
  excludeDirs: string[] = ['node_modules', 'public', 'dist', 'coverage', '.git']
): FileResult[] => {
  let results: FileResult[] = [];

  const search = (currentDir: string) => {
    try {
      const files = fs.readdirSync(currentDir);

      for (const file of files) {
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          if (!excludeDirs.includes(file)) {
            // Recurse into subdirectories that aren't excluded
            search(filePath);
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
          });
        }
      }
    } catch (error) {
      console.error(`Error searching directory ${currentDir}:`, error);
    }
  };

  search(searchPath);
  return results;
};

interface FileInfo {
  path: string;
  size: number;
  modified: Date;
  created: Date;
}

const listFilesRecursively = (
  dir: string,
  excludeDirs: string[] = ['node_modules', 'public', 'dist', 'coverage', '.git'],
  filePattern: string | null = null
): FileInfo[] => {
  let results: FileInfo[] = [];

  const listFiles = (currentDir: string) => {
    try {
      const files = fs.readdirSync(currentDir);

      files.forEach(file => {
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);

        if (stat && stat.isDirectory()) {
          if (!excludeDirs.includes(file)) {
            listFiles(filePath);
          }
        } else {
          if (!filePattern || new RegExp(filePattern).test(file)) {
            results.push({
              path: filePath,
              size: stat.size,
              modified: stat.mtime,
              created: stat.birthtime
            });
          }
        }
      });
    } catch (error) {
      console.error(`Error reading directory ${currentDir}:`, error);
    }
  };

  listFiles(dir);
  return results;
};

// Improved file validation
interface ValidateFilePath {
  (filePath: string): string;
}

const validateFilePath: ValidateFilePath = filePath => {
  if (!filePath) throw new Error('File path is required');

  const normalizedPath = path.normalize(filePath);
  const absolutePath = path.resolve(normalizedPath);

  // Security check - ensure path is within project directory
  const projectRoot = process.cwd();
  if (!absolutePath.startsWith(projectRoot)) {
    throw new Error('Access denied: File path must be within project directory');
  }

  return absolutePath;
};

export const FileFolderTools = [
  // Enhanced create file tool
  new DynamicStructuredTool({
    name: 'create-file',
    description: 'Creates a new file with optional template content and validation',
    schema: z.object({
      reason: z.string().describe('What is the prompt that chose to call this tool from the context?'),
      path: z.string().describe('path to the file'),
      fileName: z.string().describe('name of the file'),
      template: z.string().optional().describe('template name to use'),
      overwrite: z.boolean().optional().describe('overwrite if file exists')
    }),
    func: async ({ path: dirPath, fileName, template, overwrite = false }, runManager: any) => {
      try {
        const normalizedPath = path.normalize(dirPath);
        const fullPath = path.join(normalizedPath, fileName);
        validateFilePath(fullPath);

        if (!fs.existsSync(normalizedPath)) {
          fs.mkdirSync(normalizedPath, { recursive: true });
        }

        if (fs.existsSync(fullPath) && !overwrite) {
          return {
            file_operation: {
              success: false,
              error: 'File already exists and overwrite is not enabled'
            },
            messages: [
              new ToolMessage({
                content: 'File creation failed: File already exists and overwrite is not enabled',
                tool_call_id: runManager?.toolCall?.id
              })
            ]
          };
        }

        let content = template ? '// Generated file\n\n' : '';
        fs.writeFileSync(fullPath, content, 'utf-8');

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
        };
      } catch (error: unknown | any) {
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
        };
      }
    }
  }),

  // Enhanced write file tool
  new DynamicStructuredTool({
    name: 'write-file',
    description: 'Writes content to a file with backup and validation options',
    schema: z.object({
      reason: z.string().describe('What is the prompt that chose to call this tool from the context?'),
      path: z.string().describe('path to the file'),
      fileName: z.string().describe('name of the file'),
      content: z.string().describe('content to write'),
      createBackup: z.boolean().optional().describe('create backup of existing file'),
      appendContent: z.boolean().optional().describe('append instead of overwrite')
    }),
    func: async (
      { path: dirPath, fileName, content, createBackup = false, appendContent = false },
      runManager: any
    ) => {
      try {
        const fullPath = path.join(dirPath, fileName);
        validateFilePath(fullPath);

        // Create backup if requested and file exists
        if (createBackup && fs.existsSync(fullPath)) {
          const backupPath = `${fullPath}.backup-${Date.now()}`;
          fs.copyFileSync(fullPath, backupPath);
        }

        // Write content
        if (appendContent && fs.existsSync(fullPath)) {
          fs.appendFileSync(fullPath, '\n' + content, 'utf-8');
        } else {
          fs.writeFileSync(fullPath, content, 'utf-8');
        }

        return {
          success: true,
          path: fullPath,
          //// message: `File ${appendContent ? "updated" : "written"} successfully`,
          /// Tool messages are now handled by the ToolMessage class
          messages: [
            new ToolMessage({
              content: `File write successfull. File ${appendContent ? 'updated' : 'written'} successfully`,
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        };
      } catch (error: unknown | any) {
        return {
          success: false,
          error: error.message,
          messages: [
            new ToolMessage({
              content: `File write failed: ${error.message}`,
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        };
      }
    }
  }),

  // Enhanced list files tool
  new DynamicStructuredTool({
    name: 'list-files',
    description: 'Lists files in a directory with filtering and detailed information',
    schema: z.object({
      reason: z.string().describe('What is the prompt that chose to call this tool from the context?'),
      path: z.string().describe('path to the directory'),
      pattern: z.string().optional().describe('file pattern to match'),
      exclude: z.array(z.string()).optional().describe('directories to exclude'),
      includeDetails: z.boolean().optional().describe('include file details')
    }),
    func: async ({ path: dirPath, pattern, exclude, includeDetails = false }, runManager: any) => {
      try {
        const absolutePath = validateFilePath(dirPath);
        const files = listFilesRecursively(
          absolutePath,
          exclude || ['node_modules', 'public', 'dist', 'coverage', '.git'],
          pattern
        );

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
          };
        }

        const fileDirPath = path.dirname(absolutePath);

        return {
          success: true,
          files: files,
          messages: [
            new ToolMessage({
              content: `Files listed successfully in ${fileDirPath}`,
              additional_kwargs: { files },
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        };
      } catch (error: unknown | any) {
        return {
          success: false,
          error: error.message,
          messages: [
            new ToolMessage({
              content: `Failed to list files: ${error.message}`,
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        };
      }
    }
  }),

  // Enhanced read file tool with Command
  new DynamicStructuredTool({
    name: 'read-file',
    description: 'Reads file content with encoding options and metadata',
    schema: z.object({
      reason: z.string().describe('What is the prompt that chose to call this tool from the context?'),
      path: z.string().describe('path to the file'),
      encoding: z.string().optional().describe('file encoding'),
      includeMetadata: z.boolean().optional().describe('include file metadata')
    }),
    func: async ({ path: filePath, encoding = 'utf-8', includeMetadata = false }, runManager: any) => {
      try {
        const absolutePath = validateFilePath(filePath);
        const content = fs.readFileSync(absolutePath, { encoding: encoding as BufferEncoding });
        let result: { content: string; metadata?: FileMetadata } = { content };

        if (includeMetadata) {
          const stats = fs.statSync(absolutePath);
          result.metadata = {
            size: stats.size,
            created: stats.birthtime,
            modified: stats.mtime,
            accessed: stats.atime
          };
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
        };
      } catch (error: unknown | any) {
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
        };
      }
    }
  }),
  // Enhanced find file tool
  new DynamicStructuredTool({
    name: 'find-file',
    description: 'Recursively searches for a file and returns its content',
    schema: z.object({
      reason: z.string().describe('What is the prompt that chose to call this tool from the context?'),
      path: z.string().describe('path or name of the file to find'),
      searchRoot: z.string().optional().describe('current root directory to start search from'),
      excludeDirs: z.array(z.string()).optional().describe('directories to exclude from search'),
      encoding: z.string().optional().describe('encoding to use when reading file content')
    }),
    func: async (
      {
        path: filePath,
        excludeDirs = DEFAULT_EXCLUDE_DIRS,
        encoding = 'utf8'
      }: {
        path: string;
        excludeDirs?: string[];
        encoding?: string;
      },
      runManager: any
    ) => {
      try {
        const searchRoot = process.cwd();
        const rootDir = searchRoot ? validateFilePath(searchRoot) : process.cwd();
        const fileName = path.basename(filePath);

        // Find all matching files and get their content
        const results = findFileRecursively(rootDir, fileName, excludeDirs).map(location => {
          try {
            return {
              path: location.path,
              content: fs.readFileSync(location.path, encoding as BufferEncoding)
            };
          } catch (err) {
            return {
              path: location.path,
              content: null
            };
          }
        });

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
              };

        return {
          fileContent: result.files?.map(f => f.content).join('\n'),
          filePath: result.files?.map(f => f.path).join('\n'),
          messages: [
            new ToolMessage({
              content: `Found: ${result.message} \n 
              filepath: ${result.files?.map(f => f.path).join('\n')} \n
              filecontent: ${result.files?.map(f => f.content).join('\n')}
              `,
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        };
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
        };
      }
    }
  }),
  new DynamicStructuredTool({
    name: 'find-test-file',
    description: 'Recursively finds and reads corresponding test file content',
    schema: z.object({
      reason: z.string().describe('What is the prompt that chose to call this tool from the context?'),
      sourcePath: z.string().describe('path to the source file'),
      extensions: z.array(z.string()).optional().describe('test file extensions to look for'),
      searchRoot: z.string().optional().describe('current root directory to start search from')
    }),
    func: async (
      {
        sourcePath,
        extensions = ['.test.tsx', '.spec.tsx', '.test.ts', '.spec.ts']
      }: {
        sourcePath: string;
        extensions?: string[];
      },
      runManager: any
    ) => {
      try {
        // Get the file name without extension to search for test files
        const searchRoot = process.cwd();
        const sourceFileName = path.basename(sourcePath, path.extname(sourcePath));
        const rootDir = searchRoot ? validateFilePath(searchRoot) : process.cwd();

        // Function to check if a file is a test file for our source
        const isMatchingTestFile = (fileName: string) => {
          return extensions.some(
            ext => fileName === `${sourceFileName}${ext}` || fileName.endsWith(`/${sourceFileName}${ext}`)
          );
        };

        // Find matching test file recursively
        const findTestFile = (dir: string): { path: string; content: string } | null => {
          let result: { path: string; content: string } | null = null;
          const search = (currentDir: string) => {
            if (result) return; // Stop if we found a match

            const files = fs.readdirSync(currentDir);
            for (const file of files) {
              if (result) break; // Stop if we found a match

              const filePath = path.join(currentDir, file);
              const stat = fs.statSync(filePath);

              if (stat.isDirectory() && !DEFAULT_EXCLUDE_DIRS.includes(file)) {
                search(filePath); // Recurse into subdirectories
              } else if (isMatchingTestFile(file)) {
                try {
                  const content = fs.readFileSync(filePath, 'utf8');
                  result = {
                    path: filePath,
                    content: content
                  };
                  break;
                } catch (err) {
                  console.warn(`Could not read file: ${filePath}`);
                }
              }
            }
          };

          search(dir);
          return result;
        };

        const testFile = findTestFile(rootDir);

        return {
          testFileContent: testFile ? testFile.content : null,
          testFilePath: testFile ? testFile.path : null,
          testFileName: testFile ? path.basename(testFile.path) : null,
          messages: [
            new ToolMessage({
              content: testFile
                ? `Found test file: ${testFile.path} \nContent: ${JSON.stringify(testFile.content)}`.replace(
                    /\s+/g,
                    ' '
                  )
                : `No test file found for ${sourceFileName}`,
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        };
      } catch (error: any) {
        return {
          testFileContent: null,
          messages: [
            new ToolMessage({
              content: `Error finding test file: ${error.message}`,
              tool_call_id: runManager?.toolCall?.id
            })
          ]
        };
      }
    }
  })
];
