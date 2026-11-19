import { useEffect, useState } from "react";
import { Cursor, type CursorTheme } from "react-dot-cursor";

const cursorTheme: CursorTheme = {
  rules: [{ selector: "a[href], button:not(:disabled), select:not(:disabled), input:not(:disabled), textarea:not(:disabled), [role='button']:not([aria-disabled='true'])", variant: "hover", snap: { padding: 4, radius: "auto", magnetism: 0.08, margin: 0 } }],
};

export function PortfolioCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setEnabled(finePointer.matches && !reducedMotion.matches);
    updatePreference();
    finePointer.addEventListener("change", updatePreference);
    reducedMotion.addEventListener("change", updatePreference);
    return () => {
      finePointer.removeEventListener("change", updatePreference);
      reducedMotion.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const updateColour = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const darkSurface = target.closest(".home-explore, .practice-coming--studio, .cv-project-card");
      document.documentElement.style.setProperty("--cursor-color", darkSurface ? "#f1d28a" : "#a94b32");
    };
    document.addEventListener("pointermove", updateColour, { passive: true });
    return () => {
      document.removeEventListener("pointermove", updateColour);
      document.documentElement.style.removeProperty("--cursor-color");
    };
  }, [enabled]);

  return enabled ? <Cursor defaultColor="#a94b32" theme={cursorTheme} /> : null;
}
