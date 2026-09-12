# AbAut website requirements

Status: first implementation built from this draft following authorization to start development. Publication and CMS selection remain pending.

## Confirmed requirements

- Build the new company website with Astro and TypeScript.
- Reuse AbAut's existing logo and house style/colors, with a modern visual design.
- Prioritize fast loading and navigation.
- Content may initially be hardcoded; plan for editing through a CMS later.
- Add an Astro-appropriate `.gitignore` before application development.

## Existing brand and content

Source: https://abaut.nl/#/ (public application assets inspected on 2026-09-12).

| Role | Existing color |
| --- | --- |
| Primary purple | `#957DB9` |
| Lavender accent/background | `#BFB1D5` |
| Navy text | `#050D41` |
| Dark navy | `#030721` |
| Neutral surfaces | White |

Original logo: https://abaut.nl/img/abaut-logo.8cde10ba.png
Preserved locally at `brand/abaut-logo-original.png`. Prefer an original vector version if one is available; do not redraw or distort the logo.

Existing navigation: Over mij, Begeleiding, Links, Contact. Guidance concerns wonen, werken, school, vrije tijd, and relaties. Existing contact email: bianca@abaut.nl. Confirm all content and contact details before publication. The old application also contains placeholder About and Vergoeding routes; do not migrate placeholder text.

## Proposed first release

- Dutch website, responsive from mobile to desktop.
- Home: clear explanation of AbAut, introduction, and prominent contact action.
- Over mij: personal background and qualifications.
- Begeleiding: services, approach, and what visitors can expect.
- Links: useful resources and downloadable documents, with verified destinations.
- Contact: clearly labeled email and relevant professional/social links.
- Privacy information reflecting the actual services and data collection used.
- No fabricated testimonials, claims, prices, or services.

The page structure and features above are proposals, not yet confirmed scope.

## Design and accessibility proposal

- Calm, welcoming presentation, generous spacing, clear typography, and a consistent visual hierarchy.
- Use existing purple and lavender for brand accents, with navy text on light surfaces where contrast permits.
- Verify accessible contrast for each text/background combination; existing brand colors are not automatically suitable for text or buttons.
- Predictable navigation, keyboard access, visible focus, semantic headings, and descriptive link labels.
- Respect reduced-motion preferences; avoid autoplay and distracting animations.
- Aim for WCAG 2.2 AA accessibility and no horizontal overflow at 320px viewport width.

## Technical proposal

- Astro static output and strict TypeScript; select the current stable Astro release when scaffolding.
- Use Astro components and CSS for the main website; add browser JavaScript only for interactions that require it.
- Store initial content separately from layouts and components, using local Markdown/JSON and typed content collections where appropriate.
- Define content models for pages, services, resources, SEO metadata, and site-wide contact details.
- Keep presentation independent of content storage so a future CMS can supply the same models.
- Prefer CMS content fetched at build time, with a publishing webhook to rebuild the site. Confirm acceptable publishing delay and preview requirements before selecting a CMS.
- Optimize images, reserve image dimensions, and minimize font downloads and third-party scripts.
- Use clean URLs, page titles/descriptions, canonical URLs, sitemap, and a useful 404 page.
- Review old hash URLs during migration. URL fragments are not sent to the server, so preserving bookmarked hash routes may require a small client-side compatibility script.
- Commit the selected package-manager lockfile for reproducible installs; ignore dependencies, build output, caches, logs, and local secrets.

Astro content collections support structured local content and custom loaders for external sources: https://docs.astro.build/en/guides/content-collections/

## Proposed acceptance criteria

- All agreed pages work at mobile, tablet, and desktop widths.
- Core page content and standard navigation work without JavaScript.
- No broken internal links, missing assets, or placeholder copy.
- Type checking and the production build pass.
- Keyboard navigation and contrast are manually checked.
- Aim for mobile Lighthouse performance of at least 95 on representative pages under a documented test setup; this is a target to validate, not a guarantee.
- Target good Core Web Vitals: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. Field validation requires real traffic after launch.

## Decisions still needed

1. Primary audience and desired visitor action: prospective clients, families, referring professionals, or a combination?
2. Whether to keep the existing four-page structure or add a separate homepage and other pages.
3. Whether contact should use email links only or include a form; a form requires a submission service and data-handling decisions.
4. Which existing text should be retained, rewritten, or removed, and whether new photos are available.
5. Dutch only or additional languages.
6. Existing hosting constraints and preferred deployment process.
7. Future CMS editing needs: editors, image uploads, draft previews, publishing workflow, hosting, and budget.

Implemented first-release defaults: separate homepage plus the existing content areas, Dutch only, email contact, static hosting output, and typed local content. Next step: review the website and copy, agree on hosting, and define CMS editing needs.
