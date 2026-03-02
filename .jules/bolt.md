## 2024-10-27 - [Backend Query Optimization]
**Learning:** The Mongoose models in this application (`Project`, `BlogPost`, `Achievement`) contain large text fields (`fullDescription`, `content`). Fetching these fields for list endpoints creates significant overhead, and returning full Mongoose documents for read-only endpoints wastes memory and CPU instantiation time.
**Action:** Always use `.lean()` for read-only Mongoose queries. For list endpoints that do not need the full content (like `GET /api/projects` and `GET /api/blog`), always use `.select('-largeField')` to exclude heavy payloads.
