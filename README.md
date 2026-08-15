# BK Authority Media Portfolio

A responsive static portfolio website for **BK Authority Media**, built for GitHub Pages.

## Upload to GitHub Pages

Create a new GitHub repository named `bkauthoritymedia` or any repository you prefer. Upload the contents of this folder, including `client`, `package.json`, `vite.config.ts`, and the other project files. For a simple GitHub Pages deployment, the easiest route is to build the site locally with Node.js and publish the generated `dist` folder using GitHub Actions or a Pages deployment workflow.

The portfolio is already configured for the website preview used by the project. The WhatsApp CTA opens:

`https://wa.me/94767794670`

The selected-work buttons link to the supplied Frame.io project pages. Replace any link in `client/src/pages/Home.tsx` if a Frame.io share URL changes.

## Local preview

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

The visual system uses charcoal, bone white, and Playhead Amber, with responsive layouts for desktop and mobile screens.
