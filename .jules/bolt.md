## 2024-05-18 - Concurrent API Fetches in Next.js Server Components
**Learning:** Sequential `fetch` calls in server-side API routes (e.g. `userRes` then `reposRes`) block the response unnecessarily, leading to double the latency.
**Action:** Always use `Promise.all` for independent external API calls to parallelize network requests and improve TTFB (Time to First Byte).
