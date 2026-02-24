# Palette's Journal

## 2025-02-20 - Initial Setup
**Learning:** Establishing a clean baseline is crucial for effective UX work. Even small linting errors can mask potential issues or break build pipelines, hindering the verification of accessibility improvements.
**Action:** Always run lint/build checks *before* starting any visual or accessibility work to ensure a stable foundation.

## 2025-02-20 - Navigation Accessibility
**Learning:** Adding `aria-current` and clear visual indicators for the active page significantly improves navigation for screen reader users and sighted users alike. It provides context ("Where am I?") that is often missing in single-page apps.
**Action:** Ensure all navigation components in future projects utilize `usePathname` (or equivalent) to programmatically set accessibility attributes for the active state.
