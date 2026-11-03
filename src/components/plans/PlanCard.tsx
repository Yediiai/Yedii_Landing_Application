"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { PlanItem, BillingCycle, PlanId } from "./types";
import { SupportedAiModelsBadges } from "./SupportedAiModelsBadges";

interface PlanCardProps {
  plan: PlanItem;
  billingCycle: BillingCycle;
  isSelected: boolean;
  onSelect: (id: PlanId) => void;
}

export function PlanCard({
  plan,
  billingCycle,
  isSelected,
  onSelect
}: PlanCardProps) {
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
      onClick={() => onSelect(plan.id)}
      className={`w-[285px] sm:w-[296px] min-w-[285px] sm:min-w-[296px] min-h-[500px] sm:min-h-[517px] snap-start shrink-0 rounded-[12px] p-4 sm:p-5 bg-white flex flex-col justify-between transition-all duration-200 select-none cursor-pointer ${
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
          {plan.isRecommended ? (
            <span className="h-[21px] px-2 rounded-[6px] bg-[#F4F5F7] border border-[#E0E2E6] text-[11px] font-semibold text-[#141C2E] flex items-center leading-none">
              Recommended
            </span>
          ) : plan.isFree ? (
            <span className="h-[21px] px-2 rounded-[6px] bg-emerald-50 border border-emerald-200 text-[11px] font-semibold text-emerald-800 flex items-center leading-none">
              Free
            </span>
          ) : null}
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
        <div className="w-full py-3.5 my-3.5 border-t border-b border-[#F1F2F4] flex flex-col gap-2 text-[13.5px]">
          <div className="flex items-center justify-between">
            <span className="text-[#6B7280]">AI agents</span>
            <span className="font-semibold text-[#22262E]">{plan.metrics.aiAgents}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#6B7280]">AI credits / month</span>
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
        <div className="flex flex-col gap-2 pt-1 pb-4">
          {plan.features.map((feat, i) => (
            <div key={i} className="flex items-start gap-2 text-[13.5px] text-[#3A4049]">
              <div className="w-[14px] h-[14px] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-[12px] h-[12px] stroke-[2.5] text-[#141C2E]" />
              </div>
              <span className="leading-[19.6px]">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Select Plan Action Button */}
      <div className="pt-2">
        <Link
          href={plan.isFree ? "https://app.yedii.com/signup" : `https://app.yedii.com/signup?plan=${plan.id}`}
          className={`w-full h-[40px] rounded-[9px] text-[14px] font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer select-none shadow-xs ${
            plan.isFree
              ? "border-[0.8px] border-[#141C2E] bg-[#141C2E] text-white hover:bg-slate-800"
              : isSelected
              ? "border-[0.8px] border-[#141C2E] bg-[#141C2E] text-white hover:bg-slate-800"
              : "border-[0.8px] border-[#E0E2E6] bg-white hover:bg-slate-50 text-[#141C2E]"
          }`}
        >
          <span>
            {plan.isFree
              ? "Continue with Free"
              : isSelected
              ? "Selected"
              : plan.id === "enterprise"
              ? "Contact sales"
              : `Select ${plan.name}`}
          </span>
        </Link>
      </div>
    </div>
  );
}
