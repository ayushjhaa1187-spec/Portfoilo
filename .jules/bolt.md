## 2024-05-24 - [Avoid Double Rendering Navbar/Footer in Next.js App Router]
**Learning:** Next.js App Router layout components (`layout.tsx`) automatically wrap the page content (`page.tsx`). Importing and rendering them in both files causes double rendering, unnecessary DOM nodes, and increased React hydration time.
**Action:** Always check `layout.tsx` before importing layout-level components like `Navbar` or `Footer` into individual page components to prevent redundant rendering.
