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
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-[#09090B]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Left: Mobile Nav Toggle + Brand Logo + Nav Links */}
        <div className="flex items-center gap-3 sm:gap-6">
          {onToggleMobileNav && (
            <button
              onClick={onToggleMobileNav}
              className="lg:hidden p-1.5 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-colors"
              aria-label="Toggle Documentation Navigation"
            >
              {isMobileNavOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          )}

          {/* Yedii Brand Logo & Docs Label */}
          <Link href="/docs/product" className="flex items-center gap-2 group cursor-pointer shrink-0">
            <Image
              src="/images/Yedii.svg"
              alt="Yedii Logo"
              width={24}
              height={24}
              className="h-6 w-6 object-contain transition-transform group-hover:scale-105"
              priority
            />
            <div className="flex items-baseline gap-1.5">
              <span className="font-semibold text-[17px] tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white">
                Yedii
              </span>
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60 uppercase tracking-wider">
                Docs
              </span>
            </div>
          </Link>

          {/* Vertical Divider */}
          <div className="hidden md:block h-4 w-px bg-zinc-200 dark:bg-zinc-800" />

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
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-medium transition-all ${
                    isActive
                      ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 font-semibold shadow-2xs"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
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
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Global Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center justify-between gap-3 px-3 py-1.5 rounded bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 text-zinc-500 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-200 text-xs transition-colors shadow-2xs"
          >
            <div className="flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden sm:inline text-zinc-500 dark:text-zinc-400">Search docs...</span>
              <span className="sm:hidden text-zinc-500">Search</span>
            </div>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-medium bg-white dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 text-zinc-400 shadow-2xs">
              ⌘K
            </kbd>
          </button>

          {/* Grounded Ask AI Assistant Trigger */}
          <button
            onClick={onOpenAiAssistant}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium transition-colors shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
            <span className="hidden md:inline">Ask AI</span>
          </button>

          {/* Link to Main Application / Cloud Console */}
          <a
            href="https://app.yedii.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900 hover:bg-black dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-medium transition-colors shadow-2xs"
          >
            <span>Console</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
        </div>
      </div>
    </header>
  );
}
