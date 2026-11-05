"use client";

import React, { useEffect, useState } from "react";
import { ListFilter } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface LegalTOCProps {
  content: string;
}

export function LegalTOC({ content }: LegalTOCProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Parse markdown headings
    const lines = content.split("\n");
    const extracted: TOCItem[] = [];

    lines.forEach((line) => {
      const match = line.match(/^(#{2,3})\s+(.*)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim().replace(/\*\*/g, "").replace(/`/g, "");
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");

        extracted.push({ id, text, level });
      }
    });

    setHeadings(extracted);
  }, [content]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 },
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="w-64 shrink-0 hidden xl:block">
      <div className="sticky top-28 space-y-3 pl-6 border-l border-zinc-200">
        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 uppercase tracking-wider">
          <ListFilter className="w-3.5 h-3.5 text-zinc-400" />
          On this page
        </div>

        <nav aria-label="Table of contents" className="max-h-[calc(100vh-180px)] overflow-y-auto pr-2 space-y-1">
          {headings.map((item) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToHeading(item.id)}
                className={`block w-full text-left transition-colors cursor-pointer text-xs leading-relaxed ${
                  item.level === 3 ? "pl-3 text-[11px]" : ""
                } ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {item.text}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

