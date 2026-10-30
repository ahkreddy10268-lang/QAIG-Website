/* QAIG product detail content. One entry per product page, keyed by slug. Layout lives in "QAIG Product Page.dc.html".
   Sources: QForte_ppt_17-04-26.pptx, QuRNG.pdf, Q_Cluster.pdf, Q-Cluster Industry Brochure_Aug25.pdf, Q-CLUSTER MINI BROCHURE.pdf.
   Values in [BRACKETS] are development placeholders and are never shown to visitors. */
window.QAIG_PRODUCTS = {
  "q-forte": {
    name: "Q-Forte", domain: "PQC", tag: "Quantum Assured InfoSec Platform", logo: "assets/products/QFORTE_ICON.png", status: "stack", ill: "q-forte",
    verified: "Sources: QForte Deck Slides 3–13, QuRNG Brochure. Step Order Is a Storytelling Order. PROVISIONAL — CONFIRM WITH QAIG",
    headline: "Quantum-Safe Security, Assembled as One Stack",
    lead: "Q-Forte Brings Together Three Products That Help an Organisation Find Quantum-Vulnerable Cryptography, Protect Data in Transit and Add Quantum-Generated Randomness to Its Security Operations.",
    primary: { label: "Discuss Your Requirements", to: "enquiry" }, secondary: { label: "See the Stack", to: "#module" },
    overviewTitle: "Preparing Enterprise Security for the Quantum Era",
    overview: [
      "Much of Today's Encryption Relies on Public-Key Algorithms Such as RSA and ECC, Which a Sufficiently Capable Quantum Computer Is Expected to Break. Organisations Need to Know Where These Algorithms Are Used Before They Can Migrate.",
      "Q-Forte Is a Quantum Security Assurance Suite. It Pairs Cryptographic Vulnerability Assessment With a Quantum-Safe VPN and Quantum Random Number Generation, so the Move to Post-Quantum Cryptography Can Be Planned and Carried Out With Crypto-Agility."
    ],
    audience: ["Enterprise Security Teams", "CISOs and Compliance Leads", "Government and Critical Infrastructure", "Financial Services"],
    steps: [
      ["Discover", "Chec-Q AI Scans Websites, Networks, Source Code and Certificates to Build a Cryptographic Inventory and Flag Quantum-Vulnerable Algorithms."],
      ["Plan", "Findings Feed a Cryptographic Bill of Materials and a Post-Quantum Migration Roadmap."],
      ["Protect", "Q-Sleeve Applies Quantum-Safe Encryption to Data Moving Across Cloud, On-Premises and Network Infrastructure."],
      ["Strengthen", "QuRNG Supplies Quantum-Generated Random Numbers for Keys, Tokens and Other Cryptographic Operations."]
    ],
    caps: [
      ["Cryptographic Inventory", "Discover the Algorithms, Protocols and Certificates in Use Across Your IT Estate."],
      ["Migration Planning and Monitoring", "Turn Findings Into a Migration Roadmap, Then Track Posture With Historical Scans and an Audit Trail."],
      ["Quantum-Safe Communication", "Protect Data in Transit With a VPN Built to NIST Post-Quantum Standards."],
      ["Quantum Randomness", "Draw Random Numbers From a Quantum Process Without Dedicated Quantum Hardware on Site."]
    ],
    module: {
      type: "stack", title: "Three Products, One Security Journey",
      lead: "Each Product Can Be Discussed on Its Own. Together They Cover Discovery, Protection and Randomness.",
      items: [
        { id: "chec-q-ai", verb: "Discover Exposure", name: "Chec-Q AI", logo: "assets/products/CHECQ_WN.png", line: "A Cryptographic Risk Manager That Finds Where Quantum-Vulnerable Cryptography Is Used.", points: ["Code, Network, Certificate and URL Analysis", "Cryptographic Bill of Materials", "Post-Migration Compliance Monitoring"] },
        { id: "q-sleeve", verb: "Protect Communication", name: "Q-Sleeve", logo: "assets/products/QSLEEVE_WN.png", line: "A Quantum-Safe VPN and Security Layer for Data in Transit.", points: ["Cloud, On-Premises and Network Coverage", "Crypto-Agile by Design", "Integrates With Existing Systems and Protocols"] },
        { id: "qurng", verb: "Add Quantum Randomness", name: "QuRNG", logo: "assets/products/QuRNG_WN.png", line: "A Hardware-Agnostic Quantum Random Number Generator.", points: ["No Dedicated Quantum Hardware Required", "Accessible From Any Smart Device", "Keys, Tokens and OTP Generation"] }
      ],
      customTitle: "Built Around Your Requirements",
      custom: "Explore the Q-Forte Capabilities That Align With Your Organisation's Security Needs. Our Team Can Discuss Product Selection, Customisation and an Appropriate Solution for Your Requirements.",
      customCta: "Discuss Your Requirements"
    },
    related: [],
    finalTitle: "Plan Your Move to Post-Quantum Security",
    finalText: "Tell Us About Your Systems and Timelines. We Will Help You Decide Where Q-Forte Fits.",
    finalCta: "Discuss Your Requirements"
  },
  "q-cluster": {
    name: "Q-Cluster", domain: "QIS", tag: "Quantum Simulation, Local or Cloud", logo: "assets/products/QCLUSTER_WN.png", status: "ready", ill: "q-cluster",
    verified: "Sources: Q_Cluster.pdf p1–2, Q-Cluster industry brochure p1, Q-Cluster mini brochure p1. Offering names follow the three brochures. Prices: [PRICE TO CONFIRM], billing: [BILLING INTERVAL TO CONFIRM], destination: [DESTINATION TO CONFIRM]. PROVISIONAL — CONFIRM WITH QAIG",
    headline: "A Quantum Computing Lab Without the Quantum Computer",
    lead: "Q-Cluster Is a Quantum Simulation Platform for Learning, Algorithm Development and Application Prototyping. Run Circuits in Ideal Conditions or Under Configurable Noise, on CPU, GPU and HPC Infrastructure.",
    primary: { label: "Discuss Q-Cluster", to: "enquiry" }, secondary: { label: "View Offerings", to: "#module" },
    overviewTitle: "From First Circuit to Quantum Application",
    overview: [
      "Quantum Hardware Is Scarce and Expensive, and Real Processors Are Noisy. Q-Cluster Lets Students, Researchers and Engineering Teams Design and Test Quantum Algorithms on Classical Infrastructure First.",
      "It Supports Both Ideal State-Vector Simulation and Noise-Modelled Execution, so Users Can See How Gate Errors, Decoherence and Readout Noise Change an Algorithm's Results Before Running It on a Quantum Processor."
    ],
    audience: ["Universities and Educators", "Students and Researchers", "Enterprise R&D Teams", "Quantum Software Developers"],
    steps: [
      ["Build", "Design Circuits in a Drag-And-Drop Interface, or Work in Familiar Frameworks Such as Qiskit and PennyLane."],
      ["Simulate", "Choose Statevector, Density-Matrix or Tensor-Network Simulation to Suit the Circuit and the Available Compute."],
      ["Add Noise", "Apply Gate, Decoherence and Readout Noise Models to Approximate the Behaviour of Real Processors."],
      ["Analyse", "Read Probability Distributions and Bloch-Sphere Views, Then Compare Results With Classical Approaches."]
    ],
    caps: [
      ["Guided Quantum Learning", "Tutorials and Guided Modules for Classrooms and Laboratories, in a Multi-User, JupyterHub-compatible Environment."],
      ["Noise Modelling", "Study How Realistic Errors Affect an Algorithm, and Approximate Processor Behaviour for NISQ-era Research."],
      ["Scalable Infrastructure", "Grow From Basic Server-Class Compute to Hybrid CPU–GPU HPC Systems as Circuits Get Deeper."],
      ["Hardware-Agnostic Execution", "Keep One Workflow Across CPU, GPU and HPC, With Execution on QPU Platforms Such as IBM and IQM."]
    ],
    module: {
      type: "pricing", title: "Choose How You Run Q-Cluster",
      lead: "Pricing Depends on Deployment, Number of Users and Compute. Our Team Will Share Plan Details for Your Requirements.",
      plans: [
        { name: "Q-Cluster for Education", for: "Universities and Training Labs", line: "Classroom and Laboratory Deployment With Guided Modules and a Multi-User Environment.", points: ["Guided Algorithm Tutorials", "Multi-User Classroom Access", "Ideal and Noise-Enabled Simulation"], price: "[PRICE TO CONFIRM]", interval: "[BILLING INTERVAL TO CONFIRM]", cta: "Request Plan Details", href: "enquiry" },
        { name: "Q-Cluster for Enterprise", for: "Industry and R&D Teams", line: "An Application Development Environment With Quantum Projects, Benchmarking and Execution Across CPU, GPU, HPC and QPU.", points: ["Quantum Projects Workspace", "Benchmarking Against Classical Methods", "Qiskit, PennyLane and PyTorch Integration"], price: "[PRICE TO CONFIRM]", interval: "[BILLING INTERVAL TO CONFIRM]", cta: "Request Plan Details", href: "enquiry" }
      ],
      /* Pricing source: QulabsBlackVersion src/data/marketing/pricing.ts (tier QCluster-Mini, upfront 30000) and src/lib/trial.ts (HARDWARE_TRIAL_DAYS 90). */
      mini: { name: "Q-Cluster Mini", kicker: "Your Own Quantum Compute Unit", line: "High-Performance Quantum Simulation Running Locally, With No Cloud Dependency and No Data Leaving Your Site. Built for Researchers, Universities, Startups and Innovation Teams.", points: ["Personal, Portable Hardware", "Curated Set of 10 Essential Algorithms", "Per-Gate Noise Modelling"],
        features: ["High-Performance Local Quantum Computing", "Zero Cloud Dependency", "Complete Software Stack Included", "1-Year Hardware Warranty", "Onsite Installation and Setup"], bestFor: ["Researchers", "Universities", "Startups", "Academic Labs"],
        photos: [0, 1, 2, 3, 4, 5].map((i) => "assets/products/mini/q-cluster-mini-" + i + ".png"), photoAlt: "Q-Cluster Mini Hardware Unit",
        price: "₹30,000", priceNote: "One-Time Hardware Purchase", trialDays: 90, cta: "Buy Q-Cluster Mini", href: "enquiry" },
      publicPrice: "Contact Us for Plan Details"
    },
    related: [["QNTSim", "Simulate Quantum Networks the Same Way Q-Cluster Simulates Circuits."], ["QubitIQ", "AI-assisted Design of Quantum Algorithms and Logic."]],
    finalTitle: "Bring Quantum Simulation to Your Team",
    finalText: "Tell Us Who Will Use Q-Cluster and What You Want to Build. We Will Recommend a Deployment.",
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
    lead: "Chec-Q AI Scans Code, Networks, Certificates and Public URLs to Find Quantum-Vulnerable Cryptography, Then Helps You Plan and Monitor the Move to Post-Quantum Standards.",
    primary: qf, secondary: { label: "View the Q-Forte Stack", to: "Q-Forte.dc.html" },
    overviewTitle: "An Inventory Before a Migration",
    overview: ["Organisations Can't Migrate Cryptography They Can't See. Algorithms Such as RSA and ECC Sit Inside Software, Protocols and Certificates Across the Estate.", "Chec-Q AI Builds a Cryptographic Bill of Materials, Assesses the Associated Risk and Supports a Post-Quantum Migration Roadmap, Followed by Compliance Monitoring Once Migration Is Under Way."],
    audience: ["CISOs and Security Teams", "Compliance and Audit", "Enterprise IT", "Critical Infrastructure"],
    steps: [["Scan", "Analyse Source Code, Network Traffic, Certificates and URLs for Cryptographic Usage."], ["Identify", "Flag Deprecated and Quantum-Vulnerable Algorithms, Weak Handshakes and Insecure Cipher Suites."], ["Assess", "Score Risk and Build a Cryptographic Bill of Materials Across Your Assets."], ["Monitor", "Track Readiness Over Time With Historical Scans, a Dashboard and an Audit Trail."]],
    caps: [["Code Analysis", "Find Insecure or Quantum-Vulnerable Algorithms and Libraries Inside Codebases."], ["Network Analysis", "Discover Active Protocols and Cipher Suites, and Monitor for Evolving Risk."], ["Certificate Analysis", "Discover X.509 Certificates and Flag Expired, Misconfigured or Vulnerable Ones."], ["URL Analysis", "Check the Cryptographic Posture of Public-Facing Web Assets and Dependencies."]],
    module: apps("Where Chec-Q AI Helps", "Chec-Q AI Is Part of Q-Forte. It Can Be Discussed on Its Own or With Q-Sleeve and QuRNG.", [["Migration Planning", "Prioritise What to Migrate First Using a Complete Cryptographic Inventory."], ["Regulatory Readiness", "Measure Assets Against Target Standards and Timelines."], ["Continuous Assurance", "Keep Watching for New Weaknesses After Migration."]]),
    related: [["Q-Sleeve", "Protect Data in Transit Once Exposure Is Understood."], ["QuRNG", "Quantum-Generated Randomness for Keys and Tokens."]],
    finalTitle: "Start With a Clear View of Your Cryptography", finalText: "Tell Us About Your Environment and We'll Discuss an Assessment as Part of Q-Forte.", finalCta: "Discuss Your Requirements" };
  P["q-sleeve"] = { name: "Q-Sleeve", domain: "PQC", stack: true, tag: "Quantum-Safe VPN & Security", logo: "assets/products/QSLEEVE_WN.png", status: "ready", ill: "q-sleeve",
    headline: "Wrap Every Connection in Quantum-Safe Protection",
    lead: "Q-Sleeve Is a Quantum-Safe VPN and Security Layer That Moves Cloud, On-Premises and Network Traffic to NIST Post-Quantum Standards With Crypto-Agility.",
    primary: qf, secondary: { label: "View the Q-Forte Stack", to: "Q-Forte.dc.html" },
    overviewTitle: "Protection for Data That Must Stay Confidential",
    overview: ["Data Captured Today Could Be Decrypted Later by a Capable Quantum Computer. Traffic Between Sites, Users and Cloud Services Needs Protection That Will Hold Up.", "Q-Sleeve Integrates Into Existing Systems and Protocols, so Organisations Can Adopt Post-Quantum Encryption Without Rebuilding Their Infrastructure."],
    audience: ["Enterprise Networks", "Cloud and Hybrid IT", "Financial Transactions", "Government and Defence"],
    steps: [["Connect", "Deploy Alongside Existing Infrastructure, Servers and Networks."], ["Encrypt", "Apply Post-Quantum Encryption to Data in Transit."], ["Adapt", "Switch Algorithms as Standards Evolve, Without Re-Architecting."], ["Scale", "Extend Protection Across Enterprise, Cloud, Web and IoT Environments."]],
    caps: [["Future-Proof Encryption", "Guards Data Against Emerging Quantum Computing Capabilities."], ["Cryptographic Rigour", "Built on Established Cryptographic and Mathematical Foundations."], ["Versatile Integration", "Works With Existing Systems and Protocols."], ["Adaptive Security", "A Scalable Stack Designed for Crypto-Agility."]],
    module: apps("Where Q-Sleeve Fits", "Q-Sleeve Is Part of Q-Forte. It Can Be Discussed on Its Own or With Chec-Q AI and QuRNG.", [["Site-To-Site Links", "Protect Traffic Between Offices, Data Centres and Cloud Regions."], ["Remote Access", "Secure Users Connecting to Enterprise Resources."], ["Transactions and IoT", "Protect High-Value or Long-Lived Data Moving Between Devices and Services."]]),
    related: [["Chec-Q AI", "Find Where Quantum-Vulnerable Cryptography Is in Use."], ["QuRNG", "Quantum-Generated Randomness for Keys and Tokens."]],
    finalTitle: "Protect Data in Transit for the Quantum Era", finalText: "Tell Us How Your Traffic Flows and We'll Discuss Deploying Q-Sleeve Within Q-Forte.", finalCta: "Discuss Your Requirements" };
  P["qurng"] = { name: "QuRNG", domain: "PQC", stack: true, tag: "Quantum Random Generations", logo: "assets/products/QuRNG_WN.png", status: "ready", ill: "qurng",
    headline: "Quantum Randomness Without Quantum Hardware On Site",
    lead: "QuRNG Is a Hybrid Quantum-Classical Random Number Generator. It Draws on Gate-Based Quantum Computers as an Entropy Source and Delivers Random Numbers as a Scalable Service.",
    primary: qf, secondary: { label: "View the Q-Forte Stack", to: "Q-Forte.dc.html" },
    overviewTitle: "Randomness You Don't Have to Take on Trust",
    overview: ["Keys, Tokens and One-Time Passwords Are Only as Strong as the Randomness Behind Them. Hardware Quantum RNGs Are Costly and Require Users to Trust the Vendor.", "QuRNG Runs a Quantum Subroutine on Compatible Quantum Computers and Combines It With the Scalability of Software Generators, so Applications Can Integrate Quantum Randomness Easily."],
    audience: ["Security and Key Management", "Digital Payments", "Gaming and Lotteries", "Simulation and Modelling"],
    steps: [["Source", "Choose an Entropy Source From Supported Quantum Hardware."], ["Generate", "A Quantum Subroutine Produces Random Bits."], ["Process", "Results Are Post-Processed and Held in a Secure Vault."], ["Deliver", "Clients Receive Random Numbers Over a Quantum-Safe Channel."]],
    caps: [["Hardware Agnostic", "No Dedicated Quantum Hardware Is Needed at Your Site."], ["Parallel Sources", "Run Multiple QRNGs in Parallel and Select the Entropy Source."], ["Quantum-Safe Delivery", "Random Numbers Travel Over Post-Quantum Encrypted Channels."], ["Easy Integration", "Accessible From Any Smart Device and Adaptable to Applications."]],
    module: apps("Where Randomness Matters", "QuRNG Is Part of Q-Forte. It Can Be Discussed on Its Own or With Chec-Q AI and Q-Sleeve.", [["Tokens and OTPs", "Secure Token and One-Time Password Generation for Digital Payments."], ["Identity and Access", "Stronger Keys for Identity and Access Management."], ["Monte Carlo and Risk", "Randomness for Simulations, Option Pricing and Risk Models."]]),
    related: [["Chec-Q AI", "Find Where Quantum-Vulnerable Cryptography Is in Use."], ["Q-Sleeve", "Protect Data in Transit With a Quantum-Safe VPN."]],
    finalTitle: "Add Quantum Randomness to Your Security", finalText: "Tell Us Where You Need Random Numbers and We'll Discuss QuRNG Within Q-Forte.", finalCta: "Discuss Your Requirements" };
  P["qubitiq"] = { name: "QubitIQ", domain: "QIS", tag: "AI-Driven Algorithms & Logic", logo: "assets/products/QUBITIQ_WN.png", status: "rnd", ill: "qubitiq",
    headline: "From Problem Statement to Quantum Algorithm, Faster",
    lead: "QubitIQ Applies AI to Quantum Algorithm Development, Recommending Suitable Encodings and Optimised Circuits Across Classical, Quantum and Hybrid Computing.",
    primary: { label: "Discuss This Research", to: "enquiry" }, secondary: { label: "How It Works", to: "#overview" },
    overviewTitle: "Choosing the Right Circuit Is Getting Harder",
    overview: ["As Quantum Algorithms Multiply, Deciding Which Encoding and Circuit Suit a Problem Has Become Slow and Specialised Work.", "QubitIQ Is Designed to Give Context-Aware Recommendations so Teams Spend Less Time Searching and More Time Building. It Is in Research and Development."],
    audience: ["Quantum Algorithm Researchers", "Enterprise Innovation Teams", "Finance and Logistics", "Energy and Pharma"],
    steps: [["Describe", "Start From the Problem and Its Constraints."], ["Map", "Match the Problem to Suitable Encodings and Algorithm Families."], ["Recommend", "Receive AI-assisted Circuit Suggestions."], ["Optimise", "Refine Circuits for the Target Hardware."]],
    caps: [["Unified Platform", "Brings Classical, Quantum and Hybrid Computing Together."], ["Intelligent Recommendations", "AI-augmented Encoding and Circuit Optimisation."], ["Problem-Agnostic", "Designed to Adapt to Diverse Domains and Computational Challenges."]],
    module: apps("Research Direction", "QubitIQ Is in Research and Development and Is Not yet Offered as a Product.", [["Optimisation Problems", "Logistics, Scheduling and Portfolio Questions."], ["Quantum Machine Learning", "Encodings and Circuits for Learning Workloads."], ["Simulation", "Problems in Energy, Chemistry and Materials."]], "In Research and Development"),
    related: [["Q-Cluster", "Simulate and Test the Circuits QubitIQ Recommends."]],
    finalTitle: "Interested in AI-Assisted Quantum Development?", finalText: "Tell Us About Your Problem Domain. We're Happy to Discuss Our Research.", finalCta: "Discuss This Research" };
  P["eps-qkd"] = { name: "EPS-QKD", domain: "NET", tag: "Entanglement Educational Kit", logo: "assets/products/EPSQKD_WN.png", status: "ready", ill: "eps-qkd", photo: "assets/products/photos/eps-qkd.jpg",
    headline: "Hands-On Entanglement and Quantum Key Distribution",
    lead: "EPS-QKD Is an Experimentation Kit for Academia That Generates Entangled Photon Pairs and Uses Them to Demonstrate Quantum Key Distribution in One Integrated Unit.",
    primary: { label: "Enquire About EPS-QKD", to: "enquiry" }, secondary: { label: "How It Works", to: "#overview" },
    overviewTitle: "Entanglement You Can Measure in the Lab",
    overview: ["Entanglement-Based QKD Is Central to Quantum Networking, but Building a Working Setup From Components Is Demanding.", "EPS-QKD Packages an Entangled Photon Source With the Collection and Detection Needed to Study Entanglement and Run a QKD Experiment, Including Key Distribution and Error-Rate Analysis."],
    audience: ["Universities", "Quantum Optics Labs", "Students and Researchers", "Training Centres"],
    steps: [["Generate", "An Entangled Photon Source Produces Photon Pairs."], ["Separate", "The Two Photons of Each Pair Are Routed to Separate Parties."], ["Measure", "Each Party Measures Its Photons to Build Correlated Results."], ["Distil", "Compare Results to Derive a Shared Key and Estimate the Error Rate."]],
    caps: [["Integrated Photon Source", "High-Brightness Entangled Pairs With Controllable Stability."], ["Complete QKD Experiment", "Run Key Distribution With an Entanglement-Based Protocol."], ["Error and Noise Analysis", "Study Quantum Bit Error Rate and Signal-To-Noise Ratio."], ["All-In-One Unit", "One System for Studying Entanglement and Its Application to QKD."]],
    module: apps("Built for Teaching and Research", "Detailed Specifications and Configuration Are Available on Enquiry.", [["Undergraduate Labs", "Introduce Entanglement and Quantum Correlations."], ["Postgraduate Research", "Benchmark Entanglement-Based Experiments."], ["Network Training", "Connect Theory With QNTSim Simulations."]]),
    related: [["Q-Memory", "Store and Retrieve Light for Quantum Networking."], ["QNTSim", "Simulate QKD Protocols Before Running Them in Hardware."]],
    finalTitle: "Bring Entanglement Into Your Lab", finalText: "Tell Us About Your Course or Research. We'll Share Kit Details and Options.", finalCta: "Enquire About EPS-QKD" };
  P["q-memory"] = { name: "Q-Memory", domain: "NET", tag: "Quantum Memory Hardware", logo: "assets/products/QMEMORY_WN.png", status: "ready", ill: "q-memory", photo: "assets/products/photos/q-memory.jpg",
    headline: "Store Light, Then Release It on Demand",
    lead: "Q-Memory Is a Room-Temperature, Rubidium-Vapour Quantum Memory Experimentation Kit for Generating, Storing and Retrieving Photonic Pulses.",
    primary: { label: "Enquire About Q-Memory", to: "enquiry" }, secondary: { label: "How It Works", to: "#overview" },
    overviewTitle: "Why Quantum Networks Need Memory",
    overview: ["Quantum Networks Must Hold Quantum States While Links Between Nodes Are Being Established. Memory Is What Makes That Synchronisation Possible.", "Q-Memory Demonstrates Storage and Retrieval of Polarisation Pulses in a Hot Rubidium Vapour at Room Temperature, With an Input Laser Control System for Programming Pulse Sequences."],
    audience: ["Quantum Optics Labs", "Universities", "Quantum Networking Research", "Atomic Physics Groups"],
    steps: [["Prepare", "The Input Laser Control System Shapes the Probe and Control Pulses."], ["Store", "A Light Pulse Is Absorbed and Held in the Atomic Vapour."], ["Hold", "The Memory Keeps the Information While the Control Light Is Off."], ["Retrieve", "Switching the Control Back on Releases the Stored Pulse."]],
    caps: [["Room-Temperature Operation", "No Cryogenics Are Needed."], ["Polarisation Pulse Storage", "Store and Retrieve Photonic Polarisation Pulses."], ["Alignment-Free Operation", "Long-Lasting, Shielded Design That Resists Magnetic Noise."], ["Upgrade Path", "Designed to Be Upgradable Towards Single-Photon-Level Memory."]],
    module: apps("Experiments It Supports", "Detailed Specifications and Configuration Are Available on Enquiry.", [["Storage and Retrieval", "Characterise Storage and Retrieval of Light Pulses."], ["Atomic Physics", "Explore Light-Atom Interaction in Rubidium Vapour."], ["Network Building Blocks", "Study the Role of Memory in Quantum Repeaters."]]),
    related: [["EPS-QKD", "Generate and Measure Entangled Photon Pairs."], ["Quantum Repeater", "Long-Distance Modules That Build on Quantum Memory."]],
    finalTitle: "Add Quantum Memory to Your Lab", finalText: "Tell Us About Your Experiments. We'll Share Kit Details and Options.", finalCta: "Enquire About Q-Memory" };
  P["qntsim"] = { name: "QNTSim", domain: "NET", tag: "Quantum Network Simulator", logo: "assets/products/QNTSIM_WN.png", status: "ready", ill: "qntsim",
    verified: "Source: QNTSim.pdf p1–2. QNTSim Mini is named in the brief only; no source document found. Prices: [PRICE TO CONFIRM]. PROVISIONAL — CONFIRM WITH QAIG",
    headline: "Every Student Builds a Quantum Network",
    lead: "QNTSim Is a Quantum Network Simulator for Academia and Research Training. Design Networks, Run Protocols and See How Entanglement and Noise Behave, Without an Optical Bench.",
    primary: { label: "Discuss QNTSim", to: "enquiry" }, secondary: { label: "View Offerings", to: "#module" },
    overviewTitle: "Learn Quantum Networking by Building It",
    overview: ["Quantum Networking Hardware Is Scarce, and Lab Time Is Limited. Students and Instructors Need a Way to Explore Protocols and Failure Modes Freely.", "QNTSim Models Nodes, Channels, Detectors, Sources and Memories, so Learners Can Watch Entanglement Being Generated, Purified and Swapped and See How Parameters Change the Results."],
    audience: ["Universities and Instructors", "Students", "Research Labs", "Network Planners"],
    steps: [["Design", "Drag and Drop Nodes and Links to Build a Network Topology."], ["Configure", "Set Channel Length, Attenuation, Detector Efficiency and Memory Fidelity."], ["Simulate", "Run Single, Sweep or Batch Simulations of a Chosen Protocol."], ["Interpret", "Review Outputs, Statistics and Inferences for Each Run."]],
    caps: [["Intuitive GUI", "Design Networks and Rerun Experiments From Configurable Control Panels."], ["Entanglement Engine", "Generation, Purification and Swapping Across Network Nodes."], ["Physics-Grounded Outputs", "See How Coherence Time, Detector Efficiency and Noise Affect Results."], ["Flexible Deployment", "Cloud, On-Premises or Application-Based, on All Major Operating Systems."]],
    module: { type: "pricing", title: "Choose How You Run QNTSim", lead: "Pricing Depends on Deployment and Number of Users. Our Team Will Share Plan Details for Your Requirements.",
      plans: [
        { name: "QNTSim for Teaching", for: "Universities and Classrooms", line: "Guided Protocol Simulations With Overview, Statistics and Inferences for Each Experiment.", points: ["Included Guided Experiments", "QKD and Entanglement Protocols", "Classroom Deployment"], price: "[PRICE TO CONFIRM]", interval: "[BILLING INTERVAL TO CONFIRM]", cta: "Request Plan Details" },
        { name: "QNTSim for Research", for: "Research Labs", line: "Customisable Topologies and Parameter Sweeps for Network Design Studies.", points: ["Custom Topologies", "Parameter Sweep and Batch Runs", "Cloud or On-Premises"], price: "[PRICE TO CONFIRM]", interval: "[BILLING INTERVAL TO CONFIRM]", cta: "Request Plan Details" }
      ],
      /* PROVISIONAL — CONFIRM WITH QAIG: QNTSim Mini scope, features and price are unconfirmed. */
      /* Pricing source: QulabsBlackVersion src/data/marketing/pricing.ts (tier QNTSim-Mini, upfront 30000) and src/lib/trial.ts (HARDWARE_TRIAL_DAYS 90). */
      mini: { name: "QNTSim Mini", kicker: "Local Quantum Network Simulator", line: "Your Own QNTSim Hardware Unit for Hardware-In-The-Loop Network Simulation, With the Software Free for the First 3 Months.", points: ["Hardware-In-The-Loop Simulation", "Direct Device Integration", "Complete Software Stack"],
        features: ["Hardware-In-The-Loop Simulation", "Direct Device Integration", "Complete Software Stack", "1-Year Hardware Warranty", "Onsite Installation and Calibration"], bestFor: ["Researchers", "Universities", "Startups", "Academic Labs"],
        photos: [0, 1, 2, 3, 4, 5].map((i) => "assets/products/mini/qntsim-mini-" + i + ".png"), photoAlt: "QNTSim Mini Hardware Unit", price: "₹30,000", priceNote: "One-Time Hardware Purchase", trialDays: 90, cta: "Buy QNTSim Mini" },
      publicPrice: "Contact Us for Plan Details" },
    related: [["Q-Cluster", "Simulate Quantum Circuits and Algorithms."], ["EPS-QKD", "Run Entanglement-Based QKD in Real Hardware."]],
    finalTitle: "Bring Quantum Networking Into the Classroom", finalText: "Tell Us Who Will Use QNTSim and How. We'll Recommend a Deployment.", finalCta: "Discuss QNTSim" };
  P["quantum-repeater"] = { name: "Quantum Repeater", domain: "NET", tag: "Long-Distance Signal Modules", logo: "", status: "rnd", ill: "quantum-repeater",
    headline: "Extending Quantum Links Over Long Distances",
    lead: "Our Quantum Repeater Research Explores Modules Intended to Carry Quantum Signals Further by Dividing a Long Link Into Shorter Connected Segments.",
    primary: { label: "Discuss This Research", to: "enquiry" }, secondary: { label: "How It Works", to: "#overview" },
    overviewTitle: "Why Distance Is Hard for Quantum Signals",
    overview: ["Quantum Signals Weaken Over Distance and Can't Simply Be Amplified. Repeaters Are the Approach Being Researched to Overcome This Limit.", "This Programme Is in Research and Development and Is Not yet Offered as a Product."],
    audience: ["Quantum Network Research", "Telecom Research Groups", "Government Programmes"],
    steps: [["Segment", "Split a Long Link Into Shorter Segments."], ["Entangle", "Establish Entanglement Across Each Segment."], ["Store", "Hold States in Quantum Memory Until Neighbouring Links Are Ready."], ["Swap", "Join Segments to Extend Entanglement End to End."]],
    caps: [["Segmented Links", "A Modular Approach to Long-Distance Quantum Communication."], ["Memory-Based", "Builds on QAIG's Quantum Memory Work."], ["Simulated First", "Repeater Behaviour Can Be Explored in QNTSim."]],
    module: apps("Research Context", "Quantum Repeater Is in Research and Development.", [["Long-Distance QKD", "Extending Key Distribution Beyond Single-Link Limits."], ["Quantum Internet", "Connecting Distant Quantum Nodes."]], "In Research and Development"),
    related: [["Q-Memory", "Room-Temperature Quantum Memory Hardware."], ["QNTSim", "Simulate Repeater Nodes, Swapping and Purification."]],
    finalTitle: "Interested in Long-Distance Quantum Links?", finalText: "We're Happy to Discuss Our Research With Partners and Institutions.", finalCta: "Discuss This Research" };
  P["q-biosensor"] = { name: "Q-Biosensor", domain: "SEN", tag: "Biological Molecular Sensing", logo: "assets/products/QSENSING_WN.png", status: "ready", ill: "q-biosensor",
    verified: "Consolidated per QAIG: Quantum Biosensor, Magnetocardiograph and Quantum Sensing and Atomic Physics Experimentation Kit. No Clinical Claims. PROVISIONAL — CONFIRM WITH QAIG",
    headline: "Atomic Sensing for Very Weak Biological Signals",
    lead: "Q-Biosensor Applies Atom-Based Quantum Sensing to the Measurement of Weak Magnetic Signals, Including Those Associated With the Heart, at Room Temperature.",
    primary: { label: "Enquire About Q-Biosensor", to: "enquiry" }, secondary: { label: "How It Works", to: "#overview" },
    overviewTitle: "Measuring Fields Conventional Sensors Struggle With",
    overview: ["Biological Magnetic Signals Are Extremely Faint. Detecting Them Usually Calls for Specialised, Costly Instruments.", "Q-Biosensor Uses a Laser Locked to Rubidium Atoms as the Sensing Element. Changes in the Magnetic Field Shift the Atoms' Energy Levels, and That Shift Is Read Out Optically."],
    audience: ["Biomedical Research", "Sensing Research Labs", "Universities", "Instrument Developers"],
    steps: [["Prepare", "A Stabilised Laser Prepares Rubidium Atoms in a Vapour Cell."], ["Sense", "A Magnetic Field Shifts the Atoms' Energy Levels."], ["Read Out", "The Shift Changes How the Atoms Interact With Light."], ["Interpret", "Software Converts the Optical Signal Into a Field Measurement."]],
    caps: [["Room-Temperature Atoms", "Rubidium Vapour Sensing Without Cryogenics."], ["Integrated Laser", "A Compact, Stabilised Laser System With Frequency Locking."], ["Alignment-Free", "Long-Lasting Operation With an Intuitive Software Interface."]],
    module: apps("Application Context", "Q-Biosensor Is Intended for Research Use. Detailed Specifications Are Available on Enquiry.", [["Magnetocardiography Research", "Study Heart-Related Magnetic Signals in a Research Setting."], ["Magnetometry", "Controlled Measurement of Weak Magnetic Fields."], ["Teaching", "From Atomic Spectroscopy to Quantum Sensing."]]),
    related: [["Rydberg Sensor", "Atom-Based Sensing of RF and Microwave Fields."], ["ECDL", "The Narrow-Linewidth Laser Behind Atomic Sensing."]],
    finalTitle: "Explore Quantum Biosensing", finalText: "Tell Us About Your Research Application and We'll Share Details.", finalCta: "Enquire About Q-Biosensor" };
  P["quantum-gravimeter"] = { name: "Quantum Gravimeter", domain: "SEN", tag: "Precision Gravity Mapping", logo: "", status: "rnd", ill: "quantum-gravimeter",
    headline: "Measuring Gravity With Falling Atoms",
    lead: "Our Quantum Gravimeter Research Uses Atom Interferometry to Explore Precise Measurement of Local Gravity.",
    primary: { label: "Discuss This Research", to: "enquiry" }, secondary: { label: "How It Works", to: "#overview" },
    overviewTitle: "Atoms as the Reference Mass",
    overview: ["An Atom Interferometer Splits and Recombines Clouds of Atoms With Light. Gravity Changes the Phase Between the Two Paths, and That Phase Can Be Measured.", "This Programme Is in Research and Development and Is Not yet Offered as a Product."],
    audience: ["Geophysics Research", "Navigation Research", "Universities"],
    steps: [["Cool", "Lasers Prepare a Cloud of Cold Atoms."], ["Split", "Light Pulses Place Atoms on Two Paths."], ["Fall", "The Paths Evolve Under Gravity."], ["Recombine", "Interference Reveals the Gravitational Phase."]],
    caps: [["Atom Interferometry", "Light-Pulse Interferometry With Cold Atoms."], ["Laser-Based", "Builds on QAIG's Laser and Atomic Physics Work."]],
    module: apps("Research Context", "Quantum Gravimeter Is in Research and Development.", [["Gravity Mapping", "Surveying Local Variations in Gravity."], ["Inertial Sensing", "Atom-Based Measurement for Navigation Research."]], "In Research and Development"),
    related: [["ECDL", "Narrow-Linewidth Lasers for Atomic Physics."], ["Rydberg Sensor", "Atom-Based Sensing of RF and Microwave Fields."]],
    finalTitle: "Interested in Quantum Gravimetry?", finalText: "We're Happy to Discuss Our Research With Partners and Institutions.", finalCta: "Discuss This Research" };
  P["rydberg-sensor"] = { name: "Rydberg Sensor", domain: "SEN", tag: "RF & Microwave Field Tech", logo: "", status: "rnd", ill: "rydberg-sensor",
    headline: "Atoms That Sense Radio and Microwave Fields",
    lead: "The Rydberg Sensor Is a Tabletop Prototype That Measures RF Electric Fields With Room-Temperature Rubidium Atoms Excited to Rydberg States.",
    primary: { label: "Discuss This Research", to: "enquiry" }, secondary: { label: "How It Works", to: "#overview" },
    overviewTitle: "A Different Kind of Antenna",
    overview: ["Conventional RF Measurement Relies on Calibrated Antennas. Rydberg Atoms Respond Strongly to Electric Fields, so the Atoms Themselves Can Act as the Sensor.", "Two near-infrared lasers prepare and probe the atoms; an RF field changes their optical response, which is read out as a measurement. The sensor is a research prototype."],
    audience: ["RF and EMC Engineers", "Metrology Labs", "Defence Research", "Telecom Research"],
    steps: [["Excite", "Two Lasers Excite Rubidium Atoms to a Rydberg State."], ["Expose", "An RF or Microwave Field Interacts With the Atoms."], ["Probe", "The Field Changes How the Atoms Absorb Light."], ["Measure", "The Optical Change Is Converted Into a Field Reading."]],
    caps: [["Broadband Tunability", "Measure Fields Across Different Frequency Bands."], ["Calibration-Free Principle", "Measurement Tied to Atomic Properties."], ["Real-Time Measurement", "Live Readout of Field Strength."]],
    module: apps("Research Applications", "The Rydberg Sensor Is a Research Prototype in Development.", [["Antenna Calibration", "Calibrate RF Antennas Against an Atomic Reference."], ["EMC Testing", "Electromagnetic Compatibility Measurements."], ["Atomic RF Reception", "Receiving Radio Signals With Atoms."]], "In Research and Development"),
    related: [["Q-Biosensor", "Atom-Based Sensing of Weak Magnetic Signals."], ["ECDL", "The Lasers Behind Atomic Sensing."]],
    finalTitle: "Interested in Atomic RF Sensing?", finalText: "We're Happy to Discuss Our Research With Partners and Institutions.", finalCta: "Discuss This Research" };
})();

/* Product_Content.pdf (pp. 4–6) refines the networking and sensing pages. Bracketed values in that file ([> 25 %], [> 90 %], [Sub-kHz to 100s of GHz]) are not published.
   R&D labels follow the approved taxonomy. PROVISIONAL — CONFIRM WITH QAIG: Product_Content.pdf describes EPS-QKD and Q-Memory as deployable systems; the brochures describe academic kits. Both are kept. */
(function () {
  var P = window.QAIG_PRODUCTS; function A(t, l, list, n) { return { type: "apps", title: t, lead: l, apps: list, note: n }; }
  Object.assign(P["q-memory"], {
    headline: "Store the Light. Preserve Quantum States.",
    lead: "Q-Memory Captures, Stores and Retrieves Quantum States of Light on Demand, the Capability at the Core of Scalable Quantum Communication.",
    overview: ["Photons Can't Wait. To Link Separate Nodes, a Quantum Network Has to Hold Quantum Information Until the Next Link Is Ready and That Calls for Memory.", "Q-Memory Maps Incoming Photons Onto Long-Lived Atomic Spin States in a Precision-Engineered Atomic Ensemble and Releases Them When Needed. It Comes as a Compact, 19-inch Rack-Compatible System and as a Room-Temperature Experimentation Kit for Academia."],
    caps: [["Store and Retrieve on Demand", "Hold Photonic Quantum Information and Release It When the Network Is Ready."], ["Synchronise Network Nodes", "Hold Photons Across Separate Nodes so Links Can Be Joined."], ["Rack-Compatible Package", "Low Size, Weight and Power in a Field-Deployable, 19-inch Rack Format."], ["Academic Kit", "A Room-Temperature Rubidium Kit for Storage and Retrieval Experiments."]],
    module: A("Where Quantum Memory Matters", "Full Technical Specifications Are Available on Request.", [["Quantum Repeaters", "Extend Entanglement Over Long Distances by Holding and Synchronising Photons."], ["Quantum Networking", "Join Links Between Separate Nodes."], ["Photonic Quantum Computing", "Store Photonic States for Later Use."]]) });
  Object.assign(P["eps-qkd"], {
    tag: "Entangled Photon Source QKD",
    headline: "Key Security Rooted in the Laws of Physics",
    lead: "EPS-QKD Distributes Encryption Keys Using Entangled Photon Pairs, so Their Security Depends on Quantum Mechanics Rather Than Computational Complexity.",
    overviewTitle: "How Entanglement Produces a Shared Key",
    overview: ["An Entangled Photon Source Sends One Photon of Each Pair to Each of Two Remote Users. Their Measurements Are Correlated, so Both Build the Same Secret Key.", "Any Attempt to Intercept the Photons Disturbs the Entanglement and Is Revealed. Because the Key Comes From the Measurements, the Source Itself Doesn't Need to Be Trusted. EPS-QKD Is Also Available as an Experimentation Kit for Academia."],
    audience: ["Government and Defence", "Finance", "Critical Infrastructure", "Universities and Labs"],
    caps: [["Entanglement-Based Keys", "Keys Come From Correlated Measurements of Entangled Photon Pairs."], ["Eavesdropping Is Revealed", "Interception Disturbs the Entanglement and Shows up in the Results."], ["Untrusted Source", "The Source Doesn't Need to Be Trusted, Which Adds a Further Layer of Protection."], ["Fibre and Free Space", "Compatible With Existing Optical Fibre and Free-Space Links."]],
    module: A("Where EPS-QKD Is Used", "Full Technical Specifications Are Available on Request.", [["Secure Communications", "Key Distribution That Resists Both Classical and Quantum Attacks."], ["Government and Defence", "Long-Term Protection for Sensitive Links."], ["Teaching and Research", "An Integrated Kit for Studying Entanglement-Based QKD."]]) });
  Object.assign(P["quantum-repeater"], {
    headline: "Extending the Reach of the Quantum World",
    lead: "Quantum Repeater Brings Entangled Photon Sources, Quantum Memories and Entanglement Swapping Together to Extend Quantum Links Beyond the Limits of Direct Fibre Transmission.",
    overview: ["Over Long Distances, Photon Loss Makes Direct Quantum Transmission Impossible and Quantum Signals Can't Simply Be Amplified.", "The Repeater Divides a Long Distance Into Shorter Segments and Links Them Through Entanglement Swapping, so Quantum States Can Be Shared Across Distances That Would Otherwise Be Out of Reach. It Is Designed to Work With Standard Telecom Fibre."],
    audience: ["Government Agencies", "Financial Institutions", "Critical Infrastructure", "Network Operators"],
    caps: [["Integrated Platform", "Entangled Photon Sources, Quantum Memories and Entanglement Swapping in One System."], ["Segmented Links", "Short Segments Joined Into One Long-Distance Link."], ["Standard Telecom Fibre", "Designed to Be Compatible With Existing Fibre."]],
    module: A("Where Repeaters Matter", "Quantum Repeater Is in Research and Development. Full Technical Specifications Are Available on Request.", [["Long-Distance QKD", "Key Distribution Beyond Single-Link Limits."], ["Quantum Internet", "A Building Block for Connecting Distant Quantum Nodes."], ["Long-Haul Secure Networks", "Long-Term Protection for Critical Communications."]], "In Research and Development") });
  Object.assign(P["quantum-gravimeter"], {
    lead: "Quantum Gravimeter Measures Absolute Gravitational Acceleration With Cold-Atom Interferometry, Referenced to the Fixed Properties of Atoms and the Wavelength of Light.",
    overview: ["Clouds of Laser-Cooled Atoms Are Released Into Free Fall. A Sequence of Laser Pulses Splits, Redirects and Recombines Their Matter Waves and the Resulting Interference Pattern Reveals the Local Value of Gravity.", "With No Mechanical Moving Parts and No Need for Periodic Recalibration, the Approach Avoids the Drift and Wear That Affect Classical Instruments."],
    audience: ["Geophysical Survey", "Resource Exploration", "Infrastructure Monitoring", "Navigation"],
    caps: [["Absolute Measurement", "Gravity Referenced Directly to Atomic Properties and the Wavelength of Light."], ["No Moving Parts", "No Mechanical Wear and No Periodic Recalibration."], ["Long-Term Stability", "Repeatable Measurements Over Extended Periods."]],
    module: A("Where Gravimetry Helps", "Quantum Gravimeter Is in Research and Development. Full Technical Specifications Are Available on Request.", [["Geophysical Survey", "Mapping Local Variations in Gravity."], ["Resource Exploration", "Gravity Data for Subsurface Studies."], ["Infrastructure Monitoring and Navigation", "Stable, Repeatable Measurement in the Field."]], "In Research and Development") });
  Object.assign(P["rydberg-sensor"], {
    headline: "Sensing Electromagnetic Fields With Atoms",
    lead: "Rydberg Sensor Uses Atoms in Highly Excited Rydberg States to Detect and Measure Radio-Frequency Electric Fields, Read Out Optically With Lasers.",
    overview: ["In Rydberg States, Atoms Respond Strongly to Even Weak Electromagnetic Fields. Lasers Read That Response Out and Turn the Field Into a Measurement.", "Because the Measurement Depends on Atomic Properties and Fundamental Constants, the Sensor Is Self-Calibrated and SI-traceable. One Small, All-Dielectric Probe Covers a Frequency Range That Would Otherwise Need Many Antennas and It Barely Disturbs the Field It Measures."],
    caps: [["Self-Calibrated", "Measurements Traceable to SI Units Through Atomic Properties."], ["Broadband Coverage", "One Probe Across a Very Wide Frequency Range."], ["Small, All-Dielectric Probe", "Minimal Disturbance to the Field Being Measured."], ["Optical Readout", "The Field's Effect on the Atoms Is Read Out With Lasers."]],
    module: A("Where Rydberg Sensing Applies", "Rydberg Sensor Is in Research and Development. Full Technical Specifications Are Available on Request.", [["RF Test and Measurement", "Calibration and EMC Testing Against an Atomic Reference."], ["Communication", "Atomic Reception of Radio Signals."], ["Spectrum Monitoring", "Broadband Field Detection."]], "In Research and Development") });
  Object.assign(P["q-biosensor"], {
    tag: "Magnetocardiography Platform",
    verified: "Product_Content.pdf p6 (quantum biosensor / magnetocardiograph). No regulatory approval is claimed. PROVISIONAL — CONFIRM WITH QAIG",
    headline: "A Contact-Free View of the Heart's Magnetic Activity",
    lead: "Q-Biosensor Is a Magnetocardiography Platform That Uses Highly Sensitive Atomic Magnetometers to Capture the Ultra-Weak Magnetic Fields Generated by the Heart.",
    overviewTitle: "Seeing Cardiac Activity Through Its Magnetic Field",
    overview: ["The Heart's Electrical Activity Produces Faint Magnetic Fields. These Are Less Affected by Surrounding Tissue Than Electrical Measurements, so They Can Show Spatial and Temporal Patterns More Clearly.", "Q-Biosensor Measures These Fields Without Contact, Electrodes, Gel or Skin Preparation. Signal Processing Turns Them Into Cardiac Waveforms and Magnetic Field Maps for Cardiovascular Research and Clinical Decision Support."],
    audience: ["Cardiovascular Research", "Clinical Research Teams", "Hospitals and Emergency Care", "Medical Device Partners"],
    steps: [["Sense", "Atomic Magnetometers Capture the Heart's Magnetic Field Without Contact."], ["Process", "Signal Processing Isolates the Cardiac Signal."], ["Reconstruct", "Reconstruction Builds Rich Cardiac Representations From a Reduced Sensor Array."], ["Visualise", "Waveforms and Field Maps Show Cardiac Activity at Each Millisecond."]],
    caps: [["Contact-Free Measurement", "No Electrodes, Gel or Skin Preparation."], ["Non-Invasive", "Radiation-Free and Contrast-Free."], ["Field Maps Over Time", "A Current Map of the Heart at Each Millisecond."], ["Compact Sensing", "Intelligent Reconstruction From a Reduced Sensor Array."]],
    module: A("Where Magnetocardiography Fits", "Q-Biosensor Is Designed for Cardiovascular Research and Clinical Decision Support. Detailed Information Is Available on Request.", [["Clinical Research", "Study Cardiac Electrophysiology With Magnetic Field Maps."], ["Acute and Emergency Care", "Rapid Capture and Analysis in Time-Sensitive Settings."], ["Preventive Screening", "A Non-Invasive View of Cardiac Activity."]]) });
})();

/* Art direction per product: hero layout, input → process → output strip, Section 02 and Section 03 compositions.
   ov: "journey" (stage timeline) | "track" (signal moving through stations) | "compare" (two-state toggle). cap: "map" | "layers" | "split" | "bento". */
(function () {
  var P = window.QAIG_PRODUCTS, I = function (s) { return "assets/products/icons/" + s + ".png"; };
  var D = {
    "q-forte": { hero: "split", flow: ["Cryptographic Estate", "Discover, Protect, Randomise", "Quantum-Assured Security"], ov: "track", cap: "bento" },
    "chec-q-ai": { hero: "split", flow: ["Digital Assets", "Cryptographic Assessment", "Exposure Map"], ov: "journey", cap: "map" },
    "q-sleeve": { hero: "stacked", flow: ["Open Communication", "Quantum-Safe Encryption", "Protected Channel"], ov: "compare", cap: "layers",
      compare: { a: { label: "Without Q-Sleeve", title: "Data Crosses an Exposed Path", points: ["Traffic Relies on Public-Key Algorithms Such as RSA and ECC.", "Data Captured Today Could Be Decrypted by a Future Quantum Computer.", "Changing Algorithms Later Means Re-Engineering Systems."] },
                 b: { label: "With Q-Sleeve", title: "Data Travels Inside a Quantum-Safe Channel", points: ["Traffic Is Protected With Encryption Built to NIST Post-Quantum Standards.", "Captured Data Stays Confidential Against Future Quantum Attacks.", "Crypto-Agility Lets Algorithms Change as Standards Evolve."] } } },
    "qurng": { hero: "reverse", flow: ["Quantum Process", "Measurement", "Random Bits"], ov: "track", cap: "bento" },
    "q-cluster": { hero: "split", flow: ["Quantum Circuit", "Simulation", "Result Distribution"], ov: "compare", cap: "layers",
      compare: { a: { label: "Ideal Simulation", title: "How the Algorithm Should Behave", points: ["State-Vector Simulation Shows the Algorithm's Intended Result.", "Useful for Learning, Design and Validating Logic.", "Clean Probability Distributions to Compare Against."] },
                 b: { label: "With Noise Models", title: "How Real Processors Will Behave", points: ["Gate Errors, Decoherence and Readout Noise Are Applied.", "See Where Results Drift Before Using Quantum Hardware.", "Approximate NISQ-era Processor Behaviour."] } } },
    "qubitiq": { hero: "split", flow: ["Problem", "AI Recommendation", "Optimised Circuit"], ov: "journey", cap: "split" },
    "eps-qkd": { hero: "stacked", flow: ["Entangled Photon Pair", "Correlated Measurements", "Shared Secret Key"], ov: "track", cap: "split" },
    "q-memory": { hero: "stacked", flow: ["Light In", "Stored in Atoms", "Released on Demand"], ov: "track", cap: "bento" },
    "qntsim": { hero: "reverse", flow: ["Network Design", "Protocol Simulation", "Observed Behaviour"], ov: "journey", cap: "map" },
    "quantum-repeater": { hero: "stacked", flow: ["Long Distance", "Segment and Swap", "End-To-End Link"], ov: "compare", cap: "layers",
      compare: { a: { label: "Direct Link", title: "Photons Are Lost Over Distance", points: ["Loss Grows With Every Kilometre of Fibre.", "Quantum Signals Can't Simply Be Amplified.", "Beyond a Limit, Direct Transmission Becomes Impossible."] },
                 b: { label: "With Repeaters", title: "Short Segments Joined by Entanglement", points: ["The Distance Is Divided Into Shorter Segments.", "Quantum Memories Hold States Until Neighbouring Links Are Ready.", "Entanglement Swapping Joins Segments End to End."] } } },
    "q-biosensor": { hero: "reverse", flow: ["Cardiac Magnetic Field", "Atomic Sensing", "Field Map and Waveform"], ov: "track", cap: "map" },
    "quantum-gravimeter": { hero: "split", flow: ["Cold Atoms", "Laser-Pulse Interferometry", "Gravity Measurement"], ov: "journey", cap: "split", icon: "quantum-sensing" },
    "rydberg-sensor": { hero: "split", flow: ["RF Field", "Rydberg Atom Response", "Optical Readout"], ov: "track", cap: "bento" }
  };
  Object.keys(D).forEach(function (k) { if (!P[k]) return; Object.assign(P[k], D[k]); P[k].logo = I(D[k].icon || k); });
  P["q-forte"].module.items.forEach(function (it) { it.logo = I(it.id); });

  /* Commercial systems, per QAIG: no academic-kit framing. */
  Object.assign(P["eps-qkd"], { tag: "Entanglement-Based QKD System",
    overview: ["An Entangled Photon Source Sends One Photon of Each Pair to Each of Two Remote Users. Their Measurements Are Correlated, so Both Build the Same Secret Key.", "Any Attempt to Intercept the Photons Disturbs the Entanglement and Is Revealed. Because the Key Comes From the Measurements, the Source Itself Doesn't Need to Be Trusted."],
    audience: ["Government and Defence", "Banking and Finance", "Critical Infrastructure", "Telecom Operators"],
    steps: [["Generate", "The Entangled Photon Source Produces Photon Pairs."], ["Distribute", "One Photon of Each Pair Travels to Each User Over Fibre or Free Space."], ["Measure", "Both Users Measure Their Photons and Obtain Correlated Results."], ["Agree", "Matching results become a shared key; interference reveals eavesdropping."]],
    caps: [["Entanglement-Based Keys", "Keys Come From Correlated Measurements of Entangled Photon Pairs."], ["Eavesdropping Is Revealed", "Interception Disturbs the Entanglement and Shows up in the Results."], ["Untrusted Source", "The Source Doesn't Need to Be Trusted, Which Adds a Further Layer of Protection."], ["Fibre and Free Space", "Compatible With Existing Optical Fibre and Free-Space Links."]],
    module: { type: "apps", title: "Where EPS-QKD Protects", lead: "Full Technical Specifications Are Available on Request.", apps: [["Secure Communications", "Key Distribution That Stays Resilient Against Classical and Quantum Attacks."], ["Government and Defence", "Long-Term Protection for Sensitive Links."], ["Finance and Critical Infrastructure", "Keys for High-Value Transactions and Control Networks."]] },
    finalTitle: "Secure Your Links With Entanglement", finalText: "Tell Us About Your Network and Security Needs. We'll Share System Details and Options." });
  Object.assign(P["q-memory"], { tag: "Quantum Memory System",
    overview: ["Photons Can't Wait. To Link Separate Nodes, a Quantum Network Has to Hold Quantum Information Until the Next Link Is Ready and That Calls for Memory.", "Q-Memory Maps Incoming Photons Onto Long-Lived Atomic Spin States in a Precision-Engineered Atomic Ensemble and Releases Them When Needed. It Is Engineered for Low Size, Weight and Power in a Compact, 19-inch Rack-Compatible, Field-Deployable Package."],
    audience: ["Quantum Network Builders", "Telecom Research", "Quantum Hardware Integrators", "Government Programmes"],
    steps: [["Capture", "An Incoming Light Pulse Enters the Atomic Ensemble."], ["Store", "Its Quantum State Is Mapped Onto Long-Lived Atomic Spin States."], ["Hold", "The Memory Keeps the State While the Network Synchronises."], ["Retrieve", "The Stored Photon Is Released on Demand."]],
    highlight: "Storage Time Up to 100 μS",
    caps: [["Store and Retrieve on Demand", "Hold Photonic Quantum Information and Release It When the Network Is Ready."], ["Synchronise Network Nodes", "Hold Photons Across Separate Nodes so Links Can Be Joined."], ["Rack-Compatible Package", "Low Size, Weight and Power in a Field-Deployable, 19-inch Rack Format."], ["Built for Repeaters", "The Capability That Lets Repeaters Extend Entanglement Over Long Distances."]],
    finalTitle: "Add Quantum Memory to Your Network", finalText: "Tell Us About Your Application. We'll Share System Details and Options." });
  P["quantum-gravimeter"].highlight = "Absolute Gravity Measurement at μGal Level";
  P["quantum-repeater"].highlight = "Compatible With Standard Telecom Fibre";
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
    lead: "The Q-Cluster Mini Software Is Free for the First 3 Months. After That, Keep It Running on Your Unit With a Monthly Plan, or Move Your Work to Cloud Access.",
    periods: periods,
    tracks: [
      { k: "mini", label: "On Your Q-Cluster Mini", line: "Runs Locally on the Mini. No Cloud Dependency and No Data Leaving Your Site.",
        plans: [
          { k: "learner", name: "Learner", price: 3000, blurb: "For Students and Individual Learners Building Their First Circuits.", bullets: ["Circuit, Algorithm and Noise Composers", "Up to 20 Qubits on CPU", "Up to 28 Qubits on GPU", "Email Support"] },
          { k: "researcher", name: "Researcher", price: 7500, blurb: "For Researchers Running Deeper Circuits and Longer Projects.", bullets: ["Everything in Learner", "Accelerated Studio", "Projects (IDE) Workspaces", "Priority Support"] },
          { k: "custom", name: "Custom", price: null, blurb: "Qubit Ceilings, Studios and GPU Allowance Set to Your Contract.", bullets: ["Every Feature Configurable", "Limits Matched to Your Hardware", "Multi-Unit Deployments", "Dedicated Support Engineer"] }
        ] },
      { k: "cloud", label: "Cloud Access", line: "Hosted by Quantum AI Global. Open Q-Cluster From Any Browser, With or Without Your Mini.",
        plans: [
          { k: "learner", name: "Cloud Learner", price: 5000, blurb: "Hosted Access for Coursework and Self-Study.", bullets: ["Circuit, Algorithm and Noise Composers", "Up to 20 Qubits on CPU", "Up to 28 Qubits on GPU", "Email Support"] },
          { k: "researcher", name: "Cloud Researcher", price: 12000, blurb: "Hosted Access With the Studios Research Teams Need.", bullets: ["Everything in Cloud Learner", "QML Studio and Quantum Error Correction", "Quantum Processing Units", "Priority Support"] },
          { k: "custom", name: "Cloud Custom", price: null, blurb: "Hosted Capacity and Limits Agreed for Your Organisation.", bullets: ["Every Feature Configurable", "Dedicated Capacity", "Organisation-Wide Access", "Dedicated Support Engineer"] }
        ] }
    ],
    compare: {
      rows: [
        ["Circuit Composer", "Core Circuit Composer With Statevector Simulation. The Maximum Supported Qubit Count Is Determined by the Execution Backend and Plan."],
        ["Algorithm Composer", "Prebuilt Algorithm Library and Runner. Subject to the Same Qubit Ceilings as the Circuit Composer."],
        ["Noise Composer", "Custom and Vendor Noise Models (IBM Fake-Backends, Quantinuum). Subject to the Same Qubit Ceilings as the Circuit Composer."],
        ["Tensornet Composer", "Higher-qubit-count approximate simulation mode. Requires a GPU target; unavailable on CPU-only deployments."],
        ["Standard Studio", "Standard Compute Studio."],
        ["Accelerated Studio", "GPU-accelerated Compute Studio."],
        ["QML Studio", "Quantum Machine Learning Studio. Available for Cloud and Academia Distributions."],
        ["Quantum Error Correction", "Quantum Error Correction Capabilities. Available for Cloud and Academia Distributions."],
        ["Quantum Processing Units", "Submit Circuits to Real Quantum Hardware."],
        ["GPU Execution", "Whether This Plan May Use Any GPU Simulation Target at All. A Plan Cannot Add a GPU to a Machine That Has None."],
        ["Maximum Qubits (CPU)", "Qubit Ceiling for the CPU Simulation Target. CPU Simulation Is Not Interactively Usable Above ~20 Qubits on Any Current Deployment."],
        ["Maximum Qubits (GPU)", "Qubit Ceiling for GPU Execution, Never Above What the Card's VRAM Supports."],
        ["Maximum Qubits (Statevector)", "Qubit Ceiling for GPU Statevector and Sampling Modes. State Size Is 16 Bytes X 2^n, so Each Additional Qubit Doubles the VRAM Required."],
        ["Projects (IDE)", "In-Browser Project Workspaces."]
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
    lead: "The QNTSim Mini Software Is Free for the First 3 Months. After That, Keep It Running on Your Unit With a Monthly Plan, or Move Your Work to Cloud Access.",
    periods: periods,
    tracks: [
      { k: "mini", label: "On Your QNTSim Mini", line: "Runs Locally on the Mini, Connected Directly to Your Lab Devices.",
        plans: [
          { k: "learner", name: "Learner", price: 2500, blurb: "Coursework and Guided Protocol Experiments.", bullets: ["Core Network Simulation", "Guided QKD and Entanglement Experiments", "Course Templates", "Email Support"] },
          { k: "researcher", name: "Researcher", price: 6000, blurb: "Research-Grade Protocol Simulation With Your Hardware in the Loop.", bullets: ["Full Protocol Library", "Hardware-In-The-Loop Runs", "Parameter Sweeps and Batch Runs", "Priority Support"] },
          { k: "custom", name: "Custom", price: null, blurb: "Protocols, Devices and Limits Set to Your Contract.", bullets: ["Custom Topologies and Devices", "Multi-Unit Deployments", "Instructor and Admin Controls", "Dedicated Support Engineer"] }
        ] },
      { k: "cloud", label: "Cloud Access", line: "Hosted by Quantum AI Global. Open QNTSim From Any Browser, With or Without Your Mini.",
        plans: [
          { k: "learner", name: "Cloud Learner", price: 4000, blurb: "Hosted Access for Classrooms and Self-Study.", bullets: ["Core Network Simulation", "Guided QKD and Entanglement Experiments", "Course Templates", "Email Support"] },
          { k: "researcher", name: "Cloud Researcher", price: 10000, blurb: "Hosted Access for Network Design Studies.", bullets: ["Full Protocol Library", "Custom Topologies", "Export Results and Traces", "Priority Support"] },
          { k: "custom", name: "Cloud Custom", price: null, blurb: "Hosted Capacity Agreed for Your Organisation.", bullets: ["Dedicated Capacity", "Organisation-Wide Access", "Usage Analytics", "Dedicated Support Engineer"] }
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
    if (cloud.length) p.module.cloud = { eyebrow: "Cloud Access", title: "Cloud Plans For " + x[2],
      lead: "Hosted by Quantum AI Global. Open " + x[2] + " from any browser, with no hardware to install.",
      periods: m.subs.periods, tracks: cloud, compare: m.subs.compare ? { rows: m.subs.compare.rows, values: { cloud: m.subs.compare.values.cloud } } : undefined,
      note: "You Can Change Plan at the End of Any Billing Period.", cloudOnly: true };
    if (m.subs) {
      m.subs.tracks = m.subs.tracks.filter(function (t) { return t.k === "mini"; });
      m.subs.lead = "The " + m.name + " software is free for the first 3 months. After that, keep it running on your unit with a plan that fits how you use it.";
    }
  });
})();
