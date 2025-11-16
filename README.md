# alx-listing-app
A small Next.js (Pages Router) project scaffold for building an Airbnb-style listing page. Built with TypeScript, TailwindCSS, and ESLint.


## Goals
- Provide a clean starter structure for listing properties.
- Include reusable UI components (Card, Button).
- Keep Tailwind configuration minimal and scoped to project files.


## Project structure
- `pages/` — Next.js pages (Pages Router).
- `components/` — React components (shared UI components live under `components/common`).
- `interfaces/` — TypeScript interfaces and types.
- `constants/` — App constants and configuration values.
- `public/assets/` — Static assets (images, icons, SVGs).
- `styles/globals.css` — Tailwind imports (only base, components, utilities).


## Setup & Run locally
1. Create the project (if you haven't)
2. Move into the folder and install any additional packages if required
3. Start the development server
4. Open `http://localhost:3000` in your browser.


## Notes & troubleshooting
- Ensure `tailwind.config.js` content array includes `./pages/**/*.{ts,tsx}` and `./components/**/*.{js,ts,jsx,tsx}` as shown.
- `styles/globals.css` contains only the three Tailwind directives to avoid accidental overrides.
- If `npx tailwindcss init -p` returns `Invalid command: init`, ensure you have the correct `tailwindcss` package installed locally or use the `create-next-app` `--tailwind` flag (as shown above) which wires Tailwind automatically.


## License
MIT
