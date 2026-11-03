# Aptitude & Reasoning Lab

Free static lab for quantitative aptitude, logical reasoning, and data interpretation — built for SEBI Grade A / banking / SSC style prep. Change values, predict, then practise. No login, no build step.

**Live (after you enable Pages):** `https://<your-username>.github.io/<repo-name>/`

## What’s included

- **17 topic pages** — percentages, ratios, averages, P&L, time & work, trains, SI/CI, PnC, series, direction, blood relations, syllogisms, order & ranking, seating, coding–decoding, inequalities, table DI
- Learning path on each page: Understand → Play → Predict → Practice → **Exam shortcuts**
- Self-tests on load; practice disabled if the model fails
- Shared UX: `assets/lab-ux.css` + `assets/lab-ux.js`

## Run locally

Open `index.html` in a browser, or:

```bash
python -m http.server 8000
# then http://localhost:8000
```

## Publish on GitHub Pages

1. Create a GitHub repo and push this project (`master` or `main`).
2. Repo → **Settings → Pages**.
3. Source: **Deploy from a branch** → `master`/`main` → folder **`/` (root)**.
4. Wait ~1 minute. Open `https://<user>.github.io/<repo>/`.

Requirements already in the repo:

- `.nojekyll` — so Pages does not run Jekyll (needed for folders like `topics/`)
- Relative links only (`assets/…`, `topics/…`) — works on project Pages URLs
- No backend / env keys

Optional: custom domain under Pages → Custom domain.

## Repo layout

```text
index.html              # Home / topic directory
.nojekyll               # GitHub Pages: skip Jekyll
assets/                 # favicon, lab-ux.css, lab-ux.js, …
topics/*.html           # One self-contained lesson per topic
docs/                   # curriculum, authoring notes, reviews
PROJECT.md              # Product / quality rules
```

## Disclaimer

Educational tool only. Confirm the latest official exam notifications. Not affiliated with SEBI, RBI, NABARD, IBPS, SSC, or any other authority.
