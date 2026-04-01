
## 2024-04-01 - Prevent Mass Assignment and Information Leak in API Endpoints
**Vulnerability:** The `/api/contact` endpoint accepted all properties via `req.body` and returned the complete saved Mongoose document to the user.
**Learning:** Passing `req.body` directly to a Mongoose model can allow malicious users to overwrite protected fields like user roles or statuses (e.g. `status` or `createdAt`). Returning the raw document exposes internal DB metadata.
**Prevention:** Always explicitly destructure incoming requests (e.g., `const { name, email, subject, message } = req.body;`) and define explicit success responses without leaking raw database objects.
