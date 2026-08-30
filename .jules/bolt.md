## 2024-05-03 - Express/Mongoose read performance
**Learning:** In the Express backend, Mongoose read queries (`.find()`, `.findOne()`) instantiate full Mongoose documents by default. This introduces unnecessary overhead when simply returning JSON in the API routes.
**Action:** Append `.lean()` to Mongoose read queries that don't require document methods to return plain JavaScript objects, improving read speed and reducing memory consumption.
