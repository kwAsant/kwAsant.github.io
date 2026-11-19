import "./style.css";

import { renderContact } from "./contact";
import { renderHome, renderSubpageNav } from "./home";
import { renderComingSoonPage } from "./coming-soon";
import { renderTechCV } from "./cv";
import { initScroll } from "./animations/scroll";
import { renderCompanyPage } from "./company";
import { initTopolines, setTopolinesPlaying } from "./animations/topolines";
import { initStudioShader } from "./animations/studio-shader";
import { createElement } from "react";
import { createRoot, type Root } from "react-dom/client";
import { GithubHeatmap } from "./components/github-heatmap";
import { HomeCarousel } from "./components/home-carousel";
import { EncryptedText } from "./components/ui/encrypted-text";
import { PortfolioCursor } from "./components/portfolio-cursor";

const app = document.querySelector<HTMLDivElement>("#app");
let heatmapRoot: Root | undefined;
let homeCarouselRoot: Root | undefined;
let writingHeadingRoot: Root | undefined;

if (!app) {
  throw new Error("App element not found");
}

function activePage(): string {
  return window.location.hash.startsWith("#/")
    ? window.location.hash.slice(2).split("?")[0] || "home"
    : "home";
}

function renderPage(animateTransition = false): void {
  heatmapRoot?.unmount();
  heatmapRoot = undefined;
  homeCarouselRoot?.unmount();
  homeCarouselRoot = undefined;
  writingHeadingRoot?.unmount();
  writingHeadingRoot = undefined;
  const page = activePage();

  switch (page) {
    case "code":
    case "cv":
      app!.innerHTML = `
        ${renderSubpageNav("code")}
        ${renderTechCV()}
      `;
      document.title = "Tech & Experience — Jody Gyekye";
      break;
    case "studio":
      app!.innerHTML = `${renderSubpageNav("studio")}${renderComingSoonPage("studio")}`;
      document.title = "Canvas — Jody Gyekye";
      break;
    case "field":
      app!.innerHTML = `${renderSubpageNav("field")}${renderComingSoonPage("field")}`;
      document.title = "Sport — Jody Gyekye";
      break;
    case "writing":
      app!.innerHTML = `${renderSubpageNav("writing")}${renderComingSoonPage("writing")}`;
      document.title = "Writing — Jody Gyekye";
      break;
    case "company/ypp":
    case "company/renovate":
      app!.innerHTML = `${renderSubpageNav("code")}${renderCompanyPage(page.slice("company/".length))}`;
      document.title = `${page.endsWith("ypp") ? "Youth Perspective Press" : "Renovate"} — Jody Gyekye`;
      break;
    default:
      app!.innerHTML = `<a class="skip-link" href="#main-content">Skip to content</a><main id="main-content" class="home-page">${renderHome()}${renderContact("home")}</main>`;
      document.title = "Jody Gyekye — Software Engineer & Maker";
  }

  initStudioShader();
  const homeCarousel = app!.querySelector<HTMLElement>("[data-home-carousel]");
  if (homeCarousel) {
    homeCarouselRoot = createRoot(homeCarousel);
    homeCarouselRoot.render(createElement(HomeCarousel));
  }
  const writingHeading = app!.querySelector<HTMLElement>("[data-writing-heading]");
  if (writingHeading) {
    writingHeadingRoot = createRoot(writingHeading);
    writingHeadingRoot.render(createElement(EncryptedText, { text: "Words, when they’re ready.", revealDelayMs: 50, encryptedClassName: "text-neutral-500" }));
  }
  const heatmap = app!.querySelector<HTMLElement>("[data-github-heatmap]");
  if (heatmap) {
    heatmapRoot = createRoot(heatmap);
    heatmapRoot.render(createElement(GithubHeatmap));
  }
  initScroll();
  app!.querySelectorAll<HTMLImageElement>('.cv-logo-item img[src*="simpleicons.org/openai/"]').forEach((image) => {
    const hideBrokenIcon = () => { image.hidden = true; };
    image.addEventListener("error", hideBrokenIcon, { once: true });
    if (image.complete && image.naturalWidth === 0) hideBrokenIcon();
  });
  setTopolinesPlaying(page !== "studio");
  const projectTrack = app!.querySelector<HTMLElement>("#cv-project-track");
  if (projectTrack) {
    const slides = Array.from(projectTrack.querySelectorAll<HTMLElement>(".cv-project-card"));
    let active = 0;
    const update = () => {
      const left = projectTrack.getBoundingClientRect().left;
      active = slides.reduce((best, slide, index) => Math.abs(slide.getBoundingClientRect().left - left) < Math.abs(slides[best].getBoundingClientRect().left - left) ? index : best, 0);
      slides.forEach((slide, index) => {
        slide.querySelectorAll<HTMLElement>("a, button").forEach((control) => {
          control.tabIndex = index === active ? 0 : -1;
        });
      });
    };
    const goTo = (index: number) => {
      const slide = slides[(index + slides.length) % slides.length];
      if (!slide) return;
      projectTrack.scrollTo({ left: projectTrack.scrollLeft + slide.getBoundingClientRect().left - projectTrack.getBoundingClientRect().left, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    };
    projectTrack.addEventListener("click", (event) => {
      const button = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-project-direction]");
      if (!button) return;
      const current = slides.indexOf(button.closest<HTMLElement>(".cv-project-card")!);
      const direction = Number(button.dataset.projectDirection);
      const target = (current + direction + slides.length) % slides.length;
      goTo(target);
      slides[target].querySelector<HTMLButtonElement>(`[data-project-direction="${direction}"]`)?.focus({ preventScroll: true });
    });
    update();
    projectTrack.addEventListener("scroll", update, { passive: true });
    projectTrack.addEventListener("keydown", (event) => {
      if (event.target !== projectTrack || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return;
      event.preventDefault();
      goTo(active + (event.key === "ArrowRight" ? 1 : -1));
    });
  }

  if (window.location.hash.startsWith("#/")) {
    const main = app!.querySelector<HTMLElement>("#main-content");
    const contact = page === "contact" ? app!.querySelector<HTMLElement>("#contact") : null;
    if (animateTransition && main) {
      main.classList.add("page-enter");
      requestAnimationFrame(() => main.classList.add("page-enter--ready"));
      const focusTarget = contact ?? main;
      focusTarget.tabIndex = -1;
      focusTarget.focus({ preventScroll: true });
    }
    if (page === "contact" && contact) {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      requestAnimationFrame(() => contact.scrollIntoView({ behavior }));
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  } else if (window.location.hash.length > 1) {
    const anchor = window.location.hash.slice(1);
    requestAnimationFrame(() => document.getElementById(anchor)?.scrollIntoView());
  }
}

const cursorHost = document.createElement("div");
cursorHost.setAttribute("aria-hidden", "true");
document.body.appendChild(cursorHost);
createRoot(cursorHost).render(createElement(PortfolioCursor));
initTopolines();
renderPage();
window.addEventListener("hashchange", () => {
  if (window.location.hash.startsWith("#/")) renderPage(true);
});
