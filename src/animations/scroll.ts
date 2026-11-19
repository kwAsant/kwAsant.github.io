let activeObserver: IntersectionObserver | null = null;

export function initScroll() {
  activeObserver?.disconnect();
  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0,
      rootMargin: "0px 0px -5% 0px",
    }
  );

  activeObserver = observer;
  elements.forEach((element) => observer.observe(element));
}
