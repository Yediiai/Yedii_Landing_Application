import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  AlertTriangle,
  Sparkles,
  Bot,
  User,
  Plug,
  ShieldAlert,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { USE_CASES_LIST } from "@/data/solutions/use-cases-data";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo/config";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return USE_CASES_LIST.map((uc) => ({ slug: uc.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const uc = USE_CASES_LIST.find((item) => item.slug === slug);
  if (!uc) return {};

  return {
    title: `${uc.title} Solution | Yedii AI Customer Support`,
    description: uc.shortDesc,
    alternates: { canonical: `${SITE_URL}/solutions/use-cases/${uc.slug}` },
    openGraph: {
      title: `${uc.title} | Yedii Solutions`,
      description: uc.heroSubtitle,
      url: `${SITE_URL}/solutions/use-cases/${uc.slug}`,
      siteName: SITE_NAME,
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: uc.title }],
    },
  };
}

async function UseCaseContent({ params }: PageProps) {
  const { slug } = await params;
  const uc = USE_CASES_LIST.find((item) => item.slug === slug);

  if (!uc) {
    notFound();
  }

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E8E9EC] text-[#141C2E] text-xs font-semibold mb-4 shadow-2xs">
          <Bot className="w-3.5 h-3.5 text-zinc-900" />
          <span>{uc.badge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141C2E] leading-tight max-w-4xl mx-auto">
          {uc.heroTitle}
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
          {uc.heroSubtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="https://app.yedii.com/signup"
            className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-[#141C2E] text-white font-semibold text-xs sm:text-sm hover:bg-black transition-all shadow-xs inline-flex items-center justify-center gap-2"
          >
            <span>Deploy {uc.title} Agent</span>
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

      {/* 2. BUSINESS CHALLENGES */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#8A9099]">
            The Problem
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E] mt-1">
            Common bottlenecks before automating {uc.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {uc.businessChallenges.map((ch, idx) => (
            <div
              key={idx}
              className="rounded-[14px] border border-[#EAEAEC] bg-white p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-[8px] bg-red-50 text-red-600 flex items-center justify-center mb-3">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#141C2E]">{ch.problem}</h3>
                <p className="mt-2 text-xs sm:text-[13px] text-[#6B7280] leading-relaxed">
                  {ch.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HOW YEDII HELPS */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border border-[#EAEAEC] rounded-[20px] my-8 shadow-xs">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#8A9099]">
            Architecture Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E] mt-1">
            How Yedii automates {uc.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {uc.howItWorks.map((step, idx) => (
            <div key={idx} className="relative space-y-3">
              <div className="text-2xl font-mono font-bold text-[#141C2E]/20">{step.step}</div>
              <h3 className="text-sm font-bold text-[#141C2E]">{step.title}</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. KEY AI CAPABILITIES */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#8A9099]">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E] mt-1">
            Engineered for verified domain accuracy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {uc.keyCapabilities.map((cap, idx) => (
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

      {/* 5. REAL-WORLD CUSTOMER SCENARIOS */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#8A9099]">
            Scenarios in Action
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E] mt-1">
            Sample customer interactions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {uc.scenarios.map((sc, idx) => (
            <div
              key={idx}
              className="rounded-[16px] border border-[#EAEAEC] bg-white p-6 shadow-xs space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-3.5 h-3.5 text-zinc-600" />
                </div>
                <div className="rounded-[12px] bg-[#F4F5F7] px-3.5 py-2 text-xs sm:text-[13px] font-medium text-[#141C2E]">
                  &ldquo;{sc.query}&rdquo;
                </div>
              </div>

              <div className="pl-10 text-[11px] font-mono text-zinc-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>{sc.agentAction}</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-[8px] bg-[#141C2E] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="rounded-[12px] bg-white border border-[#E4E5E8] px-3.5 py-2.5 text-xs sm:text-[13px] text-[#374151] leading-relaxed">
                  {sc.resolution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. KNOWLEDGE SOURCE INTEGRATIONS */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[16px] border border-[#EAEAEC] bg-white p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#141C2E]">
              <Plug className="w-4 h-4 text-zinc-600" />
              <span>Connected Ecosystem</span>
            </div>
            <h3 className="text-lg font-bold text-[#141C2E]">
              Plug into your active support stack
            </h3>
            <p className="text-xs text-[#6B7280]">
              Ingest knowledge and sync ticket status directly with your existing tools.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {uc.integrations.map((tool, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-[8px] bg-[#F4F5F7] border border-[#EAEAEC] text-xs font-semibold text-[#141C2E]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HUMAN ESCALATION & FALLBACK */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[11.5px] font-semibold uppercase tracking-wider text-[#8A9099]">
            Safety Guardrails
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E] mt-1">
            Context-aware human escalation
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5">
            When empathy, complex judgment, or policy exceptions occur, Yedii transfers seamlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {uc.escalationPolicy.map((esc, i) => (
            <div
              key={i}
              className="rounded-[14px] border border-[#EAEAEC] bg-white p-6 shadow-xs space-y-2"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700">
                <ShieldAlert className="w-4 h-4 text-amber-600" />
                <span>Trigger Condition</span>
              </div>
              <div className="text-xs sm:text-[13px] font-medium text-[#141C2E]">
                {esc.trigger}
              </div>
              <div className="pt-2 border-t border-[#F0F1F3] text-xs text-[#6B7280]">
                <strong className="text-[#141C2E]">Automated Action:</strong> {esc.action}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. BUSINESS OUTCOMES */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[20px] bg-[#141C2E] text-white p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11.5px] font-semibold uppercase tracking-wider text-zinc-400">
              Measurable Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Expected business outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {uc.outcomes.map((out, i) => (
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

      {/* 9. RELATED USE CASES */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className="text-lg font-bold text-[#141C2E]">Explore Related Use Cases</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {uc.relatedUseCases.map((rel, idx) => (
            <Link
              key={idx}
              href={`/solutions/use-cases/${rel.slug}`}
              className="rounded-[14px] border border-[#EAEAEC] bg-white p-6 shadow-xs hover:border-[#141C2E] transition-all flex items-center justify-between group"
            >
              <div>
                <h4 className="text-base font-bold text-[#141C2E] group-hover:text-black">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#6B7280] mt-1">{rel.desc}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#8A9099] group-hover:text-black group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <div className="p-8 sm:p-12 rounded-[20px] bg-[#F4F5F7] border border-[#EAEAEC] space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E]">
            Ready to automate {uc.title} with Yedii?
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7280] max-w-xl mx-auto leading-relaxed">
            Create your free workspace in 5 minutes, connect your documentation, and test autonomous agent responses with zero production risk.
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

function UseCaseLoadingShell() {
  return (
    <div className="py-24 max-w-5xl mx-auto px-4 text-center animate-pulse space-y-4">
      <div className="h-6 w-48 bg-zinc-200 rounded-full mx-auto" />
      <div className="h-12 w-3/4 bg-zinc-200 rounded-xl mx-auto" />
      <div className="h-5 w-1/2 bg-zinc-100 rounded-lg mx-auto" />
    </div>
  );
}

export default function UseCaseDetailPage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-[#FBFBFC] text-[#141C2E] font-sans selection:bg-[#141C2E] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full pt-20 pb-16">
        <Suspense fallback={<UseCaseLoadingShell />}>
          <UseCaseContent params={params} />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
