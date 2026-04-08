## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.
## 2024-05-24 - Prevent Mass Assignment in Contact Route
**Vulnerability:** The contact route directly passed req.body to the Mongoose Contact model, which could allow malicious users to overwrite sensitive fields like status or other unintended fields.
**Learning:** Directly trusting client input and passing it to database models creates a mass assignment vulnerability.
**Prevention:** Always explicitly destructure and pick only the expected fields from req.body before saving to the database, and validate required inputs.
