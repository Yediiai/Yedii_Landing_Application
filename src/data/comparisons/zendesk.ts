import { CompetitorComparison } from "./types";

export const zendeskComparison: CompetitorComparison = {
  id: "zendesk",
  slug: "yedii-vs-zendesk",
  name: "Zendesk",
  brandColor: "#03363D",
  tagline: "Heavyweight Enterprise Ticketing vs. Agile Autonomous AI Support",
  shortDescription:
    "Zendesk is a legacy ticketing behemoth with complex setup and costly Advanced AI add-ons ($50/agent/mo). Yedii is an agile, AI-first platform deployable in under 5 minutes without ticketing bloat.",
  cardHighlights: [
    "No $50/agent/mo Advanced AI add-on penalty",
    "5-minute no-code setup vs. multi-week enterprise consulting",
    "Multi-model flexibility (Claude 3.5, GPT-4o) vs. black-box proprietary AI",
    "Instant website & PDF knowledge training with zero migration",
  ],
  meta: {
    title: "Yedii vs Zendesk | AI Customer Support Platform Comparison (2026)",
    description:
      "Compare Yedii and Zendesk for AI customer support. Discover how Yedii's AI-first agent platform compares with Zendesk's legacy ticketing workflows and Advanced AI add-on fees.",
    keywords: [
      "Yedii vs Zendesk",
      "Zendesk alternative",
      "Zendesk AI comparison",
      "AI ticketing alternative",
      "AI customer support software",
    ],
  },
  hero: {
    title: "Yedii vs Zendesk: Which AI Customer Support Platform Is Right for You?",
    subtitle:
      "Comparing enterprise support architectures? Discover why modern teams choose Yedii's lightweight, autonomous AI agent platform over Zendesk's expensive, complex ticketing infrastructure.",
  },
  overview: {
    yediiSummary:
      "Yedii is built specifically for the generative AI era. It empowers businesses to train, test, and deploy conversational AI support agents directly against their websites, help articles, and technical manuals. With an interactive AI Playground, multi-model support, and transparent monthly pricing, Yedii delivers instant automated customer resolutions without cumbersome enterprise software overhead.",
    competitorSummary:
      "Zendesk is an established customer service suite designed around human agent ticketing, SLA management, phone call routing, and enterprise workflows. While Zendesk offers Answer Bot and an 'Advanced AI' add-on, its core architecture remains centered on human ticket queues, requiring complex configuration and significant per-agent seat licensing.",
    coreDifference:
      "Zendesk requires extensive setup, enterprise consulting, and expensive per-seat licenses plus $50/agent/mo for Advanced AI. Yedii gives you an autonomous AI support workforce in minutes with transparent pricing and full developer flexibility.",
  },
  featureTable: [
    {
      name: "AI Customer Support Agents",
      category: "core",
      yedii: {
        supported: true,
        label: "Autonomous 24/7 Agents",
        detail: "Autonomous multi-step reasoning, RAG citations, and automated resolution.",
      },
      competitor: {
        supported: true,
        label: "Zendesk AI / Answer Bot",
        detail: "Macro suggestions, ticket triage, and conversational bot workflows.",
      },
    },
    {
      name: "AI Playground",
      category: "core",
      yedii: {
        supported: true,
        label: "Interactive Live Sandbox",
        detail: "Real-time token telemetry, confidence scores, and instant instruction tuning.",
      },
      competitor: {
        supported: false,
        label: "No Dedicated Playground",
        detail: "Requires testing inside bot flow builder or sandbox environment.",
      },
    },
    {
      name: "Knowledge Base",
      category: "knowledge",
      yedii: {
        supported: true,
        label: "Multi-Source Knowledge RAG",
        detail: "Directly syncs web domains, sitemaps, PDFs, and API documentation.",
      },
      competitor: {
        supported: true,
        label: "Zendesk Guide",
        detail: "Full-featured knowledge base software for human agents and customers.",
      },
    },
    {
      name: "Website Knowledge Training",
      category: "knowledge",
      yedii: {
        supported: true,
        label: "Automated Sitemap & URL Crawler",
        detail: "Discovers and indexes subpages with automatic daily/weekly re-sync.",
      },
      competitor: {
        supported: "partial",
        label: "Article Sync / External Crawl",
        detail: "Primarily indexes Zendesk Guide articles; external content requires integration.",
      },
    },
    {
      name: "PDF Knowledge Training",
      category: "knowledge",
      yedii: {
        supported: true,
        label: "Native Document Ingestion",
        detail: "Parses PDFs, DOCX, CSV, and markdown files with AST-aware layout retention.",
      },
      competitor: {
        supported: "partial",
        label: "Manual Article Creation",
        detail: "Content typically must be converted into Zendesk Guide help articles.",
      },
    },
    {
      name: "Custom AI Persona",
      category: "customization",
      yedii: {
        supported: true,
        label: "Full Persona Customization",
        detail: "Customize tone, brand persona, greeting triggers, and domain guardrails.",
      },
      competitor: {
        supported: "partial",
        label: "Tone Calibration in Advanced AI",
        detail: "Allows tone adjustment (friendlier/more formal) within Advanced AI suite.",
      },
    },
    {
      name: "Custom Agent Behavior",
      category: "customization",
      yedii: {
        supported: true,
        label: "Fine-Grained System Prompts",
        detail: "Define system rules, refusal thresholds, and fallback criteria with zero coding.",
      },
      competitor: {
        supported: true,
        label: "Bot Flow Builder & Triggers",
        detail: "Visual decision-tree logic paired with AI intent recognition.",
      },
    },
    {
      name: "Multiple AI Model Support",
      category: "core",
      yedii: {
        supported: true,
        label: "Claude 3.5, GPT-4o, Llama 3",
        detail: "Choose the optimal model for speed, intelligence, and compliance.",
      },
      competitor: {
        supported: false,
        label: "Proprietary Model Selection",
        detail: "Model choices are managed internally by Zendesk; customers cannot switch models.",
      },
    },
    {
      name: "RAG-Based Responses",
      category: "core",
      yedii: {
        supported: true,
        label: "Dense + Sparse Hybrid RAG",
        detail: "Generates grounded answers backed by clickable source citations.",
      },
      competitor: {
        supported: true,
        label: "Generative Search Answers",
        detail: "Synthesizes answers from approved Zendesk Guide articles.",
      },
    },
    {
      name: "Chatbot Customization",
      category: "customization",
      yedii: {
        supported: true,
        label: "Full CSS & White-Label Theming",
        detail: "Customize brand colors, launcher badges, position, and dark mode.",
      },
      competitor: {
        supported: true,
        label: "Zendesk Web Widget Theming",
        detail: "Configurable colors and placement via admin console and JavaScript API.",
      },
    },
    {
      name: "Website Integration",
      category: "integration",
      yedii: {
        supported: true,
        label: "Ultra-Lightweight Script & SDK",
        detail: "<38KB script with sub-50ms paint times and zero third-party dependencies.",
      },
      competitor: {
        supported: true,
        label: "Zendesk Web Widget",
        detail: "Full-featured web widget supporting chat, ticketing, and guide search.",
      },
    },
    {
      name: "Human Agent Handoff",
      category: "core",
      yedii: {
        supported: true,
        label: "Universal Handoff Bridge",
        detail: "Seamlessly routes to Zendesk, Freshdesk, Slack, or webhook endpoints.",
      },
      competitor: {
        supported: true,
        label: "Native Zendesk Ticketing Queue",
        detail: "Direct escalation into Zendesk Support ticket views and omnichannel routing.",
      },
    },
    {
      name: "Analytics and Reporting",
      category: "enterprise",
      yedii: {
        supported: true,
        label: "AI Confidence & Resolution Metrics",
        detail: "Real-time accuracy ratings, query gaps, and sentiment tracking.",
      },
      competitor: {
        supported: true,
        label: "Zendesk Explore",
        detail: "Deep enterprise BI reporting for human agents, SLAs, and bot deflection.",
      },
    },
    {
      name: "API and Developer Support",
      category: "enterprise",
      yedii: {
        supported: true,
        label: "Modern Streaming & MCP APIs",
        detail: "REST API, Server-Sent Events, webhooks, and Model Context Protocol.",
      },
      competitor: {
        supported: true,
        label: "Comprehensive REST API",
        detail: "Extensive enterprise APIs across tickets, users, macros, and organizations.",
      },
    },
  ],
  aiCapabilities: [
    {
      dimension: "Agent Creation Experience",
      yedii:
        "Connect any website or upload documentation to create an operational AI agent in less than 5 minutes.",
      competitor:
        "Requires configuring ticket queues, user roles, triggers, and setting up bot intents within Zendesk Admin.",
      verdict: "Yedii is drastically simpler and faster for AI-first deployment.",
    },
    {
      dimension: "Knowledge Ingestion & Sync",
      yedii:
        "Directly parses external sitemaps, PDFs, and documentation portals without needing to migrate to a proprietary help center.",
      competitor:
        "Requires creating and organizing content in Zendesk Guide for optimal generative AI performance.",
      verdict: "Yedii avoids content migration lock-in.",
    },
    {
      dimension: "Response Accuracy & Grounding",
      yedii:
        "Combines vector embeddings with keyword BM25 retrieval to produce answers with exact paragraph citations.",
      competitor:
        "Grounded in Zendesk Guide articles with good accuracy when articles are well-curated.",
      verdict: "Both provide strong grounding; Yedii provides transparent source telemetry.",
    },
    {
      dimension: "Customization & Guardrails",
      yedii:
        "Full flexibility over prompt instructions, conversational tone, domain whitelisting, and security parameters.",
      competitor:
        "Structured bot builder controls what paths the bot can take, but custom prompt customization is restricted.",
      verdict: "Yedii offers superior LLM prompt-level control.",
    },
    {
      dimension: "Model Flexibility",
      yedii:
        "Freely switch between Claude 3.5 Sonnet, GPT-4o, and Llama 3 based on your specific requirements.",
      competitor:
        "Internal proprietary model routing without the ability to select specific foundation models.",
      verdict: "Yedii provides multi-model choice and future-proofing.",
    },
    {
      dimension: "Testing & Deployment Workflow",
      yedii:
        "Includes an interactive AI Playground where you can simulate chats and audit retrieved chunks before publishing.",
      competitor:
        "Testing occurs within the bot builder simulator or requires publishing to a development sandbox.",
      verdict: "Yedii's playground provides a faster, more transparent evaluation loop.",
    },
  ],
  pricing: {
    yedii: {
      platformName: "Yedii",
      startingPrice: "$29",
      billingPeriod: "per month (Starter tier) with unlimited agents and predictable message quotas",
      aiPricingModel: "Flat monthly fee based on conversation usage; no per-agent seat multipliers",
      planRestrictions: "Free tier available with 100 messages/mo; Pro plan at $79/mo for 5,000 messages with full API access",
      verificationDate: "October 2026",
      highlights: [
        "No per-human-agent seat tax",
        "No $50/agent/mo Advanced AI add-on fee",
        "Includes AI Playground and model switching",
        "Predictable, transparent monthly billing",
      ],
    },
    competitor: {
      platformName: "Zendesk",
      startingPrice: "$55/agent/mo",
      billingPeriod: "per agent/month (Suite Team, billed annually) + $50/agent/mo for Advanced AI",
      aiPricingModel: "Advanced AI features require a $50 per agent per month add-on on top of the base Suite subscription",
      planRestrictions: "Suite Growth starts at $89/agent/mo; Suite Professional starts at $115/agent/mo. A team of 10 support agents with Advanced AI costs over $1,650/month.",
      verificationDate: "October 2026 (Verified from official Zendesk pricing page)",
      highlights: [
        "High barrier to entry with annual contract commitments",
        "Advanced AI billed as an expensive per-seat add-on ($50/agent/mo)",
        "Expensive enterprise onboarding and implementation costs",
      ],
    },
    summary:
      "A 10-person support team using Zendesk Suite Professional with Advanced AI pays upwards of $1,650/month ($19,800/year). Yedii provides state-of-the-art autonomous AI agents for a fraction of that cost, allowing your existing team to handle 3x more volume without expanding seat licenses.",
  },
  prosAndConsiderations: {
    yediiPros: [
      "AI-native architecture built for 24/7 autonomous support and instant resolution",
      "No punitive per-seat licensing or expensive AI add-on surcharges",
      "Multi-model flexibility (Claude 3.5 Sonnet, GPT-4o, Llama 3)",
      "Zero-migration knowledge training directly from websites and documents",
      "Lightweight, fast-loading chat widget that doesn't slow down your website",
    ],
    yediiConsiderations: [
      "Does not include enterprise phone call routing or legacy telecommunications IVR systems",
      "Best utilized alongside existing ticketing tools if complex tiered routing queues are needed",
    ],
    competitorPros: [
      "Industry standard for large human call centers with multi-department ticketing",
      "Extensive ecosystem of enterprise integrations, telecommunications, and marketplace apps",
      "Mature SLA monitoring, agent productivity metrics, and compliance auditing",
    ],
    competitorConsiderations: [
      "Extremely expensive when factoring in per-seat pricing and $50/agent/mo AI add-ons",
      "Complex setup and maintenance requiring dedicated Zendesk administrators",
      "Traditional ticket-first architecture rather than an autonomous AI-first experience",
    ],
  },
  faqs: [
    {
      question: "Can Yedii work alongside Zendesk?",
      answer:
        "Yes! You can deploy Yedii on your website to handle 70%+ of customer inquiries automatically. When a complex query requires human intervention, Yedii can create a structured ticket in Zendesk with full conversation history.",
    },
    {
      question: "Why does Zendesk charge an extra $50/agent/mo for Advanced AI?",
      answer:
        "Zendesk treats AI as an add-on product on top of human seat licenses. For a team of 10 reps, that adds $500/month just for AI features. In contrast, Yedii is built entirely as an AI platform where intelligence is included by default.",
    },
    {
      question: "How long does it take to implement Yedii compared to Zendesk?",
      answer:
        "Implementing Zendesk typically takes weeks of configuring views, ticket fields, macros, and routing rules. Implementing Yedii takes under 5 minutes: point it to your website URL, paste one snippet of code, and your agent is live.",
    },
    {
      question: "Does Yedii support enterprise compliance like Zendesk?",
      answer:
        "Yes. Yedii offers SOC 2 Type II compliance controls, zero data training guarantees, and single-tenant VPC deployment options on AWS and Google Cloud for enterprise customers.",
    },
  ],
};

