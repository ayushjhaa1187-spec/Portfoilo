## 2024-03-05 - Missing Authentication on Sensitive Endpoint
**Vulnerability:** The `POST /api/projects` endpoint was accessible publicly without requiring any authentication, allowing anyone to create new project entries in the database.
**Learning:** The endpoint had a comment `Private (TODO: Add Auth)` indicating that the intent was to secure it, but the implementation was missing.
**Prevention:** Always implement the intended authentication logic when creating the endpoint instead of leaving a TODO comment. If an endpoint must be created before authentication is ready, it should not be exposed to the public. For securing endpoints with an API key, use `crypto.timingSafeEqual` after normalizing the key lengths (e.g. by using SHA-256) to prevent timing attacks and algorithmic DoS.
