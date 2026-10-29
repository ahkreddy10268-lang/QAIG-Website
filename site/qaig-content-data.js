/* QAIG editorial content: publications, achievements, events and the IP portfolio.
   Edit entries here; pages render whatever is in these arrays. Do not add unverified items. */
window.QAIG_CONTENT = {
  /* Verified against IEEE Xplore / OpenAlex (Crossref) and arXiv on 26 Oct 2026. */
  publications: [
    { id: "eps-qkd", cat: "Quantum Communication", type: "Conference Paper", title: "Experimental Realization of Quantum Memory and EPS-QKD",
      authors: "Quantum AI Global research team", authorsVerified: false,
      venue: "2024 IEEE 33rd Asian Test Symposium (ATS)", date: "2024", ident: "IEEE Xplore 10915216",
      summary: "Describes a room-temperature warm rubidium ensemble quantum memory based on electromagnetically induced transparency, with an electronics-photonics control box and an optics memory box and a tabletop entanglement-based QKD (EPS-QKD) setup using polarization-entangled photon pairs.",
      href: "https://ieeexplore.ieee.org/abstract/document/10915216", cta: "View on IEEE Xplore" },
    { id: "laser-lock", cat: "Quantum Sensing", type: "Conference Paper", title: "Laser Frequency Locking for Quantum Sensing Applications Using AI/ML Techniques",
      authors: "Srikanth Mangipudi, Rama Theja Avvaru, Gopika Rao Chaganti, Sachin Barthwal", authorsVerified: true,
      venue: "2025 17th International Conference on COMmunication Systems and NETworks (COMSNETS), pp. 1114–1117", date: "January 2025", ident: "DOI 10.1109/COMSNETS63942.2025.10885770",
      summary: "Presents a hybrid laser frequency stabilisation approach that combines saturated absorption spectroscopy locking and injection locking, using a support vector machine to lock and relock the laser automatically from real-time recognition of absorption spectra.",
      href: "https://ieeexplore.ieee.org/abstract/document/10885770", cta: "View on IEEE Xplore" },
    { id: "hom", cat: "Quantum Computing", type: "Preprint", title: "Digital Quantum Simulations of Hong-Ou-Mandel Interference",
      authors: "Navaneeth Krishnan Mohan, Rikteem Bhowmick, Devesh Kumar, Rohit Chaurasiya", authorsVerified: true,
      venue: "arXiv preprint (quant-ph)", date: "Submitted 27 February 2024", ident: "arXiv:2402.17522",
      summary: "Applies digital quantum simulation to a beam splitter, a bosonic system, using Gray-code boson-to-qubit mapping and validates the circuit by simulating the Hong-Ou-Mandel interference experiment.",
      href: "https://ui.adsabs.harvard.edu/abs/2024arXiv240217522K/abstract", cta: "View Record" },
    { id: "qds-survey", cat: "Quantum Computing", type: "Preprint", title: "Towards Quantum Dynamics Simulation of Physical Systems: A Survey",
      authors: "Rikteem Bhowmick, Navaneeth Krishnan Mohan, Devesh Kumar, Rohit Chaurasiya, Nixon Patel", authorsVerified: true,
      venue: "arXiv preprint (quant-ph)", date: "Submitted 18 October 2023", ident: "arXiv:2310.11801",
      summary: "Reviews progress in quantum simulation on quantum computing hardware, the fields it has extended into and the software toolsets available for carrying out quantum simulations.",
      href: "https://arxiv.org/abs/2310.11801", cta: "View on arXiv" },
  ],
  /* Selected from the achievements already published on the homepage (assets/home/achievements). */
  achievements: [
    { kind: "Award", date: "February 2026", title: "16th Aegis Graham Bell Award", text: "Quantum AI Global received the 16th Aegis Graham Bell Award for Innovation in DeepTech for Qubit Intelligence, its generalised quantum algorithm development accelerator.", img: "assets/home/achievements/01-agbi-award.png", fit: "cover", pos: "50% 35%", alt: "QAIG team on stage receiving the Aegis Graham Bell trophy and Award of Excellence certificate" },
    { kind: "National Initiative", date: "February 2026", title: "Amaravati Quantum Valley Foundation Stone Ceremony", text: "On 7 February 2026, QAIG participated in the Foundation Stone ceremony for Amaravati Quantum Valley. CEO Sanjay Chittore was felicitated by National Quantum Mission Director Dr. J.B.V. Reddy.", img: "assets/home/achievements/02-amaravati-quantum-valley-foundation-stone-with-cm.png", fit: "cover", pos: "50% 40%", alt: "QAIG CEO Sanjay Chittore with the Chief Minister of Andhra Pradesh in front of the state emblem" },
    { kind: "Strategic Partnership", date: "November 2025", title: "Strategic MoUs with the Government of Andhra Pradesh", text: "At the CII Partnership Summit on 15 November 2025, QAIG signed two MoUs: one with the State Government of Andhra Pradesh through AP Quantum Valley and one with the Ratan Tata Innovation Hub.", img: "assets/home/achievements/03-strategic-mou-andhra-pradesh-government.jpeg", fit: "cover", pos: "50% 22%", alt: "Representatives holding signed MoU documents on stage, Government of Andhra Pradesh backdrop" },
    { kind: "Award", date: "2025", title: "Times Business Awards 2025", text: "Recognised for Excellence in Quantum & AI Innovations at the 11th edition of the Times Business Awards, Hyderabad 2025.", img: "assets/home/achievements/04-bharat-telecom-export-excellence-award.png", fit: "cover", pos: "40% 50%", alt: "QAIG receiving the Times Business Awards Hyderabad 2025 recognition on stage" },
    { kind: "Leadership Recognition", date: "April 2025", title: "India's Top 10 Deep Tech CTOs", text: "QAIG CTO Kapil Jaiswal was recognised among India's Top 10 Deep Tech CTOs for his work across quantum technology, AI/ML and cybersecurity.", img: "assets/home/achievements/05-indias-top-10-deep-tech-ctos-kapil-jaiswal.jpeg", fit: "contain", pos: "50% 50%", alt: "Corporate Trendz magazine cover, April 2025, featuring QAIG CTO Kapil Jaiswal" },
  ],
  /* Verified upcoming events only. Leave empty until details are confirmed.
     Shape: { title, dateLabel, venue, body, href } */
  events: [],
  /* Full list from the "Our IP's" sheet (page 02). Order and wording as supplied.
     Certificate details transcribed from qaig_three_patent_certificates.pdf (3 scanned pages).
     Discrepancy: IP 03 is listed as "Patent Granted" on the IP sheet, but its certificate is a Certificate of Registration of Design (Designs Act, 2000). */
  ipCertPdf: "assets/pdfs/qaig-patent-certificates.pdf",
  ips: [
    { n: 1, title: "Quantum-Resistant Cryptographic Systems for Secure Communication", status: "Patent Granted", cert: { kind: "Patent Certificate", img: "assets/ips/certificate-2.jpg", w: 452, h: 637, page: 2, date: "19 Nov 2024", dateLabel: "Granted", rows: [["Patent No.", "554602"], ["Application No.", "202341046359"], ["Filed", "10 Jul 2023"], ["Granted", "19 Nov 2024"], ["Patentee", "QuantumStats AI Global Private Limited"]] } },
    { n: 2, title: "Rare-Earth Ion Doped Material-Based Quantum Memory", status: "Patent Granted", cert: { kind: "Patent Certificate", img: "assets/ips/certificate-3.jpg", w: 585, h: 830, page: 3, date: "02 Jul 2025", dateLabel: "Granted", rows: [["Patent No.", "568337"], ["Application No.", "202211014938"], ["Filed", "17 Mar 2022"], ["Granted", "02 Jul 2025"], ["Patentee", "QAIG Private Limited"]] } },
    { n: 3, title: "Input Laser Control Box", status: "Patent Granted", sheetStatus: "Patent Granted", badge: "Design Registered", cert: { kind: "Certificate of Registration of Design", img: "assets/ips/certificate-1.jpg", w: 759, h: 1079, page: 1, date: "29 May 2025", dateLabel: "Registered", rows: [["Design No.", "460524-001"], ["Class", "14-02"], ["Registered", "29 May 2025"], ["Issued", "04 Sep 2025"], ["Proprietor", "QAIG Private Limited"]] } },
    { n: 4, title: "Quantum Memory Box (Design)", status: "Filed" },
    { n: 5, title: "Secure Multi-party Quantum Conference", status: "Filed" },
    { n: 6, title: "Simulator for Quantum Computing Systems", status: "Filed" },
    { n: 7, title: "Quantum Memories (Ultra-long storage assisted 2nd Gen Quantum Memory)", status: "Filed" },
    { n: 8, title: "Secure Quantum Multi-party XOR Computation System", status: "Filed" },
    { n: 9, title: "Rubidium-based Magnetometer for Bio-Sensing Application", status: "Filed" },
    { n: 10, title: "An Integrated Laser Controller Unit for Atomic Experiments", status: "Filed" },
    { n: 11, title: "An Intelligent Recommender System for Quantum Computations", status: "Filed" },
    { n: 12, title: "Long distance measurement-device-independent quantum secure direct communication", status: "Filed" },
    { n: 13, title: "Software-based Quantum Random Number Generation System Using Quantum Simulation And Cloud Backend Execution", status: "Filed" },
    { n: 14, title: "Adaptive AI-Driven Hybrid Laser Locking for Quantum Sensing and Precision Applications", status: "Filed" },
    { n: 15, title: "System and Method for Optimized Quantum Computing with Sequential Gate Teleportation", status: "Filed" },
  ],
};
