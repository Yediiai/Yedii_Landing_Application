"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const industriesHref = process.env.NEXT_PUBLIC_INDUSTRIES_URL || "/customers";

  return (
    <footer className="bg-black text-[#8E8E93] pt-16 pb-12 border-t border-[#1C1C1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Brand Block & Right 1-Row Multi-Column Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12">
          {/* Left Column: Brand & Tagline */}
          <div className="lg:col-span-3 xl:col-span-2 space-y-4">
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
              <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight leading-[1.25]">
                Beyond chatbots. Into intelligent support.
              </h3>
            </div>
          </div>

          {/* Right Columns: All in 1 Row */}
          <div className="lg:col-span-9 xl:col-span-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 sm:gap-6 lg:gap-2.5 xl:gap-4">
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

              {/* Column 2: Platform */}
              <div>
                <h4 className="text-[14px] font-semibold text-white tracking-tight mb-4">
                  Platform
                </h4>
                <ul className="space-y-2.5 text-[13.5px]">
                  <li>
                    <Link href="/customer-support-platform" className="hover:text-white transition-colors">
                      Customer Support Platform
                    </Link>
                  </li>
                  <li>
                    <Link href="/ai-playground" className="hover:text-white transition-colors">
                      AI Playground
                    </Link>
                  </li>
                  <li>
                    <Link href="/ai-agents" className="hover:text-white transition-colors">
                      AI Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="/knowledge-base" className="hover:text-white transition-colors">
                      Knowledge Base
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="hover:text-white transition-colors">
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Solutions */}
              <div>
                <h4 className="text-[14px] font-semibold text-white tracking-tight mb-4">
                  Solutions
                </h4>
                <ul className="space-y-2.5 text-[13.5px]">
                  <li>
                    <Link href="/solutions/customer-support" className="hover:text-white transition-colors">
                      Customer Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/technical-support" className="hover:text-white transition-colors">
                      Technical Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/ecommerce" className="hover:text-white transition-colors">
                      E-commerce
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/sales-assistance" className="hover:text-white transition-colors">
                      Sales Assistance
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions/customer-success" className="hover:text-white transition-colors">
                      Customer Success
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4: Industries */}
              <div>
                <h4 className="text-[14px] font-semibold text-white tracking-tight mb-4">
                  Industries
                </h4>
                <ul className="space-y-2.5 text-[13.5px]">
                  <li>
                    <Link href={industriesHref} className="hover:text-white transition-colors">
                      Enterprise SaaS
                    </Link>
                  </li>
                  <li>
                    <Link href={industriesHref} className="hover:text-white transition-colors">
                      FinTech &amp; Banking
                    </Link>
                  </li>
                  <li>
                    <Link href={industriesHref} className="hover:text-white transition-colors">
                      Developer Tools
                    </Link>
                  </li>
                  <li>
                    <Link href={industriesHref} className="hover:text-white transition-colors">
                      Global E-Commerce
                    </Link>
                  </li>
                  <li>
                    <Link href={industriesHref} className="hover:text-white transition-colors">
                      Healthcare
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 5: Resources */}
              <div>
                <h4 className="text-[14px] font-semibold text-white tracking-tight mb-4">
                  Resources
                </h4>
                <ul className="space-y-2.5 text-[13.5px]">
                  <li>
                    <Link href="/docs" className="hover:text-white transition-colors">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs" className="hover:text-white transition-colors">
                      API Reference
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/help-center" className="hover:text-white transition-colors">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/changelog" className="hover:text-white transition-colors">
                      Changelog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 6: Comparison */}
              <div>
                <h4 className="text-[14px] font-semibold text-white tracking-tight mb-4">
                  Comparison
                </h4>
                <ul className="space-y-2.5 text-[13.5px]">
                  <li>
                    <Link href="/compare/yedii-vs-intercom" className="hover:text-white transition-colors">
                      Yedii vs Intercom
                    </Link>
                  </li>
                  <li>
                    <Link href="/compare/yedii-vs-zendesk" className="hover:text-white transition-colors">
                      Yedii vs Zendesk
                    </Link>
                  </li>
                  <li>
                    <Link href="/compare/yedii-vs-freshdesk" className="hover:text-white transition-colors">
                      Yedii vs Freshdesk
                    </Link>
                  </li>
                  <li>
                    <Link href="/compare/yedii-vs-tidio" className="hover:text-white transition-colors">
                      Yedii vs Tidio
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 7: Follow Us */}
              <div>
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
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span>x.com</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/yedii"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                    >
                      <svg className="w-3.5 h-3.5 text-[#8E8E93] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("yedii:open_cookie_settings"));
                  }
                }}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Cookie Settings
              </button>
              <Link href="/legal" className="hover:text-white transition-colors">
                Legal Hub
              </Link>
              <Link href="/legal/data-processing-agreement" className="hover:text-white transition-colors">
                DPA
              </Link>
              <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/legal/ai-usage-policy" className="hover:text-white transition-colors">
                AI Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
