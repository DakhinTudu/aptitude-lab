# Aptitude & Reasoning Lab

> A free, static, topic-by-topic interactive learning lab for quantitative aptitude, logical reasoning, and data interpretation. Built to help learners understand **why** methods work, predict outcomes, inspect step-by-step logic, and practise independently for Indian competitive exams (including SEBI Grade A, RBI, NABARD, Banking, and SSC).

## Core Philosophy

- **Relationship over formula:** Sliders and diagrams reveal proportionality, rate, or logical constraints.
- **Predict before reveal:** Active recall and self-assessment before worked solutions.
- **Single source of truth:** Deterministic models power visualisations, step-by-step traces, answer checks, and self-tests.
- **Practice as a first-class citizen:** Guided learning leads directly to independent, untimed and timed practice with trap analysis.
- **Zero build steps:** Pure HTML5, SVG, vanilla CSS, and vanilla JavaScript. Runs offline and on GitHub Pages directly from the local file system.

## Repository Structure

```text
aptitude-reasoning-lab/
├── index.html                 # Central curriculum directory and topic navigator
├── PROJECT.md                 # Product specification and quality gate standard
├── README.md                  # Project overview and local execution instructions
├── .nojekyll                  # Bypass Jekyll processing for GitHub Pages
├── assets/
│   ├── style.css              # Calm, accessible, responsive design system
│   ├── common.js              # Safe storage, self-test runner, and shared helpers
│   └── favicon.svg            # Crisp SVG lab mark
├── topics/
│   └── percentages.html       # Percentages & percentage change (Milestone 1 vertical slice)
└── docs/
    ├── curriculum.md          # Topic inventory, exam relevance, and review statuses
    ├── authoring-guide.md     # Engineering guidelines for adding new topic pages
    ├── question-quality.md    # Principles for high-utility, verified question design
    └── reviews/
        └── percentages.md     # Review file and pilot protocol for Percentages
```

## Running Locally

Because this project uses vanilla web standards with no build step, bundler, or server requirement:

1. Clone or download this repository.
2. Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari).
3. Alternatively, serve with any local HTTP server:
   ```bash
   # Python
   python -m http.server 8000
   # Node npx
   npx serve .
   ```

## Development and Verification Standards

Every topic page contains:
- A pure, deterministic mathematical/logical model.
- Browser-runnable self-tests exposed at `window.runSelfTests()`.
- Interactive visualization (SVG/semantic HTML).
- Predict-first worked examples.
- Comprehensive practice questions with error categorization and step-by-step solutions.
- Fallback-safe local storage for practice history.

See [PROJECT.md](PROJECT.md) for the detailed specification and quality gate.

## Disclaimer

*Educational tool. Check the latest official exam notifications. Not affiliated with SEBI, RBI, NABARD, IBPS, SSC, or any other examination authority.*
