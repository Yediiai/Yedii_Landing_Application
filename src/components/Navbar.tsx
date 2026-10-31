"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Sparkles,
  Database,
  Terminal,
  Share2,
  Inbox,
  ShieldCheck,
  Menu,
  X,
  ArrowRight
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

  const productFeatures = [
    {
      title: "Agent Studio",
      desc: "Visual canvas for prompt flows, tool actions & multi-agent logic",
      icon: Sparkles,
      tag: "Core",
    },
    {
      title: "Knowledge Grounding",
      desc: "Connect PDFs, Notion, Web URLs & databases with vector RAG",
      icon: Database,
      tag: "Vector RAG",
    },
    {
      title: "Interactive Playground",
      desc: "Test reasoning, inspect latency & benchmark against top LLMs",
      icon: Terminal,
      tag: "Multi-Model",
    },
    {
      title: "Omnichannel Deploy",
      desc: "1-click deploy to Web Widget, WhatsApp, Slack & MCP server",
      icon: Share2,
      tag: "1-Click",
    },
    {
      title: "Team Inbox & Escalation",
      desc: "Live human handover, sentiment triggers & shared queue",
      icon: Inbox,
      tag: "Human-in-the-loop",
    },
    {
      title: "Enterprise Governance",
      desc: "SOC2-ready guardrails, custom VPC & strict data isolation",
      icon: ShieldCheck,
      tag: "Enterprise",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200/70 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
          : "bg-transparent border-b border-zinc-200/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Yedii Logo & Name */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <Image
              src="/images/yedii-logo.png"
              alt="Yedii Logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain transition-transform group-hover:scale-105"
              priority
            />
            <span className="font-bold text-[18px] tracking-tight text-zinc-900 group-hover:text-black">
              Yedii
            </span>
          </Link>

          {/* Center: Desktop Nav Links (Products, Pricing, Enterprise, Customers) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Products with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-950 rounded-md transition-colors cursor-pointer"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsOpen ? "rotate-180 text-zinc-950" : "text-zinc-400"
                  }`}
                />
              </button>

              {/* Products Megamenu Dropdown */}
              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px]">
                  <div className="glass-dropdown rounded-2xl p-4 shadow-xl border border-zinc-200/80 bg-white/95">
                    <div className="grid grid-cols-2 gap-2">
                      {productFeatures.map((feat) => {
                        const Icon = feat.icon;
                        return (
                          <Link
                            key={feat.title}
                            href="#features"
                            className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-50 transition-colors border border-transparent hover:border-zinc-200/60"
                            onClick={() => setProductsOpen(false)}
                          >
                            <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-700 group-hover/item:bg-zinc-900 group-hover/item:text-white transition-colors shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-zinc-900 group-hover/item:text-black">
                                  {feat.title}
                                </span>
                              </div>
                              <p className="text-xs text-zinc-500 line-clamp-2 mt-0.5 leading-relaxed">
                                {feat.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between px-2 text-xs">
                      <span className="text-zinc-500 font-medium">Looking for live demo?</span>
                      <Link
                        href="#playground"
                        onClick={() => setProductsOpen(false)}
                        className="font-medium text-zinc-900 hover:text-black flex items-center gap-1 group/link"
                      >
                        Try Agent Playground
                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              className="px-3 py-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-950 rounded-md transition-colors"
            >
              Pricing
            </Link>

            <Link
              href="#enterprise"
              className="px-3 py-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-950 rounded-md transition-colors"
            >
              Enterprise
            </Link>

            <Link
              href="#customers"
              className="px-3 py-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-950 rounded-md transition-colors"
            >
              Customers
            </Link>
          </nav>

          {/* Right: Peec AI style Log In & Sign Up */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/signin"
              className="px-3.5 py-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-900 hover:bg-black rounded-full transition-all duration-150 shadow-sm hover:shadow"
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
              Products
            </div>
            {productFeatures.slice(0, 4).map((feat) => (
              <Link
                key={feat.title}
                href="#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-50"
              >
                <span>{feat.title}</span>
              </Link>
            ))}
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
              href="#enterprise"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              Enterprise
            </Link>
            <Link
              href="#customers"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-zinc-800 hover:bg-zinc-50"
            >
              Customers
            </Link>
          </div>

          <div className="pt-3 border-t border-zinc-100 flex flex-col gap-2">
            <Link
              href="/signin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-xl transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-sm font-medium text-white bg-zinc-900 hover:bg-black rounded-xl transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
