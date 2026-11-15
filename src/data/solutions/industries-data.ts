export interface IndustryData {
  slug: string;
  title: string;
  shortDesc: string;
  badge: string;
  heroTitle: string;
  heroSubtitle: string;
  challenges: {
    title: string;
    desc: string;
  }[];
  capabilities: {
    title: string;
    desc: string;
  }[];
  workflows: {
    title: string;
    customerQuery: string;
    aiResponse: string;
  }[];
  commonInquiries: string[];
  relevantUseCases: {
    title: string;
    slug: string;
  }[];
  outcomes: {
    metric: string;
    label: string;
    desc: string;
  }[];
}

export const INDUSTRIES_LIST: IndustryData[] = [
  {
    slug: "retail-ecommerce",
    title: "Retail & E-commerce",
    shortDesc: "Order management, product inquiries, returns, refunds, and delivery assistance.",
    badge: "By Industry • Retail & E-commerce",
    heroTitle: "Omnichannel customer care for modern digital brands and global retailers",
    heroSubtitle: "Deliver personalized shopping assistance, resolve order tracking questions in seconds, and streamline returns across web and messaging channels with zero seasonal bottlenecks.",
    challenges: [
      { title: "Holiday Peak Volumes", desc: "Holiday campaigns cause massive spikes in order status inquiries that overwhelm manual support teams." },
      { title: "High Cart Abandonment", desc: "Unanswered sizing, ingredient, or compatibility questions lead customers to leave before checkout." },
      { title: "Return Logistics Complexity", desc: "Ambiguous return policies cause friction, dispute chargebacks, and frustrated shoppers." },
    ],
    capabilities: [
      { title: "Real-Time Tracking & WISMO", desc: "Connect carrier APIs to provide automated delivery status, tracking numbers, and arrival estimates." },
      { title: "Product Catalog Search", desc: "Understand conversational search queries and surface exact items matching sizing, color, or budget." },
      { title: "Automated Return Authorization", desc: "Verify return eligibility windows, provide packing slips, and generate exchange links instantly." },
      { title: "Personalized Product Guidance", desc: "Recommend accessories, complementary items, and care instructions based on purchase context." },
    ],
    workflows: [
      {
        title: "Order Tracking & Delivery Status",
        customerQuery: "Can you tell me where order #99283 is? I need it before Friday.",
        aiResponse: "Your order #99283 was dispatched via FedEx Express (tracking #482910) and is currently at the regional distribution center. Estimated delivery is tomorrow, Thursday by 3:00 PM.",
      },
      {
        title: "Returns & Exchanges",
        customerQuery: "The medium jacket is slightly tight. How do I exchange it for a large?",
        aiResponse: "We can help you exchange that jacket for a Large right away! We have reserved the Large in stock. Click here to download your prepaid return label — once scanned at drop-off, the new size will ship immediately.",
      },
    ],
    commonInquiries: [
      "Where is my package and what is the tracking number?",
      "Can I change the delivery address on an existing order?",
      "What is your return policy for international orders?",
      "How do your shoe sizes compare to standard US sizing?",
      "Do you offer student discounts or promotional coupon codes?",
    ],
    relevantUseCases: [
      { title: "E-commerce Support", slug: "ecommerce-support" },
      { title: "Customer Support", slug: "customer-support" },
      { title: "Sales Assistance", slug: "sales-assistance" },
    ],
    outcomes: [
      { metric: "84%", label: "WISMO Deflection", desc: "Automate routine shipping inquiries without human intervention." },
      { metric: "+22%", label: "Repurchase Rate", desc: "Seamless return experiences increase repeat customer loyalty." },
      { metric: "< 30s", label: "Average Handle Time", desc: "Immediate responses across all global time zones." },
    ],
  },
  {
    slug: "saas-technology",
    title: "SaaS & Technology",
    shortDesc: "Product documentation, technical troubleshooting, subscription support, and account assistance.",
    badge: "By Industry • SaaS & Technology",
    heroTitle: "High-precision AI support for software platforms, cloud tools, and developer APIs",
    heroSubtitle: "Empower software users to navigate features, troubleshoot API integrations, manage team workspaces, and resolve billing questions with code-aware accuracy and zero hallucinations.",
    challenges: [
      { title: "Repetitive Setup & Onboarding", desc: "Trial users stall during initial configuration if documentation is hard to navigate." },
      { title: "Developer Integration Roadblocks", desc: "API key, webhook signature, and SDK errors consume valuable senior engineering hours." },
      { title: "Team Permission & SSO Questions", desc: "Enterprise account expansion is hindered by basic questions on RBAC and SAML configurations." },
    ],
    capabilities: [
      { title: "Code & Syntax Aware", desc: "Render formatted curl, JavaScript, Python, and JSON snippets derived from verified documentation." },
      { title: "Multi-Version Docs Indexing", desc: "Ensure answers accurately reflect API versioning, deprecated endpoints, and migration guides." },
      { title: "RBAC & Admin Walkthroughs", desc: "Provide step-by-step clicks for workspace settings, seat assignments, and security audit logs." },
      { title: "Jira & GitHub Defect Escalation", desc: "Format reproducible bug reports with browser logs and stack traces directly into developer backlogs." },
    ],
    workflows: [
      {
        title: "API Webhook Debugging",
        customerQuery: "Our endpoint keeps returning 403 Forbidden when receiving your webhook events.",
        aiResponse: "A 403 Forbidden error on webhooks typically indicates header signature verification failed. Verify that you are computing the HMAC SHA-256 hash using the raw unparsed request body string rather than the parsed JSON object.",
      },
      {
        title: "Workspace Member Permissions",
        customerQuery: "How can I grant a developer permission to configure webhooks without giving them billing access?",
        aiResponse: "You can assign the 'Developer' role. In Settings > Team Members, click 'Edit Role' next to their email and select 'Developer'. This permits API key and webhook management while restricting billing and invoice history to Workspace Owners.",
      },
    ],
    commonInquiries: [
      "How do I rotate our production API secret without downtime?",
      "Can we configure SAML single sign-on with Okta or Azure AD?",
      "What are the rate limits on your batch ingestion endpoints?",
      "How do prorated charges work when adding seats mid-month?",
      "Where can I find sample code for Node.js WebSocket streaming?",
    ],
    relevantUseCases: [
      { title: "Technical Support", slug: "technical-support" },
      { title: "Customer Success", slug: "customer-success" },
      { title: "Billing & Subscription Support", slug: "billing-support" },
    ],
    outcomes: [
      { metric: "68%", label: "Faster API Activation", desc: "Developers resolve configuration hurdles independently." },
      { metric: "-45%", label: "Senior Engineer Ticket Burden", desc: "Core developers stay focused on building platform features." },
      { metric: "99.8%", label: "Answer Grounding", desc: "Strict RAG verification prevents inaccurate technical advice." },
    ],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    shortDesc: "General account inquiries, product information, billing assistance, and guided customer support with appropriate compliance controls.",
    badge: "By Industry • Financial Services",
    heroTitle: "Secure, compliant AI support for FinTechs, wealth managers, and modern banking",
    heroSubtitle: "Deliver high-touch account assistance, explain fee structures, and guide clients through verification steps while adhering to strict Zero Data Retention and regulatory privacy controls.",
    challenges: [
      { title: "High Regulatory Scrutiny", desc: "Financial customer communications require absolute accuracy and zero hallucinations to remain compliant." },
      { title: "Sensitive Data Isolation", desc: "Customer financial records and PII must never be stored in LLM training caches or shared model weights." },
      { title: "Urgent Payment Anxiety", desc: "Customers experiencing transaction delays or balance disputes require instant, reassuring clarity." },
    ],
    capabilities: [
      { title: "Strict PII & Redaction Guardrails", desc: "Automatically detect and redact credit card numbers, SSNs, and passwords before processing." },
      { title: "Zero Data Retention (ZDR)", desc: "Ensure conversations are isolated in tenant-specific vector schemas without model training exposure." },
      { title: "Fee & Statement Transparency", desc: "Explain wire transfer fees, interest calculations, and transaction settlement schedules with clarity." },
      { title: "Compliance Audit Logging", desc: "Maintain full cryptographic execution records and timestamped verification transcripts." },
    ],
    workflows: [
      {
        title: "International Wire Transfer Timelines",
        customerQuery: "I sent a SWIFT transfer to Germany yesterday. When will the funds arrive?",
        aiResponse: "International SWIFT transfers to European SEPA banks typically clear within 1 to 3 business days. If you submitted the transfer after the 4:00 PM EST cutoff, processing began today. You will receive an email confirmation once the intermediary bank acknowledges receipt.",
      },
      {
        title: "Account Verification (KYC) Guidance",
        customerQuery: "Why was my proof of address document rejected during onboarding?",
        aiResponse: "Proof of address documents must be dated within the last 90 days and show your full legal name and address matching your application. Utility bills, bank statements, or municipal notices are accepted. Mobile phone bills and screenshots are not eligible under federal compliance rules.",
      },
    ],
    commonInquiries: [
      "What are the daily ACH withdrawal limits for business accounts?",
      "How do I dispute an unrecognized transaction on my debit card?",
      "Where can I find our year-end tax documentation (1099-INT)?",
      "What security measures protect our account from unauthorized access?",
      "How do I update our registered beneficial ownership information?",
    ],
    relevantUseCases: [
      { title: "Customer Support", slug: "customer-support" },
      { title: "Billing & Subscription Support", slug: "billing-support" },
      { title: "Customer Success", slug: "customer-success" },
    ],
    outcomes: [
      { metric: "100%", label: "PII Shielding", desc: "Automated real-time redaction of sensitive credentials." },
      { metric: "< 2 min", label: "Triage Time", desc: "Clients receive immediate answers to urgent financial questions." },
      { metric: "SOC 2", label: "Type II Verified", desc: "Engineered to satisfy rigorous enterprise security audits." },
    ],
  },
  {
    slug: "travel-hospitality",
    title: "Travel & Hospitality",
    shortDesc: "Booking inquiries, reservation information, cancellations, and guest assistance.",
    badge: "By Industry • Travel & Hospitality",
    heroTitle: "Seamless guest communication from pre-booking discovery to post-checkout",
    heroSubtitle: "Assist travelers with real-time room availability, policy clarification, check-in instructions, and itinerary changes across all languages and time zones.",
    challenges: [
      { title: "Multilingual Guest Demands", desc: "International guests require immediate answers in their native language across diverse time zones." },
      { title: "Last-Minute Schedule Changes", desc: "Weather delays and flight cancellations create sudden surges in urgent rescheduling inquiries." },
      { title: "Repetitive Amenity Questions", desc: "Staff spend hours answering basic questions about parking, breakfast hours, and pet policies." },
    ],
    capabilities: [
      { title: "Native Multi-Language Understanding", desc: "Interact fluently in 95+ languages with automated cultural idiom localization." },
      { title: "Reservation & Cancellation Rules", desc: "Clarify non-refundable vs flexible booking windows and process change requests automatically." },
      { title: "Local Concierge Recommendations", desc: "Share curated recommendations for dining, airport shuttles, and local attractions from hotel guides." },
      { title: "Digital Check-In Guidance", desc: "Provide keyless entry codes, Wi-Fi credentials, and parking directions before guest arrival." },
    ],
    workflows: [
      {
        title: "Late Check-in & Parking Instructions",
        customerQuery: "Our flight lands late. How do we check in at 1:00 AM, and is parking available?",
        aiResponse: "Our front desk is staffed 24/7, so you can check in anytime! Secure underground parking is available on-site at $25/night with electric vehicle charging stations on Level B2. Just present your reservation name upon arrival at the gate.",
      },
      {
        title: "Flexible Cancellation Request",
        customerQuery: "Can we cancel our weekend stay without penalty due to a family emergency?",
        aiResponse: "Under our Flexible Rate policy, cancellations made at least 48 hours prior to check-in (Friday 3:00 PM) receive a 100% full refund. Would you like me to guide you through cancelling this reservation or rescheduling for a future date?",
      },
    ],
    commonInquiries: [
      "What are the check-in and check-out times, and can we request a late checkout?",
      "Are pets allowed in the standard king suites, and what is the fee?",
      "Do you provide an airport shuttle service between Terminal 2 and the property?",
      "Is high-speed Wi-Fi included and is it suitable for video calls?",
      "What breakfast options are provided for guests with dietary restrictions?",
    ],
    relevantUseCases: [
      { title: "Customer Support", slug: "customer-support" },
      { title: "Sales Assistance", slug: "sales-assistance" },
      { title: "Billing & Subscription Support", slug: "billing-support" },
    ],
    outcomes: [
      { metric: "95+", label: "Languages Supported", desc: "Native understanding for international travelers worldwide." },
      { metric: "78%", label: "Guest Inquiry Deflection", desc: "Front desk staff spend less time on routine phone calls." },
      { metric: "4.9/5", label: "Guest Satisfaction", desc: "Immediate answers create welcoming, stress-free hospitality." },
    ],
  },
  {
    slug: "education",
    title: "Education & EdTech",
    shortDesc: "Admissions inquiries, course information, enrollment guidance, and student support.",
    badge: "By Industry • Education & EdTech",
    heroTitle: "Empower students, faculty, and prospective applicants with 24/7 academic guidance",
    heroSubtitle: "Automate admissions triage, guide students through course registration milestones, clarify financial aid paperwork, and deliver instant campus navigation assistance.",
    challenges: [
      { title: "Admissions Deadline Surges", desc: "Prospective applicants inundate admissions teams with repetitive prerequisite questions." },
      { title: "Complex Financial Aid Steps", desc: "Students get confused by FAFSA forms, scholarship criteria, and tuition payment dates." },
      { title: "Dispersed Academic Information", desc: "Syllabi, course schedules, and library resources scattered across complex university portals." },
    ],
    capabilities: [
      { title: "Admissions Pre-Screening", desc: "Walk applicants through GPA cutoffs, standardized testing guidelines, and submission checklists." },
      { title: "Curriculum & Course Discovery", desc: "Help students match academic interests with upcoming semester electives and degree tracks." },
      { title: "Financial Aid Step Guidance", desc: "Provide clear explanations of tuition schedules, payment plans, and scholarship deadlines." },
      { title: "Student Portal Troubleshooting", desc: "Assist students with password resets, LMS access, and student ID card issuing procedures." },
    ],
    workflows: [
      {
        title: "Admissions Prerequisite Inquiries",
        customerQuery: "Do I need to submit GRE scores for the Master in Data Science program this fall?",
        aiResponse: "For the Fall 2026 intake, GRE scores are optional for applicants with an accredited undergraduate STEM degree with a GPA of 3.2 or above. If your GPA is below 3.2, submitting quantitative scores is recommended to strengthen your application.",
      },
      {
        title: "Tuition Payment Plan Enrollment",
        customerQuery: "How do I split my semester tuition into monthly payments?",
        aiResponse: "You can enroll in the 4-Month Deferred Tuition Plan via the Student Accounts Portal. In the portal, navigate to 'Billing & Payments' and select 'Enroll in Payment Plan' before the September 1st tuition deadline.",
      },
    ],
    commonInquiries: [
      "When is the priority application deadline for international students?",
      "How do I transfer credit units earned from a community college?",
      "Where can I find the academic calendar for semester break dates?",
      "How do I schedule an advising appointment with my faculty advisor?",
      "What software and hardware requirements are needed for online courses?",
    ],
    relevantUseCases: [
      { title: "Customer Success", slug: "customer-success" },
      { title: "Customer Support", slug: "customer-support" },
      { title: "Sales Assistance", slug: "sales-assistance" },
    ],
    outcomes: [
      { metric: "3.5x", label: "Faster Application Completion", desc: "Prospective students get answers before deadline drop-offs." },
      { metric: "72%", label: "Admissions Deflection", desc: "Staff focus on personalized applicant interviews." },
      { metric: "24/7", label: "Student Coverage", desc: "Help available during late-night study sessions." },
    ],
  },
  {
    slug: "logistics",
    title: "Logistics & Supply Chain",
    shortDesc: "Shipment tracking, delivery updates, operational inquiries, and logistics assistance.",
    badge: "By Industry • Logistics & Supply Chain",
    heroTitle: "Intelligent freight, delivery, and supply chain tracking for modern logistics",
    heroSubtitle: "Deliver automated cargo tracking, clarify customs documentation requirements, resolve dispatch delays, and streamline warehouse carrier coordination around the clock.",
    challenges: [
      { title: "High-Urgency Freight Delays", desc: "Shippers and consignees demand instant location and temperature logs for time-critical cargo." },
      { title: "Customs & Compliance Paperwork", desc: "Missing bills of lading, harmonized tariff codes, or declarations cause border clearance bottlenecks." },
      { title: "Fragmented Carrier Communications", desc: "Brokers and dispatchers juggle hundreds of daily status phone calls and emails." },
    ],
    capabilities: [
      { title: "Multi-Modal Freight Tracking", desc: "Provide real-time updates across ocean container, air cargo, and intermodal trucking stages." },
      { title: "Documentation Verification", desc: "Guide shippers through Commercial Invoice, Certificate of Origin, and Hazardous Materials filings." },
      { title: "Dispatch & Detention Alerting", desc: "Explain demurrage schedules, driver check-in protocols, and loading dock appointment slots." },
      { title: "Exception Management", desc: "Classify weather disruptions vs port congestion and recommend rerouting alternatives." },
    ],
    workflows: [
      {
        title: "Container Customs Clearance Tracking",
        customerQuery: "What is the status of container MSCU829104 at the Port of Long Beach?",
        aiResponse: "Container MSCU829104 completed US Customs clearance at 08:30 AM today. It is currently staged in Yard Block 4 at the Pier T terminal. The driver gate pass is valid for pickup until 5:00 PM tomorrow without demurrage charges.",
      },
      {
        title: "Hazardous Material Shipping Requirements",
        customerQuery: "What paperwork is required to ship lithium-ion batteries by air freight?",
        aiResponse: "Lithium-ion battery air shipments require an approved Dangerous Goods Declaration (DGD), UN3480 classification markings, and compliance with IATA Section IA packing instructions with charge state below 30%.",
      },
    ],
    commonInquiries: [
      "Where is our bill of lading (BOL) and when was it signed?",
      "What are the free-time allowances before demurrage begins at the terminal?",
      "How do we file a freight claim for damaged pallets upon delivery?",
      "Can we schedule a dedicated liftgate delivery for a non-dock facility?",
      "What is the fuel surcharge percentage for current regional ground freight?",
    ],
    relevantUseCases: [
      { title: "E-commerce Support", slug: "ecommerce-support" },
      { title: "Customer Support", slug: "customer-support" },
      { title: "Technical Support", slug: "technical-support" },
    ],
    outcomes: [
      { metric: "86%", label: "Check-Call Deflection", desc: "Shippers self-serve tracking without calling dispatchers." },
      { metric: "-50%", label: "Customs Delay Time", desc: "Accurate documentation guidance avoids port holds." },
      { metric: "24/7", label: "Fleet Availability", desc: "Instant carrier coordination across all transit hubs." },
    ],
  },
];
