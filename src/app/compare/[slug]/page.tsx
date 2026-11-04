import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Layers,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";
import { getComparisonBySlug } from "@/data/comparisons";
import { ComparisonTemplate } from "@/components/comparison/ComparisonTemplate";

interface LegacyCompareData {
  competitorName: string;
  title: string;
  subtitle: string;
  description: string;
  seoDescription: string;
  table: Array<{
    feature: string;
    yedii: string;
    competitor: string;
    highlight?: boolean;
  }>;
}

const legacyMap: Record<string, LegacyCompareData> = {
  ahrefs: {
    competitorName: "Ahrefs",
    title: "Yedii vs Ahrefs: Why AI Visibility & Support Beats Keyword-Only SEO",
    subtitle:
      "Ahrefs excels at traditional Google rank tracking and backlink analysis. Yedii is built for the post-search era—tracking LLM answers across ChatGPT, Gemini, and Claude while deploying 24/7 autonomous support agents.",
    description:
      "Compare Yedii and Ahrefs side-by-side to discover why modern growth and support teams combine AI search visibility with conversational support automation.",
    seoDescription:
      "Yedii vs Ahrefs comparison. See how Yedii provides LLM search analytics and autonomous AI customer support agents compared to traditional Google backlink tracking.",
    table: [
      { feature: "AI Answer Engine Tracking (ChatGPT, Gemini, Claude)", yedii: "Native 24/7 Telemetry", competitor: "Not Supported", highlight: true },
      { feature: "Autonomous Customer Support AI Agents", yedii: "Included with RAG Pipeline", competitor: "Not Supported", highlight: true },
      { feature: "Embeddable Web Chat & WhatsApp Integration", yedii: "Yes (Multi-channel)", competitor: "No", highlight: true },
      { feature: "Traditional Google SERP & Backlink Indexes", yedii: "AI-First Hybrid Insights", competitor: "Comprehensive Index", highlight: false },
      { feature: "Real-time Grounded RAG Knowledge Base", yedii: "Sub-minute Sync", competitor: "Static Crawl Data", highlight: true },
      { feature: "Zero Data Retention & Enterprise Privacy", yedii: "Enterprise VPC & SOC 2", competitor: "Shared Multi-tenant", highlight: false },
    ],
  },
  profound: {
    competitorName: "Profound",
    title: "Yedii vs Profound: Enterprise AI Search Analytics & Full-Stack Agents",
    subtitle:
      "While Profound provides point-solution AI visibility metrics, Yedii pairs real-time LLM answer engine intelligence with an autonomous customer support and conversion engine that closes the loop from discovery to revenue.",
    description:
      "A complete breakdown of Yedii versus Profound for tracking brand citations across generative AI engines and automating customer resolutions.",
    seoDescription:
      "Compare Yedii vs Profound. Discover why companies choose Yedii for combined AI search visibility analytics and autonomous customer support agents.",
    table: [
      { feature: "LLM Visibility & Citation Tracking", yedii: "Complete Engine Coverage", competitor: "Engine Analytics Only", highlight: false },
      { feature: "Built-in Autonomous Support Resolution", yedii: "Autonomous Multi-Agent", competitor: "No Support Workflows", highlight: true },
      { feature: "Interactive AI Testing Playground", yedii: "Live Prompt & RAG Sandbox", competitor: "Dashboard Analytics Only", highlight: true },
      { feature: "Omnichannel Connectors (WhatsApp & Slack)", yedii: "Native 1-Click Connect", competitor: "Third-party Zapier only", highlight: true },
      { feature: "Hybrid Dense + Sparse Vector Retrieval", yedii: "Sub-50ms RAG Latency", competitor: "N/A (No agent runtime)", highlight: true },
      { feature: "Pricing Transparency & Flexible Tiers", yedii: "Transparent monthly/annual", competitor: "Custom Quote Gated", highlight: true },
    ],
  },
  semrush: {
    competitorName: "Semrush",
    title: "Yedii vs Semrush: The Modern Shift from Keyword Bidding to AI Search Discovery",
    subtitle:
      "Semrush dominates traditional PPC and search volume estimates. Yedii empowers forward-thinking brands to capture AI generative engine mentions and turn website visitors into loyal customers with autonomous support.",
    description:
      "Explore how Yedii replaces bloated legacy SEO toolsets with modern AI search analytics and autonomous customer support agents.",
    seoDescription:
      "Yedii vs Semrush comparison. Learn the difference between legacy Google keyword volume tools and real-time AI answer engine tracking with autonomous support agents.",
    table: [
      { feature: "Generative AI Search Monitoring (Perplexity, ChatGPT)", yedii: "Real-time AI Sentiment & Citations", competitor: "Beta / Limited Overview", highlight: true },
      { feature: "Autonomous Customer Support Platform", yedii: "Full Multi-Agent Suite", competitor: "Not Supported", highlight: true },
      { feature: "Codebase & Documentation Ingestion for RAG", yedii: "Automated Semantic Parser", competitor: "Not Supported", highlight: true },
      { feature: "Legacy Google AdWords & PPC Research", yedii: "Focus on Organic AI Discovery", competitor: "Extensive Historical Database", highlight: false },
      { feature: "Website Chat Widget with Custom Personas", yedii: "Production-ready Web SDK", competitor: "Not Supported", highlight: true },
      { feature: "Single-Tenant VPC Enterprise Deployment", yedii: "AWS & GCP Dedicated VPC", competitor: "SaaS Only", highlight: false },
    ],
  },
};

export async function generateStaticParams() {
  return [
    { slug: "ahrefs" },
    { slug: "profound" },
    { slug: "semrush" },
    { slug: "intercom" },
    { slug: "zendesk" },
    { slug: "freshdesk" },
    { slug: "tidio" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fullComp = getComparisonBySlug(slug);

  if (fullComp) {
    return {
      title: fullComp.meta.title,
      description: fullComp.meta.description,
      keywords: fullComp.meta.keywords,
      alternates: { canonical: `${SITE_URL}/compare/${slug}` },
      openGraph: {
        title: fullComp.meta.title,
        description: fullComp.meta.description,
        url: `${SITE_URL}/compare/${slug}`,
        siteName: SITE_NAME,
        type: "website",
        images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: fullComp.meta.title }],
      },
    };
  }

  const legacy = legacyMap[slug];
  if (!legacy) {
    return { title: "Comparison | Yedii" };
  }

  return {
    title: `${legacy.competitorName} Alternative & Comparison | Yedii`,
    description: legacy.seoDescription,
    alternates: { canonical: `${SITE_URL}/compare/${slug}` },
    openGraph: {
      title: `${legacy.competitorName} Alternative & Side-by-Side Comparison | Yedii`,
      description: legacy.seoDescription,
      url: `${SITE_URL}/compare/${slug}`,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `Yedii vs ${legacy.competitorName}` }],
    },
  };
}

export default async function CompareDynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fullComp = getComparisonBySlug(slug);

  if (fullComp) {
    return <ComparisonTemplate comparison={fullComp} />;
  }

  const data = legacyMap[slug];
  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto border-b border-[#141C2E]/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C2E]/5 border border-[#141C2E]/10 text-xs font-medium text-[#141C2E] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-zinc-600" />
            Product Comparison • Yedii vs {data.competitorName}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#141C2E] mb-6 font-serif leading-tight">
            {data.title}
          </h1>
          <p className="text-base md:text-lg text-[#141C2E]/70 max-w-3xl leading-relaxed mb-8">
            {data.subtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="https://app.yedii.com/signup"
              className="px-5 py-3 rounded-xl bg-[#141C2E] text-white text-xs font-semibold hover:bg-[#141C2E]/90 transition-colors inline-flex items-center gap-2"
            >
              Start Free with Yedii <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="px-5 py-3 rounded-xl bg-white border border-[#141C2E]/15 text-[#141C2E] text-xs font-semibold hover:bg-zinc-50 transition-colors"
            >
              View Transparent Pricing
            </Link>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold font-serif mb-2">Side-by-Side Capability Comparison</h2>
            <p className="text-xs md:text-sm text-[#141C2E]/70">
              How Yedii stacks up against {data.competitorName} across modern AI intelligence and autonomous support.
            </p>
          </div>

          <div className="bg-white border border-[#141C2E]/15 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 bg-zinc-50 border-b border-[#141C2E]/10 p-4 text-xs font-semibold text-[#141C2E]">
              <div className="col-span-6 md:col-span-5">Feature &amp; Capability</div>
              <div className="col-span-3 md:col-span-3 text-emerald-800 font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> Yedii AI
              </div>
              <div className="col-span-3 md:col-span-4 text-zinc-600">{data.competitorName}</div>
            </div>

            <div className="divide-y divide-zinc-100">
              {data.table.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-12 p-4 text-xs items-center ${
                    row.highlight ? "bg-emerald-50/20" : ""
                  }`}
                >
                  <div className="col-span-6 md:col-span-5 font-medium text-zinc-900 pr-2">
                    {row.feature}
                  </div>
                  <div className="col-span-3 md:col-span-3 font-semibold text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{row.yedii}</span>
                  </div>
                  <div className="col-span-3 md:col-span-4 text-zinc-500">
                    {row.competitor === "Not Supported" || row.competitor === "No" ? (
                      <span className="text-zinc-400 flex items-center gap-1">
                        <XCircle className="w-3.5 h-3.5 text-zinc-300 flex-shrink-0" /> {row.competitor}
                      </span>
                    ) : (
                      <span>{row.competitor}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Yedii Section */}
        <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto border-t border-[#141C2E]/10">
          <h2 className="text-2xl font-bold font-serif mb-8 text-center">
            Why Modern Brands Switch to Yedii
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-emerald-700" />
              </div>
              <h3 className="font-bold text-base mb-2">Autonomous Resolution</h3>
              <p className="text-xs text-[#141C2E]/70 leading-relaxed">
                Yedii resolves customer support questions directly from your documentation, freeing human agents for complex escalations.
              </p>
            </div>

            <div className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="font-bold text-base mb-2">Zero-Hallucination RAG</h3>
              <p className="text-xs text-[#141C2E]/70 leading-relaxed">
                Connect your product docs, APIs, and guidelines. Every response includes verified source citations for enterprise reliability.
              </p>
            </div>

            <div className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-purple-700" />
              </div>
              <h3 className="font-bold text-base mb-2">Enterprise-Grade Security</h3>
              <p className="text-xs text-[#141C2E]/70 leading-relaxed">
                Single-tenant VPC deployments, zero data training on your proprietary data, and SOC 2 Type II compliance controls.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 md:px-8 bg-[#141C2E] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-3">
              Ready to upgrade to next-generation AI support?
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm max-w-xl mx-auto mb-6">
              Deploy your first AI agent in under 5 minutes without writing code.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="https://app.yedii.com/signup"
                className="px-5 py-3 rounded-xl bg-white text-[#141C2E] text-xs font-semibold hover:bg-zinc-100 transition-colors"
              >
                Create Free Agent Now
              </Link>
              <Link
                href="/customer-support-platform"
                className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold hover:bg-white/15 transition-colors"
              >
                Explore Support Platform
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
