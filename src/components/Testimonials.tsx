"use client";

import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      quote:
        "Yedii completely transformed our customer operations. We automated 74% of our tier-1 support tickets in the first month while our CSAT jumped from 88% to 98.6%.",
      author: "Elena Rostova",
      role: "VP of Customer Experience",
      company: "Attio Scale",
      metrics: "74% deflection • +10.6% CSAT"
    },
    {
      quote:
        "The grounded RAG accuracy is unbelievable. Our support agents handle complex enterprise software queries with verified source citations from our Notion docs.",
      author: "Marcus Chen",
      role: "Head of Engineering",
      company: "Linear Systems",
      metrics: "0 hallucinations in 40k chats"
    },
    {
      quote:
        "Deploying across WhatsApp and our web portal was shockingly simple. The shared inbox with sentiment detection ensures our human team steps in only when high empathy is needed.",
      author: "David Sterling",
      role: "Chief Operating Officer",
      company: "Nova FinTech",
      metrics: "< 12s first response time"
    },
    {
      quote:
        "We replaced 4 brittle custom internal microservices with a single Yedii agent. Our engineering team gained back 300+ developer hours every quarter.",
      author: "Sofia Al-Mansoor",
      role: "Lead Platform Architect",
      company: "HyperCloud Infrastructure",
      metrics: "300+ dev hours saved/qtr"
    },
    {
      quote:
        "The Model Context Protocol (MCP) support makes Yedii miles ahead of everything else. It works seamlessly as a tool provider for our multi-agent stack.",
      author: "Liam O'Connor",
      role: "AI Product Lead",
      company: "SyncBase Labs",
      metrics: "Native MCP Integration"
    },
    {
      quote:
        "Enterprise security was our biggest roadblock until we found Yedii. SOC2 compliance, tenant-isolated vector stores, and zero data training retention made legal approval effortless.",
      author: "Rachel Vance",
      role: "Chief Information Security Officer",
      company: "HealthCore Systems",
      metrics: "SOC2 & HIPAA Verified"
    }
  ];

  return (
    <section id="customers" className="py-8 md:py-12 bg-zinc-50/60 border-t border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-semibold mb-3">
            <Quote className="w-3.5 h-3.5 text-zinc-900" />
            Customer Success Stories
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-950">
            Loved by operations, support & engineering leaders
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            See how high-performing companies deploy Yedii agents to scale revenue and support.
          </p>
        </div>

        {/* 3-Column Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-zinc-300 transition-all duration-200"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-[15px] text-zinc-800 leading-relaxed font-normal">
                  &quot;{rev.quote}&quot;
                </p>
              </div>

              {/* Author & Metric Pill */}
              <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-zinc-900">
                    {rev.author}
                  </div>
                  <div className="text-xs text-zinc-500">
                    {rev.role}, {rev.company}
                  </div>
                </div>

                <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full shrink-0">
                  {rev.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
