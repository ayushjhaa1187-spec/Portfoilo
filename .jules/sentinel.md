## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.

## 2024-04-27 - [Mass Assignment Vulnerability in Contact Form]
**Vulnerability:** The POST `/api/contact` endpoint directly passed `req.body` to the `Contact` model without destructuring. This allowed a malicious user to modify restricted fields like `status` (e.g. marking messages as "read" or "replied" upon creation).
**Learning:** Even with Mongoose schemas, directly passing `req.body` to models is insecure and leaves the application open to mass assignment. Explicitly picking the allowed fields is required to maintain the integrity of restricted data.
**Prevention:** Always destructure `req.body` and explicitly pass only the permitted fields (like `name`, `email`, `subject`, `message`) to Mongoose models. Do not rely on schema defaults to protect against malicious input.
