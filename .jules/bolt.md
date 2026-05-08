## 2024-05-08 - Use .lean() for read-only Mongoose queries
**Learning:** Mongoose instantiates full document models when executing queries like `.find()` or `.findOne()`. For read-only operations where only JSON serialization is needed (such as API GET endpoints), this creates significant overhead.
**Action:** Append `.lean()` to all read-only Mongoose queries to return plain JavaScript objects, improving API response times and reducing memory usage.
