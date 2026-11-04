import React from "react";
import Link from "next/link";
import {
  Bot,
  Database,
  Sliders,
  PlaySquare,
  Cpu,
  Code2,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: Bot,
    title: "AI-First Agent Creation",
    desc: "Build autonomous support agents in under 5 minutes without navigating complex human ticketing trees or phone routing menus.",
    link: "/ai-agents",
  },
  {
    icon: Database,
    title: "Flexible Knowledge Management",
    desc: "Sync web domains, sitemaps, PDFs, and documentation directly. Automated daily/weekly crawling keeps citations perpetually fresh.",
    link: "/knowledge-base",
  },
  {
    icon: Sliders,
    title: "Customizable Agent Personas",
    desc: "Calibrate system tone, domain expertise, greeting triggers, and negative constraints to embody your exact brand voice.",
    link: "/ai-instructions",
  },
  {
    icon: PlaySquare,
    title: "AI Playground for Testing",
    desc: "Simulate complex conversations, inspect retrieved source chunks, and test system instructions before pushing live to visitors.",
    link: "/ai-playground",
  },
  {
    icon: Cpu,
    title: "Multiple AI Model Support",
    desc: "Avoid single-provider lock-in. Freely switch between Claude 3.5 Sonnet, GPT-4o, and high-throughput open-weight models.",
    link: "/customer-support-platform",
  },
  {
    icon: Code2,
    title: "Simplified Website Deployment",
    desc: "Embed a featherweight (<38KB) widget with a single script tag or React SDK. Includes full CSS variables and custom triggers.",
    link: "/docs",
  },
];

export function WhyChooseYedii() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-zinc-200/80">
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-500">
          The Yedii Advantage
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-zinc-950 mt-1">
          Why Choose Yedii?
        </h2>
        <p className="text-xs sm:text-sm text-zinc-600 mt-2">
          Engineered from first principles for autonomous customer support in the modern LLM era.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-zinc-200/90 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#141C2E]/5 border border-[#141C2E]/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#141C2E]" />
                </div>
                <h3 className="font-bold text-base text-zinc-950 mb-2">{p.title}</h3>
                <p className="text-xs text-zinc-600 leading-relaxed mb-4">{p.desc}</p>
              </div>

              <Link
                href={p.link}
                className="text-xs font-semibold text-[#141C2E] hover:underline inline-flex items-center gap-1 pt-3 border-t border-zinc-100"
              >
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
