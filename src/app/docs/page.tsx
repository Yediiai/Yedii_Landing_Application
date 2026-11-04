import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Code2,
  Cpu,
  Layers,
  FileCode,
  Shield,
  Search,
  ArrowRight,
  Terminal,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Documentation & Developer Guides | Yedii AI",
  description:
    "Official Yedii documentation. Explore quickstart tutorials, embeddable widget SDKs, REST API references, RAG knowledge base setup, and enterprise deployment guides.",
  alternates: { canonical: `${SITE_URL}/docs` },
  openGraph: {
    title: "Yedii Documentation & Developer Guides",
    description: "Build, train, and deploy autonomous enterprise AI customer support agents with our SDKs, APIs, and guides.",
    url: `${SITE_URL}/docs`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Documentation" }],
  },
};

const docCategories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    desc: "Create your workspace, understand core architecture, and launch your first AI agent in under 5 minutes.",
    articles: [
      { name: "Platform Overview & Concepts", slug: "#overview" },
      { name: "Creating Your First AI Agent", slug: "#quickstart" },
      { name: "Configuring Personas & Tone", slug: "#personas" },
      { name: "Testing in the AI Playground", slug: "#playground" },
    ],
  },
  {
    icon: Code2,
    title: "Embeddable Web Widget",
    desc: "Seamlessly integrate the customizable Yedii chat bubble and inline widget into any web framework.",
    articles: [
      { name: "HTML & Script Tag Installation", slug: "#html-script" },
      { name: "React & Next.js Component", slug: "#react-sdk" },
      { name: "Custom Styling & CSS Variables", slug: "#custom-styling" },
      { name: "User Identity & Session Verification", slug: "#user-identity" },
    ],
  },
  {
    icon: Layers,
    title: "Knowledge Base & RAG",
    desc: "Train agents on websites, documents, help centers, and database collections with zero hallucination.",
    articles: [
      { name: "Automated Website & Sitemap Crawling", slug: "#crawler" },
      { name: "Document Ingestion (PDF, DOCX, CSV)", slug: "#doc-upload" },
      { name: "Semantic Chunking & Hybrid Search", slug: "#rag-pipeline" },
      { name: "Content Sync & Webhook Refresh", slug: "#sync-refresh" },
    ],
  },
  {
    icon: FileCode,
    title: "REST API & Webhooks",
    desc: "Programmatically trigger conversations, manage agents, stream messages, and capture real-time event webhooks.",
    articles: [
      { name: "API Authentication & API Keys", slug: "#auth" },
      { name: "Send & Stream Messages Endpoint", slug: "#messages-api" },
      { name: "Agent Management Endpoints", slug: "#agents-api" },
      { name: "Configuring Webhook Event Listeners", slug: "#webhooks" },
    ],
  },
  {
    icon: Cpu,
    title: "Channel Integrations",
    desc: "Connect your AI agent to multi-channel communication networks with shared conversation context.",
    articles: [
      { name: "WhatsApp Business Cloud API", slug: "#whatsapp" },
      { name: "Slack App & Workspace Bot", slug: "#slack" },
      { name: "Zendesk & Freshdesk Inbound Sync", slug: "#helpdesk" },
      { name: "Shopify & Order Tracking Bridge", slug: "#shopify" },
    ],
  },
  {
    icon: Shield,
    title: "Security & Enterprise",
    desc: "Architecture guidelines for strict privacy, compliance certifications, and single-tenant deployments.",
    articles: [
      { name: "SOC 2 Type II Compliance & Controls", slug: "#soc2" },
      { name: "Zero Data Retention Guarantee", slug: "#data-retention" },
      { name: "Single-Tenant VPC Peering", slug: "#vpc" },
      { name: "SSO & SAML 2.0 Configuration", slug: "#sso" },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:px-8 max-w-6xl mx-auto border-b border-[#141C2E]/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C2E]/5 border border-[#141C2E]/10 text-xs font-medium text-[#141C2E] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-zinc-600" />
            Developer Documentation & Guides
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#141C2E] mb-6 font-serif">
            Yedii Technical Documentation
          </h1>
          <p className="text-lg md:text-xl text-[#141C2E]/70 max-w-3xl leading-relaxed mb-8">
            Explore guides, quickstarts, code samples, and comprehensive API references to build, customize, and deploy enterprise AI support agents.
          </p>

          {/* Quick Search Bar (Visual) */}
          <div className="relative max-w-2xl mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              readOnly
              value="Search documentation, SDKs, or API endpoints..."
              className="w-full pl-12 pr-28 py-3.5 bg-white border border-[#141C2E]/15 rounded-xl text-sm text-zinc-500 shadow-sm cursor-pointer hover:border-[#141C2E]/40 transition-colors"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-zinc-100 rounded-md text-[11px] font-mono text-zinc-500 border border-zinc-200">
              ⌘K / Ctrl+K
            </span>
          </div>

          {/* Quickstart Badges */}
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="text-zinc-500 font-medium py-1">Quick Links:</span>
            <a href="#quickstart" className="px-3 py-1 bg-white border border-[#141C2E]/10 rounded-full hover:border-[#141C2E]/30 transition-colors">
              5-Min Quickstart
            </a>
            <a href="#react-sdk" className="px-3 py-1 bg-white border border-[#141C2E]/10 rounded-full hover:border-[#141C2E]/30 transition-colors">
              React Widget SDK
            </a>
            <a href="#messages-api" className="px-3 py-1 bg-white border border-[#141C2E]/10 rounded-full hover:border-[#141C2E]/30 transition-colors">
              REST API Reference
            </a>
            <a href="#whatsapp" className="px-3 py-1 bg-white border border-[#141C2E]/10 rounded-full hover:border-[#141C2E]/30 transition-colors">
              WhatsApp Integration
            </a>
          </div>
        </section>

        {/* Documentation Categories Grid */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-serif mb-2">Explore by Category</h2>
            <p className="text-[#141C2E]/70 text-sm">Step-by-step guides structured for engineers and product teams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {docCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#141C2E]/5 border border-[#141C2E]/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#141C2E]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#141C2E] mb-2">{cat.title}</h3>
                    <p className="text-xs text-[#141C2E]/70 leading-relaxed mb-6">{cat.desc}</p>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-zinc-100">
                    {cat.articles.map((art, aIdx) => (
                      <li key={aIdx}>
                        <Link
                          href={`/docs${art.slug}`}
                          className="text-xs text-zinc-700 hover:text-black hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5 font-medium"
                        >
                          <ArrowRight className="w-3 h-3 text-zinc-400" />
                          {art.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Code Snippet / Quick Example */}
        <section className="py-16 px-4 md:px-8 bg-[#141C2E] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-mono font-semibold">
                  Embed In Seconds
                </span>
                <h2 className="text-2xl md:text-3xl font-bold font-serif mt-1">Web Chat Widget Script</h2>
                <p className="text-zinc-400 text-sm mt-1">Add this script before the closing &lt;/body&gt; tag on any webpage.</p>
              </div>
              <Link
                href="https://app.yedii.com/signup"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#141C2E] text-xs font-semibold hover:bg-zinc-100 transition-colors w-fit"
              >
                Get Agent API Key <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-[#0B0F19] rounded-xl border border-white/10 p-5 font-mono text-xs overflow-x-auto">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-zinc-400">
                <span className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" /> index.html
                </span>
                <span className="text-[11px] text-zinc-500">HTML5 / Modern Browsers</span>
              </div>
              <pre className="text-zinc-200 leading-relaxed">
{`<!-- Yedii AI Chat Widget -->
<script
  src="https://cdn.yedii.com/widget/v1/yedii-chat.js"
  data-agent-id="agt_live_9482710492"
  data-primary-color="#141C2E"
  data-position="bottom-right"
  async
></script>`}
              </pre>
            </div>
          </div>
        </section>

        {/* Help & Support Banner */}
        <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="bg-white border border-[#141C2E]/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
            <div>
              <h3 className="text-2xl font-bold font-serif mb-2">Need dedicated developer support?</h3>
              <p className="text-[#141C2E]/70 text-sm max-w-xl">
                Join our developer Discord, review troubleshooting articles in the Help Center, or talk directly with our solutions architects.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/help-center"
                className="px-5 py-3 rounded-xl bg-[#141C2E] text-white text-xs font-semibold hover:bg-[#141C2E]/90 transition-colors"
              >
                Visit Help Center
              </Link>
              <Link
                href="https://discord.gg/yedii"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-white border border-[#141C2E]/15 text-[#141C2E] text-xs font-semibold hover:bg-zinc-50 transition-colors"
              >
                Join Discord <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
