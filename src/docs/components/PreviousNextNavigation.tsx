import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PreviousNextNavigationProps {
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
}

export function PreviousNextNavigation({ prev, next }: PreviousNextNavigationProps) {
  if (!prev && !next) return null;

  return (
    <div className="my-10 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {prev ? (
        <Link
          href={prev.href}
          className="p-4 sm:p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/70 shadow-2xs hover:shadow-xs transition-all group flex flex-col justify-between"
        >
          <span className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 font-medium transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Previous</span>
          </span>
          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white mt-1.5 transition-colors">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          href={next.href}
          className="p-4 sm:p-5 rounded-xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/70 shadow-2xs hover:shadow-xs transition-all group flex flex-col justify-between text-right"
        >
          <span className="flex items-center justify-end gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 font-medium transition-colors">
            <span>Next</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
          <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white mt-1.5 transition-colors">
            {next.title}
          </span>
        </Link>
      )}
    </div>
  );
}
