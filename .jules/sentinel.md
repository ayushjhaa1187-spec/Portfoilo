## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.

## 2024-05-18 - Mass Assignment in Mongoose Models
**Vulnerability:** The `/api/contact` route accepted all fields from `req.body` directly into the `Contact` Mongoose model constructor, allowing users to forcefully assign fields such as `status` to anything (e.g., bypassing initial 'unread' status and setting it to 'read' or 'replied' forcefully).
**Learning:** Mongoose schema defaults and strict mode do not protect against mass assignment of valid defined fields. If `status` is defined in the schema, Mongoose allows you to assign to it unless explicitly excluded. Passing the entire `req.body` to the model initialization makes the application vulnerable.
**Prevention:** Always manually destructure allowed fields from `req.body` (e.g., `const { name, email, subject, message } = req.body;`) before passing them to the model, preventing unintended assignment of privileged or restricted fields.
