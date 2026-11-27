import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  SlidersHorizontal,
  MessageSquare,
  Copy,
  RotateCcw,
  History,
  ArrowLeftRight,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductPlaygroundShowcase } from "@/components/playground/ProductPlaygroundShowcase";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "AI Playground | One Platform. Multiple AI Models.",
  description:
    "Explore, experiment, and compare AI models side by side in the Yedii AI Playground.",
  alternates: { canonical: `${SITE_URL}/ai-playground` },
  openGraph: {
    title: "Yedii AI Playground | Multi-Model Comparison & Testing",
    description:
      "Test prompts, adjust temperature and system instructions, and compare AI models in one workspace.",
    url: `${SITE_URL}/ai-playground`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii AI Playground" }],
  },
};

const PROVIDERS = [
  { name: "OpenAI", models: "GPT-4o, GPT-4o Mini, GPT-4.5", logo: "/images/providers/openai.svg" },
  { name: "Anthropic", models: "Claude 3.7 Sonnet, Claude Haiku", logo: "/images/providers/anthropic.svg" },
  { name: "Google", models: "Gemini 2.5 Pro, Gemma 3", logo: "/images/providers/gemini.svg" },
  { name: "Meta", models: "Llama 3.3 70B", logo: "/images/providers/meta.svg" },
  { name: "DeepSeek", models: "DeepSeek Chat, DeepSeek R1", logo: "/images/providers/deepseek.svg" },
  { name: "Mistral", models: "Mistral Large, Mistral Small", logo: "/images/providers/mistral.svg" },
  { name: "Qwen", models: "Qwen Max, Qwen Plus", logo: null },
  { name: "Moonshot AI", models: "Kimi K2", logo: null },
];

const COMPARISON_STEPS = [
  "Select multiple AI models from any supported provider.",
  "Enter one common prompt in the unified composer.",
  "Send the prompt to all selected models simultaneously.",
  "Receive individual responses streamed into side-by-side panels.",
  "Compare response quality, accuracy, tone, and speed.",
  "Choose the model that works best for your use case.",
];

const SUPPORTED_CONTROLS = [
  {
    icon: Sparkles,
    title: "System Prompt Editor",
    desc: "Define your agent's role, tone, policy boundaries, and response formatting rules before sending a prompt.",
  },
  {
    icon: SlidersHorizontal,
    title: "Temperature Control (0.00 – 1.00)",
    desc: "Slide between deterministic, policy-strict answers (0.20) and more expressive conversational replies.",
  },
  {
    icon: ArrowLeftRight,
    title: "Live Streaming & Compare Mode",
    desc: "Stream responses in real time and switch between single-model testing and multi-model side-by-side comparison.",
  },
];

const CONVERSATION_CAPABILITIES = [
  { icon: MessageSquare, title: "Start new conversations", desc: "Reset the workspace cleanly with one click." },
  { icon: History, title: "Continue previous conversations", desc: "Reopen prior sessions from chat history." },
  { icon: ArrowLeftRight, title: "View individual model responses", desc: "Inspect each model's answer in its own panel." },
  { icon: Copy, title: "Copy AI-generated responses", desc: "One-click clipboard copy on any output." },
  { icon: RotateCcw, title: "Regenerate responses", desc: "Re-run any individual model response on demand." },
  { icon: History, title: "Manage conversation history", desc: "Switch between saved test runs in the sidebar." },
];

const USE_CASES = [
  {
    title: "Customer Support",
    desc: "Test different models for customer question answering, policy citations, and escalation tone.",
  },
  {
    title: "Content Generation",
    desc: "Compare different writing styles, conciseness, and formatting outputs across providers.",
  },
  {
    title: "Technical Troubleshooting",
    desc: "Benchmark developer-focused models on API debugging, SDK snippets, and error resolution.",
  },
  {
    title: "Sales & Lead Qualification",
    desc: "Evaluate persuasive clarity and pricing accuracy before deploying customer-facing agents.",
  },
];

export default function AiPlaygroundPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white relative z-10">
      <Navbar />

      <main className="flex-1 ai-playground-scope">
        {/* SECTION 01: PRODUCT HERO */}
        <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/85 backdrop-blur-xs border border-[#E8E9EC] text-xs font-semibold text-[#141C2E] mb-4 shadow-2xs">
            Yedii AI Playground
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight text-[#141C2E] leading-[1.1] max-w-4xl mx-auto">
            One Platform. Multiple AI Models. Smarter Customer Support.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#565C66] max-w-2xl mx-auto leading-relaxed">
            Explore, experiment, and compare AI models in one powerful workspace. Yedii gives you
            the flexibility to test different models, refine prompts, and discover the right AI
            experience for your business.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#playground-preview"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#141C2E] text-white text-sm font-semibold hover:bg-black transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Explore AI Playground</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="https://app.yedii.com/signup"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-[#141C2E] text-sm font-semibold border border-[#E0E2E6] hover:bg-zinc-50 transition-colors inline-flex items-center justify-center shadow-2xs"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* SECTION 02: INTERACTIVE AI PLAYGROUND PREVIEW */}
        <section id="playground-preview" className="pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <ProductPlaygroundShowcase />
        </section>

        {/* SECTION 03: MODEL SELECTION FREEDOM */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/70">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099] mb-2">
                Model Selection Freedom
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141C2E]">
                Choose the AI Models That Work Best for You.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#6B7280]">
                Experiment with leading frontier and open-weight AI providers from a single unified workspace.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PROVIDERS.map((p) => (
                <div
                  key={p.name}
                  className="rounded-2xl bg-white border border-[#E8E9EC] p-5 flex items-start gap-3.5 hover:border-zinc-300 hover:shadow-xs transition-all"
                >
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={`${p.name} logo`}
                      className="w-8 h-8 rounded-lg object-contain shrink-0 border border-[#F0F1F3] p-1 bg-white"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-[#F4F5F7] border border-[#E8E9EC] text-[#141C2E] text-xs font-bold flex items-center justify-center shrink-0">
                      {p.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-[#141C2E]">{p.name}</h3>
                    <p className="text-xs text-[#6B7280] mt-1 leading-snug">{p.models}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 04: COMPARE AI MODELS SIDE BY SIDE */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/70">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
                Side-by-Side Comparison
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141C2E]">
                One Prompt. Multiple Perspectives.
              </h2>
              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
                Stop switching tabs to test prompts. Run one query across multiple models and evaluate every trade-off in seconds.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {COMPARISON_STEPS.map((stepText, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white border border-[#E8E9EC] p-4 flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-md bg-[#141C2E] text-white text-xs font-mono font-semibold flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-[#374151] leading-snug">{stepText}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 05: CUSTOMIZE YOUR AI EXPERIENCE */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/70">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099] mb-2">
                Configuration Controls
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141C2E]">
                Take Control of Your AI Responses.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#6B7280]">
                Fine-tune how models behave using the exact configuration controls built into the Yedii Playground.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {SUPPORTED_CONTROLS.map((ctrl) => {
                const Icon = ctrl.icon;
                return (
                  <div
                    key={ctrl.title}
                    className="rounded-2xl bg-white border border-[#E8E9EC] p-6 space-y-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#F4F5F7] border border-[#E8E9EC] flex items-center justify-center text-[#141C2E]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[#141C2E]">{ctrl.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{ctrl.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 06: CONVERSATION & RESPONSE MANAGEMENT */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/70">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-10">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099] mb-2">
                Conversation &amp; Response Management
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141C2E]">
                More Than Just Testing Prompts.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CONVERSATION_CAPABILITIES.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div
                    key={cap.title}
                    className="rounded-xl bg-white border border-[#E8E9EC] p-5 flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#F4F5F7] border border-[#E8E9EC] flex items-center justify-center text-[#141C2E] shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#141C2E]">{cap.title}</h3>
                      <p className="text-xs text-[#6B7280] mt-1">{cap.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 07: BUSINESS USE CASES */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/70">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099] mb-2">
                Business Use Cases
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141C2E]">
                Built for Real-World AI Workflows.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {USE_CASES.map((uc) => (
                <div
                  key={uc.title}
                  className="rounded-2xl bg-white border border-[#E8E9EC] p-6 space-y-2.5 hover:border-zinc-300 transition-colors"
                >
                  <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-[#EAF8EE] px-2 py-0.5 rounded-full">
                    <Check className="w-3 h-3" />
                    <span>Production ready</span>
                  </div>
                  <h3 className="text-base font-bold text-[#141C2E]">{uc.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
