## 2024-05-14 - Mongoose Read Optimization
**Learning:** Mongoose queries without `.lean()` instantiate full Mongoose Documents, which introduces massive overhead (hydration, change tracking, getters/setters) for read-only routes.
**Action:** Always append `.lean()` to `.find()` and `.findOne()` queries on read-only endpoints in Express backends to bypass hydration and improve performance by ~3-5x.
