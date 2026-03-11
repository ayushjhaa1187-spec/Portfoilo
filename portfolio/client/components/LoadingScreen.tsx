"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[10002] flex items-center justify-center"
          style={{ background: "#060608" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ filter: "brightness(0.5) blur(10px)" }}
              animate={{ filter: ["brightness(1) blur(0px)", "brightness(1.5) blur(0px)", "brightness(1) blur(0px)"] }}
              transition={{ duration: 1.5, ease: "easeInOut", times: [0, 0.5, 1] }}
              className="loading-monogram"
            >
              <img 
                src="/signature-gold.png" 
                alt="Ayush Kumar Jha Loading" 
                style={{ height: '196px', width: 'auto', objectFit: 'contain' }}
              />
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
              className="h-[2px] mt-6 mx-auto"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                maxWidth: 400,
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
