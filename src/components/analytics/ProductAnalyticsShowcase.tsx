"use client";

import React, { useState } from "react";
import { ArrowUpRight, Calendar, ChevronDown } from "lucide-react";

const AGENTS = ["All agents", "Customer Support", "Technical Specialist", "Sales Inbound"] as const;
const RANGES = ["Last 7 days", "Last 30 days", "Last 90 days"] as const;

const METRICS_BY_RANGE: Record<
  (typeof RANGES)[number],
  {
    conversations: string;
    messages: string;
    resolution: string;
    csat: string;
    resolvedPct: number;
    escalatedPct: number;
    confidence: number;
    series: number[];
  }
> = {
  "Last 7 days": {
    conversations: "1,420",
    messages: "6,890",
    resolution: "78.4%",
    csat: "94.2%",
    resolvedPct: 78,
    escalatedPct: 16,
    confidence: 91,
    series: [140, 185, 170, 220, 245, 210, 250],
  },
  "Last 30 days": {
    conversations: "6,240",
    messages: "29,180",
    resolution: "81.2%",
    csat: "95.1%",
    resolvedPct: 81,
    escalatedPct: 14,
    confidence: 93,
    series: [160, 195, 230, 215, 260, 290, 315],
  },
  "Last 90 days": {
    conversations: "18,950",
    messages: "88,410",
    resolution: "83.6%",
    csat: "96.0%",
    resolvedPct: 84,
    escalatedPct: 12,
    confidence: 94,
    series: [120, 175, 210, 255, 280, 310, 340],
  },
};

const COUNTRIES = [
  { name: "United States", pct: 42 },
  { name: "India", pct: 24 },
  { name: "United Kingdom", pct: 15 },
  { name: "Germany", pct: 11 },
];

export function ProductAnalyticsShowcase() {
  const [selectedAgent, setSelectedAgent] = useState<(typeof AGENTS)[number]>("All agents");
  const [selectedRange, setSelectedRange] = useState<(typeof RANGES)[number]>("Last 30 days");

  const data = METRICS_BY_RANGE[selectedRange];
  const maxVal = Math.max(...data.series);

  return (
    <div className="product-showcase-scope w-full rounded-2xl border border-[#E8E9EC] bg-[#FBFBFC] p-4 sm:p-6 shadow-sm space-y-5 text-[#141C2E]">
      {/* Header + Filters (Matches AnalyticsPageContent.tsx) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F0F1F3]">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-[#141C2E]">Analytics</h3>
          <p className="text-xs text-[#6B7280] mt-0.5">
            Track AI support performance, resolution rates, sentiment, and country usage.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <select
              aria-label="Filter by agent"
              value={selectedAgent}
              onChange={(e) => setSelectedAgent(e.target.value as (typeof AGENTS)[number])}
              className="h-[32px] pl-3 pr-7 rounded-lg bg-white border border-[#E4E5E8] text-xs font-medium text-[#141C2E] appearance-none cursor-pointer"
            >
              {AGENTS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-[#6B7280] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-white border border-[#E4E5E8]">
            <Calendar className="w-3.5 h-3.5 text-[#6B7280] ml-1.5 mr-1" />
            {RANGES.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setSelectedRange(r)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium cursor-pointer ${
                  selectedRange === r
                    ? "bg-[#141C2E] text-white"
                    : "text-[#6B7280] hover:text-[#141C2E]"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Top 4 Metric Cards (Matches AnalyticsTopMetrics.tsx) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {[
          { label: "Total Conversations", value: data.conversations, delta: "+14.2%" },
          { label: "Total Messages", value: data.messages, delta: "+18.6%" },
          { label: "AI Resolution Rate", value: data.resolution, delta: "+4.8%" },
          { label: "User Satisfaction", value: data.csat, delta: "+2.1%" },
        ].map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-xl border border-[#E8E9EC] p-4 flex flex-col justify-between shadow-2xs"
          >
            <span className="text-xs font-medium text-[#6B7280]">{card.label}</span>
            <div className="text-2xl font-semibold text-[#141C2E] mt-1.5 tabular-nums">
              {card.value}
            </div>
            <div className="flex items-center gap-1 text-[11.5px] text-emerald-700 font-medium mt-2">
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>{card.delta} vs prior period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row: Conversation Activity + AI Resolution & Confidence */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Conversation Activity Bar/Area Chart */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-[#E8E9EC] p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold text-[#141C2E]">Conversation Activity</div>
              <div className="text-xs text-[#6B7280]">{selectedAgent} · {selectedRange}</div>
            </div>
            <span className="text-xs font-mono text-[#2563EB] font-semibold">Live</span>
          </div>

          <div className="h-[180px] flex items-end gap-2.5 pt-4">
            {data.series.map((val, idx) => {
              const heightPct = Math.round((val / maxVal) * 100);
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <div
                    className="w-full rounded-md bg-[#141C2E] hover:bg-[#2563EB] transition-colors"
                    style={{ height: `${heightPct}%` }}
                    title={`${val} conversations`}
                  />
                  <span className="text-[10px] font-mono text-[#8A9099]">D{idx + 1}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* AI Resolution, Confidence & Usage by Country */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-xl border border-[#E8E9EC] p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#141C2E]">AI Resolution &amp; Confidence</span>
              <span className="text-xs font-mono text-[#141C2E] font-semibold">
                {data.confidence}% confidence
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <div className="flex justify-between text-[#6B7280] mb-1">
                  <span>Resolved by AI</span>
                  <span className="font-semibold text-[#141C2E]">{data.resolvedPct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#F0F1F3] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#16A34A]"
                    style={{ width: `${data.resolvedPct}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[#6B7280] mb-1">
                  <span>Escalated to Inbox</span>
                  <span className="font-semibold text-[#141C2E]">{data.escalatedPct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[#F0F1F3] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#141C2E]"
                    style={{ width: `${data.escalatedPct}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-[#E8E9EC] p-4 space-y-2.5">
            <div className="text-xs font-semibold text-[#141C2E]">Usage by Country</div>
            <div className="space-y-2">
              {COUNTRIES.map((c) => (
                <div key={c.name} className="flex items-center justify-between text-xs">
                  <span className="text-[#565C66]">{c.name}</span>
                  <div className="flex items-center gap-2 w-36">
                    <div className="flex-1 h-1.5 rounded-full bg-[#F0F1F3] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#2563EB]"
                        style={{ width: `${c.pct}%` }}
                      />
                    </div>
                    <span className="font-mono text-[11px] text-[#141C2E] w-8 text-right">
                      {c.pct}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
