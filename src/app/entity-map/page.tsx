import type { Metadata } from "next";
import {
  Network,
  Database,
  Cpu,
  Layers,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Entity Map & Semantic Graph Architecture | Yedii",
  description:
    "Discover how Yedii maps enterprise knowledge graphs, brand entities, and vector clusters so LLMs accurately understand your product taxonomy.",
  alternates: { canonical: `${SITE_URL}/entity-map` },
  openGraph: {
    title: "Yedii Entity Map & Knowledge Graph",
    description: "Semantic entity mapping and vector clustering for zero-hallucination AI support.",
    url: `${SITE_URL}/entity-map`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Yedii Entity Map" }],
  },
};

export default function EntityMapPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white">
      <Navbar />

      <main className="flex-1">
        <section className="pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto border-b border-[#141C2E]/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C2E]/5 border border-[#141C2E]/10 text-xs font-medium text-[#141C2E] mb-6">
            <Network className="w-3.5 h-3.5 text-zinc-600" />
            Knowledge Graph & Semantic Topology
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#141C2E] mb-6 font-serif">
            Yedii Entity Map
          </h1>
          <p className="text-lg md:text-xl text-[#141C2E]/70 max-w-2xl leading-relaxed mb-8">
            How Yedii converts disparate company documents, APIs, and help articles into structured semantic knowledge graphs that answer engines and support agents understand deterministically.
          </p>
        </section>

        {/* Visual Graph Simulator */}
        <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
          <div className="bg-[#141C2E] rounded-2xl p-8 text-white mb-12 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="font-mono text-xs text-zinc-300">Live Semantic Cluster Topology</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400">Embedding Dimension: 1536d</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <Database className="w-4 h-4" /> Root Entity: Brand Core
                </div>
                <div className="text-zinc-300">Product: Enterprise Support Platform</div>
                <div className="text-zinc-400 text-[11px]">Sub-entities: 14 Modules • 48 Tools</div>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                <div className="text-blue-400 font-bold flex items-center gap-1.5">
                  <Cpu className="w-4 h-4" /> Action Nodes: Integrations
                </div>
                <div className="text-zinc-300">Channels: WhatsApp, Slack, Web Widget</div>
                <div className="text-zinc-400 text-[11px]">Protocols: REST, Webhooks, SSE</div>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-2">
                <div className="text-purple-400 font-bold flex items-center gap-1.5">
                  <Layers className="w-4 h-4" /> Security & VPC Perimeters
                </div>
                <div className="text-zinc-300">Compliance: SOC2 Type II, HIPAA, BAA</div>
                <div className="text-zinc-400 text-[11px]">Tenancy: Dedicated VPC Peering</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2 font-serif">Why Vector Similarity Alone Fails</h3>
              <p className="text-xs text-[#141C2E]/70 leading-relaxed mb-4">
                Pure cosine similarity matches words that look alike, leading to incorrect context injection when product names share terms.
              </p>
              <div className="text-xs text-zinc-500 space-y-1.5">
                <div>• Confuses pricing plans with legacy deprecated packages</div>
                <div>• Ignores relational dependencies between user roles and permissions</div>
              </div>
            </div>

            <div className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2 font-serif">The Yedii Knowledge Graph Advantage</h3>
              <p className="text-xs text-[#141C2E]/70 leading-relaxed mb-4">
                By linking semantic entities to verified source nodes, the agent resolves queries with mathematical accuracy and verifiable citations.
              </p>
              <div className="text-xs text-emerald-800 space-y-1.5">
                <div>✓ 100% deterministic entity relationships</div>
                <div>✓ Real-time re-indexing without rebuilding entire graphs</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
