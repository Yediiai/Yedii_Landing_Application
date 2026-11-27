import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductBuilderShowcase } from "@/components/builder/ProductBuilderShowcase";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Builder | Build, Customize, and Deploy Your AI Support Agent",
  description:
    "Create intelligent AI agents with powerful configuration tools, knowledge management, model selection, and a fully customizable chat experience.",
  alternates: { canonical: `${SITE_URL}/builder` },
  openGraph: {
    title: "Yedii Builder | Create & Customize AI Agents",
    description:
      "Configure agent roles, connect knowledge sources, customize chat appearance, test in Playground, and deploy anywhere.",
    url: `${SITE_URL}/builder`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Builder" }],
  },
};

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white relative z-10">
      <Navbar />

      <main className="flex-1 product-showcase-scope">
        {/* Section 01 – Hero */}
        <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/85 border border-[#E8E9EC] text-xs font-semibold text-[#141C2E] mb-4 shadow-2xs">
            Yedii Builder
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight text-[#141C2E] leading-[1.1] max-w-4xl mx-auto">
            Build, Customize, and Deploy Your AI Support Agent.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#565C66] max-w-2xl mx-auto leading-relaxed">
            Create intelligent AI agents for your business with powerful configuration tools,
            knowledge management, model selection, and a fully customizable customer experience.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#builder-workspace"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#141C2E] text-white text-sm font-semibold hover:bg-black transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Explore Builder</span>
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

        {/* Section 02 – Builder Workspace */}
        <section id="builder-workspace" className="pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <ProductBuilderShowcase />
        </section>

        {/* Final CTA */}
        <section className="pb-20 pt-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="rounded-2xl bg-black border border-[#1C1C1E] text-white p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
            <div className="max-w-xl space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Your AI Support Agent Starts Here.
              </h2>
              <p className="text-sm sm:text-base text-zinc-300">
                Build your AI agent, connect your knowledge, customize its experience, and bring
                intelligent customer support to your business.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="#builder-workspace"
                className="px-5 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Explore Builder</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="https://app.yedii.com/signup"
                className="px-5 py-3 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
