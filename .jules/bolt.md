## 2024-05-13 - Mongoose .lean() Optimization
**Learning:** For read-only operations in Mongoose (like GET requests fetching data), the default behavior of instantiating full Mongoose documents adds significant memory and CPU overhead. Bypassing this using `.lean()` returns plain JS objects, significantly improving query performance.
**Action:** Always use `.lean()` on `find()` and `findOne()` queries in Express/Mongoose routes when the fetched documents are only being sent as JSON responses and do not need Mongoose instance methods (like `.save()`).
