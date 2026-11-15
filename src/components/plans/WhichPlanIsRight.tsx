import React from "react";

export interface PlanGuideItem {
  category: string;
  name: string;
  description: string;
  isHighlighted?: boolean;
}

export const DEFAULT_PLAN_GUIDES: PlanGuideItem[] = [
  {
    category: "GETTING STARTED",
    name: "Free",
    description:
      "Explore AI-powered customer support and experience how Yedii works before upgrading.",
  },
  {
    category: "SMALL BUSINESSES",
    name: "Starter",
    description:
      "Launch your first AI support agent, train it on your knowledge, and automate everyday customer questions.",
  },
  {
    category: "GROWING TEAMS",
    name: "Growth",
    description:
      "Scale customer support with multiple AI agents, larger knowledge bases, and growing customer conversations.",
    isHighlighted: true,
  },
  {
    category: "ESTABLISHED BUSINESSES",
    name: "Pro / Enterprise",
    description:
      "Power high-volume customer support with advanced capabilities, greater flexibility, and support for complex operations.",
  },
];

export const YEDII_AI_PLAN_GUIDES: PlanGuideItem[] = DEFAULT_PLAN_GUIDES;

interface WhichPlanIsRightProps {
  items?: PlanGuideItem[];
  title?: React.ReactNode;
  subtitle?: string;
}

export function WhichPlanIsRight({
  items = DEFAULT_PLAN_GUIDES,
  title,
  subtitle = "Pick based on how you work, not just the numbers.",
}: WhichPlanIsRightProps) {
  return (
    <section className="w-full pt-6 pb-4">
      {/* Heading & Subtitle */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-[#141C2E] tracking-tight leading-tight">
          {title || (
            <>
              Which plan is{" "}
              <span className="italic text-[#141C2E]">right</span>{" "}
              for you?
            </>
          )}
        </h2>
        {subtitle && (
          <p className="mt-2.5 text-[14.5px] sm:text-[15.5px] text-[#6B7280] font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`keep-round p-6 sm:p-7 flex flex-col justify-start text-left transition-all duration-200 ${
              item.isHighlighted
                ? "bg-white border-[1.5px] border-[#141C2E] shadow-[0_4px_16px_rgba(20,28,46,0.08)]"
                : "bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-[#D1D5DB]"
            }`}
          >
            {/* Category / Eyebrow */}
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF] mb-2">
              {item.category}
            </span>

            {/* Plan Name */}
            <h3
              className="text-[20px] font-bold tracking-tight mb-3 text-[#141C2E]"
            >
              {item.name}
            </h3>

            {/* Description */}
            <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#4B5563] font-normal">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
