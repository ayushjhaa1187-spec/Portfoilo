## 2026-03-12 - Optimize Mongoose List Queries without `.lean()`
**Learning:** Mongoose read-only query optimizations (like `.lean()`) strip Mongoose virtuals like `id`, which may break the frontend or API expectations.
**Action:** Heavily rely on `.select()` to explicitly exclude large text fields (e.g., `-content`, `-fullDescription`) from list endpoints to reduce payload and memory overhead, while keeping virtual fields intact.
