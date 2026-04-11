## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.
## 2024-05-20 - [Mass Assignment in Contact Form]
**Vulnerability:** The POST `/api/contact` endpoint lacked destructuring and directly passed `req.body` to the Mongoose `Contact` model, which could have allowed malicious actors to overwrite protected fields like `status` or `createdAt`.
**Learning:** Mass assignment vulnerabilities occur when user input is mapped directly to a data model. Mongoose schema definitions (like `status` enums) do not prevent explicit overrides if passed in `req.body`.
**Prevention:** Always manually destructure and select the explicitly allowed fields from the request body before passing them into the database model.
