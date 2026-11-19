import { contact } from "./content";
import { escapeHtml, safeHref } from "./safe-html";

function contactIcon(label: string): string {
  const icons: Record<string, string> = {
    email: '<path d="M3 6h18v12H3z"/><path d="m3 7 9 7 9-7"/>',
    github: '<path d="M9 19c-4 1-4-2-5-2m10 4v-3c0-1 .1-1.5-.5-2 3-.3 6-1.5 6-6a4.5 4.5 0 0 0-1.2-3.1c.1-.4.5-1.5-.1-3-1 0-2 .5-3 1.2a10 10 0 0 0-5.4 0C8.8 4.4 7.8 3.9 6.8 3.9c-.6 1.5-.2 2.6-.1 3A4.5 4.5 0 0 0 5.5 10c0 4.5 3 5.7 6 6-.5.5-.6 1-.5 2v3"/>',
    linkedin: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 10v6m0-8v.1M12 16v-6m0 3c0-4 4-4 4 0v3"/>',
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[label.toLowerCase()] ?? '<circle cx="12" cy="12" r="8"/>'}</svg>`;
}

export function renderContact(variant: "home" | "full" = "full"): string {
  const links = variant === "home"
    ? contact.links.filter((link) => ["email", "github", "linkedin"].includes(link.label.toLowerCase()))
    : contact.links;

  return `
    <section id="contact" class="section contact ${variant === "home" ? "contact--home" : ""}" aria-labelledby="contact-title">
      ${variant === "home" ? '<div class="contact-rule" data-reveal aria-hidden="true"><span></span></div>' : ""}
      <div class="wrap">

        <div class="contact-header" ${variant === "home" ? 'data-reveal' : ""}>

          <div class="contact-intro">

            <h2 class="section-title" id="contact-title">
              ${variant === "home" ? 'Want to<br /><em>build together?</em>' : 'Want to<br />build together?'}
            </h2>

            <p class="section-description">
              For engineering opportunities, collaborations, or a thoughtful hello.
            </p>

          </div>

        </div>

        <ul class="contact-links">
          ${links.map((link) => `
            <li>
            <a
              href="${safeHref(link.href)}"
              ${
                link.href.startsWith("mailto:")
                  ? ""
                  : `target="_blank" rel="noopener noreferrer"`
              }
              class="contact-link ${variant === "home" ? "contact-link-reveal" : ""}"
              ${variant === "home" ? 'data-reveal' : ""}
            >
              <span class="contact-link-icon">${contactIcon(link.label)}</span>
              <span class="contact-link-details">
                <span class="contact-link-label">${escapeHtml(link.label)}</span>
                <span class="contact-link-address">${escapeHtml(link.href.replace(/^mailto:/, "").replace(/^https?:\/\//, ""))}</span>
              </span>
            </a>
            </li>
          `).join("")}
        </ul>

      </div>
    </section>
  `;
}
