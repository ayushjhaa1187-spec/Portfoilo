## 2024-05-20 - Unprotected POST Endpoints
**Vulnerability:** Found `POST /api/projects` endpoint marked with `// @access Private (TODO: Add Auth)` but lacking any middleware, allowing unauthorized data manipulation.
**Learning:** Developers are marking endpoints as private in comments but forgetting to implement the actual check, leading to false sense of security.
**Prevention:** Scan for `TODO: Add Auth` or `@access Private` comments and verify middleware presence during code reviews.
