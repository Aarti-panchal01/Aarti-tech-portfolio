"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number };

const LINK_DIST = 130;
const MOUSE_DIST = 170;

function hexToRgb(hex: string) {
  const h = hex.trim().replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export function Constellation() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    let particles: Particle[] = [];
    let dot = { r: 143, g: 143, b: 136 };
    let accent = { r: 224, g: 152, b: 106 };
    const mouse = { x: -1e4, y: -1e4 };

    const readTheme = () => {
      const style = getComputedStyle(document.documentElement);
      const soft = style.getPropertyValue("--soft");
      const acc = style.getPropertyValue("--accent");
      if (soft) dot = hexToRgb(soft);
      if (acc) accent = hexToRgb(acc);
    };

    const seed = () => {
      const count = Math.min(80, Math.floor((width * height) / 22000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const { r, g, b } = dot;
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},0.5)`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const a = 0.13 * (1 - Math.sqrt(d2) / LINK_DIST);
            ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        const mx = p.x - mouse.x;
        const my = p.y - mouse.y;
        const md2 = mx * mx + my * my;
        if (md2 < MOUSE_DIST * MOUSE_DIST) {
          const a = 0.22 * (1 - Math.sqrt(md2) / MOUSE_DIST);
          ctx.strokeStyle = `rgba(${accent.r},${accent.g},${accent.b},${a})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    };

    const step = () => {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = width + 10;
        else if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        else if (p.y > height + 10) p.y = -10;
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduced) draw();
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -1e4;
      mouse.y = -1e4;
    };

    readTheme();
    resize();

    const themeObserver = new MutationObserver(() => {
      readTheme();
      if (reduced) draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("resize", resize);
    if (!reduced) {
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerleave", onLeave);
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="constellation" aria-hidden="true" />;
}
