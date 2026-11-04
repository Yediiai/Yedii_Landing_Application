"use client";

import React, { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export function ComparisonFAQ({
  faqs,
  competitorName,
}: {
  faqs: FAQItem[];
  competitorName: string;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // Schema.org FAQPage Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-zinc-200/80">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-10 text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
          Got Questions?
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-zinc-950 mt-1">
          Frequently Asked Questions: Yedii vs {competitorName}
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 mt-2">
          Clear answers about migration, pricing models, and co-existence with existing tools.
        </p>
      </div>

      <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200 bg-white rounded-2xl px-6 shadow-2xs">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx}>
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-[15px] text-zinc-900 hover:text-black cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{faq.question}</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-black" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="pb-5 pl-6 text-xs sm:text-sm text-zinc-600 leading-relaxed pr-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

