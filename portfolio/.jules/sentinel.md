## 2024-05-15 - Mass Assignment in Mongoose
**Vulnerability:** Users could overwrite protected fields (like `status`) by passing them in the request body because the entire `req.body` object was passed to the Mongoose model constructor (`new Contact(req.body)`).
**Learning:** Mongoose schema defaults do not prevent mass assignment of defined fields. If a field is defined in the schema, it can be set during creation if passed in the object.
**Prevention:** Always manually destructure and pick allowed fields from `req.body` before passing them to models to create or update documents.
