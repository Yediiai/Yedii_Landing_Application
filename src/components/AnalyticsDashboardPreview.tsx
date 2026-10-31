"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  ChevronDown,
  Calendar,
  Filter,
  Check
} from "lucide-react";

export function AnalyticsDashboardPreview() {
  const [selectedAgent, setSelectedAgent] = useState("All agents");
  const [isAgentDropdownOpen, setIsAgentDropdownOpen] = useState(false);
  const [hoveredConvPoint, setHoveredConvPoint] = useState<number | null>(3); // Default show Oct 20 tooltip
  const [hoveredMsgBar, setHoveredMsgBar] = useState<number | null>(4); // Default show Oct 26 tooltip

  const agentsList = ["All agents", "Aura Support Bot", "Nexus SDR Agent", "Atlas Internal Copilot"];

  // Conversation chart points (matching screenshot curve)
  const convPoints = [
    { date: "Oct 2", val: 0, label: "Fri, Oct 2" },
    { date: "Oct 8", val: 0, label: "Thu, Oct 8" },
    { date: "Oct 14", val: 0, label: "Wed, Oct 14" },
    { date: "Oct 20", val: 0, label: "Tue, Oct 20" },
    { date: "Oct 26", val: 0.8, label: "Mon, Oct 26" },
    { date: "Oct 28", val: 0.2, label: "Wed, Oct 28" },
    { date: "Oct 30", val: 3.8, label: "Fri, Oct 30 (Peak)" },
    { date: "Nov 1", val: 0, label: "Sun, Nov 1" },
  ];

  // Message activity bars (matching screenshot with dark peak bar)
  const msgBars = [
    { date: "Oct 2", val: 0, label: "Fri, Oct 2: 0 messages" },
    { date: "Oct 8", val: 0, label: "Thu, Oct 8: 0 messages" },
    { date: "Oct 14", val: 0, label: "Wed, Oct 14: 0 messages" },
    { date: "Oct 20", val: 0, label: "Tue, Oct 20: 0 messages" },
    { date: "Oct 26", val: 0, label: "Mon, Oct 26: 0 messages" },
    { date: "Oct 30", val: 9.8, label: "Fri, Oct 30: 10 messages (Peak)" },
    { date: "Nov 1", val: 0, label: "Sun, Nov 1: 0 messages" },
  ];

  // Circular Donut Dimensions
  const donutSize = 136;
  const strokeWidth = 14;
  const radius = (donutSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const pctResolved = 0.929;
  const lenResolved = circumference * pctResolved;
  const lenUnresolved = circumference * (1 - pctResolved);

  return (
    <div className="w-full bg-[#FBFBFC] rounded-2xl border border-[#E8E9EC] p-4 sm:p-6 shadow-xs select-none">
      {/* 1. Header Row (Title, Subtitle & Dropdowns) */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#F0F1F3]">
        <div>
          <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#141C2E] leading-tight tracking-[-0.3px]">
            Analytics
          </h3>
          <p className="text-[12.5px] sm:text-[13px] font-normal text-[#6B7280] leading-snug mt-0.5">
            Track your AI support performance and understand how your agents are helping customers.
          </p>
        </div>

        {/* Header Controls */}
        <div className="flex items-center gap-2 self-start sm:self-auto relative">
          {/* Agent Filter Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsAgentDropdownOpen(!isAgentDropdownOpen)}
              className="h-[32px] px-3 rounded-[8px] bg-white border border-[#E4E5E8] text-[12px] font-medium text-[#141C2E] flex items-center gap-1.5 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <span>{selectedAgent}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#6B7280]" />
            </button>

            {isAgentDropdownOpen && (
              <div className="absolute right-0 top-full mt-1 w-44 rounded-xl bg-white border border-[#E4E5E8] shadow-lg py-1 z-30">
                {agentsList.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => {
                      setSelectedAgent(a);
                      setIsAgentDropdownOpen(false);
                    }}
                    className="w-full px-3 py-1.5 text-left text-xs text-[#141C2E] hover:bg-zinc-50 flex items-center justify-between"
                  >
                    <span>{a}</span>
                    {selectedAgent === a && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date Range Picker Pill */}
          <div className="h-[32px] px-3 rounded-[8px] bg-white border border-[#E4E5E8] text-[12px] font-medium text-[#141C2E] flex items-center gap-1.5 shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-[#6B7280]" />
            <span>Oct 2 – Nov 1 GMT+05:30</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#6B7280]" />
          </div>
        </div>
      </div>

      {/* 2. Top Metric Cards Row (6 Cards exactly as in app.yedii.com/analytics) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
        {/* Metric 1: Active agents */}
        <div className="bg-white rounded-[10px] border border-[#E8E9EC] p-3 flex flex-col justify-between shadow-2xs h-[92px]">
          <span className="text-[12px] font-medium text-[#6B7280]">Active agents</span>
          <span className="text-[21px] font-semibold text-[#141C2E] leading-none">3</span>
          <span className="text-[11.5px] text-[#8A9099] font-normal">of 3 agents</span>
        </div>

        {/* Metric 2: Total messages */}
        <div className="bg-white rounded-[10px] border border-[#E8E9EC] p-3 flex flex-col justify-between shadow-2xs h-[92px]">
          <span className="text-[12px] font-medium text-[#6B7280]">Total messages</span>
          <span className="text-[21px] font-semibold text-[#141C2E] leading-none">10</span>
          <span className="text-[11.5px] text-[#0FCB86] font-semibold flex items-center">
            <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
            +100% vs previous period
          </span>
        </div>

        {/* Metric 3: Conversations */}
        <div className="bg-white rounded-[10px] border border-[#E8E9EC] p-3 flex flex-col justify-between shadow-2xs h-[92px]">
          <span className="text-[12px] font-medium text-[#6B7280]">Conversations</span>
          <span className="text-[21px] font-semibold text-[#141C2E] leading-none">4</span>
          <span className="text-[11.5px] text-[#0FCB86] font-semibold flex items-center">
            <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
            +100% vs previous period
          </span>
        </div>

        {/* Metric 4: AI resolved */}
        <div className="bg-white rounded-[10px] border border-[#E8E9EC] p-3 flex flex-col justify-between shadow-2xs h-[92px]">
          <span className="text-[12px] font-medium text-[#6B7280]">AI resolved</span>
          <span className="text-[21px] font-semibold text-[#141C2E] leading-none">85.9%</span>
          <span className="text-[11.5px] text-[#E44739] font-medium flex items-center">
            <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />
            -0.1 pts vs previous peri...
          </span>
        </div>

        {/* Metric 5: Escalation rate */}
        <div className="bg-white rounded-[10px] border border-[#E8E9EC] p-3 flex flex-col justify-between shadow-2xs h-[92px]">
          <span className="text-[12px] font-medium text-[#6B7280]">Escalation rate</span>
          <span className="text-[21px] font-semibold text-[#141C2E] leading-none">7.5%</span>
          <span className="text-[11.5px] text-[#E44739] font-medium flex items-center">
            <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />
            -0.1 pts vs previous peri...
          </span>
        </div>

        {/* Metric 6: Top region */}
        <div className="bg-white rounded-[10px] border border-[#E8E9EC] p-3 flex flex-col justify-between shadow-2xs h-[92px]">
          <span className="text-[12px] font-medium text-[#6B7280]">Top region</span>
          <span className="text-[21px] font-semibold text-[#141C2E] leading-none">India</span>
          <span className="text-[11.5px] text-[#8A9099] font-normal">100% of conversations</span>
        </div>
      </div>

      {/* 3. Middle Charts Row: Conversation Activity & Message Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {/* Chart 1: Conversation activity */}
        <div className="bg-white rounded-[12px] border border-[#E8E9EC] p-4 sm:p-5 flex flex-col justify-between shadow-2xs relative">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-[13.5px] font-semibold text-[#141C2E]">Conversation activity</h4>
              <p className="text-[12px] text-[#8A9099] mt-0.5">
                How many customer conversations your AI agents handled.
              </p>
            </div>
            <div className="text-right">
              <span className="text-[18px] font-semibold text-[#141C2E] leading-none">4</span>
              <p className="text-[11px] text-[#8A9099] mt-0.5">Peak day: Oct 30</p>
            </div>
          </div>

          {/* SVG Line Curve Chart */}
          <div className="relative mt-6 h-[170px] w-full flex flex-col justify-end">
            {/* Tooltip Overlay */}
            {hoveredConvPoint !== null && (
              <div
                className="absolute z-10 -top-2 rounded-[8px] bg-[#141C2E] text-white px-3 py-1.5 text-xs shadow-md pointer-events-none transform -translate-x-1/2"
                style={{ left: `${(hoveredConvPoint / (convPoints.length - 1)) * 86 + 7}%` }}
              >
                <div className="font-semibold text-[11px]">{convPoints[hoveredConvPoint].label}</div>
                <div className="text-[10px] text-zinc-300">
                  {convPoints[hoveredConvPoint].val > 0
                    ? `${convPoints[hoveredConvPoint].val} conversations`
                    : "0 conversations"}
                </div>
              </div>
            )}

            {/* Y Axis Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between text-[11px] text-[#8A9099] pointer-events-none">
              <div className="flex items-center gap-2 border-b border-dashed border-[#F0F1F3] w-full">
                <span className="w-4">4</span>
              </div>
              <div className="flex items-center gap-2 border-b border-dashed border-[#F0F1F3] w-full">
                <span className="w-4">2</span>
              </div>
              <div className="flex items-center gap-2 border-b border-[#E8E9EC] w-full">
                <span className="w-4">0</span>
              </div>
            </div>

            {/* SVG Curve */}
            <svg
              className="w-full h-[130px] overflow-visible pl-6"
              viewBox="0 0 500 130"
              preserveAspectRatio="none"
            >
              {/* Path line */}
              <path
                d="M 0 125 C 100 125, 200 125, 300 125 C 330 125, 340 100, 360 100 C 380 100, 390 125, 410 125 C 425 125, 435 20, 450 20 C 465 20, 475 125, 500 125"
                fill="none"
                stroke="#141C2E"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Peak indicator dot */}
              <circle cx="450" cy="20" r="4.5" fill="#141C2E" stroke="#ffffff" strokeWidth="2" />
            </svg>

            {/* X Axis Dates */}
            <div className="flex justify-between text-[11px] text-[#8A9099] pt-2 pl-6">
              {convPoints.map((p, idx) => (
                <span
                  key={p.date}
                  onMouseEnter={() => setHoveredConvPoint(idx)}
                  className={`cursor-pointer transition-colors ${
                    hoveredConvPoint === idx ? "font-semibold text-[#141C2E]" : ""
                  }`}
                >
                  {p.date}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Chart 2: Message activity */}
        <div className="bg-white rounded-[12px] border border-[#E8E9EC] p-4 sm:p-5 flex flex-col justify-between shadow-2xs relative">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-[13.5px] font-semibold text-[#141C2E]">Message activity</h4>
              <p className="text-[12px] text-[#8A9099] mt-0.5">
                Total customer and AI messages exchanged.
              </p>
            </div>
            <div className="text-right">
              <span className="text-[18px] font-semibold text-[#141C2E] leading-none">10</span>
              <p className="text-[11px] text-[#8A9099] mt-0.5">Highest activity: Oct 30</p>
            </div>
          </div>

          {/* Activity Bars Chart */}
          <div className="relative mt-6 h-[170px] w-full flex flex-col justify-end">
            {/* Tooltip Overlay */}
            {hoveredMsgBar !== null && (
              <div
                className="absolute z-10 -top-2 rounded-[8px] bg-[#141C2E] text-white px-3 py-1.5 text-xs shadow-md pointer-events-none transform -translate-x-1/2"
                style={{ left: `${(hoveredMsgBar / (msgBars.length - 1)) * 86 + 7}%` }}
              >
                <div className="font-semibold text-[11px]">{msgBars[hoveredMsgBar].label}</div>
              </div>
            )}

            {/* Y Axis Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between text-[11px] text-[#8A9099] pointer-events-none">
              <div className="flex items-center gap-2 border-b border-dashed border-[#F0F1F3] w-full">
                <span className="w-5">10</span>
              </div>
              <div className="flex items-center gap-2 border-b border-dashed border-[#F0F1F3] w-full">
                <span className="w-5">5</span>
              </div>
              <div className="flex items-center gap-2 border-b border-[#E8E9EC] w-full">
                <span className="w-5">0</span>
              </div>
            </div>

            {/* Bar Columns */}
            <div className="h-[130px] flex items-end justify-between pl-7 pr-2 pb-1 relative z-5">
              {msgBars.map((bar, idx) => {
                const heightPct = bar.val > 0 ? (bar.val / 10) * 100 : 2;
                const isSelected = hoveredMsgBar === idx;
                return (
                  <div
                    key={bar.date}
                    onMouseEnter={() => setHoveredMsgBar(idx)}
                    className="flex-1 flex flex-col items-center justify-end h-full cursor-pointer group px-1"
                  >
                    <div
                      className={`w-2.5 sm:w-3 rounded-t-[3px] transition-all duration-200 ${
                        bar.val > 0
                          ? "bg-[#141C2E] group-hover:bg-black"
                          : "bg-transparent group-hover:bg-zinc-200"
                      }`}
                      style={{ height: `${heightPct}%` }}
                    />
                  </div>
                );
              })}
            </div>

            {/* X Axis Dates */}
            <div className="flex justify-between text-[11px] text-[#8A9099] pt-2 pl-7">
              {msgBars.map((b, idx) => (
                <span
                  key={b.date}
                  onMouseEnter={() => setHoveredMsgBar(idx)}
                  className={`cursor-pointer transition-colors ${
                    hoveredMsgBar === idx ? "font-semibold text-[#141C2E]" : ""
                  }`}
                >
                  {b.date}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Row: AI Resolution Gauge & AI Confidence Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {/* Card 1: AI resolution */}
        <div className="bg-white rounded-[12px] border border-[#E8E9EC] p-4 sm:p-5 flex flex-col justify-between shadow-2xs">
          <div>
            <h4 className="text-[13.5px] font-semibold text-[#141C2E]">AI resolution</h4>
            <p className="text-[12px] text-[#8A9099] mt-0.5">
              How effectively Yedii AI resolves conversations
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-4">
            {/* SVG Donut */}
            <div className="relative w-[136px] h-[136px] shrink-0 flex items-center justify-center">
              <svg width={donutSize} height={donutSize} className="transform -rotate-90">
                {/* Background track */}
                <circle
                  cx={donutSize / 2}
                  cy={donutSize / 2}
                  r={radius}
                  fill="transparent"
                  stroke="#F3F4F6"
                  strokeWidth={strokeWidth}
                />
                {/* Resolved (Emerald Green) */}
                <circle
                  cx={donutSize / 2}
                  cy={donutSize / 2}
                  r={radius}
                  fill="transparent"
                  stroke="#0FCB86"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${lenResolved} ${circumference}`}
                  strokeDashoffset={0}
                />
                {/* Unresolved (Amber) */}
                <circle
                  cx={donutSize / 2}
                  cy={donutSize / 2}
                  r={radius}
                  fill="transparent"
                  stroke="#FFAE1F"
                  strokeWidth={strokeWidth}
                  strokeDasharray={`${lenUnresolved} ${circumference}`}
                  strokeDashoffset={-lenResolved}
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-[22px] font-semibold text-[#141C2E] leading-none tracking-[-0.4px]">
                  93%
                </span>
                <span className="text-[11px] font-normal text-[#8A9099] mt-0.5">AI resolved</span>
              </div>
            </div>

            {/* Breakdown numbers */}
            <div className="flex-1 w-full max-w-[280px] space-y-3">
              <div className="flex items-center justify-between text-[13px]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#0FCB86] shrink-0" />
                  <span className="text-[#3A4049]">Resolved</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#141C2E] font-semibold">3,584</span>
                  <span className="text-[#8A9099] text-[12px] w-12 text-right">92.9%</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[13px]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-[#FFAE1F] shrink-0" />
                  <span className="text-[#3A4049]">Unresolved</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#141C2E] font-semibold">275</span>
                  <span className="text-[#8A9099] text-[12px] w-12 text-right">7.1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: AI confidence */}
        <div className="bg-white rounded-[12px] border border-[#E8E9EC] p-4 sm:p-5 flex flex-col justify-between shadow-2xs">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-[13.5px] font-semibold text-[#141C2E]">AI confidence</h4>
              <p className="text-[12px] text-[#8A9099] mt-0.5">
                How confident the AI was when answering
              </p>
            </div>
            <span className="text-[12px] font-semibold text-[#141C2E]">Avg. 55%</span>
          </div>

          <div className="space-y-4 py-2">
            {/* High Tier */}
            <div>
              <div className="flex items-center justify-between text-[12.5px] mb-1">
                <span className="text-[#3A4049] font-medium">High</span>
                <span className="font-semibold text-[#141C2E]">0%</span>
              </div>
              <p className="text-[11px] text-[#8A9099] mb-1.5">0 responses</p>
              <div className="w-full bg-[#F3F4F6] rounded-full h-1.5 overflow-hidden">
                <div className="bg-[#0FCB86] h-1.5 rounded-full" style={{ width: "0%" }} />
              </div>
            </div>

            {/* Medium Tier */}
            <div>
              <div className="flex items-center justify-between text-[12.5px] mb-1">
                <span className="text-[#3A4049] font-medium">Medium</span>
                <span className="font-semibold text-[#141C2E]">80%</span>
              </div>
              <p className="text-[11px] text-[#8A9099] mb-1.5">8 responses</p>
              <div className="w-full bg-[#F3F4F6] rounded-full h-1.5 overflow-hidden">
                <div className="bg-[#FFAE1F] h-1.5 rounded-full" style={{ width: "80%" }} />
              </div>
            </div>

            {/* Low Tier */}
            <div>
              <div className="flex items-center justify-between text-[12.5px] mb-1">
                <span className="text-[#3A4049] font-medium">Low</span>
                <span className="font-semibold text-[#141C2E]">20%</span>
              </div>
              <p className="text-[11px] text-[#8A9099] mb-1.5">2 responses</p>
              <div className="w-full bg-[#F3F4F6] rounded-full h-1.5 overflow-hidden">
                <div className="bg-[#E44739] h-1.5 rounded-full" style={{ width: "20%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
