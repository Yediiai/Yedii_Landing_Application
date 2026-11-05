"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Download, Link as LinkIcon, Check, Calendar, Globe, Shield, ChevronRight } from "lucide-react";
import { LegalDocumentItem } from "@/data/legal";

interface LegalHeaderProps {
  document: LegalDocumentItem;
}

export function LegalHeader({ document }: LegalHeaderProps) {
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadPdf = async () => {
    try {
      setIsDownloading(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
      const targetUrl = `${apiUrl}/api/v1/legal/documents/${document.slug}/pdf`;

      // Attempt to download from backend PDF endpoint
      const response = await fetch(targetUrl);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = window.document.createElement("a");
        a.href = url;
        a.download = `${document.slug}-v${document.initialVersion}.pdf`;
        window.document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        window.document.body.removeChild(a);
      } else {
        // Fallback to browser print-to-PDF
        window.print();
      }
    } catch {
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

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
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-zinc-900 text-white">
            Version {document.initialVersion}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-100 text-zinc-700 border border-zinc-200 flex items-center gap-1">
            <Globe className="w-3 h-3" />
            {document.jurisdiction}
          </span>
          {document.requiresAcceptance && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
              <Shield className="w-3 h-3" />
              Acceptance Required
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          {document.title}
        </h1>

        <p className="text-base text-zinc-600 leading-relaxed max-w-3xl">
          {document.description}
        </p>
      </div>

      {/* Metadata Bar & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 text-xs text-zinc-500">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-zinc-400" />
            Effective: <strong className="text-zinc-800">{document.effectiveDate}</strong>
          </span>
          <span className="hidden sm:inline text-zinc-300">&bull;</span>
          <span>
            Last Updated: <strong className="text-zinc-800">{document.lastUpdatedDate}</strong>
          </span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 rounded-lg transition-colors cursor-pointer shadow-2xs"
            title="Copy permanent link"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <LinkIcon className="w-3.5 h-3.5 text-zinc-500" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          {document.isDownloadable && (
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isDownloading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-black hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer shadow-2xs"
              title="Download official PDF copy"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isDownloading ? "Preparing..." : "Download PDF"}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

