import type { Metadata } from "next";
import {
  Briefcase,
  ArrowRight,
  Globe,
  Heart,
  Laptop,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Careers & Open Positions | Yedii",
  description:
    "Join the team building the future of autonomous conversational AI and enterprise support agents. Explore open roles in engineering, product, and AI research.",
  alternates: { canonical: `${SITE_URL}/careers` },
  openGraph: {
    title: "Careers at Yedii",
    description: "Build autonomous AI agents and hybrid RAG architecture with us.",
    url: `${SITE_URL}/careers`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Careers at Yedii" }],
  },
};

const openRoles = [
  {
    title: "Senior AI / RAG Systems Engineer",
    team: "Core AI Engineering",
    location: "Remote (Global)",
    type: "Full-Time",
    desc: "Build next-generation hybrid dense-sparse vector indexing, AST-aware document chunking, and sub-100ms LLM streaming pipelines.",
  },
  {
    title: "Full-Stack Engineer (Next.js & TypeScript)",
    team: "Frontend & Integrations",
    location: "Remote (Americas / EMEA)",
    type: "Full-Time",
    desc: "Design resilient embeddable web chat widgets, real-time playground simulators, and collaborative enterprise dashboards.",
  },
  {
    title: "Enterprise Solutions Architect",
    team: "Customer Success & Solutions",
    location: "San Francisco / Remote",
    type: "Full-Time",
    desc: "Partner with enterprise customers on single-tenant VPC deployments, custom security reviews, and high-volume CRM integrations.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white">
      <Navbar />

      <main className="flex-1">
        <section className="pt-32 pb-16 px-4 md:px-8 max-w-5xl mx-auto border-b border-[#141C2E]/10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141C2E]/5 border border-[#141C2E]/10 text-xs font-medium text-[#141C2E] mb-6">
            <Briefcase className="w-3.5 h-3.5 text-zinc-600" />
            We&apos;re Hiring
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#141C2E] mb-6 font-serif">
            Build the Autonomous AI Support Layer
          </h1>
          <p className="text-lg md:text-xl text-[#141C2E]/70 max-w-2xl leading-relaxed mb-8">
            We are solving fundamental challenges in autonomous multi-agent coordination, deterministic RAG retrieval, and real-time enterprise support.
          </p>
        </section>

        {/* Culture / Perks */}
        <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 shadow-sm">
              <Globe className="w-6 h-6 text-[#141C2E] mb-3" />
              <h3 className="font-bold text-base mb-1">Remote-First Culture</h3>
              <p className="text-xs text-[#141C2E]/70">Work from anywhere in the world with flexible hours and synchronous focus blocks.</p>
            </div>
            <div className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 shadow-sm">
              <Laptop className="w-6 h-6 text-[#141C2E] mb-3" />
              <h3 className="font-bold text-base mb-1">Top-Tier Equipment</h3>
              <p className="text-xs text-[#141C2E]/70">Full home office setup stipend and latest Apple hardware provided on day one.</p>
            </div>
            <div className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 shadow-sm">
              <Heart className="w-6 h-6 text-[#141C2E] mb-3" />
              <h3 className="font-bold text-base mb-1">Comprehensive Health</h3>
              <p className="text-xs text-[#141C2E]/70">100% premium coverage for medical, dental, vision, and mental wellness benefits.</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold font-serif mb-2">Open Opportunities</h2>
            <p className="text-xs md:text-sm text-[#141C2E]/70">Explore roles across our engineering and customer teams.</p>
          </div>

          <div className="space-y-4">
            {openRoles.map((role, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#141C2E]/10 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#141C2E]/30 transition-all"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                      {role.team}
                    </span>
                    <span className="text-xs text-zinc-500">• {role.location}</span>
                    <span className="text-xs text-zinc-500">• {role.type}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#141C2E] mb-1 font-serif">{role.title}</h3>
                  <p className="text-xs text-[#141C2E]/70 max-w-xl">{role.desc}</p>
                </div>

                <a
                  href={`mailto:careers@yedii.com?subject=Application for ${encodeURIComponent(role.title)}`}
                  className="px-4 py-2.5 rounded-xl bg-[#141C2E] text-white text-xs font-semibold hover:bg-[#141C2E]/90 transition-colors inline-flex items-center gap-1.5 w-fit flex-shrink-0"
                >
                  Apply Now <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
