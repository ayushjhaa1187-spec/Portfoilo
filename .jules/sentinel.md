## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.

## 2024-05-02 - [Contact Form Mass Assignment Vulnerability]
**Vulnerability:** The POST `/api/contact` endpoint directly instantiated a `Contact` model with `req.body` without restricting the fields. This exposes the application to mass assignment attacks, where malicious users could inject unintended database fields (e.g., `isAdmin`, `status`) by modifying the JSON payload.
**Learning:** Even simple form submissions need strict data validation. Directly passing `req.body` into database operations bypasses field-level security constraints unless explicitly handled.
**Prevention:** Always explicitly destructure the exact fields needed from the request body (e.g., `const { name, email, subject, message } = req.body`) and pass only those to the model constructor to enforce strict allow-listing.
