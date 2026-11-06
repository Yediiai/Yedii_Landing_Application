"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowRight, ShieldCheck, FileText } from "lucide-react";
import { LegalDocumentItem, getRelatedLegalDocuments } from "@/data/legal";

interface LegalContentRendererProps {
  document: LegalDocumentItem;
}

export function LegalContentRenderer({ document }: LegalContentRendererProps) {
  const related = getRelatedLegalDocuments(document.slug, 3);

  // Render markdown into formatted JSX
  const renderFormattedMarkdown = (markdown: string) => {
    const lines = markdown.split("\n");
    const elements: React.ReactNode[] = [];
    let listBuffer: string[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    const flushList = (key: string) => {
      if (listBuffer.length > 0) {
        elements.push(
          <ul key={key} className="my-4 space-y-2 list-disc list-outside pl-5 text-zinc-700 text-sm leading-relaxed">
            {listBuffer.map((item, idx) => (
              <li key={idx}>{parseInlineFormatting(item)}</li>
            ))}
          </ul>,
        );
        listBuffer = [];
      }
    };

    const flushTable = (key: string) => {
      if (tableRows.length > 0) {
        const header = tableRows[0];
        const body = tableRows.slice(1);
        elements.push(
          <div key={key} className="my-6 overflow-x-auto border border-zinc-200 rounded-xl shadow-2xs">
            <table className="min-w-full divide-y divide-zinc-200 text-left text-xs">
              <thead className="bg-zinc-50 font-semibold text-zinc-900">
                <tr>
                  {header.map((col, idx) => (
                    <th key={idx} className="px-4 py-3">
                      {parseInlineFormatting(col.trim())}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 bg-white text-zinc-700">
                {body.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-zinc-50/50 transition-colors">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 align-top leading-relaxed">
                        {parseInlineFormatting(cell.trim())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        );
        tableRows = [];
        inTable = false;
      }
    };

    lines.forEach((rawLine, index) => {
      const line = rawLine.trim();

      // Table line
      if (line.startsWith("|") && line.endsWith("|")) {
        // Skip separator row like |---|---|
        if (/^\|[-:\s|]+\|$/.test(line)) {
          return;
        }
        flushList(`list-before-table-${index}`);
        inTable = true;
        const cols = line.slice(1, -1).split("|");
        tableRows.push(cols);
        return;
      } else if (inTable) {
        flushTable(`table-${index}`);
      }

      // Unordered list
      if (line.startsWith("- ") || line.startsWith("* ")) {
        listBuffer.push(line.slice(2));
        return;
      } else {
        flushList(`list-${index}`);
      }

      // Ordered list (e.g. 1. )
      const orderedMatch = line.match(/^\d+\.\s+(.*)$/);
      if (orderedMatch) {
        elements.push(
          <div key={`ol-${index}`} className="my-2 text-sm text-zinc-700 leading-relaxed pl-5 flex items-start gap-2">
            <span className="font-semibold text-zinc-900 shrink-0 font-mono text-xs">
              {line.split(" ")[0]}
            </span>
            <span>{parseInlineFormatting(orderedMatch[1])}</span>
          </div>,
        );
        return;
      }

      // Headings
      if (line.startsWith("### ")) {
        const text = line.slice(4);
        const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
        elements.push(
          <h3
            key={`h3-${index}`}
            id={id}
            className="text-lg font-bold text-zinc-900 mt-8 mb-3 pt-4 border-t border-zinc-100 scroll-mt-24"
          >
            {parseInlineFormatting(text)}
          </h3>,
        );
        return;
      }

      if (line.startsWith("## ")) {
        const text = line.slice(3);
        const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
        elements.push(
          <h2
            key={`h2-${index}`}
            id={id}
            className="text-xl font-bold text-zinc-900 mt-10 mb-4 pt-4 border-t border-zinc-200 scroll-mt-24"
          >
            {parseInlineFormatting(text)}
          </h2>,
        );
        return;
      }

      if (line.startsWith("# ")) {
        // Skip document main title since LegalHeader already displays it
        return;
      }

      // Skip redundant top-level dates/version already displayed in LegalHeader
      if (
        line.startsWith("**Effective Date:**") ||
        line.startsWith("**Last Updated:**") ||
        line.startsWith("**Version:**")
      ) {
        return;
      }

      // Horizontal rule
      if (line === "---") {
        elements.push(<hr key={`hr-${index}`} className="my-8 border-zinc-200" />);
        return;
      }

      // Empty line
      if (!line) {
        return;
      }

      // Regular paragraph
      elements.push(
        <p key={`p-${index}`} className="my-3 text-sm text-zinc-700 leading-relaxed">
          {parseInlineFormatting(line)}
        </p>,
      );
    });

    flushList("list-final");
    flushTable("table-final");

    return elements;
  };

  const parseInlineFormatting = (text: string): React.ReactNode => {
    // Quick inline parser for **bold**, `code`, and [link](url)
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let keyIdx = 0;

    const regex = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
    let match: RegExpExecArray | null;

    let lastIndex = 0;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      const token = match[0];
      if (token.startsWith("**") && token.endsWith("**")) {
        parts.push(
          <strong key={keyIdx++} className="font-semibold text-zinc-900">
            {token.slice(2, -2)}
          </strong>,
        );
      } else if (token.startsWith("`") && token.endsWith("`")) {
        parts.push(
          <code
            key={keyIdx++}
            className="px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-800 font-mono text-[11px] border border-zinc-200"
          >
            {token.slice(1, -1)}
          </code>,
        );
      } else if (token.startsWith("[") && token.includes("](")) {
        const titleMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (titleMatch) {
          parts.push(
            <a
              key={keyIdx++}
              href={titleMatch[2]}
              className="text-black font-semibold underline underline-offset-2 hover:text-zinc-600 transition-colors"
            >
              {titleMatch[1]}
            </a>,
          );
        }
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  return (
    <div className="space-y-12">
      {/* Markdown Content */}
      <article className="prose prose-zinc max-w-none">
        {renderFormattedMarkdown(document.content)}
      </article>

      {/* Official Legal Inquiries Card */}
      <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-xs space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-zinc-100 text-zinc-900">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-zinc-900">
              Questions Regarding This Document?
            </h4>
            <p className="text-xs text-zinc-500">
              Our legal and data protection officers are available to clarify clauses or review enterprise requirements.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-zinc-100 text-xs">
          <div className="space-y-0.5">
            <div className="text-zinc-500">Legal Department: <strong className="text-zinc-800">legal@yedii.com</strong></div>
            <div className="text-zinc-500">Data Protection Officer: <strong className="text-zinc-800">dpo@yedii.com</strong></div>
          </div>
          <a
            href="mailto:legal@yedii.com"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-black hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
          >
            Contact Legal Team
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Related Legal Documents */}
      {related.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-zinc-200">
          <h4 className="text-sm font-semibold text-zinc-900">Related Legal Documents</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/legal/${item.slug}`}
                className="group p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-400 hover:shadow-xs transition-all flex flex-col justify-between space-y-2"
              >
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                    {item.category.replace("_", " ")}
                  </div>
                  <h5 className="text-xs font-bold text-zinc-900 group-hover:text-black pt-1">
                    {item.title}
                  </h5>
                  <p className="text-[11px] text-zinc-500 line-clamp-2 mt-1 leading-snug">
                    {item.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-black pt-2">
                  Read Policy &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

