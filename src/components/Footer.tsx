"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_URL } from "@/lib/seo/config";

const ASK_AI_PROMPT = encodeURIComponent(
  `Tell me about Yedii (${SITE_URL}) — what it does, its key features, pricing, and how it compares to alternatives like Intercom and Zendesk.`
);

const AI_ASSISTANTS = [
  {
    name: "ChatGPT",
    href: `https://chatgpt.com/?q=${ASK_AI_PROMPT}`,
    className: "bg-[#10A37F] hover:bg-[#0D8F6F] text-white",
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.66-4.1354a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1401-1.6564zm-1.6375-10.743a4.466 4.466 0 0 1 2.3418-1.9729v5.6015a.7712.7712 0 0 0 .3879.6766l5.8144 3.3543-2.02 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866a4.4992 4.4992 0 0 1-1.6228-6.0412zm16.597 3.8558l-5.838-3.3685 2.0199-1.1683a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4067-.6815zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L8.709 9.397V7.0646a.071.071 0 0 1 .0331-.0615l4.8816-2.8152a4.4992 4.4992 0 0 1 6.6749 4.6305zm-11.026 4.1354l-2.02-1.1683v-2.3324l5.8428-3.3685 2.02 1.1683v2.3324z" />
      </svg>
    ),
  },
  {
    name: "Claude",
    href: `https://claude.ai/new?q=${ASK_AI_PROMPT}`,
    className: "bg-[#D97757] hover:bg-[#C66546] text-white",
    icon: (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 2.5L12 9.5L14.5 9L19.5 5L16 10L17.5 11.5L23.5 11L18 14L18.5 16L22.5 19.5L16.5 18L15 20L14 23.5L11.5 18L10 19L5.5 22.5L8 16.5L6.5 15L1 14.5L6.5 11.5L6 9.5L2 6.5L8 7.5L9.5 5.5L11 1.5L13.5 7.5L14.5 7L13.5 2.5Z" />
      </svg>
    ),
  },
  {
    name: "Perplexity",
    href: `https://www.perplexity.ai/search/new?q=${ASK_AI_PROMPT}`,
    className: "bg-[#187A88] hover:bg-[#136571] text-white",
    icon: (
      <svg
        className="w-4 h-4 shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2v20" />
        <path d="M12 7L6.5 2.5v6L12 12l5.5-3.5v-6L12 7z" />
        <path d="M4 8.5h16v8H4z" />
        <path d="M12 12l-5.5 4.5v5L12 17l5.5 4.5v-5L12 12z" />
      </svg>
    ),
  },
];

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
                      About us
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
                      Agent Memory
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
                    <Link href="/docs/product" className="hover:text-white transition-colors">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/developer/api-reference" className="hover:text-white transition-colors">
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

        {/* Ask AI about Yedii */}
        <div className="border-t border-[#1C1C1E] mt-14 pt-8 pb-8">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight">
            Ask AI about Yedii
          </h3>
          <p className="mt-1.5 text-[13.5px] text-[#8E8E93]">
            Get an instant, unbiased rundown of Yedii from your favourite AI assistant.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {AI_ASSISTANTS.map((ai) => (
              <a
                key={ai.name}
                href={ai.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-[13.5px] font-semibold transition-colors shadow-xs ${ai.className}`}
              >
                {ai.icon}
                <span>{ai.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-85" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Platform Trust Text */}
        <div className="border-t border-[#1C1C1E] pt-6">

          {/* Legal / Copyright Row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12.5px] text-[#636366]">
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
