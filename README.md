# AbAut

A Dutch company website built with Astro 7 and strict TypeScript. Pages are rendered as static HTML, with local fonts, the original AbAut logo, and minimal browser JavaScript.

## Run locally

Use Node.js 22.12 or newer (Node 22 is recorded in `.nvmrc`).

```sh
npm ci
npm run dev
```

Open http://localhost:4321. To verify and preview the production build:

```sh
npm run check
npm run build
npm run preview
```

## Edit content

- `src/data/site.ts`: navigation, contact details, social profiles, and default metadata.
- `src/data/content.ts`: services, approach, and resource links.
- `src/pages/`: page-specific Dutch copy and page composition.
- `src/styles/global.css`: brand colors, typography, responsive layout, and focus styles.
- `brand/abaut-logo-original.png`: original logo from the existing website.
- `public/files/`: locally preserved downloadable document.

## Future CMS

The first release uses typed local data. A CMS is not installed yet. A next step is to move long-form page text into schema-validated Astro content collections and connect an external content loader or Git-based editor. Keep the `Service` and `Resource` models as the contract for the components. Prefer loading CMS content during the build and rebuilding on publication to retain static page performance. A CMS will also need site settings, page/SEO fields, media, preview, and an agreed publishing workflow.

## Deployment

Run `npm ci`, `npm run check`, and `npm run build`, then publish `dist/` to a static host. No server adapter is required. The site URL in `astro.config.mjs`, `src/data/site.ts`, and `public/robots.txt` is `https://abaut.nl`. Unknown routes should serve `dist/404.html` with a 404 status.

Known routes from the old hash-based website redirect to their new pages through a small compatibility script. The old placeholder reimbursement page has not been migrated.

## Before publishing

Review the rewritten Dutch copy, current professional background, email and social profiles, external resource destinations, and any use of professional membership claims. The privacy page only describes this website's interface; complete any required company/hosting/data-processing information once those details are known. No contact form, analytics, tracking cookies, or client intake workflow is included.

Lighthouse and Core Web Vitals goals in `REQUIREMENTS.md` are targets. Real-user metrics require measurement after deployment.
