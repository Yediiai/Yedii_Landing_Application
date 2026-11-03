"use client";

import React, { useState } from "react";
import { Check, Minus, ChevronDown, ChevronUp } from "lucide-react";
import { PlanItem } from "./types";

interface CompareFeaturesTableProps {
  plans: PlanItem[];
  defaultExpanded?: boolean;
}

export function CompareFeaturesTable({
  plans,
  defaultExpanded = true
}: CompareFeaturesTableProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

  return (
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
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] border border-[#E5E7EB] bg-white hover:bg-slate-50 text-[13px] font-medium text-[#2A2E36] hover:text-[#141C2E] shadow-2xs transition-all cursor-pointer select-none"
        >
          <span>{isExpanded ? "Hide full comparison" : "Show full comparison"}</span>
          {isExpanded ? (
            <ChevronUp className="w-3.5 h-3.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {isExpanded && (
        <div className="w-full rounded-[14px] border border-[#E2E4E9] bg-white overflow-hidden shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[850px] text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#F8F9FA] border-b border-[#E2E4E9]">
                  <th className="p-3.5 font-semibold text-[#4B5563] w-[240px]">Capability</th>
                  {plans.map((p) => (
                    <th key={p.id} className="p-3.5 text-center font-semibold text-[#111827]">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAEBEE] text-gray-700">
                <tr>
                  <td className="p-3.5 font-medium text-[#111827]">AI Agents</td>
                  {plans.map((p) => (
                    <td key={p.id} className="p-3.5 text-center font-semibold text-[#141C2E]">
                      {p.metrics.aiAgents}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-[#111827]">Monthly Credits</td>
                  {plans.map((p) => (
                    <td key={p.id} className="p-3.5 text-center font-semibold text-[#141C2E]">
                      {p.metrics.creditsPerMonth}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-[#111827]">RAG Document Storage</td>
                  {plans.map((p) => (
                    <td key={p.id} className="p-3.5 text-center font-medium">
                      {p.metrics.ragStorage}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-[#111827]">Workspaces</td>
                  {plans.map((p) => (
                    <td key={p.id} className="p-3.5 text-center font-medium">
                      {p.metrics.workspaces}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-[#111827]">Remove Yedii Branding</td>
                  {plans.map((p) => (
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
                  {plans.map((p) => (
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
                  {plans.map((p) => (
                    <td key={p.id} className="p-3.5 text-center font-medium text-xs text-[#4B5563]">
                      OpenAI, Claude, Gemini, DeepSeek, Grok
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-[#111827]">Human Handoff Inbox</td>
                  {plans.map((p) => (
                    <td key={p.id} className="p-3.5 text-center">
                      <Check className="w-4 h-4 mx-auto text-emerald-600 font-bold" />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3.5 font-medium text-[#111827]">Custom VPC Deployment</td>
                  {plans.map((p) => (
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
                  {plans.map((p) => (
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
  );
}
