import { z } from 'zod';
import { tool } from '@langchain/core/tools';

// Transfer tools

// Define a tool to signal intent to hand off to a different agent
// Note: this is not using Command(goto) syntax for navigating to different agents:
// `workflow()` below handles the handoffs explicitly

export const transferToNpmTestTool = tool(
  async () => {
    return 'Successfully transferred to npm test tool';
  },
  {
    name: 'transferToNpmTestTool',
    description: 'Ask npm test tool for help.',
    schema: z.object({}),
    // Hint to our agent implementation that it should stop
    // immediately after invoking this tool
    returnDirect: true
  }
);

export const transferToNpmInstallTool = tool(
  async () => {
    return 'Successfully transferred to npm install tool';
  },
  {
    name: 'transferToNpmInstallTool',
    description: 'Ask npm install tool for help.',
    schema: z.object({}),
    // Hint to our agent implementation that it should stop
    // immediately after invoking this tool
    returnDirect: true
  }
);

// transfer to write_file tool
export const transferToWriteFileTool = tool(
  async () => {
    return 'Successfully transferred to write file tool';
  },
  {
    name: 'transferToWriteFileTool',
    description: 'Ask write file tool for help.',
    schema: z.object({}),
    // Hint to our agent implementation that it should stop
    // immediately after invoking this tool
    returnDirect: true
  }
);
// transfer to read_file tool
export const transferToReadFileTool = tool(
  async () => {
    return 'Successfully transferred to read file tool';
  },
  {
    name: 'transferToReadFileTool',
    description: 'Ask read file tool for help.',
    schema: z.object({}),
    // Hint to our agent implementation that it should stop
    // immediately after invoking this tool
    returnDirect: true
  }
);

// transfer to create_file tool
export const transferToCreateFileTool = tool(
  async () => {
    return 'Successfully transferred to create file tool';
  },
  {
    name: 'transferToCreateFileTool',
    description: 'Ask create file tool for help.',
    schema: z.object({}),
    // Hint to our agent implementation that it should stop
    // immediately after invoking this tool
    returnDirect: true
  }
);

export const transferToFindFilesTool = tool(
  async () => {
    return 'Successfully transferred to find files tool';
  },
  {
    name: 'transferToFindFilesTool',
    description: 'Ask find files tool for help.',
    schema: z.object({}),
    // Hint to our agent implementation that it should stop
    // immediately after invoking this tool
    returnDirect: true
  }
);

export const transferToRePlanningTool = tool(
  async () => {
    return 'Successfully transferred to replanning tool';
  },
  {
    name: 'transferToRePlanningTool',
    description: 'Ask replanning tool for help.',
    schema: z.object({}),
    // Hint to our agent implementation that it should stop
    // immediately after invoking this tool
    returnDirect: true
  }
);

export const transferToFinalResponseValidationTool = tool(
  async () => {
    return 'Successfully transferred to final response validation tool';
  },
  {
    name: 'transferToFinalResponseValidationTool',
    description: 'Ask final response validation tool for help.',
    schema: z.object({}),
    // Hint to our agent implementation that it should stop
    // immediately after invoking this tool
    returnDirect: true
  }
);

export const transferToMasterPlanningTool = tool(
  async () => {
    return 'Successfully transferred to master planning tool';
  },
  {
    name: 'transferToMasterPlanningTool',
    description: 'Ask master planning tool for help.',
    schema: z.object({}),
    // Hint to our agent implementation that it should stop
    // immediately after invoking this tool
    returnDirect: true
  }
);
