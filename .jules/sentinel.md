# Sentinel's Journal

## 2025-02-17 - Unprotected POST Endpoint
**Vulnerability:** The `POST /api/projects` endpoint was publicly accessible, allowing anyone to create projects without authentication.
**Learning:** Even if a route is marked as "TODO: Add Auth", it must be protected or disabled before deployment.
**Prevention:** Implement a default-deny policy or use a linter that flags unprotected state-changing routes.
