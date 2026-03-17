"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Advanced Custom Cursor Component
 * Features:
 * - Reactive scaling on interactive elements
 * - Lag-follow (Lerp) for smooth motion
 * - Mobile safety (disables on touch devices)
 * - Backdrop-blur and mix-blend-mode for premium feel
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile/touch devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Core mouse move track
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        // Dot follows instantly
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };

    // Bridge for CSS-based interactive scaling
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest(".cursor-pointer") ||
        target.closest(".group")
      ) {
        ringRef.current?.classList.add("hovered");
        dotRef.current?.classList.add("hovered");
      }
    };

    const handleMouseOut = () => {
      ringRef.current?.classList.remove("hovered");
      dotRef.current?.classList.remove("hovered");
    };

    // Ring follow with high-performance lag (Lerp)
    let animFrame: number;
    const animateRing = () => {
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;
      
      // Responsive interpolation factor
      ringPos.current.x += dx * 0.15;
      ringPos.current.y += dy * 0.15;

      if (ringRef.current) {
        // Ring offset by its radius (20px)
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      animFrame = requestAnimationFrame(animateRing);
    };

    if (!isMobile) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseover", handleMouseOver);
      document.addEventListener("mouseout", handleMouseOut);
      animFrame = requestAnimationFrame(animateRing);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animFrame);
    };
  }, [isMobile]);

  // Clean exit for mobile UX
  if (isMobile) return null;

  return (
    <>
      {/* Central Probe */}
      <div 
        ref={dotRef} 
        className="custom-cursor fixed top-0 left-0 w-[10px] h-[10px] bg-[#D4AF37] rounded-full pointer-events-none z-[10001] transition-transform duration-100 mix-blend-difference" 
      />
      
      {/* Reactive Perimeter */}
      <div 
        ref={ringRef} 
        className="custom-cursor-ring fixed w-[40px] h-[40px] border border-[#D4AF37]/30 bg-white/5 backdrop-blur-[2px] rounded-full pointer-events-none z-[10000] transition-all duration-300 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
