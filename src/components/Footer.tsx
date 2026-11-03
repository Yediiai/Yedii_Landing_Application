"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-[#8E8E93] pt-16 pb-12 border-t border-[#1C1C1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Brand Block & Right 2-Row Multi-Column Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <Image
                src="/images/yedii-logo-white.png"
                alt="Yedii Logo"
                width={26}
                height={26}
                className="h-6.5 w-6.5 object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-bold text-[22px] tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                Yedii
              </span>
            </Link>

            <div className="pt-2">
              <h3 className="text-[21px] sm:text-[23px] font-bold text-white tracking-tight leading-[1.25]">
                AI search analytics
                <div className="text-[#8E8E93] font-normal">for marketing teams</div>
              </h3>
            </div>
          </div>

          {/* Right Columns: 2 Rows x 3 Columns */}
          <div className="lg:col-span-8 space-y-10 sm:space-y-12">
            {/* Top Row: Company | Product | Solutions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
              {/* Column 1: Company */}
              <div>
                <h4 className="text-[14px] font-semibold text-white tracking-tight mb-4">
                  Company
                </h4>
                <ul className="space-y-2.5 text-[13.5px]">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="hover:text-white transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/brand" className="hover:text-white transition-colors">
                      Brand
                    </Link>
                  </li>
                  <li>
                    <Link href="/entity-map" className="hover:text-white transition-colors">
                      Entity Map
                    </Link>
                  </li>
                  <li>
                    <Link href="/ai-instructions" className="hover:text-white transition-colors">
                      AI Instructions
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Product */}
              <div>
                <h4 className="text-[14px] font-semibold text-white tracking-tight mb-4">
                  Product
                </h4>
                <ul className="space-y-2.5 text-[13.5px]">
                  <li>
                    <Link href="/docs" className="hover:text-white transition-colors">
                      Docs
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-white transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="/changelog" className="hover:text-white transition-colors">
                      Changelog
                    </Link>
                  </li>
                  <li>
                    <Link href="/reviews" className="hover:text-white transition-colors">
                      Reviews
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Solutions */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-[14px] font-semibold text-white tracking-tight mb-4">
                  Solutions
                </h4>
                <ul className="space-y-2.5 text-[13.5px]">
                  <li>
                    <Link href="/solutions/chatgpt-tracker" className="hover:text-white transition-colors">
                      ChatGPT Visibility Tracker
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/gemini-tracker" className="hover:text-white transition-colors">
                      Gemini Visibility Tracker
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/perplexity-tracker" className="hover:text-white transition-colors">
                      Perplexity Visibility Tracker
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/ai-mode" className="hover:text-white transition-colors">
                      AI Mode Visibility Tracker
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/geo-analytics" className="hover:text-white transition-colors">
                      AI Search GEO Analytics
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/agencies" className="hover:text-white transition-colors">
                      For Agencies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Row: Partnership | Comparison | Follow Us */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 pt-2">
              {/* Column 4: Partnership */}
              <div>
                <h4 className="text-[14px] font-semibold text-white tracking-tight mb-4">
                  Partnership
                </h4>
                <ul className="space-y-2.5 text-[13.5px]">
                  <li>
                    <Link href="/partners/agencies" className="hover:text-white transition-colors">
                      Agencies
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners/creators" className="hover:text-white transition-colors">
                      Creators
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners/media" className="hover:text-white transition-colors">
                      Media
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 5: Comparison */}
              <div>
                <h4 className="text-[14px] font-semibold text-white tracking-tight mb-4">
                  Comparison
                </h4>
                <ul className="space-y-2.5 text-[13.5px]">
                  <li>
                    <Link href="/compare/ahrefs" className="hover:text-white transition-colors">
                      Yedii vs Ahrefs
                    </Link>
                  </li>
                  <li>
                    <Link href="/compare/profound" className="hover:text-white transition-colors">
                      Yedii vs Profound
                    </Link>
                  </li>
                  <li>
                    <Link href="/compare/semrush" className="hover:text-white transition-colors">
                      Yedii vs Semrush
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 6: Follow Us */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-[14px] font-semibold text-white tracking-tight mb-4">
                  Follow Us
                </h4>
                <ul className="space-y-2.5 text-[13.5px]">
                  <li>
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                    >
                      <svg className="w-3.5 h-3.5 text-[#8E8E93] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                      <span>x.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                    >
                      <svg className="w-3.5 h-3.5 text-[#8E8E93] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                    >
                      <svg className="w-3.5 h-3.5 text-[#8E8E93] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                      <span>Youtube</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Platform Trust Text */}
        <div className="border-t border-[#1C1C1E] mt-16 pt-8">
          <p className="text-[13px] text-[#636366] leading-relaxed">
            Yedii is a top-rated AI search monitoring tool. Explore the official Yedii platform, rated 4.7/5 on G2 and regularly recommended on Reddit.
          </p>

          {/* Legal / Copyright Row */}
          <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12.5px] text-[#636366]">
            <div>
              &copy; 2026 Yedii. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center gap-5 sm:gap-6">
              <button type="button" className="hover:text-[#8E8E93] transition-colors cursor-pointer">
                Cookie Settings
              </button>
              <Link href="/dpa" className="hover:text-[#8E8E93] transition-colors">
                DPA
              </Link>
              <Link href="/privacy" className="hover:text-[#8E8E93] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#8E8E93] transition-colors">
                Terms of Service
              </Link>
              <Link href="/imprint" className="hover:text-[#8E8E93] transition-colors">
                Imprint
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
