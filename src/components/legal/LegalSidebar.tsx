"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Shield, FileText, ChevronRight, Scale, Lock, Cpu } from "lucide-react";
import { ALL_LEGAL_DOCUMENTS, LEGAL_CATEGORIES, LegalDocumentItem } from "@/data/legal";

interface LegalSidebarProps {
  currentSlug?: string;
  className?: string;
}

export function LegalSidebar({ currentSlug, className = "" }: LegalSidebarProps) {
  const [search, setSearch] = useState("");

  const filteredDocs = ALL_LEGAL_DOCUMENTS.filter((doc) => {
    if (!search.trim()) return true;
    const term = search.toLowerCase();
    return (
      doc.title.toLowerCase().includes(term) ||
      doc.description.toLowerCase().includes(term) ||
      doc.slug.toLowerCase().includes(term)
    );
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "ESSENTIAL":
        return <FileText className="w-3.5 h-3.5 text-zinc-400" />;
      case "AI_DATA":
        return <Cpu className="w-3.5 h-3.5 text-zinc-400" />;
      case "ENTERPRISE":
        return <Lock className="w-3.5 h-3.5 text-zinc-400" />;
      default:
        return <Scale className="w-3.5 h-3.5 text-zinc-400" />;
    }
  };

  return (
    <aside
      className={`w-full lg:w-72 shrink-0 flex flex-col space-y-6 lg:border-r border-zinc-200 lg:pr-6 ${className}`}
    >
      {/* Search Input */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search legal documents..."
          className="w-full pl-9 pr-3 py-2 text-xs bg-zinc-100 hover:bg-zinc-200/70 focus:bg-white text-zinc-900 placeholder:text-zinc-500 rounded-lg border border-transparent focus:border-zinc-300 focus:outline-hidden transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600"
          >
            &times;
          </button>
        )}
      </div>

      {/* Categories & Navigation */}
      <div className="space-y-6">
        {LEGAL_CATEGORIES.map((cat) => {
          const categoryDocs = filteredDocs.filter((d) => d.category === cat.id);
          if (categoryDocs.length === 0) return null;

          return (
            <div key={cat.id} className="space-y-1.5">
              <div className="flex items-center gap-1.5 px-3 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                {getCategoryIcon(cat.id)}
                <span>{cat.title}</span>
              </div>

              <ul className="space-y-0.5">
                {categoryDocs.map((doc) => {
                  const isActive = currentSlug === doc.slug;
                  return (
                    <li key={doc.slug}>
                      <Link
                        href={`/legal/${doc.slug}`}
                        className={`group flex items-center justify-between px-3 py-1.5 text-xs rounded-md transition-all ${
                          isActive
                            ? "bg-zinc-900 text-white font-medium shadow-xs"
                            : "text-zinc-600 hover:text-black hover:bg-zinc-100"
                        }`}
                      >
                        <span className="truncate">{doc.title}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Enterprise Contact Box */}
      <div className="p-4 rounded-xl border border-zinc-200 bg-white shadow-xs space-y-2 mt-auto">
        <h4 className="text-xs font-semibold text-zinc-900">Custom Enterprise Terms?</h4>
        <p className="text-[11px] text-zinc-500 leading-relaxed">
          Need a dedicated DPA, customized SLA, or corporate Master Services Agreement?
        </p>
        <a
          href="mailto:legal@yedii.com?subject=Enterprise%20Legal%20Inquiry"
          className="inline-flex items-center gap-1 text-xs font-semibold text-black hover:underline underline-offset-2 pt-1"
        >
          Contact Legal Team &rarr;
        </a>
      </div>
    </aside>
  );
}

