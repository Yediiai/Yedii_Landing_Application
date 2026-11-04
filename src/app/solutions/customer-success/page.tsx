import type { Metadata } from "next";
import {
  HeartHandshake,
  GraduationCap,
  LineChart,
  UserCheck,
  Compass,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";
import { DedicatedPageTemplate } from "@/components/templates/DedicatedPageTemplate";

export const metadata: Metadata = {
  title: "AI Customer Success Solution | Onboarding & Product Adoption",
  description:
    "Accelerate user onboarding, guide feature discovery, track account health scores, and prevent churn with autonomous Yedii AI Customer Success agents.",
  alternates: { canonical: `${SITE_URL}/solutions/customer-success` },
  openGraph: {
    title: "AI Customer Success Solution | Yedii",
    description: "Accelerate user onboarding, drive feature adoption, and proactively prevent churn with autonomous AI agents.",
    url: `${SITE_URL}/solutions/customer-success`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Customer Success Solution" }],
  },
};

export default function CustomerSuccessSolutionPage() {
  return (
    <DedicatedPageTemplate
      badge={{
        icon: HeartHandshake,
        text: "Solutions • AI Customer Success & Product Adoption",
      }}
      hero={{
        title: "Proactive user onboarding, feature adoption, and retention at scale",
        subtitle:
          "Transform Customer Success from reactive ticket-firefighting into proactive account growth. Yedii guides new signups through complex onboarding milestones, detects stuck users before they churn, and delivers contextual in-app guidance tailored to account goals.",
        primaryCta: { text: "Deploy Success Agent", href: "https://app.yedii.com/signup" },
        secondaryCta: { text: "Explore Knowledge Base", href: "/knowledge-base" },
      }}
      mockPreview={
        <div className="bg-[#141C2E] rounded-[14px] p-6 text-white font-mono text-xs space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-zinc-300 font-semibold text-sm">Account Health Monitor & In-App Guide</span>
            <span className="text-emerald-400">Status: Proactive Intervention Triggered</span>
          </div>
          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-[8px] border border-white/10">
              <span className="text-zinc-400 block mb-1">User Action (Day 3 Post-Signup):</span>
              <p className="text-zinc-100 font-sans text-sm">&quot;Workspace created, but API webhook connection failed twice on endpoint validation.&quot;</p>
            </div>
            <div className="p-3 bg-blue-950/40 border border-blue-500/30 rounded-[8px]">
              <span className="text-blue-400 font-semibold block mb-1">Yedii Success Agent [Contextual Assistance]:</span>
              <p className="text-blue-100 font-sans text-sm leading-relaxed">
                &quot;Hi Sarah! I noticed your webhook payload returned HTTP 403 on `/api/v1/events`. This usually happens when the secret HMAC signature is omitted from headers. Here is a verified cURL snippet formatted for your endpoint, plus a 1-click test tool to verify your connection in 10 seconds.&quot;
              </p>
            </div>
          </div>
        </div>
      }
      problemSolution={{
        title: "Traditional Customer Success teams cannot handhold every account",
        subtitle:
          "High customer-to-CSM ratios mean mid-market and SMB accounts get zero proactive guidance, causing slow time-to-value and silent churn.",
        items: [
          {
            problem: "CSMs only have time to contact top 5% enterprise accounts, leaving the long-tail to struggle through documentation alone.",
            solution: "Yedii scales 1-on-1 personalized onboarding and adoption guidance across 100% of your customer accounts.",
            benefit: "100% Account Coverage",
          },
          {
            problem: "Users get stuck on technical configuration steps and abandon trial periods without ever submitting a support ticket.",
            solution: "Autonomous behavioral triggers detect onboarding friction and offer instant, contextual walkthroughs in real time.",
            benefit: "3.2x Faster Time-to-Value",
          },
          {
            problem: "CSMs discover unhappy or disengaged accounts only after the cancellation or renewal downgrade request is received.",
            solution: "Continuous health tracking alerts teams and launches intelligent re-engagement workflows before churn occurs.",
            benefit: "Proactive Churn Mitigation",
          },
        ],
      }}
      features={{
        title: "Engineered for adoption, education, and expansion",
        subtitle:
          "Provide every user with a dedicated digital CSM that knows your product documentation, account plan, and user milestones.",
        items: [
          {
            icon: Compass,
            title: "Milestone-Driven Onboarding",
            desc: "Guide users step-by-step through first-time workspace setup, team invitations, and initial integrations.",
            value: "Zero-Dropoff Onboarding",
          },
          {
            icon: GraduationCap,
            title: "Interactive Product Education",
            desc: "Answer complex 'how-to' queries using your verified help docs, knowledge articles, and release tutorials.",
            value: "Instant Answers in Context",
          },
          {
            icon: LineChart,
            title: "Account Health & Usage Tracking",
            desc: "Monitor product adoption patterns, feature activation thresholds, and user engagement frequency across teams.",
            value: "Real-time Telemetry",
          },
          {
            icon: AlertTriangle,
            title: "Friction & Churn Risk Detection",
            desc: "Identify users who hit repeated error states, stall on key setup stages, or show declining session activity.",
            value: "Early Warning Signals",
          },
          {
            icon: Lightbulb,
            title: "Contextual Feature Recommendations",
            desc: "Suggest relevant advanced features, workflows, and integrations based on each customer's specific industry use case.",
            value: "Organic Expansion",
          },
          {
            icon: UserCheck,
            title: "Seamless Human CSM Handoff",
            desc: "Escalate strategic accounts to assigned CSMs with full context summaries, user logs, and recommended next actions.",
            value: "High-Touch Synergy",
          },
        ],
      }}
      howItWorks={{
        title: "How Yedii drives continuous product adoption",
        subtitle: "From day-one signup to ongoing feature mastery in four continuous steps.",
        steps: [
          {
            step: "01",
            title: "Ingest Docs & User Playbooks",
            desc: "Connect your knowledge base, academy courses, and product manuals to give the agent full operational expertise.",
            badge: "Knowledge Sync",
          },
          {
            step: "02",
            title: "Define Adoption Milestones",
            desc: "Configure target activation events such as connecting an API, inviting 3 teammates, or sending a first campaign.",
            badge: "Milestones",
          },
          {
            step: "03",
            title: "Deliver Contextual Guidance",
            desc: "The agent assists users inside the app widget, answering questions and guiding workflows with verified citations.",
            badge: "Live Assistance",
          },
          {
            step: "04",
            title: "Track Health & Prevent Churn",
            desc: "Review adoption metrics, flag stalled accounts, and trigger automated re-engagement or CSM notifications.",
            badge: "Health Telemetry",
          },
        ],
      }}
      useCases={{
        title: "Real-world customer success scenarios",
        subtitle: "How modern product-led growth (PLG) and enterprise software teams use Yedii.",
        items: [
          {
            industry: "B2B SaaS / PLG Software",
            title: "Self-Serve Trial Activation",
            desc: "Free-trial users receive guided in-app coaching on configuring their first workflow, increasing trial-to-paid conversion.",
            outcome: "Higher Activation Rate",
          },
          {
            industry: "Developer Infrastructure",
            title: "API & SDK Onboarding",
            desc: "Engineers get instant, verified code snippets and debugging tips when integrating REST APIs, reducing time-to-first-call.",
            outcome: "Fewer Setup Blockers",
          },
          {
            industry: "Enterprise Platform",
            title: "Quarterly Review & Adoption Audits",
            desc: "Agents compile account feature utilization summaries, highlighting underutilized tools to maximize contract renewal value.",
            outcome: "Stronger Renewal Retention",
          },
        ],
      }}
      benefits={{
        title: "Business impact for customer success leaders",
        subtitle: "Scale your customer success coverage without linearly expanding head count.",
        items: [
          {
            value: "100%",
            label: "Self-Serve Onboarding Coverage",
            desc: "Every signed-up user receives immediate interactive walkthroughs regardless of contract tier.",
          },
          {
            value: "< 5s",
            label: "Product Question Response Time",
            desc: "Instant answers to feature functionality without waiting for CSM office hours or email threads.",
          },
          {
            value: "24/7",
            label: "Continuous Global Guidance",
            desc: "Multilingual guidance supporting global customers across every timezone without operational latency.",
          },
          {
            value: "Zero",
            label: "Hallucinated Workflows",
            desc: "All recommendations are strictly grounded in your verified product documentation and guides.",
          },
        ],
      }}
      faqs={{
        title: "Frequently Asked Questions about AI Customer Success",
        subtitle: "Everything you need to know about scaling user onboarding and retention.",
        items: [
          {
            q: "How does the AI agent know what features each customer has access to?",
            a: "Yedii can be passed user and organization metadata (e.g. tier, plan, enabled feature flags) via the web widget or API. The agent tailors its guidance exclusively to features available on that user's plan.",
          },
          {
            q: "Can the agent trigger automated emails or webhook notifications?",
            a: "Yes. Using Yedii webhooks and API integrations, the agent can notify your assigned CSM in Slack or trigger email workflows in your marketing automation tool when users hit milestones or get stuck.",
          },
          {
            q: "Will this replace human Customer Success Managers?",
            a: "No. Yedii handles repetitive 'how-to' guidance and low-tier onboarding so your human CSMs can focus on strategic executive relationships, business reviews, and major expansion opportunities.",
          },
          {
            q: "How fast can we launch the Customer Success agent?",
            a: "Most teams connect their existing documentation or knowledge base and embed the widget in under 15 minutes without writing custom backend code.",
          },
        ],
      }}
      cta={{
        title: "Scale customer success and retention with Yedii",
        subtitle: "Provide every customer with proactive, 24/7 onboarding and product education.",
        primaryText: "Deploy CS Agent Free",
        primaryHref: "https://app.yedii.com/signup",
      }}
    />
  );
}
