import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";
import { DedicatedPageTemplate } from "@/components/templates/DedicatedPageTemplate";

export const metadata: Metadata = {
  title: "AI Playground | Test & Simulate Agent Responses",
  description:
    "Test agent behavior, fine-tune system prompts, simulate customer conversations, and benchmark models in real-time with Yedii AI Playground.",
  alternates: { canonical: `${SITE_URL}/ai-playground` },
  openGraph: {
    title: "AI Playground | Yedii",
    description: "Interactive real-time sandbox for configuring, testing, and red-teaming autonomous AI agents.",
    url: `${SITE_URL}/ai-playground`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii AI Playground" }],
  },
};

export default function AiPlaygroundPage() {
  return (
    <DedicatedPageTemplate
      hero={{
        title: "Test, configure, and red-team agents before going live",
        subtitle:
          "The Yedii AI Playground provides an interactive testing sandbox. Adjust temperature, swap foundational LLMs on the fly, inspect retrieved vector chunks, and evaluate agent responses with zero production risk.",
        primaryCta: { text: "Launch Free Playground", href: "https://app.yedii.com/signup" },
        secondaryCta: { text: "Explore AI Agents", href: "/ai-agents" },
      }}
      howItWorks={{
        title: "How to tune and benchmark agents in the Playground",
        subtitle: "A frictionless engineering workflow from prompt ideation to production rollout.",
        steps: [
          {
            step: "01",
            title: "Select Foundation Model",
            desc: "Choose between frontier reasoning models or cost-effective mini models depending on your query complexity.",
            badge: "Model Selection",
          },
          {
            step: "02",
            title: "Draft System Instructions",
            desc: "Define the agent's persona, operational rules, response constraints, and escalation policies.",
            badge: "Prompt Engineering",
          },
          {
            step: "03",
            title: "Simulate Edge Cases",
            desc: "Test ambiguous, adversarial, or multi-part queries and inspect the exact retrieved document passages.",
            badge: "Iterative Testing",
          },
          {
            step: "04",
            title: "Publish to Live Agent",
            desc: "Promote verified prompt configurations directly to your production web widget, WhatsApp, or Slack bot.",
            badge: "Instant Sync",
          },
        ],
      }}
      useCases={{
        title: "How product teams utilize the AI Playground",
        subtitle: "Real scenarios where engineering and operations teams test prior to deployment.",
        items: [
          {
            industry: "Support Operations",
            title: "Testing Human Escalation Triggers",
            desc: "Simulates customer frustration signals to confirm the agent hands off to human Zendesk agents within 5 seconds.",
            outcome: "100% verified escalation accuracy",
          },
          {
            industry: "FinTech Compliance",
            title: "Red-Teaming Data Privacy Filters",
            desc: "Sends prompt injection attempts to verify the agent refuses to leak confidential document chunks or system prompts.",
            outcome: "Zero data leakage observed",
          },
          {
            industry: "E-Commerce",
            title: "Calibrating Sales Recommendations",
            desc: "Tests multi-turn sizing and catalog questions to ensure product recommendations match in-stock inventory.",
            outcome: "18% boost in cart conversion",
          },
        ],
      }}
      benefits={{
        title: "Faster iteration and safer agent deployments",
        subtitle: "Shorten prompt development cycles from weeks to hours.",
        items: [
          { value: "10x", label: "Faster Prompt Iteration", desc: "Test multiple model variations in a single unified UI." },
          { value: "100%", label: "Vector Transparency", desc: "Inspect exact document chunks behind every answer." },
          { value: "0", label: "Production Surprises", desc: "Detect edge-case hallucinations before your customers do." },
          { value: "50%", label: "Inference Cost Savings", desc: "Benchmark when lighter models perform just as well as frontier LLMs." },
        ],
      }}
      faqs={{
        title: "AI Playground FAQs",
        subtitle: "Everything you need to know about testing agents in Yedii.",
        items: [
          {
            q: "Do Playground sessions count toward my production message quotas?",
            a: "Playground usage is included in your standard plan allocation with generous development credits so you can thoroughly test before launching.",
          },
          {
            q: "Can I test custom API actions and webhooks in the Playground?",
            a: "Yes. You can trigger mock tool calls, check external webhook responses, and inspect payload schemas in the sandbox console.",
          },
          {
            q: "Can multiple team members test the same agent simultaneously?",
            a: "Yes. Playground configurations are collaborative. Teammates can share test sessions, review prompt diffs, and leave feedback.",
          },
          {
            q: "How does the Playground help prevent prompt injection attacks?",
            a: "Our built-in security evaluation tests system instructions against common jailbreak templates and provides automated vulnerability scores.",
          },
        ],
      }}
      cta={{
        title: "Experience the interactive AI Playground today",
        subtitle: "Create a free workspace and start testing intelligent conversational agents in minutes.",
        primaryText: "Open AI Playground",
        primaryHref: "https://app.yedii.com/signup",
      }}
    />
  );
}

