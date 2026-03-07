## 2024-03-07 - Mongoose Optimization Balance
**Learning:** Because `.lean()` is intentionally omitted in this codebase to preserve Mongoose virtuals (such as `id`), we must heavily rely on `.select()` to exclude large text fields (like `content` in BlogPost or `fullDescription` in Project) in list endpoints. This compensates for the memory overhead of instantiating full Mongoose documents when `.lean()` cannot be used.
**Action:** Always use `.select()` to explicitly exclude large fields in backend list queries when returning multiple documents.
