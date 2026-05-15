## 2024-05-15 - Mongoose Read-Only Optimization
**Learning:** Mongoose queries without `.lean()` instantiate heavy Mongoose documents. In read-only routes (e.g. GET requests), this causes significant memory and CPU overhead.
**Action:** Always append `.lean()` to Mongoose `.find()` and `.findOne()` queries when the returned objects are only read and not modified, returning plain JavaScript objects and improving performance by ~3-5x.
