## 2024-03-13 - Missing Authentication on Admin Endpoint
**Vulnerability:** The `POST /api/projects` endpoint allowed unauthenticated access to create projects, representing a critical missing authentication vulnerability.
**Learning:** Admin endpoints were left exposed with only a "TODO" comment. Additionally, simple string comparison for API keys is vulnerable to timing attacks; using `crypto.timingSafeEqual` with normalized buffer lengths (via sha256) is necessary.
**Prevention:** Always implement authentication middleware before deploying admin endpoints. Use `crypto.timingSafeEqual` with hashed values for secure API key comparison to prevent timing attacks.
