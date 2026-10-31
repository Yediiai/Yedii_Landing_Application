"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
  badge?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export function Footer() {
  const footerSections: FooterSection[] = [
    {
      title: "Products",
      links: [
        { label: "Agent Studio", href: "#features" },
        { label: "Knowledge Grounding (RAG)", href: "#features" },
        { label: "Interactive Playground", href: "#playground" },
        { label: "Omnichannel Deploy", href: "#features" },
        { label: "Team Inbox & Escalation", href: "#features" },
        { label: "Model Context Protocol (MCP)", href: "#features" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Customer Support Automation", href: "#features" },
        { label: "Sales & Inbound Lead Gen", href: "#features" },
        { label: "Internal Knowledge Assistant", href: "#features" },
        { label: "Enterprise Security", href: "#enterprise" }
      ]
    },
    {
      title: "Developers",
      links: [
        { label: "API Reference", href: "#" },
        { label: "TypeScript SDK", href: "#" },
        { label: "Python Client", href: "#" },
        { label: "Web Widget Guide", href: "#" },
        { label: "GitHub Repository", href: "https://github.com/Yediiai/Yedii_Landing_Application", external: true }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Yedii", href: "#" },
        { label: "Careers", href: "#", badge: "We're hiring" },
        { label: "Trust & Security", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" }
      ]
    }
  ];

  return (
    <footer className="border-t border-zinc-200/80 bg-white pt-10 pb-8 text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-8 border-b border-zinc-100">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/yedii-logo.png"
                alt="Yedii"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
              />
              <span className="font-bold text-lg tracking-tight text-zinc-950">
                Yedii
              </span>
            </Link>

            <p className="text-xs text-zinc-500 leading-relaxed">
              The autonomous AI agent platform for customer support, sales, and enterprise operations.
            </p>

            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-[11px] font-medium text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>All Systems Operational</span>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900">
                {section.title}
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      className="hover:text-zinc-950 transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      {link.external && (
                        <ArrowUpRight className="w-3 h-3 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                      )}
                      {link.badge && (
                        <span className="text-[10px] bg-zinc-100 text-zinc-700 font-medium px-1.5 py-0.2 rounded-full ml-1">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; 2026 Yedii AI Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-zinc-900 transition-colors">
              Privacy Notice
            </Link>
            <Link href="#" className="hover:text-zinc-900 transition-colors">
              Security Overview
            </Link>
            <Link href="#" className="hover:text-zinc-900 transition-colors">
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
