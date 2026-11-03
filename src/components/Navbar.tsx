"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Menu,
  X,
  ArrowRight,
  Plus
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
          : "bg-white/70 backdrop-blur-sm border-b border-[#E5E7EB]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <Image
              src="/images/yedii-logo.png"
              alt="Yedii Logo"
              width={26}
              height={26}
              className="h-6.5 w-6.5 object-contain transition-transform group-hover:scale-105"
              priority
            />
            <span className="font-bold text-[19px] tracking-tight text-[#111827] group-hover:text-black">
              Yedii
            </span>
          </Link>

          {/* Center: Desktop Nav Links (Peec AI Layout) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Product with Peec AI Style Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className={`px-3.5 py-1.5 text-sm font-medium rounded-[8px] transition-all cursor-pointer ${
                  productsOpen
                    ? "bg-[#F3F4F6] text-[#111827]"
                    : "text-[#4B5563] hover:text-[#111827] hover:bg-[#F9FAFB]"
                }`}
                onClick={() => setProductsOpen(!productsOpen)}
              >
                Product
              </button>

              {/* Peec AI Exact Mega Menu Dropdown */}
              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[640px]">
                  <div className="rounded-[18px] p-6 bg-white border border-[#E5E7EB] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04)] grid grid-cols-2 gap-7">
                    {/* LEFT COLUMN: Product */}
                    <div className="flex flex-col">
                      <div className="text-[12px] font-medium text-[#9CA3AF] mb-3 select-none">
                        Product
                      </div>

                      <div className="space-y-4">
                        {/* Item 1 */}
                        <Link
                          href="#features"
                          onClick={() => setProductsOpen(false)}
                          className="group block"
                        >
                          <div className="text-[14px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                            AI Visibility
                          </div>
                          <div className="text-[12.5px] text-[#6B7280] font-normal leading-snug mt-0.5">
                            Track how you show up in AI
                          </div>
                        </Link>

                        {/* Item 2 */}
                        <Link
                          href="#features"
                          onClick={() => setProductsOpen(false)}
                          className="group block"
                        >
                          <div className="text-[14px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                            Brand Perception
                          </div>
                          <div className="text-[12.5px] text-[#6B7280] font-normal leading-snug mt-0.5">
                            Learn how AI talks about you
                          </div>
                        </Link>

                        {/* Item 3 */}
                        <Link
                          href="#features"
                          onClick={() => setProductsOpen(false)}
                          className="group block"
                        >
                          <div className="text-[14px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                            Shopping
                          </div>
                          <div className="text-[12.5px] text-[#6B7280] font-normal leading-snug mt-0.5">
                            See your products in AI
                          </div>
                        </Link>

                        {/* Item 4 */}
                        <Link
                          href="/analytics"
                          onClick={() => setProductsOpen(false)}
                          className="group block"
                        >
                          <div className="text-[14px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                            Agent analytics
                          </div>
                          <div className="text-[12.5px] text-[#6B7280] font-normal leading-snug mt-0.5">
                            Check how agents crawl your page
                          </div>
                        </Link>

                        {/* Item 5 with New Badge */}
                        <Link
                          href="#features"
                          onClick={() => setProductsOpen(false)}
                          className="group block"
                        >
                          <div className="text-[14px] font-semibold text-[#111827] group-hover:text-black transition-colors flex items-center gap-2">
                            <span>Actions</span>
                            <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.2 rounded">
                              New
                            </span>
                          </div>
                          <div className="text-[12.5px] text-[#6B7280] font-normal leading-snug mt-0.5">
                            Know what to improve, and why
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Featured */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="text-[12px] font-medium text-[#9CA3AF] mb-3 select-none">
                          Featured
                        </div>

                        <div className="space-y-4">
                          {/* Featured Item 1: MCP */}
                          <Link
                            href="#developers"
                            onClick={() => setProductsOpen(false)}
                            className="group block"
                          >
                            <div className="text-[14px] font-semibold text-[#111827] group-hover:text-black transition-colors">
                              MCP
                            </div>
                            <div className="text-[12.5px] text-[#6B7280] font-normal leading-snug mt-0.5">
                              Connect AI assistants and tools to Peec AI data
                            </div>
                          </Link>

                          {/* Featured Item 2: Agent with New Badge */}
                          <Link
                            href="#playground"
                            onClick={() => setProductsOpen(false)}
                            className="group block"
                          >
                            <div className="text-[14px] font-semibold text-[#111827] group-hover:text-black transition-colors flex items-center gap-2">
                              <span>Agent</span>
                              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-1.5 py-0.2 rounded">
                                New
                              </span>
                            </div>
                            <div className="text-[12.5px] text-[#6B7280] font-normal leading-snug mt-0.5">
                              Investigate your data, then act on it
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Interactive Mini Simulator Card (Exact replica from Peec AI screenshot) */}
                      <div className="mt-5 rounded-[14px] border border-[#E2E8F0] bg-gradient-to-b from-[#F0F7FD] via-[#F6FAFE] to-[#FFFFFF] p-3.5 shadow-2xs">
                        {/* Blue Tag */}
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[5px] bg-[#E0F2FE] text-[#0284C7] text-[11px] font-semibold">
                          <span>@ Visibility</span>
                        </div>

                        {/* Input Box with cursor */}
                        <div className="mt-2.5 px-3 py-2 bg-white rounded-[8px] border border-[#E2E8F0] text-[12.5px] text-[#1E293B] flex items-center shadow-2xs">
                          <span className="text-[#334155] font-normal">Ask ab</span>
                          <span className="w-0.5 h-3.5 bg-zinc-800 ml-0.5 inline-block" />
                        </div>

                        {/* Bottom control pills */}
                        <div className="mt-2.5 flex items-center justify-between text-[11px] text-[#64748B]">
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded bg-white border border-[#CBD5E1] flex items-center justify-center font-bold text-[#475569] text-xs">
                              +
                            </span>
                            <span className="bg-white/80 border border-[#E2E8F0] px-2 py-0.5 rounded text-[#475569] font-medium">
                              Normal
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-[#475569] font-medium">
                            <Sparkles className="w-3 h-3 text-[#0284C7]" />
                            <span>Ask first</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/customers"
              className="px-3.5 py-1.5 text-sm font-medium text-[#4B5563] hover:text-[#111827] rounded-[8px] transition-colors"
            >
              Resources
            </Link>

            <Link
              href="/pricing"
              className="px-3.5 py-1.5 text-sm font-medium text-[#4B5563] hover:text-[#111827] rounded-[8px] transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="/enterprise"
              className="px-3.5 py-1.5 text-sm font-medium text-[#4B5563] hover:text-[#111827] rounded-[8px] transition-colors"
            >
              Enterprise
            </Link>

            <Link
              href="/customers"
              className="px-3.5 py-1.5 text-sm font-medium text-[#4B5563] hover:text-[#111827] rounded-[8px] transition-colors"
            >
              Careers
            </Link>
          </nav>

          {/* Right: Peec AI style Log In & Sign Up Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="https://app.yedii.com/signin"
              className="px-3.5 py-1.5 text-sm font-medium text-[#374151] hover:text-[#111827] transition-colors"
            >
              Log in
            </Link>
            <Link
              href="https://app.yedii.com/signup"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#111827] hover:bg-black rounded-[8px] transition-colors shadow-2xs"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3">
          <div className="space-y-1">
            <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Product
            </div>
            <Link
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              AI Visibility
            </Link>
            <Link
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              Brand Perception
            </Link>
            <Link
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              Shopping
            </Link>
            <Link
              href="#playground"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              Agent (New)
            </Link>
          </div>

          <div className="pt-2 border-t border-zinc-100 space-y-1">
            <Link
              href="/pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              Pricing
            </Link>
            <Link
              href="/enterprise"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              Enterprise
            </Link>
            <Link
              href="/customers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              Resources &amp; Careers
            </Link>
          </div>

          <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2">
            <Link
              href="https://app.yedii.com/signin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2 text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-[8px] transition-colors"
            >
              Log in
            </Link>
            <Link
              href="https://app.yedii.com/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2 text-sm font-semibold text-white bg-[#111827] hover:bg-black rounded-[8px] transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
