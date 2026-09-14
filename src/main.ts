import "./style.css";

import { renderHome } from "./home";
import { renderAbout } from "./about";
import { renderWork } from "./work";
import { renderContact } from "./contact";

import { initWave } from "./animations/wave";
import { initScroll } from "./animations/scroll";


const app =
  document.querySelector<HTMLDivElement>("#app");


if (!app) {
  throw new Error("App element not found");
}


app.innerHTML = `
  ${renderHome()}
  ${renderAbout()}
  ${renderWork()}
  ${renderContact()}
`;


const waveCanvas =
  document.querySelector<HTMLCanvasElement>(
    "#hero-wave"
  );


if (waveCanvas) {
  initWave(waveCanvas);
}


initScroll();