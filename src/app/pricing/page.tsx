"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Check,
  Minus,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  ArrowRight
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

const MODEL_USAGE_DATA = [
  { name: "text-embedding-3-large", credits: "—", capability: "All search embeddings · 1536 / 3072", availability: "All plans" },
  { name: "GPT-4o Mini", credits: "1 credit", capability: "Everyday support replies", availability: "Starter +" },
  { name: "Claude 3.5 Haiku", credits: "1 credit", capability: "Fast edge classification & triage", availability: "Starter +" },
  { name: "Claude 3.5 Sonnet", credits: "5 credits", capability: "Deep reasoning & multi-step tools", availability: "Growth +" },
  { name: "GPT-4o", credits: "5 credits", capability: "Multi-modal & complex documents", availability: "Growth +" },
  { name: "DeepSeek V4.1 Flash", credits: "2 credits", capability: "High-speed reasoning & code", availability: "Starter +" },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [selectedPlanId, setSelectedPlanId] = useState<string>("growth");
  const [isCompareExpanded, setIsCompareExpanded] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827] font-sans selection:bg-[#141C2E] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full pt-20 pb-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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

          {/* 2. Plan Cards Grid (Exact Yedii_Application PlanCard.tsx) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {YEDII_APPLICATION_PLANS.map((plan) => {
              const isSelected = selectedPlanId === plan.id;
              const isCustomPrice = plan.monthlyPrice === null;
              const displayPrice = isCustomPrice
                ? "Custom"
                : billingCycle === "yearly"
                ? `$${plan.yearlyPrice}`
                : `$${plan.monthlyPrice}`;
              const displayPeriod = isCustomPrice
                ? ""
                : billingCycle === "yearly"
                ? "/ year"
                : "/ month";

              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`w-full min-h-[500px] rounded-[12px] p-5 bg-white flex flex-col justify-between transition-all duration-200 select-none cursor-pointer ${
                    isSelected
                      ? "border-[0.8px] border-[#141C2E] shadow-[0px_6px_18px_0px_rgba(16,24,40,0.08),0px_0px_0px_1px_#141C2E]"
                      : "border-[0.8px] border-[#E8E9EC] shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#D0D3D9]"
                  }`}
                >
                  <div className="flex flex-col">
                    {/* Name & Badge */}
                    <div className="flex items-center justify-between h-[24px]">
                      <h3 className="text-[15px] font-semibold text-[#141C2E] tracking-[-0.21px] leading-none">
                        {plan.name}
                      </h3>
                      {plan.isRecommended && (
                        <span className="h-[21px] px-2 rounded-[6px] bg-[#F4F5F7] border border-[#E0E2E6] text-[11px] font-semibold text-[#141C2E] flex items-center leading-none">
                          Recommended
                        </span>
                      )}
                    </div>

                    {/* Price Row */}
                    <div className="flex items-baseline gap-1 mt-3">
                      <span className="text-[28px] font-semibold text-[#141C2E] tracking-[-0.84px] leading-none">
                        {displayPrice}
                      </span>
                      {displayPeriod && (
                        <span className="text-[13.5px] font-normal text-[#6B7280] leading-none">
                          {displayPeriod}
                        </span>
                      )}
                    </div>

                    {/* Tagline */}
                    <p className="text-[14px] font-normal text-[#4A5058] mt-1.5 leading-tight">
                      {plan.tagline}
                    </p>

                    {/* Metrics Table */}
                    <div className="w-full py-3.5 my-3.5 border-t border-b border-[#F1F2F4] flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[13.5px]">
                        <span className="text-[#6B7280]">AI agents</span>
                        <span className="font-semibold text-[#22262E]">{plan.metrics.aiAgents}</span>
                      </div>
                      <div className="flex items-center justify-between text-[13.5px]">
                        <span className="text-[#6B7280]">Credits / month</span>
                        <span className="font-semibold text-[#22262E]">{plan.metrics.creditsPerMonth}</span>
                      </div>
                      <div className="flex items-center justify-between text-[13.5px]">
                        <span className="text-[#6B7280]">RAG storage</span>
                        <span className="font-semibold text-[#22262E]">{plan.metrics.ragStorage}</span>
                      </div>
                      <div className="flex items-center justify-between text-[13.5px]">
                        <span className="text-[#6B7280]">Team members</span>
                        <span className="font-semibold text-[#22262E]">{plan.metrics.members}</span>
                      </div>
                    </div>

                    {/* Features Checklist */}
                    <div className="space-y-2.5 mt-1">
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2 text-[13px] text-[#3A4049]">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Select Plan Action Button */}
                  <div className="mt-6 pt-3 border-t border-[#F1F2F4]">
                    <Link
                      href="https://app.yedii.com/signup"
                      className={`w-full h-[38px] rounded-[8px] text-[13px] font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                        isSelected
                          ? "bg-[#141C2E] text-white hover:bg-black"
                          : "bg-[#F4F5F7] text-[#141C2E] hover:bg-[#E8E9EC]"
                      }`}
                    >
                      <span>{plan.id === "enterprise" ? "Contact Enterprise" : "Select Plan"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. Compare All Features Table (Exact Yedii_Application CompareFeaturesTable.tsx) */}
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
                  <table className="w-full text-left border-collapse min-w-[760px] text-xs sm:text-sm">
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
                    <tbody className="divide-y divide-[#E2E4E9] text-xs sm:text-[13px]">
                      {/* Row 1: AI Agents */}
                      <tr>
                        <td className="p-3.5 font-medium text-[#4B5563]">AI Agents</td>
                        <td className="p-3.5 text-center font-semibold text-[#111827]">1</td>
                        <td className="p-3.5 text-center font-semibold text-[#111827]">3</td>
                        <td className="p-3.5 text-center font-semibold text-[#111827]">10</td>
                        <td className="p-3.5 text-center font-semibold text-[#111827]">Custom</td>
                      </tr>
                      {/* Row 2: Message Credits */}
                      <tr>
                        <td className="p-3.5 font-medium text-[#4B5563]">Credits / month</td>
                        <td className="p-3.5 text-center text-[#111827]">500</td>
                        <td className="p-3.5 text-center text-[#111827]">2,000</td>
                        <td className="p-3.5 text-center text-[#111827]">1,000</td>
                        <td className="p-3.5 text-center text-[#111827]">Custom</td>
                      </tr>
                      {/* Row 3: RAG Storage */}
                      <tr>
                        <td className="p-3.5 font-medium text-[#4B5563]">RAG Knowledge Storage</td>
                        <td className="p-3.5 text-center text-[#111827]">15 MB</td>
                        <td className="p-3.5 text-center text-[#111827]">15 MB</td>
                        <td className="p-3.5 text-center text-[#111827]">15 MB</td>
                        <td className="p-3.5 text-center text-[#111827]">Dedicated</td>
                      </tr>
                      {/* Row 4: Customizations */}
                      <tr>
                        <td className="p-3.5 font-medium text-[#4B5563]">Customizations</td>
                        <td className="p-3.5 text-center text-[#111827]">Basic</td>
                        <td className="p-3.5 text-center text-[#111827]">Standard</td>
                        <td className="p-3.5 text-center text-[#111827]">Advanced</td>
                        <td className="p-3.5 text-center text-[#111827]">Custom</td>
                      </tr>
                      {/* Row 5: Analytics */}
                      <tr>
                        <td className="p-3.5 font-medium text-[#4B5563]">Analytics & Reporting</td>
                        <td className="p-3.5 text-center text-[#111827]">Basic</td>
                        <td className="p-3.5 text-center text-[#111827]">Advanced</td>
                        <td className="p-3.5 text-center text-[#111827]">Advanced</td>
                        <td className="p-3.5 text-center text-[#111827]">Enterprise</td>
                      </tr>
                      {/* Row 6: Support */}
                      <tr>
                        <td className="p-3.5 font-medium text-[#4B5563]">Support Channel</td>
                        <td className="p-3.5 text-center text-[#111827]">Email</td>
                        <td className="p-3.5 text-center text-[#111827]">Priority Email</td>
                        <td className="p-3.5 text-center text-[#111827]">Priority Chat</td>
                        <td className="p-3.5 text-center text-[#111827]">Dedicated Manager</td>
                      </tr>
                      {/* Row 7: Re-Training & Re-Crawling */}
                      <tr>
                        <td className="p-3.5 font-medium text-[#4B5563]">On-Demand Re-Training</td>
                        <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                      </tr>
                      {/* Row 8: Remove Branding */}
                      <tr>
                        <td className="p-3.5 font-medium text-[#4B5563]">Remove Yedii Branding</td>
                        <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                        <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                      </tr>
                      {/* Row 9: 2FA & Security */}
                      <tr>
                        <td className="p-3.5 font-medium text-[#4B5563]">Two-Factor Auth (2FA)</td>
                        <td className="p-3.5 text-center"><Minus className="w-4 h-4 text-[#8A9099] mx-auto" /></td>
                        <td className="p-3.5 text-center"><Minus className="w-4 h-4 text-[#8A9099] mx-auto" /></td>
                        <td className="p-3.5 text-center"><Minus className="w-4 h-4 text-[#8A9099] mx-auto" /></td>
                        <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* 4. Model Usage Credits Breakdown Table (Exact Yedii_Application AiModelUsageSection.tsx) */}
          <div className="w-full flex flex-col gap-3 pt-6">
            <div>
              <h2 className="text-[18px] font-semibold text-[#141C2E] tracking-[-0.27px]">
                AI Model Credit Costs
              </h2>
              <p className="text-[13.5px] font-normal text-[#6B7280]">
                Credits consumed per message exchange depending on the selected model engine.
              </p>
            </div>

            <div className="w-full rounded-[14px] border border-[#E2E4E9] bg-white overflow-hidden shadow-xs">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#F8F9FA] border-b border-[#E2E4E9]">
                    <th className="p-3.5 font-semibold text-[#4B5563]">Model Engine</th>
                    <th className="p-3.5 font-semibold text-[#4B5563]">Credit Cost</th>
                    <th className="p-3.5 font-semibold text-[#4B5563]">Primary Capability</th>
                    <th className="p-3.5 font-semibold text-[#4B5563]">Plan Availability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E4E9] text-xs sm:text-[13px]">
                  {MODEL_USAGE_DATA.map((row) => (
                    <tr key={row.name} className="hover:bg-zinc-50/60 transition-colors">
                      <td className="p-3.5 font-semibold text-[#111827]">{row.name}</td>
                      <td className="p-3.5 font-mono text-emerald-700 font-semibold">{row.credits}</td>
                      <td className="p-3.5 text-[#4B5563]">{row.capability}</td>
                      <td className="p-3.5 text-[#111827]">{row.availability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
