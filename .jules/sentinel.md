# Sentinel's Journal

## 2025-02-18 - Missing Authentication on Admin Endpoints
**Vulnerability:** The project creation endpoint (`POST /api/projects`) was accessible publicly without any authentication, despite being marked with a TODO comment.
**Learning:** Development placeholders (TODOs) for security features are dangerous if code is deployed or exposed before they are implemented. "Security later" often becomes "security never".
**Prevention:** Implement basic authentication (even if temporary/simple like an API key) *before* committing the endpoint code, rather than leaving it for a future task.
