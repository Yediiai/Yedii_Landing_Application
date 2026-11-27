import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Eye,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "About Us | Yedii — AI-Powered Customer Support",
  description:
    "Learn why we started Yedii, our mission and vision, and the principles behind our AI-powered customer support platform.",
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Yedii | Better conversations. Smarter support.",
    description:
      "Yedii helps businesses automate customer support with intelligent AI agents, knowledge intelligence, and seamless integrations.",
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "About Yedii" }],
  },
};

const CAPABILITIES = [
  {
    title: "AI Support Agents",
    description: "Intelligent agents that answer customer questions.",
  },
  {
    title: "Knowledge Intelligence",
    description: "Turn business knowledge into useful answers.",
  },
  {
    title: "Performance Insights",
    description: "Understand conversations and support performance.",
  },
  {
    title: "Seamless Integration",
    description: "Bring AI support to websites and customer touchpoints.",
  },
];

const VALUES = [
  {
    number: "01",
    title: "Trust First",
    description: "Reliable answers, responsible AI, and customer data protection.",
  },
  {
    number: "02",
    title: "Innovation With Purpose",
    description: "Build technology that solves real business problems.",
  },
  {
    number: "03",
    title: "Customer Obsessed",
    description: "Every decision starts with the customer experience and measurable impact.",
  },
  {
    number: "04",
    title: "Clarity & Craft",
    description: "Simple, fast, and dependable software built with care.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white relative z-10">
      <Navbar />

      <main className="flex-1 about-page-scope">
        {/* ================================================================= */}
        {/* SECTION 01: HERO                                                  */}
        {/* ================================================================= */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/85 backdrop-blur-xs border border-[#E8E9EC] text-xs font-semibold text-[#141C2E] shadow-2xs">
                About Yedii
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-[54px] font-bold tracking-tight text-[#141C2E] font-sans leading-[1.08]">
                Better conversations. Smarter support. Powered by AI.
              </h1>

              <p className="text-base sm:text-lg text-[#565C66] leading-relaxed max-w-2xl">
                Yedii helps businesses automate customer support with intelligent AI agents that
                understand customer questions, deliver accurate answers, and create better customer
                experiences.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/ai-agents"
                  className="px-6 py-3 rounded-lg bg-[#141C2E] text-white text-sm font-semibold hover:bg-black transition-colors inline-flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Explore Yedii</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/enterprise"
                  className="px-6 py-3 rounded-lg bg-white text-[#141C2E] text-sm font-semibold border border-[#E0E2E6] hover:bg-zinc-50 transition-colors inline-flex items-center justify-center shadow-2xs"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Abstract Minimalist AI Visual (transparent over grid background) */}
            <div className="lg:col-span-5">
              <div className="p-2 sm:p-4 relative">
                <svg
                  viewBox="0 0 360 280"
                  className="relative w-full h-auto"
                  role="img"
                  aria-label="Abstract representation of Yedii AI semantic retrieval and conversation intelligence"
                >
                  {/* Subtle concentric orbital rings */}
                  <circle
                    cx="180"
                    cy="140"
                    r="112"
                    fill="none"
                    stroke="#E8E9EC"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                  <circle cx="180" cy="140" r="76" fill="none" stroke="#E8E9EC" strokeWidth="1" />
                  <circle cx="180" cy="140" r="40" fill="none" stroke="#D4D6DC" strokeWidth="1" />

                  {/* Connection lines */}
                  <line x1="180" y1="140" x2="92" y2="74" stroke="#CBD5E1" strokeWidth="1.25" />
                  <line x1="180" y1="140" x2="274" y2="80" stroke="#CBD5E1" strokeWidth="1.25" />
                  <line x1="180" y1="140" x2="282" y2="196" stroke="#CBD5E1" strokeWidth="1.25" />
                  <line x1="180" y1="140" x2="86" y2="202" stroke="#CBD5E1" strokeWidth="1.25" />
                  <line x1="180" y1="140" x2="180" y2="32" stroke="#CBD5E1" strokeWidth="1.25" />

                  {/* Outer knowledge & channel nodes */}
                  <circle cx="92" cy="74" r="10" fill="#FFFFFF" stroke="#141C2E" strokeWidth="1.5" />
                  <circle cx="92" cy="74" r="3" fill="#141C2E" />

                  <circle cx="274" cy="80" r="10" fill="#FFFFFF" stroke="#141C2E" strokeWidth="1.5" />
                  <circle cx="274" cy="80" r="3" fill="#141C2E" />

                  <circle cx="282" cy="196" r="10" fill="#FFFFFF" stroke="#141C2E" strokeWidth="1.5" />
                  <circle cx="282" cy="196" r="3" fill="#141C2E" />

                  <circle cx="86" cy="202" r="10" fill="#FFFFFF" stroke="#141C2E" strokeWidth="1.5" />
                  <circle cx="86" cy="202" r="3" fill="#141C2E" />

                  <circle cx="180" cy="32" r="8" fill="#FFFFFF" stroke="#9AA0A8" strokeWidth="1.5" />

                  {/* Center Core Intelligence Node */}
                  <circle cx="180" cy="140" r="24" fill="#141C2E" />
                  <circle cx="180" cy="140" r="8" fill="#FFFFFF" />
                </svg>

                <div className="relative mt-4 pt-4 border-t border-[#E8E9EC]/80 flex items-center justify-between text-xs text-[#6B7280] font-mono">
                  <span>Grounded Knowledge</span>
                  <span className="text-[#141C2E] font-semibold">Autonomous Resolution</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 02: OUR STORY                                             */}
        {/* ================================================================= */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/70">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141C2E] font-sans">
                Why We Started Yedii
              </h2>

              <div className="space-y-4 text-base text-[#565C66] leading-relaxed">
                <p>
                  Customer support shouldn&apos;t mean spending hours answering the same questions
                  again and again.
                </p>
                <p>
                  We started Yedii with a simple idea: make customer support smarter, faster, and
                  more accessible through AI.
                </p>
                <p>
                  We believe businesses should focus on building relationships with customers, not
                  getting overwhelmed by repetitive support tasks.
                </p>
                <p className="font-medium text-[#141C2E]">
                  Yedii is being built to make that possible.
                </p>
              </div>
            </div>

            {/* Supporting Editorial Visual */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#FAFAFA] border border-[#E8E9EC] p-6 sm:p-8 space-y-5 shadow-2xs">
                <div className="flex items-center justify-between pb-4 border-b border-[#E8E9EC]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#8A9099]">
                    The Support Shift
                  </span>
                  <span className="text-xs font-mono text-[#141C2E]">Manual → Intelligent</span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white border border-[#E8E9EC] flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-[#8A9099] uppercase tracking-wider">
                        Before
                      </div>
                      <div className="text-sm font-semibold text-[#141C2E] mt-1">
                        Repetitive queues &amp; scattered docs
                      </div>
                      <p className="text-xs text-[#6B7280] mt-1">
                        Teams spend hours copying answers from help articles and internal wikis.
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[#9AA0A8] shrink-0">Hours</span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#141C2E] text-white flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                        With Yedii
                      </div>
                      <div className="text-sm font-semibold text-white mt-1">
                        Verified AI agents &amp; human focus
                      </div>
                      <p className="text-xs text-zinc-300 mt-1">
                        Agents resolve routine questions instantly while your team handles high-value
                        relationships.
                      </p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 shrink-0">Seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 03: MISSION & VISION                                      */}
        {/* ================================================================= */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/70">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Our Mission */}
            <div className="rounded-2xl bg-white border border-[#E8E9EC] p-8 sm:p-10 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F4F5F7] border border-[#E8E9EC] flex items-center justify-center text-[#141C2E] mb-6">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#8A9099]">
                  Our Mission
                </div>
                <p className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-[#141C2E] font-sans leading-snug">
                  Make intelligent AI-powered customer support accessible to every business.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="rounded-2xl bg-[#141C2E] text-white border border-[#141C2E] p-8 sm:p-10 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white mb-6">
                  <Eye className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Our Vision
                </div>
                <p className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-white font-sans leading-snug">
                  A world where every customer gets helpful, timely, and reliable support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 04: WHAT WE DO                                            */}
        {/* ================================================================= */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/70">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099] mb-2">
                What We Do
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141C2E] font-sans">
                One Platform. Smarter Customer Experiences.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {CAPABILITIES.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl bg-white border border-[#E8E9EC] p-6 transition-all duration-200 hover:border-zinc-300 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-[#141C2E]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#6B7280] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* SECTION 05: OUR VALUES                                            */}
        {/* ================================================================= */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/70">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-2xl mb-12">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099] mb-2">
                Our Values
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141C2E] font-sans">
                Principles Behind Everything We Build.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {VALUES.map((val) => (
                <div
                  key={val.number}
                  className="rounded-2xl bg-white border border-[#E8E9EC] p-7 sm:p-8 flex items-start gap-5 hover:border-zinc-300 transition-colors"
                >
                  <span className="text-xs font-mono font-semibold text-[#8A9099] bg-[#F4F5F7] border border-[#E8E9EC] px-2.5 py-1 rounded-lg shrink-0">
                    {val.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-[#141C2E]">
                      {val.title}
                    </h3>
                    <p className="mt-1.5 text-sm sm:text-base text-[#6B7280] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CLOSING CTA                                                       */}
        {/* ================================================================= */}
        <section className="pb-20 pt-4 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="rounded-2xl bg-black border border-[#1C1C1E] text-white p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
            <div className="max-w-xl space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-sans">
                Ready to see Yedii in action?
              </h2>
              <p className="text-sm sm:text-base text-zinc-300">
                Build your first AI support agent grounded on your company knowledge in minutes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Link
                href="/ai-agents"
                className="px-5 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Explore Yedii</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/enterprise"
                className="px-5 py-3 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
