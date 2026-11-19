import { roleFilters, softwareProjects } from "./content";
import { escapeHtml, safeHref } from "./safe-html";

export function renderWork(): string {
  return `
    <section id="work" class="section work">
      <div class="wrap">
        <div class="section-header">
          <div aria-hidden="true"></div>
          <div>
            <h2 class="section-title">Selected<br />work.</h2>
            <p class="section-description">Engineering projects across software, systems, data, and product work.</p>
          </div>
        </div>
        ${renderFilters()}
        <div class="work-category">
          <div class="category-heading">
            <span class="category-command">PROJECT ARCHIVE</span>
          </div>
          <div class="project-grid">
            ${softwareProjects.map((project) => {
              const card = `
                <div class="project-card-top">
                  ${project.url && project.url !== "#" ? '<span class="project-card-arrow" aria-hidden="true">↗</span>' : ""}
                </div>
                <div class="project-card-main">
                  <h3>${escapeHtml(project.name)}</h3>
                  <p class="project-card-description">${escapeHtml(project.description)}</p>
                </div>
                <div class="project-card-footer">
                  <div class="project-stack">${project.stack.map((technology) => `<span>${escapeHtml(technology)}</span>`).join("")}</div>
                </div>
              `;
              const category = `data-category="${escapeHtml(project.categories.join(" "))}"`;

              return project.url && project.url !== "#"
                ? `<a class="project-card" href="${safeHref(project.url)}" target="_blank" rel="noopener noreferrer" data-reveal ${category}>${card}</a>`
                : `<article class="project-card" data-reveal ${category}>${card}</article>`;
            }).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFilters(): string {
  return `
    <div class="work-filters" role="group" aria-label="Filter projects by focus">
      ${roleFilters.map((filter) => `
        <button class="work-filter" data-work-filter="${escapeHtml(filter.id)}" type="button" aria-pressed="${filter.id === "all"}">
          ${escapeHtml(filter.label)}
        </button>
      `).join("")}
    </div>
  `;
}
