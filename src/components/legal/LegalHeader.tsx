"use client";

import React from "react";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";
import { LegalDocumentItem } from "@/data/legal";

interface LegalHeaderProps {
  document: LegalDocumentItem;
}

export function LegalHeader({ document }: LegalHeaderProps) {
  return (
    <div className="border-b border-zinc-200 pb-8 mb-8 space-y-6">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-zinc-500">
        <Link href="/" className="hover:text-black transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3 h-3 text-zinc-400" />
        <Link href="/legal" className="hover:text-black transition-colors">
          Legal
        </Link>
        <ChevronRight className="w-3 h-3 text-zinc-400" />
        <span className="text-zinc-900 font-medium truncate max-w-[200px] sm:max-w-none">
          {document.title}
        </span>
      </nav>

      {/* Main Title & Description */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          {document.title}
        </h1>

        <p className="text-base text-zinc-600 leading-relaxed max-w-3xl">
          {document.description}
        </p>
      </div>

      {/* Metadata Bar */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs text-zinc-500">
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-zinc-400" />
          Effective: <strong className="text-zinc-800">{document.effectiveDate}</strong>
        </span>
        <span className="hidden sm:inline text-zinc-300">&bull;</span>
        <span>
          Last Updated: <strong className="text-zinc-800">{document.lastUpdatedDate}</strong>
        </span>
      </div>
    </div>
  );
}

