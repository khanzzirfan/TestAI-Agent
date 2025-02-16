export interface ToolCall {
  name: string;
  args: any;
  id: string;
}

export interface Message {
  tool_calls: ToolCall[];
}

export interface ToolResult {
  success: boolean;
  result: any;
  error?: string;
}
