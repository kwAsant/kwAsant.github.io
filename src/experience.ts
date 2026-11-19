import { experience, roleFilters } from "./content";
import { escapeHtml } from "./safe-html";

export function renderExperience(): string {
  return `
    <section id="experience" class="section experience">
      <div class="wrap">

        <div class="section-header">
          <div aria-hidden="true"></div>

          <div>
            <h2 class="section-title">
              Things I've
              <br />
              done.
            </h2>

            <p class="section-description">
              A record of places I've worked, things I've
              contributed to, and experiences that have
              shaped how I work.
            </p>
          </div>
        </div>

        <div class="experience-filters">
          ${roleFilters.map((filter) => `
            <button
              class="experience-filter"
              data-filter="${escapeHtml(filter.id)}"
              type="button"
              aria-pressed="${filter.id === "all"}"
            >
              ${escapeHtml(filter.label)}
            </button>
          `).join("")}
        </div>

        <div class="experience-list">
          ${experience.map((item) => `
            <article
              class="experience-item"
              data-reveal
              data-category="${escapeHtml(item.categories.join(" "))}"
            >
              <div class="experience-period">
                ${escapeHtml(item.period)}
              </div>

              <div class="experience-main">
                <p class="experience-role">
                  ${escapeHtml(item.role)}
                </p>

                <h3>
                  ${item.companySlug
                    ? `<a class="experience-company-link" href="${item.companySlug === "ypp" ? "https://beta.youthperspectivepress.com/" : "https://renovate-inc.com/"}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.organisation)} <span aria-hidden="true">↗</span></a>`
                    : escapeHtml(item.organisation)}
                </h3>

                <p class="experience-description">
                  ${escapeHtml(item.description)}
                </p>

                ${item.technologies.length ? `
                  <div class="experience-stack">
                    ${item.technologies.map(
                      (technology) => `<span>${escapeHtml(technology)}</span>`
                    ).join("")}
                  </div>
                ` : ""}
              </div>
            </article>
          `).join("")}
        </div>

      </div>
    </section>
  `;
}
