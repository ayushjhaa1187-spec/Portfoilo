## 2025-04-14 - FeaturedProjects Memoization
**Learning:** Arrays created inline inside functional components (like filter categories) are recreated on every render, causing memory overhead. Filtering operations inside components are O(n) recalculations that run on every render if not memoized, which can be detrimental especially if the underlying dataset grows.
**Action:** Extract static arrays outside the component body. Use React.useMemo for derived arrays (like filtered lists) that depend on state, so the O(n) operation only recalculates when dependencies change.
