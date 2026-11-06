import React from "react";
import Link from "next/link";
import { ChevronRight, Clock, Calendar, User, CheckCircle2 } from "lucide-react";
import { DocArticle } from "../data";

interface ArticleHeaderProps {
  article: DocArticle;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  const sectionLabels: Record<string, string> = {
    product: "Product Documentation",
    developer: "Developer Documentation",
    learning: "Learning Center",
  };

  return (
    <div className="mb-8 pb-6 border-b border-[#E5E7EB]">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs text-zinc-500 mb-4 overflow-x-auto">
        <Link href="/docs" className="hover:text-[#111827] transition-colors">
          Docs
        </Link>
        <ChevronRight className="w-3 h-3 text-zinc-400 shrink-0" />
        <Link
          href={`/docs/${article.section}`}
          className="hover:text-[#111827] transition-colors capitalize shrink-0"
        >
          {sectionLabels[article.section] || article.section}
        </Link>
        <ChevronRight className="w-3 h-3 text-zinc-400 shrink-0" />
        <span className="text-zinc-800 font-medium truncate">
          {article.category}
        </span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111827] mb-3">
        {article.title}
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-5">
        {article.description}
      </p>

      {/* Article Metadata Bar */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#6B7280] font-mono">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-zinc-400" />
          <span>{article.readingTimeMinutes} min read</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-zinc-400" />
          <span>Updated {article.updatedAt}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-zinc-400" />
          <span>{article.author}</span>
        </div>

        {article.status === "PUBLISHED" && (
          <div className="flex items-center gap-1 text-emerald-600">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="text-[11px] font-sans font-medium">Verified</span>
          </div>
        )}
      </div>
    </div>
  );
}
