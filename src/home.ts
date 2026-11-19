import { profile } from "./content";
import { escapeHtml } from "./safe-html";

export const paths = [
  {
    name: "Tech",
    title: "Engineering",
    description: "Projects, experience, and my technical CV.",
    href: "#/code",
    icon: "code",
    action: "Explore the work",
  },
  {
    name: "Canvas",
    title: "Art & ideas",
    description: "Coming soon while I focus on software engineering.",
    href: "#/studio",
    icon: "studio",
    action: "Explore Canvas",
  },
  {
    name: "Sport",
    title: "Sport & practice",
    description: "Coming soon. I’ll return to this space when it’s ready.",
    href: "#/field",
    icon: "field",
    action: "Explore sport",
  },
  {
    name: "Writing",
    title: "Notes & essays",
    description: "Coming soon while I focus on software engineering.",
    href: "#/writing",
    icon: "writing",
    action: "Read the writing",
  },
];

export function renderHome(): string {
  return `
    <header class="hero home-hero" id="home">
      <div class="hero-topbar wrap">
          <a class="hero-mark" href="#home">${escapeHtml(profile.name)}</a>
        <nav class="hero-nav" aria-label="Main navigation">
          <a href="#/code">Tech</a>
          <a href="#/studio">Canvas</a>
          <a href="#/field">Sport</a>
          <a href="#/writing">Writing</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <div class="home-hero-content wrap">
        <h1 class="home-title">
          <span>I build software</span>
          <span>for complex problems</span>
          <em>and make things beyond the screen.</em>
        </h1>
        <div class="home-hero-bottom">
          <div class="home-intro">
            <p>Software engineer, artist, and hybrid athlete.</p>
            <p>A portfolio of systems, images, ideas, and practice.</p>
          </div>
        </div>
      </div>

      <a class="hero-scroll" href="#explore" aria-label="Scroll to explore the portfolio">
        <span>Scroll to explore</span><span class="hero-scroll-line" aria-hidden="true"></span><span aria-hidden="true">↓</span>
      </a>
    </header>

    <div class="home-section-rule" data-reveal aria-hidden="true"><span></span></div>

    <section class="home-explore" id="explore" aria-labelledby="explore-title">
      <div class="wrap">
        <div class="home-explore-heading" data-reveal>
          <div><p class="home-kicker">A portfolio in four parts</p><h2 id="explore-title">Find your way in.</h2></div>
          <p>Go straight to the work you came to see. Each part has its own space and point of view.</p>
        </div>
        <div data-home-carousel></div>
      </div>
    </section>

    <div class="home-section-rule home-section-rule--olive" data-reveal aria-hidden="true"><span></span></div>
  `;
}

export function renderSubpageNav(active: string): string {
  return `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="subpage-topbar subpage-topbar--${escapeHtml(active)}">
      <a class="hero-mark" href="#/">${escapeHtml(profile.name)}</a>
      <nav class="hero-nav" aria-label="Main navigation">
        <a href="#/code" ${active === "code" ? 'aria-current="page"' : ""}>Tech</a>
        <a href="#/studio" ${active === "studio" ? 'aria-current="page"' : ""}>Canvas</a>
        <a href="#/field" ${active === "field" ? 'aria-current="page"' : ""}>Sport</a>
        <a href="#/writing" ${active === "writing" ? 'aria-current="page"' : ""}>Writing</a>
        <a href="#/contact">Contact</a>
      </nav>
    </header>
  `;
}
