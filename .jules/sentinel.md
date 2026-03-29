## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.

## 2024-03-29 - [Mass Assignment and Data Leakage in Public API Endpoints]
**Vulnerability:** The POST `/api/contact` endpoint directly instantiated a Mongoose model from `req.body` and echoed the raw saved document back to the client.
**Learning:** Returning a raw Mongoose document exposes internal database fields such as `_id` and `__v`, potentially leaking sensitive database structure. Passing `req.body` directly into the model constructor enables mass assignment attacks, allowing users to override restricted fields (e.g., changing `status` to 'read' or 'replied' during creation).
**Prevention:** Always extract specifically required fields from `req.body` before passing them to the database, and only return explicitly intended data to the client (e.g., a success confirmation message without echoing the document).
