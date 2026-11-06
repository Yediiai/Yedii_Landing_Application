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
    <div className="my-10 pt-6 border-t border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-2 gap-4">
      {prev ? (
        <Link
          href={prev.href}
          className="p-4 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#141C2E] shadow-2xs hover:shadow-xs transition-all group flex flex-col justify-between"
        >
          <span className="flex items-center gap-1.5 text-xs text-zinc-400 group-hover:text-black transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Previous</span>
          </span>
          <span className="text-sm font-semibold text-[#111827] mt-1">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          href={next.href}
          className="p-4 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#141C2E] shadow-2xs hover:shadow-xs transition-all group flex flex-col justify-between text-right"
        >
          <span className="flex items-center justify-end gap-1.5 text-xs text-zinc-400 group-hover:text-black transition-colors">
            <span>Next</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
          <span className="text-sm font-semibold text-[#111827] mt-1">
            {next.title}
          </span>
        </Link>
      )}
    </div>
  );
}
