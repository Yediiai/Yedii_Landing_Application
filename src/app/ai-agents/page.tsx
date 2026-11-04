import type { Metadata } from "next";
import {
  Bot,
  UserCheck,
  Cpu,
  Layers,
  Settings,
  Share2,
} from "lucide-react";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";
import { DedicatedPageTemplate } from "@/components/templates/DedicatedPageTemplate";

export const metadata: Metadata = {
  title: "Autonomous AI Agents | Role-Based Intelligent Automation",
  description:
    "Build, configure, and orchestrate specialized AI agents with custom roles, grounded knowledge bases, and multi-channel deployment in Yedii.",
  alternates: { canonical: `${SITE_URL}/ai-agents` },
  openGraph: {
    title: "Autonomous AI Agents | Yedii",
    description: "Design role-specialized AI agents grounded on your company data with full workflow execution.",
    url: `${SITE_URL}/ai-agents`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii AI Agents" }],
  },
};

export default function AiAgentsPage() {
  return (
    <DedicatedPageTemplate
      badge={{
        icon: Bot,
        text: "Autonomous AI Agents • Role Configuration & Deployment",
      }}
      hero={{
        title: "Build role-specialized AI agents with verified company memory",
        subtitle:
          "Configure intelligent agents tailored to specific operational domains — customer support, technical troubleshooting, sales assistance, or internal knowledge triage. Define exact roles, assign isolated knowledge bases, and deploy everywhere.",
        primaryCta: { text: "Create Your First Agent", href: "https://app.yedii.com/signup" },
        secondaryCta: { text: "Explore Knowledge Base", href: "/knowledge-base" },
      }}
      mockPreview={
        <div className="bg-[#141C2E] rounded-[14px] p-6 text-white font-mono text-xs space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-zinc-300 font-semibold text-sm">Agent Matrix Overview (3 Active Production Agents)</span>
            <span className="text-emerald-400 font-semibold">Status: All Healthy • 99.99% Uptime</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
            <div className="p-3.5 rounded-[10px] bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">Tier-1 Support Agent</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Live</span>
              </div>
              <p className="text-[11px] text-zinc-400 font-sans">Role: Customer Inquiries &amp; Account Triage</p>
              <div className="text-[10px] text-zinc-500 font-mono">Channels: Web Widget, WhatsApp</div>
            </div>
            <div className="p-3.5 rounded-[10px] bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">Tech Support Specialist</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Live</span>
              </div>
              <p className="text-[11px] text-zinc-400 font-sans">Role: API &amp; SDK Developer Troubleshooting</p>
              <div className="text-[10px] text-zinc-500 font-mono">Channels: Slack, GitHub MCP</div>
            </div>
            <div className="p-3.5 rounded-[10px] bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">Sales Inbound Agent</span>
                <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">Pilot</span>
              </div>
              <p className="text-[11px] text-zinc-400 font-sans">Role: Lead Qualification &amp; Demo Booking</p>
              <div className="text-[10px] text-zinc-500 font-mono">Channels: Web Widget, Email</div>
            </div>
          </div>
        </div>
      }
      problemSolution={{
        title: "One generic chatbot cannot handle every operational role",
        subtitle:
          "Forcing a single prompt to handle support, sales, and complex technical triage results in confusing, generic answers.",
        items: [
          {
            problem: "Single monolithic bots lack domain specialization and confuse product policies with sales pitches.",
            solution: "Yedii enables purpose-built agents with isolated system instructions, strict personas, and specific knowledge.",
            benefit: "Precision Specialization",
          },
          {
            problem: "Managing agent configurations across multiple messaging platforms creates fragmented operational silos.",
            solution: "Centrally configure instructions and knowledge in Yedii once, then push updates across all channels instantly.",
            benefit: "Unified Management",
          },
          {
            problem: "Agents without action capabilities can only chat passively without solving customer problems.",
            solution: "Equip agents with authenticated tools to execute order lookups, account status updates, and calendar bookings.",
            benefit: "Action-Oriented Execution",
          },
        ],
      }}
      features={{
        title: "Complete agent lifecycle control from creation to orchestration",
        subtitle: "Enterprise tooling designed for scalable autonomous operations.",
        items: [
          {
            icon: UserCheck,
            title: "Custom Role & Persona Engine",
            desc: "Define formal, empathetic, or technical communication styles tailored to each customer touchpoint.",
            value: "Brand-aligned interactions",
          },
          {
            icon: Settings,
            title: "Modular Instruction Sets",
            desc: "Combine core company guardrails with role-specific operational guidelines and custom response formatting.",
            value: "Deterministic compliance",
          },
          {
            icon: Layers,
            title: "Multi-Source Knowledge Linking",
            desc: "Assign distinct document collections to specific agents so sensitive internal handbooks stay restricted.",
            value: "Granular data partitioning",
          },
          {
            icon: Cpu,
            title: "Dynamic Model Allocation",
            desc: "Pair each agent with the optimal LLM — Claude 3.5 Sonnet for deep technical docs or GPT-4o mini for speed.",
            value: "Performance & budget optimization",
          },
          {
            icon: Share2,
            title: "Omni-Channel Synchronization",
            desc: "Deploy the exact same agent to Web, WhatsApp, Slack, and email while maintaining single customer memory.",
            value: "Unified customer context",
          },
          {
            icon: Bot,
            title: "Automated Sentiment Escalation",
            desc: "Detect frustrated sentiment and seamlessly transfer to human specialists in Zendesk or Slack with full history.",
            value: "Empathy-driven handoff",
          },
        ],
      }}
      howItWorks={{
        title: "How to build and launch an AI Agent with Yedii",
        subtitle: "Launch a production-ready conversational agent in under 10 minutes.",
        steps: [
          {
            step: "01",
            title: "Define Role & Goals",
            desc: "Name your agent, choose its target domain (Support, Sales, IT), and craft its core mission instructions.",
            badge: "Role Definition",
          },
          {
            step: "02",
            title: "Attach Knowledge Sources",
            desc: "Select specific document folders, website domains, or notion databases that this agent is authorized to read.",
            badge: "Data Scoping",
          },
          {
            step: "03",
            title: "Configure Tools & Actions",
            desc: "Connect webhooks to allow the agent to fetch customer order details or trigger CRM updates automatically.",
            badge: "Tool Integration",
          },
          {
            step: "04",
            title: "Deploy Across Channels",
            desc: "Generate your embed script for the web widget or authenticate WhatsApp and Slack channels with one click.",
            badge: "Instant Deployment",
          },
        ],
      }}
      useCases={{
        title: "Specialized agent roles in active production",
        subtitle: "See how organizations structure multi-agent workflows.",
        items: [
          {
            industry: "Enterprise SaaS",
            title: "Developer Onboarding Agent",
            desc: "Answers complex REST API questions, formats curl code examples, and explains authentication flows.",
            outcome: "92% developer satisfaction rating",
          },
          {
            industry: "B2B E-Commerce",
            title: "Wholesale Order Specialist",
            desc: "Checks warehouse inventory levels, calculates volume discounts, and generates custom quote links in real time.",
            outcome: "+22% faster quote turnaround",
          },
          {
            industry: "Healthcare Tech",
            title: "Patient Intake & Triage Agent",
            desc: "Collects intake information, verifies insurance coverage documents, and routes complex cases to clinical staff.",
            outcome: "Zero HIPAA compliance breaches",
          },
        ],
      }}
      benefits={{
        title: "Why enterprise leaders scale with Yedii AI Agents",
        subtitle: "Measurable impact across efficiency, response speed, and customer satisfaction.",
        items: [
          { value: "10 mins", label: "Time to Deploy", desc: "No custom coding or machine learning pipelines required." },
          { value: "95+", label: "Languages Handled", desc: "Native multi-language understanding across all touchpoints." },
          { value: "75%", label: "Deflection Rate", desc: "Frees support teams from repetitive tier-1 triage." },
          { value: "100%", label: "Role Alignment", desc: "Strict system instructions guarantee brand-safe answers." },
        ],
      }}
      faqs={{
        title: "AI Agents FAQs",
        subtitle: "Common questions about configuring and managing agents.",
        items: [
          {
            q: "Can I create multiple agents with different access permissions?",
            a: "Yes. You can create unlimited agents across departments. Each agent has its own knowledge sources, system instructions, and channel connections.",
          },
          {
            q: "How do agents coordinate when a customer needs help from another department?",
            a: "Agents can transfer threads to another specialized agent or escalate to the shared human inbox with complete conversation context.",
          },
          {
            q: "Can I customize the look and feel of the web chat widget for each agent?",
            a: "Yes. You can customize avatar images, welcome messages, brand colors, position, and proactive trigger rules per agent.",
          },
          {
            q: "How do I monitor live agent performance?",
            a: "Yedii's analytics dashboard provides real-time CSAT metrics, deflection rates, common query clusters, and conversation replays.",
          },
        ],
      }}
      cta={{
        title: "Build your first specialized AI agent today",
        subtitle: "Deploy production-grade conversational agents in 10 minutes with our 14-day free trial.",
        primaryText: "Create an Agent Now",
        primaryHref: "https://app.yedii.com/signup",
      }}
    />
  );
}

