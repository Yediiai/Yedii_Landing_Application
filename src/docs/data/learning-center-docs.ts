import { DocArticle } from './types';

export const LEARNING_ARTICLES: DocArticle[] = [
  // ── Tutorials ────────────────────────────────────────────
  {
    id: 'tutorial-build-support-agent',
    slug: 'tutorials/build-your-first-ai-support-agent',
    title: 'Tutorial: Build an Autonomous AI Support Agent from Scratch',
    description: 'A complete practical walkthrough taking you from zero to a fully trained, production-ready customer support agent.',
    section: 'learning',
    category: 'Tutorials',
    tags: ['tutorial', 'support-agent', 'hands-on', 'beginner'],
    author: 'Customer Success Team',
    createdAt: '2026-10-17',
    updatedAt: '2026-11-04',
    status: 'PUBLISHED',
    version: '1.2',
    readingTimeMinutes: 7,
    featured: true,
    order: 1,
    headings: [
      { id: 'prerequisites', title: 'Prerequisites', level: 2 },
      { id: 'phase-1-provision', title: 'Phase 1: Agent Creation & Roles', level: 2 },
      { id: 'phase-2-ingest', title: 'Phase 2: Ingest Knowledge Sources', level: 2 },
      { id: 'phase-3-persona', title: 'Phase 3: Tune Persona & Guardrails', level: 2 },
      { id: 'phase-4-evaluation', title: 'Phase 4: Playground Testing & Verification', level: 2 }
    ],
    content: `
## Prerequisites

Before starting this tutorial:
- A verified [Yedii Workspace](https://app.yedii.com).
- A public URL or sitemap containing your product documentation, FAQs, or help center.
- 10 minutes of uninterrupted focus.

## Phase 1: Agent Creation & Roles

1. Log into your Yedii dashboard.
2. In the top navigation bar, ensure your target workspace is selected.
3. Click **Agents > New Agent**.
4. Name your agent: \`Customer Care Specialist\`.
5. Under **Agent Role**, choose \`Customer Support\`. This automatically configures standard customer-centric response formatting.

## Phase 2: Ingest Knowledge Sources

1. On the agent setup screen, click **Data Sources**.
2. Click **Add Source > Sitemap**.
3. Enter your documentation sitemap URL (e.g., \`https://docs.yoursite.com/sitemap.xml\`).
4. Click **Fetch Sitemap**. Yedii lists all discovered URLs.
5. Review the list and deselect any internal or outdated pages.
6. Click **Confirm & Index**. The crawler processes pages and status updates from \`PENDING\` &rarr; \`PROCESSING\` &rarr; \`COMPLETED\`.

## Phase 3: Tune Persona & Guardrails

Navigate to **Instructions**:
- **Personality**: *"Friendly, concise, and professional. Always greet the user warmly and provide direct answers before elaborating."*
- **Guardrails**: *"If asked about refunds, instruct the customer to email billing@yoursite.com. Do not promise exceptions."*
- **Clarification**: *"If a customer asks a vague question like 'it is not working', ask for their operating system and error code."*

## Phase 4: Playground Testing & Verification

Switch to the **Playground** tab:
1. Ask 3 realistic customer questions:
   - *"What is your return policy?"*
   - *"How do I reset my password?"*
   - *"Can I pay with PayPal?"*
2. Check the **Citations** accordion under each response. Confirm that the answers link directly to your indexed knowledge base chunks.
3. Once satisfied, click **Publish Agent**.
    `
  },
  {
    id: 'tutorial-train-website-content',
    slug: 'tutorials/train-agent-using-website-content',
    title: 'Tutorial: Train an Agent on Complex Website Structures',
    description: 'Learn how to clean, crawl, filter, and structure website content for optimal RAG vector retrieval.',
    section: 'learning',
    category: 'Tutorials',
    tags: ['tutorial', 'crawler', 'rag', 'data-preparation'],
    author: 'Data Engineering Lead',
    createdAt: '2026-10-21',
    updatedAt: '2026-11-03',
    status: 'PUBLISHED',
    version: '1.2',
    readingTimeMinutes: 6,
    order: 2,
    headings: [
      { id: 'why-clean-data', title: 'Why Clean Data Prevents Hallucinations', level: 2 },
      { id: 'crawl-selection', title: 'Step 1: Selective Ingestion vs. Blind Crawling', level: 2 },
      { id: 'custom-blocks', title: 'Step 2: Managing Block Selections', level: 2 },
      { id: 're-indexing-diff', title: 'Step 3: Triggering Diffs & Retraining', level: 2 }
    ],
    content: `
## Why Clean Data Prevents Hallucinations

An AI agent is only as reliable as the data it retrieves. If you crawl pages containing marketing hype, promotional banners, or outdated 2021 terms of service, the agent risks providing contradictory guidance.

## Step 1: Selective Ingestion vs. Blind Crawling

When crawling an e-commerce or SaaS site:
- **Include**: Knowledge base, FAQ pages, product specification sheets, warranty terms.
- **Exclude**: Blog comments, author archives, login pages, shopping cart pages, press releases.

Use Yedii's sitemap URL filter to whitelist paths like \`/help/*\` and \`/docs/*\`.

## Step 2: Managing Block Selections

Yedii's **Data Sources** inspector lets you view every scraped block:
1. Click **Inspect Content** on any crawled URL.
2. If header navigation links or privacy cookie banners were captured, click **Disable Block**.
3. Disabled blocks are instantly excluded from vector search calculations.

## Step 3: Triggering Diffs & Retraining

When your team updates help articles:
- Trigger \`POST /api/v1/crawler/recrawling\`.
- Yedii compares hash signatures and only recalculates embeddings for altered paragraphs, conserving your computation quota.
    `
  },

  // ── Use Cases ────────────────────────────────────────────
  {
    id: 'use-case-ecommerce',
    slug: 'use-cases/ecommerce-customer-support',
    title: 'Use Case: E-Commerce Support & Order Resolution',
    description: 'How modern DTC brands and online retailers automate 70%+ of order status, return, and shipping inquiries.',
    section: 'learning',
    category: 'Use Cases',
    tags: ['ecommerce', 'order-tracking', 'returns', 'dtc'],
    author: 'Solutions Architecture',
    createdAt: '2026-10-23',
    updatedAt: '2026-11-05',
    status: 'PUBLISHED',
    version: '1.2',
    readingTimeMinutes: 5,
    order: 3,
    headings: [
      { id: 'the-problem', title: 'The Problem: High-Volume Repetitive Inquiries', level: 2 },
      { id: 'solution-architecture', title: 'The Yedii Solution Architecture', level: 2 },
      { id: 'sample-configuration', title: 'Recommended Agent Configuration', level: 2 },
      { id: 'measurable-impact', title: 'Measurable Results', level: 2 }
    ],
    content: `
## The Problem: High-Volume Repetitive Inquiries

During seasonal peaks, 65-80% of e-commerce tickets involve repetitive questions:
- *"Where is my package?"*
- *"Can I change my shipping address?"*
- *"What is your holiday return window?"*
- *"Do you ship to Germany or Canada?"*

Human agents get overwhelmed, response times spike to 24+ hours, and cart abandonment increases.

## The Yedii Solution Architecture

1. **Embedded Storefront Widget**: The chatbot launcher sits on every product and checkout page with quick-starter prompts.
2. **Dynamic Ingestion**: Ingests store shipping policies, return guidelines, sizing charts, and brand FAQs.
3. **Guardrailed Policy Enforcement**: The agent accurately quotes exact delivery windows and return rules without making unauthorized promises.

## Recommended Agent Configuration

- **Primary Model**: GPT-4o Mini or Gemini 1.5 Flash (for lightning-fast < 800ms response times).
- **Temperature**: \`0.1\` (Ensures strict adherence to store policies).
- **Starter Questions**:
  - *"Track my order"*
  - *"Start a return or exchange"*
  - *"Shipping fees & international delivery"*
  - *"Check sizing guide"*

## Measurable Results

- **78% First Contact Resolution (FCR)** within the chat widget.
- **Under 2-second response latency** 24 hours a day, 7 days a week.
- **Zero human agent burnout** during Black Friday and Cyber Monday spikes.
    `
  },
  {
    id: 'use-case-saas-technical',
    slug: 'use-cases/saas-customer-support',
    title: 'Use Case: B2B SaaS Technical Support Automation',
    description: 'Empower developer and business customers to resolve configuration questions, API bugs, and authentication issues instantly.',
    section: 'learning',
    category: 'Use Cases',
    tags: ['saas', 'b2b', 'developer-support', 'api'],
    author: 'Solutions Architecture',
    createdAt: '2026-10-25',
    updatedAt: '2026-11-04',
    status: 'PUBLISHED',
    version: '1.2',
    readingTimeMinutes: 5,
    order: 4,
    headings: [
      { id: 'saas-support-challenge', title: 'The Challenge of Complex SaaS Support', level: 2 },
      { id: 'technical-rag', title: 'High-Density Technical RAG', level: 2 },
      { id: 'code-generation', title: 'Accurate Code Snippet Delivery', level: 2 }
    ],
    content: `
## The Challenge of Complex SaaS Support

B2B SaaS software features intricate permission hierarchies, webhooks, API tokens, and SDK integrations. Customers cannot wait hours for an engineer to review their log errors.

## High-Density Technical RAG

By indexing:
- OpenAPI / Swagger JSON specifications.
- GitHub documentation repositories.
- Changelog and release notes.

The Yedii AI agent can diagnose error codes like \`AUTH_INVALID_SIGNATURE\` or \`RATE_LIMIT_EXCEEDED\` and give immediate, actionable solutions.

## Accurate Code Generation

Yedii formats responses with syntax-highlighted code blocks in cURL, JavaScript, Python, or Go, pulling directly from verified documentation samples to eliminate guesswork.
    `
  },

  // ── Best Practices ───────────────────────────────────────
  {
    id: 'best-practices-reducing-hallucinations',
    slug: 'best-practices/reducing-hallucinations',
    title: 'Best Practices: Eliminating AI Hallucinations in Production',
    description: 'Hard-won engineering practices for ensuring 100% truthful, verifiable, and grounded customer support answers.',
    section: 'learning',
    category: 'Best Practices',
    tags: ['hallucinations', 'grounding', 'reliability', 'best-practices'],
    author: 'AI Safety & Alignment',
    createdAt: '2026-10-28',
    updatedAt: '2026-11-05',
    status: 'PUBLISHED',
    version: '1.2',
    readingTimeMinutes: 6,
    featured: true,
    order: 5,
    headings: [
      { id: 'what-causes-hallucinations', title: 'What Causes Hallucinations?', level: 2 },
      { id: 'rule-1-temperature', title: 'Rule 1: Keep Temperature Below 0.2', level: 2 },
      { id: 'rule-2-negative-constraints', title: 'Rule 2: Explicit Refusal Guardrails', level: 2 },
      { id: 'rule-3-score-threshold', title: 'Rule 3: Set Vector Score Thresholds', level: 2 },
      { id: 'rule-4-unresolved', title: 'Rule 4: Leverage Unresolved Conversations', level: 2 }
    ],
    content: `
## What Causes Hallucinations?

LLMs hallucinate when they encounter:
1. High sampling temperature encouraging speculative text generation.
2. Low-confidence vector retrieval where no relevant documentation chunk actually exists.
3. Ambiguous system instructions that instruct the agent to "always answer the customer's question" without allowing polite admission of ignorance.

## Rule 1: Keep Temperature Below 0.2

In **Agent Settings > AI Engine**, set the temperature to \`0.0\` or \`0.1\`. This forces greedy, deterministic decoding, making the model extract facts directly from the retrieved context rather than improvising.

## Rule 2: Explicit Refusal Guardrails

Add this exact clause into your agent's **Guardrails** prompt section:

> *"Only answer questions using the facts provided in the retrieved documentation context. If the answer cannot be found or verified in the context, do NOT invent an answer. State clearly: 'I don't have verified documentation regarding this topic. Please contact our support team directly for assistance.'"*

## Rule 3: Set Vector Score Thresholds

In **Chatbot LLM Model Config**, configure \`scoreThreshold: 0.72\`. If no retrieved knowledge chunk achieves a cosine similarity score above 0.72, the agent triggers its safe refusal fallback rather than passing irrelevant chunks to the LLM.

## Rule 4: Leverage Unresolved Conversations

Periodically review the **Inbox > Unresolved Conversations** view. Every customer question that the agent declined to answer represents a genuine documentation gap. Add an article covering that topic, click **Re-index**, and your agent automatically learns the answer.
    `
  },
  {
    id: 'best-practices-optimizing-credits',
    slug: 'best-practices/optimizing-ai-credit-consumption',
    title: 'Best Practices: Optimizing AI Credit & Token Consumption',
    description: 'Learn how to maximize your monthly AI credits by pruning context windows, selecting optimal model tiers, and caching common queries.',
    section: 'learning',
    category: 'Best Practices',
    tags: ['credits', 'cost-optimization', 'tokens', 'efficiency'],
    author: 'Platform Performance Team',
    createdAt: '2026-10-30',
    updatedAt: '2026-11-04',
    status: 'PUBLISHED',
    version: '1.2',
    readingTimeMinutes: 5,
    order: 6,
    headings: [
      { id: 'credit-drivers', title: 'Where Do Tokens Go?', level: 2 },
      { id: 'strategy-model-tier', title: 'Strategy 1: Align Model Tiers to Use Cases', level: 2 },
      { id: 'strategy-top-k', title: 'Strategy 2: Optimize Top-K Chunk Limits', level: 2 },
      { id: 'strategy-rate-limits', title: 'Strategy 3: Enforce Visitor Session Caps', level: 2 }
    ],
    content: `
## Where Do Tokens Go?

Total token consumption per message consists of:
\`Total = System Prompt + Chat History + Retrieved Knowledge Chunks + Visitor Query + Generated Output\`

If your system prompt is 2,000 words and you inject 10 large chunks per query, every simple "hello" consumes excessive tokens.

## Strategy 1: Align Model Tiers to Use Cases

- For standard storefront FAQ bots: Select **Gemini 1.5 Flash** or **GPT-4o Mini** (0.5x credit multiplier).
- Reserve flagship models like **Claude 3.5 Sonnet** (1.5x credit multiplier) for developer API agents requiring deep code generation.

## Strategy 2: Optimize Top-K Chunk Limits

In **Retrieval Config**:
- Set \`topK: 3\` or \`topK: 4\` (instead of 8 or 10).
- Enable \`deduplicateResults: true\`.
This provides all necessary facts while cutting context token overhead by 50%.

## Strategy 3: Enforce Visitor Session Caps

In **Rate Limit Config**:
- Enable \`rateLimit: { isEnabled: true, maxMessages: 20, timeWindow: 60 }\`.
This prevents malicious bot scripts from spamming your widget and exhausting your monthly credit quota in minutes.
    `
  },

  // ── Examples & Templates ─────────────────────────────────
  {
    id: 'template-customer-support',
    slug: 'templates/customer-support-agent-template',
    title: 'Template: Customer Support Agent Configuration',
    description: 'A production-tested agent template optimized for rapid customer issue triage, friendly tone, and clean escalation paths.',
    section: 'learning',
    category: 'Examples & Templates',
    tags: ['templates', 'customer-support', 'prompt', 'copy-paste'],
    author: 'Solutions Team',
    createdAt: '2026-10-27',
    updatedAt: '2026-11-05',
    status: 'PUBLISHED',
    version: '1.2',
    readingTimeMinutes: 4,
    order: 7,
    headings: [
      { id: 'template-overview', title: 'Template Overview', level: 2 },
      { id: 'copy-paste-prompt', title: 'Ready-to-Use System Prompt', level: 2 },
      { id: 'recommended-settings', title: 'Recommended Agent Settings', level: 2 }
    ],
    content: `
## Template Overview

- **Intended Purpose**: General customer care, account setup, billing questions, and order inquiries.
- **Tone**: Empathetic, warm, solution-oriented, concise.
- **Recommended Model**: GPT-4o Mini (Primary) / Gemini 1.5 Flash (Fallback).

## Ready-to-Use System Prompt

Copy this configuration directly into **Agent > Instructions**:

\`\`\`markdown
### Personality & Voice
You are a warm, courteous, and efficient customer support specialist for Yedii.
Always address the user with respect. Keep answers under 3 concise paragraphs unless complex steps are requested.

### Goal
Resolve customer questions on first contact using only verified knowledge base documentation.

### Guardrails
- Never speculate about unreleased product features.
- Never negotiate pricing or offer unauthorized discounts.
- If the customer expresses extreme dissatisfaction, provide our escalation link: https://support.example.com/ticket.
- If information is missing from the context, state: "I don't have this documented in our knowledge base. Would you like me to connect you with a team member?"

### Formatting
- Use bullet points for sequential steps.
- Bold critical terms, button labels, and URLs.
\`\`\`

## Recommended Agent Settings

- **Temperature**: \`0.2\`
- **Suggested Questions**: Enabled
- **Top-K Chunks**: \`3\`
    `
  },
  {
    id: 'template-technical-support',
    slug: 'templates/technical-support-agent-template',
    title: 'Template: Technical Support & Developer Agent',
    description: 'A developer-grade agent template equipped for API debugging, code snippets, and structured error diagnosis.',
    section: 'learning',
    category: 'Examples & Templates',
    tags: ['templates', 'developer', 'technical-support', 'code'],
    author: 'DevRel Team',
    createdAt: '2026-10-29',
    updatedAt: '2026-11-04',
    status: 'PUBLISHED',
    version: '1.2',
    readingTimeMinutes: 5,
    order: 8,
    headings: [
      { id: 'tech-overview', title: 'Template Overview', level: 2 },
      { id: 'tech-prompt', title: 'System Prompt Configuration', level: 2 },
      { id: 'tech-settings', title: 'Recommended Settings', level: 2 }
    ],
    content: `
## Template Overview

- **Intended Purpose**: Developer onboarding, REST API troubleshooting, webhook verification, SDK debugging.
- **Tone**: Direct, authoritative, technically rigorous, devoid of marketing filler.
- **Recommended Model**: Claude 3.5 Sonnet (Primary) / GPT-4o (Fallback).

## System Prompt Configuration

\`\`\`markdown
### Role
You are a Principal Solutions Architect assisting developers with API and SDK integrations.

### Guidance Rules
1. When asked how to perform an API call, always provide a copy-pasteable cURL and TypeScript snippet with typed request/response examples.
2. Emphasize security: always remind developers to keep API keys in environment variables, never committed to client-side bundles.
3. If an error code is provided, cross-reference known status codes from the API documentation and explain the root cause and remediation.

### Code Formatting
- Code blocks must declare the language identifier (\`\`\`typescript, \`\`\`bash).
- Provide minimal, clean code without unnecessary external dependencies.
\`\`\`

## Recommended Settings

- **Temperature**: \`0.0\` (Strictly deterministic).
- **Reranking**: Enabled (\`topN: 5\`).
    `
  },

  // ── Glossary ─────────────────────────────────────────────
  {
    id: 'glossary-terms',
    slug: 'glossary/ai-customer-support-terms',
    title: 'Glossary: Enterprise AI & Customer Support Terms',
    description: 'A comprehensive dictionary of AI, RAG, vector embeddings, and customer support metrics used across the Yedii platform.',
    section: 'learning',
    category: 'Glossary',
    tags: ['glossary', 'definitions', 'rag', 'terms'],
    author: 'Editorial Team',
    createdAt: '2026-10-15',
    updatedAt: '2026-11-05',
    status: 'PUBLISHED',
    version: '1.2',
    readingTimeMinutes: 5,
    order: 9,
    headings: [
      { id: 'ai-agent', title: 'AI Agent', level: 2 },
      { id: 'ai-credits', title: 'AI Credits', level: 2 },
      { id: 'embeddings', title: 'Embeddings & Vectors', level: 2 },
      { id: 'rag', title: 'Retrieval-Augmented Generation (RAG)', level: 2 },
      { id: 'first-contact-resolution', title: 'First Contact Resolution (FCR)', level: 2 },
      { id: 'system-instructions', title: 'System Instructions', level: 2 }
    ],
    content: `
## AI Agent
An autonomous software entity powered by large language models, equipped with custom system instructions, knowledge retrieval capabilities, and guardrails to converse with customers and resolve tasks without human supervision.

## AI Credits
The metering currency used across Yedii to track model compute. One credit corresponds to standard conversational turns (approximately 1,500 input/output tokens).

## Embeddings & Vectors
Mathematical representations of text chunks in high-dimensional vector space. Chunks with similar semantic meaning (e.g., *"How do I cancel?"* and *"Where is the unsubscribe button?"*) share close spatial proximity, enabling fast semantic search.

## Retrieval-Augmented Generation (RAG)
An AI architecture that searches a private database or document store for authoritative factual passages before querying an LLM, ensuring the generated response is strictly grounded in real company documentation.

## First Contact Resolution (FCR)
The percentage of customer inquiries resolved completely during the visitor's very first interaction, without requiring escalation or follow-up messages.

## System Instructions
The foundational directive prompt given to an LLM before any customer conversation starts. In Yedii, system instructions are partitioned into personality, goal, business context, guardrails, formatting, and prompt encapsulation.
    `
  }
];

