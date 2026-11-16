"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

export interface CodeTabItem {
  label: string;
  language: string;
  code: string;
}

interface CodeTabsProps {
  tabs: CodeTabItem[];
}

export function CodeTabs({ tabs }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!tabs || tabs.length === 0) return null;

  const currentTab = tabs[activeTab] || tabs[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 rounded-lg border border-zinc-800/80 bg-[#0C0D12] text-zinc-200 overflow-hidden font-mono text-xs shadow-xs">
      {/* Tab Switcher Header */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-zinc-800/80 bg-[#12141C]">
        <div className="flex items-center gap-1 overflow-x-auto">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-2.5 py-1 rounded text-xs font-sans font-medium transition-colors cursor-pointer ${
                activeTab === idx
                  ? "bg-zinc-800 text-white font-semibold"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800/60 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
          title="Copy active code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-sans text-[11px]">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="font-sans text-[11px]">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Active Code Snippet */}
      <div className="p-4 overflow-x-auto leading-relaxed text-[12.5px]">
        <pre className="whitespace-pre font-mono">{currentTab.code.trim()}</pre>
      </div>
    </div>
  );
}

