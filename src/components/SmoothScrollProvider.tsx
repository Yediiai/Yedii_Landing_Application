"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
      anchors: true,
    });

    const bodyObserver = new ResizeObserver(() => {
      lenis.dimensions.resize();
    });
    bodyObserver.observe(document.body);

    return () => {
      bodyObserver.disconnect();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
