# QAIG Website

Design source for the QAIG (Quantum AI Global) marketing website and Customer Portal. Every page is a `.dc.html` design component rendered in the browser by a small React-based runtime (`support.js`). There is no build step and no package install.

## Run locally

Pages load shared components (navbar, footer, enquiry modal, templates) with `fetch`, so they must be served over HTTP. Opening them from `file://` will not work.

```sh
cd source
python3 -m http.server 8000
```

Then open <http://localhost:8000/Home%20Page%20Design.dc.html>. You need an internet connection because React loads from unpkg.

To host the site, upload the contents of `source/` to any static host. Do not rename page files: routes in `qaig-nav-data.js` use these exact filenames.

## Repository layout

```
source/
  *.dc.html          Pages and shared components
  qaig-*.js          Shared data and behaviour scripts
  support.js         dc-runtime (generated, do not edit)
  _ds/               "QAIG Instrument" design system bundle (CSS, JS, tokens)
  assets/            Images, logos, PDFs used by the pages
  docs/              Content audits, QA reports and the source brochures in docs/src/
  PROJECT-RULES.md   Mandatory rules for editing pages and global components
```

### Pages

| Area | Files |
|---|---|
| Marketing | Home Page Design, Products, Company page, Our IPs, Resources v2, Work With Us, Discuss Your Requirement |
| Products | Chec-Q AI, Q-Sleeve, QuRNG, Q-Forte, Q-Cluster, Q-Cluster Mini, QNTSim, QNTSim Mini, QubitIQ, EPS-QKD, Q-Memory, Quantum Repeater, Q-Biosensor, Quantum Gravimeter, Rydberg Sensor, Laser |
| Legal | Privacy Policy, Terms of Service, Cookie Policy, Sitemap |
| Portal (app screens, no marketing navbar/footer) | Customer Portal, Portal States |
| Reference | System States |

### Shared components

Mounted with `<dc-import name="...">`. See `PROJECT-RULES.md` for exact mount snippets and props.

- `QAIG Global Navbar`, `QAIG Global Footer`: locked, single source of truth for every page.
- `QAIG Global CTA`, `QAIG Enquiry Modal`: final CTA band and the enquiry popup (also mounted inline on Discuss Your Requirement).
- `QAIG Product Page`, `QAIG Mini Page`, `QAIG Legal Page`: templates for product, Mini product and legal pages.

### Data and behaviour scripts

| File | Contents |
|---|---|
| `qaig-nav-data.js` | Routes, product taxonomy and order, nav and footer links. All page destinations live here. |
| `qaig-product-data.js` | Product page content, including Mini subscription plans. |
| `qaig-content-data.js` | IP portfolio and certificates, publications, News & Updates, upcoming events. |
| `qaig-legal-data.js` | Privacy, Terms and Cookies copy (DRAFT pending legal review). |
| `qaig-transition.js` | Page transition sweep and enquiry-link interception (`QAIG_GO`). Loaded by every page. |
| `qaig-product-ill.js`, `qaig-hero-ill.js`, `qaig-motifs.js`, `qaig-spectrum.js`, `qaig-mini-3d.js` | Illustrations and visual motifs. |
| `qaig-cursor.js`, `qaig-scroll-affordance.js`, `qaig-viewport.js` | Cursor, scroll hints and viewport helpers. |

## Editing rules

Read `source/PROJECT-RULES.md` before changing anything. In short:

- Never redesign or duplicate the navbar or footer; change them only when explicitly asked.
- Product category order: Post-Quantum Cryptography, Quantum Information Sciences, Quantum Networking, Quantum Sensing, Quantum Lasers.
- Derive product lists and links from `qaig-nav-data.js`; never hard-code page filenames for nav or footer links.
- Navbar height is 85px; sticky offsets use 85.

### Editorial conventions

- British English spelling (organisation, optimise, fibre, licence as noun, programme, catalogue).
- Title Case for headings, buttons, tabs and card titles; sentence case for paragraphs, descriptions and form help text.
- No serial comma. Mono label separators use " · "; no em dashes in body copy.
- Official names unchanged: Q-Forte, Chec-Q AI, QuRNG, Q-Sleeve, Q-Cluster, QNTSim, EPS-QKD, Q-Memory, ApeX-Pro.
- Body text 16px minimum; mono labels 12.5px minimum.

## Known gaps

- **Subscription prices are placeholders** (Q-Cluster Mini ₹3,000 / ₹7,500, cloud ₹5,000 / ₹12,000; QNTSim Mini ₹2,500 / ₹6,000, cloud ₹4,000 / ₹10,000). Only GPU allowance and qubit ceilings come from the backend; the rest are assumptions. Edit in `qaig-product-data.js`.
- Mission, Vision, CEO quote and hero headline are official copy but read as generic; consider a rewrite with QAIG.
- Company page "7 Technology Areas" differs from the five product domains. Confirm the intended count.
- IP 03 "Input Laser Control Box" is listed as "Patent Granted" on the IP sheet but its certificate is a Design Registration (No. 460524-001). The site says "Design Registered"; confirm.
- Author list for "Experimental Realization of Quantum Memory and EPS-QKD" (IEEE ATS 2024) is unverified.
- `/videos/Companyppt.mp4` and the company brochure/presentation PDFs still need adding to the host or `assets/pdfs`.
- Forms (enquiry, Work With Us) confirm client-side only; wire them to a backend.
- Legal copy is a draft pending legal review.
