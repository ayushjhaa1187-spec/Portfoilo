## 2024-05-05 - Missing .lean() in Mongoose queries
**Learning:** Read-only GET routes in Express were missing `.lean()` on Mongoose queries, causing unnecessary document instantiation overhead.
**Action:** Always append `.lean()` to `.find()` and `.findOne()` queries when returning plain data to clients to optimize memory and processing speed.
