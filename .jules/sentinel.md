## 2025-02-12 - [Critical] Unprotected Admin Endpoint
**Vulnerability:** The `POST /api/projects` endpoint allowed unauthorized creation of projects, with a visible "TODO: Add Auth" comment.
**Learning:** Development placeholders like "TODO" in sensitive routes are often overlooked, leading to critical security gaps in production.
**Prevention:** Implement "fail-secure" defaults where endpoints are private by default, and use pre-commit hooks or linters to flag "TODO" comments in security-critical paths.
