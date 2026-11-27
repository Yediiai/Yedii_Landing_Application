import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, ShieldCheck, Globe, Smile } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductAnalyticsShowcase } from "@/components/analytics/ProductAnalyticsShowcase";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Agent Analytics | Resolution Rates, Sentiment & CSAT",
  description:
    "Monitor AI agent resolution rates, conversation volume, customer satisfaction, confidence scores, and geographic usage in real time.",
  alternates: { canonical: `${SITE_URL}/agent-analytics` },
  openGraph: {
    title: "Yedii Agent Analytics | Real-Time AI Support Insights",
    description:
      "Filter by AI agent and date range to measure resolution rates, sentiment, and user satisfaction.",
    url: `${SITE_URL}/agent-analytics`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Agent Analytics" }],
  },
};

const ANALYTICS_PILLARS = [
  {
    icon: BarChart3,
    title: "Conversation & Message Volume",
    desc: "Track daily conversation and message trends filtered by individual AI agent and custom date ranges.",
  },
  {
    icon: ShieldCheck,
    title: "AI Resolution & Confidence",
    desc: "Measure how many inquiries are resolved autonomously vs. escalated, alongside retrieval confidence.",
  },
  {
    icon: Smile,
    title: "Sentiment & User Satisfaction",
    desc: "Monitor customer satisfaction (CSAT) and positive/negative sentiment shifts across support threads.",
  },
  {
    icon: Globe,
    title: "Usage by Country",
    desc: "See where your customers are reaching out from to optimize regional coverage and language support.",
  },
];

export default function AgentAnalyticsPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white relative z-10">
      <Navbar />

      <main className="flex-1 product-showcase-scope">
        {/* Hero */}
        <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/85 border border-[#E8E9EC] text-xs font-semibold text-[#141C2E] mb-4 shadow-2xs">
            Agent Analytics
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight text-[#141C2E] leading-[1.1] max-w-4xl mx-auto">
            Measure Resolution, Sentiment, and AI Performance in Real Time.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#565C66] max-w-2xl mx-auto leading-relaxed">
            Understand how your AI agents perform across every conversation. Filter by agent and
            time range to track resolution rates, confidence scores, and customer satisfaction.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#analytics-preview"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#141C2E] text-white text-sm font-semibold hover:bg-black transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Explore Agent Analytics</span>
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

        {/* Interactive Showcase */}
        <section id="analytics-preview" className="pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <ProductAnalyticsShowcase />
        </section>

        {/* Pillars */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/70">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099] mb-2">
                Actionable Insights
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141C2E]">
                Everything You Need to Optimize Support.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {ANALYTICS_PILLARS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white border border-[#E8E9EC] p-6 space-y-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#F4F5F7] border border-[#E8E9EC] flex items-center justify-center text-[#141C2E]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[#141C2E]">{item.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
