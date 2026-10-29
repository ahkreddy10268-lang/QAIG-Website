# QAIG Product Content & Asset Inventory
Status keys: Passed · Provisional — Awaiting Confirmation · Not Verified

## Sources reviewed (text extracted)
- QuRNG.pdf, QNTSim.pdf, Q_Cluster.pdf, Q-CLUSTER MINI BROCHURE.pdf, EPS QKD.pdf, Quantum Memory.pdf, Rydberg Sensor Flyer.pdf, Quantum Sensing and Atomic Physics Experimentation Kit.pdf, ECDL Brochure.pdf
- Not yet read: COMPANY BROCHURE April 21.pdf, ECDL Brochure with Qulabs.pdf, EPS_QKD.pdf (duplicate?), Q-Cluster Industry Brochure_Aug25.pdf, Quantum Memory Experimentation Kit.pdf, “Quantum Foundation Series” for web.pdf, AGBA Q_Intel 01_Dec_2025.pdf, QAIG Investor Pitch Deck APR 21.pptx, QForte_ppt_17-04-26.pptx, qforte-script.docx

## Product → source
| Product | Domain | Source | Status | Commercial model |
|---|---|---|---|---|
| Chec-Q AI | PQC (Q-Forte) | QForte ppt/script (not yet read) | Provisional | Q-Forte tailored, enquiry |
| Q-Sleeve | PQC (Q-Forte) | QForte ppt/script (not yet read) | Provisional | Q-Forte tailored, enquiry |
| QuRNG | PQC (Q-Forte) | QuRNG.pdf | Passed | Q-Forte tailored, enquiry |
| Q-Cluster | QIS | Q_Cluster.pdf | Passed | Subscription — [PRICE TO CONFIRM] |
| Q-Cluster Mini | QIS (Q-Cluster offering) | Q-CLUSTER MINI BROCHURE.pdf | Passed | [PRICE TO CONFIRM] |
| QubitIQ (R&D) | QIS | AGBA Q_Intel (relationship unconfirmed) | Provisional | Enquiry |
| EPS-QKD | Networking | EPS QKD.pdf | Passed | Enquiry |
| Q-Memory | Networking | Quantum Memory.pdf | Passed | Enquiry |
| QNTSim | Networking | QNTSim.pdf | Passed | Subscription — [PRICE TO CONFIRM] |
| Quantum Repeater (R&D) | Networking | none found | Provisional | Enquiry |
| Q-Biosensor | Sensing | none product-specific; Sensing Kit PDF is a different product? | Provisional | Enquiry |
| Quantum Gravimeter (R&D) | Sensing | none found | Provisional | Enquiry |
| Rydberg Sensor (R&D) | Sensing | Rydberg Sensor Flyer.pdf ("RF Scanner", tabletop prototype) | Passed | Enquiry |
| ECDL | Lasers | ECDL Brochure.pdf (ApeX-Pro, ApeX-Ctrl) | Passed | Enquiry |

## Conflicts to confirm — PROVISIONAL — CONFIRM WITH QAIG
1. Is the "Quantum Sensing and Atomic Physics Experimentation Kit" the Q-Biosensor, a separate product, or part of the Sensing domain? It is not in the 13-product taxonomy.
2. QubitIQ vs Qubit Intelligence (AGBA Q_Intel deck): same product or different?
3. Q-Forte step order (Discover → Protect → Randomise) is a storytelling order only.
4. Q-Cluster and QNTSim plan names, prices, billing intervals, purchase routes: none found in sources.
5. Q-Forte shared account destination: no route exists; Q-Forte actions go to the Enquiry page.
6. Paragraph casing: the master prompt asks for sentence case in paragraphs, but last round's request capitalised nouns. Which should win?

## Assets (" Pictures" folder)
| Product | File | Use | Verified |
|---|---|---|---|
| EPS-QKD | edited box images/…/EPS Box.png → assets/products/photos/eps-qkd.jpg | Directory card "Product Render" view | Filename only |
| Q-Memory | …/Q Memory front.png → q-memory.jpg | Directory card render | Yes (label reads "Quantum Memory Demonstrator") |
| ECDL | …/QAIG ECDL Laser Head new.png → ecdl-head.jpg | Directory card render | Yes |
| Q-Cluster | …/Q-Cluster.png | Not used (logo art, not hardware) | — |
| Q-Cluster Mini | Q-Cluster mini.png | Reserved for the Q-Cluster page | Not viewed |
| ApeX-Pro / ApeX-Ctrl | Latest Exp-kits-images/ECDL image | Reserved for the ECDL page | Not viewed |
| Sensing kit | Q sensing front.png | Not used until the product mapping is confirmed (see conflict 1) | — |
Personal folders (DUBAI TRIP, GOLKONDA, Sanjay Photos, LAB PHOTOS) were skipped.

## Phase C (pages built)
| Page | Route | Section 04 | Primary CTA → destination | Status |
|---|---|---|---|---|
| Q-Forte stack | Q-Forte.dc.html (#chec-q-ai, #q-sleeve, #qurng) | Stack story + Built Around Your Requirements | Enquiry ?product=Q-Forte | Provisional (no Q-Forte account route exists) |
| Q-Cluster | Q-Cluster.dc.html | Education / Enterprise / Mini offerings | Enquiry ?product=…&plan=… | Provisional (prices and billing: [PRICE TO CONFIRM]) |
| ECDL | Laser.dc.html (kept) | Existing categories + explorer | Existing enquiry | Resources band added |
- The Enquiry form doesn't read ?product= / ?resource= / ?plan= yet, so the links carry context but nothing is prefilled.
- Product content for detail pages: qaig-product-data.js. Hero concepts: qaig-hero-ill.js (q-forte, q-cluster).
- Logo folder "Logo Assets/Product Logos (Organized)" is not attached, so existing assets/products logos are used.

## Phase D (pages built)
All 13 product pages run on QAIG Product Page.dc.html with content from qaig-product-data.js and their own hero concept in qaig-hero-ill.js:
Q-Forte, Chec-Q AI, Q-Sleeve, QuRNG, Q-Cluster, QubitIQ (R&D), EPS-QKD, Q-Memory, QNTSim, Quantum Repeater (R&D), Q-Biosensor, Quantum Gravimeter (R&D), Rydberg Sensor (R&D). ECDL stays on Laser.dc.html.
- Naming consolidated per QAIG: Quantum Biosensor, Magnetocardiograph and the Sensing Kit → Q-Biosensor; Qubit-IQ and Qubit Intelligence → QubitIQ.
- PROVISIONAL: Quantum Repeater and Quantum Gravimeter copy (no product document); QNTSim Mini scope; all Q-Cluster and QNTSim prices.
- Enquiry page now reads ?product=, ?plan= and ?resource=: it preselects the product in the brief and pre-writes the objective line.

## Product_Content.pdf (now reviewed)
Used for Q-Memory, EPS-QKD, Quantum Repeater, Quantum Gravimeter, Rydberg Sensor and Q-Biosensor (Magnetocardiograph); the ECDL section matches the Laser page.
- Not published: bracketed values in the source ([> 25 %], [> 90 %], [Sub-kHz to 100s of GHz]), "μGal level", "Storage time up to 100 μs".
- Conflict: this file describes EPS-QKD and Q-Memory as deployable systems; the brochures describe academic kits. Pages mention both.
- Conflict: Repeater, Gravimeter and Rydberg read as products here but stay R&D per the taxonomy.
- Q-Biosensor: source mentions "Cardiac Diagnostics". Pages say "research and clinical decision support" and make no diagnostic or regulatory claims.

## Redesign round (art direction per product)
| Product | Hero layout | Input → Process → Outcome | Section 02 | Section 03 | Section 04 |
|---|---|---|---|---|---|
| Q-Forte | Split | Estate → Discover/Protect/Randomise → Assured Security | Signal track | Bento | Stack + custom enquiry |
| Chec-Q AI | Split | Assets → Assessment → Exposure Map | Stage journey | Capability map | Applications |
| Q-Sleeve | Stacked | Open → Encryption → Protected Channel | Before/after compare | Layers | Applications |
| QuRNG | Reverse | Quantum Process → Measurement → Random Bits | Signal track | Bento | Applications |
| Q-Cluster | Split | Circuit → Simulation → Distribution | Ideal vs noise compare | Layers | Pricing + Mini |
| QubitIQ | Split | Problem → AI Recommendation → Circuit | Stage journey | Split list | R&D panel |
| EPS-QKD | Stacked | Photon Pair → Measurements → Shared Key | Signal track | Split with render | Applications |
| Q-Memory | Stacked | Light In → Stored → Released | Signal track | Bento with render | Applications |
| QNTSim | Reverse | Design → Simulation → Behaviour | Stage journey | Capability map | Pricing + Mini |
| Quantum Repeater | Stacked | Distance → Segment/Swap → Link | Direct vs repeater compare | Layers | R&D panel |
| Q-Biosensor | Reverse | Cardiac Field → Atomic Sensing → Field Map | Signal track | Capability map | Applications |
| Quantum Gravimeter | Split | Cold Atoms → Interferometry → Gravity | Stage journey | Split list | R&D panel |
| Rydberg Sensor | Split | RF Field → Atom Response → Readout | Signal track | Bento | R&D panel |
- Approved by QAIG: no academic-kit framing; EPS-QKD and Q-Memory are commercial systems. Removed from product data, nav data, Homepage card copy and Customer Portal.
- Published highlights from Product_Content.pdf: Q-Memory "Storage time up to 100 μs", Gravimeter "μGal level", Repeater "standard telecom fibre". Bracketed values still not published.
- Product icons from "Product Logos (Organized)/Black BG" → assets/products/icons. Gravimeter has no icon; it uses the Quantum Sensing icon.
