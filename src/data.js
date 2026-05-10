// ── Portfolio Data ──
// Edit this file to update your portfolio content

export const PERSONAL = {
  name:       "Guru Vishnu B M",
  role:       "Full Stack Developer",
  location:   "Bengaluru, India",
  email:      "guruvishnu7@gmail.com",
  linkedin:   "https://www.linkedin.com/in/guru-vishnu-b-m-20520421a",
  github:     "https://github.com/guruvishnu",
  tagline:    "Building clean systems with purpose",
  heroDesc:   "I design and engineer web applications end-to-end — from thoughtful user interfaces to reliable backend architectures — with a focus on clarity, performance, and craft.",
  about: [
    "Hi, I'm <strong>Guru Vishnu B M</strong> — a full stack developer based in Bengaluru with a passion for building products that are both technically solid and genuinely useful.",
    "I work across the entire stack — designing intuitive frontends, architecting scalable APIs, and shipping code that I'm proud of. I believe <strong>great software starts with understanding the problem deeply</strong>, not just writing code quickly.",
    "I'm driven by clean design, thoughtful engineering, and the satisfaction of turning a rough idea into a polished, working product. Always learning, always building.",
  ],
  stats: [
    { n: "3+",  label: "Years Exp." },
    { n: "20+", label: "Projects"   },
    { n: "10+", label: "Clients"    },
  ],
}

export const PROJECTS = [
  {
    tag:   "Web App · Dashboard",
    title: "Analytics Platform",
    desc:  "A real-time data dashboard for tracking key business metrics with custom filters, live charts, and exportable reports for teams of any size.",
    stack: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    link:  "#",
  },
  {
    tag:   "Mobile · Productivity",
    title: "Task Management App",
    desc:  "A cross-platform task tracker with smart categorisation, deadline reminders, and team collaboration features built for busy professionals.",
    stack: ["React Native", "GraphQL", "MongoDB"],
    link:  "#",
  },
  {
    tag:   "E-Commerce · API",
    title: "Storefront & CMS",
    desc:  "A full-featured online store with product management, Razorpay payment integration, order tracking, and an admin panel for inventory control.",
    stack: ["Next.js", "Prisma", "Razorpay", "Tailwind"],
    link:  "#",
  },
  {
    tag:   "DevOps · Automation",
    title: "CI/CD Deployment Tool",
    desc:  "An automated pipeline that cut deployment time by 55%, with rollback controls, environment previews, and real-time build notifications.",
    stack: ["TypeScript", "Docker", "AWS", "GitHub Actions"],
    link:  "#",
  },
]

export const SKILLS = [
  {
    group: "Frontend",
    items: [
      { name: "React / Next.js", pct: 92 },
      { name: "TypeScript",      pct: 87 },
      { name: "Tailwind CSS",    pct: 90 },
      { name: "React Native",    pct: 78 },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js",    pct: 93 },
      { name: "GraphQL",    pct: 82 },
      { name: "PostgreSQL", pct: 85 },
      { name: "REST APIs",  pct: 95 },
    ],
  },
  {
    group: "DevOps & Tools",
    items: [
      { name: "AWS",          pct: 80 },
      { name: "Docker",       pct: 78 },
      { name: "Git / GitHub", pct: 95 },
      { name: "CI/CD",        pct: 82 },
    ],
  },
]
