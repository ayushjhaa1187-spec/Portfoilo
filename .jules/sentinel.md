## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.

## 2024-05-24 - Prevent Mass Assignment in Mongoose Models
**Vulnerability:** Mass assignment vulnerability in `/api/contact` route where `req.body` was directly passed to the Mongoose model constructor, allowing malicious users to overwrite restricted fields like `status`.
**Learning:** Directly passing unstructured `req.body` to Mongoose models bypasses field-level restrictions unless explicitly handled, exposing internal fields to unwanted modification.
**Prevention:** Always explicitly destructure and pick only the allowed fields from `req.body` before passing them to a model constructor or update operation.
