"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: "1. What does Yedii do?",
      a: "Yedii is an autonomous AI customer support and workflow agent platform. It connects directly to your company knowledge base, documentation, and operational databases to resolve up to 75% of tier-1 customer inquiries instantly with cited, zero-hallucination answers.",
    },
    {
      q: "2. How does Yedii prevent hallucinations and ensure accurate responses?",
      a: "Yedii uses isolated Retrieval-Augmented Generation (RAG) with strict semantic guardrails. When an inquiry arrives, Yedii fetches exact reference passages from your approved knowledge sources and grounds every word exclusively on cited facts. If confidence is below your threshold, it automatically falls back to human escalation.",
    },
    {
      q: "3. What channels can I deploy Yedii agents to?",
      a: "A single Yedii agent can be deployed across your website (via our embeddable web widget), WhatsApp Business API, Slack, Microsoft Teams, and email, with synchronized context and shared conversational history across all touchpoints.",
    },
    {
      q: "4. How does human-in-the-loop escalation work?",
      a: "You can configure sentiment triggers, keyword alerts, or confidence thresholds. When an escalation triggers, Yedii pauses automated responses and seamlessly routes the conversation to your team's existing helpdesk (Zendesk, Intercom, Freshdesk) or the Yedii Shared Inbox with complete conversation history and context.",
    },
    {
      q: "5. Is our company and customer data secure and private?",
      a: "Yes. Yedii provides enterprise-grade tenant isolation with contractually enforced Zero Data Retention (ZDR). Your uploaded documents, internal tickets, and chat transcripts are never logged, exposed to third parties, or used to train public foundation models.",
    },
    {
      q: "6. What file formats and data integrations does Yedii support?",
      a: "Yedii natively ingests PDFs, Word documents, CSVs, Notion pages, website URLs, Confluence workspaces, and internal knowledge handbooks. Vector embeddings sync automatically whenever you update your source files.",
    },
    {
      q: "7. Which AI foundation models power Yedii?",
      a: "Yedii features hybrid multi-model routing supporting Claude 3.5 Sonnet, GPT-4o, GPT-4o mini, Gemini 1.5 Pro, and private fine-tuned weights. You can assign lightweight models to routine queries and frontier reasoning models to complex technical questions.",
    },
    {
      q: "8. What is the Model Context Protocol (MCP) support in Yedii?",
      a: "Model Context Protocol (MCP) is an open standard allowing external AI assistants (like Claude Desktop or developer IDEs) to securely read and query your Yedii knowledge base and trigger workflows as an authenticated tool server.",
    },
    {
      q: "9. How fast does it take to set up and go live with an agent?",
      a: "Most teams deploy their first operational agent in under 10 minutes. Simply upload your knowledge files or connect your website URL, test your agent in the interactive playground, and paste our single-line JavaScript snippet into your website.",
    },
    {
      q: "10. Can Yedii perform actions, such as checking order status or booking meetings?",
      a: "Yes. Through custom webhooks and API actions, Yedii agents can look up real-time database records, track shipping updates, check account balances, schedule calendar invites, and trigger CRM workflows securely.",
    },
    {
      q: "11. What languages does Yedii support for global customers?",
      a: "Yedii natively supports automated multilingual comprehension and translation across 95+ languages, automatically matching the customer's native language with culturally accurate, context-aware responses.",
    },
    {
      q: "12. How does pricing work, and is there a free trial?",
      a: "Yedii offers a transparent 14-day free trial on all plans with no credit card required. Paid plans scale based on monthly conversation volume and team seats, from startup tiers to custom dedicated VPC enterprise deployments.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q.replace(/^\d+\.\s*/, ""),
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-16 md:py-24 bg-transparent border-t border-[#E5E7EB]">
      {/* FAQ Schema for SEO rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & Subtitle */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#111827] leading-[1.15]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-sm">
              Learn how Yedii autonomous agents automate support, ground responses on company documents, and deliver verified zero-hallucination customer experiences.
            </p>
          </div>

          {/* Right Column: 12 Numbered Accordion FAQs */}
          <div className="lg:col-span-8 divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full py-5 text-left flex items-center justify-between gap-4 font-semibold text-[#111827] hover:text-black cursor-pointer group"
                  >
                    <span className="text-base sm:text-[17px] tracking-tight group-hover:text-black transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#6B7280] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#111827]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pb-5 pt-1 text-sm sm:text-[15px] text-[#4B5563] leading-relaxed pr-8">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
