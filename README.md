# My Digital Canvas

Personal showcase and portfolio for Widad Alagbe. The app is powered by React, shadcn/ui, and Tailwind via Vite, and it focuses on delivering a clean single-page experience.

## Development

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```

## Production

- Build the app:
  ```bash
  npm run build
  ```

## Testing

- Run the unit tests (Vitest)
  ```bash
  npm run test
  ```

## Project layout

- `src/components` – shared UI pieces and sections that compose the landing page.
- `src/pages` – top-level routes (currently just the landing experience).
- `src/assets` – bundled images such as `widad-profile.png`.
- `public` – files served as-is (static favicon, resume PDF, robots.txt).

## Iconography

The site now uses `widad-profile.png` for both the site icon and social metadata, so browsers and social previews show Widad's portrait instead of the previous placeholder.
