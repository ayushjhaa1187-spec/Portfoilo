"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  style,
  href,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance < 80) {
      const force = (80 - distance) / 80;
      ref.current.style.transform = `translate(${distX * force * 0.3}px, ${distY * force * 0.3}px)`;
    }
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0px, 0px)";
    }
  };

  const Tag = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      className="magnetic-btn inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Tag
        href={href}
        onClick={onClick}
        className={className}
        style={style}
        {...(href && href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
