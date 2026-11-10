"use client";

import React, { useEffect, useRef } from "react";

export interface FlowBackgroundProps {
  /** Background color (default: #f7f7f5) */
  backgroundColor?: string;
  /** Flow line color: rgb string or hex (default: rgb(0, 0, 0)) */
  lineColor?: string;
  /** Grid line color (default: rgba(0, 0, 0, 0.08)) */
  gridColor?: string;
  /** Grid square size in pixels (default: 48) */
  gridSize?: number;
  /** Number of flow lines in the ribbon (default: 26) */
  lineCount?: number;
  /** Animation speed multiplier (default: 0.5) */
  animationSpeed?: number;
  /** Additional custom class names */
  className?: string;
}

/**
 * Parses color strings into [r, g, b] array. Supports hex (#000000), rgb(...), rgba(...), or "0, 0, 0".
 */
function parseRgb(
  color?: string,
  fallback: [number, number, number] = [0, 0, 0]
): [number, number, number] {
  if (!color) return fallback;
  const trimmed = color.trim();
  const hex = trimmed.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (hex) {
    return [parseInt(hex[1], 16), parseInt(hex[2], 16), parseInt(hex[3], 16)];
  }
  const rgb = trimmed.match(/\d+[\s,]+\d+[\s,]+\d+/);
  if (rgb) {
    const parts = rgb[0].split(/[\s,]+/).map(Number);
    if (parts.length >= 3) return [parts[0], parts[1], parts[2]];
  }
  return fallback;
}

/**
 * <FlowBackground />
 * Renders a lightweight, high-DPI animated canvas background matching the reference spec:
 * - Off-white (#f7f7f5) background.
 * - 48px grid lines that fade from the top-left towards the center/edges.
 * - 26 pure black ribbon lines (rgb 0, 0, 0) flowing and fanning across the middle.
 * - Center lines are most opaque (max about 55% opacity); top and bottom edges fade to almost transparent.
 * - Fades out toward the right edge.
 * - Pauses on tab blur and respects prefers-reduced-motion.
 */
export function FlowBackground({
  backgroundColor = "#f7f7f5",
  lineColor = "rgb(0, 0, 0)",
  gridColor = "rgba(0, 0, 0, 0.08)",
  gridSize = 48,
  lineCount = 26,
  animationSpeed = 0.5,
  className = "",
}: FlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const [lr, lg, lb] = parseRgb(lineColor, [0, 0, 0]);
    const [gr, gg, gb] = parseRgb(gridColor, [0, 0, 0]);

    let width = 0;
    let height = 0;
    let dpr = 1;
    let animationFrameId: number | null = null;
    let lastTime = performance.now();
    let elapsed = 0;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = mediaQuery.matches;

    // Handle canvas sizing and retina scaling (capped at 2)
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Draw immediately on resize
      draw(elapsed);
    };

    /**
     * Draw grid with stronger opacity at top-left fading towards the center,
     * maintaining a crisp ~8-10% baseline opacity across the entire screen.
     */
    const drawGrid = () => {
      ctx.beginPath();

      // Vertical 1px lines every gridSize
      for (let x = 0; x <= width; x += gridSize) {
        const ax = Math.floor(x) + 0.5;
        ctx.moveTo(ax, 0);
        ctx.lineTo(ax, height);
      }

      // Horizontal 1px lines every gridSize
      for (let y = 0; y <= height; y += gridSize) {
        const ay = Math.floor(y) + 0.5;
        ctx.moveTo(0, ay);
        ctx.lineTo(width, ay);
      }

      // Radial gradient centered at top-left (0, 0)
      const maxDim = Math.hypot(width, height) * 0.85;
      const gridGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, maxDim);
      gridGradient.addColorStop(0, `rgba(${gr}, ${gg}, ${gb}, 0.22)`);
      gridGradient.addColorStop(0.25, `rgba(${gr}, ${gg}, ${gb}, 0.15)`);
      gridGradient.addColorStop(0.55, `rgba(${gr}, ${gg}, ${gb}, 0.09)`);
      gridGradient.addColorStop(1, `rgba(${gr}, ${gg}, ${gb}, 0.08)`);

      ctx.strokeStyle = gridGradient;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    /**
     * Draw flow lines fanning out across the middle
     */
    const drawFlowLines = (t: number) => {
      const steps = Math.min(200, Math.max(90, Math.floor(width / 6)));

      for (let i = 0; i < lineCount; i++) {
        const norm = lineCount > 1 ? i / (lineCount - 1) : 0.5; // 0 (top) to 1 (bottom)

        // Lines in the middle of the band are the most opaque (max about 55% opacity);
        // lines at the top and bottom edges fade to almost transparent.
        const centerWeight = Math.sin(norm * Math.PI);
        const lineAlpha = 0.03 + 0.52 * Math.pow(centerWeight, 1.15);

        // Horizontal gradient fading toward right edge
        const lineGrad = ctx.createLinearGradient(0, 0, width, 0);
        lineGrad.addColorStop(0, `rgba(${lr}, ${lg}, ${lb}, ${lineAlpha * 0.85})`);
        lineGrad.addColorStop(0.2, `rgba(${lr}, ${lg}, ${lb}, ${lineAlpha})`);
        lineGrad.addColorStop(0.6, `rgba(${lr}, ${lg}, ${lb}, ${lineAlpha * 0.85})`);
        lineGrad.addColorStop(0.82, `rgba(${lr}, ${lg}, ${lb}, ${lineAlpha * 0.4})`);
        lineGrad.addColorStop(0.95, `rgba(${lr}, ${lg}, ${lb}, 0)`);
        lineGrad.addColorStop(1, `rgba(${lr}, ${lg}, ${lb}, 0)`);

        ctx.beginPath();

        for (let s = 0; s <= steps; s++) {
          const nx = s / steps;
          const x = nx * width;

          // Top boundary stays relatively flat (~0.44 down to 0.43 in trough)
          const yTop =
            height * (0.448 - 0.018 * Math.sin(Math.pow(nx, 0.85) * Math.PI));

          // Span starts at ~10% height, fans out to ~19.5% in the dip (nx ~ 0.4), then tapers to ~4% at nx ~ 0.95
          const fanBulge = Math.sin(Math.pow(nx, 0.72) * Math.PI);
          const spanTaper =
            nx > 0.65 ? Math.max(0.18, 1 - ((nx - 0.65) / 0.35) * 0.78) : 1;
          const span =
            height * (0.098 + 0.102 * Math.max(0, fanBulge)) * spanTaper;

          // Smooth sine-wave motion for flowing, breathing ribbon
          const wave =
            Math.sin(nx * 3.2 - t * 0.9 + i * 0.04) * (height * 0.007) +
            Math.cos(nx * 1.8 + t * 0.5 + i * 0.055) * (height * 0.0045);

          const y = yTop + norm * span + wave;

          if (s === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    /**
     * Master render function
     */
    const draw = (t: number) => {
      // 1. Solid background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      // 2. 48px grid
      drawGrid();

      // 3. Flow ribbon
      drawFlowLines(t);
    };

    // Animation frame tick
    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      elapsed += dt * animationSpeed;

      draw(elapsed);

      if (!prefersReducedMotion && !document.hidden) {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    // Start or stop animation based on visibility and motion preferences
    const startAnimation = () => {
      if (prefersReducedMotion) {
        draw(0); // Single still frame
        return;
      }
      if (!animationFrameId && !document.hidden) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    const stopAnimation = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    // Listen for visibility change (pause when tab hidden)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        startAnimation();
      }
    };

    // Listen for prefers-reduced-motion change
    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        stopAnimation();
        draw(0);
      } else {
        startAnimation();
      }
    };

    // Initialize
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    mediaQuery.addEventListener("change", handleMotionChange);

    resize();
    startAnimation();

    return () => {
      stopAnimation();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, [
    backgroundColor,
    lineColor,
    gridColor,
    gridSize,
    lineCount,
    animationSpeed,
  ]);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-0 pointer-events-none select-none overflow-hidden ${className}`}
      style={{ backgroundColor }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

export default FlowBackground;
