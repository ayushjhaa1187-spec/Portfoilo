## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.
## 2024-04-25 - Prevent Mass Assignment in Mongoose Models
**Vulnerability:** Contact form route directly passed `req.body` to the Mongoose model constructor (`new Contact(req.body)`), allowing attackers to potentially overwrite sensitive defined schema fields like `status` or `createdAt` during form submission.
**Learning:** Mongoose's strict mode only prevents the assignment of fields *not* defined in the schema. It does not prevent mass assignment of fields that *are* defined in the schema, even if they have default values.
**Prevention:** Always manually destructure and extract only the explicitly allowed fields from `req.body` (e.g., `const { name, email, subject, message } = req.body;`) before instantiating or updating Mongoose models.
