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
    <div className="hidden xl:block w-60 lg:w-64 shrink-0 py-6 pl-6 border-l border-zinc-200/80 dark:border-zinc-800/80 text-xs">
      <div className="sticky top-14 space-y-6 max-h-[calc(100vh-3.5rem)] overflow-y-auto pr-1">
        {/* Reading progress bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
            <span>Reading Progress</span>
            <span>{readingProgress}%</span>
          </div>
          <div className="w-full h-0.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-zinc-900 dark:bg-zinc-100 transition-all duration-150"
              style={{ width: `${readingProgress}%` }}
            />
          </div>
        </div>

        {/* Headings List */}
        <div>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
            <AlignLeft className="w-3.5 h-3.5" />
            <span>On This Page</span>
          </div>

          <ul className="space-y-1.5 border-l border-zinc-200/70 dark:border-zinc-800/70 ml-1 pl-3">
            {headings.map((heading) => {
              const isActive = activeId === heading.id;
              return (
                <li key={heading.id} className={heading.level === 3 ? "pl-3" : ""}>
                  <button
                    onClick={() => scrollToHeading(heading.id)}
                    className={`text-left block leading-snug transition-colors cursor-pointer ${
                      isActive
                        ? "text-zinc-950 dark:text-zinc-50 font-medium"
                        : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
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
        <div className="pt-4 border-t border-zinc-200/70 dark:border-zinc-800/70 space-y-2 text-[11px] text-zinc-500 dark:text-zinc-400">
          {onOpenAiAssistant && (
            <button
              onClick={onOpenAiAssistant}
              className="w-full flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium transition-colors cursor-pointer shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
              <span>Ask AI about this article</span>
            </button>
          )}

          <a
            href="https://github.com/yedii-ai/documentation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Edit this page on GitHub</span>
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 py-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </div>
  );
}
