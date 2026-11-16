import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DocArticle } from "../data/types";

interface RelatedArticlesProps {
  articles: DocArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="my-10 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50 mb-4 tracking-tight">
        Related Documentation & Guides
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {articles.map((art) => (
          <Link
            key={art.id}
            href={`/docs/${art.section}/${art.slug}`}
            className="p-4 sm:p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/70 shadow-2xs hover:shadow-xs transition-all group flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold block mb-1.5">
                {art.category}
              </span>
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                {art.title}
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                {art.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 font-medium transition-colors">
              <span>Read guide</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
