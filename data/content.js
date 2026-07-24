/* =====================================================
   content.js
   All content is grounded in CV + LinkedIn data bank.
   To update: just edit the arrays below.

   Data model note: every content item supports an
   optional `images` array of the form:
     images: [
       { src: "/images/talks/foo/cover.jpg",
         alt: "Descriptive alt text",
         caption: "Optional caption" }
     ]
   Tiles use a single `image` string (see BOARD_TILES).
   Cards use `images` (script.js renders a carousel if len>1).
   ===================================================== */

/* ---------- NEWS / LATEST ---------- */
const NEWS = [
  {
    date: "Jul 2026",
    category: "Research",
    title: "Started collaborative research with CMU on medical vision-language models",
    desc: "Early-stage work on interpretability, reasoning, and trustworthy biomedical foundation models. Current focus: literature synthesis on mechanistic interpretability for SAM and MedSAM-style medical foundation models, probing methods, domain shift, and clinically meaningful reasoning."
  },
  {
    date: "Jun 2026",
    category: "Publication",
    title: "ISSTA 2026 paper accepted: “The Discreet Charm of the Bugeoisie”",
    desc: "Accepted at the 35th ACM SIGSOFT International Symposium on Software Testing and Analysis. Studies reproducibility and evidentiary rigor in bug-reporting claims across ISSTA 2025 papers. Acceptance rate: 23.6%."
  },
  {
    date: "Jun 2026",
    category: "Research Poster",
    title: "ABCT 2026 in-person poster accepted",
    desc: "“Using Autoencoder-Based Personalized Models to Predict Symptom Fluctuations in Schizophrenia from Passive Smartphone Data” accepted to the ABCT 60th Annual Convention 2026."
  },
  {
    date: "Jun 2026",
    category: "Research Poster",
    title: "ACM womENcourage 2026 poster accepted",
    desc: "“Gamifying Reality Orientation for Personalized Dementia Support for Senior Citizens” accepted to the ACM Celebration of Women in Computing: womENcourage 2026 Posters track. Builds on Project ROOTS."
  },
  {
    date: "Jun 2026",
    category: "Keynote",
    title: "MCP Developers Summit Mumbai keynote",
    desc: "Delivered “Agentless Agents: Replacing Sidecar Observability With eBPF + MCP Tool Chains” at the Linux Foundation and Agentic AI Foundation summit held at the Nita Mukesh Ambani Cultural Centre, Jio World Centre."
  },
  {
    date: "Jun 2026",
    category: "Keynote",
    title: "MCP Developers Summit Bengaluru keynote",
    desc: "Delivered “Auditing MCP Tool Calls at the Kernel Level: eBPF as a Trust Boundary Enforcer” with the Linux Foundation and Agentic AI Foundation. Focus: mapping MCP request IDs to process lineage, syscall auditing, LSM hooks, runtime enforcement."
  },
  {
    date: "Jun 2026",
    category: "Talk",
    title: "Bangalore Data Lakehouse Meetup at Cloudera",
    desc: "Invited talk with Cloudera, e6data, and OLake by Datazip: “Talk to Your Lakehouse: Building a Model Context Protocol Server for Apache Iceberg.”"
  }
];

/* ---------- VISION BOARD TILES ---------- */
const BOARD_TILES = [
  { gallery: true, size: "wide", image: "images/vision-board/gallery/gallery-01-acm-summer-school.jpg", alt: "ACM summer school group photo" },
  { gallery: true, size: "sm", image: "images/vision-board/gallery/gallery-02-core-x-lightning-talks.jpg", alt: "IBM Core-X lightning talks poster" },
  { gallery: true, size: "sm", image: "images/vision-board/gallery/gallery-03-cummins-talk.jpg", alt: "Cummins College Engineering Decoded talk poster" },
  { gallery: true, size: "md", image: "images/vision-board/gallery/gallery-04-kubecon-india-stage.jpg", alt: "Harini Anand speaking at KubeCon India" },
  { gallery: true, size: "tall", image: "images/vision-board/gallery/gallery-05-wids-intuit.jpg", alt: "Women in Data Science Bangalore at Intuit speaker poster" },
  { gallery: true, size: "sm", image: "images/vision-board/gallery/gallery-06-women-who-go.jpg", alt: "Women Who Go Bangalore group photo" },
  { gallery: true, size: "wide", image: "images/vision-board/gallery/gallery-07-wids-interview.jpg", alt: "WiDS Stanford ambassador interview banner" },
  { gallery: true, size: "tall", image: "images/vision-board/gallery/gallery-08-wids-2024.jpg", alt: "Harini Anand at IIM Bangalore for WiDS 2024" },
  { gallery: true, size: "md", image: "images/vision-board/gallery/gallery-09-product-synergy-speaker.jpg", alt: "Harini Anand speaking with a microphone at IBM Product Synergy Week" },
  { gallery: true, size: "lg", image: "images/vision-board/gallery/gallery-10-product-synergy-panel.jpg", alt: "IBM Product Synergy Week panel discussion" },
  { gallery: true, size: "tall", image: "images/vision-board/gallery/gallery-11-kubecon-india-talk.jpg", alt: "Harini Anand giving a lightning talk at KubeCon India" },
  { gallery: true, size: "tall", image: "images/vision-board/gallery/gallery-12-kubecon-eu-talk.jpg", alt: "Harini Anand speaking at Cloud Native AI KubeFlow Day Europe" },
  { gallery: true, size: "portrait", image: "images/vision-board/gallery/gallery-13-ibm-intern.jpg", alt: "Harini Anand at IBM office" },
  { gallery: true, size: "sm", image: "images/vision-board/gallery/gallery-14-i2ct-presentation.jpg", alt: "Harini Anand presenting research results" },
  { gallery: true, image: "images/vision-board/gallery/gallery-15-ibm-hack-win.jpg", alt: "Harini Anand with IBM hackathon awards at the Agentic AI Innovation Center" },
  { gallery: true, image: "images/vision-board/gallery/gallery-16-iit-m-guidance-session.jpg", alt: "Guidance session poster featuring Harini Anand as keynote speaker" },
  { gallery: true, image: "images/vision-board/gallery/gallery-17-kubecon-india-audience.jpg", alt: "Audience at KubeCon India" },
  { gallery: true, image: "images/vision-board/gallery/gallery-18-india-foss-talk.jpg", alt: "India FOSS 2025 talk poster for high performance CLIs in Golang" },
  { gallery: true, image: "images/vision-board/gallery/gallery-19-microsoft-workshop.jpg", alt: "Microsoft workshop group photo" },
  { gallery: true, image: "images/vision-board/gallery/gallery-20-ml-systems-workshop.jpg", alt: "Harini Anand presenting at an ML systems workshop" },
  { gallery: true, image: "images/vision-board/gallery/gallery-21-pesu-roots-top10.jpg", alt: "PESU Project Roots top 10 recognition poster" },
  { gallery: true, image: "images/vision-board/gallery/gallery-22-women-who-go-poster.jpg", alt: "Women Who Go Bangalore talk poster featuring Harini Anand" },
  { gallery: true, image: "images/vision-board/gallery/gallery-23-mcp-dev-summit.jpg", alt: "Harini Anand presenting at MCP Dev Summit Bengaluru" }
];

/* ---------- EXPERIENCE TIMELINE ---------- */
const EXPERIENCES = [
  {
    date: "Jul 2026 to Present",
    role: "Collaborative Researcher",
    org: "Carnegie Mellon University",
    location: "Remote",
    bullets: [
      "Collaborating on early-stage research in medical vision-language models, with emphasis on interpretability, reasoning, and trustworthy biomedical foundation models.",
      "Conducting paper reading, idea collection, and literature synthesis on mechanistic interpretability for SAM and MedSAM-style medical foundation models, probing methods, domain shift, and clinically meaningful reasoning.",
      "Exploring research directions for evaluating and improving robustness, transparency, and reasoning behavior in medical VLMs before moving toward implementation and experimental evaluation."
    ],
    tags: ["Medical VLMs", "Interpretability", "Trustworthy AI", "Biomedical AI"]
  },
  {
    date: "Aug 2025 to Present",
    role: "Software Developer",
    org: "IBM · Data & AI (watsonx.data)",
    location: "Bengaluru · On-site",
    bullets: [
      "Built cloud-native infrastructure and developer tooling for IBM watsonx.data across Kubernetes, Go, ArgoCD/GitOps, OpenSearch, FedRAMP compliance, and AI infrastructure operations.",
      "Leading pan lab agentic govtech initiatives at IBM, connecting sovereign AI, policy-aware infrastructure, and practical internal tooling for regulated environments.",
      "Architected and delivered wxdctl, a production-grade Golang CLI for Kubernetes resource operations across ROKS and Azure clusters, reducing developer friction for Business Unit cloud operations.",
      "Drove infrastructure cost optimization by reducing File and Block Storage expenditure by 90% ($820 to $70/month) through forensic Persistent Volume analysis, owner validation, and safe formation cleanup.",
      "Led infrastructure-as-code cleanup for the Cloud VPC initiative, introducing hierarchical value resolution and eliminating 60-70% redundant configuration while maintaining backward compatibility across ArgoCD health checks.",
      "Contributed to security-critical initiatives: FedRAMP baseline CVE remediation, DAST/UI scans for OpenSearch tech preview, hardened packaging for HSCP components.",
      "Resolved 100+ cross-team infrastructure blockers across IBM watsonx.data infrastructure and developer workflows.",
      "Selected to lead the Speaking & Authoring Working Group under the ISL-wide Core-X initiative.",
      "Contributor to the IBM Agentic AI patent project."
    ],
    tags: ["Go", "Kubernetes", "ArgoCD", "watsonx.data", "AI Infra", "FedRAMP"]
  },
  {
    date: "Jan 2025 to Jul 2025",
    role: "Software Developer Intern",
    org: "IBM · Data & AI (watsonx.data)",
    location: "Bengaluru · On-site",
    bullets: [
      "Built internal Kubernetes tooling in Go using client-go, dynamic clients, and API machinery to simplify CRD operations across cloud environments.",
      "Contributed to watsonx.data SaaS and deployment workflows across Spark, Iceberg, Kubernetes, and infrastructure services.",
      "Selected as the only intern speaker from the team for KubeCon + CloudNativeCon India 2025, presenting developer tooling and Kubernetes testing practices."
    ],
    tags: ["Go", "Kubernetes", "CRDs", "Iceberg", "Spark"]
  },
  {
    date: "Jun 2025 to Present",
    role: "Software Engineering Researcher (UIUC+ Program)",
    org: "University of Illinois Urbana-Champaign",
    location: "Remote",
    bullets: [
      "Selected to the UIUC+ Summer Undergraduate Research in Software Engineering cohort: ranked among the top 15 out of 1,300+ applicants through multi-stage review.",
      "Co-authored an ISSTA 2026 accepted full paper studying reproducibility and evidentiary rigor in bug-reporting claims across ISSTA 2025 papers; contributed to dataset curation, manual verification, and analysis of reported bugs, artifacts, and open-source issue evidence.",
      "Contributed to research on automated program repair (APR) and software engineering research validity: analyzed bug-finding papers, traced bug-inducing commits, reviewed artifact evidence, and curated verified datasets from open-source repositories.",
      "Worked on fairness testing in ML systems: synthesized ICSE/FSE literature on fairness, bias mitigation, and intersectional testing; explored symbolic execution and local explainability techniques for multimodal ML systems."
    ],
    tags: ["Software Engineering", "APR", "Fairness Testing", "SZZ", "Research"]
  },
  {
    date: "Mar 2026 to Present",
    role: "Biomedical AI Researcher",
    org: "Dartmouth",
    location: "Remote",
    bullets: [
      "Working on personalized digital health models for schizophrenia using passive smartphone sensing and ecological momentary assessment data.",
      "Exploring autoencoder-based deep learning models for low-burden, within-person symptom monitoring; supports future just-in-time adaptive interventions.",
      "Poster accepted at ABCT 60th Annual Convention 2026 (in-person)."
    ],
    tags: ["Clinical AI", "Deep Learning", "Digital Health"]
  },
  {
    date: "Jan 2026 to Present",
    role: "Volunteer Research Associate",
    org: "Georgia Institute of Technology",
    location: "Remote",
    bullets: [
      "Applying ML/AI methods to complex scientific and biological problems.",
      "Research interests span computational cognition, clinical AI, interpretable ML, computational biology, protein structure and function, and drug discovery."
    ],
    tags: ["Systems Biology", "Interpretable ML", "Computational Biology"]
  },
  {
    date: "Jun 2025 to Present",
    role: "Creative Lead (freelance)",
    org: "Illuminate AI",
    location: "Remote",
    bullets: [
      "Leading creative direction across Illuminate AI's content properties.",
      "Continuing collaboration on Breakdown the BMC: AI Innovator's Playbook."
    ],
    tags: ["Content Strategy", "Creative Direction"]
  },
  {
    date: "Jul 2025",
    role: "ML Summer School Student",
    org: "Cohere Labs",
    location: "Remote · Global cohort",
    bullets: [
      "Selected for Cohere Labs' open-access ML Summer School covering LLMs, diffusion models, web agents, embeddings, and retrieval.",
      "Engaged with leading researchers through live talks, project-based learning, and community collaboration."
    ],
    tags: ["LLMs", "Embeddings", "Retrieval", "Diffusion"]
  },
  {
    date: "Sep 2024 to Present",
    role: "Content Strategist (freelance) · Technical Content Writer",
    org: "Illuminate AI",
    location: "Remote",
    bullets: [
      "Designing and implementing content plans aligned with audience preferences and platform analytics.",
      "Co-author of Breakdown the BMC: AI Innovator's Playbook (biweekly deep-dives on niche AI startups).",
      "Features to date: Mirage.ai, Bucket Robotics, Lighthouz AI, Helfie.AI, Felafax, KubeAI."
    ],
    tags: ["Content Strategy", "Technical Writing", "AI Startups"]
  },
  {
    date: "Oct 2024 to Jan 2025",
    role: "Machine Learning Research Intern",
    org: "Niramai Health Analytix",
    location: "Bengaluru",
    bullets: [
      "Building novel mammography AI architectures."
    ],
    tags: ["Clinical AI", "Mammography", "Deep Learning"]
  },
  {
    date: "May 2024 to Jul 2024",
    role: "Editorial Board · Data Engineering Track Assistant",
    org: "Hasgeek · The Fifth Elephant",
    location: "Bengaluru · Remote",
    bullets: [
      "Member of the Editorial Board of the Data Engineering Track for the Fifth Elephant Annual Conference.",
      "Curated speakers and reviewed proposals for one of Asia's leading data science and ML conferences."
    ],
    tags: ["Editorial", "Data Engineering", "Conferences"]
  },
  {
    date: "Jan 2024 to Jul 2024",
    role: "Software Developer Intern",
    org: "Niramai Health Analytix",
    location: "Bengaluru · On-site",
    bullets: [
      "Designed, developed, and built an end-to-end women's health application with 20 features for breast cancer screening using Flutter (5 months, solo developer).",
      "Integrated self-examination & tracking tools with Firebase for real-time database management, authentication, and cloud storage.",
      "Implemented user profile workflow generating unique Patient IDs (PII-safe). Resulted in 40% increased user engagement and compliance."
    ],
    tags: ["Flutter", "Firebase", "Healthcare", "Mobile"]
  },
  {
    date: "Jun 2023 to Dec 2023",
    role: "Machine Learning Research Intern",
    org: "Indian Institute of Technology, Hyderabad",
    location: "Hyderabad",
    bullets: [
      "Used PySCENIC to analyze single-cell RNA-seq data and predict gene regulatory networks.",
      "Integrated ML algorithms and decision trees for predictive modeling of gene regulatory interactions.",
      "Selected as 1 of 40 students nationwide for the ACM India + IIT Hyderabad Summer School on Algorithmic Techniques in Computational Biology."
    ],
    tags: ["PySCENIC", "Computational Biology", "scRNA-seq"]
  },
  {
    date: "May 2023 to Jan 2024",
    role: "Research Intern",
    org: "MedInn TechLab",
    location: "Remote",
    bullets: [
      "Built a Clinical Decision Support System aimed at reducing clinician burnout."
    ],
    tags: ["Clinical AI", "Decision Support"]
  },
  {
    date: "Dec 2022 to Mar 2023",
    role: "BIPOC Mentee",
    org: "Google · KaggleX",
    location: "Global · Remote",
    bullets: [
      "Selected for the Google KaggleX BIPOC Mentorship Program with a $1,000 educational grant.",
      "Built an end-to-end restaurant recommendation system using K-Means, TF-IDF, Collaborative Filtering, and Cosine Similarity."
    ],
    tags: ["KaggleX", "Recommendation Systems"]
  },
  {
    date: "Feb 2022 to Sep 2022",
    role: "Web Development Intern",
    org: "Reap Benefit",
    location: "Bengaluru",
    bullets: [
      "Web development internship at a civic-tech non-profit."
    ],
    tags: ["Web Dev", "Civic Tech"]
  }
];

/* ---------- RESEARCH / PUBLICATIONS ---------- */
const RESEARCH = [
  {
    venue: "ISSTA 2026",
    date: "Jun 2026",
    title: "The Discreet Charm of the Bugeoisie",
    authors: "Kim, J. Y., Dragovic, J., Botta, A., Islam, T. M. R., Mohamad, A., Sharaf, K., Siddiqui, S. S., Joshi, D., Anand, H., et al.",
    summary: "Full paper accepted at the 35th ACM SIGSOFT International Symposium on Software Testing and Analysis. Studies reproducibility and evidentiary rigor in bug-reporting claims across ISSTA 2025 papers. Analyzed reported bugs, artifacts, and open-source issue traceability. Acceptance rate: 23.6%.",
    status: "Accepted · Full Paper",
    location: "ISSTA 2026",
    link: ""
  },
  {
    venue: "ABCT 60th Annual Convention 2026",
    date: "Jun 2026",
    title: "Using Autoencoder-Based Personalized Models to Predict Symptom Fluctuations in Schizophrenia from Passive Smartphone Data",
    summary: "In-person research poster. Passive smartphone sensing and ecological momentary assessment data used to build personalized deep learning models for predicting short-term negative and cognitive symptom fluctuations in schizophrenia.",
    status: "Accepted · Poster (in-person)",
    location: "ABCT 2026",
    link: ""
  },
  {
    venue: "ACM womENcourage 2026",
    date: "Jun 2026",
    title: "Gamifying Reality Orientation for Personalized Dementia Support for Senior Citizens",
    summary: "Poster accepted to the ACM Celebration of Women in Computing Posters track. Builds on Project ROOTS and explores personalized, gamified cognitive support for dementia care.",
    status: "Accepted · Poster",
    location: "womENcourage 2026",
    link: ""
  },
  {
    venue: "ICAART 2025",
    date: "Feb 4, 2025",
    title: "An Empirical Study Using Machine Learning to Analyze the Relationship Between Musical Audio Features and Psychological Stress",
    summary: "Built a Feedforward Neural Network achieving 0.96 accuracy classifying music into Stressed, Not-Stressed, and Borderline categories. Used SHAP and Integrated Gradients for interpretability across 19 genres and multiple languages. Clinically validated by Dr. Keya Das, PES University Institute of Medical Sciences.",
    status: "Accepted",
    location: "Portugal",
    link: ""
  },
  {
    venue: "IEEE I2CT 2024",
    date: "May 4, 2024",
    title: "An Empirical Study of Financial BERT Models for Sentiment Analysis and Cryptocurrency Price Correlation",
    summary: "Comparative analysis of Crypto-BERT, FinBERT, VADER, and SenticNet for cryptocurrency sentiment. Fine-tuned DistilBERT to study sentiment-price correlation, yielding a correlation coefficient of 0.88. Solo author. Published by IEEE Xplore, indexed in Scopus.",
    status: "Published",
    location: "Pune, India",
    link: ""
  },
  {
    venue: "Preprint",
    date: "2024",
    title: "Exploring Pivotal Dynamics of the Technological Job Market Through Data Analysis",
    summary: "Analyzed 350,000 job postings (data via Grepsr) to study technological labor market shifts post-pandemic. Insights for job seekers, employers, and policymakers.",
    status: "Preprint · arXiv",
    location: "",
    link: ""
  },
  {
    venue: "IBM Quantum · Qubit by Qubit",
    date: "Dec 31, 2023",
    title: "The Applications of Quantum Technology in the Healthcare Industry",
    summary: "Comprehensive overview of quantum computing's transformative impact on the medical domain. Final project for IBM Quantum's Qubit by Qubit program (full merit scholarship).",
    status: "Published",
    location: "",
    link: ""
  },
  {
    venue: "Illuminate AI",
    date: "Dec 27, 2022",
    title: "World of Reinforcement Learning",
    summary: "White paper covering core concepts of reinforcement learning and its real-world applications. First research paper, written under the mentorship of Praneet Dutta.",
    status: "Published",
    location: "",
    link: ""
  },
  {
    venue: "ACM Interactive Health 2026 (Workshop)",
    date: "2026",
    title: "AIxHealth at Interactive Health: Fostering a Global Research-Practice Collective on Responsible AI and Health Equity",
    summary: "Co-authored workshop paper following the Microsoft Research workshop on Bridging Research and Practice in AI and Global Health Equity. Collaborators across Georgia Tech, University of Cape Town, KTH, Emory, IBM, and more.",
    status: "Accepted",
    location: "ACM Interactive Health",
    link: ""
  }
];

/* ---------- PROJECTS ---------- */
const PROJECTS = [
  {
    cat: "AI Infrastructure · IBM",
    name: "wxdctl · Golang CLI for Kubernetes CRDs",
    desc: "Production-grade Golang CLI for Kubernetes resource operations across ROKS and Azure clusters. Uses client-go, dynamic clients, and API machinery. Reduces developer friction for Business Unit cloud operations at watsonx.data. End-to-end ownership; adopted as the default tool across the Business Unit.",
    tags: ["Go", "Kubernetes API Machinery", "CRDs", "client-go", "Cobra"]
  },
  {
    cat: "AI Infrastructure · IBM",
    name: "Natural Language Command Interface (Meraki)",
    desc: "Built as part of Meraki, a high-impact IBM intern cohort. A natural-language interface that enables users to navigate enterprise modules with role-aware navigation. Presented to senior leadership.",
    tags: ["NLP", "Enterprise UX", "Accessibility"]
  },
  {
    cat: "AI Infrastructure · IBM",
    name: "Unified AI Product Discovery",
    desc: "Multi-agent system synthesizing cross-portfolio intelligence across IBM software offerings. Won Most Innovative Solution at the Product Synergy Week Hackathon 2026. First IBM award presented by GM Sriram Raghavan.",
    tags: ["Multi-agent", "Cross-portfolio", "Agentic AI"]
  },
  {
    cat: "Agentic Systems",
    name: "MCP Server for Apache Iceberg",
    desc: "MCP server exposing Apache Iceberg REST Catalogs to AI agents. Live schema discovery, metadata trimming, auth boundaries, and safe agentic data access. Presented at the Bangalore Data Lakehouse Meetup with Cloudera, e6data, and OLake by Datazip.",
    tags: ["MCP", "Apache Iceberg", "Lakehouse", "AI Agents"]
  },
  {
    cat: "Agentic Systems",
    name: "MCP Server in Go",
    desc: "MCP server connecting AI agents to query engines. Handles 100 concurrent queries in 15ms, streams results in real-time, achieves 5,000 queries/second with 14 goroutines using 28KB of memory.",
    tags: ["Go", "MCP", "Concurrency", "AI Infra"]
  },
  {
    cat: "Healthcare AI",
    name: "Project ROOTS",
    desc: "Flutter app reducing the onset of dementia in senior citizens via personalized cognitive games. Validated with NIMHANS specialists and neurologists. 350+ users across the state. Won Cisco ThingQbator Cohort 5 (5L INR seed grant). Poster accepted at ACM womENcourage 2026.",
    tags: ["Flutter", "Firebase", "Cognitive Health"]
  },
  {
    cat: "Healthcare AI",
    name: "Niramai Women's Health App",
    desc: "End-to-end mobile application with 20 features for breast cancer screening. Real-time database management, authentication, cloud storage; PII-safe Patient ID generation. 40% increased user engagement.",
    tags: ["Flutter", "Firebase", "Breast Cancer Screening"]
  },
  {
    cat: "Healthcare AI",
    name: "Clinical Decision Support System",
    desc: "Built at MedInn TechLab to reduce clinician burnout via automated decision support tooling.",
    tags: ["Clinical AI", "Decision Support"]
  },
  {
    cat: "Research Tools / ML",
    name: "Restaurant Recommendation System",
    desc: "End-to-end pipeline using K-Means clustering, TF-IDF, Collaborative Filtering, and Cosine Similarity. Real-time data collection and EDA. Built during the Google KaggleX BIPOC Mentorship.",
    tags: ["Python", "Recommender Systems", "EDA"]
  },
  {
    cat: "Writing / Knowledge",
    name: "swiftieintech",
    desc: "Newsletter using Taylor Swift's discography as a thematic frame to make AI/data concepts accessible. Global community of 2,000+ readers across platforms.",
    tags: ["Newsletter", "AI", "Mentorship"]
  },
  {
    cat: "Writing / Knowledge",
    name: "Breakdown the BMC: AI Innovator's Playbook",
    desc: "Biweekly series with Aishwarya Srinivasan featuring coffee-chat interviews with founders and deep dives on niche AI startups (Mirage.ai, Bucket Robotics, Lighthouz AI, Helfie.AI, Felafax, KubeAI).",
    tags: ["Content Strategy", "AI Startups", "Editorial"]
  }
];

/* ---------- TALKS ---------- */
const TALKS = [
  // Keynotes
  { cat: "conference", date: "Jun 2026", title: "Agentless Agents: Replacing Sidecar Observability With eBPF + MCP Tool Chains", event: "Keynote · MCP Developers Summit Mumbai · Linux Foundation & Agentic AI Foundation", location: "Nita Mukesh Ambani Cultural Centre, Jio World Centre", desc: "Technical keynote on eBPF telemetry, MCP tool interfaces, kernel-aware debugging, sidecar-free observability, and production failure modes in agentic systems.", link: "" },
  { cat: "conference", date: "Jun 2026", title: "Auditing MCP Tool Calls at the Kernel Level: eBPF as a Trust Boundary Enforcer", event: "Keynote · MCP Developers Summit Bengaluru · Linux Foundation & Agentic AI Foundation", location: "Bengaluru", desc: "Keynote on mapping MCP request IDs to process lineage, syscall auditing, LSM hooks, and runtime enforcement for trustworthy agent systems.", link: "" },
  { cat: "conference", date: "Jun 2026", title: "Talk to Your Lakehouse: Building a Model Context Protocol Server for Apache Iceberg", event: "Bangalore Data Lakehouse Meetup · Cloudera × e6data × OLake by Datazip", location: "Cloudera, Bengaluru", desc: "MCP tool design for Iceberg REST Catalogs, live schema discovery, metadata trimming, auth boundaries, and safe agentic data access.", link: "" },
  { cat: "conference", date: "Mar 2026", title: "AI Meets Kubernetes: Langflow & Groq in Automated Incident Management", event: "KubeCon + CloudNativeCon EU · Cloud Native AI Day", location: "Amsterdam · 13,500+ attendees", desc: "First international solo conference talk. CNCF travel sponsored.", link: "" },
  { cat: "conference", date: "Aug 2025", title: "Kubernetes Developer Tooling at watsonx.data", event: "Keynote · KubeCon + CloudNativeCon India 2025", location: "Hyderabad · 4,000+ attendees", desc: "Youngest speaker and only intern speaker from the team. Presented Kubernetes developer tooling and testing practices. CNCF travel & stay sponsored.", link: "https://sched.co/23Et4" },
  { cat: "conference", date: "Sep 2025", title: "Under the Hood: The Craftsmanship of Creating High-Performance CLIs in Golang", event: "IndiaFOSS 2025 · DEVROOM #2 (Compilers, PL, Systems)", location: "Bengaluru", desc: "Cobra architecture, Unix philosophy for CLI design, NLP for command discovery.", link: "" },
  { cat: "conference", date: "Jun 2024", title: "Empirical Study of Financial BERT Models", event: "9th IEEE I2CT Conference", location: "Pune · IEEE Bombay Section", desc: "Solo author. First in-person paper presentation.", link: "" },
  { cat: "conference", date: "Feb 2025", title: "Music × Stress × XAI", event: "ICAART 2025 · 17th International Conference on Agents & AI", location: "Portugal", desc: "First international research conference paper presentation.", link: "" },

  // Workshops
  { cat: "workshop", date: "Oct 2024", title: "Beyond Words: NLP with Hugging Face for Hackathons", event: "HSP · PES University", location: "Bengaluru · YouTube live", desc: "Workshop on practical NLP for student builders.", link: "" },
  { cat: "workshop", date: "Jul 2024", title: "ML Systems Research Paper Reading Workshop (Bullion paper)", event: "Hasgeek Fifth Elephant + Bengaluru Systems Meetup", location: "Thoughtworks Office, Bengaluru", desc: "Co-facilitated with Aditi Ahuja. Framework for actively reading ML systems research papers.", link: "" },
  { cat: "workshop", date: "Apr 2024", title: "Bidirectional Encoder Representations from Transformers (BERT)", event: "GDSC PES University ECC · Build with AI Roadshow", location: "Bengaluru", desc: "First intercollegiate collaboration with other GDSC chapters.", link: "" },
  { cat: "workshop", date: "Sep 2022", title: "Data Demystified", event: "ACM-W PES University-RR", location: "Online · 180+ registrations", desc: "Solo workshop on Streamlit + EDA via two case studies.", link: "" },
  { cat: "workshop", date: "Nov 2025", title: "Pre-India AI Impact Summit 2026 AICTE Workshop", event: "watsonx.data Dev Edition · Presidency University", location: "Bengaluru", desc: "Co-facilitated workshop on Enterprise Data Management and Gen AI.", link: "" },

  // Paper readings
  { cat: "paper", date: "May 2024", title: "Med-PaLM M (Google DeepMind)", event: "Papers We Love · Bangalore Chapter (with Hasgeek/Fifth Elephant)", location: "Bengaluru", desc: "Multimodal AI in clinical workflows; biomedical fine-tuning; zero-shot generalization.", link: "" },
  { cat: "paper", date: "Jun 2024", title: "Kolmogorov-Arnold Networks (KAN)", event: "CoDMAV-PESU Weekly Paper Reading Sessions", location: "Bengaluru", desc: "Mathematical foundations, architecture, training, advantages, limitations, and case studies of KANs.", link: "" },

  // Panels & moderation
  { cat: "panel", date: "Feb 2025", title: "DeepSeek R1: Model Internals & the Indian AI Landscape", event: "Hasgeek + numberz.ai", location: "Koramangala Club, Bengaluru", desc: "Moderated talk by Harshad Saykhedkar on DeepSeek's RL training approach.", link: "" },
  { cat: "panel", date: "2025", title: "AI Launchpad Panel: AI Careers in US vs India", event: "The Hub Bengaluru · with Aishwarya Srinivasan & Arvind Narayanamurthy", location: "Bengaluru · 300+ attendees", desc: "Hosted panel on signals vs noise in AI talent, generalist vs specialist debate, AI solopreneurship.", link: "" },
  { cat: "panel", date: "Mar 2026", title: "High Performance Computing Panel", event: "GPN-WHPC · Holland Computing Center, Univ. of Nebraska-Lincoln", location: "Virtual · International Women's Day", desc: "Convergence of traditional HPC and cloud-native infrastructure.", link: "" },
  { cat: "panel", date: "2026", title: "Engineering Discipline & Building in India for Global Markets", event: "IBM Product Synergy Week 2026", location: "Across 6 IBM Software Labs", desc: "Moderated panels with Distinguished Engineers, Senior Directors, and STSMs.", link: "" },

  // Guest talks
  { cat: "guest", date: "Jun 2024", title: "WiDS Bangalore @ Intuit: Deep Learning paper presentation", event: "Intuit India · WiDS Bengaluru", location: "Bengaluru", desc: "Youngest speaker. Talk on market sentiment, networks, and price prediction models.", link: "" },
  { cat: "guest", date: "Jan 2025", title: "Building an Impactful Profile as an Engineering Student", event: "Cummins College of Engineering for Women", location: "Pune · YouTube", desc: "First talk after starting at IBM. Followed up with 30-min 1:1 mentoring sessions for top 5 engaged students.", link: "https://lnkd.in/gxHGeE2n" },
  { cat: "guest", date: "Jul 2024", title: "Bangalore Tech Culture & Indian Startup Ecosystem", event: "Princeton Startup Immersion Program", location: "Bengaluru", desc: "Conversation with PSIP delegates on AI, privacy, and the Indian techie experience.", link: "" },
  { cat: "guest", date: "2025", title: "The Technical Toolkit in 2025: Why It Expands Beyond Code", event: "IIT Madras BS in Data Science · Saranda House", location: "Virtual", desc: "5-pillar framework for AI careers: technical mastery, communication, thought leadership, OSS, responsible AI.", link: "" },
  { cat: "guest", date: "2025", title: "Transformers / Attention Is All You Need", event: "Fireside Talks · HSP & ACM PESU-ECC", location: "PES University", desc: "Walk-through of the Transformer architecture using Taylor Swift songs as input embeddings.", link: "" },
  { cat: "guest", date: "Aug 2025", title: "Why I Built an MCP Server in Go: Concurrency, Protocol Design & Low-Latency AI Retrieval", event: "Women Who Go Bangalore · CodeRabbit office", location: "Bengaluru", desc: "Goroutines, channels, and benchmarks for an MCP server connecting AI agents to query engines.", link: "" },
  { cat: "guest", date: "Sep 2025", title: "Building CLIs in Go for Kubernetes-native workflows", event: "Women in Cloud Native (CNCF Merge Forward subgroup)", location: "Virtual", desc: "Design patterns and lessons from building CLI tooling at IBM.", link: "" },
  { cat: "guest", date: "2025", title: "RAG & MCP Systems: The Swiftie Edition", event: "Go Girl Organisation × swiftieintech", location: "Virtual", desc: "RAG, vector embeddings, MCP, and intent understanding, explained accessibly.", link: "https://luma.com/sfu613ci" },
  { cat: "guest", date: "Mar 2026", title: "AI Systems Aren't Scaling: They're Converging into Compute Systems", event: "WHPC · Purdue University", location: "Virtual", desc: "Lightning talk on data systems, distributed inference, and execution physics.", link: "" },
  { cat: "guest", date: "2026", title: "Agentic Data Pipelines: Why AI Agents Fail Before Inference", event: "Apache Beam Community Meetup at Google", location: "Bengaluru", desc: "Windowing, stateful processing, and triggers as the real abstraction layer for agentic reasoning.", link: "" },
  { cat: "guest", date: "2026", title: "AI × Global Health Equity Workshop Pitch", event: "Microsoft Research", location: "Bengaluru", desc: "Selected to attend and pitch at the pre-summit workshop for the India AI Impact Summit 2026." , link: "" }
];

/* ---------- WRITING ARCHIVE ---------- */
const WRITING = [
  { platform: "Illuminate AI · Substack", date: "2024", title: "Bucket Robotics: Edge ML for Manufacturing", excerpt: "Coffee-chat interview with Matt Puchalski (CTO). Edge-based ML, real-time defect detection, and the challenges of integrating high-quality cameras into industrial processes.", url: "" },
  { platform: "Illuminate AI · Substack", date: "2024", title: "Lighthouz AI: Procurement Automation via Knowledge Graphs", excerpt: "Y Combinator S24 startup eliminating $40B in manual procurement work. Conversation with Srijan Kumar and Sonali Pattnaik on unstructured data, security, and execution-over-ideas.", url: "" },
  { platform: "Illuminate AI · Substack", date: "2024", title: "Helfie.AI: Multi-modal AI in your Pocket", excerpt: "Conversation with Nikhil Sehgal (CTO, Forbes 30 Under 30) on bandwidth optimization (100 Mbps to 0.7 Mbps), computer vision for vital signs, and democratizing healthcare AI.", url: "" },
  { platform: "Illuminate AI · Substack", date: "2024", title: "Felafax: JAX-based AI Infra Beyond NVIDIA", excerpt: "How a Y Combinator S24 startup, founded by twin brothers Nikhil and Nithin Sonti, trains LLaMA 3.1 (405B) on AMD GPUs cutting infra costs by 30%.", url: "" },
  { platform: "Illuminate AI · Substack", date: "2024", title: "KubeAI: Deploying LLMs on Kubernetes", excerpt: "Hacktoberfest spotlight on Sam Stoelinga's open-source project bringing OpenAI-style simplicity to self-hosted infra.", url: "" },
  { platform: "Illuminate AI · Substack", date: "2024", title: "Mirage.ai: Automating Video Editing & Subtitles", excerpt: "Critical examination of AI tools for content creation: do they enhance creativity or threaten the unique voice of human creators?", url: "" },
  { platform: "swiftieintech (LinkedIn)", date: "Ongoing", title: "swiftieintech weekly musings", excerpt: "Weekly newsletter using Taylor Swift's discography as a thematic frame for AI, ML, and data concepts. Mentorship advice and learnings from internships, research, and workshops.", url: "https://www.linkedin.com/newsletters/swiftieintech-7268168042189156353/" },
  { platform: "LinkedIn", date: "2025", title: "Microsoft Research × Global Health Equity Reflections", excerpt: "Two-day reflection from the pre-summit India AI Impact Summit 2026 workshop on responsible AI in healthcare.", url: "https://lnkd.in/g2ATuvCc" },
  { platform: "LinkedIn", date: "2025", title: "What 6 Months at IBM Taught Me About Cloud-Native Infra", excerpt: "From writing unit tests to delivering at KubeCon. Onboarding by listening, owning a CLI from scratch, and presenting at Meraki demos.", url: "" }
];

/* ---------- COMMUNITY (orgs, editorial, open source, service) ---------- */
const COMMUNITY = [
  { role: "Program Committee Member", org: "AAAI/ACM AIES 2026", date: "2026", desc: "Reviewed interdisciplinary submissions at the intersection of AI systems, ethics, governance, privacy, hallucination, and societal impact." },
  { role: "Reviewer", org: "ICLR 2026 · MemAgents Workshop", date: "2026", desc: "Reviewed workshop submissions on memory-augmented agents, LLM systems, and agentic AI architectures." },
  { role: "Reviewer", org: "GopherCon US 2026", date: "2026", desc: "Reviewed technical proposals in Go, cloud-native systems, and developer tooling." },
  { role: "Reviewer", org: "PEARC 2026 · Posters & Visualizations Track", date: "2026", desc: "Reviewed submissions in advanced research computing and scientific computing practice." },
  { role: "Editor & Writer", org: "kubernetes-sigs/lwkd", date: "2026 to Present", desc: "Advanced from contributor/writer to editor within 2 months. Curate, edit, and summarize upstream Kubernetes development activity for a global open-source audience. Merged PRs #802, #798, #795." },
  { role: "Working Group Lead", org: "IBM Core-X · Speaking & Authoring", date: "2025 to Present", desc: "Leading the Speaking & Authoring Working Group across IBM India Software Labs under Gireesh Punathil's sponsorship." },
  { role: "APAC Ambassador", org: "Stanford Women in Data Science (WiDS) Worldwide", date: "Nov 2021 to Present", desc: "WiDS Bengaluru Ambassador; recognized as a High Impact Ambassador in Asia-Pacific; among the youngest WiDS Ambassadors in APAC." },
  { role: "Head", org: "Hackerspace (HSP), PES University", date: "2023 to 2025", desc: "Led the largest technical/FOSS community on campus. Started Project Expo (now Project Expo 2.0, 419 registrations). Organized workshops, hackathons, peer-learning programs." },
  { role: "Editorial Board", org: "Hasgeek · The Fifth Elephant", date: "May to Jul 2024", desc: "Member of the Data Engineering Track editorial board for Asia's leading data science conference." },
  { role: "Core Member", org: "Google Developer Student Clubs · PES ECC", date: "Aug 2022 to May 2024", desc: "Organized hackathons, seminars, and the Build with AI Roadshow." },
  { role: "Technical Team", org: "ACM-W PES University-RR", date: "Nov 2021 to Nov 2022", desc: "Conducted solo Data Demystified workshop with 180+ registrations." },
  { role: "Core Team", org: "IEEE Women in Engineering", date: "Oct 2021 to Jan 2023", desc: "Organized Kaggle 101 webinar with Usha Rengaraju (World's First Woman Double Kaggle Grandmaster)." }
];

/* ---------- MENTORING & TEACHING (1:1, coursework, outreach) ---------- */
const MENTORING = [
  { role: "Mentor", org: "Women in High Performance Computing (WHPC)", date: "Jan 2026 to Present", desc: "Mentor early-career and aspiring professionals in the HPC ecosystem through structured guidance on technical development, research direction, confidence-building, and career navigation." },
  { role: "Fellow / Mentor", org: "Sitara Akka", date: "2025 to Present", desc: "Part of a volunteer mentoring collective that has supported 300 students over 8 months through academic, career, and personal-development guidance, mentoring students from rural Karnataka and mentees globally across countries including Turkey, the UK, Australia, and the US." },
  { role: "Founder / Writer", org: "swiftieintech", date: "2024 to Present", desc: "Write technical and career-focused AI content for a global reader community of 2,000+ subscribers. Translates emerging AI, cloud-native, and research ideas into accessible learning resources." },
  { role: "Teaching Assistant", org: "Generative AI & Its Applications, PES University", date: "Dec 2024 to Jun 2025", desc: "Supported course delivery, student mentoring, and hands-on learning around generative AI systems, applied AI tools, and responsible AI workflows." },
  { role: "Teaching Assistant", org: "Linear Algebra, PES University", date: "Prior semester", desc: "Supported undergraduate instruction, student doubt-clearing, and mathematical foundations for machine learning, data science, and AI coursework." },
  { role: "1:1 Mentor", org: "Open DMs / Project Reviews", date: "Ongoing", desc: "30-min 1:1s and project reviews with students from states across India. Knowledge-sharing as access-building." },
  { role: "Volunteer", org: "Women Who Code", date: "Dec 2021 to Present", desc: "Contributed to women-in-tech community programming and peer learning initiatives." },
  { role: "Volunteer", org: "GirlsCodeIt", date: "Jan 2022 to Present", desc: "Supported early exposure to coding, technology learning, and representation-focused STEM initiatives." },
  { role: "Social Action Project Lead", org: "Right to Write · EQUIBE", date: "2018 to 2019", desc: "Collected and repurposed waste paper into usable stationery for under-resourced school children, supporting primary and middle-school students." }
];

/* ---------- ACHIEVEMENTS ---------- */
const ACHIEVEMENTS = [
  { cat: "IBM",          title: "Double-band Promotion at IBM", desc: "Recognized for exceptional technical ownership, business impact, and cross-functional leadership in cloud-native infrastructure." },
  { cat: "IBM",          title: "Top 50 Ideas · IBM Sovereign Core Catalog-athon", desc: "Our team's two ideas reached the Top 50 in a cross-lab initiative spanning seven cities: a Policy-as-Code Governance Engine for Sovereign Kubernetes using Kyverno/OPA-style enforcement, and a Sovereign Document Intelligence Hub using Paperless-ngx, Apache Tika, PostgreSQL, MinIO, Redis, and OCR for searchable, auditable, in-boundary document workflows." },
  { cat: "IBM",          title: "IBM ISL Hackathon · Most Innovative Solution", desc: "Product Synergy Week 2026. Special mention from VP Vishal Chahal." },
  { cat: "Speaking",     title: "KubeCon + CloudNativeCon EU 2026", desc: "Speaker · Cloud Native AI Day · Amsterdam." },
  { cat: "Speaking",     title: "KubeCon + CloudNativeCon India 2025", desc: "Keynote. Only intern accepted; youngest speaker. CNCF-sponsored." },
  { cat: "Speaking",     title: "MCP Developers Summit Mumbai & Bengaluru", desc: "Two keynotes on eBPF × MCP for agentic systems (Linux Foundation × Agentic AI Foundation)." },
  { cat: "Recognition",  title: "LinkedIn Top Voice · Data Science, 2025", desc: "Recognized for collaborative articles and insights." },
  { cat: "Recognition",  title: "SC26 Women's History Month Profile", desc: "Featured by the SC Conference community for HPC × AI work." },
  { cat: "Fellowship",   title: "Harvard WECode Tech Fellow", desc: "Largest student-run Women in CS conference, globally." },
  { cat: "Fellowship",   title: "High Impact APAC Ambassador · Stanford WiDS Worldwide", desc: "Youngest WiDS Ambassador in APAC; featured in Stanford-screened interview by Marisa Camplin." },
  { cat: "Scholarship",  title: "AWS AI & ML Scholar", desc: "$4,000 award in collaboration with Intel and Udacity." },
  { cat: "Scholarship",  title: "OxML Scholar · Oxford ML Summer School", desc: "MLx Health & Bio + MLx Representation Learning + GenAI Tracks." },
  { cat: "Scholarship",  title: "IBM Quantum Scholar · Qubit by Qubit", desc: "Full merit scholarship; coursework in Qiskit and quantum healthcare applications." },
  { cat: "Scholarship",  title: "O'Reilly DEIJ Scholar", desc: "Unlimited access to the O'Reilly learning platform." },
  { cat: "Scholarship",  title: "AnitaB.org India Advancing Inclusion", desc: "Scholarship to attend Grace Hopper Celebration India 2024 in person." },
  { cat: "Scholarship",  title: "RISE MICCAI Summer School 2025", desc: "Diffusion models, graph learning, uncertainty quantification for medical image computing." },
  { cat: "Research",     title: "UIUC+ Summer Undergraduate Research", desc: "Top 15 of 1,300+ applicants. Software engineering research at UIUC." },
  { cat: "Research",     title: "ACM India Summer School (IIT Hyderabad)", desc: "1 of 40 students nationwide. Algorithmic Techniques in Computational Biology." },
  { cat: "Research",     title: "ISSTA 2026 Paper Acceptance", desc: "The Discreet Charm of the Bugeoisie. 23.6% acceptance rate." },
  { cat: "Research",     title: "ICAART 2025 Paper Acceptance", desc: "First international student-researcher conference paper. Music × stress × XAI." },
  { cat: "Recognition",  title: "Cisco ThingQbator Cohort 5 Winner", desc: "5L INR seed grant for Project ROOTS." },
  { cat: "Mentorship",   title: "Google KaggleX BIPOC Mentee", desc: "$1,000 educational grant; 4-month global mentorship cohort." },
  { cat: "Mentorship",   title: "Code; Without Barriers (Microsoft Azure)", desc: "Mentee for the cohort focusing on accessibility and inclusion in tech." },
  { cat: "Recognition",  title: "HPAIR 2024 Delegate", desc: "Harvard Project for Asian and International Relations Conference at Harvard." }
];

/* expose */
window.SITE = { NEWS, BOARD_TILES, EXPERIENCES, RESEARCH, PROJECTS, TALKS, WRITING, COMMUNITY, MENTORING, ACHIEVEMENTS };
