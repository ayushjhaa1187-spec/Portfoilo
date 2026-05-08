## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.

## 2024-05-08 - [Mass Assignment Vulnerability in Contact Form]
**Vulnerability:** The POST `/api/contact` endpoint directly passed `req.body` to the Mongoose `Contact` model constructor without destructuring, allowing attackers to modify restricted fields like `status`.
**Learning:** Even simple forms like a contact form can be vulnerable to mass assignment if inputs aren't explicitly allowlisted. Mongoose models will save any field present in the schema if it's passed in the constructor, bypassing intended application logic.
**Prevention:** Always explicitly destructure allowed fields from `req.body` and pass only those fields to the model constructor to prevent mass assignment vulnerabilities.
