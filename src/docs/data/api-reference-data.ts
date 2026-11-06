import { ApiEndpointDoc } from './types';

export const API_ENDPOINTS: ApiEndpointDoc[] = [
  // ── Authentication ──────────────────────────────────────
  {
    id: 'auth-login',
    method: 'POST',
    path: '/api/v1/auth/login',
    group: 'Authentication',
    summary: 'Authenticate User and Receive Session Token',
    description: 'Validates user credentials (email and password), issues a short-lived JWT access token in response, and sets a secure HTTP-only refresh token cookie.',
    requiresAuth: false,
    rateLimit: '5 requests per minute per IP',
    headers: [
      { name: 'Content-Type', type: 'string', required: true, description: 'application/json' },
    ],
    requestBody: {
      contentType: 'application/json',
      schema: `{ email: string, password: string }`,
      example: JSON.stringify({ email: 'developer@acme.corp', password: 'SuperSecretPassword123!' }, null, 2),
    },
    responseBody: {
      statusCode: 200,
      contentType: 'application/json',
      schema: `{ status: string, message: string, data: { accessToken: string, user: { id: string, email: string, fullName: string } } }`,
      example: JSON.stringify({
        status: 'success',
        message: 'Logged in successfully',
        data: {
          accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          user: {
            id: '6639c0f9a2b8e3981d3ef101',
            email: 'developer@acme.corp',
            fullName: 'Jane Developer'
          }
        }
      }, null, 2),
    },
    errorResponses: [
      { statusCode: 401, description: 'Invalid email or password credentials', example: JSON.stringify({ status: 'error', message: 'Invalid credentials provided' }, null, 2) },
      { statusCode: 429, description: 'Rate limit exceeded', example: JSON.stringify({ status: 'error', message: 'Too many login attempts. Please try again in 15 minutes.' }, null, 2) }
    ],
    codeExamples: {
      curl: `curl -X POST https://api.yedii.com/api/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"developer@acme.corp","password":"SuperSecretPassword123!"}'`,
      javascript: `const res = await fetch("https://api.yedii.com/api/v1/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: "developer@acme.corp", password: "SuperSecretPassword123!" })
});
const data = await res.json();
console.log(data.data.accessToken);`,
      typescript: `interface AuthResponse {
  status: string;
  data: { accessToken: string; user: { id: string; email: string; fullName: string } };
}

const response = await fetch("https://api.yedii.com/api/v1/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: "developer@acme.corp", password: "SuperSecretPassword123!" })
});
const result: AuthResponse = await response.json();`,
      node: `const axios = require('axios');

async function login() {
  const { data } = await axios.post('https://api.yedii.com/api/v1/auth/login', {
    email: 'developer@acme.corp',
    password: 'SuperSecretPassword123!'
  });
  return data.data.accessToken;
}`,
    },
  },
  {
    id: 'auth-refresh',
    method: 'POST',
    path: '/api/v1/auth/refresh',
    group: 'Authentication',
    summary: 'Refresh Access Token',
    description: 'Refreshes an expired JWT access token using the HTTP-only refresh cookie. Rotates the refresh token for security.',
    requiresAuth: false,
    codeExamples: {
      curl: `curl -X POST https://api.yedii.com/api/v1/auth/refresh \\
  -H "Cookie: refreshToken=your_refresh_token_here"`,
      javascript: `const res = await fetch("https://api.yedii.com/api/v1/auth/refresh", {
  method: "POST",
  credentials: "include"
});
const data = await res.json();`,
      typescript: `const res = await fetch("https://api.yedii.com/api/v1/auth/refresh", {
  method: "POST",
  credentials: "include"
});
const { data } = await res.json();`,
      node: `const axios = require('axios');
const res = await axios.post('https://api.yedii.com/api/v1/auth/refresh', {}, { withCredentials: true });`,
    },
  },

  // ── Agent APIs ──────────────────────────────────────────
  {
    id: 'agents-create',
    method: 'POST',
    path: '/api/v1/chatbots',
    group: 'Agent APIs',
    summary: 'Create a New AI Agent',
    description: 'Initializes a new autonomous AI support agent associated with a specific workspace. Automatically provisions default persona, system instructions, and ChatKit template builder configuration.',
    requiresAuth: true,
    authType: 'Bearer',
    headers: [
      { name: 'Authorization', type: 'string', required: true, description: 'Bearer <JWT_TOKEN>' },
      { name: 'Content-Type', type: 'string', required: true, description: 'application/json' },
    ],
    requestBody: {
      contentType: 'application/json',
      schema: `{ workspaceId: string, name: string, description?: string, agentRoleId?: string }`,
      example: JSON.stringify({
        workspaceId: '6639c0f9a2b8e3981d3ef999',
        name: 'Technical Support Assistant',
        description: 'Autonomous agent handling API troubleshooting and onboarding'
      }, null, 2),
    },
    responseBody: {
      statusCode: 201,
      contentType: 'application/json',
      schema: `{ status: string, data: { id: string, name: string, workspaceId: string, isPublished: boolean, createdAt: string } }`,
      example: JSON.stringify({
        status: 'success',
        data: {
          id: '6639c0f9a2b8e3981d3ef123',
          name: 'Technical Support Assistant',
          workspaceId: '6639c0f9a2b8e3981d3ef999',
          isPublished: false,
          createdAt: '2026-11-06T12:00:00.000Z'
        }
      }, null, 2),
    },
    codeExamples: {
      curl: `curl -X POST https://api.yedii.com/api/v1/chatbots \\
  -H "Authorization: Bearer $YEDII_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"workspaceId":"6639c0f9a2b8e3981d3ef999","name":"Technical Support Assistant"}'`,
      javascript: `const res = await fetch("https://api.yedii.com/api/v1/chatbots", {
  method: "POST",
  headers: {
    "Authorization": \`Bearer \${apiKey}\`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    workspaceId: "6639c0f9a2b8e3981d3ef999",
    name: "Technical Support Assistant"
  })
});
const agent = await res.json();`,
      typescript: `import { Agent } from '@yedii/sdk';

const agent = await fetch("https://api.yedii.com/api/v1/chatbots", {
  method: "POST",
  headers: {
    "Authorization": \`Bearer \${token}\`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    workspaceId: "6639c0f9a2b8e3981d3ef999",
    name: "Technical Support Assistant"
  })
});`,
      node: `const axios = require('axios');
const { data } = await axios.post('https://api.yedii.com/api/v1/chatbots', {
  workspaceId: '6639c0f9a2b8e3981d3ef999',
  name: 'Technical Support Assistant'
}, {
  headers: { Authorization: \`Bearer \${process.env.YEDII_TOKEN}\` }
});`,
    },
  },
  {
    id: 'agents-get-by-id',
    method: 'GET',
    path: '/api/v1/chatbots/:id',
    group: 'Agent APIs',
    summary: 'Retrieve Agent by ID',
    description: 'Returns the complete agent entity including workspace ownership, status, publishing state, and metadata.',
    requiresAuth: true,
    authType: 'Bearer',
    pathParams: [
      { name: 'id', type: 'string (MongoDB ObjectId)', required: true, description: 'Unique agent identifier' }
    ],
    codeExamples: {
      curl: `curl -X GET https://api.yedii.com/api/v1/chatbots/6639c0f9a2b8e3981d3ef123 \\
  -H "Authorization: Bearer $YEDII_API_KEY"`,
      javascript: `const res = await fetch("https://api.yedii.com/api/v1/chatbots/6639c0f9a2b8e3981d3ef123", {
  headers: { "Authorization": \`Bearer \${token}\` }
});
const data = await res.json();`,
      typescript: `const res = await fetch("https://api.yedii.com/api/v1/chatbots/6639c0f9a2b8e3981d3ef123", {
  headers: { "Authorization": \`Bearer \${token}\` }
});
const agent = await res.json();`,
      node: `const axios = require('axios');
const { data } = await axios.get('https://api.yedii.com/api/v1/chatbots/6639c0f9a2b8e3981d3ef123', {
  headers: { Authorization: \`Bearer \${token}\` }
});`,
    },
  },
  {
    id: 'agents-system-prompt',
    method: 'PATCH',
    path: '/api/v1/agent-system-prompts/:chatbotId',
    group: 'Agent APIs',
    summary: 'Update Agent System Instructions',
    description: 'Configures granular persona sections including personality, guardrails, goal, business context, clarification behavior, formatting constraints, and prompt encapsulation.',
    requiresAuth: true,
    authType: 'Bearer',
    pathParams: [
      { name: 'chatbotId', type: 'string', required: true, description: 'ID of the agent to configure' }
    ],
    requestBody: {
      contentType: 'application/json',
      schema: `{ personality?: { status: "ACTIVE"|"INACTIVE", text: string }, guardrails?: { status: "ACTIVE"|"INACTIVE", text: string }, goal?: { status: "ACTIVE"|"INACTIVE", text: string }, business?: { status: "ACTIVE"|"INACTIVE", text: string } }`,
      example: JSON.stringify({
        personality: { status: 'ACTIVE', text: 'You are an empathetic, authoritative technical support engineer.' },
        guardrails: { status: 'ACTIVE', text: 'Never mention competitors. If question is outside knowledge base, say you cannot answer.' },
        goal: { status: 'ACTIVE', text: 'Resolve customer questions on first contact with zero hallucination.' },
        business: { status: 'ACTIVE', text: 'Yedii is an AI customer support platform built for enterprise scale.' }
      }, null, 2),
    },
    codeExamples: {
      curl: `curl -X PATCH https://api.yedii.com/api/v1/agent-system-prompts/6639c0f9a2b8e3981d3ef123 \\
  -H "Authorization: Bearer $YEDII_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"personality":{"status":"ACTIVE","text":"Professional, concise engineer"}}'`,
      javascript: `const res = await fetch("https://api.yedii.com/api/v1/agent-system-prompts/6639c0f9a2b8e3981d3ef123", {
  method: "PATCH",
  headers: {
    "Authorization": \`Bearer \${token}\`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    personality: { status: "ACTIVE", text: "Professional, concise engineer" }
  })
});`,
      typescript: `const res = await fetch("https://api.yedii.com/api/v1/agent-system-prompts/6639c0f9a2b8e3981d3ef123", {
  method: "PATCH",
  headers: { "Authorization": \`Bearer \${token}\`, "Content-Type": "application/json" },
  body: JSON.stringify({ personality: { status: "ACTIVE", text: "Professional and helpful" } })
});`,
      node: `const axios = require('axios');
await axios.patch('https://api.yedii.com/api/v1/agent-system-prompts/6639c0f9a2b8e3981d3ef123', {
  personality: { status: 'ACTIVE', text: 'Professional and helpful' }
}, { headers: { Authorization: \`Bearer \${token}\` } });`,
    },
  },

  // ── Chatbot APIs (Builder & LLM) ───────────────────────
  {
    id: 'chatbot-builder-config',
    method: 'GET',
    path: '/api/v1/chatbottemplates/:chatbotId/builder-config',
    group: 'Chatbot APIs',
    summary: 'Get Widget Builder Configuration',
    description: 'Retrieves visual customization settings for the agent: theme colors, typography, launcher properties, greeting screen, quick questions, and composer settings.',
    requiresAuth: true,
    authType: 'Bearer',
    codeExamples: {
      curl: `curl -X GET https://api.yedii.com/api/v1/chatbottemplates/6639c0f9a2b8e3981d3ef123/builder-config \\
  -H "Authorization: Bearer $YEDII_API_KEY"`,
      javascript: `const res = await fetch("https://api.yedii.com/api/v1/chatbottemplates/6639c0f9a2b8e3981d3ef123/builder-config", {
  headers: { "Authorization": \`Bearer \${token}\` }
});
const config = await res.json();`,
      typescript: `const res = await fetch("https://api.yedii.com/api/v1/chatbottemplates/6639c0f9a2b8e3981d3ef123/builder-config", {
  headers: { "Authorization": \`Bearer \${token}\` }
});
const { data } = await res.json();`,
      node: `const axios = require('axios');
const { data } = await axios.get('https://api.yedii.com/api/v1/chatbottemplates/6639c0f9a2b8e3981d3ef123/builder-config', {
  headers: { Authorization: \`Bearer \${token}\` }
});`,
    },
  },
  {
    id: 'chatbot-llm-model-config',
    method: 'PATCH',
    path: '/api/v1/chatbot-llm-models/:chatbotId',
    group: 'Chatbot APIs',
    summary: 'Update LLM Models, Fallback & Security Config',
    description: 'Configures primary and fallback LLM models, temperature (0-2), rate limiting rules, website domain whitelisting (allowedOrigins), and vector reranking parameters.',
    requiresAuth: true,
    authType: 'Bearer',
    requestBody: {
      contentType: 'application/json',
      schema: `{ temperature: number, isSuggestedQuestions: boolean, chat: Array<{ llmModelId: string, isPrimary: boolean, isFallback: boolean, enabled: boolean, priority: number }>, rateLimit: { isEnabled: boolean, maxMessages: number, timeWindow: number }, websiteAccess: { isEnabled: boolean, allowedOrigins: string[] }, reranking: { enabled: boolean, modelId?: string, topN?: number } }`,
      example: JSON.stringify({
        temperature: 0.2,
        isSuggestedQuestions: true,
        chat: [
          { llmModelId: '6639c0f9a2b8e3981d3ef881', isPrimary: true, isFallback: false, enabled: true, priority: 1 },
          { llmModelId: '6639c0f9a2b8e3981d3ef882', isPrimary: false, isFallback: true, enabled: true, priority: 2 }
        ],
        rateLimit: { isEnabled: true, maxMessages: 20, timeWindow: 60 },
        websiteAccess: { isEnabled: true, allowedOrigins: ['https://example.com', 'https://staging.example.com'] },
        reranking: { enabled: true, topN: 5 }
      }, null, 2),
    },
    codeExamples: {
      curl: `curl -X PATCH https://api.yedii.com/api/v1/chatbot-llm-models/6639c0f9a2b8e3981d3ef123 \\
  -H "Authorization: Bearer $YEDII_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"temperature":0.2,"rateLimit":{"isEnabled":true,"maxMessages":20,"timeWindow":60}}'`,
      javascript: `const res = await fetch("https://api.yedii.com/api/v1/chatbot-llm-models/6639c0f9a2b8e3981d3ef123", {
  method: "PATCH",
  headers: { "Authorization": \`Bearer \${token}\`, "Content-Type": "application/json" },
  body: JSON.stringify({ temperature: 0.2 })
});`,
      typescript: `const res = await fetch("https://api.yedii.com/api/v1/chatbot-llm-models/6639c0f9a2b8e3981d3ef123", {
  method: "PATCH",
  headers: { "Authorization": \`Bearer \${token}\`, "Content-Type": "application/json" },
  body: JSON.stringify({ temperature: 0.2 })
});`,
      node: `const axios = require('axios');
await axios.patch('https://api.yedii.com/api/v1/chatbot-llm-models/6639c0f9a2b8e3981d3ef123', {
  temperature: 0.2
}, { headers: { Authorization: \`Bearer \${token}\` } });`,
    },
  },

  // ── Message & Streaming APIs ───────────────────────────
  {
    id: 'messages-chat-stream',
    method: 'POST',
    path: '/api/v1/chat/stream',
    group: 'Message APIs',
    summary: 'Stream AI Conversation via Server-Sent Events',
    description: 'Primary conversational endpoint used by web widgets and integrations. Executes RAG semantic search across knowledge collections, invokes the LLM engine with fallback resilience, and streams tokens via standard SSE chunk protocol.',
    requiresAuth: false,
    headers: [
      { name: 'Content-Type', type: 'string', required: true, description: 'application/json' },
      { name: 'Accept', type: 'string', required: true, description: 'text/event-stream' },
    ],
    requestBody: {
      contentType: 'application/json',
      schema: `{ chatbotId: string, message: string, sessionId: string, requestId?: string }`,
      example: JSON.stringify({
        chatbotId: '6639c0f9a2b8e3981d3ef123',
        message: 'How do I configure domain whitelisting for my widget?',
        sessionId: 'session_1730000000000_abc123'
      }, null, 2),
    },
    responseBody: {
      statusCode: 200,
      contentType: 'text/event-stream',
      schema: `data: {"type":"chunk"|"done"|"error","content"?:string,"message"?:string}\\n\\n`,
      example: `data: {"type":"chunk","content":"To configure "}\n\ndata: {"type":"chunk","content":"allowed domains, open your agent settings..."}\n\ndata: {"type":"done"}\n\n`,
    },
    codeExamples: {
      curl: `curl -N -X POST https://api.yedii.com/api/v1/chat/stream \\
  -H "Content-Type: application/json" \\
  -H "Accept: text/event-stream" \\
  -d '{"chatbotId":"6639c0f9a2b8e3981d3ef123","message":"Hello!","sessionId":"sess_123"}'`,
      javascript: `const response = await fetch("https://api.yedii.com/api/v1/chat/stream", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    chatbotId: "6639c0f9a2b8e3981d3ef123",
    message: "How do I get started?",
    sessionId: "sess_123"
  })
});

const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  const chunk = decoder.decode(value);
  console.log("Chunk received:", chunk);
}`,
      typescript: `const response = await fetch("https://api.yedii.com/api/v1/chat/stream", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    chatbotId: "6639c0f9a2b8e3981d3ef123",
    message: "How do I get started?",
    sessionId: "sess_123"
  })
});
const reader = response.body!.getReader();
const decoder = new TextDecoder();
while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  const text = decoder.decode(value);
}`,
      node: `const axios = require('axios');
const response = await axios({
  method: 'POST',
  url: 'https://api.yedii.com/api/v1/chat/stream',
  data: { chatbotId: '6639c0f9a2b8e3981d3ef123', message: 'Hello', sessionId: 'sess_123' },
  responseType: 'stream'
});
response.data.on('data', chunk => console.log(chunk.toString()));`,
    },
  },
  {
    id: 'messages-feedback',
    method: 'POST',
    path: '/api/v1/chat/feedback',
    group: 'Message APIs',
    summary: 'Submit Message Thumbs Up / Thumbs Down Feedback',
    description: 'Records user feedback for an AI response to calculate resolution rates and train reinforcement learning loops.',
    requiresAuth: false,
    requestBody: {
      contentType: 'application/json',
      schema: `{ messageId: string, feedbackType: "like" | "dislike", comment?: string }`,
      example: JSON.stringify({ messageId: '6639c0f9a2b8e3981d3ef777', feedbackType: 'like' }, null, 2),
    },
    codeExamples: {
      curl: `curl -X POST https://api.yedii.com/api/v1/chat/feedback \\
  -H "Content-Type: application/json" \\
  -d '{"messageId":"6639c0f9a2b8e3981d3ef777","feedbackType":"like"}'`,
      javascript: `await fetch("https://api.yedii.com/api/v1/chat/feedback", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ messageId: "6639c0f9a2b8e3981d3ef777", feedbackType: "like" })
});`,
      typescript: `await fetch("https://api.yedii.com/api/v1/chat/feedback", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ messageId: "6639c0f9a2b8e3981d3ef777", feedbackType: "like" })
});`,
      node: `const axios = require('axios');
await axios.post('https://api.yedii.com/api/v1/chat/feedback', {
  messageId: '6639c0f9a2b8e3981d3ef777',
  feedbackType: 'like'
});`,
    },
  },

  // ── Knowledge Base & Crawling APIs ──────────────────────
  {
    id: 'crawler-single-page',
    method: 'POST',
    path: '/api/v1/crawler/single-page',
    group: 'Website Crawling APIs',
    summary: 'Crawl Single URL for Knowledge Ingestion',
    description: 'Submits a single URL to the asynchronous crawling worker queue. Extracts clean semantic text, strips HTML boilerplate/scripts, chunks the text, and stores vector embeddings.',
    requiresAuth: true,
    authType: 'Bearer',
    requestBody: {
      contentType: 'application/json',
      schema: `{ chatbotId: string, url: string }`,
      example: JSON.stringify({ chatbotId: '6639c0f9a2b8e3981d3ef123', url: 'https://docs.example.com/getting-started' }, null, 2),
    },
    codeExamples: {
      curl: `curl -X POST https://api.yedii.com/api/v1/crawler/single-page \\
  -H "Authorization: Bearer $YEDII_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"chatbotId":"6639c0f9a2b8e3981d3ef123","url":"https://docs.example.com/getting-started"}'`,
      javascript: `const res = await fetch("https://api.yedii.com/api/v1/crawler/single-page", {
  method: "POST",
  headers: { "Authorization": \`Bearer \${token}\`, "Content-Type": "application/json" },
  body: JSON.stringify({ chatbotId: "6639c0f9a2b8e3981d3ef123", url: "https://docs.example.com/getting-started" })
});`,
      typescript: `const res = await fetch("https://api.yedii.com/api/v1/crawler/single-page", {
  method: "POST",
  headers: { "Authorization": \`Bearer \${token}\`, "Content-Type": "application/json" },
  body: JSON.stringify({ chatbotId: "6639c0f9a2b8e3981d3ef123", url: "https://docs.example.com/getting-started" })
});`,
      node: `const axios = require('axios');
await axios.post('https://api.yedii.com/api/v1/crawler/single-page', {
  chatbotId: '6639c0f9a2b8e3981d3ef123',
  url: 'https://docs.example.com/getting-started'
}, { headers: { Authorization: \`Bearer \${token}\` } });`,
    },
  },
  {
    id: 'crawler-fetch-sitemap',
    method: 'POST',
    path: '/api/v1/crawler/fetch-sitemap',
    group: 'Website Crawling APIs',
    summary: 'Discover URLs from XML Sitemap',
    description: 'Parses an XML sitemap or sitemap index URL and discovers all indexing targets. Pages are cataloged with status PENDING for selection.',
    requiresAuth: true,
    authType: 'Bearer',
    requestBody: {
      contentType: 'application/json',
      schema: `{ chatbotId: string, sitemapUrl: string }`,
      example: JSON.stringify({ chatbotId: '6639c0f9a2b8e3981d3ef123', sitemapUrl: 'https://docs.example.com/sitemap.xml' }, null, 2),
    },
    codeExamples: {
      curl: `curl -X POST https://api.yedii.com/api/v1/crawler/fetch-sitemap \\
  -H "Authorization: Bearer $YEDII_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"chatbotId":"6639c0f9a2b8e3981d3ef123","sitemapUrl":"https://docs.example.com/sitemap.xml"}'`,
      javascript: `const res = await fetch("https://api.yedii.com/api/v1/crawler/fetch-sitemap", {
  method: "POST",
  headers: { "Authorization": \`Bearer \${token}\`, "Content-Type": "application/json" },
  body: JSON.stringify({ chatbotId: "6639c0f9a2b8e3981d3ef123", sitemapUrl: "https://docs.example.com/sitemap.xml" })
});`,
      typescript: `const res = await fetch("https://api.yedii.com/api/v1/crawler/fetch-sitemap", {
  method: "POST",
  headers: { "Authorization": \`Bearer \${token}\`, "Content-Type": "application/json" },
  body: JSON.stringify({ chatbotId: "6639c0f9a2b8e3981d3ef123", sitemapUrl: "https://docs.example.com/sitemap.xml" })
});`,
      node: `const axios = require('axios');
await axios.post('https://api.yedii.com/api/v1/crawler/fetch-sitemap', {
  chatbotId: '6639c0f9a2b8e3981d3ef123',
  sitemapUrl: 'https://docs.example.com/sitemap.xml'
}, { headers: { Authorization: \`Bearer \${token}\` } });`,
    },
  },
  {
    id: 'documents-upload-pdf',
    method: 'POST',
    path: '/api/v1/file/upload',
    group: 'Knowledge Base APIs',
    summary: 'Upload PDF Document (up to 50MB)',
    description: 'Uploads a PDF manual, FAQ sheet, or documentation document into the knowledge base. The document is parsed with optical structure recognition, chunked into vectors, and indexed in vector storage.',
    requiresAuth: true,
    authType: 'Bearer',
    headers: [
      { name: 'Authorization', type: 'string', required: true, description: 'Bearer <TOKEN>' },
      { name: 'Content-Type', type: 'string', required: true, description: 'multipart/form-data' },
    ],
    requestBody: {
      contentType: 'multipart/form-data',
      schema: `FormData with file: File (PDF, <= 50MB), chatbotId: string`,
      example: `FormData: { chatbotId: "6639c0f9a2b8e3981d3ef123", file: [manual.pdf] }`,
    },
    codeExamples: {
      curl: `curl -X POST https://api.yedii.com/api/v1/file/upload \\
  -H "Authorization: Bearer $YEDII_API_KEY" \\
  -F "chatbotId=6639c0f9a2b8e3981d3ef123" \\
  -F "file=@/path/to/manual.pdf"`,
      javascript: `const formData = new FormData();
formData.append("chatbotId", "6639c0f9a2b8e3981d3ef123");
formData.append("file", fileInput.files[0]);

const res = await fetch("https://api.yedii.com/api/v1/file/upload", {
  method: "POST",
  headers: { "Authorization": \`Bearer \${token}\` },
  body: formData
});`,
      typescript: `const formData = new FormData();
formData.append("chatbotId", chatbotId);
formData.append("file", file);

const res = await fetch("https://api.yedii.com/api/v1/file/upload", {
  method: "POST",
  headers: { "Authorization": \`Bearer \${token}\` },
  body: formData
});`,
      node: `const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');

const form = new FormData();
form.append('chatbotId', '6639c0f9a2b8e3981d3ef123');
form.append('file', fs.createReadStream('./manual.pdf'));

await axios.post('https://api.yedii.com/api/v1/file/upload', form, {
  headers: { ...form.getHeaders(), Authorization: \`Bearer \${token}\` }
});`,
    },
  },

  // ── Conversation & Analytics APIs ──────────────────────
  {
    id: 'conversations-get-metrics',
    method: 'GET',
    path: '/api/v1/conversations/:workspaceId/metrics',
    group: 'Conversation APIs',
    summary: 'Get Workspace Conversation Metrics',
    description: 'Retrieves aggregated conversation volume, resolution rate, average response latency, and satisfaction score for a workspace.',
    requiresAuth: true,
    authType: 'Bearer',
    pathParams: [
      { name: 'workspaceId', type: 'string', required: true, description: 'Workspace identifier' }
    ],
    codeExamples: {
      curl: `curl -X GET https://api.yedii.com/api/v1/conversations/6639c0f9a2b8e3981d3ef999/metrics \\
  -H "Authorization: Bearer $YEDII_API_KEY"`,
      javascript: `const res = await fetch("https://api.yedii.com/api/v1/conversations/6639c0f9a2b8e3981d3ef999/metrics", {
  headers: { "Authorization": \`Bearer \${token}\` }
});
const metrics = await res.json();`,
      typescript: `const res = await fetch("https://api.yedii.com/api/v1/conversations/6639c0f9a2b8e3981d3ef999/metrics", {
  headers: { "Authorization": \`Bearer \${token}\` }
});
const { data } = await res.json();`,
      node: `const axios = require('axios');
const { data } = await axios.get('https://api.yedii.com/api/v1/conversations/6639c0f9a2b8e3981d3ef999/metrics', {
  headers: { Authorization: \`Bearer \${token}\` }
});`,
    },
  },

  // ── Usage & Billing APIs ────────────────────────────────
  {
    id: 'usage-ai-model-records',
    method: 'GET',
    path: '/api/v1/ai-model-usage',
    group: 'Usage APIs',
    summary: 'Query AI Credit & Token Consumption Records',
    description: 'Returns granular token usage records partitioned by agent, model type (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro), and credit deductions.',
    requiresAuth: true,
    authType: 'Bearer',
    queryParams: [
      { name: 'workspaceId', type: 'string', required: true, description: 'Target workspace ID' },
      { name: 'startDate', type: 'string (ISO 8601)', required: false, description: 'Start date filter' },
      { name: 'endDate', type: 'string (ISO 8601)', required: false, description: 'End date filter' },
    ],
    codeExamples: {
      curl: `curl -X GET "https://api.yedii.com/api/v1/ai-model-usage?workspaceId=6639c0f9a2b8e3981d3ef999" \\
  -H "Authorization: Bearer $YEDII_API_KEY"`,
      javascript: `const res = await fetch("https://api.yedii.com/api/v1/ai-model-usage?workspaceId=6639c0f9a2b8e3981d3ef999", {
  headers: { "Authorization": \`Bearer \${token}\` }
});
const usage = await res.json();`,
      typescript: `const res = await fetch("https://api.yedii.com/api/v1/ai-model-usage?workspaceId=6639c0f9a2b8e3981d3ef999", {
  headers: { "Authorization": \`Bearer \${token}\` }
});
const { data } = await res.json();`,
      node: `const axios = require('axios');
const { data } = await axios.get('https://api.yedii.com/api/v1/ai-model-usage', {
  params: { workspaceId: '6639c0f9a2b8e3981d3ef999' },
  headers: { Authorization: \`Bearer \${token}\` }
});`,
    },
  },

  // ── Webhooks (Paddle) ───────────────────────────────────
  {
    id: 'webhooks-paddle',
    method: 'POST',
    path: '/api/v1/payments/paddle/webhook',
    group: 'Webhooks',
    summary: 'Paddle Billing Webhook Ingestion',
    description: 'Receives signed Paddle billing notifications for subscription creations, upgrades, cancellations, and payment transactions.',
    requiresAuth: false,
    headers: [
      { name: 'Paddle-Signature', type: 'string', required: true, description: 'HMAC-SHA256 signature calculated over timestamp and raw request body' },
      { name: 'Content-Type', type: 'string', required: true, description: 'application/json' },
    ],
    codeExamples: {
      curl: `curl -X POST https://api.yedii.com/api/v1/payments/paddle/webhook \\
  -H "Paddle-Signature: ts=1730000000;h=abcdef..." \\
  -H "Content-Type: application/json" \\
  -d '{"event_type":"subscription.created","data":{"id":"sub_01h...","status":"active"}}'`,
      javascript: `// Inbound webhook handled by Yedii Backend server`,
      typescript: `// Inbound webhook handled by Yedii Backend server`,
      node: `// Handled by express.raw({ type: 'application/json' }) and crypto.createHmac`,
    },
  },
];

