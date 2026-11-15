export interface UseCaseData {
  slug: string;
  title: string;
  shortDesc: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  keyCapabilities: {
    title: string;
    desc: string;
  }[];
  businessChallenges: {
    problem: string;
    impact: string;
  }[];
  howItWorks: {
    step: string;
    title: string;
    desc: string;
  }[];
  scenarios: {
    query: string;
    agentAction: string;
    resolution: string;
  }[];
  integrations: string[];
  escalationPolicy: {
    trigger: string;
    action: string;
  }[];
  outcomes: {
    metric: string;
    label: string;
    desc: string;
  }[];
  relatedUseCases: {
    title: string;
    slug: string;
    desc: string;
  }[];
}

export const USE_CASES_LIST: UseCaseData[] = [
  {
    slug: "customer-support",
    title: "Customer Support",
    shortDesc: "Automate everyday inquiries, resolve frequent questions instantly, and route complex tickets with full context.",
    badge: "By Use Case • Customer Support",
    heroTitle: "Deliver 24/7 autonomous support that feels human and never hallucinates",
    heroSubtitle: "Empower your support team to scale without burnout. Yedii AI agents resolve routine tier-1 questions instantly, grounded directly on your verified knowledge base, and escalate with full conversational context.",
    keyCapabilities: [
      { title: "Autonomous First-Contact Resolution", desc: "Instantly answer repetitive questions regarding policies, accounts, and services without human intervention." },
      { title: "Zero-Hallucination Retrieval", desc: "Every generated answer is strictly grounded in vector-indexed documentation chunks with direct citations." },
      { title: "Omnichannel Deployment", desc: "Deploy the exact same intelligent agent across Website Chat, WhatsApp Business API, and Slack." },
      { title: "Sentiment-Aware Escalation", desc: "Detect negative customer sentiment or high-urgency keywords and transfer immediately to human agents." },
    ],
    businessChallenges: [
      { problem: "Overwhelming ticket volume during peak hours", impact: "First-response times surge, leading to frustrated customers and agent fatigue." },
      { problem: "Inconsistent answers across channels", impact: "Fragmented knowledge silos cause contradictory answers between chat, email, and social." },
      { problem: "Escalations lack context", impact: "Customers are forced to repeat themselves when transferred from bots to human specialists." },
    ],
    howItWorks: [
      { step: "01", title: "Ingest Support Knowledge", desc: "Connect Zendesk articles, Notion handbooks, FAQs, and PDF manuals for real-time vector indexing." },
      { step: "02", title: "Configure Persona & Guardrails", desc: "Define your brand voice, boundary conditions, and escalation policies in clean markdown instructions." },
      { step: "03", title: "Test in AI Playground", desc: "Benchmark responses across frontier LLMs and red-team edge cases before deploying to production." },
      { step: "04", title: "Go Live Omnichannel", desc: "Embed via a lightweight script tag or connect your WhatsApp Business number with one click." },
    ],
    scenarios: [
      {
        query: "What is your refund policy if I opened the package?",
        agentAction: "Retrieves 'Returns & Refunds v3.4' vector chunk #142 (confidence score: 0.96).",
        resolution: "Explains the 30-day return policy for opened items, outlines repackaging guidelines, and provides the self-service RMA portal link.",
      },
      {
        query: "I cannot access my team workspace after billing updated.",
        agentAction: "Cross-checks workspace provisioning rules and detects payment sync latency.",
        resolution: "Guides user through browser cache flush, verifies subscription active state, and alerts support engineering if permissions fail to refresh.",
      },
    ],
    integrations: ["Zendesk", "Intercom", "Freshdesk", "Salesforce Service Cloud", "WhatsApp Business", "Slack"],
    escalationPolicy: [
      { trigger: "Negative sentiment score > 0.85 detected in 2 consecutive turns", action: "Immediately transfers conversation to senior human support queue with full transcript." },
      { trigger: "Query contains explicit account security or GDPR deletion requests", action: "Locks prompt generation and tags ticket as High-Priority Compliance Review." },
    ],
    outcomes: [
      { metric: "74%", label: "Autonomous Deflection", desc: "Of routine inquiries resolved end-to-end without agent involvement." },
      { metric: "< 120ms", label: "First-Token Latency", desc: "Instantaneous streaming responses eliminate customer wait times." },
      { metric: "99.4%", label: "Grounded Accuracy", desc: "Strict RAG verification prevents hallucinations in production." },
    ],
    relatedUseCases: [
      { title: "E-commerce Support", slug: "ecommerce-support", desc: "Automate order tracking, returns, and inventory questions." },
      { title: "Billing & Subscription Support", slug: "billing-support", desc: "Help customers manage plans, invoices, and payment methods." },
    ],
  },
  {
    slug: "ecommerce-support",
    title: "E-commerce Support",
    shortDesc: "Automate order tracking, returns, refunds, product inquiries, and delivery-related questions.",
    badge: "By Use Case • E-commerce Support",
    heroTitle: "Accelerate online sales and automate order support around the clock",
    heroSubtitle: "From instant parcel tracking to seamless returns and product sizing advice, Yedii turns routine shopper questions into delightful customer experiences that boost lifetime value.",
    keyCapabilities: [
      { title: "Order Tracking Assistance", desc: "Provide real-time order status, tracking links, and expected delivery windows from connected shipping providers." },
      { title: "Returns & Refund Inquiries", desc: "Walk shoppers through return eligibility, generate return shipping labels, and explain refund processing timelines." },
      { title: "Product Information & Sizing", desc: "Answer technical catalog questions, ingredient details, compatibility, and sizing chart recommendations." },
      { title: "Shipping & Delivery Support", desc: "Clarify international shipping rates, custom duties, dispatch cutoffs, and address change requests." },
    ],
    businessChallenges: [
      { problem: "Seasonal spikes in 'Where is my order?' tickets", impact: "Support queues get overwhelmed during holiday promotions and flash sales." },
      { problem: "High return abandonment and chargebacks", impact: "Confusing return policies lead to customer frustration and disputes." },
      { problem: "Lost sales due to unanswered pre-purchase questions", impact: "Shoppers bounce from checkout when sizing or compatibility is unclear." },
    ],
    howItWorks: [
      { step: "01", title: "Connect E-commerce Catalog", desc: "Sync Shopify, WooCommerce, or BigCommerce product data, FAQs, and return policy pages." },
      { step: "02", title: "Set Up Order Verification", desc: "Configure order lookup tool hooks with secure email or phone verification guardrails." },
      { step: "03", title: "Calibrate Tone & Recommendations", desc: "Instruct the agent to provide helpful sizing comparisons and cross-sell complementary accessories." },
      { step: "04", title: "Deploy to Web Widget & WhatsApp", desc: "Meet shoppers directly on checkout pages and WhatsApp channels with zero delay." },
    ],
    scenarios: [
      {
        query: "Where is my order #84920? I ordered it 3 days ago.",
        agentAction: "Identifies order inquiry intent, parses order number #84920, and checks fulfillment status.",
        resolution: "Provides current carrier status ('In transit via FedEx'), tracking number link, and estimated delivery window (Tomorrow by 4 PM).",
      },
      {
        query: "Can I return these running shoes if they do not fit?",
        agentAction: "Retrieves footwear return window policy (30 days unworn with original tags).",
        resolution: "Confirms eligibility, explains return label generation process, and offers immediate exchange link for half-size adjustments.",
      },
    ],
    integrations: ["Shopify", "WooCommerce", "BigCommerce", "Klaviyo", "Gorgias", "Stripe"],
    escalationPolicy: [
      { trigger: "Customer reports missing or damaged shipment", action: "Captures proof of damage details and creates expedited claim ticket in helpdesk." },
      { trigger: "High-value order inquiry (> $500) expresses hesitation", action: "Offers dedicated VIP sales callback or connects with live product concierge." },
    ],
    outcomes: [
      { metric: "82%", label: "WISMO Deflection", desc: "Automate 8 out of 10 'Where is my order?' questions effortlessly." },
      { metric: "+18%", label: "Conversion Lift", desc: "Immediate answers to product and sizing questions prevent cart drops." },
      { metric: "24/7", label: "Global Coverage", desc: "Support international shoppers across all time zones in native languages." },
    ],
    relatedUseCases: [
      { title: "Sales Assistance", slug: "sales-assistance", desc: "Guide prospective customers through catalog selection and purchasing." },
      { title: "Billing & Subscription Support", slug: "billing-support", desc: "Clarify subscription recurring orders and invoicing." },
    ],
  },
  {
    slug: "technical-support",
    title: "Technical Support",
    shortDesc: "Help users troubleshoot technical issues using your product documentation and knowledge sources.",
    badge: "By Use Case • Technical Support",
    heroTitle: "Empower developers and technical users with precise, code-aware support",
    heroSubtitle: "Resolve API integration roadblocks, configuration errors, and SDK questions instantly with AI agents trained directly on your developer documentation, code repositories, and technical guides.",
    keyCapabilities: [
      { title: "Technical Troubleshooting", desc: "Analyze error logs, trace configuration mismatches, and guide developers through step-by-step debug routines." },
      { title: "Documentation-Based Answers", desc: "Retrieve verified technical documentation chunks with syntactically highlighted curl, JS, and Python snippets." },
      { title: "Step-by-Step Guidance", desc: "Provide phased onboarding and architecture recommendations tailored to the customer's deployment stack." },
      { title: "Issue Identification & Escalation", desc: "Classify bug reports vs configuration mistakes and escalate reproducible defects directly to GitHub or Jira." },
    ],
    businessChallenges: [
      { problem: "Senior engineering time consumed by repetitive API triage", impact: "Product velocity slows down as core engineers answer basic setup questions." },
      { problem: "Outdated code samples in customer tickets", impact: "Developers experience integration delays when documentation versions drift." },
      { problem: "Slow turnaround on complex technical queries", impact: "Trial accounts stall before reaching production activation." },
    ],
    howItWorks: [
      { step: "01", title: "Index Technical Knowledge", desc: "Sync OpenAPI specs, Markdown doc repositories, GitHub READMEs, and changelog release notes." },
      { step: "02", title: "Enforce Code Formatting Guardrails", desc: "Configure syntax highlighting rules, version compatibility flags, and deprecation notices." },
      { step: "03", title: "Simulate Integration Bugs in Sandbox", desc: "Run edge-case payload validation and adversarial injection checks in the AI Playground." },
      { step: "04", title: "Integrate into Developer Portals", desc: "Deploy in developer documentation sites, Slack developer communities, and customer Discord servers." },
    ],
    scenarios: [
      {
        query: "Why is our webhook signature verification failing with HTTP 401?",
        agentAction: "Cross-checks webhook signing secret documentation and HMAC SHA-256 header specifications.",
        resolution: "Highlights raw payload byte comparison requirements and provides copy-pasteable Node.js crypto verification snippet.",
      },
      {
        query: "What is the rate limit for the batch vector embeddings endpoint?",
        agentAction: "Retrieves 'API Rate Limits & Quotas' specification document.",
        resolution: "Explains the 500 requests/minute tier cap, recommends exponential backoff headers, and links to concurrent batching best practices.",
      },
    ],
    integrations: ["GitHub", "Jira", "Postman", "Slack", "Discord", "Datadog"],
    escalationPolicy: [
      { trigger: "Repetitive 500 internal server error or suspected platform outage", action: "Immediately alerts on-call DevOps engineers via PagerDuty webhook." },
      { trigger: "Complex enterprise architecture consultation required", action: "Schedules technical review with Solutions Architect." },
    ],
    outcomes: [
      { metric: "65%", label: "Faster Integration", desc: "Developers complete onboarding integrations in hours instead of days." },
      { metric: "40%", label: "Engineering Hours Saved", desc: "Senior developers spend less time in customer ticket triage." },
      { metric: "100%", label: "Syntax Verified", desc: "Code snippets reflect latest approved documentation standards." },
    ],
    relatedUseCases: [
      { title: "Customer Success", slug: "customer-success", desc: "Drive adoption and proactive account onboarding milestones." },
      { title: "Customer Support", slug: "customer-support", desc: "Automate everyday customer tier-1 triage." },
    ],
  },
  {
    slug: "sales-assistance",
    title: "Sales Assistance",
    shortDesc: "Support potential customers with product information, pricing questions, and purchasing guidance.",
    badge: "By Use Case • Sales Assistance",
    heroTitle: "Convert high-intent inbound visitors into qualified pipeline 24/7",
    heroSubtitle: "Engage website visitors the moment they land on pricing and product pages. Answer complex purchasing questions, qualify buying intent, and book calendar meetings for account executives.",
    keyCapabilities: [
      { title: "Product Discovery & Matching", desc: "Ask consultative questions to recommend the exact plan, module, or package fitting the prospect's needs." },
      { title: "Pricing & ROI Explanations", desc: "Explain seat tiers, feature comparisons, billing intervals, and estimate return on investment in real time." },
      { title: "Automated Lead Qualification", desc: "Capture company size, budget, timeline, and use cases before routing to the appropriate sales team." },
      { title: "Purchase Guidance & Meeting Booking", desc: "Embed Calendly or HubSpot booking links directly inside the chat flow for instant discovery calls." },
    ],
    businessChallenges: [
      { problem: "High-value prospects bounce outside business hours", impact: "Inbound leads go cold before regional sales teams begin their work day." },
      { problem: "Sales reps spend hours qualifying low-fit leads", impact: "Valuable AE selling time is diluted by unqualified inquiries." },
      { problem: "Prospects struggle to navigate complex enterprise pricing", impact: "Confusion over add-ons and seat licenses stalls procurement conversations." },
    ],
    howItWorks: [
      { step: "01", title: "Upload Product & Pricing Models", desc: "Train your agent on sales battlecards, pricing matrices, ROI case studies, and competitor diffs." },
      { step: "02", title: "Define BANT Qualification Rules", desc: "Set strict qualification questions for company size, existing tools, and implementation timeline." },
      { step: "03", title: "Connect CRM & Calendar Tools", desc: "Integrate HubSpot, Salesforce, and Calendly for automated lead enrichment and routing." },
      { step: "04", title: "Target High-Intent Pages", desc: "Trigger proactive conversational greetings specifically on /pricing and /enterprise pages." },
    ],
    scenarios: [
      {
        query: "What is the difference between your Growth and Enterprise plans?",
        agentAction: "Retrieves pricing matrix comparison between Growth ($49/mo) and Enterprise tiers.",
        resolution: "Itemizes custom credit pools, dedicated VPC options, SSO, and 99.99% SLA availability, offering to connect with enterprise sales.",
      },
      {
        query: "We have 150 customer support agents. Can Yedii handle our volume?",
        agentAction: "Recognizes high-value enterprise prospect criteria (>50 seats).",
        resolution: "Confirms multi-agent concurrency capabilities and invites user to book a personalized architecture demo with an Enterprise specialist.",
      },
    ],
    integrations: ["HubSpot", "Salesforce", "Calendly", "Clearbit", "Slack", "Stripe"],
    escalationPolicy: [
      { trigger: "Prospect qualifies with > 100 seats and current budget", action: "Dispatches instant priority Slack notification to Regional Sales Director." },
      { trigger: "Visitor requests custom Master Services Agreement (MSA)", action: "Offers immediate enterprise inquiry form with NDA safeguard." },
    ],
    outcomes: [
      { metric: "3.2x", label: "Pipeline Velocity", desc: "Inbound discovery calls booked within 90 seconds of visitor engagement." },
      { metric: "45%", label: "More Qualified Demos", desc: "Pre-screened leads yield higher demo-to-close conversion rates." },
      { metric: "100%", label: "Lead Capture Rate", desc: "Never lose a high-intent prospect to midnight time zone differences." },
    ],
    relatedUseCases: [
      { title: "Billing & Subscription Support", slug: "billing-support", desc: "Explain recurring invoices, discounts, and payment terms." },
      { title: "E-commerce Support", slug: "ecommerce-support", desc: "Guide retail shoppers from discovery to checkout." },
    ],
  },
  {
    slug: "customer-success",
    title: "Customer Success",
    shortDesc: "Improve customer onboarding, product adoption, and ongoing customer engagement.",
    badge: "By Use Case • Customer Success",
    heroTitle: "Accelerate customer time-to-value and drive proactive account retention",
    heroSubtitle: "Guide new accounts through initial workspace setup, surface underutilized features, and provide self-service guidance that transforms trial users into brand advocates.",
    keyCapabilities: [
      { title: "Guided Customer Onboarding", desc: "Deliver interactive milestone checklists and step-by-step walkthroughs to configure workspaces in minutes." },
      { title: "Feature Discovery & Adoption", desc: "Recommend advanced capabilities, webhook automations, and integrations based on user workflows." },
      { title: "Product Adoption Guidance", desc: "Share best-practice prompt templates, vector chunking strategies, and benchmarking tips." },
      { title: "Self-Service Empowerment", desc: "Empower account admins to solve configuration questions independently without scheduling success calls." },
    ],
    businessChallenges: [
      { problem: "New users drop off before completing initial setup", impact: "Long onboarding cycles delay subscription activation and expand churn risk." },
      { problem: "Customer success managers bogged down by basic training", impact: "CSMs spend time on repetitive setup tutorials rather than strategic account expansion." },
      { problem: "Unused enterprise features leading to downsell renewals", impact: "Customers fail to realize full platform ROI due to lack of operational visibility." },
    ],
    howItWorks: [
      { step: "01", title: "Index Onboarding Roadmaps", desc: "Sync implementation blueprints, configuration guides, and video tutorial transcripts." },
      { step: "02", title: "Define Onboarding Milestones", desc: "Craft conversational flows that guide users through workspace creation, data source upload, and agent testing." },
      { step: "03", title: "Enable Proactive Hints", desc: "Surface contextual tips when users visit complex settings or dashboard analytics pages." },
      { step: "04", title: "Track Health & Adoption Metrics", desc: "Monitor common roadblock queries to continuously refine documentation and onboarding paths." },
    ],
    scenarios: [
      {
        query: "What is the best way to structure our company Notion pages for AI training?",
        agentAction: "Retrieves 'Knowledge Base Optimization & Chunking Guide v2.1'.",
        resolution: "Provides clean hierarchy recommendations, bullet-point best practices, and explains how to separate internal vs public pages.",
      },
      {
        query: "How do we invite 5 teammates and set them up with read-only permissions?",
        agentAction: "Retrieves RBAC (Role-Based Access Control) setup documentation.",
        resolution: "Provides exact navigation clicks to Settings > Members, explains Viewer vs Admin permissions, and provides invite link instructions.",
      },
    ],
    integrations: ["Gainsight", "Mixpanel", "Zendesk", "Slack", "Notion", "Segment"],
    escalationPolicy: [
      { trigger: "Account admin expresses dissatisfaction during onboarding", action: "Alerts assigned Customer Success Manager and flags account health status." },
      { trigger: "Enterprise account reaches 80% usage threshold", action: "Initiates proactive check-in regarding capacity expansion and optimization." },
    ],
    outcomes: [
      { metric: "3x", label: "Faster Time-to-Value", desc: "New workspaces complete end-to-end setup within their first session." },
      { metric: "-32%", label: "Onboarding Churn", desc: "Immediate conversational answers eliminate early abandonment." },
      { metric: "+40%", label: "Feature Adoption", desc: "Users discover multi-agent orchestration and analytics capabilities early." },
    ],
    relatedUseCases: [
      { title: "Technical Support", slug: "technical-support", desc: "Assist developers with API and webhook troubleshooting." },
      { title: "Customer Support", slug: "customer-support", desc: "Resolve routine everyday customer inquiries." },
    ],
  },
  {
    slug: "billing-support",
    title: "Billing & Subscription Support",
    shortDesc: "Help customers understand their subscriptions, invoices, payments, and billing-related questions.",
    badge: "By Use Case • Billing & Subscriptions",
    heroTitle: "Eliminate payment friction and automate billing transparency",
    heroSubtitle: "Demystify subscription tiers, prorated invoice charges, and payment method updates. Provide instant, accurate answers to sensitive billing queries without lengthy ticket delays.",
    keyCapabilities: [
      { title: "Invoice & Receipt Explanations", desc: "Clarify line-item charges, tax calculations, credits applied, and currency conversions." },
      { title: "Subscription Management", desc: "Explain annual vs monthly upgrade discounts, seat additions, and immediate plan switches." },
      { title: "Payment Method Inquiries", desc: "Guide users through PCI-compliant credit card updates, PayPal links, and wire transfer requirements." },
      { title: "Renewal & Cancellation Guidance", desc: "Provide transparent retention policies, data export steps, and cancellation instructions without dark patterns." },
    ],
    businessChallenges: [
      { problem: "Billing disputes clog primary support inboxes", impact: "Payment inquiries require urgent resolution; delays lead to accidental cancellations." },
      { problem: "Proration and tax confusion creates friction", impact: "Customers misunderstand mid-cycle upgrades and submit chargeback disputes." },
      { problem: "Failed card payments lead to involuntary churn", impact: "Subscriptions lapse simply because updating payment methods was difficult." },
    ],
    howItWorks: [
      { step: "01", title: "Index Billing & Tax Policies", desc: "Upload detailed explanations of plan limits, credit consumption, refund guidelines, and Paddle merchant terms." },
      { step: "02", title: "Set Strict Privacy Boundaries", desc: "Enforce guardrails ensuring full credit card numbers or sensitive financial data are never requested or stored." },
      { step: "03", title: "Provide Direct Portal Deeplinks", desc: "Equip the agent with secure links to the customer's /settings/billing dashboard." },
      { step: "04", title: "Configure Finance Escalation", desc: "Route complex refund requests or enterprise VAT invoice inquiries directly to accounting specialists." },
    ],
    scenarios: [
      {
        query: "Why was I charged $49 this month instead of $19?",
        agentAction: "Cross-checks plan pricing tiers and upgrade proration documentation.",
        resolution: "Explains the difference between Starter ($19) and Growth ($49) plans and explains how mid-cycle plan changes are calculated on invoices.",
      },
      {
        query: "Where can I download our company tax invoice for last month?",
        agentAction: "Retrieves invoice download instructions for Paddle / Stripe billing portal.",
        resolution: "Provides step-by-step clicks to Settings > Plans & Billing > Invoices, confirming PDF receipts include VAT/GST IDs.",
      },
    ],
    integrations: ["Paddle", "Stripe", "Chargebee", "QuickBooks", "NetSuite", "Xero"],
    escalationPolicy: [
      { trigger: "Explicit refund request over $100", action: "Gathers reason and routes directly to Finance Team for 24-hour review." },
      { trigger: "Reported unauthorized card transaction", action: "Instantly freezes disputed session and alerts security and billing ops." },
    ],
    outcomes: [
      { metric: "88%", label: "Faster Resolution", desc: "Billing clarification provided in seconds instead of multi-day email chains." },
      { metric: "-40%", label: "Failed Payment Churn", desc: "Proactive payment method update guidance salvages active accounts." },
      { metric: "100%", label: "PCI Compliant", desc: "Zero financial credential exposure through secure external redirects." },
    ],
    relatedUseCases: [
      { title: "Sales Assistance", slug: "sales-assistance", desc: "Guide prospects through enterprise pricing quotes." },
      { title: "Customer Support", slug: "customer-support", desc: "Automate everyday support and account questions." },
    ],
  },
];
