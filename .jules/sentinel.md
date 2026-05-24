## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.

## 2024-05-24 - [HTML Injection in Email Templates]
**Vulnerability:** User input from the contact form was directly interpolated into the Resend email HTML body without escaping, allowing HTML injection.
**Learning:** Even if data is not rendered on a webpage, interpolating it directly into an email HTML body exposes the recipient (often the admin) to HTML injection, phishing, or tracking pixel attacks.
**Prevention:** Always HTML-escape user inputs before interpolating them into email templates, just as you would for web pages.
