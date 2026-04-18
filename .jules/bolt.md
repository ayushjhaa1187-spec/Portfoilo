## 2024-04-18 - Mongoose Read Performance Overhead
**Learning:** Discovered a codebase-specific anti-pattern where read-only Mongoose queries across all backend routes omit `.lean()`, causing unnecessary document hydration overhead.
**Action:** Always append `.lean()` to Mongoose queries (e.g., `find`, `findOne`) when the results are only sent as JSON to the client and no document manipulation is required.
