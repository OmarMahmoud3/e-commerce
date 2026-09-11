## Building a Fully Responsive Web Project

A responsive interface adapts its layout, content, controls, and media to the available space. The goal is not to make a desktop page smaller. It is to keep every important task usable on a phone, tablet, laptop, and large monitor without forcing users to zoom or scroll horizontally.

This guide uses plain CSS examples that work well in a React and Vite project, but the techniques apply to any web stack.

## 1. Start with the viewport and a predictable foundation

Add the viewport declaration to the document head. Without it, mobile browsers may render the page in a virtual desktop viewport.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

Begin with a small reset and global sizing rules. `border-box` makes declared widths easier to reason about because padding and borders are included in the element's size.

```css
*,
*::before,
*::after {
	box-sizing: border-box;
}

html {
	font-size: 100%;
	scroll-behavior: smooth;
}

body {
	margin: 0;
	min-width: 320px;
	color: #17202a;
	background: #f7f8fa;
	font-family: system-ui, sans-serif;
	line-height: 1.5;
}

img,
svg,
video {
	display: block;
	max-width: 100%;
}

button,
input,
select,
textarea {
	font: inherit;
}
```

Avoid setting a fixed width on `body` or a page wrapper. A useful content wrapper instead uses a maximum width and fluid side padding:

```css
.container {
	width: min(100% - 2rem, 72rem);
	margin-inline: auto;
}
```

## 2. Design mobile first

Write the base CSS for the narrowest practical screen, then add rules as the viewport grows. This keeps the default experience simple and avoids maintaining a large desktop layout that must be overridden repeatedly.

```css
.site-header {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding-block: 1rem;
}

.navigation {
	display: none;
}

@media (min-width: 48rem) {
	.site-header {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.navigation {
		display: flex;
		gap: 1.25rem;
	}
}
```

Choose breakpoints when the content needs more room, not because a device has a particular screen width. Common starting points are `40rem` for a two-column tablet layout and `64rem` for a full desktop layout, but the browser should decide when the design needs to change.

## 3. Use flexible grids instead of fixed columns

CSS Grid is a strong default for product lists, dashboards, galleries, and page sections. `minmax()` lets the browser fit as many columns as possible while ensuring each item remains usable.

```css
.product-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
	gap: clamp(1rem, 2vw, 1.5rem);
}
```

This starts with one column on a phone and adds columns when there is enough room. It usually needs no breakpoint at all.

Use Flexbox when the relationship is primarily one-dimensional, such as a toolbar or navigation row:

```css
.toolbar {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.75rem;
}

.toolbar__search {
	flex: 1 1 16rem;
	min-width: 0;
}
```

`flex-wrap: wrap` is important. It lets controls move to another line instead of overflowing the viewport.

## 4. Make images and media fluid

Images should shrink within their parent and preserve their aspect ratio. Give every meaningful image useful alternative text in the markup.

```css
.product-card__image {
	width: 100%;
	aspect-ratio: 4 / 3;
	object-fit: cover;
	border-radius: 0.5rem;
}
```

Use `object-fit: cover` when a consistent frame matters. Use `contain` when the entire object must remain visible, such as a product with a transparent background.

For large or art-directed images, provide appropriate sources rather than downloading a desktop image on every device:

```html
<picture>
	<source media="(min-width: 64rem)" srcset="/images/product-large.webp" />
	<img
		src="/images/product-small.webp"
		alt="Black running shoes"
		width="640"
		height="480"
		loading="lazy"
	/>
</picture>
```

Explicit dimensions reserve space and reduce layout shifts. Do not lazy-load the main above-the-fold image unless there is a specific performance reason.

## 5. Use responsive typography

Typography should remain readable without becoming oversized on wide screens. Use relative units for text and `clamp()` for headings that should grow gradually.

```css
:root {
	--text-base: 1rem;
	--heading-xl: clamp(2rem, 5vw, 4rem);
	--space-section: clamp(2.5rem, 7vw, 6rem);
}

body {
	font-size: var(--text-base);
}

h1 {
	max-width: 18ch;
	margin-block: 0 1rem;
	font-size: var(--heading-xl);
	line-height: 1.05;
}

.page-section {
	padding-block: var(--space-section);
}
```

Keep paragraphs at a comfortable measure, usually around 45 to 75 characters per line:

```css
.prose {
	max-width: 65ch;
}
```

Do not use viewport units alone for font sizes. A value such as `font-size: 5vw` can become too small on phones or enormous on large monitors. `clamp(minimum, preferred, maximum)` provides guardrails.

## 6. Adapt layout, not only dimensions

Responsive work includes deciding what belongs in the primary flow at each size:

- Keep the main action visible and easy to reach on small screens.
- Stack form fields when side-by-side fields become cramped.
- Move secondary filters into a disclosure or drawer, but keep them keyboard and screen-reader accessible.
- Let navigation wrap or collapse into a real button with an accessible expanded state.
- Avoid hiding important content only because the screen is narrow.

A common two-column pattern can be written without hard-coding column widths:

```css
.content-layout {
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
}

@media (min-width: 52rem) {
	.content-layout {
		grid-template-columns: minmax(0, 2fr) minmax(16rem, 1fr);
		align-items: start;
	}
}
```

The `minmax(0, ...)` rule prevents long content from forcing a grid track wider than the viewport.

## 7. Make controls usable at every size

Touch targets should have enough space around them. A practical minimum is about `2.75rem` for primary interactive controls, with visible focus styles.

```css
.icon-button,
.button {
	min-height: 2.75rem;
	padding: 0.625rem 1rem;
}

:where(a, button, input, select, textarea):focus-visible {
	outline: 0.1875rem solid #175cd3;
	outline-offset: 0.1875rem;
}
```

Do not rely on hover to expose essential information because touch devices do not have hover. Make labels, errors, and state changes available in the normal interaction flow.

Respect motion preferences for transitions and animated menus:

```css
@media (prefers-reduced-motion: reduce) {
	*,
	*::before,
	*::after {
		scroll-behavior: auto !important;
		transition-duration: 0.01ms !important;
		animation-duration: 0.01ms !important;
	}
}
```

## 8. Test from phones to large monitors

Test behavior, not just whether the page looks attractive at one width.

1. Start around `320px` wide and check that there is no horizontal scrolling.
2. Test common phone widths in portrait and landscape orientation.
3. Resize slowly and watch for awkward intermediate states, overflowing controls, and headings that wrap unexpectedly.
4. Check tablet widths where a layout may switch from stacked to multi-column.
5. Test at least one large monitor. Make sure content does not stretch into unreadably long lines.
6. Use browser device emulation, then test on a real touch device when possible.
7. Zoom the page to 200% and confirm that content remains available and usable.
8. Test keyboard navigation, focus order, screen-reader labels, and reduced motion.
9. Inspect slow-network behavior and confirm images do not cause visible layout shifts.

Useful browser checks include responsive mode, the accessibility tree, computed styles, and the rendered page at several widths. Automated tools can catch contrast and semantic issues, but they do not replace trying the main tasks yourself.

## Common responsive patterns

### Responsive card grid

```css
.card-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
	gap: 1rem;
}
```

### Full-width media inside a centered container

```css
.section {
	width: min(100% - 2rem, 72rem);
	margin-inline: auto;
}
```

### Sticky action bar on small screens

```css
.checkout-actions {
	position: sticky;
	bottom: 0;
	padding: 1rem;
	background: rgb(247 248 250 / 0.94);
	border-top: 1px solid #d9dee7;
	backdrop-filter: blur(0.5rem);
}
```

Use sticky elements carefully: they must not cover form errors, focused fields, or important content. Add enough bottom spacing to the page for the bar when necessary.

## Pitfalls to avoid

- **Fixed page widths:** `width: 1200px` creates overflow on smaller screens. Use `max-width`, percentages, `min()`, and `max()` instead.
- **Too many device-specific breakpoints:** Breakpoints should respond to layout pressure, not to every phone model.
- **Desktop-first overrides:** A large desktop rule set often creates contradictory CSS. Start with the simple layout and enhance it.
- **Images with no constraints:** An image without `max-width: 100%` can be wider than its parent.
- **Unbreakable content:** Long URLs, IDs, and user names can overflow. Consider `overflow-wrap: anywhere` for bounded text fields.
- **Viewport-height traps:** `height: 100vh` can hide content behind mobile browser chrome. Prefer `min-height: 100dvh` when dynamic viewport units are appropriate.
- **Tiny touch controls:** Small links and icon buttons are difficult to use on a phone even when the layout technically fits.
- **Hover-only interactions:** Essential actions and explanations must work with touch and keyboard input.
- **Hiding overflow to conceal defects:** `overflow: hidden` may hide the symptom while making content unreachable. Find the element causing the overflow.
- **Uncontrolled line length:** A full-width text block can be technically responsive but tiring to read on a large screen.

## A practical definition of done

A responsive project is ready when its key user journeys work without horizontal scrolling at narrow widths, the layout changes naturally at intermediate widths, text remains readable on large screens, images load without breaking the layout, controls work with touch and keyboard, and the interface remains understandable with zoom, reduced motion, and assistive technology. Responsive design is an ongoing quality check: every new component should be tested at its smallest supported width before it is considered complete.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
