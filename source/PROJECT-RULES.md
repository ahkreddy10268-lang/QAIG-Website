# QAIG project rules

## Mandatory QAIG Global Component Rule

The approved QAIG Global Navbar and QAIG Global Footer are finalized, locked, reusable global components and are the single source of truth for every website page.

Whenever creating, editing, extending or redesigning any page in this project, reuse these existing components exactly as approved.

Never generate, redraw, replace, duplicate or independently redesign the navbar or footer. Never create page-specific variations of their layout, typography, colors, spacing, structure or interactions.

Do not reintroduce the removed utility bar above the navbar.

Use the canonical shared product taxonomy and maintain the approved category order:

1. Post-Quantum Cryptography
2. Quantum Information Sciences
3. Quantum Networking
4. Quantum Sensing
5. Quantum Lasers

Keep the Q-Forte stack hierarchy, product ordering and R&D labels consistent across the mega menu, product navigation and footer.

Changes to these global components are permitted only when explicitly requested. If a page-level request appears to conflict with this rule, preserve the canonical components and apply the requested changes only to the page content unless explicit permission is given to modify the global components.

## Canonical components (registry)

| Component | File | Mount on a page |
|---|---|---|
| QAIG / Global Navbar | `QAIG Global Navbar.dc.html` | `<dc-import name="QAIG Global Navbar" current="Products" hint-size="100%,84px" style="position:sticky;top:0;z-index:50;display:block"></dc-import>` |
| QAIG / Global Footer | `QAIG Global Footer.dc.html` | `<dc-import name="QAIG Global Footer" after-cta="true" hint-size="100%,760px"></dc-import>` |
| Shared navigation data | `qaig-nav-data.js` (`window.QAIG_NAV`) | read through a synchronous loader, `qaigData()`, in page logic |

- Navbar props: `current` (Home, Products, Resources, Company or empty) marks the active item; `enquiryHref` sets the Discuss Your Requirement destination.
- Footer prop: `afterCta` is true when the page shows the "Have a quantum technology requirement?" band directly above the footer, which changes only the top spacing.
- The CTA band is page content and stays on the page. Everything from the link grid down is the global footer.
- Customer Portal and Portal States are app screens and do not use the marketing navbar or footer.

## Shared data rules

- Category order, category labels, product names, order within each category, the Q-Forte stack (Chec-Q AI, Q-Sleeve, QuRNG) and R&D flags live only in `qaig-nav-data.js`.
- R&D products: QubitIQ, Quantum Repeater, Quantum Gravimeter, Rydberg Sensor.
- Stack count label is `01 STACK · 03 PRODUCTS`. Other categories show their listed product count, R&D entries included, Q-Forte excluded.
- Product name is "Chec-Q AI", never "ChecQ-AI". Category name is "Quantum Information Sciences", never "Simulation & Algorithms".
- Pages must derive any category or product list from `qaig-nav-data.js` instead of hard-coding it.
- Page destinations live only in `qaig-nav-data.js` (`routes`, `productHref`, `companyHref`, resource `href`). Navbar, footer and pages read links from there; never hard-code a page filename for a nav or footer link.
- Every page loads `qaig-transition.js` in its helmet (the navbar and footer also load it). Internal `.dc.html` links get the "Quantum Light Sweep" transition automatically (immediate navigation; on arrival one cyan sweep crosses the content area below the navbar; content is never hidden); enquiry links use a slightly stronger sweep.QAIG_GO(href)` for button navigation.
- Enquiry: `routes.enquiry` is `Discuss Your Requirement.dc.html`. The navbar mounts `QAIG Enquiry Modal.dc.html`, which registers `window.QAIG_ENQUIRE`; `qaig-transition.js` turns every enquiry link or `QAIG_GO(enquiryHref)` into the blurred-backdrop popup (reads `?product=`, `?domains=`, `?interest=`, `?plan=`, `?resource=`). The page mounts the same component with `inline="true"`.
- Legal pages (Privacy Policy, Terms of Service, Cookie Policy, Sitemap; the Accessibility page was removed) share `QAIG Legal Page.dc.html` (prop `doc`); copy lives in `qaig-legal-data.js` and is a DRAFT pending legal review.
- Body text minimum 16px, mono labels minimum 12.5px.
- Resources v2 opens a specific chapter with `?page=research`, `?page=downloads` or `?page=news`.
- `Products.dc.html` is the Product Directory (five domain sections, per-domain stacking cards). Deep links: `#pqc`, `#qis`, `#net`, `#sen`, `#lsr` for domains, `#p-<product-slug>` for cards (e.g. `#p-chec-q-ai`). Every "All Products" control routes there; the homepage never expands the full catalogue.
- Product `does`/`when` copy lives on each item in `qaig-nav-data.js`. Product concept illustrations are shared via `qaig-product-ill.js` (`window.QAIG_PILL(React, title, reducedMotion)`).
- Casing: Title Case for all visible text, including headings, nav, buttons, labels, paragraphs, descriptions, form messages, placeholders, alt text and legal copy. Minor words (a, an, the, and, but, or, nor, for, so, yet, as, at, by, in, of, off, on, per, to, up, via, vs) stay lowercase unless first or last. Never alter official names (Q-Forte, Chec-Q AI, QuRNG, QNTSim, ApeX-Pro, etc.) or acronyms. Navbar height is 85px including its border; sticky offsets must use 85.
- Resources dropdown content (Research & Publications, Downloads, News & Updates) and the footer Resources column both come from the same data.
