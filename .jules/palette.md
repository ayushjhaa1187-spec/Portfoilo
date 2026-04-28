## 2024-05-15 - Contact Form Accessibility Pattern
**Learning:** Custom styled forms in Next.js/React without native form validation components often neglect `htmlFor`/`id` linking and explicit screen-reader accessibility for "required" states, rendering them hard to navigate for assistive technologies despite looking visually complete.
**Action:** Always link `<label>` and `<input>` using `htmlFor` and `id`, and provide both visual (`*`) and semantic (`aria-required` or `<span className="sr-only">`) indications for required fields when building custom form layouts.
