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
} from "lucide-react";

interface DifferentiatorCard {
  icon: React.ElementType;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const differentiators: DifferentiatorCard[] = [
  {
    icon: Brain,
    title: "Business-Aware AI",
    description: "AI agents understand business-specific information and deliver relevant responses.",
    linkText: "Explore Platform",
    linkHref: "#features",
  },
  {
    icon: Database,
    title: "Your Knowledge, Your AI",
    description: "Connect websites, PDFs, and text content to build knowledge-grounded AI agents.",
    linkText: "View Knowledge Base",
    linkHref: "#features",
  },
  {
    icon: Sliders,
    title: "Complete Customization",
    description: "Customize agent personality, instructions, behavior, appearance, and customer experiences.",
    linkText: "See Customization",
    linkHref: "#playground",
  },
  {
    icon: PlaySquare,
    title: "Safe Testing Playground",
    description: "Test your AI agents safely with realistic customer interactions before deployment.",
    linkText: "Try the Playground",
    linkHref: "#playground",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Ready Support",
    description: "Deliver consistent, reliable customer service across all communication channels.",
    linkText: "Learn About Enterprise",
    linkHref: "/enterprise",
  },
  {
    icon: Layers,
    title: "Continuous Learning",
    description: "Improve response accuracy and customer satisfaction through continuous interaction insights.",
    linkText: "Read Case Studies",
    linkHref: "/customers",
  },
];

export function WhyChooseYediiSection() {
  return (
    <section id="why-yedii" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-semibold mb-3.5 shadow-2xs">
            <span>AI-First Customer Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 font-serif">
            What Makes Yedii Different
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Not just answering questions. Understanding context, solving problems, and creating better customer experiences at scale..
          </p>
        </div>

        {/* 6 Feature Cards Grid: 3 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative bg-white border border-zinc-200/80 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:border-zinc-300 hover:shadow-md"
              >
                <div>
                  {/* Icon Container: Inverted Dark Mode Style (Dark background with white icon) */}
                  <div className="w-11 h-11 rounded-xl bg-[#141C2E] border border-zinc-800 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform duration-200 shadow-xs">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-950">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-[14.5px] text-zinc-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Card Footer Link */}
                <div className="mt-6 pt-5 border-t border-zinc-100">
                  <Link
                    href={card.linkHref}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-800 group-hover:text-black transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
