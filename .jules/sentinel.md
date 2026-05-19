## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.

## 2024-05-24 - Mass Assignment Vulnerability in Contact Form
**Vulnerability:** Contact form submission route blindly passed `req.body` directly to the Mongoose `Contact` model constructor (`new Contact(req.body)`). This allowed malicious users to override protected fields like `status` and `createdAt` through Mass Assignment.
**Learning:** Directly passing client-provided payload objects to database model constructors exposes all schema fields to manipulation, bypassing intended default values and application logic for protected fields.
**Prevention:** Always destructure or explicitly pick only the expected, allowed fields from the request payload before passing them to model constructors.
