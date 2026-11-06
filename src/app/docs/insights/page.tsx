"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Search,
  ThumbsUp,
  Eye,
  ArrowUpRight,
  Download,
  FileQuestion
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const weeklyViewsData = [
  { day: "Mon", views: 2420, searches: 640 },
  { day: "Tue", views: 3100, searches: 810 },
  { day: "Wed", views: 4250, searches: 1120 },
  { day: "Thu", views: 3980, searches: 980 },
  { day: "Fri", views: 4620, searches: 1240 },
  { day: "Sat", views: 1850, searches: 420 },
  { day: "Sun", views: 2100, searches: 510 },
];

const satisfactionData = [
  { section: "Product Docs", helpful: 94, unhelpful: 6 },
  { section: "Developer Docs", helpful: 91, unhelpful: 9 },
  { section: "Learning Center", helpful: 97, unhelpful: 3 },
  { section: "API Reference", helpful: 89, unhelpful: 11 },
];

const topSearchQueries = [
  { query: "nextjs widget embed", count: 482, hasResults: true, ctr: "84%" },
  { query: "sse streaming chat", count: 419, hasResults: true, ctr: "92%" },
  { query: "sitemap crawler block", count: 320, hasResults: true, ctr: "78%" },
  { query: "paddle webhook verify", count: 295, hasResults: true, ctr: "88%" },
  { query: "system instructions guardrails", count: 240, hasResults: true, ctr: "91%" },
  { query: "shopify order tracking connector", count: 185, hasResults: false, ctr: "0%" },
  { query: "whatsapp business api setup", count: 162, hasResults: false, ctr: "0%" },
  { query: "zendesk inbound sync guide", count: 140, hasResults: false, ctr: "0%" },
];

export default function DocsInsightsPage() {
  const exportCsv = () => {
    const headers = "Query,Count,HasResults,CTR\n";
    const rows = topSearchQueries
      .map((q) => `"${q.query}",${q.count},${q.hasResults},"${q.ctr}"`)
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `yedii_docs_analytics_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 text-xs bg-[#FAFAFA]">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-xs font-semibold mb-2">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Documentation Intelligence & Self-Service Metrics</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827]">
            Documentation Analytics & Insights
          </h1>
          <p className="text-[#6B7280] text-xs mt-1">
            Analyze customer readership, measure article satisfaction, identify content gaps from failed searches, and track resolution health.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={exportCsv}
            className="px-3.5 py-2 rounded-lg border border-[#E5E7EB] bg-white text-[#374151] font-medium hover:border-black transition-colors flex items-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
          <Link
            href="/docs/admin"
            className="px-3.5 py-2 rounded-lg bg-[#141C2E] text-white font-medium hover:bg-black transition-colors shadow-2xs"
          >
            Manage Content
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-xl border border-[#E5E7EB] bg-white shadow-2xs">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="font-mono uppercase text-[10px] font-semibold text-zinc-500">Total Page Views</span>
            <Eye className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-[#111827]">
            22,320
          </div>
          <span className="text-[11px] text-emerald-700 font-medium mt-1 inline-block">
            +18.4% vs last week
          </span>
        </div>

        <div className="p-4 rounded-xl border border-[#E5E7EB] bg-white shadow-2xs">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="font-mono uppercase text-[10px] font-semibold text-zinc-500">Total Search Queries</span>
            <Search className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl font-bold font-mono text-[#111827]">
            5,720
          </div>
          <span className="text-[11px] text-emerald-700 font-medium mt-1 inline-block">
            +12.1% search activity
          </span>
        </div>

        <div className="p-4 rounded-xl border border-[#E5E7EB] bg-white shadow-2xs">
          <div className="flex items-center justify-between text-zinc-400 mb-2">
            <span className="font-mono uppercase text-[10px] font-semibold text-zinc-500">Helpful Satisfaction</span>
            <ThumbsUp className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-emerald-700">
            93.2%
          </div>
          <span className="text-[11px] text-[#6B7280] font-medium mt-1 inline-block">
            Based on 1,480 user votes
          </span>
        </div>

        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/60 shadow-2xs">
          <div className="flex items-center justify-between text-amber-700 mb-2">
            <span className="font-mono uppercase text-[10px] font-semibold">Unresolved Searches</span>
            <FileQuestion className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-bold font-mono text-amber-800">
            487 (8.5%)
          </div>
          <span className="text-[11px] text-amber-700 font-medium mt-1 inline-block">
            Actionable content gaps
          </span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Weekly Traffic & Search Trend Area Chart */}
        <div className="lg:col-span-2 p-5 rounded-xl border border-[#E5E7EB] bg-white shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#111827]">
              Weekly Readership & Search Volume
            </h3>
            <span className="text-[11px] font-mono text-zinc-400">Past 7 Days</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyViewsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#141C2E" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#141C2E" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="searchesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#E5E7EB",
                    color: "#111827",
                    fontSize: "12px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Area type="monotone" dataKey="views" name="Page Views" stroke="#141C2E" fillOpacity={1} fill="url(#viewsGrad)" strokeWidth={2} />
                <Area type="monotone" dataKey="searches" name="Search Queries" stroke="#10B981" fillOpacity={1} fill="url(#searchesGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Section Satisfaction Bar Chart */}
        <div className="p-5 rounded-xl border border-[#E5E7EB] bg-white shadow-2xs space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#111827]">
              Helpful Feedback by Section
            </h3>
            <ThumbsUp className="w-4 h-4 text-emerald-600" />
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={satisfactionData} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10 }} />
                <YAxis type="category" dataKey="section" tick={{ fontSize: 10 }} width={80} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "#E5E7EB",
                    color: "#111827",
                    fontSize: "12px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Bar dataKey="helpful" name="Helpful (%)" fill="#10B981" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Content Gap & Top Searches Table */}
      <div className="border border-[#E5E7EB] rounded-xl bg-white overflow-hidden shadow-2xs">
        <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#111827]">
              Search Query Insights & Content Gaps
            </h3>
            <p className="text-[11px] text-[#6B7280]">
              Queries with 0% CTR represent missing topics visitors searched for. Write articles for these to increase self-service resolution.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB] font-mono text-[#4B5563] text-[11px]">
              <tr>
                <th className="p-3">Search Query</th>
                <th className="p-3">Volume</th>
                <th className="p-3">Result Status</th>
                <th className="p-3">Click-Through Rate</th>
                <th className="p-3 text-right">Recommendation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {topSearchQueries.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#F9FAFB]">
                  <td className="p-3 font-mono font-medium text-[#111827]">
                    &quot;{item.query}&quot;
                  </td>
                  <td className="p-3 font-mono text-[#4B5563]">
                    {item.count}
                  </td>
                  <td className="p-3">
                    {item.hasResults ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        MATCH FOUND
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-red-50 text-red-700 border border-red-200">
                        0 RESULTS (CONTENT GAP)
                      </span>
                    )}
                  </td>
                  <td className="p-3 font-mono font-semibold text-[#374151]">
                    {item.ctr}
                  </td>
                  <td className="p-3 text-right">
                    {item.hasResults ? (
                      <span className="text-zinc-400">Healthy</span>
                    ) : (
                      <Link
                        href="/docs/admin"
                        className="text-emerald-700 font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        <span>Draft Article</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
