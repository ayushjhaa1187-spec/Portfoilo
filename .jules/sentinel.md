# Sentinel's Journal

## 2024-05-23 - [Insecure Defaults and Forgotten TODOs]
**Vulnerability:** Found `projects` endpoint with `TODO: Add Auth` comment but left completely open for unauthenticated POST requests. Also `contact` endpoint allowed Mass Assignment of `status` field.
**Learning:** This codebase relies on TODOs for security features which are not implemented, leaving critical endpoints vulnerable. Input validation is entirely missing in initial implementation.
**Prevention:** Always check for `TODO` comments related to security (Auth, validation) and assume they are unimplemented. Verify all Mongoose models for Mass Assignment vulnerabilities (use destructuring or explicit field selection).
