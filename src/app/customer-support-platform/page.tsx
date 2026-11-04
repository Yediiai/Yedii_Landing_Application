import type { Metadata } from "next";
import {
  Bot,
  ShieldCheck,
  Zap,
  Globe2,
  Workflow,
  MessageSquareText,
} from "lucide-react";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";
import { DedicatedPageTemplate } from "@/components/templates/DedicatedPageTemplate";

export const metadata: Metadata = {
  title: "Customer Support Platform | Autonomous Support Automation",
  description:
    "Deploy autonomous AI customer support agents that resolve 75% of tier-1 inquiries, eliminate hallucinations, and unify multi-channel support.",
  alternates: { canonical: `${SITE_URL}/customer-support-platform` },
  openGraph: {
    title: "Customer Support Platform | Yedii",
    description:
      "Enterprise autonomous customer support platform with multi-channel deployment and zero-hallucination grounding.",
    url: `${SITE_URL}/customer-support-platform`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Customer Support Platform" }],
  },
};

export default function CustomerSupportPlatformPage() {
  return (
    <DedicatedPageTemplate
      badge={{
        icon: Bot,
        text: "Autonomous Support Platform • Enterprise RAG",
      }}
      hero={{
        title: "Autonomous customer support grounded on your company data",
        subtitle:
          "Resolve up to 75% of tier-1 inquiries instantly without human intervention. Yedii synthesizes verified knowledge across PDFs, Notion, and databases to deliver accurate customer answers.",
        primaryCta: { text: "Deploy Support Agent", href: "https://app.yedii.com/signup" },
        secondaryCta: { text: "See Pricing Plans", href: "/pricing" },
      }}
      mockPreview={
        <div className="bg-[#141C2E] rounded-[14px] p-6 text-white font-mono text-xs space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-zinc-300 font-semibold">Active Agent: SupportTier1_v2.4</span>
            </div>
            <span className="text-zinc-400">Response Latency: 180ms</span>
          </div>
          <div className="space-y-3">
            <div className="p-3 rounded-[8px] bg-white/5 border border-white/10">
              <span className="text-zinc-400 block mb-1">Customer Inquiry (Web Widget):</span>
              <p className="text-zinc-100 font-sans text-sm">&quot;How do I configure Single Sign-On (SSO) with Okta in my workspace?&quot;</p>
            </div>
            <div className="p-3 rounded-[8px] bg-emerald-950/40 border border-emerald-500/30">
              <span className="text-emerald-400 font-semibold block mb-1">Yedii Verified Resolution [Grounding: docs/security/sso.pdf#p12]:</span>
              <p className="text-emerald-100 font-sans text-sm">
                &quot;To configure Okta SAML 2.0: 1) Go to Workspace Settings &gt; Authentication, 2) Enable SAML 2.0, 3) Copy the ACS URL into your Okta app, and 4) Paste the Okta IdP Metadata XML. Your team will instantly be routed through Okta SCIM.&quot;
              </p>
            </div>
          </div>
        </div>
      }
      problemSolution={{
        title: "Stop trading CSAT for support operational scale",
        subtitle:
          "Traditional chatbots frustrate users with canned scripts, while human teams drown under repetitive tier-1 tickets.",
        items: [
          {
            problem: "Legacy chatbots rely on rigid decision trees that fail when users ask conversational questions.",
            solution: "Yedii utilizes semantic vector retrieval and frontier LLMs to understand complex natural language intent.",
            benefit: "75% Ticket Deflection",
          },
          {
            problem: "Generic AI assistants hallucinate policies, invent return terms, and compromise brand credibility.",
            solution: "Strict RAG guardrails limit agent knowledge strictly to approved internal handbooks and documents.",
            benefit: "0 Hallucinations",
          },
          {
            problem: "Siloed support channels mean customers repeat their problem when switching from web chat to WhatsApp.",
            solution: "Single shared thread state synchronizes customer memory across web widget, email, and WhatsApp.",
            benefit: "Unified Omni-Channel",
          },
        ],
      }}
      features={{
        title: "Engineered for high-volume enterprise customer operations",
        subtitle:
          "Everything required to deploy, monitor, and scale automated support across global teams.",
        items: [
          {
            icon: Bot,
            title: "Autonomous Deflection Engine",
            desc: "Resolves everyday account, billing, and technical questions instantly with cited documentation links.",
            value: "Sub-second first response time",
          },
          {
            icon: ShieldCheck,
            title: "Zero-Hallucination Guardrails",
            desc: "Deterministic citations ensure your agents never answer questions outside verified knowledge sources.",
            value: "100% factual provenance",
          },
          {
            icon: Workflow,
            title: "Smart Human Handoff",
            desc: "Automatically transfers high-frustration or sensitive discussions to human agents with full conversation summaries.",
            value: "Zero-latency desk routing",
          },
          {
            icon: Globe2,
            title: "95+ Language Translation",
            desc: "Answers global customers in their native language with localized context and automatic language detection.",
            value: "Worldwide support coverage",
          },
          {
            icon: MessageSquareText,
            title: "Shared Team Inbox",
            desc: "A unified workspace where human managers can inspect live agent chats, take over conversations, and tune prompts.",
            value: "Human-in-the-loop oversight",
          },
          {
            icon: Zap,
            title: "Multi-Model Hybrid Routing",
            desc: "Routes straightforward FAQs to fast mini models and complex technical troubleshooting to Claude 3.5 or GPT-4o.",
            value: "Optimized cost & inference latency",
          },
        ],
      }}
      howItWorks={{
        title: "From onboarding to autonomous live support in 4 steps",
        subtitle: "No machine learning engineers or complex training pipelines required.",
        steps: [
          {
            step: "01",
            title: "Connect Knowledge",
            desc: "Upload PDFs, Notion pages, website URLs, or Zendesk help center articles to index your institutional memory.",
            badge: "Instant Ingestion",
          },
          {
            step: "02",
            title: "Configure Agent Tone",
            desc: "Define your company voice, escalation thresholds, confidence scores, and approved customer actions.",
            badge: "Granular Controls",
          },
          {
            step: "03",
            title: "Test in Playground",
            desc: "Simulate edge cases and adversarial questions in the secure sandbox to verify citations before going live.",
            badge: "Safe Sandboxing",
          },
          {
            step: "04",
            title: "Deploy Omni-Channel",
            desc: "Embed our responsive web widget with one line of code or connect to WhatsApp and Slack with one click.",
            badge: "Live in Minutes",
          },
        ],
      }}
      useCases={{
        title: "Proven across high-velocity customer operations",
        subtitle: "How modern SaaS, e-commerce, and enterprise teams scale support with Yedii.",
        items: [
          {
            industry: "Enterprise B2B SaaS",
            title: "Technical API & Integration Troubleshooting",
            desc: "Developers querying API parameters and webhooks receive step-by-step code guidance directly from developer docs.",
            outcome: "68% reduction in engineering escalations",
          },
          {
            industry: "Global E-Commerce",
            title: "Peak Seasonal Order & Shipping Inquiries",
            desc: "Automates real-time parcel tracking, return label generation, and sizing advice during high-volume holiday surges.",
            outcome: "Zero seasonal contractor hiring needed",
          },
          {
            industry: "Regulated FinTech",
            title: "Compliant Account Inquiries with Human Fallback",
            desc: "Handles transaction status and balance lookups with automated routing for disputed transactions.",
            outcome: "0 compliance breaches across 2.5M chats",
          },
        ],
      }}
      benefits={{
        title: "Quantifiable business outcomes for customer leaders",
        subtitle: "Drive down ticket volume and empower your human team to focus on high-touch accounts.",
        items: [
          { value: "74%", label: "Average Deflection Rate", desc: "Automate everyday questions without human intervention." },
          { value: "< 15s", label: "First Response Time", desc: "Instant answers 24/7 across every time zone." },
          { value: "+18%", label: "CSAT Improvement", desc: "Consistent, accurate responses grounded on company data." },
          { value: "320+", label: "Hours Saved / Quarter", desc: "Frees senior specialists from repetitive manual triage." },
        ],
      }}
      faqs={{
        title: "Customer Support Platform FAQs",
        subtitle: "Common architectural and deployment questions answered.",
        items: [
          {
            q: "Can Yedii integrate with our existing Zendesk or Intercom helpdesk?",
            a: "Yes. Yedii connects directly to your existing ticketing systems. When human escalation is required, Yedii creates or updates the ticket in your CRM with complete conversation history and semantic tags.",
          },
          {
            q: "What happens if a customer asks a question not covered in our documentation?",
            a: "Yedii's strict confidence threshold ensures the agent never invents an answer. It will politely inform the customer that human assistance is required and route the chat to your team.",
          },
          {
            q: "How does the web chat widget perform on mobile devices?",
            a: "The widget is fully responsive, lightweight (under 30KB gzipped), accessible (WCAG compliant), and matches your company's custom brand styling.",
          },
          {
            q: "Is our customer data used to train public LLM models?",
            a: "No. All enterprise accounts benefit from zero-data-retention agreements. Your customer inquiries, documents, and chat histories are never retained for model training.",
          },
        ],
      }}
      cta={{
        title: "Ready to automate tier-1 support with zero hallucinations?",
        subtitle: "Launch your first custom agent in 10 minutes with our 14-day free trial. No credit card required.",
        primaryText: "Get Started Free",
        primaryHref: "https://app.yedii.com/signup",
      }}
    />
  );
}

