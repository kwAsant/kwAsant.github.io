export const profile = {
  name: "Jody Gyekye",

  tagline:
    "Making things, learning things, figuring things out.",

  intro:
    "I’m a software engineer and University of Warwick MEng Computer Science graduate. I build across frontend, backend, and systems work, and keep exploring through art, sport, music, and writing.",

  tags: [
    "Software Engineer",
    "Artist",
      "Manga Enthusiast",
    "Hybrid Athlete",
  ],

  location: "United Kingdom",
};

export type RoleTag =
  | "software"
  | "full-stack"
  | "frontend"
  | "backend"
  | "systems"
  | "fintech"
  | "data-ml"
  | "security"
  | "product"
  | "mobile";

export type ExperienceItem = {
  role: string;
  organisation: string;
  period: string;
  description: string;
  technologies: string[];
  categories: RoleTag[];
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  type: string;
  year: string;
  url?: string;
  sourceUrl?: string;
  descriptionLink?: { text: string; url: string };
  categories: RoleTag[];
  featured?: boolean;
};

export const roleFilters = [
  { id: "all", label: "All" },
  { id: "software", label: "Software Engineering" },
  { id: "full-stack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "systems", label: "Systems" },
  { id: "fintech", label: "Fintech / Quant" },
  { id: "data-ml", label: "Data / ML" },
  { id: "security", label: "Security" },
  { id: "product", label: "Product / Technology" },
];

export const softwareProjects: Project[] = [
  {
    name: "Creator Portfolio",
    description:
      "A creator portfolio for Domg.o, bringing together campaign case studies, audience insights, testimonials and video content. Built with responsive React and TypeScript, with accessibility testing, consent-based analytics and an opt-in YouTube player.",
    stack: ["React", "TypeScript", "Vite", "CSS", "Playwright", "Vitest"],
    type: "Website Project",
    year: "2026",
    url: "https://domgo.co.uk/",
    sourceUrl: "https://github.com/domg-o/domgo-website",
    descriptionLink: { text: "Domg.o", url: "https://www.tiktok.com/@domg.o" },
    categories: ["software", "frontend", "product"],
  },
  {
    name: "FX Option Quote Blotter",
    description:
      "A simulated real-time FX options trading platform handling streaming RFQ updates, quote filtering, sorting, and asynchronous execution. It includes sequence-number validation and stale-price protection, alongside Jest, React Testing Library, and Playwright tests.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Jest",
      "Playwright",
    ],
    type: "Personal Project",
    year: "2026",
    url: "https://kwasant.github.io/live-quote-blotter",
    categories: [
      "software",
      "frontend",
      "fintech",
      "product",
    ],
    featured: false,
  },

  {
    name: "Primary Bond Booking System",
    description:
      "A primary-market bond booking module built with Angular Signals and Reactive Forms, with type-safe RxJS pipelines for server validation, state management, and API error handling.",
    stack: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Jasmine",
    ],
    type: "Personal Project",
    year: "2026",
    url: "#",
    categories: [
      "software",
      "frontend",
      "fintech",
      "product",
    ],
    featured: false,
  },

  {
    name: "Quantum-Classical Portfolio Optimisation",
    description:
      "A quantum-classical financial modelling pipeline combining deep-learning forecasting, uncertainty estimation, robust covariance estimation, and a variational quantum optimiser. The project included architectural, feature, and structural ablation studies and achieved a 4.8% average Sharpe-ratio improvement over the classical baseline.",
    stack: [
      "Python",
      "PyTorch",
      "Qiskit",
    ],
    type: "University Research Project",
    year: "2025 — 2026",
    url: "https://github.com/hugob7/quantum-portfolio-optimisation",
    categories: [
      "software",
      "fintech",
      "data-ml",
    ],
    featured: false,
  },

  {
    name: "CHIP-8 Virtual Machine",
    description:
      "A CHIP-8 virtual machine implemented from first principles, including a 4KB memory map, 16-level stack, Fetch-Decode-Execute cycle, opcode dispatch, and binary ROM loading.",
    stack: [
      "C++",
      "Linux",
    ],
    type: "Personal Project",
    year: "2025 — 2026",
    url: "https://github.com/kwAsant/chip-8-emulator",
    categories: [
      "software",
      "systems",
    ],
    featured: false,
  },

  {
    name: "Compiler for a C99-based Language",
    description:
      "A compiler for a C99-based language covering lexical analysis, parsing, semantic analysis, symbol-table management, code generation, error handling, and automated testing.",
    stack: [
      "C++",
      "LLVM",
      "Bash",
    ],
    type: "University Project",
    year: "2024 — 2025",
    url: "#",
    categories: [
      "software",
      "systems",
      ],
    featured: false,
  },

  {
    name: "Network Intrusion Detection System",
    description:
      "A multithreaded network intrusion detection system using live packet capture to identify attacks including SYN flooding and ARP poisoning, with testing across different attack scenarios.",
    stack: [
      "C++",
      "POSIX Threads",
      "pcap",
    ],
    type: "University Project",
    year: "2023",
    url: "#",
    categories: [
      "software",
      "systems",
      "security",
      ],
    featured: false,
  },

  {
    name: "Sentiments & Financial Insights System",
    description:
      "A full-stack financial analytics platform combining a Django REST API with an Angular frontend for market sentiment visualisation, with authentication, personalised data tracking, and asynchronous Python data pipelines.",
    stack: [
      "Angular",
      "TypeScript",
      "Django",
      "Python",
      "REST API",
    ],
    type: "University Project",
    year: "2024",
    url: "#",
    categories: [
      "software",
      "full-stack",
      "frontend",
      "fintech",
      "data-ml",
      ],
    featured: false,
    },

    {
    name: "Java 3D Game Engine",
    description:
      "A custom 3D rendering engine built from first principles, including vertex processing, fragment shading, transformation matrices, animation, camera controls, and performance-oriented buffer management.",
    stack: [
      "Java",
    ],
    type: "Personal Project",
    year: "2022-Present (ON HOLD)",
    url: "#",
    categories: [
      "software",
      "systems",
      ],
    featured: false,
    },

    {
    name: "Pseudocode Interpreter",
    description:
      "An interpreter for a pseudocode language implemented using JavaCC.",
    stack: ["Java", "JavaCC"],
    type: "University Project",
    year: "2024",
    url: "#",
    categories: [
      "software",
      "systems",
    ],
    featured: false,
  },

  {
    name: "Resolution Proof System",
    description:
      "A resolution-based proof system implemented in Prolog.",
    stack: ["Prolog"],
    type: "University Project",
    year: "2024",
    url: "#",
    categories: [
      "software",
      "systems",
    ],
    featured: false,
  },

  {
    name: "Random Photo Generator",
    description:
      "A native iOS application consuming external image APIs and presenting responsive image content.",
    stack: [
      "Swift",
      "UIKit",
      "REST APIs",
    ],
    type: "Personal Project",
    year: "2022",
    url: "#",
    categories: [
      "software",
      "frontend",
      "mobile",
    ],
    },

      {
    name: "Java-Based Pseudocode Interpreter",
    description:
      "An interpreter for pseudocode implemented in Java.",
    stack: ["Java"],
    type: "School Project",
    year: "2021",
    url: "#",
    categories: [
      "software",
      "systems",
    ],
    featured: false,
  },

  {
    name: "A-Level CS Revision Platform",
    description:
      "A web platform created to support revision for A-Level Computer Science.",
    stack: ["HTML", "CSS"],
    type: "School Project",
    year: "2020",
    url: "#",
    categories: [
      "software",
      "frontend",
      "product",
    ],
    featured: false,
  },
];

export const art = [
    {
        title: "Untitled",
        description: "Medium, year",
        image: "/art/placeholder-1.jpg",
        url: "#",
    },

  {
    title: "Another piece",
    description: "Medium, year",
    image: "/art/placeholder-2.jpg",
    url: "#",
  },
];

export const writing = {
  heading: "Things I'm thinking about.",

  description:
    "Notes, thoughts, observations, and things I'm trying to understand.",

  url: "https://substack.com/@jodygyekye",
};

export const music = {
  heading: "Learning music.",

  description:
    "Currently learning guitar and piano, and seeing where that takes me. I would like to learn to play the drums but I don't have a drum kit, so for now I'm focusing on guitar and piano.",
};

export const experience = [
  {
    organisation: "Renovate",
    role: "Founding Engineer",
    period: "Sep 2026 – Present",
    description:
      "Helping shape Renovate’s early product and technical foundations as a founding engineer.",
    technologies: ["Firebase", "Swift", "SwiftUI"],
    categories: [
      "software",
      "full-stack",
      "product",
    ],
    kind: "Part-time",
    companySlug: "renovate",
  },

  {
    organisation: "Youth Perspective Press",
    role: "Digital Product Engineer",
    period: "Jul 2026 – Present",
    description:
      "Developing a publishing platform to give Youth Perspective Press a clear digital home for its work and make its content easier for readers to discover. My contribution spans the product workflow, frontend, and backend.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
      "Playwright",
    ],
    categories: [
      "software",
      "full-stack",
      "frontend",
      "backend",
      "product",
    ],
    kind: "Volunteer",
    location: "Remote",
    url: "",
    companySlug: "ypp",
  },

  {
    organisation: "Department of Computer Science, University of Warwick",
    role: "Graduate Teaching Assistant",
    period: "Oct 2025 – Apr 2026",
    description:
      "Supported undergraduate teaching in Computer Security and Functional Programming, helping students understand programming concepts and reviewing code.",
    technologies: [
      "Haskell",
      "Linux",
      "Cryptography",
    ],
    categories: [
      "software",
      "systems",
      "security",
    ],
    kind: "Teaching",
    location: "University of Warwick, Coventry",
    url: "",
  },

  {
    organisation: "Vocalink, a Mastercard company",
    role: "Software Engineer Intern",
    period: "Jun – Aug 2025",
    description:
      "Worked on an internal operations portal for cheque image processing, implementing Gherkin feature files for functional testing and contributing to development workflows.",
    technologies: [
      "Java",
      "Spring Boot",
      "Gherkin",
      "Selenium",
      "Confluence",
      "Bitbucket",
      "Jira",
      "Jenkins",
    ],
    categories: [
      "software",
      "backend",
      "systems",
      "fintech",
      "product",
    ],
    kind: "Internship",
    location: "London Bridge, London",
    url: "",
  },

  {
    organisation: "IDEMS International",
    role: "Software Developer",
    period: "Jul – Sep 2024",
    description:
      "Investigated and fixed frontend and backend issues in the WASH App, using Angular, TypeScript, HTML and SCSS to resolve bugs and regressions in an established codebase.",
    technologies: [
      "Angular",
      "Ionic",
      "TypeScript",
      "HTML",
      "SCSS",
      "Node.js",
      "Git",
    ],
    categories: [
      "software",
      "full-stack",
      "frontend",
      "backend",
      "product",
    ],
    kind: "Internship",
    location: "Remote",
    url: "",
  },

  {
    organisation: "J.P. Morgan",
    role: "Spring into Tech",
    period: "Apr 2024",
    description:
      "Worked in a team on a software project for the UK Sepsis Trust as part of J.P. Morgan's Spring into Tech programme.",
    technologies: [
      "Python",
      "Figma",
      "Agile",
      "Scrum",
    ],
    categories: [
      "software",
      "frontend",
      "product",
    ],
    kind: "Spring Week",
    location: "Canary Wharf, London",
    url: "",
  },

  {
    organisation: "IDEMS International",
    role: "Software Developer",
    period: "Jul – Aug 2023",
    description:
      "Investigated and fixed frontend issues in the WASH App and used Git within an existing development workflow. Represented IDEMS in the HDR UK Group Technical Challenge, contributing to the report and presentation as part of the first-place team.",
    technologies: ["Angular", "TypeScript", "HTML", "SCSS", "Git"],
    categories: ["software", "frontend", "product"],
    kind: "Internship",
    location: "Remote",
    url: "",
  },

  {
    organisation: "Jane Street",
    role: "First Year Technology & Trading Program",
    period: "Feb – Aug 2023",
    description:
      "Worked through a series of technical and problem-solving challenges focused on programming, systems thinking, and quantitative reasoning.",
    technologies: [
      "Python",
      "Algorithms",
      "Problem Solving",
    ],
    categories: [
      "software",
      "fintech",
    ],
    kind: "Spring Week",
    location: "Liverpool Street, London",
    url: "",
  },

  {
    organisation: "Google Talent Programs & Generating Genius",
    role: "Google Technical Mentorship Program",
    period: "Sep 2022 – Mar 2023",
    description:
      "Took part in a technical mentorship programme focused on software engineering, problem solving, and professional development.",
    technologies: [
      "Software Engineering",
      "Problem Solving",
    ],
    categories: [
      "software",
      "frontend",
      "systems",
    ],
    kind: "Mentorship",
    location: "Remote",
    url: "",
  },
];

export const currentlyLearning = [
    "French",
    "Guitar",
    "Twi",
    "Bible",
];

export const contact = {
    heading: "Let's talk.",

    links: [
        {
        label: "email",
        href: "mailto:jodyagyekye@email.com",
        },

        {
        label: "github",
        href: "https://github.com/kwAsant",
        },

        {
        label: "linkedin",
        href: "https://linkedin.com/in/jody-a-gyekye",
        },

        {
        label: "substack",
        href: "https://substack.com/@jodygyekye",
        },
    ],
};
