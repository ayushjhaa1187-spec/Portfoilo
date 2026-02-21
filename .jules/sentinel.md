# Sentinel's Journal

## 2025-02-17 - Missing Auth on Sensitive Endpoint
**Vulnerability:** The `POST /api/projects` endpoint was completely public and allowed anyone to write to the database.
**Learning:** Comments like `// TODO: Add Auth` are not functional security controls. Always verify access controls in code, not comments.
**Prevention:** Use a middleware by default on all write routes, or use a framework that enforces auth by default.
