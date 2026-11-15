import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Sparkles,
  Bot,
  User,
  HelpCircle,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { INDUSTRIES_LIST } from "@/data/solutions/industries-data";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INDUSTRIES_LIST.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ind = INDUSTRIES_LIST.find((item) => item.slug === slug);
  if (!ind) return {};

  return {
    title: `${ind.title} AI Customer Support | Yedii`,
    description: ind.shortDesc,
    alternates: { canonical: `${SITE_URL}/solutions/industries/${ind.slug}` },
    openGraph: {
      title: `${ind.title} | Yedii Solutions`,
      description: ind.heroSubtitle,
      url: `${SITE_URL}/solutions/industries/${ind.slug}`,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: ind.title }],
    },
  };
}

async function IndustryContent({ params }: PageProps) {
  const { slug } = await params;
  const ind = INDUSTRIES_LIST.find((item) => item.slug === slug);

  if (!ind) {
    notFound();
  }

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E8E9EC] text-[#141C2E] text-xs font-semibold mb-4 shadow-2xs">
          <Building2 className="w-3.5 h-3.5 text-zinc-900" />
          <span>{ind.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141C2E] leading-tight max-w-4xl mx-auto">
          {ind.heroTitle}
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
          {ind.heroSubtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="https://app.yedii.com/signup"
            className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-[#141C2E] text-white font-semibold text-xs sm:text-sm hover:bg-black transition-all shadow-xs inline-flex items-center justify-center gap-2"
          >
            <span>Deploy {ind.title} Agent</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/pricing"
            className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-white text-[#141C2E] font-semibold text-xs sm:text-sm border border-[#E4E5E8] hover:bg-zinc-50 transition-all shadow-2xs inline-flex items-center justify-center gap-2"
          >
            <span>View Pricing &amp; Plans</span>
          </Link>
        </div>
      </section>

      {/* 2. INDUSTRY SPECIFIC CHALLENGES */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#8A9099]">
            Industry Challenges
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E] mt-1">
            Overcoming support bottlenecks in {ind.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ind.challenges.map((ch, idx) => (
            <div
              key={idx}
              className="rounded-[14px] border border-[#EAEAEC] bg-white p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-[8px] bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#141C2E]">{ch.title}</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-[#6B7280] leading-relaxed">
                  {ch.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. RELEVANT YEDII CAPABILITIES */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#8A9099]">
            Tailored Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E] mt-1">
            Purpose-built for {ind.title} operations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ind.capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="rounded-[14px] border border-[#EAEAEC] bg-white p-6 shadow-xs flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-[8px] bg-[#141C2E] text-white flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#141C2E]">{cap.title}</h3>
                <p className="mt-1 text-xs sm:text-[13px] text-[#6B7280] leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EXAMPLE AI WORKFLOWS */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#8A9099]">
            Conversational Workflows
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E] mt-1">
            Example real-world interactions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ind.workflows.map((wf, idx) => (
            <div
              key={idx}
              className="rounded-[16px] border border-[#EAEAEC] bg-white p-6 shadow-xs space-y-4"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8A9099] block">
                {wf.title}
              </span>

              {/* Customer Query */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-3.5 h-3.5 text-zinc-600" />
                </div>
                <div className="rounded-[12px] bg-[#F4F5F7] px-3.5 py-2 text-xs sm:text-[13px] font-medium text-[#141C2E]">
                  &ldquo;{wf.customerQuery}&rdquo;
                </div>
              </div>

              {/* Agent Response */}
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-[8px] bg-[#141C2E] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="rounded-[12px] bg-white border border-[#E4E5E8] px-3.5 py-2.5 text-xs sm:text-[13px] text-[#374151] leading-relaxed">
                  {wf.aiResponse}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. COMMON CUSTOMER INQUIRIES */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[16px] border border-[#EAEAEC] bg-white p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8A9099]">
            <HelpCircle className="w-4 h-4 text-zinc-600" />
            <span>Common Questions Automated</span>
          </div>
          <h3 className="text-lg font-bold text-[#141C2E]">
            Frequent questions resolved instantly in {ind.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {ind.commonInquiries.map((inq, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-[10px] bg-[#F9FAFB] border border-[#EAEAEC] text-xs sm:text-[13px] text-[#374151]"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>&ldquo;{inq}&rdquo;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EXPECTED BUSINESS OUTCOMES */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[20px] bg-[#141C2E] text-white p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11.5px] font-semibold uppercase tracking-wider text-zinc-400">
              Performance Benchmarks
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Expected business outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {ind.outcomes.map((out, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl sm:text-4xl font-mono font-bold text-white">
                  {out.metric}
                </div>
                <div className="text-sm font-semibold text-zinc-200">{out.label}</div>
                <div className="text-xs text-zinc-400 leading-relaxed">{out.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RELEVANT USE CASES */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-lg font-bold text-[#141C2E]">Relevant Use Cases for {ind.title}</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {ind.relevantUseCases.map((rel, idx) => (
            <Link
              key={idx}
              href={`/solutions/use-cases/${rel.slug}`}
              className="rounded-[12px] border border-[#EAEAEC] bg-white p-4 shadow-xs hover:border-[#141C2E] transition-all flex items-center justify-between group"
            >
              <span className="text-sm font-bold text-[#141C2E] group-hover:text-black">
                {rel.title}
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8A9099] group-hover:text-black group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <div className="p-8 sm:p-12 rounded-[20px] bg-[#F4F5F7] border border-[#EAEAEC] space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E]">
            Scale your {ind.title} support with Yedii
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7280] max-w-xl mx-auto leading-relaxed">
            Experience seamless conversational AI tailored to your industry standards. Deploy in minutes with zero engineering overhead.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://app.yedii.com/signup"
              className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-[#141C2E] text-white font-semibold text-xs sm:text-sm hover:bg-black transition-all shadow-xs inline-flex items-center justify-center gap-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/solutions/use-cases"
              className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-white text-[#141C2E] font-semibold text-xs sm:text-sm border border-[#E4E5E8] hover:bg-zinc-50 transition-all shadow-xs inline-flex items-center justify-center gap-2"
            >
              <span>Browse All Solutions</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function IndustryLoadingShell() {
  return (
    <div className="py-24 max-w-5xl mx-auto px-4 text-center animate-pulse space-y-4">
      <div className="h-6 w-48 bg-zinc-200 rounded-full mx-auto" />
      <div className="h-12 w-3/4 bg-zinc-200 rounded-xl mx-auto" />
      <div className="h-5 w-1/2 bg-zinc-100 rounded-lg mx-auto" />
    </div>
  );
}

export default function IndustryDetailPage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-[#FBFBFC] text-[#141C2E] font-sans selection:bg-[#141C2E] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full pt-20 pb-16">
        <Suspense fallback={<IndustryLoadingShell />}>
          <IndustryContent params={params} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
