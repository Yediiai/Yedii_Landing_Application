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
    <div className="my-5 rounded-lg border border-[#141C2E]/15 dark:border-white/10 bg-[#0B0F19] text-zinc-100 overflow-hidden font-mono text-xs shadow-sm">
      {/* Tab Switcher Header */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-1 overflow-x-auto">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1.5 rounded text-xs font-sans font-medium transition-colors ${
                activeTab === idx
                  ? "bg-white/15 text-white font-semibold"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
          title="Copy active code"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-sans">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span className="font-sans">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Active Code Snippet */}
      <div className="p-4 overflow-x-auto leading-relaxed">
        <pre className="whitespace-pre">{currentTab.code.trim()}</pre>
      </div>
    </div>
  );
}

