"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Search,
  ChevronRight
} from "lucide-react";
import { DocsSidebar } from "@/docs/components/DocsSidebar";
import { ApiEndpoint } from "@/docs/components/ApiEndpoint";
import { API_ENDPOINTS } from "@/docs/data";

export default function ApiReferencePage() {
  const [filterGroup, setFilterGroup] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const groups = [
    "All",
    "Authentication",
    "Agent APIs",
    "Chatbot APIs",
    "Message APIs",
    "Website Crawling APIs",
    "Knowledge Base APIs",
    "Conversation APIs",
    "Usage APIs",
    "Webhooks",
  ];

  const filteredEndpoints = API_ENDPOINTS.filter((ep) => {
    if (filterGroup !== "All" && ep.group !== filterGroup) {
      return false;
    }
    if (!searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase();
    return (
      ep.path.toLowerCase().includes(q) ||
      ep.summary.toLowerCase().includes(q) ||
      ep.method.toLowerCase().includes(q) ||
      ep.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col lg:flex-row gap-8 bg-[#FAFAFA]">
      {/* Left Navigation Sidebar */}
      <DocsSidebar currentSection="developer" />

      {/* Main Content Area */}
      <main className="flex-1 py-8 max-w-4xl min-w-0">
        {/* Page Header */}
        <div className="mb-8 pb-6 border-b border-[#E5E7EB]">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>OpenAPI v3.0 Specification</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111827] mb-3">
            Yedii REST API Reference
          </h1>

          <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed mb-4">
            Official reference for all public and authenticated endpoints across the Yedii platform: agent management, SSE chat streaming, knowledge crawler, and Paddle billing.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#6B7280]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Base URL: https://api.yedii.com</span>
            </span>
            <span>API Version: v1 (Active) / v2 (Admin)</span>
            <span>Content-Type: application/json</span>
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search endpoints by path, HTTP method, or parameter..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-[#E5E7EB] rounded-lg text-xs text-[#111827] placeholder:text-zinc-400 focus:outline-none focus:border-[#141C2E] transition-colors"
              />
            </div>
          </div>

          {/* Group Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {groups.map((grp) => (
              <button
                key={grp}
                onClick={() => setFilterGroup(grp)}
                className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  filterGroup === grp
                    ? "bg-[#141C2E] text-white font-semibold"
                    : "bg-white border border-[#E5E7EB] text-[#4B5563] hover:bg-[#F3F4F6]"
                }`}
              >
                {grp}
              </button>
            ))}
          </div>
        </div>

        {/* Endpoints List */}
        <div className="space-y-6">
          {filteredEndpoints.length === 0 ? (
            <div className="p-12 text-center border border-[#E5E7EB] rounded-xl text-xs text-zinc-500 bg-white">
              No API endpoints matched your search criteria.
            </div>
          ) : (
            filteredEndpoints.map((ep) => <ApiEndpoint key={ep.id} endpoint={ep} />)
          )}
        </div>
      </main>

      {/* Right Column: Endpoint Navigation Quick List */}
      <aside className="hidden xl:block w-64 shrink-0 py-8 pl-6 border-l border-[#E5E7EB] text-xs">
        <div className="sticky top-24 space-y-4">
          <div className="font-bold text-xs uppercase tracking-wider text-zinc-500 font-mono">
            API Groups ({filteredEndpoints.length})
          </div>

          <ul className="space-y-1.5 border-l border-[#E5E7EB] pl-3">
            {filteredEndpoints.map((ep) => (
              <li key={ep.id}>
                <a
                  href={`#${ep.id}`}
                  className="flex items-center gap-2 py-1 text-[#4B5563] hover:text-[#111827] transition-colors"
                >
                  <span
                    className={`px-1 py-0.2 rounded text-[9px] font-mono font-bold ${
                      ep.method === "GET"
                        ? "text-blue-700 bg-blue-50 border border-blue-200"
                        : ep.method === "POST"
                        ? "text-emerald-700 bg-emerald-50 border border-emerald-200"
                        : "text-amber-700 bg-amber-50 border border-amber-200"
                    }`}
                  >
                    {ep.method}
                  </span>
                  <span className="truncate font-mono text-[11px]">{ep.path}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
