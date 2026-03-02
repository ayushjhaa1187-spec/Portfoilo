## 2025-03-02 - Missing Authentication on Admin Endpoint
**Vulnerability:** The POST /api/projects endpoint allowed unauthenticated, public access to create new projects in the portfolio application. The endpoint contained a `(TODO: Add Auth)` comment but was never secured.
**Learning:** Development placeholders like `TODO` comments for critical security controls (like authentication) often get forgotten before shipping to production.
**Prevention:** Always implement placeholder security controls (even if it's just a hardcoded block or throwing a 501 Not Implemented) rather than leaving an endpoint open while waiting to implement full authentication.
