## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.

## 2024-05-01 - [Mass Assignment in Contact Endpoint]
**Vulnerability:** The POST `/api/contact` endpoint directly passed `req.body` to the Mongoose `Contact` model during initialization.
**Learning:** Even though Mongoose schema defines strict types and enums (like `status`), passing `req.body` directly allows mass assignment. Malicious users could inject arbitrary fields like `status` (to mark it read) or other un-modeled properties if `strict` is disabled, leading to unexpected behavior.
**Prevention:** Always explicitly destructure expected fields (e.g., `const { name, email, subject, message } = req.body;`) before passing them to Mongoose constructors or update queries.
