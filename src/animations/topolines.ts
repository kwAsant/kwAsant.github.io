import { TopoField } from "topolines";

let field: TopoField | null = null;

export function initTopolines(): void {
  const host = document.querySelector<HTMLElement>("#topolines-bg");
  if (!host) return;

  field?.destroy();
  field = new TopoField(host, {
    seed: "jody-portfolio",
    speed: 0.042,
    levels: 12,
    opacity: 0.38,
    color: "#A8B89A",
    drift: [0.02, 0.01],
    interactive: true,
    mouseStrength: 0.47,
  });

  host.classList.toggle("topolines-bg--fallback", !field.ok);
}

export function setTopolinesPlaying(playing: boolean): void {
  if (!field?.ok) return;
  if (playing) field.play();
  else field.pause();
}
