## 2024-05-24 - [Missing Rate Limiting & Input Validation on Contact API]
**Vulnerability:** The POST /api/contact endpoint allows mass assignment of fields (like `status`) and lacks any input validation, leading to potential NoSQL injection, spam DoS via long payloads, and unintended state changes. It also echos the saved document.
**Learning:** Even simple endpoints require explicit destructing and strict type/length validation. Without them, MongoDB will accept arbitrary complex objects that could be parsed as operations or consume excessive memory. E.g., `status: "replied"` in request body bypassing initial read state.
**Prevention:** Always destructure expected fields explicitly from `req.body`, validate string formats/lengths, and never echo raw Mongoose documents in API responses.
