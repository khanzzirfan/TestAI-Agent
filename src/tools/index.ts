import { TestTools } from './npm-test-tool';
import { FileFolderTools } from './file-folder-tools';
import { TestResultAnalyzerTools } from './test-result-analyzer-tool';

export const CustomTools = [...TestTools, ...FileFolderTools, ...TestResultAnalyzerTools];
