## 2026-05-01 - Prevent Layout Thrashing in Scroll Handlers
**Learning:** Using React state (`scrollProgress`) to drive a `width` style property via an unthrottled scroll event listener causes severe layout thrashing and main-thread blocking. It triggers a re-render and DOM reflow on every scroll tick.
**Action:** Use hardware-accelerated CSS transforms (`scaleX`) powered by `framer-motion`'s `useScroll` hook to bypass the React render cycle and avoid layout recalculations entirely.
