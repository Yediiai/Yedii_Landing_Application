import React from "react";
import { Info, AlertTriangle, AlertOctagon, CheckCircle2 } from "lucide-react";

interface CalloutProps {
  title?: string;
  children: React.ReactNode;
}

export function InfoCallout({ title = "Note", children }: CalloutProps) {
  return (
    <div className="my-5 p-4 rounded-lg bg-blue-50/60 dark:bg-blue-950/20 border-l-4 border-blue-500 text-xs sm:text-sm text-blue-900 dark:text-blue-200">
      <div className="flex items-center gap-2 font-semibold text-blue-700 dark:text-blue-400 mb-1">
        <Info className="w-4 h-4 shrink-0" />
        <span>{title}</span>
      </div>
      <div className="leading-relaxed opacity-95">{children}</div>
    </div>
  );
}

export function WarningCallout({ title = "Warning", children }: CalloutProps) {
  return (
    <div className="my-5 p-4 rounded-lg bg-amber-50/60 dark:bg-amber-950/20 border-l-4 border-amber-500 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
      <div className="flex items-center gap-2 font-semibold text-amber-700 dark:text-amber-400 mb-1">
        <AlertTriangle className="w-4 h-4 shrink-0" />
        <span>{title}</span>
      </div>
      <div className="leading-relaxed opacity-95">{children}</div>
    </div>
  );
}

export function DangerCallout({ title = "Caution", children }: CalloutProps) {
  return (
    <div className="my-5 p-4 rounded-lg bg-red-50/60 dark:bg-red-950/20 border-l-4 border-red-500 text-xs sm:text-sm text-red-900 dark:text-red-200">
      <div className="flex items-center gap-2 font-semibold text-red-700 dark:text-red-400 mb-1">
        <AlertOctagon className="w-4 h-4 shrink-0" />
        <span>{title}</span>
      </div>
      <div className="leading-relaxed opacity-95">{children}</div>
    </div>
  );
}

export function SuccessCallout({ title = "Best Practice", children }: CalloutProps) {
  return (
    <div className="my-5 p-4 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/20 border-l-4 border-emerald-500 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200">
      <div className="flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
        <CheckCircle2 className="w-4 h-4 shrink-0" />
        <span>{title}</span>
      </div>
      <div className="leading-relaxed opacity-95">{children}</div>
    </div>
  );
}

