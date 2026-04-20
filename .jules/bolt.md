## 2024-04-20 - Scroll-Linked Animation Re-renders
**Learning:** Attaching window scroll event listeners that update React state (e.g., for progress bars) causes frequent, expensive component re-renders on every scroll tick.
**Action:** Use Framer Motion's `useScroll` and `motion.div` to bypass React state entirely for scroll progress visuals, and use `useMotionValueEvent` to only trigger state updates when necessary thresholds are crossed.
