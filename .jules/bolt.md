## 2024-05-24 - Mongoose Read-Only Queries
**Learning:** Mongoose instantiates full document objects with getters, setters, and internal tracking by default. For read-only API endpoints that only serialize to JSON, this adds significant unnecessary memory and CPU overhead.
**Action:** Always append `.lean()` to `find()` and `findOne()` queries when documents are not going to be modified. This returns plain JavaScript objects, improving read performance by up to 3-5x.
