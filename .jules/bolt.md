## 2024-04-28 - Optimizing High-Frequency Scroll Listeners
**Learning:** Synchronous state updates in high-frequency events like `scroll` cause layout thrashing and excessive re-renders, as they fire more often than the browser's refresh rate.
**Action:** Always wrap scroll-bound state updates in `requestAnimationFrame` to sync with the paint cycle, and use `{ passive: true }` to ensure scrolling isn't blocked by the main thread.
