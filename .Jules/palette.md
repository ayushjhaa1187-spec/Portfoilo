## 2025-02-18 - Duplicate Navigation Elements
**Learning:** Next.js App Router layouts (`layout.tsx`) persist across routes. Rendering global components like Navbar/Footer in BOTH `layout.tsx` and `page.tsx` causes duplicate elements in the DOM, which breaks accessibility (duplicate IDs/roles) and strict locator tests.
**Action:** Always verify global components are ONLY in `layout.tsx` for the root layout, not in individual pages unless they are page-specific variants.
