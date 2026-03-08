## 2024-05-20 - Missing Authentication on Sensitive Endpoint
**Vulnerability:** The POST /api/projects endpoint allowed unauthenticated access to create new projects, potentially leading to unauthorized data modification and spam.
**Learning:** Always verify that endpoints modifying data require appropriate authentication and authorization, even if the frontend doesn't yet expose the functionality.
**Prevention:** Implement and enforce a secure authentication middleware (e.g., API key validation with timing-safe comparison) on all sensitive backend routes by default.
