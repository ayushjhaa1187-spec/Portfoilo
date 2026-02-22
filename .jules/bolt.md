## 2026-02-22 - Frontend Bypassing Backend
**Learning:** The frontend (`portfolio/client`) currently relies on hardcoded mock data for Projects and Blog pages, completely bypassing the existing backend API routes (`portfolio/server`).
**Action:** When working on frontend tasks, verify if API integration is intended or if mocks should be used. When optimizing backend, rely on direct API measurements (like curl or scripts) rather than frontend metrics.
