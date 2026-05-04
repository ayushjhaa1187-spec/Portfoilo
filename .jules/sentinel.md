## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.

## 2024-05-04 - [Mass Assignment in Contact Form]
**Vulnerability:** The POST `/api/contact` endpoint directly passed `req.body` to the Mongoose `Contact` model.
**Learning:** Even simple forms like "Contact Us" are susceptible to mass assignment. If inputs aren't explicitly destructured, an attacker can modify fields like `status` (e.g., set to 'replied') or `createdAt`.
**Prevention:** Always explicitly destructure inputs before passing them to the database model, no matter how simple the entity seems.
