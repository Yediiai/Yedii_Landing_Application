import type { Metadata } from "next";
import {
  Database,
  FileText,
  Globe2,
  RefreshCw,
  Lock,
  Layers,
} from "lucide-react";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";
import { DedicatedPageTemplate } from "@/components/templates/DedicatedPageTemplate";

export const metadata: Metadata = {
  title: "Knowledge Base & RAG | Document Grounding for AI Agents",
  description:
    "Connect websites, PDFs, Notion, Confluence, and databases to power autonomous AI agents with verified, hallucination-free knowledge in Yedii.",
  alternates: { canonical: `${SITE_URL}/knowledge-base` },
  openGraph: {
    title: "Knowledge Base & RAG | Yedii",
    description: "Enterprise vector ingestion, semantic chunking, and deterministic RAG grounding for AI agents.",
    url: `${SITE_URL}/knowledge-base`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Knowledge Base & RAG" }],
  },
};

export default function KnowledgeBasePage() {
  return (
    <DedicatedPageTemplate
      badge={{
        icon: Database,
        text: "Enterprise RAG • Document Ingestion & Vector Grounding",
      }}
      hero={{
        title: "Ground your AI agents on your verified institutional data",
        subtitle:
          "Connect Notion handbooks, technical PDFs, product catalog CSVs, and public websites. Yedii automatically chunks, embeds, and indexes your content into isolated vector stores for instant, cited customer answers.",
        primaryCta: { text: "Connect Your Documents", href: "https://app.yedii.com/signup" },
        secondaryCta: { text: "See Platform Overview", href: "/customer-support-platform" },
      }}
      mockPreview={
        <div className="bg-[#111827] rounded-[14px] p-6 text-white font-mono text-xs space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-zinc-300 font-semibold text-sm">Active Knowledge Ingestion Pipeline</span>
            <span className="text-emerald-400 font-semibold">Sync Status: Real-time Active</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1">
            <div className="p-3 bg-white/5 rounded-[10px] border border-white/10">
              <span className="text-zinc-400 block text-[11px]">PDFs &amp; Handbooks</span>
              <span className="text-base font-bold text-white mt-1 block">48 Files</span>
              <span className="text-[10px] text-emerald-400">12,400 Chunks Indexed</span>
            </div>
            <div className="p-3 bg-white/5 rounded-[10px] border border-white/10">
              <span className="text-zinc-400 block text-[11px]">Website Crawl</span>
              <span className="text-base font-bold text-white mt-1 block">214 URLs</span>
              <span className="text-[10px] text-emerald-400">Auto-Syncs Weekly</span>
            </div>
            <div className="p-3 bg-white/5 rounded-[10px] border border-white/10">
              <span className="text-zinc-400 block text-[11px]">Notion Workspace</span>
              <span className="text-base font-bold text-white mt-1 block">Connected</span>
              <span className="text-[10px] text-emerald-400">Webhook Triggered</span>
            </div>
            <div className="p-3 bg-white/5 rounded-[10px] border border-white/10">
              <span className="text-zinc-400 block text-[11px]">Zero Data Retention</span>
              <span className="text-base font-bold text-emerald-400 mt-1 block">Guaranteed</span>
              <span className="text-[10px] text-zinc-400">Isolated Tenant Partition</span>
            </div>
          </div>
        </div>
      }
      problemSolution={{
        title: "The foundation of trusted AI is verified data grounding",
        subtitle:
          "Without accurate source retrieval, AI models invent facts, quote outdated prices, and frustrate customers.",
        items: [
          {
            problem: "Fine-tuning models on raw documents is expensive, slow, and impossible to update in real time.",
            solution: "Yedii RAG updates embeddings dynamically within seconds of uploading a new document revision.",
            benefit: "Instant Knowledge Updates",
          },
          {
            problem: "Naïve text splitting cuts off context in the middle of sentences or loses table structure.",
            solution: "Semantic layout-aware chunking preserves table formats, bullet hierarchies, and code blocks.",
            benefit: "High-Fidelity Retrieval",
          },
          {
            problem: "Mixed customer data creates cross-tenant leakage risks in shared vector databases.",
            solution: "Dedicated tenant namespaces isolate every customer's embeddings with military-grade encryption.",
            benefit: "Absolute Data Isolation",
          },
        ],
      }}
      features={{
        title: "Enterprise vector pipelines built for speed and precision",
        subtitle: "From raw unstructured documents to deterministic source citations.",
        items: [
          {
            icon: FileText,
            title: "Multi-Format File Ingestion",
            desc: "Natively parse and index PDFs, DOCX, CSV, Markdown, plain text, and internal policy documents.",
            value: "Universal format compatibility",
          },
          {
            icon: Globe2,
            title: "Automated Website Crawler",
            desc: "Point Yedii to your documentation or help center URL to index pages with scheduled recrawls.",
            value: "Zero-effort documentation sync",
          },
          {
            icon: RefreshCw,
            title: "Real-Time Notion & Confluence Sync",
            desc: "Connect team workspaces via webhooks so document edits reflect in your agent's answers immediately.",
            value: "Always-current company memory",
          },
          {
            icon: Layers,
            title: "Semantic Chunking & Reranking",
            desc: "Advanced hybrid search (BM25 keyword + dense semantic vector) retrieves the highest-relevance passages.",
            value: "Top-ranked passage retrieval",
          },
          {
            icon: Lock,
            title: "Strict Tenant Partitioning",
            desc: "Vector databases are logically and physically partitioned per customer with encryption at rest and in transit.",
            value: "SOC 2 Type II compliant",
          },
          {
            icon: Database,
            title: "Live Citation Footnotes",
            desc: "Every answer generated includes direct reference links to the exact source document and page number.",
            value: "100% auditability & trust",
          },
        ],
      }}
      howItWorks={{
        title: "How Yedii ingests and retrieves your company knowledge",
        subtitle: "A modern automated vector pipeline operating behind the scenes.",
        steps: [
          {
            step: "01",
            title: "Upload or Connect",
            desc: "Drag-and-drop your company handbooks or paste your website URL into the Yedii dashboard.",
            badge: "Multi-Source",
          },
          {
            step: "02",
            title: "Semantic Chunking",
            desc: "Yedii extracts text, parses tables, and divides content into coherent semantic embedding passages.",
            badge: "Layout-Aware",
          },
          {
            step: "03",
            title: "Vector Indexing",
            desc: "High-dimensional embeddings are generated and stored in your dedicated private vector namespace.",
            badge: "Sub-Second Ingestion",
          },
          {
            step: "04",
            title: "Grounded Retrieval",
            desc: "When customers ask questions, the agent retrieves verified passages and synthesizes an accurate reply.",
            badge: "Cited Answers",
          },
        ],
      }}
      useCases={{
        title: "Knowledge bases in active enterprise production",
        subtitle: "How organizations turn scattered documentation into unified conversational agents.",
        items: [
          {
            industry: "B2B SaaS",
            title: "400-Page Internal Notion Handbook",
            desc: "Attio connected their internal onboarding and product handbook so customer agents answer complex integration questions.",
            outcome: "74% tier-1 deflection with verified citations",
          },
          {
            industry: "Cloud Infrastructure",
            title: "Kubernetes & GitHub Documentation",
            desc: "HyperCloud connected technical architectural guides so developers receive accurate code guidance without hallucinations.",
            outcome: "320+ engineering hours saved quarterly",
          },
          {
            industry: "Regulated FinTech",
            title: "Compliance & Banking Policy Manuals",
            desc: "Nova FinTech ingested strict regulatory documentation with zero model retention to ensure compliance across 2.5M transactions.",
            outcome: "0 compliance or privacy breaches",
          },
        ],
      }}
      benefits={{
        title: "The business value of grounded institutional knowledge",
        subtitle: "Turn stagnant documents into dynamic, 24/7 self-service customer answers.",
        items: [
          { value: "0", label: "Hallucinations", desc: "Every word grounded exclusively on approved sources." },
          { value: "< 200ms", label: "Vector Search Latency", desc: "Instant semantic retrieval across millions of tokens." },
          { value: "100%", label: "Data Isolation", desc: "Customer records never shared or used to train public LLMs." },
          { value: "Auto", label: "Continuous Sync", desc: "Always up-to-date with your latest product and pricing revisions." },
        ],
      }}
      faqs={{
        title: "Knowledge Base & RAG FAQs",
        subtitle: "Common technical questions regarding data ingestion and security.",
        items: [
          {
            q: "How large of a document library can Yedii index?",
            a: "Yedii can index everything from a single 5-page PDF to enterprise repositories with hundreds of thousands of pages across multiple formats.",
          },
          {
            q: "Can I remove or update documents after indexing?",
            a: "Yes. You can delete or replace documents at any time. When deleted, associated vector embeddings are purged from the vector store immediately.",
          },
          {
            q: "Does Yedii support password-protected internal web pages?",
            a: "Yes. Our enterprise connector supports custom HTTP headers and basic authentication to securely crawl internal wikis and intranet portals.",
          },
          {
            q: "Are citations visible to customers in the web widget?",
            a: "Yes, you can toggle citation visibility. When enabled, customers can click citation chips to view reference document excerpts and URLs.",
          },
        ],
      }}
      cta={{
        title: "Connect your knowledge base in 5 minutes",
        subtitle: "Upload your first PDF or connect your website URL for free with our 14-day trial.",
        primaryText: "Upload Documents Now",
        primaryHref: "https://app.yedii.com/signup",
      }}
    />
  );
}

