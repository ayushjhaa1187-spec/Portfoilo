"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
    };

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

    // Ring follow with lag
    let animFrame: number;
    const animateRing = () => {
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;
      
      // Slightly more responsive lag
      ringPos.current.x += dx * 0.15;
      ringPos.current.y += dy * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
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

  if (isMobile) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-[10px] h-[10px] bg-[#D4AF37] rounded-full pointer-events-none z-[10001] transition-transform duration-100 mix-blend-difference" 
      />
      <div 
        ref={ringRef} 
        className="fixed top-0 left-0 w-[40px] h-[40px] border border-[#D4AF37]/30 bg-white/5 backdrop-blur-[2px] rounded-full pointer-events-none z-[10000] transition-all duration-300 ease-out flex items-center justify-center translate-x-[-50%] translate-y-[-50%]"
      >
        <style jsx>{`
          .hovered {
            width: 80px !important;
            height: 80px !important;
            background: rgba(212, 175, 55, 0.1) !important;
            border-color: rgba(212, 175, 55, 0.5) !important;
          }
          div.hovered {
             transform: translate(-5px, -5px) scale(0.5) !important;
          }
        `}</style>
      </div>
    </>
  );
}
