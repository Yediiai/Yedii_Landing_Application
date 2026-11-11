import React from "react";
import Link from "next/link";

// ============================================================================
// DATA STRUCTURE & TYPED DEFINITIONS
// ============================================================================

export type CellValue =
  | { type: "text"; text: string }
  | { type: "boolean"; value: boolean }
  | { type: "todo" };

export interface CompetitorColumn {
  id: string;
  name: string;
  isYedii?: boolean;
}

export interface ComparisonRow {
  id: string;
  feature: string;
  values: Record<string, CellValue>;
}

export interface CompetitorCardData {
  id: string;
  name: string;
  slug: string;
  headlineStat: string;
  statLabel: string;
  description: string; // Strictly max 110 characters, fits naturally without line-clamp
  bullets: [string, string]; // Exactly 2 competitor-specific bullets
}

// Columns configuration for the comparison matrix
export const COMPARISON_COLUMNS: CompetitorColumn[] = [
  { id: "yedii", name: "Yedii", isYedii: true },
  { id: "intercom", name: "Intercom" },
  { id: "zendesk", name: "Zendesk" },
  { id: "freshdesk", name: "Freshdesk" },
  { id: "tidio", name: "Tidio" },
];

// Feature rows for the comparison matrix
export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    id: "ai-pricing-model",
    feature: "AI pricing model",
    values: {
      yedii: { type: "text", text: "Transparent usage-based" },
      intercom: { type: "text", text: "$0.99 per resolution" },
      zendesk: { type: "text", text: "$50/agent/mo Advanced AI add-on" },
      freshdesk: { type: "text", text: "$100 per 1,000 Freddy sessions" },
      tidio: { type: "text", text: "Capped Lyro AI quotas (50–200 conversations)" },
    },
  },
  {
    id: "setup-time",
    feature: "Setup time",
    values: {
      yedii: { type: "text", text: "5 minutes, no-code" },
      intercom: { type: "todo" },
      zendesk: { type: "text", text: "Multi-week enterprise consulting" },
      freshdesk: { type: "todo" },
      tidio: { type: "todo" },
    },
  },
  {
    id: "model-choice",
    feature: "Model choice",
    values: {
      yedii: { type: "text", text: "Multi-model (Claude 3.5, GPT-4o, Llama 3)" },
      intercom: { type: "text", text: "Single LLM" },
      zendesk: { type: "text", text: "Black-box proprietary AI" },
      freshdesk: { type: "text", text: "Black-box AI" },
      tidio: { type: "text", text: "Locked AI" },
    },
  },
  {
    id: "interactive-ai-playground",
    feature: "Interactive AI Playground with confidence scoring",
    values: {
      yedii: { type: "boolean", value: true },
      intercom: { type: "boolean", value: false },
      zendesk: { type: "boolean", value: false },
      freshdesk: { type: "boolean", value: false },
      tidio: { type: "boolean", value: false },
    },
  },
  {
    id: "ast-aware-rag",
    feature: "AST-aware PDF & API documentation RAG",
    values: {
      yedii: { type: "boolean", value: true },
      intercom: { type: "todo" },
      zendesk: { type: "todo" },
      freshdesk: { type: "todo" },
      tidio: { type: "text", text: "Basic FAQ scraper" },
    },
  },
];

// Cards configuration for competitor comparison deep-dives
export const COMPETITOR_CARDS: CompetitorCardData[] = [
  {
    id: "intercom",
    name: "Intercom",
    slug: "yedii-vs-intercom",
    headlineStat: "$0.99 / resolution",
    statLabel: "Intercom AI cost",
    description: "Pay only for actual tokens consumed, avoiding steep and unpredictable per-resolution surcharges.",
    bullets: [
      "Zero $0.99 resolution fees — pay strictly for actual AI token usage",
      "Freedom to switch between Claude 3.5, GPT-4o, and Llama 3 models",
    ],
  },
  {
    id: "zendesk",
    name: "Zendesk",
    slug: "yedii-vs-zendesk",
    headlineStat: "$50 / agent / mo",
    statLabel: "Zendesk AI cost",
    description: "Deploy in minutes with zero seat taxes instead of paying $50/agent monthly add-on fees.",
    bullets: [
      "Eliminate $50/seat monthly fees with unlimited autonomous agents",
      "Self-serve setup in 5 minutes without enterprise consultants",
    ],
  },
  {
    id: "freshdesk",
    name: "Freshdesk",
    slug: "yedii-vs-freshdesk",
    headlineStat: "$100 / 1,000 sessions",
    statLabel: "Freshdesk AI cost",
    description: "Get transparent token-based pricing and multi-model choice instead of capped session bundles.",
    bullets: [
      "Bypass Freddy session limits with predictable consumption billing",
      "Interactive AI playground with confidence scoring before launch",
    ],
  },
  {
    id: "tidio",
    name: "Tidio",
    slug: "yedii-vs-tidio",
    headlineStat: "50–200 convo cap",
    statLabel: "Tidio AI cost",
    description: "Run enterprise-grade multi-model RAG without strict 50–200 conversation monthly quota limits.",
    bullets: [
      "No 50–200 conversation caps — support unlimited customer queries",
      "AST-aware document RAG for complex technical PDFs and APIs",
    ],
  },
];

// ============================================================================
// HELPER COMPONENT: CELL VALUE RENDERER
// ============================================================================

function CellContent({ cell }: { cell?: CellValue }) {
  // Render "TODO" cells as an em dash with a code comment, avoiding invented data
  if (!cell || cell.type === "todo") {
    return (
      <span
        className="text-zinc-400 font-medium select-none"
        aria-label="Information not available"
      >
        {/* Data not verified / public information not available; rendered as em dash per specification */}
        &mdash;
        <span className="sr-only">Data not available</span>
      </span>
    );
  }

  if (cell.type === "boolean") {
    if (cell.value) {
      return (
        <span className="inline-flex items-center gap-1.5 text-zinc-900">
          <svg
            className="w-5 h-5 shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Included</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 text-zinc-400">
        <svg
          className="w-5 h-5 shrink-0"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
          />
        </svg>
        <span className="sr-only">Not included</span>
      </span>
    );
  }

  return (
    <span className="text-[15px] leading-relaxed text-[#111111]">
      {cell.text}
    </span>
  );
}

// ============================================================================
// MAIN COMPONENT: CompetitorComparison
// ============================================================================

export function CompetitorComparison() {
  return (
    <section
      id="competitor-comparison"
      aria-labelledby="comparison-heading"
      className="w-full bg-transparent py-16 sm:py-20 md:py-24 text-zinc-950 font-sans border-t border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Heading & One-line Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2
            id="comparison-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 font-serif"
          >
            See how Yedii compares
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-700 font-normal">
            Transparent pricing, model choice, and setup in minutes.
          </p>
        </div>

        {/* 2. Comparison Table (Responsive with self-contained horizontal overflow scroll) */}
        <div className="w-full max-w-full overflow-hidden rounded-xl border border-[#E5E7EB] shadow-xs bg-white">
          <div className="overflow-x-auto overflow-y-hidden w-full max-w-full">
            <table className="min-w-[800px] w-full border-separate border-spacing-0 text-left">
              <caption className="sr-only">
                Detailed feature and pricing comparison between Yedii and competitor customer support platforms
              </caption>

              <thead>
                <tr>
                  {/* Sticky Left Header: Feature */}
                  <th
                    scope="col"
                    className="sticky left-0 z-20 py-4 px-5 text-[15px] font-semibold text-[#111111] bg-zinc-50 border-b border-r border-[#E5E7EB] min-w-[240px] whitespace-nowrap"
                  >
                    Feature
                  </th>

                  {/* Competitor Columns (Yedii is positioned directly after Feature and highlighted) */}
                  {COMPARISON_COLUMNS.map((col) => {
                    if (col.isYedii) {
                      return (
                        <th
                          key={col.id}
                          scope="col"
                          className="py-4 px-5 text-left font-bold text-base text-[#111111] bg-zinc-100/90 border-t-2 border-l-2 border-r-2 border-zinc-900 border-b border-zinc-200 min-w-[190px] whitespace-nowrap"
                        >
                          {col.name}
                        </th>
                      );
                    }

                    return (
                      <th
                        key={col.id}
                        scope="col"
                        className="py-4 px-5 text-left font-semibold text-base text-zinc-800 bg-zinc-50 border-b border-[#E5E7EB] min-w-[170px] whitespace-nowrap"
                      >
                        {col.name}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {COMPARISON_ROWS.map((row, rowIndex) => {
                  const isLastRow = rowIndex === COMPARISON_ROWS.length - 1;

                  return (
                    <tr
                      key={row.id}
                      className="transition-colors hover:bg-zinc-50/70 motion-reduce:transition-none"
                    >
                      {/* Sticky First Column: Feature Name */}
                      <th
                        scope="row"
                        className={`sticky left-0 z-10 py-4 px-5 text-left font-medium text-[15px] text-[#111111] bg-white border-r border-[#E5E7EB] min-w-[240px] ${
                          isLastRow ? "border-b-0" : "border-b border-[#E5E7EB]"
                        }`}
                      >
                        {row.feature}
                      </th>

                      {/* Data Columns */}
                      {COMPARISON_COLUMNS.map((col) => {
                        const cell = row.values[col.id];

                        if (col.isYedii) {
                          return (
                            <td
                              key={col.id}
                              className={`py-4 px-5 align-middle bg-zinc-50/80 border-l-2 border-r-2 border-zinc-900 font-medium ${
                                isLastRow
                                  ? "border-b-2"
                                  : "border-b border-zinc-200"
                              }`}
                            >
                              <CellContent cell={cell} />
                            </td>
                          );
                        }

                        return (
                          <td
                            key={col.id}
                            className={`py-4 px-5 align-middle ${
                              isLastRow
                                ? "border-b-0"
                                : "border-b border-[#E5E7EB]"
                            }`}
                          >
                            <CellContent cell={cell} />
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Competitor Cards (4 on desktop, 2x2 on tablet, 1 on mobile) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPETITOR_CARDS.map((card) => (
            <article
              key={card.id}
              aria-labelledby={`card-title-${card.id}`}
              className="flex flex-col h-full bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-2xs hover:shadow-md transition-shadow motion-reduce:transition-none"
            >
              {/* Title */}
              <h3
                id={`card-title-${card.id}`}
                className="text-xl font-bold text-[#111111] tracking-tight"
              >
                Yedii vs {card.name}
              </h3>

              {/* Headline Stat & AI Cost Label */}
              <div className="mt-4 pb-4 border-b border-[#E5E7EB]">
                <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  {card.statLabel}
                </span>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mt-1">
                  {card.headlineStat}
                </p>
              </div>

              {/* Description Sentence (strictly <= 110 chars without truncation) */}
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-600">
                {card.description}
              </p>

              {/* Exactly 2 Competitor-Specific Bullets */}
              <ul className="mt-5 space-y-3" role="list">
                {card.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-[15px] leading-snug text-zinc-700"
                  >
                    <svg
                      className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Advantage: </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button Pinned to Bottom */}
              <div className="mt-auto pt-6">
                <Link
                  href={`/compare/${card.slug}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-[15px] font-semibold text-[#111111] bg-zinc-100 hover:bg-zinc-200 border border-[#E5E7EB] transition-colors motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                >
                  Compare Yedii vs {card.name} &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* 4. Small Footnote */}
        <p className="mt-8 text-xs text-zinc-500 text-center sm:text-left">
          Competitor pricing as of November 2026. Based on publicly available information.
        </p>
      </div>
    </section>
  );
}

export default CompetitorComparison;

