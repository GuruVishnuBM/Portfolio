// ── Portfolio Data ──
// Edit this file to update your portfolio content

export const PERSONAL = {
  name:       "Guru Vishnu B M",
  role:       "Software Development Engineer",
  location:   "Bengaluru, India",
  email:      "guruvishnu7@gmail.com",
  linkedin:   "https://www.linkedin.com/in/guru-vishnu-b-m-20520421a",
  github:     "https://github.com/GuruVishnuBM",
  tagline:    "Building clean systems with purpose",
  heroDesc:   "Backend-focused Software Development Engineer with 1+ year of production experience designing and building enterprise-grade financial applications. Proficient in C#/.NET Core, React.js, TypeScript, SQL Server and AWS.",
  about: [
    "Hi, I'm <strong>Guru Vishnu B M</strong> — a Software Development Engineer based in Bengaluru with production experience building enterprise-grade financial applications in regulated banking environments.",
    "I specialize in backend development with <strong>C#/.NET Core, ASP.NET Core, and RESTful API design</strong>, while also delivering full-stack features using React.js, Redux, and TypeScript. I've independently owned complete JIRA epics end-to-end — from requirements through production deployment — within a single sprint.",
    "I'm driven by clean architecture, SOLID principles, and the satisfaction of building scalable, maintainable systems. I actively leverage <strong>GitHub Copilot</strong> daily to accelerate development, improve code quality, and deliver faster.",
  ],
  stats: [
    { n: "1+",  label: "Years Exp." },
    { n: "5+",  label: "Projects"   },
    { n: "2",   label: "Companies"  },
  ],
}

export const EXPERIENCE = [
  {
    role:     "Software Development Engineer (SDE-1)",
    company:  "ANZ Bank",
    location: "Bengaluru, Karnataka",
    type:     "Full-time",
    team:     "CCRE — Credit Counterparty Risk Engine",
    domain:   "Credit Risk",
    from:     "Mar 2025",
    to:       "Mar 2026",
    points: [
      "Designed and maintained RESTful APIs for enterprise Credit Risk financial applications using C#/.NET Core and ASP.NET Core, following OOP, SOLID, and design patterns (Repository, Factory, Strategy).",
      "Independently owned a complete JIRA epic end-to-end — requirements, development, testing, and production deployment — delivered within a single sprint.",
      "Optimised complex SQL Server stored procedures for high-volume trade data ingestion, aggregation, and regulatory reporting.",
      "Built React.js / Redux / TypeScript dashboards for real-time trade exposure and mark-to-market visualisation.",
      "Secured Runner-Up at ANZ HackFeast (Aug 2025) — built a Python AI agent that validates rules against compliance guidelines.",
      "Validated GitHub Actions CI/CD pipelines ensuring consistent automated build, test, and deployment workflows.",
      "Enforced Role-Based Access Control (RBAC) and audit logging across all modules to meet banking compliance standards.",
      "Leveraged GitHub Copilot daily to accelerate feature development, generate unit-test stubs, and perform faster PR reviews.",
    ],
    stack: ["C#", ".NET Core", "ASP.NET Core", "React.js", "Redux", "TypeScript", "SQL Server", "AWS", "GitHub Actions", "GitHub Copilot"],
  },
  {
    role:     "Co-Founder",
    company:  "MCreations (Publishing & Print Solutions)",
    location: "Bengaluru, Karnataka",
    type:     "Entrepreneurship",
    team:     "",
    domain:   "",
    from:     "Apr 2023",
    to:       "Nov 2024",
    points: [
      "Founded and operated a B2B publishing business managing end-to-end production, vendor sourcing, client accounts, and pricing strategy independently.",
      "Made a deliberate, planned transition into a full-time software engineering career in 2024.",
    ],
    stack: ["Business Operations", "Vendor Management", "Client Relations", "Budgeting"],
  },
]

export const PROJECTS = [
  {
    tag:   "FinTech · Credit Risk",
    title: "Counterparty Credit Risk Web App",
    desc:  "Production credit risk system enabling banks to monitor daily institutional trades and compute risk scores. Built RESTful APIs connecting backend services to React/Redux/TypeScript dashboards for real-time trade exposure and mark-to-market data.",
    stack: ["C#", ".NET Core", "React.js", "Redux", "TypeScript", "SQL Server", "AWS", "GitHub Copilot"],
    link:  "#",
  },
  {
    tag:   "AI · Hackathon · Runner-Up",
    title: "AI Compliance Validation Agent",
    desc:  "Runner-up at ANZ's internal HackFeast hackathon. Built a Python-based AI agent that automatically validates rules and regulations against country-specific compliance guidelines, reducing manual review effort.",
    stack: ["Python", "AI Agents", "NLP", "Financial Compliance"],
    link:  "#",
  },
  {
    tag:   "Web · Full Stack",
    title: "Personal Portfolio Website",
    desc:  "Designed and built a fully responsive portfolio website using React.js (hooks, component composition) and Redux. Integrated REST APIs for dynamic content rendering with a maintainable component-based architecture.",
    stack: ["React.js", "Redux", "REST APIs", "Git", "Vite"],
    link:  "https://guruvishnubm.vercel.app",
  },
]

export const SKILLS = [
  {
    group: "Backend & APIs",
    items: [
      { name: "C# / .NET Core",    pct: 88 },
      { name: "ASP.NET Core",      pct: 85 },
      { name: "RESTful APIs",      pct: 92 },
      { name: "SQL Server",        pct: 84 },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React.js / Redux",  pct: 85 },
      { name: "TypeScript",        pct: 83 },
      { name: "JavaScript (ES6+)", pct: 88 },
      { name: "HTML5 / CSS3",      pct: 90 },
    ],
  },
  {
    group: "DevOps & Tools",
    items: [
      { name: "Git / GitHub",       pct: 92 },
      { name: "GitHub Actions CI/CD", pct: 82 },
      { name: "AWS (EC2, S3)",      pct: 72 },
      { name: "GitHub Copilot",     pct: 90 },
    ],
  },
]

export const EDUCATION = [
  {
    degree:  "B.E. in Information Science & Engineering",
    school:  "SJB Institute of Technology, Bengaluru",
    year:    "2018 – 2022",
  },
  {
    degree:  "Advanced Full Stack Developer",
    school:  "Unschool",
    year:    "May 2024 · Certified",
  },
  {
    degree:  "Java Full Stack Developer",
    school:  "JSpiders, Bengaluru",
    year:    "April 2023 · Certified",
  },
]
