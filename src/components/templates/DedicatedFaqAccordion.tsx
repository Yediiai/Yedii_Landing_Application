"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export function DedicatedFaqAccordion({ items }: { items: FaqItem[] }) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#E8E9EC] border-t border-b border-[#E8E9EC]">
      {items.map((faq, idx) => {
        const isOpen = openFaqIdx === idx;
        return (
          <div key={idx}>
            <button
              type="button"
              onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
              className="w-full py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-[15px] text-[#111827] hover:text-black cursor-pointer"
            >
              <span>{faq.q}</span>
              <ChevronDown
                className={`w-4 h-4 text-[#6B7280] shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-black" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="pb-4 text-xs sm:text-sm text-[#4B5563] leading-relaxed pr-6">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

