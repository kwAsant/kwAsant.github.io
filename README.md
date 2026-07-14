# Portfolio

A personal portfolio built with Vite + TypeScript, deployed as a static site to GitHub Pages.

## Editing content

Everything you're likely to want to change lives in `src/main.ts`, in the
`profile`, `about`, `softwareProjects`, `otherWork`, and `contact` objects at
the top of the file. Colors and type live in `src/style.css`.

## Local development

```bash
npm install
npm run dev
```

This starts a local dev server (usually http://localhost:5173) with hot reload.

```bash
npm run build
```

Builds the static site into `dist/`.

```bash
npm run preview
```

Serves the built `dist/` folder locally, so you can sanity-check the production build.

## Deploying to GitHub Pages

### 1. Push this project to a GitHub repo

- If you want the site at `https://yourusername.github.io` (no sub-path),
  name the repo exactly `yourusername.github.io`.
- If you want it at `https://yourusername.github.io/reponame`, name the repo
  whatever you like, and update `base` in `vite.config.ts` to `"/reponame/"`.

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/reponame.git
git push -u origin main
```

### 2. Turn on GitHub Pages with the "GitHub Actions" source

In your repo on GitHub:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

That's it — no need to pick a branch, since the included workflow handles the build.

### 3. Let the workflow deploy it

This repo already includes `.github/workflows/deploy.yml`, which:

- Runs on every push to `main`
- Installs dependencies, runs `npm run build`
- Uploads `dist/` and deploys it to Pages

After your first push to `main`, go to the **Actions** tab in your repo to
watch it run. Once it finishes, your site will be live at the URL shown in
**Settings → Pages** (also shown as the deployment's environment URL in the
Actions run).

### Updating the site later

Just edit `src/main.ts` / `src/style.css`, commit, and push to `main` — the
workflow rebuilds and redeploys automatically.
