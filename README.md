# Cache 42 Downtown Express

Next.js implementation of the Cache 42 Downtown Express Figma designs.

## Run

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
cd frontend
npm run build
npm start
```

## Deploy to Netlify

This repo includes `netlify.toml` for the `frontend/` app:

- Base directory: `frontend`
- Build command: `npm run build`
- Publish directory: `out`

The site uses Next.js static export (`output: "export"`), so Netlify serves the
generated static files directly.

Deploy from the repo root or from `frontend/`:

```bash
cd frontend
npm run deploy:netlify
```

## Routes

- `/`
- `/menu`
- `/about`
- `/events`
- `/contact`
- `/book-a-table`

## Figma Source

Design URL:

```text
https://www.figma.com/design/i3wXivvqTColmRDKUCGybT/Untitled
```

The implementation vendors the Figma-provided image assets into
`frontend/public/assets` so the page does not depend on temporary MCP asset URLs.
