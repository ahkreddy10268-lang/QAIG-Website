# Design Review — October 2026 pass

Visual critique (seven dimensions) and creative-direction review of the screens changed in this pass. Brand reference: QAIG Instrument design system. Measurements from code unless marked est.

## Screens reviewed
All Products hero (new Portfolio Spectrum), Home Technology Explorer (stacking cards), Company Fig. 01, Work With Us, System States, Global Footer, Customer Portal (filters, orders), Q-Cluster / QNTSim Mini pricing.

## Ratings
| Dimension | Rating | Note |
|---|---|---|
| Visual hierarchy | Pass | One primary per section kept on every new screen. |
| Brand consistency | Minor issue | Contact email still inconsistent (info@ in footer, hello@ in navbar Company panel). |
| Composition | Pass | Footer rhythm unified (14px title gap, 5px link padding, 28px group gap, 32/32 bottom bar). |
| Typography | Minor issue | Some legacy data strings still use mid-sentence Title Case ("Applies Quantum Sensing to…"). |
| Colour | Pass | Cyan reserved for signal; amber only for R&D; red only for 500. |
| Affordance | Pass | Spectrum has keyboard (arrows/Enter), prev/next buttons and a visible "View Product" action, so it is not pointer-only. |
| Density | Pass | Portal filter collapses five chips into one control with counts. |

## Fix list
**P1**
- Confirm the single contact email and replace the other everywhere (footer, navbar Company panel, CTA, System States).
- Legal copy is still a draft pending review.

**P2**
- QNTSim Mini has no product photo; the card falls back to a text-only layout. Supply a device render.
- Monthly plan prices for the Mini editions come from the live catalogue API in the repo and are not hard-coded; only the ₹30,000 hardware price and the 90-day bundled software period are static. Confirm whether monthly prices should be shown.
- Sentence-case pass on `does`/`when` strings in `qaig-nav-data.js`.

**P3**
- Spectrum labels for non-focused peaks only render above 1000px; consider short codes on tablet.
- Retire `qaig-domain-field.js` (no longer loaded).

## Ten highest-impact next steps
1. Single contact email.
2. QNTSim Mini render.
3. Real open roles feed for Careers (the form currently confirms client-side only).
4. Wire Work With Us form to the enquiry backend.
5. Map System States to real routes (404 handler, maintenance flag).
6. Sentence-case data sweep.
7. Final legal copy.
8. Product photos for R&D items or a consistent "concept only" label.
9. Usability test of the Spectrum on touch devices.
10. Performance budget check on pages with several canvases (Home, Products).
