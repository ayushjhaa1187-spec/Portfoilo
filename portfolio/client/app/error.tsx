"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "#060608" }}
    >
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "rgba(239,68,68,0.1)" }}
          >
            <AlertCircle size={40} style={{ color: "#EF4444" }} />
          </div>
          <h2
            className="font-display text-3xl tracking-wider mb-4"
            style={{ color: "#F1F0FB" }}
          >
            Something went wrong!
          </h2>
          <p className="text-sm mb-8 leading-relaxed" style={{ color: "#888" }}>
            An unexpected error occurred. Please try again.
          </p>
          <button
            onClick={() => reset()}
            className="font-mono text-sm tracking-wider uppercase px-8 py-3 flex items-center gap-2 mx-auto transition-all duration-300 hover:border-[#8B5CF6]"
            style={{
              border: "1px solid #1E1E24",
              color: "#F1F0FB",
              background: "transparent",
            }}
          >
            <RefreshCw size={16} /> Try Again
          </button>
        </motion.div>
      </div>
    </div>
  );
}
