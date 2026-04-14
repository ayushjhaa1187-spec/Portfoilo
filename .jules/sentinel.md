## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.

## 2024-04-14 - [Mass Assignment Vulnerability in Contact Form]
**Vulnerability:** The POST `/api/contact` endpoint directly passed `req.body` to the Mongoose `Contact` model (`new Contact(req.body)`). This allowed users to pass arbitrary fields that exist in the schema, such as the `status` field, setting it to 'read' or 'replied' during creation.
**Learning:** Mongoose schema defaults do not prevent mass assignment if a defined field is explicitly provided in the request payload. Directly passing user input to models is a significant security risk.
**Prevention:** Always explicitly destructure and pick only the allowed fields from `req.body` (e.g., `const { name, email, subject, message } = req.body;`) before instantiating or updating database models.
