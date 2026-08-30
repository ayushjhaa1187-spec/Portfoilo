## 2024-05-12 - Mongoose .lean() read optimization
**Learning:** Found that appending `.lean()` to Mongoose read-only queries (`find()`, `findOne()`) significantly bypasses document instantiation overhead when returning plain javascript objects to be serialized and sent by Express API routes.
**Action:** Always append `.lean()` when using `Mongoose` where modifying the document instances (like `.save()`) isn't necessary.
