## 2024-05-10 - Mongoose .lean() Optimization
**Learning:** In the Express backend, Mongoose read-only queries (like `find` and `findOne` in GET endpoints) suffer from significant performance overhead because Mongoose instantiates full document models. Using `.lean()` bypasses this overhead, returning plain JavaScript objects.
**Action:** Always append `.lean()` to Mongoose queries when the endpoint only reads and returns data, avoiding unnecessary memory and processing cost.
