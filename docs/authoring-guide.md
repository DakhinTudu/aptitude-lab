# Authoring Guide for Topic Lessons

> Practical guidelines for creating new topic pages in Aptitude & Reasoning Lab.
> Always consult `PROJECT.md` before starting work on any topic.

## The Rule of Single Topic Tasks

Never implement or scaffold multiple topics simultaneously. Build one topic completely from model, tests, visualizer, worked steps, to verified practice questions and review documents before moving to the next.

## Architecture of a Topic Page

Each topic file lives directly in `topics/<topic-id>.html` and is runnable locally simply by double-clicking.

### Script Separation

Within `<script>`, maintain clean separation of concerns:

1. **Pure Model (`const Model = (() => { ... })();`):**
   - Strictly deterministic mathematical / logical functions.
   - Zero access to DOM, `window`, `document`, `localStorage`, or `Math.random()`.
   - Returns a structured solver object:
     ```js
     {
       valid: true,
       answer: Number | String,
       answerDisplay: String,
       intermediates: { ... },
       steps: [
         { title: "...", explanation: "...", math: "..." }
       ],
       assumptions: [ ... ],
       commonTrap: { answer: ..., explanation: "..." }
     }
     ```
2. **Self-Tests (`function runSelfTests() { ... }`):**
   - At least 8-10 deterministic test cases with independently calculated expectations.
   - Covers standard cases, boundary limits (0, negatives, maximums), invalid inputs, and trap detection.
   - Exposed on `window.runSelfTests`.
   - Automatically executed via `LabCommon.runAndRenderSelfTests(runSelfTests)` on page load.
3. **Practice Question Bank (`const PRACTICE_QUESTIONS = [ ... ];`):**
   - Minimum 10 varied, verified questions for published status (scaling to 30–50).
   - Each with explicit question stem, options, correct index, detailed worked solution, and trap explanation.
4. **Rendering & Interactive Wiring:**
   - Synchronizes model inputs to DOM controls (sliders, inputs).
   - Generates responsive SVG or HTML visual state.
   - Provides Predict-First interaction before revealing answers.
   - Tracks practice progress and categorizes errors via `LabCommon`.

## Checklist Before Submitting
- [ ] No external CDN or server dependencies.
- [ ] `runSelfTests()` passes with 0 failures.
- [ ] Diagram is responsive and accessible (keyboard + screen reader labels).
- [ ] Review documentation written in `docs/reviews/<topic-id>.md`.
- [ ] Listed in `index.html` and marked updated in `docs/curriculum.md`.
