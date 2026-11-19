type PracticePage = "studio" | "field" | "writing";

const pages: Record<PracticePage, { eyebrow: string; title: string; note: string; marker: string }> = {
  studio: {
    eyebrow: "CANVAS / CREATIVE PRACTICE",
    title: "Canvas is taking shape.",
    note: "I’m focused on software engineering work for now. I’ll open this space when I have work ready to share.",
    marker: "A CREATIVE SPACE / COMING SOON",
  },
  field: {
    eyebrow: "SPORT / PRACTICE & PERFORMANCE",
    title: "Sport stories will follow.",
    note: "I’m focused on software engineering work for now. Sport can have its own space when I’m ready to share it.",
    marker: "TRAINING · COMPETITION · RECOVERY",
  },
  writing: {
    eyebrow: "WRITING / NOTES & ESSAYS",
    title: "Words, when they’re ready.",
    note: "I’m focused on software engineering work for now. I’ll bring writing here when there’s something I want to publish.",
    marker: "A QUIET SPACE FOR IDEAS / COMING SOON",
  },
};

export function renderComingSoonPage(page: PracticePage): string {
  const content = pages[page];

  return `
    <main class="practice-coming practice-coming--${page}" id="main-content">
      ${page === "studio" ? '<div class="practice-coming-shader" data-studio-shader aria-hidden="true"></div>' : ""}
      <div class="practice-coming-inner">
        <p class="practice-coming-eyebrow">${content.eyebrow}</p>
        <div class="practice-coming-main">
          <div class="practice-coming-copy">
            <p class="practice-coming-status">COMING SOON</p>
            <h1>${page === "writing" ? `<span data-writing-heading>${content.title}</span>` : content.title}</h1>
            <p class="practice-coming-note">${content.note}</p>
            <a class="practice-coming-link" href="#/code">Explore software work <span aria-hidden="true">→</span></a>
          </div>
          ${page === "studio" ? "" : '<div class="practice-coming-mark" aria-hidden="true"><span></span><span></span><span></span></div>'}
        </div>
        <div class="practice-coming-rule"><span></span></div>
        <p class="practice-coming-footer">${content.marker}</p>
      </div>
    </main>
  `;
}
