"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown, Check, Minus } from "lucide-react";
import { PlanItem, BillingCycle, YEDII_APPLICATION_PLANS } from "./types";

interface CompareFeaturesTableProps {
  plans?: PlanItem[];
  billingCycle?: BillingCycle;
}

function extractLevel(features: string[], pattern: RegExp, suffix: string): string {
  const feat = features.find((f) => pattern.test(f));
  if (!feat) return "—";
  const regex = new RegExp(`^([A-Za-z]+)\\s+${suffix}`, "i");
  const match = feat.match(regex);
  if (match) {
    const word = match[1];
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return feat;
}

function extractSupport(features: string[]): string {
  const feat = features.find((f) => /support/i.test(f));
  if (!feat) return "—";
  const cleaned = feat.replace(/\s+support$/i, "").trim();
  const words = cleaned.split(/\s+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1));
  return words.join(" ");
}

function hasFeature(features: string[], pattern: RegExp): boolean {
  return features.some((f) => pattern.test(f));
}

export function CompareFeaturesTable({
  plans,
  billingCycle = "yearly",
}: CompareFeaturesTableProps = {}) {
  const [isExpanded, setIsExpanded] = useState(true);

  const displayPlans = plans && plans.length > 0 ? plans : YEDII_APPLICATION_PLANS;

  const standardFeaturePatterns = [
    /customization/i,
    /analytic/i,
    /support/i,
    /re-?train/i,
    /re-?crawl/i,
    /quick summary|summary/i,
    /remove branding|custom branding|branding/i,
    /two-factor|2fa/i,
  ];

  const extraFeatures = Array.from(
    new Set(
      displayPlans.flatMap((p) => p.features || []).filter(
        (feat) => !standardFeaturePatterns.some((pattern) => pattern.test(feat))
      )
    )
  );

  return (
    <div className="w-full flex flex-col gap-3.5 pt-4">
      {/* SECTION HEADER */}
      <div className="w-full flex items-center justify-between">
        <div>
          <h2 className="text-[17px] font-semibold text-[#141C2E] tracking-[-0.27px]">
            Compare all features
          </h2>
          <p className="text-[14px] font-normal text-[#6B7280] leading-[21.7px]">
            Every limit and feature, side by side.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border border-[#E5E7EB] bg-white hover:bg-slate-50 text-[13px] font-medium text-[#2A2E36] hover:text-[#141C2E] shadow-2xs transition-all cursor-pointer select-none"
        >
          <span>{isExpanded ? "Hide full comparison" : "Show full comparison"}</span>
          {isExpanded ? (
            <ChevronUp className="w-3.5 h-3.5 stroke-[2]" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 stroke-[2]" />
          )}
        </button>
      </div>

      {/* MATRIX TABLE CARD WITH PREMIUM ROW AND COLUMN BORDERS */}
      {isExpanded && (
        <div className="w-full rounded-[14px] border border-[#E2E4E9] bg-white overflow-hidden shadow-[0_2px_10px_-2px_rgba(16,24,40,0.05),0_1px_3px_rgba(16,24,40,0.03)]">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0 min-w-[760px]">
              {/* TABLE HEADER (COLUMNS) */}
              <thead>
                <tr>
                  <th className="w-[230px] min-w-[210px] p-[16px_18px] text-[13.5px] font-semibold text-[#4B5563] bg-[#F8F9FA] border-b border-r border-[#E2E4E9]">
                    Capability
                  </th>
                  {displayPlans.map((plan) => {
                    const priceLabel =
                      plan.monthlyPrice === null
                        ? "Custom"
                        : plan.isFree || plan.monthlyPrice === 0
                        ? "$0 / forever"
                        : billingCycle === "yearly"
                        ? `$${plan.yearlyPrice} / yr`
                        : `$${plan.monthlyPrice} / mo`;

                    return (
                      <th
                        key={plan.id}
                        className="p-[16px_20px] text-center border-b border-r border-[#E2E4E9] last:border-r-0 bg-[#F8F9FA] transition-colors"
                      >
                        <div className="flex items-center justify-center gap-2 flex-wrap">
                          <span className="text-[14.5px] font-semibold text-[#111827] tracking-[-0.2px]">
                            {plan.name}
                          </span>
                          <span className="text-[13px] font-medium text-[#4B5563]">
                            {priceLabel}
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              {/* TABLE BODY (ROWS) */}
              <tbody className="text-[13.5px] text-[#22262E]">
                {/* CATEGORY: CAPACITY & LIMITS */}
                <tr>
                  <td
                    colSpan={displayPlans.length + 1}
                    className="px-[18px] py-2.5 text-[11px] font-bold uppercase tracking-[0.85px] text-[#4B5563] bg-[#EDF0F5] border-b border-[#E2E4E9]"
                  >
                    Capacity &amp; Limits
                  </td>
                </tr>

                {/* ROW: AI AGENTS */}
                <tr className="group">
                  <td className="p-[13px_18px] font-medium text-[#374151] bg-[#FAFAFC] border-b border-r border-[#E5E7EB] group-hover:bg-[#F3F4F7] transition-colors">
                    AI agents
                  </td>
                  {displayPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className={`p-[13px_20px] text-center font-semibold text-[#111827] border-b border-r border-[#E5E7EB] last:border-r-0 transition-colors ${
                        plan.isRecommended
                          ? "bg-[#FAFBFD] group-hover:bg-[#F0F3FA]"
                          : "bg-white group-hover:bg-[#F9FAFB]"
                      }`}
                    >
                      {plan.metrics.aiAgents}
                    </td>
                  ))}
                </tr>

                {/* ROW: AI CREDITS / MONTH */}
                <tr className="group">
                  <td className="p-[13px_18px] font-medium text-[#374151] bg-[#FAFAFC] border-b border-r border-[#E5E7EB] group-hover:bg-[#F3F4F7] transition-colors">
                    AI credits / month
                  </td>
                  {displayPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className={`p-[13px_20px] text-center font-semibold text-[#111827] border-b border-r border-[#E5E7EB] last:border-r-0 transition-colors ${
                        plan.isRecommended
                          ? "bg-[#FAFBFD] group-hover:bg-[#F0F3FA]"
                          : "bg-white group-hover:bg-[#F9FAFB]"
                      }`}
                    >
                      {plan.metrics.creditsPerMonth}
                    </td>
                  ))}
                </tr>

                {/* ROW: RAG STORAGE */}
                <tr className="group">
                  <td className="p-[13px_18px] font-medium text-[#374151] bg-[#FAFAFC] border-b border-r border-[#E5E7EB] group-hover:bg-[#F3F4F7] transition-colors">
                    RAG storage
                  </td>
                  {displayPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className={`p-[13px_20px] text-center font-semibold text-[#111827] border-b border-r border-[#E5E7EB] last:border-r-0 transition-colors ${
                        plan.isRecommended
                          ? "bg-[#FAFBFD] group-hover:bg-[#F0F3FA]"
                          : "bg-white group-hover:bg-[#F9FAFB]"
                      }`}
                    >
                      {plan.metrics.ragStorage}
                    </td>
                  ))}
                </tr>

                {/* ROW: WORKSPACE */}
                <tr className="group">
                  <td className="p-[13px_18px] font-medium text-[#374151] bg-[#FAFAFC] border-b border-r border-[#E5E7EB] group-hover:bg-[#F3F4F7] transition-colors">
                    Workspace
                  </td>
                  {displayPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className={`p-[13px_20px] text-center font-semibold text-[#111827] border-b border-r border-[#E5E7EB] last:border-r-0 transition-colors ${
                        plan.isRecommended
                          ? "bg-[#FAFBFD] group-hover:bg-[#F0F3FA]"
                          : "bg-white group-hover:bg-[#F9FAFB]"
                      }`}
                    >
                      {plan.metrics.workspaces ?? 1}
                    </td>
                  ))}
                </tr>

                {/* CATEGORY: AI & MODELS */}
                <tr>
                  <td
                    colSpan={displayPlans.length + 1}
                    className="px-[18px] py-2.5 text-[11px] font-bold uppercase tracking-[0.85px] text-[#4B5563] bg-[#EDF0F5] border-b border-[#E2E4E9]"
                  >
                    AI &amp; Models
                  </td>
                </tr>

                {/* ROW: SUPPORTED AI MODELS */}
                <tr className="group">
                  <td className="p-[13px_18px] font-medium text-[#374151] bg-[#FAFAFC] border-b border-r border-[#E5E7EB] group-hover:bg-[#F3F4F7] transition-colors">
                    AI Models
                  </td>
                  {displayPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className={`p-[13px_20px] border-b border-r border-[#E5E7EB] last:border-r-0 transition-colors ${
                        plan.isRecommended
                          ? "bg-[#FAFBFD] group-hover:bg-[#F0F3FA]"
                          : "bg-white group-hover:bg-[#F9FAFB]"
                      }`}
                    >
                      <div
                        className="flex items-center justify-center -space-x-1.5 shrink-0"
                        title="Supported AI Models: OpenAI GPT, Claude, Gemini, DeepSeek, Grok"
                      >
                        {/* OpenAI / GPT */}
                        <div
                          title="OpenAI GPT"
                          className="w-[20px] h-[20px] rounded-full bg-[#111111] border-[1.5px] border-white shadow-xs flex items-center justify-center p-[3px] hover:scale-110 hover:z-10 transition-transform cursor-pointer shrink-0"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                            <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.66-4.1354a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1401-1.6564zm-1.6375-10.743a4.466 4.466 0 0 1 2.3418-1.9729v5.6015a.7712.7712 0 0 0 .3879.6766l5.8144 3.3543-2.02 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866a4.4992 4.4992 0 0 1-1.6228-6.0412zm16.597 3.8558l-5.838-3.3685 2.0199-1.1683a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4067-.6815zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L8.709 9.397V7.0646a.071.071 0 0 1 .0331-.0615l4.8816-2.8152a4.4992 4.4992 0 0 1 6.6749 4.6305zm-11.026 4.1354l-2.02-1.1683v-2.3324l5.8428-3.3685 2.02 1.1683v2.3324z" />
                          </svg>
                        </div>

                        {/* Claude */}
                        <div
                          title="Anthropic Claude"
                          className="w-[20px] h-[20px] rounded-full bg-[#FBF0EA] border-[1.5px] border-white shadow-xs overflow-hidden flex items-center justify-center hover:scale-110 hover:z-10 transition-transform cursor-pointer shrink-0"
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

                        {/* Gemini */}
                        <div
                          title="Google Gemini"
                          className="w-[20px] h-[20px] rounded-full bg-white border-[1.5px] border-white shadow-xs overflow-hidden flex items-center justify-center hover:scale-110 hover:z-10 transition-transform cursor-pointer shrink-0"
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
                          className="w-[20px] h-[20px] rounded-full bg-[#EEF4FF] border-[1.5px] border-white shadow-xs overflow-hidden flex items-center justify-center hover:scale-110 hover:z-10 transition-transform cursor-pointer shrink-0"
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

                        {/* xAI Grok */}
                        <div
                          title="xAI Grok"
                          className="w-[20px] h-[20px] rounded-full bg-[#111111] border-[1.5px] border-white shadow-xs flex items-center justify-center p-[3px] hover:scale-110 hover:z-10 transition-transform cursor-pointer shrink-0"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* CATEGORY: FEATURES & CUSTOMIZATION */}
                <tr>
                  <td
                    colSpan={displayPlans.length + 1}
                    className="px-[18px] py-2.5 text-[11px] font-bold uppercase tracking-[0.85px] text-[#4B5563] bg-[#EDF0F5] border-b border-[#E2E4E9]"
                  >
                    Features &amp; Customization
                  </td>
                </tr>

                {/* ROW: CUSTOMIZATIONS */}
                <tr className="group">
                  <td className="p-[13px_18px] font-medium text-[#374151] bg-[#FAFAFC] border-b border-r border-[#E5E7EB] group-hover:bg-[#F3F4F7] transition-colors">
                    Customizations
                  </td>
                  {displayPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className={`p-[13px_20px] text-center font-medium text-[#1F2937] border-b border-r border-[#E5E7EB] last:border-r-0 transition-colors ${
                        plan.isRecommended
                          ? "bg-[#FAFBFD] group-hover:bg-[#F0F3FA]"
                          : "bg-white group-hover:bg-[#F9FAFB]"
                      }`}
                    >
                      {extractLevel(plan.features || [], /customization/i, "customizations?")}
                    </td>
                  ))}
                </tr>

                {/* ROW: ANALYTICS */}
                <tr className="group">
                  <td className="p-[13px_18px] font-medium text-[#374151] bg-[#FAFAFC] border-b border-r border-[#E5E7EB] group-hover:bg-[#F3F4F7] transition-colors">
                    Analytics
                  </td>
                  {displayPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className={`p-[13px_20px] text-center font-medium text-[#1F2937] border-b border-r border-[#E5E7EB] last:border-r-0 transition-colors ${
                        plan.isRecommended
                          ? "bg-[#FAFBFD] group-hover:bg-[#F0F3FA]"
                          : "bg-white group-hover:bg-[#F9FAFB]"
                      }`}
                    >
                      {extractLevel(plan.features || [], /analytic/i, "analytics?")}
                    </td>
                  ))}
                </tr>

                {/* ROW: SUPPORT */}
                <tr className="group">
                  <td className="p-[13px_18px] font-medium text-[#374151] bg-[#FAFAFC] border-b border-r border-[#E5E7EB] group-hover:bg-[#F3F4F7] transition-colors">
                    Support
                  </td>
                  {displayPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className={`p-[13px_20px] text-center font-medium text-[#1F2937] border-b border-r border-[#E5E7EB] last:border-r-0 transition-colors ${
                        plan.isRecommended
                          ? "bg-[#FAFBFD] group-hover:bg-[#F0F3FA]"
                          : "bg-white group-hover:bg-[#F9FAFB]"
                      }`}
                    >
                      {extractSupport(plan.features || [])}
                    </td>
                  ))}
                </tr>

                {/* ROW: RE-TRAINING */}
                <tr className="group">
                  <td className="p-[13px_18px] font-medium text-[#374151] bg-[#FAFAFC] border-b border-r border-[#E5E7EB] group-hover:bg-[#F3F4F7] transition-colors">
                    Re-Training
                  </td>
                  {displayPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className={`p-[13px_20px] border-b border-r border-[#E5E7EB] last:border-r-0 transition-colors ${
                        plan.isRecommended
                          ? "bg-[#FAFBFD] group-hover:bg-[#F0F3FA]"
                          : "bg-white group-hover:bg-[#F9FAFB]"
                      }`}
                    >
                      <div className="flex items-center justify-center w-full">
                        {hasFeature(plan.features || [], /re-?train/i) ? (
                          <Check className="w-[18px] h-[18px] text-[#141C2E] stroke-[2.5]" />
                        ) : (
                          <Minus className="w-4 h-4 text-[#9AA0A8] stroke-[2]" />
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* ROW: RE-CRAWLING */}
                <tr className="group">
                  <td className="p-[13px_18px] font-medium text-[#374151] bg-[#FAFAFC] border-b border-r border-[#E5E7EB] group-hover:bg-[#F3F4F7] transition-colors">
                    Re-Crawling
                  </td>
                  {displayPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className={`p-[13px_20px] border-b border-r border-[#E5E7EB] last:border-r-0 transition-colors ${
                        plan.isRecommended
                          ? "bg-[#FAFBFD] group-hover:bg-[#F0F3FA]"
                          : "bg-white group-hover:bg-[#F9FAFB]"
                      }`}
                    >
                      <div className="flex items-center justify-center w-full">
                        {hasFeature(plan.features || [], /re-?crawl/i) ? (
                          <Check className="w-[18px] h-[18px] text-[#141C2E] stroke-[2.5]" />
                        ) : (
                          <Minus className="w-4 h-4 text-[#9AA0A8] stroke-[2]" />
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* ROW: QUICK SUMMARY */}
                <tr className="group">
                  <td className="p-[13px_18px] font-medium text-[#374151] bg-[#FAFAFC] border-b border-r border-[#E5E7EB] group-hover:bg-[#F3F4F7] transition-colors">
                    Quick Summary
                  </td>
                  {displayPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className={`p-[13px_20px] border-b border-r border-[#E5E7EB] last:border-r-0 transition-colors ${
                        plan.isRecommended
                          ? "bg-[#FAFBFD] group-hover:bg-[#F0F3FA]"
                          : "bg-white group-hover:bg-[#F9FAFB]"
                      }`}
                    >
                      <div className="flex items-center justify-center w-full">
                        {hasFeature(plan.features || [], /quick summary|summary/i) ? (
                          <Check className="w-[18px] h-[18px] text-[#141C2E] stroke-[2.5]" />
                        ) : (
                          <Minus className="w-4 h-4 text-[#9AA0A8] stroke-[2]" />
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* ROW: REMOVE BRANDING */}
                <tr className="group">
                  <td className="p-[13px_18px] font-medium text-[#374151] bg-[#FAFAFC] border-b border-r border-[#E5E7EB] group-hover:bg-[#F3F4F7] transition-colors">
                    Remove Branding
                  </td>
                  {displayPlans.map((plan) => (
                    <td
                      key={plan.id}
                      className={`p-[13px_20px] border-b border-r border-[#E5E7EB] last:border-r-0 transition-colors ${
                        plan.isRecommended
                          ? "bg-[#FAFBFD] group-hover:bg-[#F0F3FA]"
                          : "bg-white group-hover:bg-[#F9FAFB]"
                      }`}
                    >
                      <div className="flex items-center justify-center w-full">
                        {hasFeature(plan.features || [], /remove branding|custom branding|branding/i) ? (
                          <Check className="w-[18px] h-[18px] text-[#141C2E] stroke-[2.5]" />
                        ) : (
                          <Minus className="w-4 h-4 text-[#9AA0A8] stroke-[2]" />
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* ROW: 2FA (if any plan has it) */}
                {displayPlans.some((p) => hasFeature(p.features || [], /two-factor|2fa/i)) && (
                  <tr className="group">
                    <td className="p-[13px_18px] font-medium text-[#374151] bg-[#FAFAFC] border-b border-r border-[#E5E7EB] group-hover:bg-[#F3F4F7] transition-colors">
                      Two-factor authentication (2FA)
                    </td>
                    {displayPlans.map((plan) => (
                      <td
                        key={plan.id}
                        className={`p-[13px_20px] border-b border-r border-[#E5E7EB] last:border-r-0 transition-colors ${
                          plan.isRecommended
                            ? "bg-[#FAFBFD] group-hover:bg-[#F0F3FA]"
                            : "bg-white group-hover:bg-[#F9FAFB]"
                        }`}
                      >
                        <div className="flex items-center justify-center w-full">
                          {hasFeature(plan.features || [], /two-factor|2fa/i) ? (
                            <Check className="w-[18px] h-[18px] text-[#141C2E] stroke-[2.5]" />
                          ) : (
                            <Minus className="w-4 h-4 text-[#9AA0A8] stroke-[2]" />
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                )}

                {/* EXTRA DYNAMIC FEATURES */}
                {extraFeatures.map((feat) => (
                  <tr key={feat} className="group">
                    <td className="p-[13px_18px] font-medium text-[#374151] bg-[#FAFAFC] border-b border-r border-[#E5E7EB] group-hover:bg-[#F3F4F7] transition-colors">
                      {feat}
                    </td>
                    {displayPlans.map((plan) => (
                      <td
                        key={plan.id}
                        className={`p-[13px_20px] border-b border-r border-[#E5E7EB] last:border-r-0 transition-colors ${
                          plan.isRecommended
                            ? "bg-[#FAFBFD] group-hover:bg-[#F0F3FA]"
                          : "bg-white group-hover:bg-[#F9FAFB]"
                        }`}
                      >
                        <div className="flex items-center justify-center w-full">
                          {(plan.features || []).includes(feat) ? (
                            <Check className="w-[18px] h-[18px] text-[#141C2E] stroke-[2.5]" />
                          ) : (
                            <Minus className="w-4 h-4 text-[#9AA0A8] stroke-[2]" />
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
