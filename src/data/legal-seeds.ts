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
  effectiveDate?: string;
  lastUpdatedDate?: string;
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
    initialVersion: '1.1',
    changeSummary: 'Updated Terms of Service covering AI Agent operations, third-party foundation models, knowledge ingestion, subscriptions, and dispute resolution.',
    effectiveDate: 'November 5, 2026',
    lastUpdatedDate: 'November 16, 2026',
    content: `# Terms of Service

**Effective Date:** November 5, 2026  
**Last Updated:** November 16, 2026  
**Version:** 1.1

> *Draft for legal review. This document is a working template, not legal advice. Before publication, replace every bracketed placeholder, verify that the provisions match Yedii's actual product and vendor arrangements, and obtain review from qualified counsel in the jurisdictions where Yedii operates and sells its services.*

PLEASE READ THESE TERMS OF SERVICE ("Terms") CAREFULLY BEFORE ACCESSING OR USING THE YEDII PLATFORM. BY CREATING AN ACCOUNT, ACCESSING OUR WEBSITES OR APIS, CONNECTING AN INTEGRATION, OR DEPLOYING AN AI AGENT THROUGH YEDII, YOU AGREE TO THESE TERMS.

---

## 1. Introduction and Agreement
These Terms form a legally binding agreement between you ("Customer," "you," or "your") and Yedii Inc., doing business as Yedii ("Yedii," "we," "us," or "our").

Yedii provides a software-as-a-service platform for configuring and deploying AI-powered customer-support agents, managing workspaces, connecting knowledge sources, crawling and processing website content, retrieving information using retrieval-augmented generation (RAG), and integrating with supported third-party services (the "Services").

If you accept these Terms on behalf of a company or other organization, you represent that you have authority to bind that organization. If you do not have that authority, or do not agree to these Terms, you must not access or use the Services.

These Terms incorporate the policies and documents referenced below, as applicable:
- [Privacy Policy](/legal/privacy-policy)
- [Data Processing Agreement (DPA)](/legal/data-processing-agreement)
- [Acceptable Use Policy](/legal/acceptable-use-policy)
- [Cookie Policy](/legal/cookie-policy)
- [Data Retention and Deletion Policy](/legal/data-retention-policy)
- Any applicable order form, enterprise agreement, or service-level agreement signed by the parties.

If an executed order form or enterprise agreement conflicts with these Terms, that document controls only to the extent of the conflict and only for the Services covered by it. A DPA governs the parties' processing of personal data to the extent it applies.

## 2. Definitions
For purposes of these Terms:
- **Account** means the registered account used to access the Services.
- **AI Agent** means an AI-powered assistant configured or deployed through Yedii.
- **Customer Data** means data, content, documents, prompts, instructions, files, website content, conversation records, and other materials submitted to or generated for the Customer through its use of the Services, excluding Yedii Materials and Usage Data.
- **End User** means an individual who interacts with a Customer's deployed AI Agent or other customer-facing integration.
- **Workspace** means a logical environment in the Services used to organize agents, users, settings, knowledge sources, and related data.
- **Yedii Materials** means the Services and their software, interfaces, designs, documentation, APIs, models or systems developed by Yedii, and all related intellectual property, excluding Customer Data.
- **Usage Data** means technical, diagnostic, and usage information about how the Services are accessed and used, which does not identify an individual except where permitted by applicable law and the Privacy Policy.

## 3. Eligibility and Account Registration
You must be at least 18 years old or the age of legal majority in your jurisdiction, whichever is higher, to create an Account.

You agree to:
1. Provide accurate, complete, and current registration and billing information.
2. Keep your Account information up to date.
3. Protect your passwords, API keys, access tokens, and other credentials.
4. Restrict access to authorized users and use appropriate access controls.
5. Notify Yedii promptly at \`security@yedii.com\` if you suspect unauthorized access, credential compromise, or a security incident involving your Account.
6. Ensure that each person using your Account is authorized to do so.

You are responsible for activity conducted through your Account and Workspaces, except to the extent caused by Yedii's breach of these Terms or applicable law. You must not share credentials in a way that circumvents plan or user limits.

Yedii may require identity, business, or payment verification where reasonably necessary for security, fraud prevention, legal compliance, or payment-provider requirements.

## 4. Workspaces, Users, and Account Administration
The Services may allow you to create or manage Workspaces, invite users, assign roles, and configure AI Agents.

You are responsible for:
- Selecting appropriate Workspace administrators and permissions.
- Reviewing access when a user joins, changes roles, or leaves your organization.
- Ensuring that your users comply with these Terms.
- Maintaining appropriate copies of Customer Data and configuration information.
- Managing the publication and availability of AI Agents connected to your websites, applications, or channels.

Workspace owners and administrators may be able to access, modify, export, or delete Workspace data. You should not grant administrative access to people who do not need it.

## 5. Platform Services and Service Scope
Subject to these Terms, your subscription, and payment of applicable fees, Yedii grants you a limited, non-exclusive, non-transferable, revocable right during the subscription term to access and use the Services for your internal business operations and customer-support use cases.

The Services may include:
- AI Agent creation, configuration, testing, and deployment.
- Knowledge-source connections and document ingestion.
- Website crawling, sitemap processing, content extraction, chunking, embedding, indexing, and retrieval.
- Conversation and message management.
- APIs, hosted chat experiences, website widgets, and supported integrations.
- Usage analytics, administrative tools, and workspace management.

Features may vary by plan, region, release stage, or applicable order form. Yedii may update, improve, or modify the Services, provided that it does not materially reduce a paid feature during a committed term except where reasonably necessary for security, legal compliance, or circumstances outside Yedii's reasonable control.

Yedii does not promise that every feature will be available in every region or on every plan.

## 6. Acceptable Use and Restrictions
You must use the Services lawfully and in accordance with these Terms and the [Acceptable Use Policy](/legal/acceptable-use-policy).

You must not, and must not permit another person to:
1. Reverse engineer, decompile, disassemble, or attempt to derive source code, underlying models, or non-public components of the Services, except where applicable law does not permit this restriction.
2. Copy, resell, sublicense, lease, or commercially exploit the Services except as expressly permitted by Yedii.
3. Circumvent usage quotas, rate limits, credit limits, authentication controls, or subscription restrictions.
4. Access or attempt to access another customer's Account, Workspace, data, or systems without authorization.
5. Probe, scan, test, or interfere with the security or integrity of the Services without Yedii's prior written authorization.
6. Upload or transmit malware, malicious code, or content designed to disrupt systems.
7. Use the Services for fraud, phishing, impersonation, spam, harassment, unlawful surveillance, or other unlawful or deceptive activity.
8. Use the Services to infringe intellectual property, privacy, publicity, or other rights.
9. Use the Services to develop or provide a competing service by misusing Yedii's confidential information or non-public materials.
10. Use the Services in violation of export controls, sanctions, or other applicable laws.
11. Use AI Agents to make decisions in high-impact or regulated contexts without appropriate human review, safeguards, and legal authorization.
12. Use the Services in a manner that creates unreasonable risk, excessive load, or harm to Yedii, other customers, End Users, or third parties.

Yedii may investigate suspected violations and may restrict, suspend, or terminate access in accordance with Section 19.

## 7. AI Agents, Automated Responses, and AI Output
### 7.1 Probabilistic Nature of AI
AI Agents use machine-learning systems and may rely on third-party foundation-model providers. AI-generated outputs are probabilistic and may be inaccurate, incomplete, outdated, misleading, or inappropriate, even when an Agent uses Customer Data or retrieval-augmented generation.

Yedii does not warrant that an AI Agent will always provide correct, complete, safe, or suitable responses, or that it will achieve a particular business outcome.

### 7.2 Customer Configuration and Oversight
You are responsible for:
- Configuring Agent instructions, prompts, tone, tools, permissions, and guardrails.
- Selecting and maintaining appropriate knowledge sources.
- Testing Agents before deployment and monitoring them after deployment.
- Establishing human review and escalation processes appropriate to your use case.
- Reviewing high-impact, sensitive, or consequential outputs before relying on them.
- Ensuring that disclosures about AI interaction are provided where required by law.

You must not represent an AI Agent as a human when doing so would be misleading or unlawful.

### 7.3 High-Risk and Professional Advice
Unless expressly agreed in a separate written agreement and legally permitted, the Services are not designed to provide medical, legal, financial, emergency, or other regulated professional advice. You must not rely on AI outputs as a substitute for qualified professional judgment.

You are responsible for determining whether your intended use is subject to laws governing automated decision-making, consumer protection, employment, healthcare, financial services, or other regulated activities.

### 7.4 Model and Provider Changes
Yedii may change, replace, or discontinue a model or AI provider where reasonably necessary for performance, security, cost, availability, or compliance. Such changes may affect response quality, latency, or behavior.

## 8. Customer Data and Intellectual Property
### 8.1 Customer Ownership
As between you and Yedii, you retain your rights in Customer Data. You are responsible for Customer Data and represent that you have all rights, permissions, consents, and lawful bases necessary to submit it to Yedii and authorize the processing described in these Terms.

### 8.2 License to Provide the Services
You grant Yedii and its service providers a worldwide, non-exclusive, limited license to host, store, reproduce, transmit, display, process, extract, normalize, chunk, vectorize, index, retrieve, and otherwise use Customer Data only as reasonably necessary to:
- Provide, maintain, secure, and support the Services.
- Operate AI Agents and fulfill your instructions.
- Prevent abuse, troubleshoot issues, and enforce these Terms.
- Comply with applicable law and legal process.

This license continues for as long as needed to provide the Services and handle permitted backups, legal obligations, disputes, and security records, subject to the applicable DPA and Data Retention and Deletion Policy.

Yedii will not use Customer Data to train general-purpose models for unrelated customers unless you separately authorize that use or the parties agree otherwise in writing.

### 8.3 Yedii Ownership
Yedii and its licensors retain all rights, title, and interest in Yedii Materials, including software, source code, interfaces, designs, documentation, APIs, trademarks, logos, and proprietary technology. No rights are granted except those expressly stated in these Terms.

### 8.4 Feedback
If you provide suggestions, ideas, or feedback about the Services, Yedii may use them without restriction or compensation, provided that this does not grant Yedii ownership of your Customer Data or confidential information.

## 9. Website Crawling and Knowledge Ingestion
The Services may allow you to submit websites, domains, URLs, sitemaps, documents, or other knowledge sources for ingestion and retrieval.

You represent and warrant that:
1. You own, control, or have permission to submit and process each website, domain, URL, document, and other source.
2. Your submission and use of content comply with applicable copyright, database, privacy, contract, and other laws.
3. You will respect applicable website terms, access restrictions, robots.txt directives, and technical restrictions.
4. You will not use crawling or ingestion to access protected, private, or restricted content without authorization.

Yedii may apply crawling limits, request limits, concurrency controls, timeouts, retries, and rate limits to protect the Services and third-party systems. Yedii may pause or reject a crawling job that appears unauthorized, harmful, abusive, or technically unsafe.

Website content may change, become unavailable, block automated access, or fail to extract correctly. Yedii does not guarantee that all submitted pages or content will be discovered, fetched, parsed, or indexed successfully.

You are responsible for reviewing ingested content and ensuring that it is suitable for use by your AI Agents. Yedii may remove or disable a source where reasonably necessary to address a legal, security, or operational concern.

## 10. Third-Party Services, AI Providers, and Integrations
The Services may interoperate with third-party products and services, including AI model providers, payment processors, cloud infrastructure, vector databases, crawling tools, authentication providers, and customer integrations.

Examples may include OpenAI, Anthropic, Google, DeepSeek, Paddle, Qdrant, cloud-hosting providers, Crawl4AI-related infrastructure, GitHub, Cloudflare, Shopify, and other providers or integrations made available from time to time.

Third-party services are governed by their own terms, privacy policies, availability, and technical requirements. Your use of them may require a separate account or agreement.

Where necessary to provide the Services, Customer Data or prompts may be transmitted to third-party providers for processing on your behalf. The applicable provider, processing purpose, data categories, and safeguards should be described in Yedii's Privacy Policy, DPA, or subprocessor information.

Yedii is not responsible for independent third-party services, but this does not exclude responsibility that cannot lawfully be excluded or responsibility for Yedii's own obligations under these Terms or an applicable DPA.

You authorize Yedii to connect to third-party services that you choose to enable and to process data as needed to perform the integration you request.

## 11. End Users, Privacy, and Customer Responsibilities
If you deploy an AI Agent or widget for End Users, you are responsible for your relationship with those End Users and for the content, notices, and services you provide to them.

You must:
- Provide privacy notices and other disclosures required by applicable law.
- Obtain consent or establish another lawful basis for collecting and processing personal data.
- Disclose AI interaction where required.
- Ensure that your use of conversation data is lawful and consistent with your privacy notices.
- Avoid collecting unnecessary sensitive or special-category personal data.
- Establish appropriate retention, access, and deletion practices for End User information.
- Respond to End User requests and complaints where you are legally responsible for doing so.
- Configure suitable human escalation and safeguards for sensitive or high-risk interactions.

Yedii's processing of personal data on your behalf is governed by the [Data Processing Agreement (DPA)](/legal/data-processing-agreement) where applicable. Yedii's handling of account, website, and other personal information for its own purposes is described in the [Privacy Policy](/legal/privacy-policy).

## 12. API Access and Integrations
If Yedii provides API keys, endpoints, SDKs, webhooks, widgets, or other developer tools, you must keep credentials confidential and use them only for authorized purposes.

You are responsible for:
1. Securing API keys and rotating or revoking compromised credentials.
2. Implementing reasonable authentication, authorization, and rate-limit handling in your applications.
3. Ensuring that your integrations comply with these Terms and applicable documentation.
4. Preventing unauthorized use of your API credentials.
5. Maintaining compatibility with supported API versions.

Yedii may introduce, modify, deprecate, or discontinue APIs and integrations. Where reasonably practicable, Yedii will provide advance notice of material changes that may require customer action. Emergency changes may be made without advance notice to address security, legal, or service-integrity risks.

## 13. Subscriptions, Billing, and Payments
### 13.1 Plans and Fees
Certain Services require a paid subscription. Plan features, prices, billing intervals, limits, and applicable taxes are presented at checkout or in an applicable order form.

You agree to pay all fees associated with your subscription. Unless otherwise stated, subscriptions are billed in advance on a recurring monthly or annual basis.

### 13.2 Merchant of Record
Yedii currently uses Paddle as its Merchant of Record for applicable transactions. Paddle's relevant legal entity and role, payment terms, and customer-facing checkout disclosures will apply to those transactions. Paddle may calculate, collect, and remit applicable transaction taxes as required.

### 13.3 Automatic Renewal and Cancellation
Unless the checkout or order form states otherwise, subscriptions automatically renew for successive billing periods until cancelled.

You may cancel through the available account billing controls or by contacting \`billing@yedii.com\`. Cancellation will generally take effect at the end of the current paid billing period unless applicable law or an order form requires otherwise. You remain responsible for fees incurred before cancellation takes effect.

### 13.4 Failed Payments
If a payment fails or remains unpaid, Yedii or its payment provider may retry the payment and notify you. If payment remains overdue, Yedii may restrict or suspend paid features after reasonable notice, subject to applicable law and the payment provider's processes.

### 13.5 Taxes
Fees may exclude taxes unless expressly stated otherwise. Applicable taxes may be calculated and collected by the Merchant of Record or as otherwise required by law. You are responsible for taxes imposed on your purchase that Yedii or its payment provider is not legally required to collect.

### 13.6 Refunds
Refunds are handled in accordance with applicable law, the checkout terms, the Merchant of Record's applicable policies, and any written agreement between you and Yedii. Nothing in these Terms limits a refund or cancellation right that cannot lawfully be excluded.

### 13.7 Payment Disputes
If you believe a charge is incorrect, contact \`billing@yedii.com\` promptly and provide relevant transaction details. This does not limit any statutory rights or payment-dispute rights available to you.

## 14. Credits, Quotas, and Fair Usage
Your plan may include limits on AI response credits, agents, workspaces, users, invitations, pages, storage, API requests, crawling, or other resources.

The plan description and in-product usage information identify the applicable limits. Unless expressly stated in an order form:
- Credits and quotas are for the applicable Account and billing period and are not transferable.
- Unused recurring credits do not roll over.
- Credits reset according to the plan's billing cycle or the schedule displayed in the Services.
- Usage above plan limits may be blocked, require an upgrade, or incur additional charges only where those charges have been clearly disclosed and accepted.
- Yedii may apply reasonable technical limits to protect platform stability and prevent abuse.

The definition of a billable AI response, treatment of failed requests, and any credit deductions should be explained in the applicable pricing or usage documentation. Do not rely on this section as a substitute for a clear in-product credit calculation.

Yedii may modify plan limits for future billing periods after providing notice where required by law or the applicable order form.

## 15. Data Retention, Export, and Deletion
Yedii retains Customer Data in accordance with the [Privacy Policy](/legal/privacy-policy), applicable [Data Processing Agreement (DPA)](/legal/data-processing-agreement), [Data Retention and Deletion Policy](/legal/data-retention-policy), and any order form.

The retention period may depend on the data type, subscription plan, customer configuration, legal obligations, and technical requirements. The currently intended conversation-retention schedule is:

| Plan | Intended Conversation Retention |
|---|---|
| Free | 30 days |
| Starter | 60 days |
| Growth | 90 days |
| Pro | 120 days |
| Enterprise | 150 days, unless an order form specifies otherwise |

This schedule must be verified against the production implementation and the published plan descriptions before it is made binding.

You may be able to delete agents, Workspaces, knowledge sources, conversations, or other Customer Data through the Services. Deletion may take time to propagate to active systems, caches, backups, and subprocessors. Copies may be retained for a limited period where necessary for backup integrity, security, fraud prevention, legal compliance, or dispute resolution.

You are responsible for exporting any data you need before terminating your Account or Workspace. Yedii does not guarantee that deleted data can be recovered.

Where the DPA applies, its deletion and return provisions control to the extent of any conflict.

## 16. Confidentiality and Security
Each party may receive non-public information from the other party that is identified as confidential or that reasonably should be understood to be confidential ("Confidential Information").

The receiving party will:
1. Use Confidential Information only to perform or exercise rights under the agreement.
2. Protect it using reasonable care and no less than the care it uses for its own similar information.
3. Disclose it only to personnel, professional advisers, and service providers who need to know it and are subject to confidentiality obligations.
4. Notify the disclosing party of unauthorized use or disclosure where legally permitted and reasonably practicable.

Confidential Information does not include information that the receiving party can demonstrate is public without breach, already lawfully known, independently developed, or lawfully received from another source without confidentiality restrictions.

Yedii maintains technical and organizational security measures designed to protect the Services and Customer Data. No system can be guaranteed completely secure. Security commitments, incident-notification obligations, and processing safeguards are further described in the DPA and applicable security documentation.

## 17. Service Availability and Maintenance
Yedii will use commercially reasonable efforts to make the Services available, but does not guarantee uninterrupted or error-free operation unless an executed SLA expressly provides otherwise.

Availability may be affected by scheduled maintenance, emergency maintenance, internet or telecommunications failures, third-party provider outages, cyberattacks, force majeure events, or other circumstances outside Yedii's reasonable control.

Yedii may temporarily suspend access to all or part of the Services to perform maintenance, address security risks, comply with law, or protect the Services and other customers. Where reasonably practicable, Yedii will provide advance notice of planned maintenance likely to materially affect availability.

Enterprise availability, support, response-time, and service-credit commitments must be set out in a separate signed SLA or order form.

## 18. Beta and Experimental Features
Yedii may make beta, preview, experimental, or early-access features available. These features may be incomplete, change without notice, or be discontinued.

Unless a separate written agreement states otherwise, beta features are provided "as is," may not be covered by service commitments, and should not be used for production-critical or regulated workflows without appropriate testing and safeguards.

## 19. Suspension and Termination
### 19.1 Suspension
Yedii may suspend or restrict access to an Account, Workspace, AI Agent, API, or feature if Yedii reasonably believes:
- You have materially breached these Terms or an incorporated policy.
- Your use presents a security, legal, fraud, or operational risk.
- Your payment is overdue.
- Your use may harm another customer, End User, third party, or the Services.
- Suspension is required by law, court order, or a third-party provider.

Where reasonably practicable and legally permitted, Yedii will provide notice and an opportunity to address the issue before suspension. Yedii may act immediately where necessary to prevent harm, comply with law, or protect security.

### 19.2 Termination by Either Party
Either party may terminate an affected subscription or these Terms for material breach if the other party fails to cure the breach within 30 days after receiving written notice describing it. For breaches that cannot reasonably be cured, termination may be immediate.

You may terminate your Account or subscription in accordance with the cancellation process in Section 13 and any applicable order form.

Yedii may terminate the Services or these Terms where required by law, where it discontinues the Services, or where continued provision becomes commercially or technically impracticable. Where reasonably practicable, Yedii will provide advance notice and any refund required by applicable law or an applicable order form.

### 19.3 Effect of Termination
Upon termination:
- Your right to access and use the terminated Services ends.
- You must stop using Yedii Materials and any credentials that are no longer authorized.
- Outstanding fees become due as provided in the applicable billing terms.
- Customer Data will be made available for export or deleted in accordance with the DPA and Data Retention and Deletion Policy, subject to lawful retention and backup processes.

Sections that by their nature should survive termination will survive, including provisions concerning fees owed, intellectual property, confidentiality, disclaimers, limitation of liability, indemnification, dispute resolution, and other accrued rights.

## 20. Indemnification
To the extent permitted by applicable law, you will defend, indemnify, and hold harmless Yedii and its officers, directors, employees, and affiliates from third-party claims, losses, liabilities, damages, and reasonable costs (including legal fees) arising from:
1. Customer Data or materials you submit, except to the extent the claim results from Yedii's unlawful use of them.
2. Your unlawful use of the Services or violation of these Terms.
3. Your infringement or alleged infringement of a third party's rights.
4. Your products, services, websites, or relationship with End Users.
5. Your failure to obtain required rights, notices, or consents.

Yedii will provide reasonable notice of the claim and cooperation at your expense. You may not settle a claim in a way that imposes liability or an admission on Yedii without Yedii's prior written consent.

Any indemnification obligation of Yedii must be expressly stated in a separate written agreement or order form.

## 21. Disclaimer of Warranties
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICES AND YEDII MATERIALS ARE PROVIDED "AS IS" AND "AS AVAILABLE." YEDII DISCLAIMS ALL WARRANTIES THAT MAY LAWFULLY BE DISCLAIMED, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.

YEDII DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, COMPLETELY SECURE, OR COMPATIBLE WITH EVERY SYSTEM; THAT CRAWLING OR INGESTION WILL CAPTURE EVERY PAGE OR DOCUMENT; OR THAT AI OUTPUTS WILL BE ACCURATE, COMPLETE, OR SUITABLE FOR YOUR PURPOSE.

NOTHING IN THESE TERMS EXCLUDES A WARRANTY OR RIGHT THAT CANNOT LAWFULLY BE EXCLUDED.

## 22. Limitation of Liability
TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
1. NEITHER PARTY WILL BE LIABLE TO THE OTHER FOR INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES, OR FOR LOSS OF PROFITS, REVENUE, GOODWILL, BUSINESS OPPORTUNITY, OR DATA, ARISING OUT OF OR RELATED TO THESE TERMS, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
2. EACH PARTY'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS WILL NOT EXCEED THE GREATER OF (A) USD $100 OR (B) THE FEES PAID OR PAYABLE BY YOU TO YEDII FOR THE SERVICES GIVING RISE TO THE CLAIM DURING THE 12 MONTHS BEFORE THE EVENT FIRST GIVING RISE TO LIABILITY.

The limitations above do not apply to liability that cannot be limited under applicable law.

## 23. Governing Law and Dispute Resolution
These Terms and any non-contractual obligations arising out of or in connection with them will be governed by the laws of the State of Delaware (or applicable local laws where mandatory), without regard to conflict-of-law principles, subject to mandatory consumer-protection and other laws that cannot lawfully be excluded.

Any dispute arising out of or relating to these Terms will be resolved by binding arbitration under the rules of the American Arbitration Association (AAA) or the Mumbai Centre for International Arbitration (MCIA), or in the competent courts having jurisdiction.

## 24. Changes to These Terms
Yedii may update these Terms from time to time. The "Last Updated" date indicates when the latest version was published.

For material changes, Yedii will provide reasonable notice through the Services, by email, or by another appropriate method where required by law. Changes will take effect on the date stated in the notice. If you do not agree to a material change, you must stop using the affected Services and may cancel your subscription in accordance with these Terms and applicable law.

Continued use after the effective date of updated Terms constitutes acceptance where such acceptance is legally effective. Where affirmative consent is required, Yedii will request it.

## 25. General Provisions
### 25.1 Entire Agreement
These Terms, together with incorporated policies, applicable order forms, and any signed DPA or SLA, form the entire agreement between the parties concerning their subject matter and supersede prior agreements on that subject.

### 25.2 Severability
If a provision is held invalid or unenforceable, it will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will remain in effect.

### 25.3 No Waiver
A failure or delay in enforcing a provision is not a waiver of that provision or any other right.

### 25.4 Assignment
You may not assign or transfer these Terms or any rights or obligations under them without Yedii's prior written consent, except as permitted by applicable law. Yedii may assign these Terms to an affiliate or in connection with a merger, reorganization, or sale of substantially all relevant assets, subject to applicable law.

### 25.5 Independent Contractors
The parties are independent contractors. These Terms do not create a partnership, joint venture, agency, employment, or franchise relationship.

### 25.6 Force Majeure
Neither party will be liable for delay or failure to perform caused by events beyond its reasonable control, including natural disasters, war, terrorism, civil unrest, labor disputes, government action, widespread internet or telecommunications failures, power outages, and failures of third-party infrastructure, provided the affected party takes reasonable steps to mitigate the effects.

### 25.7 Notices
Legal notices to Yedii must be sent to:

**Yedii Legal Department**  
Legal Entity: Yedii Inc.  
Address: 100 Enterprise Way, Suite 400, Wilmington, DE 19801 / Bangalore, Karnataka, India  
Legal Notices Email: \`legal@yedii.com\`  

Notices to you may be sent to the email address associated with your Account or through the Services. You are responsible for keeping your contact details current.

### 25.8 No Third-Party Beneficiaries
Except for the indemnified persons expressly identified in these Terms, these Terms do not create rights for third-party beneficiaries.

## 26. Contact Information
For questions about these Terms, contact:

**Yedii**  
Legal Entity: Yedii Inc.  
Website: https://yedii.com  
Legal Inquiries: \`legal@yedii.com\`  
Support: \`support@yedii.com\`  
Business Address: 100 Enterprise Way, Suite 400, Wilmington, DE 19801 / Bangalore, Karnataka, India
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
