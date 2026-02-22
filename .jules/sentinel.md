## 2025-02-17 - [CRITICAL] Unauthenticated Admin Endpoint
**Vulnerability:** The `POST /api/projects` endpoint was publicly accessible, allowing anyone to create projects.
**Learning:** Backend routes were missing authentication middleware, likely due to a "TODO" comment being overlooked.
**Prevention:** Implement a default-deny policy for state-changing routes and use automated scanners or checklists to catch "TODO: Add Auth" comments.
