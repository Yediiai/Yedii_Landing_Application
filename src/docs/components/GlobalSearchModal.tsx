"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  FileText,
  Clock,
  Sparkles,
  CornerDownLeft,
  ArrowRight
} from "lucide-react";
import { searchDocs, SearchResultItem, DocSectionKey } from "../data";

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAiAssistant?: () => void;
}

export function GlobalSearchModal({
  isOpen,
  onClose,
  onOpenAiAssistant,
}: GlobalSearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [sectionFilter, setSectionFilter] = useState<DocSectionKey | "all">("all");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("yedii_docs_recent_searches") || "[]");
      setRecentSearches(stored.slice(0, 5));
    } catch {}
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const results = searchDocs(query, sectionFilter);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        handleSelectResult(results[selectedIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  const handleSelectResult = (item: SearchResultItem) => {
    try {
      const stored = [query, ...recentSearches.filter((s) => s !== query)].slice(0, 5);
      localStorage.setItem("yedii_docs_recent_searches", JSON.stringify(stored));
    } catch {}

    onClose();
    router.push(item.slug);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E5E7EB] overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#E5E7EB] gap-3">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search docs, APIs, tutorials, error codes..."
            className="flex-1 bg-transparent text-sm sm:text-base text-[#111827] placeholder:text-zinc-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-zinc-400 hover:text-black"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono bg-[#F9FAFB] text-zinc-500 rounded border border-[#E5E7EB]">
            ESC
          </kbd>
        </div>

        {/* Section Filters */}
        <div className="flex items-center gap-1.5 px-4 py-2 border-b border-[#F3F4F6] bg-[#F9FAFB] text-xs overflow-x-auto">
          <span className="text-zinc-500 mr-1 text-[11px] font-medium">Filter:</span>
          {[
            { id: "all", label: "All Docs" },
            { id: "product", label: "Product" },
            { id: "developer", label: "Developer" },
            { id: "learning", label: "Learning" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSectionFilter(tab.id as any);
                setSelectedIndex(0);
              }}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                sectionFilter === tab.id
                  ? "bg-[#141C2E] text-white font-semibold"
                  : "text-[#4B5563] hover:bg-[#E5E7EB]"
              }`}
            >
              {tab.label}
            </button>
          ))}

          {onOpenAiAssistant && (
            <button
              onClick={() => {
                onClose();
                onOpenAiAssistant();
              }}
              className="ml-auto inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 hover:underline"
            >
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>Ask AI Assistant instead</span>
            </button>
          )}
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-2 divide-y divide-[#F3F4F6]">
          {query.trim() === "" ? (
            <div className="p-6 text-xs text-zinc-500 space-y-4">
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center gap-1.5 font-semibold uppercase tracking-wider text-[10px] text-zinc-400 mb-2">
                    <Clock className="w-3 h-3" />
                    <span>Recent Searches</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {recentSearches.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => setQuery(s)}
                        className="px-2.5 py-1 rounded-md bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#374151] transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <span className="font-semibold uppercase tracking-wider text-[10px] text-zinc-400 block mb-2">
                  Popular Topics
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { label: "Widget Next.js Script Integration", query: "nextjs widget" },
                    { label: "Chat SSE Streaming API", query: "chat stream" },
                    { label: "Website Sitemap Crawling", query: "sitemap crawl" },
                    { label: "System Prompt Guardrails", query: "guardrails" },
                    { label: "Paddle Webhook Verification", query: "paddle webhook" },
                    { label: "Conversation Retention Schedule", query: "retention" },
                  ].map((topic, i) => (
                    <button
                      key={i}
                      onClick={() => setQuery(topic.query)}
                      className="p-2 text-left rounded-lg border border-[#E5E7EB] hover:border-black transition-colors group flex items-center justify-between"
                    >
                      <span className="text-[#374151] group-hover:text-black">
                        {topic.label}
                      </span>
                      <ArrowRight className="w-3 h-3 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-xs text-zinc-500 space-y-3">
              <p className="text-sm font-semibold text-[#111827]">
                No matching documentation found for &quot;{query}&quot;
              </p>
              <p className="max-w-md mx-auto text-[#6B7280]">
                Try searching for related keywords like <code>crawling</code>, <code>widget</code>, <code>SSE stream</code>, or <code>API key</code>.
              </p>
              {onOpenAiAssistant && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenAiAssistant();
                  }}
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141C2E] text-white font-medium text-xs shadow-xs hover:bg-black transition-colors"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask AI to synthesize an answer</span>
                </button>
              )}
            </div>
          ) : (
            results.map((item, idx) => {
              const isSelected = selectedIndex === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelectResult(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors ${
                    isSelected ? "bg-[#F3F4F6]" : "hover:bg-[#F9FAFB]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {item.badge ? (
                        <span className="px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase rounded bg-[#E5E7EB] text-[#111827]">
                          {item.badge}
                        </span>
                      ) : (
                        <FileText className="w-4 h-4 text-zinc-400 shrink-0" />
                      )}
                      <h4 className="text-sm font-semibold text-[#111827]">
                        {item.title}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-500 shrink-0">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-xs text-[#6B7280] mt-1 line-clamp-1">
                    {item.excerpt || item.description}
                  </p>

                  {isSelected && (
                    <div className="mt-2 flex items-center gap-1 text-[10px] font-mono text-zinc-400">
                      <span>Press</span>
                      <CornerDownLeft className="w-3 h-3" />
                      <span>to open article</span>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 border-t border-[#E5E7EB] bg-[#F9FAFB] flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <div>{results.length} results</div>
        </div>
      </div>
    </div>
  );
}
