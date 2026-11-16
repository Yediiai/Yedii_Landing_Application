import React from "react";

export interface StepItem {
  number: number;
  title: string;
  description: string;
  codeSnippet?: string;
  language?: string;
}

interface StepGuideProps {
  steps: StepItem[];
}

export function StepGuide({ steps }: StepGuideProps) {
  return (
    <div className="my-6 space-y-6">
      {steps.map((step) => (
        <div
          key={step.number}
          className="relative pl-8 pb-6 border-l border-zinc-200/80 dark:border-zinc-800 last:border-transparent last:pb-0"
        >
          {/* Step Number Badge */}
          <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-[11px] flex items-center justify-center font-mono shadow-2xs">
            {step.number}
          </div>

          {/* Step Header */}
          <h4 className="text-sm sm:text-base font-semibold text-zinc-950 dark:text-zinc-50 mb-1">
            {step.title}
          </h4>

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
            {step.description}
          </p>

          {/* Optional Code Snippet */}
          {step.codeSnippet && (
            <div className="p-3 rounded-lg bg-[#0C0D12] border border-zinc-800 text-xs font-mono text-zinc-200 overflow-x-auto shadow-2xs">
              <pre>{step.codeSnippet.trim()}</pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

