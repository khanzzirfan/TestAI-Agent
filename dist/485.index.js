"use strict";
exports.id = 485;
exports.ids = [485];
exports.modules = {

/***/ 71485:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  createSupervisor: () => (/* reexport */ createSupervisor)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/agents.js
var agents_namespaceObject = {};
__webpack_require__.r(agents_namespaceObject);

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/utils/hash.js
var utils_hash_namespaceObject = {};
__webpack_require__.r(utils_hash_namespaceObject);
__webpack_require__.d(utils_hash_namespaceObject, {
  insecureHash: () => (insecureHash)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/caches/base.js
var base_namespaceObject = {};
__webpack_require__.r(base_namespaceObject);
__webpack_require__.d(base_namespaceObject, {
  BaseCache: () => (BaseCache),
  InMemoryCache: () => (InMemoryCache),
  deserializeStoredGeneration: () => (deserializeStoredGeneration),
  getCacheKey: () => (getCacheKey),
  serializeGeneration: () => (serializeGeneration)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/chat_history.js
var chat_history_namespaceObject = {};
__webpack_require__.r(chat_history_namespaceObject);
__webpack_require__.d(chat_history_namespaceObject, {
  BaseChatMessageHistory: () => (BaseChatMessageHistory),
  BaseListChatMessageHistory: () => (BaseListChatMessageHistory),
  InMemoryChatMessageHistory: () => (InMemoryChatMessageHistory)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/documents/index.js
var documents_namespaceObject = {};
__webpack_require__.r(documents_namespaceObject);
__webpack_require__.d(documents_namespaceObject, {
  BaseDocumentTransformer: () => (BaseDocumentTransformer),
  Document: () => (Document),
  MappingDocumentTransformer: () => (MappingDocumentTransformer)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/embeddings.js
var embeddings_namespaceObject = {};
__webpack_require__.r(embeddings_namespaceObject);
__webpack_require__.d(embeddings_namespaceObject, {
  Embeddings: () => (Embeddings)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/example_selectors/index.js
var example_selectors_namespaceObject = {};
__webpack_require__.r(example_selectors_namespaceObject);
__webpack_require__.d(example_selectors_namespaceObject, {
  BaseExampleSelector: () => (BaseExampleSelector),
  BasePromptSelector: () => (BasePromptSelector),
  ConditionalPromptSelector: () => (ConditionalPromptSelector),
  LengthBasedExampleSelector: () => (LengthBasedExampleSelector),
  SemanticSimilarityExampleSelector: () => (SemanticSimilarityExampleSelector),
  isChatModel: () => (isChatModel),
  isLLM: () => (isLLM)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/utils/tiktoken.js
var tiktoken_namespaceObject = {};
__webpack_require__.r(tiktoken_namespaceObject);
__webpack_require__.d(tiktoken_namespaceObject, {
  encodingForModel: () => (encodingForModel),
  getEncoding: () => (getEncoding)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/language_models/base.js
var language_models_base_namespaceObject = {};
__webpack_require__.r(language_models_base_namespaceObject);
__webpack_require__.d(language_models_base_namespaceObject, {
  BaseLangChain: () => (BaseLangChain),
  BaseLanguageModel: () => (BaseLanguageModel),
  calculateMaxTokens: () => (calculateMaxTokens),
  getEmbeddingContextSize: () => (getEmbeddingContextSize),
  getModelContextSize: () => (getModelContextSize),
  getModelNameForTiktoken: () => (getModelNameForTiktoken),
  isOpenAITool: () => (isOpenAITool)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/language_models/chat_models.js
var chat_models_namespaceObject = {};
__webpack_require__.r(chat_models_namespaceObject);
__webpack_require__.d(chat_models_namespaceObject, {
  BaseChatModel: () => (BaseChatModel),
  SimpleChatModel: () => (SimpleChatModel),
  createChatMessageChunkEncoderStream: () => (createChatMessageChunkEncoderStream)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/language_models/llms.js
var llms_namespaceObject = {};
__webpack_require__.r(llms_namespaceObject);
__webpack_require__.d(llms_namespaceObject, {
  BaseLLM: () => (BaseLLM),
  LLM: () => (LLM)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/memory.js
var memory_namespaceObject = {};
__webpack_require__.r(memory_namespaceObject);
__webpack_require__.d(memory_namespaceObject, {
  BaseMemory: () => (BaseMemory),
  getInputValue: () => (getInputValue),
  getOutputValue: () => (getOutputValue),
  getPromptInputKey: () => (getPromptInputKey)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/runnables/index.js
var runnables_namespaceObject = {};
__webpack_require__.r(runnables_namespaceObject);
__webpack_require__.d(runnables_namespaceObject, {
  RouterRunnable: () => (RouterRunnable),
  Runnable: () => (runnables_base/* Runnable */.YN),
  RunnableAssign: () => (runnables_base/* RunnableAssign */.B2),
  RunnableBinding: () => (runnables_base/* RunnableBinding */.fJ),
  RunnableBranch: () => (RunnableBranch),
  RunnableEach: () => (runnables_base/* RunnableEach */.Vi),
  RunnableLambda: () => (runnables_base/* RunnableLambda */.jY),
  RunnableMap: () => (runnables_base/* RunnableMap */.ck),
  RunnableParallel: () => (runnables_base/* RunnableParallel */.Pq),
  RunnablePassthrough: () => (RunnablePassthrough),
  RunnablePick: () => (runnables_base/* RunnablePick */.Fm),
  RunnableRetry: () => (runnables_base/* RunnableRetry */.AO),
  RunnableSequence: () => (runnables_base/* RunnableSequence */.zZ),
  RunnableToolLike: () => (runnables_base/* RunnableToolLike */.pG),
  RunnableWithFallbacks: () => (runnables_base/* RunnableWithFallbacks */.lH),
  RunnableWithMessageHistory: () => (RunnableWithMessageHistory),
  _coerceToRunnable: () => (runnables_base/* _coerceToRunnable */.Bp),
  ensureConfig: () => (runnables_config/* ensureConfig */.ZI),
  getCallbackManagerForConfig: () => (runnables_config/* getCallbackManagerForConfig */.kJ),
  mergeConfigs: () => (runnables_config/* mergeConfigs */.SV),
  patchConfig: () => (runnables_config/* patchConfig */.tn),
  pickRunnableConfigKeys: () => (runnables_config/* pickRunnableConfigKeys */.DY)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/utils/json_patch.js
var json_patch_namespaceObject = {};
__webpack_require__.r(json_patch_namespaceObject);
__webpack_require__.d(json_patch_namespaceObject, {
  applyPatch: () => (fast_json_patch/* applyPatch */.X6),
  compare: () => (fast_json_patch/* compare */.UD)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/output_parsers/index.js
var output_parsers_namespaceObject = {};
__webpack_require__.r(output_parsers_namespaceObject);
__webpack_require__.d(output_parsers_namespaceObject, {
  AsymmetricStructuredOutputParser: () => (AsymmetricStructuredOutputParser),
  BaseCumulativeTransformOutputParser: () => (BaseCumulativeTransformOutputParser),
  BaseLLMOutputParser: () => (BaseLLMOutputParser),
  BaseOutputParser: () => (BaseOutputParser),
  BaseTransformOutputParser: () => (BaseTransformOutputParser),
  BytesOutputParser: () => (BytesOutputParser),
  CommaSeparatedListOutputParser: () => (CommaSeparatedListOutputParser),
  CustomListOutputParser: () => (CustomListOutputParser),
  JsonMarkdownStructuredOutputParser: () => (JsonMarkdownStructuredOutputParser),
  JsonOutputParser: () => (JsonOutputParser),
  ListOutputParser: () => (ListOutputParser),
  MarkdownListOutputParser: () => (MarkdownListOutputParser),
  NumberedListOutputParser: () => (NumberedListOutputParser),
  OutputParserException: () => (OutputParserException),
  StringOutputParser: () => (StringOutputParser),
  StructuredOutputParser: () => (StructuredOutputParser),
  XMLOutputParser: () => (XMLOutputParser),
  XML_FORMAT_INSTRUCTIONS: () => (XML_FORMAT_INSTRUCTIONS),
  parseJsonMarkdown: () => (json/* parseJsonMarkdown */.D),
  parsePartialJson: () => (json/* parsePartialJson */.d),
  parseXMLMarkdown: () => (parseXMLMarkdown)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/prompts/index.js
var prompts_namespaceObject = {};
__webpack_require__.r(prompts_namespaceObject);
__webpack_require__.d(prompts_namespaceObject, {
  AIMessagePromptTemplate: () => (chat/* AIMessagePromptTemplate */.sS),
  BaseChatPromptTemplate: () => (chat/* BaseChatPromptTemplate */.qF),
  BaseMessagePromptTemplate: () => (chat/* BaseMessagePromptTemplate */.pl),
  BaseMessageStringPromptTemplate: () => (chat/* BaseMessageStringPromptTemplate */.OT),
  BasePromptTemplate: () => (prompts_base/* BasePromptTemplate */.m),
  BaseStringPromptTemplate: () => (string/* BaseStringPromptTemplate */.L),
  ChatMessagePromptTemplate: () => (chat/* ChatMessagePromptTemplate */.Wn),
  ChatPromptTemplate: () => (chat/* ChatPromptTemplate */.RZ),
  DEFAULT_FORMATTER_MAPPING: () => (template/* DEFAULT_FORMATTER_MAPPING */.ez),
  DEFAULT_PARSER_MAPPING: () => (template/* DEFAULT_PARSER_MAPPING */.RG),
  FewShotChatMessagePromptTemplate: () => (few_shot/* FewShotChatMessagePromptTemplate */.s),
  FewShotPromptTemplate: () => (few_shot.FewShotPromptTemplate),
  HumanMessagePromptTemplate: () => (chat/* HumanMessagePromptTemplate */.FS),
  ImagePromptTemplate: () => (prompts_image/* ImagePromptTemplate */.C),
  MessagesPlaceholder: () => (chat/* MessagesPlaceholder */.GL),
  PipelinePromptTemplate: () => (PipelinePromptTemplate),
  PromptTemplate: () => (prompts_prompt.PromptTemplate),
  StructuredPrompt: () => (StructuredPrompt),
  SystemMessagePromptTemplate: () => (chat/* SystemMessagePromptTemplate */.BJ),
  checkValidTemplate: () => (template/* checkValidTemplate */.Ns),
  interpolateFString: () => (template/* interpolateFString */.Vt),
  interpolateMustache: () => (template/* interpolateMustache */.Qs),
  parseFString: () => (template/* parseFString */.D4),
  parseMustache: () => (template/* parseMustache */.g2),
  parseTemplate: () => (template/* parseTemplate */.QC),
  renderTemplate: () => (template/* renderTemplate */.Xm)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/retrievers/index.js
var retrievers_namespaceObject = {};
__webpack_require__.r(retrievers_namespaceObject);
__webpack_require__.d(retrievers_namespaceObject, {
  BaseRetriever: () => (BaseRetriever)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/stores.js
var stores_namespaceObject = {};
__webpack_require__.r(stores_namespaceObject);
__webpack_require__.d(stores_namespaceObject, {
  BaseStore: () => (BaseStore),
  InMemoryStore: () => (InMemoryStore)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/tools/index.js
var tools_namespaceObject = {};
__webpack_require__.r(tools_namespaceObject);
__webpack_require__.d(tools_namespaceObject, {
  BaseToolkit: () => (BaseToolkit),
  DynamicStructuredTool: () => (DynamicStructuredTool),
  DynamicTool: () => (DynamicTool),
  StructuredTool: () => (StructuredTool),
  Tool: () => (Tool),
  ToolInputParsingException: () => (tools_utils/* ToolInputParsingException */.q),
  tool: () => (tools_tool)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/tracers/tracer_langchain_v1.js
var tracer_langchain_v1_namespaceObject = {};
__webpack_require__.r(tracer_langchain_v1_namespaceObject);
__webpack_require__.d(tracer_langchain_v1_namespaceObject, {
  LangChainTracerV1: () => (LangChainTracerV1)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/tracers/initialize.js
var initialize_namespaceObject = {};
__webpack_require__.r(initialize_namespaceObject);
__webpack_require__.d(initialize_namespaceObject, {
  getTracingCallbackHandler: () => (getTracingCallbackHandler),
  getTracingV2CallbackHandler: () => (getTracingV2CallbackHandler)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/tracers/run_collector.js
var run_collector_namespaceObject = {};
__webpack_require__.r(run_collector_namespaceObject);
__webpack_require__.d(run_collector_namespaceObject, {
  RunCollectorCallbackHandler: () => (RunCollectorCallbackHandler)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/utils/chunk_array.js
var chunk_array_namespaceObject = {};
__webpack_require__.r(chunk_array_namespaceObject);
__webpack_require__.d(chunk_array_namespaceObject, {
  chunkArray: () => (chunkArray)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/utils/function_calling.js
var function_calling_namespaceObject = {};
__webpack_require__.r(function_calling_namespaceObject);
__webpack_require__.d(function_calling_namespaceObject, {
  convertToOpenAIFunction: () => (function_calling_convertToOpenAIFunction),
  convertToOpenAITool: () => (convertToOpenAITool),
  isLangChainTool: () => (isLangChainTool),
  isRunnableToolLike: () => (isRunnableToolLike),
  isStructuredTool: () => (isStructuredTool),
  isStructuredToolParams: () => (isStructuredToolParams)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/utils/json_schema.js
var json_schema_namespaceObject = {};
__webpack_require__.r(json_schema_namespaceObject);
__webpack_require__.d(json_schema_namespaceObject, {
  Validator: () => (Validator),
  deepCompareStrict: () => (deepCompareStrict)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/utils/math.js
var math_namespaceObject = {};
__webpack_require__.r(math_namespaceObject);
__webpack_require__.d(math_namespaceObject, {
  cosineSimilarity: () => (cosineSimilarity),
  euclideanDistance: () => (euclideanDistance),
  innerProduct: () => (math_innerProduct),
  matrixFunc: () => (matrixFunc),
  maximalMarginalRelevance: () => (maximalMarginalRelevance),
  normalize: () => (normalize)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/vectorstores.js
var vectorstores_namespaceObject = {};
__webpack_require__.r(vectorstores_namespaceObject);
__webpack_require__.d(vectorstores_namespaceObject, {
  SaveableVectorStore: () => (SaveableVectorStore),
  VectorStore: () => (VectorStore),
  VectorStoreRetriever: () => (VectorStoreRetriever)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/utils/testing/index.js
var testing_namespaceObject = {};
__webpack_require__.r(testing_namespaceObject);
__webpack_require__.d(testing_namespaceObject, {
  FakeChatMessageHistory: () => (FakeChatMessageHistory),
  FakeChatModel: () => (FakeChatModel),
  FakeEmbeddings: () => (FakeEmbeddings),
  FakeLLM: () => (FakeLLM),
  FakeListChatMessageHistory: () => (FakeListChatMessageHistory),
  FakeListChatModel: () => (FakeListChatModel),
  FakeRetriever: () => (FakeRetriever),
  FakeRunnable: () => (FakeRunnable),
  FakeSplitIntoListParser: () => (FakeSplitIntoListParser),
  FakeStreamingChatModel: () => (FakeStreamingChatModel),
  FakeStreamingLLM: () => (FakeStreamingLLM),
  FakeTool: () => (FakeTool),
  FakeTracer: () => (FakeTracer),
  FakeVectorStore: () => (FakeVectorStore),
  SingleRunExtractor: () => (SingleRunExtractor),
  SyntheticEmbeddings: () => (SyntheticEmbeddings)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/utils/types/index.js
var utils_types_namespaceObject = {};
__webpack_require__.r(utils_types_namespaceObject);
__webpack_require__.d(utils_types_namespaceObject, {
  isZodSchema: () => (isZodSchema)
});

// NAMESPACE OBJECT: ./node_modules/@langchain/core/dist/load/import_map.js
var import_map_namespaceObject = {};
__webpack_require__.r(import_map_namespaceObject);
__webpack_require__.d(import_map_namespaceObject, {
  agents: () => (agents_namespaceObject),
  caches: () => (base_namespaceObject),
  callbacks__base: () => (base),
  callbacks__manager: () => (manager),
  callbacks__promises: () => (promises),
  chat_history: () => (chat_history_namespaceObject),
  documents: () => (documents_namespaceObject),
  embeddings: () => (embeddings_namespaceObject),
  example_selectors: () => (example_selectors_namespaceObject),
  language_models__base: () => (language_models_base_namespaceObject),
  language_models__chat_models: () => (chat_models_namespaceObject),
  language_models__llms: () => (llms_namespaceObject),
  load__serializable: () => (serializable),
  memory: () => (memory_namespaceObject),
  messages: () => (dist_messages),
  output_parsers: () => (output_parsers_namespaceObject),
  outputs: () => (outputs),
  prompt_values: () => (prompt_values),
  prompts: () => (prompts_namespaceObject),
  retrievers: () => (retrievers_namespaceObject),
  runnables: () => (runnables_namespaceObject),
  stores: () => (stores_namespaceObject),
  tools: () => (tools_namespaceObject),
  tracers__base: () => (tracers_base),
  tracers__console: () => (tracers_console),
  tracers__initialize: () => (initialize_namespaceObject),
  tracers__log_stream: () => (log_stream),
  tracers__run_collector: () => (run_collector_namespaceObject),
  tracers__tracer_langchain: () => (tracer_langchain),
  tracers__tracer_langchain_v1: () => (tracer_langchain_v1_namespaceObject),
  utils__async_caller: () => (async_caller),
  utils__chunk_array: () => (chunk_array_namespaceObject),
  utils__env: () => (env),
  utils__function_calling: () => (function_calling_namespaceObject),
  utils__hash: () => (utils_hash_namespaceObject),
  utils__json_patch: () => (json_patch_namespaceObject),
  utils__json_schema: () => (json_schema_namespaceObject),
  utils__math: () => (math_namespaceObject),
  utils__stream: () => (utils_stream),
  utils__testing: () => (testing_namespaceObject),
  utils__tiktoken: () => (tiktoken_namespaceObject),
  utils__types: () => (utils_types_namespaceObject),
  vectorstores: () => (vectorstores_namespaceObject)
});

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/singletons/index.js + 1 modules
var singletons = __webpack_require__(29323);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/singletons.js

// EXTERNAL MODULE: external "node:async_hooks"
var external_node_async_hooks_ = __webpack_require__(16698);
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/setup/async_local_storage.js


function initializeAsyncLocalStorageSingleton() {
    singletons/* AsyncLocalStorageProviderSingleton */.Nx.initializeGlobalInstance(new external_node_async_hooks_.AsyncLocalStorage());
}
//# sourceMappingURL=async_local_storage.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/errors.js
// TODO: Merge with base LangChain error class when we drop support for core@0.2.0
class BaseLangGraphError extends Error {
    constructor(message, fields) {
        let finalMessage = message ?? "";
        if (fields?.lc_error_code) {
            finalMessage = `${finalMessage}\n\nTroubleshooting URL: https://js.langchain.com/docs/troubleshooting/errors/${fields.lc_error_code}/\n`;
        }
        super(finalMessage);
        Object.defineProperty(this, "lc_error_code", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.lc_error_code = fields?.lc_error_code;
    }
}
class GraphBubbleUp extends BaseLangGraphError {
    get is_bubble_up() {
        return true;
    }
}
class GraphRecursionError extends BaseLangGraphError {
    constructor(message, fields) {
        super(message, fields);
        this.name = "GraphRecursionError";
    }
    static get unminifiable_name() {
        return "GraphRecursionError";
    }
}
class GraphValueError extends BaseLangGraphError {
    constructor(message, fields) {
        super(message, fields);
        this.name = "GraphValueError";
    }
    static get unminifiable_name() {
        return "GraphValueError";
    }
}
class errors_GraphInterrupt extends GraphBubbleUp {
    constructor(interrupts, fields) {
        super(JSON.stringify(interrupts, null, 2), fields);
        Object.defineProperty(this, "interrupts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = "GraphInterrupt";
        this.interrupts = interrupts ?? [];
    }
    static get unminifiable_name() {
        return "GraphInterrupt";
    }
}
/** Raised by a node to interrupt execution. */
class NodeInterrupt extends errors_GraphInterrupt {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(message, fields) {
        super([
            {
                value: message,
                when: "during",
            },
        ], fields);
        this.name = "NodeInterrupt";
    }
    static get unminifiable_name() {
        return "NodeInterrupt";
    }
}
class ParentCommand extends GraphBubbleUp {
    constructor(command) {
        super();
        Object.defineProperty(this, "command", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = "ParentCommand";
        this.command = command;
    }
    static get unminifiable_name() {
        return "ParentCommand";
    }
}
function isParentCommand(e) {
    return (e !== undefined &&
        e.name === ParentCommand.unminifiable_name);
}
function isGraphBubbleUp(e) {
    return e !== undefined && e.is_bubble_up === true;
}
function isGraphInterrupt(e) {
    return (e !== undefined &&
        [
            errors_GraphInterrupt.unminifiable_name,
            NodeInterrupt.unminifiable_name,
        ].includes(e.name));
}
class EmptyInputError extends BaseLangGraphError {
    constructor(message, fields) {
        super(message, fields);
        this.name = "EmptyInputError";
    }
    static get unminifiable_name() {
        return "EmptyInputError";
    }
}
class errors_EmptyChannelError extends BaseLangGraphError {
    constructor(message, fields) {
        super(message, fields);
        this.name = "EmptyChannelError";
    }
    static get unminifiable_name() {
        return "EmptyChannelError";
    }
}
class InvalidUpdateError extends BaseLangGraphError {
    constructor(message, fields) {
        super(message, fields);
        this.name = "InvalidUpdateError";
    }
    static get unminifiable_name() {
        return "InvalidUpdateError";
    }
}
/**
 * @deprecated This exception type is no longer thrown.
 */
class MultipleSubgraphsError extends BaseLangGraphError {
    constructor(message, fields) {
        super(message, fields);
        this.name = "MultipleSubgraphError";
    }
    static get unminifiable_name() {
        return "MultipleSubgraphError";
    }
}
class UnreachableNodeError extends BaseLangGraphError {
    constructor(message, fields) {
        super(message, fields);
        this.name = "UnreachableNodeError";
    }
    static get unminifiable_name() {
        return "UnreachableNodeError";
    }
}
/**
 * Exception raised when an error occurs in the remote graph.
 */
class RemoteException extends BaseLangGraphError {
    constructor(message, fields) {
        super(message, fields);
        this.name = "RemoteException";
    }
    static get unminifiable_name() {
        return "RemoteException";
    }
}
/**
 * Used for subgraph detection.
 */
const getSubgraphsSeenSet = () => {
    if (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    globalThis[Symbol.for("LG_CHECKPOINT_SEEN_NS_SET")] === undefined) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        globalThis[Symbol.for("LG_CHECKPOINT_SEEN_NS_SET")] = new Set();
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return globalThis[Symbol.for("LG_CHECKPOINT_SEEN_NS_SET")];
};
//# sourceMappingURL=errors.js.map
// EXTERNAL MODULE: ./node_modules/uuid/wrapper.mjs
var wrapper = __webpack_require__(58526);
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-checkpoint/dist/id.js

function uuid6(clockseq) {
    return (0,wrapper.v6)({ clockseq });
}
// Skip UUID validation check, since UUID6s
// generated with negative clockseq are not
// technically compliant, but still work.
// See: https://github.com/uuidjs/uuid/issues/511
function uuid5(name, namespace) {
    const namespaceBytes = namespace
        .replace(/-/g, "")
        .match(/.{2}/g)
        .map((byte) => parseInt(byte, 16));
    return (0,wrapper.v5)(name, new Uint8Array(namespaceBytes));
}

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-checkpoint/dist/serde/types.js
const TASKS = "__pregel_tasks";
const ERROR = "__error__";
const SCHEDULED = "__scheduled__";
const INTERRUPT = "__interrupt__";
const types_RESUME = "__resume__";

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/load/serializable.js
var serializable = __webpack_require__(25567);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/load/import_constants.js
// Auto-generated by `scripts/create-entrypoints.js`. Do not edit manually.
const import_constants_optionalImportEntrypoints = [];

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/agents.js


;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/js-sha1/hash.js
// @ts-nocheck
// Inlined to deal with portability issues with importing crypto module
/*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/*jslint bitwise: true */

var root = typeof window === "object" ? window : {};
var HEX_CHARS = "0123456789abcdef".split("");
var EXTRA = [-2147483648, 8388608, 32768, 128];
var SHIFT = [24, 16, 8, 0];
var OUTPUT_TYPES = (/* unused pure expression or super */ null && (["hex", "array", "digest", "arrayBuffer"]));
var blocks = [];
function Sha1(sharedMemory) {
    if (sharedMemory) {
        blocks[0] =
            blocks[16] =
                blocks[1] =
                    blocks[2] =
                        blocks[3] =
                            blocks[4] =
                                blocks[5] =
                                    blocks[6] =
                                        blocks[7] =
                                            blocks[8] =
                                                blocks[9] =
                                                    blocks[10] =
                                                        blocks[11] =
                                                            blocks[12] =
                                                                blocks[13] =
                                                                    blocks[14] =
                                                                        blocks[15] =
                                                                            0;
        this.blocks = blocks;
    }
    else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    this.h0 = 0x67452301;
    this.h1 = 0xefcdab89;
    this.h2 = 0x98badcfe;
    this.h3 = 0x10325476;
    this.h4 = 0xc3d2e1f0;
    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
}
Sha1.prototype.update = function (message) {
    if (this.finalized) {
        return;
    }
    var notString = typeof message !== "string";
    if (notString && message.constructor === root.ArrayBuffer) {
        message = new Uint8Array(message);
    }
    var code, index = 0, i, length = message.length || 0, blocks = this.blocks;
    while (index < length) {
        if (this.hashed) {
            this.hashed = false;
            blocks[0] = this.block;
            blocks[16] =
                blocks[1] =
                    blocks[2] =
                        blocks[3] =
                            blocks[4] =
                                blocks[5] =
                                    blocks[6] =
                                        blocks[7] =
                                            blocks[8] =
                                                blocks[9] =
                                                    blocks[10] =
                                                        blocks[11] =
                                                            blocks[12] =
                                                                blocks[13] =
                                                                    blocks[14] =
                                                                        blocks[15] =
                                                                            0;
        }
        if (notString) {
            for (i = this.start; index < length && i < 64; ++index) {
                blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
            }
        }
        else {
            for (i = this.start; index < length && i < 64; ++index) {
                code = message.charCodeAt(index);
                if (code < 0x80) {
                    blocks[i >> 2] |= code << SHIFT[i++ & 3];
                }
                else if (code < 0x800) {
                    blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                }
                else if (code < 0xd800 || code >= 0xe000) {
                    blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                }
                else {
                    code =
                        0x10000 +
                            (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
                    blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
                    blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
                }
            }
        }
        this.lastByteIndex = i;
        this.bytes += i - this.start;
        if (i >= 64) {
            this.block = blocks[16];
            this.start = i - 64;
            this.hash();
            this.hashed = true;
        }
        else {
            this.start = i;
        }
    }
    if (this.bytes > 4294967295) {
        this.hBytes += (this.bytes / 4294967296) << 0;
        this.bytes = this.bytes % 4294967296;
    }
    return this;
};
Sha1.prototype.finalize = function () {
    if (this.finalized) {
        return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
        if (!this.hashed) {
            this.hash();
        }
        blocks[0] = this.block;
        blocks[16] =
            blocks[1] =
                blocks[2] =
                    blocks[3] =
                        blocks[4] =
                            blocks[5] =
                                blocks[6] =
                                    blocks[7] =
                                        blocks[8] =
                                            blocks[9] =
                                                blocks[10] =
                                                    blocks[11] =
                                                        blocks[12] =
                                                            blocks[13] =
                                                                blocks[14] =
                                                                    blocks[15] =
                                                                        0;
    }
    blocks[14] = (this.hBytes << 3) | (this.bytes >>> 29);
    blocks[15] = this.bytes << 3;
    this.hash();
};
Sha1.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4;
    var f, j, t, blocks = this.blocks;
    for (j = 16; j < 80; ++j) {
        t = blocks[j - 3] ^ blocks[j - 8] ^ blocks[j - 14] ^ blocks[j - 16];
        blocks[j] = (t << 1) | (t >>> 31);
    }
    for (j = 0; j < 20; j += 5) {
        f = (b & c) | (~b & d);
        t = (a << 5) | (a >>> 27);
        e = (t + f + e + 1518500249 + blocks[j]) << 0;
        b = (b << 30) | (b >>> 2);
        f = (a & b) | (~a & c);
        t = (e << 5) | (e >>> 27);
        d = (t + f + d + 1518500249 + blocks[j + 1]) << 0;
        a = (a << 30) | (a >>> 2);
        f = (e & a) | (~e & b);
        t = (d << 5) | (d >>> 27);
        c = (t + f + c + 1518500249 + blocks[j + 2]) << 0;
        e = (e << 30) | (e >>> 2);
        f = (d & e) | (~d & a);
        t = (c << 5) | (c >>> 27);
        b = (t + f + b + 1518500249 + blocks[j + 3]) << 0;
        d = (d << 30) | (d >>> 2);
        f = (c & d) | (~c & e);
        t = (b << 5) | (b >>> 27);
        a = (t + f + a + 1518500249 + blocks[j + 4]) << 0;
        c = (c << 30) | (c >>> 2);
    }
    for (; j < 40; j += 5) {
        f = b ^ c ^ d;
        t = (a << 5) | (a >>> 27);
        e = (t + f + e + 1859775393 + blocks[j]) << 0;
        b = (b << 30) | (b >>> 2);
        f = a ^ b ^ c;
        t = (e << 5) | (e >>> 27);
        d = (t + f + d + 1859775393 + blocks[j + 1]) << 0;
        a = (a << 30) | (a >>> 2);
        f = e ^ a ^ b;
        t = (d << 5) | (d >>> 27);
        c = (t + f + c + 1859775393 + blocks[j + 2]) << 0;
        e = (e << 30) | (e >>> 2);
        f = d ^ e ^ a;
        t = (c << 5) | (c >>> 27);
        b = (t + f + b + 1859775393 + blocks[j + 3]) << 0;
        d = (d << 30) | (d >>> 2);
        f = c ^ d ^ e;
        t = (b << 5) | (b >>> 27);
        a = (t + f + a + 1859775393 + blocks[j + 4]) << 0;
        c = (c << 30) | (c >>> 2);
    }
    for (; j < 60; j += 5) {
        f = (b & c) | (b & d) | (c & d);
        t = (a << 5) | (a >>> 27);
        e = (t + f + e - 1894007588 + blocks[j]) << 0;
        b = (b << 30) | (b >>> 2);
        f = (a & b) | (a & c) | (b & c);
        t = (e << 5) | (e >>> 27);
        d = (t + f + d - 1894007588 + blocks[j + 1]) << 0;
        a = (a << 30) | (a >>> 2);
        f = (e & a) | (e & b) | (a & b);
        t = (d << 5) | (d >>> 27);
        c = (t + f + c - 1894007588 + blocks[j + 2]) << 0;
        e = (e << 30) | (e >>> 2);
        f = (d & e) | (d & a) | (e & a);
        t = (c << 5) | (c >>> 27);
        b = (t + f + b - 1894007588 + blocks[j + 3]) << 0;
        d = (d << 30) | (d >>> 2);
        f = (c & d) | (c & e) | (d & e);
        t = (b << 5) | (b >>> 27);
        a = (t + f + a - 1894007588 + blocks[j + 4]) << 0;
        c = (c << 30) | (c >>> 2);
    }
    for (; j < 80; j += 5) {
        f = b ^ c ^ d;
        t = (a << 5) | (a >>> 27);
        e = (t + f + e - 899497514 + blocks[j]) << 0;
        b = (b << 30) | (b >>> 2);
        f = a ^ b ^ c;
        t = (e << 5) | (e >>> 27);
        d = (t + f + d - 899497514 + blocks[j + 1]) << 0;
        a = (a << 30) | (a >>> 2);
        f = e ^ a ^ b;
        t = (d << 5) | (d >>> 27);
        c = (t + f + c - 899497514 + blocks[j + 2]) << 0;
        e = (e << 30) | (e >>> 2);
        f = d ^ e ^ a;
        t = (c << 5) | (c >>> 27);
        b = (t + f + b - 899497514 + blocks[j + 3]) << 0;
        d = (d << 30) | (d >>> 2);
        f = c ^ d ^ e;
        t = (b << 5) | (b >>> 27);
        a = (t + f + a - 899497514 + blocks[j + 4]) << 0;
        c = (c << 30) | (c >>> 2);
    }
    this.h0 = (this.h0 + a) << 0;
    this.h1 = (this.h1 + b) << 0;
    this.h2 = (this.h2 + c) << 0;
    this.h3 = (this.h3 + d) << 0;
    this.h4 = (this.h4 + e) << 0;
};
Sha1.prototype.hex = function () {
    this.finalize();
    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;
    return (HEX_CHARS[(h0 >> 28) & 0x0f] +
        HEX_CHARS[(h0 >> 24) & 0x0f] +
        HEX_CHARS[(h0 >> 20) & 0x0f] +
        HEX_CHARS[(h0 >> 16) & 0x0f] +
        HEX_CHARS[(h0 >> 12) & 0x0f] +
        HEX_CHARS[(h0 >> 8) & 0x0f] +
        HEX_CHARS[(h0 >> 4) & 0x0f] +
        HEX_CHARS[h0 & 0x0f] +
        HEX_CHARS[(h1 >> 28) & 0x0f] +
        HEX_CHARS[(h1 >> 24) & 0x0f] +
        HEX_CHARS[(h1 >> 20) & 0x0f] +
        HEX_CHARS[(h1 >> 16) & 0x0f] +
        HEX_CHARS[(h1 >> 12) & 0x0f] +
        HEX_CHARS[(h1 >> 8) & 0x0f] +
        HEX_CHARS[(h1 >> 4) & 0x0f] +
        HEX_CHARS[h1 & 0x0f] +
        HEX_CHARS[(h2 >> 28) & 0x0f] +
        HEX_CHARS[(h2 >> 24) & 0x0f] +
        HEX_CHARS[(h2 >> 20) & 0x0f] +
        HEX_CHARS[(h2 >> 16) & 0x0f] +
        HEX_CHARS[(h2 >> 12) & 0x0f] +
        HEX_CHARS[(h2 >> 8) & 0x0f] +
        HEX_CHARS[(h2 >> 4) & 0x0f] +
        HEX_CHARS[h2 & 0x0f] +
        HEX_CHARS[(h3 >> 28) & 0x0f] +
        HEX_CHARS[(h3 >> 24) & 0x0f] +
        HEX_CHARS[(h3 >> 20) & 0x0f] +
        HEX_CHARS[(h3 >> 16) & 0x0f] +
        HEX_CHARS[(h3 >> 12) & 0x0f] +
        HEX_CHARS[(h3 >> 8) & 0x0f] +
        HEX_CHARS[(h3 >> 4) & 0x0f] +
        HEX_CHARS[h3 & 0x0f] +
        HEX_CHARS[(h4 >> 28) & 0x0f] +
        HEX_CHARS[(h4 >> 24) & 0x0f] +
        HEX_CHARS[(h4 >> 20) & 0x0f] +
        HEX_CHARS[(h4 >> 16) & 0x0f] +
        HEX_CHARS[(h4 >> 12) & 0x0f] +
        HEX_CHARS[(h4 >> 8) & 0x0f] +
        HEX_CHARS[(h4 >> 4) & 0x0f] +
        HEX_CHARS[h4 & 0x0f]);
};
Sha1.prototype.toString = Sha1.prototype.hex;
Sha1.prototype.digest = function () {
    this.finalize();
    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;
    return [
        (h0 >> 24) & 0xff,
        (h0 >> 16) & 0xff,
        (h0 >> 8) & 0xff,
        h0 & 0xff,
        (h1 >> 24) & 0xff,
        (h1 >> 16) & 0xff,
        (h1 >> 8) & 0xff,
        h1 & 0xff,
        (h2 >> 24) & 0xff,
        (h2 >> 16) & 0xff,
        (h2 >> 8) & 0xff,
        h2 & 0xff,
        (h3 >> 24) & 0xff,
        (h3 >> 16) & 0xff,
        (h3 >> 8) & 0xff,
        h3 & 0xff,
        (h4 >> 24) & 0xff,
        (h4 >> 16) & 0xff,
        (h4 >> 8) & 0xff,
        h4 & 0xff,
    ];
};
Sha1.prototype.array = Sha1.prototype.digest;
Sha1.prototype.arrayBuffer = function () {
    this.finalize();
    var buffer = new ArrayBuffer(20);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    return buffer;
};
const insecureHash = (message) => {
    return new Sha1(true).update(message)["hex"]();
};

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/hash.js


// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/messages/utils.js
var utils = __webpack_require__(9751);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/caches/base.js


/**
 * This cache key should be consistent across all versions of LangChain.
 * It is currently NOT consistent across versions of LangChain.
 *
 * A huge benefit of having a remote cache (like redis) is that you can
 * access the cache from different processes/machines. The allows you to
 * separate concerns and scale horizontally.
 *
 * TODO: Make cache key consistent across versions of LangChain.
 */
const getCacheKey = (...strings) => insecureHash(strings.join("_"));
function deserializeStoredGeneration(storedGeneration) {
    if (storedGeneration.message !== undefined) {
        return {
            text: storedGeneration.text,
            message: (0,utils/* mapStoredMessageToChatMessage */.Pz)(storedGeneration.message),
        };
    }
    else {
        return { text: storedGeneration.text };
    }
}
function serializeGeneration(generation) {
    const serializedValue = {
        text: generation.text,
    };
    if (generation.message !== undefined) {
        serializedValue.message = generation.message.toDict();
    }
    return serializedValue;
}
/**
 * Base class for all caches. All caches should extend this class.
 */
class BaseCache {
}
const GLOBAL_MAP = new Map();
/**
 * A cache for storing LLM generations that stores data in memory.
 */
class InMemoryCache extends BaseCache {
    constructor(map) {
        super();
        Object.defineProperty(this, "cache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cache = map ?? new Map();
    }
    /**
     * Retrieves data from the cache using a prompt and an LLM key. If the
     * data is not found, it returns null.
     * @param prompt The prompt used to find the data.
     * @param llmKey The LLM key used to find the data.
     * @returns The data corresponding to the prompt and LLM key, or null if not found.
     */
    lookup(prompt, llmKey) {
        return Promise.resolve(this.cache.get(getCacheKey(prompt, llmKey)) ?? null);
    }
    /**
     * Updates the cache with new data using a prompt and an LLM key.
     * @param prompt The prompt used to store the data.
     * @param llmKey The LLM key used to store the data.
     * @param value The data to be stored.
     */
    async update(prompt, llmKey, value) {
        this.cache.set(getCacheKey(prompt, llmKey), value);
    }
    /**
     * Returns a global instance of InMemoryCache using a predefined global
     * map as the initial cache.
     * @returns A global instance of InMemoryCache.
     */
    static global() {
        return new InMemoryCache(GLOBAL_MAP);
    }
}

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/callbacks/base.js
var base = __webpack_require__(25361);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/callbacks/manager.js + 2 modules
var manager = __webpack_require__(54002);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/callbacks/promises.js + 1 modules
var promises = __webpack_require__(59224);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/messages/index.js + 2 modules
var dist_messages = __webpack_require__(91574);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/chat_history.js


// TODO: Combine into one class for 0.2
/**
 * Base class for all chat message histories. All chat message histories
 * should extend this class.
 */
class BaseChatMessageHistory extends serializable.Serializable {
    /**
     * Add a list of messages.
     *
     * Implementations should override this method to handle bulk addition of messages
     * in an efficient manner to avoid unnecessary round-trips to the underlying store.
     *
     * @param messages - A list of BaseMessage objects to store.
     */
    async addMessages(messages) {
        for (const message of messages) {
            await this.addMessage(message);
        }
    }
}
/**
 * Base class for all list chat message histories. All list chat message
 * histories should extend this class.
 */
class BaseListChatMessageHistory extends serializable.Serializable {
    /**
     * This is a convenience method for adding a human message string to the store.
     * Please note that this is a convenience method. Code should favor the
     * bulk addMessages interface instead to save on round-trips to the underlying
     * persistence layer.
     * This method may be deprecated in a future release.
     */
    addUserMessage(message) {
        return this.addMessage(new dist_messages.HumanMessage(message));
    }
    /** @deprecated Use addAIMessage instead */
    addAIChatMessage(message) {
        return this.addMessage(new dist_messages.AIMessage(message));
    }
    /**
     * This is a convenience method for adding an AI message string to the store.
     * Please note that this is a convenience method. Code should favor the bulk
     * addMessages interface instead to save on round-trips to the underlying
     * persistence layer.
     * This method may be deprecated in a future release.
     */
    addAIMessage(message) {
        return this.addMessage(new dist_messages.AIMessage(message));
    }
    /**
     * Add a list of messages.
     *
     * Implementations should override this method to handle bulk addition of messages
     * in an efficient manner to avoid unnecessary round-trips to the underlying store.
     *
     * @param messages - A list of BaseMessage objects to store.
     */
    async addMessages(messages) {
        for (const message of messages) {
            await this.addMessage(message);
        }
    }
    /**
     * Remove all messages from the store.
     */
    clear() {
        throw new Error("Not implemented.");
    }
}
/**
 * Class for storing chat message history in-memory. It extends the
 * BaseListChatMessageHistory class and provides methods to get, add, and
 * clear messages.
 */
class InMemoryChatMessageHistory extends BaseListChatMessageHistory {
    constructor(messages) {
        super(...arguments);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain", "stores", "message", "in_memory"]
        });
        Object.defineProperty(this, "messages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        this.messages = messages ?? [];
    }
    /**
     * Method to get all the messages stored in the ChatMessageHistory
     * instance.
     * @returns Array of stored BaseMessage instances.
     */
    async getMessages() {
        return this.messages;
    }
    /**
     * Method to add a new message to the ChatMessageHistory instance.
     * @param message The BaseMessage instance to add.
     * @returns A promise that resolves when the message has been added.
     */
    async addMessage(message) {
        this.messages.push(message);
    }
    /**
     * Method to clear all the messages from the ChatMessageHistory instance.
     * @returns A promise that resolves when all messages have been cleared.
     */
    async clear() {
        this.messages = [];
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/documents/document.js
/**
 * Interface for interacting with a document.
 */
class Document {
    constructor(fields) {
        Object.defineProperty(this, "pageContent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metadata", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // The ID field is optional at the moment.
        // It will likely become required in a future major release after
        // it has been adopted by enough vectorstore implementations.
        /**
         * An optional identifier for the document.
         *
         * Ideally this should be unique across the document collection and formatted
         * as a UUID, but this will not be enforced.
         */
        Object.defineProperty(this, "id", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.pageContent =
            fields.pageContent !== undefined ? fields.pageContent.toString() : "";
        this.metadata = fields.metadata ?? {};
        this.id = fields.id;
    }
}

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/runnables/base.js + 4 modules
var runnables_base = __webpack_require__(27918);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/documents/transformers.js

/**
 * Abstract base class for document transformation systems.
 *
 * A document transformation system takes an array of Documents and returns an
 * array of transformed Documents. These arrays do not necessarily have to have
 * the same length.
 *
 * One example of this is a text splitter that splits a large document into
 * many smaller documents.
 */
class BaseDocumentTransformer extends runnables_base/* Runnable */.YN {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "documents", "transformers"]
        });
    }
    /**
     * Method to invoke the document transformation. This method calls the
     * transformDocuments method with the provided input.
     * @param input The input documents to be transformed.
     * @param _options Optional configuration object to customize the behavior of callbacks.
     * @returns A Promise that resolves to the transformed documents.
     */
    invoke(input, _options) {
        return this.transformDocuments(input);
    }
}
/**
 * Class for document transformers that return exactly one transformed document
 * for each input document.
 */
class MappingDocumentTransformer extends BaseDocumentTransformer {
    async transformDocuments(documents) {
        const newDocuments = [];
        for (const document of documents) {
            const transformedDocument = await this._transformDocument(document);
            newDocuments.push(transformedDocument);
        }
        return newDocuments;
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/documents/index.js



// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/utils/async_caller.js
var async_caller = __webpack_require__(61637);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/embeddings.js

/**
 * An abstract class that provides methods for embedding documents and
 * queries using LangChain.
 */
class Embeddings {
    constructor(params) {
        /**
         * The async caller should be used by subclasses to make any async calls,
         * which will thus benefit from the concurrency and retry logic.
         */
        Object.defineProperty(this, "caller", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.caller = new async_caller.AsyncCaller(params ?? {});
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/example_selectors/base.js

/**
 * Base class for example selectors.
 */
class BaseExampleSelector extends serializable.Serializable {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "example_selectors", "base"]
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/example_selectors/conditional.js
/**
 * Abstract class that defines the interface for selecting a prompt for a
 * given language model.
 */
class BasePromptSelector {
    /**
     * Asynchronous version of `getPrompt` that also accepts an options object
     * for partial variables.
     * @param llm The language model for which to get a prompt.
     * @param options Optional object for partial variables.
     * @returns A Promise that resolves to a prompt template.
     */
    async getPromptAsync(llm, options) {
        const prompt = this.getPrompt(llm);
        return prompt.partial(options?.partialVariables ?? {});
    }
}
/**
 * Concrete implementation of `BasePromptSelector` that selects a prompt
 * based on a set of conditions. It has a default prompt that it returns
 * if none of the conditions are met.
 */
class ConditionalPromptSelector extends BasePromptSelector {
    constructor(default_prompt, conditionals = []) {
        super();
        Object.defineProperty(this, "defaultPrompt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "conditionals", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.defaultPrompt = default_prompt;
        this.conditionals = conditionals;
    }
    /**
     * Method that selects a prompt based on a set of conditions. If none of
     * the conditions are met, it returns the default prompt.
     * @param llm The language model for which to get a prompt.
     * @returns A prompt template.
     */
    getPrompt(llm) {
        for (const [condition, prompt] of this.conditionals) {
            if (condition(llm)) {
                return prompt;
            }
        }
        return this.defaultPrompt;
    }
}
/**
 * Type guard function that checks if a given language model is of type
 * `BaseLLM`.
 */
function isLLM(llm) {
    return llm._modelType() === "base_llm";
}
/**
 * Type guard function that checks if a given language model is of type
 * `BaseChatModel`.
 */
function isChatModel(llm) {
    return llm._modelType() === "base_chat_model";
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/example_selectors/length_based.js

/**
 * Calculates the length of a text based on the number of words and lines.
 */
function getLengthBased(text) {
    return text.split(/\n| /).length;
}
/**
 * A specialized example selector that selects examples based on their
 * length, ensuring that the total length of the selected examples does
 * not exceed a specified maximum length.
 * @example
 * ```typescript
 * const exampleSelector = new LengthBasedExampleSelector(
 *   [
 *     { input: "happy", output: "sad" },
 *     { input: "tall", output: "short" },
 *     { input: "energetic", output: "lethargic" },
 *     { input: "sunny", output: "gloomy" },
 *     { input: "windy", output: "calm" },
 *   ],
 *   {
 *     examplePrompt: new PromptTemplate({
 *       inputVariables: ["input", "output"],
 *       template: "Input: {input}\nOutput: {output}",
 *     }),
 *     maxLength: 25,
 *   },
 * );
 * const dynamicPrompt = new FewShotPromptTemplate({
 *   exampleSelector,
 *   examplePrompt: new PromptTemplate({
 *     inputVariables: ["input", "output"],
 *     template: "Input: {input}\nOutput: {output}",
 *   }),
 *   prefix: "Give the antonym of every input",
 *   suffix: "Input: {adjective}\nOutput:",
 *   inputVariables: ["adjective"],
 * });
 * console.log(dynamicPrompt.format({ adjective: "big" }));
 * console.log(
 *   dynamicPrompt.format({
 *     adjective:
 *       "big and huge and massive and large and gigantic and tall and much much much much much bigger than everything else",
 *   }),
 * );
 * ```
 */
class LengthBasedExampleSelector extends BaseExampleSelector {
    constructor(data) {
        super(data);
        Object.defineProperty(this, "examples", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "examplePrompt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "getTextLength", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: getLengthBased
        });
        Object.defineProperty(this, "maxLength", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 2048
        });
        Object.defineProperty(this, "exampleTextLengths", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        this.examplePrompt = data.examplePrompt;
        this.maxLength = data.maxLength ?? 2048;
        this.getTextLength = data.getTextLength ?? getLengthBased;
    }
    /**
     * Adds an example to the list of examples and calculates its length.
     * @param example The example to be added.
     * @returns Promise that resolves when the example has been added and its length calculated.
     */
    async addExample(example) {
        this.examples.push(example);
        const stringExample = await this.examplePrompt.format(example);
        this.exampleTextLengths.push(this.getTextLength(stringExample));
    }
    /**
     * Calculates the lengths of the examples.
     * @param v Array of lengths of the examples.
     * @param values Instance of LengthBasedExampleSelector.
     * @returns Promise that resolves with an array of lengths of the examples.
     */
    async calculateExampleTextLengths(v, values) {
        if (v.length > 0) {
            return v;
        }
        const { examples, examplePrompt } = values;
        const stringExamples = await Promise.all(examples.map((eg) => examplePrompt.format(eg)));
        return stringExamples.map((eg) => this.getTextLength(eg));
    }
    /**
     * Selects examples until the total length of the selected examples
     * reaches the maxLength.
     * @param inputVariables The input variables for the examples.
     * @returns Promise that resolves with an array of selected examples.
     */
    async selectExamples(inputVariables) {
        const inputs = Object.values(inputVariables).join(" ");
        let remainingLength = this.maxLength - this.getTextLength(inputs);
        let i = 0;
        const examples = [];
        while (remainingLength > 0 && i < this.examples.length) {
            const newLength = remainingLength - this.exampleTextLengths[i];
            if (newLength < 0) {
                break;
            }
            else {
                examples.push(this.examples[i]);
                remainingLength = newLength;
            }
            i += 1;
        }
        return examples;
    }
    /**
     * Creates a new instance of LengthBasedExampleSelector and adds a list of
     * examples to it.
     * @param examples Array of examples to be added.
     * @param args Input parameters for the LengthBasedExampleSelector.
     * @returns Promise that resolves with a new instance of LengthBasedExampleSelector with the examples added.
     */
    static async fromExamples(examples, args) {
        const selector = new LengthBasedExampleSelector(args);
        await Promise.all(examples.map((eg) => selector.addExample(eg)));
        return selector;
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/example_selectors/semantic_similarity.js


function sortedValues(values) {
    return Object.keys(values)
        .sort()
        .map((key) => values[key]);
}
/**
 * Class that selects examples based on semantic similarity. It extends
 * the BaseExampleSelector class.
 * @example
 * ```typescript
 * const exampleSelector = await SemanticSimilarityExampleSelector.fromExamples(
 *   [
 *     { input: "happy", output: "sad" },
 *     { input: "tall", output: "short" },
 *     { input: "energetic", output: "lethargic" },
 *     { input: "sunny", output: "gloomy" },
 *     { input: "windy", output: "calm" },
 *   ],
 *   new OpenAIEmbeddings(),
 *   HNSWLib,
 *   { k: 1 },
 * );
 * const dynamicPrompt = new FewShotPromptTemplate({
 *   exampleSelector,
 *   examplePrompt: PromptTemplate.fromTemplate(
 *     "Input: {input}\nOutput: {output}",
 *   ),
 *   prefix: "Give the antonym of every input",
 *   suffix: "Input: {adjective}\nOutput:",
 *   inputVariables: ["adjective"],
 * });
 * console.log(await dynamicPrompt.format({ adjective: "rainy" }));
 * ```
 */
class SemanticSimilarityExampleSelector extends BaseExampleSelector {
    constructor(data) {
        super(data);
        Object.defineProperty(this, "vectorStoreRetriever", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "exampleKeys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "inputKeys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.exampleKeys = data.exampleKeys;
        this.inputKeys = data.inputKeys;
        if (data.vectorStore !== undefined) {
            this.vectorStoreRetriever = data.vectorStore.asRetriever({
                k: data.k ?? 4,
                filter: data.filter,
            });
        }
        else if (data.vectorStoreRetriever) {
            this.vectorStoreRetriever = data.vectorStoreRetriever;
        }
        else {
            throw new Error(`You must specify one of "vectorStore" and "vectorStoreRetriever".`);
        }
    }
    /**
     * Method that adds a new example to the vectorStore. The example is
     * converted to a string and added to the vectorStore as a document.
     * @param example The example to be added to the vectorStore.
     * @returns Promise that resolves when the example has been added to the vectorStore.
     */
    async addExample(example) {
        const inputKeys = this.inputKeys ?? Object.keys(example);
        const stringExample = sortedValues(inputKeys.reduce((acc, key) => ({ ...acc, [key]: example[key] }), {})).join(" ");
        await this.vectorStoreRetriever.addDocuments([
            new Document({
                pageContent: stringExample,
                metadata: example,
            }),
        ]);
    }
    /**
     * Method that selects which examples to use based on semantic similarity.
     * It performs a similarity search in the vectorStore using the input
     * variables and returns the examples with the highest similarity.
     * @param inputVariables The input variables used for the similarity search.
     * @returns Promise that resolves with an array of the selected examples.
     */
    async selectExamples(inputVariables) {
        const inputKeys = this.inputKeys ?? Object.keys(inputVariables);
        const query = sortedValues(inputKeys.reduce((acc, key) => ({ ...acc, [key]: inputVariables[key] }), {})).join(" ");
        const exampleDocs = await this.vectorStoreRetriever.invoke(query);
        const examples = exampleDocs.map((doc) => doc.metadata);
        if (this.exampleKeys) {
            // If example keys are provided, filter examples to those keys.
            return examples.map((example) => this.exampleKeys.reduce((acc, key) => ({ ...acc, [key]: example[key] }), {}));
        }
        return examples;
    }
    /**
     * Static method that creates a new instance of
     * SemanticSimilarityExampleSelector. It takes a list of examples, an
     * instance of Embeddings, a VectorStore class, and an options object as
     * parameters. It converts the examples to strings, creates a VectorStore
     * from the strings and the embeddings, and returns a new
     * SemanticSimilarityExampleSelector with the created VectorStore and the
     * options provided.
     * @param examples The list of examples to be used.
     * @param embeddings The instance of Embeddings to be used.
     * @param vectorStoreCls The VectorStore class to be used.
     * @param options The options object for the SemanticSimilarityExampleSelector.
     * @returns Promise that resolves with a new instance of SemanticSimilarityExampleSelector.
     */
    static async fromExamples(examples, embeddings, vectorStoreCls, options = {}) {
        const inputKeys = options.inputKeys ?? null;
        const stringExamples = examples.map((example) => sortedValues(inputKeys
            ? inputKeys.reduce((acc, key) => ({ ...acc, [key]: example[key] }), {})
            : example).join(" "));
        const vectorStore = await vectorStoreCls.fromTexts(stringExamples, examples, // metadatas
        embeddings, options);
        return new SemanticSimilarityExampleSelector({
            vectorStore,
            k: options.k ?? 4,
            exampleKeys: options.exampleKeys,
            inputKeys: options.inputKeys,
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/example_selectors/index.js





// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/prompt_values.js
var prompt_values = __webpack_require__(49484);
// EXTERNAL MODULE: ./node_modules/base64-js/index.js
var base64_js = __webpack_require__(38793);
;// CONCATENATED MODULE: ./node_modules/js-tiktoken/dist/chunk-3652LHBA.js


var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/utils.ts
function never(_) {
}
function bytePairMerge(piece, ranks) {
  let parts = Array.from(
    { length: piece.length },
    (_, i) => ({ start: i, end: i + 1 })
  );
  while (parts.length > 1) {
    let minRank = null;
    for (let i = 0; i < parts.length - 1; i++) {
      const slice = piece.slice(parts[i].start, parts[i + 1].end);
      const rank = ranks.get(slice.join(","));
      if (rank == null)
        continue;
      if (minRank == null || rank < minRank[0]) {
        minRank = [rank, i];
      }
    }
    if (minRank != null) {
      const i = minRank[1];
      parts[i] = { start: parts[i].start, end: parts[i + 1].end };
      parts.splice(i + 1, 1);
    } else {
      break;
    }
  }
  return parts;
}
function bytePairEncode(piece, ranks) {
  if (piece.length === 1)
    return [ranks.get(piece.join(","))];
  return bytePairMerge(piece, ranks).map((p) => ranks.get(piece.slice(p.start, p.end).join(","))).filter((x) => x != null);
}
function escapeRegex(str) {
  return str.replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
}
var _Tiktoken = class {
  /** @internal */
  specialTokens;
  /** @internal */
  inverseSpecialTokens;
  /** @internal */
  patStr;
  /** @internal */
  textEncoder = new TextEncoder();
  /** @internal */
  textDecoder = new TextDecoder("utf-8");
  /** @internal */
  rankMap = /* @__PURE__ */ new Map();
  /** @internal */
  textMap = /* @__PURE__ */ new Map();
  constructor(ranks, extendedSpecialTokens) {
    this.patStr = ranks.pat_str;
    const uncompressed = ranks.bpe_ranks.split("\n").filter(Boolean).reduce((memo, x) => {
      const [_, offsetStr, ...tokens] = x.split(" ");
      const offset = Number.parseInt(offsetStr, 10);
      tokens.forEach((token, i) => memo[token] = offset + i);
      return memo;
    }, {});
    for (const [token, rank] of Object.entries(uncompressed)) {
      const bytes = base64_js.toByteArray(token);
      this.rankMap.set(bytes.join(","), rank);
      this.textMap.set(rank, bytes);
    }
    this.specialTokens = { ...ranks.special_tokens, ...extendedSpecialTokens };
    this.inverseSpecialTokens = Object.entries(this.specialTokens).reduce((memo, [text, rank]) => {
      memo[rank] = this.textEncoder.encode(text);
      return memo;
    }, {});
  }
  encode(text, allowedSpecial = [], disallowedSpecial = "all") {
    const regexes = new RegExp(this.patStr, "ug");
    const specialRegex = _Tiktoken.specialTokenRegex(
      Object.keys(this.specialTokens)
    );
    const ret = [];
    const allowedSpecialSet = new Set(
      allowedSpecial === "all" ? Object.keys(this.specialTokens) : allowedSpecial
    );
    const disallowedSpecialSet = new Set(
      disallowedSpecial === "all" ? Object.keys(this.specialTokens).filter(
        (x) => !allowedSpecialSet.has(x)
      ) : disallowedSpecial
    );
    if (disallowedSpecialSet.size > 0) {
      const disallowedSpecialRegex = _Tiktoken.specialTokenRegex([
        ...disallowedSpecialSet
      ]);
      const specialMatch = text.match(disallowedSpecialRegex);
      if (specialMatch != null) {
        throw new Error(
          `The text contains a special token that is not allowed: ${specialMatch[0]}`
        );
      }
    }
    let start = 0;
    while (true) {
      let nextSpecial = null;
      let startFind = start;
      while (true) {
        specialRegex.lastIndex = startFind;
        nextSpecial = specialRegex.exec(text);
        if (nextSpecial == null || allowedSpecialSet.has(nextSpecial[0]))
          break;
        startFind = nextSpecial.index + 1;
      }
      const end = nextSpecial?.index ?? text.length;
      for (const match of text.substring(start, end).matchAll(regexes)) {
        const piece = this.textEncoder.encode(match[0]);
        const token2 = this.rankMap.get(piece.join(","));
        if (token2 != null) {
          ret.push(token2);
          continue;
        }
        ret.push(...bytePairEncode(piece, this.rankMap));
      }
      if (nextSpecial == null)
        break;
      let token = this.specialTokens[nextSpecial[0]];
      ret.push(token);
      start = nextSpecial.index + nextSpecial[0].length;
    }
    return ret;
  }
  decode(tokens) {
    const res = [];
    let length = 0;
    for (let i2 = 0; i2 < tokens.length; ++i2) {
      const token = tokens[i2];
      const bytes = this.textMap.get(token) ?? this.inverseSpecialTokens[token];
      if (bytes != null) {
        res.push(bytes);
        length += bytes.length;
      }
    }
    const mergedArray = new Uint8Array(length);
    let i = 0;
    for (const bytes of res) {
      mergedArray.set(bytes, i);
      i += bytes.length;
    }
    return this.textDecoder.decode(mergedArray);
  }
};
var Tiktoken = _Tiktoken;
__publicField(Tiktoken, "specialTokenRegex", (tokens) => {
  return new RegExp(tokens.map((i) => escapeRegex(i)).join("|"), "g");
});
function getEncodingNameForModel(model) {
  switch (model) {
    case "gpt2": {
      return "gpt2";
    }
    case "code-cushman-001":
    case "code-cushman-002":
    case "code-davinci-001":
    case "code-davinci-002":
    case "cushman-codex":
    case "davinci-codex":
    case "davinci-002":
    case "text-davinci-002":
    case "text-davinci-003": {
      return "p50k_base";
    }
    case "code-davinci-edit-001":
    case "text-davinci-edit-001": {
      return "p50k_edit";
    }
    case "ada":
    case "babbage":
    case "babbage-002":
    case "code-search-ada-code-001":
    case "code-search-babbage-code-001":
    case "curie":
    case "davinci":
    case "text-ada-001":
    case "text-babbage-001":
    case "text-curie-001":
    case "text-davinci-001":
    case "text-search-ada-doc-001":
    case "text-search-babbage-doc-001":
    case "text-search-curie-doc-001":
    case "text-search-davinci-doc-001":
    case "text-similarity-ada-001":
    case "text-similarity-babbage-001":
    case "text-similarity-curie-001":
    case "text-similarity-davinci-001": {
      return "r50k_base";
    }
    case "gpt-3.5-turbo-instruct-0914":
    case "gpt-3.5-turbo-instruct":
    case "gpt-3.5-turbo-16k-0613":
    case "gpt-3.5-turbo-16k":
    case "gpt-3.5-turbo-0613":
    case "gpt-3.5-turbo-0301":
    case "gpt-3.5-turbo":
    case "gpt-4-32k-0613":
    case "gpt-4-32k-0314":
    case "gpt-4-32k":
    case "gpt-4-0613":
    case "gpt-4-0314":
    case "gpt-4":
    case "gpt-3.5-turbo-1106":
    case "gpt-35-turbo":
    case "gpt-4-1106-preview":
    case "gpt-4-vision-preview":
    case "gpt-3.5-turbo-0125":
    case "gpt-4-turbo":
    case "gpt-4-turbo-2024-04-09":
    case "gpt-4-turbo-preview":
    case "gpt-4-0125-preview":
    case "text-embedding-ada-002":
    case "text-embedding-3-small":
    case "text-embedding-3-large": {
      return "cl100k_base";
    }
    case "gpt-4o":
    case "gpt-4o-2024-05-13":
    case "gpt-4o-2024-08-06":
    case "gpt-4o-mini-2024-07-18":
    case "gpt-4o-mini":
    case "o1-2024-12-17":
    case "o1-mini":
    case "o1-preview":
    case "o1-preview-2024-09-12":
    case "o1-mini-2024-09-12":
    case "chatgpt-4o-latest":
    case "gpt-4o-realtime":
    case "gpt-4o-realtime-preview-2024-10-01": {
      return "o200k_base";
    }
    default:
      throw new Error("Unknown model");
  }
}



;// CONCATENATED MODULE: ./node_modules/js-tiktoken/dist/lite.js


;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/tiktoken.js


const cache = {};
const caller = /* #__PURE__ */ new async_caller.AsyncCaller({});
async function getEncoding(encoding) {
    if (!(encoding in cache)) {
        cache[encoding] = caller
            .fetch(`https://tiktoken.pages.dev/js/${encoding}.json`)
            .then((res) => res.json())
            .then((data) => new Tiktoken(data))
            .catch((e) => {
            delete cache[encoding];
            throw e;
        });
    }
    return await cache[encoding];
}
async function encodingForModel(model) {
    return getEncoding(getEncodingNameForModel(model));
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/language_models/base.js






// https://www.npmjs.com/package/js-tiktoken
const getModelNameForTiktoken = (modelName) => {
    if (modelName.startsWith("gpt-3.5-turbo-16k")) {
        return "gpt-3.5-turbo-16k";
    }
    if (modelName.startsWith("gpt-3.5-turbo-")) {
        return "gpt-3.5-turbo";
    }
    if (modelName.startsWith("gpt-4-32k")) {
        return "gpt-4-32k";
    }
    if (modelName.startsWith("gpt-4-")) {
        return "gpt-4";
    }
    if (modelName.startsWith("gpt-4o")) {
        return "gpt-4o";
    }
    return modelName;
};
const getEmbeddingContextSize = (modelName) => {
    switch (modelName) {
        case "text-embedding-ada-002":
            return 8191;
        default:
            return 2046;
    }
};
const getModelContextSize = (modelName) => {
    switch (getModelNameForTiktoken(modelName)) {
        case "gpt-3.5-turbo-16k":
            return 16384;
        case "gpt-3.5-turbo":
            return 4096;
        case "gpt-4-32k":
            return 32768;
        case "gpt-4":
            return 8192;
        case "text-davinci-003":
            return 4097;
        case "text-curie-001":
            return 2048;
        case "text-babbage-001":
            return 2048;
        case "text-ada-001":
            return 2048;
        case "code-davinci-002":
            return 8000;
        case "code-cushman-001":
            return 2048;
        default:
            return 4097;
    }
};
/**
 * Whether or not the input matches the OpenAI tool definition.
 * @param {unknown} tool The input to check.
 * @returns {boolean} Whether the input is an OpenAI tool definition.
 */
function isOpenAITool(tool) {
    if (typeof tool !== "object" || !tool)
        return false;
    if ("type" in tool &&
        tool.type === "function" &&
        "function" in tool &&
        typeof tool.function === "object" &&
        tool.function &&
        "name" in tool.function &&
        "parameters" in tool.function) {
        return true;
    }
    return false;
}
const calculateMaxTokens = async ({ prompt, modelName, }) => {
    let numTokens;
    try {
        numTokens = (await encodingForModel(getModelNameForTiktoken(modelName))).encode(prompt).length;
    }
    catch (error) {
        console.warn("Failed to calculate number of tokens, falling back to approximate count");
        // fallback to approximate calculation if tiktoken is not available
        // each token is ~4 characters: https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them#
        numTokens = Math.ceil(prompt.length / 4);
    }
    const maxTokens = getModelContextSize(modelName);
    return maxTokens - numTokens;
};
const getVerbosity = () => false;
/**
 * Base class for language models, chains, tools.
 */
class BaseLangChain extends runnables_base/* Runnable */.YN {
    get lc_attributes() {
        return {
            callbacks: undefined,
            verbose: undefined,
        };
    }
    constructor(params) {
        super(params);
        /**
         * Whether to print out response text.
         */
        Object.defineProperty(this, "verbose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "callbacks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metadata", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.verbose = params.verbose ?? getVerbosity();
        this.callbacks = params.callbacks;
        this.tags = params.tags ?? [];
        this.metadata = params.metadata ?? {};
    }
}
/**
 * Base class for language models.
 */
class BaseLanguageModel extends BaseLangChain {
    /**
     * Keys that the language model accepts as call options.
     */
    get callKeys() {
        return ["stop", "timeout", "signal", "tags", "metadata", "callbacks"];
    }
    constructor({ callbacks, callbackManager, ...params }) {
        const { cache, ...rest } = params;
        super({
            callbacks: callbacks ?? callbackManager,
            ...rest,
        });
        /**
         * The async caller should be used by subclasses to make any async calls,
         * which will thus benefit from the concurrency and retry logic.
         */
        Object.defineProperty(this, "caller", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cache", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_encoding", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (typeof cache === "object") {
            this.cache = cache;
        }
        else if (cache) {
            this.cache = InMemoryCache.global();
        }
        else {
            this.cache = undefined;
        }
        this.caller = new async_caller.AsyncCaller(params ?? {});
    }
    async getNumTokens(content) {
        // TODO: Figure out correct value.
        if (typeof content !== "string") {
            return 0;
        }
        // fallback to approximate calculation if tiktoken is not available
        let numTokens = Math.ceil(content.length / 4);
        if (!this._encoding) {
            try {
                this._encoding = await encodingForModel("modelName" in this
                    ? getModelNameForTiktoken(this.modelName)
                    : "gpt2");
            }
            catch (error) {
                console.warn("Failed to calculate number of tokens, falling back to approximate count", error);
            }
        }
        if (this._encoding) {
            try {
                numTokens = this._encoding.encode(content).length;
            }
            catch (error) {
                console.warn("Failed to calculate number of tokens, falling back to approximate count", error);
            }
        }
        return numTokens;
    }
    static _convertInputToPromptValue(input) {
        if (typeof input === "string") {
            return new prompt_values.StringPromptValue(input);
        }
        else if (Array.isArray(input)) {
            return new prompt_values.ChatPromptValue(input.map(utils/* coerceMessageLikeToMessage */.K0));
        }
        else {
            return input;
        }
    }
    /**
     * Get the identifying parameters of the LLM.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _identifyingParams() {
        return {};
    }
    /**
     * Create a unique cache key for a specific call to a specific language model.
     * @param callOptions Call options for the model
     * @returns A unique cache key.
     */
    _getSerializedCacheKeyParametersForCall(
    // TODO: Fix when we remove the RunnableLambda backwards compatibility shim.
    { config, ...callOptions }) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const params = {
            ...this._identifyingParams(),
            ...callOptions,
            _type: this._llmType(),
            _model: this._modelType(),
        };
        const filteredEntries = Object.entries(params).filter(([_, value]) => value !== undefined);
        const serializedEntries = filteredEntries
            .map(([key, value]) => `${key}:${JSON.stringify(value)}`)
            .sort()
            .join(",");
        return serializedEntries;
    }
    /**
     * @deprecated
     * Return a json-like object representing this LLM.
     */
    serialize() {
        return {
            ...this._identifyingParams(),
            _type: this._llmType(),
            _model: this._modelType(),
        };
    }
    /**
     * @deprecated
     * Load an LLM from a json-like object describing it.
     */
    static async deserialize(_data) {
        throw new Error("Use .toJSON() instead");
    }
}

// EXTERNAL MODULE: ./node_modules/zod-to-json-schema/dist/esm/index.js + 35 modules
var esm = __webpack_require__(79147);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/outputs.js
var outputs = __webpack_require__(58243);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/utils/stream.js
var utils_stream = __webpack_require__(27827);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/runnables/config.js
var runnables_config = __webpack_require__(6464);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/runnables/passthrough.js



/**
 * A runnable to passthrough inputs unchanged or with additional keys.
 *
 * This runnable behaves almost like the identity function, except that it
 * can be configured to add additional keys to the output, if the input is
 * an object.
 *
 * The example below demonstrates how to use `RunnablePassthrough to
 * passthrough the input from the `.invoke()`
 *
 * @example
 * ```typescript
 * const chain = RunnableSequence.from([
 *   {
 *     question: new RunnablePassthrough(),
 *     context: async () => loadContextFromStore(),
 *   },
 *   prompt,
 *   llm,
 *   outputParser,
 * ]);
 * const response = await chain.invoke(
 *   "I can pass a single string instead of an object since I'm using `RunnablePassthrough`."
 * );
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class RunnablePassthrough extends runnables_base/* Runnable */.YN {
    static lc_name() {
        return "RunnablePassthrough";
    }
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "runnables"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "func", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (fields) {
            this.func = fields.func;
        }
    }
    async invoke(input, options) {
        const config = (0,runnables_config/* ensureConfig */.ZI)(options);
        if (this.func) {
            await this.func(input, config);
        }
        return this._callWithConfig((input) => Promise.resolve(input), input, config);
    }
    async *transform(generator, options) {
        const config = (0,runnables_config/* ensureConfig */.ZI)(options);
        let finalOutput;
        let finalOutputSupported = true;
        for await (const chunk of this._transformStreamWithConfig(generator, (input) => input, config)) {
            yield chunk;
            if (finalOutputSupported) {
                if (finalOutput === undefined) {
                    finalOutput = chunk;
                }
                else {
                    try {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        finalOutput = (0,utils_stream.concat)(finalOutput, chunk);
                    }
                    catch {
                        finalOutput = undefined;
                        finalOutputSupported = false;
                    }
                }
            }
        }
        if (this.func && finalOutput !== undefined) {
            await this.func(finalOutput, config);
        }
    }
    /**
     * A runnable that assigns key-value pairs to the input.
     *
     * The example below shows how you could use it with an inline function.
     *
     * @example
     * ```typescript
     * const prompt =
     *   PromptTemplate.fromTemplate(`Write a SQL query to answer the question using the following schema: {schema}
     * Question: {question}
     * SQL Query:`);
     *
     * // The `RunnablePassthrough.assign()` is used here to passthrough the input from the `.invoke()`
     * // call (in this example it's the question), along with any inputs passed to the `.assign()` method.
     * // In this case, we're passing the schema.
     * const sqlQueryGeneratorChain = RunnableSequence.from([
     *   RunnablePassthrough.assign({
     *     schema: async () => db.getTableInfo(),
     *   }),
     *   prompt,
     *   new ChatOpenAI({}).bind({ stop: ["\nSQLResult:"] }),
     *   new StringOutputParser(),
     * ]);
     * const result = await sqlQueryGeneratorChain.invoke({
     *   question: "How many employees are there?",
     * });
     * ```
     */
    static assign(mapping) {
        return new runnables_base/* RunnableAssign */.B2(new runnables_base/* RunnableMap */.ck({ steps: mapping }));
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/types/is_zod_schema.js
/**
 * Given either a Zod schema, or plain object, determine if the input is a Zod schema.
 *
 * @param {z.ZodType<RunOutput> | Record<string, any>} input
 * @returns {boolean} Whether or not the provided input is a Zod schema.
 */
function isZodSchema(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
input) {
    // Check for a characteristic method of Zod schemas
    return typeof input?.parse === "function";
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/language_models/chat_models.js










/**
 * Creates a transform stream for encoding chat message chunks.
 * @deprecated Use {@link BytesOutputParser} instead
 * @returns A TransformStream instance that encodes chat message chunks.
 */
function createChatMessageChunkEncoderStream() {
    const textEncoder = new TextEncoder();
    return new TransformStream({
        transform(chunk, controller) {
            controller.enqueue(textEncoder.encode(typeof chunk.content === "string"
                ? chunk.content
                : JSON.stringify(chunk.content)));
        },
    });
}
/**
 * Base class for chat models. It extends the BaseLanguageModel class and
 * provides methods for generating chat based on input messages.
 */
class BaseChatModel extends BaseLanguageModel {
    constructor(fields) {
        super(fields);
        // Only ever instantiated in main LangChain
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain", "chat_models", this._llmType()]
        });
        Object.defineProperty(this, "disableStreaming", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
    }
    _separateRunnableConfigFromCallOptionsCompat(options) {
        // For backwards compat, keep `signal` in both runnableConfig and callOptions
        const [runnableConfig, callOptions] = super._separateRunnableConfigFromCallOptions(options);
        callOptions.signal = runnableConfig.signal;
        return [runnableConfig, callOptions];
    }
    /**
     * Invokes the chat model with a single input.
     * @param input The input for the language model.
     * @param options The call options.
     * @returns A Promise that resolves to a BaseMessageChunk.
     */
    async invoke(input, options) {
        const promptValue = BaseChatModel._convertInputToPromptValue(input);
        const result = await this.generatePrompt([promptValue], options, options?.callbacks);
        const chatGeneration = result.generations[0][0];
        // TODO: Remove cast after figuring out inheritance
        return chatGeneration.message;
    }
    // eslint-disable-next-line require-yield
    async *_streamResponseChunks(_messages, _options, _runManager) {
        throw new Error("Not implemented.");
    }
    async *_streamIterator(input, options) {
        // Subclass check required to avoid double callbacks with default implementation
        if (this._streamResponseChunks ===
            BaseChatModel.prototype._streamResponseChunks ||
            this.disableStreaming) {
            yield this.invoke(input, options);
        }
        else {
            const prompt = BaseChatModel._convertInputToPromptValue(input);
            const messages = prompt.toChatMessages();
            const [runnableConfig, callOptions] = this._separateRunnableConfigFromCallOptionsCompat(options);
            const inheritableMetadata = {
                ...runnableConfig.metadata,
                ...this.getLsParams(callOptions),
            };
            const callbackManager_ = await manager.CallbackManager.configure(runnableConfig.callbacks, this.callbacks, runnableConfig.tags, this.tags, inheritableMetadata, this.metadata, { verbose: this.verbose });
            const extra = {
                options: callOptions,
                invocation_params: this?.invocationParams(callOptions),
                batch_size: 1,
            };
            const runManagers = await callbackManager_?.handleChatModelStart(this.toJSON(), [messages], runnableConfig.runId, undefined, extra, undefined, undefined, runnableConfig.runName);
            let generationChunk;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let llmOutput;
            try {
                for await (const chunk of this._streamResponseChunks(messages, callOptions, runManagers?.[0])) {
                    if (chunk.message.id == null) {
                        const runId = runManagers?.at(0)?.runId;
                        if (runId != null)
                            chunk.message._updateId(`run-${runId}`);
                    }
                    chunk.message.response_metadata = {
                        ...chunk.generationInfo,
                        ...chunk.message.response_metadata,
                    };
                    yield chunk.message;
                    if (!generationChunk) {
                        generationChunk = chunk;
                    }
                    else {
                        generationChunk = generationChunk.concat(chunk);
                    }
                    if ((0,dist_messages.isAIMessageChunk)(chunk.message) &&
                        chunk.message.usage_metadata !== undefined) {
                        llmOutput = {
                            tokenUsage: {
                                promptTokens: chunk.message.usage_metadata.input_tokens,
                                completionTokens: chunk.message.usage_metadata.output_tokens,
                                totalTokens: chunk.message.usage_metadata.total_tokens,
                            },
                        };
                    }
                }
            }
            catch (err) {
                await Promise.all((runManagers ?? []).map((runManager) => runManager?.handleLLMError(err)));
                throw err;
            }
            await Promise.all((runManagers ?? []).map((runManager) => runManager?.handleLLMEnd({
                // TODO: Remove cast after figuring out inheritance
                generations: [[generationChunk]],
                llmOutput,
            })));
        }
    }
    getLsParams(options) {
        const providerName = this.getName().startsWith("Chat")
            ? this.getName().replace("Chat", "")
            : this.getName();
        return {
            ls_model_type: "chat",
            ls_stop: options.stop,
            ls_provider: providerName,
        };
    }
    /** @ignore */
    async _generateUncached(messages, parsedOptions, handledOptions, startedRunManagers) {
        const baseMessages = messages.map((messageList) => messageList.map(dist_messages.coerceMessageLikeToMessage));
        let runManagers;
        if (startedRunManagers !== undefined &&
            startedRunManagers.length === baseMessages.length) {
            runManagers = startedRunManagers;
        }
        else {
            const inheritableMetadata = {
                ...handledOptions.metadata,
                ...this.getLsParams(parsedOptions),
            };
            // create callback manager and start run
            const callbackManager_ = await manager.CallbackManager.configure(handledOptions.callbacks, this.callbacks, handledOptions.tags, this.tags, inheritableMetadata, this.metadata, { verbose: this.verbose });
            const extra = {
                options: parsedOptions,
                invocation_params: this?.invocationParams(parsedOptions),
                batch_size: 1,
            };
            runManagers = await callbackManager_?.handleChatModelStart(this.toJSON(), baseMessages, handledOptions.runId, undefined, extra, undefined, undefined, handledOptions.runName);
        }
        const generations = [];
        const llmOutputs = [];
        // Even if stream is not explicitly called, check if model is implicitly
        // called from streamEvents() or streamLog() to get all streamed events.
        // Bail out if _streamResponseChunks not overridden
        const hasStreamingHandler = !!runManagers?.[0].handlers.find(base.callbackHandlerPrefersStreaming);
        if (hasStreamingHandler &&
            !this.disableStreaming &&
            baseMessages.length === 1 &&
            this._streamResponseChunks !==
                BaseChatModel.prototype._streamResponseChunks) {
            try {
                const stream = await this._streamResponseChunks(baseMessages[0], parsedOptions, runManagers?.[0]);
                let aggregated;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                let llmOutput;
                for await (const chunk of stream) {
                    if (chunk.message.id == null) {
                        const runId = runManagers?.at(0)?.runId;
                        if (runId != null)
                            chunk.message._updateId(`run-${runId}`);
                    }
                    if (aggregated === undefined) {
                        aggregated = chunk;
                    }
                    else {
                        aggregated = (0,utils_stream.concat)(aggregated, chunk);
                    }
                    if ((0,dist_messages.isAIMessageChunk)(chunk.message) &&
                        chunk.message.usage_metadata !== undefined) {
                        llmOutput = {
                            tokenUsage: {
                                promptTokens: chunk.message.usage_metadata.input_tokens,
                                completionTokens: chunk.message.usage_metadata.output_tokens,
                                totalTokens: chunk.message.usage_metadata.total_tokens,
                            },
                        };
                    }
                }
                if (aggregated === undefined) {
                    throw new Error("Received empty response from chat model call.");
                }
                generations.push([aggregated]);
                await runManagers?.[0].handleLLMEnd({
                    generations,
                    llmOutput,
                });
            }
            catch (e) {
                await runManagers?.[0].handleLLMError(e);
                throw e;
            }
        }
        else {
            // generate results
            const results = await Promise.allSettled(baseMessages.map((messageList, i) => this._generate(messageList, { ...parsedOptions, promptIndex: i }, runManagers?.[i])));
            // handle results
            await Promise.all(results.map(async (pResult, i) => {
                if (pResult.status === "fulfilled") {
                    const result = pResult.value;
                    for (const generation of result.generations) {
                        if (generation.message.id == null) {
                            const runId = runManagers?.at(0)?.runId;
                            if (runId != null)
                                generation.message._updateId(`run-${runId}`);
                        }
                        generation.message.response_metadata = {
                            ...generation.generationInfo,
                            ...generation.message.response_metadata,
                        };
                    }
                    if (result.generations.length === 1) {
                        result.generations[0].message.response_metadata = {
                            ...result.llmOutput,
                            ...result.generations[0].message.response_metadata,
                        };
                    }
                    generations[i] = result.generations;
                    llmOutputs[i] = result.llmOutput;
                    return runManagers?.[i]?.handleLLMEnd({
                        generations: [result.generations],
                        llmOutput: result.llmOutput,
                    });
                }
                else {
                    // status === "rejected"
                    await runManagers?.[i]?.handleLLMError(pResult.reason);
                    return Promise.reject(pResult.reason);
                }
            }));
        }
        // create combined output
        const output = {
            generations,
            llmOutput: llmOutputs.length
                ? this._combineLLMOutput?.(...llmOutputs)
                : undefined,
        };
        Object.defineProperty(output, outputs.RUN_KEY, {
            value: runManagers
                ? { runIds: runManagers?.map((manager) => manager.runId) }
                : undefined,
            configurable: true,
        });
        return output;
    }
    async _generateCached({ messages, cache, llmStringKey, parsedOptions, handledOptions, }) {
        const baseMessages = messages.map((messageList) => messageList.map(dist_messages.coerceMessageLikeToMessage));
        const inheritableMetadata = {
            ...handledOptions.metadata,
            ...this.getLsParams(parsedOptions),
        };
        // create callback manager and start run
        const callbackManager_ = await manager.CallbackManager.configure(handledOptions.callbacks, this.callbacks, handledOptions.tags, this.tags, inheritableMetadata, this.metadata, { verbose: this.verbose });
        const extra = {
            options: parsedOptions,
            invocation_params: this?.invocationParams(parsedOptions),
            batch_size: 1,
        };
        const runManagers = await callbackManager_?.handleChatModelStart(this.toJSON(), baseMessages, handledOptions.runId, undefined, extra, undefined, undefined, handledOptions.runName);
        // generate results
        const missingPromptIndices = [];
        const results = await Promise.allSettled(baseMessages.map(async (baseMessage, index) => {
            // Join all content into one string for the prompt index
            const prompt = BaseChatModel._convertInputToPromptValue(baseMessage).toString();
            const result = await cache.lookup(prompt, llmStringKey);
            if (result == null) {
                missingPromptIndices.push(index);
            }
            return result;
        }));
        // Map run managers to the results before filtering out null results
        // Null results are just absent from the cache.
        const cachedResults = results
            .map((result, index) => ({ result, runManager: runManagers?.[index] }))
            .filter(({ result }) => (result.status === "fulfilled" && result.value != null) ||
            result.status === "rejected");
        // Handle results and call run managers
        const generations = [];
        await Promise.all(cachedResults.map(async ({ result: promiseResult, runManager }, i) => {
            if (promiseResult.status === "fulfilled") {
                const result = promiseResult.value;
                generations[i] = result.map((result) => {
                    if ("message" in result &&
                        (0,dist_messages.isBaseMessage)(result.message) &&
                        (0,dist_messages.isAIMessage)(result.message)) {
                        // eslint-disable-next-line no-param-reassign
                        result.message.usage_metadata = {
                            input_tokens: 0,
                            output_tokens: 0,
                            total_tokens: 0,
                        };
                    }
                    // eslint-disable-next-line no-param-reassign
                    result.generationInfo = {
                        ...result.generationInfo,
                        tokenUsage: {},
                    };
                    return result;
                });
                if (result.length) {
                    await runManager?.handleLLMNewToken(result[0].text);
                }
                return runManager?.handleLLMEnd({
                    generations: [result],
                }, undefined, undefined, undefined, {
                    cached: true,
                });
            }
            else {
                // status === "rejected"
                await runManager?.handleLLMError(promiseResult.reason, undefined, undefined, undefined, {
                    cached: true,
                });
                return Promise.reject(promiseResult.reason);
            }
        }));
        const output = {
            generations,
            missingPromptIndices,
            startedRunManagers: runManagers,
        };
        // This defines RUN_KEY as a non-enumerable property on the output object
        // so that it is not serialized when the output is stringified, and so that
        // it isnt included when listing the keys of the output object.
        Object.defineProperty(output, outputs.RUN_KEY, {
            value: runManagers
                ? { runIds: runManagers?.map((manager) => manager.runId) }
                : undefined,
            configurable: true,
        });
        return output;
    }
    /**
     * Generates chat based on the input messages.
     * @param messages An array of arrays of BaseMessage instances.
     * @param options The call options or an array of stop sequences.
     * @param callbacks The callbacks for the language model.
     * @returns A Promise that resolves to an LLMResult.
     */
    async generate(messages, options, callbacks) {
        // parse call options
        let parsedOptions;
        if (Array.isArray(options)) {
            parsedOptions = { stop: options };
        }
        else {
            parsedOptions = options;
        }
        const baseMessages = messages.map((messageList) => messageList.map(dist_messages.coerceMessageLikeToMessage));
        const [runnableConfig, callOptions] = this._separateRunnableConfigFromCallOptionsCompat(parsedOptions);
        runnableConfig.callbacks = runnableConfig.callbacks ?? callbacks;
        if (!this.cache) {
            return this._generateUncached(baseMessages, callOptions, runnableConfig);
        }
        const { cache } = this;
        const llmStringKey = this._getSerializedCacheKeyParametersForCall(callOptions);
        const { generations, missingPromptIndices, startedRunManagers } = await this._generateCached({
            messages: baseMessages,
            cache,
            llmStringKey,
            parsedOptions: callOptions,
            handledOptions: runnableConfig,
        });
        let llmOutput = {};
        if (missingPromptIndices.length > 0) {
            const results = await this._generateUncached(missingPromptIndices.map((i) => baseMessages[i]), callOptions, runnableConfig, startedRunManagers !== undefined
                ? missingPromptIndices.map((i) => startedRunManagers?.[i])
                : undefined);
            await Promise.all(results.generations.map(async (generation, index) => {
                const promptIndex = missingPromptIndices[index];
                generations[promptIndex] = generation;
                // Join all content into one string for the prompt index
                const prompt = BaseChatModel._convertInputToPromptValue(baseMessages[promptIndex]).toString();
                return cache.update(prompt, llmStringKey, generation);
            }));
            llmOutput = results.llmOutput ?? {};
        }
        return { generations, llmOutput };
    }
    /**
     * Get the parameters used to invoke the model
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    invocationParams(_options) {
        return {};
    }
    _modelType() {
        return "base_chat_model";
    }
    /**
     * @deprecated
     * Return a json-like object representing this LLM.
     */
    serialize() {
        return {
            ...this.invocationParams(),
            _type: this._llmType(),
            _model: this._modelType(),
        };
    }
    /**
     * Generates a prompt based on the input prompt values.
     * @param promptValues An array of BasePromptValue instances.
     * @param options The call options or an array of stop sequences.
     * @param callbacks The callbacks for the language model.
     * @returns A Promise that resolves to an LLMResult.
     */
    async generatePrompt(promptValues, options, callbacks) {
        const promptMessages = promptValues.map((promptValue) => promptValue.toChatMessages());
        return this.generate(promptMessages, options, callbacks);
    }
    /**
     * @deprecated Use .invoke() instead. Will be removed in 0.2.0.
     *
     * Makes a single call to the chat model.
     * @param messages An array of BaseMessage instances.
     * @param options The call options or an array of stop sequences.
     * @param callbacks The callbacks for the language model.
     * @returns A Promise that resolves to a BaseMessage.
     */
    async call(messages, options, callbacks) {
        const result = await this.generate([messages.map(dist_messages.coerceMessageLikeToMessage)], options, callbacks);
        const generations = result.generations;
        return generations[0][0].message;
    }
    /**
     * @deprecated Use .invoke() instead. Will be removed in 0.2.0.
     *
     * Makes a single call to the chat model with a prompt value.
     * @param promptValue The value of the prompt.
     * @param options The call options or an array of stop sequences.
     * @param callbacks The callbacks for the language model.
     * @returns A Promise that resolves to a BaseMessage.
     */
    async callPrompt(promptValue, options, callbacks) {
        const promptMessages = promptValue.toChatMessages();
        return this.call(promptMessages, options, callbacks);
    }
    /**
     * @deprecated Use .invoke() instead. Will be removed in 0.2.0.
     *
     * Predicts the next message based on the input messages.
     * @param messages An array of BaseMessage instances.
     * @param options The call options or an array of stop sequences.
     * @param callbacks The callbacks for the language model.
     * @returns A Promise that resolves to a BaseMessage.
     */
    async predictMessages(messages, options, callbacks) {
        return this.call(messages, options, callbacks);
    }
    /**
     * @deprecated Use .invoke() instead. Will be removed in 0.2.0.
     *
     * Predicts the next message based on a text input.
     * @param text The text input.
     * @param options The call options or an array of stop sequences.
     * @param callbacks The callbacks for the language model.
     * @returns A Promise that resolves to a string.
     */
    async predict(text, options, callbacks) {
        const message = new dist_messages.HumanMessage(text);
        const result = await this.call([message], options, callbacks);
        if (typeof result.content !== "string") {
            throw new Error("Cannot use predict when output is not a string.");
        }
        return result.content;
    }
    withStructuredOutput(outputSchema, config) {
        if (typeof this.bindTools !== "function") {
            throw new Error(`Chat model must implement ".bindTools()" to use withStructuredOutput.`);
        }
        if (config?.strict) {
            throw new Error(`"strict" mode is not supported for this model by default.`);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const schema = outputSchema;
        const name = config?.name;
        const description = schema.description ?? "A function available to call.";
        const method = config?.method;
        const includeRaw = config?.includeRaw;
        if (method === "jsonMode") {
            throw new Error(`Base withStructuredOutput implementation only supports "functionCalling" as a method.`);
        }
        let functionName = name ?? "extract";
        let tools;
        if (isZodSchema(schema)) {
            tools = [
                {
                    type: "function",
                    function: {
                        name: functionName,
                        description,
                        parameters: (0,esm/* zodToJsonSchema */.Ik)(schema),
                    },
                },
            ];
        }
        else {
            if ("name" in schema) {
                functionName = schema.name;
            }
            tools = [
                {
                    type: "function",
                    function: {
                        name: functionName,
                        description,
                        parameters: schema,
                    },
                },
            ];
        }
        const llm = this.bindTools(tools);
        const outputParser = runnables_base/* RunnableLambda */.jY.from((input) => {
            if (!input.tool_calls || input.tool_calls.length === 0) {
                throw new Error("No tool calls found in the response.");
            }
            const toolCall = input.tool_calls.find((tc) => tc.name === functionName);
            if (!toolCall) {
                throw new Error(`No tool call found with name ${functionName}.`);
            }
            return toolCall.args;
        });
        if (!includeRaw) {
            return llm.pipe(outputParser).withConfig({
                runName: "StructuredOutput",
            });
        }
        const parserAssign = RunnablePassthrough.assign({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            parsed: (input, config) => outputParser.invoke(input.raw, config),
        });
        const parserNone = RunnablePassthrough.assign({
            parsed: () => null,
        });
        const parsedWithFallback = parserAssign.withFallbacks({
            fallbacks: [parserNone],
        });
        return runnables_base/* RunnableSequence */.zZ.from([
            {
                raw: llm,
            },
            parsedWithFallback,
        ]).withConfig({
            runName: "StructuredOutputRunnable",
        });
    }
}
/**
 * An abstract class that extends BaseChatModel and provides a simple
 * implementation of _generate.
 */
class SimpleChatModel extends BaseChatModel {
    async _generate(messages, options, runManager) {
        const text = await this._call(messages, options, runManager);
        const message = new dist_messages.AIMessage(text);
        if (typeof message.content !== "string") {
            throw new Error("Cannot generate with a simple chat model when output is not a string.");
        }
        return {
            generations: [
                {
                    text: message.content,
                    message,
                },
            ],
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/language_models/llms.js






/**
 * LLM Wrapper. Takes in a prompt (or prompts) and returns a string.
 */
class BaseLLM extends BaseLanguageModel {
    constructor({ concurrency, ...rest }) {
        super(concurrency ? { maxConcurrency: concurrency, ...rest } : rest);
        // Only ever instantiated in main LangChain
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain", "llms", this._llmType()]
        });
    }
    /**
     * This method takes an input and options, and returns a string. It
     * converts the input to a prompt value and generates a result based on
     * the prompt.
     * @param input Input for the LLM.
     * @param options Options for the LLM call.
     * @returns A string result based on the prompt.
     */
    async invoke(input, options) {
        const promptValue = BaseLLM._convertInputToPromptValue(input);
        const result = await this.generatePrompt([promptValue], options, options?.callbacks);
        return result.generations[0][0].text;
    }
    // eslint-disable-next-line require-yield
    async *_streamResponseChunks(_input, _options, _runManager) {
        throw new Error("Not implemented.");
    }
    _separateRunnableConfigFromCallOptionsCompat(options) {
        // For backwards compat, keep `signal` in both runnableConfig and callOptions
        const [runnableConfig, callOptions] = super._separateRunnableConfigFromCallOptions(options);
        callOptions.signal = runnableConfig.signal;
        return [runnableConfig, callOptions];
    }
    async *_streamIterator(input, options) {
        // Subclass check required to avoid double callbacks with default implementation
        if (this._streamResponseChunks === BaseLLM.prototype._streamResponseChunks) {
            yield this.invoke(input, options);
        }
        else {
            const prompt = BaseLLM._convertInputToPromptValue(input);
            const [runnableConfig, callOptions] = this._separateRunnableConfigFromCallOptionsCompat(options);
            const callbackManager_ = await manager.CallbackManager.configure(runnableConfig.callbacks, this.callbacks, runnableConfig.tags, this.tags, runnableConfig.metadata, this.metadata, { verbose: this.verbose });
            const extra = {
                options: callOptions,
                invocation_params: this?.invocationParams(callOptions),
                batch_size: 1,
            };
            const runManagers = await callbackManager_?.handleLLMStart(this.toJSON(), [prompt.toString()], runnableConfig.runId, undefined, extra, undefined, undefined, runnableConfig.runName);
            let generation = new outputs.GenerationChunk({
                text: "",
            });
            try {
                for await (const chunk of this._streamResponseChunks(prompt.toString(), callOptions, runManagers?.[0])) {
                    if (!generation) {
                        generation = chunk;
                    }
                    else {
                        generation = generation.concat(chunk);
                    }
                    if (typeof chunk.text === "string") {
                        yield chunk.text;
                    }
                }
            }
            catch (err) {
                await Promise.all((runManagers ?? []).map((runManager) => runManager?.handleLLMError(err)));
                throw err;
            }
            await Promise.all((runManagers ?? []).map((runManager) => runManager?.handleLLMEnd({
                generations: [[generation]],
            })));
        }
    }
    /**
     * This method takes prompt values, options, and callbacks, and generates
     * a result based on the prompts.
     * @param promptValues Prompt values for the LLM.
     * @param options Options for the LLM call.
     * @param callbacks Callbacks for the LLM call.
     * @returns An LLMResult based on the prompts.
     */
    async generatePrompt(promptValues, options, callbacks) {
        const prompts = promptValues.map((promptValue) => promptValue.toString());
        return this.generate(prompts, options, callbacks);
    }
    /**
     * Get the parameters used to invoke the model
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    invocationParams(_options) {
        return {};
    }
    _flattenLLMResult(llmResult) {
        const llmResults = [];
        for (let i = 0; i < llmResult.generations.length; i += 1) {
            const genList = llmResult.generations[i];
            if (i === 0) {
                llmResults.push({
                    generations: [genList],
                    llmOutput: llmResult.llmOutput,
                });
            }
            else {
                const llmOutput = llmResult.llmOutput
                    ? { ...llmResult.llmOutput, tokenUsage: {} }
                    : undefined;
                llmResults.push({
                    generations: [genList],
                    llmOutput,
                });
            }
        }
        return llmResults;
    }
    /** @ignore */
    async _generateUncached(prompts, parsedOptions, handledOptions, startedRunManagers) {
        let runManagers;
        if (startedRunManagers !== undefined &&
            startedRunManagers.length === prompts.length) {
            runManagers = startedRunManagers;
        }
        else {
            const callbackManager_ = await manager.CallbackManager.configure(handledOptions.callbacks, this.callbacks, handledOptions.tags, this.tags, handledOptions.metadata, this.metadata, { verbose: this.verbose });
            const extra = {
                options: parsedOptions,
                invocation_params: this?.invocationParams(parsedOptions),
                batch_size: prompts.length,
            };
            runManagers = await callbackManager_?.handleLLMStart(this.toJSON(), prompts, handledOptions.runId, undefined, extra, undefined, undefined, handledOptions?.runName);
        }
        // Even if stream is not explicitly called, check if model is implicitly
        // called from streamEvents() or streamLog() to get all streamed events.
        // Bail out if _streamResponseChunks not overridden
        const hasStreamingHandler = !!runManagers?.[0].handlers.find(base.callbackHandlerPrefersStreaming);
        let output;
        if (hasStreamingHandler &&
            prompts.length === 1 &&
            this._streamResponseChunks !== BaseLLM.prototype._streamResponseChunks) {
            try {
                const stream = await this._streamResponseChunks(prompts[0], parsedOptions, runManagers?.[0]);
                let aggregated;
                for await (const chunk of stream) {
                    if (aggregated === undefined) {
                        aggregated = chunk;
                    }
                    else {
                        aggregated = (0,utils_stream.concat)(aggregated, chunk);
                    }
                }
                if (aggregated === undefined) {
                    throw new Error("Received empty response from chat model call.");
                }
                output = { generations: [[aggregated]], llmOutput: {} };
                await runManagers?.[0].handleLLMEnd(output);
            }
            catch (e) {
                await runManagers?.[0].handleLLMError(e);
                throw e;
            }
        }
        else {
            try {
                output = await this._generate(prompts, parsedOptions, runManagers?.[0]);
            }
            catch (err) {
                await Promise.all((runManagers ?? []).map((runManager) => runManager?.handleLLMError(err)));
                throw err;
            }
            const flattenedOutputs = this._flattenLLMResult(output);
            await Promise.all((runManagers ?? []).map((runManager, i) => runManager?.handleLLMEnd(flattenedOutputs[i])));
        }
        const runIds = runManagers?.map((manager) => manager.runId) || undefined;
        // This defines RUN_KEY as a non-enumerable property on the output object
        // so that it is not serialized when the output is stringified, and so that
        // it isnt included when listing the keys of the output object.
        Object.defineProperty(output, outputs.RUN_KEY, {
            value: runIds ? { runIds } : undefined,
            configurable: true,
        });
        return output;
    }
    async _generateCached({ prompts, cache, llmStringKey, parsedOptions, handledOptions, runId, }) {
        const callbackManager_ = await manager.CallbackManager.configure(handledOptions.callbacks, this.callbacks, handledOptions.tags, this.tags, handledOptions.metadata, this.metadata, { verbose: this.verbose });
        const extra = {
            options: parsedOptions,
            invocation_params: this?.invocationParams(parsedOptions),
            batch_size: prompts.length,
        };
        const runManagers = await callbackManager_?.handleLLMStart(this.toJSON(), prompts, runId, undefined, extra, undefined, undefined, handledOptions?.runName);
        // generate results
        const missingPromptIndices = [];
        const results = await Promise.allSettled(prompts.map(async (prompt, index) => {
            const result = await cache.lookup(prompt, llmStringKey);
            if (result == null) {
                missingPromptIndices.push(index);
            }
            return result;
        }));
        // Map run managers to the results before filtering out null results
        // Null results are just absent from the cache.
        const cachedResults = results
            .map((result, index) => ({ result, runManager: runManagers?.[index] }))
            .filter(({ result }) => (result.status === "fulfilled" && result.value != null) ||
            result.status === "rejected");
        // Handle results and call run managers
        const generations = [];
        await Promise.all(cachedResults.map(async ({ result: promiseResult, runManager }, i) => {
            if (promiseResult.status === "fulfilled") {
                const result = promiseResult.value;
                generations[i] = result.map((result) => {
                    // eslint-disable-next-line no-param-reassign
                    result.generationInfo = {
                        ...result.generationInfo,
                        tokenUsage: {},
                    };
                    return result;
                });
                if (result.length) {
                    await runManager?.handleLLMNewToken(result[0].text);
                }
                return runManager?.handleLLMEnd({
                    generations: [result],
                }, undefined, undefined, undefined, {
                    cached: true,
                });
            }
            else {
                // status === "rejected"
                await runManager?.handleLLMError(promiseResult.reason, undefined, undefined, undefined, {
                    cached: true,
                });
                return Promise.reject(promiseResult.reason);
            }
        }));
        const output = {
            generations,
            missingPromptIndices,
            startedRunManagers: runManagers,
        };
        // This defines RUN_KEY as a non-enumerable property on the output object
        // so that it is not serialized when the output is stringified, and so that
        // it isnt included when listing the keys of the output object.
        Object.defineProperty(output, outputs.RUN_KEY, {
            value: runManagers
                ? { runIds: runManagers?.map((manager) => manager.runId) }
                : undefined,
            configurable: true,
        });
        return output;
    }
    /**
     * Run the LLM on the given prompts and input, handling caching.
     */
    async generate(prompts, options, callbacks) {
        if (!Array.isArray(prompts)) {
            throw new Error("Argument 'prompts' is expected to be a string[]");
        }
        let parsedOptions;
        if (Array.isArray(options)) {
            parsedOptions = { stop: options };
        }
        else {
            parsedOptions = options;
        }
        const [runnableConfig, callOptions] = this._separateRunnableConfigFromCallOptionsCompat(parsedOptions);
        runnableConfig.callbacks = runnableConfig.callbacks ?? callbacks;
        if (!this.cache) {
            return this._generateUncached(prompts, callOptions, runnableConfig);
        }
        const { cache } = this;
        const llmStringKey = this._getSerializedCacheKeyParametersForCall(callOptions);
        const { generations, missingPromptIndices, startedRunManagers } = await this._generateCached({
            prompts,
            cache,
            llmStringKey,
            parsedOptions: callOptions,
            handledOptions: runnableConfig,
            runId: runnableConfig.runId,
        });
        let llmOutput = {};
        if (missingPromptIndices.length > 0) {
            const results = await this._generateUncached(missingPromptIndices.map((i) => prompts[i]), callOptions, runnableConfig, startedRunManagers !== undefined
                ? missingPromptIndices.map((i) => startedRunManagers?.[i])
                : undefined);
            await Promise.all(results.generations.map(async (generation, index) => {
                const promptIndex = missingPromptIndices[index];
                generations[promptIndex] = generation;
                return cache.update(prompts[promptIndex], llmStringKey, generation);
            }));
            llmOutput = results.llmOutput ?? {};
        }
        return { generations, llmOutput };
    }
    /**
     * @deprecated Use .invoke() instead. Will be removed in 0.2.0.
     * Convenience wrapper for {@link generate} that takes in a single string prompt and returns a single string output.
     */
    async call(prompt, options, callbacks) {
        const { generations } = await this.generate([prompt], options, callbacks);
        return generations[0][0].text;
    }
    /**
     * @deprecated Use .invoke() instead. Will be removed in 0.2.0.
     *
     * This method is similar to `call`, but it's used for making predictions
     * based on the input text.
     * @param text Input text for the prediction.
     * @param options Options for the LLM call.
     * @param callbacks Callbacks for the LLM call.
     * @returns A prediction based on the input text.
     */
    async predict(text, options, callbacks) {
        return this.call(text, options, callbacks);
    }
    /**
     * @deprecated Use .invoke() instead. Will be removed in 0.2.0.
     *
     * This method takes a list of messages, options, and callbacks, and
     * returns a predicted message.
     * @param messages A list of messages for the prediction.
     * @param options Options for the LLM call.
     * @param callbacks Callbacks for the LLM call.
     * @returns A predicted message based on the list of messages.
     */
    async predictMessages(messages, options, callbacks) {
        const text = (0,dist_messages.getBufferString)(messages);
        const prediction = await this.call(text, options, callbacks);
        return new dist_messages.AIMessage(prediction);
    }
    /**
     * Get the identifying parameters of the LLM.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _identifyingParams() {
        return {};
    }
    /**
     * @deprecated
     * Return a json-like object representing this LLM.
     */
    serialize() {
        return {
            ...this._identifyingParams(),
            _type: this._llmType(),
            _model: this._modelType(),
        };
    }
    _modelType() {
        return "base_llm";
    }
}
/**
 * LLM class that provides a simpler interface to subclass than {@link BaseLLM}.
 *
 * Requires only implementing a simpler {@link _call} method instead of {@link _generate}.
 *
 * @augments BaseLLM
 */
class LLM extends BaseLLM {
    async _generate(prompts, options, runManager) {
        const generations = await Promise.all(prompts.map((prompt, promptIndex) => this._call(prompt, { ...options, promptIndex }, runManager).then((text) => [{ text }])));
        return { generations };
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/memory.js
/**
 * Abstract base class for memory in LangChain's Chains. Memory refers to
 * the state in Chains. It can be used to store information about past
 * executions of a Chain and inject that information into the inputs of
 * future executions of the Chain.
 */
class BaseMemory {
}
const getValue = (values, key) => {
    if (key !== undefined) {
        return values[key];
    }
    const keys = Object.keys(values);
    if (keys.length === 1) {
        return values[keys[0]];
    }
};
/**
 * This function is used by memory classes to select the input value
 * to use for the memory. If there is only one input value, it is used.
 * If there are multiple input values, the inputKey must be specified.
 */
const getInputValue = (inputValues, inputKey) => {
    const value = getValue(inputValues, inputKey);
    if (!value) {
        const keys = Object.keys(inputValues);
        throw new Error(`input values have ${keys.length} keys, you must specify an input key or pass only 1 key as input`);
    }
    return value;
};
/**
 * This function is used by memory classes to select the output value
 * to use for the memory. If there is only one output value, it is used.
 * If there are multiple output values, the outputKey must be specified.
 * If no outputKey is specified, an error is thrown.
 */
const getOutputValue = (outputValues, outputKey) => {
    const value = getValue(outputValues, outputKey);
    if (!value && value !== "") {
        const keys = Object.keys(outputValues);
        throw new Error(`output values have ${keys.length} keys, you must specify an output key or pass only 1 key as output`);
    }
    return value;
};
/**
 * Function used by memory classes to get the key of the prompt input,
 * excluding any keys that are memory variables or the "stop" key. If
 * there is not exactly one prompt input key, an error is thrown.
 */
function getPromptInputKey(inputs, memoryVariables) {
    const promptInputKeys = Object.keys(inputs).filter((key) => !memoryVariables.includes(key) && key !== "stop");
    if (promptInputKeys.length !== 1) {
        throw new Error(`One input key expected, but got ${promptInputKeys.length}`);
    }
    return promptInputKeys[0];
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/runnables/router.js


/**
 * A runnable that routes to a set of runnables based on Input['key'].
 * Returns the output of the selected runnable.
 * @example
 * ```typescript
 * import { RouterRunnable, RunnableLambda } from "@langchain/core/runnables";
 *
 * const router = new RouterRunnable({
 *   runnables: {
 *     toUpperCase: RunnableLambda.from((text: string) => text.toUpperCase()),
 *     reverseText: RunnableLambda.from((text: string) =>
 *       text.split("").reverse().join("")
 *     ),
 *   },
 * });
 *
 * // Invoke the 'reverseText' runnable
 * const result1 = router.invoke({ key: "reverseText", input: "Hello World" });
 *
 * // "dlroW olleH"
 *
 * // Invoke the 'toUpperCase' runnable
 * const result2 = router.invoke({ key: "toUpperCase", input: "Hello World" });
 *
 * // "HELLO WORLD"
 * ```
 */
class RouterRunnable extends runnables_base/* Runnable */.YN {
    static lc_name() {
        return "RouterRunnable";
    }
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "runnables"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "runnables", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.runnables = fields.runnables;
    }
    async invoke(input, options) {
        const { key, input: actualInput } = input;
        const runnable = this.runnables[key];
        if (runnable === undefined) {
            throw new Error(`No runnable associated with key "${key}".`);
        }
        return runnable.invoke(actualInput, (0,runnables_config/* ensureConfig */.ZI)(options));
    }
    async batch(inputs, options, batchOptions) {
        const keys = inputs.map((input) => input.key);
        const actualInputs = inputs.map((input) => input.input);
        const missingKey = keys.find((key) => this.runnables[key] === undefined);
        if (missingKey !== undefined) {
            throw new Error(`One or more keys do not have a corresponding runnable.`);
        }
        const runnables = keys.map((key) => this.runnables[key]);
        const optionsList = this._getOptionsList(options ?? {}, inputs.length);
        const maxConcurrency = optionsList[0]?.maxConcurrency ?? batchOptions?.maxConcurrency;
        const batchSize = maxConcurrency && maxConcurrency > 0 ? maxConcurrency : inputs.length;
        const batchResults = [];
        for (let i = 0; i < actualInputs.length; i += batchSize) {
            const batchPromises = actualInputs
                .slice(i, i + batchSize)
                .map((actualInput, i) => runnables[i].invoke(actualInput, optionsList[i]));
            const batchResult = await Promise.all(batchPromises);
            batchResults.push(batchResult);
        }
        return batchResults.flat();
    }
    async stream(input, options) {
        const { key, input: actualInput } = input;
        const runnable = this.runnables[key];
        if (runnable === undefined) {
            throw new Error(`No runnable associated with key "${key}".`);
        }
        return runnable.stream(actualInput, options);
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/runnables/branch.js



/**
 * Class that represents a runnable branch. The RunnableBranch is
 * initialized with an array of branches and a default branch. When invoked,
 * it evaluates the condition of each branch in order and executes the
 * corresponding branch if the condition is true. If none of the conditions
 * are true, it executes the default branch.
 * @example
 * ```typescript
 * const branch = RunnableBranch.from([
 *   [
 *     (x: { topic: string; question: string }) =>
 *       x.topic.toLowerCase().includes("anthropic"),
 *     anthropicChain,
 *   ],
 *   [
 *     (x: { topic: string; question: string }) =>
 *       x.topic.toLowerCase().includes("langchain"),
 *     langChainChain,
 *   ],
 *   generalChain,
 * ]);
 *
 * const fullChain = RunnableSequence.from([
 *   {
 *     topic: classificationChain,
 *     question: (input: { question: string }) => input.question,
 *   },
 *   branch,
 * ]);
 *
 * const result = await fullChain.invoke({
 *   question: "how do I use LangChain?",
 * });
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class RunnableBranch extends runnables_base/* Runnable */.YN {
    static lc_name() {
        return "RunnableBranch";
    }
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "runnables"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "default", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "branches", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.branches = fields.branches;
        this.default = fields.default;
    }
    /**
     * Convenience method for instantiating a RunnableBranch from
     * RunnableLikes (objects, functions, or Runnables).
     *
     * Each item in the input except for the last one should be a
     * tuple with two items. The first is a "condition" RunnableLike that
     * returns "true" if the second RunnableLike in the tuple should run.
     *
     * The final item in the input should be a RunnableLike that acts as a
     * default branch if no other branches match.
     *
     * @example
     * ```ts
     * import { RunnableBranch } from "@langchain/core/runnables";
     *
     * const branch = RunnableBranch.from([
     *   [(x: number) => x > 0, (x: number) => x + 1],
     *   [(x: number) => x < 0, (x: number) => x - 1],
     *   (x: number) => x
     * ]);
     * ```
     * @param branches An array where the every item except the last is a tuple of [condition, runnable]
     *   pairs. The last item is a default runnable which is invoked if no other condition matches.
     * @returns A new RunnableBranch.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static from(branches) {
        if (branches.length < 1) {
            throw new Error("RunnableBranch requires at least one branch");
        }
        const branchLikes = branches.slice(0, -1);
        const coercedBranches = branchLikes.map(([condition, runnable]) => [
            (0,runnables_base/* _coerceToRunnable */.Bp)(condition),
            (0,runnables_base/* _coerceToRunnable */.Bp)(runnable),
        ]);
        const defaultBranch = (0,runnables_base/* _coerceToRunnable */.Bp)(branches[branches.length - 1]);
        return new this({
            branches: coercedBranches,
            default: defaultBranch,
        });
    }
    async _invoke(input, config, runManager) {
        let result;
        for (let i = 0; i < this.branches.length; i += 1) {
            const [condition, branchRunnable] = this.branches[i];
            const conditionValue = await condition.invoke(input, (0,runnables_config/* patchConfig */.tn)(config, {
                callbacks: runManager?.getChild(`condition:${i + 1}`),
            }));
            if (conditionValue) {
                result = await branchRunnable.invoke(input, (0,runnables_config/* patchConfig */.tn)(config, {
                    callbacks: runManager?.getChild(`branch:${i + 1}`),
                }));
                break;
            }
        }
        if (!result) {
            result = await this.default.invoke(input, (0,runnables_config/* patchConfig */.tn)(config, {
                callbacks: runManager?.getChild("branch:default"),
            }));
        }
        return result;
    }
    async invoke(input, config = {}) {
        return this._callWithConfig(this._invoke, input, config);
    }
    async *_streamIterator(input, config) {
        const callbackManager_ = await (0,runnables_config/* getCallbackManagerForConfig */.kJ)(config);
        const runManager = await callbackManager_?.handleChainStart(this.toJSON(), (0,runnables_base/* _coerceToDict */.GH)(input, "input"), config?.runId, undefined, undefined, undefined, config?.runName);
        let finalOutput;
        let finalOutputSupported = true;
        let stream;
        try {
            for (let i = 0; i < this.branches.length; i += 1) {
                const [condition, branchRunnable] = this.branches[i];
                const conditionValue = await condition.invoke(input, (0,runnables_config/* patchConfig */.tn)(config, {
                    callbacks: runManager?.getChild(`condition:${i + 1}`),
                }));
                if (conditionValue) {
                    stream = await branchRunnable.stream(input, (0,runnables_config/* patchConfig */.tn)(config, {
                        callbacks: runManager?.getChild(`branch:${i + 1}`),
                    }));
                    for await (const chunk of stream) {
                        yield chunk;
                        if (finalOutputSupported) {
                            if (finalOutput === undefined) {
                                finalOutput = chunk;
                            }
                            else {
                                try {
                                    finalOutput = (0,utils_stream.concat)(finalOutput, chunk);
                                }
                                catch (e) {
                                    finalOutput = undefined;
                                    finalOutputSupported = false;
                                }
                            }
                        }
                    }
                    break;
                }
            }
            if (stream === undefined) {
                stream = await this.default.stream(input, (0,runnables_config/* patchConfig */.tn)(config, {
                    callbacks: runManager?.getChild("branch:default"),
                }));
                for await (const chunk of stream) {
                    yield chunk;
                    if (finalOutputSupported) {
                        if (finalOutput === undefined) {
                            finalOutput = chunk;
                        }
                        else {
                            try {
                                finalOutput = (0,utils_stream.concat)(finalOutput, chunk);
                            }
                            catch (e) {
                                finalOutput = undefined;
                                finalOutputSupported = false;
                            }
                        }
                    }
                }
            }
        }
        catch (e) {
            await runManager?.handleChainError(e);
            throw e;
        }
        await runManager?.handleChainEnd(finalOutput ?? {});
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/runnables/history.js



/**
 * Wraps a LCEL chain and manages history. It appends input messages
 * and chain outputs as history, and adds the current history messages to
 * the chain input.
 * @example
 * ```typescript
 * // yarn add @langchain/anthropic @langchain/community @upstash/redis
 *
 * import {
 *   ChatPromptTemplate,
 *   MessagesPlaceholder,
 * } from "@langchain/core/prompts";
 * import { ChatAnthropic } from "@langchain/anthropic";
 * import { UpstashRedisChatMessageHistory } from "@langchain/community/stores/message/upstash_redis";
 * // For demos, you can also use an in-memory store:
 * // import { ChatMessageHistory } from "langchain/stores/message/in_memory";
 *
 * const prompt = ChatPromptTemplate.fromMessages([
 *   ["system", "You're an assistant who's good at {ability}"],
 *   new MessagesPlaceholder("history"),
 *   ["human", "{question}"],
 * ]);
 *
 * const chain = prompt.pipe(new ChatAnthropic({}));
 *
 * const chainWithHistory = new RunnableWithMessageHistory({
 *   runnable: chain,
 *   getMessageHistory: (sessionId) =>
 *     new UpstashRedisChatMessageHistory({
 *       sessionId,
 *       config: {
 *         url: process.env.UPSTASH_REDIS_REST_URL!,
 *         token: process.env.UPSTASH_REDIS_REST_TOKEN!,
 *       },
 *     }),
 *   inputMessagesKey: "question",
 *   historyMessagesKey: "history",
 * });
 *
 * const result = await chainWithHistory.invoke(
 *   {
 *     ability: "math",
 *     question: "What does cosine mean?",
 *   },
 *   {
 *     configurable: {
 *       sessionId: "some_string_identifying_a_user",
 *     },
 *   }
 * );
 *
 * const result2 = await chainWithHistory.invoke(
 *   {
 *     ability: "math",
 *     question: "What's its inverse?",
 *   },
 *   {
 *     configurable: {
 *       sessionId: "some_string_identifying_a_user",
 *     },
 *   }
 * );
 * ```
 */
class RunnableWithMessageHistory extends runnables_base/* RunnableBinding */.fJ {
    constructor(fields) {
        let historyChain = runnables_base/* RunnableLambda */.jY.from((input, options) => this._enterHistory(input, options ?? {})).withConfig({ runName: "loadHistory" });
        const messagesKey = fields.historyMessagesKey ?? fields.inputMessagesKey;
        if (messagesKey) {
            historyChain = RunnablePassthrough.assign({
                [messagesKey]: historyChain,
            }).withConfig({ runName: "insertHistory" });
        }
        const bound = historyChain
            .pipe(fields.runnable.withListeners({
            onEnd: (run, config) => this._exitHistory(run, config ?? {}),
        }))
            .withConfig({ runName: "RunnableWithMessageHistory" });
        const config = fields.config ?? {};
        super({
            ...fields,
            config,
            bound,
        });
        Object.defineProperty(this, "runnable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "inputMessagesKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "outputMessagesKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "historyMessagesKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "getMessageHistory", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.runnable = fields.runnable;
        this.getMessageHistory = fields.getMessageHistory;
        this.inputMessagesKey = fields.inputMessagesKey;
        this.outputMessagesKey = fields.outputMessagesKey;
        this.historyMessagesKey = fields.historyMessagesKey;
    }
    _getInputMessages(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    inputValue) {
        let parsedInputValue;
        if (typeof inputValue === "object" &&
            !Array.isArray(inputValue) &&
            !(0,dist_messages.isBaseMessage)(inputValue)) {
            let key;
            if (this.inputMessagesKey) {
                key = this.inputMessagesKey;
            }
            else if (Object.keys(inputValue).length === 1) {
                key = Object.keys(inputValue)[0];
            }
            else {
                key = "input";
            }
            if (Array.isArray(inputValue[key]) && Array.isArray(inputValue[key][0])) {
                parsedInputValue = inputValue[key][0];
            }
            else {
                parsedInputValue = inputValue[key];
            }
        }
        else {
            parsedInputValue = inputValue;
        }
        if (typeof parsedInputValue === "string") {
            return [new dist_messages.HumanMessage(parsedInputValue)];
        }
        else if (Array.isArray(parsedInputValue)) {
            return parsedInputValue;
        }
        else if ((0,dist_messages.isBaseMessage)(parsedInputValue)) {
            return [parsedInputValue];
        }
        else {
            throw new Error(`Expected a string, BaseMessage, or array of BaseMessages.\nGot ${JSON.stringify(parsedInputValue, null, 2)}`);
        }
    }
    _getOutputMessages(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    outputValue) {
        let parsedOutputValue;
        if (!Array.isArray(outputValue) &&
            !(0,dist_messages.isBaseMessage)(outputValue) &&
            typeof outputValue !== "string") {
            let key;
            if (this.outputMessagesKey !== undefined) {
                key = this.outputMessagesKey;
            }
            else if (Object.keys(outputValue).length === 1) {
                key = Object.keys(outputValue)[0];
            }
            else {
                key = "output";
            }
            // If you are wrapping a chat model directly
            // The output is actually this weird generations object
            if (outputValue.generations !== undefined) {
                parsedOutputValue = outputValue.generations[0][0].message;
            }
            else {
                parsedOutputValue = outputValue[key];
            }
        }
        else {
            parsedOutputValue = outputValue;
        }
        if (typeof parsedOutputValue === "string") {
            return [new dist_messages.AIMessage(parsedOutputValue)];
        }
        else if (Array.isArray(parsedOutputValue)) {
            return parsedOutputValue;
        }
        else if ((0,dist_messages.isBaseMessage)(parsedOutputValue)) {
            return [parsedOutputValue];
        }
        else {
            throw new Error(`Expected a string, BaseMessage, or array of BaseMessages. Received: ${JSON.stringify(parsedOutputValue, null, 2)}`);
        }
    }
    async _enterHistory(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    input, kwargs) {
        const history = kwargs?.configurable?.messageHistory;
        const messages = await history.getMessages();
        if (this.historyMessagesKey === undefined) {
            return messages.concat(this._getInputMessages(input));
        }
        return messages;
    }
    async _exitHistory(run, config) {
        const history = config.configurable?.messageHistory;
        // Get input messages
        let inputs;
        // Chat model inputs are nested arrays
        if (Array.isArray(run.inputs) && Array.isArray(run.inputs[0])) {
            inputs = run.inputs[0];
        }
        else {
            inputs = run.inputs;
        }
        let inputMessages = this._getInputMessages(inputs);
        // If historic messages were prepended to the input messages, remove them to
        // avoid adding duplicate messages to history.
        if (this.historyMessagesKey === undefined) {
            const existingMessages = await history.getMessages();
            inputMessages = inputMessages.slice(existingMessages.length);
        }
        // Get output messages
        const outputValue = run.outputs;
        if (!outputValue) {
            throw new Error(`Output values from 'Run' undefined. Run: ${JSON.stringify(run, null, 2)}`);
        }
        const outputMessages = this._getOutputMessages(outputValue);
        await history.addMessages([...inputMessages, ...outputMessages]);
    }
    async _mergeConfig(...configs) {
        const config = await super._mergeConfig(...configs);
        // Extract sessionId
        if (!config.configurable || !config.configurable.sessionId) {
            const exampleInput = {
                [this.inputMessagesKey ?? "input"]: "foo",
            };
            const exampleConfig = { configurable: { sessionId: "123" } };
            throw new Error(`sessionId is required. Pass it in as part of the config argument to .invoke() or .stream()\n` +
                `eg. chain.invoke(${JSON.stringify(exampleInput)}, ${JSON.stringify(exampleConfig)})`);
        }
        // attach messageHistory
        const { sessionId } = config.configurable;
        config.configurable.messageHistory = await this.getMessageHistory(sessionId);
        return config;
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/runnables/index.js







// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/errors/index.js
var errors = __webpack_require__(61193);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/output_parsers/base.js


/**
 * Abstract base class for parsing the output of a Large Language Model
 * (LLM) call. It provides methods for parsing the result of an LLM call
 * and invoking the parser with a given input.
 */
class BaseLLMOutputParser extends runnables_base/* Runnable */.YN {
    /**
     * Parses the result of an LLM call with a given prompt. By default, it
     * simply calls `parseResult`.
     * @param generations The generations from an LLM call.
     * @param _prompt The prompt used in the LLM call.
     * @param callbacks Optional callbacks.
     * @returns A promise of the parsed output.
     */
    parseResultWithPrompt(generations, _prompt, callbacks) {
        return this.parseResult(generations, callbacks);
    }
    _baseMessageToString(message) {
        return typeof message.content === "string"
            ? message.content
            : this._baseMessageContentToString(message.content);
    }
    _baseMessageContentToString(content) {
        return JSON.stringify(content);
    }
    /**
     * Calls the parser with a given input and optional configuration options.
     * If the input is a string, it creates a generation with the input as
     * text and calls `parseResult`. If the input is a `BaseMessage`, it
     * creates a generation with the input as a message and the content of the
     * input as text, and then calls `parseResult`.
     * @param input The input to the parser, which can be a string or a `BaseMessage`.
     * @param options Optional configuration options.
     * @returns A promise of the parsed output.
     */
    async invoke(input, options) {
        if (typeof input === "string") {
            return this._callWithConfig(async (input, options) => this.parseResult([{ text: input }], options?.callbacks), input, { ...options, runType: "parser" });
        }
        else {
            return this._callWithConfig(async (input, options) => this.parseResult([
                {
                    message: input,
                    text: this._baseMessageToString(input),
                },
            ], options?.callbacks), input, { ...options, runType: "parser" });
        }
    }
}
/**
 * Class to parse the output of an LLM call.
 */
class BaseOutputParser extends BaseLLMOutputParser {
    parseResult(generations, callbacks) {
        return this.parse(generations[0].text, callbacks);
    }
    async parseWithPrompt(text, _prompt, callbacks) {
        return this.parse(text, callbacks);
    }
    /**
     * Return the string type key uniquely identifying this class of parser
     */
    _type() {
        throw new Error("_type not implemented");
    }
}
/**
 * Exception that output parsers should raise to signify a parsing error.
 *
 * This exists to differentiate parsing errors from other code or execution errors
 * that also may arise inside the output parser. OutputParserExceptions will be
 * available to catch and handle in ways to fix the parsing error, while other
 * errors will be raised.
 *
 * @param message - The error that's being re-raised or an error message.
 * @param llmOutput - String model output which is error-ing.
 * @param observation - String explanation of error which can be passed to a
 *     model to try and remediate the issue.
 * @param sendToLLM - Whether to send the observation and llm_output back to an Agent
 *     after an OutputParserException has been raised. This gives the underlying
 *     model driving the agent the context that the previous output was improperly
 *     structured, in the hopes that it will update the output to the correct
 *     format.
 */
class OutputParserException extends Error {
    constructor(message, llmOutput, observation, sendToLLM = false) {
        super(message);
        Object.defineProperty(this, "llmOutput", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "observation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sendToLLM", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.llmOutput = llmOutput;
        this.observation = observation;
        this.sendToLLM = sendToLLM;
        if (sendToLLM) {
            if (observation === undefined || llmOutput === undefined) {
                throw new Error("Arguments 'observation' & 'llmOutput' are required if 'sendToLlm' is true");
            }
        }
        (0,errors/* addLangChainErrorFields */.Y)(this, "OUTPUT_PARSING_FAILURE");
    }
}

;// CONCATENATED MODULE: ./node_modules/@cfworker/json-schema/dist/esm/deep-compare-strict.js
function deepCompareStrict(a, b) {
    const typeofa = typeof a;
    if (typeofa !== typeof b) {
        return false;
    }
    if (Array.isArray(a)) {
        if (!Array.isArray(b)) {
            return false;
        }
        const length = a.length;
        if (length !== b.length) {
            return false;
        }
        for (let i = 0; i < length; i++) {
            if (!deepCompareStrict(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    if (typeofa === 'object') {
        if (!a || !b) {
            return a === b;
        }
        const aKeys = Object.keys(a);
        const bKeys = Object.keys(b);
        const length = aKeys.length;
        if (length !== bKeys.length) {
            return false;
        }
        for (const k of aKeys) {
            if (!deepCompareStrict(a[k], b[k])) {
                return false;
            }
        }
        return true;
    }
    return a === b;
}

;// CONCATENATED MODULE: ./node_modules/@cfworker/json-schema/dist/esm/pointer.js
function encodePointer(p) {
    return encodeURI(escapePointer(p));
}
function escapePointer(p) {
    return p.replace(/~/g, '~0').replace(/\//g, '~1');
}

;// CONCATENATED MODULE: ./node_modules/@cfworker/json-schema/dist/esm/dereference.js

const schemaKeyword = {
    additionalItems: true,
    unevaluatedItems: true,
    items: true,
    contains: true,
    additionalProperties: true,
    unevaluatedProperties: true,
    propertyNames: true,
    not: true,
    if: true,
    then: true,
    else: true
};
const schemaArrayKeyword = {
    prefixItems: true,
    items: true,
    allOf: true,
    anyOf: true,
    oneOf: true
};
const schemaMapKeyword = {
    $defs: true,
    definitions: true,
    properties: true,
    patternProperties: true,
    dependentSchemas: true
};
const ignoredKeyword = {
    id: true,
    $id: true,
    $ref: true,
    $schema: true,
    $anchor: true,
    $vocabulary: true,
    $comment: true,
    default: true,
    enum: true,
    const: true,
    required: true,
    type: true,
    maximum: true,
    minimum: true,
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    multipleOf: true,
    maxLength: true,
    minLength: true,
    pattern: true,
    format: true,
    maxItems: true,
    minItems: true,
    uniqueItems: true,
    maxProperties: true,
    minProperties: true
};
let initialBaseURI = typeof self !== 'undefined' &&
    self.location &&
    self.location.origin !== 'null'
    ?
        new URL(self.location.origin + self.location.pathname + location.search)
    : new URL('https://github.com/cfworker');
function dereference(schema, lookup = Object.create(null), baseURI = initialBaseURI, basePointer = '') {
    if (schema && typeof schema === 'object' && !Array.isArray(schema)) {
        const id = schema.$id || schema.id;
        if (id) {
            const url = new URL(id, baseURI.href);
            if (url.hash.length > 1) {
                lookup[url.href] = schema;
            }
            else {
                url.hash = '';
                if (basePointer === '') {
                    baseURI = url;
                }
                else {
                    dereference(schema, lookup, baseURI);
                }
            }
        }
    }
    else if (schema !== true && schema !== false) {
        return lookup;
    }
    const schemaURI = baseURI.href + (basePointer ? '#' + basePointer : '');
    if (lookup[schemaURI] !== undefined) {
        throw new Error(`Duplicate schema URI "${schemaURI}".`);
    }
    lookup[schemaURI] = schema;
    if (schema === true || schema === false) {
        return lookup;
    }
    if (schema.__absolute_uri__ === undefined) {
        Object.defineProperty(schema, '__absolute_uri__', {
            enumerable: false,
            value: schemaURI
        });
    }
    if (schema.$ref && schema.__absolute_ref__ === undefined) {
        const url = new URL(schema.$ref, baseURI.href);
        url.hash = url.hash;
        Object.defineProperty(schema, '__absolute_ref__', {
            enumerable: false,
            value: url.href
        });
    }
    if (schema.$recursiveRef && schema.__absolute_recursive_ref__ === undefined) {
        const url = new URL(schema.$recursiveRef, baseURI.href);
        url.hash = url.hash;
        Object.defineProperty(schema, '__absolute_recursive_ref__', {
            enumerable: false,
            value: url.href
        });
    }
    if (schema.$anchor) {
        const url = new URL('#' + schema.$anchor, baseURI.href);
        lookup[url.href] = schema;
    }
    for (let key in schema) {
        if (ignoredKeyword[key]) {
            continue;
        }
        const keyBase = `${basePointer}/${encodePointer(key)}`;
        const subSchema = schema[key];
        if (Array.isArray(subSchema)) {
            if (schemaArrayKeyword[key]) {
                const length = subSchema.length;
                for (let i = 0; i < length; i++) {
                    dereference(subSchema[i], lookup, baseURI, `${keyBase}/${i}`);
                }
            }
        }
        else if (schemaMapKeyword[key]) {
            for (let subKey in subSchema) {
                dereference(subSchema[subKey], lookup, baseURI, `${keyBase}/${encodePointer(subKey)}`);
            }
        }
        else {
            dereference(subSchema, lookup, baseURI, keyBase);
        }
    }
    return lookup;
}

;// CONCATENATED MODULE: ./node_modules/@cfworker/json-schema/dist/esm/format.js
const DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
const DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
const HOSTNAME = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i;
const URIREF = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
const URITEMPLATE = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
const URL_ = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)(?:\.(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;
const UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
const JSON_POINTER = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
const JSON_POINTER_URI_FRAGMENT = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
const RELATIVE_JSON_POINTER = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
const FASTDATE = /^\d\d\d\d-[0-1]\d-[0-3]\d$/;
const FASTTIME = /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i;
const FASTDATETIME = /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i;
const FASTURIREFERENCE = /^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i;
const EMAIL = (input) => {
    if (input[0] === '"')
        return false;
    const [name, host, ...rest] = input.split('@');
    if (!name ||
        !host ||
        rest.length !== 0 ||
        name.length > 64 ||
        host.length > 253)
        return false;
    if (name[0] === '.' || name.endsWith('.') || name.includes('..'))
        return false;
    if (!/^[a-z0-9.-]+$/i.test(host) ||
        !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(name))
        return false;
    return host
        .split('.')
        .every(part => /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/i.test(part));
};
const IPV4 = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
const IPV6 = /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i;
const DURATION = (input) => input.length > 1 &&
    input.length < 80 &&
    (/^P\d+([.,]\d+)?W$/.test(input) ||
        (/^P[\dYMDTHS]*(\d[.,]\d+)?[YMDHS]$/.test(input) &&
            /^P([.,\d]+Y)?([.,\d]+M)?([.,\d]+D)?(T([.,\d]+H)?([.,\d]+M)?([.,\d]+S)?)?$/.test(input)));
function bind(r) {
    return r.test.bind(r);
}
const fullFormat = {
    date,
    time: time.bind(undefined, false),
    'date-time': date_time,
    duration: DURATION,
    uri,
    'uri-reference': bind(URIREF),
    'uri-template': bind(URITEMPLATE),
    url: bind(URL_),
    email: EMAIL,
    hostname: bind(HOSTNAME),
    ipv4: bind(IPV4),
    ipv6: bind(IPV6),
    regex: regex,
    uuid: bind(UUID),
    'json-pointer': bind(JSON_POINTER),
    'json-pointer-uri-fragment': bind(JSON_POINTER_URI_FRAGMENT),
    'relative-json-pointer': bind(RELATIVE_JSON_POINTER)
};
const fastFormat = {
    ...fullFormat,
    date: bind(FASTDATE),
    time: bind(FASTTIME),
    'date-time': bind(FASTDATETIME),
    'uri-reference': bind(FASTURIREFERENCE)
};
function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function date(str) {
    const matches = str.match(DATE);
    if (!matches)
        return false;
    const year = +matches[1];
    const month = +matches[2];
    const day = +matches[3];
    return (month >= 1 &&
        month <= 12 &&
        day >= 1 &&
        day <= (month == 2 && isLeapYear(year) ? 29 : DAYS[month]));
}
function time(full, str) {
    const matches = str.match(TIME);
    if (!matches)
        return false;
    const hour = +matches[1];
    const minute = +matches[2];
    const second = +matches[3];
    const timeZone = !!matches[5];
    return (((hour <= 23 && minute <= 59 && second <= 59) ||
        (hour == 23 && minute == 59 && second == 60)) &&
        (!full || timeZone));
}
const DATE_TIME_SEPARATOR = /t|\s/i;
function date_time(str) {
    const dateTime = str.split(DATE_TIME_SEPARATOR);
    return dateTime.length == 2 && date(dateTime[0]) && time(true, dateTime[1]);
}
const NOT_URI_FRAGMENT = /\/|:/;
const URI_PATTERN = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
function uri(str) {
    return NOT_URI_FRAGMENT.test(str) && URI_PATTERN.test(str);
}
const Z_ANCHOR = /[^\\]\\Z/;
function regex(str) {
    if (Z_ANCHOR.test(str))
        return false;
    try {
        new RegExp(str, 'u');
        return true;
    }
    catch (e) {
        return false;
    }
}

;// CONCATENATED MODULE: ./node_modules/@cfworker/json-schema/dist/esm/types.js
var OutputFormat;
(function (OutputFormat) {
    OutputFormat[OutputFormat["Flag"] = 1] = "Flag";
    OutputFormat[OutputFormat["Basic"] = 2] = "Basic";
    OutputFormat[OutputFormat["Detailed"] = 4] = "Detailed";
})(OutputFormat || (OutputFormat = {}));

;// CONCATENATED MODULE: ./node_modules/@cfworker/json-schema/dist/esm/ucs2-length.js
function ucs2length(s) {
    let result = 0;
    let length = s.length;
    let index = 0;
    let charCode;
    while (index < length) {
        result++;
        charCode = s.charCodeAt(index++);
        if (charCode >= 0xd800 && charCode <= 0xdbff && index < length) {
            charCode = s.charCodeAt(index);
            if ((charCode & 0xfc00) == 0xdc00) {
                index++;
            }
        }
    }
    return result;
}

;// CONCATENATED MODULE: ./node_modules/@cfworker/json-schema/dist/esm/validate.js





function validate(instance, schema, draft = '2019-09', lookup = dereference(schema), shortCircuit = true, recursiveAnchor = null, instanceLocation = '#', schemaLocation = '#', evaluated = Object.create(null)) {
    if (schema === true) {
        return { valid: true, errors: [] };
    }
    if (schema === false) {
        return {
            valid: false,
            errors: [
                {
                    instanceLocation,
                    keyword: 'false',
                    keywordLocation: instanceLocation,
                    error: 'False boolean schema.'
                }
            ]
        };
    }
    const rawInstanceType = typeof instance;
    let instanceType;
    switch (rawInstanceType) {
        case 'boolean':
        case 'number':
        case 'string':
            instanceType = rawInstanceType;
            break;
        case 'object':
            if (instance === null) {
                instanceType = 'null';
            }
            else if (Array.isArray(instance)) {
                instanceType = 'array';
            }
            else {
                instanceType = 'object';
            }
            break;
        default:
            throw new Error(`Instances of "${rawInstanceType}" type are not supported.`);
    }
    const { $ref, $recursiveRef, $recursiveAnchor, type: $type, const: $const, enum: $enum, required: $required, not: $not, anyOf: $anyOf, allOf: $allOf, oneOf: $oneOf, if: $if, then: $then, else: $else, format: $format, properties: $properties, patternProperties: $patternProperties, additionalProperties: $additionalProperties, unevaluatedProperties: $unevaluatedProperties, minProperties: $minProperties, maxProperties: $maxProperties, propertyNames: $propertyNames, dependentRequired: $dependentRequired, dependentSchemas: $dependentSchemas, dependencies: $dependencies, prefixItems: $prefixItems, items: $items, additionalItems: $additionalItems, unevaluatedItems: $unevaluatedItems, contains: $contains, minContains: $minContains, maxContains: $maxContains, minItems: $minItems, maxItems: $maxItems, uniqueItems: $uniqueItems, minimum: $minimum, maximum: $maximum, exclusiveMinimum: $exclusiveMinimum, exclusiveMaximum: $exclusiveMaximum, multipleOf: $multipleOf, minLength: $minLength, maxLength: $maxLength, pattern: $pattern, __absolute_ref__, __absolute_recursive_ref__ } = schema;
    const errors = [];
    if ($recursiveAnchor === true && recursiveAnchor === null) {
        recursiveAnchor = schema;
    }
    if ($recursiveRef === '#') {
        const refSchema = recursiveAnchor === null
            ? lookup[__absolute_recursive_ref__]
            : recursiveAnchor;
        const keywordLocation = `${schemaLocation}/$recursiveRef`;
        const result = validate(instance, recursiveAnchor === null ? schema : recursiveAnchor, draft, lookup, shortCircuit, refSchema, instanceLocation, keywordLocation, evaluated);
        if (!result.valid) {
            errors.push({
                instanceLocation,
                keyword: '$recursiveRef',
                keywordLocation,
                error: 'A subschema had errors.'
            }, ...result.errors);
        }
    }
    if ($ref !== undefined) {
        const uri = __absolute_ref__ || $ref;
        const refSchema = lookup[uri];
        if (refSchema === undefined) {
            let message = `Unresolved $ref "${$ref}".`;
            if (__absolute_ref__ && __absolute_ref__ !== $ref) {
                message += `  Absolute URI "${__absolute_ref__}".`;
            }
            message += `\nKnown schemas:\n- ${Object.keys(lookup).join('\n- ')}`;
            throw new Error(message);
        }
        const keywordLocation = `${schemaLocation}/$ref`;
        const result = validate(instance, refSchema, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, keywordLocation, evaluated);
        if (!result.valid) {
            errors.push({
                instanceLocation,
                keyword: '$ref',
                keywordLocation,
                error: 'A subschema had errors.'
            }, ...result.errors);
        }
        if (draft === '4' || draft === '7') {
            return { valid: errors.length === 0, errors };
        }
    }
    if (Array.isArray($type)) {
        let length = $type.length;
        let valid = false;
        for (let i = 0; i < length; i++) {
            if (instanceType === $type[i] ||
                ($type[i] === 'integer' &&
                    instanceType === 'number' &&
                    instance % 1 === 0 &&
                    instance === instance)) {
                valid = true;
                break;
            }
        }
        if (!valid) {
            errors.push({
                instanceLocation,
                keyword: 'type',
                keywordLocation: `${schemaLocation}/type`,
                error: `Instance type "${instanceType}" is invalid. Expected "${$type.join('", "')}".`
            });
        }
    }
    else if ($type === 'integer') {
        if (instanceType !== 'number' || instance % 1 || instance !== instance) {
            errors.push({
                instanceLocation,
                keyword: 'type',
                keywordLocation: `${schemaLocation}/type`,
                error: `Instance type "${instanceType}" is invalid. Expected "${$type}".`
            });
        }
    }
    else if ($type !== undefined && instanceType !== $type) {
        errors.push({
            instanceLocation,
            keyword: 'type',
            keywordLocation: `${schemaLocation}/type`,
            error: `Instance type "${instanceType}" is invalid. Expected "${$type}".`
        });
    }
    if ($const !== undefined) {
        if (instanceType === 'object' || instanceType === 'array') {
            if (!deepCompareStrict(instance, $const)) {
                errors.push({
                    instanceLocation,
                    keyword: 'const',
                    keywordLocation: `${schemaLocation}/const`,
                    error: `Instance does not match ${JSON.stringify($const)}.`
                });
            }
        }
        else if (instance !== $const) {
            errors.push({
                instanceLocation,
                keyword: 'const',
                keywordLocation: `${schemaLocation}/const`,
                error: `Instance does not match ${JSON.stringify($const)}.`
            });
        }
    }
    if ($enum !== undefined) {
        if (instanceType === 'object' || instanceType === 'array') {
            if (!$enum.some(value => deepCompareStrict(instance, value))) {
                errors.push({
                    instanceLocation,
                    keyword: 'enum',
                    keywordLocation: `${schemaLocation}/enum`,
                    error: `Instance does not match any of ${JSON.stringify($enum)}.`
                });
            }
        }
        else if (!$enum.some(value => instance === value)) {
            errors.push({
                instanceLocation,
                keyword: 'enum',
                keywordLocation: `${schemaLocation}/enum`,
                error: `Instance does not match any of ${JSON.stringify($enum)}.`
            });
        }
    }
    if ($not !== undefined) {
        const keywordLocation = `${schemaLocation}/not`;
        const result = validate(instance, $not, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, keywordLocation);
        if (result.valid) {
            errors.push({
                instanceLocation,
                keyword: 'not',
                keywordLocation,
                error: 'Instance matched "not" schema.'
            });
        }
    }
    let subEvaluateds = [];
    if ($anyOf !== undefined) {
        const keywordLocation = `${schemaLocation}/anyOf`;
        const errorsLength = errors.length;
        let anyValid = false;
        for (let i = 0; i < $anyOf.length; i++) {
            const subSchema = $anyOf[i];
            const subEvaluated = Object.create(evaluated);
            const result = validate(instance, subSchema, draft, lookup, shortCircuit, $recursiveAnchor === true ? recursiveAnchor : null, instanceLocation, `${keywordLocation}/${i}`, subEvaluated);
            errors.push(...result.errors);
            anyValid = anyValid || result.valid;
            if (result.valid) {
                subEvaluateds.push(subEvaluated);
            }
        }
        if (anyValid) {
            errors.length = errorsLength;
        }
        else {
            errors.splice(errorsLength, 0, {
                instanceLocation,
                keyword: 'anyOf',
                keywordLocation,
                error: 'Instance does not match any subschemas.'
            });
        }
    }
    if ($allOf !== undefined) {
        const keywordLocation = `${schemaLocation}/allOf`;
        const errorsLength = errors.length;
        let allValid = true;
        for (let i = 0; i < $allOf.length; i++) {
            const subSchema = $allOf[i];
            const subEvaluated = Object.create(evaluated);
            const result = validate(instance, subSchema, draft, lookup, shortCircuit, $recursiveAnchor === true ? recursiveAnchor : null, instanceLocation, `${keywordLocation}/${i}`, subEvaluated);
            errors.push(...result.errors);
            allValid = allValid && result.valid;
            if (result.valid) {
                subEvaluateds.push(subEvaluated);
            }
        }
        if (allValid) {
            errors.length = errorsLength;
        }
        else {
            errors.splice(errorsLength, 0, {
                instanceLocation,
                keyword: 'allOf',
                keywordLocation,
                error: `Instance does not match every subschema.`
            });
        }
    }
    if ($oneOf !== undefined) {
        const keywordLocation = `${schemaLocation}/oneOf`;
        const errorsLength = errors.length;
        const matches = $oneOf.filter((subSchema, i) => {
            const subEvaluated = Object.create(evaluated);
            const result = validate(instance, subSchema, draft, lookup, shortCircuit, $recursiveAnchor === true ? recursiveAnchor : null, instanceLocation, `${keywordLocation}/${i}`, subEvaluated);
            errors.push(...result.errors);
            if (result.valid) {
                subEvaluateds.push(subEvaluated);
            }
            return result.valid;
        }).length;
        if (matches === 1) {
            errors.length = errorsLength;
        }
        else {
            errors.splice(errorsLength, 0, {
                instanceLocation,
                keyword: 'oneOf',
                keywordLocation,
                error: `Instance does not match exactly one subschema (${matches} matches).`
            });
        }
    }
    if (instanceType === 'object' || instanceType === 'array') {
        Object.assign(evaluated, ...subEvaluateds);
    }
    if ($if !== undefined) {
        const keywordLocation = `${schemaLocation}/if`;
        const conditionResult = validate(instance, $if, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, keywordLocation, evaluated).valid;
        if (conditionResult) {
            if ($then !== undefined) {
                const thenResult = validate(instance, $then, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${schemaLocation}/then`, evaluated);
                if (!thenResult.valid) {
                    errors.push({
                        instanceLocation,
                        keyword: 'if',
                        keywordLocation,
                        error: `Instance does not match "then" schema.`
                    }, ...thenResult.errors);
                }
            }
        }
        else if ($else !== undefined) {
            const elseResult = validate(instance, $else, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${schemaLocation}/else`, evaluated);
            if (!elseResult.valid) {
                errors.push({
                    instanceLocation,
                    keyword: 'if',
                    keywordLocation,
                    error: `Instance does not match "else" schema.`
                }, ...elseResult.errors);
            }
        }
    }
    if (instanceType === 'object') {
        if ($required !== undefined) {
            for (const key of $required) {
                if (!(key in instance)) {
                    errors.push({
                        instanceLocation,
                        keyword: 'required',
                        keywordLocation: `${schemaLocation}/required`,
                        error: `Instance does not have required property "${key}".`
                    });
                }
            }
        }
        const keys = Object.keys(instance);
        if ($minProperties !== undefined && keys.length < $minProperties) {
            errors.push({
                instanceLocation,
                keyword: 'minProperties',
                keywordLocation: `${schemaLocation}/minProperties`,
                error: `Instance does not have at least ${$minProperties} properties.`
            });
        }
        if ($maxProperties !== undefined && keys.length > $maxProperties) {
            errors.push({
                instanceLocation,
                keyword: 'maxProperties',
                keywordLocation: `${schemaLocation}/maxProperties`,
                error: `Instance does not have at least ${$maxProperties} properties.`
            });
        }
        if ($propertyNames !== undefined) {
            const keywordLocation = `${schemaLocation}/propertyNames`;
            for (const key in instance) {
                const subInstancePointer = `${instanceLocation}/${encodePointer(key)}`;
                const result = validate(key, $propertyNames, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, keywordLocation);
                if (!result.valid) {
                    errors.push({
                        instanceLocation,
                        keyword: 'propertyNames',
                        keywordLocation,
                        error: `Property name "${key}" does not match schema.`
                    }, ...result.errors);
                }
            }
        }
        if ($dependentRequired !== undefined) {
            const keywordLocation = `${schemaLocation}/dependantRequired`;
            for (const key in $dependentRequired) {
                if (key in instance) {
                    const required = $dependentRequired[key];
                    for (const dependantKey of required) {
                        if (!(dependantKey in instance)) {
                            errors.push({
                                instanceLocation,
                                keyword: 'dependentRequired',
                                keywordLocation,
                                error: `Instance has "${key}" but does not have "${dependantKey}".`
                            });
                        }
                    }
                }
            }
        }
        if ($dependentSchemas !== undefined) {
            for (const key in $dependentSchemas) {
                const keywordLocation = `${schemaLocation}/dependentSchemas`;
                if (key in instance) {
                    const result = validate(instance, $dependentSchemas[key], draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${keywordLocation}/${encodePointer(key)}`, evaluated);
                    if (!result.valid) {
                        errors.push({
                            instanceLocation,
                            keyword: 'dependentSchemas',
                            keywordLocation,
                            error: `Instance has "${key}" but does not match dependant schema.`
                        }, ...result.errors);
                    }
                }
            }
        }
        if ($dependencies !== undefined) {
            const keywordLocation = `${schemaLocation}/dependencies`;
            for (const key in $dependencies) {
                if (key in instance) {
                    const propsOrSchema = $dependencies[key];
                    if (Array.isArray(propsOrSchema)) {
                        for (const dependantKey of propsOrSchema) {
                            if (!(dependantKey in instance)) {
                                errors.push({
                                    instanceLocation,
                                    keyword: 'dependencies',
                                    keywordLocation,
                                    error: `Instance has "${key}" but does not have "${dependantKey}".`
                                });
                            }
                        }
                    }
                    else {
                        const result = validate(instance, propsOrSchema, draft, lookup, shortCircuit, recursiveAnchor, instanceLocation, `${keywordLocation}/${encodePointer(key)}`);
                        if (!result.valid) {
                            errors.push({
                                instanceLocation,
                                keyword: 'dependencies',
                                keywordLocation,
                                error: `Instance has "${key}" but does not match dependant schema.`
                            }, ...result.errors);
                        }
                    }
                }
            }
        }
        const thisEvaluated = Object.create(null);
        let stop = false;
        if ($properties !== undefined) {
            const keywordLocation = `${schemaLocation}/properties`;
            for (const key in $properties) {
                if (!(key in instance)) {
                    continue;
                }
                const subInstancePointer = `${instanceLocation}/${encodePointer(key)}`;
                const result = validate(instance[key], $properties[key], draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, `${keywordLocation}/${encodePointer(key)}`);
                if (result.valid) {
                    evaluated[key] = thisEvaluated[key] = true;
                }
                else {
                    stop = shortCircuit;
                    errors.push({
                        instanceLocation,
                        keyword: 'properties',
                        keywordLocation,
                        error: `Property "${key}" does not match schema.`
                    }, ...result.errors);
                    if (stop)
                        break;
                }
            }
        }
        if (!stop && $patternProperties !== undefined) {
            const keywordLocation = `${schemaLocation}/patternProperties`;
            for (const pattern in $patternProperties) {
                const regex = new RegExp(pattern, 'u');
                const subSchema = $patternProperties[pattern];
                for (const key in instance) {
                    if (!regex.test(key)) {
                        continue;
                    }
                    const subInstancePointer = `${instanceLocation}/${encodePointer(key)}`;
                    const result = validate(instance[key], subSchema, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, `${keywordLocation}/${encodePointer(pattern)}`);
                    if (result.valid) {
                        evaluated[key] = thisEvaluated[key] = true;
                    }
                    else {
                        stop = shortCircuit;
                        errors.push({
                            instanceLocation,
                            keyword: 'patternProperties',
                            keywordLocation,
                            error: `Property "${key}" matches pattern "${pattern}" but does not match associated schema.`
                        }, ...result.errors);
                    }
                }
            }
        }
        if (!stop && $additionalProperties !== undefined) {
            const keywordLocation = `${schemaLocation}/additionalProperties`;
            for (const key in instance) {
                if (thisEvaluated[key]) {
                    continue;
                }
                const subInstancePointer = `${instanceLocation}/${encodePointer(key)}`;
                const result = validate(instance[key], $additionalProperties, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, keywordLocation);
                if (result.valid) {
                    evaluated[key] = true;
                }
                else {
                    stop = shortCircuit;
                    errors.push({
                        instanceLocation,
                        keyword: 'additionalProperties',
                        keywordLocation,
                        error: `Property "${key}" does not match additional properties schema.`
                    }, ...result.errors);
                }
            }
        }
        else if (!stop && $unevaluatedProperties !== undefined) {
            const keywordLocation = `${schemaLocation}/unevaluatedProperties`;
            for (const key in instance) {
                if (!evaluated[key]) {
                    const subInstancePointer = `${instanceLocation}/${encodePointer(key)}`;
                    const result = validate(instance[key], $unevaluatedProperties, draft, lookup, shortCircuit, recursiveAnchor, subInstancePointer, keywordLocation);
                    if (result.valid) {
                        evaluated[key] = true;
                    }
                    else {
                        errors.push({
                            instanceLocation,
                            keyword: 'unevaluatedProperties',
                            keywordLocation,
                            error: `Property "${key}" does not match unevaluated properties schema.`
                        }, ...result.errors);
                    }
                }
            }
        }
    }
    else if (instanceType === 'array') {
        if ($maxItems !== undefined && instance.length > $maxItems) {
            errors.push({
                instanceLocation,
                keyword: 'maxItems',
                keywordLocation: `${schemaLocation}/maxItems`,
                error: `Array has too many items (${instance.length} > ${$maxItems}).`
            });
        }
        if ($minItems !== undefined && instance.length < $minItems) {
            errors.push({
                instanceLocation,
                keyword: 'minItems',
                keywordLocation: `${schemaLocation}/minItems`,
                error: `Array has too few items (${instance.length} < ${$minItems}).`
            });
        }
        const length = instance.length;
        let i = 0;
        let stop = false;
        if ($prefixItems !== undefined) {
            const keywordLocation = `${schemaLocation}/prefixItems`;
            const length2 = Math.min($prefixItems.length, length);
            for (; i < length2; i++) {
                const result = validate(instance[i], $prefixItems[i], draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, `${keywordLocation}/${i}`);
                evaluated[i] = true;
                if (!result.valid) {
                    stop = shortCircuit;
                    errors.push({
                        instanceLocation,
                        keyword: 'prefixItems',
                        keywordLocation,
                        error: `Items did not match schema.`
                    }, ...result.errors);
                    if (stop)
                        break;
                }
            }
        }
        if ($items !== undefined) {
            const keywordLocation = `${schemaLocation}/items`;
            if (Array.isArray($items)) {
                const length2 = Math.min($items.length, length);
                for (; i < length2; i++) {
                    const result = validate(instance[i], $items[i], draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, `${keywordLocation}/${i}`);
                    evaluated[i] = true;
                    if (!result.valid) {
                        stop = shortCircuit;
                        errors.push({
                            instanceLocation,
                            keyword: 'items',
                            keywordLocation,
                            error: `Items did not match schema.`
                        }, ...result.errors);
                        if (stop)
                            break;
                    }
                }
            }
            else {
                for (; i < length; i++) {
                    const result = validate(instance[i], $items, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, keywordLocation);
                    evaluated[i] = true;
                    if (!result.valid) {
                        stop = shortCircuit;
                        errors.push({
                            instanceLocation,
                            keyword: 'items',
                            keywordLocation,
                            error: `Items did not match schema.`
                        }, ...result.errors);
                        if (stop)
                            break;
                    }
                }
            }
            if (!stop && $additionalItems !== undefined) {
                const keywordLocation = `${schemaLocation}/additionalItems`;
                for (; i < length; i++) {
                    const result = validate(instance[i], $additionalItems, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, keywordLocation);
                    evaluated[i] = true;
                    if (!result.valid) {
                        stop = shortCircuit;
                        errors.push({
                            instanceLocation,
                            keyword: 'additionalItems',
                            keywordLocation,
                            error: `Items did not match additional items schema.`
                        }, ...result.errors);
                    }
                }
            }
        }
        if ($contains !== undefined) {
            if (length === 0 && $minContains === undefined) {
                errors.push({
                    instanceLocation,
                    keyword: 'contains',
                    keywordLocation: `${schemaLocation}/contains`,
                    error: `Array is empty. It must contain at least one item matching the schema.`
                });
            }
            else if ($minContains !== undefined && length < $minContains) {
                errors.push({
                    instanceLocation,
                    keyword: 'minContains',
                    keywordLocation: `${schemaLocation}/minContains`,
                    error: `Array has less items (${length}) than minContains (${$minContains}).`
                });
            }
            else {
                const keywordLocation = `${schemaLocation}/contains`;
                const errorsLength = errors.length;
                let contained = 0;
                for (let j = 0; j < length; j++) {
                    const result = validate(instance[j], $contains, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${j}`, keywordLocation);
                    if (result.valid) {
                        evaluated[j] = true;
                        contained++;
                    }
                    else {
                        errors.push(...result.errors);
                    }
                }
                if (contained >= ($minContains || 0)) {
                    errors.length = errorsLength;
                }
                if ($minContains === undefined &&
                    $maxContains === undefined &&
                    contained === 0) {
                    errors.splice(errorsLength, 0, {
                        instanceLocation,
                        keyword: 'contains',
                        keywordLocation,
                        error: `Array does not contain item matching schema.`
                    });
                }
                else if ($minContains !== undefined && contained < $minContains) {
                    errors.push({
                        instanceLocation,
                        keyword: 'minContains',
                        keywordLocation: `${schemaLocation}/minContains`,
                        error: `Array must contain at least ${$minContains} items matching schema. Only ${contained} items were found.`
                    });
                }
                else if ($maxContains !== undefined && contained > $maxContains) {
                    errors.push({
                        instanceLocation,
                        keyword: 'maxContains',
                        keywordLocation: `${schemaLocation}/maxContains`,
                        error: `Array may contain at most ${$maxContains} items matching schema. ${contained} items were found.`
                    });
                }
            }
        }
        if (!stop && $unevaluatedItems !== undefined) {
            const keywordLocation = `${schemaLocation}/unevaluatedItems`;
            for (i; i < length; i++) {
                if (evaluated[i]) {
                    continue;
                }
                const result = validate(instance[i], $unevaluatedItems, draft, lookup, shortCircuit, recursiveAnchor, `${instanceLocation}/${i}`, keywordLocation);
                evaluated[i] = true;
                if (!result.valid) {
                    errors.push({
                        instanceLocation,
                        keyword: 'unevaluatedItems',
                        keywordLocation,
                        error: `Items did not match unevaluated items schema.`
                    }, ...result.errors);
                }
            }
        }
        if ($uniqueItems) {
            for (let j = 0; j < length; j++) {
                const a = instance[j];
                const ao = typeof a === 'object' && a !== null;
                for (let k = 0; k < length; k++) {
                    if (j === k) {
                        continue;
                    }
                    const b = instance[k];
                    const bo = typeof b === 'object' && b !== null;
                    if (a === b || (ao && bo && deepCompareStrict(a, b))) {
                        errors.push({
                            instanceLocation,
                            keyword: 'uniqueItems',
                            keywordLocation: `${schemaLocation}/uniqueItems`,
                            error: `Duplicate items at indexes ${j} and ${k}.`
                        });
                        j = Number.MAX_SAFE_INTEGER;
                        k = Number.MAX_SAFE_INTEGER;
                    }
                }
            }
        }
    }
    else if (instanceType === 'number') {
        if (draft === '4') {
            if ($minimum !== undefined &&
                (($exclusiveMinimum === true && instance <= $minimum) ||
                    instance < $minimum)) {
                errors.push({
                    instanceLocation,
                    keyword: 'minimum',
                    keywordLocation: `${schemaLocation}/minimum`,
                    error: `${instance} is less than ${$exclusiveMinimum ? 'or equal to ' : ''} ${$minimum}.`
                });
            }
            if ($maximum !== undefined &&
                (($exclusiveMaximum === true && instance >= $maximum) ||
                    instance > $maximum)) {
                errors.push({
                    instanceLocation,
                    keyword: 'maximum',
                    keywordLocation: `${schemaLocation}/maximum`,
                    error: `${instance} is greater than ${$exclusiveMaximum ? 'or equal to ' : ''} ${$maximum}.`
                });
            }
        }
        else {
            if ($minimum !== undefined && instance < $minimum) {
                errors.push({
                    instanceLocation,
                    keyword: 'minimum',
                    keywordLocation: `${schemaLocation}/minimum`,
                    error: `${instance} is less than ${$minimum}.`
                });
            }
            if ($maximum !== undefined && instance > $maximum) {
                errors.push({
                    instanceLocation,
                    keyword: 'maximum',
                    keywordLocation: `${schemaLocation}/maximum`,
                    error: `${instance} is greater than ${$maximum}.`
                });
            }
            if ($exclusiveMinimum !== undefined && instance <= $exclusiveMinimum) {
                errors.push({
                    instanceLocation,
                    keyword: 'exclusiveMinimum',
                    keywordLocation: `${schemaLocation}/exclusiveMinimum`,
                    error: `${instance} is less than ${$exclusiveMinimum}.`
                });
            }
            if ($exclusiveMaximum !== undefined && instance >= $exclusiveMaximum) {
                errors.push({
                    instanceLocation,
                    keyword: 'exclusiveMaximum',
                    keywordLocation: `${schemaLocation}/exclusiveMaximum`,
                    error: `${instance} is greater than or equal to ${$exclusiveMaximum}.`
                });
            }
        }
        if ($multipleOf !== undefined) {
            const remainder = instance % $multipleOf;
            if (Math.abs(0 - remainder) >= 1.1920929e-7 &&
                Math.abs($multipleOf - remainder) >= 1.1920929e-7) {
                errors.push({
                    instanceLocation,
                    keyword: 'multipleOf',
                    keywordLocation: `${schemaLocation}/multipleOf`,
                    error: `${instance} is not a multiple of ${$multipleOf}.`
                });
            }
        }
    }
    else if (instanceType === 'string') {
        const length = $minLength === undefined && $maxLength === undefined
            ? 0
            : ucs2length(instance);
        if ($minLength !== undefined && length < $minLength) {
            errors.push({
                instanceLocation,
                keyword: 'minLength',
                keywordLocation: `${schemaLocation}/minLength`,
                error: `String is too short (${length} < ${$minLength}).`
            });
        }
        if ($maxLength !== undefined && length > $maxLength) {
            errors.push({
                instanceLocation,
                keyword: 'maxLength',
                keywordLocation: `${schemaLocation}/maxLength`,
                error: `String is too long (${length} > ${$maxLength}).`
            });
        }
        if ($pattern !== undefined && !new RegExp($pattern, 'u').test(instance)) {
            errors.push({
                instanceLocation,
                keyword: 'pattern',
                keywordLocation: `${schemaLocation}/pattern`,
                error: `String does not match pattern.`
            });
        }
        if ($format !== undefined &&
            fastFormat[$format] &&
            !fastFormat[$format](instance)) {
            errors.push({
                instanceLocation,
                keyword: 'format',
                keywordLocation: `${schemaLocation}/format`,
                error: `String does not match format "${$format}".`
            });
        }
    }
    return { valid: errors.length === 0, errors };
}

;// CONCATENATED MODULE: ./node_modules/@cfworker/json-schema/dist/esm/validator.js


class Validator {
    schema;
    draft;
    shortCircuit;
    lookup;
    constructor(schema, draft = '2019-09', shortCircuit = true) {
        this.schema = schema;
        this.draft = draft;
        this.shortCircuit = shortCircuit;
        this.lookup = dereference(schema);
    }
    validate(instance) {
        return validate(instance, this.schema, this.draft, this.lookup, this.shortCircuit);
    }
    addSchema(schema, id) {
        if (id) {
            schema = { ...schema, $id: id };
        }
        dereference(schema, this.lookup);
    }
}

;// CONCATENATED MODULE: ./node_modules/@cfworker/json-schema/dist/esm/index.js









// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/messages/base.js
var messages_base = __webpack_require__(34013);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/output_parsers/transform.js





/**
 * Class to parse the output of an LLM call that also allows streaming inputs.
 */
class BaseTransformOutputParser extends BaseOutputParser {
    async *_transform(inputGenerator) {
        for await (const chunk of inputGenerator) {
            if (typeof chunk === "string") {
                yield this.parseResult([{ text: chunk }]);
            }
            else {
                yield this.parseResult([
                    {
                        message: chunk,
                        text: this._baseMessageToString(chunk),
                    },
                ]);
            }
        }
    }
    /**
     * Transforms an asynchronous generator of input into an asynchronous
     * generator of parsed output.
     * @param inputGenerator An asynchronous generator of input.
     * @param options A configuration object.
     * @returns An asynchronous generator of parsed output.
     */
    async *transform(inputGenerator, options) {
        yield* this._transformStreamWithConfig(inputGenerator, this._transform.bind(this), {
            ...options,
            runType: "parser",
        });
    }
}
/**
 * A base class for output parsers that can handle streaming input. It
 * extends the `BaseTransformOutputParser` class and provides a method for
 * converting parsed outputs into a diff format.
 */
class BaseCumulativeTransformOutputParser extends BaseTransformOutputParser {
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "diff", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        this.diff = fields?.diff ?? this.diff;
    }
    async *_transform(inputGenerator) {
        let prevParsed;
        let accGen;
        for await (const chunk of inputGenerator) {
            if (typeof chunk !== "string" && typeof chunk.content !== "string") {
                throw new Error("Cannot handle non-string output.");
            }
            let chunkGen;
            if ((0,messages_base/* isBaseMessageChunk */.AJ)(chunk)) {
                if (typeof chunk.content !== "string") {
                    throw new Error("Cannot handle non-string message output.");
                }
                chunkGen = new outputs.ChatGenerationChunk({
                    message: chunk,
                    text: chunk.content,
                });
            }
            else if ((0,messages_base/* isBaseMessage */.ny)(chunk)) {
                if (typeof chunk.content !== "string") {
                    throw new Error("Cannot handle non-string message output.");
                }
                chunkGen = new outputs.ChatGenerationChunk({
                    message: (0,utils/* convertToChunk */.ih)(chunk),
                    text: chunk.content,
                });
            }
            else {
                chunkGen = new outputs.GenerationChunk({ text: chunk });
            }
            if (accGen === undefined) {
                accGen = chunkGen;
            }
            else {
                accGen = accGen.concat(chunkGen);
            }
            const parsed = await this.parsePartialResult([accGen]);
            if (parsed !== undefined &&
                parsed !== null &&
                !deepCompareStrict(parsed, prevParsed)) {
                if (this.diff) {
                    yield this._diff(prevParsed, parsed);
                }
                else {
                    yield parsed;
                }
                prevParsed = parsed;
            }
        }
    }
    getFormatInstructions() {
        return "";
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/output_parsers/bytes.js

/**
 * OutputParser that parses LLMResult into the top likely string and
 * encodes it into bytes.
 */
class BytesOutputParser extends BaseTransformOutputParser {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "output_parsers", "bytes"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "textEncoder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new TextEncoder()
        });
    }
    static lc_name() {
        return "BytesOutputParser";
    }
    parse(text) {
        return Promise.resolve(this.textEncoder.encode(text));
    }
    getFormatInstructions() {
        return "";
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/output_parsers/list.js


/**
 * Class to parse the output of an LLM call to a list.
 * @augments BaseOutputParser
 */
class ListOutputParser extends BaseTransformOutputParser {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "re", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
    }
    async *_transform(inputGenerator) {
        let buffer = "";
        for await (const input of inputGenerator) {
            if (typeof input === "string") {
                // add current chunk to buffer
                buffer += input;
            }
            else {
                // extract message content and add to buffer
                buffer += input.content;
            }
            // get parts in buffer
            if (!this.re) {
                const parts = await this.parse(buffer);
                if (parts.length > 1) {
                    // if there are multiple parts, yield all but the last one
                    for (const part of parts.slice(0, -1)) {
                        yield [part];
                    }
                    // keep the last part in the buffer
                    buffer = parts[parts.length - 1];
                }
            }
            else {
                // if there is a regex, get all matches
                const matches = [...buffer.matchAll(this.re)];
                if (matches.length > 1) {
                    let doneIdx = 0;
                    // if there are multiple matches, yield all but the last one
                    for (const match of matches.slice(0, -1)) {
                        yield [match[1]];
                        doneIdx += (match.index ?? 0) + match[0].length;
                    }
                    // keep the last match in the buffer
                    buffer = buffer.slice(doneIdx);
                }
            }
        }
        // yield the last part
        for (const part of await this.parse(buffer)) {
            yield [part];
        }
    }
}
/**
 * Class to parse the output of an LLM call as a comma-separated list.
 * @augments ListOutputParser
 */
class CommaSeparatedListOutputParser extends ListOutputParser {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "output_parsers", "list"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
    }
    static lc_name() {
        return "CommaSeparatedListOutputParser";
    }
    /**
     * Parses the given text into an array of strings, using a comma as the
     * separator. If the parsing fails, throws an OutputParserException.
     * @param text The text to parse.
     * @returns An array of strings obtained by splitting the input text at each comma.
     */
    async parse(text) {
        try {
            return text
                .trim()
                .split(",")
                .map((s) => s.trim());
        }
        catch (e) {
            throw new OutputParserException(`Could not parse output: ${text}`, text);
        }
    }
    /**
     * Provides instructions on the expected format of the response for the
     * CommaSeparatedListOutputParser.
     * @returns A string containing instructions on the expected format of the response.
     */
    getFormatInstructions() {
        return `Your response should be a list of comma separated values, eg: \`foo, bar, baz\``;
    }
}
/**
 * Class to parse the output of an LLM call to a list with a specific length and separator.
 * @augments ListOutputParser
 */
class CustomListOutputParser extends ListOutputParser {
    constructor({ length, separator }) {
        super(...arguments);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "output_parsers", "list"]
        });
        Object.defineProperty(this, "length", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "separator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.length = length;
        this.separator = separator || ",";
    }
    /**
     * Parses the given text into an array of strings, using the specified
     * separator. If the parsing fails or the number of items in the list
     * doesn't match the expected length, throws an OutputParserException.
     * @param text The text to parse.
     * @returns An array of strings obtained by splitting the input text at each occurrence of the specified separator.
     */
    async parse(text) {
        try {
            const items = text
                .trim()
                .split(this.separator)
                .map((s) => s.trim());
            if (this.length !== undefined && items.length !== this.length) {
                throw new OutputParserException(`Incorrect number of items. Expected ${this.length}, got ${items.length}.`);
            }
            return items;
        }
        catch (e) {
            if (Object.getPrototypeOf(e) === OutputParserException.prototype) {
                throw e;
            }
            throw new OutputParserException(`Could not parse output: ${text}`);
        }
    }
    /**
     * Provides instructions on the expected format of the response for the
     * CustomListOutputParser, including the number of items and the
     * separator.
     * @returns A string containing instructions on the expected format of the response.
     */
    getFormatInstructions() {
        return `Your response should be a list of ${this.length === undefined ? "" : `${this.length} `}items separated by "${this.separator}" (eg: \`foo${this.separator} bar${this.separator} baz\`)`;
    }
}
class NumberedListOutputParser extends ListOutputParser {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "output_parsers", "list"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "re", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: /\d+\.\s([^\n]+)/g
        });
    }
    static lc_name() {
        return "NumberedListOutputParser";
    }
    getFormatInstructions() {
        return `Your response should be a numbered list with each item on a new line. For example: \n\n1. foo\n\n2. bar\n\n3. baz`;
    }
    async parse(text) {
        return [...(text.matchAll(this.re) ?? [])].map((m) => m[1]);
    }
}
class MarkdownListOutputParser extends ListOutputParser {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "output_parsers", "list"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "re", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: /^\s*[-*]\s([^\n]+)$/gm
        });
    }
    static lc_name() {
        return "NumberedListOutputParser";
    }
    getFormatInstructions() {
        return `Your response should be a numbered list with each item on a new line. For example: \n\n1. foo\n\n2. bar\n\n3. baz`;
    }
    async parse(text) {
        return [...(text.matchAll(this.re) ?? [])].map((m) => m[1]);
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/output_parsers/string.js

/**
 * OutputParser that parses LLMResult into the top likely string.
 * @example
 * ```typescript
 * const promptTemplate = PromptTemplate.fromTemplate(
 *   "Tell me a joke about {topic}",
 * );
 *
 * const chain = RunnableSequence.from([
 *   promptTemplate,
 *   new ChatOpenAI({}),
 *   new StringOutputParser(),
 * ]);
 *
 * const result = await chain.invoke({ topic: "bears" });
 * console.log("What do you call a bear with no teeth? A gummy bear!");
 * ```
 */
class StringOutputParser extends BaseTransformOutputParser {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "output_parsers", "string"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
    }
    static lc_name() {
        return "StrOutputParser";
    }
    /**
     * Parses a string output from an LLM call. This method is meant to be
     * implemented by subclasses to define how a string output from an LLM
     * should be parsed.
     * @param text The string output from an LLM call.
     * @param callbacks Optional callbacks.
     * @returns A promise of the parsed output.
     */
    parse(text) {
        return Promise.resolve(text);
    }
    getFormatInstructions() {
        return "";
    }
    _textContentToString(content) {
        return content.text;
    }
    _imageUrlContentToString(_content) {
        throw new Error(`Cannot coerce a multimodal "image_url" message part into a string.`);
    }
    _messageContentComplexToString(content) {
        switch (content.type) {
            case "text":
            case "text_delta":
                if ("text" in content) {
                    // Type guard for MessageContentText
                    return this._textContentToString(content);
                }
                break;
            case "image_url":
                if ("image_url" in content) {
                    // Type guard for MessageContentImageUrl
                    return this._imageUrlContentToString(content);
                }
                break;
            default:
                throw new Error(`Cannot coerce "${content.type}" message part into a string.`);
        }
        throw new Error(`Invalid content type: ${content.type}`);
    }
    _baseMessageContentToString(content) {
        return content.reduce((acc, item) => acc + this._messageContentComplexToString(item), "");
    }
}

// EXTERNAL MODULE: ./node_modules/zod/lib/index.mjs
var lib = __webpack_require__(54383);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/output_parsers/structured.js



class StructuredOutputParser extends BaseOutputParser {
    static lc_name() {
        return "StructuredOutputParser";
    }
    toJSON() {
        return this.toJSONNotImplemented();
    }
    constructor(schema) {
        super(schema);
        Object.defineProperty(this, "schema", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: schema
        });
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain", "output_parsers", "structured"]
        });
    }
    /**
     * Creates a new StructuredOutputParser from a Zod schema.
     * @param schema The Zod schema which the output should match
     * @returns A new instance of StructuredOutputParser.
     */
    static fromZodSchema(schema) {
        return new this(schema);
    }
    /**
     * Creates a new StructuredOutputParser from a set of names and
     * descriptions.
     * @param schemas An object where each key is a name and each value is a description
     * @returns A new instance of StructuredOutputParser.
     */
    static fromNamesAndDescriptions(schemas) {
        const zodSchema = lib.z.object(Object.fromEntries(Object.entries(schemas).map(([name, description]) => [name, lib.z.string().describe(description)])));
        return new this(zodSchema);
    }
    /**
     * Returns a markdown code snippet with a JSON object formatted according
     * to the schema.
     * @param options Optional. The options for formatting the instructions
     * @returns A markdown code snippet with a JSON object formatted according to the schema.
     */
    getFormatInstructions() {
        return `You must format your output as a JSON value that adheres to a given "JSON Schema" instance.

"JSON Schema" is a declarative language that allows you to annotate and validate JSON documents.

For example, the example "JSON Schema" instance {{"properties": {{"foo": {{"description": "a list of test words", "type": "array", "items": {{"type": "string"}}}}}}, "required": ["foo"]}}}}
would match an object with one required property, "foo". The "type" property specifies "foo" must be an "array", and the "description" property semantically describes it as "a list of test words". The items within "foo" must be strings.
Thus, the object {{"foo": ["bar", "baz"]}} is a well-formatted instance of this example "JSON Schema". The object {{"properties": {{"foo": ["bar", "baz"]}}}} is not well-formatted.

Your output will be parsed and type-checked according to the provided schema instance, so make sure all fields in your output match the schema exactly and there are no trailing commas!

Here is the JSON Schema instance your output must adhere to. Include the enclosing markdown codeblock:
\`\`\`json
${JSON.stringify((0,esm/* zodToJsonSchema */.Ik)(this.schema))}
\`\`\`
`;
    }
    /**
     * Parses the given text according to the schema.
     * @param text The text to parse
     * @returns The parsed output.
     */
    async parse(text) {
        try {
            const json = text.includes("```")
                ? text.trim().split(/```(?:json)?/)[1]
                : text.trim();
            const escapedJson = json
                .replace(/"([^"\\]*(\\.[^"\\]*)*)"/g, (_match, capturedGroup) => {
                const escapedInsideQuotes = capturedGroup.replace(/\n/g, "\\n");
                return `"${escapedInsideQuotes}"`;
            })
                .replace(/\n/g, "");
            return await this.schema.parseAsync(JSON.parse(escapedJson));
        }
        catch (e) {
            throw new OutputParserException(`Failed to parse. Text: "${text}". Error: ${e}`, text);
        }
    }
}
/**
 * A specific type of `StructuredOutputParser` that parses JSON data
 * formatted as a markdown code snippet.
 */
class JsonMarkdownStructuredOutputParser extends StructuredOutputParser {
    static lc_name() {
        return "JsonMarkdownStructuredOutputParser";
    }
    getFormatInstructions(options) {
        const interpolationDepth = options?.interpolationDepth ?? 1;
        if (interpolationDepth < 1) {
            throw new Error("f string interpolation depth must be at least 1");
        }
        return `Return a markdown code snippet with a JSON object formatted to look like:\n\`\`\`json\n${this._schemaToInstruction((0,esm/* zodToJsonSchema */.Ik)(this.schema))
            .replaceAll("{", "{".repeat(interpolationDepth))
            .replaceAll("}", "}".repeat(interpolationDepth))}\n\`\`\``;
    }
    _schemaToInstruction(schemaInput, indent = 2) {
        const schema = schemaInput;
        if ("type" in schema) {
            let nullable = false;
            let type;
            if (Array.isArray(schema.type)) {
                const nullIdx = schema.type.findIndex((type) => type === "null");
                if (nullIdx !== -1) {
                    nullable = true;
                    schema.type.splice(nullIdx, 1);
                }
                type = schema.type.join(" | ");
            }
            else {
                type = schema.type;
            }
            if (schema.type === "object" && schema.properties) {
                const description = schema.description
                    ? ` // ${schema.description}`
                    : "";
                const properties = Object.entries(schema.properties)
                    .map(([key, value]) => {
                    const isOptional = schema.required?.includes(key)
                        ? ""
                        : " (optional)";
                    return `${" ".repeat(indent)}"${key}": ${this._schemaToInstruction(value, indent + 2)}${isOptional}`;
                })
                    .join("\n");
                return `{\n${properties}\n${" ".repeat(indent - 2)}}${description}`;
            }
            if (schema.type === "array" && schema.items) {
                const description = schema.description
                    ? ` // ${schema.description}`
                    : "";
                return `array[\n${" ".repeat(indent)}${this._schemaToInstruction(schema.items, indent + 2)}\n${" ".repeat(indent - 2)}] ${description}`;
            }
            const isNullable = nullable ? " (nullable)" : "";
            const description = schema.description ? ` // ${schema.description}` : "";
            return `${type}${description}${isNullable}`;
        }
        if ("anyOf" in schema) {
            return schema.anyOf
                .map((s) => this._schemaToInstruction(s, indent))
                .join(`\n${" ".repeat(indent - 2)}`);
        }
        throw new Error("unsupported schema type");
    }
    static fromZodSchema(schema) {
        return new this(schema);
    }
    static fromNamesAndDescriptions(schemas) {
        const zodSchema = lib.z.object(Object.fromEntries(Object.entries(schemas).map(([name, description]) => [name, lib.z.string().describe(description)])));
        return new this(zodSchema);
    }
}
/**
 * A type of `StructuredOutputParser` that handles asymmetric input and
 * output schemas.
 */
class AsymmetricStructuredOutputParser extends BaseOutputParser {
    constructor({ inputSchema }) {
        super(...arguments);
        Object.defineProperty(this, "structuredInputParser", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.structuredInputParser = new JsonMarkdownStructuredOutputParser(inputSchema);
    }
    async parse(text) {
        let parsedInput;
        try {
            parsedInput = await this.structuredInputParser.parse(text);
        }
        catch (e) {
            throw new OutputParserException(`Failed to parse. Text: "${text}". Error: ${e}`, text);
        }
        return this.outputProcessor(parsedInput);
    }
    getFormatInstructions() {
        return this.structuredInputParser.getFormatInstructions();
    }
}

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/utils/fast-json-patch/index.js + 3 modules
var fast_json_patch = __webpack_require__(67954);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/json_patch.js


// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/utils/json.js
var json = __webpack_require__(31225);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/output_parsers/json.js



/**
 * Class for parsing the output of an LLM into a JSON object.
 */
class JsonOutputParser extends BaseCumulativeTransformOutputParser {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "output_parsers"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
    }
    static lc_name() {
        return "JsonOutputParser";
    }
    _diff(prev, next) {
        if (!next) {
            return undefined;
        }
        if (!prev) {
            return [{ op: "replace", path: "", value: next }];
        }
        return (0,fast_json_patch/* compare */.UD)(prev, next);
    }
    // This should actually return Partial<T>, but there's no way
    // to specify emitted chunks as instances separate from the main output type.
    async parsePartialResult(generations) {
        return (0,json/* parseJsonMarkdown */.D)(generations[0].text);
    }
    async parse(text) {
        return (0,json/* parseJsonMarkdown */.D)(text, JSON.parse);
    }
    getFormatInstructions() {
        return "";
    }
}


;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/sax-js/sax.js
// @ts-nocheck
// Inlined to deal with portability issues
// Originally from: https://github.com/isaacs/sax-js
const initializeSax = function () {
    const sax = {};
    sax.parser = function (strict, opt) {
        return new SAXParser(strict, opt);
    };
    sax.SAXParser = SAXParser;
    sax.SAXStream = SAXStream;
    sax.createStream = createStream;
    // When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
    // When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
    // since that's the earliest that a buffer overrun could occur.  This way, checks are
    // as rare as required, but as often as necessary to ensure never crossing this bound.
    // Furthermore, buffers are only tested at most once per write(), so passing a very
    // large string into write() might have undesirable effects, but this is manageable by
    // the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
    // edge case, result in creating at most one complete copy of the string passed in.
    // Set to Infinity to have unlimited buffers.
    sax.MAX_BUFFER_LENGTH = 64 * 1024;
    const buffers = [
        "comment",
        "sgmlDecl",
        "textNode",
        "tagName",
        "doctype",
        "procInstName",
        "procInstBody",
        "entity",
        "attribName",
        "attribValue",
        "cdata",
        "script",
    ];
    sax.EVENTS = [
        "text",
        "processinginstruction",
        "sgmldeclaration",
        "doctype",
        "comment",
        "opentagstart",
        "attribute",
        "opentag",
        "closetag",
        "opencdata",
        "cdata",
        "closecdata",
        "error",
        "end",
        "ready",
        "script",
        "opennamespace",
        "closenamespace",
    ];
    function SAXParser(strict, opt) {
        if (!(this instanceof SAXParser)) {
            return new SAXParser(strict, opt);
        }
        var parser = this;
        clearBuffers(parser);
        parser.q = parser.c = "";
        parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
        parser.opt = opt || {};
        parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
        parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase";
        parser.tags = [];
        parser.closed = parser.closedRoot = parser.sawRoot = false;
        parser.tag = parser.error = null;
        parser.strict = !!strict;
        parser.noscript = !!(strict || parser.opt.noscript);
        parser.state = S.BEGIN;
        parser.strictEntities = parser.opt.strictEntities;
        parser.ENTITIES = parser.strictEntities
            ? Object.create(sax.XML_ENTITIES)
            : Object.create(sax.ENTITIES);
        parser.attribList = [];
        // namespaces form a prototype chain.
        // it always points at the current tag,
        // which protos to its parent tag.
        if (parser.opt.xmlns) {
            parser.ns = Object.create(rootNS);
        }
        // mostly just for error reporting
        parser.trackPosition = parser.opt.position !== false;
        if (parser.trackPosition) {
            parser.position = parser.line = parser.column = 0;
        }
        emit(parser, "onready");
    }
    if (!Object.create) {
        Object.create = function (o) {
            function F() { }
            F.prototype = o;
            var newf = new F();
            return newf;
        };
    }
    if (!Object.keys) {
        Object.keys = function (o) {
            var a = [];
            for (var i in o)
                if (o.hasOwnProperty(i))
                    a.push(i);
            return a;
        };
    }
    function checkBufferLength(parser) {
        var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
        var maxActual = 0;
        for (var i = 0, l = buffers.length; i < l; i++) {
            var len = parser[buffers[i]].length;
            if (len > maxAllowed) {
                // Text/cdata nodes can get big, and since they're buffered,
                // we can get here under normal conditions.
                // Avoid issues by emitting the text node now,
                // so at least it won't get any bigger.
                switch (buffers[i]) {
                    case "textNode":
                        closeText(parser);
                        break;
                    case "cdata":
                        emitNode(parser, "oncdata", parser.cdata);
                        parser.cdata = "";
                        break;
                    case "script":
                        emitNode(parser, "onscript", parser.script);
                        parser.script = "";
                        break;
                    default:
                        error(parser, "Max buffer length exceeded: " + buffers[i]);
                }
            }
            maxActual = Math.max(maxActual, len);
        }
        // schedule the next check for the earliest possible buffer overrun.
        var m = sax.MAX_BUFFER_LENGTH - maxActual;
        parser.bufferCheckPosition = m + parser.position;
    }
    function clearBuffers(parser) {
        for (var i = 0, l = buffers.length; i < l; i++) {
            parser[buffers[i]] = "";
        }
    }
    function flushBuffers(parser) {
        closeText(parser);
        if (parser.cdata !== "") {
            emitNode(parser, "oncdata", parser.cdata);
            parser.cdata = "";
        }
        if (parser.script !== "") {
            emitNode(parser, "onscript", parser.script);
            parser.script = "";
        }
    }
    SAXParser.prototype = {
        end: function () {
            end(this);
        },
        write: write,
        resume: function () {
            this.error = null;
            return this;
        },
        close: function () {
            return this.write(null);
        },
        flush: function () {
            flushBuffers(this);
        },
    };
    var Stream = ReadableStream;
    if (!Stream)
        Stream = function () { };
    var streamWraps = sax.EVENTS.filter(function (ev) {
        return ev !== "error" && ev !== "end";
    });
    function createStream(strict, opt) {
        return new SAXStream(strict, opt);
    }
    function SAXStream(strict, opt) {
        if (!(this instanceof SAXStream)) {
            return new SAXStream(strict, opt);
        }
        Stream.apply(this);
        this._parser = new SAXParser(strict, opt);
        this.writable = true;
        this.readable = true;
        var me = this;
        this._parser.onend = function () {
            me.emit("end");
        };
        this._parser.onerror = function (er) {
            me.emit("error", er);
            // if didn't throw, then means error was handled.
            // go ahead and clear error, so we can write again.
            me._parser.error = null;
        };
        this._decoder = null;
        streamWraps.forEach(function (ev) {
            Object.defineProperty(me, "on" + ev, {
                get: function () {
                    return me._parser["on" + ev];
                },
                set: function (h) {
                    if (!h) {
                        me.removeAllListeners(ev);
                        me._parser["on" + ev] = h;
                        return h;
                    }
                    me.on(ev, h);
                },
                enumerable: true,
                configurable: false,
            });
        });
    }
    SAXStream.prototype = Object.create(Stream.prototype, {
        constructor: {
            value: SAXStream,
        },
    });
    SAXStream.prototype.write = function (data) {
        this._parser.write(data.toString());
        this.emit("data", data);
        return true;
    };
    SAXStream.prototype.end = function (chunk) {
        if (chunk && chunk.length) {
            this.write(chunk);
        }
        this._parser.end();
        return true;
    };
    SAXStream.prototype.on = function (ev, handler) {
        var me = this;
        if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) {
            me._parser["on" + ev] = function () {
                var args = arguments.length === 1
                    ? [arguments[0]]
                    : Array.apply(null, arguments);
                args.splice(0, 0, ev);
                me.emit.apply(me, args);
            };
        }
        return Stream.prototype.on.call(me, ev, handler);
    };
    // this really needs to be replaced with character classes.
    // XML allows all manner of ridiculous numbers and digits.
    var CDATA = "[CDATA[";
    var DOCTYPE = "DOCTYPE";
    var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
    var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
    var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };
    // http://www.w3.org/TR/REC-xml/#NT-NameStartChar
    // This implementation works on strings, a single character at a time
    // as such, it cannot ever support astral-plane characters (10000-EFFFF)
    // without a significant breaking change to either this  parser, or the
    // JavaScript language.  Implementation of an emoji-capable xml parser
    // is left as an exercise for the reader.
    var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    function isWhitespace(c) {
        return c === " " || c === "\n" || c === "\r" || c === "\t";
    }
    function isQuote(c) {
        return c === '"' || c === "'";
    }
    function isAttribEnd(c) {
        return c === ">" || isWhitespace(c);
    }
    function isMatch(regex, c) {
        return regex.test(c);
    }
    function notMatch(regex, c) {
        return !isMatch(regex, c);
    }
    var S = 0;
    sax.STATE = {
        BEGIN: S++,
        BEGIN_WHITESPACE: S++,
        TEXT: S++,
        TEXT_ENTITY: S++,
        OPEN_WAKA: S++,
        SGML_DECL: S++,
        SGML_DECL_QUOTED: S++,
        DOCTYPE: S++,
        DOCTYPE_QUOTED: S++,
        DOCTYPE_DTD: S++,
        DOCTYPE_DTD_QUOTED: S++,
        COMMENT_STARTING: S++,
        COMMENT: S++,
        COMMENT_ENDING: S++,
        COMMENT_ENDED: S++,
        CDATA: S++,
        CDATA_ENDING: S++,
        CDATA_ENDING_2: S++,
        PROC_INST: S++,
        PROC_INST_BODY: S++,
        PROC_INST_ENDING: S++,
        OPEN_TAG: S++,
        OPEN_TAG_SLASH: S++,
        ATTRIB: S++,
        ATTRIB_NAME: S++,
        ATTRIB_NAME_SAW_WHITE: S++,
        ATTRIB_VALUE: S++,
        ATTRIB_VALUE_QUOTED: S++,
        ATTRIB_VALUE_CLOSED: S++,
        ATTRIB_VALUE_UNQUOTED: S++,
        ATTRIB_VALUE_ENTITY_Q: S++,
        ATTRIB_VALUE_ENTITY_U: S++,
        CLOSE_TAG: S++,
        CLOSE_TAG_SAW_WHITE: S++,
        SCRIPT: S++,
        SCRIPT_ENDING: S++, // <script> ... <
    };
    sax.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'",
    };
    sax.ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'",
        AElig: 198,
        Aacute: 193,
        Acirc: 194,
        Agrave: 192,
        Aring: 197,
        Atilde: 195,
        Auml: 196,
        Ccedil: 199,
        ETH: 208,
        Eacute: 201,
        Ecirc: 202,
        Egrave: 200,
        Euml: 203,
        Iacute: 205,
        Icirc: 206,
        Igrave: 204,
        Iuml: 207,
        Ntilde: 209,
        Oacute: 211,
        Ocirc: 212,
        Ograve: 210,
        Oslash: 216,
        Otilde: 213,
        Ouml: 214,
        THORN: 222,
        Uacute: 218,
        Ucirc: 219,
        Ugrave: 217,
        Uuml: 220,
        Yacute: 221,
        aacute: 225,
        acirc: 226,
        aelig: 230,
        agrave: 224,
        aring: 229,
        atilde: 227,
        auml: 228,
        ccedil: 231,
        eacute: 233,
        ecirc: 234,
        egrave: 232,
        eth: 240,
        euml: 235,
        iacute: 237,
        icirc: 238,
        igrave: 236,
        iuml: 239,
        ntilde: 241,
        oacute: 243,
        ocirc: 244,
        ograve: 242,
        oslash: 248,
        otilde: 245,
        ouml: 246,
        szlig: 223,
        thorn: 254,
        uacute: 250,
        ucirc: 251,
        ugrave: 249,
        uuml: 252,
        yacute: 253,
        yuml: 255,
        copy: 169,
        reg: 174,
        nbsp: 160,
        iexcl: 161,
        cent: 162,
        pound: 163,
        curren: 164,
        yen: 165,
        brvbar: 166,
        sect: 167,
        uml: 168,
        ordf: 170,
        laquo: 171,
        not: 172,
        shy: 173,
        macr: 175,
        deg: 176,
        plusmn: 177,
        sup1: 185,
        sup2: 178,
        sup3: 179,
        acute: 180,
        micro: 181,
        para: 182,
        middot: 183,
        cedil: 184,
        ordm: 186,
        raquo: 187,
        frac14: 188,
        frac12: 189,
        frac34: 190,
        iquest: 191,
        times: 215,
        divide: 247,
        OElig: 338,
        oelig: 339,
        Scaron: 352,
        scaron: 353,
        Yuml: 376,
        fnof: 402,
        circ: 710,
        tilde: 732,
        Alpha: 913,
        Beta: 914,
        Gamma: 915,
        Delta: 916,
        Epsilon: 917,
        Zeta: 918,
        Eta: 919,
        Theta: 920,
        Iota: 921,
        Kappa: 922,
        Lambda: 923,
        Mu: 924,
        Nu: 925,
        Xi: 926,
        Omicron: 927,
        Pi: 928,
        Rho: 929,
        Sigma: 931,
        Tau: 932,
        Upsilon: 933,
        Phi: 934,
        Chi: 935,
        Psi: 936,
        Omega: 937,
        alpha: 945,
        beta: 946,
        gamma: 947,
        delta: 948,
        epsilon: 949,
        zeta: 950,
        eta: 951,
        theta: 952,
        iota: 953,
        kappa: 954,
        lambda: 955,
        mu: 956,
        nu: 957,
        xi: 958,
        omicron: 959,
        pi: 960,
        rho: 961,
        sigmaf: 962,
        sigma: 963,
        tau: 964,
        upsilon: 965,
        phi: 966,
        chi: 967,
        psi: 968,
        omega: 969,
        thetasym: 977,
        upsih: 978,
        piv: 982,
        ensp: 8194,
        emsp: 8195,
        thinsp: 8201,
        zwnj: 8204,
        zwj: 8205,
        lrm: 8206,
        rlm: 8207,
        ndash: 8211,
        mdash: 8212,
        lsquo: 8216,
        rsquo: 8217,
        sbquo: 8218,
        ldquo: 8220,
        rdquo: 8221,
        bdquo: 8222,
        dagger: 8224,
        Dagger: 8225,
        bull: 8226,
        hellip: 8230,
        permil: 8240,
        prime: 8242,
        Prime: 8243,
        lsaquo: 8249,
        rsaquo: 8250,
        oline: 8254,
        frasl: 8260,
        euro: 8364,
        image: 8465,
        weierp: 8472,
        real: 8476,
        trade: 8482,
        alefsym: 8501,
        larr: 8592,
        uarr: 8593,
        rarr: 8594,
        darr: 8595,
        harr: 8596,
        crarr: 8629,
        lArr: 8656,
        uArr: 8657,
        rArr: 8658,
        dArr: 8659,
        hArr: 8660,
        forall: 8704,
        part: 8706,
        exist: 8707,
        empty: 8709,
        nabla: 8711,
        isin: 8712,
        notin: 8713,
        ni: 8715,
        prod: 8719,
        sum: 8721,
        minus: 8722,
        lowast: 8727,
        radic: 8730,
        prop: 8733,
        infin: 8734,
        ang: 8736,
        and: 8743,
        or: 8744,
        cap: 8745,
        cup: 8746,
        int: 8747,
        there4: 8756,
        sim: 8764,
        cong: 8773,
        asymp: 8776,
        ne: 8800,
        equiv: 8801,
        le: 8804,
        ge: 8805,
        sub: 8834,
        sup: 8835,
        nsub: 8836,
        sube: 8838,
        supe: 8839,
        oplus: 8853,
        otimes: 8855,
        perp: 8869,
        sdot: 8901,
        lceil: 8968,
        rceil: 8969,
        lfloor: 8970,
        rfloor: 8971,
        lang: 9001,
        rang: 9002,
        loz: 9674,
        spades: 9824,
        clubs: 9827,
        hearts: 9829,
        diams: 9830,
    };
    Object.keys(sax.ENTITIES).forEach(function (key) {
        var e = sax.ENTITIES[key];
        var s = typeof e === "number" ? String.fromCharCode(e) : e;
        sax.ENTITIES[key] = s;
    });
    for (var s in sax.STATE) {
        sax.STATE[sax.STATE[s]] = s;
    }
    // shorthand
    S = sax.STATE;
    function emit(parser, event, data) {
        parser[event] && parser[event](data);
    }
    function emitNode(parser, nodeType, data) {
        if (parser.textNode)
            closeText(parser);
        emit(parser, nodeType, data);
    }
    function closeText(parser) {
        parser.textNode = textopts(parser.opt, parser.textNode);
        if (parser.textNode)
            emit(parser, "ontext", parser.textNode);
        parser.textNode = "";
    }
    function textopts(opt, text) {
        if (opt.trim)
            text = text.trim();
        if (opt.normalize)
            text = text.replace(/\s+/g, " ");
        return text;
    }
    function error(parser, er) {
        closeText(parser);
        if (parser.trackPosition) {
            er +=
                "\nLine: " +
                    parser.line +
                    "\nColumn: " +
                    parser.column +
                    "\nChar: " +
                    parser.c;
        }
        er = new Error(er);
        parser.error = er;
        emit(parser, "onerror", er);
        return parser;
    }
    function end(parser) {
        if (parser.sawRoot && !parser.closedRoot)
            strictFail(parser, "Unclosed root tag");
        if (parser.state !== S.BEGIN &&
            parser.state !== S.BEGIN_WHITESPACE &&
            parser.state !== S.TEXT) {
            error(parser, "Unexpected end");
        }
        closeText(parser);
        parser.c = "";
        parser.closed = true;
        emit(parser, "onend");
        SAXParser.call(parser, parser.strict, parser.opt);
        return parser;
    }
    function strictFail(parser, message) {
        if (typeof parser !== "object" || !(parser instanceof SAXParser)) {
            throw new Error("bad call to strictFail");
        }
        if (parser.strict) {
            error(parser, message);
        }
    }
    function newTag(parser) {
        if (!parser.strict)
            parser.tagName = parser.tagName[parser.looseCase]();
        var parent = parser.tags[parser.tags.length - 1] || parser;
        var tag = (parser.tag = { name: parser.tagName, attributes: {} });
        // will be overridden if tag contails an xmlns="foo" or xmlns:foo="bar"
        if (parser.opt.xmlns) {
            tag.ns = parent.ns;
        }
        parser.attribList.length = 0;
        emitNode(parser, "onopentagstart", tag);
    }
    function qname(name, attribute) {
        var i = name.indexOf(":");
        var qualName = i < 0 ? ["", name] : name.split(":");
        var prefix = qualName[0];
        var local = qualName[1];
        // <x "xmlns"="http://foo">
        if (attribute && name === "xmlns") {
            prefix = "xmlns";
            local = "";
        }
        return { prefix: prefix, local: local };
    }
    function attrib(parser) {
        if (!parser.strict) {
            parser.attribName = parser.attribName[parser.looseCase]();
        }
        if (parser.attribList.indexOf(parser.attribName) !== -1 ||
            parser.tag.attributes.hasOwnProperty(parser.attribName)) {
            parser.attribName = parser.attribValue = "";
            return;
        }
        if (parser.opt.xmlns) {
            var qn = qname(parser.attribName, true);
            var prefix = qn.prefix;
            var local = qn.local;
            if (prefix === "xmlns") {
                // namespace binding attribute. push the binding into scope
                if (local === "xml" && parser.attribValue !== XML_NAMESPACE) {
                    strictFail(parser, "xml: prefix must be bound to " +
                        XML_NAMESPACE +
                        "\n" +
                        "Actual: " +
                        parser.attribValue);
                }
                else if (local === "xmlns" &&
                    parser.attribValue !== XMLNS_NAMESPACE) {
                    strictFail(parser, "xmlns: prefix must be bound to " +
                        XMLNS_NAMESPACE +
                        "\n" +
                        "Actual: " +
                        parser.attribValue);
                }
                else {
                    var tag = parser.tag;
                    var parent = parser.tags[parser.tags.length - 1] || parser;
                    if (tag.ns === parent.ns) {
                        tag.ns = Object.create(parent.ns);
                    }
                    tag.ns[local] = parser.attribValue;
                }
            }
            // defer onattribute events until all attributes have been seen
            // so any new bindings can take effect. preserve attribute order
            // so deferred events can be emitted in document order
            parser.attribList.push([parser.attribName, parser.attribValue]);
        }
        else {
            // in non-xmlns mode, we can emit the event right away
            parser.tag.attributes[parser.attribName] = parser.attribValue;
            emitNode(parser, "onattribute", {
                name: parser.attribName,
                value: parser.attribValue,
            });
        }
        parser.attribName = parser.attribValue = "";
    }
    function openTag(parser, selfClosing) {
        if (parser.opt.xmlns) {
            // emit namespace binding events
            var tag = parser.tag;
            // add namespace info to tag
            var qn = qname(parser.tagName);
            tag.prefix = qn.prefix;
            tag.local = qn.local;
            tag.uri = tag.ns[qn.prefix] || "";
            if (tag.prefix && !tag.uri) {
                strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(parser.tagName));
                tag.uri = qn.prefix;
            }
            var parent = parser.tags[parser.tags.length - 1] || parser;
            if (tag.ns && parent.ns !== tag.ns) {
                Object.keys(tag.ns).forEach(function (p) {
                    emitNode(parser, "onopennamespace", {
                        prefix: p,
                        uri: tag.ns[p],
                    });
                });
            }
            // handle deferred onattribute events
            // Note: do not apply default ns to attributes:
            //   http://www.w3.org/TR/REC-xml-names/#defaulting
            for (var i = 0, l = parser.attribList.length; i < l; i++) {
                var nv = parser.attribList[i];
                var name = nv[0];
                var value = nv[1];
                var qualName = qname(name, true);
                var prefix = qualName.prefix;
                var local = qualName.local;
                var uri = prefix === "" ? "" : tag.ns[prefix] || "";
                var a = {
                    name: name,
                    value: value,
                    prefix: prefix,
                    local: local,
                    uri: uri,
                };
                // if there's any attributes with an undefined namespace,
                // then fail on them now.
                if (prefix && prefix !== "xmlns" && !uri) {
                    strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(prefix));
                    a.uri = prefix;
                }
                parser.tag.attributes[name] = a;
                emitNode(parser, "onattribute", a);
            }
            parser.attribList.length = 0;
        }
        parser.tag.isSelfClosing = !!selfClosing;
        // process the tag
        parser.sawRoot = true;
        parser.tags.push(parser.tag);
        emitNode(parser, "onopentag", parser.tag);
        if (!selfClosing) {
            // special case for <script> in non-strict mode.
            if (!parser.noscript && parser.tagName.toLowerCase() === "script") {
                parser.state = S.SCRIPT;
            }
            else {
                parser.state = S.TEXT;
            }
            parser.tag = null;
            parser.tagName = "";
        }
        parser.attribName = parser.attribValue = "";
        parser.attribList.length = 0;
    }
    function closeTag(parser) {
        if (!parser.tagName) {
            strictFail(parser, "Weird empty close tag.");
            parser.textNode += "</>";
            parser.state = S.TEXT;
            return;
        }
        if (parser.script) {
            if (parser.tagName !== "script") {
                parser.script += "</" + parser.tagName + ">";
                parser.tagName = "";
                parser.state = S.SCRIPT;
                return;
            }
            emitNode(parser, "onscript", parser.script);
            parser.script = "";
        }
        // first make sure that the closing tag actually exists.
        // <a><b></c></b></a> will close everything, otherwise.
        var t = parser.tags.length;
        var tagName = parser.tagName;
        if (!parser.strict) {
            tagName = tagName[parser.looseCase]();
        }
        var closeTo = tagName;
        while (t--) {
            var close = parser.tags[t];
            if (close.name !== closeTo) {
                // fail the first time in strict mode
                strictFail(parser, "Unexpected close tag");
            }
            else {
                break;
            }
        }
        // didn't find it.  we already failed for strict, so just abort.
        if (t < 0) {
            strictFail(parser, "Unmatched closing tag: " + parser.tagName);
            parser.textNode += "</" + parser.tagName + ">";
            parser.state = S.TEXT;
            return;
        }
        parser.tagName = tagName;
        var s = parser.tags.length;
        while (s-- > t) {
            var tag = (parser.tag = parser.tags.pop());
            parser.tagName = parser.tag.name;
            emitNode(parser, "onclosetag", parser.tagName);
            var x = {};
            for (var i in tag.ns) {
                x[i] = tag.ns[i];
            }
            var parent = parser.tags[parser.tags.length - 1] || parser;
            if (parser.opt.xmlns && tag.ns !== parent.ns) {
                // remove namespace bindings introduced by tag
                Object.keys(tag.ns).forEach(function (p) {
                    var n = tag.ns[p];
                    emitNode(parser, "onclosenamespace", { prefix: p, uri: n });
                });
            }
        }
        if (t === 0)
            parser.closedRoot = true;
        parser.tagName = parser.attribValue = parser.attribName = "";
        parser.attribList.length = 0;
        parser.state = S.TEXT;
    }
    function parseEntity(parser) {
        var entity = parser.entity;
        var entityLC = entity.toLowerCase();
        var num;
        var numStr = "";
        if (parser.ENTITIES[entity]) {
            return parser.ENTITIES[entity];
        }
        if (parser.ENTITIES[entityLC]) {
            return parser.ENTITIES[entityLC];
        }
        entity = entityLC;
        if (entity.charAt(0) === "#") {
            if (entity.charAt(1) === "x") {
                entity = entity.slice(2);
                num = parseInt(entity, 16);
                numStr = num.toString(16);
            }
            else {
                entity = entity.slice(1);
                num = parseInt(entity, 10);
                numStr = num.toString(10);
            }
        }
        entity = entity.replace(/^0+/, "");
        if (isNaN(num) || numStr.toLowerCase() !== entity) {
            strictFail(parser, "Invalid character entity");
            return "&" + parser.entity + ";";
        }
        return String.fromCodePoint(num);
    }
    function beginWhiteSpace(parser, c) {
        if (c === "<") {
            parser.state = S.OPEN_WAKA;
            parser.startTagPosition = parser.position;
        }
        else if (!isWhitespace(c)) {
            // have to process this as a text node.
            // weird, but happens.
            strictFail(parser, "Non-whitespace before first tag.");
            parser.textNode = c;
            parser.state = S.TEXT;
        }
    }
    function charAt(chunk, i) {
        var result = "";
        if (i < chunk.length) {
            result = chunk.charAt(i);
        }
        return result;
    }
    function write(chunk) {
        var parser = this;
        if (this.error) {
            throw this.error;
        }
        if (parser.closed) {
            return error(parser, "Cannot write after close. Assign an onready handler.");
        }
        if (chunk === null) {
            return end(parser);
        }
        if (typeof chunk === "object") {
            chunk = chunk.toString();
        }
        var i = 0;
        var c = "";
        while (true) {
            c = charAt(chunk, i++);
            parser.c = c;
            if (!c) {
                break;
            }
            if (parser.trackPosition) {
                parser.position++;
                if (c === "\n") {
                    parser.line++;
                    parser.column = 0;
                }
                else {
                    parser.column++;
                }
            }
            switch (parser.state) {
                case S.BEGIN:
                    parser.state = S.BEGIN_WHITESPACE;
                    if (c === "\uFEFF") {
                        continue;
                    }
                    beginWhiteSpace(parser, c);
                    continue;
                case S.BEGIN_WHITESPACE:
                    beginWhiteSpace(parser, c);
                    continue;
                case S.TEXT:
                    if (parser.sawRoot && !parser.closedRoot) {
                        var starti = i - 1;
                        while (c && c !== "<" && c !== "&") {
                            c = charAt(chunk, i++);
                            if (c && parser.trackPosition) {
                                parser.position++;
                                if (c === "\n") {
                                    parser.line++;
                                    parser.column = 0;
                                }
                                else {
                                    parser.column++;
                                }
                            }
                        }
                        parser.textNode += chunk.substring(starti, i - 1);
                    }
                    if (c === "<" &&
                        !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
                        parser.state = S.OPEN_WAKA;
                        parser.startTagPosition = parser.position;
                    }
                    else {
                        if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) {
                            strictFail(parser, "Text data outside of root node.");
                        }
                        if (c === "&") {
                            parser.state = S.TEXT_ENTITY;
                        }
                        else {
                            parser.textNode += c;
                        }
                    }
                    continue;
                case S.SCRIPT:
                    // only non-strict
                    if (c === "<") {
                        parser.state = S.SCRIPT_ENDING;
                    }
                    else {
                        parser.script += c;
                    }
                    continue;
                case S.SCRIPT_ENDING:
                    if (c === "/") {
                        parser.state = S.CLOSE_TAG;
                    }
                    else {
                        parser.script += "<" + c;
                        parser.state = S.SCRIPT;
                    }
                    continue;
                case S.OPEN_WAKA:
                    // either a /, ?, !, or text is coming next.
                    if (c === "!") {
                        parser.state = S.SGML_DECL;
                        parser.sgmlDecl = "";
                    }
                    else if (isWhitespace(c)) {
                        // wait for it...
                    }
                    else if (isMatch(nameStart, c)) {
                        parser.state = S.OPEN_TAG;
                        parser.tagName = c;
                    }
                    else if (c === "/") {
                        parser.state = S.CLOSE_TAG;
                        parser.tagName = "";
                    }
                    else if (c === "?") {
                        parser.state = S.PROC_INST;
                        parser.procInstName = parser.procInstBody = "";
                    }
                    else {
                        strictFail(parser, "Unencoded <");
                        // if there was some whitespace, then add that in.
                        if (parser.startTagPosition + 1 < parser.position) {
                            var pad = parser.position - parser.startTagPosition;
                            c = new Array(pad).join(" ") + c;
                        }
                        parser.textNode += "<" + c;
                        parser.state = S.TEXT;
                    }
                    continue;
                case S.SGML_DECL:
                    if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
                        emitNode(parser, "onopencdata");
                        parser.state = S.CDATA;
                        parser.sgmlDecl = "";
                        parser.cdata = "";
                    }
                    else if (parser.sgmlDecl + c === "--") {
                        parser.state = S.COMMENT;
                        parser.comment = "";
                        parser.sgmlDecl = "";
                    }
                    else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
                        parser.state = S.DOCTYPE;
                        if (parser.doctype || parser.sawRoot) {
                            strictFail(parser, "Inappropriately located doctype declaration");
                        }
                        parser.doctype = "";
                        parser.sgmlDecl = "";
                    }
                    else if (c === ">") {
                        emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
                        parser.sgmlDecl = "";
                        parser.state = S.TEXT;
                    }
                    else if (isQuote(c)) {
                        parser.state = S.SGML_DECL_QUOTED;
                        parser.sgmlDecl += c;
                    }
                    else {
                        parser.sgmlDecl += c;
                    }
                    continue;
                case S.SGML_DECL_QUOTED:
                    if (c === parser.q) {
                        parser.state = S.SGML_DECL;
                        parser.q = "";
                    }
                    parser.sgmlDecl += c;
                    continue;
                case S.DOCTYPE:
                    if (c === ">") {
                        parser.state = S.TEXT;
                        emitNode(parser, "ondoctype", parser.doctype);
                        parser.doctype = true; // just remember that we saw it.
                    }
                    else {
                        parser.doctype += c;
                        if (c === "[") {
                            parser.state = S.DOCTYPE_DTD;
                        }
                        else if (isQuote(c)) {
                            parser.state = S.DOCTYPE_QUOTED;
                            parser.q = c;
                        }
                    }
                    continue;
                case S.DOCTYPE_QUOTED:
                    parser.doctype += c;
                    if (c === parser.q) {
                        parser.q = "";
                        parser.state = S.DOCTYPE;
                    }
                    continue;
                case S.DOCTYPE_DTD:
                    parser.doctype += c;
                    if (c === "]") {
                        parser.state = S.DOCTYPE;
                    }
                    else if (isQuote(c)) {
                        parser.state = S.DOCTYPE_DTD_QUOTED;
                        parser.q = c;
                    }
                    continue;
                case S.DOCTYPE_DTD_QUOTED:
                    parser.doctype += c;
                    if (c === parser.q) {
                        parser.state = S.DOCTYPE_DTD;
                        parser.q = "";
                    }
                    continue;
                case S.COMMENT:
                    if (c === "-") {
                        parser.state = S.COMMENT_ENDING;
                    }
                    else {
                        parser.comment += c;
                    }
                    continue;
                case S.COMMENT_ENDING:
                    if (c === "-") {
                        parser.state = S.COMMENT_ENDED;
                        parser.comment = textopts(parser.opt, parser.comment);
                        if (parser.comment) {
                            emitNode(parser, "oncomment", parser.comment);
                        }
                        parser.comment = "";
                    }
                    else {
                        parser.comment += "-" + c;
                        parser.state = S.COMMENT;
                    }
                    continue;
                case S.COMMENT_ENDED:
                    if (c !== ">") {
                        strictFail(parser, "Malformed comment");
                        // allow <!-- blah -- bloo --> in non-strict mode,
                        // which is a comment of " blah -- bloo "
                        parser.comment += "--" + c;
                        parser.state = S.COMMENT;
                    }
                    else {
                        parser.state = S.TEXT;
                    }
                    continue;
                case S.CDATA:
                    if (c === "]") {
                        parser.state = S.CDATA_ENDING;
                    }
                    else {
                        parser.cdata += c;
                    }
                    continue;
                case S.CDATA_ENDING:
                    if (c === "]") {
                        parser.state = S.CDATA_ENDING_2;
                    }
                    else {
                        parser.cdata += "]" + c;
                        parser.state = S.CDATA;
                    }
                    continue;
                case S.CDATA_ENDING_2:
                    if (c === ">") {
                        if (parser.cdata) {
                            emitNode(parser, "oncdata", parser.cdata);
                        }
                        emitNode(parser, "onclosecdata");
                        parser.cdata = "";
                        parser.state = S.TEXT;
                    }
                    else if (c === "]") {
                        parser.cdata += "]";
                    }
                    else {
                        parser.cdata += "]]" + c;
                        parser.state = S.CDATA;
                    }
                    continue;
                case S.PROC_INST:
                    if (c === "?") {
                        parser.state = S.PROC_INST_ENDING;
                    }
                    else if (isWhitespace(c)) {
                        parser.state = S.PROC_INST_BODY;
                    }
                    else {
                        parser.procInstName += c;
                    }
                    continue;
                case S.PROC_INST_BODY:
                    if (!parser.procInstBody && isWhitespace(c)) {
                        continue;
                    }
                    else if (c === "?") {
                        parser.state = S.PROC_INST_ENDING;
                    }
                    else {
                        parser.procInstBody += c;
                    }
                    continue;
                case S.PROC_INST_ENDING:
                    if (c === ">") {
                        emitNode(parser, "onprocessinginstruction", {
                            name: parser.procInstName,
                            body: parser.procInstBody,
                        });
                        parser.procInstName = parser.procInstBody = "";
                        parser.state = S.TEXT;
                    }
                    else {
                        parser.procInstBody += "?" + c;
                        parser.state = S.PROC_INST_BODY;
                    }
                    continue;
                case S.OPEN_TAG:
                    if (isMatch(nameBody, c)) {
                        parser.tagName += c;
                    }
                    else {
                        newTag(parser);
                        if (c === ">") {
                            openTag(parser);
                        }
                        else if (c === "/") {
                            parser.state = S.OPEN_TAG_SLASH;
                        }
                        else {
                            if (!isWhitespace(c)) {
                                strictFail(parser, "Invalid character in tag name");
                            }
                            parser.state = S.ATTRIB;
                        }
                    }
                    continue;
                case S.OPEN_TAG_SLASH:
                    if (c === ">") {
                        openTag(parser, true);
                        closeTag(parser);
                    }
                    else {
                        strictFail(parser, "Forward-slash in opening tag not followed by >");
                        parser.state = S.ATTRIB;
                    }
                    continue;
                case S.ATTRIB:
                    // haven't read the attribute name yet.
                    if (isWhitespace(c)) {
                        continue;
                    }
                    else if (c === ">") {
                        openTag(parser);
                    }
                    else if (c === "/") {
                        parser.state = S.OPEN_TAG_SLASH;
                    }
                    else if (isMatch(nameStart, c)) {
                        parser.attribName = c;
                        parser.attribValue = "";
                        parser.state = S.ATTRIB_NAME;
                    }
                    else {
                        strictFail(parser, "Invalid attribute name");
                    }
                    continue;
                case S.ATTRIB_NAME:
                    if (c === "=") {
                        parser.state = S.ATTRIB_VALUE;
                    }
                    else if (c === ">") {
                        strictFail(parser, "Attribute without value");
                        parser.attribValue = parser.attribName;
                        attrib(parser);
                        openTag(parser);
                    }
                    else if (isWhitespace(c)) {
                        parser.state = S.ATTRIB_NAME_SAW_WHITE;
                    }
                    else if (isMatch(nameBody, c)) {
                        parser.attribName += c;
                    }
                    else {
                        strictFail(parser, "Invalid attribute name");
                    }
                    continue;
                case S.ATTRIB_NAME_SAW_WHITE:
                    if (c === "=") {
                        parser.state = S.ATTRIB_VALUE;
                    }
                    else if (isWhitespace(c)) {
                        continue;
                    }
                    else {
                        strictFail(parser, "Attribute without value");
                        parser.tag.attributes[parser.attribName] = "";
                        parser.attribValue = "";
                        emitNode(parser, "onattribute", {
                            name: parser.attribName,
                            value: "",
                        });
                        parser.attribName = "";
                        if (c === ">") {
                            openTag(parser);
                        }
                        else if (isMatch(nameStart, c)) {
                            parser.attribName = c;
                            parser.state = S.ATTRIB_NAME;
                        }
                        else {
                            strictFail(parser, "Invalid attribute name");
                            parser.state = S.ATTRIB;
                        }
                    }
                    continue;
                case S.ATTRIB_VALUE:
                    if (isWhitespace(c)) {
                        continue;
                    }
                    else if (isQuote(c)) {
                        parser.q = c;
                        parser.state = S.ATTRIB_VALUE_QUOTED;
                    }
                    else {
                        strictFail(parser, "Unquoted attribute value");
                        parser.state = S.ATTRIB_VALUE_UNQUOTED;
                        parser.attribValue = c;
                    }
                    continue;
                case S.ATTRIB_VALUE_QUOTED:
                    if (c !== parser.q) {
                        if (c === "&") {
                            parser.state = S.ATTRIB_VALUE_ENTITY_Q;
                        }
                        else {
                            parser.attribValue += c;
                        }
                        continue;
                    }
                    attrib(parser);
                    parser.q = "";
                    parser.state = S.ATTRIB_VALUE_CLOSED;
                    continue;
                case S.ATTRIB_VALUE_CLOSED:
                    if (isWhitespace(c)) {
                        parser.state = S.ATTRIB;
                    }
                    else if (c === ">") {
                        openTag(parser);
                    }
                    else if (c === "/") {
                        parser.state = S.OPEN_TAG_SLASH;
                    }
                    else if (isMatch(nameStart, c)) {
                        strictFail(parser, "No whitespace between attributes");
                        parser.attribName = c;
                        parser.attribValue = "";
                        parser.state = S.ATTRIB_NAME;
                    }
                    else {
                        strictFail(parser, "Invalid attribute name");
                    }
                    continue;
                case S.ATTRIB_VALUE_UNQUOTED:
                    if (!isAttribEnd(c)) {
                        if (c === "&") {
                            parser.state = S.ATTRIB_VALUE_ENTITY_U;
                        }
                        else {
                            parser.attribValue += c;
                        }
                        continue;
                    }
                    attrib(parser);
                    if (c === ">") {
                        openTag(parser);
                    }
                    else {
                        parser.state = S.ATTRIB;
                    }
                    continue;
                case S.CLOSE_TAG:
                    if (!parser.tagName) {
                        if (isWhitespace(c)) {
                            continue;
                        }
                        else if (notMatch(nameStart, c)) {
                            if (parser.script) {
                                parser.script += "</" + c;
                                parser.state = S.SCRIPT;
                            }
                            else {
                                strictFail(parser, "Invalid tagname in closing tag.");
                            }
                        }
                        else {
                            parser.tagName = c;
                        }
                    }
                    else if (c === ">") {
                        closeTag(parser);
                    }
                    else if (isMatch(nameBody, c)) {
                        parser.tagName += c;
                    }
                    else if (parser.script) {
                        parser.script += "</" + parser.tagName;
                        parser.tagName = "";
                        parser.state = S.SCRIPT;
                    }
                    else {
                        if (!isWhitespace(c)) {
                            strictFail(parser, "Invalid tagname in closing tag");
                        }
                        parser.state = S.CLOSE_TAG_SAW_WHITE;
                    }
                    continue;
                case S.CLOSE_TAG_SAW_WHITE:
                    if (isWhitespace(c)) {
                        continue;
                    }
                    if (c === ">") {
                        closeTag(parser);
                    }
                    else {
                        strictFail(parser, "Invalid characters in closing tag");
                    }
                    continue;
                case S.TEXT_ENTITY:
                case S.ATTRIB_VALUE_ENTITY_Q:
                case S.ATTRIB_VALUE_ENTITY_U:
                    var returnState;
                    var buffer;
                    switch (parser.state) {
                        case S.TEXT_ENTITY:
                            returnState = S.TEXT;
                            buffer = "textNode";
                            break;
                        case S.ATTRIB_VALUE_ENTITY_Q:
                            returnState = S.ATTRIB_VALUE_QUOTED;
                            buffer = "attribValue";
                            break;
                        case S.ATTRIB_VALUE_ENTITY_U:
                            returnState = S.ATTRIB_VALUE_UNQUOTED;
                            buffer = "attribValue";
                            break;
                    }
                    if (c === ";") {
                        if (parser.opt.unparsedEntities) {
                            var parsedEntity = parseEntity(parser);
                            parser.entity = "";
                            parser.state = returnState;
                            parser.write(parsedEntity);
                        }
                        else {
                            parser[buffer] += parseEntity(parser);
                            parser.entity = "";
                            parser.state = returnState;
                        }
                    }
                    else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) {
                        parser.entity += c;
                    }
                    else {
                        strictFail(parser, "Invalid character in entity name");
                        parser[buffer] += "&" + parser.entity + c;
                        parser.entity = "";
                        parser.state = returnState;
                    }
                    continue;
                default: /* istanbul ignore next */ {
                    throw new Error(parser, "Unknown state: " + parser.state);
                }
            }
        } // while
        if (parser.position >= parser.bufferCheckPosition) {
            checkBufferLength(parser);
        }
        return parser;
    }
    /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
    /* istanbul ignore next */
    if (!String.fromCodePoint) {
        (function () {
            var stringFromCharCode = String.fromCharCode;
            var floor = Math.floor;
            var fromCodePoint = function () {
                var MAX_SIZE = 0x4000;
                var codeUnits = [];
                var highSurrogate;
                var lowSurrogate;
                var index = -1;
                var length = arguments.length;
                if (!length) {
                    return "";
                }
                var result = "";
                while (++index < length) {
                    var codePoint = Number(arguments[index]);
                    if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
                        codePoint < 0 || // not a valid Unicode code point
                        codePoint > 0x10ffff || // not a valid Unicode code point
                        floor(codePoint) !== codePoint // not an integer
                    ) {
                        throw RangeError("Invalid code point: " + codePoint);
                    }
                    if (codePoint <= 0xffff) {
                        // BMP code point
                        codeUnits.push(codePoint);
                    }
                    else {
                        // Astral code point; split in surrogate halves
                        // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                        codePoint -= 0x10000;
                        highSurrogate = (codePoint >> 10) + 0xd800;
                        lowSurrogate = (codePoint % 0x400) + 0xdc00;
                        codeUnits.push(highSurrogate, lowSurrogate);
                    }
                    if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                        result += stringFromCharCode.apply(null, codeUnits);
                        codeUnits.length = 0;
                    }
                }
                return result;
            };
            /* istanbul ignore next */
            if (Object.defineProperty) {
                Object.defineProperty(String, "fromCodePoint", {
                    value: fromCodePoint,
                    configurable: true,
                    writable: true,
                });
            }
            else {
                String.fromCodePoint = fromCodePoint;
            }
        })();
    }
    return sax;
};
const sax = /** #__PURE__ */ initializeSax();


;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/output_parsers/xml.js



const XML_FORMAT_INSTRUCTIONS = `The output should be formatted as a XML file.
1. Output should conform to the tags below. 
2. If tags are not given, make them on your own.
3. Remember to always open and close all the tags.

As an example, for the tags ["foo", "bar", "baz"]:
1. String "<foo>\n   <bar>\n      <baz></baz>\n   </bar>\n</foo>" is a well-formatted instance of the schema. 
2. String "<foo>\n   <bar>\n   </foo>" is a badly-formatted instance.
3. String "<foo>\n   <tag>\n   </tag>\n</foo>" is a badly-formatted instance.

Here are the output tags:
\`\`\`
{tags}
\`\`\``;
class XMLOutputParser extends BaseCumulativeTransformOutputParser {
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "tags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "output_parsers"]
        });
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        this.tags = fields?.tags;
    }
    static lc_name() {
        return "XMLOutputParser";
    }
    _diff(prev, next) {
        if (!next) {
            return undefined;
        }
        if (!prev) {
            return [{ op: "replace", path: "", value: next }];
        }
        return (0,fast_json_patch/* compare */.UD)(prev, next);
    }
    async parsePartialResult(generations) {
        return parseXMLMarkdown(generations[0].text);
    }
    async parse(text) {
        return parseXMLMarkdown(text);
    }
    getFormatInstructions() {
        const withTags = !!(this.tags && this.tags.length > 0);
        return withTags
            ? XML_FORMAT_INSTRUCTIONS.replace("{tags}", this.tags?.join(", ") ?? "")
            : XML_FORMAT_INSTRUCTIONS;
    }
}
const strip = (text) => text
    .split("\n")
    .map((line) => line.replace(/^\s+/, ""))
    .join("\n")
    .trim();
const parseParsedResult = (input) => {
    if (Object.keys(input).length === 0) {
        return {};
    }
    const result = {};
    if (input.children.length > 0) {
        result[input.name] = input.children.map(parseParsedResult);
        return result;
    }
    else {
        result[input.name] = input.text ?? undefined;
        return result;
    }
};
function parseXMLMarkdown(s) {
    const cleanedString = strip(s);
    const parser = sax.parser(true);
    let parsedResult = {};
    const elementStack = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parser.onopentag = (node) => {
        const element = {
            name: node.name,
            attributes: node.attributes,
            children: [],
            text: "",
            isSelfClosing: node.isSelfClosing,
        };
        if (elementStack.length > 0) {
            const parentElement = elementStack[elementStack.length - 1];
            parentElement.children.push(element);
        }
        else {
            parsedResult = element;
        }
        if (!node.isSelfClosing) {
            elementStack.push(element);
        }
    };
    parser.onclosetag = () => {
        if (elementStack.length > 0) {
            const lastElement = elementStack.pop();
            if (elementStack.length === 0 && lastElement) {
                parsedResult = lastElement;
            }
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parser.ontext = (text) => {
        if (elementStack.length > 0) {
            const currentElement = elementStack[elementStack.length - 1];
            currentElement.text += text;
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parser.onattribute = (attr) => {
        if (elementStack.length > 0) {
            const currentElement = elementStack[elementStack.length - 1];
            currentElement.attributes[attr.name] = attr.value;
        }
    };
    // Try to find XML string within triple backticks.
    const match = /```(xml)?(.*)```/s.exec(cleanedString);
    const xmlString = match ? match[2] : cleanedString;
    parser.write(xmlString).close();
    // Remove the XML declaration if present
    if (parsedResult && parsedResult.name === "?xml") {
        parsedResult = parsedResult.children[0];
    }
    return parseParsedResult(parsedResult);
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/output_parsers/index.js









// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/prompts/base.js
var prompts_base = __webpack_require__(1776);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/prompts/chat.js
var chat = __webpack_require__(24231);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/prompts/few_shot.js
var few_shot = __webpack_require__(92430);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/prompts/pipeline.js


/**
 * Class that handles a sequence of prompts, each of which may require
 * different input variables. Includes methods for formatting these
 * prompts, extracting required input values, and handling partial
 * prompts.
 * @example
 * ```typescript
 * const composedPrompt = new PipelinePromptTemplate({
 *   pipelinePrompts: [
 *     {
 *       name: "introduction",
 *       prompt: PromptTemplate.fromTemplate(`You are impersonating {person}.`),
 *     },
 *     {
 *       name: "example",
 *       prompt: PromptTemplate.fromTemplate(
 *         `Here's an example of an interaction:
 * Q: {example_q}
 * A: {example_a}`,
 *       ),
 *     },
 *     {
 *       name: "start",
 *       prompt: PromptTemplate.fromTemplate(
 *         `Now, do this for real!
 * Q: {input}
 * A:`,
 *       ),
 *     },
 *   ],
 *   finalPrompt: PromptTemplate.fromTemplate(
 *     `{introduction}
 * {example}
 * {start}`,
 *   ),
 * });
 *
 * const formattedPrompt = await composedPrompt.format({
 *   person: "Elon Musk",
 *   example_q: `What's your favorite car?`,
 *   example_a: "Tesla",
 *   input: `What's your favorite social media site?`,
 * });
 * ```
 */
class PipelinePromptTemplate extends prompts_base/* BasePromptTemplate */.m {
    static lc_name() {
        return "PipelinePromptTemplate";
    }
    constructor(input) {
        super({ ...input, inputVariables: [] });
        Object.defineProperty(this, "pipelinePrompts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "finalPrompt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.pipelinePrompts = input.pipelinePrompts;
        this.finalPrompt = input.finalPrompt;
        this.inputVariables = this.computeInputValues();
    }
    /**
     * Computes the input values required by the pipeline prompts.
     * @returns Array of input values required by the pipeline prompts.
     */
    computeInputValues() {
        const intermediateValues = this.pipelinePrompts.map((pipelinePrompt) => pipelinePrompt.name);
        const inputValues = this.pipelinePrompts
            .map((pipelinePrompt) => pipelinePrompt.prompt.inputVariables.filter((inputValue) => !intermediateValues.includes(inputValue)))
            .flat();
        return [...new Set(inputValues)];
    }
    static extractRequiredInputValues(allValues, requiredValueNames) {
        return requiredValueNames.reduce((requiredValues, valueName) => {
            // eslint-disable-next-line no-param-reassign
            requiredValues[valueName] = allValues[valueName];
            return requiredValues;
        }, {});
    }
    /**
     * Formats the pipeline prompts based on the provided input values.
     * @param values Input values to format the pipeline prompts.
     * @returns Promise that resolves with the formatted input values.
     */
    async formatPipelinePrompts(values) {
        const allValues = await this.mergePartialAndUserVariables(values);
        for (const { name: pipelinePromptName, prompt: pipelinePrompt } of this
            .pipelinePrompts) {
            const pipelinePromptInputValues = PipelinePromptTemplate.extractRequiredInputValues(allValues, pipelinePrompt.inputVariables);
            // eslint-disable-next-line no-instanceof/no-instanceof
            if (pipelinePrompt instanceof chat/* ChatPromptTemplate */.RZ) {
                allValues[pipelinePromptName] = await pipelinePrompt.formatMessages(pipelinePromptInputValues);
            }
            else {
                allValues[pipelinePromptName] = await pipelinePrompt.format(pipelinePromptInputValues);
            }
        }
        return PipelinePromptTemplate.extractRequiredInputValues(allValues, this.finalPrompt.inputVariables);
    }
    /**
     * Formats the final prompt value based on the provided input values.
     * @param values Input values to format the final prompt value.
     * @returns Promise that resolves with the formatted final prompt value.
     */
    async formatPromptValue(values) {
        return this.finalPrompt.formatPromptValue(await this.formatPipelinePrompts(values));
    }
    async format(values) {
        return this.finalPrompt.format(await this.formatPipelinePrompts(values));
    }
    /**
     * Handles partial prompts, which are prompts that have been partially
     * filled with input values.
     * @param values Partial input values.
     * @returns Promise that resolves with a new PipelinePromptTemplate instance with updated input variables.
     */
    async partial(values) {
        const promptDict = { ...this };
        promptDict.inputVariables = this.inputVariables.filter((iv) => !(iv in values));
        promptDict.partialVariables = {
            ...(this.partialVariables ?? {}),
            ...values,
        };
        return new PipelinePromptTemplate(promptDict);
    }
    serialize() {
        throw new Error("Not implemented.");
    }
    _getPromptType() {
        return "pipeline";
    }
}

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/prompts/prompt.js
var prompts_prompt = __webpack_require__(68531);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/prompts/string.js
var string = __webpack_require__(3748);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/prompts/template.js + 1 modules
var template = __webpack_require__(36574);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/prompts/image.js
var prompts_image = __webpack_require__(99848);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/prompts/structured.js

function isWithStructuredOutput(x
// eslint-disable-next-line @typescript-eslint/ban-types
) {
    return (typeof x === "object" &&
        x != null &&
        "withStructuredOutput" in x &&
        typeof x.withStructuredOutput === "function");
}
function isRunnableBinding(x) {
    return (typeof x === "object" &&
        x != null &&
        "lc_id" in x &&
        Array.isArray(x.lc_id) &&
        x.lc_id.join("/") === "langchain_core/runnables/RunnableBinding");
}
class StructuredPrompt extends chat/* ChatPromptTemplate */.RZ {
    get lc_aliases() {
        return {
            ...super.lc_aliases,
            schema: "schema_",
        };
    }
    constructor(input) {
        super(input);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "schema", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "prompts", "structured"]
        });
        this.schema = input.schema;
    }
    pipe(coerceable) {
        if (isWithStructuredOutput(coerceable)) {
            return super.pipe(coerceable.withStructuredOutput(this.schema));
        }
        if (isRunnableBinding(coerceable) &&
            isWithStructuredOutput(coerceable.bound)) {
            return super.pipe(coerceable.bound
                .withStructuredOutput(this.schema)
                .bind(coerceable.kwargs ?? {})
                .withConfig(coerceable.config));
        }
        throw new Error(`Structured prompts need to be piped to a language model that supports the "withStructuredOutput()" method.`);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromMessagesAndSchema(promptMessages, schema
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) {
        return StructuredPrompt.fromMessages(promptMessages, { schema });
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/prompts/index.js











;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/retrievers/index.js



/**
 * Abstract base class for a document retrieval system, designed to
 * process string queries and return the most relevant documents from a source.
 *
 * `BaseRetriever` provides common properties and methods for derived retrievers,
 * such as callbacks, tagging, and verbose logging. Custom retrieval systems
 * should extend this class and implement `_getRelevantDocuments` to define
 * the specific retrieval logic.
 *
 * @template Metadata - The type of metadata associated with each document,
 *                      defaulting to `Record<string, any>`.
 */
class BaseRetriever extends runnables_base/* Runnable */.YN {
    /**
     * Constructs a new `BaseRetriever` instance with optional configuration fields.
     *
     * @param fields - Optional input configuration that can include `callbacks`,
     *                 `tags`, `metadata`, and `verbose` settings for custom retriever behavior.
     */
    constructor(fields) {
        super(fields);
        /**
         * Optional callbacks to handle various events in the retrieval process.
         */
        Object.defineProperty(this, "callbacks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Tags to label or categorize the retrieval operation.
         */
        Object.defineProperty(this, "tags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Metadata to provide additional context or information about the retrieval
         * operation.
         */
        Object.defineProperty(this, "metadata", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * If set to `true`, enables verbose logging for the retrieval process.
         */
        Object.defineProperty(this, "verbose", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.callbacks = fields?.callbacks;
        this.tags = fields?.tags ?? [];
        this.metadata = fields?.metadata ?? {};
        this.verbose = fields?.verbose ?? false;
    }
    /**
     * TODO: This should be an abstract method, but we'd like to avoid breaking
     * changes to people currently using subclassed custom retrievers.
     * Change it on next major release.
     */
    /**
     * Placeholder method for retrieving relevant documents based on a query.
     *
     * This method is intended to be implemented by subclasses and will be
     * converted to an abstract method in the next major release. Currently, it
     * throws an error if not implemented, ensuring that custom retrievers define
     * the specific retrieval logic.
     *
     * @param _query - The query string used to search for relevant documents.
     * @param _callbacks - (optional) Callback manager for managing callbacks
     *                     during retrieval.
     * @returns A promise resolving to an array of `DocumentInterface` instances relevant to the query.
     * @throws {Error} Throws an error indicating the method is not implemented.
     */
    _getRelevantDocuments(_query, _callbacks) {
        throw new Error("Not implemented!");
    }
    /**
     * Executes a retrieval operation.
     *
     * @param input - The query string used to search for relevant documents.
     * @param options - (optional) Configuration options for the retrieval run,
     *                  which may include callbacks, tags, and metadata.
     * @returns A promise that resolves to an array of `DocumentInterface` instances
     *          representing the most relevant documents to the query.
     */
    async invoke(input, options) {
        return this.getRelevantDocuments(input, (0,runnables_config/* ensureConfig */.ZI)(options));
    }
    /**
     * @deprecated Use .invoke() instead. Will be removed in 0.3.0.
     *
     * Main method used to retrieve relevant documents. It takes a query
     * string and an optional configuration object, and returns a promise that
     * resolves to an array of `Document` objects. This method handles the
     * retrieval process, including starting and ending callbacks, and error
     * handling.
     * @param query The query string to retrieve relevant documents for.
     * @param config Optional configuration object for the retrieval process.
     * @returns A promise that resolves to an array of `Document` objects.
     */
    async getRelevantDocuments(query, config) {
        const parsedConfig = (0,runnables_config/* ensureConfig */.ZI)((0,manager.parseCallbackConfigArg)(config));
        const callbackManager_ = await manager.CallbackManager.configure(parsedConfig.callbacks, this.callbacks, parsedConfig.tags, this.tags, parsedConfig.metadata, this.metadata, { verbose: this.verbose });
        const runManager = await callbackManager_?.handleRetrieverStart(this.toJSON(), query, parsedConfig.runId, undefined, undefined, undefined, parsedConfig.runName);
        try {
            const results = await this._getRelevantDocuments(query, runManager);
            await runManager?.handleRetrieverEnd(results);
            return results;
        }
        catch (error) {
            await runManager?.handleRetrieverError(error);
            throw error;
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/stores.js

/**
 * Abstract interface for a key-value store.
 */
class BaseStore extends serializable.Serializable {
}
/**
 * In-memory implementation of the BaseStore using a dictionary. Used for
 * storing key-value pairs in memory.
 * @example
 * ```typescript
 * const store = new InMemoryStore<BaseMessage>();
 * await store.mset(
 *   Array.from({ length: 5 }).map((_, index) => [
 *     `message:id:${index}`,
 *     index % 2 === 0
 *       ? new AIMessage("ai stuff...")
 *       : new HumanMessage("human stuff..."),
 *   ]),
 * );
 *
 * const retrievedMessages = await store.mget(["message:id:0", "message:id:1"]);
 * await store.mdelete(await store.yieldKeys("message:id:").toArray());
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class InMemoryStore extends BaseStore {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain", "storage"]
        });
        Object.defineProperty(this, "store", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
    }
    /**
     * Retrieves the values associated with the given keys from the store.
     * @param keys Keys to retrieve values for.
     * @returns Array of values associated with the given keys.
     */
    async mget(keys) {
        return keys.map((key) => this.store[key]);
    }
    /**
     * Sets the values for the given keys in the store.
     * @param keyValuePairs Array of key-value pairs to set in the store.
     * @returns Promise that resolves when all key-value pairs have been set.
     */
    async mset(keyValuePairs) {
        for (const [key, value] of keyValuePairs) {
            this.store[key] = value;
        }
    }
    /**
     * Deletes the given keys and their associated values from the store.
     * @param keys Keys to delete from the store.
     * @returns Promise that resolves when all keys have been deleted.
     */
    async mdelete(keys) {
        for (const key of keys) {
            delete this.store[key];
        }
    }
    /**
     * Asynchronous generator that yields keys from the store. If a prefix is
     * provided, it only yields keys that start with the prefix.
     * @param prefix Optional prefix to filter keys.
     * @returns AsyncGenerator that yields keys from the store.
     */
    async *yieldKeys(prefix) {
        const keys = Object.keys(this.store);
        for (const key of keys) {
            if (prefix === undefined || key.startsWith(prefix)) {
                yield key;
            }
        }
    }
}

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/messages/tool.js
var tool = __webpack_require__(50434);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/tools/utils.js
var tools_utils = __webpack_require__(45948);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/tools/index.js









/**
 * Base class for Tools that accept input of any shape defined by a Zod schema.
 */
class StructuredTool extends BaseLangChain {
    get lc_namespace() {
        return ["langchain", "tools"];
    }
    constructor(fields) {
        super(fields ?? {});
        /**
         * Whether to return the tool's output directly.
         *
         * Setting this to true means that after the tool is called,
         * an agent should stop looping.
         */
        Object.defineProperty(this, "returnDirect", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "verboseParsingErrors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /**
         * The tool response format.
         *
         * If "content" then the output of the tool is interpreted as the contents of a
         * ToolMessage. If "content_and_artifact" then the output is expected to be a
         * two-tuple corresponding to the (content, artifact) of a ToolMessage.
         *
         * @default "content"
         */
        Object.defineProperty(this, "responseFormat", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "content"
        });
        this.verboseParsingErrors =
            fields?.verboseParsingErrors ?? this.verboseParsingErrors;
        this.responseFormat = fields?.responseFormat ?? this.responseFormat;
    }
    /**
     * Invokes the tool with the provided input and configuration.
     * @param input The input for the tool.
     * @param config Optional configuration for the tool.
     * @returns A Promise that resolves with a string.
     */
    async invoke(input, config) {
        let tool_call_id;
        let toolInput;
        let enrichedConfig = (0,runnables_config/* ensureConfig */.ZI)(config);
        if ((0,tools_utils/* _isToolCall */.K)(input)) {
            tool_call_id = input.id;
            toolInput = input.args;
            enrichedConfig = {
                ...enrichedConfig,
                toolCall: input,
                configurable: {
                    ...enrichedConfig.configurable,
                    tool_call_id,
                },
            };
        }
        else {
            toolInput = input;
        }
        return this.call(toolInput, enrichedConfig);
    }
    /**
     * @deprecated Use .invoke() instead. Will be removed in 0.3.0.
     *
     * Calls the tool with the provided argument, configuration, and tags. It
     * parses the input according to the schema, handles any errors, and
     * manages callbacks.
     * @param arg The input argument for the tool.
     * @param configArg Optional configuration or callbacks for the tool.
     * @param tags Optional tags for the tool.
     * @returns A Promise that resolves with a string.
     */
    async call(arg, configArg, 
    /** @deprecated */
    tags) {
        let parsed;
        try {
            parsed = await this.schema.parseAsync(arg);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
        catch (e) {
            let message = `Received tool input did not match expected schema`;
            if (this.verboseParsingErrors) {
                message = `${message}\nDetails: ${e.message}`;
            }
            throw new tools_utils/* ToolInputParsingException */.q(message, JSON.stringify(arg));
        }
        const config = (0,manager.parseCallbackConfigArg)(configArg);
        const callbackManager_ = manager.CallbackManager.configure(config.callbacks, this.callbacks, config.tags || tags, this.tags, config.metadata, this.metadata, { verbose: this.verbose });
        const runManager = await callbackManager_?.handleToolStart(this.toJSON(), typeof parsed === "string" ? parsed : JSON.stringify(parsed), config.runId, undefined, undefined, undefined, config.runName);
        delete config.runId;
        let result;
        try {
            result = await this._call(parsed, runManager, config);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
        catch (e) {
            await runManager?.handleToolError(e);
            throw e;
        }
        let content;
        let artifact;
        if (this.responseFormat === "content_and_artifact") {
            if (Array.isArray(result) && result.length === 2) {
                [content, artifact] = result;
            }
            else {
                throw new Error(`Tool response format is "content_and_artifact" but the output was not a two-tuple.\nResult: ${JSON.stringify(result)}`);
            }
        }
        else {
            content = result;
        }
        let toolCallId;
        if (config && "configurable" in config) {
            toolCallId = config.configurable
                .tool_call_id;
        }
        const formattedOutput = _formatToolOutput({
            content,
            artifact,
            toolCallId,
            name: this.name,
        });
        await runManager?.handleToolEnd(formattedOutput);
        return formattedOutput;
    }
}
/**
 * Base class for Tools that accept input as a string.
 */
class Tool extends StructuredTool {
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "schema", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: lib.z
                .object({ input: lib.z.string().optional() })
                .transform((obj) => obj.input)
        });
    }
    /**
     * @deprecated Use .invoke() instead. Will be removed in 0.3.0.
     *
     * Calls the tool with the provided argument and callbacks. It handles
     * string inputs specifically.
     * @param arg The input argument for the tool, which can be a string, undefined, or an input of the tool's schema.
     * @param callbacks Optional callbacks for the tool.
     * @returns A Promise that resolves with a string.
     */
    call(arg, callbacks) {
        return super.call(typeof arg === "string" || !arg ? { input: arg } : arg, callbacks);
    }
}
/**
 * A tool that can be created dynamically from a function, name, and description.
 */
class DynamicTool extends Tool {
    static lc_name() {
        return "DynamicTool";
    }
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "description", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "func", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = fields.name;
        this.description = fields.description;
        this.func = fields.func;
        this.returnDirect = fields.returnDirect ?? this.returnDirect;
    }
    /**
     * @deprecated Use .invoke() instead. Will be removed in 0.3.0.
     */
    async call(arg, configArg) {
        const config = (0,manager.parseCallbackConfigArg)(configArg);
        if (config.runName === undefined) {
            config.runName = this.name;
        }
        return super.call(arg, config);
    }
    /** @ignore */
    async _call(input, runManager, parentConfig) {
        return this.func(input, runManager, parentConfig);
    }
}
/**
 * A tool that can be created dynamically from a function, name, and
 * description, designed to work with structured data. It extends the
 * StructuredTool class and overrides the _call method to execute the
 * provided function when the tool is called.
 *
 * Schema can be passed as Zod or JSON schema. The tool will not validate
 * input if JSON schema is passed.
 */
class DynamicStructuredTool extends StructuredTool {
    static lc_name() {
        return "DynamicStructuredTool";
    }
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "description", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "func", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "schema", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = fields.name;
        this.description = fields.description;
        this.func = fields.func;
        this.returnDirect = fields.returnDirect ?? this.returnDirect;
        this.schema = (isZodSchema(fields.schema) ? fields.schema : lib.z.object({}).passthrough());
    }
    /**
     * @deprecated Use .invoke() instead. Will be removed in 0.3.0.
     */
    async call(arg, configArg, 
    /** @deprecated */
    tags) {
        const config = (0,manager.parseCallbackConfigArg)(configArg);
        if (config.runName === undefined) {
            config.runName = this.name;
        }
        return super.call(arg, config, tags);
    }
    _call(arg, runManager, parentConfig) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this.func(arg, runManager, parentConfig);
    }
}
/**
 * Abstract base class for toolkits in LangChain. Toolkits are collections
 * of tools that agents can use. Subclasses must implement the `tools`
 * property to provide the specific tools for the toolkit.
 */
class BaseToolkit {
    getTools() {
        return this.tools;
    }
}
function tools_tool(func, fields) {
    // If the schema is not provided, or it's a string schema, create a DynamicTool
    if (!fields.schema ||
        (isZodSchema(fields.schema) &&
            (!("shape" in fields.schema) || !fields.schema.shape))) {
        return new DynamicTool({
            ...fields,
            description: fields.description ??
                fields.schema?.description ??
                `${fields.name} tool`,
            func: async (input, runManager, config) => {
                return new Promise((resolve, reject) => {
                    const childConfig = (0,runnables_config/* patchConfig */.tn)(config, {
                        callbacks: runManager?.getChild(),
                    });
                    void singletons/* AsyncLocalStorageProviderSingleton */.Nx.runWithConfig((0,runnables_config/* pickRunnableConfigKeys */.DY)(childConfig), async () => {
                        try {
                            // TS doesn't restrict the type here based on the guard above
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            resolve(func(input, childConfig));
                        }
                        catch (e) {
                            reject(e);
                        }
                    });
                });
            },
        });
    }
    const description = fields.description ?? fields.schema.description ?? `${fields.name} tool`;
    return new DynamicStructuredTool({
        ...fields,
        description,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        schema: fields.schema,
        // TODO: Consider moving into DynamicStructuredTool constructor
        func: async (input, runManager, config) => {
            return new Promise((resolve, reject) => {
                const childConfig = (0,runnables_config/* patchConfig */.tn)(config, {
                    callbacks: runManager?.getChild(),
                });
                void singletons/* AsyncLocalStorageProviderSingleton */.Nx.runWithConfig((0,runnables_config/* pickRunnableConfigKeys */.DY)(childConfig), async () => {
                    try {
                        // TS doesn't restrict the type here based on the guard above
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        resolve(func(input, childConfig));
                    }
                    catch (e) {
                        reject(e);
                    }
                });
            });
        },
    });
}
function _formatToolOutput(params) {
    const { content, artifact, toolCallId } = params;
    if (toolCallId && !(0,tool/* isDirectToolOutput */.fK)(content)) {
        if (typeof content === "string" ||
            (Array.isArray(content) &&
                content.every((item) => typeof item === "object"))) {
            return new tool/* ToolMessage */.uf({
                content,
                artifact,
                tool_call_id: toolCallId,
                name: params.name,
            });
        }
        else {
            return new tool/* ToolMessage */.uf({
                content: _stringify(content),
                artifact,
                tool_call_id: toolCallId,
                name: params.name,
            });
        }
    }
    else {
        return content;
    }
}
function _stringify(content) {
    try {
        return JSON.stringify(content, null, 2);
    }
    catch (_noOp) {
        return `${content}`;
    }
}

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/tracers/base.js
var tracers_base = __webpack_require__(80383);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/tracers/console.js
var tracers_console = __webpack_require__(77853);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/tracers/tracer_langchain.js + 1 modules
var tracer_langchain = __webpack_require__(86259);
// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/utils/env.js
var env = __webpack_require__(18624);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/tracers/tracer_langchain_v1.js



/** @deprecated Use LangChainTracer instead. */
class LangChainTracerV1 extends tracers_base.BaseTracer {
    constructor() {
        super();
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "langchain_tracer"
        });
        Object.defineProperty(this, "endpoint", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (0,env.getEnvironmentVariable)("LANGCHAIN_ENDPOINT") || "http://localhost:1984"
        });
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                "Content-Type": "application/json",
            }
        });
        Object.defineProperty(this, "session", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const apiKey = (0,env.getEnvironmentVariable)("LANGCHAIN_API_KEY");
        if (apiKey) {
            this.headers["x-api-key"] = apiKey;
        }
    }
    async newSession(sessionName) {
        const sessionCreate = {
            start_time: Date.now(),
            name: sessionName,
        };
        const session = await this.persistSession(sessionCreate);
        this.session = session;
        return session;
    }
    async loadSession(sessionName) {
        const endpoint = `${this.endpoint}/sessions?name=${sessionName}`;
        return this._handleSessionResponse(endpoint);
    }
    async loadDefaultSession() {
        const endpoint = `${this.endpoint}/sessions?name=default`;
        return this._handleSessionResponse(endpoint);
    }
    async convertV2RunToRun(run) {
        const session = this.session ?? (await this.loadDefaultSession());
        const serialized = run.serialized;
        let runResult;
        if (run.run_type === "llm") {
            const prompts = run.inputs.prompts
                ? run.inputs.prompts
                : run.inputs.messages.map((x) => (0,utils/* getBufferString */.Sw)(x));
            const llmRun = {
                uuid: run.id,
                start_time: run.start_time,
                end_time: run.end_time,
                execution_order: run.execution_order,
                child_execution_order: run.child_execution_order,
                serialized,
                type: run.run_type,
                session_id: session.id,
                prompts,
                response: run.outputs,
            };
            runResult = llmRun;
        }
        else if (run.run_type === "chain") {
            const child_runs = await Promise.all(run.child_runs.map((child_run) => this.convertV2RunToRun(child_run)));
            const chainRun = {
                uuid: run.id,
                start_time: run.start_time,
                end_time: run.end_time,
                execution_order: run.execution_order,
                child_execution_order: run.child_execution_order,
                serialized,
                type: run.run_type,
                session_id: session.id,
                inputs: run.inputs,
                outputs: run.outputs,
                child_llm_runs: child_runs.filter((child_run) => child_run.type === "llm"),
                child_chain_runs: child_runs.filter((child_run) => child_run.type === "chain"),
                child_tool_runs: child_runs.filter((child_run) => child_run.type === "tool"),
            };
            runResult = chainRun;
        }
        else if (run.run_type === "tool") {
            const child_runs = await Promise.all(run.child_runs.map((child_run) => this.convertV2RunToRun(child_run)));
            const toolRun = {
                uuid: run.id,
                start_time: run.start_time,
                end_time: run.end_time,
                execution_order: run.execution_order,
                child_execution_order: run.child_execution_order,
                serialized,
                type: run.run_type,
                session_id: session.id,
                tool_input: run.inputs.input,
                output: run.outputs?.output,
                action: JSON.stringify(serialized),
                child_llm_runs: child_runs.filter((child_run) => child_run.type === "llm"),
                child_chain_runs: child_runs.filter((child_run) => child_run.type === "chain"),
                child_tool_runs: child_runs.filter((child_run) => child_run.type === "tool"),
            };
            runResult = toolRun;
        }
        else {
            throw new Error(`Unknown run type: ${run.run_type}`);
        }
        return runResult;
    }
    async persistRun(run) {
        let endpoint;
        let v1Run;
        if (run.run_type !== undefined) {
            v1Run = await this.convertV2RunToRun(run);
        }
        else {
            v1Run = run;
        }
        if (v1Run.type === "llm") {
            endpoint = `${this.endpoint}/llm-runs`;
        }
        else if (v1Run.type === "chain") {
            endpoint = `${this.endpoint}/chain-runs`;
        }
        else {
            endpoint = `${this.endpoint}/tool-runs`;
        }
        const response = await fetch(endpoint, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(v1Run),
        });
        if (!response.ok) {
            console.error(`Failed to persist run: ${response.status} ${response.statusText}`);
        }
    }
    async persistSession(sessionCreate) {
        const endpoint = `${this.endpoint}/sessions`;
        const response = await fetch(endpoint, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(sessionCreate),
        });
        if (!response.ok) {
            console.error(`Failed to persist session: ${response.status} ${response.statusText}, using default session.`);
            return {
                id: 1,
                ...sessionCreate,
            };
        }
        return {
            id: (await response.json()).id,
            ...sessionCreate,
        };
    }
    async _handleSessionResponse(endpoint) {
        const response = await fetch(endpoint, {
            method: "GET",
            headers: this.headers,
        });
        let tracerSession;
        if (!response.ok) {
            console.error(`Failed to load session: ${response.status} ${response.statusText}`);
            tracerSession = {
                id: 1,
                start_time: Date.now(),
            };
            this.session = tracerSession;
            return tracerSession;
        }
        const resp = (await response.json());
        if (resp.length === 0) {
            tracerSession = {
                id: 1,
                start_time: Date.now(),
            };
            this.session = tracerSession;
            return tracerSession;
        }
        [tracerSession] = resp;
        this.session = tracerSession;
        return tracerSession;
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/tracers/initialize.js


/**
 * @deprecated Use the V2 handler instead.
 *
 * Function that returns an instance of `LangChainTracerV1`. If a session
 * is provided, it loads that session into the tracer; otherwise, it loads
 * a default session.
 * @param session Optional session to load into the tracer.
 * @returns An instance of `LangChainTracerV1`.
 */
async function getTracingCallbackHandler(session) {
    const tracer = new LangChainTracerV1();
    if (session) {
        await tracer.loadSession(session);
    }
    else {
        await tracer.loadDefaultSession();
    }
    return tracer;
}
/**
 * @deprecated Instantiate directly using the LangChainTracer constructor.
 *
 * Function that returns an instance of `LangChainTracer`. It does not
 * load any session data.
 * @returns An instance of `LangChainTracer`.
 */
async function getTracingV2CallbackHandler() {
    return new tracer_langchain.LangChainTracer();
}

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/tracers/log_stream.js
var log_stream = __webpack_require__(33901);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/tracers/run_collector.js

/**
 * A callback handler that collects traced runs and makes it easy to fetch the traced run object from calls through any langchain object.
 * For instance, it makes it easy to fetch the run ID and then do things with that, such as log feedback.
 */
class RunCollectorCallbackHandler extends tracers_base.BaseTracer {
    /**
     * Creates a new instance of the RunCollectorCallbackHandler class.
     * @param exampleId The ID of the example.
     */
    constructor({ exampleId } = {}) {
        super({ _awaitHandler: true });
        /** The name of the callback handler. */
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "run_collector"
        });
        /** The ID of the example. */
        Object.defineProperty(this, "exampleId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** An array of traced runs. */
        Object.defineProperty(this, "tracedRuns", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.exampleId = exampleId;
        this.tracedRuns = [];
    }
    /**
     * Persists the given run object.
     * @param run The run object to persist.
     */
    async persistRun(run) {
        const run_ = { ...run };
        run_.reference_example_id = this.exampleId;
        this.tracedRuns.push(run_);
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/chunk_array.js
const chunkArray = (arr, chunkSize) => arr.reduce((chunks, elem, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    const chunk = chunks[chunkIndex] || [];
    // eslint-disable-next-line no-param-reassign
    chunks[chunkIndex] = chunk.concat([elem]);
    return chunks;
}, []);

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/function_calling.js



/**
 * Formats a `StructuredTool` or `RunnableToolLike` instance into a format
 * that is compatible with OpenAI function calling. It uses the `zodToJsonSchema`
 * function to convert the schema of the `StructuredTool` or `RunnableToolLike`
 * into a JSON schema, which is then used as the parameters for the OpenAI function.
 *
 * @param {StructuredToolInterface | RunnableToolLike} tool The tool to convert to an OpenAI function.
 * @returns {FunctionDefinition} The inputted tool in OpenAI function format.
 */
function function_calling_convertToOpenAIFunction(tool, fields) {
    // @TODO 0.3.0 Remove the `number` typing
    const fieldsCopy = typeof fields === "number" ? undefined : fields;
    return {
        name: tool.name,
        description: tool.description,
        parameters: (0,esm/* zodToJsonSchema */.Ik)(tool.schema),
        // Do not include the `strict` field if it is `undefined`.
        ...(fieldsCopy?.strict !== undefined ? { strict: fieldsCopy.strict } : {}),
    };
}
/**
 * Formats a `StructuredTool` or `RunnableToolLike` instance into a
 * format that is compatible with OpenAI tool calling. It uses the
 * `zodToJsonSchema` function to convert the schema of the `StructuredTool`
 * or `RunnableToolLike` into a JSON schema, which is then used as the
 * parameters for the OpenAI tool.
 *
 * @param {StructuredToolInterface | Record<string, any> | RunnableToolLike} tool The tool to convert to an OpenAI tool.
 * @returns {ToolDefinition} The inputted tool in OpenAI tool format.
 */
function convertToOpenAITool(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
tool, fields) {
    // @TODO 0.3.0 Remove the `number` typing
    const fieldsCopy = typeof fields === "number" ? undefined : fields;
    let toolDef;
    if (isLangChainTool(tool)) {
        toolDef = {
            type: "function",
            function: function_calling_convertToOpenAIFunction(tool),
        };
    }
    else {
        toolDef = tool;
    }
    if (fieldsCopy?.strict !== undefined) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        toolDef.function.strict = fieldsCopy.strict;
    }
    return toolDef;
}
/**
 * Confirm whether the inputted tool is an instance of `StructuredToolInterface`.
 *
 * @param {StructuredToolInterface | Record<string, any> | undefined} tool The tool to check if it is an instance of `StructuredToolInterface`.
 * @returns {tool is StructuredToolInterface} Whether the inputted tool is an instance of `StructuredToolInterface`.
 */
function isStructuredTool(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
tool) {
    return (tool !== undefined &&
        Array.isArray(tool.lc_namespace));
}
/**
 * Confirm whether the inputted tool is an instance of `RunnableToolLike`.
 *
 * @param {unknown | undefined} tool The tool to check if it is an instance of `RunnableToolLike`.
 * @returns {tool is RunnableToolLike} Whether the inputted tool is an instance of `RunnableToolLike`.
 */
function isRunnableToolLike(tool) {
    return (tool !== undefined &&
        runnables_base/* Runnable */.YN.isRunnable(tool) &&
        "lc_name" in tool.constructor &&
        typeof tool.constructor.lc_name === "function" &&
        tool.constructor.lc_name() === "RunnableToolLike");
}
/**
 * Confirm whether or not the tool contains the necessary properties to be considered a `StructuredToolParams`.
 *
 * @param {unknown | undefined} tool The object to check if it is a `StructuredToolParams`.
 * @returns {tool is StructuredToolParams} Whether the inputted object is a `StructuredToolParams`.
 */
function isStructuredToolParams(tool) {
    return (!!tool &&
        typeof tool === "object" &&
        "name" in tool &&
        "schema" in tool &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        isZodSchema(tool.schema));
}
/**
 * Whether or not the tool is one of StructuredTool, RunnableTool or StructuredToolParams.
 * It returns `is StructuredToolParams` since that is the most minimal interface of the three,
 * while still containing the necessary properties to be passed to a LLM for tool calling.
 *
 * @param {unknown | undefined} tool The tool to check if it is a LangChain tool.
 * @returns {tool is StructuredToolParams} Whether the inputted tool is a LangChain tool.
 */
function isLangChainTool(tool) {
    return (isStructuredToolParams(tool) ||
        isRunnableToolLike(tool) ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        isStructuredTool(tool));
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/json_schema.js


;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/ml-distance/similarities.js
/**
 * Returns the average of cosine distances between vectors a and b
 * @param a - first vector
 * @param b - second vector
 *
 */
function cosine(a, b) {
    let p = 0;
    let p2 = 0;
    let q2 = 0;
    for (let i = 0; i < a.length; i++) {
        p += a[i] * b[i];
        p2 += a[i] * a[i];
        q2 += b[i] * b[i];
    }
    return p / (Math.sqrt(p2) * Math.sqrt(q2));
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/ml-distance/distances.js
/**
 *Returns the Inner Product similarity between vectors a and b
 * @link [Inner Product Similarity algorithm](https://www.naun.org/main/NAUN/ijmmas/mmmas-49.pdf)
 * @param a - first vector
 * @param b - second vector
 *
 */
function innerProduct(a, b) {
    let ans = 0;
    for (let i = 0; i < a.length; i++) {
        ans += a[i] * b[i];
    }
    return ans;
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/ml-distance-euclidean/euclidean.js
function squaredEuclidean(p, q) {
    let d = 0;
    for (let i = 0; i < p.length; i++) {
        d += (p[i] - q[i]) * (p[i] - q[i]);
    }
    return d;
}
function euclidean(p, q) {
    return Math.sqrt(squaredEuclidean(p, q));
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/math.js



/**
 * Apply a row-wise function between two matrices with the same number of columns.
 *
 * @param {number[][]} X - The first matrix.
 * @param {number[][]} Y - The second matrix.
 * @param {VectorFunction} func - The function to apply.
 *
 * @throws {Error} If the number of columns in X and Y are not the same.
 *
 * @returns {number[][] | [[]]} A matrix where each row represents the result of applying the function between the corresponding rows of X and Y.
 */
function matrixFunc(X, Y, func) {
    if (X.length === 0 ||
        X[0].length === 0 ||
        Y.length === 0 ||
        Y[0].length === 0) {
        return [[]];
    }
    if (X[0].length !== Y[0].length) {
        throw new Error(`Number of columns in X and Y must be the same. X has shape ${[
            X.length,
            X[0].length,
        ]} and Y has shape ${[Y.length, Y[0].length]}.`);
    }
    return X.map((xVector) => Y.map((yVector) => func(xVector, yVector)).map((similarity) => Number.isNaN(similarity) ? 0 : similarity));
}
function normalize(M, similarity = false) {
    const max = matrixMaxVal(M);
    return M.map((row) => row.map((val) => (similarity ? 1 - val / max : val / max)));
}
/**
 * This function calculates the row-wise cosine similarity between two matrices with the same number of columns.
 *
 * @param {number[][]} X - The first matrix.
 * @param {number[][]} Y - The second matrix.
 *
 * @throws {Error} If the number of columns in X and Y are not the same.
 *
 * @returns {number[][] | [[]]} A matrix where each row represents the cosine similarity values between the corresponding rows of X and Y.
 */
function cosineSimilarity(X, Y) {
    return matrixFunc(X, Y, cosine);
}
function math_innerProduct(X, Y) {
    return matrixFunc(X, Y, innerProduct);
}
function euclideanDistance(X, Y) {
    return matrixFunc(X, Y, euclidean);
}
/**
 * This function implements the Maximal Marginal Relevance algorithm
 * to select a set of embeddings that maximizes the diversity and relevance to a query embedding.
 *
 * @param {number[]|number[][]} queryEmbedding - The query embedding.
 * @param {number[][]} embeddingList - The list of embeddings to select from.
 * @param {number} [lambda=0.5] - The trade-off parameter between relevance and diversity.
 * @param {number} [k=4] - The maximum number of embeddings to select.
 *
 * @returns {number[]} The indexes of the selected embeddings in the embeddingList.
 */
function maximalMarginalRelevance(queryEmbedding, embeddingList, lambda = 0.5, k = 4) {
    if (Math.min(k, embeddingList.length) <= 0) {
        return [];
    }
    const queryEmbeddingExpanded = (Array.isArray(queryEmbedding[0]) ? queryEmbedding : [queryEmbedding]);
    const similarityToQuery = cosineSimilarity(queryEmbeddingExpanded, embeddingList)[0];
    const mostSimilarEmbeddingIndex = argMax(similarityToQuery).maxIndex;
    const selectedEmbeddings = [embeddingList[mostSimilarEmbeddingIndex]];
    const selectedEmbeddingsIndexes = [mostSimilarEmbeddingIndex];
    while (selectedEmbeddingsIndexes.length < Math.min(k, embeddingList.length)) {
        let bestScore = -Infinity;
        let bestIndex = -1;
        const similarityToSelected = cosineSimilarity(embeddingList, selectedEmbeddings);
        similarityToQuery.forEach((queryScore, queryScoreIndex) => {
            if (selectedEmbeddingsIndexes.includes(queryScoreIndex)) {
                return;
            }
            const maxSimilarityToSelected = Math.max(...similarityToSelected[queryScoreIndex]);
            const score = lambda * queryScore - (1 - lambda) * maxSimilarityToSelected;
            if (score > bestScore) {
                bestScore = score;
                bestIndex = queryScoreIndex;
            }
        });
        selectedEmbeddings.push(embeddingList[bestIndex]);
        selectedEmbeddingsIndexes.push(bestIndex);
    }
    return selectedEmbeddingsIndexes;
}
/**
 * Finds the index of the maximum value in the given array.
 * @param {number[]} array - The input array.
 *
 * @returns {number} The index of the maximum value in the array. If the array is empty, returns -1.
 */
function argMax(array) {
    if (array.length === 0) {
        return {
            maxIndex: -1,
            maxValue: NaN,
        };
    }
    let maxValue = array[0];
    let maxIndex = 0;
    for (let i = 1; i < array.length; i += 1) {
        if (array[i] > maxValue) {
            maxIndex = i;
            maxValue = array[i];
        }
    }
    return { maxIndex, maxValue };
}
function matrixMaxVal(arrays) {
    return arrays.reduce((acc, array) => Math.max(acc, argMax(array).maxValue), 0);
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/vectorstores.js


/**
 * Class for retrieving documents from a `VectorStore` based on vector similarity
 * or maximal marginal relevance (MMR).
 *
 * `VectorStoreRetriever` extends `BaseRetriever`, implementing methods for
 * adding documents to the underlying vector store and performing document
 * retrieval with optional configurations.
 *
 * @class VectorStoreRetriever
 * @extends BaseRetriever
 * @implements VectorStoreRetrieverInterface
 * @template V - Type of vector store implementing `VectorStoreInterface`.
 */
class VectorStoreRetriever extends BaseRetriever {
    static lc_name() {
        return "VectorStoreRetriever";
    }
    get lc_namespace() {
        return ["langchain_core", "vectorstores"];
    }
    /**
     * Returns the type of vector store, as defined by the `vectorStore` instance.
     *
     * @returns {string} The vector store type.
     */
    _vectorstoreType() {
        return this.vectorStore._vectorstoreType();
    }
    /**
     * Initializes a new instance of `VectorStoreRetriever` with the specified configuration.
     *
     * This constructor configures the retriever to interact with a given `VectorStore`
     * and supports different retrieval strategies, including similarity search and maximal
     * marginal relevance (MMR) search. Various options allow customization of the number
     * of documents retrieved per query, filtering based on conditions, and fine-tuning
     * MMR-specific parameters.
     *
     * @param fields - Configuration options for setting up the retriever:
     *
     *   - `vectorStore` (required): The `VectorStore` instance implementing `VectorStoreInterface`
     *     that will be used to store and retrieve document embeddings. This is the core component
     *     of the retriever, enabling vector-based similarity and MMR searches.
     *
     *   - `k` (optional): Specifies the number of documents to retrieve per search query. If not
     *     provided, defaults to 4. This count determines the number of most relevant documents returned
     *     for each search operation, balancing performance with comprehensiveness.
     *
     *   - `searchType` (optional): Defines the search approach used by the retriever, allowing for
     *     flexibility between two methods:
     *       - `"similarity"` (default): A similarity-based search, retrieving documents with high vector
     *         similarity to the query. This type prioritizes relevance and is often used when diversity
     *         among results is less critical.
     *       - `"mmr"`: Maximal Marginal Relevance search, which combines relevance with diversity. MMR
     *         is useful for scenarios where varied content is essential, as it selects results that
     *         both match the query and introduce content diversity.
     *
     *   - `filter` (optional): A filter of type `FilterType`, defined by the vector store, that allows
     *     for refined and targeted search results. This filter applies specified conditions to limit
     *     which documents are eligible for retrieval, offering control over the scope of results.
     *
     *   - `searchKwargs` (optional, applicable only if `searchType` is `"mmr"`): Additional settings
     *     for configuring MMR-specific behavior. These parameters allow further tuning of the MMR
     *     search process:
     *       - `fetchK`: The initial number of documents fetched from the vector store before the MMR
     *         algorithm is applied. Fetching a larger set enables the algorithm to select a more
     *         diverse subset of documents.
     *       - `lambda`: A parameter controlling the relevance-diversity balance, where 0 emphasizes
     *         diversity and 1 prioritizes relevance. Intermediate values provide a blend of the two,
     *         allowing customization based on the importance of content variety relative to query relevance.
     */
    constructor(fields) {
        super(fields);
        /**
         * The instance of `VectorStore` used for storing and retrieving document embeddings.
         * This vector store must implement the `VectorStoreInterface` to be compatible
         * with the retriever’s operations.
         */
        Object.defineProperty(this, "vectorStore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Specifies the number of documents to retrieve for each search query.
         * Defaults to 4 if not specified, providing a basic result count for similarity or MMR searches.
         */
        Object.defineProperty(this, "k", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 4
        });
        /**
         * Determines the type of search operation to perform on the vector store.
         *
         * - `"similarity"` (default): Conducts a similarity search based purely on vector similarity
         *   to the query.
         * - `"mmr"`: Executes a maximal marginal relevance (MMR) search, balancing relevance and
         *   diversity in the retrieved results.
         */
        Object.defineProperty(this, "searchType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "similarity"
        });
        /**
         * Additional options specific to maximal marginal relevance (MMR) search, applicable
         * only if `searchType` is set to `"mmr"`.
         *
         * Includes:
         * - `fetchK`: The initial number of documents fetched before applying the MMR algorithm,
         *   allowing for a larger selection from which to choose the most diverse results.
         * - `lambda`: A parameter between 0 and 1 to adjust the relevance-diversity balance,
         *   where 0 prioritizes diversity and 1 prioritizes relevance.
         */
        Object.defineProperty(this, "searchKwargs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Optional filter applied to search results, defined by the `FilterType` of the vector store.
         * Allows for refined, targeted results by restricting the returned documents based
         * on specified filter criteria.
         */
        Object.defineProperty(this, "filter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.vectorStore = fields.vectorStore;
        this.k = fields.k ?? this.k;
        this.searchType = fields.searchType ?? this.searchType;
        this.filter = fields.filter;
        if (fields.searchType === "mmr") {
            this.searchKwargs = fields.searchKwargs;
        }
    }
    /**
     * Retrieves relevant documents based on the specified query, using either
     * similarity or maximal marginal relevance (MMR) search.
     *
     * If `searchType` is set to `"mmr"`, performs an MMR search to balance
     * similarity and diversity among results. If `searchType` is `"similarity"`,
     * retrieves results purely based on similarity to the query.
     *
     * @param query - The query string used to find relevant documents.
     * @param runManager - Optional callback manager for tracking retrieval progress.
     * @returns A promise that resolves to an array of `DocumentInterface` instances
     *          representing the most relevant documents to the query.
     * @throws {Error} Throws an error if MMR search is requested but not supported
     *                 by the vector store.
     * @protected
     */
    async _getRelevantDocuments(query, runManager) {
        if (this.searchType === "mmr") {
            if (typeof this.vectorStore.maxMarginalRelevanceSearch !== "function") {
                throw new Error(`The vector store backing this retriever, ${this._vectorstoreType()} does not support max marginal relevance search.`);
            }
            return this.vectorStore.maxMarginalRelevanceSearch(query, {
                k: this.k,
                filter: this.filter,
                ...this.searchKwargs,
            }, runManager?.getChild("vectorstore"));
        }
        return this.vectorStore.similaritySearch(query, this.k, this.filter, runManager?.getChild("vectorstore"));
    }
    /**
     * Adds an array of documents to the vector store, embedding them as part of
     * the storage process.
     *
     * This method delegates document embedding and storage to the `addDocuments`
     * method of the underlying vector store.
     *
     * @param documents - An array of documents to embed and add to the vector store.
     * @param options - Optional settings to customize document addition.
     * @returns A promise that resolves to an array of document IDs or `void`,
     *          depending on the vector store's implementation.
     */
    async addDocuments(documents, options) {
        return this.vectorStore.addDocuments(documents, options);
    }
}
/**
 * Abstract class representing a vector storage system for performing
 * similarity searches on embedded documents.
 *
 * `VectorStore` provides methods for adding precomputed vectors or documents,
 * removing documents based on criteria, and performing similarity searches
 * with optional scoring. Subclasses are responsible for implementing specific
 * storage mechanisms and the exact behavior of certain abstract methods.
 *
 * @abstract
 * @extends Serializable
 * @implements VectorStoreInterface
 */
class VectorStore extends serializable.Serializable {
    /**
     * Initializes a new vector store with embeddings and database configuration.
     *
     * @param embeddings - Instance of `EmbeddingsInterface` used to embed queries.
     * @param dbConfig - Configuration settings for the database or storage system.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(embeddings, dbConfig) {
        super(dbConfig);
        /**
         * Namespace within LangChain to uniquely identify this vector store's
         * location, based on the vector store type.
         *
         * @internal
         */
        // Only ever instantiated in main LangChain
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain", "vectorstores", this._vectorstoreType()]
        });
        /**
         * Embeddings interface for generating vector embeddings from text queries,
         * enabling vector-based similarity searches.
         */
        Object.defineProperty(this, "embeddings", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.embeddings = embeddings;
    }
    /**
     * Deletes documents from the vector store based on the specified parameters.
     *
     * @param _params - Flexible key-value pairs defining conditions for document deletion.
     * @returns A promise that resolves once the deletion is complete.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async delete(_params) {
        throw new Error("Not implemented.");
    }
    /**
     * Searches for documents similar to a text query by embedding the query and
     * performing a similarity search on the resulting vector.
     *
     * @param query - Text query for finding similar documents.
     * @param k - Number of similar results to return. Defaults to 4.
     * @param filter - Optional filter based on `FilterType`.
     * @param _callbacks - Optional callbacks for monitoring search progress
     * @returns A promise resolving to an array of `DocumentInterface` instances representing similar documents.
     */
    async similaritySearch(query, k = 4, filter = undefined, _callbacks = undefined // implement passing to embedQuery later
    ) {
        const results = await this.similaritySearchVectorWithScore(await this.embeddings.embedQuery(query), k, filter);
        return results.map((result) => result[0]);
    }
    /**
     * Searches for documents similar to a text query by embedding the query,
     * and returns results with similarity scores.
     *
     * @param query - Text query for finding similar documents.
     * @param k - Number of similar results to return. Defaults to 4.
     * @param filter - Optional filter based on `FilterType`.
     * @param _callbacks - Optional callbacks for monitoring search progress
     * @returns A promise resolving to an array of tuples, each containing a
     *          document and its similarity score.
     */
    async similaritySearchWithScore(query, k = 4, filter = undefined, _callbacks = undefined // implement passing to embedQuery later
    ) {
        return this.similaritySearchVectorWithScore(await this.embeddings.embedQuery(query), k, filter);
    }
    /**
     * Creates a `VectorStore` instance from an array of text strings and optional
     * metadata, using the specified embeddings and database configuration.
     *
     * Subclasses must implement this method to define how text and metadata
     * are embedded and stored in the vector store. Throws an error if not overridden.
     *
     * @param _texts - Array of strings representing the text documents to be stored.
     * @param _metadatas - Metadata for the texts, either as an array (one for each text)
     *                     or a single object (applied to all texts).
     * @param _embeddings - Instance of `EmbeddingsInterface` to embed the texts.
     * @param _dbConfig - Database configuration settings.
     * @returns A promise that resolves to a new `VectorStore` instance.
     * @throws {Error} Throws an error if this method is not overridden by a subclass.
     */
    static fromTexts(_texts, _metadatas, _embeddings, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _dbConfig) {
        throw new Error("the Langchain vectorstore implementation you are using forgot to override this, please report a bug");
    }
    /**
     * Creates a `VectorStore` instance from an array of documents, using the specified
     * embeddings and database configuration.
     *
     * Subclasses must implement this method to define how documents are embedded
     * and stored. Throws an error if not overridden.
     *
     * @param _docs - Array of `DocumentInterface` instances representing the documents to be stored.
     * @param _embeddings - Instance of `EmbeddingsInterface` to embed the documents.
     * @param _dbConfig - Database configuration settings.
     * @returns A promise that resolves to a new `VectorStore` instance.
     * @throws {Error} Throws an error if this method is not overridden by a subclass.
     */
    static fromDocuments(_docs, _embeddings, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _dbConfig) {
        throw new Error("the Langchain vectorstore implementation you are using forgot to override this, please report a bug");
    }
    /**
     * Creates a `VectorStoreRetriever` instance with flexible configuration options.
     *
     * @param kOrFields
     *    - If a number is provided, it sets the `k` parameter (number of items to retrieve).
     *    - If an object is provided, it should contain various configuration options.
     * @param filter
     *    - Optional filter criteria to limit the items retrieved based on the specified filter type.
     * @param callbacks
     *    - Optional callbacks that may be triggered at specific stages of the retrieval process.
     * @param tags
     *    - Tags to categorize or label the `VectorStoreRetriever`. Defaults to an empty array if not provided.
     * @param metadata
     *    - Additional metadata as key-value pairs to add contextual information for the retrieval process.
     * @param verbose
     *    - If `true`, enables detailed logging for the retrieval process. Defaults to `false`.
     *
     * @returns
     *    - A configured `VectorStoreRetriever` instance based on the provided parameters.
     *
     * @example
     * Basic usage with a `k` value:
     * ```typescript
     * const retriever = myVectorStore.asRetriever(5);
     * ```
     *
     * Usage with a configuration object:
     * ```typescript
     * const retriever = myVectorStore.asRetriever({
     *   k: 10,
     *   filter: myFilter,
     *   tags: ['example', 'test'],
     *   verbose: true,
     *   searchType: 'mmr',
     *   searchKwargs: { alpha: 0.5 },
     * });
     * ```
     */
    asRetriever(kOrFields, filter, callbacks, tags, metadata, verbose) {
        if (typeof kOrFields === "number") {
            return new VectorStoreRetriever({
                vectorStore: this,
                k: kOrFields,
                filter,
                tags: [...(tags ?? []), this._vectorstoreType()],
                metadata,
                verbose,
                callbacks,
            });
        }
        else {
            const params = {
                vectorStore: this,
                k: kOrFields?.k,
                filter: kOrFields?.filter,
                tags: [...(kOrFields?.tags ?? []), this._vectorstoreType()],
                metadata: kOrFields?.metadata,
                verbose: kOrFields?.verbose,
                callbacks: kOrFields?.callbacks,
                searchType: kOrFields?.searchType,
            };
            if (kOrFields?.searchType === "mmr") {
                return new VectorStoreRetriever({
                    ...params,
                    searchKwargs: kOrFields.searchKwargs,
                });
            }
            return new VectorStoreRetriever({ ...params });
        }
    }
}
/**
 * Abstract class extending `VectorStore` that defines a contract for saving
 * and loading vector store instances.
 *
 * The `SaveableVectorStore` class allows vector store implementations to
 * persist their data and retrieve it when needed.The format for saving and
 * loading data is left to the implementing subclass.
 *
 * Subclasses must implement the `save` method to handle their custom
 * serialization logic, while the `load` method enables reconstruction of a
 * vector store from saved data, requiring compatible embeddings through the
 * `EmbeddingsInterface`.
 *
 * @abstract
 * @extends VectorStore
 */
class SaveableVectorStore extends VectorStore {
    /**
     * Loads a vector store instance from the specified directory, using the
     * provided embeddings to ensure compatibility.
     *
     * This static method reconstructs a `SaveableVectorStore` from previously
     * saved data. Implementations should interpret the saved data format to
     * recreate the vector store instance.
     *
     * @param _directory - The directory path from which the vector store
     * data will be loaded.
     * @param _embeddings - An instance of `EmbeddingsInterface` to align
     * the embeddings with the loaded vector data.
     * @returns A promise that resolves to a `SaveableVectorStore` instance
     * constructed from the saved data.
     */
    static load(_directory, _embeddings) {
        throw new Error("Not implemented");
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/testing/index.js
/* eslint-disable no-promise-executor-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */














/**
 * Parser for comma-separated values. It splits the input text by commas
 * and trims the resulting values.
 */
class FakeSplitIntoListParser extends BaseOutputParser {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["tests", "fake"]
        });
    }
    getFormatInstructions() {
        return "";
    }
    async parse(text) {
        return text.split(",").map((value) => value.trim());
    }
}
class FakeRunnable extends runnables_base/* Runnable */.YN {
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["tests", "fake"]
        });
        Object.defineProperty(this, "returnOptions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.returnOptions = fields.returnOptions;
    }
    async invoke(input, options) {
        if (this.returnOptions) {
            return options ?? {};
        }
        return { input };
    }
}
class FakeLLM extends LLM {
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "response", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "thrownErrorString", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.response = fields.response;
        this.thrownErrorString = fields.thrownErrorString;
    }
    _llmType() {
        return "fake";
    }
    async _call(prompt, _options, runManager) {
        if (this.thrownErrorString) {
            throw new Error(this.thrownErrorString);
        }
        const response = this.response ?? prompt;
        await runManager?.handleLLMNewToken(response);
        return response;
    }
}
class FakeStreamingLLM extends LLM {
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "sleep", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 50
        });
        Object.defineProperty(this, "responses", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "thrownErrorString", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.sleep = fields.sleep ?? this.sleep;
        this.responses = fields.responses;
        this.thrownErrorString = fields.thrownErrorString;
    }
    _llmType() {
        return "fake";
    }
    async _call(prompt) {
        if (this.thrownErrorString) {
            throw new Error(this.thrownErrorString);
        }
        const response = this.responses?.[0];
        this.responses = this.responses?.slice(1);
        return response ?? prompt;
    }
    async *_streamResponseChunks(input, _options, runManager) {
        if (this.thrownErrorString) {
            throw new Error(this.thrownErrorString);
        }
        const response = this.responses?.[0];
        this.responses = this.responses?.slice(1);
        for (const c of response ?? input) {
            await new Promise((resolve) => setTimeout(resolve, this.sleep));
            yield { text: c, generationInfo: {} };
            await runManager?.handleLLMNewToken(c);
        }
    }
}
class FakeChatModel extends BaseChatModel {
    _combineLLMOutput() {
        return [];
    }
    _llmType() {
        return "fake";
    }
    async _generate(messages, options, runManager) {
        if (options?.stop?.length) {
            return {
                generations: [
                    {
                        message: new dist_messages.AIMessage(options.stop[0]),
                        text: options.stop[0],
                    },
                ],
            };
        }
        const text = messages
            .map((m) => {
            if (typeof m.content === "string") {
                return m.content;
            }
            return JSON.stringify(m.content, null, 2);
        })
            .join("\n");
        await runManager?.handleLLMNewToken(text);
        return {
            generations: [
                {
                    message: new dist_messages.AIMessage(text),
                    text,
                },
            ],
            llmOutput: {},
        };
    }
}
class FakeStreamingChatModel extends BaseChatModel {
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "sleep", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 50
        });
        Object.defineProperty(this, "responses", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "thrownErrorString", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.sleep = fields.sleep ?? this.sleep;
        this.responses = fields.responses;
        this.thrownErrorString = fields.thrownErrorString;
    }
    _llmType() {
        return "fake";
    }
    async _generate(messages, _options, _runManager) {
        if (this.thrownErrorString) {
            throw new Error(this.thrownErrorString);
        }
        const content = this.responses?.[0].content ?? messages[0].content;
        const generation = {
            generations: [
                {
                    text: "",
                    message: new dist_messages.AIMessage({
                        content,
                    }),
                },
            ],
        };
        return generation;
    }
    async *_streamResponseChunks(messages, _options, _runManager) {
        if (this.thrownErrorString) {
            throw new Error(this.thrownErrorString);
        }
        const content = this.responses?.[0].content ?? messages[0].content;
        if (typeof content !== "string") {
            for (const _ of this.responses ?? messages) {
                yield new outputs.ChatGenerationChunk({
                    text: "",
                    message: new dist_messages.AIMessageChunk({
                        content,
                    }),
                });
            }
        }
        else {
            for (const _ of this.responses ?? messages) {
                yield new outputs.ChatGenerationChunk({
                    text: content,
                    message: new dist_messages.AIMessageChunk({
                        content,
                    }),
                });
            }
        }
    }
}
class FakeRetriever extends BaseRetriever {
    constructor(fields) {
        super();
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["test", "fake"]
        });
        Object.defineProperty(this, "output", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: [
                new Document({ pageContent: "foo" }),
                new Document({ pageContent: "bar" }),
            ]
        });
        this.output = fields?.output ?? this.output;
    }
    async _getRelevantDocuments(_query
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) {
        return this.output;
    }
}
/**
 * A fake Chat Model that returns a predefined list of responses. It can be used
 * for testing purposes.
 * @example
 * ```typescript
 * const chat = new FakeListChatModel({
 *   responses: ["I'll callback later.", "You 'console' them!"]
 * });
 *
 * const firstMessage = new HumanMessage("You want to hear a JavaScript joke?");
 * const secondMessage = new HumanMessage("How do you cheer up a JavaScript developer?");
 *
 * // Call the chat model with a message and log the response
 * const firstResponse = await chat.call([firstMessage]);
 * console.log({ firstResponse });
 *
 * const secondResponse = await chat.call([secondMessage]);
 * console.log({ secondResponse });
 * ```
 */
class FakeListChatModel extends BaseChatModel {
    static lc_name() {
        return "FakeListChatModel";
    }
    constructor(params) {
        super(params);
        Object.defineProperty(this, "lc_serializable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "responses", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "i", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "sleep", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "emitCustomEvent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        const { responses, sleep, emitCustomEvent } = params;
        this.responses = responses;
        this.sleep = sleep;
        this.emitCustomEvent = emitCustomEvent ?? this.emitCustomEvent;
    }
    _combineLLMOutput() {
        return [];
    }
    _llmType() {
        return "fake-list";
    }
    async _generate(_messages, options, runManager) {
        await this._sleepIfRequested();
        if (options?.thrownErrorString) {
            throw new Error(options.thrownErrorString);
        }
        if (this.emitCustomEvent) {
            await runManager?.handleCustomEvent("some_test_event", {
                someval: true,
            });
        }
        if (options?.stop?.length) {
            return {
                generations: [this._formatGeneration(options.stop[0])],
            };
        }
        else {
            const response = this._currentResponse();
            this._incrementResponse();
            return {
                generations: [this._formatGeneration(response)],
                llmOutput: {},
            };
        }
    }
    _formatGeneration(text) {
        return {
            message: new dist_messages.AIMessage(text),
            text,
        };
    }
    async *_streamResponseChunks(_messages, options, runManager) {
        const response = this._currentResponse();
        this._incrementResponse();
        if (this.emitCustomEvent) {
            await runManager?.handleCustomEvent("some_test_event", {
                someval: true,
            });
        }
        for await (const text of response) {
            await this._sleepIfRequested();
            if (options?.thrownErrorString) {
                throw new Error(options.thrownErrorString);
            }
            const chunk = this._createResponseChunk(text);
            yield chunk;
            void runManager?.handleLLMNewToken(text);
        }
    }
    async _sleepIfRequested() {
        if (this.sleep !== undefined) {
            await this._sleep();
        }
    }
    async _sleep() {
        return new Promise((resolve) => {
            setTimeout(() => resolve(), this.sleep);
        });
    }
    _createResponseChunk(text) {
        return new outputs.ChatGenerationChunk({
            message: new dist_messages.AIMessageChunk({ content: text }),
            text,
        });
    }
    _currentResponse() {
        return this.responses[this.i];
    }
    _incrementResponse() {
        if (this.i < this.responses.length - 1) {
            this.i += 1;
        }
        else {
            this.i = 0;
        }
    }
    withStructuredOutput(_params, _config) {
        return runnables_base/* RunnableLambda */.jY.from(async (input) => {
            const message = await this.invoke(input);
            return JSON.parse(message.content);
        });
    }
}
class FakeChatMessageHistory extends BaseChatMessageHistory {
    constructor() {
        super();
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "message", "fake"]
        });
        Object.defineProperty(this, "messages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    async getMessages() {
        return this.messages;
    }
    async addMessage(message) {
        this.messages.push(message);
    }
    async addUserMessage(message) {
        this.messages.push(new dist_messages.HumanMessage(message));
    }
    async addAIChatMessage(message) {
        this.messages.push(new dist_messages.AIMessage(message));
    }
    async clear() {
        this.messages = [];
    }
}
class FakeListChatMessageHistory extends BaseListChatMessageHistory {
    constructor() {
        super();
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langchain_core", "message", "fake"]
        });
        Object.defineProperty(this, "messages", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    async addMessage(message) {
        this.messages.push(message);
    }
    async getMessages() {
        return this.messages;
    }
}
class FakeTracer extends tracers_base.BaseTracer {
    constructor() {
        super();
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "fake_tracer"
        });
        Object.defineProperty(this, "runs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    persistRun(run) {
        this.runs.push(run);
        return Promise.resolve();
    }
}
class FakeTool extends StructuredTool {
    constructor(fields) {
        super(fields);
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "description", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "schema", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = fields.name;
        this.description = fields.description;
        this.schema = fields.schema;
    }
    async _call(arg, _runManager) {
        return JSON.stringify(arg);
    }
}
/**
 * A class that provides fake embeddings by overriding the embedDocuments
 * and embedQuery methods to return fixed values.
 */
class FakeEmbeddings extends Embeddings {
    constructor(params) {
        super(params ?? {});
    }
    /**
     * Generates fixed embeddings for a list of documents.
     * @param documents List of documents to generate embeddings for.
     * @returns A promise that resolves with a list of fixed embeddings for each document.
     */
    embedDocuments(documents) {
        return Promise.resolve(documents.map(() => [0.1, 0.2, 0.3, 0.4]));
    }
    /**
     * Generates a fixed embedding for a query.
     * @param _ The query to generate an embedding for.
     * @returns A promise that resolves with a fixed embedding for the query.
     */
    embedQuery(_) {
        return Promise.resolve([0.1, 0.2, 0.3, 0.4]);
    }
}
/**
 * A class that provides synthetic embeddings by overriding the
 * embedDocuments and embedQuery methods to generate embeddings based on
 * the input documents. The embeddings are generated by converting each
 * document into chunks, calculating a numerical value for each chunk, and
 * returning an array of these values as the embedding.
 */
class SyntheticEmbeddings extends Embeddings {
    constructor(params) {
        super(params ?? {});
        Object.defineProperty(this, "vectorSize", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.vectorSize = params?.vectorSize ?? 4;
    }
    /**
     * Generates synthetic embeddings for a list of documents.
     * @param documents List of documents to generate embeddings for.
     * @returns A promise that resolves with a list of synthetic embeddings for each document.
     */
    async embedDocuments(documents) {
        return Promise.all(documents.map((doc) => this.embedQuery(doc)));
    }
    /**
     * Generates a synthetic embedding for a document. The document is
     * converted into chunks, a numerical value is calculated for each chunk,
     * and an array of these values is returned as the embedding.
     * @param document The document to generate an embedding for.
     * @returns A promise that resolves with a synthetic embedding for the document.
     */
    async embedQuery(document) {
        let doc = document;
        // Only use the letters (and space) from the document, and make them lower case
        doc = doc.toLowerCase().replaceAll(/[^a-z ]/g, "");
        // Pad the document to make sure it has a divisible number of chunks
        const padMod = doc.length % this.vectorSize;
        const padGapSize = padMod === 0 ? 0 : this.vectorSize - padMod;
        const padSize = doc.length + padGapSize;
        doc = doc.padEnd(padSize, " ");
        // Break it into chunks
        const chunkSize = doc.length / this.vectorSize;
        const docChunk = [];
        for (let co = 0; co < doc.length; co += chunkSize) {
            docChunk.push(doc.slice(co, co + chunkSize));
        }
        // Turn each chunk into a number
        const ret = docChunk.map((s) => {
            let sum = 0;
            // Get a total value by adding the value of each character in the string
            for (let co = 0; co < s.length; co += 1) {
                sum += s === " " ? 0 : s.charCodeAt(co);
            }
            // Reduce this to a number between 0 and 25 inclusive
            // Then get the fractional number by dividing it by 26
            const ret = (sum % 26) / 26;
            return ret;
        });
        return ret;
    }
}
class SingleRunExtractor extends tracers_base.BaseTracer {
    constructor() {
        super();
        Object.defineProperty(this, "runPromiseResolver", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "runPromise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The name of the callback handler. */
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "single_run_extractor"
        });
        this.runPromise = new Promise((extract) => {
            this.runPromiseResolver = extract;
        });
    }
    async persistRun(run) {
        this.runPromiseResolver(run);
    }
    async extract() {
        return this.runPromise;
    }
}
/**
 * Class that extends `VectorStore` to store vectors in memory. Provides
 * methods for adding documents, performing similarity searches, and
 * creating instances from texts, documents, or an existing index.
 */
class FakeVectorStore extends VectorStore {
    _vectorstoreType() {
        return "memory";
    }
    constructor(embeddings, { similarity, ...rest } = {}) {
        super(embeddings, rest);
        Object.defineProperty(this, "memoryVectors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "similarity", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.similarity = similarity ?? cosine;
    }
    /**
     * Method to add documents to the memory vector store. It extracts the
     * text from each document, generates embeddings for them, and adds the
     * resulting vectors to the store.
     * @param documents Array of `Document` instances to be added to the store.
     * @returns Promise that resolves when all documents have been added.
     */
    async addDocuments(documents) {
        const texts = documents.map(({ pageContent }) => pageContent);
        return this.addVectors(await this.embeddings.embedDocuments(texts), documents);
    }
    /**
     * Method to add vectors to the memory vector store. It creates
     * `MemoryVector` instances for each vector and document pair and adds
     * them to the store.
     * @param vectors Array of vectors to be added to the store.
     * @param documents Array of `Document` instances corresponding to the vectors.
     * @returns Promise that resolves when all vectors have been added.
     */
    async addVectors(vectors, documents) {
        const memoryVectors = vectors.map((embedding, idx) => ({
            content: documents[idx].pageContent,
            embedding,
            metadata: documents[idx].metadata,
        }));
        this.memoryVectors = this.memoryVectors.concat(memoryVectors);
    }
    /**
     * Method to perform a similarity search in the memory vector store. It
     * calculates the similarity between the query vector and each vector in
     * the store, sorts the results by similarity, and returns the top `k`
     * results along with their scores.
     * @param query Query vector to compare against the vectors in the store.
     * @param k Number of top results to return.
     * @param filter Optional filter function to apply to the vectors before performing the search.
     * @returns Promise that resolves with an array of tuples, each containing a `Document` and its similarity score.
     */
    async similaritySearchVectorWithScore(query, k, filter) {
        const filterFunction = (memoryVector) => {
            if (!filter) {
                return true;
            }
            const doc = new Document({
                metadata: memoryVector.metadata,
                pageContent: memoryVector.content,
            });
            return filter(doc);
        };
        const filteredMemoryVectors = this.memoryVectors.filter(filterFunction);
        const searches = filteredMemoryVectors
            .map((vector, index) => ({
            similarity: this.similarity(query, vector.embedding),
            index,
        }))
            .sort((a, b) => (a.similarity > b.similarity ? -1 : 0))
            .slice(0, k);
        const result = searches.map((search) => [
            new Document({
                metadata: filteredMemoryVectors[search.index].metadata,
                pageContent: filteredMemoryVectors[search.index].content,
            }),
            search.similarity,
        ]);
        return result;
    }
    /**
     * Static method to create a `FakeVectorStore` instance from an array of
     * texts. It creates a `Document` for each text and metadata pair, and
     * adds them to the store.
     * @param texts Array of texts to be added to the store.
     * @param metadatas Array or single object of metadata corresponding to the texts.
     * @param embeddings `Embeddings` instance used to generate embeddings for the texts.
     * @param dbConfig Optional `FakeVectorStoreArgs` to configure the `FakeVectorStore` instance.
     * @returns Promise that resolves with a new `FakeVectorStore` instance.
     */
    static async fromTexts(texts, metadatas, embeddings, dbConfig) {
        const docs = [];
        for (let i = 0; i < texts.length; i += 1) {
            const metadata = Array.isArray(metadatas) ? metadatas[i] : metadatas;
            const newDoc = new Document({
                pageContent: texts[i],
                metadata,
            });
            docs.push(newDoc);
        }
        return FakeVectorStore.fromDocuments(docs, embeddings, dbConfig);
    }
    /**
     * Static method to create a `FakeVectorStore` instance from an array of
     * `Document` instances. It adds the documents to the store.
     * @param docs Array of `Document` instances to be added to the store.
     * @param embeddings `Embeddings` instance used to generate embeddings for the documents.
     * @param dbConfig Optional `FakeVectorStoreArgs` to configure the `FakeVectorStore` instance.
     * @returns Promise that resolves with a new `FakeVectorStore` instance.
     */
    static async fromDocuments(docs, embeddings, dbConfig) {
        const instance = new this(embeddings, dbConfig);
        await instance.addDocuments(docs);
        return instance;
    }
    /**
     * Static method to create a `FakeVectorStore` instance from an existing
     * index. It creates a new `FakeVectorStore` instance without adding any
     * documents or vectors.
     * @param embeddings `Embeddings` instance used to generate embeddings for the documents.
     * @param dbConfig Optional `FakeVectorStoreArgs` to configure the `FakeVectorStore` instance.
     * @returns Promise that resolves with a new `FakeVectorStore` instance.
     */
    static async fromExistingIndex(embeddings, dbConfig) {
        const instance = new this(embeddings, dbConfig);
        return instance;
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/utils/types/index.js


;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/load/import_map.js
// Auto-generated by `scripts/create-entrypoints.js`. Do not edit manually.












































// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/load/map_keys.js
var map_keys = __webpack_require__(49087);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/dist/load/index.js





function combineAliasesAndInvert(constructor) {
    const aliases = {};
    for (
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    let current = constructor; current && current.prototype; current = Object.getPrototypeOf(current)) {
        Object.assign(aliases, Reflect.get(current.prototype, "lc_aliases"));
    }
    return Object.entries(aliases).reduce((acc, [key, value]) => {
        acc[value] = key;
        return acc;
    }, {});
}
async function reviver(value) {
    const { optionalImportsMap = {}, optionalImportEntrypoints = [], importMap = {}, secretsMap = {}, path = ["$"], } = this;
    const pathStr = path.join(".");
    if (typeof value === "object" &&
        value !== null &&
        !Array.isArray(value) &&
        "lc" in value &&
        "type" in value &&
        "id" in value &&
        value.lc === 1 &&
        value.type === "secret") {
        const serialized = value;
        const [key] = serialized.id;
        if (key in secretsMap) {
            return secretsMap[key];
        }
        else {
            const secretValueInEnv = (0,env.getEnvironmentVariable)(key);
            if (secretValueInEnv) {
                return secretValueInEnv;
            }
            else {
                throw new Error(`Missing key "${key}" for ${pathStr} in load(secretsMap={})`);
            }
        }
    }
    else if (typeof value === "object" &&
        value !== null &&
        !Array.isArray(value) &&
        "lc" in value &&
        "type" in value &&
        "id" in value &&
        value.lc === 1 &&
        value.type === "not_implemented") {
        const serialized = value;
        const str = JSON.stringify(serialized);
        throw new Error(`Trying to load an object that doesn't implement serialization: ${pathStr} -> ${str}`);
    }
    else if (typeof value === "object" &&
        value !== null &&
        !Array.isArray(value) &&
        "lc" in value &&
        "type" in value &&
        "id" in value &&
        "kwargs" in value &&
        value.lc === 1) {
        const serialized = value;
        const str = JSON.stringify(serialized);
        const [name, ...namespaceReverse] = serialized.id.slice().reverse();
        const namespace = namespaceReverse.reverse();
        const importMaps = { langchain_core: import_map_namespaceObject, langchain: importMap };
        let module = null;
        const optionalImportNamespaceAliases = [namespace.join("/")];
        if (namespace[0] === "langchain_community") {
            optionalImportNamespaceAliases.push(["langchain", ...namespace.slice(1)].join("/"));
        }
        const matchingNamespaceAlias = optionalImportNamespaceAliases.find((alias) => alias in optionalImportsMap);
        if (import_constants_optionalImportEntrypoints
            .concat(optionalImportEntrypoints)
            .includes(namespace.join("/")) ||
            matchingNamespaceAlias) {
            if (matchingNamespaceAlias !== undefined) {
                module = await optionalImportsMap[matchingNamespaceAlias];
            }
            else {
                throw new Error(`Missing key "${namespace.join("/")}" for ${pathStr} in load(optionalImportsMap={})`);
            }
        }
        else {
            let finalImportMap;
            // Currently, we only support langchain and langchain_core imports.
            if (namespace[0] === "langchain" || namespace[0] === "langchain_core") {
                finalImportMap = importMaps[namespace[0]];
                namespace.shift();
            }
            else {
                throw new Error(`Invalid namespace: ${pathStr} -> ${str}`);
            }
            // The root namespace "langchain" is not a valid import.
            if (namespace.length === 0) {
                throw new Error(`Invalid namespace: ${pathStr} -> ${str}`);
            }
            // Find the longest matching namespace.
            let importMapKey;
            do {
                importMapKey = namespace.join("__");
                if (importMapKey in finalImportMap) {
                    break;
                }
                else {
                    namespace.pop();
                }
            } while (namespace.length > 0);
            // If no matching namespace is found, throw an error.
            if (importMapKey in finalImportMap) {
                module = finalImportMap[importMapKey];
            }
        }
        if (typeof module !== "object" || module === null) {
            throw new Error(`Invalid namespace: ${pathStr} -> ${str}`);
        }
        // Extract the builder from the import map.
        const builder = 
        // look for a named export with the same name as the class
        module[name] ??
            // look for an export with a lc_name property matching the class name
            // this is necessary for classes that are minified
            Object.values(module).find((v) => typeof v === "function" &&
                (0,serializable.get_lc_unique_name)(v) === name);
        if (typeof builder !== "function") {
            throw new Error(`Invalid identifer: ${pathStr} -> ${str}`);
        }
        // Recurse on the arguments, which may be serialized objects themselves
        const kwargs = await reviver.call({ ...this, path: [...path, "kwargs"] }, serialized.kwargs);
        // Construct the object
        if (serialized.type === "constructor") {
            // eslint-disable-next-line new-cap, @typescript-eslint/no-explicit-any
            const instance = new builder((0,map_keys/* mapKeys */.d4)(kwargs, map_keys/* keyFromJson */.O3, combineAliasesAndInvert(builder)));
            // Minification in severless/edge runtimes will mange the
            // name of classes presented in traces. As the names in import map
            // are present as-is even with minification, use these names instead
            Object.defineProperty(instance.constructor, "name", { value: name });
            return instance;
        }
        else {
            throw new Error(`Invalid type: ${pathStr} -> ${str}`);
        }
    }
    else if (typeof value === "object" && value !== null) {
        if (Array.isArray(value)) {
            return Promise.all(value.map((v, i) => reviver.call({ ...this, path: [...path, `${i}`] }, v)));
        }
        else {
            return Object.fromEntries(await Promise.all(Object.entries(value).map(async ([key, value]) => [
                key,
                await reviver.call({ ...this, path: [...path, key] }, value),
            ])));
        }
    }
    return value;
}
async function load(text, mappings) {
    const json = JSON.parse(text);
    return reviver.call({ ...mappings }, json);
}

;// CONCATENATED MODULE: ./node_modules/@langchain/core/load.js

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-checkpoint/dist/serde/utils/fast-safe-stringify/index.js
/* eslint-disable */
// @ts-nocheck
// Stringify that can handle circular references.
// Inlined due to ESM import issues
// Source: https://www.npmjs.com/package/fast-safe-stringify
var LIMIT_REPLACE_NODE = "[...]";
var CIRCULAR_REPLACE_NODE = "[Circular]";
var arr = [];
var replacerStack = [];
function defaultOptions() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER,
    };
}
// Regular stringify
function stringify(obj, replacer, spacer, options) {
    if (typeof options === "undefined") {
        options = defaultOptions();
    }
    decirc(obj, "", 0, [], undefined, 0, options);
    var res;
    try {
        if (replacerStack.length === 0) {
            res = JSON.stringify(obj, replacer, spacer);
        }
        else {
            res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
        }
    }
    catch (_) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    }
    finally {
        while (arr.length !== 0) {
            var part = arr.pop();
            if (part.length === 4) {
                Object.defineProperty(part[0], part[1], part[3]);
            }
            else {
                part[0][part[1]] = part[2];
            }
        }
    }
    return res;
}
function setReplace(replace, val, k, parent) {
    var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
    if (propertyDescriptor.get !== undefined) {
        if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, { value: replace });
            arr.push([parent, k, val, propertyDescriptor]);
        }
        else {
            replacerStack.push([val, k, replace]);
        }
    }
    else {
        parent[k] = replace;
        arr.push([parent, k, val]);
    }
}
function decirc(val, k, edgeIndex, stack, parent, depth, options) {
    depth += 1;
    var i;
    if (typeof val === "object" && val !== null) {
        for (i = 0; i < stack.length; i++) {
            if (stack[i] === val) {
                setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
                return;
            }
        }
        if (typeof options.depthLimit !== "undefined" &&
            depth > options.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        if (typeof options.edgesLimit !== "undefined" &&
            edgeIndex + 1 > options.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        stack.push(val);
        // Optimize for Arrays. Big arrays could kill the performance otherwise!
        if (Array.isArray(val)) {
            for (i = 0; i < val.length; i++) {
                decirc(val[i], i, i, stack, val, depth, options);
            }
        }
        else {
            var keys = Object.keys(val);
            for (i = 0; i < keys.length; i++) {
                var key = keys[i];
                decirc(val[key], key, i, stack, val, depth, options);
            }
        }
        stack.pop();
    }
}
// Stable-stringify
function compareFunction(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}
function deterministicStringify(obj, replacer, spacer, options) {
    if (typeof options === "undefined") {
        options = defaultOptions();
    }
    var tmp = deterministicDecirc(obj, "", 0, [], undefined, 0, options) || obj;
    var res;
    try {
        if (replacerStack.length === 0) {
            res = JSON.stringify(tmp, replacer, spacer);
        }
        else {
            res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
        }
    }
    catch (_) {
        return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
    }
    finally {
        // Ensure that we restore the object as it was.
        while (arr.length !== 0) {
            var part = arr.pop();
            if (part.length === 4) {
                Object.defineProperty(part[0], part[1], part[3]);
            }
            else {
                part[0][part[1]] = part[2];
            }
        }
    }
    return res;
}
function deterministicDecirc(val, k, edgeIndex, stack, parent, depth, options) {
    depth += 1;
    var i;
    if (typeof val === "object" && val !== null) {
        for (i = 0; i < stack.length; i++) {
            if (stack[i] === val) {
                setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
                return;
            }
        }
        try {
            if (typeof val.toJSON === "function") {
                return;
            }
        }
        catch (_) {
            return;
        }
        if (typeof options.depthLimit !== "undefined" &&
            depth > options.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        if (typeof options.edgesLimit !== "undefined" &&
            edgeIndex + 1 > options.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        stack.push(val);
        // Optimize for Arrays. Big arrays could kill the performance otherwise!
        if (Array.isArray(val)) {
            for (i = 0; i < val.length; i++) {
                deterministicDecirc(val[i], i, i, stack, val, depth, options);
            }
        }
        else {
            // Create a temporary object in the required way
            var tmp = {};
            var keys = Object.keys(val).sort(compareFunction);
            for (i = 0; i < keys.length; i++) {
                var key = keys[i];
                deterministicDecirc(val[key], key, i, stack, val, depth, options);
                tmp[key] = val[key];
            }
            if (typeof parent !== "undefined") {
                arr.push([parent, k, val]);
                parent[k] = tmp;
            }
            else {
                return tmp;
            }
        }
        stack.pop();
    }
}
// wraps replacer function to handle values we couldn't replace
// and mark them as replaced value
function replaceGetterValues(replacer) {
    replacer =
        typeof replacer !== "undefined"
            ? replacer
            : function (k, v) {
                return v;
            };
    return function (key, val) {
        if (replacerStack.length > 0) {
            for (var i = 0; i < replacerStack.length; i++) {
                var part = replacerStack[i];
                if (part[1] === key && part[0] === val) {
                    val = part[2];
                    replacerStack.splice(i, 1);
                    break;
                }
            }
        }
        return replacer.call(this, key, val);
    };
}

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-checkpoint/dist/serde/jsonplus.js
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-instanceof/no-instanceof */


function isLangChainSerializedObject(value) {
    return (value !== null &&
        value.lc === 1 &&
        value.type === "constructor" &&
        Array.isArray(value.id));
}
/**
 * The replacer in stringify does not allow delegation to built-in LangChain
 * serialization methods, and instead immediately calls `.toJSON()` and
 * continues to stringify subfields.
 *
 * We therefore must start from the most nested elements in the input and
 * deserialize upwards rather than top-down.
 */
async function _reviver(value) {
    if (value && typeof value === "object") {
        if (Array.isArray(value)) {
            const revivedArray = await Promise.all(value.map((item) => _reviver(item)));
            return revivedArray;
        }
        else {
            const revivedObj = {};
            for (const [k, v] of Object.entries(value)) {
                revivedObj[k] = await _reviver(v);
            }
            if (revivedObj.lc === 2 && revivedObj.type === "undefined") {
                return undefined;
            }
            else if (revivedObj.lc === 2 &&
                revivedObj.type === "constructor" &&
                Array.isArray(revivedObj.id)) {
                try {
                    const constructorName = revivedObj.id[revivedObj.id.length - 1];
                    let constructor;
                    switch (constructorName) {
                        case "Set":
                            constructor = Set;
                            break;
                        case "Map":
                            constructor = Map;
                            break;
                        case "RegExp":
                            constructor = RegExp;
                            break;
                        case "Error":
                            constructor = Error;
                            break;
                        default:
                            return revivedObj;
                    }
                    if (revivedObj.method) {
                        return constructor[revivedObj.method](...(revivedObj.args || []));
                    }
                    else {
                        return new constructor(...(revivedObj.args || []));
                    }
                }
                catch (error) {
                    return revivedObj;
                }
            }
            else if (isLangChainSerializedObject(revivedObj)) {
                return load(JSON.stringify(revivedObj));
            }
            return revivedObj;
        }
    }
    return value;
}
function _encodeConstructorArgs(
// eslint-disable-next-line @typescript-eslint/ban-types
constructor, method, args, kwargs) {
    return {
        lc: 2,
        type: "constructor",
        id: [constructor.name],
        method: method ?? null,
        args: args ?? [],
        kwargs: kwargs ?? {},
    };
}
function _default(obj) {
    if (obj === undefined) {
        return {
            lc: 2,
            type: "undefined",
        };
    }
    else if (obj instanceof Set || obj instanceof Map) {
        return _encodeConstructorArgs(obj.constructor, undefined, [
            Array.from(obj),
        ]);
    }
    else if (obj instanceof RegExp) {
        return _encodeConstructorArgs(RegExp, undefined, [obj.source, obj.flags]);
    }
    else if (obj instanceof Error) {
        return _encodeConstructorArgs(obj.constructor, undefined, [obj.message]);
        // TODO: Remove special case
    }
    else if (obj?.lg_name === "Send") {
        return {
            node: obj.node,
            args: obj.args,
        };
    }
    else {
        return obj;
    }
}
class JsonPlusSerializer {
    _dumps(obj) {
        const encoder = new TextEncoder();
        return encoder.encode(stringify(obj, (_, value) => {
            return _default(value);
        }));
    }
    dumpsTyped(obj) {
        if (obj instanceof Uint8Array) {
            return ["bytes", obj];
        }
        else {
            return ["json", this._dumps(obj)];
        }
    }
    async _loads(data) {
        const parsed = JSON.parse(data);
        return _reviver(parsed);
    }
    async loadsTyped(type, data) {
        if (type === "bytes") {
            return typeof data === "string" ? new TextEncoder().encode(data) : data;
        }
        else if (type === "json") {
            return this._loads(typeof data === "string" ? data : new TextDecoder().decode(data));
        }
        else {
            throw new Error(`Unknown serialization type: ${type}`);
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-checkpoint/dist/base.js



function deepCopy(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    const newObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            newObj[key] = deepCopy(obj[key]);
        }
    }
    return newObj;
}
/** @hidden */
function emptyCheckpoint() {
    return {
        v: 1,
        id: uuid6(-2),
        ts: new Date().toISOString(),
        channel_values: {},
        channel_versions: {},
        versions_seen: {},
        pending_sends: [],
    };
}
/** @hidden */
function copyCheckpoint(checkpoint) {
    return {
        v: checkpoint.v,
        id: checkpoint.id,
        ts: checkpoint.ts,
        channel_values: { ...checkpoint.channel_values },
        channel_versions: { ...checkpoint.channel_versions },
        versions_seen: deepCopy(checkpoint.versions_seen),
        pending_sends: [...checkpoint.pending_sends],
    };
}
class BaseCheckpointSaver {
    constructor(serde) {
        Object.defineProperty(this, "serde", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new JsonPlusSerializer()
        });
        this.serde = serde || this.serde;
    }
    async get(config) {
        const value = await this.getTuple(config);
        return value ? value.checkpoint : undefined;
    }
    /**
     * Generate the next version ID for a channel.
     *
     * Default is to use integer versions, incrementing by 1. If you override, you can use str/int/float versions,
     * as long as they are monotonically increasing.
     */
    getNextVersion(current, _channel) {
        if (typeof current === "string") {
            throw new Error("Please override this method to use string versions.");
        }
        return (current !== undefined && typeof current === "number" ? current + 1 : 1);
    }
}
function compareChannelVersions(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return Math.sign(a - b);
    }
    return String(a).localeCompare(String(b));
}
function maxChannelVersion(...versions) {
    return versions.reduce((max, version, idx) => {
        if (idx === 0)
            return version;
        return compareChannelVersions(max, version) >= 0 ? max : version;
    });
}
/**
 * Mapping from error type to error index.
 * Regular writes just map to their index in the list of writes being saved.
 * Special writes (e.g. errors) map to negative indices, to avoid those writes from
 * conflicting with regular writes.
 * Each Checkpointer implementation should use this mapping in put_writes.
 */
const WRITES_IDX_MAP = {
    [ERROR]: -1,
    [SCHEDULED]: -2,
    [INTERRUPT]: -3,
    [types_RESUME]: -4,
};
function getCheckpointId(config) {
    return (config.configurable?.checkpoint_id || config.configurable?.thread_ts || "");
}

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-checkpoint/dist/memory.js


function _generateKey(threadId, checkpointNamespace, checkpointId) {
    return JSON.stringify([threadId, checkpointNamespace, checkpointId]);
}
class MemorySaver extends BaseCheckpointSaver {
    constructor(serde) {
        super(serde);
        // thread ID ->  checkpoint namespace -> checkpoint ID -> checkpoint mapping
        Object.defineProperty(this, "storage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "writes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
    }
    async _getPendingSends(threadId, checkpointNs, parentCheckpointId) {
        let pendingSends = [];
        if (parentCheckpointId !== undefined) {
            const key = _generateKey(threadId, checkpointNs, parentCheckpointId);
            pendingSends = await Promise.all(Object.values(this.writes[key] || {})
                ?.filter(([_taskId, channel]) => {
                return channel === TASKS;
            })
                .map(([_taskId, _channel, writes]) => {
                return this.serde.loadsTyped("json", writes);
            }) ?? []);
        }
        return pendingSends;
    }
    async getTuple(config) {
        const thread_id = config.configurable?.thread_id;
        const checkpoint_ns = config.configurable?.checkpoint_ns ?? "";
        let checkpoint_id = getCheckpointId(config);
        if (checkpoint_id) {
            const saved = this.storage[thread_id]?.[checkpoint_ns]?.[checkpoint_id];
            if (saved !== undefined) {
                const [checkpoint, metadata, parentCheckpointId] = saved;
                const key = _generateKey(thread_id, checkpoint_ns, checkpoint_id);
                const pending_sends = await this._getPendingSends(thread_id, checkpoint_ns, parentCheckpointId);
                const deserializedCheckpoint = {
                    ...(await this.serde.loadsTyped("json", checkpoint)),
                    pending_sends,
                };
                const pendingWrites = await Promise.all(Object.values(this.writes[key] || {}).map(async ([taskId, channel, value]) => {
                    return [
                        taskId,
                        channel,
                        await this.serde.loadsTyped("json", value),
                    ];
                }));
                const checkpointTuple = {
                    config,
                    checkpoint: deserializedCheckpoint,
                    metadata: (await this.serde.loadsTyped("json", metadata)),
                    pendingWrites,
                };
                if (parentCheckpointId !== undefined) {
                    checkpointTuple.parentConfig = {
                        configurable: {
                            thread_id,
                            checkpoint_ns,
                            checkpoint_id: parentCheckpointId,
                        },
                    };
                }
                return checkpointTuple;
            }
        }
        else {
            const checkpoints = this.storage[thread_id]?.[checkpoint_ns];
            if (checkpoints !== undefined) {
                // eslint-disable-next-line prefer-destructuring
                checkpoint_id = Object.keys(checkpoints).sort((a, b) => b.localeCompare(a))[0];
                const saved = checkpoints[checkpoint_id];
                const [checkpoint, metadata, parentCheckpointId] = saved;
                const key = _generateKey(thread_id, checkpoint_ns, checkpoint_id);
                const pending_sends = await this._getPendingSends(thread_id, checkpoint_ns, parentCheckpointId);
                const deserializedCheckpoint = {
                    ...(await this.serde.loadsTyped("json", checkpoint)),
                    pending_sends,
                };
                const pendingWrites = await Promise.all(Object.values(this.writes[key] || {}).map(async ([taskId, channel, value]) => {
                    return [
                        taskId,
                        channel,
                        await this.serde.loadsTyped("json", value),
                    ];
                }));
                const checkpointTuple = {
                    config: {
                        configurable: {
                            thread_id,
                            checkpoint_id,
                            checkpoint_ns,
                        },
                    },
                    checkpoint: deserializedCheckpoint,
                    metadata: (await this.serde.loadsTyped("json", metadata)),
                    pendingWrites,
                };
                if (parentCheckpointId !== undefined) {
                    checkpointTuple.parentConfig = {
                        configurable: {
                            thread_id,
                            checkpoint_ns,
                            checkpoint_id: parentCheckpointId,
                        },
                    };
                }
                return checkpointTuple;
            }
        }
        return undefined;
    }
    async *list(config, options) {
        // eslint-disable-next-line prefer-const
        let { before, limit, filter } = options ?? {};
        const threadIds = config.configurable?.thread_id
            ? [config.configurable?.thread_id]
            : Object.keys(this.storage);
        const configCheckpointNamespace = config.configurable?.checkpoint_ns;
        const configCheckpointId = config.configurable?.checkpoint_id;
        for (const threadId of threadIds) {
            for (const checkpointNamespace of Object.keys(this.storage[threadId] ?? {})) {
                if (configCheckpointNamespace !== undefined &&
                    checkpointNamespace !== configCheckpointNamespace) {
                    continue;
                }
                const checkpoints = this.storage[threadId]?.[checkpointNamespace] ?? {};
                const sortedCheckpoints = Object.entries(checkpoints).sort((a, b) => b[0].localeCompare(a[0]));
                for (const [checkpointId, [checkpoint, metadataStr, parentCheckpointId],] of sortedCheckpoints) {
                    // Filter by checkpoint ID from config
                    if (configCheckpointId && checkpointId !== configCheckpointId) {
                        continue;
                    }
                    // Filter by checkpoint ID from before config
                    if (before &&
                        before.configurable?.checkpoint_id &&
                        checkpointId >= before.configurable.checkpoint_id) {
                        continue;
                    }
                    // Parse metadata
                    const metadata = (await this.serde.loadsTyped("json", metadataStr));
                    if (filter &&
                        !Object.entries(filter).every(([key, value]) => metadata[key] === value)) {
                        continue;
                    }
                    // Limit search results
                    if (limit !== undefined) {
                        if (limit <= 0)
                            break;
                        limit -= 1;
                    }
                    const key = _generateKey(threadId, checkpointNamespace, checkpointId);
                    const writes = Object.values(this.writes[key] || {});
                    const pending_sends = await this._getPendingSends(threadId, checkpointNamespace, parentCheckpointId);
                    const pendingWrites = await Promise.all(writes.map(async ([taskId, channel, value]) => {
                        return [
                            taskId,
                            channel,
                            await this.serde.loadsTyped("json", value),
                        ];
                    }));
                    const deserializedCheckpoint = {
                        ...(await this.serde.loadsTyped("json", checkpoint)),
                        pending_sends,
                    };
                    const checkpointTuple = {
                        config: {
                            configurable: {
                                thread_id: threadId,
                                checkpoint_ns: checkpointNamespace,
                                checkpoint_id: checkpointId,
                            },
                        },
                        checkpoint: deserializedCheckpoint,
                        metadata,
                        pendingWrites,
                    };
                    if (parentCheckpointId !== undefined) {
                        checkpointTuple.parentConfig = {
                            configurable: {
                                thread_id: threadId,
                                checkpoint_ns: checkpointNamespace,
                                checkpoint_id: parentCheckpointId,
                            },
                        };
                    }
                    yield checkpointTuple;
                }
            }
        }
    }
    async put(config, checkpoint, metadata) {
        const preparedCheckpoint = copyCheckpoint(checkpoint);
        delete preparedCheckpoint.pending_sends;
        const threadId = config.configurable?.thread_id;
        const checkpointNamespace = config.configurable?.checkpoint_ns ?? "";
        if (threadId === undefined) {
            throw new Error(`Failed to put checkpoint. The passed RunnableConfig is missing a required "thread_id" field in its "configurable" property.`);
        }
        if (!this.storage[threadId]) {
            this.storage[threadId] = {};
        }
        if (!this.storage[threadId][checkpointNamespace]) {
            this.storage[threadId][checkpointNamespace] = {};
        }
        const [, serializedCheckpoint] = this.serde.dumpsTyped(preparedCheckpoint);
        const [, serializedMetadata] = this.serde.dumpsTyped(metadata);
        this.storage[threadId][checkpointNamespace][checkpoint.id] = [
            serializedCheckpoint,
            serializedMetadata,
            config.configurable?.checkpoint_id, // parent
        ];
        return {
            configurable: {
                thread_id: threadId,
                checkpoint_ns: checkpointNamespace,
                checkpoint_id: checkpoint.id,
            },
        };
    }
    async putWrites(config, writes, taskId) {
        const threadId = config.configurable?.thread_id;
        const checkpointNamespace = config.configurable?.checkpoint_ns;
        const checkpointId = config.configurable?.checkpoint_id;
        if (threadId === undefined) {
            throw new Error(`Failed to put writes. The passed RunnableConfig is missing a required "thread_id" field in its "configurable" property`);
        }
        if (checkpointId === undefined) {
            throw new Error(`Failed to put writes. The passed RunnableConfig is missing a required "checkpoint_id" field in its "configurable" property.`);
        }
        const outerKey = _generateKey(threadId, checkpointNamespace, checkpointId);
        const outerWrites_ = this.writes[outerKey];
        if (this.writes[outerKey] === undefined) {
            this.writes[outerKey] = {};
        }
        writes.forEach(([channel, value], idx) => {
            const [, serializedValue] = this.serde.dumpsTyped(value);
            const innerKey = [
                taskId,
                WRITES_IDX_MAP[channel] || idx,
            ];
            const innerKeyStr = `${innerKey[0]},${innerKey[1]}`;
            if (innerKey[1] >= 0 && outerWrites_ && innerKeyStr in outerWrites_) {
                return;
            }
            this.writes[outerKey][innerKeyStr] = [taskId, channel, serializedValue];
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-checkpoint/dist/store/base.js
/**
 * Error thrown when an invalid namespace is provided.
 */
class InvalidNamespaceError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidNamespaceError";
    }
}
/**
 * Validates the provided namespace.
 * @param namespace The namespace to validate.
 * @throws {InvalidNamespaceError} If the namespace is invalid.
 */
function validateNamespace(namespace) {
    if (namespace.length === 0) {
        throw new InvalidNamespaceError("Namespace cannot be empty.");
    }
    for (const label of namespace) {
        if (typeof label !== "string") {
            throw new InvalidNamespaceError(`Invalid namespace label '${label}' found in ${namespace}. Namespace labels ` +
                `must be strings, but got ${typeof label}.`);
        }
        if (label.includes(".")) {
            throw new InvalidNamespaceError(`Invalid namespace label '${label}' found in ${namespace}. Namespace labels cannot contain periods ('.').`);
        }
        if (label === "") {
            throw new InvalidNamespaceError(`Namespace labels cannot be empty strings. Got ${label} in ${namespace}`);
        }
    }
    if (namespace[0] === "langgraph") {
        throw new InvalidNamespaceError(`Root label for namespace cannot be "langgraph". Got: ${namespace}`);
    }
}
/**
 * Utility function to get text at a specific JSON path
 */
function getTextAtPath(obj, path) {
    const parts = path.split(".");
    let current = obj;
    for (const part of parts) {
        if (part.includes("[")) {
            const [arrayName, indexStr] = part.split("[");
            const index = indexStr.replace("]", "");
            if (!current[arrayName])
                return [];
            if (index === "*") {
                const results = [];
                for (const item of current[arrayName]) {
                    if (typeof item === "string")
                        results.push(item);
                }
                return results;
            }
            const idx = parseInt(index, 10);
            if (Number.isNaN(idx))
                return [];
            current = current[arrayName][idx];
        }
        else {
            current = current[part];
        }
        if (current === undefined)
            return [];
    }
    return typeof current === "string" ? [current] : [];
}
/**
 * Tokenizes a JSON path into parts
 */
function tokenizePath(path) {
    return path.split(".");
}
/**
 * Abstract base class for persistent key-value stores.
 *
 * Stores enable persistence and memory that can be shared across threads,
 * scoped to user IDs, assistant IDs, or other arbitrary namespaces.
 *
 * Features:
 * - Hierarchical namespaces for organization
 * - Key-value storage with metadata
 * - Vector similarity search (if configured)
 * - Filtering and pagination
 */
class base_BaseStore {
    /**
     * Retrieve a single item by its namespace and key.
     *
     * @param namespace Hierarchical path for the item
     * @param key Unique identifier within the namespace
     * @returns Promise resolving to the item or null if not found
     */
    async get(namespace, key) {
        return (await this.batch([{ namespace, key }]))[0];
    }
    /**
     * Search for items within a namespace prefix.
     * Supports both metadata filtering and vector similarity search.
     *
     * @param namespacePrefix Hierarchical path prefix to search within
     * @param options Search options for filtering and pagination
     * @returns Promise resolving to list of matching items with relevance scores
     *
     * @example
     * // Search with filters
     * await store.search(["documents"], {
     *   filter: { type: "report", status: "active" },
     *   limit: 5,
     *   offset: 10
     * });
     *
     * // Vector similarity search
     * await store.search(["users", "content"], {
     *   query: "technical documentation about APIs",
     *   limit: 20
     * });
     */
    async search(namespacePrefix, options = {}) {
        const { filter, limit = 10, offset = 0, query } = options;
        return (await this.batch([
            {
                namespacePrefix,
                filter,
                limit,
                offset,
                query,
            },
        ]))[0];
    }
    /**
     * Store or update an item.
     *
     * @param namespace Hierarchical path for the item
     * @param key Unique identifier within the namespace
     * @param value Object containing the item's data
     * @param index Optional indexing configuration
     *
     * @example
     * // Simple storage
     * await store.put(["docs"], "report", { title: "Annual Report" });
     *
     * // With specific field indexing
     * await store.put(
     *   ["docs"],
     *   "report",
     *   {
     *     title: "Q4 Report",
     *     chapters: [{ content: "..." }, { content: "..." }]
     *   },
     *   ["title", "chapters[*].content"]
     * );
     */
    async put(namespace, key, value, index) {
        validateNamespace(namespace);
        await this.batch([{ namespace, key, value, index }]);
    }
    /**
     * Delete an item from the store.
     *
     * @param namespace Hierarchical path for the item
     * @param key Unique identifier within the namespace
     */
    async delete(namespace, key) {
        await this.batch([{ namespace, key, value: null }]);
    }
    /**
     * List and filter namespaces in the store.
     * Used to explore data organization and navigate the namespace hierarchy.
     *
     * @param options Options for listing namespaces
     * @returns Promise resolving to list of namespace paths
     *
     * @example
     * // List all namespaces under "documents"
     * await store.listNamespaces({
     *   prefix: ["documents"],
     *   maxDepth: 2
     * });
     *
     * // List namespaces ending with "v1"
     * await store.listNamespaces({
     *   suffix: ["v1"],
     *   limit: 50
     * });
     */
    async listNamespaces(options = {}) {
        const { prefix, suffix, maxDepth, limit = 100, offset = 0 } = options;
        const matchConditions = [];
        if (prefix) {
            matchConditions.push({ matchType: "prefix", path: prefix });
        }
        if (suffix) {
            matchConditions.push({ matchType: "suffix", path: suffix });
        }
        return (await this.batch([
            {
                matchConditions: matchConditions.length ? matchConditions : undefined,
                maxDepth,
                limit,
                offset,
            },
        ]))[0];
    }
    /**
     * Start the store. Override if initialization is needed.
     */
    start() { }
    /**
     * Stop the store. Override if cleanup is needed.
     */
    stop() { }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-checkpoint/dist/store/batch.js
/* eslint-disable @typescript-eslint/no-explicit-any */

class AsyncBatchedStore extends base_BaseStore {
    constructor(store) {
        super();
        Object.defineProperty(this, "store", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "queue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "nextKey", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: 0
        });
        Object.defineProperty(this, "running", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "processingTask", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        this.store = store;
    }
    get isRunning() {
        return this.running;
    }
    /**
     * @ignore
     * Batch is not implemented here as we're only extending `BaseStore`
     * to allow it to be passed where `BaseStore` is expected, and implement
     * the convenience methods (get, search, put, delete).
     */
    async batch(_operations) {
        throw new Error("The `batch` method is not implemented on `AsyncBatchedStore`." +
            "\n Instead, it calls the `batch` method on the wrapped store." +
            "\n If you are seeing this error, something is wrong.");
    }
    async get(namespace, key) {
        return this.enqueueOperation({ namespace, key });
    }
    async search(namespacePrefix, options) {
        const { filter, limit = 10, offset = 0 } = options || {};
        return this.enqueueOperation({
            namespacePrefix,
            filter,
            limit,
            offset,
        });
    }
    async put(namespace, key, value) {
        return this.enqueueOperation({ namespace, key, value });
    }
    async delete(namespace, key) {
        return this.enqueueOperation({
            namespace,
            key,
            value: null,
        });
    }
    start() {
        if (!this.running) {
            this.running = true;
            this.processingTask = this.processBatchQueue();
        }
    }
    async stop() {
        this.running = false;
        if (this.processingTask) {
            await this.processingTask;
        }
    }
    enqueueOperation(operation) {
        return new Promise((resolve, reject) => {
            const key = this.nextKey;
            this.nextKey += 1;
            this.queue.set(key, { operation, resolve, reject });
        });
    }
    async processBatchQueue() {
        while (this.running) {
            await new Promise((resolve) => {
                setTimeout(resolve, 0);
            });
            if (this.queue.size === 0)
                continue;
            const batch = new Map(this.queue);
            this.queue.clear();
            try {
                const operations = Array.from(batch.values()).map(({ operation }) => operation);
                const results = await this.store.batch(operations);
                batch.forEach(({ resolve }, key) => {
                    const index = Array.from(batch.keys()).indexOf(key);
                    resolve(results[index]);
                });
            }
            catch (e) {
                batch.forEach(({ reject }) => {
                    reject(e);
                });
            }
        }
    }
    // AsyncBatchedStore is internal and gets passed as args into traced tasks
    // some BaseStores contain circular references so just serialize without it
    // as this causes warnings when tracing with LangSmith.
    toJSON() {
        return {
            queue: this.queue,
            nextKey: this.nextKey,
            running: this.running,
            store: "[LangGraphStore]",
        };
    }
}

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-checkpoint/dist/store/utils.js
/**
 * Tokenize a JSON path into parts.
 * @example
 * tokenizePath("metadata.title") // -> ["metadata", "title"]
 * tokenizePath("chapters[*].content") // -> ["chapters[*]", "content"]
 */
function utils_tokenizePath(path) {
    if (!path) {
        return [];
    }
    const tokens = [];
    let current = [];
    let i = 0;
    while (i < path.length) {
        const char = path[i];
        if (char === "[") {
            // Handle array index
            if (current.length) {
                tokens.push(current.join(""));
                current = [];
            }
            let bracketCount = 1;
            const indexChars = ["["];
            i += 1;
            while (i < path.length && bracketCount > 0) {
                if (path[i] === "[") {
                    bracketCount += 1;
                }
                else if (path[i] === "]") {
                    bracketCount -= 1;
                }
                indexChars.push(path[i]);
                i += 1;
            }
            tokens.push(indexChars.join(""));
            continue;
        }
        else if (char === "{") {
            // Handle multi-field selection
            if (current.length) {
                tokens.push(current.join(""));
                current = [];
            }
            let braceCount = 1;
            const fieldChars = ["{"];
            i += 1;
            while (i < path.length && braceCount > 0) {
                if (path[i] === "{") {
                    braceCount += 1;
                }
                else if (path[i] === "}") {
                    braceCount -= 1;
                }
                fieldChars.push(path[i]);
                i += 1;
            }
            tokens.push(fieldChars.join(""));
            continue;
        }
        else if (char === ".") {
            // Handle regular field
            if (current.length) {
                tokens.push(current.join(""));
                current = [];
            }
        }
        else {
            current.push(char);
        }
        i += 1;
    }
    if (current.length) {
        tokens.push(current.join(""));
    }
    return tokens;
}
/**
 * Type guard to check if an object is a FilterOperators
 */
function isFilterOperators(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        Object.keys(obj).every((key) => key === "$eq" ||
            key === "$ne" ||
            key === "$gt" ||
            key === "$gte" ||
            key === "$lt" ||
            key === "$lte" ||
            key === "$in" ||
            key === "$nin"));
}
/**
 * Compare values for filtering, supporting operator-based comparisons.
 */
function compareValues(itemValue, filterValue) {
    if (isFilterOperators(filterValue)) {
        const operators = Object.keys(filterValue).filter((k) => k.startsWith("$"));
        return operators.every((op) => {
            const value = filterValue[op];
            switch (op) {
                case "$eq":
                    return itemValue === value;
                case "$ne":
                    return itemValue !== value;
                case "$gt":
                    return Number(itemValue) > Number(value);
                case "$gte":
                    return Number(itemValue) >= Number(value);
                case "$lt":
                    return Number(itemValue) < Number(value);
                case "$lte":
                    return Number(itemValue) <= Number(value);
                case "$in":
                    return Array.isArray(value) ? value.includes(itemValue) : false;
                case "$nin":
                    return Array.isArray(value) ? !value.includes(itemValue) : true;
                default:
                    return false;
            }
        });
    }
    // If no operators, do a direct comparison
    return itemValue === filterValue;
}
/**
 * Extract text from a value at a specific JSON path.
 *
 * Supports:
 * - Simple paths: "field1.field2"
 * - Array indexing: "[0]", "[*]", "[-1]"
 * - Wildcards: "*"
 * - Multi-field selection: "{field1,field2}"
 * - Nested paths in multi-field: "{field1,nested.field2}"
 */
function utils_getTextAtPath(obj, path) {
    if (!path || path === "$") {
        return [JSON.stringify(obj, null, 2)];
    }
    const tokens = Array.isArray(path) ? path : utils_tokenizePath(path);
    function extractFromObj(obj, tokens, pos) {
        if (pos >= tokens.length) {
            if (typeof obj === "string" ||
                typeof obj === "number" ||
                typeof obj === "boolean") {
                return [String(obj)];
            }
            if (obj === null || obj === undefined) {
                return [];
            }
            if (Array.isArray(obj) || typeof obj === "object") {
                return [JSON.stringify(obj, null, 2)];
            }
            return [];
        }
        const token = tokens[pos];
        const results = [];
        if (pos === 0 && token === "$") {
            results.push(JSON.stringify(obj, null, 2));
        }
        if (token.startsWith("[") && token.endsWith("]")) {
            if (!Array.isArray(obj))
                return [];
            const index = token.slice(1, -1);
            if (index === "*") {
                for (const item of obj) {
                    results.push(...extractFromObj(item, tokens, pos + 1));
                }
            }
            else {
                try {
                    let idx = parseInt(index, 10);
                    if (idx < 0) {
                        idx = obj.length + idx;
                    }
                    if (idx >= 0 && idx < obj.length) {
                        results.push(...extractFromObj(obj[idx], tokens, pos + 1));
                    }
                }
                catch {
                    return [];
                }
            }
        }
        else if (token.startsWith("{") && token.endsWith("}")) {
            if (typeof obj !== "object" || obj === null)
                return [];
            const fields = token
                .slice(1, -1)
                .split(",")
                .map((f) => f.trim());
            for (const field of fields) {
                const nestedTokens = utils_tokenizePath(field);
                if (nestedTokens.length) {
                    let currentObj = obj;
                    for (const nestedToken of nestedTokens) {
                        if (currentObj &&
                            typeof currentObj === "object" &&
                            nestedToken in currentObj) {
                            currentObj = currentObj[nestedToken];
                        }
                        else {
                            currentObj = undefined;
                            break;
                        }
                    }
                    if (currentObj !== undefined) {
                        if (typeof currentObj === "string" ||
                            typeof currentObj === "number" ||
                            typeof currentObj === "boolean") {
                            results.push(String(currentObj));
                        }
                        else if (Array.isArray(currentObj) ||
                            typeof currentObj === "object") {
                            results.push(JSON.stringify(currentObj, null, 2));
                        }
                    }
                }
            }
        }
        else if (token === "*") {
            if (Array.isArray(obj)) {
                for (const item of obj) {
                    results.push(...extractFromObj(item, tokens, pos + 1));
                }
            }
            else if (typeof obj === "object" && obj !== null) {
                for (const value of Object.values(obj)) {
                    results.push(...extractFromObj(value, tokens, pos + 1));
                }
            }
        }
        else {
            if (typeof obj === "object" && obj !== null && token in obj) {
                results.push(...extractFromObj(obj[token], tokens, pos + 1));
            }
        }
        return results;
    }
    return extractFromObj(obj, tokens, 0);
}
/**
 * Calculate cosine similarity between two vectors.
 */
function utils_cosineSimilarity(vector1, vector2) {
    if (vector1.length !== vector2.length) {
        throw new Error("Vectors must have the same length");
    }
    const dotProduct = vector1.reduce((acc, val, i) => acc + val * vector2[i], 0);
    const magnitude1 = Math.sqrt(vector1.reduce((acc, val) => acc + val * val, 0));
    const magnitude2 = Math.sqrt(vector2.reduce((acc, val) => acc + val * val, 0));
    if (magnitude1 === 0 || magnitude2 === 0)
        return 0;
    return dotProduct / (magnitude1 * magnitude2);
}

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-checkpoint/dist/store/memory.js


/**
 * In-memory key-value store with optional vector search.
 *
 * A lightweight store implementation using JavaScript Maps. Supports basic
 * key-value operations and vector search when configured with embeddings.
 *
 * @example
 * ```typescript
 * // Basic key-value storage
 * const store = new InMemoryStore();
 * await store.put(["users", "123"], "prefs", { theme: "dark" });
 * const item = await store.get(["users", "123"], "prefs");
 *
 * // Vector search with embeddings
 * import { OpenAIEmbeddings } from "@langchain/openai";
 * const store = new InMemoryStore({
 *   index: {
 *     dims: 1536,
 *     embeddings: new OpenAIEmbeddings({ modelName: "text-embedding-3-small" }),
 *   }
 * });
 *
 * // Store documents
 * await store.put(["docs"], "doc1", { text: "Python tutorial" });
 * await store.put(["docs"], "doc2", { text: "TypeScript guide" });
 *
 * // Search by similarity
 * const results = await store.search(["docs"], { query: "python programming" });
 * ```
 *
 * @warning This store keeps all data in memory. Data is lost when the process exits.
 * For persistence, use a database-backed store.
 */
class memory_InMemoryStore extends base_BaseStore {
    constructor(options) {
        super();
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        // Namespace -> Key -> Path/field -> Vector
        Object.defineProperty(this, "vectors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "_indexConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (options?.index) {
            this._indexConfig = {
                ...options.index,
                __tokenizedFields: (options.index.fields ?? ["$"]).map((p) => [
                    p,
                    p === "$" ? [p] : utils_tokenizePath(p),
                ]),
            };
        }
    }
    async batch(operations) {
        const results = [];
        const putOps = new Map();
        const searchOps = new Map();
        // First pass - handle gets and prepare search/put operations
        for (let i = 0; i < operations.length; i += 1) {
            const op = operations[i];
            if ("key" in op && "namespace" in op && !("value" in op)) {
                // GetOperation
                results.push(this.getOperation(op));
            }
            else if ("namespacePrefix" in op) {
                // SearchOperation
                const candidates = this.filterItems(op);
                searchOps.set(i, [op, candidates]);
                results.push(null);
            }
            else if ("value" in op) {
                // PutOperation
                const key = `${op.namespace.join(":")}:${op.key}`;
                putOps.set(key, op);
                results.push(null);
            }
            else if ("matchConditions" in op) {
                // ListNamespacesOperation
                results.push(this.listNamespacesOperation(op));
            }
        }
        // Handle search operations with embeddings
        if (searchOps.size > 0) {
            if (this._indexConfig?.embeddings) {
                const queries = new Set();
                for (const [op] of searchOps.values()) {
                    if (op.query)
                        queries.add(op.query);
                }
                // Get embeddings for all queries
                const queryEmbeddings = queries.size > 0
                    ? await Promise.all(Array.from(queries).map((q) => this._indexConfig.embeddings.embedQuery(q)))
                    : [];
                const queryVectors = Object.fromEntries(Array.from(queries).map((q, i) => [q, queryEmbeddings[i]]));
                // Process each search operation
                for (const [i, [op, candidates]] of searchOps.entries()) {
                    if (op.query && queryVectors[op.query]) {
                        const queryVector = queryVectors[op.query];
                        const scoredResults = this.scoreResults(candidates, queryVector, op.offset ?? 0, op.limit ?? 10);
                        results[i] = scoredResults;
                    }
                    else {
                        results[i] = this.paginateResults(candidates.map((item) => ({ ...item, score: undefined })), op.offset ?? 0, op.limit ?? 10);
                    }
                }
            }
            else {
                // No embeddings - just paginate the filtered results
                for (const [i, [op, candidates]] of searchOps.entries()) {
                    results[i] = this.paginateResults(candidates.map((item) => ({ ...item, score: undefined })), op.offset ?? 0, op.limit ?? 10);
                }
            }
        }
        // Handle put operations with embeddings
        if (putOps.size > 0 && this._indexConfig?.embeddings) {
            const toEmbed = this.extractTexts(Array.from(putOps.values()));
            if (Object.keys(toEmbed).length > 0) {
                const embeddings = await this._indexConfig.embeddings.embedDocuments(Object.keys(toEmbed));
                this.insertVectors(toEmbed, embeddings);
            }
        }
        // Apply all put operations
        for (const op of putOps.values()) {
            this.putOperation(op);
        }
        return results;
    }
    getOperation(op) {
        const namespaceKey = op.namespace.join(":");
        const item = this.data.get(namespaceKey)?.get(op.key);
        return item ?? null;
    }
    putOperation(op) {
        const namespaceKey = op.namespace.join(":");
        if (!this.data.has(namespaceKey)) {
            this.data.set(namespaceKey, new Map());
        }
        const namespaceMap = this.data.get(namespaceKey);
        if (op.value === null) {
            namespaceMap.delete(op.key);
        }
        else {
            const now = new Date();
            if (namespaceMap.has(op.key)) {
                const item = namespaceMap.get(op.key);
                item.value = op.value;
                item.updatedAt = now;
            }
            else {
                namespaceMap.set(op.key, {
                    value: op.value,
                    key: op.key,
                    namespace: op.namespace,
                    createdAt: now,
                    updatedAt: now,
                });
            }
        }
    }
    listNamespacesOperation(op) {
        const allNamespaces = Array.from(this.data.keys()).map((ns) => ns.split(":"));
        let namespaces = allNamespaces;
        if (op.matchConditions && op.matchConditions.length > 0) {
            namespaces = namespaces.filter((ns) => op.matchConditions.every((condition) => this.doesMatch(condition, ns)));
        }
        if (op.maxDepth !== undefined) {
            namespaces = Array.from(new Set(namespaces.map((ns) => ns.slice(0, op.maxDepth).join(":")))).map((ns) => ns.split(":"));
        }
        namespaces.sort((a, b) => a.join(":").localeCompare(b.join(":")));
        return namespaces.slice(op.offset ?? 0, (op.offset ?? 0) + (op.limit ?? namespaces.length));
    }
    doesMatch(matchCondition, key) {
        const { matchType, path } = matchCondition;
        if (matchType === "prefix") {
            if (path.length > key.length)
                return false;
            return path.every((pElem, index) => {
                const kElem = key[index];
                return pElem === "*" || kElem === pElem;
            });
        }
        else if (matchType === "suffix") {
            if (path.length > key.length)
                return false;
            return path.every((pElem, index) => {
                const kElem = key[key.length - path.length + index];
                return pElem === "*" || kElem === pElem;
            });
        }
        throw new Error(`Unsupported match type: ${matchType}`);
    }
    filterItems(op) {
        const candidates = [];
        for (const [namespace, items] of this.data.entries()) {
            if (namespace.startsWith(op.namespacePrefix.join(":"))) {
                candidates.push(...items.values());
            }
        }
        let filteredCandidates = candidates;
        if (op.filter) {
            filteredCandidates = candidates.filter((item) => Object.entries(op.filter).every(([key, value]) => compareValues(item.value[key], value)));
        }
        return filteredCandidates;
    }
    scoreResults(candidates, queryVector, offset = 0, limit = 10) {
        const flatItems = [];
        const flatVectors = [];
        const scoreless = [];
        for (const item of candidates) {
            const vectors = this.getVectors(item);
            if (vectors.length) {
                for (const vector of vectors) {
                    flatItems.push(item);
                    flatVectors.push(vector);
                }
            }
            else {
                scoreless.push(item);
            }
        }
        const scores = this.cosineSimilarity(queryVector, flatVectors);
        const sortedResults = scores
            .map((score, i) => [score, flatItems[i]])
            .sort((a, b) => b[0] - a[0]);
        const seen = new Set();
        const kept = [];
        for (const [score, item] of sortedResults) {
            const key = `${item.namespace.join(":")}:${item.key}`;
            if (seen.has(key))
                continue;
            const ix = seen.size;
            if (ix >= offset + limit)
                break;
            if (ix < offset) {
                seen.add(key);
                continue;
            }
            seen.add(key);
            kept.push([score, item]);
        }
        if (scoreless.length && kept.length < limit) {
            for (const item of scoreless.slice(0, limit - kept.length)) {
                const key = `${item.namespace.join(":")}:${item.key}`;
                if (!seen.has(key)) {
                    seen.add(key);
                    kept.push([undefined, item]);
                }
            }
        }
        return kept.map(([score, item]) => ({
            ...item,
            score,
        }));
    }
    paginateResults(results, offset, limit) {
        return results.slice(offset, offset + limit);
    }
    extractTexts(ops) {
        if (!ops.length || !this._indexConfig) {
            return {};
        }
        const toEmbed = {};
        for (const op of ops) {
            if (op.value !== null && op.index !== false) {
                const paths = op.index === null || op.index === undefined
                    ? this._indexConfig.__tokenizedFields ?? []
                    : op.index.map((ix) => [ix, utils_tokenizePath(ix)]);
                for (const [path, field] of paths) {
                    const texts = utils_getTextAtPath(op.value, field);
                    if (texts.length) {
                        if (texts.length > 1) {
                            texts.forEach((text, i) => {
                                if (!toEmbed[text])
                                    toEmbed[text] = [];
                                toEmbed[text].push([op.namespace, op.key, `${path}.${i}`]);
                            });
                        }
                        else {
                            if (!toEmbed[texts[0]])
                                toEmbed[texts[0]] = [];
                            toEmbed[texts[0]].push([op.namespace, op.key, path]);
                        }
                    }
                }
            }
        }
        return toEmbed;
    }
    insertVectors(texts, embeddings) {
        for (const [text, metadata] of Object.entries(texts)) {
            const embedding = embeddings.shift();
            if (!embedding) {
                throw new Error(`No embedding found for text: ${text}`);
            }
            for (const [namespace, key, field] of metadata) {
                const namespaceKey = namespace.join(":");
                if (!this.vectors.has(namespaceKey)) {
                    this.vectors.set(namespaceKey, new Map());
                }
                const namespaceMap = this.vectors.get(namespaceKey);
                if (!namespaceMap.has(key)) {
                    namespaceMap.set(key, new Map());
                }
                const itemMap = namespaceMap.get(key);
                itemMap.set(field, embedding);
            }
        }
    }
    getVectors(item) {
        const namespaceKey = item.namespace.join(":");
        const itemKey = item.key;
        if (!this.vectors.has(namespaceKey)) {
            return [];
        }
        const namespaceMap = this.vectors.get(namespaceKey);
        if (!namespaceMap.has(itemKey)) {
            return [];
        }
        const itemMap = namespaceMap.get(itemKey);
        const vectors = Array.from(itemMap.values());
        if (!vectors.length) {
            return [];
        }
        return vectors;
    }
    cosineSimilarity(X, Y) {
        if (!Y.length)
            return [];
        // Calculate dot products for all vectors at once
        const dotProducts = Y.map((vector) => vector.reduce((acc, val, i) => acc + val * X[i], 0));
        // Calculate magnitudes
        const magnitude1 = Math.sqrt(X.reduce((acc, val) => acc + val * val, 0));
        const magnitudes2 = Y.map((vector) => Math.sqrt(vector.reduce((acc, val) => acc + val * val, 0)));
        // Calculate similarities
        return dotProducts.map((dot, i) => {
            const magnitude2 = magnitudes2[i];
            return magnitude1 && magnitude2 ? dot / (magnitude1 * magnitude2) : 0;
        });
    }
    get indexConfig() {
        return this._indexConfig;
    }
}
/** @deprecated Alias for InMemoryStore */
class MemoryStore extends (/* unused pure expression or super */ null && (memory_InMemoryStore)) {
}

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-checkpoint/dist/store/index.js




;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-checkpoint/dist/index.js








;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-checkpoint/index.js

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/channels/base.js


function isBaseChannel(obj) {
    return obj != null && obj.lg_is_channel === true;
}
class BaseChannel {
    constructor() {
        Object.defineProperty(this, "ValueType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "UpdateType", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** @ignore */
        Object.defineProperty(this, "lg_is_channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
    }
    /**
     * Mark the current value of the channel as consumed. By default, no-op.
     * This is called by Pregel before the start of the next step, for all
     * channels that triggered a node. If the channel was updated, return true.
     */
    consume() {
        return false;
    }
}
function emptyChannels(channels, checkpoint) {
    const filteredChannels = Object.fromEntries(Object.entries(channels).filter(([, value]) => isBaseChannel(value)));
    const newChannels = {};
    for (const k in filteredChannels) {
        if (Object.prototype.hasOwnProperty.call(filteredChannels, k)) {
            const channelValue = checkpoint.channel_values[k];
            newChannels[k] = filteredChannels[k].fromCheckpoint(channelValue);
        }
    }
    return newChannels;
}
function createCheckpoint(checkpoint, channels, step) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let values;
    if (channels === undefined) {
        values = checkpoint.channel_values;
    }
    else {
        values = {};
        for (const k of Object.keys(channels)) {
            try {
                values[k] = channels[k].checkpoint();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            }
            catch (error) {
                if (error.name === errors_EmptyChannelError.unminifiable_name) {
                    // no-op
                }
                else {
                    throw error; // Rethrow unexpected errors
                }
            }
        }
    }
    return {
        v: 1,
        id: uuid6(step),
        ts: new Date().toISOString(),
        channel_values: values,
        channel_versions: { ...checkpoint.channel_versions },
        versions_seen: deepCopy(checkpoint.versions_seen),
        pending_sends: checkpoint.pending_sends ?? [],
    };
}
//# sourceMappingURL=base.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/channels/binop.js


/**
 * Stores the result of applying a binary operator to the current value and each new value.
 */
class BinaryOperatorAggregate extends BaseChannel {
    constructor(operator, initialValueFactory) {
        super();
        Object.defineProperty(this, "lc_graph_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "BinaryOperatorAggregate"
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "operator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "initialValueFactory", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.operator = operator;
        this.initialValueFactory = initialValueFactory;
        this.value = initialValueFactory?.();
    }
    fromCheckpoint(checkpoint) {
        const empty = new BinaryOperatorAggregate(this.operator, this.initialValueFactory);
        if (checkpoint) {
            empty.value = checkpoint;
        }
        return empty;
    }
    update(values) {
        let newValues = values;
        if (!newValues.length)
            return false;
        if (this.value === undefined) {
            [this.value] = newValues;
            newValues = newValues.slice(1);
        }
        for (const value of newValues) {
            if (this.value !== undefined) {
                this.value = this.operator(this.value, value);
            }
        }
        return true;
    }
    get() {
        if (this.value === undefined) {
            throw new errors_EmptyChannelError();
        }
        return this.value;
    }
    checkpoint() {
        if (this.value === undefined) {
            throw new errors_EmptyChannelError();
        }
        return this.value;
    }
}
//# sourceMappingURL=binop.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/channels/last_value.js


/**
 * Stores the last value received, can receive at most one value per step.
 *
 * Since `update` is only called once per step and value can only be of length 1,
 * LastValue always stores the last value of a single node. If multiple nodes attempt to
 * write to this channel in a single step, an error will be thrown.
 * @internal
 */
class LastValue extends BaseChannel {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "lc_graph_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "LastValue"
        });
        // value is an array so we don't misinterpret an update to undefined as no write
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    fromCheckpoint(checkpoint) {
        const empty = new LastValue();
        if (checkpoint) {
            empty.value = [checkpoint];
        }
        return empty;
    }
    update(values) {
        if (values.length === 0) {
            return false;
        }
        if (values.length !== 1) {
            throw new InvalidUpdateError("LastValue can only receive one value per step.", {
                lc_error_code: "INVALID_CONCURRENT_GRAPH_UPDATE",
            });
        }
        // eslint-disable-next-line prefer-destructuring
        this.value = [values[values.length - 1]];
        return true;
    }
    get() {
        if (this.value.length === 0) {
            throw new errors_EmptyChannelError();
        }
        return this.value[0];
    }
    checkpoint() {
        if (this.value.length === 0) {
            throw new errors_EmptyChannelError();
        }
        return this.value[0];
    }
}
//# sourceMappingURL=last_value.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/constants.js
/** Special reserved node name denoting the start of a graph. */
const constants_START = "__start__";
/** Special reserved node name denoting the end of a graph. */
const constants_END = "__end__";
const INPUT = "__input__";
const constants_ERROR = "__error__";
const constants_CONFIG_KEY_SEND = "__pregel_send";
/** config key containing function used to call a node (push task) */
const constants_CONFIG_KEY_CALL = "__pregel_call";
const CONFIG_KEY_READ = "__pregel_read";
const CONFIG_KEY_CHECKPOINTER = "__pregel_checkpointer";
const CONFIG_KEY_RESUMING = "__pregel_resuming";
const CONFIG_KEY_TASK_ID = "__pregel_task_id";
const CONFIG_KEY_STREAM = "__pregel_stream";
const CONFIG_KEY_RESUME_VALUE = "__pregel_resume_value";
const constants_CONFIG_KEY_SCRATCHPAD = "__pregel_scratchpad";
/** config key containing state from previous invocation of graph for the given thread */
const constants_CONFIG_KEY_PREVIOUS_STATE = "__pregel_previous";
const CONFIG_KEY_CHECKPOINT_ID = "checkpoint_id";
const constants_CONFIG_KEY_CHECKPOINT_NS = "checkpoint_ns";
// this one is part of public API
const CONFIG_KEY_CHECKPOINT_MAP = "checkpoint_map";
/** Special channel reserved for graph interrupts */
const constants_INTERRUPT = "__interrupt__";
/** Special channel reserved for graph resume */
const constants_RESUME = "__resume__";
/** Special channel reserved for cases when a task exits without any writes */
const NO_WRITES = "__no_writes__";
/** Special channel reserved for graph return */
const RETURN = "__return__";
/** Special channel reserved for graph previous state */
const PREVIOUS = "__previous__";
const RUNTIME_PLACEHOLDER = "__pregel_runtime_placeholder__";
const constants_RECURSION_LIMIT_DEFAULT = 25;
const TAG_HIDDEN = "langsmith:hidden";
const TAG_NOSTREAM = "langsmith:nostream";
const SELF = "__self__";
const constants_TASKS = "__pregel_tasks";
const PUSH = "__pregel_push";
const PULL = "__pregel_pull";
const TASK_NAMESPACE = "6ba7b831-9dad-11d1-80b4-00c04fd430c8";
const NULL_TASK_ID = "00000000-0000-0000-0000-000000000000";
const RESERVED = [
    TAG_HIDDEN,
    INPUT,
    constants_INTERRUPT,
    constants_RESUME,
    constants_ERROR,
    NO_WRITES,
    constants_TASKS,
    // reserved config.configurable keys
    constants_CONFIG_KEY_SEND,
    CONFIG_KEY_READ,
    CONFIG_KEY_CHECKPOINTER,
    CONFIG_KEY_STREAM,
    CONFIG_KEY_RESUMING,
    CONFIG_KEY_TASK_ID,
    constants_CONFIG_KEY_CALL,
    CONFIG_KEY_RESUME_VALUE,
    constants_CONFIG_KEY_SCRATCHPAD,
    constants_CONFIG_KEY_PREVIOUS_STATE,
    CONFIG_KEY_CHECKPOINT_MAP,
    constants_CONFIG_KEY_CHECKPOINT_NS,
    CONFIG_KEY_CHECKPOINT_ID,
];
const constants_CHECKPOINT_NAMESPACE_SEPARATOR = "|";
const CHECKPOINT_NAMESPACE_END = ":";
function _isSendInterface(x) {
    const operation = x;
    return (operation !== null &&
        operation !== undefined &&
        typeof operation.node === "string" &&
        operation.args !== undefined);
}
/**
 *
 * A message or packet to send to a specific node in the graph.
 *
 * The `Send` class is used within a `StateGraph`'s conditional edges to
 * dynamically invoke a node with a custom state at the next step.
 *
 * Importantly, the sent state can differ from the core graph's state,
 * allowing for flexible and dynamic workflow management.
 *
 * One such example is a "map-reduce" workflow where your graph invokes
 * the same node multiple times in parallel with different states,
 * before aggregating the results back into the main graph's state.
 *
 * @example
 * ```typescript
 * import { Annotation, Send, StateGraph } from "@langchain/langgraph";
 *
 * const ChainState = Annotation.Root({
 *   subjects: Annotation<string[]>,
 *   jokes: Annotation<string[]>({
 *     reducer: (a, b) => a.concat(b),
 *   }),
 * });
 *
 * const continueToJokes = async (state: typeof ChainState.State) => {
 *   return state.subjects.map((subject) => {
 *     return new Send("generate_joke", { subjects: [subject] });
 *   });
 * };
 *
 * const graph = new StateGraph(ChainState)
 *   .addNode("generate_joke", (state) => ({
 *     jokes: [`Joke about ${state.subjects}`],
 *   }))
 *   .addConditionalEdges("__start__", continueToJokes)
 *   .addEdge("generate_joke", "__end__")
 *   .compile();
 *
 * const res = await graph.invoke({ subjects: ["cats", "dogs"] });
 * console.log(res);
 *
 * // Invoking with two subjects results in a generated joke for each
 * // { subjects: ["cats", "dogs"], jokes: [`Joke about cats`, `Joke about dogs`] }
 * ```
 */
class Send {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(node, args) {
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: node
        });
        Object.defineProperty(this, "args", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: args
        });
        Object.defineProperty(this, "lg_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "Send"
        });
    }
    toJSON() {
        return {
            node: this.node,
            args: this.args,
        };
    }
}
function _isSend(x) {
    const operation = x;
    return operation !== undefined && operation.lg_name === "Send";
}
/**
 * One or more commands to update the graph's state and send messages to nodes.
 * Can be used to combine routing logic with state updates in lieu of conditional edges
 *
 * @example
 * ```ts
 * import { Annotation, Command } from "@langchain/langgraph";
 *
 * // Define graph state
 * const StateAnnotation = Annotation.Root({
 *   foo: Annotation<string>,
 * });
 *
 * // Define the nodes
 * const nodeA = async (_state: typeof StateAnnotation.State) => {
 *   console.log("Called A");
 *   // this is a replacement for a real conditional edge function
 *   const goto = Math.random() > .5 ? "nodeB" : "nodeC";
 *   // note how Command allows you to BOTH update the graph state AND route to the next node
 *   return new Command({
 *     // this is the state update
 *     update: {
 *       foo: "a",
 *     },
 *     // this is a replacement for an edge
 *     goto,
 *   });
 * };
 *
 * // Nodes B and C are unchanged
 * const nodeB = async (state: typeof StateAnnotation.State) => {
 *   console.log("Called B");
 *   return {
 *     foo: state.foo + "|b",
 *   };
 * }
 *
 * const nodeC = async (state: typeof StateAnnotation.State) => {
 *   console.log("Called C");
 *   return {
 *     foo: state.foo + "|c",
 *   };
 * }
 *
 * import { StateGraph } from "@langchain/langgraph";

 * // NOTE: there are no edges between nodes A, B and C!
 * const graph = new StateGraph(StateAnnotation)
 *   .addNode("nodeA", nodeA, {
 *     ends: ["nodeB", "nodeC"],
 *   })
 *   .addNode("nodeB", nodeB)
 *   .addNode("nodeC", nodeC)
 *   .addEdge("__start__", "nodeA")
 *   .compile();
 *
 * await graph.invoke({ foo: "" });
 *
 * // Randomly oscillates between
 * // { foo: 'a|c' } and { foo: 'a|b' }
 * ```
 */
class Command {
    constructor(args) {
        Object.defineProperty(this, "lg_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "Command"
        });
        Object.defineProperty(this, "lc_direct_tool_output", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "graph", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "update", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "resume", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "goto", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        this.resume = args.resume;
        this.graph = args.graph;
        this.update = args.update;
        if (args.goto) {
            this.goto = Array.isArray(args.goto) ? args.goto : [args.goto];
        }
    }
    _updateAsTuples() {
        if (this.update &&
            typeof this.update === "object" &&
            !Array.isArray(this.update)) {
            return Object.entries(this.update);
        }
        else if (Array.isArray(this.update) &&
            this.update.every((t) => Array.isArray(t) && t.length === 2 && typeof t[0] === "string")) {
            return this.update;
        }
        else {
            return [["__root__", this.update]];
        }
    }
    toJSON() {
        let serializedGoto;
        if (typeof this.goto === "string") {
            serializedGoto = this.goto;
        }
        else if (_isSend(this.goto)) {
            serializedGoto = this.goto.toJSON();
        }
        else {
            serializedGoto = this.goto.map((innerGoto) => {
                if (typeof innerGoto === "string") {
                    return innerGoto;
                }
                else {
                    return innerGoto.toJSON();
                }
            });
        }
        return {
            update: this.update,
            resume: this.resume,
            goto: serializedGoto,
        };
    }
}
Object.defineProperty(Command, "PARENT", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "__parent__"
});
function isCommand(x) {
    return typeof x === "object" && !!x && x.lg_name === "Command";
}
//# sourceMappingURL=constants.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/managed/base.js

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class base_ManagedValue {
    constructor(config, _params) {
        Object.defineProperty(this, "runtime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_promises", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "lg_is_managed_value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        this.config = config;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async initialize(_config, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _args) {
        throw new Error("Not implemented");
    }
    async promises() {
        return Promise.all(this._promises);
    }
    addPromise(promise) {
        this._promises.push(promise);
    }
}
class WritableManagedValue extends base_ManagedValue {
}
const ChannelKeyPlaceholder = "__channel_key_placeholder__";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class ManagedValueMapping extends Map {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(entries) {
        super(entries ? Array.from(entries) : undefined);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    replaceRuntimeValues(step, values) {
        if (this.size === 0 || !values) {
            return;
        }
        if (Array.from(this.values()).every((mv) => !mv.runtime)) {
            return;
        }
        if (typeof values === "object" && !Array.isArray(values)) {
            for (const [key, value] of Object.entries(values)) {
                for (const [chan, mv] of this.entries()) {
                    if (mv.runtime && mv.call(step) === value) {
                        // eslint-disable-next-line no-param-reassign
                        values[key] = { [RUNTIME_PLACEHOLDER]: chan };
                    }
                }
            }
        }
        else if (typeof values === "object" && "constructor" in values) {
            for (const key of Object.getOwnPropertyNames(Object.getPrototypeOf(values))) {
                try {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const value = values[key];
                    for (const [chan, mv] of this.entries()) {
                        if (mv.runtime && mv.call(step) === value) {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-param-reassign
                            values[key] = { [RUNTIME_PLACEHOLDER]: chan };
                        }
                    }
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                }
                catch (error) {
                    // Ignore if TypeError
                    if (error.name !== TypeError.name) {
                        throw error;
                    }
                }
            }
        }
    }
    replaceRuntimePlaceholders(step, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    values) {
        if (this.size === 0 || !values) {
            return;
        }
        if (Array.from(this.values()).every((mv) => !mv.runtime)) {
            return;
        }
        if (typeof values === "object" && !Array.isArray(values)) {
            for (const [key, value] of Object.entries(values)) {
                if (typeof value === "object" &&
                    value !== null &&
                    RUNTIME_PLACEHOLDER in value) {
                    const placeholder = value[RUNTIME_PLACEHOLDER];
                    if (typeof placeholder === "string") {
                        // eslint-disable-next-line no-param-reassign
                        values[key] = this.get(placeholder)?.call(step);
                    }
                }
            }
        }
        else if (typeof values === "object" && "constructor" in values) {
            for (const key of Object.getOwnPropertyNames(Object.getPrototypeOf(values))) {
                try {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const value = values[key];
                    if (typeof value === "object" &&
                        value !== null &&
                        RUNTIME_PLACEHOLDER in value) {
                        const managedValue = this.get(value[RUNTIME_PLACEHOLDER]);
                        if (managedValue) {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-param-reassign
                            values[key] = managedValue.call(step);
                        }
                    }
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                }
                catch (error) {
                    // Ignore if TypeError
                    if (error.name !== TypeError.name) {
                        throw error;
                    }
                }
            }
        }
    }
}
function isManagedValue(value) {
    if (typeof value === "object" && value && "lg_is_managed_value" in value) {
        return true;
    }
    return false;
}
function isConfiguredManagedValue(value) {
    if (typeof value === "object" &&
        value &&
        "cls" in value &&
        "params" in value) {
        return true;
    }
    return false;
}
/**
 * No-op class used when getting state values, as managed values should never be returned
 * in get state calls.
 */
class NoopManagedValue extends base_ManagedValue {
    call() { }
    static async initialize(config, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _args) {
        return Promise.resolve(new NoopManagedValue(config));
    }
}
//# sourceMappingURL=base.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/graph/annotation.js



/**
 * Should not be instantiated directly. See {@link Annotation}.
 */
class AnnotationRoot {
    constructor(s) {
        Object.defineProperty(this, "lc_graph_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "AnnotationRoot"
        });
        Object.defineProperty(this, "spec", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.spec = s;
    }
}
/**
 * Helper that instantiates channels within a StateGraph state.
 *
 * Can be used as a field in an {@link Annotation.Root} wrapper in one of two ways:
 * 1. **Directly**: Creates a channel that stores the most recent value returned from a node.
 * 2. **With a reducer**: Creates a channel that applies the reducer on a node's return value.
 *
 * @example
 * ```ts
 * import { StateGraph, Annotation } from "@langchain/langgraph";
 *
 * // Define a state with a single string key named "currentOutput"
 * const SimpleAnnotation = Annotation.Root({
 *   currentOutput: Annotation<string>,
 * });
 *
 * const graphBuilder = new StateGraph(SimpleAnnotation);
 *
 * // A node in the graph that returns an object with a "currentOutput" key
 * // replaces the value in the state. You can get the state type as shown below:
 * const myNode = (state: typeof SimpleAnnotation.State) => {
 *   return {
 *     currentOutput: "some_new_value",
 *   };
 * }
 *
 * const graph = graphBuilder
 *   .addNode("myNode", myNode)
 *   ...
 *   .compile();
 * ```
 *
 * @example
 * ```ts
 * import { type BaseMessage, AIMessage } from "@langchain/core/messages";
 * import { StateGraph, Annotation } from "@langchain/langgraph";
 *
 * // Define a state with a single key named "messages" that will
 * // combine a returned BaseMessage or arrays of BaseMessages
 * const AnnotationWithReducer = Annotation.Root({
 *   messages: Annotation<BaseMessage[]>({
 *     // Different types are allowed for updates
 *     reducer: (left: BaseMessage[], right: BaseMessage | BaseMessage[]) => {
 *       if (Array.isArray(right)) {
 *         return left.concat(right);
 *       }
 *       return left.concat([right]);
 *     },
 *     default: () => [],
 *   }),
 * });
 *
 * const graphBuilder = new StateGraph(AnnotationWithReducer);
 *
 * // A node in the graph that returns an object with a "messages" key
 * // will update the state by combining the existing value with the returned one.
 * const myNode = (state: typeof AnnotationWithReducer.State) => {
 *   return {
 *     messages: [new AIMessage("Some new response")],
 *   };
 * };
 *
 * const graph = graphBuilder
 *   .addNode("myNode", myNode)
 *   ...
 *   .compile();
 * ```
 * @namespace
 * @property Root
 * Helper function that instantiates a StateGraph state. See {@link Annotation} for usage.
 */
const Annotation = function (annotation) {
    if (isConfiguredManagedValue(annotation)) {
        return annotation;
    }
    else if (annotation) {
        return getChannel(annotation);
    }
    else {
        // @ts-expect-error - Annotation without reducer
        return new LastValue();
    }
};
Annotation.Root = (sd) => new AnnotationRoot(sd);
function getChannel(reducer) {
    if (typeof reducer === "object" &&
        reducer &&
        "reducer" in reducer &&
        reducer.reducer) {
        return new BinaryOperatorAggregate(reducer.reducer, reducer.default);
    }
    if (typeof reducer === "object" &&
        reducer &&
        "value" in reducer &&
        reducer.value) {
        return new BinaryOperatorAggregate(reducer.value, reducer.default);
    }
    // @ts-expect-error - Annotation without reducer
    return new LastValue();
}
//# sourceMappingURL=annotation.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/core/runnables.js

// EXTERNAL MODULE: ./node_modules/@langchain/core/dist/runnables/graph.js + 1 modules
var runnables_graph = __webpack_require__(12034);
;// CONCATENATED MODULE: ./node_modules/@langchain/core/runnables/graph.js

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/utils/config.js


const COPIABLE_KEYS = ["tags", "metadata", "callbacks", "configurable"];
const CONFIG_KEYS = [
    "tags",
    "metadata",
    "callbacks",
    "runName",
    "maxConcurrency",
    "recursionLimit",
    "configurable",
    "runId",
    "outputKeys",
    "streamMode",
    "store",
    "writer",
    "interruptBefore",
    "interruptAfter",
    "signal",
];
const DEFAULT_RECURSION_LIMIT = 25;
function ensureLangGraphConfig(...configs) {
    const empty = {
        tags: [],
        metadata: {},
        callbacks: undefined,
        recursionLimit: DEFAULT_RECURSION_LIMIT,
        configurable: {},
    };
    const implicitConfig = singletons/* AsyncLocalStorageProviderSingleton */.Nx.getRunnableConfig();
    if (implicitConfig !== undefined) {
        for (const [k, v] of Object.entries(implicitConfig)) {
            if (v !== undefined) {
                if (COPIABLE_KEYS.includes(k)) {
                    let copiedValue;
                    if (Array.isArray(v)) {
                        copiedValue = [...v];
                    }
                    else if (typeof v === "object") {
                        if (k === "callbacks" &&
                            "copy" in v &&
                            typeof v.copy === "function") {
                            copiedValue = v.copy();
                        }
                        else {
                            copiedValue = { ...v };
                        }
                    }
                    else {
                        copiedValue = v;
                    }
                    empty[k] = copiedValue;
                }
                else {
                    empty[k] = v;
                }
            }
        }
    }
    for (const config of configs) {
        if (config === undefined) {
            continue;
        }
        for (const [k, v] of Object.entries(config)) {
            if (v !== undefined && CONFIG_KEYS.includes(k)) {
                empty[k] = v;
            }
        }
    }
    for (const [key, value] of Object.entries(empty.configurable)) {
        empty.metadata = empty.metadata ?? {};
        if (!key.startsWith("__") &&
            (typeof value === "string" ||
                typeof value === "number" ||
                typeof value === "boolean") &&
            !(key in empty.metadata)) {
            empty.metadata[key] = value;
        }
    }
    return empty;
}
/**
 * A helper utility function that returns the {@link BaseStore} that was set when the graph was initialized
 *
 * @returns a reference to the {@link BaseStore} that was set when the graph was initialized
 */
function getStore() {
    const config = AsyncLocalStorageProviderSingleton.getRunnableConfig();
    return config?.store;
}
/**
 * A helper utility function that returns the {@link LangGraphRunnableConfig#writer} if "custom" stream mode is enabled, otherwise undefined
 *
 * @returns a reference to the {@link LangGraphRunnableConfig#writer} if "custom" stream mode is enabled, otherwise undefined
 */
function getWriter() {
    const config = AsyncLocalStorageProviderSingleton.getRunnableConfig();
    return config?.configurable?.writer;
}
function getConfig() {
    return AsyncLocalStorageProviderSingleton.getRunnableConfig();
}
function recastCheckpointNamespace(namespace) {
    return namespace
        .split(constants_CHECKPOINT_NAMESPACE_SEPARATOR)
        .filter((part) => !part.match(/^\d+$/))
        .map((part) => part.split(CHECKPOINT_NAMESPACE_END)[0])
        .join(constants_CHECKPOINT_NAMESPACE_SEPARATOR);
}
function getParentCheckpointNamespace(namespace) {
    const parts = namespace.split(constants_CHECKPOINT_NAMESPACE_SEPARATOR);
    while (parts.length > 1 && parts[parts.length - 1].match(/^\d+$/)) {
        parts.pop();
    }
    return parts.slice(0, -1).join(constants_CHECKPOINT_NAMESPACE_SEPARATOR);
}
//# sourceMappingURL=config.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/utils.js



class RunnableCallable extends runnables_base/* Runnable */.YN {
    constructor(fields) {
        super();
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langgraph"]
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "func", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "trace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "recurse", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        this.name = fields.name ?? fields.func.name;
        this.func = fields.func;
        this.config = fields.tags ? { tags: fields.tags } : undefined;
        this.trace = fields.trace ?? this.trace;
        this.recurse = fields.recurse ?? this.recurse;
    }
    async _tracedInvoke(input, config, runManager) {
        return new Promise((resolve, reject) => {
            const childConfig = (0,runnables_config/* patchConfig */.tn)(config, {
                callbacks: runManager?.getChild(),
            });
            void singletons/* AsyncLocalStorageProviderSingleton */.Nx.runWithConfig(childConfig, async () => {
                try {
                    const output = await this.func(input, childConfig);
                    resolve(output);
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
    async invoke(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    input, options
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let returnValue;
        const config = ensureLangGraphConfig(options);
        const mergedConfig = (0,runnables_config/* mergeConfigs */.SV)(this.config, config);
        if (this.trace) {
            returnValue = await this._callWithConfig(this._tracedInvoke, input, mergedConfig);
        }
        else {
            returnValue = await singletons/* AsyncLocalStorageProviderSingleton */.Nx.runWithConfig(mergedConfig, async () => this.func(input, mergedConfig));
        }
        if (runnables_base/* Runnable */.YN.isRunnable(returnValue) && this.recurse) {
            return await singletons/* AsyncLocalStorageProviderSingleton */.Nx.runWithConfig(mergedConfig, async () => returnValue.invoke(input, mergedConfig));
        }
        return returnValue;
    }
}
function* prefixGenerator(generator, prefix) {
    if (prefix === undefined) {
        yield* generator;
    }
    else {
        for (const value of generator) {
            yield [prefix, value];
        }
    }
}
// https://github.com/tc39/proposal-array-from-async
async function gatherIterator(i) {
    const out = [];
    for await (const item of await i) {
        out.push(item);
    }
    return out;
}
function gatherIteratorSync(i) {
    const out = [];
    for (const item of i) {
        out.push(item);
    }
    return out;
}
function patchConfigurable(config, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
patch) {
    if (!config) {
        return {
            configurable: patch,
        };
    }
    else if (!("configurable" in config)) {
        return {
            ...config,
            configurable: patch,
        };
    }
    else {
        return {
            ...config,
            configurable: {
                ...config.configurable,
                ...patch,
            },
        };
    }
}
function utils_isAsyncGeneratorFunction(val) {
    return (val != null &&
        typeof val === "function" &&
        // eslint-disable-next-line no-instanceof/no-instanceof
        val instanceof Object.getPrototypeOf(async function* () { }).constructor);
}
function utils_isGeneratorFunction(val) {
    return (val != null &&
        typeof val === "function" &&
        // eslint-disable-next-line no-instanceof/no-instanceof
        val instanceof Object.getPrototypeOf(function* () { }).constructor);
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/write.js




const SKIP_WRITE = {
    [Symbol.for("LG_SKIP_WRITE")]: true,
};
function _isSkipWrite(x) {
    return (typeof x === "object" &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        x?.[Symbol.for("LG_SKIP_WRITE")] !== undefined);
}
const PASSTHROUGH = {
    [Symbol.for("LG_PASSTHROUGH")]: true,
};
function _isPassthrough(x) {
    return (typeof x === "object" &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        x?.[Symbol.for("LG_PASSTHROUGH")] !== undefined);
}
const IS_WRITER = Symbol("IS_WRITER");
/**
 * Mapping of write channels to Runnables that return the value to be written,
 * or None to skip writing.
 */
class ChannelWrite extends RunnableCallable {
    constructor(writes, tags) {
        const name = `ChannelWrite<${writes
            .map((packet) => {
            if (_isSend(packet)) {
                return packet.node;
            }
            else if ("channel" in packet) {
                return packet.channel;
            }
            return "...";
        })
            .join(",")}>`;
        super({
            ...{ writes, name, tags },
            func: async (input, config) => {
                return this._write(input, config ?? {});
            },
        });
        Object.defineProperty(this, "writes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.writes = writes;
    }
    async _write(input, config) {
        const writes = this.writes.map((write) => {
            if (_isChannelWriteTupleEntry(write) && _isPassthrough(write.value)) {
                return {
                    mapper: write.mapper,
                    value: input,
                };
            }
            else if (_isChannelWriteEntry(write) && _isPassthrough(write.value)) {
                return {
                    channel: write.channel,
                    value: input,
                    skipNone: write.skipNone,
                    mapper: write.mapper,
                };
            }
            else {
                return write;
            }
        });
        await ChannelWrite.doWrite(config, writes);
        return input;
    }
    // TODO: Support requireAtLeastOneOf
    static async doWrite(config, writes) {
        // validate
        for (const w of writes) {
            if (_isChannelWriteEntry(w)) {
                if (w.channel === constants_TASKS) {
                    throw new InvalidUpdateError("Cannot write to the reserved channel TASKS");
                }
                if (_isPassthrough(w.value)) {
                    throw new InvalidUpdateError("PASSTHROUGH value must be replaced");
                }
            }
            if (_isChannelWriteTupleEntry(w)) {
                if (_isPassthrough(w.value)) {
                    throw new InvalidUpdateError("PASSTHROUGH value must be replaced");
                }
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const writeEntries = [];
        for (const w of writes) {
            if (_isSend(w)) {
                writeEntries.push([constants_TASKS, w]);
            }
            else if (_isChannelWriteTupleEntry(w)) {
                const mappedResult = await w.mapper.invoke(w.value, config);
                if (mappedResult != null && mappedResult.length > 0) {
                    writeEntries.push(...mappedResult);
                }
            }
            else if (_isChannelWriteEntry(w)) {
                const mappedValue = w.mapper !== undefined
                    ? await w.mapper.invoke(w.value, config)
                    : w.value;
                if (_isSkipWrite(mappedValue)) {
                    continue;
                }
                if (w.skipNone && mappedValue === undefined) {
                    continue;
                }
                writeEntries.push([w.channel, mappedValue]);
            }
            else {
                throw new Error(`Invalid write entry: ${JSON.stringify(w)}`);
            }
        }
        const write = config.configurable?.[constants_CONFIG_KEY_SEND];
        write(writeEntries);
    }
    static isWriter(runnable) {
        return (
        // eslint-disable-next-line no-instanceof/no-instanceof
        runnable instanceof ChannelWrite ||
            (IS_WRITER in runnable && !!runnable[IS_WRITER]));
    }
    static registerWriter(runnable) {
        return Object.defineProperty(runnable, IS_WRITER, { value: true });
    }
}
function _isChannelWriteEntry(x) {
    return (x !== undefined && typeof x.channel === "string");
}
function _isChannelWriteTupleEntry(x) {
    return (x !== undefined &&
        !_isChannelWriteEntry(x) &&
        runnables_base/* Runnable */.YN.isRunnable(x.mapper));
}
//# sourceMappingURL=write.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/read.js




class ChannelRead extends RunnableCallable {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(channel, 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mapper, fresh = false) {
        super({
            func: (_, config) => ChannelRead.doRead(config, this.channel, this.fresh, this.mapper),
        });
        Object.defineProperty(this, "lc_graph_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "ChannelRead"
        });
        Object.defineProperty(this, "channel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fresh", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "mapper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.fresh = fresh;
        this.mapper = mapper;
        this.channel = channel;
        this.name = Array.isArray(channel)
            ? `ChannelRead<${channel.join(",")}>`
            : `ChannelRead<${channel}>`;
    }
    static doRead(config, channel, fresh, mapper) {
        const read = config.configurable?.[CONFIG_KEY_READ];
        if (!read) {
            throw new Error(`Runnable ${this} is not configured with a read function. Make sure to call in the context of a Pregel process`);
        }
        if (mapper) {
            return mapper(read(channel, fresh));
        }
        else {
            return read(channel, fresh);
        }
    }
}
const defaultRunnableBound = 
/* #__PURE__ */ new RunnablePassthrough();
class PregelNode extends runnables_base/* RunnableBinding */.fJ {
    constructor(fields) {
        const { channels, triggers, mapper, writers, bound, kwargs, metadata, retryPolicy, tags, subgraphs, ends, } = fields;
        const mergedTags = [
            ...(fields.config?.tags ? fields.config.tags : []),
            ...(tags ?? []),
        ];
        super({
            ...fields,
            bound: fields.bound ??
                defaultRunnableBound,
            config: {
                ...(fields.config ? fields.config : {}),
                tags: mergedTags,
            },
        });
        Object.defineProperty(this, "lc_graph_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "PregelNode"
        });
        Object.defineProperty(this, "channels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "triggers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "mapper", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "writers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "bound", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: defaultRunnableBound
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "kwargs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "metadata", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "tags", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "retryPolicy", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "subgraphs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ends", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.channels = channels;
        this.triggers = triggers;
        this.mapper = mapper;
        this.writers = writers ?? this.writers;
        this.bound = bound ?? this.bound;
        this.kwargs = kwargs ?? this.kwargs;
        this.metadata = metadata ?? this.metadata;
        this.tags = mergedTags;
        this.retryPolicy = retryPolicy;
        this.subgraphs = subgraphs;
        this.ends = ends;
    }
    getWriters() {
        const newWriters = [...this.writers];
        while (newWriters.length > 1 &&
            // eslint-disable-next-line no-instanceof/no-instanceof
            newWriters[newWriters.length - 1] instanceof ChannelWrite &&
            // eslint-disable-next-line no-instanceof/no-instanceof
            newWriters[newWriters.length - 2] instanceof ChannelWrite) {
            // we can combine writes if they are consecutive
            // careful to not modify the original writers list or ChannelWrite
            const endWriters = newWriters.slice(-2);
            const combinedWrites = endWriters[0].writes.concat(endWriters[1].writes);
            newWriters[newWriters.length - 2] = new ChannelWrite(combinedWrites, endWriters[0].config?.tags);
            newWriters.pop();
        }
        return newWriters;
    }
    getNode() {
        const writers = this.getWriters();
        if (this.bound === defaultRunnableBound && writers.length === 0) {
            return undefined;
        }
        else if (this.bound === defaultRunnableBound && writers.length === 1) {
            return writers[0];
        }
        else if (this.bound === defaultRunnableBound) {
            return new runnables_base/* RunnableSequence */.zZ({
                first: writers[0],
                middle: writers.slice(1, writers.length - 1),
                last: writers[writers.length - 1],
                omitSequenceTags: true,
            });
        }
        else if (writers.length > 0) {
            return new runnables_base/* RunnableSequence */.zZ({
                first: this.bound,
                middle: writers.slice(0, writers.length - 1),
                last: writers[writers.length - 1],
                omitSequenceTags: true,
            });
        }
        else {
            return this.bound;
        }
    }
    join(channels) {
        if (!Array.isArray(channels)) {
            throw new Error("channels must be a list");
        }
        if (typeof this.channels !== "object") {
            throw new Error("all channels must be named when using .join()");
        }
        return new PregelNode({
            channels: {
                ...this.channels,
                ...Object.fromEntries(channels.map((chan) => [chan, chan])),
            },
            triggers: this.triggers,
            mapper: this.mapper,
            writers: this.writers,
            bound: this.bound,
            kwargs: this.kwargs,
            config: this.config,
            retryPolicy: this.retryPolicy,
        });
    }
    pipe(coerceable) {
        if (ChannelWrite.isWriter(coerceable)) {
            return new PregelNode({
                channels: this.channels,
                triggers: this.triggers,
                mapper: this.mapper,
                writers: [...this.writers, coerceable],
                bound: this.bound,
                config: this.config,
                kwargs: this.kwargs,
                retryPolicy: this.retryPolicy,
            });
        }
        else if (this.bound === defaultRunnableBound) {
            return new PregelNode({
                channels: this.channels,
                triggers: this.triggers,
                mapper: this.mapper,
                writers: this.writers,
                bound: (0,runnables_base/* _coerceToRunnable */.Bp)(coerceable),
                config: this.config,
                kwargs: this.kwargs,
                retryPolicy: this.retryPolicy,
            });
        }
        else {
            return new PregelNode({
                channels: this.channels,
                triggers: this.triggers,
                mapper: this.mapper,
                writers: this.writers,
                bound: this.bound.pipe(coerceable),
                config: this.config,
                kwargs: this.kwargs,
                retryPolicy: this.retryPolicy,
            });
        }
    }
}
//# sourceMappingURL=read.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/validate.js


class GraphValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "GraphValidationError";
    }
}
function validateGraph({ nodes, channels, inputChannels, outputChannels, streamChannels, interruptAfterNodes, interruptBeforeNodes, }) {
    if (!channels) {
        throw new GraphValidationError("Channels not provided");
    }
    const subscribedChannels = new Set();
    const allOutputChannels = new Set();
    for (const [name, node] of Object.entries(nodes)) {
        if (name === constants_INTERRUPT) {
            throw new GraphValidationError(`"Node name ${constants_INTERRUPT} is reserved"`);
        }
        if (node.constructor === PregelNode) {
            node.triggers.forEach((trigger) => subscribedChannels.add(trigger));
        }
        else {
            throw new GraphValidationError(`Invalid node type ${typeof node}, expected PregelNode`);
        }
    }
    // side effect: update channels
    for (const chan of subscribedChannels) {
        if (!(chan in channels)) {
            throw new GraphValidationError(`Subcribed channel '${String(chan)}' not in channels`);
        }
    }
    if (!Array.isArray(inputChannels)) {
        if (!subscribedChannels.has(inputChannels)) {
            throw new GraphValidationError(`Input channel ${String(inputChannels)} is not subscribed to by any node`);
        }
    }
    else {
        if (inputChannels.every((channel) => !subscribedChannels.has(channel))) {
            throw new GraphValidationError(`None of the input channels ${inputChannels} are subscribed to by any node`);
        }
    }
    if (!Array.isArray(outputChannels)) {
        allOutputChannels.add(outputChannels);
    }
    else {
        outputChannels.forEach((chan) => allOutputChannels.add(chan));
    }
    if (streamChannels && !Array.isArray(streamChannels)) {
        allOutputChannels.add(streamChannels);
    }
    else if (Array.isArray(streamChannels)) {
        streamChannels.forEach((chan) => allOutputChannels.add(chan));
    }
    for (const chan of allOutputChannels) {
        if (!(chan in channels)) {
            throw new GraphValidationError(`Output channel '${String(chan)}' not in channels`);
        }
    }
    // validate interrupt before/after
    if (interruptAfterNodes && interruptAfterNodes !== "*") {
        for (const node of interruptAfterNodes) {
            if (!(node in nodes)) {
                throw new GraphValidationError(`Node ${String(node)} not in nodes`);
            }
        }
    }
    if (interruptBeforeNodes && interruptBeforeNodes !== "*") {
        for (const node of interruptBeforeNodes) {
            if (!(node in nodes)) {
                throw new GraphValidationError(`Node ${String(node)} not in nodes`);
            }
        }
    }
}
function validateKeys(keys, channels) {
    if (Array.isArray(keys)) {
        for (const key of keys) {
            if (!(key in channels)) {
                throw new Error(`Key ${String(key)} not found in channels`);
            }
        }
    }
    else {
        if (!(keys in channels)) {
            throw new Error(`Key ${String(keys)} not found in channels`);
        }
    }
}
//# sourceMappingURL=validate.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/io.js



function readChannel(channels, chan, catchErrors = true, returnException = false) {
    try {
        return channels[chan].get();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (e) {
        if (e.name === errors_EmptyChannelError.unminifiable_name) {
            if (returnException) {
                return e;
            }
            else if (catchErrors) {
                return null;
            }
        }
        throw e;
    }
}
function readChannels(channels, select, skipEmpty = true
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    if (Array.isArray(select)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const values = {};
        for (const k of select) {
            try {
                values[k] = readChannel(channels, k, !skipEmpty);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            }
            catch (e) {
                if (e.name === errors_EmptyChannelError.unminifiable_name) {
                    continue;
                }
            }
        }
        return values;
    }
    else {
        return readChannel(channels, select);
    }
}
/**
 * Map input chunk to a sequence of pending writes in the form (channel, value).
 */
function* mapCommand(cmd, pendingWrites) {
    if (cmd.graph === Command.PARENT) {
        throw new InvalidUpdateError("There is no parent graph.");
    }
    if (cmd.goto) {
        let sends;
        if (Array.isArray(cmd.goto)) {
            sends = cmd.goto;
        }
        else {
            sends = [cmd.goto];
        }
        for (const send of sends) {
            if (_isSend(send)) {
                yield [NULL_TASK_ID, constants_TASKS, send];
            }
            else if (typeof send === "string") {
                yield [NULL_TASK_ID, `branch:__start__:${SELF}:${send}`, "__start__"];
            }
            else {
                throw new Error(`In Command.send, expected Send or string, got ${typeof send}`);
            }
        }
    }
    if (cmd.resume) {
        if (typeof cmd.resume === "object" &&
            Object.keys(cmd.resume).length &&
            Object.keys(cmd.resume).every(wrapper/* validate */.tf)) {
            for (const [tid, resume] of Object.entries(cmd.resume)) {
                const existing = pendingWrites
                    .filter((w) => w[0] === tid && w[1] === constants_RESUME)
                    .map((w) => w[2])
                    .slice(0, 1) ?? [];
                existing.push(resume);
                yield [tid, constants_RESUME, existing];
            }
        }
        else {
            yield [NULL_TASK_ID, constants_RESUME, cmd.resume];
        }
    }
    if (cmd.update) {
        if (typeof cmd.update !== "object" || !cmd.update) {
            throw new Error("Expected cmd.update to be a dict mapping channel names to update values");
        }
        if (Array.isArray(cmd.update)) {
            for (const [k, v] of cmd.update) {
                yield [NULL_TASK_ID, k, v];
            }
        }
        else {
            for (const [k, v] of Object.entries(cmd.update)) {
                yield [NULL_TASK_ID, k, v];
            }
        }
    }
}
/**
 * Map input chunk to a sequence of pending writes in the form [channel, value].
 */
function* mapInput(inputChannels, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
chunk
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    if (chunk !== undefined && chunk !== null) {
        if (Array.isArray(inputChannels) &&
            typeof chunk === "object" &&
            !Array.isArray(chunk)) {
            for (const k in chunk) {
                if (inputChannels.includes(k)) {
                    yield [k, chunk[k]];
                }
            }
        }
        else if (Array.isArray(inputChannels)) {
            throw new Error(`Input chunk must be an object when "inputChannels" is an array`);
        }
        else {
            yield [inputChannels, chunk];
        }
    }
}
/**
 * Map pending writes (a sequence of tuples (channel, value)) to output chunk.
 */
function* mapOutputValues(outputChannels, pendingWrites, channels
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    if (Array.isArray(outputChannels)) {
        if (pendingWrites === true ||
            pendingWrites.find(([chan, _]) => outputChannels.includes(chan))) {
            yield readChannels(channels, outputChannels);
        }
    }
    else {
        if (pendingWrites === true ||
            pendingWrites.some(([chan, _]) => chan === outputChannels)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            yield readChannel(channels, outputChannels);
        }
    }
}
/**
 * Map pending writes (a sequence of tuples (channel, value)) to output chunk.
 * @internal
 *
 * @param outputChannels - The channels to output.
 * @param tasks - The tasks to output.
 * @param cached - Whether the output is cached.
 *
 * @returns A generator that yields the output chunk (if any).
 */
function* mapOutputUpdates(outputChannels, tasks, cached) {
    const outputTasks = tasks.filter(([task, ww]) => {
        return ((task.config === undefined || !task.config.tags?.includes(TAG_HIDDEN)) &&
            ww[0][0] !== constants_ERROR &&
            ww[0][0] !== constants_INTERRUPT);
    });
    if (!outputTasks.length) {
        return;
    }
    let updated;
    if (outputTasks.some(([task]) => task.writes.some(([chan, _]) => chan === RETURN))) {
        // TODO: probably should assert that RETURN is the only "non-special" channel (starts with "__")
        updated = outputTasks.flatMap(([task]) => task.writes
            .filter(([chan, _]) => chan === RETURN)
            .map(([_, value]) => [task.name, value]));
    }
    else if (!Array.isArray(outputChannels)) {
        // special case where graph state is a single channel (MessageGraph)
        // probably using this in functional API, too
        updated = outputTasks.flatMap(([task]) => task.writes
            .filter(([chan, _]) => chan === outputChannels)
            .map(([_, value]) => [task.name, value]));
    }
    else {
        updated = outputTasks.flatMap(([task]) => {
            const { writes } = task;
            const counts = {};
            for (const [chan] of writes) {
                if (outputChannels.includes(chan)) {
                    counts[chan] = (counts[chan] || 0) + 1;
                }
            }
            if (Object.values(counts).some((count) => count > 1)) {
                // Multiple writes to the same channel: create separate entries
                return writes
                    .filter(([chan]) => outputChannels.includes(chan))
                    .map(([chan, value]) => [task.name, { [chan]: value }]);
            }
            else {
                // Single write to each channel: create a single combined entry
                return [
                    [
                        task.name,
                        Object.fromEntries(writes.filter(([chan]) => outputChannels.includes(chan))),
                    ],
                ];
            }
        });
    }
    const grouped = {};
    for (const [node, value] of updated) {
        if (!(node in grouped)) {
            grouped[node] = [];
        }
        grouped[node].push(value);
    }
    const flattened = {};
    for (const node in grouped) {
        if (grouped[node].length === 1) {
            const [write] = grouped[node];
            flattened[node] = write;
        }
        else {
            flattened[node] = grouped[node];
        }
    }
    if (cached) {
        flattened["__metadata__"] = { cached };
    }
    yield flattened;
}
function single(iter) {
    // eslint-disable-next-line no-unreachable-loop
    for (const value of iter) {
        return value;
    }
    return null;
}
//# sourceMappingURL=io.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/utils/subgraph.js
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isRunnableSequence(x) {
    return "steps" in x && Array.isArray(x.steps);
}
function isPregelLike(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
x
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    return "lg_is_pregel" in x && x.lg_is_pregel === true;
}
function findSubgraphPregel(candidate
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    const candidates = [candidate];
    for (const candidate of candidates) {
        if (isPregelLike(candidate)) {
            return candidate;
        }
        else if (isRunnableSequence(candidate)) {
            candidates.push(...candidate.steps);
        }
    }
    return undefined;
}
//# sourceMappingURL=subgraph.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/debug.js




const COLORS_MAP = {
    blue: {
        start: "\x1b[34m",
        end: "\x1b[0m",
    },
    green: {
        start: "\x1b[32m",
        end: "\x1b[0m",
    },
    yellow: {
        start: "\x1b[33;1m",
        end: "\x1b[0m",
    },
};
/**
 * Wrap some text in a color for printing to the console.
 */
const wrap = (color, text) => `${color.start}${text}${color.end}`;
function printCheckpoint(step, channels) {
    console.log([
        `${wrap(COLORS_MAP.blue, "[langgraph/checkpoint]")}`,
        `Finishing step ${step}. Channel values:\n`,
        `\n${JSON.stringify(Object.fromEntries(_readChannels(channels)), null, 2)}`,
    ].join(""));
}
function* _readChannels(channels
// eslint-disable-next-line @typescript-eslint/no-explicit-any
) {
    for (const [name, channel] of Object.entries(channels)) {
        try {
            yield [name, channel.get()];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
        catch (error) {
            if (error.name === EmptyChannelError.unminifiable_name) {
                // Skip the channel if it's empty
                continue;
            }
            else {
                throw error; // Re-throw the error if it's not an EmptyChannelError
            }
        }
    }
}
function* mapDebugTasks(step, tasks) {
    const ts = new Date().toISOString();
    for (const { id, name, input, config, triggers, writes } of tasks) {
        if (config?.tags?.includes(TAG_HIDDEN))
            continue;
        const interrupts = writes
            .filter(([writeId, n]) => {
            return writeId === id && n === constants_INTERRUPT;
        })
            .map(([, v]) => {
            return v;
        });
        yield {
            type: "task",
            timestamp: ts,
            step,
            payload: {
                id,
                name,
                input,
                triggers,
                interrupts,
            },
        };
    }
}
function* mapDebugTaskResults(step, tasks, streamChannels) {
    const ts = new Date().toISOString();
    for (const [{ id, name, config }, writes] of tasks) {
        if (config?.tags?.includes(TAG_HIDDEN))
            continue;
        yield {
            type: "task_result",
            timestamp: ts,
            step,
            payload: {
                id,
                name,
                result: writes.filter(([channel]) => {
                    return Array.isArray(streamChannels)
                        ? streamChannels.includes(channel)
                        : channel === streamChannels;
                }),
                interrupts: writes.filter((w) => w[0] === constants_INTERRUPT).map((w) => w[1]),
            },
        };
    }
}
function* mapDebugCheckpoint(step, config, channels, streamChannels, metadata, tasks, pendingWrites, parentConfig) {
    function formatConfig(config) {
        // make sure the config is consistent with Python
        const pyConfig = {};
        if (config.callbacks != null)
            pyConfig.callbacks = config.callbacks;
        if (config.configurable != null)
            pyConfig.configurable = config.configurable;
        if (config.maxConcurrency != null)
            pyConfig.max_concurrency = config.maxConcurrency;
        if (config.metadata != null)
            pyConfig.metadata = config.metadata;
        if (config.recursionLimit != null)
            pyConfig.recursion_limit = config.recursionLimit;
        if (config.runId != null)
            pyConfig.run_id = config.runId;
        if (config.runName != null)
            pyConfig.run_name = config.runName;
        if (config.tags != null)
            pyConfig.tags = config.tags;
        return pyConfig;
    }
    const parentNs = config.configurable?.checkpoint_ns;
    const taskStates = {};
    for (const task of tasks) {
        const candidates = task.subgraphs?.length ? task.subgraphs : [task.proc];
        if (!candidates.find(findSubgraphPregel))
            continue;
        let taskNs = `${task.name}:${task.id}`;
        if (parentNs)
            taskNs = `${parentNs}|${taskNs}`;
        taskStates[task.id] = {
            configurable: {
                thread_id: config.configurable?.thread_id,
                checkpoint_ns: taskNs,
            },
        };
    }
    const ts = new Date().toISOString();
    yield {
        type: "checkpoint",
        timestamp: ts,
        step,
        payload: {
            config: formatConfig(config),
            values: readChannels(channels, streamChannels),
            metadata,
            next: tasks.map((task) => task.name),
            tasks: tasksWithWrites(tasks, pendingWrites, taskStates),
            parentConfig: parentConfig ? formatConfig(parentConfig) : undefined,
        },
    };
}
function tasksWithWrites(tasks, pendingWrites, states) {
    return tasks.map((task) => {
        const error = pendingWrites.find(([id, n]) => id === task.id && n === constants_ERROR)?.[2];
        const interrupts = pendingWrites
            .filter(([id, n]) => {
            return id === task.id && n === constants_INTERRUPT;
        })
            .map(([, , v]) => {
            return v;
        });
        if (error) {
            return {
                id: task.id,
                name: task.name,
                path: task.path,
                error,
                interrupts,
            };
        }
        return {
            id: task.id,
            name: task.name,
            path: task.path,
            interrupts,
            state: states?.[task.id],
        };
    });
}
function printStepCheckpoint(step, channels, whitelist) {
    console.log([
        `${wrap(COLORS_MAP.blue, `[${step}:checkpoint]`)}`,
        `\x1b[1m State at the end of step ${step}:\x1b[0m\n`,
        JSON.stringify(readChannels(channels, whitelist), null, 2),
    ].join(""));
}
function printStepTasks(step, nextTasks) {
    const nTasks = nextTasks.length;
    console.log([
        `${wrap(COLORS_MAP.blue, `[${step}:tasks]`)}`,
        `\x1b[1m Starting step ${step} with ${nTasks} task${nTasks === 1 ? "" : "s"}:\x1b[0m\n`,
        nextTasks
            .map((task) => `- ${wrap(COLORS_MAP.green, String(task.name))} -> ${JSON.stringify(task.input, null, 2)}`)
            .join("\n"),
    ].join(""));
}
function printStepWrites(step, writes, whitelist) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const byChannel = {};
    for (const [channel, value] of writes) {
        if (whitelist.includes(channel)) {
            if (!byChannel[channel]) {
                byChannel[channel] = [];
            }
            byChannel[channel].push(value);
        }
    }
    console.log([
        `${wrap(COLORS_MAP.blue, `[${step}:writes]`)}`,
        `\x1b[1m Finished step ${step} with writes to ${Object.keys(byChannel).length} channel${Object.keys(byChannel).length !== 1 ? "s" : ""}:\x1b[0m\n`,
        Object.entries(byChannel)
            .map(([name, vals]) => `- ${wrap(COLORS_MAP.yellow, name)} -> ${vals
            .map((v) => JSON.stringify(v))
            .join(", ")}`)
            .join("\n"),
    ].join(""));
}
//# sourceMappingURL=debug.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/types.js
class Call {
    constructor({ func, name, input, retry, callbacks }) {
        Object.defineProperty(this, "func", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "input", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "retry", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "callbacks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "__lg_type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "call"
        });
        this.func = func;
        this.name = name;
        this.input = input;
        this.retry = retry;
        this.callbacks = callbacks;
    }
}
function isCall(value) {
    return (typeof value === "object" &&
        value !== null &&
        "__lg_type" in value &&
        value.__lg_type === "call");
}
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/utils/index.js

function getNullChannelVersion(currentVersions) {
    const versionValues = Object.values(currentVersions);
    const versionType = versionValues.length > 0 ? typeof versionValues[0] : undefined;
    let nullVersion;
    if (versionType === "number") {
        nullVersion = 0;
    }
    else if (versionType === "string") {
        nullVersion = "";
    }
    return nullVersion;
}
function getNewChannelVersions(previousVersions, currentVersions) {
    // Get new channel versions
    if (Object.keys(previousVersions).length > 0) {
        const nullVersion = getNullChannelVersion(currentVersions);
        return Object.fromEntries(Object.entries(currentVersions).filter(([k, v]) => v > (previousVersions[k] ?? nullVersion)));
    }
    else {
        return currentVersions;
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _coerceToDict(value, defaultKey) {
    return value &&
        !Array.isArray(value) &&
        // eslint-disable-next-line no-instanceof/no-instanceof
        !(value instanceof Date) &&
        typeof value === "object"
        ? value
        : { [defaultKey]: value };
}
function utils_patchConfigurable(config, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
patch) {
    if (config === null) {
        return { configurable: patch };
    }
    else if (config?.configurable === undefined) {
        return { ...config, configurable: patch };
    }
    else {
        return {
            ...config,
            configurable: { ...config.configurable, ...patch },
        };
    }
}
function patchCheckpointMap(config, metadata) {
    const parents = metadata?.parents ?? {};
    if (Object.keys(parents).length > 0) {
        return utils_patchConfigurable(config, {
            [CONFIG_KEY_CHECKPOINT_MAP]: {
                ...parents,
                [config.configurable?.checkpoint_ns ?? ""]: config.configurable?.checkpoint_id,
            },
        });
    }
    else {
        return config;
    }
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/func/types.js
/**
 * Checks if a value is an EntrypointFinal - use this instead of `instanceof`, as value may have been deserialized
 * @param value The value to check
 * @returns Whether the value is an EntrypointFinal
 */
function isEntrypointFinal(value) {
    return (typeof value === "object" &&
        value !== null &&
        "__lg_type" in value &&
        value.__lg_type === "__pregel_final");
}
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/call.js






/**
 * Wraps a user function in a Runnable that writes the returned value to the RETURN channel.
 */
function getRunnableForFunc(name, func) {
    const run = new RunnableCallable({
        func: (input) => func(...input),
        name,
        trace: false,
        recurse: false,
    });
    return new runnables_base/* RunnableSequence */.zZ({
        name,
        first: run,
        last: new ChannelWrite([{ channel: RETURN, value: PASSTHROUGH }], [TAG_HIDDEN]),
    });
}
function getRunnableForEntrypoint(name, func) {
    const run = new RunnableCallable({
        func: (input, config) => {
            return func(input, config);
        },
        name,
        trace: false,
        recurse: false,
    });
    return new runnables_base/* RunnableSequence */.zZ({
        name,
        first: run,
        middle: [
            new ChannelWrite([
                {
                    channel: constants_END,
                    value: PASSTHROUGH,
                    mapper: new RunnableCallable({
                        func: (value) => (isEntrypointFinal(value) ? value.value : value),
                    }),
                },
            ], [TAG_HIDDEN]),
            new ChannelWrite([
                {
                    channel: PREVIOUS,
                    value: PASSTHROUGH,
                    mapper: new RunnableCallable({
                        func: (value) => {
                            return isEntrypointFinal(value) ? value.save : value;
                        },
                    }),
                },
            ]),
        ],
        last: new RunnableCallable({
            func: (final) => isEntrypointFinal(final) ? final.value : final,
        }),
    });
}
function call_call({ func, name, retry }, ...args) {
    const config = AsyncLocalStorageProviderSingleton.getRunnableConfig();
    if (typeof config.configurable?.[CONFIG_KEY_CALL] === "function") {
        return config.configurable[CONFIG_KEY_CALL](func, name, args, {
            retry,
            callbacks: config.callbacks,
        });
    }
    throw new Error("Async local storage not initialized. Please call initializeAsyncLocalStorageSingleton() before using this function.");
}
//# sourceMappingURL=call.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/algo.js
/* eslint-disable no-param-reassign */









const increment = (current) => {
    return current !== undefined ? current + 1 : 1;
};
function shouldInterrupt(checkpoint, interruptNodes, tasks) {
    const versionValues = Object.values(checkpoint.channel_versions);
    const versionType = versionValues.length > 0 ? typeof versionValues[0] : undefined;
    let nullVersion;
    if (versionType === "number") {
        nullVersion = 0;
    }
    else if (versionType === "string") {
        nullVersion = "";
    }
    const seen = checkpoint.versions_seen[constants_INTERRUPT] ?? {};
    const anyChannelUpdated = Object.entries(checkpoint.channel_versions).some(([chan, version]) => {
        return version > (seen[chan] ?? nullVersion);
    });
    const anyTriggeredNodeInInterruptNodes = tasks.some((task) => interruptNodes === "*"
        ? !task.config?.tags?.includes(TAG_HIDDEN)
        : interruptNodes.includes(task.name));
    return anyChannelUpdated && anyTriggeredNodeInInterruptNodes;
}
function _localRead(step, checkpoint, channels, managed, task, select, fresh = false) {
    let managedKeys = [];
    let updated = new Set();
    if (!Array.isArray(select)) {
        for (const [c] of task.writes) {
            if (c === select) {
                updated = new Set([c]);
                break;
            }
        }
        updated = updated || new Set();
    }
    else {
        managedKeys = select.filter((k) => managed.get(k));
        select = select.filter((k) => !managed.get(k));
        updated = new Set(select.filter((c) => task.writes.some(([key, _]) => key === c)));
    }
    let values;
    if (fresh && updated.size > 0) {
        const localChannels = Object.fromEntries(Object.entries(channels).filter(([k, _]) => updated.has(k)));
        const newCheckpoint = createCheckpoint(checkpoint, localChannels, -1);
        const newChannels = emptyChannels(localChannels, newCheckpoint);
        _applyWrites(copyCheckpoint(newCheckpoint), newChannels, [task]);
        values = readChannels({ ...channels, ...newChannels }, select);
    }
    else {
        values = readChannels(channels, select);
    }
    if (managedKeys.length > 0) {
        for (const k of managedKeys) {
            const managedValue = managed.get(k);
            if (managedValue) {
                const resultOfManagedCall = managedValue.call(step);
                values[k] = resultOfManagedCall;
            }
        }
    }
    return values;
}
function _localWrite(step, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
commit, processes, managed, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
writes) {
    for (const [chan, value] of writes) {
        if (chan === constants_TASKS && value != null) {
            if (!_isSend(value)) {
                throw new InvalidUpdateError(`Invalid packet type, expected SendProtocol, got ${JSON.stringify(value)}`);
            }
            if (!(value.node in processes)) {
                throw new InvalidUpdateError(`Invalid node name "${value.node}" in Send packet`);
            }
            // replace any runtime values with placeholders
            managed.replaceRuntimeValues(step, value.args);
        }
    }
    commit(writes);
}
const IGNORE = new Set([
    NO_WRITES,
    PUSH,
    constants_RESUME,
    constants_INTERRUPT,
    RETURN,
    constants_ERROR,
]);
function _applyWrites(checkpoint, channels, tasks, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
getNextVersion) {
    // Sort tasks by first 3 path elements for deterministic order
    // Later path parts (like task IDs) are ignored for sorting
    tasks.sort((a, b) => {
        const aPath = a.path?.slice(0, 3) || [];
        const bPath = b.path?.slice(0, 3) || [];
        // Compare each path element
        for (let i = 0; i < Math.min(aPath.length, bPath.length); i += 1) {
            if (aPath[i] < bPath[i])
                return -1;
            if (aPath[i] > bPath[i])
                return 1;
        }
        // If one path is shorter, it comes first
        return aPath.length - bPath.length;
    });
    // if no task has triggers this is applying writes from the null task only
    // so we don't do anything other than update the channels written to
    const bumpStep = tasks.some((task) => task.triggers.length > 0);
    // Filter out non instances of BaseChannel
    const onlyChannels = Object.fromEntries(Object.entries(channels).filter(([_, value]) => isBaseChannel(value)));
    // Update seen versions
    for (const task of tasks) {
        if (checkpoint.versions_seen[task.name] === undefined) {
            checkpoint.versions_seen[task.name] = {};
        }
        for (const chan of task.triggers) {
            if (chan in checkpoint.channel_versions) {
                checkpoint.versions_seen[task.name][chan] =
                    checkpoint.channel_versions[chan];
            }
        }
    }
    // Find the highest version of all channels
    let maxVersion;
    if (Object.keys(checkpoint.channel_versions).length > 0) {
        maxVersion = maxChannelVersion(...Object.values(checkpoint.channel_versions));
    }
    // Consume all channels that were read
    const channelsToConsume = new Set(tasks
        .flatMap((task) => task.triggers)
        .filter((chan) => !RESERVED.includes(chan)));
    for (const chan of channelsToConsume) {
        if (chan in onlyChannels && onlyChannels[chan].consume()) {
            if (getNextVersion !== undefined) {
                checkpoint.channel_versions[chan] = getNextVersion(maxVersion, onlyChannels[chan]);
            }
        }
    }
    // Clear pending sends
    if (checkpoint.pending_sends?.length && bumpStep) {
        checkpoint.pending_sends = [];
    }
    // Group writes by channel
    const pendingWriteValuesByChannel = {};
    const pendingWritesByManaged = {};
    for (const task of tasks) {
        for (const [chan, val] of task.writes) {
            if (IGNORE.has(chan)) {
                // do nothing
            }
            else if (chan === constants_TASKS) {
                // TODO: remove branch in 1.0
                checkpoint.pending_sends.push({
                    node: val.node,
                    args: val.args,
                });
            }
            else if (chan in onlyChannels) {
                if (chan in pendingWriteValuesByChannel) {
                    pendingWriteValuesByChannel[chan].push(val);
                }
                else {
                    pendingWriteValuesByChannel[chan] = [val];
                }
            }
            else {
                if (chan in pendingWritesByManaged) {
                    pendingWritesByManaged[chan].push(val);
                }
                else {
                    pendingWritesByManaged[chan] = [val];
                }
            }
        }
    }
    // find the highest version of all channels
    maxVersion = undefined;
    if (Object.keys(checkpoint.channel_versions).length > 0) {
        maxVersion = maxChannelVersion(...Object.values(checkpoint.channel_versions));
    }
    const updatedChannels = new Set();
    // Apply writes to channels
    for (const [chan, vals] of Object.entries(pendingWriteValuesByChannel)) {
        if (chan in onlyChannels) {
            let updated;
            try {
                updated = onlyChannels[chan].update(vals);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            }
            catch (e) {
                if (e.name === InvalidUpdateError.unminifiable_name) {
                    const wrappedError = new InvalidUpdateError(`Invalid update for channel "${chan}" with values ${JSON.stringify(vals)}: ${e.message}`);
                    wrappedError.lc_error_code = e.lc_error_code;
                    throw wrappedError;
                }
                else {
                    throw e;
                }
            }
            if (updated && getNextVersion !== undefined) {
                checkpoint.channel_versions[chan] = getNextVersion(maxVersion, onlyChannels[chan]);
            }
            updatedChannels.add(chan);
        }
    }
    // Channels that weren't updated in this step are notified of a new step
    if (bumpStep) {
        for (const chan of Object.keys(onlyChannels)) {
            if (!updatedChannels.has(chan)) {
                const updated = onlyChannels[chan].update([]);
                if (updated && getNextVersion !== undefined) {
                    checkpoint.channel_versions[chan] = getNextVersion(maxVersion, onlyChannels[chan]);
                }
            }
        }
    }
    // Return managed values writes to be applied externally
    return pendingWritesByManaged;
}
/**
 * Prepare the set of tasks that will make up the next Pregel step.
 * This is the union of all PUSH tasks (Sends) and PULL tasks (nodes triggered
 * by edges).
 */
function _prepareNextTasks(checkpoint, pendingWrites, processes, channels, managed, config, forExecution, extra) {
    const tasks = {};
    // Consume pending packets
    for (let i = 0; i < checkpoint.pending_sends.length; i += 1) {
        const task = _prepareSingleTask([PUSH, i], checkpoint, pendingWrites, processes, channels, managed, config, forExecution, extra);
        if (task !== undefined) {
            tasks[task.id] = task;
        }
    }
    // Check if any processes should be run in next step
    // If so, prepare the values to be passed to them
    for (const name of Object.keys(processes)) {
        const task = _prepareSingleTask([PULL, name], checkpoint, pendingWrites, processes, channels, managed, config, forExecution, extra);
        if (task !== undefined) {
            tasks[task.id] = task;
        }
    }
    return tasks;
}
/**
 * Prepares a single task for the next Pregel step, given a task path, which
 * uniquely identifies a PUSH or PULL task within the graph.
 */
function _prepareSingleTask(taskPath, checkpoint, pendingWrites, processes, channels, managed, config, forExecution, extra) {
    const { step, checkpointer, manager } = extra;
    const configurable = config.configurable ?? {};
    const parentNamespace = configurable.checkpoint_ns ?? "";
    if (taskPath[0] === PUSH && isCall(taskPath[taskPath.length - 1])) {
        const call = taskPath[taskPath.length - 1];
        const proc = getRunnableForFunc(call.name, call.func);
        const triggers = [PUSH];
        const checkpointNamespace = parentNamespace === ""
            ? call.name
            : `${parentNamespace}${constants_CHECKPOINT_NAMESPACE_SEPARATOR}${call.name}`;
        const id = uuid5(JSON.stringify([
            checkpointNamespace,
            step.toString(),
            call.name,
            PUSH,
            taskPath[1],
            taskPath[2],
        ]), checkpoint.id);
        const taskCheckpointNamespace = `${checkpointNamespace}${CHECKPOINT_NAMESPACE_END}${id}`;
        const metadata = {
            langgraph_step: step,
            langgraph_node: call.name,
            langgraph_triggers: triggers,
            langgraph_path: taskPath.slice(0, 3),
            langgraph_checkpoint_ns: taskCheckpointNamespace,
        };
        if (forExecution) {
            const writes = [];
            const task = {
                name: call.name,
                input: call.input,
                proc,
                writes,
                config: (0,runnables_config/* patchConfig */.tn)((0,runnables_config/* mergeConfigs */.SV)(config, {
                    metadata,
                    store: extra.store ?? config.store,
                }), {
                    runName: call.name,
                    callbacks: manager?.getChild(`graph:step:${step}`),
                    configurable: {
                        [CONFIG_KEY_TASK_ID]: id,
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        [constants_CONFIG_KEY_SEND]: (writes_) => _localWrite(step, (items) => writes.push(...items), processes, managed, writes_),
                        [CONFIG_KEY_READ]: (select_, fresh_ = false) => _localRead(step, checkpoint, channels, managed, {
                            name: call.name,
                            writes: writes,
                            triggers,
                            path: taskPath.slice(0, 3),
                        }, select_, fresh_),
                        [CONFIG_KEY_CHECKPOINTER]: checkpointer ?? configurable[CONFIG_KEY_CHECKPOINTER],
                        [CONFIG_KEY_CHECKPOINT_MAP]: {
                            ...configurable[CONFIG_KEY_CHECKPOINT_MAP],
                            [parentNamespace]: checkpoint.id,
                        },
                        [constants_CONFIG_KEY_SCRATCHPAD]: _scratchpad([
                            ...(pendingWrites || []),
                            ...(configurable[constants_CONFIG_KEY_SCRATCHPAD]?.resume || []).map((v) => [id, constants_RESUME, v]),
                        ], id),
                        [constants_CONFIG_KEY_PREVIOUS_STATE]: checkpoint.channel_values[PREVIOUS],
                        checkpoint_id: undefined,
                        checkpoint_ns: taskCheckpointNamespace,
                    },
                }),
                triggers,
                retry_policy: call.retry,
                id,
                path: taskPath.slice(0, 3),
                writers: [],
            };
            return task;
        }
        else {
            return {
                id,
                name: call.name,
                interrupts: [],
                path: taskPath.slice(0, 3),
            };
        }
    }
    else if (taskPath[0] === PUSH) {
        const index = typeof taskPath[1] === "number"
            ? taskPath[1]
            : parseInt(taskPath[1], 10);
        if (index >= checkpoint.pending_sends.length) {
            return undefined;
        }
        const packet = checkpoint.pending_sends[index];
        if (!_isSendInterface(packet)) {
            console.warn(`Ignoring invalid packet ${JSON.stringify(packet)} in pending sends.`);
            return undefined;
        }
        if (!(packet.node in processes)) {
            console.warn(`Ignoring unknown node name ${packet.node} in pending sends.`);
            return undefined;
        }
        const triggers = [PUSH];
        const checkpointNamespace = parentNamespace === ""
            ? packet.node
            : `${parentNamespace}${constants_CHECKPOINT_NAMESPACE_SEPARATOR}${packet.node}`;
        const taskId = uuid5(JSON.stringify([
            checkpointNamespace,
            step.toString(),
            packet.node,
            PUSH,
            index.toString(),
        ]), checkpoint.id);
        const taskCheckpointNamespace = `${checkpointNamespace}${CHECKPOINT_NAMESPACE_END}${taskId}`;
        let metadata = {
            langgraph_step: step,
            langgraph_node: packet.node,
            langgraph_triggers: triggers,
            langgraph_path: taskPath,
            langgraph_checkpoint_ns: taskCheckpointNamespace,
        };
        if (forExecution) {
            const proc = processes[packet.node];
            const node = proc.getNode();
            if (node !== undefined) {
                managed.replaceRuntimePlaceholders(step, packet.args);
                if (proc.metadata !== undefined) {
                    metadata = { ...metadata, ...proc.metadata };
                }
                const writes = [];
                return {
                    name: packet.node,
                    input: packet.args,
                    proc: node,
                    subgraphs: proc.subgraphs,
                    writes,
                    config: (0,runnables_config/* patchConfig */.tn)((0,runnables_config/* mergeConfigs */.SV)(config, {
                        metadata,
                        tags: proc.tags,
                        store: extra.store ?? config.store,
                    }), {
                        runName: packet.node,
                        callbacks: manager?.getChild(`graph:step:${step}`),
                        configurable: {
                            [CONFIG_KEY_TASK_ID]: taskId,
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            [constants_CONFIG_KEY_SEND]: (writes_) => _localWrite(step, (items) => writes.push(...items), processes, managed, writes_),
                            [CONFIG_KEY_READ]: (select_, fresh_ = false) => _localRead(step, checkpoint, channels, managed, {
                                name: packet.node,
                                writes: writes,
                                triggers,
                                path: taskPath,
                            }, select_, fresh_),
                            [CONFIG_KEY_CHECKPOINTER]: checkpointer ?? configurable[CONFIG_KEY_CHECKPOINTER],
                            [CONFIG_KEY_CHECKPOINT_MAP]: {
                                ...configurable[CONFIG_KEY_CHECKPOINT_MAP],
                                [parentNamespace]: checkpoint.id,
                            },
                            [constants_CONFIG_KEY_SCRATCHPAD]: _scratchpad([
                                ...(pendingWrites || []),
                                ...(configurable[constants_CONFIG_KEY_SCRATCHPAD]?.resume || []).map((v) => [
                                    taskId,
                                    constants_RESUME,
                                    v,
                                ]),
                            ], taskId),
                            [constants_CONFIG_KEY_PREVIOUS_STATE]: checkpoint.channel_values[PREVIOUS],
                            checkpoint_id: undefined,
                            checkpoint_ns: taskCheckpointNamespace,
                        },
                    }),
                    triggers,
                    retry_policy: proc.retryPolicy,
                    id: taskId,
                    path: taskPath,
                    writers: proc.getWriters(),
                };
            }
        }
        else {
            return {
                id: taskId,
                name: packet.node,
                interrupts: [],
                path: taskPath,
            };
        }
    }
    else if (taskPath[0] === PULL) {
        const name = taskPath[1].toString();
        const proc = processes[name];
        if (proc === undefined) {
            return undefined;
        }
        const nullVersion = getNullChannelVersion(checkpoint.channel_versions);
        if (nullVersion === undefined) {
            return undefined;
        }
        const seen = checkpoint.versions_seen[name] ?? {};
        const triggers = proc.triggers
            .filter((chan) => {
            const result = readChannel(channels, chan, false, true);
            const isEmptyChannelError = 
            // eslint-disable-next-line no-instanceof/no-instanceof
            result instanceof Error &&
                result.name === errors_EmptyChannelError.unminifiable_name;
            return (!isEmptyChannelError &&
                (checkpoint.channel_versions[chan] ?? nullVersion) >
                    (seen[chan] ?? nullVersion));
        })
            .sort();
        // If any of the channels read by this process were updated
        if (triggers.length > 0) {
            const val = _procInput(step, proc, managed, channels, forExecution);
            if (val === undefined) {
                return undefined;
            }
            const checkpointNamespace = parentNamespace === ""
                ? name
                : `${parentNamespace}${constants_CHECKPOINT_NAMESPACE_SEPARATOR}${name}`;
            const taskId = uuid5(JSON.stringify([
                checkpointNamespace,
                step.toString(),
                name,
                PULL,
                triggers,
            ]), checkpoint.id);
            const taskCheckpointNamespace = `${checkpointNamespace}${CHECKPOINT_NAMESPACE_END}${taskId}`;
            let metadata = {
                langgraph_step: step,
                langgraph_node: name,
                langgraph_triggers: triggers,
                langgraph_path: taskPath,
                langgraph_checkpoint_ns: taskCheckpointNamespace,
            };
            if (forExecution) {
                const node = proc.getNode();
                if (node !== undefined) {
                    if (proc.metadata !== undefined) {
                        metadata = { ...metadata, ...proc.metadata };
                    }
                    const writes = [];
                    const taskCheckpointNamespace = `${checkpointNamespace}${CHECKPOINT_NAMESPACE_END}${taskId}`;
                    return {
                        name,
                        input: val,
                        proc: node,
                        subgraphs: proc.subgraphs,
                        writes,
                        config: (0,runnables_config/* patchConfig */.tn)((0,runnables_config/* mergeConfigs */.SV)(config, {
                            metadata,
                            tags: proc.tags,
                            store: extra.store ?? config.store,
                        }), {
                            runName: name,
                            callbacks: manager?.getChild(`graph:step:${step}`),
                            configurable: {
                                [CONFIG_KEY_TASK_ID]: taskId,
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                [constants_CONFIG_KEY_SEND]: (writes_) => _localWrite(step, (items) => {
                                    writes.push(...items);
                                }, processes, managed, writes_),
                                [CONFIG_KEY_READ]: (select_, fresh_ = false) => _localRead(step, checkpoint, channels, managed, {
                                    name,
                                    writes: writes,
                                    triggers,
                                    path: taskPath,
                                }, select_, fresh_),
                                [CONFIG_KEY_CHECKPOINTER]: checkpointer ?? configurable[CONFIG_KEY_CHECKPOINTER],
                                [CONFIG_KEY_CHECKPOINT_MAP]: {
                                    ...configurable[CONFIG_KEY_CHECKPOINT_MAP],
                                    [parentNamespace]: checkpoint.id,
                                },
                                [constants_CONFIG_KEY_SCRATCHPAD]: _scratchpad([
                                    ...(pendingWrites || []),
                                    ...(configurable[constants_CONFIG_KEY_SCRATCHPAD]?.resume || []).map((v) => [
                                        taskId,
                                        constants_RESUME,
                                        v,
                                    ]),
                                ], taskId),
                                [constants_CONFIG_KEY_PREVIOUS_STATE]: checkpoint.channel_values[PREVIOUS],
                                checkpoint_id: undefined,
                                checkpoint_ns: taskCheckpointNamespace,
                            },
                        }),
                        triggers,
                        retry_policy: proc.retryPolicy,
                        id: taskId,
                        path: taskPath,
                        writers: proc.getWriters(),
                    };
                }
            }
            else {
                return { id: taskId, name, interrupts: [], path: taskPath };
            }
        }
    }
    return undefined;
}
/**
 *  Function injected under CONFIG_KEY_READ in task config, to read current state.
 *  Used by conditional edges to read a copy of the state with reflecting the writes
 *  from that node only.
 *
 * @internal
 */
function _procInput(step, proc, managed, channels, forExecution) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let val;
    if (typeof proc.channels === "object" && !Array.isArray(proc.channels)) {
        val = {};
        for (const [k, chan] of Object.entries(proc.channels)) {
            if (proc.triggers.includes(chan)) {
                try {
                    val[k] = readChannel(channels, chan, false);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                }
                catch (e) {
                    if (e.name === errors_EmptyChannelError.unminifiable_name) {
                        return undefined;
                    }
                    else {
                        throw e;
                    }
                }
            }
            else if (chan in channels) {
                try {
                    val[k] = readChannel(channels, chan, false);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                }
                catch (e) {
                    if (e.name === errors_EmptyChannelError.unminifiable_name) {
                        continue;
                    }
                    else {
                        throw e;
                    }
                }
            }
            else {
                val[k] = managed.get(k)?.call(step);
            }
        }
    }
    else if (Array.isArray(proc.channels)) {
        let successfulRead = false;
        for (const chan of proc.channels) {
            try {
                val = readChannel(channels, chan, false);
                successfulRead = true;
                break;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            }
            catch (e) {
                if (e.name === errors_EmptyChannelError.unminifiable_name) {
                    continue;
                }
                else {
                    throw e;
                }
            }
        }
        if (!successfulRead) {
            return undefined;
        }
    }
    else {
        throw new Error(`Invalid channels type, expected list or dict, got ${proc.channels}`);
    }
    // If the process has a mapper, apply it to the value
    if (forExecution && proc.mapper !== undefined) {
        val = proc.mapper(val);
    }
    return val;
}
function _scratchpad(pendingWrites, taskId) {
    return {
        callCounter: 0,
        interruptCounter: -1,
        resume: pendingWrites
            .filter(([writeTaskId, chan]) => writeTaskId === taskId && chan === constants_RESUME)
            .flatMap(([_writeTaskId, _chan, resume]) => resume),
        nullResume: pendingWrites.find(([writeTaskId, chan]) => writeTaskId === NULL_TASK_ID && chan === constants_RESUME)?.[2],
        subgraphCounter: 0,
    };
}
//# sourceMappingURL=algo.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/core/utils/stream.js

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/stream.js

class IterableReadableWritableStream extends utils_stream.IterableReadableStream {
    get closed() {
        return this._closed;
    }
    constructor(params) {
        let streamControllerPromiseResolver;
        const streamControllerPromise = new Promise((resolve) => {
            streamControllerPromiseResolver = resolve;
        });
        super({
            start: (controller) => {
                streamControllerPromiseResolver(controller);
            },
        });
        Object.defineProperty(this, "modes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "controller", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "passthroughFn", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_closed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        // .start() will always be called before the stream can be interacted
        // with anyway
        void streamControllerPromise.then((controller) => {
            this.controller = controller;
        });
        this.passthroughFn = params.passthroughFn;
        this.modes = params.modes;
    }
    push(chunk) {
        this.passthroughFn?.(chunk);
        this.controller.enqueue(chunk);
    }
    close() {
        try {
            this.controller.close();
        }
        catch (e) {
            // pass
        }
        finally {
            this._closed = true;
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error(e) {
        this.controller.error(e);
    }
}
//# sourceMappingURL=stream.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/loop.js










const INPUT_DONE = Symbol.for("INPUT_DONE");
const INPUT_RESUMING = Symbol.for("INPUT_RESUMING");
const DEFAULT_LOOP_LIMIT = 25;
function createDuplexStream(...streams) {
    return new IterableReadableWritableStream({
        passthroughFn: (value) => {
            for (const stream of streams) {
                if (stream.modes.has(value[1])) {
                    stream.push(value);
                }
            }
        },
        modes: new Set(streams.flatMap((s) => Array.from(s.modes))),
    });
}
class PregelLoop {
    constructor(params) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "input", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "output", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checkpointer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checkpointerGetNextVersion", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "channels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "managed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checkpoint", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checkpointConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checkpointMetadata", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checkpointNamespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checkpointPendingWrites", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "checkpointPreviousVersions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "step", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "stop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "outputKeys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "streamKeys", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "skipDoneTasks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "prevCheckpointConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "status", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "pending"
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "tasks", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "stream", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checkpointerPromises", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "isNested", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "_checkpointerChainedPromise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: Promise.resolve()
        });
        Object.defineProperty(this, "store", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "manager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "interruptAfter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "interruptBefore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toInterrupt", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "debug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        this.input = params.input;
        this.checkpointer = params.checkpointer;
        // TODO: if managed values no longer needs graph we can replace with
        // managed_specs, channel_specs
        if (this.checkpointer !== undefined) {
            this.checkpointerGetNextVersion = this.checkpointer.getNextVersion.bind(this.checkpointer);
        }
        else {
            this.checkpointerGetNextVersion = increment;
        }
        this.checkpoint = params.checkpoint;
        this.checkpointMetadata = params.checkpointMetadata;
        this.checkpointPreviousVersions = params.checkpointPreviousVersions;
        this.channels = params.channels;
        this.managed = params.managed;
        this.checkpointPendingWrites = params.checkpointPendingWrites;
        this.step = params.step;
        this.stop = params.stop;
        this.config = params.config;
        this.checkpointConfig = params.checkpointConfig;
        this.isNested = params.isNested;
        this.manager = params.manager;
        this.outputKeys = params.outputKeys;
        this.streamKeys = params.streamKeys;
        this.nodes = params.nodes;
        this.skipDoneTasks = params.skipDoneTasks;
        this.store = params.store;
        this.stream = params.stream;
        this.checkpointNamespace = params.checkpointNamespace;
        this.prevCheckpointConfig = params.prevCheckpointConfig;
        this.interruptAfter = params.interruptAfter;
        this.interruptBefore = params.interruptBefore;
        this.debug = params.debug;
        this._incrementSubgraphCounter();
    }
    static async initialize(params) {
        let { config, stream } = params;
        if (stream !== undefined &&
            config.configurable?.[CONFIG_KEY_STREAM] !== undefined) {
            stream = createDuplexStream(stream, config.configurable[CONFIG_KEY_STREAM]);
        }
        const skipDoneTasks = config.configurable
            ? !("checkpoint_id" in config.configurable)
            : true;
        const isNested = CONFIG_KEY_READ in (config.configurable ?? {});
        if (!isNested &&
            config.configurable?.checkpoint_ns !== undefined &&
            config.configurable?.checkpoint_ns !== "") {
            config = utils_patchConfigurable(config, {
                checkpoint_ns: "",
                checkpoint_id: undefined,
            });
        }
        let checkpointConfig = config;
        if (config.configurable?.[CONFIG_KEY_CHECKPOINT_MAP] !== undefined &&
            config.configurable?.[CONFIG_KEY_CHECKPOINT_MAP]?.[config.configurable?.checkpoint_ns]) {
            checkpointConfig = utils_patchConfigurable(config, {
                checkpoint_id: config.configurable[CONFIG_KEY_CHECKPOINT_MAP][config.configurable?.checkpoint_ns],
            });
        }
        const checkpointNamespace = config.configurable?.checkpoint_ns?.split(constants_CHECKPOINT_NAMESPACE_SEPARATOR) ?? [];
        const saved = (await params.checkpointer?.getTuple(checkpointConfig)) ?? {
            config,
            checkpoint: emptyCheckpoint(),
            metadata: {
                source: "input",
                step: -2,
                writes: null,
                parents: {},
            },
            pendingWrites: [],
        };
        checkpointConfig = {
            ...config,
            ...saved.config,
            configurable: {
                checkpoint_ns: "",
                ...config.configurable,
                ...saved.config.configurable,
            },
        };
        const prevCheckpointConfig = saved.parentConfig;
        const checkpoint = copyCheckpoint(saved.checkpoint);
        const checkpointMetadata = { ...saved.metadata };
        const checkpointPendingWrites = saved.pendingWrites ?? [];
        const channels = emptyChannels(params.channelSpecs, checkpoint);
        const step = (checkpointMetadata.step ?? 0) + 1;
        const stop = step + (config.recursionLimit ?? DEFAULT_LOOP_LIMIT) + 1;
        const checkpointPreviousVersions = { ...checkpoint.channel_versions };
        const store = params.store
            ? new AsyncBatchedStore(params.store)
            : undefined;
        if (store) {
            // Start the store. This is a batch store, so it will run continuously
            store.start();
        }
        return new PregelLoop({
            input: params.input,
            config,
            checkpointer: params.checkpointer,
            checkpoint,
            checkpointMetadata,
            checkpointConfig,
            prevCheckpointConfig,
            checkpointNamespace,
            channels,
            managed: params.managed,
            isNested,
            manager: params.manager,
            skipDoneTasks,
            step,
            stop,
            checkpointPreviousVersions,
            checkpointPendingWrites,
            outputKeys: params.outputKeys ?? [],
            streamKeys: params.streamKeys ?? [],
            nodes: params.nodes,
            stream,
            store,
            interruptAfter: params.interruptAfter,
            interruptBefore: params.interruptBefore,
            debug: params.debug,
        });
    }
    /**
     * @internal
     */
    _incrementSubgraphCounter() {
        const { configurable } = this.config;
        const scratchpad = configurable?.[constants_CONFIG_KEY_SCRATCHPAD];
        // purposefully allowing zero to be falsy here so we don't append call count to parent ns
        if (scratchpad?.subgraph_counter) {
            this.config = utils_patchConfigurable(this.config, {
                [constants_CONFIG_KEY_CHECKPOINT_NS]: [
                    configurable[constants_CONFIG_KEY_CHECKPOINT_NS],
                    scratchpad.subgraph_counter.toString(),
                ].join(constants_CHECKPOINT_NAMESPACE_SEPARATOR),
            });
            scratchpad.subgraph_counter += 1;
        }
    }
    _checkpointerPutAfterPrevious(input) {
        this._checkpointerChainedPromise = this._checkpointerChainedPromise.then(() => {
            return this.checkpointer?.put(input.config, input.checkpoint, input.metadata, input.newVersions);
        });
        this.checkpointerPromises.push(this._checkpointerChainedPromise);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async updateManagedValues(key, values) {
        const mv = this.managed.get(key);
        if (mv && "update" in mv && typeof mv.update === "function") {
            await mv.update(values);
        }
    }
    /**
     * Put writes for a task, to be read by the next tick.
     * @param taskId
     * @param writes
     */
    putWrites(taskId, writes) {
        let writesCopy = writes;
        if (writesCopy.length === 0) {
            return;
        }
        // deduplicate writes to special channels, last write wins
        if (writesCopy.every(([key]) => key in WRITES_IDX_MAP)) {
            writesCopy = Array.from(new Map(writesCopy.map((w) => [w[0], w])).values());
        }
        // save writes
        for (const [c, v] of writesCopy) {
            const idx = this.checkpointPendingWrites.findIndex((w) => w[0] === taskId && w[1] === c);
            if (c in WRITES_IDX_MAP && idx !== -1) {
                this.checkpointPendingWrites[idx] = [taskId, c, v];
            }
            else {
                this.checkpointPendingWrites.push([taskId, c, v]);
            }
        }
        const putWritePromise = this.checkpointer?.putWrites({
            ...this.checkpointConfig,
            configurable: {
                ...this.checkpointConfig.configurable,
                checkpoint_ns: this.config.configurable?.checkpoint_ns ?? "",
                checkpoint_id: this.checkpoint.id,
            },
        }, writesCopy, taskId);
        if (putWritePromise !== undefined) {
            this.checkpointerPromises.push(putWritePromise);
        }
        if (this.tasks) {
            this._outputWrites(taskId, writesCopy);
        }
    }
    _outputWrites(taskId, writes, cached = false) {
        const task = this.tasks[taskId];
        if (task !== undefined) {
            if (task.config !== undefined &&
                (task.config.tags ?? []).includes(TAG_HIDDEN)) {
                return;
            }
            if (writes.length > 0 &&
                writes[0][0] !== constants_ERROR &&
                writes[0][0] !== constants_INTERRUPT) {
                this._emit(gatherIteratorSync(prefixGenerator(mapOutputUpdates(this.outputKeys, [[task, writes]], cached), "updates")));
            }
            if (!cached) {
                this._emit(gatherIteratorSync(prefixGenerator(mapDebugTaskResults(this.step, [[task, writes]], this.streamKeys), "debug")));
            }
        }
    }
    /**
     * Execute a single iteration of the Pregel loop.
     * Returns true if more iterations are needed.
     * @param params
     */
    async tick(params) {
        if (this.store && !this.store.isRunning) {
            this.store?.start();
        }
        const { inputKeys = [] } = params;
        if (this.status !== "pending") {
            throw new Error(`Cannot tick when status is no longer "pending". Current status: "${this.status}"`);
        }
        if (![INPUT_DONE, INPUT_RESUMING].includes(this.input)) {
            await this._first(inputKeys);
        }
        else if (Object.values(this.tasks).every((task) => task.writes.filter(([c]) => !(c in WRITES_IDX_MAP)).length > 0)) {
            const writes = Object.values(this.tasks).flatMap((t) => t.writes);
            // All tasks have finished
            const managedValueWrites = _applyWrites(this.checkpoint, this.channels, Object.values(this.tasks), this.checkpointerGetNextVersion);
            for (const [key, values] of Object.entries(managedValueWrites)) {
                await this.updateManagedValues(key, values);
            }
            // produce values output
            const valuesOutput = await gatherIterator(prefixGenerator(mapOutputValues(this.outputKeys, writes, this.channels), "values"));
            this._emit(valuesOutput);
            // clear pending writes
            this.checkpointPendingWrites = [];
            await this._putCheckpoint({
                source: "loop",
                writes: mapOutputUpdates(this.outputKeys, Object.values(this.tasks).map((task) => [task, task.writes])).next().value ?? null,
            });
            // after execution, check if we should interrupt
            if (shouldInterrupt(this.checkpoint, this.interruptAfter, Object.values(this.tasks))) {
                this.status = "interrupt_after";
                throw new errors_GraphInterrupt();
            }
        }
        else {
            return false;
        }
        if (this.step > this.stop) {
            this.status = "out_of_steps";
            return false;
        }
        const nextTasks = _prepareNextTasks(this.checkpoint, this.checkpointPendingWrites, this.nodes, this.channels, this.managed, this.config, true, {
            step: this.step,
            checkpointer: this.checkpointer,
            isResuming: this.input === INPUT_RESUMING,
            manager: this.manager,
            store: this.store,
            stream: this.stream,
        });
        this.tasks = nextTasks;
        // Produce debug output
        if (this.checkpointer) {
            this._emit(await gatherIterator(prefixGenerator(mapDebugCheckpoint(this.step - 1, // printing checkpoint for previous step
            this.checkpointConfig, this.channels, this.streamKeys, this.checkpointMetadata, Object.values(this.tasks), this.checkpointPendingWrites, this.prevCheckpointConfig), "debug")));
        }
        if (Object.values(this.tasks).length === 0) {
            this.status = "done";
            return false;
        }
        // if there are pending writes from a previous loop, apply them
        if (this.skipDoneTasks && this.checkpointPendingWrites.length > 0) {
            for (const [tid, k, v] of this.checkpointPendingWrites) {
                if (k === constants_ERROR || k === constants_INTERRUPT || k === constants_RESUME) {
                    continue;
                }
                const task = Object.values(this.tasks).find((t) => t.id === tid);
                if (task) {
                    task.writes.push([k, v]);
                }
            }
            for (const task of Object.values(this.tasks)) {
                if (task.writes.length > 0) {
                    this._outputWrites(task.id, task.writes, true);
                }
            }
        }
        // if all tasks have finished, re-tick
        if (Object.values(this.tasks).every((task) => task.writes.length > 0)) {
            return this.tick({ inputKeys });
        }
        // Before execution, check if we should interrupt
        if (shouldInterrupt(this.checkpoint, this.interruptBefore, Object.values(this.tasks))) {
            this.status = "interrupt_before";
            throw new errors_GraphInterrupt();
        }
        // Produce debug output
        const debugOutput = await gatherIterator(prefixGenerator(mapDebugTasks(this.step, Object.values(this.tasks)), "debug"));
        this._emit(debugOutput);
        return true;
    }
    async finishAndHandleError(error) {
        this._syncStateOnParentCommand(error);
        const suppress = this._suppressInterrupt(error);
        if (suppress || error === undefined) {
            this.output = readChannels(this.channels, this.outputKeys);
        }
        if (suppress) {
            // emit one last "values" event, with pending writes applied
            if (this.tasks !== undefined &&
                this.checkpointPendingWrites.length > 0 &&
                Object.values(this.tasks).some((task) => task.writes.length > 0)) {
                const managedValueWrites = _applyWrites(this.checkpoint, this.channels, Object.values(this.tasks), this.checkpointerGetNextVersion);
                for (const [key, values] of Object.entries(managedValueWrites)) {
                    await this.updateManagedValues(key, values);
                }
                this._emit(gatherIteratorSync(prefixGenerator(mapOutputValues(this.outputKeys, Object.values(this.tasks).flatMap((t) => t.writes), this.channels), "values")));
            }
            // Emit INTERRUPT event
            this._emit([
                [
                    "updates",
                    {
                        [constants_INTERRUPT]: error.interrupts,
                    },
                ],
            ]);
        }
        return suppress;
    }
    acceptPush(task, writeIdx, call) {
        if (this.interruptAfter?.length > 0 &&
            shouldInterrupt(this.checkpoint, this.interruptAfter, [task])) {
            this.toInterrupt.push(task);
            return;
        }
        const pushed = _prepareSingleTask([PUSH, task.path ?? [], writeIdx, task.id, call], this.checkpoint, this.checkpointPendingWrites, this.nodes, this.channels, this.managed, this.config, true, {
            step: this.step,
            checkpointer: this.checkpointer,
            manager: this.manager,
            store: this.store,
            stream: this.stream,
        });
        if (pushed) {
            if (this.interruptBefore?.length > 0 &&
                shouldInterrupt(this.checkpoint, this.interruptBefore, [pushed])) {
                this.toInterrupt.push(pushed);
                return;
            }
            this._emit(gatherIteratorSync(prefixGenerator(mapDebugTasks(this.step, [pushed]), "debug")));
            if (this.debug) {
                printStepTasks(this.step, [pushed]);
            }
            this.tasks[pushed.id] = pushed;
            if (this.skipDoneTasks) {
                this._matchWrites({ [pushed.id]: pushed });
            }
            return pushed;
        }
    }
    _suppressInterrupt(e) {
        return isGraphInterrupt(e) && !this.isNested;
    }
    async _first(inputKeys) {
        /*
         * Resuming from previous checkpoint requires
         * - finding a previous checkpoint
         * - receiving null input (outer graph) or RESUMING flag (subgraph)
         */
        const { configurable } = this.config;
        const isResuming = Object.keys(this.checkpoint.channel_versions).length !== 0 &&
            (this.config.configurable?.[CONFIG_KEY_RESUMING] !== undefined ||
                this.input === null ||
                isCommand(this.input));
        // take resume value from parent
        const scratchpad = configurable?.[constants_CONFIG_KEY_SCRATCHPAD];
        if (scratchpad && scratchpad.nullResume !== undefined) {
            this.putWrites(NULL_TASK_ID, [[constants_RESUME, scratchpad.nullResume]]);
        }
        if (isCommand(this.input)) {
            if (this.input.resume != null && this.checkpointer == null) {
                throw new Error("Cannot use Command(resume=...) without checkpointer");
            }
            const writes = {};
            // group writes by task id
            for (const [tid, key, value] of mapCommand(this.input, this.checkpointPendingWrites)) {
                if (writes[tid] === undefined) {
                    writes[tid] = [];
                }
                writes[tid].push([key, value]);
            }
            if (Object.keys(writes).length === 0) {
                throw new EmptyInputError("Received empty Command input");
            }
            // save writes
            for (const [tid, ws] of Object.entries(writes)) {
                this.putWrites(tid, ws);
            }
        }
        // apply null writes
        const nullWrites = (this.checkpointPendingWrites ?? [])
            .filter((w) => w[0] === NULL_TASK_ID)
            .map((w) => w.slice(1));
        if (nullWrites.length > 0) {
            _applyWrites(this.checkpoint, this.channels, [
                {
                    name: INPUT,
                    writes: nullWrites,
                    triggers: [],
                },
            ], this.checkpointerGetNextVersion);
        }
        if (isResuming) {
            for (const channelName of Object.keys(this.channels)) {
                if (this.checkpoint.channel_versions[channelName] !== undefined) {
                    const version = this.checkpoint.channel_versions[channelName];
                    this.checkpoint.versions_seen[constants_INTERRUPT] = {
                        ...this.checkpoint.versions_seen[constants_INTERRUPT],
                        [channelName]: version,
                    };
                }
            }
            // produce values output
            const valuesOutput = await gatherIterator(prefixGenerator(mapOutputValues(this.outputKeys, true, this.channels), "values"));
            this._emit(valuesOutput);
        }
        else {
            // map inputs to channel updates
            const inputWrites = await gatherIterator(mapInput(inputKeys, this.input));
            if (inputWrites.length === 0) {
                throw new EmptyInputError(`Received no input writes for ${JSON.stringify(inputKeys, null, 2)}`);
            }
            const discardTasks = _prepareNextTasks(this.checkpoint, this.checkpointPendingWrites, this.nodes, this.channels, this.managed, this.config, true, { step: this.step });
            _applyWrites(this.checkpoint, this.channels, Object.values(discardTasks).concat([
                {
                    name: INPUT,
                    writes: inputWrites,
                    triggers: [],
                },
            ]), this.checkpointerGetNextVersion);
            // save input checkpoint
            await this._putCheckpoint({
                source: "input",
                writes: Object.fromEntries(inputWrites),
            });
        }
        // done with input
        this.input = this.input === INPUT_RESUMING ? INPUT_RESUMING : INPUT_DONE;
        if (!this.isNested) {
            this.config = utils_patchConfigurable(this.config, {
                [CONFIG_KEY_RESUMING]: this.input === INPUT_RESUMING,
            });
        }
    }
    _emit(values) {
        for (const chunk of values) {
            if (this.stream.modes.has(chunk[0])) {
                this.stream.push([this.checkpointNamespace, ...chunk]);
            }
        }
    }
    async _putCheckpoint(inputMetadata) {
        // Assign step
        const metadata = {
            ...inputMetadata,
            step: this.step,
            parents: this.config.configurable?.[CONFIG_KEY_CHECKPOINT_MAP] ?? {},
        };
        // Bail if no checkpointer
        if (this.checkpointer !== undefined) {
            // store the previous checkpoint config for debug events
            this.prevCheckpointConfig = this.checkpointConfig?.configurable
                ?.checkpoint_id
                ? this.checkpointConfig
                : undefined;
            // create new checkpoint
            this.checkpointMetadata = metadata;
            // child graphs keep at most one checkpoint per parent checkpoint
            // this is achieved by writing child checkpoints as progress is made
            // (so that error recovery / resuming from interrupt don't lose work)
            // but doing so always with an id equal to that of the parent checkpoint
            this.checkpoint = createCheckpoint(this.checkpoint, this.channels, this.step);
            this.checkpointConfig = {
                ...this.checkpointConfig,
                configurable: {
                    ...this.checkpointConfig.configurable,
                    checkpoint_ns: this.config.configurable?.checkpoint_ns ?? "",
                },
            };
            const channelVersions = { ...this.checkpoint.channel_versions };
            const newVersions = getNewChannelVersions(this.checkpointPreviousVersions, channelVersions);
            this.checkpointPreviousVersions = channelVersions;
            // save it, without blocking
            // if there's a previous checkpoint save in progress, wait for it
            // ensuring checkpointers receive checkpoints in order
            void this._checkpointerPutAfterPrevious({
                config: { ...this.checkpointConfig },
                checkpoint: copyCheckpoint(this.checkpoint),
                metadata: { ...this.checkpointMetadata },
                newVersions,
            });
            this.checkpointConfig = {
                ...this.checkpointConfig,
                configurable: {
                    ...this.checkpointConfig.configurable,
                    checkpoint_id: this.checkpoint.id,
                },
            };
        }
        this.step += 1;
    }
    _matchWrites(tasks) {
        for (const [tid, k, v] of this.checkpointPendingWrites) {
            if (k === constants_ERROR || k === constants_INTERRUPT || k === constants_RESUME) {
                continue;
            }
            const task = Object.values(tasks).find((t) => t.id === tid);
            if (task) {
                task.writes.push([k, v]);
            }
        }
        for (const task of Object.values(tasks)) {
            if (task.writes.length > 0) {
                this._outputWrites(task.id, task.writes, true);
            }
        }
    }
    _syncStateOnParentCommand(error) {
        if (isParentCommand(error)) {
            const state = Object.entries(readChannels(this.channels, typeof this.outputKeys === "string"
                ? [this.outputKeys]
                : this.outputKeys));
            const update = [...state, ...error.command._updateAsTuples()];
            // eslint-disable-next-line no-param-reassign
            error.command.update = update;
        }
    }
}
//# sourceMappingURL=loop.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/core/callbacks/base.js

;// CONCATENATED MODULE: ./node_modules/@langchain/core/messages.js

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/messages.js



function isChatGenerationChunk(x) {
    return (0,dist_messages.isBaseMessage)(x?.message);
}
/**
 * A callback handler that implements stream_mode=messages.
 * Collects messages from (1) chat model stream events and (2) node outputs.
 */
// TODO: Make this import and explicitly implement the
// CallbackHandlerPrefersStreaming interface once we drop support for core 0.2
class StreamMessagesHandler extends base.BaseCallbackHandler {
    constructor(streamFn) {
        super();
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "StreamMessagesHandler"
        });
        Object.defineProperty(this, "streamFn", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "metadatas", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "seen", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "emittedChatModelRunIds", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "stableMessageIdMap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "lc_prefer_streaming", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        this.streamFn = streamFn;
    }
    _emit(meta, message, runId, dedupe = false) {
        if (dedupe &&
            message.id !== undefined &&
            this.seen[message.id] !== undefined) {
            return;
        }
        let messageId = message.id;
        if ((0,dist_messages.isToolMessage)(message)) {
            // Distinguish tool messages by tool call ID.
            messageId ??= `run-${runId}-tool-${message.tool_call_id}`;
        }
        else {
            // For instance in ChatAnthropic, the first chunk has an message ID
            // but the subsequent chunks do not. To avoid clients seeing two messages
            // we rename the message ID if it's being auto-set to `run-${runId}`
            // (see https://github.com/langchain-ai/langchainjs/pull/6646).
            if (messageId == null || messageId === `run-${runId}`) {
                messageId =
                    this.stableMessageIdMap[runId] ?? messageId ?? `run-${runId}`;
            }
            this.stableMessageIdMap[runId] ??= messageId;
        }
        if (messageId !== message.id) {
            // eslint-disable-next-line no-param-reassign
            message.id = messageId;
            // eslint-disable-next-line no-param-reassign
            message.lc_kwargs.id = messageId;
        }
        if (message.id != null)
            this.seen[message.id] = message;
        this.streamFn([meta[0], "messages", [message, meta[1]]]);
    }
    handleChatModelStart(_llm, _messages, runId, _parentRunId, _extraParams, tags, metadata, name) {
        if (metadata &&
            // Include legacy LangGraph SDK tag
            (!tags || (!tags.includes(TAG_NOSTREAM) && !tags.includes("nostream")))) {
            this.metadatas[runId] = [
                metadata.langgraph_checkpoint_ns.split("|"),
                { tags, name, ...metadata },
            ];
        }
    }
    handleLLMNewToken(token, _idx, runId, _parentRunId, _tags, fields) {
        const chunk = fields?.chunk;
        this.emittedChatModelRunIds[runId] = true;
        if (this.metadatas[runId] !== undefined) {
            if (isChatGenerationChunk(chunk)) {
                this._emit(this.metadatas[runId], chunk.message, runId);
            }
            else {
                this._emit(this.metadatas[runId], new dist_messages.AIMessageChunk({ content: token }), runId);
            }
        }
    }
    handleLLMEnd(output, runId) {
        // In JS, non-streaming runs do not call handleLLMNewToken at the model level
        if (!this.emittedChatModelRunIds[runId]) {
            const chatGeneration = output.generations?.[0]?.[0];
            if ((0,dist_messages.isBaseMessage)(chatGeneration?.message)) {
                this._emit(this.metadatas[runId], chatGeneration?.message, runId, true);
            }
            delete this.emittedChatModelRunIds[runId];
        }
        delete this.metadatas[runId];
        delete this.stableMessageIdMap[runId];
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleLLMError(_err, runId) {
        delete this.metadatas[runId];
    }
    handleChainStart(_chain, _inputs, runId, _parentRunId, tags, metadata, _runType, name) {
        if (metadata !== undefined &&
            name === metadata.langgraph_node &&
            (tags === undefined || !tags.includes(TAG_HIDDEN))) {
            this.metadatas[runId] = [
                metadata.langgraph_checkpoint_ns.split("|"),
                { tags, name, ...metadata },
            ];
        }
    }
    handleChainEnd(outputs, runId) {
        const metadata = this.metadatas[runId];
        delete this.metadatas[runId];
        if (metadata !== undefined) {
            if ((0,dist_messages.isBaseMessage)(outputs)) {
                this._emit(metadata, outputs, runId, true);
            }
            else if (Array.isArray(outputs)) {
                for (const value of outputs) {
                    if ((0,dist_messages.isBaseMessage)(value)) {
                        this._emit(metadata, value, runId, true);
                    }
                }
            }
            else if (outputs != null && typeof outputs === "object") {
                for (const value of Object.values(outputs)) {
                    if ((0,dist_messages.isBaseMessage)(value)) {
                        this._emit(metadata, value, runId, true);
                    }
                    else if (Array.isArray(value)) {
                        for (const item of value) {
                            if ((0,dist_messages.isBaseMessage)(item)) {
                                this._emit(metadata, item, runId, true);
                            }
                        }
                    }
                }
            }
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleChainError(_err, runId) {
        delete this.metadatas[runId];
    }
}
//# sourceMappingURL=messages.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/retry.js




const DEFAULT_INITIAL_INTERVAL = 500;
const DEFAULT_BACKOFF_FACTOR = 2;
const DEFAULT_MAX_INTERVAL = 128000;
const DEFAULT_MAX_RETRIES = 3;
const DEFAULT_STATUS_NO_RETRY = [
    400,
    401,
    402,
    403,
    404,
    405,
    406,
    407,
    409, // Conflict
];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DEFAULT_RETRY_ON_HANDLER = (error) => {
    if (error.message.startsWith("Cancel") ||
        error.message.startsWith("AbortError") ||
        error.name === "AbortError") {
        return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (error?.code === "ECONNABORTED") {
        return false;
    }
    const status = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error?.response?.status ?? error?.status;
    if (status && DEFAULT_STATUS_NO_RETRY.includes(+status)) {
        return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (error?.error?.code === "insufficient_quota") {
        return false;
    }
    return true;
};
async function _runWithRetry(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
pregelTask, retryPolicy, configurable, signal) {
    const resolvedRetryPolicy = pregelTask.retry_policy ?? retryPolicy;
    let interval = resolvedRetryPolicy !== undefined
        ? resolvedRetryPolicy.initialInterval ?? DEFAULT_INITIAL_INTERVAL
        : 0;
    let attempts = 0;
    let error;
    let result;
    let { config } = pregelTask;
    if (configurable) {
        config = utils_patchConfigurable(config, configurable);
    }
    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (signal?.aborted) {
            // no need to throw here - we'll throw from the runner, instead.
            // there's just no point in retrying if the user has requested an abort.
            break;
        }
        // Clear any writes from previous attempts
        pregelTask.writes.splice(0, pregelTask.writes.length);
        error = undefined;
        try {
            result = await pregelTask.proc.invoke(pregelTask.input, config);
            break;
        }
        catch (e) {
            error = e;
            error.pregelTaskId = pregelTask.id;
            if (isParentCommand(error)) {
                const ns = config?.configurable?.checkpoint_ns;
                const cmd = error.command;
                if (cmd.graph === ns) {
                    // this command is for the current graph, handle it
                    for (const writer of pregelTask.writers) {
                        await writer.invoke(cmd, config);
                    }
                    error = undefined;
                    break;
                }
                else if (cmd.graph === Command.PARENT) {
                    // this command is for the parent graph, assign it to the parent
                    const parentNs = getParentCheckpointNamespace(ns);
                    error.command = new Command({
                        ...error.command,
                        graph: parentNs,
                    });
                }
            }
            if (isGraphBubbleUp(error)) {
                break;
            }
            if (resolvedRetryPolicy === undefined) {
                break;
            }
            attempts += 1;
            // check if we should give up
            if (attempts >= (resolvedRetryPolicy.maxAttempts ?? DEFAULT_MAX_RETRIES)) {
                break;
            }
            const retryOn = resolvedRetryPolicy.retryOn ?? DEFAULT_RETRY_ON_HANDLER;
            if (!retryOn(error)) {
                break;
            }
            interval = Math.min(resolvedRetryPolicy.maxInterval ?? DEFAULT_MAX_INTERVAL, interval * (resolvedRetryPolicy.backoffFactor ?? DEFAULT_BACKOFF_FACTOR));
            const intervalWithJitter = resolvedRetryPolicy.jitter
                ? Math.floor(interval + Math.random() * 1000)
                : interval;
            // sleep before retrying
            // eslint-disable-next-line no-promise-executor-return
            await new Promise((resolve) => setTimeout(resolve, intervalWithJitter));
            // log the retry
            const errorName = error.name ??
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                error.constructor.unminifiable_name ??
                error.constructor.name;
            console.log(`Retrying task "${String(pregelTask.name)}" after ${interval.toFixed(2)}ms (attempt ${attempts}) after ${errorName}: ${error}`);
            // signal subgraphs to resume (if available)
            config = utils_patchConfigurable(config, { [CONFIG_KEY_RESUMING]: true });
        }
    }
    return {
        task: pregelTask,
        result,
        error: error,
    };
}
//# sourceMappingURL=retry.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/runner.js




/**
 * Responsible for handling task execution on each tick of the {@link PregelLoop}.
 */
class PregelRunner {
    /**
     * Construct a new PregelRunner, which executes tasks from the provided PregelLoop.
     * @param loop - The PregelLoop that produces tasks for this runner to execute.
     */
    constructor({ loop, nodeFinished, }) {
        Object.defineProperty(this, "nodeFinished", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "loop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.loop = loop;
        this.nodeFinished = nodeFinished;
    }
    /**
     * Execute tasks from the current step of the PregelLoop.
     *
     * Note: this method does NOT call {@link PregelLoop}#tick. That must be handled externally.
     * @param options - Options for the execution.
     */
    async tick(options = {}) {
        const { timeout, signal, retryPolicy, onStepWrite } = options;
        let graphBubbleUp;
        // Start task execution
        const pendingTasks = Object.values(this.loop.tasks).filter((t) => t.writes.length === 0);
        const taskStream = this._executeTasksWithRetry(pendingTasks, {
            stepTimeout: timeout,
            signal,
            retryPolicy,
        });
        for await (const { task, error } of taskStream) {
            this._commit(task, error);
            if (isGraphInterrupt(error)) {
                graphBubbleUp = error;
            }
            else if (isGraphBubbleUp(error) && !isGraphInterrupt(graphBubbleUp)) {
                graphBubbleUp = error;
            }
        }
        onStepWrite?.(this.loop.step, Object.values(this.loop.tasks)
            .map((task) => task.writes)
            .flat());
        if (isGraphInterrupt(graphBubbleUp)) {
            throw graphBubbleUp;
        }
        if (isGraphBubbleUp(graphBubbleUp) && this.loop.isNested) {
            throw graphBubbleUp;
        }
    }
    /**
     * Concurrently executes tasks with the requested retry policy, yielding a {@link SettledPregelTask} for each task as it completes.
     * @param tasks - The tasks to execute.
     * @param options - Options for the execution.
     */
    async *_executeTasksWithRetry(tasks, options) {
        const { stepTimeout, retryPolicy } = options ?? {};
        let signal = options?.signal;
        const promiseAddedSymbol = Symbol.for("promiseAdded");
        let addedPromiseSignal;
        let addedPromiseWait;
        function waitHandler(resolve) {
            addedPromiseSignal = () => {
                addedPromiseWait = new Promise(waitHandler);
                resolve(promiseAddedSymbol);
            };
        }
        addedPromiseWait = new Promise(waitHandler);
        const executingTasksMap = {};
        const writer = (task, writes, { calls } = {}) => {
            if (writes.every(([channel]) => channel !== PUSH)) {
                return task.config?.configurable?.[constants_CONFIG_KEY_SEND]?.(writes) ?? [];
            }
            // Schedule PUSH tasks, collect promises
            const scratchpad = task.config?.configurable?.[constants_CONFIG_KEY_SCRATCHPAD];
            const rtn = {};
            for (const [idx, write] of writes.entries()) {
                const [channel] = write;
                if (channel !== PUSH) {
                    continue;
                }
                const wcall = calls?.[idx];
                const cnt = scratchpad.callCounter;
                scratchpad.callCounter += 1;
                if (wcall == null) {
                    throw new Error("BUG: No call found");
                }
                const nextTask = this.loop.acceptPush(task, cnt, wcall);
                if (!nextTask) {
                    continue;
                }
                // Check if this task is already running
                const existingPromise = executingTasksMap[nextTask.id];
                if (existingPromise !== undefined) {
                    // If the parent task was retried, the next task might already be running
                    rtn[idx] = existingPromise;
                }
                else if (nextTask.writes.length > 0) {
                    // If it already ran, return the result
                    const returns = nextTask.writes.filter(([c]) => c === RETURN);
                    const errors = nextTask.writes.filter(([c]) => c === constants_ERROR);
                    if (returns.length > 0) {
                        // Task completed successfully
                        if (returns.length === 1) {
                            rtn[idx] = Promise.resolve(returns[0][1]);
                        }
                        else {
                            // should be unreachable
                            throw new Error(`BUG: multiple returns found for task ${nextTask.name}__${nextTask.id}`);
                        }
                    }
                    else if (errors.length > 0) {
                        if (errors.length === 1) {
                            const errorValue = errors[0][1];
                            // Task failed
                            const error = 
                            // eslint-disable-next-line no-instanceof/no-instanceof
                            errorValue instanceof Error
                                ? errorValue
                                : new Error(String(errorValue));
                            rtn[idx] = Promise.reject(error);
                        }
                        else {
                            // the only way this should happen is if the task executes multiple times and writes aren't cleared
                            throw new Error(`BUG: multiple errors found for task ${nextTask.name}__${nextTask.id}`);
                        }
                    }
                }
                else {
                    // Schedule the next task with retry
                    const prom = _runWithRetry(nextTask, retryPolicy, {
                        [constants_CONFIG_KEY_SEND]: writer.bind(this, nextTask),
                        // eslint-disable-next-line @typescript-eslint/no-use-before-define
                        [constants_CONFIG_KEY_CALL]: call.bind(this, nextTask),
                    });
                    executingTasksMap[nextTask.id] = prom;
                    addedPromiseSignal();
                    rtn[idx] = prom.then(({ result, error }) => {
                        if (error) {
                            return Promise.reject(error);
                        }
                        return result;
                    });
                }
            }
            return Object.values(rtn);
        };
        const call = (task, func, name, input, options = {}) => {
            const result = writer(task, [[PUSH, null]], {
                calls: [
                    new Call({
                        func,
                        name,
                        input,
                        retry: options.retry,
                        callbacks: options.callbacks,
                    }),
                ],
            });
            // eslint-disable-next-line no-instanceof/no-instanceof
            if (result !== undefined) {
                if (result.length === 1) {
                    return result[0];
                }
                return Promise.all(result);
            }
            return Promise.resolve();
        };
        if (stepTimeout && signal) {
            if ("any" in AbortSignal) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                signal = AbortSignal.any([
                    signal,
                    AbortSignal.timeout(stepTimeout),
                ]);
            }
        }
        else if (stepTimeout) {
            signal = AbortSignal.timeout(stepTimeout);
        }
        if (signal?.aborted) {
            // note: don't use throwIfAborted here because it throws a DOMException,
            // which isn't consistent with how we throw on abort below.
            throw new Error("Abort");
        }
        // Start tasks
        Object.assign(executingTasksMap, Object.fromEntries(tasks.map((pregelTask) => {
            return [
                pregelTask.id,
                _runWithRetry(pregelTask, retryPolicy, {
                    [constants_CONFIG_KEY_SEND]: writer?.bind(this, pregelTask),
                    [constants_CONFIG_KEY_CALL]: call?.bind(this, pregelTask),
                }).catch((error) => {
                    return { task: pregelTask, error };
                }),
            ];
        })));
        let listener;
        const signalPromise = new Promise((_resolve, reject) => {
            listener = () => reject(new Error("Abort"));
            signal?.addEventListener("abort", listener);
        }).finally(() => signal?.removeEventListener("abort", listener));
        while (Object.keys(executingTasksMap).length > 0) {
            const settledTask = await Promise.race([
                ...Object.values(executingTasksMap),
                signalPromise,
                addedPromiseWait,
            ]);
            if (settledTask === promiseAddedSymbol) {
                continue;
            }
            yield settledTask;
            delete executingTasksMap[settledTask.task.id];
        }
    }
    /**
     * Determines what writes to apply based on whether the task completed successfully, and what type of error occurred.
     *
     * Throws an error if the error is a {@link GraphBubbleUp} error and {@link PregelLoop}#isNested is true.
     *
     * @param task - The task to commit.
     * @param error - The error that occurred, if any.
     */
    _commit(task, error) {
        if (error !== undefined) {
            if (isGraphInterrupt(error)) {
                if (error.interrupts.length) {
                    const interrupts = error.interrupts.map((interrupt) => [constants_INTERRUPT, interrupt]);
                    const resumes = task.writes.filter((w) => w[0] === constants_RESUME);
                    if (resumes.length) {
                        interrupts.push(...resumes);
                    }
                    this.loop.putWrites(task.id, interrupts);
                }
            }
            else if (isGraphBubbleUp(error) && task.writes.length) {
                this.loop.putWrites(task.id, task.writes);
            }
            else {
                this.loop.putWrites(task.id, [
                    [constants_ERROR, { message: error.message, name: error.name }],
                ]);
                // TODO: is throwing here safe? what about commits from other concurrent tasks?
                throw error;
            }
        }
        else {
            if (this.nodeFinished &&
                (task.config?.tags == null || !task.config.tags.includes(TAG_HIDDEN))) {
                this.nodeFinished(String(task.name));
            }
            if (task.writes.length === 0) {
                // Add no writes marker
                task.writes.push([NO_WRITES, null]);
            }
            // Save task writes to checkpointer
            this.loop.putWrites(task.id, task.writes);
        }
    }
}
//# sourceMappingURL=runner.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/pregel/index.js
/* eslint-disable no-param-reassign */




















function isString(value) {
    return typeof value === "string";
}
/**
 * Utility class for working with channels in the Pregel system.
 * Provides static methods for subscribing to channels and writing to them.
 *
 * Channels are the communication pathways between nodes in a Pregel graph.
 * They enable message passing and state updates between different parts of the graph.
 */
class Channel {
    static subscribeTo(channels, options) {
        const { key, tags } = {
            key: undefined,
            tags: undefined,
            ...(options ?? {}),
        };
        if (Array.isArray(channels) && key !== undefined) {
            throw new Error("Can't specify a key when subscribing to multiple channels");
        }
        let channelMappingOrArray;
        if (isString(channels)) {
            if (key) {
                channelMappingOrArray = { [key]: channels };
            }
            else {
                channelMappingOrArray = [channels];
            }
        }
        else {
            channelMappingOrArray = Object.fromEntries(channels.map((chan) => [chan, chan]));
        }
        const triggers = Array.isArray(channels) ? channels : [channels];
        return new PregelNode({
            channels: channelMappingOrArray,
            triggers,
            tags,
        });
    }
    /**
     * Creates a ChannelWrite that specifies how to write values to channels.
     * This is used to define how nodes send output to channels.
     *
     * @example
     * ```typescript
     * // Write to multiple channels
     * const write = Channel.writeTo(["output", "state"]);
     *
     * // Write with specific values
     * const write = Channel.writeTo(["output"], {
     *   state: "completed",
     *   result: calculateResult()
     * });
     *
     * // Write with a transformation function
     * const write = Channel.writeTo(["output"], {
     *   result: (x) => processResult(x)
     * });
     * ```
     *
     * @param channels - Array of channel names to write to
     * @param writes - Optional map of channel names to values or transformations
     * @returns A ChannelWrite object that can be used to write to the specified channels
     */
    static writeTo(channels, writes) {
        const channelWriteEntries = [];
        for (const channel of channels) {
            channelWriteEntries.push({
                channel,
                value: PASSTHROUGH,
                skipNone: false,
            });
        }
        for (const [key, value] of Object.entries(writes ?? {})) {
            if (runnables_base/* Runnable */.YN.isRunnable(value) || typeof value === "function") {
                channelWriteEntries.push({
                    channel: key,
                    value: PASSTHROUGH,
                    skipNone: true,
                    mapper: (0,runnables_base/* _coerceToRunnable */.Bp)(value),
                });
            }
            else {
                channelWriteEntries.push({
                    channel: key,
                    value,
                    skipNone: false,
                });
            }
        }
        return new ChannelWrite(channelWriteEntries);
    }
}
/**
 * The Pregel class is the core runtime engine of LangGraph, implementing a message-passing graph computation model
 * inspired by [Google's Pregel system](https://research.google/pubs/pregel-a-system-for-large-scale-graph-processing/).
 * It provides the foundation for building reliable, controllable agent workflows that can evolve state over time.
 *
 * Key features:
 * - Message passing between nodes in discrete "supersteps"
 * - Built-in persistence layer through checkpointers
 * - First-class streaming support for values, updates, and events
 * - Human-in-the-loop capabilities via interrupts
 * - Support for parallel node execution within supersteps
 *
 * The Pregel class is not intended to be instantiated directly by consumers. Instead, use the following higher-level APIs:
 * - {@link StateGraph}: The main graph class for building agent workflows
 *   - Compiling a {@link StateGraph} will return a {@link CompiledGraph} instance, which extends `Pregel`
 * - Functional API: A declarative approach using tasks and entrypoints
 *   - A `Pregel` instance is returned by the {@link entrypoint} function
 *
 * @example
 * ```typescript
 * // Using StateGraph API
 * const graph = new StateGraph(annotation)
 *   .addNode("nodeA", myNodeFunction)
 *   .addEdge("nodeA", "nodeB")
 *   .compile();
 *
 * // The compiled graph is a Pregel instance
 * const result = await graph.invoke(input);
 * ```
 *
 * @example
 * ```typescript
 * // Using Functional API
 * import { task, entrypoint } from "@langchain/langgraph";
 * import { MemorySaver } from "@langchain/langgraph-checkpoint";
 *
 * // Define tasks that can be composed
 * const addOne = task("add", async (x: number) => x + 1);
 *
 * // Create a workflow using the entrypoint function
 * const workflow = entrypoint({
 *   name: "workflow",
 *   checkpointer: new MemorySaver()
 * }, async (numbers: number[]) => {
 *   // Tasks can be run in parallel
 *   const results = await Promise.all(numbers.map(n => addOne(n)));
 *   return results;
 * });
 *
 * // The workflow is a Pregel instance
 * const result = await workflow.invoke([1, 2, 3]); // Returns [2, 3, 4]
 * ```
 *
 * @typeParam Nodes - Mapping of node names to their {@link PregelNode} implementations
 * @typeParam Channels - Mapping of channel names to their {@link BaseChannel} or {@link ManagedValueSpec} implementations
 * @typeParam ConfigurableFieldType - Type of configurable fields that can be passed to the graph
 * @typeParam InputType - Type of input values accepted by the graph
 * @typeParam OutputType - Type of output values produced by the graph
 */
class Pregel extends runnables_base/* Runnable */.YN {
    /**
     * Name of the class when serialized
     * @internal
     */
    static lc_name() {
        return "LangGraph";
    }
    /**
     * Constructor for Pregel - meant for internal use only.
     *
     * @internal
     */
    constructor(fields) {
        super(fields);
        /** @internal LangChain namespace for serialization necessary because Pregel extends Runnable */
        Object.defineProperty(this, "lc_namespace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["langgraph", "pregel"]
        });
        /** @internal Flag indicating this is a Pregel instance - necessary for serialization */
        Object.defineProperty(this, "lg_is_pregel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        /** The nodes in the graph, mapping node names to their PregelNode instances */
        Object.defineProperty(this, "nodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The channels in the graph, mapping channel names to their BaseChannel or ManagedValueSpec instances */
        Object.defineProperty(this, "channels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The input channels for the graph. These channels receive the initial input when the graph is invoked.
         * Can be a single channel key or an array of channel keys.
         */
        Object.defineProperty(this, "inputChannels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * The output channels for the graph. These channels contain the final output when the graph completes.
         * Can be a single channel key or an array of channel keys.
         */
        Object.defineProperty(this, "outputChannels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to automatically validate the graph structure when it is compiled. Defaults to true. */
        Object.defineProperty(this, "autoValidate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        /**
         * The streaming modes enabled for this graph. Defaults to ["values"].
         * Supported modes:
         * - "values": Streams the full state after each step
         * - "updates": Streams state updates after each step
         * - "messages": Streams messages from within nodes
         * - "custom": Streams custom events from within nodes
         * - "debug": Streams events related to the execution of the graph - useful for tracing & debugging graph execution
         */
        Object.defineProperty(this, "streamMode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ["values"]
        });
        /**
         * Optional channels to stream. If not specified, all channels will be streamed.
         * Can be a single channel key or an array of channel keys.
         */
        Object.defineProperty(this, "streamChannels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Optional array of node names or "all" to interrupt after executing these nodes.
         * Used for implementing human-in-the-loop workflows.
         */
        Object.defineProperty(this, "interruptAfter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Optional array of node names or "all" to interrupt before executing these nodes.
         * Used for implementing human-in-the-loop workflows.
         */
        Object.defineProperty(this, "interruptBefore", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Optional timeout in milliseconds for the execution of each superstep */
        Object.defineProperty(this, "stepTimeout", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Whether to enable debug logging. Defaults to false. */
        Object.defineProperty(this, "debug", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        /**
         * Optional checkpointer for persisting graph state.
         * When provided, saves a checkpoint of the graph state at every superstep.
         * When false or undefined, checkpointing is disabled, and the graph will not be able to save or restore state.
         */
        Object.defineProperty(this, "checkpointer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** Optional retry policy for handling failures in node execution */
        Object.defineProperty(this, "retryPolicy", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** The default configuration for graph execution, can be overridden on a per-invocation basis */
        Object.defineProperty(this, "config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Optional long-term memory store for the graph, allows for persistance & retrieval of data across threads
         */
        Object.defineProperty(this, "store", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        let { streamMode } = fields;
        if (streamMode != null && !Array.isArray(streamMode)) {
            streamMode = [streamMode];
        }
        this.nodes = fields.nodes;
        this.channels = fields.channels;
        this.autoValidate = fields.autoValidate ?? this.autoValidate;
        this.streamMode = streamMode ?? this.streamMode;
        this.inputChannels = fields.inputChannels;
        this.outputChannels = fields.outputChannels;
        this.streamChannels = fields.streamChannels ?? this.streamChannels;
        this.interruptAfter = fields.interruptAfter;
        this.interruptBefore = fields.interruptBefore;
        this.stepTimeout = fields.stepTimeout ?? this.stepTimeout;
        this.debug = fields.debug ?? this.debug;
        this.checkpointer = fields.checkpointer;
        this.retryPolicy = fields.retryPolicy;
        this.config = fields.config;
        this.store = fields.store;
        this.name = fields.name;
        if (this.autoValidate) {
            this.validate();
        }
    }
    /**
     * Creates a new instance of the Pregel graph with updated configuration.
     * This method follows the immutable pattern - instead of modifying the current instance,
     * it returns a new instance with the merged configuration.
     *
     * @example
     * ```typescript
     * // Create a new instance with debug enabled
     * const debugGraph = graph.withConfig({ debug: true });
     *
     * // Create a new instance with a specific thread ID
     * const threadGraph = graph.withConfig({
     *   configurable: { thread_id: "123" }
     * });
     * ```
     *
     * @param config - The configuration to merge with the current configuration
     * @returns A new Pregel instance with the merged configuration
     */
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Remove ignore when we remove support for 0.2 versions of core
    withConfig(config) {
        const mergedConfig = (0,runnables_config/* mergeConfigs */.SV)(this.config, config);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new this.constructor({ ...this, config: mergedConfig });
    }
    /**
     * Validates the graph structure to ensure it is well-formed.
     * Checks for:
     * - No orphaned nodes
     * - Valid input/output channel configurations
     * - Valid interrupt configurations
     *
     * @returns this - The Pregel instance for method chaining
     * @throws {GraphValidationError} If the graph structure is invalid
     */
    validate() {
        validateGraph({
            nodes: this.nodes,
            channels: this.channels,
            outputChannels: this.outputChannels,
            inputChannels: this.inputChannels,
            streamChannels: this.streamChannels,
            interruptAfterNodes: this.interruptAfter,
            interruptBeforeNodes: this.interruptBefore,
        });
        return this;
    }
    /**
     * Gets a list of all channels that should be streamed.
     * If streamChannels is specified, returns those channels.
     * Otherwise, returns all channels in the graph.
     *
     * @returns Array of channel keys to stream
     */
    get streamChannelsList() {
        if (Array.isArray(this.streamChannels)) {
            return this.streamChannels;
        }
        else if (this.streamChannels) {
            return [this.streamChannels];
        }
        else {
            return Object.keys(this.channels);
        }
    }
    /**
     * Gets the channels to stream in their original format.
     * If streamChannels is specified, returns it as-is (either single key or array).
     * Otherwise, returns all channels in the graph as an array.
     *
     * @returns Channel keys to stream, either as a single key or array
     */
    get streamChannelsAsIs() {
        if (this.streamChannels) {
            return this.streamChannels;
        }
        else {
            return Object.keys(this.channels);
        }
    }
    /**
     * Gets a drawable representation of the graph structure.
     * This is an async version of getGraph() and is the preferred method to use.
     *
     * @param config - Configuration for generating the graph visualization
     * @returns A representation of the graph that can be visualized
     */
    async getGraphAsync(config) {
        return this.getGraph(config);
    }
    /**
     * Gets all subgraphs within this graph.
     * A subgraph is a Pregel instance that is nested within a node of this graph.
     *
     * @deprecated Use getSubgraphsAsync instead. The async method will become the default in the next minor release.
     * @param namespace - Optional namespace to filter subgraphs
     * @param recurse - Whether to recursively get subgraphs of subgraphs
     * @returns Generator yielding tuples of [name, subgraph]
     */
    *getSubgraphs(namespace, recurse
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) {
        for (const [name, node] of Object.entries(this.nodes)) {
            // filter by prefix
            if (namespace !== undefined) {
                if (!namespace.startsWith(name)) {
                    continue;
                }
            }
            const candidates = node.subgraphs?.length ? node.subgraphs : [node.bound];
            for (const candidate of candidates) {
                const graph = findSubgraphPregel(candidate);
                if (graph !== undefined) {
                    if (name === namespace) {
                        yield [name, graph];
                        return;
                    }
                    if (namespace === undefined) {
                        yield [name, graph];
                    }
                    if (recurse) {
                        let newNamespace = namespace;
                        if (namespace !== undefined) {
                            newNamespace = namespace.slice(name.length + 1);
                        }
                        for (const [subgraphName, subgraph] of graph.getSubgraphs(newNamespace, recurse)) {
                            yield [
                                `${name}${constants_CHECKPOINT_NAMESPACE_SEPARATOR}${subgraphName}`,
                                subgraph,
                            ];
                        }
                    }
                }
            }
        }
    }
    /**
     * Gets all subgraphs within this graph asynchronously.
     * A subgraph is a Pregel instance that is nested within a node of this graph.
     *
     * @param namespace - Optional namespace to filter subgraphs
     * @param recurse - Whether to recursively get subgraphs of subgraphs
     * @returns AsyncGenerator yielding tuples of [name, subgraph]
     */
    async *getSubgraphsAsync(namespace, recurse
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) {
        yield* this.getSubgraphs(namespace, recurse);
    }
    /**
     * Prepares a state snapshot from saved checkpoint data.
     * This is an internal method used by getState and getStateHistory.
     *
     * @param config - Configuration for preparing the snapshot
     * @param saved - Optional saved checkpoint data
     * @param subgraphCheckpointer - Optional checkpointer for subgraphs
     * @returns A snapshot of the graph state
     * @internal
     */
    async _prepareStateSnapshot({ config, saved, subgraphCheckpointer, }) {
        if (saved === undefined) {
            return {
                values: {},
                next: [],
                config,
                tasks: [],
            };
        }
        // Pass `skipManaged: true` as managed values should not be returned in get state calls.
        const { managed } = await this.prepareSpecs(config, { skipManaged: true });
        const channels = emptyChannels(this.channels, saved.checkpoint);
        const nextTasks = Object.values(_prepareNextTasks(saved.checkpoint, saved.pendingWrites, this.nodes, channels, managed, saved.config, false, { step: (saved.metadata?.step ?? -1) + 1 }));
        const subgraphs = await gatherIterator(this.getSubgraphsAsync());
        const parentNamespace = saved.config.configurable?.checkpoint_ns ?? "";
        const taskStates = {};
        for (const task of nextTasks) {
            const matchingSubgraph = subgraphs.find(([name]) => name === task.name);
            if (!matchingSubgraph) {
                continue;
            }
            // assemble checkpoint_ns for this task
            let taskNs = `${task.name}${CHECKPOINT_NAMESPACE_END}${task.id}`;
            if (parentNamespace) {
                taskNs = `${parentNamespace}${constants_CHECKPOINT_NAMESPACE_SEPARATOR}${taskNs}`;
            }
            if (subgraphCheckpointer === undefined) {
                // set config as signal that subgraph checkpoints exist
                const config = {
                    configurable: {
                        thread_id: saved.config.configurable?.thread_id,
                        checkpoint_ns: taskNs,
                    },
                };
                taskStates[task.id] = config;
            }
            else {
                // get the state of the subgraph
                const config = {
                    configurable: {
                        [CONFIG_KEY_CHECKPOINTER]: subgraphCheckpointer,
                        thread_id: saved.config.configurable?.thread_id,
                        checkpoint_ns: taskNs,
                    },
                };
                taskStates[task.id] = await matchingSubgraph[1].getState(config, {
                    subgraphs: true,
                });
            }
        }
        // apply pending writes
        const nullWrites = (saved.pendingWrites ?? [])
            .filter((w) => w[0] === NULL_TASK_ID)
            .map((w) => w.slice(1));
        if (nullWrites.length > 0) {
            _applyWrites(saved.checkpoint, channels, [
                {
                    name: INPUT,
                    writes: nullWrites,
                    triggers: [],
                },
            ]);
        }
        // assemble the state snapshot
        return {
            values: readChannels(channels, this.streamChannelsAsIs),
            next: nextTasks.map((task) => task.name),
            tasks: tasksWithWrites(nextTasks, saved?.pendingWrites ?? [], taskStates),
            metadata: saved.metadata,
            config: patchCheckpointMap(saved.config, saved.metadata),
            createdAt: saved.checkpoint.ts,
            parentConfig: saved.parentConfig,
        };
    }
    /**
     * Gets the current state of the graph.
     * Requires a checkpointer to be configured.
     *
     * @param config - Configuration for retrieving the state
     * @param options - Additional options
     * @returns A snapshot of the current graph state
     * @throws {GraphValueError} If no checkpointer is configured
     */
    async getState(config, options) {
        const checkpointer = config.configurable?.[CONFIG_KEY_CHECKPOINTER] ?? this.checkpointer;
        if (!checkpointer) {
            throw new GraphValueError("No checkpointer set");
        }
        const checkpointNamespace = config.configurable?.checkpoint_ns ?? "";
        if (checkpointNamespace !== "" &&
            config.configurable?.[CONFIG_KEY_CHECKPOINTER] === undefined) {
            // remove task_ids from checkpoint_ns
            const recastNamespace = recastCheckpointNamespace(checkpointNamespace);
            for await (const [name, subgraph] of this.getSubgraphsAsync(recastNamespace, true)) {
                if (name === recastNamespace) {
                    return await subgraph.getState(patchConfigurable(config, {
                        [CONFIG_KEY_CHECKPOINTER]: checkpointer,
                    }), { subgraphs: options?.subgraphs });
                }
            }
            throw new Error(`Subgraph with namespace "${recastNamespace}" not found.`);
        }
        const mergedConfig = (0,runnables_config/* mergeConfigs */.SV)(this.config, config);
        const saved = await checkpointer.getTuple(config);
        const snapshot = await this._prepareStateSnapshot({
            config: mergedConfig,
            saved,
            subgraphCheckpointer: options?.subgraphs ? checkpointer : undefined,
        });
        return snapshot;
    }
    /**
     * Gets the history of graph states.
     * Requires a checkpointer to be configured.
     * Useful for:
     * - Debugging execution history
     * - Implementing time travel
     * - Analyzing graph behavior
     *
     * @param config - Configuration for retrieving the history
     * @param options - Options for filtering the history
     * @returns An async iterator of state snapshots
     * @throws {Error} If no checkpointer is configured
     */
    async *getStateHistory(config, options) {
        const checkpointer = config.configurable?.[CONFIG_KEY_CHECKPOINTER] ?? this.checkpointer;
        if (!checkpointer) {
            throw new Error("No checkpointer set");
        }
        const checkpointNamespace = config.configurable?.checkpoint_ns ?? "";
        if (checkpointNamespace !== "" &&
            config.configurable?.[CONFIG_KEY_CHECKPOINTER] === undefined) {
            const recastNamespace = recastCheckpointNamespace(checkpointNamespace);
            // find the subgraph with the matching name
            for await (const [name, pregel] of this.getSubgraphsAsync(recastNamespace, true)) {
                if (name === recastNamespace) {
                    yield* pregel.getStateHistory(patchConfigurable(config, {
                        [CONFIG_KEY_CHECKPOINTER]: checkpointer,
                    }), options);
                    return;
                }
            }
            throw new Error(`Subgraph with namespace "${recastNamespace}" not found.`);
        }
        const mergedConfig = (0,runnables_config/* mergeConfigs */.SV)(this.config, config, {
            configurable: { checkpoint_ns: checkpointNamespace },
        });
        for await (const checkpointTuple of checkpointer.list(mergedConfig, options)) {
            yield this._prepareStateSnapshot({
                config: checkpointTuple.config,
                saved: checkpointTuple,
            });
        }
    }
    /**
     * Updates the state of the graph with new values.
     * Requires a checkpointer to be configured.
     *
     * This method can be used for:
     * - Implementing human-in-the-loop workflows
     * - Modifying graph state during breakpoints
     * - Integrating external inputs into the graph
     *
     * @param inputConfig - Configuration for the update
     * @param values - The values to update the state with
     * @param asNode - Optional node name to attribute the update to
     * @returns Updated configuration
     * @throws {GraphValueError} If no checkpointer is configured
     * @throws {InvalidUpdateError} If the update cannot be attributed to a node
     */
    async updateState(inputConfig, values, asNode) {
        const checkpointer = inputConfig.configurable?.[CONFIG_KEY_CHECKPOINTER] ?? this.checkpointer;
        if (!checkpointer) {
            throw new GraphValueError("No checkpointer set");
        }
        // delegate to subgraph
        const checkpointNamespace = inputConfig.configurable?.checkpoint_ns ?? "";
        if (checkpointNamespace !== "" &&
            inputConfig.configurable?.[CONFIG_KEY_CHECKPOINTER] === undefined) {
            // remove task_ids from checkpoint_ns
            const recastNamespace = recastCheckpointNamespace(checkpointNamespace);
            // find the subgraph with the matching name
            // eslint-disable-next-line no-unreachable-loop
            for await (const [, pregel] of this.getSubgraphsAsync(recastNamespace, true)) {
                return await pregel.updateState(patchConfigurable(inputConfig, {
                    [CONFIG_KEY_CHECKPOINTER]: checkpointer,
                }), values, asNode);
            }
            throw new Error(`Subgraph "${recastNamespace}" not found`);
        }
        // get last checkpoint
        const config = this.config
            ? (0,runnables_config/* mergeConfigs */.SV)(this.config, inputConfig)
            : inputConfig;
        const saved = await checkpointer.getTuple(config);
        const checkpoint = saved !== undefined
            ? copyCheckpoint(saved.checkpoint)
            : emptyCheckpoint();
        const checkpointPreviousVersions = {
            ...saved?.checkpoint.channel_versions,
        };
        const step = saved?.metadata?.step ?? -1;
        // merge configurable fields with previous checkpoint config
        let checkpointConfig = patchConfigurable(config, {
            checkpoint_ns: config.configurable?.checkpoint_ns ?? "",
        });
        let checkpointMetadata = config.metadata ?? {};
        if (saved?.config.configurable) {
            checkpointConfig = patchConfigurable(config, saved.config.configurable);
            checkpointMetadata = {
                ...saved.metadata,
                ...checkpointMetadata,
            };
        }
        // Find last node that updated the state, if not provided
        if (values == null && asNode === undefined) {
            const nextConfig = await checkpointer.put(checkpointConfig, createCheckpoint(checkpoint, undefined, step), {
                source: "update",
                step: step + 1,
                writes: {},
                parents: saved?.metadata?.parents ?? {},
            }, {});
            return patchCheckpointMap(nextConfig, saved ? saved.metadata : undefined);
        }
        // update channels
        const channels = emptyChannels(this.channels, checkpoint);
        // Pass `skipManaged: true` as managed values are not used/relevant in update state calls.
        const { managed } = await this.prepareSpecs(config, { skipManaged: true });
        if (values === null && asNode === "__end__") {
            if (saved) {
                // tasks for this checkpoint
                const nextTasks = _prepareNextTasks(checkpoint, saved.pendingWrites || [], this.nodes, channels, managed, saved.config, true, {
                    step: (saved.metadata?.step ?? -1) + 1,
                    checkpointer: this.checkpointer || undefined,
                    store: this.store,
                });
                // apply null writes
                const nullWrites = (saved.pendingWrites || [])
                    .filter((w) => w[0] === NULL_TASK_ID)
                    .map((w) => w.slice(1));
                if (nullWrites.length > 0) {
                    _applyWrites(saved.checkpoint, channels, [
                        {
                            name: INPUT,
                            writes: nullWrites,
                            triggers: [],
                        },
                    ]);
                }
                // apply writes from tasks that already ran
                for (const [taskId, k, v] of saved.pendingWrites || []) {
                    if ([constants_ERROR, constants_INTERRUPT, SCHEDULED].includes(k)) {
                        continue;
                    }
                    if (!(taskId in nextTasks)) {
                        continue;
                    }
                    nextTasks[taskId].writes.push([k, v]);
                }
                // clear all current tasks
                _applyWrites(checkpoint, channels, Object.values(nextTasks));
            }
            // save checkpoint
            const nextConfig = await checkpointer.put(checkpointConfig, createCheckpoint(checkpoint, undefined, step), {
                ...checkpointMetadata,
                source: "update",
                step: step + 1,
                writes: {},
                parents: saved?.metadata?.parents ?? {},
            }, {});
            return patchCheckpointMap(nextConfig, saved ? saved.metadata : undefined);
        }
        if (values == null && asNode === "__copy__") {
            const nextConfig = await checkpointer.put(saved?.parentConfig ?? checkpointConfig, createCheckpoint(checkpoint, undefined, step), {
                source: "fork",
                step: step + 1,
                writes: {},
                parents: saved?.metadata?.parents ?? {},
            }, {});
            return patchCheckpointMap(nextConfig, saved ? saved.metadata : undefined);
        }
        // apply pending writes, if not on specific checkpoint
        if (config.configurable?.checkpoint_id === undefined &&
            saved?.pendingWrites !== undefined &&
            saved.pendingWrites.length > 0) {
            // tasks for this checkpoint
            const nextTasks = _prepareNextTasks(checkpoint, saved.pendingWrites, this.nodes, channels, managed, saved.config, true, {
                store: this.store,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                checkpointer: this.checkpointer,
                step: (saved.metadata?.step ?? -1) + 1,
            });
            // apply null writes
            const nullWrites = (saved.pendingWrites ?? [])
                .filter((w) => w[0] === NULL_TASK_ID)
                .map((w) => w.slice(1));
            if (nullWrites.length > 0) {
                _applyWrites(saved.checkpoint, channels, [
                    {
                        name: INPUT,
                        writes: nullWrites,
                        triggers: [],
                    },
                ]);
            }
            // apply writes
            for (const [tid, k, v] of saved.pendingWrites) {
                if ([constants_ERROR, constants_INTERRUPT, SCHEDULED].includes(k) ||
                    nextTasks[tid] === undefined) {
                    continue;
                }
                nextTasks[tid].writes.push([k, v]);
            }
            const tasks = Object.values(nextTasks).filter((task) => {
                return task.writes.length > 0;
            });
            if (tasks.length > 0) {
                _applyWrites(checkpoint, channels, tasks);
            }
        }
        const nonNullVersion = Object.values(checkpoint.versions_seen)
            .map((seenVersions) => {
            return Object.values(seenVersions);
        })
            .flat()
            .find((v) => !!v);
        if (asNode === undefined && nonNullVersion === undefined) {
            if (typeof this.inputChannels === "string" &&
                this.nodes[this.inputChannels] !== undefined) {
                asNode = this.inputChannels;
            }
        }
        else if (asNode === undefined) {
            const lastSeenByNode = Object.entries(checkpoint.versions_seen)
                .map(([n, seen]) => {
                return Object.values(seen).map((v) => {
                    return [v, n];
                });
            })
                .flat()
                .sort(([aNumber], [bNumber]) => compareChannelVersions(aNumber, bNumber));
            // if two nodes updated the state at the same time, it's ambiguous
            if (lastSeenByNode) {
                if (lastSeenByNode.length === 1) {
                    // eslint-disable-next-line prefer-destructuring
                    asNode = lastSeenByNode[0][1];
                }
                else if (lastSeenByNode[lastSeenByNode.length - 1][0] !==
                    lastSeenByNode[lastSeenByNode.length - 2][0]) {
                    // eslint-disable-next-line prefer-destructuring
                    asNode = lastSeenByNode[lastSeenByNode.length - 1][1];
                }
            }
        }
        if (asNode === undefined) {
            throw new InvalidUpdateError(`Ambiguous update, specify "asNode"`);
        }
        if (this.nodes[asNode] === undefined) {
            throw new InvalidUpdateError(`Node "${asNode.toString()}" does not exist`);
        }
        // run all writers of the chosen node
        const writers = this.nodes[asNode].getWriters();
        if (!writers.length) {
            throw new InvalidUpdateError(`No writers found for node "${asNode.toString()}"`);
        }
        const task = {
            name: asNode,
            input: values,
            proc: writers.length > 1
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    runnables_base/* RunnableSequence */.zZ.from(writers, { omitSequenceTags: true })
                : writers[0],
            writes: [],
            triggers: [constants_INTERRUPT],
            id: uuid5(constants_INTERRUPT, checkpoint.id),
            writers: [],
        };
        // execute task
        await task.proc.invoke(task.input, (0,runnables_config/* patchConfig */.tn)({
            ...config,
            store: config?.store ?? this.store,
        }, {
            runName: config.runName ?? `${this.getName()}UpdateState`,
            configurable: {
                [constants_CONFIG_KEY_SEND]: (items) => task.writes.push(...items),
                [CONFIG_KEY_READ]: (select_, fresh_ = false) => _localRead(step, checkpoint, channels, managed, 
                // TODO: Why does keyof StrRecord allow number and symbol?
                task, select_, fresh_),
            },
        }));
        // save task writes
        // channel writes are saved to current checkpoint
        // push writes are saved to next checkpoint
        const [channelWrites, pushWrites] = [
            task.writes.filter((w) => w[0] !== PUSH),
            task.writes.filter((w) => w[0] === PUSH),
        ];
        // save task writes
        if (saved !== undefined && channelWrites.length > 0) {
            await checkpointer.putWrites(checkpointConfig, channelWrites, task.id);
        }
        // apply to checkpoint
        // TODO: Why does keyof StrRecord allow number and symbol?
        _applyWrites(checkpoint, channels, [task], checkpointer.getNextVersion.bind(this.checkpointer));
        const newVersions = getNewChannelVersions(checkpointPreviousVersions, checkpoint.channel_versions);
        const nextConfig = await checkpointer.put(checkpointConfig, createCheckpoint(checkpoint, channels, step + 1), {
            source: "update",
            step: step + 1,
            writes: { [asNode]: values },
            parents: saved?.metadata?.parents ?? {},
        }, newVersions);
        if (pushWrites.length > 0) {
            await checkpointer.putWrites(nextConfig, pushWrites, task.id);
        }
        return patchCheckpointMap(nextConfig, saved ? saved.metadata : undefined);
    }
    /**
     * Gets the default values for various graph configuration options.
     * This is an internal method used to process and normalize configuration options.
     *
     * @param config - The input configuration options
     * @returns A tuple containing normalized values for:
     * - debug mode
     * - stream modes
     * - input keys
     * - output keys
     * - remaining config
     * - interrupt before nodes
     * - interrupt after nodes
     * - checkpointer
     * - store
     * - whether stream mode is single
     * @internal
     */
    _defaults(config) {
        const { debug, streamMode, inputKeys, outputKeys, interruptAfter, interruptBefore, ...rest } = config;
        let streamModeSingle = true;
        const defaultDebug = debug !== undefined ? debug : this.debug;
        let defaultOutputKeys = outputKeys;
        if (defaultOutputKeys === undefined) {
            defaultOutputKeys = this.streamChannelsAsIs;
        }
        else {
            validateKeys(defaultOutputKeys, this.channels);
        }
        let defaultInputKeys = inputKeys;
        if (defaultInputKeys === undefined) {
            defaultInputKeys = this.inputChannels;
        }
        else {
            validateKeys(defaultInputKeys, this.channels);
        }
        const defaultInterruptBefore = interruptBefore ?? this.interruptBefore ?? [];
        const defaultInterruptAfter = interruptAfter ?? this.interruptAfter ?? [];
        let defaultStreamMode;
        if (streamMode !== undefined) {
            defaultStreamMode = Array.isArray(streamMode) ? streamMode : [streamMode];
            streamModeSingle = typeof streamMode === "string";
        }
        else {
            defaultStreamMode = this.streamMode;
            streamModeSingle = true;
        }
        // if being called as a node in another graph, always use values mode
        if (config.configurable?.[CONFIG_KEY_TASK_ID] !== undefined) {
            defaultStreamMode = ["values"];
        }
        let defaultCheckpointer;
        if (this.checkpointer === false) {
            defaultCheckpointer = undefined;
        }
        else if (config !== undefined &&
            config.configurable?.[CONFIG_KEY_CHECKPOINTER] !== undefined) {
            defaultCheckpointer = config.configurable[CONFIG_KEY_CHECKPOINTER];
        }
        else {
            defaultCheckpointer = this.checkpointer;
        }
        const defaultStore = config.store ?? this.store;
        return [
            defaultDebug,
            defaultStreamMode,
            defaultInputKeys,
            defaultOutputKeys,
            rest,
            defaultInterruptBefore,
            defaultInterruptAfter,
            defaultCheckpointer,
            defaultStore,
            streamModeSingle,
        ];
    }
    /**
     * Streams the execution of the graph, emitting state updates as they occur.
     * This is the primary method for observing graph execution in real-time.
     *
     * Stream modes:
     * - "values": Emits complete state after each step
     * - "updates": Emits only state changes after each step
     * - "debug": Emits detailed debug information
     * - "messages": Emits messages from within nodes
     *
     * For more details, see the [Streaming how-to guides](../../how-tos/#streaming_1).
     *
     * @param input - The input to start graph execution with
     * @param options - Configuration options for streaming
     * @returns An async iterable stream of graph state updates
     */
    async stream(input, options) {
        // The ensureConfig method called internally defaults recursionLimit to 25 if not
        // passed directly in `options`.
        // There is currently no way in _streamIterator to determine whether this was
        // set by by ensureConfig or manually by the user, so we specify the bound value here
        // and override if it is passed as an explicit param in `options`.
        const config = {
            recursionLimit: this.config?.recursionLimit,
            ...options,
        };
        return super.stream(input, config);
    }
    /**
     * Prepares channel specifications and managed values for graph execution.
     * This is an internal method used to set up the graph's communication channels
     * and managed state before execution.
     *
     * @param config - Configuration for preparing specs
     * @param options - Additional options
     * @param options.skipManaged - Whether to skip initialization of managed values
     * @returns Object containing channel specs and managed value mapping
     * @internal
     */
    async prepareSpecs(config, options) {
        const configForManaged = {
            ...config,
            store: this.store,
        };
        const channelSpecs = {};
        const managedSpecs = {};
        for (const [name, spec] of Object.entries(this.channels)) {
            if (isBaseChannel(spec)) {
                channelSpecs[name] = spec;
            }
            else if (options?.skipManaged) {
                managedSpecs[name] = {
                    cls: NoopManagedValue,
                    params: { config: {} },
                };
            }
            else {
                managedSpecs[name] = spec;
            }
        }
        const managed = new ManagedValueMapping(await Object.entries(managedSpecs).reduce(async (accPromise, [key, value]) => {
            const acc = await accPromise;
            let initializedValue;
            if (isConfiguredManagedValue(value)) {
                if ("key" in value.params &&
                    value.params.key === ChannelKeyPlaceholder) {
                    value.params.key = key;
                }
                initializedValue = await value.cls.initialize(configForManaged, value.params);
            }
            else {
                initializedValue = await value.initialize(configForManaged);
            }
            if (initializedValue !== undefined) {
                acc.push([key, initializedValue]);
            }
            return acc;
        }, Promise.resolve([])));
        return {
            channelSpecs,
            managed,
        };
    }
    /**
     * Internal iterator used by stream() to generate state updates.
     * This method handles the core logic of graph execution and streaming.
     *
     * @param input - The input to start graph execution with
     * @param options - Configuration options for streaming
     * @returns AsyncGenerator yielding state updates
     * @internal
     */
    async *_streamIterator(input, options) {
        const streamSubgraphs = options?.subgraphs;
        const inputConfig = ensureLangGraphConfig(this.config, options);
        if (inputConfig.recursionLimit === undefined ||
            inputConfig.recursionLimit < 1) {
            throw new Error(`Passed "recursionLimit" must be at least 1.`);
        }
        if (this.checkpointer !== undefined &&
            this.checkpointer !== false &&
            inputConfig.configurable === undefined) {
            throw new Error(`Checkpointer requires one or more of the following "configurable" keys: "thread_id", "checkpoint_ns", "checkpoint_id"`);
        }
        const { runId, ...restConfig } = inputConfig;
        // assign defaults
        const [debug, streamMode, , outputKeys, config, interruptBefore, interruptAfter, checkpointer, store, streamModeSingle,] = this._defaults(restConfig);
        const stream = new IterableReadableWritableStream({
            modes: new Set(streamMode),
        });
        // set up messages stream mode
        if (streamMode.includes("messages")) {
            const messageStreamer = new StreamMessagesHandler((chunk) => stream.push(chunk));
            const { callbacks } = config;
            if (callbacks === undefined) {
                config.callbacks = [messageStreamer];
            }
            else if (Array.isArray(callbacks)) {
                config.callbacks = callbacks.concat(messageStreamer);
            }
            else {
                const copiedCallbacks = callbacks.copy();
                copiedCallbacks.addHandler(messageStreamer, true);
                config.callbacks = copiedCallbacks;
            }
        }
        // setup custom stream mode
        if (streamMode.includes("custom")) {
            config.writer = (chunk) => stream.push([[], "custom", chunk]);
        }
        const callbackManager = await (0,runnables_config/* getCallbackManagerForConfig */.kJ)(config);
        const runManager = await callbackManager?.handleChainStart(this.toJSON(), _coerceToDict(input, "input"), runId, undefined, undefined, undefined, config?.runName ?? this.getName());
        const { channelSpecs, managed } = await this.prepareSpecs(config);
        let loop;
        let loopError;
        /**
         * The PregelLoop will yield events from concurrent tasks as soon as they are
         * generated. Each task can push multiple events onto the stream in any order.
         *
         * We use a separate background method and stream here in order to yield events
         * from the loop to the main stream and therefore back to the user as soon as
         * they are available.
         */
        const createAndRunLoop = async () => {
            try {
                loop = await PregelLoop.initialize({
                    input,
                    config,
                    checkpointer,
                    nodes: this.nodes,
                    channelSpecs,
                    managed,
                    outputKeys,
                    streamKeys: this.streamChannelsAsIs,
                    store,
                    stream,
                    interruptAfter,
                    interruptBefore,
                    manager: runManager,
                    debug: this.debug,
                });
                const runner = new PregelRunner({
                    loop,
                    nodeFinished: config.configurable?.nodeFinished,
                });
                if (options?.subgraphs) {
                    loop.config.configurable = {
                        ...loop.config.configurable,
                        [CONFIG_KEY_STREAM]: loop.stream,
                    };
                }
                await this._runLoop({ loop, runner, debug, config });
            }
            catch (e) {
                loopError = e;
            }
            finally {
                try {
                    // Call `.stop()` again incase it was not called in the loop, e.g due to an error.
                    if (loop) {
                        await loop.store?.stop();
                    }
                    await Promise.all([
                        ...(loop?.checkpointerPromises ?? []),
                        ...Array.from(managed.values()).map((mv) => mv.promises()),
                    ]);
                }
                catch (e) {
                    loopError = loopError ?? e;
                }
                if (loopError) {
                    // "Causes any future interactions with the associated stream to error".
                    // Wraps ReadableStreamDefaultController#error:
                    // https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/error
                    stream.error(loopError);
                }
                else {
                    // Will end the iterator outside of this method,
                    // keeping previously enqueued chunks.
                    // Wraps ReadableStreamDefaultController#close:
                    // https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/close
                    stream.close();
                }
            }
        };
        const runLoopPromise = createAndRunLoop();
        try {
            for await (const chunk of stream) {
                if (chunk === undefined) {
                    throw new Error("Data structure error.");
                }
                const [namespace, mode, payload] = chunk;
                if (streamMode.includes(mode)) {
                    if (streamSubgraphs && !streamModeSingle) {
                        yield [namespace, mode, payload];
                    }
                    else if (!streamModeSingle) {
                        yield [mode, payload];
                    }
                    else if (streamSubgraphs) {
                        yield [namespace, payload];
                    }
                    else {
                        yield payload;
                    }
                }
            }
        }
        catch (e) {
            await runManager?.handleChainError(loopError);
            throw e;
        }
        finally {
            await runLoopPromise;
        }
        await runManager?.handleChainEnd(loop?.output ?? {});
    }
    /**
     * Run the graph with a single input and config.
     * @param input The input to the graph.
     * @param options The configuration to use for the run.
     */
    async invoke(input, options) {
        const streamMode = options?.streamMode ?? "values";
        const config = {
            ...options,
            outputKeys: options?.outputKeys ?? this.outputChannels,
            streamMode,
        };
        const chunks = [];
        const stream = await this.stream(input, config);
        for await (const chunk of stream) {
            chunks.push(chunk);
        }
        if (streamMode === "values") {
            return chunks[chunks.length - 1];
        }
        return chunks;
    }
    async _runLoop(params) {
        const { loop, runner, debug, config } = params;
        let tickError;
        try {
            while (await loop.tick({
                inputKeys: this.inputChannels,
            })) {
                if (debug) {
                    printStepCheckpoint(loop.checkpointMetadata.step, loop.channels, this.streamChannelsList);
                }
                if (debug) {
                    printStepTasks(loop.step, Object.values(loop.tasks));
                }
                await runner.tick({
                    timeout: this.stepTimeout,
                    retryPolicy: this.retryPolicy,
                    onStepWrite: (step, writes) => {
                        if (debug) {
                            printStepWrites(step, writes, this.streamChannelsList);
                        }
                    },
                    signal: config.signal,
                });
            }
            if (loop.status === "out_of_steps") {
                throw new GraphRecursionError([
                    `Recursion limit of ${config.recursionLimit} reached`,
                    "without hitting a stop condition. You can increase the",
                    `limit by setting the "recursionLimit" config key.`,
                ].join(" "), {
                    lc_error_code: "GRAPH_RECURSION_LIMIT",
                });
            }
        }
        catch (e) {
            tickError = e;
            const suppress = await loop.finishAndHandleError(tickError);
            if (!suppress) {
                throw e;
            }
        }
        finally {
            if (tickError === undefined) {
                await loop.finishAndHandleError();
            }
        }
    }
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/channels/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/channels/ephemeral_value.js


/**
 * Stores the value received in the step immediately preceding, clears after.
 * @internal
 */
class EphemeralValue extends BaseChannel {
    constructor(guard = true) {
        super();
        Object.defineProperty(this, "lc_graph_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "EphemeralValue"
        });
        Object.defineProperty(this, "guard", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // value is an array so we don't misinterpret an update to undefined as no write
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        this.guard = guard;
    }
    fromCheckpoint(checkpoint) {
        const empty = new EphemeralValue(this.guard);
        if (checkpoint) {
            empty.value = [checkpoint];
        }
        return empty;
    }
    update(values) {
        if (values.length === 0) {
            const updated = this.value.length > 0;
            // If there are no updates for this specific channel at the end of the step, wipe it.
            this.value = [];
            return updated;
        }
        if (values.length !== 1 && this.guard) {
            throw new InvalidUpdateError("EphemeralValue can only receive one value per step.");
        }
        // eslint-disable-next-line prefer-destructuring
        this.value = [values[values.length - 1]];
        return true;
    }
    get() {
        if (this.value.length === 0) {
            throw new errors_EmptyChannelError();
        }
        return this.value[0];
    }
    checkpoint() {
        if (this.value.length === 0) {
            throw new errors_EmptyChannelError();
        }
        return this.value[0];
    }
}
//# sourceMappingURL=ephemeral_value.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/graph/graph.js
/* eslint-disable @typescript-eslint/no-use-before-define */












class Branch {
    constructor(options) {
        Object.defineProperty(this, "condition", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ends", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (runnables_base/* Runnable */.YN.isRunnable(options.path)) {
            this.condition = options.path;
        }
        else {
            this.condition = (0,runnables_base/* _coerceToRunnable */.Bp)(options.path).withConfig({
                runName: `Branch`,
            });
        }
        this.ends = Array.isArray(options.pathMap)
            ? options.pathMap.reduce((acc, n) => {
                acc[n] = n;
                return acc;
            }, {})
            : options.pathMap;
    }
    run(writer, reader) {
        return ChannelWrite.registerWriter(new RunnableCallable({
            name: "<branch_run>",
            trace: false,
            func: async (input, config) => {
                try {
                    return await this._route(input, config, writer, reader);
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                }
                catch (e) {
                    // Detect & warn if NodeInterrupt is thrown in a conditional edge
                    if (e.name === NodeInterrupt.unminifiable_name) {
                        console.warn("[WARN]: 'NodeInterrupt' thrown in conditional edge. This is likely a bug in your graph implementation.\n" +
                            "NodeInterrupt should only be thrown inside a node, not in edge conditions.");
                    }
                    throw e;
                }
            },
        }));
    }
    async _route(input, config, writer, reader
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) {
        let result = await this.condition.invoke(reader ? reader(config) : input, config);
        if (!Array.isArray(result)) {
            result = [result];
        }
        let destinations;
        if (this.ends) {
            destinations = result.map((r) => (_isSend(r) ? r : this.ends[r]));
        }
        else {
            destinations = result;
        }
        if (destinations.some((dest) => !dest)) {
            throw new Error("Branch condition returned unknown or null destination");
        }
        if (destinations.filter(_isSend).some((packet) => packet.node === constants_END)) {
            throw new InvalidUpdateError("Cannot send a packet to the END node");
        }
        const writeResult = await writer(destinations, config);
        return writeResult ?? input;
    }
}
class Graph {
    constructor() {
        Object.defineProperty(this, "nodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "edges", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Object.defineProperty(this, "branches", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "entryPoint", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "compiled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        this.nodes = {};
        this.edges = new Set();
        this.branches = {};
    }
    warnIfCompiled(message) {
        if (this.compiled) {
            console.warn(message);
        }
    }
    get allEdges() {
        return this.edges;
    }
    addNode(key, action, options) {
        for (const reservedChar of [
            constants_CHECKPOINT_NAMESPACE_SEPARATOR,
            CHECKPOINT_NAMESPACE_END,
        ]) {
            if (key.includes(reservedChar)) {
                throw new Error(`"${reservedChar}" is a reserved character and is not allowed in node names.`);
            }
        }
        this.warnIfCompiled(`Adding a node to a graph that has already been compiled. This will not be reflected in the compiled graph.`);
        if (key in this.nodes) {
            throw new Error(`Node \`${key}\` already present.`);
        }
        if (key === constants_END) {
            throw new Error(`Node \`${key}\` is reserved.`);
        }
        const runnable = (0,runnables_base/* _coerceToRunnable */.Bp)(
        // Account for arbitrary state due to Send API
        action);
        this.nodes[key] = {
            runnable,
            metadata: options?.metadata,
            subgraphs: isPregelLike(runnable) ? [runnable] : options?.subgraphs,
            ends: options?.ends,
        };
        return this;
    }
    addEdge(startKey, endKey) {
        this.warnIfCompiled(`Adding an edge to a graph that has already been compiled. This will not be reflected in the compiled graph.`);
        if (startKey === constants_END) {
            throw new Error("END cannot be a start node");
        }
        if (endKey === constants_START) {
            throw new Error("START cannot be an end node");
        }
        if (Array.from(this.edges).some(([start]) => start === startKey) &&
            !("channels" in this)) {
            throw new Error(`Already found path for ${startKey}. For multiple edges, use StateGraph.`);
        }
        this.edges.add([startKey, endKey]);
        return this;
    }
    addConditionalEdges(source, path, pathMap) {
        const options = typeof source === "object"
            ? source
            : {
                source,
                path: path,
                pathMap,
            };
        this.warnIfCompiled("Adding an edge to a graph that has already been compiled. This will not be reflected in the compiled graph.");
        if (!runnables_base/* Runnable */.YN.isRunnable(options.path)) {
            const pathDisplayValues = Array.isArray(options.pathMap)
                ? options.pathMap.join(",")
                : Object.keys(options.pathMap ?? {}).join(",");
            options.path = (0,runnables_base/* _coerceToRunnable */.Bp)(options.path).withConfig({
                runName: `Branch<${options.source}${pathDisplayValues !== "" ? `,${pathDisplayValues}` : ""}>`.slice(0, 63),
            });
        }
        // find a name for condition
        const name = options.path.getName() === "RunnableLambda"
            ? "condition"
            : options.path.getName();
        // validate condition
        if (this.branches[options.source] && this.branches[options.source][name]) {
            throw new Error(`Condition \`${name}\` already present for node \`${source}\``);
        }
        // save it
        if (!this.branches[options.source]) {
            this.branches[options.source] = {};
        }
        this.branches[options.source][name] = new Branch(options);
        return this;
    }
    /**
     * @deprecated use `addEdge(START, key)` instead
     */
    setEntryPoint(key) {
        this.warnIfCompiled("Setting the entry point of a graph that has already been compiled. This will not be reflected in the compiled graph.");
        return this.addEdge(constants_START, key);
    }
    /**
     * @deprecated use `addEdge(key, END)` instead
     */
    setFinishPoint(key) {
        this.warnIfCompiled("Setting a finish point of a graph that has already been compiled. This will not be reflected in the compiled graph.");
        return this.addEdge(key, constants_END);
    }
    compile({ checkpointer, interruptBefore, interruptAfter, name, } = {}) {
        // validate the graph
        this.validate([
            ...(Array.isArray(interruptBefore) ? interruptBefore : []),
            ...(Array.isArray(interruptAfter) ? interruptAfter : []),
        ]);
        // create empty compiled graph
        const compiled = new CompiledGraph({
            builder: this,
            checkpointer,
            interruptAfter,
            interruptBefore,
            autoValidate: false,
            nodes: {},
            channels: {
                [constants_START]: new EphemeralValue(),
                [constants_END]: new EphemeralValue(),
            },
            inputChannels: constants_START,
            outputChannels: constants_END,
            streamChannels: [],
            streamMode: "values",
            name,
        });
        // attach nodes, edges and branches
        for (const [key, node] of Object.entries(this.nodes)) {
            compiled.attachNode(key, node);
        }
        for (const [start, end] of this.edges) {
            compiled.attachEdge(start, end);
        }
        for (const [start, branches] of Object.entries(this.branches)) {
            for (const [name, branch] of Object.entries(branches)) {
                compiled.attachBranch(start, name, branch);
            }
        }
        return compiled.validate();
    }
    validate(interrupt) {
        // assemble sources
        const allSources = new Set([...this.allEdges].map(([src, _]) => src));
        for (const [start] of Object.entries(this.branches)) {
            allSources.add(start);
        }
        for (const source of allSources) {
            if (source !== constants_START && !(source in this.nodes)) {
                throw new Error(`Found edge starting at unknown node \`${source}\``);
            }
        }
        // assemble targets
        const allTargets = new Set([...this.allEdges].map(([_, target]) => target));
        for (const [start, branches] of Object.entries(this.branches)) {
            for (const branch of Object.values(branches)) {
                if (branch.ends) {
                    for (const end of Object.values(branch.ends)) {
                        allTargets.add(end);
                    }
                }
                else {
                    allTargets.add(constants_END);
                    for (const node of Object.keys(this.nodes)) {
                        if (node !== start) {
                            allTargets.add(node);
                        }
                    }
                }
            }
        }
        for (const node of Object.values(this.nodes)) {
            for (const target of node.ends ?? []) {
                allTargets.add(target);
            }
        }
        // validate targets
        for (const node of Object.keys(this.nodes)) {
            if (!allTargets.has(node)) {
                throw new UnreachableNodeError([
                    `Node \`${node}\` is not reachable.`,
                    "",
                    "If you are returning Command objects from your node,",
                    'make sure you are passing names of potential destination nodes as an "ends" array',
                    'into ".addNode(..., { ends: ["node1", "node2"] })".',
                ].join("\n"), {
                    lc_error_code: "UNREACHABLE_NODE",
                });
            }
        }
        for (const target of allTargets) {
            if (target !== constants_END && !(target in this.nodes)) {
                throw new Error(`Found edge ending at unknown node \`${target}\``);
            }
        }
        // validate interrupts
        if (interrupt) {
            for (const node of interrupt) {
                if (!(node in this.nodes)) {
                    throw new Error(`Interrupt node \`${node}\` is not present`);
                }
            }
        }
        this.compiled = true;
    }
}
class CompiledGraph extends Pregel {
    constructor({ builder, ...rest }) {
        super(rest);
        Object.defineProperty(this, "builder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.builder = builder;
    }
    attachNode(key, node) {
        this.channels[key] = new EphemeralValue();
        this.nodes[key] = new PregelNode({
            channels: [],
            triggers: [],
            metadata: node.metadata,
            subgraphs: node.subgraphs,
            ends: node.ends,
        })
            .pipe(node.runnable)
            .pipe(new ChannelWrite([{ channel: key, value: PASSTHROUGH }], [TAG_HIDDEN]));
        this.streamChannels.push(key);
    }
    attachEdge(start, end) {
        if (end === constants_END) {
            if (start === constants_START) {
                throw new Error("Cannot have an edge from START to END");
            }
            this.nodes[start].writers.push(new ChannelWrite([{ channel: constants_END, value: PASSTHROUGH }], [TAG_HIDDEN]));
        }
        else {
            this.nodes[end].triggers.push(start);
            this.nodes[end].channels.push(start);
        }
    }
    attachBranch(start, name, branch) {
        // add hidden start node
        if (start === constants_START && !this.nodes[constants_START]) {
            this.nodes[constants_START] = Channel.subscribeTo(constants_START, { tags: [TAG_HIDDEN] });
        }
        // attach branch writer
        this.nodes[start].pipe(branch.run((dests) => {
            const writes = dests.map((dest) => {
                if (_isSend(dest)) {
                    return dest;
                }
                return {
                    channel: dest === constants_END ? constants_END : `branch:${start}:${name}:${dest}`,
                    value: PASSTHROUGH,
                };
            });
            return new ChannelWrite(writes, [TAG_HIDDEN]);
        }));
        // attach branch readers
        const ends = branch.ends
            ? Object.values(branch.ends)
            : Object.keys(this.nodes);
        for (const end of ends) {
            if (end !== constants_END) {
                const channelName = `branch:${start}:${name}:${end}`;
                this.channels[channelName] =
                    new EphemeralValue();
                this.nodes[end].triggers.push(channelName);
                this.nodes[end].channels.push(channelName);
            }
        }
    }
    /**
     * Returns a drawable representation of the computation graph.
     */
    async getGraphAsync(config) {
        const xray = config?.xray;
        const graph = new runnables_graph/* Graph */.T();
        const startNodes = {
            [constants_START]: graph.addNode({
                schema: lib.z.any(),
            }, constants_START),
        };
        const endNodes = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let subgraphs = {};
        if (xray) {
            subgraphs = Object.fromEntries((await gatherIterator(this.getSubgraphsAsync())).filter(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (x) => isCompiledGraph(x[1])));
        }
        function addEdge(start, end, label, conditional = false) {
            if (end === constants_END && endNodes[constants_END] === undefined) {
                endNodes[constants_END] = graph.addNode({ schema: lib.z.any() }, constants_END);
            }
            if (startNodes[start] === undefined) {
                return;
            }
            if (endNodes[end] === undefined) {
                throw new Error(`End node ${end} not found!`);
            }
            return graph.addEdge(startNodes[start], endNodes[end], label !== end ? label : undefined, conditional);
        }
        for (const [key, nodeSpec] of Object.entries(this.builder.nodes)) {
            const displayKey = _escapeMermaidKeywords(key);
            const node = nodeSpec.runnable;
            const metadata = nodeSpec.metadata ?? {};
            if (this.interruptBefore?.includes(key) &&
                this.interruptAfter?.includes(key)) {
                metadata.__interrupt = "before,after";
            }
            else if (this.interruptBefore?.includes(key)) {
                metadata.__interrupt = "before";
            }
            else if (this.interruptAfter?.includes(key)) {
                metadata.__interrupt = "after";
            }
            if (xray) {
                const newXrayValue = typeof xray === "number" ? xray - 1 : xray;
                const drawableSubgraph = subgraphs[key] !== undefined
                    ? await subgraphs[key].getGraphAsync({
                        ...config,
                        xray: newXrayValue,
                    })
                    : node.getGraph(config);
                drawableSubgraph.trimFirstNode();
                drawableSubgraph.trimLastNode();
                if (Object.keys(drawableSubgraph.nodes).length > 1) {
                    const [e, s] = graph.extend(drawableSubgraph, displayKey);
                    if (e === undefined) {
                        throw new Error(`Could not extend subgraph "${key}" due to missing entrypoint.`);
                    }
                    // TODO: Remove default name once we stop supporting core 0.2.0
                    // eslint-disable-next-line no-inner-declarations
                    function _isRunnableInterface(
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    thing) {
                        return thing ? thing.lc_runnable : false;
                    }
                    // eslint-disable-next-line no-inner-declarations
                    function _nodeDataStr(id, data) {
                        if (id !== undefined && !(0,wrapper/* validate */.tf)(id)) {
                            return id;
                        }
                        else if (_isRunnableInterface(data)) {
                            try {
                                let dataStr = data.getName();
                                dataStr = dataStr.startsWith("Runnable")
                                    ? dataStr.slice("Runnable".length)
                                    : dataStr;
                                return dataStr;
                            }
                            catch (error) {
                                return data.getName();
                            }
                        }
                        else {
                            return data.name ?? "UnknownSchema";
                        }
                    }
                    // TODO: Remove casts when we stop supporting core 0.2.0
                    if (s !== undefined) {
                        startNodes[displayKey] = {
                            name: _nodeDataStr(s.id, s.data),
                            ...s,
                        };
                    }
                    endNodes[displayKey] = {
                        name: _nodeDataStr(e.id, e.data),
                        ...e,
                    };
                }
                else {
                    // TODO: Remove when we stop supporting core 0.2.0
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const newNode = graph.addNode(node, displayKey, metadata);
                    startNodes[displayKey] = newNode;
                    endNodes[displayKey] = newNode;
                }
            }
            else {
                // TODO: Remove when we stop supporting core 0.2.0
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const newNode = graph.addNode(node, displayKey, metadata);
                startNodes[displayKey] = newNode;
                endNodes[displayKey] = newNode;
            }
        }
        const sortedEdges = [...this.builder.allEdges].sort(([a], [b]) => {
            if (a < b) {
                return -1;
            }
            else if (b > a) {
                return 1;
            }
            else {
                return 0;
            }
        });
        for (const [start, end] of sortedEdges) {
            addEdge(_escapeMermaidKeywords(start), _escapeMermaidKeywords(end));
        }
        for (const [start, branches] of Object.entries(this.builder.branches)) {
            const defaultEnds = {
                ...Object.fromEntries(Object.keys(this.builder.nodes)
                    .filter((k) => k !== start)
                    .map((k) => [_escapeMermaidKeywords(k), _escapeMermaidKeywords(k)])),
                [constants_END]: constants_END,
            };
            for (const branch of Object.values(branches)) {
                let ends;
                if (branch.ends !== undefined) {
                    ends = branch.ends;
                }
                else {
                    ends = defaultEnds;
                }
                for (const [label, end] of Object.entries(ends)) {
                    addEdge(_escapeMermaidKeywords(start), _escapeMermaidKeywords(end), label, true);
                }
            }
        }
        for (const [key, node] of Object.entries(this.builder.nodes)) {
            if (node.ends !== undefined) {
                for (const end of node.ends) {
                    addEdge(_escapeMermaidKeywords(key), _escapeMermaidKeywords(end), undefined, true);
                }
            }
        }
        return graph;
    }
    /**
     * Returns a drawable representation of the computation graph.
     *
     * @deprecated Use getGraphAsync instead. The async method will be the default in the next minor core release.
     */
    getGraph(config) {
        const xray = config?.xray;
        const graph = new runnables_graph/* Graph */.T();
        const startNodes = {
            [constants_START]: graph.addNode({
                schema: lib.z.any(),
            }, constants_START),
        };
        const endNodes = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let subgraphs = {};
        if (xray) {
            subgraphs = Object.fromEntries(gatherIteratorSync(this.getSubgraphs()).filter(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (x) => isCompiledGraph(x[1])));
        }
        function addEdge(start, end, label, conditional = false) {
            if (end === constants_END && endNodes[constants_END] === undefined) {
                endNodes[constants_END] = graph.addNode({ schema: lib.z.any() }, constants_END);
            }
            return graph.addEdge(startNodes[start], endNodes[end], label !== end ? label : undefined, conditional);
        }
        for (const [key, nodeSpec] of Object.entries(this.builder.nodes)) {
            const displayKey = _escapeMermaidKeywords(key);
            const node = nodeSpec.runnable;
            const metadata = nodeSpec.metadata ?? {};
            if (this.interruptBefore?.includes(key) &&
                this.interruptAfter?.includes(key)) {
                metadata.__interrupt = "before,after";
            }
            else if (this.interruptBefore?.includes(key)) {
                metadata.__interrupt = "before";
            }
            else if (this.interruptAfter?.includes(key)) {
                metadata.__interrupt = "after";
            }
            if (xray) {
                const newXrayValue = typeof xray === "number" ? xray - 1 : xray;
                const drawableSubgraph = subgraphs[key] !== undefined
                    ? subgraphs[key].getGraph({
                        ...config,
                        xray: newXrayValue,
                    })
                    : node.getGraph(config);
                drawableSubgraph.trimFirstNode();
                drawableSubgraph.trimLastNode();
                if (Object.keys(drawableSubgraph.nodes).length > 1) {
                    const [e, s] = graph.extend(drawableSubgraph, displayKey);
                    if (e === undefined) {
                        throw new Error(`Could not extend subgraph "${key}" due to missing entrypoint.`);
                    }
                    // TODO: Remove default name once we stop supporting core 0.2.0
                    // eslint-disable-next-line no-inner-declarations
                    function _isRunnableInterface(
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    thing) {
                        return thing ? thing.lc_runnable : false;
                    }
                    // eslint-disable-next-line no-inner-declarations
                    function _nodeDataStr(id, data) {
                        if (id !== undefined && !(0,wrapper/* validate */.tf)(id)) {
                            return id;
                        }
                        else if (_isRunnableInterface(data)) {
                            try {
                                let dataStr = data.getName();
                                dataStr = dataStr.startsWith("Runnable")
                                    ? dataStr.slice("Runnable".length)
                                    : dataStr;
                                return dataStr;
                            }
                            catch (error) {
                                return data.getName();
                            }
                        }
                        else {
                            return data.name ?? "UnknownSchema";
                        }
                    }
                    // TODO: Remove casts when we stop supporting core 0.2.0
                    if (s !== undefined) {
                        startNodes[displayKey] = {
                            name: _nodeDataStr(s.id, s.data),
                            ...s,
                        };
                    }
                    endNodes[displayKey] = {
                        name: _nodeDataStr(e.id, e.data),
                        ...e,
                    };
                }
                else {
                    // TODO: Remove when we stop supporting core 0.2.0
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    const newNode = graph.addNode(node, displayKey, metadata);
                    startNodes[displayKey] = newNode;
                    endNodes[displayKey] = newNode;
                }
            }
            else {
                // TODO: Remove when we stop supporting core 0.2.0
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const newNode = graph.addNode(node, displayKey, metadata);
                startNodes[displayKey] = newNode;
                endNodes[displayKey] = newNode;
            }
        }
        const sortedEdges = [...this.builder.allEdges].sort(([a], [b]) => {
            if (a < b) {
                return -1;
            }
            else if (b > a) {
                return 1;
            }
            else {
                return 0;
            }
        });
        for (const [start, end] of sortedEdges) {
            addEdge(_escapeMermaidKeywords(start), _escapeMermaidKeywords(end));
        }
        for (const [start, branches] of Object.entries(this.builder.branches)) {
            const defaultEnds = {
                ...Object.fromEntries(Object.keys(this.builder.nodes)
                    .filter((k) => k !== start)
                    .map((k) => [_escapeMermaidKeywords(k), _escapeMermaidKeywords(k)])),
                [constants_END]: constants_END,
            };
            for (const branch of Object.values(branches)) {
                let ends;
                if (branch.ends !== undefined) {
                    ends = branch.ends;
                }
                else {
                    ends = defaultEnds;
                }
                for (const [label, end] of Object.entries(ends)) {
                    addEdge(_escapeMermaidKeywords(start), _escapeMermaidKeywords(end), label, true);
                }
            }
        }
        return graph;
    }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isCompiledGraph(x) {
    return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    typeof x.attachNode === "function" &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        typeof x.attachEdge === "function");
}
function _escapeMermaidKeywords(key) {
    if (key === "subgraph") {
        return `"${key}"`;
    }
    return key;
}
//# sourceMappingURL=graph.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/channels/named_barrier_value.js


const areSetsEqual = (a, b) => a.size === b.size && [...a].every((value) => b.has(value));
/**
 * A channel that waits until all named values are received before making the value available.
 *
 * This ensures that if node N and node M both write to channel C, the value of C will not be updated
 * until N and M have completed updating.
 * @internal
 */
class NamedBarrierValue extends BaseChannel {
    constructor(names) {
        super();
        Object.defineProperty(this, "lc_graph_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "NamedBarrierValue"
        });
        Object.defineProperty(this, "names", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        }); // Names of nodes that we want to wait for.
        Object.defineProperty(this, "seen", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.names = names;
        this.seen = new Set();
    }
    fromCheckpoint(checkpoint) {
        const empty = new NamedBarrierValue(this.names);
        if (checkpoint) {
            empty.seen = new Set(checkpoint);
        }
        return empty;
    }
    update(values) {
        let updated = false;
        for (const nodeName of values) {
            if (this.names.has(nodeName)) {
                if (!this.seen.has(nodeName)) {
                    this.seen.add(nodeName);
                    updated = true;
                }
            }
            else {
                throw new InvalidUpdateError(`Value ${JSON.stringify(nodeName)} not in names ${JSON.stringify(this.names)}`);
            }
        }
        return updated;
    }
    // If we have not yet seen all the node names we want to wait for,
    // throw an error to prevent continuing.
    get() {
        if (!areSetsEqual(this.names, this.seen)) {
            throw new errors_EmptyChannelError();
        }
        return undefined;
    }
    checkpoint() {
        return [...this.seen];
    }
    consume() {
        if (this.seen && this.names && areSetsEqual(this.seen, this.names)) {
            this.seen = new Set();
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=named_barrier_value.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/graph/state.js
/* eslint-disable @typescript-eslint/no-use-before-define */













const ROOT = "__root__";
/**
 * A graph whose nodes communicate by reading and writing to a shared state.
 * Each node takes a defined `State` as input and returns a `Partial<State>`.
 *
 * Each state key can optionally be annotated with a reducer function that
 * will be used to aggregate the values of that key received from multiple nodes.
 * The signature of a reducer function is (left: Value, right: UpdateValue) => Value.
 *
 * See {@link Annotation} for more on defining state.
 *
 * After adding nodes and edges to your graph, you must call `.compile()` on it before
 * you can use it.
 *
 * @example
 * ```ts
 * import {
 *   type BaseMessage,
 *   AIMessage,
 *   HumanMessage,
 * } from "@langchain/core/messages";
 * import { StateGraph, Annotation } from "@langchain/langgraph";
 *
 * // Define a state with a single key named "messages" that will
 * // combine a returned BaseMessage or arrays of BaseMessages
 * const StateAnnotation = Annotation.Root({
 *   sentiment: Annotation<string>,
 *   messages: Annotation<BaseMessage[]>({
 *     reducer: (left: BaseMessage[], right: BaseMessage | BaseMessage[]) => {
 *       if (Array.isArray(right)) {
 *         return left.concat(right);
 *       }
 *       return left.concat([right]);
 *     },
 *     default: () => [],
 *   }),
 * });
 *
 * const graphBuilder = new StateGraph(StateAnnotation);
 *
 * // A node in the graph that returns an object with a "messages" key
 * // will update the state by combining the existing value with the returned one.
 * const myNode = (state: typeof StateAnnotation.State) => {
 *   return {
 *     messages: [new AIMessage("Some new response")],
 *     sentiment: "positive",
 *   };
 * };
 *
 * const graph = graphBuilder
 *   .addNode("myNode", myNode)
 *   .addEdge("__start__", "myNode")
 *   .addEdge("myNode", "__end__")
 *   .compile();
 *
 * await graph.invoke({ messages: [new HumanMessage("how are you?")] });
 *
 * // {
 * //   messages: [HumanMessage("how are you?"), AIMessage("Some new response")],
 * //   sentiment: "positive",
 * // }
 * ```
 */
class state_StateGraph extends Graph {
    constructor(fields, configSchema) {
        super();
        Object.defineProperty(this, "channels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        // TODO: this doesn't dedupe edges as in py, so worth fixing at some point
        Object.defineProperty(this, "waitingEdges", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set()
        });
        /** @internal */
        Object.defineProperty(this, "_schemaDefinition", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** @internal */
        Object.defineProperty(this, "_inputDefinition", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /** @internal */
        Object.defineProperty(this, "_outputDefinition", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        /**
         * Map schemas to managed values
         * @internal
         */
        Object.defineProperty(this, "_schemaDefinitions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        /** @internal Used only for typing. */
        Object.defineProperty(this, "_configSchema", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (isStateGraphArgsWithInputOutputSchemas(fields)) {
            this._schemaDefinition = fields.input.spec;
            this._inputDefinition = fields.input.spec;
            this._outputDefinition = fields.output.spec;
        }
        else if (isStateGraphArgsWithStateSchema(fields)) {
            this._schemaDefinition = fields.stateSchema.spec;
            this._inputDefinition = (fields.input?.spec ??
                this._schemaDefinition);
            this._outputDefinition = (fields.output?.spec ??
                this._schemaDefinition);
        }
        else if (isStateDefinition(fields) || isAnnotationRoot(fields)) {
            const spec = isAnnotationRoot(fields) ? fields.spec : fields;
            this._schemaDefinition = spec;
        }
        else if (isStateGraphArgs(fields)) {
            const spec = _getChannels(fields.channels);
            this._schemaDefinition = spec;
        }
        else {
            throw new Error("Invalid StateGraph input.");
        }
        this._inputDefinition = this._inputDefinition ?? this._schemaDefinition;
        this._outputDefinition = this._outputDefinition ?? this._schemaDefinition;
        this._addSchema(this._schemaDefinition);
        this._addSchema(this._inputDefinition);
        this._addSchema(this._outputDefinition);
        this._configSchema = configSchema?.spec;
    }
    get allEdges() {
        return new Set([
            ...this.edges,
            ...Array.from(this.waitingEdges).flatMap(([starts, end]) => starts.map((start) => [start, end])),
        ]);
    }
    _addSchema(stateDefinition) {
        if (this._schemaDefinitions.has(stateDefinition)) {
            return;
        }
        // TODO: Support managed values
        this._schemaDefinitions.set(stateDefinition, stateDefinition);
        for (const [key, val] of Object.entries(stateDefinition)) {
            let channel;
            if (typeof val === "function") {
                channel = val();
            }
            else {
                channel = val;
            }
            if (this.channels[key] !== undefined) {
                if (this.channels[key] !== channel) {
                    if (!isConfiguredManagedValue(channel) &&
                        channel.lc_graph_name !== "LastValue") {
                        throw new Error(`Channel "${key}" already exists with a different type.`);
                    }
                }
            }
            else {
                this.channels[key] = channel;
            }
        }
    }
    addNode(key, action, options) {
        if (key in this.channels) {
            throw new Error(`${key} is already being used as a state attribute (a.k.a. a channel), cannot also be used as a node name.`);
        }
        for (const reservedChar of [
            constants_CHECKPOINT_NAMESPACE_SEPARATOR,
            CHECKPOINT_NAMESPACE_END,
        ]) {
            if (key.includes(reservedChar)) {
                throw new Error(`"${reservedChar}" is a reserved character and is not allowed in node names.`);
            }
        }
        this.warnIfCompiled(`Adding a node to a graph that has already been compiled. This will not be reflected in the compiled graph.`);
        if (key in this.nodes) {
            throw new Error(`Node \`${key}\` already present.`);
        }
        if (key === constants_END || key === constants_START) {
            throw new Error(`Node \`${key}\` is reserved.`);
        }
        if (options?.input !== undefined) {
            this._addSchema(options.input.spec);
        }
        let runnable;
        if (runnables_base/* Runnable */.YN.isRunnable(action)) {
            runnable = action;
        }
        else if (typeof action === "function") {
            runnable = new RunnableCallable({
                func: action,
                name: key,
                trace: false,
            });
        }
        else {
            runnable = (0,runnables_base/* _coerceToRunnable */.Bp)(action);
        }
        const nodeSpec = {
            runnable: runnable,
            retryPolicy: options?.retryPolicy,
            metadata: options?.metadata,
            input: options?.input?.spec ?? this._schemaDefinition,
            subgraphs: isPregelLike(runnable)
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    [runnable]
                : options?.subgraphs,
            ends: options?.ends,
        };
        this.nodes[key] = nodeSpec;
        return this;
    }
    addEdge(startKey, endKey) {
        if (typeof startKey === "string") {
            return super.addEdge(startKey, endKey);
        }
        if (this.compiled) {
            console.warn("Adding an edge to a graph that has already been compiled. This will " +
                "not be reflected in the compiled graph.");
        }
        for (const start of startKey) {
            if (start === constants_END) {
                throw new Error("END cannot be a start node");
            }
            if (!Object.keys(this.nodes).some((node) => node === start)) {
                throw new Error(`Need to add a node named "${start}" first`);
            }
        }
        if (endKey === constants_END) {
            throw new Error("END cannot be an end node");
        }
        if (!Object.keys(this.nodes).some((node) => node === endKey)) {
            throw new Error(`Need to add a node named "${endKey}" first`);
        }
        this.waitingEdges.add([startKey, endKey]);
        return this;
    }
    compile({ checkpointer, store, interruptBefore, interruptAfter, name, } = {}) {
        // validate the graph
        this.validate([
            ...(Array.isArray(interruptBefore) ? interruptBefore : []),
            ...(Array.isArray(interruptAfter) ? interruptAfter : []),
        ]);
        // prepare output channels
        const outputKeys = Object.keys(this._schemaDefinitions.get(this._outputDefinition));
        const outputChannels = outputKeys.length === 1 && outputKeys[0] === ROOT ? ROOT : outputKeys;
        const streamKeys = Object.keys(this.channels);
        const streamChannels = streamKeys.length === 1 && streamKeys[0] === ROOT ? ROOT : streamKeys;
        // create empty compiled graph
        const compiled = new CompiledStateGraph({
            builder: this,
            checkpointer,
            interruptAfter,
            interruptBefore,
            autoValidate: false,
            nodes: {},
            channels: {
                ...this.channels,
                [constants_START]: new EphemeralValue(),
            },
            inputChannels: constants_START,
            outputChannels,
            streamChannels,
            streamMode: "updates",
            store,
            name,
        });
        // attach nodes, edges and branches
        compiled.attachNode(constants_START);
        for (const [key, node] of Object.entries(this.nodes)) {
            compiled.attachNode(key, node);
        }
        compiled.attachBranch(constants_START, SELF, _getControlBranch(), {
            withReader: false,
        });
        for (const [key] of Object.entries(this.nodes)) {
            compiled.attachBranch(key, SELF, _getControlBranch(), {
                withReader: false,
            });
        }
        for (const [start, end] of this.edges) {
            compiled.attachEdge(start, end);
        }
        for (const [starts, end] of this.waitingEdges) {
            compiled.attachEdge(starts, end);
        }
        for (const [start, branches] of Object.entries(this.branches)) {
            for (const [name, branch] of Object.entries(branches)) {
                compiled.attachBranch(start, name, branch);
            }
        }
        return compiled.validate();
    }
}
function _getChannels(schema) {
    const channels = {};
    for (const [name, val] of Object.entries(schema)) {
        if (name === ROOT) {
            channels[name] = getChannel(val);
        }
        else {
            const key = name;
            channels[name] = getChannel(val);
        }
    }
    return channels;
}
/**
 * Final result from building and compiling a {@link StateGraph}.
 * Should not be instantiated directly, only using the StateGraph `.compile()`
 * instance method.
 */
class CompiledStateGraph extends CompiledGraph {
    attachNode(key, node) {
        let outputKeys;
        if (key === constants_START) {
            // Get input schema keys excluding managed values
            outputKeys = Object.entries(this.builder._schemaDefinitions.get(this.builder._inputDefinition))
                .filter(([_, v]) => !isConfiguredManagedValue(v))
                .map(([k]) => k);
        }
        else {
            outputKeys = Object.keys(this.builder.channels);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function _getRoot(input) {
            if (isCommand(input)) {
                if (input.graph === Command.PARENT) {
                    return null;
                }
                return input._updateAsTuples();
            }
            else if (Array.isArray(input) &&
                input.length > 0 &&
                input.some((i) => isCommand(i))) {
                const updates = [];
                for (const i of input) {
                    if (isCommand(i)) {
                        if (i.graph === Command.PARENT) {
                            continue;
                        }
                        updates.push(...i._updateAsTuples());
                    }
                    else {
                        updates.push([ROOT, i]);
                    }
                }
                return updates;
            }
            else if (input != null) {
                return [[ROOT, input]];
            }
            return null;
        }
        // to avoid name collision below
        const nodeKey = key;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function _getUpdates(input) {
            if (!input) {
                return null;
            }
            else if (isCommand(input)) {
                if (input.graph === Command.PARENT) {
                    return null;
                }
                return input._updateAsTuples().filter(([k]) => outputKeys.includes(k));
            }
            else if (Array.isArray(input) &&
                input.length > 0 &&
                input.some(isCommand)) {
                const updates = [];
                for (const item of input) {
                    if (isCommand(item)) {
                        if (item.graph === Command.PARENT) {
                            continue;
                        }
                        updates.push(...item._updateAsTuples().filter(([k]) => outputKeys.includes(k)));
                    }
                    else {
                        const itemUpdates = _getUpdates(item);
                        if (itemUpdates) {
                            updates.push(...(itemUpdates ?? []));
                        }
                    }
                }
                return updates;
            }
            else if (typeof input === "object" && !Array.isArray(input)) {
                return Object.entries(input).filter(([k]) => outputKeys.includes(k));
            }
            else {
                const typeofInput = Array.isArray(input) ? "array" : typeof input;
                throw new InvalidUpdateError(`Expected node "${nodeKey.toString()}" to return an object or an array containing at least one Command object, received ${typeofInput}`, {
                    lc_error_code: "INVALID_GRAPH_NODE_RETURN_VALUE",
                });
            }
        }
        const stateWriteEntries = [
            {
                value: PASSTHROUGH,
                mapper: new RunnableCallable({
                    func: outputKeys.length && outputKeys[0] === ROOT
                        ? _getRoot
                        : _getUpdates,
                    trace: false,
                    recurse: false,
                }),
            },
        ];
        // add node and output channel
        if (key === constants_START) {
            this.nodes[key] = new PregelNode({
                tags: [TAG_HIDDEN],
                triggers: [constants_START],
                channels: [constants_START],
                writers: [new ChannelWrite(stateWriteEntries, [TAG_HIDDEN])],
            });
        }
        else {
            const inputDefinition = node?.input ?? this.builder._schemaDefinition;
            const inputValues = Object.fromEntries(Object.keys(this.builder._schemaDefinitions.get(inputDefinition)).map((k) => [k, k]));
            const isSingleInput = Object.keys(inputValues).length === 1 && ROOT in inputValues;
            this.channels[key] = new EphemeralValue(false);
            this.nodes[key] = new PregelNode({
                triggers: [],
                // read state keys
                channels: isSingleInput ? Object.keys(inputValues) : inputValues,
                // publish to this channel and state keys
                writers: [
                    new ChannelWrite(stateWriteEntries.concat({ channel: key, value: key }), [TAG_HIDDEN]),
                ],
                mapper: isSingleInput
                    ? undefined
                    : // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (input) => {
                            return Object.fromEntries(Object.entries(input).filter(([k]) => k in inputValues));
                        },
                bound: node?.runnable,
                metadata: node?.metadata,
                retryPolicy: node?.retryPolicy,
                subgraphs: node?.subgraphs,
                ends: node?.ends,
            });
        }
    }
    attachEdge(start, end) {
        if (end === constants_END) {
            return;
        }
        if (Array.isArray(start)) {
            const channelName = `join:${start.join("+")}:${end}`;
            // register channel
            this.channels[channelName] =
                new NamedBarrierValue(new Set(start));
            // subscribe to channel
            this.nodes[end].triggers.push(channelName);
            // publish to channel
            for (const s of start) {
                this.nodes[s].writers.push(new ChannelWrite([{ channel: channelName, value: s }], [TAG_HIDDEN]));
            }
        }
        else if (start === constants_START) {
            const channelName = `${constants_START}:${end}`;
            // register channel
            this.channels[channelName] =
                new EphemeralValue();
            // subscribe to channel
            this.nodes[end].triggers.push(channelName);
            // publish to channel
            this.nodes[constants_START].writers.push(new ChannelWrite([{ channel: channelName, value: constants_START }], [TAG_HIDDEN]));
        }
        else {
            this.nodes[end].triggers.push(start);
        }
    }
    attachBranch(start, name, branch, options = { withReader: true }) {
        const branchWriter = async (packets, config) => {
            const filteredPackets = packets.filter((p) => p !== constants_END);
            if (!filteredPackets.length) {
                return;
            }
            const writes = filteredPackets.map((p) => {
                if (_isSend(p)) {
                    return p;
                }
                return {
                    channel: `branch:${start}:${name}:${p}`,
                    value: start,
                };
            });
            await ChannelWrite.doWrite({ ...config, tags: (config.tags ?? []).concat([TAG_HIDDEN]) }, writes);
        };
        // attach branch publisher
        this.nodes[start].writers.push(branch.run(branchWriter, 
        // reader
        options.withReader
            ? (config) => ChannelRead.doRead(config, this.streamChannels ?? this.outputChannels, true)
            : undefined));
        // attach branch subscribers
        const ends = branch.ends
            ? Object.values(branch.ends)
            : Object.keys(this.builder.nodes);
        for (const end of ends) {
            if (end === constants_END) {
                continue;
            }
            const channelName = `branch:${start}:${name}:${end}`;
            this.channels[channelName] =
                new EphemeralValue(false);
            this.nodes[end].triggers.push(channelName);
        }
    }
}
function isStateDefinition(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        !Array.isArray(obj) &&
        Object.keys(obj).length > 0 &&
        Object.values(obj).every((v) => typeof v === "function" || isBaseChannel(v)));
}
function isAnnotationRoot(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        "lc_graph_name" in obj &&
        obj.lc_graph_name === "AnnotationRoot");
}
function isStateGraphArgs(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        obj.channels !== undefined);
}
function isStateGraphArgsWithStateSchema(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        obj.stateSchema !== undefined);
}
function isStateGraphArgsWithInputOutputSchemas(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        obj.stateSchema === undefined &&
        obj.input !== undefined &&
        obj.output !== undefined);
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function _controlBranch(value) {
    if (_isSend(value)) {
        return [value];
    }
    const commands = [];
    if (isCommand(value)) {
        commands.push(value);
    }
    else if (Array.isArray(value) && value.every(isCommand)) {
        commands.push(...value);
    }
    else {
        return [];
    }
    const destinations = [];
    for (const command of commands) {
        if (command.graph === Command.PARENT) {
            throw new ParentCommand(command);
        }
        if (_isSend(command.goto) || typeof command.goto === "string") {
            destinations.push(command.goto);
        }
        else {
            destinations.push(...command.goto);
        }
    }
    return destinations;
}
function _getControlBranch() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const CONTROL_BRANCH_PATH = new RunnableCallable({
        func: _controlBranch,
        tags: [TAG_HIDDEN],
        trace: false,
        recurse: false,
        name: "<control_branch>",
    });
    return new Branch({
        path: CONTROL_BRANCH_PATH,
    });
}
//# sourceMappingURL=state.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/graph/message.js



/**
 * Prebuilt reducer that combines returned messages.
 * Can handle standard messages and special modifiers like {@link RemoveMessage}
 * instances.
 */
function messagesStateReducer(left, right) {
    const leftArray = Array.isArray(left) ? left : [left];
    const rightArray = Array.isArray(right) ? right : [right];
    // coerce to message
    const leftMessages = leftArray.map(dist_messages.coerceMessageLikeToMessage);
    const rightMessages = rightArray.map(dist_messages.coerceMessageLikeToMessage);
    // assign missing ids
    for (const m of leftMessages) {
        if (m.id === null || m.id === undefined) {
            m.id = (0,wrapper.v4)();
            m.lc_kwargs.id = m.id;
        }
    }
    for (const m of rightMessages) {
        if (m.id === null || m.id === undefined) {
            m.id = (0,wrapper.v4)();
            m.lc_kwargs.id = m.id;
        }
    }
    // merge
    const merged = [...leftMessages];
    const mergedById = new Map(merged.map((m, i) => [m.id, i]));
    const idsToRemove = new Set();
    for (const m of rightMessages) {
        const existingIdx = mergedById.get(m.id);
        if (existingIdx !== undefined) {
            if (m._getType() === "remove") {
                idsToRemove.add(m.id);
            }
            else {
                idsToRemove.delete(m.id);
                merged[existingIdx] = m;
            }
        }
        else {
            if (m._getType() === "remove") {
                throw new Error(`Attempting to delete a message with an ID that doesn't exist ('${m.id}')`);
            }
            mergedById.set(m.id, merged.length);
            merged.push(m);
        }
    }
    return merged.filter((m) => !idsToRemove.has(m.id));
}
/** @ignore */
class MessageGraph extends state_StateGraph {
    constructor() {
        super({
            channels: {
                __root__: {
                    reducer: messagesStateReducer,
                    default: () => [],
                },
            },
        });
    }
}
//# sourceMappingURL=message.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/graph/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/managed/is_last_step.js


class IsLastStepManager extends (/* unused pure expression or super */ null && (ManagedValue)) {
    call(step) {
        return step === (this.config.recursionLimit ?? RECURSION_LIMIT_DEFAULT) - 1;
    }
}
//# sourceMappingURL=is_last_step.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/managed/shared_value.js
/* eslint-disable @typescript-eslint/no-explicit-any */


class SharedValue extends WritableManagedValue {
    constructor(config, params) {
        super(config, params);
        Object.defineProperty(this, "scope", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "store", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "ns", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        this.scope = params.scope;
        this.store = config.store || null;
        if (!this.store) {
            this.ns = null;
        }
        else if (config.configurable?.[this.scope]) {
            const scopeValue = config.configurable[this.scope];
            const scopedValueString = typeof scopeValue === "string"
                ? scopeValue
                : JSON.stringify(scopeValue);
            this.ns = ["scoped", this.scope, params.key, scopedValueString];
        }
        else {
            throw new Error(`Required scope "${this.scope}" for shared state key was not passed in "config.configurable".`);
        }
    }
    static async initialize(config, args) {
        const instance = new this(config, args);
        await instance.loadStore();
        return instance;
    }
    static on(scope) {
        return {
            cls: SharedValue,
            params: {
                scope,
                key: ChannelKeyPlaceholder,
            },
        };
    }
    call(_step) {
        return { ...this.value };
    }
    processUpdate(values) {
        const writes = [];
        for (const vv of values) {
            for (const [k, v] of Object.entries(vv)) {
                if (v === null) {
                    if (k in this.value) {
                        delete this.value[k];
                        if (this.ns) {
                            writes.push({ namespace: this.ns, key: k, value: null });
                        }
                    }
                }
                else if (typeof v !== "object" || v === null) {
                    throw new InvalidUpdateError("Received a non-object value");
                }
                else {
                    this.value[k] = v;
                    if (this.ns) {
                        writes.push({ namespace: this.ns, key: k, value: v });
                    }
                }
            }
        }
        return writes;
    }
    async update(values) {
        if (!this.store) {
            this.processUpdate(values);
        }
        else {
            await this.store.batch(this.processUpdate(values));
        }
    }
    async loadStore() {
        if (this.store && this.ns) {
            const saved = await this.store.search(this.ns);
            this.value = saved.reduce((acc, item) => {
                acc[item.key] = item.value;
                return acc;
            }, {});
        }
        return false;
    }
}
//# sourceMappingURL=shared_value.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/managed/index.js



//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/func/index.js








/**
 * Define a LangGraph task using the `task` function.
 *
 * Tasks can only be called from within an {@link entrypoint} or from within a StateGraph.
 * A task can be called like a regular function with the following differences:
 *
 * - When a checkpointer is enabled, the function inputs and outputs must be serializable.
 * - The wrapped function can only be called from within an entrypoint or StateGraph.
 * - Calling the function produces a promise. This makes it easy to parallelize tasks.
 *
 * @typeParam ArgsT - The type of arguments the task function accepts
 * @typeParam OutputT - The type of value the task function returns
 * @param optionsOrName - Either an {@link TaskOptions} object, or a string for the name of the task
 * @param func - The function that executes this task
 * @returns A proxy function that accepts the same arguments as the original and always returns the result as a Promise
 *
 * @example basic example
 * ```typescript
 * const addOne = task("add", async (a: number) => a + 1);
 *
 * const workflow = entrypoint("example", async (numbers: number[]) => {
 *   const promises = numbers.map(n => addOne(n));
 *   const results = await Promise.all(promises);
 *   return results;
 * });
 *
 * // Call the entrypoint
 * await workflow.invoke([1, 2, 3]); // Returns [2, 3, 4]
 * ```
 *
 * @example using a retry policy
 * ```typescript
 * const addOne = task({
 *     name: "add",
 *     retry: { maxAttempts: 3 }
 *   },
 *   async (a: number) => a + 1
 * );
 *
 * const workflow = entrypoint("example", async (numbers: number[]) => {
 *   const promises = numbers.map(n => addOne(n));
 *   const results = await Promise.all(promises);
 *   return results;
 * });
 * ```
 */
function task(optionsOrName, func) {
    const { name, retry } = typeof optionsOrName === "string"
        ? { name: optionsOrName, retry: undefined }
        : optionsOrName;
    if (isAsyncGeneratorFunction(func) || isGeneratorFunction(func)) {
        throw new Error("Generators are disallowed as tasks. For streaming responses, use config.write.");
    }
    return (...args) => {
        return call({ func, name, retry }, ...args);
    };
}
/**
 * Define a LangGraph workflow using the `entrypoint` function.
 *
 * ### Function signature
 *
 * The wrapped function must accept at most **two parameters**. The first parameter
 * is the input to the function. The second (optional) parameter is a
 * {@link LangGraphRunnableConfig} object. If you wish to pass multiple parameters to
 * the function, you can pass them as an object.
 *
 * ### Helper functions
 *
 * #### Streaming
 * To write data to the "custom" stream, use the {@link getWriter} function, or the
 * {@link LangGraphRunnableConfig.writer} property.
 *
 * #### State management
 * The {@link getPreviousState} function can be used to access the previous state
 * that was returned from the last invocation of the entrypoint on the same thread id.
 *
 * If you wish to save state other than the return value, you can use the
 * {@link entrypoint.final} function.
 *
 * @typeParam InputT - The type of input the entrypoint accepts
 * @typeParam OutputT - The type of output the entrypoint produces
 * @param optionsOrName - Either an {@link EntrypointOptions} object, or a string for the name of the entrypoint
 * @param func - The function that executes this entrypoint
 * @returns A {@link Pregel} instance that can be run to execute the workflow
 *
 * @example Using entrypoint and tasks
 * ```typescript
 * import { task, entrypoint } from "@langchain/langgraph";
 * import { MemorySaver } from "@langchain/langgraph-checkpoint";
 * import { interrupt, Command } from "@langchain/langgraph";
 *
 * const composeEssay = task("compose", async (topic: string) => {
 *   await new Promise(r => setTimeout(r, 1000)); // Simulate slow operation
 *   return `An essay about ${topic}`;
 * });
 *
 * const reviewWorkflow = entrypoint({
 *   name: "review",
 *   checkpointer: new MemorySaver()
 * }, async (topic: string) => {
 *   const essay = await composeEssay(topic);
 *   const humanReview = await interrupt({
 *     question: "Please provide a review",
 *     essay
 *   });
 *   return {
 *     essay,
 *     review: humanReview
 *   };
 * });
 *
 * // Example configuration for the workflow
 * const config = {
 *   configurable: {
 *     thread_id: "some_thread"
 *   }
 * };
 *
 * // Topic for the essay
 * const topic = "cats";
 *
 * // Stream the workflow to generate the essay and await human review
 * for await (const result of reviewWorkflow.stream(topic, config)) {
 *   console.log(result);
 * }
 *
 * // Example human review provided after the interrupt
 * const humanReview = "This essay is great.";
 *
 * // Resume the workflow with the provided human review
 * for await (const result of reviewWorkflow.stream(new Command({ resume: humanReview }), config)) {
 *   console.log(result);
 * }
 * ```
 *
 * @example Accessing the previous return value
 * ```typescript
 * import { entrypoint, getPreviousState } from "@langchain/langgraph";
 * import { MemorySaver } from "@langchain/langgraph-checkpoint";
 *
 * const accumulator = entrypoint({
 *   name: "accumulator",
 *   checkpointer: new MemorySaver()
 * }, async (input: string) => {
 *   const previous = getPreviousState<number>();
 *   return previous !== undefined ? `${previous } ${input}` : input;
 * });
 *
 * const config = {
 *   configurable: {
 *     thread_id: "some_thread"
 *   }
 * };
 * await accumulator.invoke("hello", config); // returns "hello"
 * await accumulator.invoke("world", config); // returns "hello world"
 * ```
 *
 * @example Using entrypoint.final to save a value
 * ```typescript
 * import { entrypoint, getPreviousState } from "@langchain/langgraph";
 * import { MemorySaver } from "@langchain/langgraph-checkpoint";
 *
 * const myWorkflow = entrypoint({
 *   name: "accumulator",
 *   checkpointer: new MemorySaver()
 * }, async (num: number) => {
 *   const previous = getPreviousState<number>();
 *
 *   // This will return the previous value to the caller, saving
 *   // 2 * num to the checkpoint, which will be used in the next invocation
 *   // for the `previous` parameter.
 *   return entrypoint.final({
 *     value: previous ?? 0,
 *     save: 2 * num
 *   });
 * });
 *
 * const config = {
 *   configurable: {
 *     thread_id: "some_thread"
 *   }
 * };
 *
 * await myWorkflow.invoke(3, config); // 0 (previous was undefined)
 * await myWorkflow.invoke(1, config); // 6 (previous was 3 * 2 from the previous invocation)
 * ```
 */
const entrypoint = function entrypoint(optionsOrName, func) {
    const { name, checkpointer, store } = typeof optionsOrName === "string"
        ? { name: optionsOrName, checkpointer: undefined, store: undefined }
        : optionsOrName;
    if (utils_isAsyncGeneratorFunction(func) || utils_isGeneratorFunction(func)) {
        throw new Error("Generators are disallowed as entrypoints. For streaming responses, use config.write.");
    }
    const streamMode = "updates";
    const bound = getRunnableForEntrypoint(name, func);
    return new Pregel({
        name,
        checkpointer,
        nodes: {
            [name]: new PregelNode({
                bound,
                triggers: [constants_START],
                channels: [constants_START],
                writers: [],
            }),
        },
        channels: {
            [constants_START]: new EphemeralValue(),
            [constants_END]: new LastValue(),
            [PREVIOUS]: new LastValue(),
        },
        inputChannels: constants_START,
        outputChannels: constants_END,
        streamChannels: constants_END,
        streamMode,
        store,
    });
};
// documented by the EntrypointFunction interface
entrypoint.final = function final({ value, save, }) {
    return { value, save, __lg_type: "__pregel_final" };
};
/**
 * A helper utility function for use with the functional API that returns the previous
 * state from the checkpoint from the last invocation of the current thread.
 *
 * This function allows workflows to access state that was saved in previous runs
 * using {@link entrypoint.final}.
 *
 * @typeParam StateT - The type of the state that was previously saved
 * @returns The previous saved state from the last invocation of the current thread
 *
 * @example
 * ```typescript
 * const previousState = getPreviousState<{ counter: number }>();
 * const newCount = (previousState?.counter ?? 0) + 1;
 * ```
 */
function getPreviousState() {
    const config = AsyncLocalStorageProviderSingleton.getRunnableConfig();
    return config.configurable?.[CONFIG_KEY_PREVIOUS_STATE];
}
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/graph/messages_annotation.js
/* __LC_ALLOW_ENTRYPOINT_SIDE_EFFECTS__ */


/**
 * Prebuilt state annotation that combines returned messages.
 * Can handle standard messages and special modifiers like {@link RemoveMessage}
 * instances.
 *
 * Specifically, importing and using the prebuilt MessagesAnnotation like this:
 *
 * @example
 * ```ts
 * import { MessagesAnnotation, StateGraph } from "@langchain/langgraph";
 *
 * const graph = new StateGraph(MessagesAnnotation)
 *   .addNode(...)
 *   ...
 * ```
 *
 * Is equivalent to initializing your state manually like this:
 *
 * @example
 * ```ts
 * import { BaseMessage } from "@langchain/core/messages";
 * import { Annotation, StateGraph, messagesStateReducer } from "@langchain/langgraph";
 *
 * export const StateAnnotation = Annotation.Root({
 *   messages: Annotation<BaseMessage[]>({
 *     reducer: messagesStateReducer,
 *     default: () => [],
 *   }),
 * });
 *
 * const graph = new StateGraph(StateAnnotation)
 *   .addNode(...)
 *   ...
 * ```
 */
const MessagesAnnotation = Annotation.Root({
    messages: Annotation({
        reducer: messagesStateReducer,
        default: () => [],
    }),
});
//# sourceMappingURL=messages_annotation.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/web.js








//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/interrupt.js



/**
 * Interrupts the execution of a graph node.
 * This function can be used to pause execution of a node, and return the value of the `resume`
 * input when the graph is re-invoked using `Command`.
 * Multiple interrupts can be called within a single node, and each will be handled sequentially.
 *
 * When an interrupt is called:
 * 1. If there's a `resume` value available (from a previous `Command`), it returns that value.
 * 2. Otherwise, it throws a `GraphInterrupt` with the provided value
 * 3. The graph can be resumed by passing a `Command` with a `resume` value
 *
 * @param value - The value to include in the interrupt. This will be available in task.interrupts[].value
 * @returns The `resume` value provided when the graph is re-invoked with a Command
 *
 * @example
 * ```typescript
 * // Define a node that uses multiple interrupts
 * const nodeWithInterrupts = () => {
 *   // First interrupt - will pause execution and include {value: 1} in task values
 *   const answer1 = interrupt({ value: 1 });
 *
 *   // Second interrupt - only called after first interrupt is resumed
 *   const answer2 = interrupt({ value: 2 });
 *
 *   // Use the resume values
 *   return { myKey: answer1 + " " + answer2 };
 * };
 *
 * // Resume the graph after first interrupt
 * await graph.stream(new Command({ resume: "answer 1" }));
 *
 * // Resume the graph after second interrupt
 * await graph.stream(new Command({ resume: "answer 2" }));
 * // Final result: { myKey: "answer 1 answer 2" }
 * ```
 *
 * @throws {Error} If called outside the context of a graph
 * @throws {GraphInterrupt} When no resume value is available
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function interrupt(value) {
    const config = AsyncLocalStorageProviderSingleton.getRunnableConfig();
    if (!config) {
        throw new Error("Called interrupt() outside the context of a graph.");
    }
    const conf = config.configurable;
    if (!conf) {
        throw new Error("No configurable found in config");
    }
    // Track interrupt index
    const scratchpad = conf[CONFIG_KEY_SCRATCHPAD];
    scratchpad.interruptCounter += 1;
    const idx = scratchpad.interruptCounter;
    // Find previous resume values
    if (scratchpad.resume.length > 0 && idx < scratchpad.resume.length) {
        return scratchpad.resume[idx];
    }
    // Find current resume value
    if (scratchpad.nullResume !== undefined) {
        if (scratchpad.resume.length !== idx) {
            throw new Error(`Resume length mismatch: ${scratchpad.resume.length} !== ${idx}`);
        }
        const v = scratchpad.nullResume;
        delete scratchpad.nullResume;
        scratchpad.resume.push(v);
        const send = conf[CONFIG_KEY_SEND];
        if (send) {
            send([[RESUME, scratchpad.resume]]);
        }
        return v;
    }
    // No resume value found
    throw new GraphInterrupt([
        {
            value,
            when: "during",
            resumable: true,
            ns: conf[CONFIG_KEY_CHECKPOINT_NS]?.split(CHECKPOINT_NAMESPACE_SEPARATOR),
        },
    ]);
}
//# sourceMappingURL=interrupt.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/index.js
/* __LC_ALLOW_ENTRYPOINT_SIDE_EFFECTS__ */

// Initialize global async local storage instance for tracing
initializeAsyncLocalStorageSingleton();




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/index.js

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/prebuilt/tool_executor.js

const INVALID_TOOL_MSG_TEMPLATE = `{requestedToolName} is not a valid tool, try one of {availableToolNamesString}.`;
/** @deprecated Use {@link ToolNode} instead. */
class tool_executor_ToolExecutor extends runnables_base/* RunnableBinding */.fJ {
    constructor(fields) {
        const fieldsWithDefaults = {
            invalidToolMsgTemplate: INVALID_TOOL_MSG_TEMPLATE,
            ...fields,
        };
        const bound = runnables_base/* RunnableLambda */.jY.from(async (input, config) => this._execute(input, config));
        super({
            bound,
            config: {},
        });
        Object.defineProperty(this, "lc_graph_name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: "ToolExecutor"
        });
        Object.defineProperty(this, "tools", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toolMap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "invalidToolMsgTemplate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.tools = fieldsWithDefaults.tools;
        this.invalidToolMsgTemplate = fieldsWithDefaults.invalidToolMsgTemplate;
        this.toolMap = this.tools.reduce((acc, tool) => {
            acc[tool.name] = tool;
            return acc;
        }, {});
    }
    /**
     * Execute a tool invocation
     *
     * @param {ToolInvocationInterface} toolInvocation The tool to invoke and the input to pass to it.
     * @param {RunnableConfig | undefined} config Optional configuration to pass to the tool when invoked.
     * @returns Either the result of the tool invocation (`string` or `ToolMessage`, set by the `ToolOutput` generic) or a string error message.
     */
    async _execute(toolInvocation, config) {
        if (!(toolInvocation.tool in this.toolMap)) {
            return this.invalidToolMsgTemplate
                .replace("{requestedToolName}", toolInvocation.tool)
                .replace("{availableToolNamesString}", Object.keys(this.toolMap).join(", "));
        }
        else {
            const tool = this.toolMap[toolInvocation.tool];
            const output = await tool.invoke(toolInvocation.toolInput, config);
            return output;
        }
    }
}
//# sourceMappingURL=tool_executor.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/prebuilt/agent_executor.js



/** @ignore */
function createAgentExecutor({ agentRunnable, tools, }) {
    let toolExecutor;
    if (!Array.isArray(tools)) {
        toolExecutor = tools;
    }
    else {
        toolExecutor = new ToolExecutor({
            tools,
        });
    }
    // Define logic that will be used to determine which conditional edge to go down
    const shouldContinue = (data) => {
        if (data.agentOutcome && "returnValues" in data.agentOutcome) {
            return "end";
        }
        return "continue";
    };
    const runAgent = async (data, config) => {
        const agentOutcome = await agentRunnable.invoke(data, config);
        return {
            agentOutcome,
        };
    };
    const executeTools = async (data, config) => {
        const agentAction = data.agentOutcome;
        if (!agentAction || "returnValues" in agentAction) {
            throw new Error("Agent has not been run yet");
        }
        const output = await toolExecutor.invoke(agentAction, config);
        return {
            steps: [{ action: agentAction, observation: output }],
        };
    };
    // Define a new graph
    const workflow = new StateGraph({
        channels: {
            input: null,
            agentOutcome: null,
            steps: {
                reducer: (x, y) => x.concat(y),
                default: () => [],
            },
        },
    })
        // Define the two nodes we will cycle between
        .addNode("agent", runAgent)
        .addNode("action", executeTools)
        // Set the entrypoint as `agent`
        // This means that this node is the first one called
        .addEdge(START, "agent")
        // We now add a conditional edge
        .addConditionalEdges(
    // First, we define the start node. We use `agent`.
    // This means these are the edges taken after the `agent` node is called.
    "agent", 
    // Next, we pass in the function that will determine which node is called next.
    shouldContinue, 
    // Finally we pass in a mapping.
    // The keys are strings, and the values are other nodes.
    // END is a special node marking that the graph should finish.
    // What will happen is we will call `should_continue`, and then the output of that
    // will be matched against the keys in this mapping.
    // Based on which one it matches, that node will then be called.
    {
        // If `tools`, then we call the tool node.
        continue: "action",
        // Otherwise we finish.
        end: END,
    })
        // We now add a normal edge from `tools` to `agent`.
        // This means that after `tools` is called, `agent` node is called next.
        .addEdge("action", "agent");
    return workflow.compile();
}
//# sourceMappingURL=agent_executor.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/core/utils/function_calling.js

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/prebuilt/chat_agent_executor.js






/** @deprecated Use {@link createReactAgent} instead with tool calling. */
function createFunctionCallingExecutor({ model, tools, }) {
    let toolExecutor;
    let toolClasses;
    if (!Array.isArray(tools)) {
        toolExecutor = tools;
        toolClasses = tools.tools;
    }
    else {
        toolExecutor = new ToolExecutor({
            tools,
        });
        toolClasses = tools;
    }
    if (!("bind" in model) || typeof model.bind !== "function") {
        throw new Error("Model must be bindable");
    }
    const toolsAsOpenAIFunctions = toolClasses.map((tool) => convertToOpenAIFunction(tool));
    const newModel = model.bind({
        functions: toolsAsOpenAIFunctions,
    });
    // Define the function that determines whether to continue or not
    const shouldContinue = (state) => {
        const { messages } = state;
        const lastMessage = messages[messages.length - 1];
        // If there is no function call, then we finish
        if (!("function_call" in lastMessage.additional_kwargs) ||
            !lastMessage.additional_kwargs.function_call) {
            return "end";
        }
        // Otherwise if there is, we continue
        return "continue";
    };
    // Define the function that calls the model
    const callModel = async (state, config) => {
        const { messages } = state;
        const response = await newModel.invoke(messages, config);
        // We return a list, because this will get added to the existing list
        return {
            messages: [response],
        };
    };
    // Define the function to execute tools
    const _getAction = (state) => {
        const { messages } = state;
        // Based on the continue condition
        // we know the last message involves a function call
        const lastMessage = messages[messages.length - 1];
        if (!lastMessage) {
            throw new Error("No messages found.");
        }
        if (!lastMessage.additional_kwargs.function_call) {
            throw new Error("No function call found in message.");
        }
        // We construct an AgentAction from the function_call
        return {
            tool: lastMessage.additional_kwargs.function_call.name,
            toolInput: JSON.stringify(lastMessage.additional_kwargs.function_call.arguments),
            log: "",
        };
    };
    const callTool = async (state, config) => {
        const action = _getAction(state);
        // We call the tool_executor and get back a response
        const response = await toolExecutor.invoke(action, config);
        // We use the response to create a FunctionMessage
        const functionMessage = new FunctionMessage({
            content: response,
            name: action.tool,
        });
        // We return a list, because this will get added to the existing list
        return { messages: [functionMessage] };
    };
    // We create the AgentState that we will pass around
    // This simply involves a list of messages
    // We want steps to return messages to append to the list
    // So we annotate the messages attribute with operator.add
    const schema = {
        messages: {
            value: (x, y) => x.concat(y),
            default: () => [],
        },
    };
    // Define a new graph
    const workflow = new StateGraph({
        channels: schema,
    })
        // Define the two nodes we will cycle between
        .addNode("agent", new RunnableLambda({ func: callModel }))
        .addNode("action", new RunnableLambda({ func: callTool }))
        // Set the entrypoint as `agent`
        // This means that this node is the first one called
        .addEdge(START, "agent")
        // We now add a conditional edge
        .addConditionalEdges(
    // First, we define the start node. We use `agent`.
    // This means these are the edges taken after the `agent` node is called.
    "agent", 
    // Next, we pass in the function that will determine which node is called next.
    shouldContinue, 
    // Finally we pass in a mapping.
    // The keys are strings, and the values are other nodes.
    // END is a special node marking that the graph should finish.
    // What will happen is we will call `should_continue`, and then the output of that
    // will be matched against the keys in this mapping.
    // Based on which one it matches, that node will then be called.
    {
        // If `tools`, then we call the tool node.
        continue: "action",
        // Otherwise we finish.
        end: END,
    })
        // We now add a normal edge from `tools` to `agent`.
        // This means that after `tools` is called, `agent` node is called next.
        .addEdge("action", "agent");
    // Finally, we compile it!
    // This compiles it into a LangChain Runnable,
    // meaning you can use it as you would any other runnable
    return workflow.compile();
}
//# sourceMappingURL=chat_agent_executor.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/prebuilt/tool_node.js




/**
 * A node that runs the tools requested in the last AIMessage. It can be used
 * either in StateGraph with a "messages" key or in MessageGraph. If multiple
 * tool calls are requested, they will be run in parallel. The output will be
 * a list of ToolMessages, one for each tool call.
 *
 * @example
 * ```ts
 * import { ToolNode } from "@langchain/langgraph/prebuilt";
 * import { tool } from "@langchain/core/tools";
 * import { z } from "zod";
 * import { AIMessage } from "@langchain/core/messages";
 *
 * const getWeather = tool((input) => {
 *   if (["sf", "san francisco"].includes(input.location.toLowerCase())) {
 *     return "It's 60 degrees and foggy.";
 *   } else {
 *     return "It's 90 degrees and sunny.";
 *   }
 * }, {
 *   name: "get_weather",
 *   description: "Call to get the current weather.",
 *   schema: z.object({
 *     location: z.string().describe("Location to get the weather for."),
 *   }),
 * });
 *
 * const tools = [getWeather];
 * const toolNode = new ToolNode(tools);
 *
 * const messageWithSingleToolCall = new AIMessage({
 *   content: "",
 *   tool_calls: [
 *     {
 *       name: "get_weather",
 *       args: { location: "sf" },
 *       id: "tool_call_id",
 *       type: "tool_call",
 *     }
 *   ]
 * })
 *
 * await toolNode.invoke({ messages: [messageWithSingleToolCall] });
 * // Returns tool invocation responses as:
 * // { messages: ToolMessage[] }
 * ```
 *
 * @example
 * ```ts
 * import {
 *   StateGraph,
 *   MessagesAnnotation,
 * } from "@langchain/langgraph";
 * import { ToolNode } from "@langchain/langgraph/prebuilt";
 * import { tool } from "@langchain/core/tools";
 * import { z } from "zod";
 * import { ChatAnthropic } from "@langchain/anthropic";
 *
 * const getWeather = tool((input) => {
 *   if (["sf", "san francisco"].includes(input.location.toLowerCase())) {
 *     return "It's 60 degrees and foggy.";
 *   } else {
 *     return "It's 90 degrees and sunny.";
 *   }
 * }, {
 *   name: "get_weather",
 *   description: "Call to get the current weather.",
 *   schema: z.object({
 *     location: z.string().describe("Location to get the weather for."),
 *   }),
 * });
 *
 * const tools = [getWeather];
 * const modelWithTools = new ChatAnthropic({
 *   model: "claude-3-haiku-20240307",
 *   temperature: 0
 * }).bindTools(tools);
 *
 * const toolNodeForGraph = new ToolNode(tools)
 *
 * const shouldContinue = (state: typeof MessagesAnnotation.State) => {
 *   const { messages } = state;
 *   const lastMessage = messages[messages.length - 1];
 *   if ("tool_calls" in lastMessage && Array.isArray(lastMessage.tool_calls) && lastMessage.tool_calls?.length) {
 *     return "tools";
 *   }
 *   return "__end__";
 * }
 *
 * const callModel = async (state: typeof MessagesAnnotation.State) => {
 *   const { messages } = state;
 *   const response = await modelWithTools.invoke(messages);
 *   return { messages: response };
 * }
 *
 * const graph = new StateGraph(MessagesAnnotation)
 *   .addNode("agent", callModel)
 *   .addNode("tools", toolNodeForGraph)
 *   .addEdge("__start__", "agent")
 *   .addConditionalEdges("agent", shouldContinue)
 *   .addEdge("tools", "agent")
 *   .compile();
 *
 * const inputs = {
 *   messages: [{ role: "user", content: "what is the weather in SF?" }],
 * };
 *
 * const stream = await graph.stream(inputs, {
 *   streamMode: "values",
 * });
 *
 * for await (const { messages } of stream) {
 *   console.log(messages);
 * }
 * // Returns the messages in the state at each step of execution
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class ToolNode extends RunnableCallable {
    constructor(tools, options) {
        const { name, tags, handleToolErrors } = options ?? {};
        super({ name, tags, func: (input, config) => this.run(input, config) });
        Object.defineProperty(this, "tools", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "handleToolErrors", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: true
        });
        Object.defineProperty(this, "trace", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        this.tools = tools;
        this.handleToolErrors = handleToolErrors ?? this.handleToolErrors;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async run(input, config) {
        const message = Array.isArray(input)
            ? input[input.length - 1]
            : input.messages[input.messages.length - 1];
        if (message?._getType() !== "ai") {
            throw new Error("ToolNode only accepts AIMessages as input.");
        }
        const outputs = await Promise.all(message.tool_calls?.map(async (call) => {
            const tool = this.tools.find((tool) => tool.name === call.name);
            try {
                if (tool === undefined) {
                    throw new Error(`Tool "${call.name}" not found.`);
                }
                const output = await tool.invoke({ ...call, type: "tool_call" }, config);
                if (((0,dist_messages.isBaseMessage)(output) && output._getType() === "tool") ||
                    isCommand(output)) {
                    return output;
                }
                else {
                    return new dist_messages.ToolMessage({
                        name: tool.name,
                        content: typeof output === "string" ? output : JSON.stringify(output),
                        tool_call_id: call.id,
                    });
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            }
            catch (e) {
                if (!this.handleToolErrors) {
                    throw e;
                }
                if (isGraphInterrupt(e.name)) {
                    // `NodeInterrupt` errors are a breakpoint to bring a human into the loop.
                    // As such, they are not recoverable by the agent and shouldn't be fed
                    // back. Instead, re-throw these errors even when `handleToolErrors = true`.
                    throw e;
                }
                return new dist_messages.ToolMessage({
                    content: `Error: ${e.message}\n Please fix your mistakes.`,
                    name: call.name,
                    tool_call_id: call.id ?? "",
                });
            }
        }) ?? []);
        // Preserve existing behavior for non-command tool outputs for backwards compatibility
        if (!outputs.some(isCommand)) {
            return (Array.isArray(input) ? outputs : { messages: outputs });
        }
        // Handle mixed Command and non-Command outputs
        const combinedOutputs = outputs.map((output) => {
            if (isCommand(output)) {
                return output;
            }
            return Array.isArray(input) ? [output] : { messages: [output] };
        });
        return combinedOutputs;
    }
}
function toolsCondition(state) {
    const message = Array.isArray(state)
        ? state[state.length - 1]
        : state.messages[state.messages.length - 1];
    if ("tool_calls" in message &&
        (message.tool_calls?.length ?? 0) > 0) {
        return "tools";
    }
    else {
        return END;
    }
}
//# sourceMappingURL=tool_node.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/prebuilt/react_agent_executor.js







function _convertMessageModifierToPrompt(messageModifier) {
    // Handle string or SystemMessage
    if (typeof messageModifier === "string" ||
        ((0,dist_messages.isBaseMessage)(messageModifier) && messageModifier._getType() === "system")) {
        return messageModifier;
    }
    // Handle callable function
    if (typeof messageModifier === "function") {
        return async (state) => messageModifier(state.messages);
    }
    // Handle Runnable
    if (runnables_base/* Runnable */.YN.isRunnable(messageModifier)) {
        return runnables_base/* RunnableLambda */.jY.from((state) => state.messages).pipe(messageModifier);
    }
    throw new Error(`Unexpected type for messageModifier: ${typeof messageModifier}`);
}
const PROMPT_RUNNABLE_NAME = "prompt";
function _getPromptRunnable(prompt) {
    let promptRunnable;
    if (prompt == null) {
        promptRunnable = runnables_base/* RunnableLambda */.jY.from((state) => state.messages).withConfig({ runName: PROMPT_RUNNABLE_NAME });
    }
    else if (typeof prompt === "string") {
        const systemMessage = new dist_messages.SystemMessage(prompt);
        promptRunnable = runnables_base/* RunnableLambda */.jY.from((state) => {
            return [systemMessage, ...(state.messages ?? [])];
        }).withConfig({ runName: PROMPT_RUNNABLE_NAME });
    }
    else if ((0,dist_messages.isBaseMessage)(prompt) && prompt._getType() === "system") {
        promptRunnable = runnables_base/* RunnableLambda */.jY.from((state) => [prompt, ...state.messages]).withConfig({ runName: PROMPT_RUNNABLE_NAME });
    }
    else if (typeof prompt === "function") {
        promptRunnable = runnables_base/* RunnableLambda */.jY.from(prompt).withConfig({
            runName: PROMPT_RUNNABLE_NAME,
        });
    }
    else if (runnables_base/* Runnable */.YN.isRunnable(prompt)) {
        promptRunnable = prompt;
    }
    else {
        throw new Error(`Got unexpected type for 'prompt': ${typeof prompt}`);
    }
    return promptRunnable;
}
function _getPrompt(prompt, stateModifier, messageModifier) {
    // Check if multiple modifiers exist
    const definedCount = [prompt, stateModifier, messageModifier].filter((x) => x != null).length;
    if (definedCount > 1) {
        throw new Error("Expected only one of prompt, stateModifier, or messageModifier, got multiple values");
    }
    let finalPrompt = prompt;
    if (stateModifier != null) {
        finalPrompt = stateModifier;
    }
    else if (messageModifier != null) {
        finalPrompt = _convertMessageModifierToPrompt(messageModifier);
    }
    return _getPromptRunnable(finalPrompt);
}
function _shouldBindTools(llm, tools) {
    if (!runnables_base/* Runnable */.YN.isRunnable(llm) || !("kwargs" in llm)) {
        return true;
    }
    if (!llm.kwargs ||
        typeof llm.kwargs !== "object" ||
        !("tools" in llm.kwargs)) {
        return true;
    }
    const boundTools = llm.kwargs.tools;
    if (tools.length !== boundTools.length) {
        throw new Error("Number of tools in the model.bindTools() and tools passed to createReactAgent must match");
    }
    const toolNames = new Set(tools.map((tool) => tool.name));
    const boundToolNames = new Set();
    for (const boundTool of boundTools) {
        let boundToolName;
        // OpenAI-style tool
        if ("type" in boundTool && boundTool.type === "function") {
            boundToolName = boundTool.function.name;
        }
        // Anthropic-style tool
        else if ("name" in boundTool) {
            boundToolName = boundTool.name;
        }
        // unknown tool type so we'll ignore it
        else {
            continue;
        }
        boundToolNames.add(boundToolName);
    }
    const missingTools = [...toolNames].filter((x) => !boundToolNames.has(x));
    if (missingTools.length > 0) {
        throw new Error(`Missing tools '${missingTools}' in the model.bindTools().` +
            `Tools in the model.bindTools() must match the tools passed to createReactAgent.`);
    }
    return false;
}
function _getModel(llm) {
    // Get the underlying model from a RunnableBinding or return the model itself
    let model = llm;
    if (runnables_base/* Runnable */.YN.isRunnable(llm) && "bound" in llm) {
        model = llm.bound;
    }
    if (!("invoke" in model &&
        typeof model.invoke === "function" &&
        "_modelType" in model)) {
        throw new Error(`Expected \`llm\` to be a ChatModel or RunnableBinding (e.g. llm.bind_tools(...)) with invoke() and generate() methods, got ${model.constructor.name}`);
    }
    return model;
}
const createReactAgentAnnotation = () => Annotation.Root({
    messages: Annotation({
        reducer: messagesStateReducer,
        default: () => [],
    }),
    structuredResponse: (Annotation),
});
/**
 * Creates a StateGraph agent that relies on a chat model utilizing tool calling.
 *
 * @example
 * ```ts
 * import { ChatOpenAI } from "@langchain/openai";
 * import { tool } from "@langchain/core/tools";
 * import { z } from "zod";
 * import { createReactAgent } from "@langchain/langgraph/prebuilt";
 *
 * const model = new ChatOpenAI({
 *   model: "gpt-4o",
 * });
 *
 * const getWeather = tool((input) => {
 *   if (["sf", "san francisco"].includes(input.location.toLowerCase())) {
 *     return "It's 60 degrees and foggy.";
 *   } else {
 *     return "It's 90 degrees and sunny.";
 *   }
 * }, {
 *   name: "get_weather",
 *   description: "Call to get the current weather.",
 *   schema: z.object({
 *     location: z.string().describe("Location to get the weather for."),
 *   })
 * })
 *
 * const agent = createReactAgent({ llm: model, tools: [getWeather] });
 *
 * const inputs = {
 *   messages: [{ role: "user", content: "what is the weather in SF?" }],
 * };
 *
 * const stream = await agent.stream(inputs, { streamMode: "values" });
 *
 * for await (const { messages } of stream) {
 *   console.log(messages);
 * }
 * // Returns the messages in the state at each step of execution
 * ```
 */
function createReactAgent(params) {
    const { llm, tools, messageModifier, stateModifier, prompt, stateSchema, checkpointSaver, checkpointer, interruptBefore, interruptAfter, store, responseFormat, name, } = params;
    let toolClasses;
    if (!Array.isArray(tools)) {
        toolClasses = tools.tools;
    }
    else {
        toolClasses = tools;
    }
    let modelWithTools;
    if (_shouldBindTools(llm, toolClasses)) {
        if (!("bindTools" in llm) || typeof llm.bindTools !== "function") {
            throw new Error(`llm ${llm} must define bindTools method.`);
        }
        modelWithTools = llm.bindTools(toolClasses);
    }
    else {
        modelWithTools = llm;
    }
    const modelRunnable = _getPrompt(prompt, stateModifier, messageModifier).pipe(modelWithTools);
    // If any of the tools are configured to return_directly after running,
    // our graph needs to check if these were called
    const shouldReturnDirect = new Set(toolClasses
        .filter((tool) => "returnDirect" in tool && tool.returnDirect)
        .map((tool) => tool.name));
    const shouldContinue = (state) => {
        const { messages } = state;
        const lastMessage = messages[messages.length - 1];
        if ((0,dist_messages.isAIMessage)(lastMessage) &&
            (!lastMessage.tool_calls || lastMessage.tool_calls.length === 0)) {
            return responseFormat != null ? "generate_structured_response" : constants_END;
        }
        else {
            return "continue";
        }
    };
    const generateStructuredResponse = async (state, config) => {
        if (responseFormat == null) {
            throw new Error("Attempted to generate structured output with no passed response schema. Please contact us for help.");
        }
        // Exclude the last message as there's enough information
        // for the LLM to generate the structured response
        const messages = state.messages.slice(0, -1);
        let modelWithStructuredOutput;
        if (typeof responseFormat === "object" &&
            "prompt" in responseFormat &&
            "schema" in responseFormat) {
            const { prompt, schema } = responseFormat;
            modelWithStructuredOutput = _getModel(llm).withStructuredOutput(schema);
            messages.unshift(new dist_messages.SystemMessage({ content: prompt }));
        }
        else {
            modelWithStructuredOutput =
                _getModel(llm).withStructuredOutput(responseFormat);
        }
        const response = await modelWithStructuredOutput.invoke(messages, config);
        return { structuredResponse: response };
    };
    const callModel = async (state, config) => {
        // TODO: Auto-promote streaming.
        const response = (await modelRunnable.invoke(state, config));
        // add agent name to the AIMessage
        response.name = name;
        return { messages: [response] };
    };
    const workflow = new state_StateGraph(stateSchema ?? createReactAgentAnnotation())
        .addNode("agent", callModel)
        .addNode("tools", new ToolNode(toolClasses))
        .addEdge(constants_START, "agent");
    if (responseFormat !== undefined) {
        workflow
            .addNode("generate_structured_response", generateStructuredResponse)
            .addEdge("generate_structured_response", constants_END)
            .addConditionalEdges("agent", shouldContinue, {
            continue: "tools",
            [constants_END]: constants_END,
            generate_structured_response: "generate_structured_response",
        });
    }
    else {
        workflow.addConditionalEdges("agent", shouldContinue, {
            continue: "tools",
            [constants_END]: constants_END,
        });
    }
    const routeToolResponses = (state) => {
        // Check the last consecutive tool calls
        for (let i = state.messages.length - 1; i >= 0; i -= 1) {
            const message = state.messages[i];
            if (!(0,dist_messages.isToolMessage)(message)) {
                break;
            }
            // Check if this tool is configured to return directly
            if (message.name !== undefined && shouldReturnDirect.has(message.name)) {
                return constants_END;
            }
        }
        return "agent";
    };
    if (shouldReturnDirect.size > 0) {
        workflow.addConditionalEdges("tools", routeToolResponses, ["agent", constants_END]);
    }
    else {
        workflow.addEdge("tools", "agent");
    }
    return workflow.compile({
        checkpointer: checkpointer ?? checkpointSaver,
        interruptBefore,
        interruptAfter,
        store,
        name,
    });
}
//# sourceMappingURL=react_agent_executor.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/dist/prebuilt/index.js





//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph/prebuilt.js

;// CONCATENATED MODULE: ./node_modules/@langchain/core/tools.js

;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-supervisor/dist/handoff.js





const WHITESPACE_RE = /\s+/;
function _normalizeAgentName(agentName) {
    /**
     * Normalize an agent name to be used inside the tool name.
     */
    return agentName.trim().replace(WHITESPACE_RE, "_").toLowerCase();
}
const createHandoffTool = ({ agentName }) => {
    /**
     * Create a tool that can handoff control to the requested agent.
     *
     * @param agentName - The name of the agent to handoff control to, i.e.
     *   the name of the agent node in the multi-agent graph.
     *   Agent names should be simple, clear and unique, preferably in snake_case,
     *   although you are only limited to the names accepted by LangGraph
     *   nodes as well as the tool names accepted by LLM providers
     *   (the tool name will look like this: `transfer_to_<agent_name>`).
     */
    const toolName = `transfer_to_${_normalizeAgentName(agentName)}`;
    const handoffTool = tools_tool(async (_, config) => {
        /**
         * Ask another agent for help.
         */
        const toolMessage = new dist_messages.ToolMessage({
            content: `Successfully transferred to ${agentName}`,
            name: toolName,
            tool_call_id: config.toolCall.id,
        });
        return new Command({
            goto: agentName,
            graph: Command.PARENT,
            update: { messages: [toolMessage] },
        });
    }, {
        name: toolName,
        schema: lib.z.object({}),
        description: "Ask another agent for help.",
    });
    return handoffTool;
};
function createHandoffBackMessages(agentName, supervisorName) {
    /**
     * Create a pair of (AIMessage, ToolMessage) to add to the message history when returning control to the supervisor.
     */
    const toolCallId = (0,wrapper.v4)();
    const toolName = `transfer_back_to_${_normalizeAgentName(supervisorName)}`;
    const toolCalls = [{ name: toolName, args: {}, id: toolCallId }];
    return [
        new dist_messages.AIMessage({
            content: `Transferring back to ${supervisorName}`,
            tool_calls: toolCalls,
            name: agentName,
        }),
        new dist_messages.ToolMessage({
            content: `Successfully transferred back to ${supervisorName}`,
            name: toolName,
            tool_call_id: toolCallId,
        }),
    ];
}

//# sourceMappingURL=handoff.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-supervisor/dist/supervisor.js



const PROVIDERS_WITH_PARALLEL_TOOL_CALLS_PARAM = new Set(["ChatOpenAI"]);
function isChatModelWithBindTools(llm) {
    return ("_modelType" in llm &&
        typeof llm._modelType === "function" &&
        llm._modelType() === "base_chat_model" &&
        "bindTools" in llm &&
        typeof llm.bindTools === "function");
}
function isChatModelWithParallelToolCallsParam(llm) {
    return llm.bindTools.length >= 2;
}
const makeCallAgent = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
agent, // TODO: agent should not be `any`
outputMode, addHandoffBackMessages, supervisorName) => {
    if (!["full_history", "last_message"].includes(outputMode)) {
        throw new Error(`Invalid agent output mode: ${outputMode}. Needs to be one of ["full_history", "last_message"]`);
    }
    return async (state) => {
        const output = await agent.invoke(state);
        let { messages } = output;
        if (outputMode === "last_message") {
            messages = messages.slice(-1);
        }
        if (addHandoffBackMessages) {
            messages.push(...createHandoffBackMessages(agent.name, supervisorName));
        }
        return { ...output, messages };
    };
};
/**
 * Create a multi-agent supervisor.
 *
 * @param agents List of agents to manage
 * @param llm Language model to use for the supervisor
 * @param tools Tools to use for the supervisor
 * @param prompt Optional prompt to use for the supervisor. Can be one of:
 *   - string: This is converted to a SystemMessage and added to the beginning of the list of messages in state["messages"]
 *   - SystemMessage: this is added to the beginning of the list of messages in state["messages"]
 *   - Function: This function should take in full graph state and the output is then passed to the language model
 *   - Runnable: This runnable should take in full graph state and the output is then passed to the language model
 * @param stateSchema State schema to use for the supervisor graph
 * @param outputMode Mode for adding managed agents' outputs to the message history in the multi-agent workflow.
 *   Can be one of:
 *   - `full_history`: add the entire agent message history
 *   - `last_message`: add only the last message (default)
 * @param addHandoffBackMessages Whether to add a pair of (AIMessage, ToolMessage) to the message history
 *   when returning control to the supervisor to indicate that a handoff has occurred
 * @param supervisorName Name of the supervisor node
 */
const createSupervisor = ({ agents, llm, tools, prompt, stateSchema, outputMode = "last_message", addHandoffBackMessages = true, supervisorName = "supervisor", }) => {
    const agentNames = new Set();
    for (const agent of agents) {
        if (!agent.name || agent.name === "LangGraph") {
            throw new Error("Please specify a name when you create your agent, either via `createReactAgent({ ..., name: agentName })` " +
                "or via `graph.compile({ name: agentName })`.");
        }
        if (agentNames.has(agent.name)) {
            throw new Error(`Agent with name '${agent.name}' already exists. Agent names must be unique.`);
        }
        agentNames.add(agent.name);
    }
    const handoffTools = agents.map((agent) => createHandoffTool({ agentName: agent.name }));
    const allTools = [...(tools ?? []), ...handoffTools];
    let supervisorLLM = llm;
    if (isChatModelWithBindTools(llm)) {
        if (isChatModelWithParallelToolCallsParam(llm) &&
            PROVIDERS_WITH_PARALLEL_TOOL_CALLS_PARAM.has(llm.getName())) {
            supervisorLLM = llm.bindTools(allTools, { parallel_tool_calls: false });
        }
        else {
            supervisorLLM = llm.bindTools(allTools);
        }
    }
    const schema = stateSchema ?? createReactAgentAnnotation();
    const supervisorAgent = createReactAgent({
        name: supervisorName,
        llm: supervisorLLM,
        tools: allTools,
        prompt,
        stateSchema: schema,
    });
    let builder = new state_StateGraph(schema)
        .addNode(supervisorAgent.name, supervisorAgent, {
        ends: [...agentNames],
    })
        .addEdge(constants_START, supervisorAgent.name);
    for (const agent of agents) {
        builder = builder.addNode(agent.name, makeCallAgent(agent, outputMode, addHandoffBackMessages, supervisorName), {
            subgraphs: [agent],
        });
        builder = builder.addEdge(agent.name, supervisorAgent.name);
    }
    return builder;
};

// module.exports = { createSupervisor };
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-supervisor/dist/index.js

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@langchain/langgraph-supervisor/index.js


/***/ })

};
;
//# sourceMappingURL=485.index.js.map