## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.
## 2024-04-28 - Contact Form Mass Assignment
**Vulnerability:** The POST `/api/contact` endpoint directly passed `req.body` into `new Contact(req.body)`, allowing an attacker to inject arbitrary fields like `status` which has admin-only logic ('unread', 'read', 'replied').
**Learning:** Mongoose schema defaults (like `default: 'unread'`) and strict mode do not protect against mass assignment of explicitly defined fields in the request payload.
**Prevention:** Always manually destructure and pick allowed fields (like `name`, `email`, `subject`, `message`) from `req.body` in backend routes before passing them to models.
