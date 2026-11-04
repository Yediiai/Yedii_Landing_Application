import { CompetitorComparison } from "./types";

export const tidioComparison: CompetitorComparison = {
  id: "tidio",
  slug: "yedii-vs-tidio",
  name: "Tidio",
  brandColor: "#0556F3",
  tagline: "Basic SMB Chatbot vs. Enterprise-Ready Autonomous AI Agent Platform",
  shortDescription:
    "Tidio caters to small eCommerce shops with basic visual bots and limited Lyro AI quotas. Yedii is an enterprise-grade AI customer support platform with multi-model intelligence, advanced RAG, and high scalability.",
  cardHighlights: [
    "Enterprise multi-agent scaling vs. rigid 50-200 conversation SMB caps",
    "Multi-model flexibility (Claude 3.5 Sonnet, GPT-4o, Llama 3) vs. locked AI",
    "AST-aware PDF & API documentation RAG vs. basic FAQ scraper",
    "Developer-first APIs, webhooks, and Model Context Protocol",
  ],
  meta: {
    title: "Yedii vs Tidio | AI Customer Support Platform Comparison (2026)",
    description:
      "Compare Yedii and Tidio for AI customer support. Learn how Yedii's enterprise AI agent platform compares with Tidio's SMB live chat and Lyro AI conversation limits.",
    keywords: [
      "Yedii vs Tidio",
      "Tidio alternative",
      "Tidio Lyro AI comparison",
      "AI customer support software",
      "best AI chatbot for business",
    ],
  },
  hero: {
    title: "Yedii vs Tidio: Which AI Customer Support Platform Is Right for You?",
    subtitle:
      "Looking for AI customer service software? Discover why growing businesses and enterprise teams choose Yedii over Tidio's small-business live chat and limited Lyro AI quotas.",
  },
  overview: {
    yediiSummary:
      "Yedii is an enterprise-grade autonomous AI customer support platform engineered for scaling businesses. It features advanced hybrid RAG (dense vector + BM25 keyword matching), multi-model selection (Claude 3.5 Sonnet, GPT-4o, Llama 3), an interactive AI Playground for confidence scoring, and high-volume throughput with single-tenant VPC options.",
    competitorSummary:
      "Tidio is an entry-level live chat and basic marketing automation tool primarily geared toward small Shopify stores and micro-businesses. It offers 'Lyro AI', a conversational bot add-on with tight conversation limits and simplified knowledge scraping designed for straightforward FAQ answering.",
    coreDifference:
      "Tidio is designed for micro-businesses needing simple live chat with small Lyro AI conversation quotas (50 to a few hundred). Yedii is an enterprise-ready AI agent platform with high-volume RAG, multi-model choice, and deep developer controls.",
  },
  featureTable: [
    {
      name: "AI Customer Support Agents",
      category: "core",
      yedii: {
        supported: true,
        label: "Enterprise Autonomous Agents",
        detail: "Complex multi-step reasoning, grounded citations, and automated resolution.",
      },
      competitor: {
        supported: true,
        label: "Lyro AI Bot",
        detail: "Conversational bot answering basic FAQs from scraped site content.",
      },
    },
    {
      name: "AI Playground",
      category: "core",
      yedii: {
        supported: true,
        label: "Interactive Live Sandbox",
        detail: "Simulate chats, test prompt instructions, and inspect token scores in real time.",
      },
      competitor: {
        supported: false,
        label: "Basic Playground / Tester",
        detail: "Limited preview within the Lyro knowledge base setup screen.",
      },
    },
    {
      name: "Knowledge Base",
      category: "knowledge",
      yedii: {
        supported: true,
        label: "Enterprise Multi-Source RAG",
        detail: "Unified repository for sitemaps, PDFs, API docs, and markdown.",
      },
      competitor: {
        supported: "partial",
        label: "Lyro Knowledge Base",
        detail: "Simplified list of scraped URLs, text snippets, and manual Q&A pairs.",
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
        supported: true,
        label: "Website URL Scraping",
        detail: "Scrapes specified URLs for text content into Lyro's knowledge list.",
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
        supported: "partial",
        label: "Text Uploads / PDF",
        detail: "Basic text extraction from uploaded PDF documents.",
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
        label: "Basic Personality Toggles",
        detail: "Simple personality preset options within Lyro settings.",
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
        supported: "partial",
        label: "Visual Chatbot Triggers",
        detail: "Visual flowchart builder for button clicks and basic routing rules.",
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
        label: "Single Locked Model",
        detail: "Tidio manages Lyro's internal model without model selection options.",
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
        label: "Lyro Grounded Answers",
        detail: "Answers based on scraped knowledge snippets with basic link suggestions.",
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
        label: "Widget Appearance Settings",
        detail: "Customize brand color, background, and avatar inside Tidio settings.",
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
        label: "Tidio Live Chat Script & Plugins",
        detail: "Popular Shopify, WordPress, and WooCommerce app store plugins.",
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
        label: "Tidio Live Chat Inbox",
        detail: "Native handoff to human support operators inside Tidio panel.",
      },
    },
    {
      name: "Analytics and Reporting",
      category: "enterprise",
      yedii: {
        supported: true,
        label: "Enterprise AI Telemetry",
        detail: "Real-time accuracy ratings, query gaps, sentiment, and token consumption.",
      },
      competitor: {
        supported: "partial",
        label: "Basic Chat & Lyro Analytics",
        detail: "Tracks answered chats, Lyro resolution percentage, and basic operator stats.",
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
        supported: "partial",
        label: "Basic Webhooks & JS API",
        detail: "Standard JavaScript API for user data; limited headless LLM endpoints.",
      },
    },
  ],
  aiCapabilities: [
    {
      dimension: "Agent Creation Experience",
      yedii:
        "Fast 5-minute setup with instant knowledge crawling, multi-model selection, and ready-to-deploy script.",
      competitor:
        "Simple visual onboarding tailored for e-commerce store owners installing a Shopify widget.",
      verdict: "Both offer fast setup; Yedii caters to technical depth and enterprise workflows.",
    },
    {
      dimension: "Knowledge Ingestion & Sync",
      yedii:
        "Parses complex documentation hierarchies, code blocks, tables, and sitemaps with scheduled automated re-crawling.",
      competitor:
        "Best suited for simple FAQ pages and short return policy text; struggles with complex technical documents.",
      verdict: "Yedii offers substantially deeper RAG document ingestion.",
    },
    {
      dimension: "Response Accuracy & Grounding",
      yedii:
        "Combines vector embeddings with keyword BM25 retrieval to produce answers with exact paragraph citations.",
      competitor:
        "Lyro accurately handles straightforward e-commerce questions, but lacks multi-step reasoning for technical troubleshooting.",
      verdict: "Yedii is superior for technical and enterprise support.",
    },
    {
      dimension: "Customization & Guardrails",
      yedii:
        "Full control over persona prompts, guardrail boundaries, negative constraints, and widget CSS tokens.",
      competitor:
        "Limited to predefined personality toggles and visual button decision trees.",
      verdict: "Yedii offers professional-grade LLM customization.",
    },
    {
      dimension: "Model Flexibility",
      yedii:
        "Switch dynamically between Claude 3.5 Sonnet, GPT-4o, and Llama 3 models depending on your task reasoning or compliance needs.",
      competitor:
        "Locked to Tidio's internal model selection with no capability to choose Claude or alternate LLMs.",
      verdict: "Yedii provides multi-model choice and future-proofing.",
    },
    {
      dimension: "Testing & Deployment Workflow",
      yedii:
        "Dedicated AI Playground with live parameter tuning, simulated user personas, token usage telemetry, and 1-line script deployment.",
      competitor:
        "Basic preview mode within the Lyro configuration dashboard.",
      verdict: "Yedii's playground provides a faster, more transparent evaluation loop.",
    },
  ],
  pricing: {
    yedii: {
      platformName: "Yedii",
      startingPrice: "$29",
      billingPeriod: "per month (Starter tier) with unlimited agents and predictable message quotas",
      aiPricingModel: "Flat-rate monthly plan with included message quotas; scalable to millions of queries",
      planRestrictions: "Free tier includes 100 messages/mo; Pro plan at $79/mo includes 5,000 messages and full API access",
      verificationDate: "October 2026",
      highlights: [
        "Scales seamlessly from startups to high-volume enterprise traffic",
        "Includes AI Playground and multiple AI models",
        "Unlimited website and document knowledge training",
        "Transparent overage rates with zero lock-in",
      ],
    },
    competitor: {
      platformName: "Tidio",
      startingPrice: "$29 to $39/mo",
      billingPeriod: "per month for starter live chat; Lyro AI plans start from $39/mo with tight conversation caps",
      aiPricingModel: "Lyro AI plans are capped at small conversation allowances (e.g. 50 free, then $39/mo for 100 conversations, $79/mo for 200 conversations)",
      planRestrictions: "Exceeding conversation limits requires buying expensive Lyro conversation add-on packages. High-volume businesses quickly hit limits.",
      verificationDate: "October 2026 (Verified from official Tidio pricing page)",
      highlights: [
        "Base live chat starts at $29/mo",
        "Lyro AI packages sold with small conversation allowances (100-200/mo)",
        "Expensive add-on tiers when conversation volume grows",
      ],
    },
    summary:
      "Tidio's Lyro AI plans become restrictive and expensive once you exceed a few hundred conversations per month. Yedii provides generous message allowances and enterprise scalability at transparent rates, making it far more cost-effective for growing businesses.",
  },
  prosAndConsiderations: {
    yediiPros: [
      "Enterprise-grade autonomous AI support capable of handling millions of customer interactions",
      "Multi-model flexibility (Claude 3.5 Sonnet, GPT-4o, Llama 3)",
      "Advanced hybrid RAG with AST document parsing and paragraph citations",
      "Interactive AI Playground for systematic prompt evaluation and testing",
      "Modern developer APIs, webhooks, and Model Context Protocol support",
    ],
    yediiConsiderations: [
      "Designed as an enterprise AI customer support platform rather than a simple drag-and-drop marketing popup builder",
      "Does not include built-in cart abandonment email popups for Shopify stores",
    ],
    competitorPros: [
      "Very easy for non-technical Shopify and WooCommerce store owners to install via one-click apps",
      "Built-in live chat and visual marketing bot triggers (discounts, popups, spin-the-wheel)",
      "Free starter tier with 50 Lyro AI conversations for hobbyist shops",
    ],
    competitorConsiderations: [
      "Tight conversation caps make it cost-prohibitive for high-volume customer inquiries",
      "Limited knowledge base parsing for technical documentation or complex PDFs",
      "No multi-model switching or enterprise compliance VPC options",
    ],
  },
  faqs: [
    {
      question: "Is Yedii easy to install on Shopify or WooCommerce like Tidio?",
      answer:
        "Yes! Installing Yedii on Shopify, WooCommerce, Webflow, or custom web apps takes less than 2 minutes. You simply paste a single line of script before the closing </body> tag or use our React SDK.",
    },
    {
      question: "How do conversation limits on Tidio compare to Yedii?",
      answer:
        "Tidio sells Lyro AI in small increments (e.g. 100 or 200 conversations per month), which can be exhausted in days by a busy store. Yedii provides generous monthly message quotas (5,000+ messages on Pro) with predictable flat rates.",
    },
    {
      question: "Can Yedii handle complex technical troubleshooting that Tidio struggles with?",
      answer:
        "Yes. While Tidio's Lyro is geared toward simple e-commerce questions (shipping rates, return windows), Yedii uses advanced hybrid RAG and high-reasoning models like Claude 3.5 Sonnet to debug code, explain complex documentation, and resolve multi-step technical issues.",
    },
    {
      question: "Can I connect human live chat with Yedii?",
      answer:
        "Yes. Yedii supports seamless human handoff via webhooks, Slack alerts, or your preferred helpdesk (Zendesk, Freshdesk, Intercom) whenever a customer requests human assistance.",
    },
  ],
};

