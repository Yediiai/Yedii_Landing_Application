"use client";

import Link from "next/link";

interface ProductMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function ProductMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave
}: ProductMegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[640px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
      role="menu"
      aria-label="Product Mega Menu"
    >
      <div className="rounded-[18px] p-6 bg-white border border-[#E5E7EB] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04)] grid grid-cols-2 gap-7">
        
        {/* ======================================================== */}
        {/* LEFT COLUMN: BUILD & TRAIN                               */}
        {/* ======================================================== */}
        <div className="flex flex-col">
          <div className="text-[12px] font-medium text-[#9CA3AF] mb-3 select-none">
            Build &amp; Train
          </div>

          <div className="space-y-4">
            {/* 1. AI Agents */}
            <Link
              href="/ai-agents"
              onClick={onClose}
              className="group block"
            >
              <div className="text-[14px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                AI Agents
              </div>
              <div className="text-[12.5px] text-[#6B7280] font-normal leading-snug mt-0.5">
                Build intelligent AI agents for customer support
              </div>
            </Link>

            {/* 2. Knowledge Base */}
            <Link
              href="/knowledge-base"
              onClick={onClose}
              className="group block"
            >
              <div className="text-[14px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                Knowledge Base
              </div>
              <div className="text-[12.5px] text-[#6B7280] font-normal leading-snug mt-0.5">
                Train AI using websites, PDFs, text &amp; RAG
              </div>
            </Link>

            {/* 3. AI Playground */}
            <Link
              href="/ai-playground"
              onClick={onClose}
              className="group block"
            >
              <div className="text-[14px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                AI Playground
              </div>
              <div className="text-[12.5px] text-[#6B7280] font-normal leading-snug mt-0.5">
                Test prompts, models &amp; preview conversations
              </div>
            </Link>
          </div>
        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: DEPLOY & OPTIMIZE                          */}
        {/* ======================================================== */}
        <div className="flex flex-col">
          <div className="text-[12px] font-medium text-[#9CA3AF] mb-3 select-none">
            Deploy &amp; Optimize
          </div>

          <div className="space-y-4">
            {/* 4. Website Chat */}
            <Link
              href="/customer-support-platform"
              onClick={onClose}
              className="group block"
            >
              <div className="text-[14px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                Website Chat
              </div>
              <div className="text-[12.5px] text-[#6B7280] font-normal leading-snug mt-0.5">
                Deploy customizable AI support on any website
              </div>
            </Link>

            {/* 5. Inbox */}
            <Link
              href="/solutions/customer-support"
              onClick={onClose}
              className="group block"
            >
              <div className="text-[14px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                Inbox
              </div>
              <div className="text-[12.5px] text-[#6B7280] font-normal leading-snug mt-0.5">
                Shared team inbox for live and escalated chats
              </div>
            </Link>

            {/* 6. Agent Analytics with New Badge */}
            <Link
              href="/solutions/customer-success"
              onClick={onClose}
              className="group block"
            >
              <div className="text-[14px] font-semibold text-[#111827] group-hover:text-black transition-colors flex items-center gap-2">
                <span>Agent Analytics</span>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.2 rounded">
                  New
                </span>
              </div>
              <div className="text-[12.5px] text-[#6B7280] font-normal leading-snug mt-0.5">
                Monitor resolution rates, sentiment &amp; CSAT
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
