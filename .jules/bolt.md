## 2024-05-24 - Mongoose Read Performance
**Learning:** Mongoose `find()` queries without `.lean()` return full document instances, adding significant memory and CPU overhead for read-only operations. Also, fetching large text fields (like blog content or full project descriptions) in list endpoints drastically increases payload size.
**Action:** Always use `.lean()` for read-only endpoints, and use `.select()` to exclude large, unnecessary fields in list views.
