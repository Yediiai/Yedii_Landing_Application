"use client";

import React from "react";
import { CodeBlock } from "./CodeBlock";
import { InfoCallout, WarningCallout, SuccessCallout } from "./Callouts";

interface ArticleContentRendererProps {
  content: string;
}

export function ArticleContentRenderer({ content }: ArticleContentRendererProps) {
  const lines = content.trim().split("\n");
  const renderedElements: React.ReactNode[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Fenced Code Block
    if (line.startsWith("```")) {
      const language = line.replace(/```/, "").trim() || "text";
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++;
      renderedElements.push(
        <CodeBlock
          key={`code-${i}`}
          code={codeLines.join("\n")}
          language={language}
          showLineNumbers={codeLines.length > 5}
        />
      );
      continue;
    }

    // Level 2 Heading: ## Title
    if (line.startsWith("## ")) {
      const text = line.replace(/^## /, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      renderedElements.push(
        <h2
          key={`h2-${i}`}
          id={id}
          className="text-2xl font-bold text-[#111827] mt-10 mb-4 pt-4 border-t border-[#E5E7EB] first:border-0 first:mt-0 scroll-mt-20"
        >
          {text}
        </h2>
      );
      i++;
      continue;
    }

    // Level 3 Heading: ### Title
    if (line.startsWith("### ")) {
      const text = line.replace(/^### /, "").trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

      renderedElements.push(
        <h3
          key={`h3-${i}`}
          id={id}
          className="text-lg font-bold text-[#111827] mt-6 mb-3 scroll-mt-24"
        >
          {text}
        </h3>
      );
      i++;
      continue;
    }

    // Markdown Table: lines starting with |
    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }

      if (tableLines.length >= 2) {
        const headerCols = tableLines[0]
          .split("|")
          .map((c) => c.trim())
          .filter(Boolean);
        const bodyRows = tableLines.slice(2).map((row) =>
          row
            .split("|")
            .map((c) => c.trim())
            .filter((_, idx, arr) => idx > 0 && idx < arr.length - 1)
        );

        renderedElements.push(
          <div key={`table-${i}`} className="my-6 border border-[#E5E7EB] rounded-lg overflow-x-auto text-xs bg-white shadow-2xs">
            <table className="w-full text-left">
              <thead className="bg-[#F9FAFB] border-b border-[#E5E7EB] font-mono text-[#4B5563]">
                <tr>
                  {headerCols.map((h, hIdx) => (
                    <th key={hIdx} className="p-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {bodyRows.map((cols, rIdx) => (
                  <tr key={rIdx} className="hover:bg-[#F9FAFB]">
                    {cols.map((col, cIdx) => (
                      <td key={cIdx} className="p-3 text-[#374151]">
                        {renderInlineFormatting(col)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // Callout Quote: > Text
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].replace(/^> /, ""));
        i++;
      }
      renderedElements.push(
        <InfoCallout key={`callout-${i}`}>
          {renderInlineFormatting(quoteLines.join(" "))}
        </InfoCallout>
      );
      continue;
    }

    // Unordered List
    if (line.startsWith("- ") || line.startsWith("* ")) {
      const listItems: string[] = [];
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* "))) {
        listItems.push(lines[i].replace(/^[-*] /, ""));
        i++;
      }
      renderedElements.push(
        <ul key={`ul-${i}`} className="my-4 space-y-2 list-disc list-inside text-xs sm:text-sm text-[#374151] pl-2">
          {listItems.map((item, lIdx) => (
            <li key={lIdx} className="leading-relaxed">
              {renderInlineFormatting(item)}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered List
    if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      renderedElements.push(
        <ol key={`ol-${i}`} className="my-4 space-y-2 list-decimal list-inside text-xs sm:text-sm text-[#374151] pl-2">
          {listItems.map((item, lIdx) => (
            <li key={lIdx} className="leading-relaxed">
              {renderInlineFormatting(item)}
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Paragraph
    if (line.trim().length > 0) {
      renderedElements.push(
        <p key={`p-${i}`} className="my-3 text-xs sm:text-sm leading-relaxed text-[#374151]">
          {renderInlineFormatting(line)}
        </p>
      );
    }

    i++;
  }

  return <div className="article-content space-y-2">{renderedElements}</div>;
}

function renderInlineFormatting(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyIdx = 0;

  while (remaining.length > 0) {
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const codeMatch = remaining.match(/`([^`]+)`/);
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);

    const matches = [
      linkMatch ? { type: "link", index: linkMatch.index!, match: linkMatch } : null,
      codeMatch ? { type: "code", index: codeMatch.index!, match: codeMatch } : null,
      boldMatch ? { type: "bold", index: boldMatch.index!, match: boldMatch } : null,
    ].filter(Boolean) as { type: string; index: number; match: RegExpMatchArray }[];

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    matches.sort((a, b) => a.index - b.index);
    const earliest = matches[0];

    if (earliest.index > 0) {
      parts.push(remaining.slice(0, earliest.index));
    }

    if (earliest.type === "link") {
      const linkText = earliest.match[1];
      const linkUrl = earliest.match[2];
      parts.push(
        <a
          key={`link-${keyIdx++}`}
          href={linkUrl}
          className="text-emerald-700 font-medium underline underline-offset-2 hover:text-emerald-900 transition-colors"
        >
          {linkText}
        </a>
      );
      remaining = remaining.slice(earliest.index + earliest.match[0].length);
    } else if (earliest.type === "code") {
      const codeText = earliest.match[1];
      parts.push(
        <code
          key={`code-${keyIdx++}`}
          className="px-1.5 py-0.5 rounded font-mono text-[11px] bg-[#F1F5F9] border border-[#E2E8F0] text-[#0F172A]"
        >
          {codeText}
        </code>
      );
      remaining = remaining.slice(earliest.index + earliest.match[0].length);
    } else if (earliest.type === "bold") {
      const boldText = earliest.match[1];
      parts.push(
        <strong key={`bold-${keyIdx++}`} className="font-semibold text-[#111827]">
          {boldText}
        </strong>
      );
      remaining = remaining.slice(earliest.index + earliest.match[0].length);
    }
  }

  return <>{parts}</>;
}
