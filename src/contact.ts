import { contact } from "./content";

export function renderContact(): string {
  return `
    <section
      id="contact"
      class="section contact"
    >

      <div class="wrap contact-inner">

        <p class="section-number">
          03 / Contact
        </p>


        <h2>
          ${contact.heading}
        </h2>


        <div class="contact-bottom">

          <p class="contact-description">
            If you'd like to talk, collaborate, or just say hello,
            feel free to get in touch.
          </p>


          <div class="contact-links">

            ${contact.links
              .map(
                (link, index) => `
                  <a
                    href="${link.href}"
                    ${
                      link.href.startsWith("mailto:")
                        ? ""
                        : `target="_blank" rel="noopener noreferrer"`
                    }
                    class="contact-link"
                  >

                    <span>
                      ${String(index + 1).padStart(2, "0")}
                    </span>

                    ${link.label}

                    <span class="contact-arrow">
                      ↗
                    </span>

                  </a>
                `
              )
              .join("")}

          </div>

        </div>

      </div>

    </section>
  `;
}