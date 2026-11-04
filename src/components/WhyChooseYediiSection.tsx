import React from "react";
import Link from "next/link";
import {
  Brain,
  Database,
  Sliders,
  PlaySquare,
  ShieldCheck,
  Layers,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface DifferentiatorCard {
  icon: React.ElementType;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
}

const differentiators: DifferentiatorCard[] = [
  {
    icon: Brain,
    title: "Business-Aware AI",
    description:
      "AI agents understand business-specific information and deliver relevant responses.",
    href: "/customer-support-platform",
    linkLabel: "Explore Platform",
  },
  {
    icon: Database,
    title: "Your Knowledge, Your AI",
    description:
      "Connect websites, PDFs, and text content to build knowledge-grounded AI agents.",
    href: "/knowledge-base",
    linkLabel: "View Knowledge Base",
  },
  {
    icon: Sliders,
    title: "Complete Customization",
    description:
      "Customize agent personality, instructions, behavior, appearance, and customer experiences.",
    href: "/ai-instructions",
    linkLabel: "See Customization",
  },
  {
    icon: PlaySquare,
    title: "Test Before You Deploy",
    description:
      "Experiment, test conversations, and refine AI agent responses using the AI Playground.",
    href: "/ai-playground",
    linkLabel: "Try AI Playground",
  },
  {
    icon: ShieldCheck,
    title: "Reliable and Controlled Responses",
    description:
      "Configure instructions and guardrails to align AI responses with business policies and knowledge.",
    href: "/docs",
    linkLabel: "Read Guardrails Guide",
  },
  {
    icon: Layers,
    title: "Built to Scale",
    description:
      "Manage agents, knowledge sources, and customer support experiences from one centralized platform.",
    href: "/enterprise",
    linkLabel: "Learn About Enterprise",
  },
];

export function WhyChooseYediiSection() {
  return (
    <section id="why-yedii" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-semibold mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
            <span>AI-First Customer Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 font-serif">
            Why teams choose Yedii
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            More than an AI chatbot. A smarter way to understand your business, support your customers, and scale every interaction.
          </p>
        </div>

        {/* 6 Feature Cards Grid: 3 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-zinc-200/90 rounded-2xl p-7 shadow-2xs hover:shadow-md hover:border-zinc-300 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon container */}
                  <div className="w-11 h-11 rounded-xl bg-zinc-100 border border-zinc-200/80 flex items-center justify-center text-zinc-900 group-hover:bg-[#141C2E] group-hover:text-white group-hover:border-[#141C2E] transition-all duration-200 mb-5">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-black transition-colors mb-2.5">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13.5px] text-zinc-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Internal link where relevant dedicated product page exists */}
                {card.href && (
                  <div className="pt-5 mt-6 border-t border-zinc-100">
                    <Link
                      href={card.href}
                      className="text-xs font-semibold text-zinc-900 group-hover:text-black inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>{card.linkLabel || "Learn more"}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

