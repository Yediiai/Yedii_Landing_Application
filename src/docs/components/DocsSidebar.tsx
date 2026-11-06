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
    <div className="py-6 pr-4 text-xs space-y-6">
      {/* Section Switcher Pills */}
      <div className="grid grid-cols-3 gap-1 p-1 bg-[#F3F4F6] rounded border border-[#E5E7EB]">
        <Link
          href="/docs/product"
          onClick={() => {
            onNavigate?.();
            onCloseMobileNav?.();
          }}
          className={`py-1.5 text-center font-medium rounded transition-all ${
            currentSection === "product"
              ? "bg-white text-[#111827] shadow-2xs font-semibold"
              : "text-[#6B7280] hover:text-[#111827]"
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
          className={`py-1.5 text-center font-medium rounded transition-all ${
            currentSection === "developer"
              ? "bg-white text-[#111827] shadow-2xs font-semibold"
              : "text-[#6B7280] hover:text-[#111827]"
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
          className={`py-1.5 text-center font-medium rounded transition-all ${
            currentSection === "learning"
              ? "bg-white text-[#111827] shadow-2xs font-semibold"
              : "text-[#6B7280] hover:text-[#111827]"
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
          className="w-full pl-8 pr-3 py-1.5 bg-white border border-[#E5E7EB] rounded text-xs text-[#111827] placeholder:text-zinc-400 focus:outline-none focus:border-[#141C2E] transition-colors"
        />
        {filterQuery && (
          <button
            onClick={() => setFilterQuery("")}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black"
          >
            <X className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Categories & Articles List */}
      <nav className="space-y-6">
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
            <div key={cat.id} className="space-y-1.5">
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(cat.id)}
                className="w-full flex items-center justify-between text-left px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#111827] hover:text-black group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black transition-colors" />
                  <span>{cat.name}</span>
                </div>
                {isCollapsed ? (
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                )}
              </button>

              {/* Category Article Links */}
              {!isCollapsed && (
                <ul className="space-y-0.5 border-l border-[#E5E7EB] ml-3.5 pl-2.5">
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
                          className={`flex items-center justify-between py-1.5 px-2 rounded transition-all ${
                            isActive
                              ? "bg-[#F3F4F6] text-[#111827] font-semibold border-l-2 border-[#111827] -ml-[11px] pl-[9px]"
                              : "text-[#4B5563] hover:text-[#111827] hover:bg-[#F9FAFB]"
                          }`}
                        >
                          <span className="truncate">{article.title}</span>
                          {article.badge && (
                            <span
                              className={`ml-1.5 px-1.5 py-0.2 rounded text-[10px] font-mono uppercase font-semibold ${
                                isActive
                                  ? "bg-zinc-200 text-zinc-800"
                                  : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              }`}
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
          <div className="pt-2 border-t border-[#E5E7EB]">
            <Link
              href="/docs/developer/api-reference"
              onClick={() => {
                onNavigate?.();
                onCloseMobileNav?.();
              }}
              className={`flex items-center justify-between py-2 px-3 rounded font-semibold transition-all ${
                pathname === "/docs/developer/api-reference"
                  ? "bg-[#F3F4F6] text-[#111827] border border-[#E5E7EB]"
                  : "bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100"
              }`}
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>Interactive API Reference</span>
              </div>
              <span className="text-[10px] font-mono bg-emerald-600 text-white px-1.5 py-0.5 rounded">
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
      <aside className="hidden lg:block w-72 shrink-0 lg:border-r border-[#E5E7EB] overflow-y-auto max-h-[calc(100vh-4rem)] sticky top-16">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer (visible when isMobileNavOpen is true) */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobileNav}
          />
          <div className="relative w-80 max-w-full bg-white h-full shadow-2xl p-6 overflow-y-auto border-r border-[#E5E7EB] z-10 flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB] mb-2">
              <span className="font-bold text-sm text-[#111827]">Documentation Navigation</span>
              <button
                onClick={onCloseMobileNav}
                className="p-1 rounded text-zinc-500 hover:text-black hover:bg-zinc-100"
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
