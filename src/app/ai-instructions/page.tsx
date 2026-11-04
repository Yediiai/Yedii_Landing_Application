import type { Metadata } from "next";
import {
  Sliders,
  ShieldAlert,
  Sparkles,
  Code2,
  Terminal,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "AI Instructions & System Prompt Best Practices | Yedii",
  description:
    "Learn how to craft bulletproof system instructions, configure personas, enforce strict safety guardrails, and prevent prompt injection in Yedii AI agents.",
  alternates: { canonical: `${SITE_URL}/ai-instructions` },
  openGraph: {
    title: "Yedii AI Instructions & System Prompt Guide",
    description: "Best practices for calibrating AI personas, instructions, and guardrails for enterprise support.",
    url: `${SITE_URL}/ai-instructions`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii AI Instructions" }],
  },
};

export default function AiInstructionsPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white">
      <Navbar />

      <main className="flex-1">
        <section className="pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto border-b border-[#141C2E]/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C2E]/5 border border-[#141C2E]/10 text-xs font-medium text-[#141C2E] mb-6">
            <Sliders className="w-3.5 h-3.5 text-zinc-600" />
            Prompt Engineering & Governance
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#141C2E] mb-6 font-serif">
            AI Instructions & Personas
          </h1>
          <p className="text-lg md:text-xl text-[#141C2E]/70 max-w-2xl leading-relaxed mb-8">
            How to configure concise system instructions, calibrate tone, set strict boundary conditions, and test agent resilience before deployment.
          </p>
        </section>

        {/* Blueprint Section */}
        <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-serif mb-2">Recommended Enterprise Prompt Template</h2>
            <p className="text-xs md:text-sm text-[#141C2E]/70">
              Copy this standard structure into your agent settings inside the Yedii dashboard.
            </p>
          </div>

          <div className="bg-[#141C2E] text-white rounded-2xl p-6 font-mono text-xs mb-12 shadow-sm overflow-x-auto">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10 text-zinc-400">
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" /> system_prompt_blueprint.md
              </span>
              <span className="text-emerald-400 font-sans text-[11px]">Production Standard</span>
            </div>
            <pre className="text-zinc-200 leading-relaxed">
{`# ROLE & IDENTITY
You are the official Senior Technical Support Agent for [Company Name].
Your goal is to assist customers accurately, politely, and concisely.

# CORE OPERATING PRINCIPLES
1. Strict Grounding: Rely ONLY on facts retrieved from the attached Knowledge Base.
2. Citation Transparency: When answering questions, cite the source document.
3. Fallback Integrity: If the answer cannot be verified from the sources, state:
   "I don't have verified information on that in our documentation. Would you like me to connect you with our human team?"
4. No Speculation: Never invent API endpoints, pricing tiers, or unreleased feature timelines.

# TONE & STYLE
- Professional, helpful, objective, and empathetic.
- Format code snippets using proper syntax highlighting blocks.
- Keep responses under 4 paragraphs unless the user requests a deep-dive walkthrough.`}
            </pre>
          </div>

          {/* Prompt Defense Guidelines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="font-bold text-base mb-2">Prompt Injection Defense</h3>
              <p className="text-xs text-[#141C2E]/70 leading-relaxed">
                Yedii sanitizes user inputs through an automated safety layer that strips jailbreak patterns and adversarial override attempts.
              </p>
            </div>

            <div className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="font-bold text-base mb-2">Interactive AI Playground</h3>
              <p className="text-xs text-[#141C2E]/70 leading-relaxed">
                Test instructions in a safe sandbox before saving changes to production agents. Inspect exact prompt assembly tokens.
              </p>
            </div>

            <div className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="font-bold text-base mb-2">Dynamic Session Variables</h3>
              <p className="text-xs text-[#141C2E]/70 leading-relaxed">
                Pass contextual user attributes like plan tier, email, and user ID directly into the agent&apos;s working memory.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
