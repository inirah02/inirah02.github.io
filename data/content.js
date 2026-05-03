/* =====================================================
   content.js
   All content here is grounded in CV + LinkedIn data bank.
   To update: just edit the arrays below.
   Every item supports an optional `images: []` array.
   ===================================================== */

/* ---------- VISION BOARD TILES ---------- */
const BOARD_TILES = [
  // Row 1
  { label: "01 / Build", title: "Software Developer\nat IBM", variant: "ink",   size: "lg", caption: "Data & AI · watsonx.data · cloud-native infra", link: "#work" },
  { label: "02 / Stage", title: "KubeCon EU 2026\nAmsterdam", variant: "clay",  size: "md", caption: "AI Meets Kubernetes — Cloud Native AI Day", link: "#talks" },
  { label: "03 / Lab",   title: "UIUC + Marinov\nResearch", variant: "paper2",  size: "sm", caption: "Software engineering · fairness testing · APR", link: "#research" },
  { label: "04 / Note",  title: "swiftieintech",          variant: "gold",     size: "xs", caption: "1,400+ learners", link: "#writing" },

  // Row 2
  { label: "05 / Read",  title: "Breakdown the BMC\nAI Innovator's Playbook", variant: "paper3", size: "md", caption: "with Aishwarya Srinivasan", link: "#writing" },
  { label: "06 / Health", title: "Clinical AI",            variant: "sage",    size: "tall", caption: "Niramai · IIT Hyderabad · Geisel Dartmouth · Georgia Tech", link: "#research" },
  { label: "07 / Talk",  title: "IndiaFOSS 2025",          variant: "ink",     size: "sm", caption: "High-perf CLIs in Golang", link: "#talks" },
  { label: "08 / Lead",  title: "HSP Core Team Lead",      variant: "tile3",   size: "sm", caption: "Largest FOSS community at PES", link: "#community" },

  // Row 3
  { label: "09 / Win",   title: "IBM ISL Hackathon\nMost Innovative Solution", variant: "clay", size: "md", caption: "Unified AI Product Discovery", link: "#work" },
  { label: "10 / Paper", title: "ICAART 2025\nPortugal",   variant: "paper2",  size: "sm", caption: "Music × stress × XAI", link: "#research" },
  { label: "11 / Voice", title: "LinkedIn Top Voice\nData Science", variant: "gold", size: "sm", caption: "Recognition", link: "#writing" },
  { label: "12 / Mentor", title: "Sitara Akka Fellow",     variant: "paper3",  size: "wide", caption: "Mentorship as access-building", link: "#community" },

  // Row 4
  { label: "13 / Write", title: "Papers We Love\nMed-PaLM M",   variant: "ink",   size: "sm", caption: "Hasgeek · Fifth Elephant", link: "#talks" },
  { label: "14 / Open",  title: "kubernetes-sigs/lwkd",   variant: "tile3",     size: "sm", caption: "Last Week in Kubernetes Dev", link: "#community" },
  { label: "15 / Talk",  title: "Apache Beam @ Google",   variant: "sage",      size: "md", caption: "Agentic data pipelines", link: "#talks" },
  { label: "16 / Award", title: "Harvard WECode\nTech Fellow",  variant: "clay", size: "sm", caption: "Largest student-run WiCS conf", link: "#achievements" },

  // Row 5
  { label: "17 / Build", title: "Project ROOTS",          variant: "paper2",   size: "md", caption: "Cisco ThingQbator winner · 350+ users", link: "#projects" },
  { label: "18 / Stage", title: "Women Who Go\nBangalore", variant: "ink",     size: "sm", caption: "MCP Server in Go", link: "#talks" },
  { label: "19 / School", title: "Oxford ML\nSummer School", variant: "gold",  size: "sm", caption: "MLx Health & Bio", link: "#achievements" },
  { label: "20 / Voice", title: "SC26 Women's\nHistory Profile", variant: "paper3", size: "md", caption: "HPC for AI · scale · interpretability", link: "#achievements" }
];

/* ---------- EXPERIENCE TIMELINE ---------- */
const EXPERIENCES = [
  {
    date: "Jul 2025 — Present",
    role: "Software Developer",
    org: "IBM · Data & AI Division (watsonx.data)",
    location: "Bengaluru · On-site",
    bullets: [
      "Achieved 90% cost reduction in cloud file storage by optimizing configurations ($820 → $70).",
      "Selected to lead the Speaking & Authoring Working Group under the ISL-wide Core-X initiative.",
      "Contributing to an Agentic AI patent project on intelligent automation and cognitive decision systems.",
      "Working on the OpenSearch acquisition tech preview and FedRAMP compliance project.",
      "Built PoCs using LangFlow and Groq for AI-driven automation workflows."
    ],
    tags: ["Go", "Kubernetes", "Cloud Native", "AI Infra", "watsonx.data"]
  },
  {
    date: "Jan 2025 — Jun 2025",
    role: "Software Developer Intern",
    org: "IBM · Cloud Services / watsonx.data",
    location: "Bengaluru · On-site",
    bullets: [
      "Built an internal CLI in Golang from scratch using Kubernetes API Machinery — soon to be the default tool across the Business Unit.",
      "Designed and implemented custom commands for interacting with CRDs across multiple ROKS and Azure clusters.",
      "Joined Meraki, a high-impact intern cohort, building a natural-language command interface for enterprise modules.",
      "Speaker at KubeCon + CloudNativeCon India 2025 — only intern accepted as a speaker, youngest on the lineup."
    ],
    tags: ["Go", "Kubernetes", "CRDs", "CLI", "Unit testing"]
  },
  {
    date: "May 2025 — Present",
    role: "Undergraduate Researcher (UIUC+ Program)",
    org: "University of Illinois Urbana-Champaign · MIR Group, Prof. Darko Marinov",
    location: "Remote",
    bullets: [
      "Selected as one of the top 15 researchers from 1,300+ applicants for the UIUC+ Summer Undergraduate Research in Software Engineering Program.",
      "Researching fairness testing in ML systems — extending symbolic execution and local explainability techniques to multimodal models.",
      "Synthesizing findings from recent ICSE and FSE 2025 papers on fairness, bias mitigation, and intersectional testing.",
      "Contributing to research on automated program repair (Agentless, TARGET, SEER); curating verified datasets using the SZZ algorithm."
    ],
    tags: ["Software Engineering", "Fairness Testing", "APR", "Research"]
  },
  {
    date: "Mar 2026 — Present",
    role: "Biomedical AI Researcher",
    org: "Geisel School of Medicine at Dartmouth",
    location: "Remote",
    bullets: [
      "Working on personalized digital health models for schizophrenia using passive smartphone sensing and ecological momentary assessment data.",
      "Exploring autoencoder-based deep learning models for low-burden, within-person symptom monitoring.",
      "Research could support future just-in-time adaptive interventions for cognitive and negative symptoms."
    ],
    tags: ["Clinical AI", "Deep Learning", "Digital Health"]
  },
  {
    date: "Jan 2026 — Present",
    role: "Volunteer Research Associate",
    org: "Georgia Institute of Technology · Center for the Study of Systems Biology",
    location: "Remote",
    bullets: [
      "Applying ML/AI methods to complex scientific and biological problems.",
      "Research interests span computational cognition, clinical AI, interpretable ML, computational biology, protein structure & function, and drug discovery."
    ],
    tags: ["Systems Biology", "Interpretable ML", "Computational Biology"]
  },
  {
    date: "Jun 2025 — Present",
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
    date: "Jun 2025 — Jan 2026",
    role: "Fellow",
    org: "Sitara Akka",
    location: "Remote",
    bullets: [
      "Mentoring students from low-income backgrounds on academic, personal, and professional development goals.",
      "Supporting scholars in building confidence, time management, self-awareness, and critical thinking.",
      "Advocating for equitable access to education through self-directed learning."
    ],
    tags: ["Mentorship", "Education", "Equity"]
  },
  {
    date: "Dec 2024 — Jun 2025",
    role: "Generative AI Teaching Assistant",
    org: "PES University",
    location: "Bengaluru",
    bullets: [
      "Teaching Assistant for the Generative AI & Its Applications course."
    ],
    tags: ["Teaching", "GenAI"]
  },
  {
    date: "Sep 2024 — Present",
    role: "Content Strategist (freelance) · Technical Content Writer",
    org: "Illuminate AI",
    location: "Remote",
    bullets: [
      "Designing and implementing content plans aligned with audience preferences and platform analytics.",
      "Co-author of Breakdown the BMC: AI Innovator's Playbook — biweekly deep-dives on niche AI startups.",
      "Featured: Mirage.ai, Bucket Robotics, Lighthouz AI, Helfie.AI, Felafax, KubeAI."
    ],
    tags: ["Content Strategy", "Technical Writing", "AI Startups"]
  },
  {
    date: "Oct 2024 — Jan 2025",
    role: "Machine Learning Research Intern",
    org: "Niramai Health Analytix",
    location: "Bengaluru",
    bullets: [
      "Building novel mammography AI architectures."
    ],
    tags: ["Clinical AI", "Mammography", "Deep Learning"]
  },
  {
    date: "May 2024 — Jul 2024",
    role: "Editorial Board · Data Engineering Track Assistant",
    org: "Hasgeek · The Fifth Elephant",
    location: "Bengaluru · Remote",
    bullets: [
      "Member of the Editorial Board of the Data Engineering Track for the Fifth Elephant Annual Conference.",
      "Helped curate speakers and review proposals for one of Asia's leading data science and ML conferences."
    ],
    tags: ["Editorial", "Data Engineering", "Conferences"]
  },
  {
    date: "Jan 2024 — Jul 2024",
    role: "Software Developer Intern",
    org: "Niramai Health Analytix",
    location: "Bengaluru · On-site",
    bullets: [
      "Designed, developed and built an end-to-end women's health application with 20 features for breast cancer screening using Flutter (5 months, solo developer).",
      "Integrated self-examination & tracking tools with Firebase for real-time database management, authentication, and cloud storage.",
      "Implemented user profile workflow generating unique Patient IDs — 40% increased user engagement and compliance."
    ],
    tags: ["Flutter", "Firebase", "Healthcare", "Mobile"]
  },
  {
    date: "Jun 2023 — Dec 2023",
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
    date: "May 2023 — Jan 2024",
    role: "Research Intern",
    org: "MedInn TechLab",
    location: "Remote",
    bullets: [
      "Built a Clinical Decision Support System aimed at reducing clinician burnout."
    ],
    tags: ["Clinical AI", "Decision Support"]
  },
  {
    date: "Aug 2022 — Apr 2024",
    role: "Core Team Lead → Technical Mentor",
    org: "HSP — largest FOSS community at PES University",
    location: "Bengaluru",
    bullets: [
      "Led the largest technical community on campus.",
      "Started Project Expo as Core Team Lead — now Project Expo 2.0 with 419 registrations and 250+ attendees.",
      "Conducted workshop 'Beyond Words' on NLP and Hugging Face Models for hackathons.",
      "Organized biweekly meetups for collaborative exploration of technical projects and research papers."
    ],
    tags: ["FOSS", "Community", "NLP", "Workshops"]
  },
  {
    date: "Aug 2022 — May 2024",
    role: "Core Member",
    org: "Google Developer Student Clubs · PES University ECC",
    location: "Bengaluru",
    bullets: [
      "Organized hackathons and seminars; advocated for technology adoption.",
      "Led the BERT/Transformers workshop as part of the Build with AI Roadshow."
    ],
    tags: ["GDSC", "ML Workshops"]
  },
  {
    date: "Jan 2024 — Jul 2024 (Fellowship: Apr 2022 onwards)",
    role: "Mentee → Technical Content Writer",
    org: "Illuminate AI",
    location: "Remote",
    bullets: [
      "First entered the AI Community as a mentee under Aishwarya Srinivasan.",
      "Built a Lung Segmentation Model under mentorship to learn image segmentation and ML in Healthcare."
    ],
    tags: ["Mentorship", "Healthcare AI"]
  },
  {
    date: "Feb 2022 — Sep 2022",
    role: "Web Development Intern",
    org: "Reap Benefit",
    location: "Bengaluru",
    bullets: [
      "Web development internship at a civic-tech non-profit."
    ],
    tags: ["Web Dev", "Civic Tech"]
  },
  {
    date: "Dec 2022 — Mar 2023",
    role: "BIPOC Mentee",
    org: "Google · KaggleX",
    location: "Global · Remote",
    bullets: [
      "Selected for the Google KaggleX BIPOC Mentorship Program with a $1000 educational grant.",
      "Built an end-to-end restaurant recommendation system using K-Means, TF-IDF, Collaborative Filtering, and Cosine Similarity."
    ],
    tags: ["KaggleX", "Recommendation Systems"]
  }
];

/* ---------- RESEARCH / PUBLICATIONS ---------- */
const RESEARCH = [
  {
    venue: "ICAART 2025",
    date: "Feb 4, 2025",
    title: "An Empirical Study Using Machine Learning to Analyze the Relationship Between Musical Audio Features and Psychological Stress",
    summary: "Built a Feedforward Neural Network achieving 0.96 accuracy classifying music into Stressed / Not-Stressed / Borderline. Used SHAP and Integrated Gradients for interpretability across 19 genres and multiple languages. Clinically validated by Dr. Keya Das, PES University Institute of Medical Sciences.",
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
    venue: "IBM Quantum / Qubit by Qubit",
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
    summary: "Co-authored workshop paper following the Microsoft Research workshop on Bridging Research and Practice in AI and Global Health Equity. Collaborators across Georgia Tech, University of Cape Town, KTH, Emory, IBM and more.",
    status: "Accepted",
    location: "ACM Interactive Health",
    link: ""
  }
];

/* ---------- PROJECTS ---------- */
const PROJECTS = [
  {
    cat: "AI Infrastructure · IBM",
    name: "Internal Go CLI for Kubernetes CRDs",
    desc: "Built an internal command-line tool in Golang from scratch to simplify how developers interact with custom Kubernetes resources across ROKS and Azure clusters at watsonx.data. End-to-end ownership; soon to be the default tool across the Business Unit.",
    tags: ["Go", "Kubernetes API Machinery", "CRDs", "Unit testing", "Cobra"]
  },
  {
    cat: "AI Infrastructure · IBM",
    name: "Natural Language Command Interface (Meraki)",
    desc: "Built as part of Meraki — a high-impact IBM intern cohort. A natural-language interface that enables users to navigate enterprise modules with role-aware navigation. Presented to senior leadership.",
    tags: ["NLP", "Enterprise UX", "Accessibility"]
  },
  {
    cat: "AI Infrastructure · IBM",
    name: "Unified AI Product Discovery (Hackathon win)",
    desc: "Multi-agent system synthesizing cross-portfolio intelligence across IBM software offerings. Won Most Innovative Solution at the Product Synergy Week Hackathon 2026. First IBM award presented by GM Sriram Raghavan.",
    tags: ["Multi-agent", "Cross-portfolio", "Agentic AI"]
  },
  {
    cat: "Healthcare AI",
    name: "Project ROOTS",
    desc: "A Flutter app reducing the onset of dementia in senior citizens via personalized cognitive games. Validated with NIMHANS specialists and various neurologists. 350+ users across the state. Won Cisco ThingQbator Cohort 5 with a 5L INR seed grant.",
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
    cat: "AI Infrastructure",
    name: "MCP Server in Go",
    desc: "Built a Model Context Protocol server connecting AI agents to query engines — handling 100 concurrent queries in 15ms, streaming results in real-time, achieving 5,000 queries/second with just 14 goroutines using 28KB of memory.",
    tags: ["Go", "MCP", "Concurrency", "AI Infra"]
  },
  {
    cat: "Writing / Knowledge",
    name: "swiftieintech",
    desc: "LinkedIn newsletter using Taylor Swift's discography as a thematic frame to make AI/data concepts accessible. Now a global community of 1,400+ learners across platforms.",
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
  // Conferences
  { cat: "conference", date: "Mar 2026",  title: "AI Meets Kubernetes: Langflow & Groq in Automated Incident Management", event: "KubeCon + CloudNativeCon EU · Cloud Native AI Day", location: "Amsterdam · 13,500+ attendees", desc: "First international solo conference talk. CNCF travel sponsored.", link: "" },
  { cat: "conference", date: "Aug 2025",  title: "Kubernetes Developer Tooling at watsonx.data", event: "KubeCon + CloudNativeCon India 2025", location: "Hyderabad · 4,000+ attendees", desc: "Lightning talk; only intern accepted as a speaker, youngest on lineup. CNCF travel & stay sponsored.", link: "https://sched.co/23Et4" },
  { cat: "conference", date: "Sep 2025",  title: "Under the Hood: The Craftsmanship of Creating High-Performance CLIs in Golang", event: "IndiaFOSS 2025 · DEVROOM #2 — Compilers, PL, Systems", location: "Bengaluru", desc: "Cobra architecture, Unix philosophy for CLI design, NLP for command discovery.", link: "" },
  { cat: "conference", date: "Jun 2024",  title: "Empirical Study of Financial BERT Models", event: "9th IEEE I2CT Conference", location: "Pune · IEEE Bombay Section", desc: "Solo author. First in-person paper presentation.", link: "" },
  { cat: "conference", date: "Feb 2025",  title: "Music × Stress × XAI", event: "ICAART 2025 · 17th International Conference on Agents & AI", location: "Portugal", desc: "First international research conference paper presentation.", link: "" },

  // Workshops
  { cat: "workshop", date: "Oct 2024",   title: "Beyond Words: NLP with Hugging Face for Hackathons", event: "HSP — PES University", location: "Bengaluru · YouTube live", desc: "Workshop on practical NLP for student builders.", link: "" },
  { cat: "workshop", date: "Jul 2024",   title: "ML Systems Research Paper Reading Workshop — Bullion paper", event: "Hasgeek Fifth Elephant + Bengaluru Systems Meetup", location: "Thoughtworks Office, Bengaluru", desc: "Co-facilitated with Aditi Ahuja. Framework for actively reading ML systems research papers.", link: "" },
  { cat: "workshop", date: "Apr 2024",   title: "Bidirectional Encoder Representations from Transformers (BERT)", event: "GDSC PES University ECC · Build with AI Roadshow", location: "Bengaluru", desc: "First intercollegiate collaboration with other GDSC chapters.", link: "" },
  { cat: "workshop", date: "Sep 2022",   title: "Data Demystified", event: "ACM-W PES University-RR", location: "Online · 180+ registrations", desc: "Solo workshop on Streamlit + EDA via two case studies.", link: "" },
  { cat: "workshop", date: "Nov 2025",  title: "Pre-India AI Impact Summit 2026 AICTE Workshop", event: "watsonx.data Dev Edition · Presidency University", location: "Bengaluru", desc: "Co-facilitated workshop on Enterprise Data Management and Gen AI.", link: "" },

  // Paper readings
  { cat: "paper", date: "May 2024",     title: "Med-PaLM M (Google DeepMind)",  event: "Papers We Love · Bangalore Chapter (with Hasgeek/Fifth Elephant)", location: "Bengaluru", desc: "Multimodal AI in clinical workflows; biomedical fine-tuning; zero-shot generalization.", link: "" },
  { cat: "paper", date: "Jun 2024",     title: "Kolmogorov-Arnold Networks (KAN)", event: "CoDMAV-PESU Weekly Paper Reading Sessions", location: "Bengaluru", desc: "Mathematical foundations, architecture, training, advantages, limitations, and case studies of KANs.", link: "" },

  // Panels & moderation
  { cat: "panel", date: "Feb 2025",    title: "DeepSeek R1 — Model Internals & the Indian AI Landscape", event: "Hasgeek + numberz.ai", location: "Koramangala Club, Bengaluru", desc: "Moderated talk by Harshad Saykhedkar on DeepSeek's RL training approach.", link: "" },
  { cat: "panel", date: "2025",        title: "AI Launchpad Panel — AI Careers in US vs India", event: "The Hub Bengaluru · with Aishwarya Srinivasan & Arvind Narayanamurthy", location: "Bengaluru · 300+ attendees", desc: "Hosted panel on signals vs noise in AI talent, generalist vs specialist debate, AI solopreneurship.", link: "" },
  { cat: "panel", date: "Mar 2026",    title: "High Performance Computing Panel", event: "GPN-WHPC · Holland Computing Center, Univ. of Nebraska-Lincoln", location: "Virtual · International Women's Day", desc: "Convergence of traditional HPC and cloud-native infrastructure.", link: "" },
  { cat: "panel", date: "2026",        title: "Engineering Discipline & Building in India for Global Markets", event: "IBM Product Synergy Week 2026", location: "Across 6 IBM Software Labs", desc: "Moderated panels with Distinguished Engineers, Senior Directors, and STSMs.", link: "" },

  // Guest talks
  { cat: "guest", date: "Jun 2024",   title: "WiDS Bangalore @ Intuit — Deep Learning paper presentation", event: "Intuit India · WiDS Bengaluru", location: "Bengaluru", desc: "Youngest speaker. Talk on market sentiment, networks, and price prediction models.", link: "" },
  { cat: "guest", date: "Jan 2025",   title: "Building an Impactful Profile as an Engineering Student", event: "Cummins College of Engineering for Women", location: "Pune · YouTube", desc: "First talk after starting at IBM. Followed up with 30-min 1:1 mentoring sessions for top 5 engaged students.", link: "https://lnkd.in/gxHGeE2n" },
  { cat: "guest", date: "Jul 2024",   title: "Bangalore Tech Culture & Indian Startup Ecosystem", event: "Princeton Startup Immersion Program", location: "Bengaluru", desc: "Conversation with PSIP delegates on AI, privacy, and the Indian techie experience.", link: "" },
  { cat: "guest", date: "2025",       title: "The Technical Toolkit in 2025 — Why It Expands Beyond Code", event: "IIT Madras BS in Data Science · Saranda House", location: "Virtual", desc: "5-pillar framework for AI careers: technical mastery, communication, thought leadership, OSS, responsible AI.", link: "" },
  { cat: "guest", date: "2025",       title: "Transformers / Attention is All You Need", event: "Fireside Talks · HSP & ACM PESU-ECC", location: "PES University", desc: "Walk-through of the Transformer architecture using Taylor Swift songs as input embeddings.", link: "" },
  { cat: "guest", date: "Aug 2025",   title: "Why I Built an MCP Server in Go: Concurrency, Protocol Design & Low-Latency AI Retrieval", event: "Women Who Go Bangalore · CodeRabbit office", location: "Bengaluru", desc: "Goroutines, channels, and benchmarks for an MCP server connecting AI agents to query engines.", link: "" },
  { cat: "guest", date: "Sep 2025",   title: "Building CLIs in Go for Kubernetes-native workflows", event: "Women in Cloud Native (CNCF Merge Forward subgroup)", location: "Virtual", desc: "Design patterns and lessons from building CLI tooling at IBM.", link: "" },
  { cat: "guest", date: "2025",       title: "RAG & MCP Systems — The Swiftie Edition", event: "Go Girl Organisation × Swiftieintech", location: "Virtual", desc: "RAG, vector embeddings, MCP, and intent understanding — explained accessibly.", link: "https://luma.com/sfu613ci" },
  { cat: "guest", date: "Mar 2026",   title: "AI Systems Aren't Scaling — They're Converging into Compute Systems", event: "WHPC · Purdue University", location: "Virtual", desc: "Lightning talk on data systems, distributed inference, and execution physics.", link: "" },
  { cat: "guest", date: "2026",       title: "Agentic Data Pipelines — Why AI Agents Fail Before Inference", event: "Apache Beam Community Meetup · at Google", location: "Bengaluru", desc: "Windowing, stateful processing, and triggers as the real abstraction layer for agentic reasoning.", link: "" }
];

/* ---------- WRITING ARCHIVE ---------- */
const WRITING = [
  { platform: "Illuminate AI · Substack", date: "2024",   title: "Bucket Robotics — Edge ML for Manufacturing", excerpt: "Coffee-chat interview with Matt Puchalski (CTO). Edge-based ML, real-time defect detection, and the challenges of integrating high-quality cameras into industrial processes.", url: "" },
  { platform: "Illuminate AI · Substack", date: "2024",   title: "Lighthouz AI — Procurement Automation via Knowledge Graphs", excerpt: "Y Combinator S24 startup eliminating $40B in manual procurement work. Conversation with Srijan Kumar and Sonali Pattnaik on unstructured data, security, and execution-over-ideas.", url: "" },
  { platform: "Illuminate AI · Substack", date: "2024",   title: "Helfie.AI — Multi-modal AI in your Pocket", excerpt: "Conversation with Nikhil Sehgal (CTO, Forbes 30 Under 30) on bandwidth optimization (100 Mbps → 0.7 Mbps), computer vision for vital signs, and democratizing healthcare AI.", url: "" },
  { platform: "Illuminate AI · Substack", date: "2024",   title: "Felafax — JAX-based AI Infra Beyond NVIDIA", excerpt: "How a Y Combinator S24 startup, founded by twin brothers Nikhil and Nithin Sonti, trains LLaMA 3.1 (405B) on AMD GPUs cutting infra costs by 30%.", url: "" },
  { platform: "Illuminate AI · Substack", date: "2024",   title: "KubeAI — Deploying LLMs on Kubernetes", excerpt: "Hacktoberfest spotlight on Sam Stoelinga's open-source project bringing OpenAI-style simplicity to self-hosted infra.", url: "" },
  { platform: "Illuminate AI · Substack", date: "2024",   title: "Mirage.ai — Automating Video Editing & Subtitles", excerpt: "Critical examination of AI tools for content creation: do they enhance creativity or threaten the unique voice of human creators?", url: "" },
  { platform: "swiftieintech (LinkedIn)", date: "Ongoing", title: "swiftieintech weekly musings", excerpt: "Weekly newsletter using Taylor Swift's discography as a thematic frame for AI, ML, and data concepts. Mentorship advice and learnings from internships, research, and workshops.", url: "https://www.linkedin.com/newsletters/swiftieintech-7268168042189156353/" },
  { platform: "LinkedIn",                  date: "2025",  title: "Microsoft Research × Global Health Equity Reflections", excerpt: "Two-day reflection from the pre-summit India AI Impact Summit 2026 workshop on responsible AI in healthcare.", url: "https://lnkd.in/g2ATuvCc" },
  { platform: "LinkedIn",                  date: "2025",  title: "What 6 Months at IBM Taught Me About Cloud-Native Infra", excerpt: "From writing unit tests to delivering at KubeCon. Onboarding by listening, owning a CLI from scratch, and presenting at Meraki demos.", url: "" }
];

/* ---------- COMMUNITY & MENTORING ---------- */
const COMMUNITY = [
  { role: "Core Team Lead",  org: "HSP — Hackerspace, PES University",      date: "Feb 2023 – Mar 2024", desc: "Largest FOSS community on campus. Started Project Expo (now Project Expo 2.0). Conducted biweekly meetups." },
  { role: "Core Member",     org: "Google Developer Student Clubs · PES ECC", date: "Aug 2022 – May 2024", desc: "Organized hackathons, seminars, and the Build with AI Roadshow." },
  { role: "Editorial Board", org: "Hasgeek · The Fifth Elephant",            date: "May – Jul 2024",     desc: "Member of the Data Engineering Track editorial board for Asia's leading data science conference." },
  { role: "Working Group Lead", org: "IBM Core-X · Speaking & Authoring",      date: "2025 – Present",     desc: "Leading the Speaking & Authoring Working Group across IBM India Software Labs under Gireesh Punathil's sponsorship." },
  { role: "Fellow",          org: "Sitara Akka",                              date: "Jun 2025 – Jan 2026", desc: "Mentoring students from low-income communities; co-creating tech-enabled learning support across Karnataka." },
  { role: "Mentee → Mentor", org: "Open DMs / 1:1 Sessions",                 date: "Ongoing",            desc: "Project reviews and 30-min 1:1s with students from states across India. Knowledge-sharing as access-building." },
  { role: "Reviewer",        org: "ICLR 2026 MemAgents Workshop · GopherCon US 2026", date: "2026",        desc: "First time on the other side of peer review — proposals on agents, Go ecosystem, and memory architectures for LLM systems." },
  { role: "Open Source",     org: "kubernetes-sigs/lwkd",                    date: "Ongoing",            desc: "Contributor to Last Week in Kubernetes Dev. Merged PRs #802, #798, #795." },
  { role: "Technical Team",  org: "ACM-W PES University-RR",                 date: "Nov 2021 – Nov 2022", desc: "Conducted solo Data Demystified workshop with 180+ registrations." },
  { role: "Core Team",       org: "IEEE Women in Engineering",               date: "Oct 2021 – Jan 2023", desc: "Organized Kaggle 101 webinar with Usha Rengaraju (World's First Woman Double Kaggle Grandmaster)." },
  { role: "High Impact APAC Ambassador", org: "Stanford Women in Data Science (WiDS)", date: "2024",      desc: "Featured in Stanford WiDS interview by Marisa Camplin (screened at Central WiDS Conference 2024)." }
];

/* ---------- ACHIEVEMENTS ---------- */
const ACHIEVEMENTS = [
  { cat: "Speaking",     title: "KubeCon + CloudNativeCon EU 2026", desc: "Speaker · Cloud Native AI Day · Amsterdam." },
  { cat: "Speaking",     title: "KubeCon + CloudNativeCon India 2025", desc: "Only intern accepted; youngest speaker. CNCF-sponsored." },
  { cat: "Award",        title: "IBM ISL Hackathon — Most Innovative Solution", desc: "Product Synergy Week 2026. Special mention from VP Vishal Chahal." },
  { cat: "Recognition",  title: "LinkedIn Top Voice — Data Science", desc: "Recognized for collaborative articles and insights." },
  { cat: "Recognition",  title: "SC26 Women's History Month Profile", desc: "Featured by the SC Conference community for HPC × AI work." },
  { cat: "Fellowship",   title: "Harvard WECode Tech Fellow", desc: "Largest student-run Women in CS conference, globally." },
  { cat: "Fellowship",   title: "Stanford WiDS High Impact APAC Ambassador", desc: "Featured in Stanford-screened interview by Marisa Camplin." },
  { cat: "Scholarship",  title: "AWS AI & ML Scholar", desc: "$4,000 award in collaboration with Intel and Udacity." },
  { cat: "Scholarship",  title: "OxML Scholar — Oxford ML Summer School", desc: "MLx Health & Bio + MLx Representation Learning + GenAI Tracks." },
  { cat: "Scholarship",  title: "IBM Quantum Scholar — Qubit by Qubit", desc: "Full merit scholarship; coursework in Qiskit and quantum healthcare applications." },
  { cat: "Scholarship",  title: "O'Reilly DEIJ Scholar", desc: "Unlimited access to the O'Reilly learning platform." },
  { cat: "Scholarship",  title: "AnitaB.org India Advancing Inclusion", desc: "Scholarship to attend Grace Hopper Celebration India 2024 in person." },
  { cat: "Scholarship",  title: "RISE MICCAI Summer School 2025", desc: "Diffusion models, graph learning, uncertainty quantification for medical image computing." },
  { cat: "Research",     title: "UIUC+ Summer Undergraduate Research", desc: "Top 15 of 1,300+ applicants. Software engineering under Prof. Darko Marinov." },
  { cat: "Research",     title: "ACM India Summer School (IIT Hyderabad)", desc: "1 of 40 students nationwide. Algorithmic Techniques in Computational Biology." },
  { cat: "Research",     title: "ICAART 2025 Paper Acceptance", desc: "First international student-researcher conference paper. Music × stress × XAI." },
  { cat: "Recognition",  title: "Cisco ThingQbator Cohort 5 Winner", desc: "5L INR seed grant for Project ROOTS." },
  { cat: "Mentorship",   title: "Google KaggleX BIPOC Mentee", desc: "$1,000 educational grant; 4-month global mentorship cohort." },
  { cat: "Mentorship",   title: "Code; Without Barriers (Microsoft Azure)", desc: "Mentee for the cohort focusing on accessibility and inclusion in tech." },
  { cat: "Recognition",  title: "HPAIR 2024 Delegate", desc: "Harvard Project for Asian and International Relations Conference at Harvard." },
  { cat: "Reviewer",     title: "ICLR 2026 (MemAgents Workshop) · GopherCon US 2026", desc: "Reviewer for both venues — distributed systems, AI agents, memory architectures, Go ecosystem." }
];

/* expose */
window.SITE = { BOARD_TILES, EXPERIENCES, RESEARCH, PROJECTS, TALKS, WRITING, COMMUNITY, ACHIEVEMENTS };
