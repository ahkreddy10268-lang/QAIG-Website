/* QAIG product detail content. One entry per product page, keyed by slug. Layout lives in "QAIG Product Page.dc.html".
   Sources: QForte_ppt_17-04-26.pptx, QuRNG.pdf, Q_Cluster.pdf, Q-Cluster Industry Brochure_Aug25.pdf, Q-CLUSTER MINI BROCHURE.pdf.
   Values in [BRACKETS] are development placeholders and are never shown to visitors. */
window.QAIG_PRODUCTS = {
  "q-forte": {
    name: "Q-Forte", domain: "PQC", tag: "Quantum Assured InfoSec Platform", logo: "assets/products/QFORTE_ICON.png", status: "stack", ill: "q-forte",
    verified: "Sources: QForte deck slides 3–13, QuRNG brochure. Step order is a storytelling order. PROVISIONAL — CONFIRM WITH QAIG",
    headline: "Quantum-Safe Security, Assembled as One Stack",
    lead: "Q-Forte brings together three products that help an organisation find quantum-vulnerable cryptography, protect data in transit and add quantum-generated randomness to its security operations.",
    primary: { label: "Discuss Your Requirements", to: "enquiry" }, secondary: { label: "See the Stack", to: "#module" },
    overviewTitle: "Preparing Enterprise Security for the Quantum Era",
    overview: [
      "Much of today's encryption relies on public-key algorithms such as RSA and ECC, which a sufficiently capable quantum computer is expected to break. Organisations need to know where these algorithms are used before they can migrate.",
      "Q-Forte is a quantum security assurance suite. It pairs cryptographic vulnerability assessment with a quantum-safe VPN and quantum random number generation, so the move to Post-Quantum Cryptography can be planned and carried out with crypto-agility."
    ],
    audience: ["Enterprise Security Teams", "CISOs and Compliance Leads", "Government and Critical Infrastructure", "Financial Services"],
    steps: [
      ["Discover", "Chec-Q AI scans websites, networks, source code and certificates to build a cryptographic inventory and flag quantum-vulnerable algorithms."],
      ["Plan", "Findings feed a cryptographic bill of materials and a post-quantum migration roadmap."],
      ["Protect", "Q-Sleeve applies quantum-safe encryption to data moving across cloud, on-premises and network infrastructure."],
      ["Strengthen", "QuRNG supplies quantum-generated random numbers for keys, tokens and other cryptographic operations."]
    ],
    caps: [
      ["Cryptographic Inventory", "Discover the algorithms, protocols and certificates in use across your IT estate."],
      ["Migration Planning and Monitoring", "Turn findings into a migration roadmap, then track posture with historical scans and an audit trail."],
      ["Quantum-Safe Communication", "Protect data in transit with a VPN built to NIST post-quantum standards."],
      ["Quantum Randomness", "Draw random numbers from a quantum process without dedicated quantum hardware on site."]
    ],
    module: {
      type: "stack", title: "Three Products, One Security Journey",
      lead: "Each product can be discussed on its own. Together they cover discovery, protection and randomness.",
      items: [
        { id: "chec-q-ai", verb: "Discover Exposure", name: "Chec-Q AI", logo: "assets/products/CHECQ_WN.png", line: "A cryptographic risk manager that finds where quantum-vulnerable cryptography is used.", points: ["Code, Network, Certificate and URL Analysis", "Cryptographic Bill of Materials", "Post-Migration Compliance Monitoring"] },
        { id: "q-sleeve", verb: "Protect Communication", name: "Q-Sleeve", logo: "assets/products/QSLEEVE_WN.png", line: "A quantum-safe VPN and security layer for data in transit.", points: ["Cloud, On-Premises and Network Coverage", "Crypto-Agile by Design", "Integrates With Existing Systems and Protocols"] },
        { id: "qurng", verb: "Add Quantum Randomness", name: "QuRNG", logo: "assets/products/QuRNG_WN.png", line: "A hardware-agnostic quantum random number generator.", points: ["No Dedicated Quantum Hardware Required", "Accessible From Any Smart Device", "Keys, Tokens and OTP Generation"] }
      ],
      customTitle: "Built Around Your Requirements",
      custom: "Explore the Q-Forte capabilities that align with your organisation's security needs. Our team can discuss product selection, customisation and an appropriate solution for your requirements.",
      customCta: "Discuss Your Requirements"
    },
    related: [],
    finalTitle: "Plan Your Move to Post-Quantum Security",
    finalText: "Tell us about your systems and timelines. We will help you decide where Q-Forte fits.",
    finalCta: "Discuss Your Requirements"
  },
  "q-cluster": {
    name: "Q-Cluster", domain: "QIS", tag: "Quantum Simulation, Local or Cloud", logo: "assets/products/QCLUSTER_WN.png", status: "ready", ill: "q-cluster",
    verified: "Sources: Q_Cluster.pdf p1–2, Q-Cluster industry brochure p1, Q-Cluster mini brochure p1. Offering names follow the three brochures. Prices: [PRICE TO CONFIRM], billing: [BILLING INTERVAL TO CONFIRM], destination: [DESTINATION TO CONFIRM]. PROVISIONAL — CONFIRM WITH QAIG",
    headline: "A Quantum Computing Lab Without the Quantum Computer",
    lead: "Q-Cluster is a quantum simulation platform for learning, algorithm development and application prototyping. Run circuits in ideal conditions or under configurable noise, on CPU, GPU and HPC infrastructure.",
    primary: { label: "Discuss Q-Cluster", to: "enquiry" }, secondary: { label: "View Offerings", to: "#module" },
    overviewTitle: "From First Circuit to Quantum Application",
    overview: [
      "Quantum hardware is scarce and expensive, and real processors are noisy. Q-Cluster lets students, researchers and engineering teams design and test quantum algorithms on classical infrastructure first.",
      "It supports both ideal state-vector simulation and noise-modelled execution, so users can see how gate errors, decoherence and readout noise change an algorithm's results before running it on a quantum processor."
    ],
    audience: ["Universities and Educators", "Students and Researchers", "Enterprise R&D Teams", "Quantum Software Developers"],
    steps: [
      ["Build", "Design circuits in a drag-and-drop interface, or work in familiar frameworks such as Qiskit and PennyLane."],
      ["Simulate", "Choose statevector, density-matrix or tensor-network simulation to suit the circuit and the available compute."],
      ["Add Noise", "Apply gate, decoherence and readout noise models to approximate the behaviour of real processors."],
      ["Analyse", "Read probability distributions and Bloch-sphere views, then compare results with classical approaches."]
    ],
    caps: [
      ["Guided Quantum Learning", "Tutorials and guided modules for classrooms and laboratories, in a multi-user, JupyterHub-compatible environment."],
      ["Noise Modelling", "Study how realistic errors affect an algorithm, and approximate processor behaviour for NISQ-era research."],
      ["Scalable Infrastructure", "Grow from basic server-class compute to hybrid CPU–GPU HPC systems as circuits get deeper."],
      ["Hardware-Agnostic Execution", "Keep one workflow across CPU, GPU and HPC, with execution on QPU platforms such as IBM and IQM."]
    ],
    module: {
      type: "pricing", title: "Choose How You Run Q-Cluster",
      lead: "Pricing depends on deployment, number of users and compute. Our team will share plan details for your requirements.",
      plans: [
        { name: "Q-Cluster for Education", for: "Universities and Training Labs", line: "Classroom and laboratory deployment with guided modules and a multi-user environment.", points: ["Guided Algorithm Tutorials", "Multi-User Classroom Access", "Ideal and Noise-Enabled Simulation"], price: "[PRICE TO CONFIRM]", interval: "[BILLING INTERVAL TO CONFIRM]", cta: "Request Plan Details", href: "enquiry" },
        { name: "Q-Cluster for Enterprise", for: "Industry and R&D Teams", line: "An application development environment with quantum projects, benchmarking and execution across CPU, GPU, HPC and QPU.", points: ["Quantum Projects Workspace", "Benchmarking Against Classical Methods", "Qiskit, PennyLane and PyTorch Integration"], price: "[PRICE TO CONFIRM]", interval: "[BILLING INTERVAL TO CONFIRM]", cta: "Request Plan Details", href: "enquiry" }
      ],
      /* Pricing source: QulabsBlackVersion src/data/marketing/pricing.ts (tier QCluster-Mini, upfront 30000) and src/lib/trial.ts (HARDWARE_TRIAL_DAYS 90). */
      mini: { name: "Q-Cluster Mini", kicker: "Your Own Quantum Compute Unit", line: "High-performance quantum simulation running locally, with no cloud dependency and no data leaving your site. Built for researchers, universities, startups and innovation teams.", points: ["Personal, Portable Hardware", "Curated Set of 10 Essential Algorithms", "Per-Gate Noise Modelling"],
        features: ["High-Performance Local Quantum Computing", "Zero Cloud Dependency", "Complete Software Stack Included", "1-Year Hardware Warranty", "Onsite Installation and Setup"], bestFor: ["Researchers", "Universities", "Startups", "Academic Labs"],
        photos: [0, 1, 2, 3, 4, 5].map((i) => "assets/products/mini/q-cluster-mini-" + i + ".png"), photoAlt: "Q-Cluster Mini hardware unit",
        price: "₹30,000", priceNote: "One-time hardware purchase", trialDays: 90, cta: "Buy Q-Cluster Mini", href: "enquiry" },
      publicPrice: "Contact Us for Plan Details"
    },
    related: [["QNTSim", "Simulate quantum networks the same way Q-Cluster simulates circuits."], ["QubitIQ", "AI-assisted design of quantum algorithms and logic."]],
    finalTitle: "Bring Quantum Simulation to Your Team",
    finalText: "Tell us who will use Q-Cluster and what you want to build. We will recommend a deployment.",
    finalCta: "Discuss Q-Cluster"
  }
};

/* Phase D products. Copy grounded in: QForte deck (Chec-Q AI, Q-Sleeve), QuRNG.pdf, AGBA Q_Intel deck (QubitIQ / Qubit Intelligence), EPS QKD.pdf, Quantum Memory.pdf, QNTSim.pdf,
   Quantum Sensing Kit PDF (consolidated under Q-Biosensor per QAIG), Rydberg Sensor Flyer. Quantum Repeater and Quantum Gravimeter have no product document: copy is PROVISIONAL — CONFIRM WITH QAIG. */
(function () {
  var P = window.QAIG_PRODUCTS, qf = { label: "Discuss Your Requirements", to: "enquiry" };
  function apps(title, lead, list, note) { return { type: "apps", title: title, lead: lead, apps: list, note: note }; }
  P["chec-q-ai"] = { name: "Chec-Q AI", domain: "PQC", stack: true, tag: "Cryptographic Risk Manager", logo: "assets/products/CHECQ_WN.png", status: "ready", ill: "chec-q-ai",
    headline: "See Every Place Your Cryptography Is Exposed",
    lead: "Chec-Q AI scans code, networks, certificates and public URLs to find quantum-vulnerable cryptography, then helps you plan and monitor the move to post-quantum standards.",
    primary: qf, secondary: { label: "View the Q-Forte Stack", to: "Q-Forte.dc.html" },
    overviewTitle: "An Inventory Before a Migration",
    overview: ["Organisations can't migrate cryptography they can't see. Algorithms such as RSA and ECC sit inside software, protocols and certificates across the estate.", "Chec-Q AI builds a cryptographic bill of materials, assesses the associated risk and supports a post-quantum migration roadmap, followed by compliance monitoring once migration is under way."],
    audience: ["CISOs and Security Teams", "Compliance and Audit", "Enterprise IT", "Critical Infrastructure"],
    steps: [["Scan", "Analyse source code, network traffic, certificates and URLs for cryptographic usage."], ["Identify", "Flag deprecated and quantum-vulnerable algorithms, weak handshakes and insecure cipher suites."], ["Assess", "Score risk and build a cryptographic bill of materials across your assets."], ["Monitor", "Track readiness over time with historical scans, a dashboard and an audit trail."]],
    caps: [["Code Analysis", "Find insecure or quantum-vulnerable algorithms and libraries inside codebases."], ["Network Analysis", "Discover active protocols and cipher suites, and monitor for evolving risk."], ["Certificate Analysis", "Discover X.509 certificates and flag expired, misconfigured or vulnerable ones."], ["URL Analysis", "Check the cryptographic posture of public-facing web assets and dependencies."]],
    module: apps("Where Chec-Q AI Helps", "Chec-Q AI is part of Q-Forte. It can be discussed on its own or with Q-Sleeve and QuRNG.", [["Migration Planning", "Prioritise what to migrate first using a complete cryptographic inventory."], ["Regulatory Readiness", "Measure assets against target standards and timelines."], ["Continuous Assurance", "Keep watching for new weaknesses after migration."]]),
    related: [["Q-Sleeve", "Protect data in transit once exposure is understood."], ["QuRNG", "Quantum-generated randomness for keys and tokens."]],
    finalTitle: "Start With a Clear View of Your Cryptography", finalText: "Tell us about your environment and we'll discuss an assessment as part of Q-Forte.", finalCta: "Discuss Your Requirements" };
  P["q-sleeve"] = { name: "Q-Sleeve", domain: "PQC", stack: true, tag: "Quantum-Safe VPN & Security", logo: "assets/products/QSLEEVE_WN.png", status: "ready", ill: "q-sleeve",
    headline: "Wrap Every Connection in Quantum-Safe Protection",
    lead: "Q-Sleeve is a quantum-safe VPN and security layer that moves cloud, on-premises and network traffic to NIST post-quantum standards with crypto-agility.",
    primary: qf, secondary: { label: "View the Q-Forte Stack", to: "Q-Forte.dc.html" },
    overviewTitle: "Protection for Data That Must Stay Confidential",
    overview: ["Data captured today could be decrypted later by a capable quantum computer. Traffic between sites, users and cloud services needs protection that will hold up.", "Q-Sleeve integrates into existing systems and protocols, so organisations can adopt post-quantum encryption without rebuilding their infrastructure."],
    audience: ["Enterprise Networks", "Cloud and Hybrid IT", "Financial Transactions", "Government and Defence"],
    steps: [["Connect", "Deploy alongside existing infrastructure, servers and networks."], ["Encrypt", "Apply post-quantum encryption to data in transit."], ["Adapt", "Switch algorithms as standards evolve, without re-architecting."], ["Scale", "Extend protection across enterprise, cloud, web and IoT environments."]],
    caps: [["Future-Proof Encryption", "Guards data against emerging quantum computing capabilities."], ["Cryptographic Rigour", "Built on established cryptographic and mathematical foundations."], ["Versatile Integration", "Works with existing systems and protocols."], ["Adaptive Security", "A scalable stack designed for crypto-agility."]],
    module: apps("Where Q-Sleeve Fits", "Q-Sleeve is part of Q-Forte. It can be discussed on its own or with Chec-Q AI and QuRNG.", [["Site-to-Site Links", "Protect traffic between offices, data centres and cloud regions."], ["Remote Access", "Secure users connecting to enterprise resources."], ["Transactions and IoT", "Protect high-value or long-lived data moving between devices and services."]]),
    related: [["Chec-Q AI", "Find where quantum-vulnerable cryptography is in use."], ["QuRNG", "Quantum-generated randomness for keys and tokens."]],
    finalTitle: "Protect Data in Transit for the Quantum Era", finalText: "Tell us how your traffic flows and we'll discuss deploying Q-Sleeve within Q-Forte.", finalCta: "Discuss Your Requirements" };
  P["qurng"] = { name: "QuRNG", domain: "PQC", stack: true, tag: "Quantum Random Generations", logo: "assets/products/QuRNG_WN.png", status: "ready", ill: "qurng",
    headline: "Quantum Randomness Without Quantum Hardware On Site",
    lead: "QuRNG is a hybrid quantum-classical random number generator. It draws on gate-based quantum computers as an entropy source and delivers random numbers as a scalable service.",
    primary: qf, secondary: { label: "View the Q-Forte Stack", to: "Q-Forte.dc.html" },
    overviewTitle: "Randomness You Don't Have to Take on Trust",
    overview: ["Keys, tokens and one-time passwords are only as strong as the randomness behind them. Hardware quantum RNGs are costly and require users to trust the vendor.", "QuRNG runs a quantum subroutine on compatible quantum computers and combines it with the scalability of software generators, so applications can integrate quantum randomness easily."],
    audience: ["Security and Key Management", "Digital Payments", "Gaming and Lotteries", "Simulation and Modelling"],
    steps: [["Source", "Choose an entropy source from supported quantum hardware."], ["Generate", "A quantum subroutine produces random bits."], ["Process", "Results are post-processed and held in a secure vault."], ["Deliver", "Clients receive random numbers over a quantum-safe channel."]],
    caps: [["Hardware Agnostic", "No dedicated quantum hardware is needed at your site."], ["Parallel Sources", "Run multiple QRNGs in parallel and select the entropy source."], ["Quantum-Safe Delivery", "Random numbers travel over post-quantum encrypted channels."], ["Easy Integration", "Accessible from any smart device and adaptable to applications."]],
    module: apps("Where Randomness Matters", "QuRNG is part of Q-Forte. It can be discussed on its own or with Chec-Q AI and Q-Sleeve.", [["Tokens and OTPs", "Secure token and one-time password generation for digital payments."], ["Identity and Access", "Stronger keys for identity and access management."], ["Monte Carlo and Risk", "Randomness for simulations, option pricing and risk models."]]),
    related: [["Chec-Q AI", "Find where quantum-vulnerable cryptography is in use."], ["Q-Sleeve", "Protect data in transit with a quantum-safe VPN."]],
    finalTitle: "Add Quantum Randomness to Your Security", finalText: "Tell us where you need random numbers and we'll discuss QuRNG within Q-Forte.", finalCta: "Discuss Your Requirements" };
  P["qubitiq"] = { name: "QubitIQ", domain: "QIS", tag: "AI-Driven Algorithms & Logic", logo: "assets/products/QUBITIQ_WN.png", status: "rnd", ill: "qubitiq",
    headline: "From Problem Statement to Quantum Algorithm, Faster",
    lead: "QubitIQ applies AI to quantum algorithm development, recommending suitable encodings and optimised circuits across classical, quantum and hybrid computing.",
    primary: { label: "Discuss This Research", to: "enquiry" }, secondary: { label: "How It Works", to: "#overview" },
    overviewTitle: "Choosing the Right Circuit Is Getting Harder",
    overview: ["As quantum algorithms multiply, deciding which encoding and circuit suit a problem has become slow and specialised work.", "QubitIQ is designed to give context-aware recommendations so teams spend less time searching and more time building. It is in research and development."],
    audience: ["Quantum Algorithm Researchers", "Enterprise Innovation Teams", "Finance and Logistics", "Energy and Pharma"],
    steps: [["Describe", "Start from the problem and its constraints."], ["Map", "Match the problem to suitable encodings and algorithm families."], ["Recommend", "Receive AI-assisted circuit suggestions."], ["Optimise", "Refine circuits for the target hardware."]],
    caps: [["Unified Platform", "Brings classical, quantum and hybrid computing together."], ["Intelligent Recommendations", "AI-augmented encoding and circuit optimisation."], ["Problem-Agnostic", "Designed to adapt to diverse domains and computational challenges."]],
    module: apps("Research Direction", "QubitIQ is in research and development and is not yet offered as a product.", [["Optimisation Problems", "Logistics, scheduling and portfolio questions."], ["Quantum Machine Learning", "Encodings and circuits for learning workloads."], ["Simulation", "Problems in energy, chemistry and materials."]], "In Research and Development"),
    related: [["Q-Cluster", "Simulate and test the circuits QubitIQ recommends."]],
    finalTitle: "Interested in AI-Assisted Quantum Development?", finalText: "Tell us about your problem domain. We're happy to discuss our research.", finalCta: "Discuss This Research" };
  P["eps-qkd"] = { name: "EPS-QKD", domain: "NET", tag: "Entanglement Educational Kit", logo: "assets/products/EPSQKD_WN.png", status: "ready", ill: "eps-qkd", photo: "assets/products/photos/eps-qkd.jpg",
    headline: "Hands-On Entanglement and Quantum Key Distribution",
    lead: "EPS-QKD is an experimentation kit for academia that generates entangled photon pairs and uses them to demonstrate quantum key distribution in one integrated unit.",
    primary: { label: "Enquire About EPS-QKD", to: "enquiry" }, secondary: { label: "How It Works", to: "#overview" },
    overviewTitle: "Entanglement You Can Measure in the Lab",
    overview: ["Entanglement-based QKD is central to Quantum Networking, but building a working setup from components is demanding.", "EPS-QKD packages an entangled photon source with the collection and detection needed to study entanglement and run a QKD experiment, including key distribution and error-rate analysis."],
    audience: ["Universities", "Quantum Optics Labs", "Students and Researchers", "Training Centres"],
    steps: [["Generate", "An entangled photon source produces photon pairs."], ["Separate", "The two photons of each pair are routed to separate parties."], ["Measure", "Each party measures its photons to build correlated results."], ["Distil", "Compare results to derive a shared key and estimate the error rate."]],
    caps: [["Integrated Photon Source", "High-brightness entangled pairs with controllable stability."], ["Complete QKD Experiment", "Run key distribution with an entanglement-based protocol."], ["Error and Noise Analysis", "Study quantum bit error rate and signal-to-noise ratio."], ["All-in-One Unit", "One system for studying entanglement and its application to QKD."]],
    module: apps("Built for Teaching and Research", "Detailed specifications and configuration are available on enquiry.", [["Undergraduate Labs", "Introduce entanglement and quantum correlations."], ["Postgraduate Research", "Benchmark entanglement-based experiments."], ["Network Training", "Connect theory with QNTSim simulations."]]),
    related: [["Q-Memory", "Store and retrieve light for Quantum Networking."], ["QNTSim", "Simulate QKD protocols before running them in hardware."]],
    finalTitle: "Bring Entanglement Into Your Lab", finalText: "Tell us about your course or research. We'll share kit details and options.", finalCta: "Enquire About EPS-QKD" };
  P["q-memory"] = { name: "Q-Memory", domain: "NET", tag: "Quantum Memory Hardware", logo: "assets/products/QMEMORY_WN.png", status: "ready", ill: "q-memory", photo: "assets/products/photos/q-memory.jpg",
    headline: "Store Light, Then Release It on Demand",
    lead: "Q-Memory is a room-temperature, rubidium-vapour quantum memory experimentation kit for generating, storing and retrieving photonic pulses.",
    primary: { label: "Enquire About Q-Memory", to: "enquiry" }, secondary: { label: "How It Works", to: "#overview" },
    overviewTitle: "Why Quantum Networks Need Memory",
    overview: ["Quantum networks must hold quantum states while links between nodes are being established. Memory is what makes that synchronisation possible.", "Q-Memory demonstrates storage and retrieval of polarisation pulses in a hot rubidium vapour at room temperature, with an input laser control system for programming pulse sequences."],
    audience: ["Quantum Optics Labs", "Universities", "Quantum Networking Research", "Atomic Physics Groups"],
    steps: [["Prepare", "The input laser control system shapes the probe and control pulses."], ["Store", "A light pulse is absorbed and held in the atomic vapour."], ["Hold", "The memory keeps the information while the control light is off."], ["Retrieve", "Switching the control back on releases the stored pulse."]],
    caps: [["Room-Temperature Operation", "No cryogenics are needed."], ["Polarisation Pulse Storage", "Store and retrieve photonic polarisation pulses."], ["Alignment-Free Operation", "Long-lasting, shielded design that resists magnetic noise."], ["Upgrade Path", "Designed to be upgradable towards single-photon-level memory."]],
    module: apps("Experiments It Supports", "Detailed specifications and configuration are available on enquiry.", [["Storage and Retrieval", "Characterise storage and retrieval of light pulses."], ["Atomic Physics", "Explore light-atom interaction in rubidium vapour."], ["Network Building Blocks", "Study the role of memory in Quantum Repeaters."]]),
    related: [["EPS-QKD", "Generate and measure entangled photon pairs."], ["Quantum Repeater", "Long-distance modules that build on quantum memory."]],
    finalTitle: "Add Quantum Memory to Your Lab", finalText: "Tell us about your experiments. We'll share kit details and options.", finalCta: "Enquire About Q-Memory" };
  P["qntsim"] = { name: "QNTSim", domain: "NET", tag: "Quantum Network Simulator", logo: "assets/products/QNTSIM_WN.png", status: "ready", ill: "qntsim",
    verified: "Source: QNTSim.pdf p1–2. QNTSim Mini is named in the brief only; no source document found. Prices: [PRICE TO CONFIRM]. PROVISIONAL — CONFIRM WITH QAIG",
    headline: "Every Student Builds a Quantum Network",
    lead: "QNTSim is a quantum network simulator for academia and research training. Design networks, run protocols and see how entanglement and noise behave, without an optical bench.",
    primary: { label: "Discuss QNTSim", to: "enquiry" }, secondary: { label: "View Offerings", to: "#module" },
    overviewTitle: "Learn Quantum Networking by Building It",
    overview: ["Quantum Networking hardware is scarce, and lab time is limited. Students and instructors need a way to explore protocols and failure modes freely.", "QNTSim models nodes, channels, detectors, sources and memories, so learners can watch entanglement being generated, purified and swapped and see how parameters change the results."],
    audience: ["Universities and Instructors", "Students", "Research Labs", "Network Planners"],
    steps: [["Design", "Drag and drop nodes and links to build a network topology."], ["Configure", "Set channel length, attenuation, detector efficiency and memory fidelity."], ["Simulate", "Run single, sweep or batch simulations of a chosen protocol."], ["Interpret", "Review outputs, statistics and inferences for each run."]],
    caps: [["Intuitive GUI", "Design networks and rerun experiments from configurable control panels."], ["Entanglement Engine", "Generation, purification and swapping across network nodes."], ["Physics-Grounded Outputs", "See how coherence time, detector efficiency and noise affect results."], ["Flexible Deployment", "Cloud, on-premises or application-based, on all major operating systems."]],
    module: { type: "pricing", title: "Choose How You Run QNTSim", lead: "Pricing depends on deployment and number of users. Our team will share plan details for your requirements.",
      plans: [
        { name: "QNTSim for Teaching", for: "Universities and Classrooms", line: "Guided protocol simulations with overview, statistics and inferences for each experiment.", points: ["Included Guided Experiments", "QKD and Entanglement Protocols", "Classroom Deployment"], price: "[PRICE TO CONFIRM]", interval: "[BILLING INTERVAL TO CONFIRM]", cta: "Request Plan Details" },
        { name: "QNTSim for Research", for: "Research Labs", line: "Customisable topologies and parameter sweeps for network design studies.", points: ["Custom Topologies", "Parameter Sweep and Batch Runs", "Cloud or On-Premises"], price: "[PRICE TO CONFIRM]", interval: "[BILLING INTERVAL TO CONFIRM]", cta: "Request Plan Details" }
      ],
      /* PROVISIONAL — CONFIRM WITH QAIG: QNTSim Mini scope, features and price are unconfirmed. */
      /* Pricing source: QulabsBlackVersion src/data/marketing/pricing.ts (tier QNTSim-Mini, upfront 30000) and src/lib/trial.ts (HARDWARE_TRIAL_DAYS 90). */
      mini: { name: "QNTSim Mini", kicker: "Local Quantum Network Simulator", line: "Your own QNTSim hardware unit for hardware-in-the-loop network simulation, with the software free for the first 3 months.", points: ["Hardware-in-the-Loop Simulation", "Direct Device Integration", "Complete Software Stack"],
        features: ["Hardware-in-the-Loop Simulation", "Direct Device Integration", "Complete Software Stack", "1-Year Hardware Warranty", "Onsite Installation and Calibration"], bestFor: ["Researchers", "Universities", "Startups", "Academic Labs"],
        photos: [0, 1, 2, 3, 4, 5].map((i) => "assets/products/mini/qntsim-mini-" + i + ".png"), photoAlt: "QNTSim Mini hardware unit", price: "₹30,000", priceNote: "One-time hardware purchase", trialDays: 90, cta: "Buy QNTSim Mini" },
      publicPrice: "Contact Us for Plan Details" },
    related: [["Q-Cluster", "Simulate quantum circuits and algorithms."], ["EPS-QKD", "Run entanglement-based QKD in real hardware."]],
    finalTitle: "Bring Quantum Networking Into the Classroom", finalText: "Tell us who will use QNTSim and how. We'll recommend a deployment.", finalCta: "Discuss QNTSim" };
  P["quantum-repeater"] = { name: "Quantum Repeater", domain: "NET", tag: "Long-Distance Signal Modules", logo: "", status: "rnd", ill: "quantum-repeater",
    headline: "Extending Quantum Links Over Long Distances",
    lead: "Our Quantum Repeater research explores modules intended to carry quantum signals further by dividing a long link into shorter connected segments.",
    primary: { label: "Discuss This Research", to: "enquiry" }, secondary: { label: "How It Works", to: "#overview" },
    overviewTitle: "Why Distance Is Hard for Quantum Signals",
    overview: ["Quantum signals weaken over distance and can't simply be amplified. Repeaters are the approach being researched to overcome this limit.", "This programme is in research and development and is not yet offered as a product."],
    audience: ["Quantum Network Research", "Telecom Research Groups", "Government Programmes"],
    steps: [["Segment", "Split a long link into shorter segments."], ["Entangle", "Establish entanglement across each segment."], ["Store", "Hold states in quantum memory until neighbouring links are ready."], ["Swap", "Join segments to extend entanglement end to end."]],
    caps: [["Segmented Links", "A modular approach to long-distance quantum communication."], ["Memory-Based", "Builds on QAIG's quantum memory work."], ["Simulated First", "Repeater behaviour can be explored in QNTSim."]],
    module: apps("Research Context", "Quantum Repeater is in research and development.", [["Long-Distance QKD", "Extending key distribution beyond single-link limits."], ["Quantum Internet", "Connecting distant quantum nodes."]], "In Research and Development"),
    related: [["Q-Memory", "Room-temperature quantum memory hardware."], ["QNTSim", "Simulate repeater nodes, swapping and purification."]],
    finalTitle: "Interested in Long-Distance Quantum Links?", finalText: "We're happy to discuss our research with partners and institutions.", finalCta: "Discuss This Research" };
  P["q-biosensor"] = { name: "Q-Biosensor", domain: "SEN", tag: "Biological Molecular Sensing", logo: "assets/products/QSENSING_WN.png", status: "ready", ill: "q-biosensor",
    verified: "Consolidated per QAIG: Quantum Biosensor, Magnetocardiograph and Quantum Sensing and Atomic Physics Experimentation Kit. No clinical claims. PROVISIONAL — CONFIRM WITH QAIG",
    headline: "Atomic Sensing for Very Weak Biological Signals",
    lead: "Q-Biosensor applies atom-based Quantum Sensing to the measurement of weak magnetic signals, including those associated with the heart, at room temperature.",
    primary: { label: "Enquire About Q-Biosensor", to: "enquiry" }, secondary: { label: "How It Works", to: "#overview" },
    overviewTitle: "Measuring Fields Conventional Sensors Struggle With",
    overview: ["Biological magnetic signals are extremely faint. Detecting them usually calls for specialised, costly instruments.", "Q-Biosensor uses a laser locked to rubidium atoms as the sensing Element. Changes in the magnetic field shift the atoms' energy levels, and that shift is read out optically."],
    audience: ["Biomedical Research", "Sensing Research Labs", "Universities", "Instrument Developers"],
    steps: [["Prepare", "A stabilised laser prepares rubidium atoms in a vapour cell."], ["Sense", "A magnetic field shifts the atoms' energy levels."], ["Read Out", "The shift changes how the atoms interact with light."], ["Interpret", "Software converts the optical signal into a field measurement."]],
    caps: [["Room-Temperature Atoms", "Rubidium vapour sensing without cryogenics."], ["Integrated Laser", "A compact, stabilised laser system with frequency locking."], ["Alignment-Free", "Long-lasting operation with an intuitive software interface."]],
    module: apps("Application Context", "Q-Biosensor is intended for research use. Detailed specifications are available on enquiry.", [["Magnetocardiography Research", "Study heart-related magnetic signals in a research setting."], ["Magnetometry", "Controlled measurement of weak magnetic fields."], ["Teaching", "From atomic spectroscopy to Quantum Sensing."]]),
    related: [["Rydberg Sensor", "Atom-based sensing of RF and microwave fields."], ["ECDL", "The narrow-linewidth laser behind atomic sensing."]],
    finalTitle: "Explore Quantum Biosensing", finalText: "Tell us about your research application and we'll share details.", finalCta: "Enquire About Q-Biosensor" };
  P["quantum-gravimeter"] = { name: "Quantum Gravimeter", domain: "SEN", tag: "Precision Gravity Mapping", logo: "", status: "rnd", ill: "quantum-gravimeter",
    headline: "Measuring Gravity With Falling Atoms",
    lead: "Our Quantum Gravimeter research uses atom interferometry to explore precise measurement of local gravity.",
    primary: { label: "Discuss This Research", to: "enquiry" }, secondary: { label: "How It Works", to: "#overview" },
    overviewTitle: "Atoms as the Reference Mass",
    overview: ["An atom interferometer splits and recombines clouds of atoms with light. Gravity changes the phase between the two paths, and that phase can be measured.", "This programme is in research and development and is not yet offered as a product."],
    audience: ["Geophysics Research", "Navigation Research", "Universities"],
    steps: [["Cool", "Lasers prepare a cloud of cold atoms."], ["Split", "Light pulses place atoms on two paths."], ["Fall", "The paths evolve under gravity."], ["Recombine", "Interference reveals the gravitational phase."]],
    caps: [["Atom Interferometry", "Light-pulse interferometry with cold atoms."], ["Laser-Based", "Builds on QAIG's laser and atomic physics work."]],
    module: apps("Research Context", "Quantum Gravimeter is in research and development.", [["Gravity Mapping", "Surveying local variations in gravity."], ["Inertial Sensing", "Atom-based measurement for navigation research."]], "In Research and Development"),
    related: [["ECDL", "Narrow-linewidth lasers for atomic physics."], ["Rydberg Sensor", "Atom-based sensing of RF and microwave fields."]],
    finalTitle: "Interested in Quantum Gravimetry?", finalText: "We're happy to discuss our research with partners and institutions.", finalCta: "Discuss This Research" };
  P["rydberg-sensor"] = { name: "Rydberg Sensor", domain: "SEN", tag: "RF & Microwave Field Tech", logo: "", status: "rnd", ill: "rydberg-sensor",
    headline: "Atoms That Sense Radio and Microwave Fields",
    lead: "The Rydberg Sensor is a tabletop prototype that measures RF electric fields with room-temperature rubidium atoms excited to Rydberg states.",
    primary: { label: "Discuss This Research", to: "enquiry" }, secondary: { label: "How It Works", to: "#overview" },
    overviewTitle: "A Different Kind of Antenna",
    overview: ["Conventional RF measurement relies on calibrated antennas. Rydberg atoms respond strongly to electric fields, so the atoms themselves can act as the sensor.", "Two near-infrared lasers prepare and probe the atoms; an RF field changes their optical response, which is read out as a measurement. The sensor is a research prototype."],
    audience: ["RF and EMC Engineers", "Metrology Labs", "Defence Research", "Telecom Research"],
    steps: [["Excite", "Two lasers excite rubidium atoms to a Rydberg state."], ["Expose", "An RF or microwave field interacts with the atoms."], ["Probe", "The field changes how the atoms absorb light."], ["Measure", "The optical change is converted into a field reading."]],
    caps: [["Broadband Tunability", "Measure fields across different frequency bands."], ["Calibration-Free Principle", "Measurement tied to atomic properties."], ["Real-Time Measurement", "Live readout of field strength."]],
    module: apps("Research Applications", "The Rydberg Sensor is a research prototype in development.", [["Antenna Calibration", "Calibrate RF antennas against an atomic reference."], ["EMC Testing", "Electromagnetic compatibility measurements."], ["Atomic RF Reception", "Receiving radio signals with atoms."]], "In Research and Development"),
    related: [["Q-Biosensor", "Atom-based sensing of weak magnetic signals."], ["ECDL", "The lasers behind atomic sensing."]],
    finalTitle: "Interested in Atomic RF Sensing?", finalText: "We're happy to discuss our research with partners and institutions.", finalCta: "Discuss This Research" };
})();

/* Product_Content.pdf (pp. 4–6) refines the networking and sensing pages. Bracketed values in that file ([> 25 %], [> 90 %], [Sub-kHz to 100s of GHz]) are not published.
   R&D labels follow the approved taxonomy. PROVISIONAL — CONFIRM WITH QAIG: Product_Content.pdf describes EPS-QKD and Q-Memory as deployable systems; the brochures describe academic kits. Both are kept. */
(function () {
  var P = window.QAIG_PRODUCTS; function A(t, l, list, n) { return { type: "apps", title: t, lead: l, apps: list, note: n }; }
  Object.assign(P["q-memory"], {
    headline: "Store the Light. Preserve Quantum States.",
    lead: "Q-Memory captures, stores and retrieves quantum states of light on demand, the capability at the core of scalable quantum communication.",
    overview: ["Photons can't wait. To link separate nodes, a quantum network has to hold quantum information until the next link is ready and that calls for memory.", "Q-Memory maps incoming photons onto long-lived atomic spin states in a precision-engineered atomic ensemble and releases them when needed. It comes as a compact, 19-inch rack-compatible system and as a room-temperature experimentation kit for academia."],
    caps: [["Store and Retrieve on Demand", "Hold photonic quantum information and release it when the network is ready."], ["Synchronise Network Nodes", "Hold photons across separate nodes so links can be joined."], ["Rack-Compatible Package", "Low size, weight and power in a field-deployable, 19-inch rack format."], ["Academic Kit", "A room-temperature rubidium kit for storage and retrieval experiments."]],
    module: A("Where Quantum Memory Matters", "Full technical specifications are available on request.", [["Quantum Repeaters", "Extend entanglement over long distances by holding and synchronising photons."], ["Quantum Networking", "Join links between separate nodes."], ["Photonic Quantum Computing", "Store photonic states for later use."]]) });
  Object.assign(P["eps-qkd"], {
    tag: "Entangled Photon Source QKD",
    headline: "Key Security Rooted in the Laws of Physics",
    lead: "EPS-QKD distributes encryption keys using entangled photon pairs, so their security depends on quantum mechanics rather than computational complexity.",
    overviewTitle: "How Entanglement Produces a Shared Key",
    overview: ["An entangled photon source sends one photon of each pair to each of two remote users. Their measurements are correlated, so both build the same secret key.", "Any attempt to intercept the photons disturbs the entanglement and is revealed. Because the key comes from the measurements, the source itself doesn't need to be trusted. EPS-QKD is also available as an experimentation kit for academia."],
    audience: ["Government and Defence", "Finance", "Critical Infrastructure", "Universities and Labs"],
    caps: [["Entanglement-Based Keys", "Keys come from correlated measurements of entangled photon pairs."], ["Eavesdropping Is Revealed", "Interception disturbs the entanglement and shows up in the results."], ["Untrusted Source", "The source doesn't need to be trusted, which adds a further layer of protection."], ["Fibre and Free Space", "Compatible with existing optical fibre and free-space links."]],
    module: A("Where EPS-QKD Is Used", "Full technical specifications are available on request.", [["Secure Communications", "Key distribution that resists both classical and quantum attacks."], ["Government and Defence", "Long-term protection for sensitive links."], ["Teaching and Research", "An integrated kit for studying entanglement-based QKD."]]) });
  Object.assign(P["quantum-repeater"], {
    headline: "Extending the Reach of the Quantum World",
    lead: "Quantum Repeater brings entangled photon sources, quantum memories and entanglement swapping together to extend quantum links beyond the limits of direct fibre transmission.",
    overview: ["Over long distances, photon loss makes direct quantum transmission impossible and quantum signals can't simply be amplified.", "The repeater divides a long distance into shorter segments and links them through entanglement swapping, so quantum states can be shared across distances that would otherwise be out of reach. It is designed to work with standard telecom fibre."],
    audience: ["Government Agencies", "Financial Institutions", "Critical Infrastructure", "Network Operators"],
    caps: [["Integrated Platform", "Entangled photon sources, quantum memories and entanglement swapping in one system."], ["Segmented Links", "Short segments joined into one long-distance link."], ["Standard Telecom Fibre", "Designed to be compatible with existing fibre."]],
    module: A("Where Repeaters Matter", "Quantum Repeater is in research and development. Full technical specifications are available on request.", [["Long-Distance QKD", "Key distribution beyond single-link limits."], ["Quantum Internet", "A building block for connecting distant quantum nodes."], ["Long-Haul Secure Networks", "Long-term protection for critical communications."]], "In Research and Development") });
  Object.assign(P["quantum-gravimeter"], {
    lead: "Quantum Gravimeter measures absolute gravitational acceleration with cold-atom interferometry, referenced to the fixed properties of atoms and the wavelength of light.",
    overview: ["Clouds of laser-cooled atoms are released into free fall. A sequence of laser pulses splits, redirects and recombines their matter waves and the resulting interference pattern reveals the local value of gravity.", "With no mechanical moving parts and no need for periodic recalibration, the approach avoids the drift and wear that affect classical instruments."],
    audience: ["Geophysical Survey", "Resource Exploration", "Infrastructure Monitoring", "Navigation"],
    caps: [["Absolute Measurement", "Gravity referenced directly to atomic properties and the wavelength of light."], ["No Moving Parts", "No mechanical wear and no periodic recalibration."], ["Long-Term Stability", "Repeatable measurements over extended periods."]],
    module: A("Where Gravimetry Helps", "Quantum Gravimeter is in research and development. Full technical specifications are available on request.", [["Geophysical Survey", "Mapping local variations in gravity."], ["Resource Exploration", "Gravity data for subsurface studies."], ["Infrastructure Monitoring and Navigation", "Stable, repeatable measurement in the field."]], "In Research and Development") });
  Object.assign(P["rydberg-sensor"], {
    headline: "Sensing Electromagnetic Fields With Atoms",
    lead: "Rydberg Sensor uses atoms in highly excited Rydberg states to detect and measure radio-frequency electric fields, read out optically with lasers.",
    overview: ["In Rydberg states, atoms respond strongly to even weak electromagnetic fields. Lasers read that response out and turn the field into a measurement.", "Because the measurement depends on atomic properties and fundamental constants, the sensor is self-calibrated and SI-traceable. One small, all-dielectric probe covers a frequency range that would otherwise need many antennas and it barely disturbs the field it measures."],
    caps: [["Self-Calibrated", "Measurements traceable to SI units through atomic properties."], ["Broadband Coverage", "One probe across a very wide frequency range."], ["Small, All-Dielectric Probe", "Minimal disturbance to the field being measured."], ["Optical Readout", "The field's effect on the atoms is read out with lasers."]],
    module: A("Where Rydberg Sensing Applies", "Rydberg Sensor is in research and development. Full technical specifications are available on request.", [["RF Test and Measurement", "Calibration and EMC testing against an atomic reference."], ["Communication", "Atomic reception of radio signals."], ["Spectrum Monitoring", "Broadband field detection."]], "In Research and Development") });
  Object.assign(P["q-biosensor"], {
    tag: "Magnetocardiography Platform",
    verified: "Product_Content.pdf p6 (quantum biosensor / magnetocardiograph). No regulatory approval is claimed. PROVISIONAL — CONFIRM WITH QAIG",
    headline: "A Contact-Free View of the Heart's Magnetic Activity",
    lead: "Q-Biosensor is a magnetocardiography platform that uses highly sensitive atomic magnetometers to capture the ultra-weak magnetic fields generated by the heart.",
    overviewTitle: "Seeing Cardiac Activity Through Its Magnetic Field",
    overview: ["The heart's electrical activity produces faint magnetic fields. These are less affected by surrounding tissue than electrical measurements, so they can show spatial and temporal patterns more clearly.", "Q-Biosensor measures these fields without contact, electrodes, gel or skin preparation. Signal processing turns them into cardiac waveforms and magnetic field maps for cardiovascular research and clinical decision support."],
    audience: ["Cardiovascular Research", "Clinical Research Teams", "Hospitals and Emergency Care", "Medical Device Partners"],
    steps: [["Sense", "Atomic magnetometers capture the heart's magnetic field without contact."], ["Process", "Signal processing isolates the cardiac signal."], ["Reconstruct", "Reconstruction builds rich cardiac representations from a reduced sensor Array."], ["Visualise", "Waveforms and field maps show cardiac activity at each millisecond."]],
    caps: [["Contact-Free Measurement", "No electrodes, gel or skin preparation."], ["Non-Invasive", "Radiation-free and contrast-free."], ["Field Maps Over Time", "A current map of the heart at each millisecond."], ["Compact Sensing", "Intelligent reconstruction from a reduced sensor Array."]],
    module: A("Where Magnetocardiography Fits", "Q-Biosensor is designed for cardiovascular research and clinical decision support. Detailed information is available on request.", [["Clinical Research", "Study cardiac electrophysiology with magnetic field maps."], ["Acute and Emergency Care", "Rapid capture and analysis in time-sensitive settings."], ["Preventive Screening", "A non-invasive view of cardiac activity."]]) });
})();

/* Art direction per product: hero layout, input → process → output strip, Section 02 and Section 03 compositions.
   ov: "journey" (stage timeline) | "track" (signal moving through stations) | "compare" (two-state toggle). cap: "map" | "layers" | "split" | "bento". */
(function () {
  var P = window.QAIG_PRODUCTS, I = function (s) { return "assets/products/icons/" + s + ".png"; };
  var D = {
    "q-forte": { hero: "split", flow: ["Cryptographic Estate", "Discover, Protect, Randomise", "Quantum-Assured Security"], ov: "track", cap: "bento" },
    "chec-q-ai": { hero: "split", flow: ["Digital Assets", "Cryptographic Assessment", "Exposure Map"], ov: "journey", cap: "map" },
    "q-sleeve": { hero: "stacked", flow: ["Open Communication", "Quantum-Safe Encryption", "Protected Channel"], ov: "compare", cap: "layers",
      compare: { a: { label: "Without Q-Sleeve", title: "Data Crosses an Exposed Path", points: ["Traffic relies on public-key algorithms such as RSA and ECC.", "Data captured today could be decrypted by a future quantum computer.", "Changing algorithms later means re-engineering systems."] },
                 b: { label: "With Q-Sleeve", title: "Data Travels Inside a Quantum-Safe Channel", points: ["Traffic is protected with encryption built to NIST post-quantum standards.", "Captured data stays confidential against future quantum attacks.", "Crypto-agility lets algorithms change as standards evolve."] } } },
    "qurng": { hero: "reverse", flow: ["Quantum Process", "Measurement", "Random Bits"], ov: "track", cap: "bento" },
    "q-cluster": { hero: "split", flow: ["Quantum Circuit", "Simulation", "Result Distribution"], ov: "compare", cap: "layers",
      compare: { a: { label: "Ideal Simulation", title: "How the Algorithm Should Behave", points: ["State-vector simulation shows the algorithm's intended result.", "Useful for learning, design and validating logic.", "Clean probability distributions to compare against."] },
                 b: { label: "With Noise Models", title: "How Real Processors Will Behave", points: ["Gate errors, decoherence and readout noise are applied.", "See where results drift before using quantum hardware.", "Approximate NISQ-era processor behaviour."] } } },
    "qubitiq": { hero: "split", flow: ["Problem", "AI Recommendation", "Optimised Circuit"], ov: "journey", cap: "split" },
    "eps-qkd": { hero: "stacked", flow: ["Entangled Photon Pair", "Correlated Measurements", "Shared Secret Key"], ov: "track", cap: "split" },
    "q-memory": { hero: "stacked", flow: ["Light In", "Stored in Atoms", "Released on Demand"], ov: "track", cap: "bento" },
    "qntsim": { hero: "reverse", flow: ["Network Design", "Protocol Simulation", "Observed Behaviour"], ov: "journey", cap: "map" },
    "quantum-repeater": { hero: "stacked", flow: ["Long Distance", "Segment and Swap", "End-to-End Link"], ov: "compare", cap: "layers",
      compare: { a: { label: "Direct Link", title: "Photons Are Lost Over Distance", points: ["Loss grows with every kilometre of fibre.", "Quantum signals can't simply be amplified.", "Beyond a limit, direct transmission becomes impossible."] },
                 b: { label: "With Repeaters", title: "Short Segments Joined by Entanglement", points: ["The distance is divided into shorter segments.", "Quantum memories hold states until neighbouring links are ready.", "Entanglement swapping joins segments end to end."] } } },
    "q-biosensor": { hero: "reverse", flow: ["Cardiac Magnetic Field", "Atomic Sensing", "Field Map and Waveform"], ov: "track", cap: "map" },
    "quantum-gravimeter": { hero: "split", flow: ["Cold Atoms", "Laser-Pulse Interferometry", "Gravity Measurement"], ov: "journey", cap: "split", icon: "quantum-sensing" },
    "rydberg-sensor": { hero: "split", flow: ["RF Field", "Rydberg Atom Response", "Optical Readout"], ov: "track", cap: "bento" }
  };
  Object.keys(D).forEach(function (k) { if (!P[k]) return; Object.assign(P[k], D[k]); P[k].logo = I(D[k].icon || k); });
  P["q-forte"].module.items.forEach(function (it) { it.logo = I(it.id); });

  /* Commercial systems, per QAIG: no academic-kit framing. */
  Object.assign(P["eps-qkd"], { tag: "Entanglement-Based QKD System",
    overview: ["An entangled photon source sends one photon of each pair to each of two remote users. Their measurements are correlated, so both build the same secret key.", "Any attempt to intercept the photons disturbs the entanglement and is revealed. Because the key comes from the measurements, the source itself doesn't need to be trusted."],
    audience: ["Government and Defence", "Banking and Finance", "Critical Infrastructure", "Telecom Operators"],
    steps: [["Generate", "The entangled photon source produces photon pairs."], ["Distribute", "One photon of each pair travels to each user over fibre or free space."], ["Measure", "Both users measure their photons and obtain correlated results."], ["Agree", "Matching results become a shared key; interference reveals eavesdropping."]],
    caps: [["Entanglement-Based Keys", "Keys come from correlated measurements of entangled photon pairs."], ["Eavesdropping Is Revealed", "Interception disturbs the entanglement and shows up in the results."], ["Untrusted Source", "The source doesn't need to be trusted, which adds a further layer of protection."], ["Fibre and Free Space", "Compatible with existing optical fibre and free-space links."]],
    module: { type: "apps", title: "Where EPS-QKD Protects", lead: "Full technical specifications are available on request.", apps: [["Secure Communications", "Key distribution that stays resilient against classical and quantum attacks."], ["Government and Defence", "Long-term protection for sensitive links."], ["Finance and Critical Infrastructure", "Keys for high-value transactions and control networks."]] },
    finalTitle: "Secure Your Links With Entanglement", finalText: "Tell us about your network and security needs. We'll share system details and options." });
  Object.assign(P["q-memory"], { tag: "Quantum Memory System",
    overview: ["Photons can't wait. To link separate nodes, a quantum network has to hold quantum information until the next link is ready and that calls for memory.", "Q-Memory maps incoming photons onto long-lived atomic spin states in a precision-engineered atomic ensemble and releases them when needed. It is engineered for low size, weight and power in a compact, 19-inch rack-compatible, field-deployable package."],
    audience: ["Quantum Network Builders", "Telecom Research", "Quantum Hardware Integrators", "Government Programmes"],
    steps: [["Capture", "An incoming light pulse enters the atomic ensemble."], ["Store", "Its quantum state is mapped onto long-lived atomic spin states."], ["Hold", "The memory keeps the state while the network synchronises."], ["Retrieve", "The stored photon is released on demand."]],
    highlight: "Storage time up to 100 μs",
    caps: [["Store and Retrieve on Demand", "Hold photonic quantum information and release it when the network is ready."], ["Synchronise Network Nodes", "Hold photons across separate nodes so links can be joined."], ["Rack-Compatible Package", "Low size, weight and power in a field-deployable, 19-inch rack format."], ["Built for Repeaters", "The capability that lets repeaters extend entanglement over long distances."]],
    finalTitle: "Add Quantum Memory to Your Network", finalText: "Tell us about your application. We'll share system details and options." });
  P["quantum-gravimeter"].highlight = "Absolute gravity measurement at μgal level";
  P["quantum-repeater"].highlight = "Compatible with standard telecom fibre";
  P["q-cluster"].audience = ["Universities and Educators", "Enterprise R&D Teams", "Quantum Software Developers", "Research Institutions"];
  P["chec-q-ai"].mapTags = ["Code", "Network", "Certificates", "URLs"];
})();

/* Subscription plans after the free software period on the Mini hardware, plus cloud access.
   Q-Cluster Mini feature rows: QCLUSTER-MINI backend feature list (plan tiers Learner, Researcher, Custom). Qubit ceilings and GPU allowance from the backend plan screens.
   PROVISIONAL — CONFIRM WITH QAIG: all monthly prices, and per-plan values for rows not shown in the backend screens. Custom = configured per contract. */
(function () {
  var P = window.QAIG_PRODUCTS; if (!P) return;
  var periods = [[30, "Monthly", 1, 0], [90, "Quarterly", 3, 0.05], [365, "Annual", 12, 0.15]];
  var C = "Configured for You";
  P["q-cluster"].module.mini.subs = {
    eyebrow: "After Your 3 Free Months", title: "Subscription Plans for Q-Cluster Mini",
    lead: "The Q-Cluster Mini software is free for the first 3 months. After that, keep it running on your unit with a monthly plan, or move your work to cloud access.",
    periods: periods,
    tracks: [
      { k: "mini", label: "On Your Q-Cluster Mini", line: "Runs locally on the Mini. No cloud dependency and no data leaving your site.",
        plans: [
          { k: "learner", name: "Learner", price: 3000, blurb: "For students and individual learners building their first circuits.", bullets: ["Circuit, Algorithm and Noise Composers", "Up to 20 qubits on CPU", "Up to 28 qubits on GPU", "Email support"] },
          { k: "researcher", name: "Researcher", price: 7500, blurb: "For researchers running deeper circuits and longer projects.", bullets: ["Everything in Learner", "Accelerated Studio", "Projects (IDE) workspaces", "Priority support"] },
          { k: "custom", name: "Custom", price: null, blurb: "Qubit ceilings, studios and GPU allowance set to your contract.", bullets: ["Every feature configurable", "Limits matched to your hardware", "Multi-unit deployments", "Dedicated support engineer"] }
        ] },
      { k: "cloud", label: "Cloud Access", line: "Hosted by Quantum AI Global. Open Q-Cluster from any browser, with or without your Mini.",
        plans: [
          { k: "learner", name: "Cloud Learner", price: 5000, blurb: "Hosted access for coursework and self-study.", bullets: ["Circuit, Algorithm and Noise Composers", "Up to 20 qubits on CPU", "Up to 28 qubits on GPU", "Email support"] },
          { k: "researcher", name: "Cloud Researcher", price: 12000, blurb: "Hosted access with the studios research teams need.", bullets: ["Everything in Cloud Learner", "QML Studio and Quantum Error Correction", "Quantum Processing Units", "Priority support"] },
          { k: "custom", name: "Cloud Custom", price: null, blurb: "Hosted capacity and limits agreed for your organisation.", bullets: ["Every feature configurable", "Dedicated capacity", "Organisation-wide access", "Dedicated support engineer"] }
        ] }
    ],
    compare: {
      rows: [
        ["Circuit Composer", "Core Circuit Composer with statevector simulation. The maximum supported qubit count is determined by the execution backend and plan."],
        ["Algorithm Composer", "Prebuilt algorithm library and runner. Subject to the same qubit ceilings as the Circuit Composer."],
        ["Noise Composer", "Custom and vendor noise models (IBM fake-backends, Quantinuum). Subject to the same qubit ceilings as the Circuit Composer."],
        ["Tensornet Composer", "Higher-qubit-count approximate simulation mode. Requires a GPU target; unavailable on CPU-only deployments."],
        ["Standard Studio", "Standard compute studio."],
        ["Accelerated Studio", "GPU-accelerated compute studio."],
        ["QML Studio", "Quantum machine learning studio. Available for cloud and academia distributions."],
        ["Quantum Error Correction", "Quantum error correction capabilities. Available for cloud and academia distributions."],
        ["Quantum Processing Units", "Submit circuits to real quantum hardware."],
        ["GPU Execution", "Whether this plan may use any GPU simulation target at all. A plan cannot add a GPU to a machine that has none."],
        ["Maximum Qubits (CPU)", "Qubit ceiling for the CPU simulation target. CPU simulation is not interactively usable above ~20 qubits on any current deployment."],
        ["Maximum Qubits (GPU)", "Qubit ceiling for GPU execution, never above what the card's VRAM supports."],
        ["Maximum Qubits (Statevector)", "Qubit ceiling for GPU statevector and sampling modes. State size is 16 bytes x 2^n, so each additional qubit doubles the VRAM required."],
        ["Projects (IDE)", "In-browser project workspaces."]
      ],
      values: {
        mini: {
          learner: [true, true, true, true, true, false, false, false, false, "Granted", "20 qubits", "28 qubits", "28 qubits", false],
          researcher: [true, true, true, true, true, true, false, false, false, "Granted", "20 qubits", "28 qubits", "28 qubits", true],
          custom: [C, C, C, C, C, C, C, C, C, C, C, C, C, C]
        },
        cloud: {
          learner: [true, true, true, true, true, false, false, false, false, "Granted", "20 qubits", "28 qubits", "28 qubits", false],
          researcher: [true, true, true, true, true, true, true, true, true, "Granted", "20 qubits", "28 qubits", "28 qubits", true],
          custom: [C, C, C, C, C, C, C, C, C, C, C, C, C, C]
        }
      }
    }
  };
  /* QNTSim Mini: PROVISIONAL — CONFIRM WITH QAIG. No backend feature list yet, so no comparison table. */
  P["qntsim"].module.mini.subs = {
    eyebrow: "After Your 3 Free Months", title: "Subscription Plans for QNTSim Mini",
    lead: "The QNTSim Mini software is free for the first 3 months. After that, keep it running on your unit with a monthly plan, or move your work to cloud access.",
    periods: periods,
    tracks: [
      { k: "mini", label: "On Your QNTSim Mini", line: "Runs locally on the Mini, connected directly to your lab devices.",
        plans: [
          { k: "learner", name: "Learner", price: 2500, blurb: "Coursework and guided protocol experiments.", bullets: ["Core network simulation", "Guided QKD and entanglement experiments", "Course templates", "Email support"] },
          { k: "researcher", name: "Researcher", price: 6000, blurb: "Research-grade protocol simulation with your hardware in the loop.", bullets: ["Full protocol library", "Hardware-in-the-loop runs", "Parameter sweeps and batch runs", "Priority support"] },
          { k: "custom", name: "Custom", price: null, blurb: "Protocols, devices and limits set to your contract.", bullets: ["Custom topologies and devices", "Multi-unit deployments", "Instructor and admin controls", "Dedicated support engineer"] }
        ] },
      { k: "cloud", label: "Cloud Access", line: "Hosted by Quantum AI Global. Open QNTSim from any browser, with or without your Mini.",
        plans: [
          { k: "learner", name: "Cloud Learner", price: 4000, blurb: "Hosted access for classrooms and self-study.", bullets: ["Core network simulation", "Guided QKD and entanglement experiments", "Course templates", "Email support"] },
          { k: "researcher", name: "Cloud Researcher", price: 10000, blurb: "Hosted access for network design studies.", bullets: ["Full protocol library", "Custom topologies", "Export results and traces", "Priority support"] },
          { k: "custom", name: "Cloud Custom", price: null, blurb: "Hosted capacity agreed for your organisation.", bullets: ["Dedicated capacity", "Organisation-wide access", "Usage analytics", "Dedicated support engineer"] }
        ] }
    ]
  };
})();

/* Q-Cluster and QNTSim pages keep their pricing module (institutional plans + cloud access plans).
   Only the Mini hardware moves to its own product page (QAIG Mini Page), read from P[k].mini. */
(function () {
  var P = window.QAIG_PRODUCTS; if (!P) return;
  [["q-cluster", "q-cluster-mini", "Q-Cluster"], ["qntsim", "qntsim-mini", "QNTSim"]].forEach(function (x) {
    var p = P[x[0]], m = p.module.mini; if (!m) return;
    m.parent = x[0]; m.slug = x[1];
    m.photos = [0, 1, 2, 3, 4, 5].map(function (i) { return "assets/products/mini/latest/cut/" + x[1] + "-" + i + ".png"; });
    p.mini = m; delete p.module.mini;
    var cloud = ((m.subs || {}).tracks || []).filter(function (t) { return t.k === "cloud"; }).map(function (t) { return Object.assign({}, t, { line: "Hosted by Quantum AI Global. Open " + x[2] + " from any browser." }); });
    if (cloud.length) p.module.cloud = { eyebrow: "Cloud Access", title: "Cloud Plans for " + x[2],
      lead: "Hosted by Quantum AI Global. Open " + x[2] + " from any browser, with no hardware to install.",
      periods: m.subs.periods, tracks: cloud, compare: m.subs.compare ? { rows: m.subs.compare.rows, values: { cloud: m.subs.compare.values.cloud } } : undefined,
      note: "You can change plan at the end of any billing period.", cloudOnly: true };
    if (m.subs) {
      m.subs.tracks = m.subs.tracks.filter(function (t) { return t.k === "mini"; });
      m.subs.lead = "The " + m.name + " software is free for the first 3 months. After that, keep it running on your unit with a plan that fits how you use it.";
    }
  });
})();
