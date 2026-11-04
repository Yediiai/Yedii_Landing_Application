import type { Metadata } from "next";
import {
  Headphones,
  Clock,
  HeartHandshake,
  Bot,
  Zap,
  Globe2,
} from "lucide-react";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";
import { DedicatedPageTemplate } from "@/components/templates/DedicatedPageTemplate";

export const metadata: Metadata = {
  title: "AI Customer Support Solution | 24/7 Automated Service",
  description:
    "Deliver instant, personalized, zero-hallucination customer support 24/7 across web chat, WhatsApp, and email with Yedii autonomous AI agents.",
  alternates: { canonical: `${SITE_URL}/solutions/customer-support` },
  openGraph: {
    title: "AI Customer Support Solution | Yedii",
    description: "Automate tier-1 customer support inquiries with verified document grounding and human fallback.",
    url: `${SITE_URL}/solutions/customer-support`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Customer Support Solution" }],
  },
};

export default function CustomerSupportSolutionPage() {
  return (
    <DedicatedPageTemplate
      badge={{
        icon: Headphones,
        text: "Solutions • Automated Customer Support",
      }}
      hero={{
        title: "Deliver 24/7 customer support that feels human and never hallucinates",
        subtitle:
          "Empower your support team to scale without burnout. Yedii AI agents resolve routine billing, account, and general inquiries instantly, escalating to human specialists with full context when empathy is needed.",
        primaryCta: { text: "Start Free Trial", href: "https://app.yedii.com/signup" },
        secondaryCta: { text: "See Customer Stories", href: "/customers" },
      }}
      mockPreview={
        <div className="bg-[#141C2E] rounded-[14px] p-6 text-white font-mono text-xs space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-zinc-300 font-semibold text-sm">Live Support Channel: Web Widget &amp; WhatsApp</span>
            <span className="text-emerald-400 font-semibold">Active Session: 98.6% CSAT</span>
          </div>
          <div className="space-y-3">
            <div className="p-3 rounded-[8px] bg-white/5 border border-white/10">
              <span className="text-zinc-400 block mb-1">Customer (WhatsApp):</span>
              <p className="text-zinc-100 font-sans text-sm">&quot;I need to update our corporate billing address before the invoice generates tomorrow.&quot;</p>
            </div>
            <div className="p-3 rounded-[8px] bg-emerald-950/40 border border-emerald-500/30">
              <span className="text-emerald-400 font-semibold block mb-1">Yedii Support Agent [Action Triggered]:</span>
              <p className="text-emerald-100 font-sans text-sm">
                &quot;I have generated a secure one-time link to update your corporate billing details directly in Stripe: [portal.yedii.com/billing-auth]. Once saved, your invoice tomorrow will automatically reflect the new address!&quot;
              </p>
            </div>
          </div>
        </div>
      }
      problemSolution={{
        title: "Break free from slow support queues and rising team costs",
        subtitle:
          "Hiring more support reps cannot keep pace with customer growth, while traditional chatbots drive customers away.",
        items: [
          {
            problem: "Long queue times during peak hours lead to customer frustration, negative reviews, and churn.",
            solution: "Yedii answers inbound queries in under 15 seconds, 24/7/365 across all global time zones.",
            benefit: "Sub-15s First Response",
          },
          {
            problem: "Support teams burn out answering the same 20 repetitive password, billing, and policy questions.",
            solution: "Autonomous deflection absorbs 75% of tier-1 volume, freeing agents for high-value relationships.",
            benefit: "75% Deflection Rate",
          },
          {
            problem: "Inconsistent answers across rotating shift agents damage trust and create compliance issues.",
            solution: "Every answer is deterministically grounded on your single source of truth handbooks.",
            benefit: "100% Brand Consistency",
          },
        ],
      }}
      features={{
        title: "Enterprise features for modern customer support teams",
        subtitle: "Built to integrate seamlessly with your existing workflow.",
        items: [
          {
            icon: Clock,
            title: "24/7 Instant Service",
            desc: "Provide instantaneous support across nights, weekends, and holidays without paying overtime or contractor fees.",
            value: "Zero queue waiting time",
          },
          {
            icon: HeartHandshake,
            title: "Sentiment-Aware Escalation",
            desc: "Detects customer tone and sentiment. Frustrated users are immediately routed to human specialists with context.",
            value: "Empathetic customer retention",
          },
          {
            icon: Globe2,
            title: "Multi-Language Support",
            desc: "Detects and replies in 95+ languages automatically so your team can serve international customers effortlessly.",
            value: "Global support capability",
          },
          {
            icon: Zap,
            title: "Self-Service Action Execution",
            desc: "Empower agents to issue order lookups, trigger password resets, or update subscription tiers via webhooks.",
            value: "Fewer manual tasks for agents",
          },
          {
            icon: Bot,
            title: "Helpdesk Synchronization",
            desc: "Bi-directional integration with Zendesk, Intercom, Freshdesk, and Slack. All conversations logged automatically.",
            value: "Zero workflow disruption",
          },
          {
            icon: Headphones,
            title: "Shared Team Triage Inbox",
            desc: "Monitor live conversations, jump in with one click, and coach your AI agent by editing prompt instructions.",
            value: "Human-in-the-loop oversight",
          },
        ],
      }}
      howItWorks={{
        title: "How Yedii automates customer support workflows",
        subtitle: "A smooth transition from incoming inquiry to satisfied resolution.",
        steps: [
          {
            step: "01",
            title: "Customer Initiates Chat",
            desc: "User asks a question via your website widget, WhatsApp contact, or support email.",
            badge: "Inbound",
          },
          {
            step: "02",
            title: "Semantic Analysis",
            desc: "Yedii identifies customer intent, checks sentiment, and retrieves relevant policy documentation.",
            badge: "Context Retrieval",
          },
          {
            step: "03",
            title: "Grounded Resolution",
            desc: "The agent generates an accurate, cited response or executes an authorized lookup action.",
            badge: "Cited Answer",
          },
          {
            step: "04",
            title: "Optional Handoff",
            desc: "If the inquiry requires human empathy or policy exceptions, it escalates to your team inbox.",
            badge: "Seamless Escalation",
          },
        ],
      }}
      useCases={{
        title: "How leading teams transform customer support",
        subtitle: "Proven outcomes across diverse customer support environments.",
        items: [
          {
            industry: "High-Growth SaaS",
            title: "Automating Tier-1 Billing & Account Triage",
            desc: "Attio Scale automated plan upgrade questions, seat management, and invoice receipts across 40 countries.",
            outcome: "+10.6% CSAT jump to 98.6%",
          },
          {
            industry: "Consumer Tech",
            title: "Holiday Surge Volume Deflection",
            desc: "Handled a 400% surge in order status and return inquiries over Black Friday without hiring temporary staff.",
            outcome: "100% agent uptime under heavy surge",
          },
          {
            industry: "Regulated FinTech",
            title: "Zero-Breach Account Balance Queries",
            desc: "Provided fast, compliant customer responses with automatic human handoff for sensitive dispute resolution.",
            outcome: "Zero compliance breaches",
          },
        ],
      }}
      benefits={{
        title: "The measurable impact of autonomous customer service",
        subtitle: "Unlock lower operating costs while elevating customer happiness.",
        items: [
          { value: "75%", label: "Ticket Deflection", desc: "Automate everyday inquiries without human intervention." },
          { value: "< 15s", label: "Resolution Speed", desc: "Drastic drop in first-contact response time." },
          { value: "+20%", label: "Customer CSAT", desc: "Customers love getting instant answers at any hour." },
          { value: "3x", label: "Team Productivity", desc: "Support reps focus on strategic accounts and retention." },
        ],
      }}
      faqs={{
        title: "Customer Support Solution FAQs",
        subtitle: "Answers to common questions about deployment and operations.",
        items: [
          {
            q: "Will our customers know they are chatting with an AI agent?",
            a: "Yes, we encourage transparency. The widget clearly identifies itself as an AI assistant, while offering an instant 'Talk to Human' button at any time.",
          },
          {
            q: "Can the AI agent handle angry or escalated customers?",
            a: "Yes. Our sentiment analysis detects frustration or negative tone, immediately offering a polite apology and transferring to a live human agent with full context.",
          },
          {
            q: "How does the agent stay updated when our product policies change?",
            a: "Whenever you update your Notion docs, help center, or PDFs, Yedii re-indexes the changes automatically. Your agent will reflect the new policies within seconds.",
          },
          {
            q: "Can we review conversation transcripts before going live?",
            a: "Yes! You can test hundreds of queries in the AI Playground and review transcripts before enabling the widget on your production site.",
          },
        ],
      }}
      cta={{
        title: "Start delivering 24/7 automated support today",
        subtitle: "Launch your customer support agent in 10 minutes with our 14-day free trial.",
        primaryText: "Start Free Trial",
        primaryHref: "https://app.yedii.com/signup",
      }}
    />
  );
}

