"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Minus,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Zap
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export interface PlanItem {
  id: string;
  name: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  tagline: string;
  isRecommended?: boolean;
  isFree?: boolean;
  metrics: {
    aiAgents: string | number;
    creditsPerMonth: string;
    ragStorage: string;
    workspaces: string | number;
    members: string | number;
  };
  features: string[];
}

const YEDII_APPLICATION_PLANS: PlanItem[] = [
  {
    id: "free",
    name: "Free Trial",
    monthlyPrice: 0,
    yearlyPrice: 0,
    tagline: "For testing & exploration",
    isFree: true,
    metrics: {
      aiAgents: 1,
      creditsPerMonth: "50",
      ragStorage: "500 KB",
      workspaces: 1,
      members: 1,
    },
    features: [
      "Basic customizations",
      "Basic analytics",
      "Community support",
      "Standard Web Widget",
      "No credit card required",
    ],
  },
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 19,
    yearlyPrice: 110,
    tagline: "For starter teams",
    metrics: {
      aiAgents: 1,
      creditsPerMonth: "500",
      ragStorage: "15 MB",
      workspaces: 1,
      members: 1,
    },
    features: [
      "Basic customizations",
      "Basic analytics",
      "Email support",
      "Re-Training",
      "Re-Crawling",
      "Quick Summary",
      "Remove Branding",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 49,
    yearlyPrice: 468,
    isRecommended: true,
    tagline: "For growth teams",
    metrics: {
      aiAgents: 3,
      creditsPerMonth: "2,000",
      ragStorage: "15 MB",
      workspaces: 1,
      members: 3,
    },
    features: [
      "Standard customizations",
      "Advanced analytics",
      "Priority email support",
      "Re-Training",
      "Re-Crawling",
      "Quick Summary",
      "Remove Branding",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 99,
    yearlyPrice: 990,
    tagline: "For pro teams",
    metrics: {
      aiAgents: 10,
      creditsPerMonth: "1,000",
      ragStorage: "15 MB",
      workspaces: 1,
      members: 10,
    },
    features: [
      "Advanced customizations",
      "Advanced analytics",
      "Priority chat support",
      "Re-Training",
      "Re-Crawling",
      "Quick Summary",
      "Remove Branding",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    tagline: "For enterprise teams",
    metrics: {
      aiAgents: "Custom",
      creditsPerMonth: "Custom",
      ragStorage: "Custom",
      workspaces: "Custom",
      members: "Custom",
    },
    features: [
      "Custom customizations",
      "Enterprise analytics",
      "Dedicated manager support",
      "Re-Training",
      "Re-Crawling",
      "Quick Summary",
      "Remove Branding",
      "Two-factor authentication (2FA)",
    ],
  },
];

const OPENAI_MODELS = [
  { name: "text-embedding-3-large", credits: "—", capability: "All search embeddings · 1536 / 3072", availability: "All plans" },
  { name: "GPT-4 Mini", credits: "1 credit", capability: "High-volume, simple questions", availability: "Starter +" },
  { name: "GPT-4o Mini", credits: "1 credit", capability: "Everyday support replies", availability: "Starter +" },
  { name: "GPT-4o", credits: "5 credits", capability: "Everyday support replies & multi-modal", availability: "Starter +" },
  { name: "GPT-4", credits: "10 credits", capability: "Detailed, multi-step answers", availability: "Starter +" },
  { name: "GPT-4.5", credits: "25 credits", capability: "Complex reasoning & deep logic", availability: "Starter +" },
  { name: "GPT-4.5 Pro", credits: "50 credits", capability: "Advanced reasoning for difficult cases", availability: "Starter +" },
];

const GEMINI_MODELS = [
  { name: "Gemini 2.5 Flash-Lite", credits: "1 credit", capability: "High-volume, simple questions", availability: "Starter +" },
  { name: "Gemini 2.5 Flash", credits: "2 credits", capability: "Everyday support replies", availability: "Starter +" },
  { name: "Gemini 2.5 Pro", credits: "8 credits", capability: "Detailed, multi-step answers", availability: "Starter +" },
  { name: "DeepSeek V4.1 Flash", credits: "2 credits", capability: "High-speed reasoning & code", availability: "Starter +" },
];

function SupportedAiModelsBadges() {
  return (
    <div className="flex items-center justify-between gap-1.5 py-0.5 border-b border-[#F1F2F4] pb-2.5 mb-2.5">
      <div className="flex items-center gap-2 min-w-0">
        <div className="w-[14px] h-[14px] flex items-center justify-center shrink-0">
          <Check className="w-[12px] h-[12px] stroke-[2.5] text-[#141C2E]" />
        </div>
        <span className="text-[13px] font-medium text-[#3A4049] whitespace-nowrap">
          AI Models
        </span>
      </div>

      {/* OVERLAPPING LOGOS with hover effects */}
      <div
        className="flex items-center -space-x-1.5 shrink-0 pl-1"
        title="Supported AI Models: OpenAI GPT, Claude, Gemini, DeepSeek, Grok"
      >
        {/* OpenAI / GPT SVG */}
        <div
          title="OpenAI GPT"
          className="w-[20px] h-[20px] rounded-full bg-[#111111] border-[1.5px] border-white shadow-xs flex items-center justify-center p-[3px] hover:scale-125 hover:z-10 transition-transform cursor-pointer shrink-0"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.66-4.1354a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1401-1.6564zm-1.6375-10.743a4.466 4.466 0 0 1 2.3418-1.9729v5.6015a.7712.7712 0 0 0 .3879.6766l5.8144 3.3543-2.02 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866a4.4992 4.4992 0 0 1-1.6228-6.0412zm16.597 3.8558l-5.838-3.3685 2.0199-1.1683a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4067-.6815zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L8.709 9.397V7.0646a.071.071 0 0 1 .0331-.0615l4.8816-2.8152a4.4992 4.4992 0 0 1 6.6749 4.6305zm-11.026 4.1354l-2.02-1.1683v-2.3324l5.8428-3.3685 2.02 1.1683v2.3324z" />
          </svg>
        </div>

        {/* Anthropic Claude */}
        <div
          title="Anthropic Claude"
          className="w-[20px] h-[20px] rounded-full bg-[#FBF0EA] border-[1.5px] border-white shadow-xs overflow-hidden flex items-center justify-center hover:scale-125 hover:z-10 transition-transform cursor-pointer shrink-0"
        >
          <Image
            src="/images/providers/claude.png"
            alt="Claude"
            width={18}
            height={18}
            className="w-full h-full object-contain rounded-full"
            unoptimized
          />
        </div>

        {/* Google Gemini */}
        <div
          title="Google Gemini"
          className="w-[20px] h-[20px] rounded-full bg-white border-[1.5px] border-white shadow-xs overflow-hidden flex items-center justify-center hover:scale-125 hover:z-10 transition-transform cursor-pointer shrink-0"
        >
          <Image
            src="/images/providers/gemini.png"
            alt="Gemini"
            width={18}
            height={18}
            className="w-full h-full object-contain"
            unoptimized
          />
        </div>

        {/* DeepSeek */}
        <div
          title="DeepSeek"
          className="w-[20px] h-[20px] rounded-full bg-[#EEF4FF] border-[1.5px] border-white shadow-xs overflow-hidden flex items-center justify-center hover:scale-125 hover:z-10 transition-transform cursor-pointer shrink-0"
        >
          <Image
            src="/images/providers/deepseek.png"
            alt="DeepSeek"
            width={18}
            height={18}
            className="w-full h-full object-contain rounded-full"
            unoptimized
          />
        </div>

        {/* xAI Grok SVG */}
        <div
          title="xAI Grok"
          className="w-[20px] h-[20px] rounded-full bg-[#111111] border-[1.5px] border-white shadow-xs flex items-center justify-center p-[3px] hover:scale-125 hover:z-10 transition-transform cursor-pointer shrink-0"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [selectedPlanId, setSelectedPlanId] = useState<string>("growth");
  const [isCompareExpanded, setIsCompareExpanded] = useState<boolean>(true);
  const [isOpenAiExpanded, setIsOpenAiExpanded] = useState<boolean>(true);
  const [isGeminiExpanded, setIsGeminiExpanded] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-sans selection:bg-[#141C2E] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full pt-20 pb-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-7">
          {/* Back button */}
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4B5563] hover:text-[#111827] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to home</span>
            </Link>
          </div>

          {/* 1. Plans Header */}
          <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-[560px] flex flex-col gap-1">
              <h1 className="text-[22px] sm:text-[26px] font-semibold text-[#141C2E] tracking-[-0.48px] leading-tight">
                Plans &amp; pricing
              </h1>
              <p className="text-[13.5px] font-normal text-[#6B7280] leading-snug">
                Explore available plans to unlock additional features and expand your AI support capabilities.
              </p>
            </div>

            {/* Toggle Container (Matching Yedii_Application PlansHeader.tsx) */}
            <div className="w-full sm:w-[272px] h-[39.6px] rounded-[10px] border-[0.8px] border-[#E4E5E8] bg-white p-[3px] flex items-center gap-[2px] shrink-0 self-start sm:self-auto shadow-2xs">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`flex-1 sm:w-[80px] sm:flex-initial h-[32px] rounded-[8px] text-[13px] font-semibold flex items-center justify-center transition-colors cursor-pointer select-none leading-none ${
                  billingCycle === "monthly"
                    ? "bg-[#141C2E] text-white shadow-xs"
                    : "bg-transparent text-[#5A6070] hover:text-[#17181C]"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={`flex-1 sm:w-[182px] sm:flex-initial h-[32px] rounded-[8px] text-[13px] font-semibold flex items-center justify-center transition-colors cursor-pointer select-none leading-none gap-1.5 ${
                  billingCycle === "yearly"
                    ? "bg-[#141C2E] text-white shadow-xs"
                    : "bg-transparent text-[#5A6070] hover:text-[#17181C]"
                }`}
              >
                <span>Yearly — 2 mo free</span>
              </button>
            </div>
          </div>

          {/* 2. Current Plan / Free Trial Banner (Matching Yedii_Application CurrentPlanBanner.tsx) */}
          <div className="w-full rounded-[12px] border-[0.8px] border-[#E3E6EB] bg-[#F2F4F7] px-4 sm:px-[18px] py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.81px] text-[#8A9099] bg-white px-2 py-0.5 rounded border border-[#E3E6EB]">
                Free Trial Active
              </span>
              <span className="text-[15px] sm:text-[16px] font-semibold text-[#141C2E] tracking-[-0.22px]">
                Free Trial
              </span>
              <span className="text-[13px] font-normal text-[#4A5058]">
                $0 / month
              </span>
              <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded font-medium inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                No credit card required
              </span>
            </div>

            <div className="text-[12.5px] sm:text-[13px] font-normal text-[#4A5058] flex items-center gap-2 self-end sm:self-auto">
              <span>1 AI agent · 50 AI credits · 500 KB storage · 1 workspace</span>
              <Link
                href="https://app.yedii.com/signup"
                className="px-3 py-1 rounded-[6px] bg-[#141C2E] text-white text-xs font-semibold hover:bg-black transition-colors"
              >
                Claim Free
              </Link>
            </div>
          </div>

          {/* Helper line */}
          <div className="flex items-center justify-between px-1 text-[13px] text-[#6B7280]">
            <span>5 plans available · Select a tier or start free</span>
            <span className="text-xs text-[#8A9099]">Instant activation</span>
          </div>

          {/* 3. Plan Cards Grid (Free Trial, Starter, Growth, Pro, Enterprise) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {YEDII_APPLICATION_PLANS.map((plan) => {
              const isSelected = selectedPlanId === plan.id;
              const isCustomPrice = plan.monthlyPrice === null;
              const displayPrice = isCustomPrice
                ? "Custom"
                : plan.isFree
                ? "$0"
                : billingCycle === "yearly"
                ? `$${plan.yearlyPrice}`
                : `$${plan.monthlyPrice}`;
              const displayPeriod = isCustomPrice
                ? ""
                : plan.isFree
                ? "/ forever"
                : billingCycle === "yearly"
                ? "/ year"
                : "/ month";

              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`w-full min-h-[510px] rounded-[12px] p-4 sm:p-4.5 bg-white flex flex-col justify-between transition-all duration-200 select-none cursor-pointer ${
                    isSelected
                      ? "border-[0.8px] border-[#141C2E] shadow-[0px_6px_18px_0px_rgba(16,24,40,0.08),0px_0px_0px_1px_#141C2E]"
                      : "border-[0.8px] border-[#E8E9EC] shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#D0D3D9]"
                  }`}
                >
                  <div className="flex flex-col">
                    {/* Name & Badge */}
                    <div className="flex items-center justify-between h-[24px]">
                      <h3 className="text-[14.5px] font-semibold text-[#141C2E] tracking-[-0.21px] leading-none">
                        {plan.name}
                      </h3>
                      {plan.isRecommended ? (
                        <span className="h-[20px] px-1.5 rounded-[5px] bg-[#F4F5F7] border border-[#E0E2E6] text-[10.5px] font-semibold text-[#141C2E] flex items-center leading-none">
                          Recommended
                        </span>
                      ) : plan.isFree ? (
                        <span className="h-[20px] px-1.5 rounded-[5px] bg-emerald-50 border border-emerald-200 text-[10.5px] font-semibold text-emerald-800 flex items-center leading-none">
                          Free
                        </span>
                      ) : null}
                    </div>

                    {/* Price Row */}
                    <div className="flex items-baseline gap-1 mt-3">
                      <span className="text-[26px] font-semibold text-[#141C2E] tracking-[-0.84px] leading-none">
                        {displayPrice}
                      </span>
                      {displayPeriod && (
                        <span className="text-[12.5px] font-normal text-[#6B7280] leading-none">
                          {displayPeriod}
                        </span>
                      )}
                    </div>

                    {/* Tagline */}
                    <p className="text-[13px] font-normal text-[#4A5058] mt-1.5 leading-tight">
                      {plan.tagline}
                    </p>

                    {/* Metrics Table */}
                    <div className="w-full py-3 my-3 border-t border-b border-[#F1F2F4] flex flex-col gap-1.5 text-[12.5px]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#6B7280]">AI agents</span>
                        <span className="font-semibold text-[#22262E]">{plan.metrics.aiAgents}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6B7280]">AI credits / mo</span>
                        <span className="font-semibold text-[#22262E]">{plan.metrics.creditsPerMonth}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6B7280]">RAG storage</span>
                        <span className="font-semibold text-[#22262E]">{plan.metrics.ragStorage}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#6B7280]">Workspace</span>
                        <span className="font-semibold text-[#22262E]">{plan.metrics.workspaces}</span>
                      </div>
                    </div>

                    {/* Supported AI Models with Official SVGs & Badges */}
                    <SupportedAiModelsBadges />

                    {/* Features Checklist */}
                    <div className="space-y-2 mt-0.5">
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[12.5px] text-[#3A4049]">
                          <Check className="w-3.5 h-3.5 text-[#141C2E] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Select Plan Action Button */}
                  <div className="mt-5 pt-3 border-t border-[#F1F2F4]">
                    <Link
                      href={plan.isFree ? "https://app.yedii.com/signup" : `https://app.yedii.com/signup?plan=${plan.id}`}
                      className={`w-full h-[38px] rounded-[8px] text-[13px] font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                        plan.isFree
                          ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-2xs"
                          : isSelected
                          ? "bg-[#141C2E] text-white hover:bg-black shadow-2xs"
                          : "bg-[#F4F5F7] text-[#141C2E] hover:bg-[#E8E9EC]"
                      }`}
                    >
                      <span>
                        {plan.isFree
                          ? "Start Free Trial"
                          : plan.id === "enterprise"
                          ? "Contact Enterprise"
                          : `Select ${plan.name}`}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4. AI Model Usage Section (Exact from Yedii_Application AiModelUsageSection.tsx) */}
          <div className="w-full flex flex-col gap-4 pt-4 border-t-[0.8px] border-[#EAEBEE]">
            <div>
              <h2 className="text-[18px] font-semibold text-[#141C2E] tracking-[-0.27px]">
                AI model credit costs &amp; capabilities
              </h2>
              <p className="text-[13.5px] font-normal text-[#6B7280] leading-relaxed max-w-[680px]">
                Each reply your agent sends spends credits from your plan&apos;s monthly allowance. More capable models use more credits.
              </p>
            </div>

            {/* OpenAI Card */}
            <div className="w-full rounded-[12px] border-[0.8px] border-[#E8E9EC] bg-white overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <button
                type="button"
                onClick={() => setIsOpenAiExpanded(!isOpenAiExpanded)}
                className="w-full p-4 sm:p-4.5 flex items-center justify-between hover:bg-slate-50/60 transition-colors cursor-pointer select-none text-left"
              >
                <div className="flex items-center gap-2.5 flex-wrap min-w-0 pr-2">
                  <div className="w-5 h-5 rounded-full bg-[#111111] p-[3px] flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.66-4.1354a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1401-1.6564zm-1.6375-10.743a4.466 4.466 0 0 1 2.3418-1.9729v5.6015a.7712.7712 0 0 0 .3879.6766l5.8144 3.3543-2.02 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866a4.4992 4.4992 0 0 1-1.6228-6.0412zm16.597 3.8558l-5.838-3.3685 2.0199-1.1683a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4067-.6815zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L8.709 9.397V7.0646a.071.071 0 0 1 .0331-.0615l4.8816-2.8152a4.4992 4.4992 0 0 1 6.6749 4.6305zm-11.026 4.1354l-2.02-1.1683v-2.3324l5.8428-3.3685 2.02 1.1683v2.3324z" />
                    </svg>
                  </div>
                  <span className="text-[14.5px] font-semibold text-[#141C2E]">
                    OpenAI
                  </span>
                  <span className="text-[12.5px] font-normal text-[#8A9099]">
                    {OPENAI_MODELS.length} models · 1–50 credits / reply
                  </span>
                </div>
                {isOpenAiExpanded ? (
                  <ChevronUp className="w-4 h-4 text-[#565C66]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#565C66]" />
                )}
              </button>

              {isOpenAiExpanded && (
                <div className="w-full overflow-x-auto border-t border-[#F1F2F4]">
                  <table className="w-full text-left border-collapse min-w-[680px]">
                    <thead>
                      <tr className="border-b border-[#F1F2F4] bg-[#F8F9FA]/60 text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
                        <th className="py-2.5 px-4">Model</th>
                        <th className="py-2.5 px-4">Credits</th>
                        <th className="py-2.5 px-4">Capability</th>
                        <th className="py-2.5 px-4 text-right">Availability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F1F2F4] text-[13px]">
                      {OPENAI_MODELS.map((model, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50">
                          <td className="py-2.5 px-4 font-medium text-[#22262E] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span>{model.name}</span>
                          </td>
                          <td className="py-2.5 px-4 font-semibold text-[#22262E]">{model.credits}</td>
                          <td className="py-2.5 px-4 text-[#6B7280]">{model.capability}</td>
                          <td className="py-2.5 px-4 text-[#4A5058] text-right font-medium">{model.availability}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Google Gemini & Anthropic Card */}
            <div className="w-full rounded-[12px] border-[0.8px] border-[#E8E9EC] bg-white overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <button
                type="button"
                onClick={() => setIsGeminiExpanded(!isGeminiExpanded)}
                className="w-full p-4 sm:p-4.5 flex items-center justify-between hover:bg-slate-50/60 transition-colors cursor-pointer select-none text-left"
              >
                <div className="flex items-center gap-2.5 flex-wrap min-w-0 pr-2">
                  <div className="w-5 h-5 flex items-center justify-center shrink-0">
                    <Image
                      src="/images/providers/gemini.png"
                      alt="Gemini"
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="text-[14.5px] font-semibold text-[#141C2E]">
                    Google Gemini &amp; DeepSeek
                  </span>
                  <span className="text-[12.5px] font-normal text-[#8A9099]">
                    {GEMINI_MODELS.length} models · 1–8 credits / reply
                  </span>
                </div>
                {isGeminiExpanded ? (
                  <ChevronUp className="w-4 h-4 text-[#565C66]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#565C66]" />
                )}
              </button>

              {isGeminiExpanded && (
                <div className="w-full overflow-x-auto border-t border-[#F1F2F4]">
                  <table className="w-full text-left border-collapse min-w-[680px]">
                    <thead>
                      <tr className="border-b border-[#F1F2F4] bg-[#F8F9FA]/60 text-[11px] font-semibold uppercase tracking-wider text-[#8A9099]">
                        <th className="py-2.5 px-4">Model</th>
                        <th className="py-2.5 px-4">Credits</th>
                        <th className="py-2.5 px-4">Capability</th>
                        <th className="py-2.5 px-4 text-right">Availability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F1F2F4] text-[13px]">
                      {GEMINI_MODELS.map((model, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50">
                          <td className="py-2.5 px-4 font-medium text-[#22262E] flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-sky-500" />
                            <span>{model.name}</span>
                          </td>
                          <td className="py-2.5 px-4 font-semibold text-[#22262E]">{model.credits}</td>
                          <td className="py-2.5 px-4 text-[#6B7280]">{model.capability}</td>
                          <td className="py-2.5 px-4 text-[#4A5058] text-right font-medium">{model.availability}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* 5. Compare All Features Table */}
          <div className="w-full flex flex-col gap-3 pt-6">
            <div className="w-full flex items-center justify-between">
              <div>
                <h2 className="text-[18px] font-semibold text-[#141C2E] tracking-[-0.27px]">
                  Compare all features
                </h2>
                <p className="text-[13.5px] font-normal text-[#6B7280]">
                  Every limit and feature, side by side.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsCompareExpanded(!isCompareExpanded)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border border-[#E5E7EB] bg-white hover:bg-slate-50 text-[13px] font-medium text-[#2A2E36] hover:text-[#141C2E] shadow-2xs transition-all cursor-pointer select-none"
              >
                <span>{isCompareExpanded ? "Hide full comparison" : "Show full comparison"}</span>
                {isCompareExpanded ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            {isCompareExpanded && (
              <div className="w-full rounded-[14px] border border-[#E2E4E9] bg-white overflow-hidden shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[850px] text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#F8F9FA] border-b border-[#E2E4E9]">
                        <th className="p-3.5 font-semibold text-[#4B5563] w-[240px]">Capability</th>
                        {YEDII_APPLICATION_PLANS.map((p) => (
                          <th key={p.id} className="p-3.5 text-center font-semibold text-[#111827]">
                            {p.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EAEBEE] text-gray-700">
                      <tr>
                        <td className="p-3.5 font-medium text-[#111827]">AI Agents</td>
                        {YEDII_APPLICATION_PLANS.map((p) => (
                          <td key={p.id} className="p-3.5 text-center font-semibold text-[#141C2E]">
                            {p.metrics.aiAgents}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-[#111827]">Monthly Credits</td>
                        {YEDII_APPLICATION_PLANS.map((p) => (
                          <td key={p.id} className="p-3.5 text-center font-semibold text-[#141C2E]">
                            {p.metrics.creditsPerMonth}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-[#111827]">RAG Document Storage</td>
                        {YEDII_APPLICATION_PLANS.map((p) => (
                          <td key={p.id} className="p-3.5 text-center font-medium">
                            {p.metrics.ragStorage}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-[#111827]">Workspaces</td>
                        {YEDII_APPLICATION_PLANS.map((p) => (
                          <td key={p.id} className="p-3.5 text-center font-medium">
                            {p.metrics.workspaces}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-[#111827]">Remove Yedii Branding</td>
                        {YEDII_APPLICATION_PLANS.map((p) => (
                          <td key={p.id} className="p-3.5 text-center">
                            {p.id === "free" ? (
                              <Minus className="w-4 h-4 mx-auto text-gray-400" />
                            ) : (
                              <Check className="w-4 h-4 mx-auto text-emerald-600 font-bold" />
                            )}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-[#111827]">Auto Re-Crawling &amp; Re-Training</td>
                        {YEDII_APPLICATION_PLANS.map((p) => (
                          <td key={p.id} className="p-3.5 text-center">
                            {p.id === "free" ? (
                              <Minus className="w-4 h-4 mx-auto text-gray-400" />
                            ) : (
                              <Check className="w-4 h-4 mx-auto text-emerald-600 font-bold" />
                            )}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-[#111827]">Supported AI Models</td>
                        {YEDII_APPLICATION_PLANS.map((p) => (
                          <td key={p.id} className="p-3.5 text-center font-medium text-xs text-[#4B5563]">
                            OpenAI, Claude, Gemini, DeepSeek, Grok
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-[#111827]">Human Handoff Inbox</td>
                        {YEDII_APPLICATION_PLANS.map((p) => (
                          <td key={p.id} className="p-3.5 text-center">
                            <Check className="w-4 h-4 mx-auto text-emerald-600 font-bold" />
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-[#111827]">Custom VPC Deployment</td>
                        {YEDII_APPLICATION_PLANS.map((p) => (
                          <td key={p.id} className="p-3.5 text-center">
                            {p.id === "enterprise" ? (
                              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                                Included
                              </span>
                            ) : (
                              <Minus className="w-4 h-4 mx-auto text-gray-400" />
                            )}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-3.5 font-medium text-[#111827]">SLA Guarantee</td>
                        {YEDII_APPLICATION_PLANS.map((p) => (
                          <td key={p.id} className="p-3.5 text-center font-medium">
                            {p.id === "enterprise" ? "99.99% custom SLA" : "Standard"}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
