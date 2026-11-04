import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  LucideIcon,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DedicatedFaqAccordion } from "./DedicatedFaqAccordion";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  value: string;
}

export interface ProblemSolution {
  problem: string;
  solution: string;
  benefit: string;
}

export interface StepItem {
  step: string;
  title: string;
  desc: string;
  badge?: string;
}

export interface UseCaseItem {
  industry: string;
  title: string;
  desc: string;
  outcome: string;
}

export interface BenefitMetric {
  value: string;
  label: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface DedicatedPageProps {
  badge: {
    icon: LucideIcon;
    text: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCta?: { text: string; href: string };
    secondaryCta?: { text: string; href: string };
  };
  mockPreview?: React.ReactNode;
  problemSolution: {
    title: string;
    subtitle: string;
    items: ProblemSolution[];
  };
  features: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  howItWorks: {
    title: string;
    subtitle: string;
    steps: StepItem[];
  };
  useCases: {
    title: string;
    subtitle: string;
    items: UseCaseItem[];
  };
  benefits: {
    title: string;
    subtitle: string;
    items: BenefitMetric[];
  };
  faqs: {
    title?: string;
    subtitle?: string;
    items: FaqItem[];
  };
  cta: {
    title: string;
    subtitle: string;
    primaryText?: string;
    primaryHref?: string;
  };
}

export function DedicatedPageTemplate(props: DedicatedPageProps) {
  const BadgeIcon = props.badge.icon;

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-[#141C2E] font-sans selection:bg-[#141C2E] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full pt-20 pb-16">
        {/* A. Hero Section */}
        <section className="py-12 md:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#E8E9EC] text-[#141C2E] text-xs font-semibold mb-4 shadow-2xs">
            <BadgeIcon className="w-3.5 h-3.5 text-zinc-900" />
            <span>{props.badge.text}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#141C2E] leading-tight max-w-4xl mx-auto">
            {props.hero.title}
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            {props.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={props.hero.primaryCta?.href || "https://app.yedii.com/signup"}
              className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-[#141C2E] text-white font-semibold text-xs sm:text-sm hover:bg-black transition-all shadow-xs inline-flex items-center justify-center gap-2"
            >
              <span>{props.hero.primaryCta?.text || "Deploy an Agent in 5 Minutes"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href={props.hero.secondaryCta?.href || "/pricing"}
              className="w-full sm:w-auto px-6 py-3 rounded-[8px] bg-white text-[#141C2E] font-semibold text-xs sm:text-sm border border-[#E4E5E8] hover:bg-zinc-50 transition-all shadow-2xs inline-flex items-center justify-center gap-2"
            >
              <span>{props.hero.secondaryCta?.text || "View Pricing & Plans"}</span>
            </Link>
          </div>
        </section>

        {/* Visual / Interface Illustration */}
        {props.mockPreview && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="rounded-[18px] border border-[#E8E9EC] bg-white p-4 sm:p-6 shadow-xs overflow-hidden">
              {props.mockPreview}
            </div>
          </section>
        )}

        {/* B. Problem and Solution */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
              The Shift
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E] mt-1">
              {props.problemSolution.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5 leading-relaxed">
              {props.problemSolution.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {props.problemSolution.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[16px] border border-[#E8E9EC] p-6 shadow-2xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-xs text-rose-700 bg-rose-50/80 p-3 rounded-[10px] border border-rose-100">
                    <XCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-rose-900">Traditional Bottleneck</span>
                      <p className="mt-0.5 text-rose-700">{item.problem}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-emerald-800 bg-emerald-50/70 p-3 rounded-[10px] border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-emerald-950">The Yedii Solution</span>
                      <p className="mt-0.5 text-emerald-800">{item.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F1F2F4] text-[11px] font-semibold text-[#141C2E] flex items-center justify-between">
                  <span className="text-[#8A9099] uppercase tracking-wider font-medium">Business Impact</span>
                  <span className="text-emerald-700">{item.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* C. Key Features */}
        <section className="py-12 bg-white border-y border-[#E8E9EC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
                Core Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E] mt-1">
                {props.features.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5 leading-relaxed">
                {props.features.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {props.features.items.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-[14px] border border-[#E8E9EC] bg-[#FAFAFA] hover:bg-white hover:border-[#D0D3D9] transition-all flex flex-col justify-between shadow-2xs"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-[10px] bg-white border border-[#E8E9EC] flex items-center justify-center text-[#141C2E] mb-4 shadow-2xs">
                        <Icon className="w-5 h-5 text-[#141C2E]" />
                      </div>
                      <h3 className="text-[16px] font-bold text-[#141C2E]">
                        {feat.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#6B7280] mt-2 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#E8E9EC] text-[11px] font-semibold text-emerald-700">
                      {feat.value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* D. How It Works */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
              Workflow Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E] mt-1">
              {props.howItWorks.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5">
              {props.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {props.howItWorks.steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[14px] border border-[#E8E9EC] p-5 flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-zinc-900 bg-zinc-100 px-2.5 py-0.5 rounded">
                      {st.step}
                    </span>
                    {st.badge && (
                      <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                        {st.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-[15px] font-bold text-[#141C2E]">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] mt-1.5 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* E. Use Cases */}
        <section className="py-12 bg-white border-y border-[#E8E9EC]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
                Real-World Scenarios
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E] mt-1">
                {props.useCases.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5">
                {props.useCases.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {props.useCases.items.map((uc, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAFAFA] rounded-[14px] border border-[#E8E9EC] p-6 flex flex-col justify-between shadow-2xs hover:border-[#D0D3D9] transition-all"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-[#141C2E] bg-white border border-[#E0E2E6] px-2.5 py-0.5 rounded-full">
                      {uc.industry}
                    </span>
                    <h3 className="text-[16px] font-bold text-[#141C2E] mt-3">
                      {uc.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#6B7280] mt-2 leading-relaxed">
                      {uc.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E8E9EC] text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{uc.outcome}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* F. Benefits */}
        <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
              Measurable Outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E] mt-1">
              {props.benefits.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5">
              {props.benefits.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {props.benefits.items.map((b, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[14px] border border-[#E8E9EC] p-6 text-center shadow-2xs"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#141C2E]">
                  {b.value}
                </div>
                <div className="text-xs font-bold text-[#141C2E] mt-1.5">
                  {b.label}
                </div>
                <p className="text-[11.5px] text-[#6B7280] mt-1 leading-snug">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* G. FAQ Section */}
        <section className="py-12 bg-white border-t border-[#E8E9EC]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#141C2E] mt-1">
                {props.faqs.title || "Frequently Asked Questions"}
              </h2>
              {props.faqs.subtitle && (
                <p className="text-xs sm:text-sm text-[#6B7280] mt-1.5">
                  {props.faqs.subtitle}
                </p>
              )}
            </div>

            <DedicatedFaqAccordion items={props.faqs.items} />
          </div>
        </section>

        {/* H. Final CTA */}
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#141C2E] rounded-[20px] p-8 sm:p-12 text-center text-white space-y-4 shadow-md">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
              {props.cta.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto leading-relaxed">
              {props.cta.subtitle}
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={props.cta.primaryHref || "https://app.yedii.com/signup"}
                className="px-6 py-3 rounded-[8px] bg-white text-[#141C2E] font-semibold text-xs sm:text-sm hover:bg-zinc-100 transition-all inline-flex items-center gap-2"
              >
                <span>{props.cta.primaryText || "Create an AI Agent Now"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="px-6 py-3 rounded-[8px] border border-white/20 text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-all"
              >
                <span>Explore Yedii Plans</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
