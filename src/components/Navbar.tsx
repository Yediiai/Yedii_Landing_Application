"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Bot,
  Database,
  Terminal,
  MessageSquare,
  UserCheck,
  BarChart3,
  Sparkles,
  Zap,
  BookOpen,
  FileCode,
  LifeBuoy,
  History
} from "lucide-react";
import { ProductMegaMenu } from "./ProductMegaMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const productTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside and Escape key to close open menus
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setProductsOpen(false);
        setResourcesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Safe hover debounce for Product mega menu
  const handleProductMouseEnter = () => {
    if (productTimeoutRef.current) {
      clearTimeout(productTimeoutRef.current);
      productTimeoutRef.current = null;
    }
    setResourcesOpen(false);
    setProductsOpen(true);
  };

  const handleProductMouseLeave = () => {
    productTimeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 180);
  };

  // Safe hover debounce for Resources dropdown
  const handleResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current);
      resourcesTimeoutRef.current = null;
    }
    setProductsOpen(false);
    setResourcesOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 180);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#E5E7EB] shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
          : "bg-white/70 backdrop-blur-sm border-b border-[#E5E7EB]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

          {/* Center: Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Product Trigger */}
            <div
              className="relative"
              onMouseEnter={handleProductMouseEnter}
              onMouseLeave={handleProductMouseLeave}
            >
              <button
                type="button"
                className={`px-3.5 py-1.5 text-sm font-medium rounded-[8px] transition-all cursor-pointer ${
                  productsOpen
                    ? "bg-[#F3F4F6] text-[#111827]"
                    : "text-[#4B5563] hover:text-[#111827] hover:bg-[#F9FAFB]"
                }`}
                onClick={() => setProductsOpen((prev) => !prev)}
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Product
              </button>

              {/* Exact 640px Mega Menu Dropdown */}
              {productsOpen && (
                <ProductMegaMenu
                  isOpen={productsOpen}
                  onClose={() => setProductsOpen(false)}
                  onMouseEnter={handleProductMouseEnter}
                  onMouseLeave={handleProductMouseLeave}
                />
              )}
            </div>

            {/* Resources with Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
            >
              <button
                type="button"
                className={`px-3.5 py-1.5 text-sm font-medium rounded-[8px] transition-all cursor-pointer ${
                  resourcesOpen
                    ? "bg-[#F3F4F6] text-[#111827]"
                    : "text-[#4B5563] hover:text-[#111827] hover:bg-[#F9FAFB]"
                }`}
                onClick={() => setResourcesOpen((prev) => !prev)}
                aria-expanded={resourcesOpen}
                aria-haspopup="true"
              >
                Resources
              </button>

              {resourcesOpen && (
                <div
                  onMouseEnter={handleResourcesMouseEnter}
                  onMouseLeave={handleResourcesMouseLeave}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[300px] animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  <div className="rounded-[16px] p-2.5 bg-white border border-[#E5E7EB] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04)] space-y-1">
                    <Link
                      href="/docs"
                      onClick={() => setResourcesOpen(false)}
                      className="group flex items-start gap-2.5 px-3 py-2 rounded-[10px] hover:bg-[#F9FAFB] transition-colors"
                    >
                      <BookOpen className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0 group-hover:text-black" />
                      <div>
                        <div className="text-[13px] font-semibold text-[#111827] group-hover:text-black">
                          Documentation
                        </div>
                        <div className="text-[11.5px] text-[#6B7280]">
                          Platform guides and SDK setup
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/docs"
                      onClick={() => setResourcesOpen(false)}
                      className="group flex items-start gap-2.5 px-3 py-2 rounded-[10px] hover:bg-[#F9FAFB] transition-colors"
                    >
                      <FileCode className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0 group-hover:text-black" />
                      <div>
                        <div className="text-[13px] font-semibold text-[#111827] group-hover:text-black">
                          API Reference
                        </div>
                        <div className="text-[11.5px] text-[#6B7280]">
                          REST, WebSocket & MCP endpoints
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/blog"
                      onClick={() => setResourcesOpen(false)}
                      className="group flex items-start gap-2.5 px-3 py-2 rounded-[10px] hover:bg-[#F9FAFB] transition-colors"
                    >
                      <Sparkles className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0 group-hover:text-black" />
                      <div>
                        <div className="text-[13px] font-semibold text-[#111827] group-hover:text-black">
                          Blog
                        </div>
                        <div className="text-[11.5px] text-[#6B7280]">
                          Latest updates, AI research & articles
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/help-center"
                      onClick={() => setResourcesOpen(false)}
                      className="group flex items-start gap-2.5 px-3 py-2 rounded-[10px] hover:bg-[#F9FAFB] transition-colors"
                    >
                      <LifeBuoy className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0 group-hover:text-black" />
                      <div>
                        <div className="text-[13px] font-semibold text-[#111827] group-hover:text-black">
                          Help Center
                        </div>
                        <div className="text-[11.5px] text-[#6B7280]">
                          Customer support & FAQ knowledge
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/changelog"
                      onClick={() => setResourcesOpen(false)}
                      className="group flex items-start gap-2.5 px-3 py-2 rounded-[10px] hover:bg-[#F9FAFB] transition-colors"
                    >
                      <History className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0 group-hover:text-black" />
                      <div>
                        <div className="text-[13px] font-semibold text-[#111827] group-hover:text-black">
                          Changelog
                        </div>
                        <div className="text-[11.5px] text-[#6B7280]">
                          New features and release notes
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

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
              Customers
            </Link>
          </nav>

          {/* Right: Log In & Sign Up Button */}
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

      {/* ======================================================== */}
      {/* MOBILE DRAWER: Comprehensive & Touch-Friendly Responsive  */}
      {/* ======================================================== */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-4 max-h-[calc(100vh-64px)] overflow-y-auto">
          {/* Group 1: BUILD & TRAIN */}
          <div className="space-y-1">
            <div className="flex items-center justify-between px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
              <span>Build & Train</span>
              <span className="text-[10px] text-blue-700 bg-blue-50 px-1.5 py-0.2 rounded border border-blue-200/60 font-semibold">
                Intelligence
              </span>
            </div>
            
            <Link
              href="/ai-agents"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-zinc-800 hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-zinc-900">AI Agents</div>
                  <div className="text-[11.5px] text-zinc-500">Autonomous support agents tailored to your business</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-400 shrink-0" />
            </Link>

            <Link
              href="/knowledge-base"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-zinc-800 hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-zinc-900">Knowledge Base</div>
                  <div className="text-[11.5px] text-zinc-500">Vector RAG grounded on websites, PDFs & docs</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-400 shrink-0" />
            </Link>

            <Link
              href="/ai-playground"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-zinc-800 hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 border border-violet-100">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-zinc-900">AI Playground</div>
                  <div className="text-[11.5px] text-zinc-500">Prompt experimentation & conversation sandbox</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-400 shrink-0" />
            </Link>
          </div>

          {/* Group 2: DEPLOY & OPTIMIZE */}
          <div className="pt-2 border-t border-zinc-100 space-y-1">
            <div className="flex items-center justify-between px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-400">
              <span>Deploy & Optimize</span>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200/60 font-semibold">
                Omnichannel
              </span>
            </div>

            <Link
              href="/customer-support-platform"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-zinc-800 hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-zinc-900">Website Chat</div>
                  <div className="text-[11.5px] text-zinc-500">Customizable chat launcher & branded widget</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-400 shrink-0" />
            </Link>

            <Link
              href="/solutions/customer-support"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-zinc-800 hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-zinc-900">Inbox</div>
                  <div className="text-[11.5px] text-zinc-500">Shared team inbox for live and escalated chats</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-400 shrink-0" />
            </Link>

            <Link
              href="/solutions/customer-success"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-zinc-800 hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[13.5px] font-semibold text-zinc-900">Agent Analytics</div>
                  <div className="text-[11.5px] text-zinc-500">Resolution rates, CSAT tracking & latency stats</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-zinc-400 shrink-0" />
            </Link>
          </div>

          {/* Quick Showcase Callout Teaser in Mobile Menu */}
          <div className="p-3 rounded-xl bg-gradient-to-r from-blue-50/70 to-indigo-50/70 border border-blue-100/80">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1">
                <Zap className="w-3 h-3 text-blue-600" />
                Interactive Showcase
              </span>
              <span className="text-[10px] font-medium text-blue-600">320ms avg latency</span>
            </div>
            <p className="text-[12px] text-zinc-700 mt-1 font-medium">
              Multi-model orchestration across Claude 3.7, GPT-4o & Gemini 2.0.
            </p>
          </div>

          {/* General Navigation Links */}
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
              Customers
            </Link>
            <Link
              href="/docs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              Documentation
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2">
            <Link
              href="https://app.yedii.com/signin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-[10px] transition-colors"
            >
              Log in
            </Link>
            <Link
              href="https://app.yedii.com/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-[#111827] hover:bg-black rounded-[10px] transition-colors shadow-2xs"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
