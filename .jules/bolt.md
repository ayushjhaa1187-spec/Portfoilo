## 2024-04-30 - Scroll Listener Bottlenecks
**Learning:** Attaching an unthrottled scroll listener to the window in Next.js/React causes excessive state updates (re-renders) and blocks the main thread during scrolling.
**Action:** Always wrap the scroll handler in `requestAnimationFrame` and pass `{ passive: true }` to `addEventListener` to offload work and prevent jank.
