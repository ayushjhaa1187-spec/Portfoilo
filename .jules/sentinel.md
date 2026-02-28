## 2024-05-20 - Missing Authentication on Admin Endpoint
**Vulnerability:** The `POST /api/projects` endpoint in `portfolio/server/routes/projects.js` was completely unauthenticated and public. Anyone could create projects.
**Learning:** In REST APIs built without a central framework routing guard, each route must explicitly enforce authentication. The "TODO: Add Auth" comment indicates it was a known but deferred issue.
**Prevention:** Implement an `auth.js` middleware to validate an `x-api-key` header against a secure environment variable (`ADMIN_API_KEY`) using `crypto.timingSafeEqual` to prevent timing attacks. Apply this middleware to all admin-only routes.
