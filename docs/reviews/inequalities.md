# Topic Review & Test Spec: Inequalities (Coded & Direct)

**Topic ID:** `inequalities`
**Category:** Logical & Analytical Reasoning
**Target Exams:** SEBI Grade A, Banking (SBI/IBPS PO & Clerk, RBI), SSC CGL
**Status:** Published
**Date:** 2026-11-03

---

## 1. Teaching approach

Understand first, rule after. Every statement is placed on a number line (bigger = right; `=` shares a slot; dashed link = `≤`, solid link = `<`). A conclusion is judged by listing which of `<`, `=`, `>` are still possible for the two letters:

| Possible relations vs. what the conclusion needs | Status |
|---|---|
| all of them fit | **true** (follows) |
| none fit | **false** |
| some fit | **cannot be determined** |
| two doubtful conclusions on the same pair that together cover every possible relation | **either-or** |

## 2. Pure model (`Model`)

- `parseStatement` / `parseConclusion` – normalise `P > Q ≥ R = S < T` (also `>=`, `<=`) into pairwise relations.
- `decode(text, legend)` – replace coded symbols (`@ © $ % #`) using a per-question legend.
- `build(statements)` – closure matrix (0 none / 1 `≥` / 2 `>`), equality slots, class edges, contradiction flag.
- `relBetween(g, x, y)` – `{ possible, known }`.
- `evaluateConclusion(statements, conclusion[, partner])` – `{ status: 'true'|'false'|'either'|'cannot', ... }`.
- `pairVerdict` – `first | second | both | either | neither`.
- `layout(g)` – number-line columns (same column = no known order).

## 3. Rules encoded

1. Gaps add up: any `>` in a one-direction chain makes the relation strict; all `≥` gives only `≥`.
2. Valley (`> ≤`) or peak (`< ≥`) breaks the chain.
3. A loop of `≥` forces equality.
4. Either-or needs the same pair, both doubtful, full coverage of `<`, `=`, `>`. `>` with `<` leaves `=` uncovered ⇒ neither.
5. `≥` with `≤` is treated as either-or (one must hold).

## 4. Content counts

- Practice questions: 14 (3 Easy, 6 Medium, 5 Hard), including 3 coded questions with different legends, 5 either-or/pair questions, loop and valley traps.
- Self-tests: 82 assertions (parsing, true/false/cannot, ≥ vs `>`, valley/peak, either-or, loops, contradictions, layout, and every practice answer key re-derived by the model).

## 5. Out of scope

`≠` conclusions, multi-letter chains in conclusions, "not less than"-style worded legends.
