## 2024-05-12 - Missing ARIA Labels on Icon-Only Buttons
**Learning:** Icon-only interactive elements (close buttons, chat toggles) frequently lack accessible names, making them invisible to screen readers in the React components.
**Action:** Always add descriptive `aria-label` attributes to any `<button>` or `<input>` that relies solely on icons for visual meaning.
