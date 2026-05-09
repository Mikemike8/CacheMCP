# Cache 42 Design System

This document describes the visual system used by the Cache 42 Downtown Express
frontend. The implementation is intentionally lightweight: Next.js app router,
plain CSS, static export, and local assets.

## Brand Direction

Cache 42 should feel polished, nightlife-oriented, and food-focused. The visual
language uses a high-contrast black foundation, gold calls to action, red section
headings, and large food/interior photography.

The first viewport must always communicate the actual restaurant experience:
brand mark, navigation, strong hero image, and a clear page title or value
message.

## CSS Token Source

Global design variables live in `frontend/app/globals.css` under `:root`.
Do not introduce new one-off colors, font sizes, spacing values, or component
sizes until checking the existing variables first.

Core token groups:

- Brand colors: `--color-gold`, `--color-red`, `--color-black`, `--color-white`
- Typography: `--font-body`, `--font-display`, `--text-*`, `--leading-*`
- Spacing: `--space-*`, `--section-padding-*`, `--section-gap`
- Layout: `--container-*`, `--header-height`, `--hero-*`
- Components: `--button-height`, `--field-height`, card and form widths
- Effects: `--focus-ring`, `--transition-fast`

## Typography

The site uses fluid type with `clamp()` so text scales smoothly across phone,
tablet, laptop, and desktop widths.

- Hero titles use `--text-page-title` or `--text-landing-title`.
- Section headings use `--text-section`.
- Body copy uses `--text-base` with `--leading-copy`.
- UI labels and navigation use `--text-sm`, uppercase, and `--tracking-ui`.

Avoid viewport-only font sizing. Any new type size should be a token or a
component-specific `clamp()` that follows the existing scale.

## Color Usage

- Black is the primary surface for navigation, footer, cards, and contrast
  sections.
- Gold is reserved for CTAs, active navigation, section titles on black, and
  focus rings.
- Red is reserved for major section headings on white backgrounds.
- White is used for text on black surfaces and page backgrounds.

Use sufficient contrast for interactive states. Focus styles must remain visible
on both black and white surfaces.

## Responsive Rules

Primary breakpoints are expressed in CSS media queries:

- `1100px`: compress desktop grids and reduce horizontal spacing.
- `900px`: wrap navigation into two rows and collapse split layouts.
- `760px`: move cards, menus, forms, and galleries to one column.
- `520px`: tighten typography, buttons, and form controls for small phones.

Responsive layout expectations:

- Navigation remains usable on mobile via a horizontally scrollable nav row.
- Hero type uses fluid sizing and stays inside the viewport.
- Repeating grids become one column on mobile.
- Forms become single-column below tablet widths.
- Images keep stable aspect ratios to prevent layout shift.

## Components

Shared components live in `frontend/app/components/SiteChrome.tsx`.

- `SiteHeader`: global logo, nav links, and book-table CTA.
- `PageHero`: shared interior page hero pattern.
- `SiteFooter`: global footer with logo, social links, location, hours, contact.
- `SocialLinks`: reusable social icon row.
- `HoursList`: reusable hours list for footer and contact card.

Add shared UI here when a pattern appears on more than one page.

## Page Patterns

- `/`: editorial landing page with hero, intro, story/events split, Instagram
  grid, and footer.
- `/menu`: alternating white/black menu sections with food imagery.
- `/about`: hero, long-form restaurant story, and video preview.
- `/events`: hero, upcoming event cards, and social follow note.
- `/contact`: contact form, info card, map, and footer.
- `/book-a-table`: reservation form page.

## Assets

Assets are stored locally in `frontend/public/assets`. Use local assets rather
than temporary Figma MCP URLs. Photo assets are JPEG where possible to reduce
deploy size; transparent logos and small icons remain PNG.

When adding new assets:

1. Use descriptive filenames.
2. Prefer JPEG for photos and PNG/SVG for transparent marks or icons.
3. Keep file sizes reasonable before committing.
4. Reference assets through the `assets` object in `SiteChrome.tsx` when shared.

## Accessibility

- Preserve semantic headings in page order.
- Keep buttons and links keyboard focusable.
- Use `aria-label` for icon-only social links and form controls where needed.
- Decorative images should use empty alt text.
- Content images should have clear alt text.

## Deployment

The app is configured for Netlify static hosting:

- `frontend/next.config.mjs` uses `output: "export"`.
- Root `netlify.toml` sets base directory to `frontend`.
- Netlify publishes `frontend/out`.

Run `npm run build` inside `frontend/` before deployment checks.
