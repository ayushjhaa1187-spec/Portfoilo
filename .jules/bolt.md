## 2024-05-07 - Mongoose Document Instantiation Overhead
**Learning:** Found multiple read-only API endpoints returning full Mongoose documents, creating unnecessary memory overhead and slower response times.
**Action:** Always append `.lean()` to Mongoose `.find()` and `.findOne()` queries when the returned documents are only being serialized to JSON and don't need Mongoose instance methods or saving.
