# Afterhours Job Board — Feature Documentation

## 1. Overview

A client-side job board for onsite, shift-based roles, built as a single-page app with Vite + React + React Router. All data is static (`src/data/jobs.js`); there is no backend in this version.

## 2. Routes

| Path         | Component              | Purpose                                    |
|--------------|--------------------------|----------------------------------------------|
| `/`          | `pages/Home.jsx`         | Hero + searchable/filterable job list         |
| `/jobs/:id`  | `pages/JobDetails.jsx`   | Full listing detail                          |
| `/apply/:id` | `pages/Apply.jsx`        | Application form for a specific job          |
| `*`          | `NotFound` (in `App.jsx`)| Catch-all 404                                |

## 3. Components

- **`Navbar.jsx`** — brand mark and a link back to the job list.
- **`Hero.jsx`** — static intro copy for the home page.
- **`JobList.jsx`** — owns search/filter state (`useState`) and derives the filtered list with `useMemo`. Filters combine with AND logic: text search (title/company), category dropdown, and shift dropdown. Shows an empty state when nothing matches.
- **`JobCard.jsx`** — renders one job summary plus a shift badge (a filled amber disc for Night shifts, a crescent for Day shifts) as the page's signature visual cue.

## 4. Data layer (`src/data/jobs.js`)

- `jobs` — the array of seed listings.
- `getJobById(id)` — used by both `JobDetails` and `Apply` to look up a job from the route param.
- `formatSalary(min, max)` — formats a salary range in lakhs (₹).

Because `useParams()` always returns strings, `getJobById` coerces its argument with `String(id)` before comparing, so `/jobs/2` and `/jobs/"2"` both resolve correctly.

## 5. Apply flow

`Apply.jsx` is a controlled form (`name`, `email`, `phone`, `coverNote`). On submit it validates that `name` and `email` are present, then shows an in-page confirmation — there's no network call yet. To make this collect real applications, replace the body of `handleSubmit` with a `fetch()` to your API or a form backend (e.g., Formspree, a serverless function, or your own database).

## 6. Design system

- Dark "night shift" theme: ink navy background (`--ink: #10142B`) with an amber accent (`--amber: #F5A623`), defined as CSS custom properties in `src/styles/index.css` so they're reusable across components without a CSS framework.
- Type: Fraunces for headings, Inter for body text, IBM Plex Mono for salary figures and the location eyebrow.
- Accessibility: visible focus outlines on all interactive elements, `prefers-reduced-motion` respected.
- Responsive: single column on mobile, two-column job grid and multi-column form rows from the `640px` breakpoint up.

## 7. Deployment notes

- `vercel.json` adds a catch-all rewrite to `index.html` so client-side routes (e.g. `/jobs/3`) resolve correctly when loaded directly on Vercel, since this is a single-page app with no server-side routing.
- The GitHub Actions pipeline (`.github/workflows/ci-cd.yml`) runs `npm run lint` and `npm run build` on every push/PR, and deploys to Vercel via the Vercel CLI on pushes to `main`.

## 8. Known limitations (by design, for assessment scope)

- No backend or persistence — job data is static and applications aren't stored anywhere.
- No authentication — there's no employer login or job-posting form in this version (unlike a full admin flow).

## 9. How this was built

The application code, GitHub Actions CI/CD pipeline, and this documentation were produced with AI assistance (Claude), then verified locally with a real `npm install`, `npm run lint`, and `npm run build` to confirm the project compiles and runs cleanly before handoff.
