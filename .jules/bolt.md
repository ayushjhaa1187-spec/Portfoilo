## 2026-03-25 - Next.js App Router Duplicate Layout Rendering
**Learning:** In Next.js App Router, components like Navbar and Footer rendered in `layout.tsx` are applied globally. Duplicating them in individual `page.tsx` files causes double rendering, unnecessary DOM nodes, and significantly increased React hydration time.
**Action:** Always verify that `page.tsx` files only contain page-specific content and rely on `layout.tsx` for global UI elements like navigation and footers.
