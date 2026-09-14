import { profile } from "./content";

export function renderAbout(): string {
  return `
    <section
      id="about"
      class="section about"
    >

      <div class="wrap">

        <div class="section-header">

          <div>
            <p class="section-number">
              01 / About
            </p>
          </div>

          <div>

            <h2 class="section-title">
              A little bit
              <br />
              about me.
            </h2>

          </div>

        </div>


        <div class="about-grid">

          <div class="about-marker">
            <span>01</span>
            <span>J.G.</span>
          </div>

          <div class="about-content">

            <p class="about-lede">
              ${profile.intro}
            </p>

            <div class="about-details">

              <p>
                I'm interested in the process of making things —
                understanding an idea, experimenting with it,
                and eventually turning it into something real.
              </p>

              <p>
                Software is one part of that. Art, music,
                writing and learning are others.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  `;
}