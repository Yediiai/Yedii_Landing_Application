import { CompetitorComparison } from "./types";

export const freshdeskComparison: CompetitorComparison = {
  id: "freshdesk",
  slug: "yedii-vs-freshdesk",
  name: "Freshdesk",
  brandColor: "#0D824B",
  tagline: "Traditional Multi-Channel Ticketing vs. Next-Gen AI Agent Platform",
  shortDescription:
    "Freshdesk offers traditional ticketing with Freddy AI sold as add-on session packs and per-agent copilot fees. Yedii delivers autonomous AI support agents with multi-model intelligence and direct web RAG.",
  cardHighlights: [
    "No session pack add-ons ($100 per 1,000 Freddy sessions)",
    "Multi-model flexibility (Claude 3.5, GPT-4o, Llama 3) vs. black-box AI",
    "Interactive AI Playground with confidence scoring",
    "Direct website and document ingestion without building a helpdesk",
  ],
  meta: {
    title: "Yedii vs Freshdesk | AI Customer Support Platform Comparison (2026)",
    description:
      "Compare Yedii and Freshdesk for AI customer support. Learn how Yedii's autonomous AI agent platform compares with Freshdesk's ticketing suite and Freddy AI add-on costs.",
    keywords: [
      "Yedii vs Freshdesk",
      "Freshdesk alternative",
      "Freshdesk Freddy AI comparison",
      "AI customer support software",
      "Freshdesk vs AI agents",
    ],
  },
  hero: {
    title: "Yedii vs Freshdesk: Which AI Customer Support Platform Is Right for You?",
    subtitle:
      "Evaluating modern customer service tools? Discover why businesses choose Yedii's AI-first agent runtime over Freshdesk's complex ticketing tiers and Freddy AI add-on fees.",
  },
  overview: {
    yediiSummary:
      "Yedii is an AI-first customer support platform engineered to automate resolutions autonomously. With native multi-model support (Claude 3.5 Sonnet, GPT-4o, and Llama 3), automated website crawling, PDF ingestion, and an interactive prompt testing playground, Yedii turns your existing documentation into 24/7 intelligent customer agents without the baggage of a traditional ticketing system.",
    competitorSummary:
      "Freshdesk (by Freshworks) is a popular customer service software suite centered on managing email tickets, phone calls, and live chat queues. Freshdesk provides 'Freddy AI' for bot deflection and agent assistance, which requires separate session pack purchases or per-agent add-on subscriptions on higher tier plans.",
    coreDifference:
      "Freshdesk is a human ticketing system with AI sold as an add-on ($100 per 1,000 sessions or $29/agent/mo for Copilot). Yedii is an AI-native platform designed to resolve queries autonomously with full model transparency and zero ticketing lock-in.",
  },
  featureTable: [
    {
      name: "AI Customer Support Agents",
      category: "core",
      yedii: {
        supported: true,
        label: "Autonomous 24/7 Agents",
        detail: "Grounded RAG answers, custom personas, and instant human escalation triggers.",
      },
      competitor: {
        supported: true,
        label: "Freddy AI Self-Service",
        detail: "Conversational bot that deflects tickets based on solution articles.",
      },
    },
    {
      name: "AI Playground",
      category: "core",
      yedii: {
        supported: true,
        label: "Interactive Live Sandbox",
        detail: "Test prompts, inspect citation chunks, and tune system parameters in real time.",
      },
      competitor: {
        supported: false,
        label: "No Dedicated Playground",
        detail: "Testing requires running through the bot conversation builder simulator.",
      },
    },
    {
      name: "Knowledge Base",
      category: "knowledge",
      yedii: {
        supported: true,
        label: "Multi-Source Knowledge RAG",
        detail: "Indexes websites, sitemaps, PDFs, and documentation without migration.",
      },
      competitor: {
        supported: true,
        label: "Freshdesk Solutions",
        detail: "Dedicated knowledge base module for human agents and public help centers.",
      },
    },
    {
      name: "Website Knowledge Training",
      category: "knowledge",
      yedii: {
        supported: true,
        label: "Automated Sitemap & URL Crawler",
        detail: "Deep recursive crawl with automated daily/weekly incremental sync.",
      },
      competitor: {
        supported: "partial",
        label: "URL Sync / Manual Import",
        detail: "Primarily relies on internal Freshdesk solution articles for Freddy bot training.",
      },
    },
    {
      name: "PDF Knowledge Training",
      category: "knowledge",
      yedii: {
        supported: true,
        label: "Native Document Parser",
        detail: "AST-aware semantic extraction from PDFs, DOCX, CSV, and markdown files.",
      },
      competitor: {
        supported: "partial",
        label: "Article Attachments",
        detail: "Files can be attached to solutions articles, but parsing depth is limited.",
      },
    },
    {
      name: "Custom AI Persona",
      category: "customization",
      yedii: {
        supported: true,
        label: "Full Persona Customization",
        detail: "Define system tone, domain persona, greeting style, and safety boundaries.",
      },
      competitor: {
        supported: "partial",
        label: "Bot Tone Customization",
        detail: "Basic tone settings within Freddy bot configuration.",
      },
    },
    {
      name: "Custom Agent Behavior",
      category: "customization",
      yedii: {
        supported: true,
        label: "Fine-Grained System Prompts",
        detail: "Specify negative constraints, fallback policies, and verified citation requirements.",
      },
      competitor: {
        supported: true,
        label: "Freddy Decision Trees",
        detail: "Visual flowchart rules combined with intent recognition.",
      },
    },
    {
      name: "Multiple AI Model Support",
      category: "core",
      yedii: {
        supported: true,
        label: "Claude 3.5, GPT-4o, Llama 3",
        detail: "Switch foundation models per agent based on latency, complexity, or cost.",
      },
      competitor: {
        supported: false,
        label: "Proprietary Freshworks AI",
        detail: "No option to choose or switch between underlying LLM foundation providers.",
      },
    },
    {
      name: "RAG-Based Responses",
      category: "core",
      yedii: {
        supported: true,
        label: "Dense + Sparse Hybrid RAG",
        detail: "Generates grounded answers backed by verified, clickable citations.",
      },
      competitor: {
        supported: true,
        label: "Freddy Generative Answers",
        detail: "Generates responses grounded in Freshdesk solution articles.",
      },
    },
    {
      name: "Chatbot Customization",
      category: "customization",
      yedii: {
        supported: true,
        label: "Full CSS & White-Label Theming",
        detail: "Customize launcher icons, theme colors, typography, position, and dark mode.",
      },
      competitor: {
        supported: true,
        label: "Freshchat Widget Theming",
        detail: "Custom colors, greetings, and widget positioning via Freshchat settings.",
      },
    },
    {
      name: "Website Integration",
      category: "integration",
      yedii: {
        supported: true,
        label: "Ultra-Lightweight Script & SDK",
        detail: "<38KB script with sub-50ms paint times and zero external framework lock-in.",
      },
      competitor: {
        supported: true,
        label: "Freshdesk / Freshchat Script",
        detail: "Embed script connecting users to the Freshchat messaging platform.",
      },
    },
    {
      name: "Human Agent Handoff",
      category: "core",
      yedii: {
        supported: true,
        label: "Universal Handoff Bridge",
        detail: "Seamlessly routes to Freshdesk, Zendesk, Slack, or webhook endpoints.",
      },
      competitor: {
        supported: true,
        label: "Native Freshdesk Routing",
        detail: "Direct escalation into Freshdesk agent ticket queues and team groups.",
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
        label: "Freshdesk Analytics",
        detail: "Comprehensive reports on human ticket volume, response SLAs, and bot deflection.",
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
        label: "Freshdesk REST API",
        detail: "Extensive REST API for managing tickets, contacts, solutions, and agents.",
      },
    },
  ],
  aiCapabilities: [
    {
      dimension: "Agent Creation Experience",
      yedii:
        "Takes under 5 minutes: point to your website, select a model, and deploy the agent with a single line of JavaScript.",
      competitor:
        "Requires configuring a Freshworks organization, setting up ticket categories, user groups, and Freddy bot paths.",
      verdict: "Yedii is substantially faster and free from ticketing configuration overhead.",
    },
    {
      dimension: "Knowledge Ingestion & Sync",
      yedii:
        "Syncs external websites, API documentation, and PDFs without forcing you to re-author content inside a proprietary help center.",
      competitor:
        "Best suited for content authored directly within Freshdesk Solutions; syncing external content requires connectors.",
      verdict: "Yedii provides seamless external knowledge ingestion.",
    },
    {
      dimension: "Response Accuracy & Grounding",
      yedii:
        "Combines vector embeddings with keyword BM25 retrieval to produce answers with exact paragraph citations.",
      competitor:
        "Freddy AI synthesizes answers well from clearly written solution articles, but struggles with deeply technical code or tables.",
      verdict: "Yedii delivers superior technical precision and token inspection.",
    },
    {
      dimension: "Customization & Guardrails",
      yedii:
        "Full control over persona prompts, guardrail boundaries, negative constraints, and widget CSS tokens.",
      competitor:
        "Provides basic tone settings and flow-based intent triggers within Freshdesk's predefined framework.",
      verdict: "Yedii offers broader prompt-engineering flexibility.",
    },
    {
      dimension: "Model Flexibility",
      yedii:
        "Switch dynamically between Claude 3.5 Sonnet, GPT-4o, and Llama 3 models depending on your task reasoning or compliance needs.",
      competitor:
        "Locked to Freshworks' internal model selection with no capability to choose Claude or alternate LLMs.",
      verdict: "Yedii provides multi-model choice and future-proofing.",
    },
    {
      dimension: "Testing & Deployment Workflow",
      yedii:
        "Dedicated AI Playground with live parameter tuning, simulated user personas, token usage telemetry, and 1-line script deployment.",
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
      aiPricingModel: "Flat-rate monthly subscription based on usage; no per-agent seat multipliers",
      planRestrictions: "Free tier available with 100 messages/mo; Pro plan at $79/mo for 5,000 messages with full API access",
      verificationDate: "October 2026",
      highlights: [
        "No $100 per 1,000 Freddy session surcharges",
        "No $29/agent/mo Freddy Copilot fee",
        "Includes AI Playground and model switching",
        "Predictable, transparent monthly billing",
      ],
    },
    competitor: {
      platformName: "Freshdesk",
      startingPrice: "$15 to $49/agent/mo",
      billingPeriod: "per human agent/month (Growth at $15, Pro at $49, Enterprise at $79) + Freddy AI fees",
      aiPricingModel: "Freddy Self-Service requires purchasing Freddy session packs ($100 per 1,000 sessions); Freddy Copilot costs an additional $29/agent/month",
      planRestrictions: "Advanced automation and custom roles require Pro plan ($49/agent/mo). A team of 8 agents on Pro with Freddy Copilot costs upwards of $624/month before session fees.",
      verificationDate: "October 2026 (Verified from official Freshworks pricing page)",
      highlights: [
        "Base plans billed per human agent seat",
        "Freddy AI bot sessions cost $100 per 1,000 sessions",
        "Freddy Copilot billed as an extra $29/agent/month add-on",
      ],
    },
    summary:
      "Freshdesk's per-agent pricing plus Freddy session packs ($100 per 1,000 sessions) can cause costs to spiral as your business grows. Yedii gives you transparent, predictable monthly pricing with zero per-seat penalties, saving up to 65% for growing teams.",
  },
  prosAndConsiderations: {
    yediiPros: [
      "AI-native architecture built for 24/7 autonomous support and instant resolution",
      "No per-human-agent seat tax or session-pack add-on surprises",
      "Multi-model flexibility (Claude 3.5 Sonnet, GPT-4o, Llama 3)",
      "Zero-migration knowledge training directly from websites and documents",
      "Lightweight, fast-loading chat widget that doesn't slow down your website",
    ],
    yediiConsiderations: [
      "Does not include enterprise phone call routing or legacy telecommunications IVR systems",
      "Best utilized alongside existing ticketing tools if complex tiered routing queues are needed",
    ],
    competitorPros: [
      "Cost-effective entry tier for traditional multi-channel human email ticketing",
      "Comprehensive suite of ticketing, field service, and SLA monitoring tools",
      "Seamless integration with other Freshworks products (Freshsales, Freshmarketer)",
    ],
    competitorConsiderations: [
      "Freddy AI self-service requires purchasing separate session packs ($100 per 1,000 sessions)",
      "Freddy Copilot requires an extra $29/agent/mo on top of Pro/Enterprise licenses",
      "Traditional ticket-first architecture rather than an autonomous AI-first experience",
    ],
  },
  faqs: [
    {
      question: "Can I connect Yedii to Freshdesk for human agent escalation?",
      answer:
        "Yes! Yedii can act as your autonomous first-line support tier, resolving the majority of customer inquiries. When an inquiry requires human escalation, Yedii automatically opens a structured ticket inside Freshdesk with full conversation history.",
    },
    {
      question: "How do Freshdesk's Freddy session packs work compared to Yedii?",
      answer:
        "Freshdesk charges $100 for every 1,000 Freddy AI sessions on top of your monthly per-agent subscription. Yedii includes generous conversation quotas in every plan, with transparent pricing and no surprise session fees.",
    },
    {
      question: "Do I have to move all my help articles from Freshdesk to use Yedii?",
      answer:
        "Not at all. You can simply provide your public Freshdesk portal URL to Yedii. Our crawler will index your solution articles automatically and keep them synchronized.",
    },
    {
      question: "Can Yedii be customized with my company's branding?",
      answer:
        "Yes. Yedii provides complete white-label customization including custom colors, logos, typography, launcher buttons, and domain whitelisting.",
    },
  ],
};

