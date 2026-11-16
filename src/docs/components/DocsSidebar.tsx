"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Rocket,
  Bot,
  Database,
  Sliders,
  MessageSquare,
  Users,
  CreditCard,
  Terminal,
  Code2,
  Webhook,
  ShieldAlert,
  GraduationCap,
  Briefcase,
  Sparkles,
  FileText,
  BookMarked,
  ChevronDown,
  ChevronRight,
  Search,
  BookOpen,
  Layers,
  X
} from "lucide-react";
import { DocSectionKey, DocArticle, CATEGORIES_BY_SECTION, getAllArticles } from "../data";

const ICON_MAP: Record<string, React.ElementType> = {
  Rocket,
  Bot,
  Database,
  Sliders,
  MessageSquare,
  Users,
  CreditCard,
  Terminal,
  Code2,
  Webhook,
  ShieldAlert,
  GraduationCap,
  Briefcase,
  Sparkles,
  FileText,
  BookMarked,
};

interface DocsSidebarProps {
  currentSection: DocSectionKey;
  onNavigate?: () => void;
  isMobileNavOpen?: boolean;
  onCloseMobileNav?: () => void;
}

export function DocsSidebar({
  currentSection,
  onNavigate,
  isMobileNavOpen,
  onCloseMobileNav,
}: DocsSidebarProps) {
  const pathname = usePathname();
  const [filterQuery, setFilterQuery] = useState("");
  const categories = CATEGORIES_BY_SECTION[currentSection] || [];
  const allArticles = getAllArticles();

  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (catId: string) => {
    setCollapsedCategories((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const sidebarContent = (
    <div className="py-5 pr-3 text-xs space-y-5">
      {/* Section Switcher Pills */}
      <div className="grid grid-cols-3 gap-0.5 p-0.5 bg-zinc-100 dark:bg-zinc-800/60 rounded-md border border-zinc-200/60 dark:border-zinc-800">
        <Link
          href="/docs/product"
          onClick={() => {
            onNavigate?.();
            onCloseMobileNav?.();
          }}
          className={`py-1 text-center font-medium rounded transition-all ${
            currentSection === "product"
              ? "bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 shadow-2xs font-semibold"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
        >
          Product
        </Link>
        <Link
          href="/docs/developer"
          onClick={() => {
            onNavigate?.();
            onCloseMobileNav?.();
          }}
          className={`py-1 text-center font-medium rounded transition-all ${
            currentSection === "developer"
              ? "bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 shadow-2xs font-semibold"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
        >
          Developer
        </Link>
        <Link
          href="/docs/learning"
          onClick={() => {
            onNavigate?.();
            onCloseMobileNav?.();
          }}
          className={`py-1 text-center font-medium rounded transition-all ${
            currentSection === "learning"
              ? "bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 shadow-2xs font-semibold"
              : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          }`}
        >
          Learning
        </Link>
      </div>

      {/* Filter within this section */}
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
        <input
          type="text"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          placeholder={`Filter ${currentSection} docs...`}
          className="w-full pl-8 pr-7 py-1.5 bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 rounded-md text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 dark:focus:border-zinc-600 transition-colors shadow-2xs"
        />
        {filterQuery && (
          <button
            onClick={() => setFilterQuery("")}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Categories & Articles List */}
      <nav className="space-y-5">
        {categories.map((cat) => {
          const Icon = ICON_MAP[cat.iconName] || BookOpen;
          const isCollapsed = !!collapsedCategories[cat.id];

          const catArticles = cat.articleSlugs
            .map((slug) => allArticles.find((a) => a.section === currentSection && a.slug === slug))
            .filter((a): a is DocArticle => Boolean(a))
            .filter((a) => {
              if (!filterQuery) return true;
              return (
                a.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
                a.description.toLowerCase().includes(filterQuery.toLowerCase())
              );
            });

          if (catArticles.length === 0 && filterQuery) return null;

          return (
            <div key={cat.id} className="space-y-1">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(cat.id)}
                className="w-full flex items-center justify-between text-left px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 group cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors" />
                  <span>{cat.name}</span>
                </div>
                {isCollapsed ? (
                  <ChevronRight className="w-3 h-3 text-zinc-400" />
                ) : (
                  <ChevronDown className="w-3 h-3 text-zinc-400" />
                )}
              </button>

              {/* Category Article Links */}
              {!isCollapsed && (
                <ul className="space-y-0.5 border-l border-zinc-200/70 dark:border-zinc-800/70 ml-2.5 pl-2.5 mt-0.5">
                  {catArticles.map((article) => {
                    const articleHref = `/docs/${article.section}/${article.slug}`;
                    const isActive = pathname === articleHref;

                    return (
                      <li key={article.id}>
                        <Link
                          href={articleHref}
                          onClick={() => {
                            onNavigate?.();
                            onCloseMobileNav?.();
                          }}
                          className={`flex items-center justify-between py-1.5 px-2 rounded-md transition-all text-xs ${
                            isActive
                              ? "bg-zinc-100 dark:bg-zinc-800/80 text-zinc-950 dark:text-zinc-50 font-medium"
                              : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-800/40"
                          }`}
                        >
                          <span className="truncate">{article.title}</span>
                          {article.badge && (
                            <span
                              className="ml-1.5 px-1 py-0.2 rounded text-[9.5px] font-mono uppercase font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700/60"
                            >
                              {article.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}

        {/* API Reference Link inside Developer docs */}
        {currentSection === "developer" && (
          <div className="pt-2 border-t border-zinc-200/70 dark:border-zinc-800/70">
            <Link
              href="/docs/developer/api-reference"
              onClick={() => {
                onNavigate?.();
                onCloseMobileNav?.();
              }}
              className={`flex items-center justify-between py-2 px-2.5 rounded-md text-xs font-medium transition-all ${
                pathname === "/docs/developer/api-reference"
                  ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 font-semibold"
                  : "bg-zinc-50 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                <span>Interactive API Reference</span>
              </div>
              <span className="text-[10px] font-mono bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded">
                REST
              </span>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar: Sticky, cleanly bordered */}
      <aside className="hidden lg:block w-68 lg:w-72 shrink-0 lg:border-r border-zinc-200/80 dark:border-zinc-800/80 overflow-y-auto max-h-[calc(100vh-3.5rem)] sticky top-14">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer (visible when isMobileNavOpen is true) */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobileNav}
          />
          <div className="relative w-80 max-w-full bg-white dark:bg-zinc-950 h-full shadow-2xl p-5 overflow-y-auto border-r border-zinc-200 dark:border-zinc-800 z-10 flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800 mb-2">
              <span className="font-semibold text-xs uppercase tracking-wider text-zinc-900 dark:text-zinc-100">Documentation Navigation</span>
              <button
                onClick={onCloseMobileNav}
                className="p-1 rounded text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
