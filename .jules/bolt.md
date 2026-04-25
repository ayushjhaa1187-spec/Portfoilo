## 2024-04-25 - Replace setInterval with requestAnimationFrame
**Learning:** Using `setInterval` with small intervals (like 16ms) in React effects can cause performance issues (jank, main thread blocking, inactive tab battery drain) because it runs indiscriminately of the browser's render cycle.
**Action:** Always prefer `requestAnimationFrame` for continuous animations. It synchronizes with the display refresh rate and pauses automatically when the tab is inactive, ensuring smoother performance and better resource utilization.
