## 2024-03-25 - [Missing Authentication and Mass Assignment]
**Vulnerability:** The POST `/api/projects` endpoint lacked authentication and directly passed `req.body` to the Mongoose `Project` model. Also, string comparison for API keys needs to be timing-safe.
**Learning:** Endpoints meant to be private need explicit authentication middleware. Directly using `req.body` without destructuring exposes the application to mass assignment vulnerabilities where users can modify fields they shouldn't. Regular string equality checks for secrets can lead to timing attacks.
**Prevention:** Use an authentication middleware for all protected routes, employ `crypto.timingSafeEqual` with normalized buffer lengths for comparing secrets, and always explicitly destructure inputs before passing them to the database model.
## 2024-06-05 - [Email HTML Injection and Error Leakage]
**Vulnerability:** The POST `/api/contact` endpoint interpolated user inputs directly into the HTML payload for Resend without sanitization, allowing HTML injection. Additionally, it exposed the raw `error.message` from Resend to the client.
**Learning:** User inputs must always be escaped before being embedded in HTML strings, even in email payloads, to prevent injection attacks. External API error details should not be leaked to the client to avoid exposing internal infrastructure details.
**Prevention:** Use a dedicated HTML escaping function before interpolation and return generic error messages for internal failures.
