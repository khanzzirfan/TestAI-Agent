import { z } from 'zod';
import { ToolMessage } from '@langchain/core/messages';
import { DynamicStructuredTool, tool } from '@langchain/core/tools';
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

// Simplified findFileRecursively for only file name, path, content, and path pattern support
const findFileRecursively = (
  searchPath: string,
  targetPattern: string,
  excludeDirs: string[] = ['node_modules', 'public', 'dist', 'coverage', '.git']
): { fileName: string; path: string; content: string }[] => {
  let results: { fileName: string; path: string; content: string }[] = [];
  const isPathPattern = targetPattern.includes(path.sep);
  const search = (currentDir: string) => {
    if (results.length >= 2) return;
    try {
      const files = fs.readdirSync(currentDir);
      for (const file of files) {
        if (results.length >= 2) break;
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          if (!excludeDirs.includes(file)) {
            search(filePath);
          }
        } else {
          if (
            (isPathPattern && filePath.endsWith(targetPattern)) ||
            (!isPathPattern && (file === targetPattern || filePath.endsWith(targetPattern)))
          ) {
            try {
              const content = fs.readFileSync(filePath, 'utf8');
              results.push({ fileName: file, path: filePath, content });
            } catch (err) {
              results.push({ fileName: file, path: filePath, content: '[Error reading file]' });
            }
          }
        }
      }
    } catch (error) {
      console.error(`Error searching directory ${currentDir}:`, error);
    }
  };
  search(searchPath);
  return results.slice(0, 2);
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
  const isPathPattern = filePattern ? filePattern.includes(path.sep) : false;
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
          if (
            !filePattern ||
            (isPathPattern && filePath.endsWith(filePattern)) ||
            (!isPathPattern && new RegExp(filePattern as string).test(file))
          ) {
            results.push({
              path: filePath,
              size: stat.size,
              modified: stat.mtime,
              created: stat.birthtime
            });
            if (results.length >= 2) return; // Limit to 2 results
          }
        }
        if (results.length >= 2) return;
      });
    } catch (error) {
      console.error(`Error reading directory ${currentDir}:`, error);
    }
  };

  listFiles(dir);
  return results.slice(0, 2);
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
    path: z
      .string()
      .describe('path to the directory where the file should be created (must be a full path, not relative)'),
    fileName: z.string().describe('name of the file'),
    content: z.string().describe('content to write in the file'),
    overwrite: z.boolean().optional().describe('overwrite if file exists')
  }),
  func: async ({ path: dirPath, fileName, content, overwrite = false }, runManager: any, config: any) => {
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

      const newContent = content || '// Generated file\n\n';
      fs.writeFileSync(fullPath, newContent, 'utf-8');

      return new Command({
        // update state keys
        update: {
          testFileName: fileName,
          testFilePath: fullPath,
          testFileContent: content,
          testFileFound: true,
          messages: [
            new ToolMessage({
              content: `File created successfully at ${dirPath}. File name: ${fileName}`,
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
              content: `File written successfully at ${fullPath}. File name: ${fileName}. 
              Proceed with the next steps to run tests using the 'npm_test' or 'yarn_test' tool.`,
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
    path: z.string().describe('path to the file'),
    reason: z.string().describe('What is the prompt that chose to call this tool from the context?'),
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
        update: {
          messages: [
            new ToolMessage({
              content: `File read successfully from ${absolutePath}. at filePath : ${filePath} \n
              Content:\n${result.content}\n\n
              `,
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

// Enhanced find file tool
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
      excludeDirs = DEFAULT_EXCLUDE_DIRS
    }: {
      path: string;
      excludeDirs?: string[];
    },
    runManager: any,
    config: any
  ) => {
    try {
      const searchRoot = process.cwd();
      const rootDir = searchRoot ? validateFilePath(searchRoot) : process.cwd();
      const results = findFileRecursively(rootDir, filePath, excludeDirs);
      return new Command({
        update: {
          fileName: results.length > 0 ? results.map(res => `${res.fileName}, \n`).join(', ') : '',
          filePath: results.length > 0 ? results.map(res => `${res.path}, \n`).join(', ') : '',
          fileContent: results.length > 0 ? results.map(res => `${res.content}, \n`).join('\n') : '',
          messages: [
            new ToolMessage({
              content:
                results.length > 0
                  ? `Found ${results.length} file(s):\n` +
                    results.map(f => `${f.fileName} at ${f.path} with content ${f.content}`).join('\n')
                  : 'No matching file found',
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    } catch (error: any) {
      return new Command({
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

// Move findTestFiles to top-level so it is defined before use
const findTestFiles = (
  dir: string,
  sourcePattern: string,
  extensions: string[]
): { fileName: string; path: string; content: string }[] => {
  let results: { fileName: string; path: string; content: string }[] = [];
  const isPathPattern = sourcePattern && sourcePattern.includes(path.sep);
  const sourceFileName = path.basename(sourcePattern, path.extname(sourcePattern));
  const isMatchingTestFile = (fileName: string) => {
    return extensions.some(
      ext => fileName === `${sourceFileName}${ext}` || fileName.endsWith(`/${sourceFileName}${ext}`)
    );
  };
  const search = (currentDir: string) => {
    if (results.length >= 2) return;
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
      if (results.length >= 2) break;
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory() && !DEFAULT_EXCLUDE_DIRS.includes(file)) {
        search(filePath);
      } else if ((isPathPattern && filePath.endsWith(sourcePattern)) || (!isPathPattern && isMatchingTestFile(file))) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          results.push({ fileName: file, path: filePath, content });
        } catch (err) {
          results.push({ fileName: file, path: filePath, content: '[Error reading file]' });
        }
      }
    }
  };
  search(dir);
  return results.slice(0, 2);
};

// Enhanced test file finding tool
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
      const searchRoot = process.cwd();
      const rootDir = searchRoot ? validateFilePath(searchRoot) : process.cwd();
      const results: { fileName: string; path: string; content: string }[] = findTestFiles(
        rootDir,
        sourcePath,
        extensions
      );
      return new Command({
        update: {
          testFileContent:
            results.length > 0
              ? results.map(res => `filename: ${res.fileName}: \n ${res.content} \n\n`).join('\n\n')
              : '',
          testFilePath: results.length > 0 ? results.map(res => `${res.path}\n\n`).join('\n\n') : [],
          testFileName: results.length > 0 ? results.map(res => `${res.fileName}\n\n`).join('\n\n') : [],
          testFileFound: results.length > 0,
          messages: [
            new ToolMessage({
              content:
                results.length > 0
                  ? `Found ${results.length} test file(s):\n` +
                    results
                      .map(
                        (f: { fileName: string; path: string; content: string }) =>
                          `${f.fileName} at ${f.path} content ${f.content}`
                      )
                      .join('\n')
                  : 'No matching test file found',
              tool_call_id: config.toolCall.id
            })
          ]
        }
      });
    } catch (error: any) {
      return new Command({
        update: {
          testFileContent: null,
          testFileFound: false,
          hasError: true,
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
                content: `Found package manager file at ${packageJsonPath} \n 
                Content:\n${content}\n\n
                `,
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

      // Return up to 15 example test files with their content
      const exampleFiles = results.slice(0, 15).map(f => {
        let content = '';
        try {
          content = fs.readFileSync(f.path, 'utf-8');
        } catch (err) {
          content = '[Error reading file]';
        }
        return {
          path: f.path,
          content
        };
      });

      return new Command({
        // update state keys
        update: {
          exampleTestFiles: exampleFiles,
          messages: [
            new ToolMessage({
              content: `Found ${exampleFiles.length} example test files. add to state
              Use these files for observation and learning. File paths: ${exampleFiles.map(f => f.path).join(', ')}\n\n
              Content:\n${exampleFiles.map(f => f.content).join('\n\n')}. \n Specially, use these files to understand how tests are structured and written in this project.`,
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
