## 2024-05-15 - Mongoose Optimization Anti-Pattern
**Learning:** We cannot use `.lean()` on Mongoose queries for list endpoints in this application because frontend code relies on Mongoose virtual fields like `id` which get bypassed and dropped by `.lean()`.
**Action:** Instead of `.lean()`, use `.select()` to explicitly exclude large fields (like `-content` or `-fullDescription`) from list queries to reduce memory overhead and payload size without stripping virtual fields.
