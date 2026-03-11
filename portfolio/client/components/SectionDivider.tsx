"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={
        isInView
          ? { scaleX: 1, opacity: 1 }
          : { scaleX: 0, opacity: 0 }
      }
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-full h-[1px]"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, #8B5CF6 50%, transparent 100%)",
        transformOrigin: "center",
      }}
    />
  );
}
