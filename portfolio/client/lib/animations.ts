import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom,
      ease: "easeOut",
    },
  }),
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: custom,
      ease: "easeOut",
    },
  }),
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: custom,
      ease: "easeOut",
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const hoverScale = {
  whileHover: { scale: 1.03, y: -5 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.3, ease: "easeOut" as const },
};
