export enum LegalDocumentCategory {
  ESSENTIAL = 'ESSENTIAL',
  AI_DATA = 'AI_DATA',
  ENTERPRISE = 'ENTERPRISE',
}

export enum LegalJurisdiction {
  GLOBAL = 'GLOBAL',
  IN = 'IN',
  EU = 'EU',
  US = 'US',
}

export const LEGAL_DOCUMENT_KEYS = {
  TERMS_OF_SERVICE: 'terms-of-service',
  PRIVACY_POLICY: 'privacy-policy',
  COOKIE_POLICY: 'cookie-policy',
  ACCEPTABLE_USE_POLICY: 'acceptable-use-policy',
  DATA_PROCESSING_AGREEMENT: 'data-processing-agreement',
  SUBSCRIPTION_BILLING_POLICY: 'subscription-billing-policy',
  REFUND_CANCELLATION_POLICY: 'refund-cancellation-policy',
  AI_USAGE_POLICY: 'ai-usage-policy',
  DATA_RETENTION_POLICY: 'data-retention-policy',
  SUBPROCESSORS: 'subprocessors',
  SECURITY_POLICY: 'security-policy',
  SERVICE_LEVEL_AGREEMENT: 'service-level-agreement',
  ENTERPRISE_AGREEMENT: 'enterprise-agreement',
  API_TERMS: 'api-terms',
  DATA_BREACH_POLICY: 'data-breach-policy',
  INTELLECTUAL_PROPERTY_POLICY: 'intellectual-property-policy',
  CONFIDENTIALITY_AGREEMENT: 'confidentiality-agreement',
} as const;

export interface LegalSeedDocument {
  key: string;
  slug: string;
  title: string;
  category: LegalDocumentCategory;
  description: string;
  jurisdiction: string;
  requiresAcceptance: boolean;
  isDownloadable: boolean;
  metaTitle: string;
  metaDescription: string;
  displayOrder: number;
  initialVersion: string;
  changeSummary: string;
  content: string;
}

export const LEGAL_SEEDS: LegalSeedDocument[] = [
  // 1. Terms of Service
  {
    key: LEGAL_DOCUMENT_KEYS.TERMS_OF_SERVICE,
    slug: 'terms-of-service',
    title: 'Terms of Service',
    category: LegalDocumentCategory.ESSENTIAL,
    description: 'The master terms governing access, subscription, account registration, and use of Yedii.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: true,
    isDownloadable: true,
    metaTitle: 'Terms of Service | Yedii Legal & Compliance',
    metaDescription: 'Read the Terms of Service governing access, accounts, subscriptions, and AI agent operations on Yedii.',
    displayOrder: 1,
    initialVersion: '1.0',
    changeSummary: 'Initial release of enterprise Terms of Service.',
    content: `# Terms of Service

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

PLEASE READ THESE TERMS OF SERVICE ("TERMS") CAREFULLY BEFORE ACCESSING OR USING THE YEDII PLATFORM. BY REGISTERING AN ACCOUNT, ACCESSING OUR APIS, OR DEPLOYING AI AGENTS THROUGH YEDII, YOU AGREE TO BE BOUND BY THESE TERMS.

---

### 1. Introduction and Agreement
These Terms constitute a legally binding agreement between you (whether individually or on behalf of an enterprise or entity, "Customer", "You", or "User") and Yedii Inc. ("Yedii", "we", "us", or "our"). Yedii provides an enterprise-grade artificial intelligence customer support SaaS platform encompassing autonomous AI agents, knowledge ingestion, multi-tenant workspace management, vector retrieval, and third-party integrations.

If you are entering into these Terms on behalf of an organization or company, you represent and warrant that you possess full corporate authority to bind such entity. If you do not have such authority or do not agree with any provision of these Terms, you must not access or use the platform.

### 2. Account Registration and Security
- **Eligibility:** You must be at least 18 years old or the age of majority in your jurisdiction to create an account.
- **Accuracy:** You must provide complete, accurate, and current information during registration.
- **Credentials:** You are responsible for safeguarding your login credentials, API keys, and session tokens. You must immediately notify Yedii of any unauthorized access or breach of security.
- **Workspaces & Organizations:** Workspaces represent distinct administrative boundaries. Account Owners and Admins are legally liable for all actions conducted under their workspace.

### 3. Permitted Use and Service Scope
Subject to these Terms and timely payment of subscription fees, Yedii grants you a non-exclusive, non-transferable, revocable right to access and use the platform for your internal business customer support operations.

You shall not:
1. Reverse engineer, decompile, or disassemble any aspect of Yedii's software, crawlers, or proprietary embeddings.
2. Circumvent usage quotas, rate limits, credit caps, or licensing tiers.
3. Access Yedii to build a competitive benchmarking service or copy platform architecture.
4. Use Yedii in violation of export control laws, sanction regimes, or applicable regulations.

### 4. Subscriptions, Invoicing, and Billing
- **Merchant of Record:** All customer payments, subscriptions, and invoicing are handled through our global Merchant of Record, **Paddle** (Paddle.com Market Ltd / Paddle Payments Ltd).
- **Billing Intervals:** Subscriptions are billed in advance on a recurring monthly or annual basis.
- **Credits & Quotas:** AI response credits, ingestion capacities, and workspace limits are allocated based on your purchased plan tier. Unused monthly credits do not roll over unless explicitly provided in an Enterprise Order Form.
- **Taxes:** Paddle collects and remits applicable VAT, GST, and sales taxes depending on your billing address.
- **Default & Suspension:** Failure to pay subscription fees within 14 days of due date may result in automatic suspension of AI agents and API access.

### 5. Intellectual Property Rights
- **Yedii Ownership:** Yedii retains all right, title, and interest in and to the platform, including UI/UX, database designs, proprietary vector algorithms, APIs, logos, and system prompts.
- **Customer Content:** You retain ownership of all knowledge-base documents, PDFs, crawled domain content, FAQs, customer conversation logs, and proprietary data uploaded to your workspace ("Customer Data").
- **License to Yedii:** You grant Yedii a worldwide, limited, non-exclusive license to host, process, vectorize, and retrieve Customer Data strictly to operate, maintain, and provide the services to you.

### 6. AI Agent Behavior and Disclosures
- **Agent Nature:** AI agents generated through Yedii utilize third-party foundation models (including OpenAI, Anthropic, Google Gemini, and DeepSeek).
- **Hallucination Disclaimer:** AI outputs are probabilistic. While Yedii provides grounding mechanisms (RAG), Yedii does not guarantee that every AI-generated response is 100% accurate, complete, or error-free.
- **Customer Oversight:** You are responsible for configuring system prompts, guardrails, human escalation rules, and reviewing high-risk automated interactions.

### 7. Limitation of Liability
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL YEDII, ITS DIRECTORS, EMPLOYEES, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOSS OF PROFITS, DATA LOSS, BUSINESS INTERRUPTION, OR SERVICE INTERRUPTIONS.

IN NO EVENT SHALL YEDII'S TOTAL AGGREGATE LIABILITY EXCEED THE GREATER OF ONE HUNDRED US DOLLARS ($100 USD) OR THE TOTAL FEES ACTUALLY PAID BY YOU TO YEDII IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.

### 8. Term, Suspension, and Termination
- Either party may terminate these Terms for convenience with 30 days' notice, or immediately for material breach remaining uncured after 15 days written notice.
- Upon termination, your right to access AI agents terminates, and Customer Data will be retained or deleted according to our Data Retention & Deletion Policy.

### 9. Governing Law and Dispute Resolution
These Terms shall be governed by and construed in accordance with the laws of the State of Delaware (for international customers) or the laws of India (where required by local statutory mandates), without regard to conflict of law principles. Any dispute arising out of or related to these Terms shall be resolved by binding arbitration under the rules of the American Arbitration Association or the Mumbai Centre for International Arbitration (MCIA).

### 10. Contact Information
For legal inquiries, contact:
**Yedii Legal Department**  
Email: \`legal@yedii.com\`  
Address: 100 Enterprise Way, Suite 400, Wilmington, DE 19801 / India Operations: Bangalore, Karnataka, India.
`,
  },

  // 2. Privacy Policy
  {
    key: LEGAL_DOCUMENT_KEYS.PRIVACY_POLICY,
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    category: LegalDocumentCategory.ESSENTIAL,
    description: 'Explains how Yedii collects, uses, shares, stores, and protects personal data under GDPR, CCPA, and India DPDPA 2023.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: false, // Acknowledged upon registration
    isDownloadable: true,
    metaTitle: 'Privacy Policy | Yedii Legal & Compliance',
    metaDescription: 'Detailed Privacy Policy outlining data processing, DPDPA 2023 compliance, GDPR data subject rights, and cookie controls.',
    displayOrder: 2,
    initialVersion: '1.0',
    changeSummary: 'Comprehensive privacy policy addressing India DPDPA 2023, EU GDPR, and CCPA.',
    content: `# Privacy Policy

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

Yedii Inc. ("Yedii", "we", "us", or "our") is committed to protecting the privacy and personal data of our customers, website visitors, and end-users. This Privacy Policy describes how we collect, process, store, and disclose information across our public websites, customer support SaaS dashboard, AI agents, APIs, and customer integrations.

---

### 1. Scope & Roles Under Applicable Privacy Laws
- **Yedii as a Data Controller:** We act as a Data Controller / Data Fiduciary with respect to your account details, billing contact information, website usage telemetry, marketing preferences, and cookie logs.
- **Yedii as a Data Processor:** When our customers deploy AI agents to handle end-user customer support conversations, upload PDFs, crawl websites, or index knowledge bases, Yedii acts as a Data Processor / Data Processor on behalf of the Customer (who is the Data Controller / Data Fiduciary). Processing in this capacity is governed by our [Data Processing Agreement](/legal/data-processing-agreement).

### 2. Information We Collect
#### A. Information You Directly Provide
- **Account Registration:** First name, last name, email address, password hash, company/workspace name, billing address, phone number.
- **Customer Support & Communications:** Inquiries sent to our support desk, enterprise RFP questionnaires, bug reports.
- **Marketing Preferences:** Explicit consent for marketing newsletters and product announcements.

#### B. Information Collected Automatically
- **System Telemetry:** IP address, browser type, operating system, device fingerprint, geographic location (country, city), session timestamps, token versions.
- **Usage Metrics:** AI token consumption, vector query latencies, API request volumes, feature interactions.

#### C. Knowledge Base & Conversation Data
- Documents uploaded (PDF, DOCX, TXT), website URLs crawled via Firecrawl, chat message transcripts, agent prompt configurations, and vector embeddings generated in Qdrant.

### 3. Legal Bases for Processing (GDPR & International Law)
We process personal data under the following legal bases:
1. **Contractual Performance:** To fulfill our obligations under the Terms of Service and provide the platform.
2. **Legitimate Interests:** To prevent fraud, secure our infrastructure, monitor system health, and improve agent response accuracy.
3. **Legal Compliance:** To maintain accounting records, comply with tax laws, and respond to lawful government requests.
4. **Consent:** Where you provide explicit opt-in consent (e.g., optional marketing communications or non-essential cookies).

### 4. Compliance with India Digital Personal Data Protection Act, 2023 (DPDPA)
If you or your data subjects are located in India:
- Yedii adheres to the provisions of the DPDPA 2023 and applicable notification rules.
- Notice is provided prior to collecting personal data outlining specific processing purposes.
- You have the right to access a summary of your personal data, seek correction/erasure, nominate an authorized representative, and access our dedicated Grievance Redressal Mechanism.
- **Grievance Redressal Officer (India):**  
  Name: Privacy & Grievance Officer, Yedii Technologies India Pvt. Ltd.  
  Email: \`grievance@yedii.com\`  
  Response Timeline: Within statutory deadlines (under 30 days).

### 5. California Privacy Rights (CCPA / CPRA)
If you reside in California:
- We do **not** sell or share your personal information for cross-context behavioral advertising.
- You have the right to know, delete, correct, and limit the use of your sensitive personal information.
- We do not discriminate against you for exercising your privacy rights.

### 6. Subprocessors and Cross-Border Transfers
We share personal data with vetted third-party service providers (subprocessors) for cloud hosting, vector database management, LLM inference, and billing. All cross-border data transfers are executed under Standard Contractual Clauses (SCCs) or adequacy decisions. Review our complete [Subprocessor List](/legal/subprocessors).

### 7. Data Retention & Security Measures
Personal data is retained in accordance with our [Data Retention & Deletion Policy](/legal/data-retention-policy). We implement AES-256 encryption at rest, TLS 1.3 in transit, role-based access control (RBAC), and session revocation capabilities.

### 8. Your Privacy Rights
Regardless of your location, you may submit requests to:
- Access or export your personal data.
- Correct inaccurate or incomplete information.
- Request erasure ("Right to be Forgotten") where legally applicable.
- Withdraw previously granted consent.

To submit a request, contact \`privacy@yedii.com\`.
`,
  },

  // 3. Cookie Policy
  {
    key: LEGAL_DOCUMENT_KEYS.COOKIE_POLICY,
    slug: 'cookie-policy',
    title: 'Cookie Policy',
    category: LegalDocumentCategory.ESSENTIAL,
    description: 'Explains how cookies, web beacons, and local storage are utilized on Yedii, and how you can control preferences.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: false,
    isDownloadable: true,
    metaTitle: 'Cookie Policy | Yedii Legal & Compliance',
    metaDescription: 'Detailed Cookie Policy covering strictly necessary, functional, analytics, and marketing tracking technologies on Yedii.',
    displayOrder: 3,
    initialVersion: '1.0',
    changeSummary: 'Initial publication of Cookie Policy with category breakdown.',
    content: `# Cookie Policy

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

This Cookie Policy explains how Yedii Inc. ("Yedii", "we", "us", or "our") uses cookies, pixels, local storage objects, and similar tracking technologies when you visit our website, documentation portal, or customer dashboard.

---

### 1. What Are Cookies?
Cookies are small text files stored on your computer or mobile device when you access websites. They allow web applications to identify your browser, remember user preferences, facilitate secure authentication, and analyze site performance.

### 2. Cookie Categories We Use

#### Category 1: Strictly Necessary Cookies (Always Active)
These cookies are essential for the operation of the Yedii platform and security integrity. They cannot be switched off in our consent manager.
- **Authentication & Sessions:** \`__yedii_access\`, \`__yedii_refresh\` (HTTP-only secure JWT cookies storing session tokens).
- **Security & CSRF:** \`__Host-csrf-token\` to protect against Cross-Site Request Forgery attacks.
- **Consent Preference:** \`yedii_cookie_consent\` storing your explicit category preferences.

#### Category 2: Functional Cookies
These cookies enable enhanced platform functionality and personalization, such as remembering your selected workspace, collapsed sidebar state, and language preferences.
- If you disable these cookies, some platform preferences may reset on page refresh.

#### Category 3: Analytics Cookies
These cookies help us understand how visitors interact with Yedii by collecting aggregated, anonymous metrics (e.g., page visit counts, vector search latencies, documentation search keywords).
- Optional. Disabled by default until you grant explicit consent.

#### Category 4: Marketing Cookies
These cookies may be set through our advertising partners to track visitor behavior across websites and present relevant product announcements.
- Optional. Disabled by default. Yedii does not sell personal browsing history.

### 3. Managing Your Cookie Preferences
You can review or change your cookie choices at any time by clicking the **"Cookie Settings"** button located in the footer of our website, or through your browser settings.

For questions, contact: \`privacy@yedii.com\`.
`,
  },

  // 4. Acceptable Use Policy (AUP)
  {
    key: LEGAL_DOCUMENT_KEYS.ACCEPTABLE_USE_POLICY,
    slug: 'acceptable-use-policy',
    title: 'Acceptable Use Policy (AUP)',
    category: LegalDocumentCategory.ESSENTIAL,
    description: 'Defines prohibited behaviors, abusive AI utilization, security testing limits, and network guidelines.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: true,
    isDownloadable: true,
    metaTitle: 'Acceptable Use Policy | Yedii Legal & Compliance',
    metaDescription: 'Yedii Acceptable Use Policy outlining prohibited activities, safety standards, and AI abuse prevention.',
    displayOrder: 4,
    initialVersion: '1.0',
    changeSummary: 'Initial publication of AUP covering autonomous AI agent constraints.',
    content: `# Acceptable Use Policy (AUP)

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

This Acceptable Use Policy ("AUP") governs the acceptable and prohibited uses of the Yedii SaaS platform, AI agent execution environments, vector databases, web crawlers, and APIs.

---

### 1. Prohibited Activities
You agree not to use, attempt to use, or encourage others to use Yedii:
1. **Illegal or Fraudulent Purposes:** To violate any applicable local, state, national, or international law, including money laundering, fraud, or export regulations.
2. **Harm to Minors:** To exploit, harm, or attempt to harm minors in any way, including generating child sexual abuse material (CSAM).
3. **Malware & Cyberattacks:** To distribute viruses, worms, trojan horses, ransomware, or to execute denial-of-service (DoS/DDoS) attacks.
4. **Harassment & Hate Speech:** To generate, store, or distribute threatening, abusive, defamatory, or hate-inciting content targeting protected groups.
5. **Unauthorized Crawling:** To instruct Yedii web crawlers to target domains without authorization, ignore \`robots.txt\` rules, or scrape copyrighted databases in violation of site terms.
6. **Prompt Injection & Model Jailbreaking:** To craft adversarial prompt injections intended to override platform safety filters or expose underlying system instructions.

### 2. High-Risk Automated Decisions
Yedii customer support agents must not be configured to make fully automated, binding legal, medical, financial, or critical infrastructure decisions without human verification.

### 3. Enforcement & Suspension
Yedii reserves the right to monitor platform metrics, detect anomalous token bursts, investigate abuse reports, and immediately suspend workspaces found in breach of this AUP without refund.
`,
  },

  // 5. Data Processing Agreement (DPA)
  {
    key: LEGAL_DOCUMENT_KEYS.DATA_PROCESSING_AGREEMENT,
    slug: 'data-processing-agreement',
    title: 'Data Processing Agreement (DPA)',
    category: LegalDocumentCategory.ESSENTIAL,
    description: 'Enterprise DPA pursuant to GDPR Article 28 and India DPDPA 2023, reflecting Yedii’s real technical architecture.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: true,
    isDownloadable: true,
    metaTitle: 'Data Processing Agreement (DPA) | Yedii Compliance',
    metaDescription: 'Enterprise Data Processing Agreement covering GDPR Art 28, DPDPA 2023, MongoDB, Redis, Qdrant vector storage, and AI subprocessors.',
    displayOrder: 5,
    initialVersion: '1.0',
    changeSummary: 'Comprehensive DPA accounting for MongoDB, Redis, Qdrant vector database, Firecrawl, and LLM providers.',
    content: `# Data Processing Agreement (DPA)

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

This Data Processing Agreement ("DPA") supplements the Yedii Terms of Service and applies to the processing of Personal Data by Yedii Inc. on behalf of the Customer in connection with the Yedii SaaS platform.

---

### 1. Definitions and Statutory Alignment
- **"Applicable Data Protection Laws"** means Regulation (EU) 2016/679 (GDPR), UK GDPR, the California Consumer Privacy Act (CCPA/CPRA), the India Digital Personal Data Protection Act, 2023 (DPDPA), and the Information Technology Act, 2000.
- **"Customer Personal Data"** means personal data processed by Yedii on behalf of Customer as a Data Processor / Data Fiduciary / Service Provider.
- **"Technical Architecture"** means Yedii's real production environment, including:
  1. **MongoDB:** Multi-tenant primary operational datastore for users, workspaces, sessions, billing records, and message logs.
  2. **Redis:** Distributed caching, token version revocation, and real-time rate-limiting.
  3. **Qdrant Vector Database:** Storage and retrieval of text embeddings generated from ingested knowledge documents.
  4. **Document Ingestion & Web Crawling:** Text extraction from uploaded PDFs and authorized website crawling via Firecrawl.
  5. **AI Inference Layer:** Secure API integrations with foundation model providers (OpenAI, Anthropic, Google Gemini, DeepSeek).

### 2. Roles of the Parties
- Customer is the **Data Controller** (or Data Fiduciary under DPDPA) determining the purposes and means of processing.
- Yedii is the **Data Processor** processing Customer Personal Data solely upon Customer's documented instructions and to deliver the platform.

### 3. Subject Matter and Processing Scope
- **Duration:** Term of the Customer's subscription plus post-termination retention periods.
- **Categories of Data Subjects:** Customer employees, support agents, and Customer's end-user customers participating in support chats.
- **Categories of Personal Data:** Contact details, support inquiry messages, chat history, attachments, and context ingested into workspace knowledge bases.
- **Prohibited Data:** Customer shall not transmit Special Category Data (health, biometric, racial, genetic data) without prior written mutual agreement.

### 4. Technical and Organizational Measures (TOMs)
Yedii shall implement and maintain rigorous security measures:
1. **Encryption:** AES-256 encryption at rest across MongoDB clusters, Redis instances, and Qdrant vector collections. TLS 1.3 encryption for all data in transit.
2. **Access Controls:** Least-privilege role-based access control (RBAC), multi-factor authentication for administrative access, and immutable audit logs.
3. **Workspace Isolation:** Logical multi-tenant separation enforcing strict workspace boundaries.
4. **Zero AI Training:** Yedii contractually mandates that customer prompts and conversation embeddings are **not** used by foundation model providers to train foundational AI models.

### 5. Subprocessors
- Customer authorizes Yedii to engage subprocessors to provide infrastructure and AI inference.
- Current subprocessors are enumerated at [/legal/subprocessors](/legal/subprocessors).
- Yedii shall provide at least 30 days prior notice before onboarding new subprocessors, granting Customer the right to object on reasonable data protection grounds.

### 6. International Data Transfers
Transfers outside the EEA, UK, or India shall be governed by approved transfer mechanisms, including European Commission Standard Contractual Clauses (SCCs).

### 7. Security Incident & Data Breach Response
Yedii shall notify Customer in writing without undue delay (and in any case within 48 hours, or 6 hours where required under CERT-In Indian cyber directives) upon discovering a confirmed security breach impacting Customer Personal Data.

### 8. Audits and Deletion
Upon contract termination, Yedii shall securely delete or return all Customer Personal Data within 30 days, in accordance with our [Data Retention & Deletion Policy](/legal/data-retention-policy).
`,
  },

  // 6. Subscription & Billing Policy
  {
    key: LEGAL_DOCUMENT_KEYS.SUBSCRIPTION_BILLING_POLICY,
    slug: 'subscription-billing-policy',
    title: 'Subscription & Billing Policy',
    category: LegalDocumentCategory.ESSENTIAL,
    description: 'Details subscription tiers, billing cycles, Paddle checkout integration, credit consumption, and automatic renewal.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: true,
    isDownloadable: true,
    metaTitle: 'Subscription & Billing Policy | Yedii',
    metaDescription: 'Official Subscription and Billing Policy outlining Paddle Merchant of Record checkout, credit consumption, and renewals.',
    displayOrder: 6,
    initialVersion: '1.0',
    changeSummary: 'Initial release aligning with Paddle integration.',
    content: `# Subscription & Billing Policy

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

This Subscription & Billing Policy details the financial and subscription terms governing paid tiers, usage credits, invoicing, and renewals on Yedii.

---

### 1. Merchant of Record (Paddle)
All payment transactions, checkout sessions, invoice processing, currency conversion, and sales tax/VAT compliance are conducted by **Paddle** (Paddle.com Market Ltd / Paddle Payments Ltd), our authorized Merchant of Record.

### 2. Plans and Billing Frequencies
- **Plans:** Yedii offers Free, Starter, Professional, and Enterprise plans with varying feature quotas, agent limits, and AI credit allowances.
- **Intervals:** Subscriptions are offered on monthly and annual billing cycles. Annual plans are paid in full at subscription inception.

### 3. Credit System & Quotas
- **AI Response Credits:** Each AI message interaction and vector embedding consumption deducts credits according to model complexity (e.g., standard vs. advanced reasoning models).
- **Consumption:** Credits are consumed sequentially. If a workspace runs out of credits, AI agents will pause or fall back to draft/human-escalation mode until additional credits are purchased or the monthly plan renews.

### 4. Automatic Renewals & Cancellations
- Subscriptions automatically renew at the end of each billing cycle unless cancelled prior to the renewal date via the Customer Billing Dashboard.
- Cancellation halts future recurring charges; access remains active until the end of the paid billing period.
`,
  },

  // 7. Refund & Cancellation Policy
  {
    key: LEGAL_DOCUMENT_KEYS.REFUND_CANCELLATION_POLICY,
    slug: 'refund-cancellation-policy',
    title: 'Refund & Cancellation Policy',
    category: LegalDocumentCategory.ESSENTIAL,
    description: 'Clear rules on refund eligibility, trial periods, subscription cancellations, and dispute handling.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: true,
    isDownloadable: true,
    metaTitle: 'Refund & Cancellation Policy | Yedii',
    metaDescription: 'Understand refund terms, 14-day statutory consumer rights, cancellation rules, and Paddle dispute procedures.',
    displayOrder: 7,
    initialVersion: '1.0',
    changeSummary: 'Initial publication of refund guidelines.',
    content: `# Refund & Cancellation Policy

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

At Yedii, we strive for complete satisfaction. This policy sets forth refund conditions and cancellation rights.

---

### 1. Subscription Cancellation
You can cancel your subscription at any time directly through your Yedii dashboard under **Settings > Billing**, or via the Paddle customer management portal. Cancellation takes effect at the expiration of your current prepaid billing cycle.

### 2. Refund Eligibility
- **Monthly Plans:** Monthly subscription fees are non-refundable once the billing cycle has begun, except where required by mandatory local law.
- **Annual Plans:** If you cancel an annual plan within fourteen (14) days of initial purchase or renewal, you may request a full refund less any AI credits consumed. After 14 days, annual plans are non-refundable.
- **Consumed Credits & Add-ons:** One-off credit top-ups, extra crawl jobs, and dedicated IP add-ons that have been partially or fully utilized are non-refundable.

### 3. EU/UK Statutory Right of Withdrawal
Consumers residing in the European Union or United Kingdom possess a statutory 14-day right to cancel digital service contracts. By commencing platform use and executing AI operations immediately, you acknowledge that refund amounts may be prorated for services already utilized.

### 4. How to Request a Refund
Submit refund requests to \`billing@yedii.com\` including your workspace ID and Paddle invoice receipt number.
`,
  },

  // 8. AI Usage & Disclosure Policy
  {
    key: LEGAL_DOCUMENT_KEYS.AI_USAGE_POLICY,
    slug: 'ai-usage-policy',
    title: 'AI Usage & Disclosure Policy',
    category: LegalDocumentCategory.AI_DATA,
    description: 'Enterprise AI guidelines, hallucination disclosures, customer oversight duties, and transparency standards.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: true,
    isDownloadable: true,
    metaTitle: 'AI Usage & Disclosure Policy | Yedii',
    metaDescription: 'Understand AI transparency, customer responsibility, human escalation, and model provider processing on Yedii.',
    displayOrder: 8,
    initialVersion: '1.0',
    changeSummary: 'Initial enterprise policy on AI disclosure, hallucination risks, and guardrails.',
    content: `# AI Usage & Disclosure Policy

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

This AI Usage & Disclosure Policy explains how artificial intelligence technologies operate within the Yedii customer support platform, our technical guardrails, and customer responsibilities.

---

### 1. Nature of AI Support Agents
Yedii enables businesses to deploy autonomous AI agents that converse with human customers. These agents leverage large language models (LLMs) and retrieval-augmented generation (RAG) to synthesize answers from customer-provided documentation.

### 2. Disclosures and Inaccuracies (Hallucinations)
- **Probabilistic Output:** LLMs generate responses probabilistically. Even with high-precision grounding in Qdrant vector databases, AI agents may occasionally produce incorrect, outdated, or hallucinated statements.
- **Customer Disclaimer:** You acknowledge that Yedii does not guarantee 100% factual accuracy in autonomous outputs. Customers must test and configure appropriate system instructions and confidence thresholds.

### 3. Mandatory AI Transparency & Disclosure
In compliance with the EU AI Act and international consumer protection standards:
- Customers deploying Yedii agents **must not** deceptively represent the AI agent as a human being.
- The chat interface must clearly signal that the user is interacting with an AI-powered assistant (e.g., "Powered by Yedii AI" or "AI Virtual Assistant").

### 4. Human Escalation Requirements
For complex inquiries, sentiment frustration, or high-stakes topics, customers must configure human escalation workflows allowing end-users to route to a live human agent.

### 5. AI Training Commitments
Yedii ensures that Customer workspace data, knowledge documents, and conversation history are **never** utilized to train foundation AI models for third parties.
`,
  },

  // 9. Data Retention & Deletion Policy
  {
    key: LEGAL_DOCUMENT_KEYS.DATA_RETENTION_POLICY,
    slug: 'data-retention-policy',
    title: 'Data Retention & Deletion Policy',
    category: LegalDocumentCategory.AI_DATA,
    description: 'Retention schedules, automated purging, workspace archival, and hard deletion timelines.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: false,
    isDownloadable: true,
    metaTitle: 'Data Retention & Deletion Policy | Yedii',
    metaDescription: 'Review Yedii’s retention timelines for logs, vector embeddings, chat transcripts, and database backups.',
    displayOrder: 9,
    initialVersion: '1.0',
    changeSummary: 'Initial publication of retention and deletion timelines.',
    content: `# Data Retention & Deletion Policy

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

This policy outlines the retention periods, archiving mechanisms, and deletion procedures for data stored across Yedii's infrastructure.

---

### 1. Data Retention Schedule
| Data Category | Retention Period | Deletion Mechanism |
|---|---|---|
| User Account & Profile | Lifetime of active account + 30 days | Hard delete in MongoDB |
| Customer Support Transcripts | Configurable (Default: 365 days) | Automatic purge |
| Knowledge Base Embeddings | Lifetime of active workspace | Purged from Qdrant vector DB |
| Crawled Web Pages & PDFs | Replaced on new crawl or workspace deletion | Purged from Cloudflare R2 |
| Server Access & Security Logs | 90 days | Automated log rotation |
| Billing & Tax Invoices | 7 years (statutory legal requirement) | Secure financial archive |

### 2. Customer-Initiated Deletion
Customers may delete individual documents, vector collections, or entire workspaces through the dashboard. Upon workspace deletion:
- Live access terminates immediately.
- Production datastores are hard-deleted within 14 business days.
- Encrypted database snapshots and backups roll off within 30 days.
`,
  },

  // 10. Subprocessor List
  {
    key: LEGAL_DOCUMENT_KEYS.SUBPROCESSORS,
    slug: 'subprocessors',
    title: 'Subprocessor List',
    category: LegalDocumentCategory.AI_DATA,
    description: 'Complete list of verified third-party infrastructure and AI model subprocessors.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: false,
    isDownloadable: true,
    metaTitle: 'Subprocessor List | Yedii Compliance',
    metaDescription: 'Complete and transparent subprocessor list for Yedii cloud hosting, vector storage, and AI inference.',
    displayOrder: 10,
    initialVersion: '1.0',
    changeSummary: 'Current list of vetted subprocessors.',
    content: `# Subprocessor List

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

Yedii engages the following third-party infrastructure and application subprocessors to deliver the platform:

---

### 1. Hosting & Database Infrastructure
- **MongoDB Atlas:** Managed operational database (Cloud hosting in US / EU / AP regions).
- **Qdrant Cloud:** Managed vector database for real-time semantic document retrieval.
- **Upstash / Redis Cloud:** In-memory distributed caching and session rate limiting.
- **Cloudflare Inc.:** DNS, DDoS protection, edge caching, and Cloudflare R2 object storage for PDF assets.
- **Amazon Web Services (AWS):** Cloud compute and network infrastructure.

### 2. Artificial Intelligence Model Inference
- **OpenAI, LLC (USA):** GPT model inference for prompt completion and text embedding.
- **Anthropic, PBC (USA):** Claude model inference for enterprise reasoning.
- **Google Cloud / Gemini (USA):** Gemini multimodal inference and vector processing.
- **DeepSeek Technologies:** Specialized LLM inference where selected by customer.

### 3. Payment & Merchant of Record
- **Paddle.com Market Ltd (UK) / Paddle Payments Ltd (Ireland):** Global payment processing, billing checkout, invoice generation, tax remittance.

### 4. Communications & Email
- **Resend / SendGrid:** Transactional emails, verification OTPs, and password reset dispatches.
`,
  },

  // 11. Security Policy
  {
    key: LEGAL_DOCUMENT_KEYS.SECURITY_POLICY,
    slug: 'security-policy',
    title: 'Security Policy',
    category: LegalDocumentCategory.AI_DATA,
    description: 'Technical and organizational measures, encryption, vulnerability disclosures, and access control policies.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: false,
    isDownloadable: true,
    metaTitle: 'Security Policy | Yedii Security & Compliance',
    metaDescription: 'Review Yedii’s security posture: AES-256 encryption, zero training guarantees, and SOC 2 alignment.',
    displayOrder: 11,
    initialVersion: '1.0',
    changeSummary: 'Initial enterprise security policy.',
    content: `# Security Policy

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

Security is paramount at Yedii. We design our AI customer support architecture to meet stringent enterprise security requirements.

---

### 1. Cryptographic Standards
- **Data in Transit:** Enforced TLS 1.3 with strong cipher suites across all endpoints.
- **Data at Rest:** AES-256 encryption for databases, vector collections, and file backups.

### 2. Network & Application Defense
- Continuous DDoS mitigation and Web Application Firewall (WAF) via Cloudflare.
- Rate-limiting enforced at API gateway and Redis levels.
- Strict Content Security Policies (CSP), HTTP Strict Transport Security (HSTS), and CSRF protection.

### 3. Vulnerability Reporting
We welcome security researchers. Report vulnerabilities responsibly to \`security@yedii.com\`.
`,
  },

  // 12. Service Level Agreement (SLA)
  {
    key: LEGAL_DOCUMENT_KEYS.SERVICE_LEVEL_AGREEMENT,
    slug: 'service-level-agreement',
    title: 'Service Level Agreement (SLA)',
    category: LegalDocumentCategory.ENTERPRISE,
    description: 'Uptime guarantees (99.9%), planned maintenance rules, latency targets, and service credit structures for enterprise plans.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: true,
    isDownloadable: true,
    metaTitle: 'Service Level Agreement (SLA) | Yedii',
    metaDescription: 'Enterprise 99.9% uptime SLA commitments, incident response times, and service credit remedies.',
    displayOrder: 12,
    initialVersion: '1.0',
    changeSummary: 'Enterprise SLA release.',
    content: `# Service Level Agreement (SLA)

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

This Service Level Agreement ("SLA") applies to Enterprise customers who have executed an Enterprise Agreement with Yedii.

---

### 1. Service Availability Commitment
Yedii will make the production SaaS platform available with a **Monthly Uptime Percentage of at least 99.9%** during each calendar month.

### 2. Service Credits
If Yedii does not achieve the Monthly Uptime Commitment, Customer is entitled to claim Service Credits:
- **99.0% to 99.9%:** 10% credit of monthly subscription fee.
- **95.0% to 99.0%:** 25% credit.
- **Below 95.0%:** 50% credit.

Service Credits are applied toward future invoices.
`,
  },

  // 13. Enterprise Agreement
  {
    key: LEGAL_DOCUMENT_KEYS.ENTERPRISE_AGREEMENT,
    slug: 'enterprise-agreement',
    title: 'Enterprise Agreement',
    category: LegalDocumentCategory.ENTERPRISE,
    description: 'Master services agreement for custom corporate rollouts, dedicated tenants, and tailored terms.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: true,
    isDownloadable: true,
    metaTitle: 'Enterprise Master Services Agreement | Yedii',
    metaDescription: 'Master services agreement for enterprise customer deployments, custom commitments, and legal reviews.',
    displayOrder: 13,
    initialVersion: '1.0',
    changeSummary: 'Master agreement for enterprise contracts.',
    content: `# Enterprise Agreement

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

This Enterprise Agreement ("Agreement") governs enterprise-tier licensing, dedicated provisioning, and support services provided by Yedii Inc. to Customer.

---

### 1. Order Forms & Precedence
This Agreement, together with executed Order Forms, Statement of Work (SOW), and the DPA, constitutes the entire agreement between the parties.

### 2. Custom Terms
Enterprise customers receive priority support queues, custom vector indexing allocations, dedicated technical account management, and negotiable custom terms.
`,
  },

  // 14. API Terms of Use
  {
    key: LEGAL_DOCUMENT_KEYS.API_TERMS,
    slug: 'api-terms',
    title: 'API Terms of Use',
    category: LegalDocumentCategory.ENTERPRISE,
    description: 'Governs developer access, programmatic chatbot interaction, key management, and rate limit obligations.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: true,
    isDownloadable: true,
    metaTitle: 'API Terms of Use | Yedii Developer Portal',
    metaDescription: 'Developer and API terms governing programmatic access, webhook integrations, and rate limits.',
    displayOrder: 14,
    initialVersion: '1.0',
    changeSummary: 'Developer API terms.',
    content: `# API Terms of Use

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

These API Terms of Use govern access to and use of Yedii's REST APIs, webhooks, and developer SDKs.

---

### 1. API Keys & Authentication
Developers must keep API keys strictly confidential. API keys must not be exposed in client-side code repositories.

### 2. Rate Limits
API calls are subject to rate limiting and concurrency restrictions. Deliberately bypassing rate limits is a violation resulting in immediate key revocation.
`,
  },

  // 15. Data Breach Response Policy
  {
    key: LEGAL_DOCUMENT_KEYS.DATA_BREACH_POLICY,
    slug: 'data-breach-policy',
    title: 'Data Breach Response Policy',
    category: LegalDocumentCategory.ENTERPRISE,
    description: 'Standard operating procedures for incident triage, containment, customer notification, and regulatory reporting.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: false,
    isDownloadable: true,
    metaTitle: 'Data Breach Response Policy | Yedii Compliance',
    metaDescription: 'Operating procedures for data security incidents, CERT-In India 6hr timelines, and GDPR 72hr notices.',
    displayOrder: 15,
    initialVersion: '1.0',
    changeSummary: 'Incident response and notification procedure.',
    content: `# Data Breach Response Policy

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

This policy outlines Yedii's protocol for identifying, containing, assessing, and notifying stakeholders of confirmed security incidents.

---

### 1. Incident Severity & Response Timeline
- **Triage & Containment:** Immediate activation of Incident Response Team upon signal detection.
- **Regulatory Reporting:** Within 6 hours to CERT-In (India) where mandated, and within 72 hours under GDPR.
- **Customer Notification:** Written notice sent to designated security contacts without undue delay.
`,
  },

  // 16. Intellectual Property Policy
  {
    key: LEGAL_DOCUMENT_KEYS.INTELLECTUAL_PROPERTY_POLICY,
    slug: 'intellectual-property-policy',
    title: 'Intellectual Property Policy',
    category: LegalDocumentCategory.ENTERPRISE,
    description: 'Covers copyright protection, DMCA takedown procedures, AI output ownership, and trademark guidelines.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: false,
    isDownloadable: true,
    metaTitle: 'Intellectual Property Policy | Yedii',
    metaDescription: 'DMCA notices, copyright infringement procedures, and IP ownership guidelines.',
    displayOrder: 16,
    initialVersion: '1.0',
    changeSummary: 'IP and DMCA policy.',
    content: `# Intellectual Property Policy

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

Yedii respects the intellectual property rights of others and requires its users to do the same.

---

### 1. DMCA Notice & Takedown
If you believe material on Yedii infringes your copyright, send a written notice to our Designated Copyright Agent at \`ip@yedii.com\`.

### 2. AI Generated Output Ownership
Subject to applicable law and foundation model provider terms, Customers retain ownership rights to text and outputs generated through their configured agents.
`,
  },

  // 17. Confidentiality Agreement (NDA)
  {
    key: LEGAL_DOCUMENT_KEYS.CONFIDENTIALITY_AGREEMENT,
    slug: 'confidentiality-agreement',
    title: 'Confidentiality Agreement (NDA)',
    category: LegalDocumentCategory.ENTERPRISE,
    description: 'Mutual non-disclosure agreement protecting proprietary software architecture, benchmark metrics, and roadmap disclosures.',
    jurisdiction: LegalJurisdiction.GLOBAL,
    requiresAcceptance: true,
    isDownloadable: true,
    metaTitle: 'Mutual Confidentiality Agreement (NDA) | Yedii',
    metaDescription: 'Mutual non-disclosure terms for enterprise evaluations, technical audits, and commercial discussions.',
    displayOrder: 17,
    initialVersion: '1.0',
    changeSummary: 'Enterprise mutual NDA.',
    content: `# Confidentiality Agreement (NDA)

**Effective Date:** November 5, 2026  
**Last Updated:** November 5, 2026  
**Version:** 1.0

This Mutual Confidentiality Agreement ("Agreement") protects confidential information disclosed between Yedii Inc. and Customer.

---

### 1. Confidential Information
Confidential Information includes technical architecture, unreleased features, pricing structures, vector algorithms, security audit results, and business strategies.

### 2. Obligations of Non-Disclosure
The Receiving Party shall hold all Confidential Information in strict confidence and use it solely to evaluate or perform the business relationship.
`,
  },
];
