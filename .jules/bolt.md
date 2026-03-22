
## 2024-05-18 - Prevent Double Rendering of Layout Components
**Learning:** In Next.js App Router, global components like Navbar and Footer should only be rendered in the root `layout.tsx`. Rendering them again in individual `page.tsx` files causes double rendering, unnecessary DOM nodes, and increased React hydration time.
**Action:** Always check `layout.tsx` before adding structural components to `page.tsx` to avoid duplicating them and hurting frontend performance.
