"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  ChevronDown,
  Calendar,
  Check
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export function AnalyticsDashboardPreview() {
  const [selectedAgent, setSelectedAgent] = useState("All agents");
  const [isAgentDropdownOpen, setIsAgentDropdownOpen] = useState(false);

  const agentsList = ["All agents", "Nidan AI Agent", "Aura Support Bot", "Nexus SDR Agent"];

  // Recharts smooth conversation data
  const conversationData = [
    { date: "Oct 2", count: 0, label: "Fri, Oct 2" },
    { date: "Oct 5", count: 0, label: "Mon, Oct 5" },
    { date: "Oct 8", count: 0, label: "Thu, Oct 8" },
    { date: "Oct 11", count: 0, label: "Sun, Oct 11" },
    { date: "Oct 14", count: 0, label: "Wed, Oct 14" },
    { date: "Oct 17", count: 0, label: "Sat, Oct 17" },
    { date: "Oct 20", count: 0, label: "Tue, Oct 20" },
    { date: "Oct 23", count: 0, label: "Fri, Oct 23" },
    { date: "Oct 26", count: 1, label: "Mon, Oct 26" },
    { date: "Oct 28", count: 0.5, label: "Wed, Oct 28" },
    { date: "Oct 30", count: 4, label: "Fri, Oct 30" },
    { date: "Nov 1", count: 0, label: "Sun, Nov 1" },
  ];

  // Recharts smooth message activity data
  const messageData = [
    { date: "Oct 2", count: 0 },
    { date: "Oct 5", count: 0 },
    { date: "Oct 8", count: 0 },
    { date: "Oct 11", count: 0 },
    { date: "Oct 14", count: 0 },
    { date: "Oct 17", count: 0 },
    { date: "Oct 20", count: 0 },
    { date: "Oct 23", count: 0 },
    { date: "Oct 26", count: 0 },
    { date: "Oct 28", count: 0 },
    { date: "Oct 30", count: 10 },
    { date: "Nov 1", count: 0 },
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
              className="h-[32px] px-3 rounded-[8px] bg-white border border-[#E4E5E8] text-[12px] font-medium text-[#141C2E] flex items-center gap-1.5 hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
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
                    className="w-full px-3 py-1.5 text-left text-xs text-[#141C2E] hover:bg-zinc-50 flex items-center justify-between cursor-pointer"
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

      {/* 3. Middle Charts Row Powered by Recharts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        {/* Chart 1: Conversation activity (Recharts AreaChart) */}
        <div className="bg-white rounded-[12px] border border-[#E8E9EC] p-4 sm:p-5 flex flex-col justify-between shadow-2xs">
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

          <div className="h-[180px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={conversationData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <defs>
                  <linearGradient id="convGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#141C2E" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#141C2E" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={{ stroke: "#E8E9EC" }}
                  tick={{ fill: "#8A9099", fontSize: 11 }}
                />
                <YAxis
                  domain={[0, 4]}
                  ticks={[0, 2, 4]}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#8A9099", fontSize: 11 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#141C2E",
                    borderRadius: "8px",
                    border: "none",
                    color: "#fff",
                    fontSize: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                  formatter={(val: unknown) => [`${val} conversations`, "Activity"]}
                  labelStyle={{ color: "#9CA3AF", fontSize: "11px", fontWeight: "600" }}
                />
                <Area
                  type="monotone"
                  dataKey="count"
                  stroke="#141C2E"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#convGrad)"
                  activeDot={{ r: 5, fill: "#141C2E", stroke: "#fff", strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Message activity (Recharts BarChart) */}
        <div className="bg-white rounded-[12px] border border-[#E8E9EC] p-4 sm:p-5 flex flex-col justify-between shadow-2xs">
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

          <div className="h-[180px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={messageData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={{ stroke: "#E8E9EC" }}
                  tick={{ fill: "#8A9099", fontSize: 11 }}
                />
                <YAxis
                  domain={[0, 10]}
                  ticks={[0, 5, 10]}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#8A9099", fontSize: 11 }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#141C2E",
                    borderRadius: "8px",
                    border: "none",
                    color: "#fff",
                    fontSize: "12px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  }}
                  formatter={(val: unknown) => [`${val} messages`, "Total messages"]}
                />
                <Bar
                  dataKey="count"
                  fill="#141C2E"
                  radius={[3, 3, 0, 0]}
                  barSize={12}
                />
              </BarChart>
            </ResponsiveContainer>
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
                <circle
                  cx={donutSize / 2}
                  cy={donutSize / 2}
                  r={radius}
                  fill="transparent"
                  stroke="#F3F4F6"
                  strokeWidth={strokeWidth}
                />
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
