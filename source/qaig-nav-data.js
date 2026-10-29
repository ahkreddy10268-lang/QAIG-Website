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
    { code: "PQC", short: "PQC", fig: "Lattice key exchange", label: "Post-Quantum Cryptography", icon: "shield", labs: ["Threat", "Protect", "Channel", "Verify"],
      desc: "Find, fix and harden cryptography against quantum attacks.", cta: "Explore Q-Forte →",
      stack: { name: "Q-Forte", full: "Quantum Assured InfoSec Platform", icon: "assets/products/QFORTE_ICON.png",
        /* Storytelling order, not a mandatory technical sequence. PROVISIONAL — CONFIRM WITH QAIG */
        steps: [["Discover", "Chec-Q AI", "Understand Cryptographic Exposure"], ["Protect", "Q-Sleeve", "Secure Communications in Transit"], ["Randomise", "QuRNG", "Quantum-Generated Randomness"]] },
      items: [
        { title: "Chec-Q AI", blurb: "Cryptographic Risk Manager", thumb: "CHECQ_WN", does: "Identifies where cryptography is used across your systems and flags what is vulnerable to quantum attack.", when: "You need an inventory of cryptographic risk before planning a move to quantum-safe algorithms." },
        { title: "Q-Sleeve", blurb: "Quantum-Safe VPN & Security", thumb: "QSLEEVE_WN", does: "A VPN and security layer that protects data in transit with quantum-safe encryption.", when: "Data moving between sites or users has to stay confidential against future quantum attacks." },
        { title: "QuRNG", blurb: "Quantum Random Number Generation", thumb: "QuRNG_WN", does: "Generates random numbers from a quantum process for keys and cryptographic operations.", when: "Your keys and protocols depend on randomness that cannot be predicted." } ] },
    { code: "QIS", short: "Information Sciences", fig: "A three-qubit circuit", label: "Quantum Information Sciences", icon: "gates", labs: ["Model", "Simulate", "Control", "Apply"],
      desc: "Design, simulate and optimise quantum algorithms.", cta: "Explore Information Sciences →",
      items: [
        { title: "Q-Cluster", blurb: "Quantum Simulation, Local or Cloud", thumb: "QCLUSTER_WN", mini: { title: "Q-Cluster Mini", blurb: "Your Own Quantum Compute Unit", img: "assets/products/mini/latest/cut/q-cluster-mini-0.png" }, does: "Runs quantum simulations on a local machine or in the cloud.", when: "You want to design and test quantum algorithms without access to quantum hardware." },
        { title: "QubitIQ", blurb: "AI-Driven Algorithms & Logic", thumb: "QUBITIQ_WN", rnd: true, does: "Applies AI to the design of quantum algorithms and logic." } ] },
    { code: "NET", short: "Networking", fig: "Entangled link with memory", label: "Quantum Networking", icon: "tube", labs: ["Node", "Link", "Node", "Network"],
      desc: "Simulate, distribute and store quantum information.", cta: "Explore Quantum Networking →",
      items: [
        { title: "EPS-QKD", blurb: "Entanglement-Based QKD System", thumb: "EPSQKD_WN", photo: "assets/products/photos/eps-qkd.jpg", does: "Distributes encryption keys using entangled photon pairs, so their security rests on quantum mechanics.", when: "Links between sites must stay secure against classical and quantum attacks." },
        { title: "Q-Memory", blurb: "Quantum Memory Hardware", thumb: "QMEMORY_WN", photo: "assets/products/photos/q-memory.jpg", does: "Quantum memory hardware that holds quantum information for later retrieval.", when: "A quantum network has to hold states while links between nodes are established." },
        { title: "QNTSim", blurb: "Quantum Network Simulator", thumb: "QNTSIM_WN", mini: { title: "QNTSim Mini", blurb: "Local Quantum Network Simulator", img: "assets/products/mini/latest/cut/qntsim-mini-0.png" }, does: "Simulates quantum networks, including their nodes, links and protocols, in software.", when: "You are planning a quantum network and want to evaluate designs before building hardware." },
        { title: "Quantum Repeater", blurb: "Long-Distance Signal Modules", rnd: true, does: "Modules intended to extend quantum signals over long distances." } ] },
    { code: "SEN", short: "Sensing", fig: "Atom in a Field", label: "Quantum Sensing", icon: "meter", labs: ["Field", "Sensor", "Measure", "Signal"],
      desc: "Measure weak fields with atomic sensors at room temperature.", cta: "Explore Quantum Sensing →",
      items: [
        { title: "Q-Biosensor", blurb: "Biological Molecular Sensing", thumb: "QSENSING_WN", does: "Applies quantum sensing to the detection of biological molecules.", when: "Molecular signals need more sensitivity than conventional sensors provide." },
        { title: "Quantum Gravimeter", blurb: "Precision Gravity Mapping", rnd: true, does: "An atom-based instrument for precision gravity mapping." },
        { title: "Rydberg Sensor", blurb: "RF & Microwave Field Sensing", rnd: true, does: "Uses highly excited Rydberg atoms to sense RF and microwave fields." } ] },
    { code: "LSR", short: "Lasers", fig: "External Cavity", label: "Quantum Lasers", icon: "diode", labs: ["Source", "Beam", "Control", "Apply"],
      desc: "Narrow-linewidth light for precision quantum experiments.", cta: "Explore Quantum Lasers →",
      items: [ { title: "ECDL", blurb: "External Cavity Diode Laser", thumb: "ECDL_WN", photo: "assets/products/photos/ecdl-head.jpg", does: "An external cavity diode laser producing tunable, narrow-linewidth light.", when: "Atomic physics or quantum optics experiments need light at a precise wavelength." } ] }
  ],
  /* Mini hardware offerings sit under their parent product (item.mini). They are not counted in category product counts. */
  achievementsHref: "Resources v2.dc.html?page=downloads#dl-achievements",
  resources: [
    { label: "Research & Publications", description: "Papers and conference proceedings from our research team", href: "Resources v2.dc.html?page=research" },
    { label: "Downloads", description: "Brochures, product documents and downloadable resources", href: "Resources v2.dc.html?page=downloads" },
    { label: "News & Updates", description: "Company, research and product updates", href: "Resources v2.dc.html?page=news" }
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
