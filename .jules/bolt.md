## 2026-05-02 - Parallelize independent external API requests
**Learning:** Independent asynchronous API requests executed sequentially block execution unnecessarily, compounding latency, particularly on external services like GitHub's API.
**Action:** Identify independent `await fetch` calls and group them using `Promise.all` to fetch data concurrently.
