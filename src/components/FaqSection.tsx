"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "What AI models are supported by Yedii?",
      a: "Yedii supports leading commercial and open-weights models including Claude 3.5 Sonnet, GPT-4o, GPT-4o mini, Llama 3.3 70B, and Gemini 1.5 Pro. You can route simple queries to high-speed models and complex reasoning to frontier models automatically."
    },
    {
      q: "How does knowledge grounding (RAG) prevent hallucinations?",
      a: "Yedii chunks, embeds, and indexes your uploaded documents (PDFs, Word, CSV, Notion, URLs) into isolated tenant vector stores. When a user asks a question, the agent retrieves the most relevant semantic chunks and generates answers grounded exclusively on cited sources, returning citations alongside each answer."
    },
    {
      q: "Is our proprietary data used to train AI models?",
      a: "No, never. Yedii enforces strict enterprise zero-data-retention agreements with our model providers. Your data, prompts, and vector embeddings are stored in isolated customer partitions and are never used for public model training."
    },
    {
      q: "How does human agent handoff work when an agent cannot answer?",
      a: "You can define sentiment thresholds and confidence triggers. If a user exhibits frustration or requests a human, the agent immediately halts automated replies and routes the thread to the Yedii Shared Inbox or your connected Slack/Zendesk channels with complete conversation memory and context."
    },
    {
      q: "Can I deploy the same agent across WhatsApp, Slack, and our website?",
      a: "Yes! A single Yedii agent can simultaneously serve as an embedded web widget on your marketing site, a 24/7 WhatsApp customer service contact, and a Slack app for internal employee questions."
    },
    {
      q: "What is Model Context Protocol (MCP) and how does Yedii use it?",
      a: "Model Context Protocol is the open standard for connecting AI agents to data sources and external tools. Yedii acts as both an MCP client and server, allowing other agents (like Claude Desktop or IDE assistants) to query your Yedii knowledge bases directly."
    }
  ];

  return (
    <section className="py-20 bg-zinc-50/70 border-t border-zinc-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-zinc-900" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
            Everything you need to know
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-600">
            Have questions about architecture, billing, or security? We&apos;ve got answers.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-200/80 bg-white overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-zinc-900 hover:text-black cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-zinc-900" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100">
                    {faq.a}
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
