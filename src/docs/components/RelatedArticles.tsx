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
    <div className="my-10 pt-6 border-t border-[#E5E7EB]">
      <h3 className="text-base font-bold text-[#111827] mb-4">
        Related Documentation & Guides
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {articles.map((art) => (
          <Link
            key={art.id}
            href={`/docs/${art.section}/${art.slug}`}
            className="p-4 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#141C2E] shadow-2xs hover:shadow-xs transition-all group flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold block mb-1">
                {art.category}
              </span>
              <h4 className="text-sm font-semibold text-[#111827] group-hover:text-emerald-700 transition-colors">
                {art.title}
              </h4>
              <p className="text-xs text-[#6B7280] mt-1 line-clamp-2 leading-relaxed">
                {art.description}
              </p>
            </div>

            <div className="mt-4 pt-2 flex items-center gap-1 text-xs text-zinc-400 group-hover:text-black font-medium">
              <span>Read guide</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
