# QAIG Instrument: how to build with it

Quantum AI Global's design language treats the UI as a precision lab instrument. There's one signal colour (Quantum Cyan) on a blue-black field, structure comes from hairlines, and anything measured is set in mono. **It's dark only. There's no light theme.**

## Setup
- No provider is needed. Components read CSS variables from `styles.css`.
- **Put every design's root on the canvas.** Without it the page renders white and the outline and ghost buttons become invisible:
  ```jsx
  <div className="min-h-screen bg-canvas font-sans text-foreground">…</div>
  ```
- `Tooltip` already wraps its own `TooltipProvider`. Wrap a group of tooltips in one `TooltipProvider` only to share a delay.

## Styling idiom: Tailwind utilities on semantic tokens
Style with Tailwind classes that name tokens. **Never use hex values, `rgba()`, palette colours (`blue-500`) or arbitrary values like `text-[13px]`.** The CSS is precompiled, so only the standard scale and the classes below exist.

| Family | Use |
|---|---|
| Surfaces | `bg-canvas` (page) → `bg-surface` (cards, panels) → `bg-surface-2` (raised rows, controls) → `bg-surface-3` |
| Lines | `border-border` (default hairline), `border-border-light` (hover, outline), `border-border-strong`, `border-border-control` (form fields) |
| Text | `text-foreground` (headings), `text-foreground-2` (labels), `text-muted-foreground` (body), `text-faint` (captions, mono labels) |
| Signal | `text-brand` / `bg-brand`, `bg-brand-soft` (icon wells), `text-brand-ink` (text on a cyan fill, never white) |
| Status | `text-success`, `text-warning`, `text-danger`, always paired with a word |
| Type | `text-display` (home hero only), `text-h1`, `text-h2`, `text-h3`, `text-lead`, `text-base`, `text-sm`, `text-xs`, `text-2xs`. Headings are `font-semibold`, never bold. `font-mono` is for anything measured |
| Shape | `rounded-md` (buttons, inputs), `rounded-xl` (cards), `rounded-xs` (tags), `rounded-full` (dots and avatars only) |
| Elevation | `shadow-md` on card hover only, `shadow-lg` on floating layers only |

Brand classes from `styles.css`:
- `.eyebrow` is the mono cyan section label; add `.eyebrow-plain` when it's centred.
- `.tag` is a mono chip.
- `.section-shell` is the 1240px container and `.section-y` sets section padding.
- `.tnum` gives tabular figures.
- `.card-hover` lifts a card on hover.
- `.frame` adds corner brackets. Use it only on hero imagery and the closing CTA.
- `.bg-grid` and `.rule-signal` are background and divider motifs.

**Cyan is reserved** for the primary action, eyebrows, the accent phrase in a heading, and active and focus states. Use one primary `Button` per section. Don't add violet, purple gradients or extra accent colours.

## Components (`window.QAIG`)
- `Button`
  - variants: `default` (the cyan primary), `secondary`, `outline`, `ghost`, `destructive`, `link`
  - sizes: `sm`, `default`, `lg`, `icon`, `icon-sm`, `icon-lg`
  - `asChild` wraps a link
- `Badge`: variants `default`, `secondary`, `success`, `warning`, `destructive`, `outline`. It's for status and category, never an action.
- `Card` with `CardHeader`, `CardTitle`, `CardDescription`, `CardAction` (top-right slot), `CardContent` and `CardFooter`.
- `Separator`: a hairline, either `orientation="horizontal"` or `"vertical"`.
- `Tooltip`, `TooltipTrigger asChild` and `TooltipContent`. A tooltip is a supplementary label only.

Read `styles.css` for every token, and each component's `.prompt.md` for its props.

## Example
```jsx
<section className="section-shell section-y bg-canvas">
  <span className="eyebrow">Post-quantum security</span>
  <h2 className="mt-4 max-w-2xl text-h2 font-semibold text-foreground">Migrate to <span className="text-brand">quantum-safe</span> cryptography</h2>
  <div className="mt-12 grid gap-6 md:grid-cols-3">
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>Q-Forte</CardTitle>
        <CardDescription>Post-quantum cryptography toolkit.</CardDescription>
        <CardAction><Badge variant="success">Market ready</Badge></CardAction>
      </CardHeader>
      <CardFooter className="gap-3"><Button size="sm">Request demo</Button><Button size="sm" variant="ghost">Datasheet</Button></CardFooter>
    </Card>
  </div>
</section>
```

## Content rules
- Use only these company facts: founded November 2019; 75+ people across India, the US and the UAE; 15 IPs filed; 3 patents granted; 13 products; 40+ partners.
- Don't give a publication count.
- Don't present QAIG as building quantum computers. Q-Cluster is a simulation and algorithm platform.

# QAIG (qaig-instrument@2.0.0)

This design system is the published qaig-instrument React library, bundled as a single
browser global. All 14 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.QAIG`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.QAIG.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Badge } = window.QAIG;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Badge />);
```

## Tokens

450 CSS custom properties from qaig-instrument. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (111): `--color-red-400`, `--color-red-500`, `--color-cyan-400`, …
- **spacing** (7): `--tw-space-y-reverse`, `--tw-space-x-reverse`, `--frame-inset`, …
- **typography** (25): `--font-inter`, `--font-plex-mono`, `--font-sans`, …
- **radius** (6): `--radius-xs`, `--radius-xl`, `--radius-2xl`, …
- **shadow** (16): `--shadow-md`, `--shadow-lg`, `--shadow-overlay`, …
- **other** (285): `--spacing`, `--container-xs`, `--container-sm`, …

## Components

### general
- `Badge`
- `Button`
- `Card` — Card  the Instrument panel: surface, hairline border, faint top highlight.
- `CardAction`
- `CardContent`
- `CardDescription`
- `CardFooter`
- `CardHeader`
- `CardTitle`
- `Separator` — Separator  the hairline. Decorative by default (hidden from AT).
- `Tooltip`
- `TooltipContent`
- `TooltipProvider` — Tooltip  supplementary labels only never the sole carrier of essential info.
- `TooltipTrigger`
