# Itzfizz — Scroll-driven hero

A responsive React + Vite landing page with a custom CSS/SVG sports car illustration and GSAP ScrollTrigger motion.

## Run locally

1. Install **Node.js LTS** from https://nodejs.org/ (npm is included).
2. Extract this folder and open it in VS Code.
3. Open the terminal in this project folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy to GitHub Pages

For a project repository named `itzfizz-scroll-hero`, set Vite's `base` to `'/itzfizz-scroll-hero/'` in `vite.config.js`, then build and publish `dist` using GitHub Pages. For the simplest deployment, Vercel can import the repository with build command `npm run build` and output directory `dist`.

## Notes

- The hero uses the supplied orange sports-car image in `public/car.png`.
- Intro reveals run on load; car and road movement are scrubbed to scroll progress.
- GSAP animations are scoped and cleaned up with `useGSAP`.
- The statistics are placeholder copy from the brief; replace them with verified company figures before submission.
