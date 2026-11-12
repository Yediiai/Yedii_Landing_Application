"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // 1. Initialize Lenis with Locomotive-grade inertia and ultra-smooth easing
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.6,
      autoRaf: true,
      anchors: true,
      prevent: (node) => {
        // Prevent Lenis from stealing scroll on modals, dropdowns, code blocks, or data-lenis-prevent elements
        return (
          node.hasAttribute("data-lenis-prevent") ||
          Boolean(node.closest?.("[data-lenis-prevent]")) ||
          node.tagName === "TEXTAREA" ||
          node.tagName === "SELECT" ||
          Boolean(node.closest?.('[role="dialog"], dialog, pre, .overflow-y-auto, .overflow-x-auto'))
        );
      },
    });

    lenisRef.current = lenis;

    // Expose lenis instance globally so any page, component or button can use window.__lenis
    if (typeof window !== "undefined") {
      (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    }

    // 2. Observe body size changes to keep scroll limits accurate across dynamic content
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(document.body);

    return () => {
      resizeObserver.disconnect();
      lenis.destroy();
      lenisRef.current = null;
      if (typeof window !== "undefined") {
        delete (window as unknown as { __lenis?: Lenis }).__lenis;
      }
    };
  }, []);

  // 3. On route change, smoothly reset scroll to top (unless there's an anchor hash) and recalculate height
  useEffect(() => {
    if (!lenisRef.current) return;

    if (typeof window !== "undefined" && !window.location.hash) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }

    // Give DOM time to settle and recompute page dimensions across all dynamic routes
    const timer = setTimeout(() => {
      lenisRef.current?.resize();
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
