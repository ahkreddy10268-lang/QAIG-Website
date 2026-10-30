# QAIG Website: Handoff (final build, 30 Oct 2026)

Two folders. All old versions have been removed; everything here is the latest.

## Quick start
1. Unzip the folder.
2. Open `site/index.html` in any modern browser (double-click; no server or install needed).
3. It redirects to the Home page. Every navbar, footer, button and card link routes to a page inside `site/`.

The first open needs internet (React loads from unpkg). To host, upload the contents of `site/` as-is to any static host; `index.html` is the entry point.

## site/ (open directly, no server needed)
Each page is self-contained, with the navbar, footer, CTA, enquiry popup and product/legal templates inlined. Keep `assets/`, `_ds/` and `qaig-*.js` next to the pages; images and data load from them. Do not rename page files: routes in `qaig-nav-data.js` use these exact filenames.

### Pages (30)
- Chec-Q AI.dc.html
- Company page.dc.html
- Cookie Policy.dc.html
- Customer Portal.dc.html
- Discuss Your Requirement.dc.html
- EPS-QKD.dc.html
- Home Page Design.dc.html
- Laser.dc.html
- Our IPs.dc.html
- Portal States.dc.html
- Privacy Policy.dc.html
- Products.dc.html
- Q-Biosensor.dc.html
- Q-Cluster.dc.html
- Q-Cluster Mini.dc.html
- Q-Forte.dc.html
- Q-Memory.dc.html
- Q-Sleeve.dc.html
- QNTSim.dc.html
- QNTSim Mini.dc.html
- QuRNG.dc.html
- Quantum Gravimeter.dc.html
- Quantum Repeater.dc.html
- QubitIQ.dc.html
- Resources v2.dc.html
- Rydberg Sensor.dc.html
- Sitemap.dc.html
- System States.dc.html
- Terms of Service.dc.html
- Work With Us.dc.html

## source/ (editable)
The `.dc.html` sources, shared components (`QAIG Global Navbar`, `Footer`, `CTA`, `Enquiry Modal`, `Product Page`, `Legal Page`), data files and `PROJECT-RULES.md`. Edit here and regenerate `site/`.

### Data files
- `qaig-nav-data.js`: routes, product taxonomy, nav and footer links (all page destinations).
- `qaig-content-data.js`: IP portfolio and certificate details, publications, News & Updates achievements, upcoming events (empty until confirmed).
- `qaig-legal-data.js`: Privacy, Terms, Cookies copy (DRAFT pending legal review).

## Changes in this build (30 Oct 2026)
- **site/ rebuilt:** all 30 pages re-bundled from current source (Q-Cluster Mini and QNTSim Mini now included), with the latest `qaig-*.js`, `assets/` and `docs/`.
- **Work With Us:** rebuilt as a two-door hero leading into separate Careers and Collaborations journeys, each with its own sticky in-page nav (Products style). Collaboration Areas cards have "Add to Proposal" with selection state and product-domain links. Path card photos load from correct paths.
- **Home:** image overlay badges removed from Achievements cards; category badge sits below the image.
- **Resources, Downloads:** Fold 03 · Videos removed; hero illustration kept.
- **Visual-critique fixes (P1–P3):** label contrast raised to `--muted`; step list hidden below 1024px in favour of a compact progress bar; Edit buttons 44px tall; decorative cyan numbers desaturated; hard-coded glow colours replaced with tokens.
- **Title Case everywhere:** all visible text (headings, paragraphs, legal copy, form messages, placeholders, alt text) across every page and data file. Rule recorded in `source/PROJECT-RULES.md`.
- **Console errors:** three fixed; no broken image requests on load.

## Changes in the 29 Oct build
- **site/ rebuilt:** all 28 pages re-bundled from the current source, plus the latest `qaig-*.js` data files and `assets/`, so `site/index.html` shows exactly the same design as `source/`.
- **Cleanup:** old versions removed (Products (Stacking Cards), Global Footer (previous)). Only current pages and shared components remain.
- **Routing:** every internal link checked to resolve inside `site/`. Fixed a stale fallback link on Laser (resources enquiry) that pointed to a removed page; it now opens Discuss Your Requirement.
- **ISO 27001 badge:** shipped at `site/assets/certifications/qaig-iso-27001-badge.png` (1416×486, used in the footer).

## Changes in the 28 Oct build
- **Company, Our IPs, All Products heroes:** breadcrumbs and eyebrow labels removed from these three heroes only (product-detail pages keep theirs). Headline and supporting copy rebalanced: Company and Products side by side, bottom-anchored; Our IPs stacked beside the dial.
- **Products:** the sticky domain bar is hidden while Browse by Domain is on screen. It fades in once Browse by Domain has scrolled above the navbar and the products begin, and hides again after the last domain. It overlays the page, so showing it causes no layout shift.
- **Resources, Downloads, Fold 02:** the product list was capped at 640px with its own scroll, independent of the dossier, so it cut off mid-heading. It now fills exactly the dossier's height as a single scroll container (stable scrollbar gutter, contained overscroll, bottom fade that clears at the end of the list). All 13 products and 5 domain headings are reachable.
- **Enquiry popup:** Preferred Demo Mode has no default; the visitor picks one (click again to clear). Unanswered shows as "Not specified" on the confirmation.
- **Customer Portal:** "Back to Website" is now a bordered button with a globe icon in the desktop header, the sign-in screen and the mobile header ("Website"), and an outline button in the mobile menu.

## Changes in the 26 Oct build
- **Navbar:** Resources dropdown copy now reads "Brochures, product dossiers, videos and research publications for every product line." (White papers removed.)
- **Technology Explorer (Home) and Products card stacks:** a single wheel notch or trackpad swipe moves one card, only while the pointer is over the cards; scrolling elsewhere passes straight to the next section. Cards auto-advance every 6.5s with a progress timer, pausing on hover. Skip to Products buttons removed.
- **Resources:** sticky section navigator with scrollspy (matches Company). White Papers section removed.
- **"Talk to Our Engineering Team"** removed from every final CTA. "Film" renamed "Video" site-wide.
- **Our IPs:** new hero dial illustration (15 IPs by area, 3 certified highlighted, titles on hover).
- **Customer Portal:** back button on every inner screen (desktop and mobile headers) and on the forgot/reset/verify screens.
- **Q-Cluster Mini / QNTSim Mini:** "Explore Subscription Plans" next to Buy, opening a plans panel (On Your Mini / Cloud Access, Monthly / Quarterly / Annual, Learner / Researcher / Custom). Q-Cluster includes a full feature comparison from the backend feature list. All plan data lives in `qaig-product-data.js`.

## Earlier changes
- New **Our IPs** page (navbar, mobile menu, search and footer link). Certificates: `assets/ips/certificate-*.jpg`, original PDF `assets/pdfs/qaig-patent-certificates.pdf`.
- Research & Publications lists the four verified papers; News & Updates shows five achievements plus an upcoming-events placeholder / empty state.
- Downloads company covers use `assets/resources/*.jpg`.
- Accessibility page removed (page, route, footer link, sitemap entry).
- Corner-bracket frames removed site-wide; Products section nav matches Company.
- Customer Portal search, filters and dropdowns match the outline button (10px radius, 44px height).

## Editorial conventions (applied 26 Oct 2026)
- British English spelling (organisation, optimise, fibre, vapour, licence as noun, programme, catalogue).
- Title Case for all visible text (updated 30 Oct; supersedes the earlier sentence-case rule). Minor words stay lowercase unless first or last.
- No serial comma. Separators in mono labels and captions use " · " (e.g. "Fig. 01 · …", "Fold 02 · Products"); em dashes are not used in body copy.
- Official names unchanged: Q-Forte, Chec-Q AI, QuRNG, Q-Sleeve, Q-Cluster, QNTSim, EPS-QKD, Q-Memory, ApeX-Pro.
- Body text 16px minimum; mono labels 12.5px minimum.

## Known gaps
- **Work With Us copy:** Hiring Process, How It Works and FAQ text need QAIG review for accuracy and commitments before going live.
- **Deployment:** to publish on GitHub Pages, push to https://github.com/ahkreddy10268-lang/QAIG-Website.git and set Pages to serve the `site/` folder (or copy its contents to the repo root / `docs/`).
- **Subscription prices are placeholders** (Q-Cluster Mini ₹3,000 / ₹7,500, cloud ₹5,000 / ₹12,000; QNTSim Mini ₹2,500 / ₹6,000, cloud ₹4,000 / ₹10,000). Studio, QML, QEC, QPU and Projects values per plan are assumptions; only GPU allowance and qubit ceilings come from the backend screens. Edit in `qaig-product-data.js`.
- Mission and Vision statements, the CEO quote and the hero headline were left as written (official copy). They read as generic; consider a rewrite with QAIG.
- Company page "7 Technology Areas" (renamed from "7 Technology Domains") differs from the five product domains. Confirm the intended count.
- Removed the unsupported claim "India’s first deep-tech quantum stack" from the team intro.
- IP 03 "Input Laser Control Box" is listed as "Patent Granted" on the IP sheet, but its certificate is a Certificate of Registration of Design (No. 460524-001). The site labels it "Design Registered"; confirm the wording.
- Author list for "Experimental Realization of Quantum Memory and EPS-QKD" (IEEE ATS 2024) not verified; shown as the QAIG research team.
- `/videos/Companyppt.mp4` and the company brochure/presentation PDFs still need adding to the host / `assets/pdfs`.
- Forms (enquiry, Work With Us) confirm client-side only; wire to the backend.
