"use client";

import React from "react";
import { BillingCycle } from "./types";

interface PlansHeaderProps {
  billingCycle: BillingCycle;
  onBillingCycleChange: (cycle: BillingCycle) => void;
  title?: string;
  subtitle?: string;
}

export function PlansHeader({
  billingCycle,
  onBillingCycleChange,
  title = "Plans & pricing",
  subtitle = "Explore available plans to unlock additional features and expand your AI support capabilities."
}: PlansHeaderProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2">
      {/* Title & Subtitle */}
      <div className="max-w-[560px] flex flex-col gap-1">
        <h1 className="text-[20px] sm:text-[22px] font-semibold text-[#141C2E] tracking-[-0.48px] leading-[26px] sm:leading-[28.6px]">
          {title}
        </h1>
        <p className="text-[13.5px] sm:text-[14.5px] font-normal text-[#6B7280] leading-[20px] sm:leading-[22.48px]">
          {subtitle}
        </p>
      </div>

      {/* Monthly / Yearly Toggle Container */}
      <div className="w-full sm:w-[271.6px] max-w-[320px] h-[39.6px] rounded-[10px] border-[0.8px] border-[#E4E5E8] bg-white p-[3px] flex items-center gap-[2px] shrink-0 self-start sm:self-auto shadow-2xs">
        <button
          type="button"
          onClick={() => onBillingCycleChange("monthly")}
          className={`flex-1 sm:w-[80px] sm:flex-initial h-[32px] rounded-[8px] text-[13px] sm:text-[14px] font-semibold flex items-center justify-center transition-colors cursor-pointer select-none leading-none ${
            billingCycle === "monthly"
              ? "bg-[#141C2E] text-white shadow-xs"
              : "bg-transparent text-[#5A6070] hover:text-[#17181C]"
          }`}
        >
          Monthly
        </button>
        <button
          type="button"
          onClick={() => onBillingCycleChange("yearly")}
          className={`flex-1 sm:w-[182px] sm:flex-initial h-[32px] rounded-[8px] text-[13px] sm:text-[14px] font-semibold flex items-center justify-center transition-colors cursor-pointer select-none leading-none gap-1.5 ${
            billingCycle === "yearly"
              ? "bg-[#141C2E] text-white shadow-xs"
              : "bg-transparent text-[#5A6070] hover:text-[#17181C]"
          }`}
        >
          <span>Yearly — 2 mo free</span>
        </button>
      </div>
    </div>
  );
}
