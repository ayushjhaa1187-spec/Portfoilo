## 2025-02-18 - [Vulnerability: Public TODOs in Production Code]
**Vulnerability:** The `POST /api/projects` endpoint was exposed with a `TODO: Add Auth` comment, allowing unauthorized content creation.
**Learning:** Security-critical features (like authentication) should never be deferred via TODO comments in accessible endpoints.
**Prevention:** Implement secure defaults (fail-closed) and block access to endpoints until authentication is fully implemented.
