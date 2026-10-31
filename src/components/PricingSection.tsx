"use client";

import { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

interface PlanItem {
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

const YEDII_PLANS: PlanItem[] = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 19,
    yearlyPrice: 110,
    tagline: "For starter teams",
    isRecommended: false,
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
    tagline: "For growth teams",
    isRecommended: true,
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
    isRecommended: false,
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
    isRecommended: false,
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

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");
  const [selectedPlanId, setSelectedPlanId] = useState<string>("growth");

  return (
    <section id="pricing" className="py-6 md:py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Billing Cycle Toggle */}
        <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div className="max-w-[560px] flex flex-col gap-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold w-fit mb-1">
              <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
              Transparent Pricing
            </div>
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#141C2E] tracking-[-0.48px] leading-tight">
              Plans &amp; pricing
            </h2>
            <p className="text-[13px] font-normal text-[#6B7280] leading-snug">
              Explore available plans to unlock additional features and expand your AI support capabilities.
            </p>
          </div>

          {/* Billing Cycle Toggle */}
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

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {YEDII_PLANS.map((plan) => {
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
                className={`w-full min-h-[480px] rounded-[12px] p-5 bg-white flex flex-col justify-between transition-all duration-200 select-none cursor-pointer ${
                  isSelected
                    ? "border-[0.8px] border-[#141C2E] shadow-[0px_6px_18px_0px_rgba(16,24,40,0.08),0px_0px_0px_1px_#141C2E]"
                    : "border-[0.8px] border-[#E8E9EC] shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#D0D3D9]"
                }`}
              >
                {/* Top Section */}
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

                  {/* Price */}
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
                  <p className="text-[13px] font-normal text-[#4A5058] mt-1.5 leading-snug">
                    {plan.tagline}
                  </p>

                  {/* Metrics Table */}
                  <div className="w-full py-3 my-3 border-t border-b border-[#F1F2F4] flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="text-[#6B7280]">AI agents</span>
                      <span className="font-semibold text-[#22262E]">{plan.metrics.aiAgents}</span>
                    </div>
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="text-[#6B7280]">Credits / month</span>
                      <span className="font-semibold text-[#22262E]">{plan.metrics.creditsPerMonth}</span>
                    </div>
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="text-[#6B7280]">RAG storage</span>
                      <span className="font-semibold text-[#22262E]">{plan.metrics.ragStorage}</span>
                    </div>
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="text-[#6B7280]">Team members</span>
                      <span className="font-semibold text-[#22262E]">{plan.metrics.members}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mt-1">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#3A4049]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-5 pt-3 border-t border-[#F1F2F4]">
                  <Link
                    href="/pricing"
                    className={`w-full h-[38px] rounded-[8px] text-[13px] font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                      isSelected
                        ? "bg-[#141C2E] text-white hover:bg-[#1E293B]"
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
      </div>
    </section>
  );
}
