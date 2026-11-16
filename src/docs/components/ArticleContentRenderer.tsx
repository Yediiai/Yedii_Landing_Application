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
          className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 mt-10 mb-4 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 first:border-0 first:mt-0 first:pt-0 scroll-mt-24"
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
          className="text-base sm:text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mt-7 mb-3 scroll-mt-24"
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
          <div key={`table-${i}`} className="my-6 border border-zinc-200/80 dark:border-zinc-800 rounded-lg overflow-x-auto text-xs bg-white dark:bg-zinc-900/40 shadow-2xs">
            <table className="w-full text-left">
              <thead className="bg-zinc-50 dark:bg-zinc-900/80 border-b border-zinc-200/80 dark:border-zinc-800 font-mono text-zinc-600 dark:text-zinc-400">
                <tr>
                  {headerCols.map((h, hIdx) => (
                    <th key={hIdx} className="p-3 font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/70 dark:divide-zinc-800/70">
                {bodyRows.map((cols, rIdx) => (
                  <tr key={rIdx} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30">
                    {cols.map((col, cIdx) => (
                      <td key={cIdx} className="p-3 text-zinc-700 dark:text-zinc-300">
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
        <ul key={`ul-${i}`} className="my-4 space-y-2 list-disc list-inside text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 pl-2">
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
        <ol key={`ol-${i}`} className="my-4 space-y-2 list-decimal list-inside text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 pl-2">
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
        <p key={`p-${i}`} className="my-3.5 text-sm sm:text-[15px] leading-7 text-zinc-700 dark:text-zinc-300 font-normal">
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
          className="text-zinc-900 dark:text-zinc-100 font-medium underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 transition-colors"
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
          className="px-1.5 py-0.5 rounded font-mono text-[12px] bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60 text-zinc-800 dark:text-zinc-200 font-normal"
        >
          {codeText}
        </code>
      );
      remaining = remaining.slice(earliest.index + earliest.match[0].length);
    } else if (earliest.type === "bold") {
      const boldText = earliest.match[1];
      parts.push(
        <strong key={`bold-${keyIdx++}`} className="font-semibold text-zinc-950 dark:text-zinc-50">
          {boldText}
        </strong>
      );
      remaining = remaining.slice(earliest.index + earliest.match[0].length);
    }
  }

  return <>{parts}</>;
}
