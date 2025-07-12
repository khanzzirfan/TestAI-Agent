import { z } from 'zod';
import { ToolMessage } from '@langchain/core/messages';
import { DynamicStructuredTool } from '@langchain/core/tools';
import { Command } from '@langchain/langgraph';
import fs from 'fs';
import path from 'path';
import differenceWith from 'lodash/differencewith';
import isEqual from 'lodash/isEqual';
import keys from 'lodash/keys';
import difference from 'lodash/difference';

// Configuration constants
const DEFAULT_EXCLUDE_DIRS = ['node_modules', 'dist', 'coverage', '.git', 'build'];

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

export const createFileTool = new DynamicStructuredTool({
  name: 'create_file',
  description: 'Creates a new file with completed content',
  schema: z.object({
    reason: z.string().describe('What is the reason that choose to call this tool from the context?'),
    path: z.string().describe('path to the file'),
    fileName: z.string().describe('name of the file'),
    overwrite: z.boolean().optional().describe('overwrite if file exists')
  }),
  func: async ({ path: dirPath, fileName, overwrite = false }, runManager: any, config: any) => {
    try {
      const normalizedPath = path.normalize(dirPath);
      const fullPath = path.join(normalizedPath, fileName);
      validateFilePath(fullPath);

      if (!fs.existsSync(normalizedPath)) {
        fs.mkdirSync(normalizedPath, { recursive: true });
      }

      if (fs.existsSync(fullPath) && !overwrite) {
        // read file content
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        return new Command({
          // update state keys
          update: {
            testFileName: fileName,
            testFilePath: fullPath,
            testFileContent: fileContent,
            testFileFound: true,
            messages: [
              new ToolMessage({
                content: `File already exists at ${fullPath}. Use 'overwrite' option to replace it.`,
                tool_call_id: config.toolCall.id
              })
            ]
          }
        });
      }

      const content = '// Generated file\n\n';
      fs.writeFileSync(fullPath, content, 'utf-8');

      return new Command({
        // update state keys
        update: {
          testFileName: fileName,
          testFilePath: fullPath,
          testFileContent: content,
          testFileFound: true,
          messages: [
            new ToolMessage({
              content: `File created successfully at ${fullPath}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    } catch (error: unknown | any) {
      return new Command({
        // update state keys
        update: {
          hasError: true,
          messages: [
            new ToolMessage({
              content: `Error creating file: ${error.message}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    }
  }
});

// Enhanced write file tool

export const writeFileTool = new DynamicStructuredTool({
  name: 'write_file',
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
    runManager: any,
    config: any
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

      return new Command({
        // update state keys
        update: {
          testFileName: fileName,
          testFilePath: fullPath,
          testFileContent: content,
          testFileFound: true,
          messages: [
            new ToolMessage({
              content: `File written successfully at ${fullPath}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    } catch (error: unknown | any) {
      return new Command({
        // update state keys
        update: {
          hasError: true,
          messages: [
            new ToolMessage({
              content: `Error writing file: ${error.message}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    }
  }
});

// Enhanced list files tool
export const listFilesTool = new DynamicStructuredTool({
  name: 'list_files',
  description: 'Lists files in a directory with filtering and detailed information',
  schema: z.object({
    reason: z.string().describe('What is the prompt that chose to call this tool from the context?'),
    path: z.string().describe('path to the directory'),
    pattern: z.string().optional().describe('file pattern to match'),
    exclude: z.array(z.string()).optional().describe('directories to exclude'),
    includeDetails: z.boolean().optional().describe('include file details')
  }),
  func: async ({ path: dirPath, pattern, exclude, includeDetails = false }, runManager: any, config: any) => {
    try {
      const absolutePath = validateFilePath(dirPath);
      const files = listFilesRecursively(
        absolutePath,
        exclude || ['node_modules', 'public', 'dist', 'coverage', '.git'],
        pattern
      );

      if (!includeDetails) {
        return new Command({
          // update state keys
          update: {
            success: true,
            messageValue: {
              files: files.map(f => f.path)
            },
            messages: [
              new ToolMessage({
                content: `Listed ${files.length} files in ${absolutePath}`,
                tool_call_id: config.toolCall.id
              })
            ]
          }
        });
      }

      const fileDirPath = path.dirname(absolutePath);

      return new Command({
        // update state keys
        update: {
          success: true,
          messageValue: files,
          messages: [
            new ToolMessage({
              content: `Listed ${files.length} files in ${fileDirPath}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    } catch (error: unknown | any) {
      return new Command({
        // update state keys
        update: {
          success: false,
          messageValue: error.message,
          messages: [
            new ToolMessage({
              content: `Error listing files: ${error.message}`,
              tool_call_id: config.toolCall.id
            })
          ],
          hasError: true
        }
      });
    }
  }
});

// Enhanced read file tool with Command
export const readFileTool = new DynamicStructuredTool({
  name: 'read_file',
  description: 'Reads file content with encoding options and metadata',
  schema: z.object({
    reason: z.string().describe('What is the prompt that chose to call this tool from the context?'),
    path: z.string().describe('path to the file'),
    encoding: z.string().optional().describe('file encoding'),
    includeMetadata: z.boolean().optional().describe('include file metadata')
  }),
  func: async ({ path: filePath, encoding = 'utf-8', includeMetadata = false }, runManager: any, config: any) => {
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

      return new Command({
        // update state keys
        update: {
          testFileContent: result.content,
          testFilePath: absolutePath,
          testFileName: path.basename(absolutePath),
          testFileFound: true,
          messages: [
            new ToolMessage({
              content: `File read successfully from ${absolutePath}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    } catch (error: unknown | any) {
      return new Command({
        // update state keys
        update: {
          error: error.message,
          hasError: true,
          messages: [
            new ToolMessage({
              content: `Error reading file: ${error.message}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    }
  }
});

export const findFileTool = new DynamicStructuredTool({
  name: 'find_file',
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
    runManager: any,
    config: any
  ) => {
    try {
      const searchRoot = process.cwd();
      const rootDir = searchRoot ? validateFilePath(searchRoot) : process.cwd();
      const fileName = path.basename(filePath);

      // Find all matching files and get their content
      const results = findFileRecursively(rootDir, fileName, excludeDirs).map(location => {
        try {
          return {
            fileName: path.basename(location.path),
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

      return new Command({
        // update state keys
        update: {
          fileName: result.files?.map(f => f.fileName).join('\n'),
          fileContent: result.files?.map(f => f.content).join('\n'),
          filePath: result.files?.map(f => f.path).join('\n'),
          messages: [
            new ToolMessage({
              content: result.message,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    } catch (error: any) {
      return new Command({
        // update state keys
        update: {
          hasError: true,
          messages: [
            new ToolMessage({
              content: `Error finding file: ${error.message}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    }
  }
});

export const findTestFileTool = new DynamicStructuredTool({
  name: 'find_test_file',
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
      extensions = ['.test.tsx', '.spec.tsx', '.test.ts', '.spec.ts', '.test.js', '.spec.js', '.test.jsx', '.spec.jsx']
    }: {
      sourcePath: string;
      extensions?: string[];
    },
    runManager: any,
    config: any
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
      const testFileFound = !!testFile;

      return new Command({
        // update state keys
        update: {
          testFileContent: testFile ? testFile.content : null,
          testFilePath: testFile ? testFile.path : null,
          testFileName: testFile ? path.basename(testFile.path) : null,
          testFileFound,
          messages: [
            new ToolMessage({
              content: testFileFound
                ? `Successfully found test file at ${testFile.path}`
                : 'No matching test file found',
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    } catch (error: any) {
      return new Command({
        // update state keys
        update: {
          testFileContent: null,
          testFileFound: false,
          messages: [
            new ToolMessage({
              content: `Error finding test file: ${error.message}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    }
  }
});

export const jsonDiffTool = new DynamicStructuredTool({
  name: 'json_diff',
  description: 'Compares two JSON objects and returns the differences',
  schema: z.object({
    reason: z.string().describe('What is the prompt that chose to call this tool from the context?'),
    json1: z.record(z.string(), z.string()).describe('json1 JSON object'),
    json2: z.record(z.string(), z.string()).describe('json2 JSON object')
  }),
  func: async ({ json1: object1, json2: object2 }) => {
    try {
      const differences = differenceWith(Object.entries(object1), Object.entries(object2), isEqual);
      const missingKeys = difference(keys(object1), keys(object2));
      return {
        messageValue: {
          differences,
          missingKeys
        }
      };
    } catch (error: any) {
      return {
        messageValue: {
          success: false,
          error: error.message
        }
      };
    }
  }
});

export const findPackageManagerFileTool = new DynamicStructuredTool({
  name: 'find_package_manager_file',
  description: 'Finds the package manager file (package.json or yarn.lock) in the project directory',
  schema: z.object({
    reason: z.string().describe('What is the prompt that chose to call this tool from the context?'),
    searchRoot: z.string().optional().describe('current root directory to start search from')
  }),
  func: async ({ searchRoot }: { searchRoot?: string }, runManager: any, config: any) => {
    try {
      const rootDir = searchRoot ? validateFilePath(searchRoot) : process.cwd();
      const packageJsonPath = path.join(rootDir, 'package.json');
      const yarnLockPath = path.join(rootDir, 'yarn.lock');

      const checkYarnLock = fs.existsSync(yarnLockPath);
      if (fs.existsSync(packageJsonPath)) {
        const content = fs.readFileSync(packageJsonPath, 'utf-8');
        return new Command({
          // update state keys
          update: {
            packageManager: checkYarnLock ? 'yarn' : 'npm',
            packageManagerContent: JSON.parse(content),
            messages: [
              new ToolMessage({
                content: `Found package manager file at ${packageJsonPath}`,
                tool_call_id: config.toolCall.id
              })
            ]
          }
        });
      } else {
        return new Command({
          // update state keys
          update: {
            packageManager: 'unknown',
            packageManagerContent: null,
            messages: [
              new ToolMessage({
                content: 'No package manager file found in the project directory',
                tool_call_id: config.toolCall.id
              })
            ]
          }
        });
      }
    } catch (error: any) {
      return new Command({
        // update state keys
        update: {
          packageManager: 'unknown',
          packageManagerContent: null,
          messages: [
            new ToolMessage({
              content: `Error finding package manager file: ${error.message}`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    }
  }
});

export const findExampleTestFileAndItsContent = new DynamicStructuredTool({
  name: 'find_example_test_file_and_its_content',
  description:
    'Finds a few example test files in the project directory for observation and learning, and returns their content',
  schema: z.object({
    reason: z.string().describe('What is the prompt that chose to call this tool from the context?'),
    searchRoot: z.string().optional().describe('current root directory to start search from'),
    extensions: z.array(z.string()).optional().describe('test file extensions to look for')
  }),
  func: async (
    {
      searchRoot,
      extensions = ['.test.tsx', '.spec.tsx', '.test.ts', '.spec.ts', '.test.js', '.spec.js', '.test.jsx', '.spec.jsx']
    }: {
      searchRoot?: string;
      extensions?: string[];
    },
    runManager: any,
    config: any
  ) => {
    try {
      const rootDir = searchRoot ? validateFilePath(searchRoot) : process.cwd();
      const results: FileResult[] = [];

      // Function to check if a file is a test file for our source
      const isMatchingTestFile = (fileName: string) => {
        return extensions.some(ext => fileName.endsWith(ext));
      };

      // Find matching test files recursively
      const findTestFiles = (dir: string) => {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);

          if (stat.isDirectory() && !DEFAULT_EXCLUDE_DIRS.includes(file)) {
            findTestFiles(filePath); // Recurse into subdirectories
          } else if (isMatchingTestFile(file)) {
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
      };

      findTestFiles(rootDir);

      // Return up to 5 example test files with their content
      const exampleFiles = results.slice(0, 5).map(f => {
        let content = '';
        try {
          content = fs.readFileSync(f.path, 'utf-8');
        } catch (err) {
          content = '[Error reading file]';
        }
        return {
          path: f.path,
          size: f.metadata.size,
          created: f.metadata.created,
          modified: f.metadata.modified,
          content
        };
      });

      return new Command({
        // update state keys
        update: {
          success: true,
          exampleTestFiles: exampleFiles,
          messages: [
            new ToolMessage({
              content: `Found ${exampleFiles.length} example test files`,
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    } catch (error: any) {
      return new Command({
        // update state keys
        update: {
          success: false,
          error: error.message,
          messages: [
            new ToolMessage({
              content: `Error finding example test files: ${error.message}`,
              tool_call_id: config.toolCall.id
            })
          ],
          hasError: true
        }
      });
    }
  }
});
