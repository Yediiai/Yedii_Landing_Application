import React from "react";
import { Info, AlertTriangle, AlertOctagon, CheckCircle2 } from "lucide-react";

interface CalloutProps {
  title?: string;
  children: React.ReactNode;
}

export function InfoCallout({ title = "Note", children }: CalloutProps) {
  return (
    <div className="my-5 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
      <div className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
        <Info className="w-4 h-4 text-blue-500 dark:text-blue-400 shrink-0" />
        <span>{title}</span>
      </div>
      <div className="leading-relaxed opacity-95">{children}</div>
    </div>
  );
}

export function WarningCallout({ title = "Warning", children }: CalloutProps) {
  return (
    <div className="my-5 p-4 rounded-lg bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 text-xs sm:text-sm text-amber-950 dark:text-amber-200">
      <div className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-300 mb-1">
        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
        <span>{title}</span>
      </div>
      <div className="leading-relaxed opacity-95">{children}</div>
    </div>
  );
}

export function DangerCallout({ title = "Caution", children }: CalloutProps) {
  return (
    <div className="my-5 p-4 rounded-lg bg-red-50/40 dark:bg-red-950/20 border border-red-200/80 dark:border-red-900/40 text-xs sm:text-sm text-red-950 dark:text-red-200">
      <div className="flex items-center gap-2 font-semibold text-red-800 dark:text-red-300 mb-1">
        <AlertOctagon className="w-4 h-4 text-red-500 shrink-0" />
        <span>{title}</span>
      </div>
      <div className="leading-relaxed opacity-95">{children}</div>
    </div>
  );
}

export function SuccessCallout({ title = "Best Practice", children }: CalloutProps) {
  return (
    <div className="my-5 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
      <div className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
        <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" />
        <span>{title}</span>
      </div>
      <div className="leading-relaxed opacity-95">{children}</div>
    </div>
  );
}

