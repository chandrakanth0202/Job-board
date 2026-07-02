# Afterhours — Job Board (Vite + React)

A job board built with **Vite**, **React**, **React Router**, and plain CSS — search, filtering, job detail pages, and an application form, all client-side.

## Tech stack

- **Build tool:** Vite
- **Framework:** React 18
- **Routing:** React Router v6
- **Styling:** Plain CSS with design tokens (`src/styles/index.css`)
- **Data:** Static seed data in `src/data/jobs.js` (no backend — see [Notes](#notes))

## Project structure

```
job-board/
├── .github/workflows/ci-cd.yml   # CI/CD pipeline
├── index.html                    # Vite entry HTML
├── vercel.json                   # SPA rewrite rule for client-side routing
├── src/
│   ├── main.jsx                  # App entry point (mounts <App /> with router)
│   ├── App.jsx                   # Routes + layout
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── JobCard.jsx
│   │   └── JobList.jsx           # Search + filters + job grid
│   ├── data/
│   │   └── jobs.js               # Seed jobs + helper functions
│   ├── pages/
│   │   ├── Home.jsx              # Hero + JobList
│   │   ├── JobDetails.jsx        # /jobs/:id
│   │   └── Apply.jsx             # /apply/:id
│   └── styles/
│       └── index.css
```

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev
# open http://localhost:5173
```

Other scripts:

```bash
npm run build     # Production build to dist/
npm run preview   # Serve the production build locally
npm run lint      # Run ESLint
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Afterhours job board"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy to Vercel via the CI/CD pipeline

`.github/workflows/ci-cd.yml` lints and builds on every push/PR, then deploys to Vercel on every push to `main`.

### One-time setup

1. **Link the project to Vercel** (also creates `.vercel/project.json` with your IDs):
   ```bash
   npm install --global vercel
   vercel login
   vercel link
   ```
2. **Create a token** at [vercel.com/account/tokens](https://vercel.com/account/tokens).
3. **Add GitHub repo secrets** (Settings → Secrets and variables → Actions):

   | Secret name         | Value                                  |
   |----------------------|------------------------------------------|
   | `VERCEL_TOKEN`       | Token from step 2                        |
   | `VERCEL_ORG_ID`      | `orgId` from `.vercel/project.json`      |
   | `VERCEL_PROJECT_ID`  | `projectId` from `.vercel/project.json`  |

4. **Push to `main`** — the pipeline installs, lints, builds, and deploys. The live URL is printed in the `deploy` job logs.

`vercel.json` includes a rewrite so every route falls back to `index.html`, which is required for React Router to handle deep links like `/jobs/2` correctly on Vercel.

## Notes

- This app has **no backend** — `src/data/jobs.js` is the single source of truth, and the Apply form confirms submission in the UI without sending data anywhere. Wire `handleSubmit` in `src/pages/Apply.jsx` to a real API when you're ready to collect applications.
- There's no `package-lock.json` committed assumption issue — run `npm install` once to generate it, then commit it so CI installs the exact same versions (`npm ci` in the workflow requires it).
