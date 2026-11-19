import { experience, softwareProjects } from "./content";
import { logoRows, skillGroups } from "./tech-skill-layout";
import { escapeHtml, safeHref } from "./safe-html";

const cvTools = [
  "Haskell", "JavaScript", "SQL", "Node.js", "Spring Boot", "Payload CMS",
  "Pandas", "NumPy", "AWS (EC2, S3, IAM)", "Docker", "GitHub Actions", "CI/CD",
  "Git", "Selenium", "Cypress", "Gherkin", "Go", "GraphQL",
  "SwiftUI", "Firebase", "Sass", "Yarn", "Render", "Vercel", "Railway", "Weights & Biases",
  "OpenTelemetry", "Dynatrace", "Jenkins", "Confluence", "Bitbucket", "Jira",
  "LaTeX", "C", "MySQL", "Unix", "GitHub", "SWI-Prolog", "Xcode", "Visual Studio Code",
  "Spring", "Citrix Workspace", "Ansible", "Figma", "Canva", "SCSS", "PostgreSQL",
];
const tools = [...new Set([...softwareProjects.flatMap((project) => project.stack), ...cvTools])].sort();
const skillColours: Record<string, string> = {
  React: "#087e91", TypeScript: "#245da1", JavaScript: "#806400", Python: "#326b92",
  "Next.js": "#262923", Angular: "#aa1e40", HTML: "#ad3e17", CSS: "#28619e",
  PostgreSQL: "#315d87", Supabase: "#16784b", Docker: "#126d9b", Git: "#b43b24",
  GitLab: "#b54a19", Java: "#a33227", "C++": "#365e94", Haskell: "#65528a",
  Swift: "#b84626", Vite: "#6850a3", Django: "#27604b", PyTorch: "#b43c21",
  Cypress: "#216e66", Playwright: "#307540", AWS: "#8e570c", Linux: "#715400",
  Jenkins: "#9d3931", Jira: "#245da1", Confluence: "#245da1", Bitbucket: "#245da1",
};
const logoTools = [
  ["TypeScript", "typescript"], ["React", "react"], ["Next.js", "nextdotjs"],
  ["Python", "python"], ["PostgreSQL", "postgresql"], ["Supabase", "supabase"],
  ["Angular", "angular"], ["C++", "cplusplus"], ["Linux", "linux"], ["Vite", "vite"],
  ["HTML", "html5"], ["CSS", "css"], ["Bash", "gnubash"], ["Swift", "swift"],
  ["Django", "django"], ["PyTorch", "pytorch"], ["Qiskit", "qiskit"], ["LLVM", "llvm"],
  ["JavaScript", "javascript"], ["Node.js", "nodedotjs"], ["Spring Boot", "springboot"],
  ["Payload CMS", "payloadcms"], ["Pandas", "pandas"], ["NumPy", "numpy"],
  ["Docker", "docker"], ["GitHub Actions", "githubactions"],
  ["Git", "git"], ["Selenium", "selenium"], ["Cypress", "cypress"], ["Go", "go"],
  ["GraphQL", "graphql"], ["Firebase", "firebase"], ["Sass", "sass"],
  ["Yarn", "yarn"], ["Render", "render"], ["Vercel", "vercel"], ["Railway", "railway"],
  ["Jira", "jira"], ["Confluence", "confluence"], ["Trello", "trello"],
  ["GitLab", "gitlab"], ["Bitbucket", "bitbucket"], ["Atlassian", "atlassian"], ["Jenkins", "jenkins"],
  ["Weights & Biases", "weightsandbiases"],
  ["OpenTelemetry", "opentelemetry"], ["Dynatrace", "dynatrace"],
];
const deviconTools = [
  ["AWS", "amazonwebservices/amazonwebservices-original-wordmark.svg"],
  ["Java", "java/java-original.svg"], ["Haskell", "haskell/haskell-original.svg"],
  ["Prolog", "prolog/prolog-original.svg"], ["Jest", "jest/jest-plain.svg"],
  ["Playwright", "playwright/playwright-original.svg"], ["RxJS", "rxjs/rxjs-original.svg"],
];
const logoEntries = [
  ...logoTools.map(([name, slug]) => [name, `https://cdn.simpleicons.org/${slug}/68675f`]),
  ...deviconTools.map(([name, path]) => [name, `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${path}`]),
];
const projectLogos = new Map<string, string>(logoEntries.map(([name, url]) => [name, url]));
function renderProjectDescription(description: string, link?: { text: string; url: string }): string {
  if (!link) return escapeHtml(description);
  const index = description.indexOf(link.text);
  if (index < 0) return escapeHtml(description);
  return `${escapeHtml(description.slice(0, index))}<a class="cv-project-description-link" href="${safeHref(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.text)}</a>${escapeHtml(description.slice(index + link.text.length))}`;
}
const renderLogoStrip = (entries: string[][]) => entries.map(([name, url]) => `<span class="cv-logo-item"><img src="${url}" alt="" loading="lazy" /><span>${escapeHtml(name)}</span></span>`).join("");
const logoStrips = logoRows.map(renderLogoStrip);
const groupedTools = new Set(skillGroups.flatMap(([, entries]) => entries));
const ungroupedTools = tools.filter((tool) => !groupedTools.has(tool));

export function renderTechCV(): string {
  return `
    <main class="tech-cv-page" id="main-content">
      <header class="cv-identity wrap">
        <div>
          <p class="section-number">TECH / PROJECTS &amp; EXPERIENCE</p>
          <h1>Built with intent.</h1>
          <p class="cv-intro">Software engineer with experience across product development, backend systems, and software quality. Interested in building useful products and understanding how they work.</p>
        </div>
        <a class="cv-print-button" href="${import.meta.env.BASE_URL}Jody-Gyekye-CV.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open Jody Gyekye's CV as a PDF (opens in a new tab)"><svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m-5-5 5 5 5-5M4 17v3h16v-3"/></svg><span>View CV</span><span class="cv-print-format" aria-hidden="true">PDF</span></a>
      </header>
      <section class="cv-projects wrap" aria-labelledby="cv-projects-title">
        <div class="cv-projects-heading">
          <div><h2 id="cv-projects-title">Projects.</h2></div>
        </div>
        <div class="cv-project-carousel">
        <div class="cv-project-track" id="cv-project-track" tabindex="0" role="region" aria-roledescription="carousel" aria-label="Projects. Swipe or use the arrow buttons to explore.">
          ${softwareProjects.map((project, index) => {
            const url = project.url;
            return `<article class="cv-project-card" role="group" aria-roledescription="slide" aria-label="${escapeHtml(project.name)}" style="--project-tone: ${index % 4}">
              <div class="cv-project-art cv-project-art--${index % 4}" aria-hidden="true"></div>
              <div class="cv-project-overlay">
              <div class="cv-project-card-top"><span>${escapeHtml(project.type)}</span><span>${escapeHtml(project.year)}</span></div>
              <h3>${escapeHtml(project.name)}</h3><p>${renderProjectDescription(project.description, project.descriptionLink)}</p>
              <div class="cv-project-tags" aria-label="Technologies used">${project.stack.map((technology) => `<span>${projectLogos.has(technology) ? `<img src="${safeHref(projectLogos.get(technology)!)}" alt="" loading="lazy" />` : ""}${escapeHtml(technology)}</span>`).join("")}</div>
              <div class="cv-project-actions">
              ${url && url !== "#" && !/^https?:\/\/(?:www\.)?github\.com\//i.test(url) ? `<a class="cv-project-action" href="${safeHref(url)}" ${url.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>Check it out!</a>` : ""}
              </div>
              </div>
              <button class="cv-project-arrow cv-project-arrow--prev" type="button" data-project-direction="-1" aria-label="Previous project" aria-controls="cv-project-track">❮</button>
              <button class="cv-project-arrow cv-project-arrow--next" type="button" data-project-direction="1" aria-label="Next project" aria-controls="cv-project-track">❯</button>
            </article>`;
          }).join("")}
        </div>
        </div>
      </section>
      <div class="cv-columns wrap">
        <section class="cv-experience" aria-labelledby="cv-experience-title">
          <div class="cv-section-heading"><h2 id="cv-experience-title">Work &amp; practice</h2></div>
          <div class="cv-role-list">
            ${experience.map((item) => `
              <article class="cv-role-item">
                <div class="cv-role-meta"><span>${escapeHtml(item.period)}</span><span>${escapeHtml(item.kind)}</span></div>
                <h3>${escapeHtml(item.role)}</h3>
                <p class="cv-organisation">${item.companySlug
                  ? `<a href="${item.companySlug === "ypp" ? "https://beta.youthperspectivepress.com/" : "https://renovate-inc.com/"}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.organisation)}</a>`
                  : escapeHtml(item.organisation)}${item.location ? ` <span>· ${escapeHtml(item.location)}</span>` : ""}</p>
                <p class="cv-description">${escapeHtml(item.description)}</p>
                ${item.technologies.length ? `<p class="cv-tools">${item.technologies.map(escapeHtml).join(" · ")}</p>` : ""}
              </article>
            `).join("")}
          </div>
        </section>
        <aside class="cv-sidebar">
          <section class="cv-sidebar-section" aria-labelledby="cv-education-title">
            <h2 id="cv-education-title">Education</h2>
            <h3 class="cv-education-institution">University of Warwick</h3>
            <p>MEng Computer Science</p>
            <p>Second Class Upper Division (2:1)</p>
            <span>Graduated 2026</span>
            <h3 class="cv-education-institution cv-school-title">Gravesend Grammar School</h3>
            <p>A-levels: Maths A*, Further Maths A, Computer Science A, Chemistry B</p>
            <span>September 2020 – June 2022</span>
            <p>GCSEs: 9999888877</p>
            <span>September 2015 – June 2020</span>
          </section>
          <section class="cv-sidebar-section" aria-labelledby="cv-skills-title">
            <h2 id="cv-skills-title">Tools &amp; languages</h2>
            <div class="cv-logo-cloud" aria-hidden="true">${logoStrips.map((strip) => `<div class="cv-logo-track"><div class="cv-logo-strip">${strip}</div><div class="cv-logo-strip">${strip}</div></div>`).join("")}</div>
            ${skillGroups.map(([heading, entries]) => `<div class="cv-skill-group"><h3>${escapeHtml(heading)}</h3><ul class="cv-skill-list">${entries.map((tool) => `<li style="--skill-hover: ${skillColours[tool] ?? "var(--rust)"}">${escapeHtml(tool)}</li>`).join("")}</ul></div>`).join("")}
            ${ungroupedTools.length ? `<div class="cv-skill-group"><h3>Other tools</h3><ul class="cv-skill-list">${ungroupedTools.map((tool) => `<li style="--skill-hover: ${skillColours[tool] ?? "var(--rust)"}">${escapeHtml(tool)}</li>`).join("")}</ul></div>` : ""}
          </section>
        </aside>
      </div>
      <section class="cv-sidebar-section cv-github-section wrap" aria-labelledby="cv-github-title">
        <h2 id="cv-github-title">Contributions</h2>
        <div data-github-heatmap><p class="cv-heatmap-status">Loading GitHub activity…</p></div>
      </section>
      <section class="cv-about wrap" aria-labelledby="cv-about-title">
        <h2 id="cv-about-title">A little bit about me.</h2>
        <div>
          <p>I'm a software engineer and University of Warwick MEng Computer Science graduate. I build across frontend, backend and systems work, and keep exploring through art, sport, music and writing.</p>
          <p>I'm interested in the process of making things, from understanding an idea and experimenting with it to turning it into something real.</p>
          <p>Software is one part of that. Art, music, writing and learning are others.</p>
        </div>
      </section>
    </main>
  `;
}
