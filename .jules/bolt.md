## 2025-05-16 - Mongoose .lean() read optimization
**Learning:** In Mongoose, using `.find()` or `.findOne()` returns heavy Mongoose documents with tracking and saving methods. For read-only routes (like fetching portfolios or blog lists), appending `.lean()` to the queries returns plain JavaScript objects, bypassing the overhead of document instantiation.
**Action:** Always append `.lean()` to Mongoose queries on read-only endpoints (e.g., standard GET collections) to significantly improve memory and execution performance (typically ~3-5x faster).
