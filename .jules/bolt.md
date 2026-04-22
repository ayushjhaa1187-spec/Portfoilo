## 2024-04-22 - Mongoose .lean() Optimization
**Learning:** Discovered that read-only API endpoints fetching data from MongoDB via Mongoose can incur significant memory overhead due to document instantiation. Mongoose documents are heavy objects.
**Action:** Always append `.lean()` to `find()` and `findOne()` queries when returning JSON data for read-only API routes to bypass hydration, resulting in faster execution and lower memory consumption.
