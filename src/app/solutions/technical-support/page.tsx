import type { Metadata } from "next";
import {
  Terminal,
  Code2,
  Bug,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";
import { DedicatedPageTemplate } from "@/components/templates/DedicatedPageTemplate";

export const metadata: Metadata = {
  title: "AI Technical Support Solution | Developer & API Troubleshooting",
  description:
    "Automate technical troubleshooting, API debugging, and SDK integration support with Yedii code-aware autonomous AI agents.",
  alternates: { canonical: `${SITE_URL}/solutions/technical-support` },
  openGraph: {
    title: "AI Technical Support Solution | Yedii",
    description: "Code-aware autonomous AI agents for developer support, error debugging, and architectural guidance.",
    url: `${SITE_URL}/solutions/technical-support`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Technical Support Solution" }],
  },
};

export default function TechnicalSupportSolutionPage() {
  return (
    <DedicatedPageTemplate
      badge={{
        icon: Terminal,
        text: "Solutions • Technical Support & Developer Triage",
      }}
      hero={{
        title: "Intelligent technical support that debugs code and resolves API issues",
        subtitle:
          "Relieve your engineering team from constant customer support interruptions. Yedii parses stack traces, checks API payloads against documentation, and provides step-by-step technical troubleshooting with working code examples.",
        primaryCta: { text: "Deploy Technical Agent", href: "https://app.yedii.com/signup" },
        secondaryCta: { text: "Explore AI Playground", href: "/ai-playground" },
      }}
      mockPreview={
        <div className="bg-[#0D1117] rounded-[14px] p-6 text-white font-mono text-xs space-y-4 border border-zinc-800">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <span className="text-zinc-400 font-semibold text-sm">Developer Slack Channel / #dev-support</span>
            <span className="text-emerald-400">Agent: DevSupport_Bot (Claude 3.5 Sonnet)</span>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-zinc-900 rounded-[8px] border border-zinc-800">
              <span className="text-rose-400 block mb-1">Developer Question:</span>
              <p className="text-zinc-300 font-sans text-sm">&quot;I keep getting `401 Unauthorized: Invalid signature` when calling the `/v1/webhooks` endpoint from Node.js. Here is my HMAC logic.&quot;</p>
            </div>
            <div className="p-3 bg-emerald-950/30 border border-emerald-500/20 rounded-[8px]">
              <span className="text-emerald-400 font-semibold block mb-1">Yedii Technical Agent [Source: docs/webhooks.md#security]:</span>
              <p className="text-emerald-100 font-sans text-sm leading-relaxed">
                &quot;The signature mismatch happens because `req.body` is already parsed into JSON before HMAC calculation. The raw buffer must be passed into `crypto.createHmac(&apos;sha256&apos;, secret).update(rawBuffer).digest(&apos;hex&apos;)`. Here is the exact fix for your Express middleware: [View Code Snippet]&quot;
              </p>
            </div>
          </div>
        </div>
      }
      problemSolution={{
        title: "Senior engineers shouldn't spend 40% of their time answering FAQs",
        subtitle:
          "Developer triage pulls senior engineers out of deep work to diagnose syntax mistakes and outdated API calls.",
        items: [
          {
            problem: "Developers wait hours or days on ticket queues to get simple API configuration answers.",
            solution: "Yedii diagnoses error codes and payload discrepancies in real time, delivering working code fixes.",
            benefit: "< 30s Resolution",
          },
          {
            problem: "Generic support reps lack the software engineering depth required to understand stack traces.",
            solution: "Grounded on your actual GitHub repos, OpenAPI specs, and SDK docs for code-level comprehension.",
            benefit: "Deep Technical Competence",
          },
          {
            problem: "Engineers constantly context-switch to answer internal questions on Slack about microservices.",
            solution: "Yedii connects to Slack as a dedicated internal assistant, resolving technical questions automatically.",
            benefit: "300+ Dev Hours Saved",
          },
        ],
      }}
      features={{
        title: "Built specifically for developer platforms, APIs, and cloud services",
        subtitle: "Deep technical comprehension beyond surface-level text matching.",
        items: [
          {
            icon: Code2,
            title: "Syntax & Code Generation",
            desc: "Provides correctly formatted code snippets in Python, TypeScript, Go, cURL, and Java matching your exact API specs.",
            value: "Multi-language code snippets",
          },
          {
            icon: Bug,
            title: "Stack Trace Diagnosis",
            desc: "Paste raw error logs, stack traces, and HTTP error codes to receive instant root-cause analysis and remediation steps.",
            value: "Automated debugging",
          },
          {
            icon: Terminal,
            title: "OpenAPI / Swagger Ingestion",
            desc: "Natively parse OpenAPI 3.0 specs and Postman collections to ensure parameter descriptions are always 100% accurate.",
            value: "Automated API schema sync",
          },
          {
            icon: Cpu,
            title: "Model Context Protocol (MCP)",
            desc: "Expose your technical docs and agent capabilities directly to developer IDEs (VS Code, Cursor) and Claude Desktop.",
            value: "Native developer workflow",
          },
          {
            icon: Layers,
            title: "GitHub & Repo Synchronization",
            desc: "Connect your public documentation repositories or private internal wikis to index new commit changes automatically.",
            value: "Continuous repo indexing",
          },
          {
            icon: ShieldCheck,
            title: "Isolated Code Sandboxing",
            desc: "Customer code snippets and environment variables are strictly isolated with contractually guaranteed zero data retention.",
            value: "Enterprise IP protection",
          },
        ],
      }}
      howItWorks={{
        title: "How Yedii resolves complex technical inquiries",
        subtitle: "From raw error message to verified code resolution.",
        steps: [
          {
            step: "01",
            title: "Developer Submits Code",
            desc: "Developer pastes their code snippet, cURL command, or stack trace into Slack or the web widget.",
            badge: "Code Ingestion",
          },
          {
            step: "02",
            title: "API Spec Matching",
            desc: "Yedii compares the request parameters against your official OpenAPI specifications and reference docs.",
            badge: "Schema Validation",
          },
          {
            step: "03",
            title: "Root Cause Detection",
            desc: "The agent identifies missing headers, invalid JSON types, deprecated parameters, or incorrect signatures.",
            badge: "Debugging",
          },
          {
            step: "04",
            title: "Working Code Fix",
            desc: "Returns the exact corrected code block with an explanation of why the original implementation failed.",
            badge: "Resolution",
          },
        ],
      }}
      useCases={{
        title: "Where technical AI agents create the most value",
        subtitle: "Real scenarios in production with developer-focused platforms.",
        items: [
          {
            industry: "Cloud Infrastructure",
            title: "Kubernetes Manifest & YAML Triage",
            desc: "HyperCloud connected their architecture manifests to Yedii, deflecting 68% of developer setup inquiries.",
            outcome: "320+ engineering hours saved quarterly",
          },
          {
            industry: "Payment Gateway",
            title: "Webhook Signature & SSL Verification",
            desc: "Automated troubleshooting for merchant developers integrating real-time payment webhooks.",
            outcome: "88% first-contact resolution for API keys",
          },
          {
            industry: "B2B SaaS Platform",
            title: "SDK Version Migration Guidance",
            desc: "Guided 2,000+ developers through v1 to v2 breaking change migrations with automated codemod examples.",
            outcome: "Zero migration ticket backlog",
          },
        ],
      }}
      benefits={{
        title: "Measurable outcomes for CTOs and Engineering VP leaders",
        subtitle: "Protect engineering focus while dramatically accelerating customer developer success.",
        items: [
          { value: "68%", label: "Escalation Reduction", desc: "Tier-2 and tier-3 engineering escalations avoided." },
          { value: "300+", label: "Hours Saved / Quarter", desc: "Reclaimed deep-work engineering sprint capacity." },
          { value: "< 30s", label: "Developer TTR", desc: "Developers get unblocked immediately at 2 AM." },
          { value: "100%", label: "Schema Accuracy", desc: "Directly synchronized with your OpenAPI documentation." },
        ],
      }}
      faqs={{
        title: "Technical Support Solution FAQs",
        subtitle: "Frequently asked technical and implementation questions.",
        items: [
          {
            q: "Can Yedii run code in a live sandbox?",
            a: "Yedii performs static semantic analysis against your documentation and verified code repositories. It can also connect to external test runners via custom webhooks if desired.",
          },
          {
            q: "How does Yedii handle code snippets in non-standard languages?",
            a: "Frontier models like Claude 3.5 Sonnet and GPT-4o have deep multilingual coding knowledge across 50+ programming languages, frameworks, and database query dialects.",
          },
          {
            q: "Can developers interact with Yedii directly from within Slack or Discord?",
            a: "Yes! Yedii integrates natively with Slack and Discord channels. Developers can @mention the bot to get instant code advice right where they already work.",
          },
          {
            q: "Are developer code snippets or API keys saved by Yedii?",
            a: "No. All enterprise traffic is covered under our strict Zero Data Retention guarantee. Customer inputs and API credentials are never logged or stored.",
          },
        ],
      }}
      cta={{
        title: "Unburden your engineering team from support triage",
        subtitle: "Deploy a code-aware technical support agent in 10 minutes with our 14-day free trial.",
        primaryText: "Deploy Technical Agent",
        primaryHref: "https://app.yedii.com/signup",
      }}
    />
  );
}

