/* QAIG shared navigation data. Single source of truth for the Global Navbar, Global Footer and any page that lists products.
   Category order is fixed: PQC, Quantum Information Sciences, Quantum Networking, Quantum Sensing, Quantum Lasers. */
window.QAIG_NAV = {
  /* Product items carry does/when copy used by the Products directory.
     Page routes. Change a destination here and every navbar, footer and page link follows. */
  routes: {
    home: "Home Page Design.dc.html",
    products: "Products.dc.html",
    laser: "Laser.dc.html",
    enquiry: "Discuss Your Requirement.dc.html",
    privacy: "Privacy Policy.dc.html",
    terms: "Terms of Service.dc.html",
    cookies: "Cookie Policy.dc.html",
    sitemap: "Sitemap.dc.html",
    portal: "Customer Portal.dc.html",
    resources: "Resources v2.dc.html",
    about: "Company page.dc.html",
    workWithUs: "Work With Us.dc.html",
    systemStates: "System States.dc.html",
    ips: "Our IPs.dc.html"
  },
  /* Product detail pages, one per product. Content lives in qaig-product-data.js. */
  productHref: { "ECDL": "Laser.dc.html", "Q-Forte": "Q-Forte.dc.html", "Chec-Q AI": "Chec-Q AI.dc.html", "Q-Sleeve": "Q-Sleeve.dc.html", "QuRNG": "QuRNG.dc.html", "QubitIQ": "QubitIQ.dc.html", "EPS-QKD": "EPS-QKD.dc.html", "Q-Memory": "Q-Memory.dc.html", "QNTSim": "QNTSim.dc.html", "Quantum Repeater": "Quantum Repeater.dc.html", "Q-Biosensor": "Q-Biosensor.dc.html", "Quantum Gravimeter": "Quantum Gravimeter.dc.html", "Rydberg Sensor": "Rydberg Sensor.dc.html", "Q-Cluster": "Q-Cluster.dc.html", "Q-Cluster Mini": "Q-Cluster Mini.dc.html", "QNTSim Mini": "QNTSim Mini.dc.html" },
  /* Company labels mirror the Company page's sticky section nav (same names, same order). Each About item deep-links to its section. */
  companyHref: { "About": "Company page.dc.html", "Overview": "Company page.dc.html#overview", "In the Lab": "Company page.dc.html#technology", "Leadership": "Company page.dc.html#leadership", "Team": "Company page.dc.html#team", "Advisory": "Company page.dc.html#advisory", "Recognition": "Resources v2.dc.html?page=downloads#dl-achievements", "Work With Us": "Work With Us.dc.html", "Our IPs": "Our IPs.dc.html", "Careers": "Work With Us.dc.html?page=careers", "Collaborations": "Work With Us.dc.html?page=collaborations", "Contact Us": "Discuss Your Requirement.dc.html" },
  cats: [
    { code: "PQC", short: "PQC", fig: "Lattice Key Exchange", label: "Post-Quantum Cryptography", icon: "shield", labs: ["Threat", "Protect", "Channel", "Verify"],
      desc: "Find, Fix and Harden Cryptography Against Quantum Attacks.", cta: "Explore Q-Forte →",
      stack: { name: "Q-Forte", full: "Quantum Assured InfoSec Platform", icon: "assets/products/QFORTE_ICON.png",
        /* Storytelling order, not a mandatory technical sequence. PROVISIONAL — CONFIRM WITH QAIG */
        steps: [["Discover", "Chec-Q AI", "Understand Cryptographic Exposure"], ["Protect", "Q-Sleeve", "Secure Communications in Transit"], ["Randomise", "QuRNG", "Quantum-Generated Randomness"]] },
      items: [
        { title: "Chec-Q AI", blurb: "Cryptographic Risk Manager", thumb: "CHECQ_WN", does: "Identifies Where Cryptography Is Used Across Your Systems and Flags What Is Vulnerable to Quantum Attack.", when: "You Need an Inventory of Cryptographic Risk Before Planning a Move to Quantum-Safe Algorithms." },
        { title: "Q-Sleeve", blurb: "Quantum-Safe VPN & Security", thumb: "QSLEEVE_WN", does: "A VPN and Security Layer That Protects Data in Transit With Quantum-Safe Encryption.", when: "Data Moving Between Sites or Users Has to Stay Confidential Against Future Quantum Attacks." },
        { title: "QuRNG", blurb: "Quantum Random Number Generation", thumb: "QuRNG_WN", does: "Generates Random Numbers From a Quantum Process for Keys and Cryptographic Operations.", when: "Your Keys and Protocols Depend on Randomness That Cannot Be Predicted." } ] },
    { code: "QIS", short: "Information Sciences", fig: "A Three-Qubit Circuit", label: "Quantum Information Sciences", icon: "gates", labs: ["Model", "Simulate", "Control", "Apply"],
      desc: "Design, Simulate and Optimise Quantum Algorithms.", cta: "Explore Information Sciences →",
      items: [
        { title: "Q-Cluster", blurb: "Quantum Simulation, Local or Cloud", thumb: "QCLUSTER_WN", mini: { title: "Q-Cluster Mini", blurb: "Your Own Quantum Compute Unit", img: "assets/products/mini/latest/cut/q-cluster-mini-0.png" }, does: "Runs Quantum Simulations on a Local Machine or in the Cloud.", when: "You Want to Design and Test Quantum Algorithms Without Access to Quantum Hardware." },
        { title: "QubitIQ", blurb: "AI-Driven Algorithms & Logic", thumb: "QUBITIQ_WN", rnd: true, does: "Applies AI to the Design of Quantum Algorithms and Logic." } ] },
    { code: "NET", short: "Networking", fig: "Entangled Link With Memory", label: "Quantum Networking", icon: "tube", labs: ["Node", "Link", "Node", "Network"],
      desc: "Simulate, Distribute and Store Quantum Information.", cta: "Explore Quantum Networking →",
      items: [
        { title: "EPS-QKD", blurb: "Entanglement-Based QKD System", thumb: "EPSQKD_WN", photo: "assets/products/photos/eps-qkd.jpg", does: "Distributes Encryption Keys Using Entangled Photon Pairs, so Their Security Rests on Quantum Mechanics.", when: "Links Between Sites Must Stay Secure Against Classical and Quantum Attacks." },
        { title: "Q-Memory", blurb: "Quantum Memory Hardware", thumb: "QMEMORY_WN", photo: "assets/products/photos/q-memory.jpg", does: "Quantum Memory Hardware That Holds Quantum Information for Later Retrieval.", when: "A Quantum Network Has to Hold States While Links Between Nodes Are Established." },
        { title: "QNTSim", blurb: "Quantum Network Simulator", thumb: "QNTSIM_WN", mini: { title: "QNTSim Mini", blurb: "Local Quantum Network Simulator", img: "assets/products/mini/latest/cut/qntsim-mini-0.png" }, does: "Simulates Quantum Networks, Including Their Nodes, Links and Protocols, in Software.", when: "You Are Planning a Quantum Network and Want to Evaluate Designs Before Building Hardware." },
        { title: "Quantum Repeater", blurb: "Long-Distance Signal Modules", rnd: true, does: "Modules Intended to Extend Quantum Signals Over Long Distances." } ] },
    { code: "SEN", short: "Sensing", fig: "Atom in a Field", label: "Quantum Sensing", icon: "meter", labs: ["Field", "Sensor", "Measure", "Signal"],
      desc: "Measure Weak Fields With Atomic Sensors at Room Temperature.", cta: "Explore Quantum Sensing →",
      items: [
        { title: "Q-Biosensor", blurb: "Biological Molecular Sensing", thumb: "QSENSING_WN", does: "Applies Quantum Sensing to the Detection of Biological Molecules.", when: "Molecular Signals Need More Sensitivity Than Conventional Sensors Provide." },
        { title: "Quantum Gravimeter", blurb: "Precision Gravity Mapping", rnd: true, does: "An Atom-Based Instrument for Precision Gravity Mapping." },
        { title: "Rydberg Sensor", blurb: "RF & Microwave Field Sensing", rnd: true, does: "Uses Highly Excited Rydberg Atoms to Sense RF and Microwave Fields." } ] },
    { code: "LSR", short: "Lasers", fig: "External Cavity", label: "Quantum Lasers", icon: "diode", labs: ["Source", "Beam", "Control", "Apply"],
      desc: "Narrow-Linewidth Light for Precision Quantum Experiments.", cta: "Explore Quantum Lasers →",
      items: [ { title: "ECDL", blurb: "External Cavity Diode Laser", thumb: "ECDL_WN", photo: "assets/products/photos/ecdl-head.jpg", does: "An External Cavity Diode Laser Producing Tunable, Narrow-Linewidth Light.", when: "Atomic Physics or Quantum Optics Experiments Need Light at a Precise Wavelength." } ] }
  ],
  /* Mini hardware offerings sit under their parent product (item.mini). They are not counted in category product counts. */
  achievementsHref: "Resources v2.dc.html?page=downloads#dl-achievements",
  resources: [
    { label: "Research & Publications", description: "Papers and Conference Proceedings From Our Research Team", href: "Resources v2.dc.html?page=research" },
    { label: "Downloads", description: "Brochures, Product Documents and Downloadable Resources", href: "Resources v2.dc.html?page=downloads" },
    { label: "News & Updates", description: "Company, Research and Product Updates", href: "Resources v2.dc.html?page=news" }
  ],
  company: [
    { heading: "About", items: [["Overview", "Our Mission & Roadmap", 1], ["In the Lab", "Our Labs & Offices"], ["Leadership", "Founder & CEO"], ["Team", "Meet Our Team"], ["Advisory", "Advisory Board"]] },
    { heading: "Work With Us", items: [["Careers", "Join Our Distributed Team"], ["Collaborations", "Partnership Opportunities"], ["Contact Us", "Get in Touch With Sales"]] }
  ],
  footerCompany: ["Overview", "In the Lab", "Leadership", "Team", "Advisory", "Careers", "Collaborations", "Contact Us"]
};

/* Deep links into the Product Directory. domainHref("PQC") -> Products page, PQC section. productPageHref("Chec-Q AI") -> that product's card. */
window.QAIG_NAV.slug = function (t) { return "p-" + String(t).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""); };
window.QAIG_NAV.domainHref = function (code) { return this.routes.products + "#" + String(code).toLowerCase(); };
window.QAIG_NAV.productPageHref = function (title) { return this.productHref[title] || (this.routes.products + "#" + this.slug(title)); };

/* ---- Form submissions ---------------------------------------------------------------
   Every website form (enquiry popup, Discuss Your Requirement, Work With Us careers and
   collaborations) sends through QAIG_SUBMIT. Nothing is sent until an endpoint is set.

   To connect a service, set forms.endpoint and forms.provider:
     provider "json"    -> POST application/json to the endpoint (Formspree, Getform, Basin,
                           a Zapier or Make webhook, or your own API). Expects a 2xx reply.
     provider "hubspot" -> HubSpot Forms API, endpoint
                           https://api.hsforms.com/submissions/v3/integration/submit/<portalId>/<formGuid>
   Until then forms do not show a success message: they keep what the visitor typed and offer
   to send it by email (forms.fallbackEmail) or copy it. See README "Forms". */
window.QAIG_NAV.forms = {
  endpoint: "",          // e.g. "https://formspree.io/f/xxxxxxx" (pending confirmation)
  provider: "json",
  fallbackEmail: { enquiry: "info@thequantum.ai", careers: "info@thequantum.ai", collaborations: "info@thequantum.ai" },
};
window.QAIG_SUBMIT = function (form, fields) {
  var cfg = (window.QAIG_NAV && window.QAIG_NAV.forms) || {};
  var payload = { form: form, page: location.pathname, submittedAt: new Date().toISOString(), fields: fields };
  if (!cfg.endpoint) return Promise.resolve({ ok: false, status: "not-connected" });
  var body = cfg.provider === "hubspot"
    ? JSON.stringify({ fields: Object.keys(fields).map(function (k) { return { name: k, value: Array.isArray(fields[k]) ? fields[k].join("; ") : String(fields[k] == null ? "" : fields[k]) }; }), context: { pageUri: location.href, pageName: document.title } })
    : JSON.stringify(payload);
  return fetch(cfg.endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: body })
    .then(function (r) { return { ok: r.ok, status: r.ok ? "sent" : "failed" }; })
    .catch(function () { return { ok: false, status: "failed" }; });
};
/* Plain-text summary of a submission, used for the email and copy fallbacks. */
window.QAIG_FORM_TEXT = function (fields) {
  return Object.keys(fields).filter(function (k) { var v = fields[k]; return v !== "" && v != null && !(Array.isArray(v) && !v.length); })
    .map(function (k) { var v = fields[k]; return k + ": " + (Array.isArray(v) ? v.join(", ") : v); }).join("\n");
};
window.QAIG_MAILTO = function (form, subject, fields) {
  var cfg = (window.QAIG_NAV && window.QAIG_NAV.forms) || {}, to = (cfg.fallbackEmail || {})[form] || "info@thequantum.ai";
  return "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(window.QAIG_FORM_TEXT(fields));
};
