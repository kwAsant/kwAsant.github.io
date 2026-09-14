import { profile } from "./content";

export function renderHome(): string {
  return `
    <header class="hero" id="home">

      <div class="hero-topbar wrap">

        <a
          class="hero-mark"
          href="#home"
        >
          >_ ${profile.name}
        </a>

        <nav class="hero-nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>


      <div class="hero-status wrap">

        <span>
          Available for opportunities
        </span>

        <span>
          ${profile.location}
        </span>

      </div>


      <div class="hero-wave-wrap">

        <canvas
          class="hero-wave"
          id="hero-wave"
        ></canvas>

      </div>


      <div class="wrap hero-content">

        <p class="hero-label">
          portfolio / 2026
        </p>

        <h1>
          ${profile.name}
        </h1>

        <p class="hero-tagline">
          ${profile.tagline}
        </p>

        <p class="hero-intro">
          ${profile.intro}
        </p>

        <div class="hero-tags">

          ${profile.tags
            .map(
              (tag) => `
                <span>${tag}</span>
              `
            )
            .join("")}

        </div>

      </div>


      <div class="hero-scroll">

        <span>Scroll</span>

        <span class="hero-scroll-line"></span>

      </div>

    </header>
  `;
}