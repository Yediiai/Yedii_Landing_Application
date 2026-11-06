"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Search,
  BookOpen,
  Code2,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Menu,
  X,
  Layers
} from "lucide-react";

interface DocsHeaderProps {
  onOpenSearch: () => void;
  onOpenAiAssistant: () => void;
  onToggleMobileNav?: () => void;
  isMobileNavOpen?: boolean;
}

export function DocsHeader({
  onOpenSearch,
  onOpenAiAssistant,
  onToggleMobileNav,
  isMobileNavOpen,
}: DocsHeaderProps) {
  const pathname = usePathname();

  const navLinks = [
    { title: "Product Docs", href: "/docs/product", icon: BookOpen },
    { title: "Developer Docs", href: "/docs/developer", icon: Code2 },
    { title: "Learning Center", href: "/docs/learning", icon: GraduationCap },
    { title: "API Reference", href: "/docs/developer/api-reference", icon: Layers },
    { title: "Changelog", href: "/changelog", icon: Sparkles },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Mobile Nav Toggle + Brand Logo + Nav Links */}
        <div className="flex items-center gap-3 sm:gap-6">
          {onToggleMobileNav && (
            <button
              onClick={onToggleMobileNav}
              className="lg:hidden p-2 text-[#4B5563] hover:text-[#111827] rounded border border-[#E5E7EB] bg-white transition-colors"
              aria-label="Toggle Documentation Navigation"
            >
              {isMobileNavOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          )}

          {/* Yedii Brand Logo & Docs Label */}
          <Link href="/docs/product" className="flex items-center gap-2 group cursor-pointer shrink-0">
            <Image
              src="/images/yedii-logo.png"
              alt="Yedii Logo"
              width={26}
              height={26}
              className="h-6.5 w-6.5 object-contain transition-transform group-hover:scale-105"
              priority
            />
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-[19px] tracking-tight text-[#111827] group-hover:text-black">
                Yedii
              </span>
              <span className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-wider">
                Docs
              </span>
            </div>
          </Link>

          {/* Vertical Divider */}
          <div className="hidden md:block h-5 w-px bg-[#E5E7EB]" />

          {/* Center: Primary Section Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/docs/developer/api-reference"
                  ? pathname === link.href
                  : pathname === link.href || pathname.startsWith(link.href + "/");
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#F3F4F6] text-[#111827] font-semibold"
                      : "text-[#4B5563] hover:text-[#111827] hover:bg-[#F9FAFB]"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 opacity-70" />
                  <span>{link.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: Quick Search, Ask AI, Console Link */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Global Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 pl-3 pr-2.5 py-1.5 rounded bg-[#F9FAFB] border border-[#E5E7EB] text-[#4B5563] hover:border-[#9CA3AF] hover:text-[#111827] text-xs transition-colors"
          >
            <Search className="w-3.5 h-3.5 text-zinc-400" />
            <span className="hidden sm:inline">Search docs...</span>
            <span className="sm:hidden">Search</span>
            <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[10px] font-mono bg-white rounded border border-[#E5E7EB] text-zinc-500 shadow-2xs">
              ⌘K
            </kbd>
          </button>

          {/* Grounded Ask AI Assistant Trigger */}
          <button
            onClick={onOpenAiAssistant}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-medium transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden md:inline">Ask AI</span>
          </button>

          {/* Link to Main Application / Cloud Console */}
          <a
            href="https://app.yedii.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#111827] text-white text-xs font-semibold hover:bg-black transition-colors shadow-2xs"
          >
            <span>Console</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
        </div>
      </div>
    </header>
  );
}
