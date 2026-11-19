import { experience, softwareProjects } from "./content";
import { escapeHtml } from "./safe-html";

const companyPages = {
  ypp: {
    name: "Youth Perspective Press",
    eyebrow: "COMPANY / PUBLISHING",
    heading: "A home for the work.",
    introduction:
      "Youth Perspective Press publishes work for its readers. The website is being developed as a clear digital home for that work, with a reader-facing experience and publishing workflow built around the organisation’s needs.",
    productName: "Youth Perspective Press Website",
    productDescription:
      "A publishing platform in progress. My work spans the product workflow, frontend, and backend, with the aim of making the publication easier to explore and maintain.",
    status: "IN DEVELOPMENT",
    revealDetails: true,
  },
  renovate: {
    name: "Renovate",
    eyebrow: "COMPANY / PRODUCT ENGINEERING",
    heading: "Building from the beginning.",
    introduction:
      "As a founding engineer, I’m helping shape Renovate’s early product and technical foundations. I’m keeping product specifics private while the work is in progress.",
    productName: "Renovate",
    productDescription:
      "Product work is underway. Public details will be added when they’re ready to share.",
    status: "IN DEVELOPMENT",
    revealDetails: false,
  },
} as const;

export function renderCompanyPage(slug: string): string {
  const company = companyPages[slug as keyof typeof companyPages];
  if (!company) return "";

  const role = experience.find((item) => item.companySlug === slug);
  const project = softwareProjects.find((item) => item.name === company.productName);

  return `
    <main class="company-page" id="main-content">
      <div class="company-page-inner">
        <a class="company-back-link" href="#/code">← Back to code &amp; experience</a>
        <header class="company-heading">
          <p class="company-eyebrow">${company.eyebrow}</p>
          <h1>${escapeHtml(company.heading)}</h1>
          <p class="company-introduction">${escapeHtml(company.introduction)}</p>
          ${role ? `
            <div class="company-role-line">
              <span>${escapeHtml(role.role)}</span>
              <span>${escapeHtml(role.period)}</span>
              <span>${escapeHtml(role.kind)}</span>
            </div>
          ` : ""}
        </header>

        <div class="company-rule" aria-hidden="true"></div>

        <section class="company-products" aria-labelledby="company-products-title">
          <div class="company-products-heading">
            <p class="company-eyebrow">SELECTED PRODUCT WORK</p>
            <h2 id="company-products-title">Work at ${escapeHtml(company.name)}</h2>
          </div>
          <article class="company-product">
            <div class="company-product-meta">
              <span>PRODUCT</span>
              <span>${escapeHtml(company.status)}</span>
            </div>
            <h3>${escapeHtml(company.productName)}</h3>
            <p>${escapeHtml(company.productDescription)}</p>
            ${company.revealDetails && project ? `
              <div class="company-product-stack">
                ${project.stack.map((technology) => `<span>${escapeHtml(technology)}</span>`).join("")}
              </div>
            ` : ""}
          </article>
        </section>
      </div>
    </main>
  `;
}
