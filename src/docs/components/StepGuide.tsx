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
          className="relative pl-10 pb-6 border-l-2 border-zinc-200 dark:border-white/10 last:border-transparent last:pb-0"
        >
          {/* Step Number Badge */}
          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-[#141C2E] dark:bg-white text-white dark:text-[#141C2E] font-bold text-xs flex items-center justify-center font-mono shadow-sm">
            {step.number}
          </div>

          {/* Step Header */}
          <h4 className="text-base font-bold text-[#141C2E] dark:text-white mb-1.5">
            {step.title}
          </h4>

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-3">
            {step.description}
          </p>

          {/* Optional Code Snippet */}
          {step.codeSnippet && (
            <div className="p-3 rounded-lg bg-[#0B0F19] border border-white/10 text-xs font-mono text-zinc-200 overflow-x-auto">
              <pre>{step.codeSnippet.trim()}</pre>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

