## 2024-03-08 - Mongoose Query Optimization Constraints
**Learning:** In this backend architecture, Mongoose read-only optimizations like `.lean()` cannot be used for the `/api/projects` and `/api/blog` endpoints. Using `.lean()` strips away virtual fields such as `id`, which the frontend currently relies on.
**Action:** To optimize read queries and reduce payload sizes without breaking frontend `id` references, use `.select('-fieldName')` (e.g., `.select('-content')` or `.select('-fullDescription')`) to explicitly exclude large text fields from list endpoints.
