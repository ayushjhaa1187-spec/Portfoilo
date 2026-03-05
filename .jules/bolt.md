## 2024-03-05 - MongoDB Category Index
**Learning:** For collections where querying by a specific enum or string field (like `category`) is a frequent operation (e.g., filtering projects by category in the UI), the absence of a database index forces a full collection scan which degrades query performance as the collection grows.
**Action:** Always add `index: true` to heavily filtered Mongoose schema fields, particularly those tied to UI filtering tabs or navigation categories.
