export function initExperienceFilters() {
  initFilters(
    "[data-filter]",
    ".experience-item[data-category]"
  );

  initFilters(
    "[data-work-filter]",
    ".project-card[data-category], .current-project[data-category]"
  );
}

function initFilters(
  filterSelector: string,
  itemSelector: string
) {
  const filters =
    document.querySelectorAll<HTMLButtonElement>(
      filterSelector
    );

  const items =
    document.querySelectorAll<HTMLElement>(
      itemSelector
    );

  filters.forEach((filter, index) => {
    if (index === 0) {
      filter.classList.add("is-active");
    }

    filter.addEventListener("click", () => {
      const selected = filter.dataset.filter
        ?? filter.dataset.workFilter;

      filters.forEach((button) => {
        button.classList.remove("is-active");
        button.setAttribute("aria-pressed", "false");
      });

      filter.classList.add("is-active");
      filter.setAttribute("aria-pressed", "true");

      items.forEach((item) => {
        const categories =
          item.dataset.category?.split(" ") ?? [];

        const shouldShow =
          selected === "all" ||
          categories.includes(selected ?? "");

        item.classList.toggle(
          "is-hidden",
          !shouldShow
        );
      });
    });
  });
}
