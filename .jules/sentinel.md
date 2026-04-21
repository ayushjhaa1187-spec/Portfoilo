## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.
## 2024-05-20 - Mass Assignment in Contact Form
**Vulnerability:** The POST /api/contact endpoint passes `req.body` directly to the `Contact` model constructor. Unauthenticated users can pass a `status` field in the JSON payload (e.g., "read" or "replied"), bypassing the default schema value of "unread".
**Learning:** Mongoose schema defaults do not prevent mass assignment of explicitly defined fields. Directly passing `req.body` to model constructors is a security risk.
**Prevention:** Always destructure `req.body` and explicitly pick only the allowed fields before creating new database records, especially on unauthenticated public endpoints.
