# BOLT'S JOURNAL - CRITICAL LEARNINGS ONLY

## 2026-02-15 - List View Payload Optimization
**Learning:** Returning full content fields (like HTML/Markdown `content` or `fullDescription`) in list view endpoints causes massive payload bloat.
**Action:** Always use `.select('-largeField')` in Mongoose queries for list endpoints. Only fetch full content in detail views.
