import {
  softwareProjects,
  art,
  writing,
  music,
  currentlyLearning,
} from "./content";

export function renderWork(): string {
  return `
    <section
      id="work"
      class="section work"
    >

      <div class="wrap">

        <div class="section-header">

          <div>
            <p class="section-number">
              02 / Work
            </p>
          </div>

          <div>

            <h2 class="section-title">
              Things I've
              <br />
              made.
            </h2>

            <p class="section-description">
              Software, art, writing, music and other things
              I've made, explored, or learned from.
            </p>

          </div>

        </div>


        ${renderSoftware()}

        ${renderArt()}

        ${renderWriting()}

        ${renderMusic()}

        ${renderLearning()}

      </div>

    </section>
  `;
}


function renderSoftware(): string {
  return `
    <div class="work-category">

      <div class="category-heading">

        <span class="category-index">
          02.01
        </span>

        <span class="category-command">
          $ ls ./software
        </span>

      </div>


      <div class="project-grid">

        ${softwareProjects
          .map(
            (project, index) => `
              <a
                class="project-card"
                href="${project.url}"
                data-reveal
              >

                <div class="project-card-top">

                  <span class="project-card-number">
                    ${String(index + 1).padStart(2, "0")}
                  </span>

                  <span class="project-card-arrow">
                    ↗
                  </span>

                </div>


                <div class="project-card-main">

                  <h3>
                    ${project.name}
                  </h3>

                  <p class="project-card-description">
                    ${project.description}
                  </p>

                </div>


                <div class="project-card-footer">

                  <div class="project-stack">

                    ${project.stack
                      .map(
                        (technology) =>
                          `<span>${technology}</span>`
                      )
                      .join("")}

                  </div>

                </div>

              </a>
            `
          )
          .join("")}

      </div>

    </div>
  `;
}


function renderArt(): string {
  return `
    <div class="work-category">

      <div class="category-heading">

        <span class="category-index">
          02.02
        </span>

        <span>
          Art
        </span>

      </div>


      <div class="art-grid">

        ${art
          .map(
            (piece, index) => `
              <a
                class="art-card"
                href="${piece.url}"
                data-reveal
              >

                <div class="art-image-wrap">

                  <img
                    src="${piece.image}"
                    alt="${piece.title}"
                    loading="lazy"
                  />

                  <span class="art-index">
                    ${String(index + 1).padStart(2, "0")}
                  </span>

                </div>


                <div class="art-card-info">

                  <h3>
                    ${piece.title}
                  </h3>

                  <p>
                    ${piece.description}
                  </p>

                </div>

              </a>
            `
          )
          .join("")}

      </div>

    </div>
  `;
}


function renderWriting(): string {
  return `
    <div
      class="work-feature"
      data-reveal
    >

      <div class="feature-index">
        02.03
      </div>

      <div class="feature-content">

        <p class="feature-label">
          Writing
        </p>

        <h3>
          ${writing.heading}
        </h3>

        <p>
          ${writing.description}
        </p>

        <a
          class="text-link"
          href="${writing.url}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read my writing
        </a>

      </div>

    </div>
  `;
}


function renderMusic(): string {
  return `
    <div
      class="work-feature work-feature--music"
      data-reveal
    >

      <div class="feature-index">
        02.04
      </div>

      <div class="feature-content">

        <p class="feature-label">
          Music
        </p>

        <h3>
          ${music.heading}
        </h3>

        <p>
          ${music.description}
        </p>

      </div>

    </div>
  `;
}


function renderLearning(): string {
  return `
    <div
      class="learning"
      data-reveal
    >

      <div class="category-heading">

        <span class="category-index">
          02.05
        </span>

        <span>
          Currently learning
        </span>

      </div>


      <div class="learning-list">

        ${currentlyLearning
          .map(
            (item, index) => `
              <span>
                <small>
                  ${String(index + 1).padStart(2, "0")}
                </small>

                ${item}
              </span>
            `
          )
          .join("")}

      </div>

    </div>
  `;
}