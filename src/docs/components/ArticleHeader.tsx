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
    <div className="mb-8 pb-7 border-b border-zinc-200/80 dark:border-zinc-800/80">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 mb-5 overflow-x-auto">
        <Link href="/docs" className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
          Docs
        </Link>
        <ChevronRight className="w-3 h-3 text-zinc-300 dark:text-zinc-600 shrink-0" />
        <Link
          href={`/docs/${article.section}`}
          className="hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors capitalize shrink-0"
        >
          {sectionLabels[article.section] || article.section}
        </Link>
        <ChevronRight className="w-3 h-3 text-zinc-300 dark:text-zinc-600 shrink-0" />
        <span className="text-zinc-700 dark:text-zinc-300 font-medium truncate">
          {article.category}
        </span>
      </nav>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 mb-3.5 leading-tight">
        {article.title}
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
        {article.description}
      </p>

      {/* Article Metadata Bar */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-5 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
          <span>{article.readingTimeMinutes} min read</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
          <span>Updated {article.updatedAt}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
          <span>{article.author}</span>
        </div>

        {article.status === "PUBLISHED" && (
          <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[11px] font-sans font-medium">Verified</span>
          </div>
        )}
      </div>
    </div>
  );
}
