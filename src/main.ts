import "./style.css";

/* ---------------------------------------------------
   EDIT ME — this is the content for the whole site.
   Update the values below with your own info.
--------------------------------------------------- */

const profile = {
  name: "Jordan Lee",
  tagline: "Developer, designer, and occasional writer.",
  intro:
    "I build things — sometimes that means shipping a full app, sometimes it means designing a brand, sometimes it's just a weird little side project. This is a sample of that range.",
  tags: ["Software", "Design", "Writing"],
};

const about = {
  heading: "About",
  body: "Write two or three sentences here about who you are, what you care about, and what you're currently working on or learning. Keep it human — this is the part of the site where people get a sense of you, not just your output.",
};

type SoftwareProject = {
  name: string;
  description: string;
  stack: string[];
  url: string;
};

const softwareProjects: SoftwareProject[] = [
  {
    name: "task-tracker-cli",
    description: "a command-line task manager with local sqlite storage",
    stack: ["Node.js", "SQLite", "TypeScript"],
    url: "#",
  },
  {
    name: "weather-api-wrapper",
    description: "a small proxy service that simplifies a messy weather API",
    stack: ["Python", "Flask"],
    url: "#",
  },
  {
    name: "portfolio-site",
    description: "the site you're looking at right now",
    stack: ["Vite", "TypeScript"],
    url: "#",
  },
];

type WorkItem = {
  kind: string;
  name: string;
  description: string;
  url: string;
};

const otherWork: WorkItem[] = [
  {
    kind: "Design",
    name: "Brand identity, Example Co.",
    description: "Logo, type system, and visual guidelines for a small studio.",
    url: "#",
  },
  {
    kind: "Writing",
    name: "Essay: on making things slowly",
    description: "A short piece on process, published on a personal blog.",
    url: "#",
  },
];

const contact = {
  heading: "Let's talk",
  links: [
    { label: "email", href: "mailto:you@example.com" },
    { label: "github", href: "https://github.com/yourusername" },
    { label: "linkedin", href: "https://linkedin.com/in/yourusername" },
  ],
};

/* ---------------------------------------------------
   Rendering — you shouldn't need to touch this
--------------------------------------------------- */

function renderNav(): string {
  return `
    <nav class="nav">
      <div class="wrap">
        <span class="nav-mark">&gt;_ ${profile.name}</span>
        <ul class="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  `;
}

function renderHero(): string {
  return `
    <header class="hero">
      <div class="wrap">
        <p class="hero-eyebrow">portfolio</p>
        <h1>${profile.name}</h1>
        <p>${profile.intro}</p>
        <div class="hero-tags">
          ${profile.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
    </header>
  `;
}

function renderAbout(): string {
  return `
    <section id="about" class="about">
      <div class="wrap">
        <h2>${about.heading}</h2>
        <p>${about.body}</p>
      </div>
    </section>
  `;
}

function renderSoftwareCard(p: SoftwareProject): string {
  return `
    <a class="terminal-card" href="${p.url}" target="_blank" rel="noopener noreferrer">
      <p class="terminal-card-name">${p.name}</p>
      <p class="terminal-card-desc">${p.description}</p>
      <div class="terminal-card-stack">
        ${p.stack.map((s) => `<span class="terminal-pill">${s}</span>`).join("")}
      </div>
    </a>
  `;
}

function renderWorkCard(w: WorkItem): string {
  return `
    <a class="work-card" href="${w.url}" target="_blank" rel="noopener noreferrer">
      <p class="work-card-kind">${w.kind}</p>
      <p class="work-card-name">${w.name}</p>
      <p class="work-card-desc">${w.description}</p>
    </a>
  `;
}

function renderProjects(): string {
  return `
    <section id="projects" class="projects">
      <div class="wrap">
        <h2>Projects</h2>
        <p class="section-lede">A mix of software, design, and other things I've made.</p>

        <div class="terminal">
          <div class="terminal-header">
            <span class="terminal-dot"></span>
            <span class="terminal-dot"></span>
            <span class="terminal-dot"></span>
          </div>
          <p class="terminal-prompt">$ ls ./software<span class="cursor"></span></p>
          <div class="terminal-grid">
            ${softwareProjects.map(renderSoftwareCard).join("")}
          </div>
        </div>

        <div class="work-grid">
          ${otherWork.map(renderWorkCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderContact(): string {
  return `
    <section id="contact" class="contact">
      <div class="wrap">
        <h2>${contact.heading}</h2>
        <div class="contact-links">
          ${contact.links
            .map(
              (l) =>
                `<a class="contact-link" href="${l.href}" target="_blank" rel="noopener noreferrer">${l.label}</a>`
            )
            .join("")}
        </div>
      </div>
      <footer>
        <div class="wrap">© ${new Date().getFullYear()} ${profile.name}</div>
      </footer>
    </section>
  `;
}

const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = `
  ${renderNav()}
  ${renderHero()}
  ${renderAbout()}
  ${renderProjects()}
  ${renderContact()}
`;
