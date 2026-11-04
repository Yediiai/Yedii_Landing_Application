import type { Metadata } from "next";
import {
  Sparkles,
  Sliders,
  Cpu,
  TestTube2,
  Terminal,
  ShieldAlert,
} from "lucide-react";
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
      badge={{
        icon: Sparkles,
        text: "Interactive AI Playground • Real-Time Agent Sandbox",
      }}
      hero={{
        title: "Test, configure, and red-team agents before going live",
        subtitle:
          "The Yedii AI Playground provides an interactive testing sandbox. Adjust temperature, swap foundational LLMs on the fly, inspect retrieved vector chunks, and evaluate agent responses with zero production risk.",
        primaryCta: { text: "Launch Free Playground", href: "https://app.yedii.com/signup" },
        secondaryCta: { text: "Explore AI Agents", href: "/ai-agents" },
      }}
      mockPreview={
        <div className="bg-[#111827] rounded-[14px] p-6 text-white font-mono text-xs space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 font-semibold text-[11px]">Sandbox: Active</span>
              <span className="text-zinc-300">Model: Claude 3.5 Sonnet • Temp: 0.2 • TopP: 0.9</span>
            </div>
            <span className="text-emerald-400 font-semibold">Citations: 3 Verified Chunks</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5 bg-white/5 rounded-[10px] p-4 border border-white/10 space-y-2">
              <span className="text-zinc-400 block text-[11px] uppercase tracking-wider font-semibold">Retrieved Context Inspector:</span>
              <div className="text-[11px] text-zinc-300 bg-black/40 p-2.5 rounded border border-white/5 leading-relaxed">
                [Chunk 104 - score: 0.94]: &quot;Enterprise SLA guarantees 99.99% uptime with 15-minute response for P1 severity incidents.&quot;
              </div>
              <div className="text-[11px] text-zinc-300 bg-black/40 p-2.5 rounded border border-white/5 leading-relaxed">
                [Chunk 208 - score: 0.89]: &quot;Dedicated VPC deployment is available on AWS us-east-1, eu-west-1, and ap-southeast-1.&quot;
              </div>
            </div>
            <div className="md:col-span-7 bg-white/5 rounded-[10px] p-4 border border-white/10 space-y-3">
              <span className="text-zinc-400 block text-[11px] uppercase tracking-wider font-semibold">Adversarial Test Console:</span>
              <div className="p-2.5 bg-white/5 rounded text-zinc-200">
                <span className="text-rose-400 font-bold">User:</span> &quot;Can you give me 50% discount if I sign today?&quot;
              </div>
              <div className="p-2.5 bg-emerald-950/40 border border-emerald-500/20 rounded text-emerald-200">
                <span className="text-emerald-400 font-bold">Agent:</span> &quot;I cannot offer custom discounts directly. I can connect you with an account executive who can review volume pricing tailored to your scale.&quot;
              </div>
            </div>
          </div>
        </div>
      }
      problemSolution={{
        title: "Eliminate unpredictable agent behavior in production",
        subtitle:
          "Deploying untested AI models into customer-facing environments creates hallucination risks and brand liability.",
        items: [
          {
            problem: "Engineering teams push prompt changes blind without knowing how edge cases will react.",
            solution: "Yedii Playground lets you simulate hundreds of query variations against live vector indices instantly.",
            benefit: "100% Pre-Launch Confidence",
          },
          {
            problem: "Switching models (e.g. from GPT-4o to Claude 3.5 Sonnet) causes unexpected tone and latency drift.",
            solution: "Side-by-side model benchmarking compares latency, token cost, and citation accuracy in one interface.",
            benefit: "Deterministic Benchmarking",
          },
          {
            problem: "Red-teaming against prompt injections and jailbreaks is tedious and difficult to automate.",
            solution: "Built-in adversarial test suites automatically evaluate safety filters, guardrails, and role compliance.",
            benefit: "Automated Safety Auditing",
          },
        ],
      }}
      features={{
        title: "Developer tools to master prompt engineering & agent behavior",
        subtitle: "Everything you need to experiment, inspect, and optimize conversational agents.",
        items: [
          {
            icon: Sliders,
            title: "Live Hyperparameter Tuning",
            desc: "Adjust temperature, frequency penalties, top-p, and system prompts with instant visual diffing.",
            value: "Fine-grained behavioral tuning",
          },
          {
            icon: Cpu,
            title: "One-Click Model Swapping",
            desc: "Test the exact same prompt against Claude 3.5 Sonnet, GPT-4o, GPT-4o mini, and Llama 3.3 in parallel.",
            value: "Multi-model evaluation",
          },
          {
            icon: TestTube2,
            title: "Vector Retrieval Inspector",
            desc: "View the exact knowledge chunks, similarity scores, and metadata fragments retrieved for every query.",
            value: "Complete RAG transparency",
          },
          {
            icon: Terminal,
            title: "Conversation Simulation",
            desc: "Multi-turn dialogues test context retention, memory roll-off, and state persistence over extended sessions.",
            value: "Full conversational memory check",
          },
          {
            icon: ShieldAlert,
            title: "Red-Teaming Guardrails",
            desc: "Simulate adversarial attacks, competitor mentions, and out-of-scope requests to verify safety fallback.",
            value: "Zero-breach safety verification",
          },
          {
            icon: Sparkles,
            title: "Prompt Version History",
            desc: "Save snapshot versions of your system instructions and rollback to previous configurations with one click.",
            value: "Version-controlled instructions",
          },
        ],
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

