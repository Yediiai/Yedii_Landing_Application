import React from "react";

export interface PlanGuideItem {
  category: string;
  name: string;
  description: string;
  isHighlighted?: boolean;
}

export const DEFAULT_PLAN_GUIDES: PlanGuideItem[] = [
  {
    category: "JUST GETTING STARTED",
    name: "Free",
    description:
      "You want to test UTM tracking on a side project or small campaign before committing.",
  },
  {
    category: "SOLO CREATORS",
    name: "Personal",
    description:
      "You run newsletters, social posts, or one brand and want clean links with your own domain.",
  },
  {
    category: "MARKETING TEAMS",
    name: "Growth",
    description:
      "You run campaigns across channels with a small team and need shared templates and rules.",
    isHighlighted: true,
  },
  {
    category: "AGENCIES & MULTI-BRAND",
    name: "Agency",
    description:
      "You manage links for multiple clients and need separate domains and more seats.",
  },
];

export const YEDII_AI_PLAN_GUIDES: PlanGuideItem[] = [
  {
    category: "JUST GETTING STARTED",
    name: "Free",
    description:
      "You want to test autonomous AI agents on a side project or website before committing.",
  },
  {
    category: "SOLO CREATORS",
    name: "Starter",
    description:
      "You run one brand or support channel and want clean custom AI widgets with re-crawling.",
  },
  {
    category: "MARKETING & SUPPORT TEAMS",
    name: "Growth",
    description:
      "You run customer support across multiple channels with advanced analytics and priority support.",
    isHighlighted: true,
  },
  {
    category: "AGENCIES & ENTERPRISE",
    name: "Pro / Agency",
    description:
      "You manage high-volume AI agents for multiple clients or brands with custom credits and 2FA.",
  },
];

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
              <span className="italic text-[#EA580C]">right</span>{" "}
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
                ? "bg-[#FFF9F5] border border-[#FED7AA] shadow-[0_2px_8px_rgba(234,88,12,0.06)]"
                : "bg-white border border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-[#D1D5DB]"
            }`}
          >
            {/* Category / Eyebrow */}
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9CA3AF] mb-2">
              {item.category}
            </span>

            {/* Plan Name */}
            <h3
              className={`text-[20px] font-bold tracking-tight mb-3 ${
                item.isHighlighted ? "text-[#EA580C]" : "text-[#141C2E]"
              }`}
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
