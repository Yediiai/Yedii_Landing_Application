"use client";

import React, { useState, useEffect } from "react";
import { DocsHeader } from "./DocsHeader";
import { GlobalSearchModal } from "./GlobalSearchModal";
import { AiDocAssistantModal } from "./AiDocAssistantModal";
import { Footer } from "@/components/Footer";

interface DocsLayoutWrapperProps {
  children: React.ReactNode;
}

export function DocsLayoutWrapper({ children }: DocsLayoutWrapperProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  // Global keyboard shortcut listener: Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#141C2E] flex flex-col font-sans selection:bg-[#141C2E] selection:text-white">
      {/* 1. Unified Single Documentation Header (No duplicate main Navbar) */}
      <DocsHeader
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
        onToggleMobileNav={() => setIsMobileNavOpen((prev) => !prev)}
        isMobileNavOpen={isMobileNavOpen}
      />

      {/* 2. Main Content Body */}
      <div className="flex-1 flex flex-col">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as any, {
              isMobileNavOpen,
              onCloseMobileNav: () => setIsMobileNavOpen(false),
              onOpenSearch: () => setIsSearchOpen(true),
              onOpenAiAssistant: () => setIsAiAssistantOpen(true),
            });
          }
          return child;
        })}
      </div>

      {/* 3. Global Application Footer */}
      <Footer />

      {/* 4. Global Modals */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onOpenAiAssistant={() => setIsAiAssistantOpen(true)}
      />

      <AiDocAssistantModal
        isOpen={isAiAssistantOpen}
        onClose={() => setIsAiAssistantOpen(false)}
      />
    </div>
  );
}
