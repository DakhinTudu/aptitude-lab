# Curriculum & Topic Inventory

> Working tracker for topics across Quantitative Aptitude, Logical Reasoning, and Data Interpretation.
> Status values: `not-started` | `draft` | `needs-syllabus-verification` | `needs-review` | `reviewed` | `published`

## Official Syllabus References

Official notices checked for curriculum alignment:
- **SEBI Grade A (General / IT Stream) Phase 1:** Quantitative Aptitude (Paper 1), Reasoning (Paper 1). SEBI Recruitment Notification 2024 (Paper 1 has 100 marks, composite timing of 60 mins). Standard topics include percentages, ratios, time & work, data interpretation, series, puzzles, coding-decoding.
- **IBPS / Banking Standards:** Standard foundational quantitative aptitude and analytical reasoning patterns.
- *Rule:* Verification date and notice version must be recorded. Do not assume or publish weightage numbers as official facts.

---

## 1. Quantitative Aptitude

| Topic ID | Topic Name | File | Primary Exam Target | Status | Review Date | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `percentages` | Percentages & Percentage Change | `topics/percentages.html` | SEBI Gr A, Banking, SSC | **published** | 2026-10-29 | Milestone 1 complete. Proportional model, predict-first, 12 verified practice questions, full self-test suite. |
| `time-and-work` | Time, Work & Efficiency | `topics/time-and-work.html` | SEBI Gr A, Banking, SSC | **published** | 2026-10-29 | Rate timeline model, LCM unit-work solver, predict-first, 12 verified practice questions, 11 deterministic self-tests. |
| `trains-bridge` | Trains, Speed & Distance | `topics/trains-bridge.html` | SEBI Gr A, Banking, SSC | **published** | 2026-10-29 | Dynamic clearance vector model, 5/18 unit conversion, relative speed rules, predict-first flow, 12 verified practice questions. |
| `profit-loss-discount` | Profit, Loss & Marked Price | `topics/profit-loss-discount.html` | SEBI Gr A, Banking, SSC | **published** | 2026-10-29 | Price cascade waterfall model, successive discounts formula, equal SP loss invariant, dishonest dealer false weight solver, 12 verified practice questions, 11 deterministic self-tests. |
| `ratio-proportion` | Ratio, Proportion & Variation | `topics/ratio-proportion.html` | SEBI Gr A, Banking, SSC | **published** | 2026-10-29 | Unit-scale proportional division, chained ratio LCM-bridge, mean/third/fourth proportionals, coin denomination solver, direct vs. inverse variation, 12 verified practice questions, 11 deterministic self-tests. |
| `averages-alligation` | Averages & Alligation | `topics/averages-alligation.html` | SEBI Gr A, Banking, SSC | `not-started` | — | Weighted averages balance-beam model. |
| `simple-compound-interest`| SI & CI Comparison | `topics/simple-compound-interest.html`| SEBI Gr A, Banking | `not-started` | — | Growth comparison, effective rate calculation. |
| `permutations-combinations`| Basic Counting & Combinatorics | `topics/permutations-combinations.html` | SEBI Gr A (IT), Banking | `not-started` | — | Decision tree and fundamental counting principle. |
| `probability` | Basic Probability | `topics/probability.html` | SEBI Gr A (IT), Banking | `not-started` | — | Sample space grid, mutually exclusive vs independent events. |

---

## 2. Logical & Analytical Reasoning

| Topic ID | Topic Name | File | Primary Exam Target | Status | Review Date | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `number-series` | Number & Letter Series | `topics/number-series.html` | SEBI Gr A, Banking, SSC | **published** | 2026-10-29 | Multi-tier difference tree, half-step multipliers, prime differences, letter shifts, predict-first flow, 12 verified practice questions. |
| `direction-sense` | Direction & Distance Sense | `topics/direction-sense.html` | SEBI Gr A, Banking, SSC | **published** | 2026-10-29 | Interactive coordinate grid, turn-by-turn state tracking, Pythagorean displacement, shadow rules, 12 verified practice questions. |
| `blood-relations` | Blood Relations & Family Tree | `topics/blood-relations.html` | SEBI Gr A, Banking, SSC | **published** | 2026-10-29 | Generational tree graph, coded relation parser, maternal/paternal distinctions, gender rules, 12 verified practice questions. |
| `syllogisms` | Syllogisms & Set Logic | `topics/syllogisms.html` | SEBI Gr A, Banking | **published** | 2026-10-29 | Interactive Euler/Venn engine (basic minimal vs possibility maximal diagrams), definite vs possibility evaluation, Only a few composite solver, Either-Or 3-condition verification, 12 verified practice questions, 11 deterministic self-tests. |
| `order-ranking` | Order & Ranking | `topics/order-ranking.html` | SEBI Gr A, Banking, SSC | **published** | 2026-10-29 | Linear row positioning, single person terminal formula (N = L + R - 1), overlapping cross-over solver (M = L + R - N - 2), min/max capacity bounds, position interchange simulator, 12 verified practice questions, 11 deterministic self-tests. |
| `seating-arrangements` | Linear & Circular Seating | `topics/seating-arrangements.html` | SEBI Gr A, Banking | `not-started` | — | Multi-constraint satisfaction solver and human deduction trace. |

---

## 3. Data Interpretation (DI)

| Topic ID | Topic Name | File | Primary Exam Target | Status | Review Date | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `di-tables` | Table DI & Percentage Comparison | `topics/di-tables.html` | SEBI Gr A, Banking | `not-started` | — | Tabular data queries, fast approximations, growth comparisons. |
| `di-charts` | Bar, Line & Mixed Charts | `topics/di-charts.html` | SEBI Gr A, Banking | `not-started` | — | Derived from single dataset objects, dual-axis checks. |
| `di-pie` | Single & Multiple Pie Charts | `topics/di-pie.html` | SEBI Gr A, Banking | `not-started` | — | Degree to percentage conversion, sector ratio calculations. |

---

## Review & Quality Gate Log

- **2026-10-29:** Milestone 0 initialized (repository skeleton, `.nojekyll`, shared design system, test runner, central directory). Milestone 1 created (`topics/percentages.html`): 10 reference deterministic tests, 12 varied practice questions, SVG proportional bar, predict-first flow, full trap breakdown. Status: `published`.
- **2026-10-29:** Milestone 3 topic added (`topics/time-and-work.html`): 11 reference deterministic self-tests, 12 verified practice questions, SVG timeline rate visualizer, predict-first flow, average/sum trap breakdown. Status: `published`.
- **2026-10-29:** Milestone 3 topic added (`topics/number-series.html`): 11 reference deterministic self-tests, 12 verified practice questions, SVG multi-tier difference pyramid, predict-first flow, prime vs odd trap breakdown. Status: `published`.
- **2026-10-29:** Milestone 4 topic added (`topics/trains-bridge.html`): 11 reference deterministic self-tests, 12 verified practice questions, SVG clearance vector visualizer, predict-first flow, bridge-only trap breakdown. Status: `published`.
- **2026-10-29:** Milestone 4 topic added (`topics/direction-sense.html`): 11 reference deterministic self-tests, 12 verified practice questions, SVG coordinate grid path tracer, predict-first flow, facing-south trap breakdown. Status: `published`.
- **2026-10-29:** Milestone 4 topic added (`topics/blood-relations.html`): 11 reference deterministic self-tests, 12 verified practice questions, SVG generational tree graph, predict-first flow, gender assumption trap breakdown. Status: `published`.
- **2026-10-29:** Milestone 4 topic added (`topics/profit-loss-discount.html`): 11 reference deterministic self-tests, 12 verified practice questions, SVG price cascade visualizer, predict-first flow, equal SP loss invariant, dishonest dealer false weights, direct percentage subtraction trap breakdown. Status: `published`.
- **2026-10-29:** Milestone 4 topic added (`topics/syllogisms.html`): 11 reference deterministic self-tests, 12 verified practice questions, SVG Euler/Venn minimal vs possibility diagram engine, predict-first flow, 'Only a few' directionality, 3-condition Either-Or validator. Status: `published`.
- **2026-10-29:** Milestone 5 topic added (`topics/ratio-proportion.html`): 11 reference deterministic self-tests, 12 verified practice questions, interactive proportional bar SVG model, classical proportion calculator (mean/third/fourth), coin denomination weighted solver, predict-first flow, LCM-bridge chaining trap. Status: `published`.
- **2026-10-29:** Milestone 5 topic added (`topics/order-ranking.html`): 11 reference deterministic self-tests, 12 verified practice questions, interactive linear row SVG visualizer, overlapping between count cross-over solver, min/max bounds, position interchange simulator. Status: `published`.
