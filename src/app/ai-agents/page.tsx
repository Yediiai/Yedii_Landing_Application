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
import { CreateAgentFlowPreview } from "@/components/agents/CreateAgentFlowPreview";

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
      hero={{
        subtitle:
          "Configure intelligent agents tailored to specific operational domains — customer support, technical troubleshooting, sales assistance, or internal knowledge triage. Define exact roles, assign isolated knowledge bases, and deploy everywhere.",
        hideCtas: true,
      }}
      mockPreview={<CreateAgentFlowPreview />}
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
        title: "Inside the Create Your Agent flow",
        subtitle: "Every step from agent details to verified vector training takes under 10 minutes.",
        steps: [
          {
            step: "01",
            title: "Agent Details & Role",
            desc: "Name your agent, describe its mission, and assign a specialized role from the role selector.",
            badge: "Step 1 · Setup",
          },
          {
            step: "02",
            title: "Add Knowledge Sources",
            desc: "Connect Website pages or Sitemap crawls and PDF documents, then review extracted pages.",
            badge: "Step 2 · Knowledge",
          },
          {
            step: "03",
            title: "Configure Model & Train",
            desc: "Pick your embedding model and vector dimensions, then run live 4-stage semantic indexing.",
            badge: "Step 3 · Training",
          },
          {
            step: "04",
            title: "Agent Ready & Playground",
            desc: "Verify indexed sources and launch directly into the Playground or deploy to your channels.",
            badge: "Step 4 · Ready",
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
      cta={{
        title: "Build your first specialized AI agent today",
        subtitle: "Deploy production-grade conversational agents in 10 minutes with our 14-day free trial.",
        primaryText: "Create an Agent Now",
        primaryHref: "https://app.yedii.com/signup",
      }}
    />
  );
}

