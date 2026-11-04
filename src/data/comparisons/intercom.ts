import { CompetitorComparison } from "./types";

export const intercomComparison: CompetitorComparison = {
  id: "intercom",
  slug: "yedii-vs-intercom",
  name: "Intercom",
  brandColor: "#0057FF",
  tagline: "Legacy Messaging Suite vs. AI-First Autonomous Support Platform",
  shortDescription:
    "Intercom combines human ticketing with its Fin AI add-on charged per resolution. Yedii delivers a dedicated AI-first agent platform with transparent monthly usage and multi-model flexibility.",
  cardHighlights: [
    "Transparent usage vs. $0.99 per-resolution surcharge",
    "Multi-model flexibility (Claude 3.5, GPT-4o, Llama 3) vs. single LLM lock-in",
    "Interactive AI Playground with confidence scoring",
    "Direct website and PDF knowledge RAG without help-desk migration",
  ],
  meta: {
    title: "Yedii vs Intercom | AI Customer Support Platform Comparison (2026)",
    description:
      "Compare Yedii and Intercom for AI customer support. Explore differences in AI agent creation, multi-model support, RAG grounding, pricing models, and playground testing.",
    keywords: [
      "Yedii vs Intercom",
      "Intercom alternative",
      "Intercom Fin AI comparison",
      "AI customer support software",
      "best AI chatbot for customer service",
    ],
  },
  hero: {
    title: "Yedii vs Intercom: Which AI Customer Support Platform Is Right for You?",
    subtitle:
      "Looking for the best way to deploy autonomous support agents? See how Yedii's AI-first architecture, multi-model intelligence, and transparent pricing compare to Intercom's legacy messaging suite.",
  },
  overview: {
    yediiSummary:
      "Yedii is a purpose-built, AI-first customer support platform. It enables engineering, product, and support teams to build, test, and deploy autonomous agents in minutes. With support for multiple LLMs (Claude 3.5 Sonnet, GPT-4o, and open models), direct website crawling, PDF ingestion, and a real-time prompt playground, Yedii eliminates vendor lock-in and unpredictable per-resolution fees.",
    competitorSummary:
      "Intercom is a comprehensive customer communications platform originally built for live chat, in-app messaging, and shared team inboxes. In recent years, Intercom introduced Fin AI Agent, an AI add-on that resolves customer questions based on support content, priced primarily on a per-successful-resolution model on top of human seat licenses.",
    coreDifference:
      "Intercom is designed as an all-in-one human helpdesk with AI added as a premium layer ($0.99 per resolution). Yedii is architected from the ground up as an autonomous AI agent runtime with full developer control, model switching, and predictable cost structures.",
  },
  featureTable: [
    {
      name: "AI Customer Support Agents",
      category: "core",
      yedii: {
        supported: true,
        label: "Autonomous 24/7 Agents",
        detail: "Custom personas, multi-step reasoning, and automatic human escalation.",
      },
      competitor: {
        supported: true,
        label: "Fin AI Agent (Add-on)",
        detail: "Trained on Intercom articles, charges $0.99 per resolution.",
      },
    },
    {
      name: "AI Playground",
      category: "core",
      yedii: {
        supported: true,
        label: "Interactive Live Sandbox",
        detail: "Simulate queries, inspect source chunk tokens, and test system prompts in real time.",
      },
      competitor: {
        supported: "partial",
        label: "Preview Test Panel",
        detail: "Test answers inside Fin setup, but cannot inspect token scores or alternate LLMs.",
      },
    },
    {
      name: "Knowledge Base",
      category: "knowledge",
      yedii: {
        supported: true,
        label: "Multi-Source Knowledge RAG",
        detail: "Unified repository syncing websites, files, APIs, and documentation.",
      },
      competitor: {
        supported: true,
        label: "Intercom Articles / External Content",
        detail: "Syncs Intercom Help Center, Zendesk, or public URLs into Fin.",
      },
    },
    {
      name: "Website Knowledge Training",
      category: "knowledge",
      yedii: {
        supported: true,
        label: "Automated Sitemap & URL Crawler",
        detail: "Deep recursive crawl, incremental change detection, and periodic re-indexing.",
      },
      competitor: {
        supported: true,
        label: "Public URL Ingestion",
        detail: "Syncs public pages with manual or scheduled refresh.",
      },
    },
    {
      name: "PDF Knowledge Training",
      category: "knowledge",
      yedii: {
        supported: true,
        label: "AST-Aware Document Parser",
        detail: "Parses complex tables, headers, and code snippets in PDFs, DOCX, and CSV files.",
      },
      competitor: {
        supported: true,
        label: "PDF Uploads",
        detail: "Supports PDF and file uploads for Fin content library.",
      },
    },
    {
      name: "Custom AI Persona",
      category: "customization",
      yedii: {
        supported: true,
        label: "Full Persona Calibration",
        detail: "Define system tone, domain persona, greeting style, and strict behavioral rules.",
      },
      competitor: {
        supported: "partial",
        label: "Tone & Voice Settings",
        detail: "Select friendly, formal, or neutral tone with custom guidance snippets.",
      },
    },
    {
      name: "Custom Agent Behavior",
      category: "customization",
      yedii: {
        supported: true,
        label: "Fine-Grained Guardrails",
        detail: "Strict boundary instructions, prompt-injection defense, and fallback redirects.",
      },
      competitor: {
        supported: true,
        label: "Custom Fin Guidance",
        detail: "Provide instructions on what Fin should and should not answer.",
      },
    },
    {
      name: "Multiple AI Model Support",
      category: "core",
      yedii: {
        supported: true,
        label: "Claude 3.5, GPT-4o, Llama 3",
        detail: "Switch foundation models per agent based on latency, reasoning, or privacy needs.",
      },
      competitor: {
        supported: false,
        label: "Single Vendor Lock-In",
        detail: "Fin AI is tightly coupled to OpenAI models selected by Intercom.",
      },
    },
    {
      name: "RAG-Based Responses",
      category: "core",
      yedii: {
        supported: true,
        label: "Hybrid Dense + Sparse RAG",
        detail: "Exact citation links, BM25 + vector search, and cross-encoder reranking.",
      },
      competitor: {
        supported: true,
        label: "Article Citation Links",
        detail: "Answers include source links to relevant help center articles.",
      },
    },
    {
      name: "Chatbot Customization",
      category: "customization",
      yedii: {
        supported: true,
        label: "White-Label & CSS Theming",
        detail: "Custom colors, dark mode, typography, launcher icons, and custom domain triggers.",
      },
      competitor: {
        supported: "partial",
        label: "Messenger Theming",
        detail: "Branding colors and wallpaper customization; full whitelabeling requires higher tier.",
      },
    },
    {
      name: "Website Integration",
      category: "integration",
      yedii: {
        supported: true,
        label: "1-Line Embed & React/Next SDK",
        detail: "Lightweight <38KB bundle, zero layout shift, seamless SPA route transitions.",
      },
      competitor: {
        supported: true,
        label: "Intercom Messenger Script",
        detail: "Full messenger widget script with rich launcher apps.",
      },
    },
    {
      name: "Human Agent Handoff",
      category: "core",
      yedii: {
        supported: true,
        label: "Smart Handoff & Webhooks",
        detail: "Handoff to Zendesk, Freshdesk, Slack, or webhook triggers with full conversation logs.",
      },
      competitor: {
        supported: true,
        label: "Intercom Team Inbox",
        detail: "Seamless native escalation to human agents in Intercom inbox.",
      },
    },
    {
      name: "Analytics and Reporting",
      category: "enterprise",
      yedii: {
        supported: true,
        label: "AI Confidence & Query Telemetry",
        detail: "Tracks resolution rates, sentiment score, unanswered questions, and token costs.",
      },
      competitor: {
        supported: true,
        label: "Fin AI Reporting & Inbox Metrics",
        detail: "Comprehensive resolution rate, CSAT, and agent productivity dashboards.",
      },
    },
    {
      name: "API and Developer Support",
      category: "enterprise",
      yedii: {
        supported: true,
        label: "Modern REST, SSE & MCP",
        detail: "Streaming chat APIs, Model Context Protocol endpoints, and HMAC webhooks.",
      },
      competitor: {
        supported: true,
        label: "Intercom REST APIs & Webhooks",
        detail: "Mature API ecosystem for conversations, contacts, and custom apps.",
      },
    },
  ],
  aiCapabilities: [
    {
      dimension: "Agent Creation Experience",
      yedii:
        "Intuitive 3-step setup: connect knowledge source, customize system instructions, and test live in the interactive playground. Takes under 5 minutes.",
      competitor:
        "Requires setting up an Intercom workspace, configuring human inbox settings, and activating Fin AI as an add-on workflow.",
      verdict: "Yedii is faster and dedicated to AI agent setup without helpdesk bloat.",
    },
    {
      dimension: "Knowledge Ingestion & Sync",
      yedii:
        "Crawls any website, documentation portal, or uploaded PDF/DOCX automatically with semantic chunking and instant re-sync triggers.",
      competitor:
        "Best suited for teams already hosting content in Intercom Help Center; external content sync is available but requires manual verification.",
      verdict: "Yedii offers more flexible direct-source RAG parsing.",
    },
    {
      dimension: "Response Accuracy & Grounding",
      yedii:
        "Strict grounding toggle ensures the agent never guesses. Hybrid search (dense + BM25) returns precise paragraph citations in every answer.",
      competitor:
        "Fin AI leverages prompt grounding against article snippets, but occasionally provides generic answers when help articles lack specific detail.",
      verdict: "Both emphasize grounding; Yedii provides deeper token-level inspection.",
    },
    {
      dimension: "Customization & Guardrails",
      yedii:
        "Full control over persona, system prompts, negative constraints, domain whitelisting, and widget CSS tokens.",
      competitor:
        "Provides basic tone toggles and custom Fin instructions within Intercom's proprietary messenger boundary.",
      verdict: "Yedii offers broader developer customization.",
    },
    {
      dimension: "Model Flexibility",
      yedii:
        "Switch dynamically between Claude 3.5 Sonnet, GPT-4o, and Llama 3 models depending on your task reasoning or compliance needs.",
      competitor:
        "Locked to Intercom's chosen OpenAI model configuration. No option to choose Anthropic or open-weight models.",
      verdict: "Yedii gives complete freedom from single-provider lock-in.",
    },
    {
      dimension: "Testing & Deployment Workflow",
      yedii:
        "Dedicated AI Playground with live parameter tuning, simulated user personas, token usage telemetry, and 1-line script deployment.",
      competitor:
        "Preview mode inside Fin settings allows testing against sample questions before going live on the messenger.",
      verdict: "Yedii's playground provides deeper technical diagnostic controls.",
    },
  ],
  pricing: {
    yedii: {
      platformName: "Yedii",
      startingPrice: "$29",
      billingPeriod: "per month (Starter tier) with unlimited agents and predictable message quotas",
      aiPricingModel: "Flat-rate monthly plan with included message quotas; no surprise per-resolution tax",
      planRestrictions: "Free tier includes 100 messages/mo; Pro plan at $79/mo includes 5,000 messages and full API access",
      verificationDate: "October 2026",
      highlights: [
        "No $0.99 fee per successful resolution",
        "Includes AI Playground and multiple AI models",
        "Unlimited website and document knowledge training",
        "Transparent overage rates with zero lock-in",
      ],
    },
    competitor: {
      platformName: "Intercom",
      startingPrice: "$29 to $39/seat/mo",
      billingPeriod: "per human seat/month (Essential / Advanced plans) PLUS Fin AI resolution fees",
      aiPricingModel: "$0.99 per successful resolution for Fin AI Agent in addition to base seat subscriptions",
      planRestrictions: "Fin AI requires a paid Intercom subscription. High conversation volume can result in thousands of dollars in monthly resolution surcharges.",
      verificationDate: "October 2026 (Verified from official Intercom pricing page)",
      highlights: [
        "Base subscription starts at $29 or $39 per user seat",
        "Fin AI billed at $0.99 for every question resolved without human intervention",
        "Additional add-on costs for advanced security, product tours, and WhatsApp seats",
      ],
    },
    summary:
      "If your business resolves 3,000 AI inquiries per month, Intercom Fin adds approximately $2,970/month in resolution fees on top of human seat costs. With Yedii, you pay a flat monthly subscription with predictable usage, saving over 70% in operational costs as you scale.",
  },
  prosAndConsiderations: {
    yediiPros: [
      "AI-first architecture with rapid 5-minute agent deployment",
      "Predictable flat-rate pricing without punitive $0.99 resolution surcharges",
      "Multi-model flexibility (Claude 3.5 Sonnet, GPT-4o, Llama 3)",
      "Built-in AI Playground for rigorous prompt testing and confidence calibration",
      "Lightweight widget (<38KB) with deep CSS and white-label customization",
    ],
    yediiConsiderations: [
      "Focused purely on AI agents and support automation; does not provide a built-in outbound email marketing campaign suite",
      "Requires using your existing helpdesk (Zendesk, Freshdesk, Slack) if you require complex multi-tier human routing queues",
    ],
    competitorPros: [
      "Established all-in-one platform for live chat, team inboxes, and user engagement",
      "Fin AI is well-integrated with the Intercom human team inbox",
      "Broad ecosystem of marketplace integrations and native mobile SDKs",
    ],
    competitorConsiderations: [
      "High total cost of ownership driven by $0.99 per-resolution fees that scale with your success",
      "Locked to a single LLM vendor without the ability to switch models",
      "Significant platform bloat if you only need an autonomous AI support agent",
    ],
  },
  faqs: [
    {
      question: "Can I use Yedii if I already have Intercom for human support reps?",
      answer:
        "Yes! Many companies use Yedii as their front-line AI intelligence layer to handle first-line customer questions, and configure Yedii to seamlessly escalate complex tickets into their Intercom inbox via webhooks.",
    },
    {
      question: "How does Yedii's pricing compare to Intercom's $0.99 per resolution?",
      answer:
        "Intercom charges $0.99 every time Fin successfully resolves a customer issue. If your brand handles 2,500 questions a month, that's nearly $2,475 in add-on fees alone. Yedii charges predictable flat monthly subscriptions with included message quotas, keeping your costs stable even as query volume doubles.",
    },
    {
      question: "Does Yedii support the same knowledge sources as Intercom Fin?",
      answer:
        "Yes, and more. Yedii crawls websites, sitemaps, API documentation, PDFs, DOCX, CSVs, and markdown files using advanced AST-aware semantic chunking. You don't need to migrate your existing documentation to use Yedii.",
    },
    {
      question: "Can I switch between Claude 3.5 Sonnet and GPT-4o in Yedii?",
      answer:
        "Yes. Unlike Intercom which locks you to its internal model choice, Yedii allows you to select Claude 3.5 Sonnet, GPT-4o, or high-speed open-weight models per agent directly from the dashboard.",
    },
  ],
};

