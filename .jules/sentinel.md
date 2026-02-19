## 2026-02-19 - Unprotected Admin Endpoint

**Vulnerability:** The `POST /api/projects` endpoint was publicly accessible without any authentication, allowing anyone to create projects and potentially deface the application or fill the database with spam.

**Learning:** Sensitive endpoints that modify data (especially "admin" actions like creating projects) must always have authentication and authorization checks. Even if the frontend code doesn't use the endpoint yet, its existence exposes the application to risk.

**Prevention:** I implemented a simple API Key authentication middleware (`auth.js`) that checks for the `x-api-key` header. This ensures that only requests with the correct key (stored in `ADMIN_API_KEY` environment variable) can access the protected route. This adds a critical layer of defense.
