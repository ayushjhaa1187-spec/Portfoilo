## 2024-04-03 - Mass Assignment in Contact API
**Vulnerability:** The POST `/api/contact` route passed `req.body` directly to the `Contact` model and echoed the saved document back to the client. This allowed mass assignment (overwriting internal fields like `status` or `createdAt`) and information disclosure (leaking internal Mongoose fields).
**Learning:** Always destructure `req.body` explicitly to prevent malicious actors from injecting unexpected fields, and never return raw database documents in API responses if they contain sensitive or internal data.
**Prevention:** Use explicit field selection when creating models and explicitly define success response objects instead of echoing the database result.
