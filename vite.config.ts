import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// If you deploy to a repo named "yourusername.github.io", the site lives at
// the domain root, so keep base as "/".
//
// If you deploy to any OTHER repo name (e.g. "portfolio"), GitHub Pages
// serves it at yourusername.github.io/portfolio/, so set base to that repo
// name instead, e.g. base: "/portfolio/".
export default defineConfig({
  base: "/",
  plugins: [tailwindcss()],
});
