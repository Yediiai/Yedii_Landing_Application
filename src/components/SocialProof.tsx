"use client";

export function SocialProof() {
  const logos = [
    { name: "Attio", label: "Attio" },
    { name: "Linear", label: "Linear" },
    { name: "Ramp", label: "Ramp" },
    { name: "Notion", label: "Notion" },
    { name: "Retool", label: "Retool" },
    { name: "Vercel", label: "Vercel" },
    { name: "Paddle", label: "Paddle" }
  ];

  const stats = [
    { value: "14M+", label: "Conversations Automated", highlight: "Across 40+ countries" },
    { value: "74%", label: "Deflection Rate", highlight: "Without human intervention" },
    { value: "< 120ms", label: "Time-to-First-Token", highlight: "Edge-cached retrieval" },
    { value: "99.4%", label: "Accuracy & Grounding", highlight: "Verified against source docs" }
  ];

  return (
    <section className="py-8 border-y border-zinc-200/60 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-5">
          Trusted by high-growth startups and global enterprise teams
        </p>

        {/* Logos Marquee / Grid */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="text-base sm:text-lg font-bold tracking-tight text-zinc-700 hover:text-zinc-950 transition-colors flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-xs bg-zinc-400" />
              <span>{logo.label}</span>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-8 pt-6 border-t border-zinc-100 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-zinc-800 mt-1">
                {s.label}
              </div>
              <div className="text-[11px] sm:text-xs text-zinc-500 mt-0.5">
                {s.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
