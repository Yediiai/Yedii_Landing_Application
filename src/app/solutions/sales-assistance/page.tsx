import type { Metadata } from "next";
import {
  TrendingUp,
  Target,
  Calendar,
  Sparkles,
  Bot,
  Filter,
} from "lucide-react";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";
import { DedicatedPageTemplate } from "@/components/templates/DedicatedPageTemplate";

export const metadata: Metadata = {
  title: "AI Sales Assistance Solution | Inbound Lead Qualification",
  description:
    "Engage high-intent website visitors, answer product questions, qualify enterprise leads, and book sales demos automatically with Yedii AI agents.",
  alternates: { canonical: `${SITE_URL}/solutions/sales-assistance` },
  openGraph: {
    title: "AI Sales Assistance Solution | Yedii",
    description: "Automated inbound lead qualification, demo scheduling, and sales enablement with autonomous AI agents.",
    url: `${SITE_URL}/solutions/sales-assistance`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Sales Assistance Solution" }],
  },
};

export default function SalesAssistanceSolutionPage() {
  return (
    <DedicatedPageTemplate
      badge={{
        icon: TrendingUp,
        text: "Solutions • AI Sales Assistance & Inbound Qualification",
      }}
      hero={{
        title: "Engage high-intent website visitors and book qualified meetings 24/7",
        subtitle:
          "Don't let interested enterprise buyers bounce while waiting for an SDR response. Yedii AI sales agents engage visitors proactively, answer deep product questions with verified citations, qualify ICP criteria, and schedule calendar meetings directly in chat.",
        primaryCta: { text: "Deploy Sales Agent", href: "https://app.yedii.com/signup" },
        secondaryCta: { text: "See ROI Calculator", href: "/enterprise#roi" },
      }}
      mockPreview={
        <div className="bg-[#141C2E] rounded-[14px] p-6 text-white font-mono text-xs space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-zinc-300 font-semibold text-sm">Inbound Enterprise Qualification Flow</span>
            <span className="text-emerald-400">CRM Sync: HubSpot Connected</span>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-[8px] border border-white/10">
              <span className="text-zinc-400 block mb-1">Visitor (Pricing Page):</span>
              <p className="text-zinc-100 font-sans text-sm">&quot;We have 25 support reps and need HIPAA compliance. Does your Enterprise tier support custom VPC deployment?&quot;</p>
            </div>
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-[8px]">
              <span className="text-emerald-400 font-semibold block mb-1">Yedii Sales Agent [ICP Match: Tier-1 Enterprise]:</span>
              <p className="text-emerald-100 font-sans text-sm leading-relaxed">
                &quot;Yes! Our Enterprise tier provides dedicated single-tenant VPC deployment on AWS/GCP with signed HIPAA BAAs and zero data retention. Based on your 25 reps, our Enterprise Solutions Architect can walk you through VPC peering. Would you like to schedule a 20-minute briefing with Marcus tomorrow at 2:00 PM EST? [Confirm Calendar Invite]&quot;
              </p>
            </div>
          </div>
        </div>
      }
      problemSolution={{
        title: "Static lead forms lose your best enterprise buyers",
        subtitle:
          "High-intent buyers want immediate answers to technical and pricing questions before agreeing to a discovery call.",
        items: [
          {
            problem: "Visitors leave static 'Contact Sales' forms because waiting 48 hours for an email follow-up kills momentum.",
            solution: "Yedii engages visitors in real time, answers compliance questions, and schedules meetings while intent is highest.",
            benefit: "< 30s Meeting Booking",
          },
          {
            problem: "Account executives waste valuable hours on discovery calls with unqualified prospects who don't fit ICP criteria.",
            solution: "The agent asks qualifying questions (team size, budget, tech stack) before offering executive calendar slots.",
            benefit: "100% Qualified Pipeline",
          },
          {
            problem: "International leads visiting outside local business hours are lost to faster regional competitors.",
            solution: "Autonomous sales agents qualify leads and capture buyer requirements 24/7 across every global timezone.",
            benefit: "+35% Global Lead Capture",
          },
        ],
      }}
      features={{
        title: "Built to accelerate pipeline velocity for B2B revenue teams",
        subtitle: "Bridge the gap between marketing traffic and sales pipeline.",
        items: [
          {
            icon: Target,
            title: "Proactive Buyer Engagement",
            desc: "Trigger personalized greetings based on page context (e.g. high-intent pricing visitors vs documentation readers).",
            value: "Higher visitor engagement",
          },
          {
            icon: Filter,
            title: "Automated ICP Qualification",
            desc: "Conversational qualification flows verify company size, budget, current tooling, and deployment timeline.",
            value: "Zero unqualified sales calls",
          },
          {
            icon: Calendar,
            title: "Direct Calendar Booking",
            desc: "Integrate with Calendly, Cal.com, or HubSpot to display real-time AE availability and book meetings inside chat.",
            value: "Instant meeting confirmation",
          },
          {
            icon: Sparkles,
            title: "Technical Objection Handling",
            desc: "Grounded on your security whitepapers and compliance docs to answer SOC 2, HIPAA, and GDPR questions instantly.",
            value: "Accelerated sales cycles",
          },
          {
            icon: Bot,
            title: "Instant CRM Enrichment",
            desc: "Syncs qualified lead data, conversation transcripts, and intent scores directly to Salesforce or HubSpot.",
            value: "Zero manual data entry",
          },
          {
            icon: TrendingUp,
            title: "Pipeline Analytics",
            desc: "Track which landing pages and query topics drive the highest conversion to booked enterprise demos.",
            value: "Actionable revenue insights",
          },
        ],
      }}
      howItWorks={{
        title: "How Yedii turns website visitors into qualified demos",
        subtitle: "A frictionless qualification and booking funnel.",
        steps: [
          {
            step: "01",
            title: "Smart Greeting",
            desc: "Yedii identifies high-intent visitors on your pricing or enterprise page and initiates a relevant conversation.",
            badge: "Proactive Prompt",
          },
          {
            step: "02",
            title: "Product Q&A",
            desc: "The agent answers specific feature, integration, and security questions using verified company documentation.",
            badge: "Grounded Value",
          },
          {
            step: "03",
            title: "ICP Scoring",
            desc: "Conversational qualification assesses team size, budget, and urgency against your defined sales criteria.",
            badge: "Lead Scoring",
          },
          {
            step: "04",
            title: "Meeting Booked",
            desc: "Qualified prospects select a meeting slot directly from the AE's live calendar, and lead data syncs to your CRM.",
            badge: "Pipeline Created",
          },
        ],
      }}
      useCases={{
        title: "Real revenue teams accelerating sales with Yedii",
        subtitle: "How modern sales organizations convert high-value traffic.",
        items: [
          {
            industry: "Enterprise DevTools",
            title: "Qualifying Architecture & VPC Requirements",
            desc: "Engaged VP Engineering visitors on the pricing page, answered single-tenant questions, and booked 45+ enterprise demos monthly.",
            outcome: "+32% increase in qualified pipeline",
          },
          {
            industry: "HR & FinTech SaaS",
            title: "Accelerating Sales Cycles with Compliance Answers",
            desc: "Instantly answered SOC 2 and data isolation questions that previously took 3 email exchanges between AEs and SecOps.",
            outcome: "14 days cut from average sales cycle",
          },
          {
            industry: "Agencies & Consultancies",
            title: "24/7 Inbound Project Scoping",
            desc: "Collected client project scopes, estimated timelines, and scheduled discovery calls around the clock.",
            outcome: "2.4x higher lead capture rate",
          },
        ],
      }}
      benefits={{
        title: "Why VPs of Sales and Revenue Operations choose Yedii",
        subtitle: "Convert more pipeline from the website traffic you already have.",
        items: [
          { value: "+32%", label: "Pipeline Velocity", desc: "Shorten qualification and discovery cycles dramatically." },
          { value: "< 1 min", label: "Time to Demo Booked", desc: "No email back-and-forth trying to coordinate calendar times." },
          { value: "100%", label: "ICP Alignment", desc: "Ensure your account executives only speak with qualified buyers." },
          { value: "24/7", label: "Global Lead Capture", desc: "Never lose a high-value overseas buyer after business hours." },
        ],
      }}
      faqs={{
        title: "Sales Assistance Solution FAQs",
        subtitle: "Common questions on sales qualification and calendar routing.",
        items: [
          {
            q: "Can Yedii route leads to specific account executives based on territory?",
            a: "Yes. Round-robin and territory routing rules ensure prospects are matched with the appropriate regional AE calendar automatically.",
          },
          {
            q: "What CRM systems does Yedii integrate with?",
            a: "Yedii connects via webhooks and native connectors to Salesforce, HubSpot, Attio, and Pipedrive to create new leads with full conversation memory.",
          },
          {
            q: "What if a visitor is an existing customer asking for support?",
            a: "Yedii detects customer intent. If an existing customer asks a support question on the sales page, the agent seamlessly pivots to support mode or transfers to their dedicated CSM.",
          },
          {
            q: "Can we customize the qualification questions asked by the agent?",
            a: "Yes! You can configure exact qualification rules (e.g., minimum company size, budget thresholds, supported platforms) in your agent instructions.",
          },
        ],
      }}
      cta={{
        title: "Turn website traffic into booked pipeline today",
        subtitle: "Deploy an AI sales qualification agent in 10 minutes with our 14-day free trial.",
        primaryText: "Deploy Sales Agent",
        primaryHref: "https://app.yedii.com/signup",
      }}
    />
  );
}

