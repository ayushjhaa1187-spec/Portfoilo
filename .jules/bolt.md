## 2024-05-24 - React useMemo array optimization
**Learning:** In Next.js App router apps, mapping through filtering operations (like `projects.filter(...)`) in the component body runs on every render, recreating array instances.
**Action:** Move static data arrays (like categories) outside the component definition entirely. Wrap filtering operations that depend on state in `React.useMemo` to skip unnecessary array recreations when unrelated state changes.
