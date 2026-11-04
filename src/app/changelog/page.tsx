import type { Metadata } from "next";
import Link from "next/link";
import {
  History,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Product Changelog & Release Notes | Yedii",
  description:
    "Explore the latest product updates, new agent features, RAG pipeline improvements, and platform performance enhancements on Yedii.",
  alternates: { canonical: `${SITE_URL}/changelog` },
  openGraph: {
    title: "Yedii Product Changelog & Release Updates",
    description: "Stay up to date with new features, integration rollouts, and improvements across the Yedii platform.",
    url: `${SITE_URL}/changelog`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Changelog" }],
  },
};

const releases = [
  {
    version: "v2.4.0",
    date: "October 24, 2026",
    badge: "Current Release",
    summary: "WhatsApp Business API Cloud bridge, streaming citation popovers, and 2x faster RAG vector indexing.",
    changes: [
      {
        type: "new",
        text: "Official WhatsApp Business Cloud API integration: route incoming customer WhatsApp messages directly to autonomous support agents.",
      },
      {
        type: "new",
        text: "Streaming Citation Popovers: chat widget now highlights exact source chunks in real time as the agent streams answers.",
      },
      {
        type: "improved",
        text: "Document indexing pipeline updated with AST-aware markdown and PDF chunking, increasing technical code retrieval accuracy by 38%.",
      },
      {
        type: "fixed",
        text: "Resolved an issue where session tokens expired prematurely during long-running multi-turn playground sessions.",
      },
    ],
  },
  {
    version: "v2.3.0",
    date: "September 30, 2026",
    badge: "Feature Release",
    summary: "AI Playground interactive testing suite, multi-persona switcher, and custom domain widget whitelisting.",
    changes: [
      {
        type: "new",
        text: "Interactive AI Playground: simulate customer queries, test system instructions, inspect confidence scores, and preview widget UI.",
      },
      {
        type: "new",
        text: "Domain whitelisting security controls in workspace settings: restrict widget script execution to approved domain origins.",
      },
      {
        type: "improved",
        text: "Widget bundle payload reduced to under 38KB gzipped, resulting in sub-50ms first-contentful-paint on mobile browsers.",
      },
      {
        type: "fixed",
        text: "Corrected timestamp formatting discrepancy in webhook delivery payloads for UTC+0 timezone subscribers.",
      },
    ],
  },
  {
    version: "v2.2.0",
    date: "August 20, 2026",
    badge: "Enterprise Release",
    summary: "Single-tenant VPC peering support, SOC 2 Type II audit report availability, and Slack bot bidirectional synchronization.",
    changes: [
      {
        type: "new",
        text: "Slack Bot integration: invite @Yedii to internal triage channels to automatically assist engineers and customer support reps.",
      },
      {
        type: "new",
        text: "Enterprise Single-Tenant VPC deployment option on AWS and Google Cloud with signed BAA agreements.",
      },
      {
        type: "improved",
        text: "Automated sitemap crawler now supports incremental updates, indexing only modified pages rather than re-crawling entire domains.",
      },
      {
        type: "fixed",
        text: "Fixed edge case in table rendering within the widget where complex nested tables caused horizontal scrolling overflow.",
      },
    ],
  },
  {
    version: "v2.1.0",
    date: "July 15, 2026",
    badge: "RAG & Integrations",
    summary: "Shopify order status lookup tool, hybrid dense + sparse vector search, and customizable CSS theme variables.",
    changes: [
      {
        type: "new",
        text: "Shopify Store Connector: enables AI agents to verify order status, track tracking numbers, and process FAQ returns automatically.",
      },
      {
        type: "new",
        text: "Hybrid Search Engine: combining BM25 keyword matching with dense embedding vectors for industry-specific terminology.",
      },
      {
        type: "improved",
        text: "Expanded custom CSS variables allowing full customization of launcher buttons, header branding, and font families.",
      },
      {
        type: "fixed",
        text: "Resolved rate limit retry backoff logic on upstream model provider fallback triggers.",
      },
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:px-8 max-w-4xl mx-auto border-b border-[#141C2E]/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C2E]/5 border border-[#141C2E]/10 text-xs font-medium text-[#141C2E] mb-6">
            <History className="w-3.5 h-3.5 text-zinc-600" />
            Product Updates & Release Log
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#141C2E] mb-6 font-serif">
            Changelog
          </h1>
          <p className="text-lg md:text-xl text-[#141C2E]/70 max-w-2xl leading-relaxed">
            Follow our weekly updates, feature releases, API improvements, and architectural milestones as we build the next-generation AI support platform.
          </p>
        </section>

        {/* Timeline Section */}
        <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
          <div className="space-y-12 relative before:absolute before:inset-0 before:left-4 md:before:left-32 before:w-0.5 before:bg-zinc-200">
            {releases.map((rel, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                {/* Date & Version column */}
                <div className="md:w-28 flex-shrink-0 pl-10 md:pl-0">
                  <div className="font-mono text-xs font-bold text-[#141C2E]">{rel.version}</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{rel.date}</div>
                </div>

                {/* Timeline node icon */}
                <div className="absolute left-2.5 md:left-30.5 top-0.5 w-3.5 h-3.5 rounded-full bg-[#141C2E] border-4 border-[#FDFBF7] ring-1 ring-[#141C2E]/30" />

                {/* Release Card */}
                <div className="flex-1 bg-white border border-[#141C2E]/10 rounded-2xl p-6 md:p-8 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {rel.badge}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">Production Build</span>
                  </div>

                  <p className="text-sm text-zinc-700 font-medium mb-6 leading-relaxed">
                    {rel.summary}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-zinc-100">
                    {rel.changes.map((ch, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs text-zinc-700">
                        <span
                          className={`uppercase text-[10px] font-mono font-bold px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5 ${
                            ch.type === "new"
                              ? "bg-blue-50 text-blue-700 border border-blue-200"
                              : ch.type === "improved"
                              ? "bg-purple-50 text-purple-700 border border-purple-200"
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}
                        >
                          {ch.type}
                        </span>
                        <span className="leading-relaxed">{ch.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 px-4 md:px-8 bg-[#141C2E] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-3">
              Want to request a feature or integration?
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm max-w-xl mx-auto mb-6">
              Our engineering team ships weekly updates based directly on customer feedback and enterprise requirements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="https://app.yedii.com/signup"
                className="px-5 py-3 rounded-xl bg-white text-[#141C2E] text-xs font-semibold hover:bg-zinc-100 transition-colors"
              >
                Try Latest Release Free
              </Link>
              <a
                href="mailto:product@yedii.com"
                className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/15 transition-colors"
              >
                Submit Feature Request
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
