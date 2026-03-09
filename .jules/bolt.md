## 2024-05-24 - Mongoose List Endpoint Optimization
**Learning:** For Mongoose list endpoints, when `.lean()` cannot be used due to reliance on virtual fields (like `id`), the query footprint can still be massively reduced. By heavily relying on `.select()` to exclude large text fields (such as `-content` or `-fullDescription`), we avoid pulling heavy unneeded string data into Node memory for list views.
**Action:** Always verify if large text fields in Mongoose models can be excluded using `.select()` when fetching lists, especially when `.lean()` is not an option due to virtuals.
