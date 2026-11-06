"use client";

import React, { useEffect, useState } from "react";
import { DocHeading } from "../data";
import { AlignLeft, ArrowUp, ExternalLink, Sparkles } from "lucide-react";

interface TableOfContentsProps {
  headings: DocHeading[];
  onOpenAiAssistant?: () => void;
}

export function TableOfContents({ headings, onOpenAiAssistant }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(headings[0]?.id || "");
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadingProgress(Math.round(progress));
      }

      const headingElements = headings
        .map((h) => document.getElementById(h.id))
        .filter((el): el is HTMLElement => el !== null);

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140) {
          setActiveId(el.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 120;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="hidden xl:block w-64 shrink-0 py-6 pl-6 border-l border-[#E5E7EB] text-xs">
      <div className="sticky top-16 space-y-6 max-h-[calc(100vh-4rem)] overflow-y-auto pr-1">
        {/* Reading progress bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono">
            <span>Reading Progress</span>
            <span>{readingProgress}%</span>
          </div>
          <div className="w-full h-1 bg-[#E5E7EB] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#111827] transition-all duration-150"
              style={{ width: `${readingProgress}%` }}
            />
          </div>
        </div>

        {/* Headings List */}
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111827] mb-3">
            <AlignLeft className="w-3.5 h-3.5" />
            <span>On This Page</span>
          </div>

          <ul className="space-y-2 border-l border-[#E5E7EB] ml-1 pl-3">
            {headings.map((heading) => {
              const isActive = activeId === heading.id;
              return (
                <li key={heading.id} className={heading.level === 3 ? "pl-3" : ""}>
                  <button
                    onClick={() => scrollToHeading(heading.id)}
                    className={`text-left block leading-snug transition-colors cursor-pointer ${
                      isActive
                        ? "text-[#111827] font-semibold"
                        : "text-[#6B7280] hover:text-[#111827]"
                    }`}
                  >
                    {heading.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Helper Actions */}
        <div className="pt-4 border-t border-[#E5E7EB] space-y-2 text-[11px] text-zinc-500">
          {onOpenAiAssistant && (
            <button
              onClick={onOpenAiAssistant}
              className="w-full flex items-center gap-2 py-1.5 px-2.5 rounded bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 font-medium transition-colors cursor-pointer shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ask AI about this article</span>
            </button>
          )}

          <a
            href="https://github.com/yedii-ai/documentation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-1 hover:text-[#111827] transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Edit this page on GitHub</span>
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 py-1 hover:text-[#111827] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </div>
  );
}
