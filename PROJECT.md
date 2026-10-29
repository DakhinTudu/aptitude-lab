# Aptitude & Reasoning Lab — Project Specification (`PROJECT.md`)

> **Revision:** Practice-first edition. This version explicitly prioritizes independent solving, timed practice, retention, and measured learning value over topic count or visual polish.

> **Purpose:** Build a free, static, topic-by-topic interactive learning lab for quantitative aptitude, logical reasoning, and data interpretation. The first personal use case is preparation for SEBI Grade A (IT stream), while the content should be reusable for other Indian competitive examinations.
>
> **Core principle:** *Make the underlying relationship visible. Let the learner change values, predict the result, observe the consequences, inspect the reasoning, and then practise independently.*
>
> **Delivery constraint:** One home page plus one self-contained HTML page per topic, hosted on GitHub Pages. No backend, account system, paid API, or build process is required for v1.

This document is the working product specification for a coding agent. It defines the product, architecture, content boundaries, interaction standards, verification requirements, and delivery workflow. Follow it before creating or changing files.

---

## 1. Product vision

Build a library of small, dependable lessons that help a learner understand *why* a method works instead of memorising isolated tricks. The website should feel like a visual practice lab, not a formula dump or a collection of decorative animations.

A learner should be able to:

1. Understand the question type and the idea behind it.
2. Change one or more values and see what changes.
3. Predict an answer before revealing it.
4. See the mathematical or logical steps that justify the answer.
5. Compare a standard method with a shortcut and understand when the shortcut is valid.
6. Identify common traps and explain why a tempting answer is wrong.
7. Solve unfamiliar questions independently, without visual hints or worked steps.
8. Practise mixed questions under time pressure and review the reason for each mistake.
9. Revisit weak concepts later and check whether the learning has lasted.
10. Use the page on a phone, on a slow connection, and offline after loading the local files.

**The simulation is a learning aid, not a replacement for independent practice, previous-year questions, timed sectional tests, full mock tests, or checking the current official exam notification. The project must measure whether it helps learners solve new questions—not assume that engagement or attractive visuals mean learning has improved.**

### 1.1 Learning loop

Use this flow where it fits the topic:

`Choose topic → Understand → Change values → Predict → Reveal / run → Explain → Practise → Review mistakes`

Not every topic needs animation. A number line, table, diagram, constraint grid, or step-by-step state change may explain the concept better than motion.

### 1.2 What success means—and what it does not mean

The product is successful only if it helps a learner move from assisted understanding to independent problem-solving. A polished simulation that does not improve performance on new questions is not a successful learning tool.

For each pilot topic, use a simple evaluation:

1. Give the learner a short baseline set of unfamiliar questions without hints.
2. Teach the concept with the visual lesson.
3. Give a different, comparable set without hints.
4. Compare accuracy, time per correctly solved question, and error types.
5. Re-test with fresh questions after several days to check retention.
6. Record the result and limitations in `docs/reviews/<topic-id>.md`.

Use small pilots as directional evidence, not scientific proof. Keep difficulty reasonably comparable and avoid reusing the exact questions from the lesson. If results do not improve, revise the explanation, model, question quality, or practice flow before adding more topics.

Do not claim a specific percentage improvement unless it was measured transparently with an appropriate comparison. The site must not advertise guaranteed marks, guaranteed selection, or guaranteed exam success.

### 1.3 Product principles

- **Correctness before visual polish.**
- **Explain relationships, not only formulas.**
- **Predict before reveal** for the primary worked example, but do not force this interaction on every control.
- **One source of truth:** model outputs drive the visual, answer, intermediate values, and worked explanation.
- **Show assumptions and ambiguity:** if multiple rules or solutions are possible, say so.
- **Separate learning mode from test mode:** visual hints should not leak answers during practice.
- **Transfer before expansion:** prove that a lesson helps learners answer unfamiliar questions before building many more topics.
- **Practice is a first-class feature:** explanations build understanding; independent questions build retrieval, accuracy, and speed.
- **Measure learning, not clicks:** time spent on a simulation, animation engagement, and number of slider changes are not evidence of exam readiness.
- **Small, independently maintainable topic pages.**
- **Fast and mobile-first:** avoid heavy libraries and unnecessary animation.
- **Accessible by keyboard and screen reader; respect reduced-motion preferences.**
- **Honest status:** a page must not be called reviewed or published merely because it looks finished.

---

## 2. Audience and exam scope

### 2.1 Primary and secondary audiences

- **Primary initial audience:** the project owner studying for SEBI Grade A, including the IT stream.
- **Secondary audience:** candidates preparing for other Indian competitive exams whose syllabi overlap, such as RBI, NABARD, banking, SSC, and state-level recruitment examinations.

Design for a general competitive-exam learner. Do not hard-code a single exam's question count, marking scheme, sectional timing, or syllabus into every lesson.

### 2.2 Syllabus truth and exam-specific claims

The topic inventory in this document is a **planning checklist**, not an official syllabus. Exam notifications and patterns can change, and topics differ across exams and recruitment cycles.

Before claiming that a topic is required for a particular exam:

1. Locate the latest official notification and syllabus for that exam and recruitment cycle.
2. Record the notification year/date and exact relevant section.
3. Distinguish official syllabus wording from the site's own topic grouping.
4. Record the source and verification date in `docs/curriculum.md`.
5. Mark uncertain mapping as `needs-syllabus-verification`.
6. Never infer an official weightage from coaching websites, old papers, or this document.

Official starting points to verify when authoring content:

- SEBI: https://www.sebi.gov.in/
- SEBI careers/recruitment notices: https://www.sebi.gov.in/sebiweb/other/careers.jsp
- RBI: https://www.rbi.org.in/
- NABARD: https://www.nabard.org/
- IBPS: https://www.ibps.in/
- SSC: https://ssc.gov.in/

If an official page moves, search the relevant official domain and update the reference. Do not invent a source URL or claim to have checked a source that was not opened.

### 2.3 Keep the platform broader than one exam

Organise topics by concept and tag them by exam relevance. One topic can be useful to several exams, but difficulty, speed expectations, and question style may differ. Add exam-specific tags only when supported by current evidence.

---

## 3. Scope and topic inventory

This inventory is intentionally broad. Build incrementally; do not attempt to generate every page in one task. Mark every topic as `not-started`, `draft`, `needs-review`, `reviewed`, or `published` in `docs/curriculum.md`.

### 3.1 Quantitative aptitude

**Foundational arithmetic**
- Number system, integers, divisibility, factors and multiples
- HCF and LCM
- BODMAS / order of operations
- Fractions and decimals
- Simplification and approximation
- Squares, cubes, roots, and powers where relevant

**Core arithmetic**
- Percentages and percentage change
- Ratio and proportion
- Averages and weighted averages
- Profit, loss, marked price, and discount
- Simple interest and compound interest
- Partnership
- Mixtures and alligation
- Time and work
- Work efficiency and combined work
- Pipes and cisterns
- Time, speed, and distance
- Relative speed
- Trains crossing platforms, bridges, and one another
- Boats and streams
- Races
- Problems on ages

**Counting, probability, and algebra**
- Linear equations and word-problem translation
- Basic inequalities and algebraic comparison
- Number of ways / fundamental counting principle
- Permutations and combinations
- Basic probability
- Sequences and number series when treated quantitatively

**Geometry and measurement (later / exam-dependent)**
- Lines, angles, triangles, quadrilaterals, and circles
- Perimeter, area, surface area, and volume
- Coordinate or visual geometry only where useful and relevant

### 3.2 Logical and analytical reasoning

**Pattern and symbolic reasoning**
- Number series
- Letter series
- Alphanumeric series
- Analogy and classification / odd one out
- Coding-decoding (letter shifts, position-based, substitution, mixed patterns)
- Mathematical operations and symbol replacement

**Spatial and relationship reasoning**
- Direction sense and distance
- Blood relations and family trees
- Order and ranking
- Linear seating arrangements
- Circular seating arrangements
- Floor, box, and scheduling puzzles
- Comparison and arrangement puzzles

**Formal logic**
- Syllogisms
- Inequalities
- Statement and conclusion
- Statement and assumption, where exam-relevant
- Cause and effect, course of action, and argument evaluation, where exam-relevant
- Input-output patterns, where exam-relevant
- Data sufficiency

**Time and visual logic**
- Clocks
- Calendars
- Mirror / water images, paper folding, embedded figures, and other non-verbal reasoning only if there is a clear visual implementation and confirmed exam relevance.

### 3.3 Data interpretation (DI)

- Tables
- Bar charts
- Line charts
- Pie charts
- Mixed charts
- Caselet DI
- Percentage and ratio comparisons across datasets
- Missing-data / incomplete-table problems
- Data sufficiency and consistency checks where relevant

DI questions must be based on explicit datasets. Every displayed chart, table, question, and answer must derive from the same dataset object.

### 3.4 Suggested build order

Start with a small group that proves different interaction patterns:

1. `percentages.html` — slider-driven quantity relationship and visual bar.
2. `time-and-work.html` — work-rate comparison and combined-work timeline.
3. `trains-bridge.html` — moving train, bridge, relative distance, and time.
4. `number-series.html` — candidate pattern, differences, and step trace.
5. `direction-sense.html` — path on a coordinate grid with turn-by-turn state.
6. `blood-relations.html` — family graph with relationship query.
7. `profit-loss-discount.html` — price breakdown and successive percentage changes.
8. `syllogisms.html` — set/Venn reasoning with conclusion evaluation.

This is a proposed learning-oriented sequence, **not a claim about official topic priority or weightage**. If current official exam requirements or the learner's weaknesses suggest a different order, update the sequence and document why.

### 3.5 Defer until the basic architecture is proven

- Large mixed DI sets with several dependent questions
- Complex seating and multi-floor puzzles with multiple constraints
- Open-ended pattern questions where more than one answer is defensible
- Large timed mock exams
- Accounts, logins, leaderboards, cloud synchronisation
- Runtime AI question generation
- Paid APIs, backend services, and databases
- Heavy 3D scenes, video lessons, or audio narration

Do not permanently exclude these topics; defer them until the simpler pages, testing conventions, and authoring workflow are reliable.

---

## 4. MVP discipline: what to build first and what to avoid

The first release is a learning experiment, not a full commercial exam-prep platform.

### 4.1 Must-have for the first useful release

- One complete topic page (start with percentages).
- A clear concept explanation and interactive model with meaningful controls.
- Predict-first worked example.
- Deterministic solver and tests.
- Unseen questions that can be solved without hints.
- Immediate feedback with worked solutions.
- Optional timed practice after guided learning.
- Minimal local progress and mistake review, with a no-storage fallback.
- Mobile, keyboard, offline, and console checks.
- A small evaluation record comparing baseline and fresh-question performance.

### 4.2 Do not build yet

- Dozens of topic pages generated in one batch.
- Login, accounts, leaderboards, cloud sync, backend, or database.
- AI-generated questions at runtime.
- Complex gamification, streak pressure, badges, or decorative animation systems.
- Full mock-test engine before individual topic practice is trustworthy.
- Claims of guaranteed marks, selection, or measured improvement without evidence.

### 4.3 Priority rule

When deciding between a new visual effect and a better question, choose the better question. When deciding between another topic page and correcting a solver, correcting the solver wins. When deciding between guided hints and independent practice, make sure both exist and the learner can clearly tell which mode they are using.

## 5. Technical approach

### 6.1 Stack and hosting

Use **plain HTML, CSS, and vanilla JavaScript** for v1.

- One `index.html` home page.
- One HTML file per topic in `topics/`.
- Shared `assets/style.css` and `assets/common.js` are allowed.
- Use SVG and semantic HTML for diagrams, grids, number lines, charts, family trees, clocks, and arrangements.
- Use Canvas only when it clearly improves a particular interaction.
- No build step, package manager, bundler, framework, server, or API key.
- GitHub Pages for hosting.
- The pages should work offline when the repository files are available locally. Do not depend on a CDN or external runtime resource for core functionality.

A shared CSS/JS file is encouraged to keep visual quality consistent, but each topic page must still be independently understandable and directly runnable by opening the file. Relative imports are allowed. Do not make one topic depend on another topic's JavaScript.

**Do not use React/Vite for v1 unless the repository already has a working React/Vite architecture and the owner explicitly chooses to retain it.** The stated product goal is a simple GitHub Pages library of HTML topic pages.

### 6.2 Repository structure

```text
aptitude-reasoning-lab/
├── index.html
├── PROJECT.md
├── README.md
├── .nojekyll
├── assets/
│   ├── style.css
│   ├── common.js
│   └── favicon.svg
├── topics/
│   ├── percentages.html
│   ├── time-and-work.html
│   ├── trains-bridge.html
│   ├── number-series.html
│   ├── direction-sense.html
│   ├── blood-relations.html
│   ├── profit-loss-discount.html
│   └── syllogisms.html
└── docs/
    ├── curriculum.md
    ├── authoring-guide.md
    ├── question-quality.md
    └── reviews/
        ├── percentages.md
        └── ...
```

Only create files that are needed for the current milestone. Do not generate placeholder files merely to make the tree look complete. If a repository already has a valid structure, inspect it and adapt rather than overwriting it.

### 6.3 Topic page structure

Each topic HTML file should have this logical separation, even if it is all inside one `<script>` block:

1. **Metadata and content:** title, learning objectives, prerequisites, difficulty, exam tags, assumptions, source references, and review status.
2. **Pure model:** functions that accept inputs and return deterministic outputs. No DOM access, random calls, or drawing code inside the core solver.
3. **Question generation:** valid, bounded parameter generation and answer format.
4. **Rendering:** read model outputs and update the DOM/SVG/Canvas. Rendering must not independently solve the problem.
5. **Interaction wiring:** event handlers validate input, call the model, update renderers, and provide feedback.
6. **Tests:** deterministic self-tests and edge-case checks.

Example conceptual layout:

```html
<script>
  // 1. Metadata and question definitions

  const Model = (() => {
    // Pure calculation / reasoning functions only.
    // No document, window, canvas, Math.random, or UI state here.
    function solve(input) {
      // Return answer, intermediate values, and explanation steps.
    }
    return { solve };
  })();

  // 2. Deterministic tests and question-generation helpers

  // 3. Render model output into the visual and explanation

  // 4. Wire labelled controls and buttons
</script>
```

This is a separation-of-concerns rule, not a requirement to create unnecessary abstractions. Keep the implementation straightforward.

---

## 6. Required learning experience for each topic

Every published topic must include the sections below. A draft may omit sections temporarily, but the missing sections must be listed in its status/review notes.

### 6.1 Concept and learning objective

At the top, state in plain language what the learner should be able to do. Keep the initial explanation concise. Define terms that a beginner may not know.

### 6.2 Interactive model

Provide controls that meaningfully change the problem: sliders, number inputs, toggles, select options, buttons, or draggable items as appropriate.

Examples:
- Percentage: change the original value and percentage; update the resulting amount and a proportional bar.
- Time and work: change each worker's rate; show individual and combined completion time.
- Trains: change train length, bridge length, and speed; show the full distance needed to clear the bridge.
- Number series: reveal differences or alternate subsequences one step at a time.
- Direction sense: add turns and distances; update position and facing direction on a grid.
- Blood relations: select relationship statements; construct the corresponding family graph.
- Syllogisms: toggle sets or premises; evaluate whether a conclusion is necessarily true, necessarily false, or cannot be determined.

Controls must have sensible ranges, valid defaults, and visible units where applicable. Invalid inputs must be rejected or handled clearly; never allow `NaN`, `Infinity`, impossible people counts, negative durations, or contradictory puzzle states to silently appear as valid output.

### 6.3 Predict first

Before revealing the answer to the primary worked example, ask the learner to predict the result. Use a numeric input, multiple choice, or a small choice set.

Feedback should distinguish:
- **Correct**
- **Common trap** — the learner selected a specific plausible error
- **Not quite** — another incorrect answer

Explain the reason in one or two sentences. Do not mark an answer as a “common trap” unless the chosen answer actually matches a known error for that problem.

Allow the learner to reveal the answer after attempting or explicitly choosing to reveal it. Do not permanently lock the learner out.

### 6.4 Visual explanation

The visual must communicate the underlying structure, not merely decorate the page. It should update from the same model output used by the explanation.

Prefer:
- number lines and proportional bars for arithmetic;
- timelines and rate tables for work;
- SVG paths and labelled distances for motion;
- difference tables for series;
- coordinate grids for directions;
- graph/tree structures for relationships;
- set diagrams or carefully explained logical tables for syllogisms;
- arrangement grids for seating;
- dataset-linked charts and tables for DI.

Every visual must include labels or a text alternative. If a diagram is illustrative rather than to scale, say so.

### 6.5 Worked solution and general rule

Show a sequence of small, meaningful steps. Each step must be derived from model intermediates or a validated reasoning trace—not written independently in a way that can disagree with the computed answer.

Include:
- Given information
- What is being asked
- Relevant relationship / rule
- Substitution or deduction
- Intermediate values
- Final answer
- Why the method works
- Common wrong approach and why it fails
- Boundary conditions or assumptions
- A faster method, only if valid for the stated conditions

Do not describe a shortcut as universally valid if it depends on integer values, equal intervals, constant speed, non-zero denominators, or other assumptions.

### 6.6 Formula / rule reference

Provide a compact reference panel. Define every symbol and unit. For logic topics, the “formula” may instead be a rule table, inference rule, constraint, or decision procedure.

The panel should state when a rule applies and important exceptions. Do not dump formulas without a conceptual explanation.

### 6.7 Practice

Practice is not an afterthought. A learner should spend more time solving questions independently than repeatedly manipulating a simulation once the concept is understood.

Question-count targets:
- **Prototype/draft:** at least 3 verified questions to test the learning flow.
- **Published foundational topic:** aim for at least 30–50 well-checked questions over time, across easy, medium, and exam-style difficulty; do not pad the bank with near-duplicates.
- **Initial release gate:** at least 10 verified questions per published topic, including varied values and at least a few questions that test application rather than direct substitution. Grow toward 30–50 before treating the topic as a substantial practice resource.
- The quality and variety of questions matter more than hitting a raw count. Never invent official previous-year questions or label original questions as PYQs.

Practice requirements:
- Mix parameterised questions and, where appropriate, fixed diagnostic questions.
- Accept sensible equivalent numeric formats when relevant (e.g. `1/2`, `0.5`, or `50%` only when they represent the requested answer).
- Normalise whitespace/case for text answers where appropriate; do not use unsafe loose matching for logical conclusions.
- Give immediate feedback after submission.
- Show a worked solution after the learner submits or requests it.
- Include a “New question” or “Try another” action.
- Prevent invalid or degenerate question generation.
- Keep answers hidden until submission or explicit reveal.
- Do not reuse the exact same question repeatedly in a short run unless the user requests it.
- Clearly distinguish **learning mode** from **practice mode**.
- Provide a **Try without hints** path that hides the model, formula, worked solution, and visual cues until the answer is submitted.
- Include a small **timed practice** set once the learner has completed the guided lesson; make the timer optional during initial learning.
- Include mixed retrieval later: combine this topic with earlier topics rather than practising only one question type forever.
- After an incorrect answer, ask for or infer a useful error category: concept misunderstanding, wrong setup/method, arithmetic slip, misread condition, or time-pressure/guessing. Allow the learner to correct the category.
- Explain why the selected answer is wrong when that explanation can be determined reliably; do not show only a red cross and the right option.
- Keep at least some questions unseen in the lesson so success cannot come from memorising the worked example.

### 6.8 Practice score and progress

For v1, progress can be local to the browser using `localStorage`. Store only minimal non-sensitive values, such as topic practice counts, scores, timing summaries, error categories, and the date a topic was last practised. The page must continue to work if storage is disabled or throws an exception.

Prefer a simple review queue over a complicated adaptive-learning engine:
- Mark a topic/question skill as `needs review` after repeated errors.
- Offer a later re-test with different values or a different question.
- Space reviews across sessions where possible; do not require notifications, accounts, or a backend.
- Clearly distinguish attempted questions from questions answered correctly without hints.
- Never present a score from a guided mode as equivalent to an independent timed-test score.

- Explain that progress is stored locally on the current browser/device.
- Provide a reset-progress action with confirmation.
- Do not store names, email addresses, tokens, or other personal information.
- Do not claim scores sync across devices.
- Do not make local progress a prerequisite for using any lesson.

### 6.9 Sources and status

Every topic footer should include:
- A source / references section when the content relies on external facts or exam-specific claims.
- Model assumptions and limitations.
- Review status and last reviewed date.
- The disclaimer: “Educational tool. Check the latest official exam notification. Not affiliated with SEBI or any other examination body.”

Use the following status values consistently:
- `not-started`
- `draft`
- `needs-syllabus-verification`
- `needs-review`
- `reviewed`
- `published`

Do not imply that `reviewed` means officially endorsed. Record who/what was reviewed and what checks were actually completed.

---

## 7. Reasoning-specific correctness rules

Reasoning problems require special care because a plausible pattern is not always the only possible pattern.

### 7.1 Number and letter series

- Do not assume a unique continuation unless the question supplies enough structure or the intended rule is clearly supported.
- Show the observed sequence, candidate differences/ratios/alternating sequences, and the rule used.
- Prefer questions with a clear intended pattern and a defensible explanation.
- When multiple rules fit, explicitly state that the sequence is underdetermined or explain the convention assumed by the question.
- Avoid claiming that a pattern is “the only possible answer” when it is not.

### 7.2 Syllogisms and set logic

- Formalise the premises before evaluating conclusions.
- Use set relationships or a truth-table / possibility-based method that is correct for the chosen syllogism convention.
- Do not infer existence from a universal statement unless the adopted logic convention explicitly allows it and the question's rules require that convention.
- Make the convention visible when exam formats differ.
- Test “only conclusion I follows”, “only II follows”, “both”, “neither”, and “either/or” only when the logical conditions for those options are satisfied.
- A Venn diagram is an aid; the actual solver must not rely on pixel positions or visual overlap heuristics.

### 7.3 Seating arrangements and constraint puzzles

- Represent clues as structured constraints.
- Validate that the generated arrangement satisfies every clue.
- Determine whether the puzzle has zero, one, or multiple valid solutions.
- Do not present one arrangement as the unique answer unless uniqueness has been checked.
- For a unique solution, show a deduction trace that a learner can follow.
- If multiple solutions exist, show the valid alternatives or explain why the question is insufficient.
- Never use a hidden brute-force answer as if it were a human-readable explanation. A solver may search computationally, but it must produce a truthful, comprehensible trace.

### 7.4 Blood relations

- Model people as distinct nodes and relationships as labelled edges.
- Keep gender/identity unknown when the clues do not establish it.
- Do not invent gender, marriage, parenthood, or sibling relationships.
- Distinguish “cannot be determined” from a guessed relationship.
- Render the family tree from the same graph used to answer the query.

### 7.5 Direction sense and ranking

- Track position, orientation, and turns as explicit state.
- Define coordinate orientation and direction conventions in the UI.
- Use a consistent convention for left/right relative to the person's current facing direction.
- For ranking questions, state whether ranks are counted from the left/right/top/bottom and check for overlap assumptions.
- Test boundary cases such as zero movement, repeated turns, and equal ranks where applicable.

### 7.6 Coding-decoding and analogies

- State the transformation or relation used and show enough examples to justify it.
- Avoid answer keys that depend on an unexplained arbitrary mapping.
- If a code is ambiguous, provide additional examples or mark the problem as underdetermined.

---

## 8. Quantitative correctness rules

### 8.1 Units and precision

- Every quantity must have an appropriate unit or be explicitly dimensionless.
- Keep units consistent before calculating.
- State rounding rules. Avoid hidden rounding during intermediate steps unless the method requires it.
- For currency and percentages, define the base value and whether a percentage change is relative to the original or current value.
- For speed, distance, and time, make unit conversion explicit.

### 8.2 Edge cases and invalid inputs

Every model must define its valid input ranges and handle relevant edge cases, including:
- zero denominator / division by zero;
- zero or negative speed, time, rate, quantity, or price;
- percentage change when the base value is zero;
- work rates that cancel out or imply no completion;
- impossible or non-integer counts where people/items must be whole;
- invalid probability outside `[0, 1]`;
- combinations where `r > n`, negative `n`, or non-integer counts;
- rounding and exact fractional answers;
- values that create ambiguous or unsolvable questions.

Do not silently clamp inputs if clamping changes the meaning. If a control range prevents an invalid state, document the range; if typed input is invalid, show a clear validation message.

### 8.3 Avoid false precision

Do not show excessive decimal places. Use exact fractions when useful and decimal approximations only when clearly labelled. Make rounding part of the displayed solution rather than an invisible renderer decision.

### 8.4 Shortcuts are conditional

For every shortcut, document:
- the conditions under which it works;
- the reasoning behind it;
- at least one example where it works;
- a counterexample or warning if learners commonly overgeneralise it.

---

## 9. Model, question generator, and rendering contract

Every topic must have a deterministic model that produces the answer and the data needed to explain it.

### 9.1 Model contract

Conceptually, a solver should behave like:

```js
solve(input) => {
  valid: true,
  answer: ...,
  answerDisplay: "...",
  intermediates: { ... },
  steps: [
    { title: "...", explanation: "...", expression: "...", result: "..." }
  ],
  assumptions: ["..."],
  commonTrap: {
    answer: ...,
    explanation: "..."
  }
}
```

The exact object shape may vary by topic, but keep a stable, documented structure within each page. If input is invalid, return a clear invalid result rather than a plausible answer.

- The core solver must be pure and deterministic.
- Do not access `document`, `window`, DOM nodes, `localStorage`, timers, or random generators from the solver.
- The solver must not draw, animate, or update HTML.
- The renderer must not calculate the answer again.
- The explanation must use the same intermediate values as the answer.
- For logic solvers, return a trace of constraints or inference steps, not just a final label.
- For generated questions, keep the generation separate from solving. Use bounded random generation and make it possible to seed or bypass randomness in tests.
- A question generator must verify its own output by solving it and checking the intended constraints before showing it.

### 9.2 One source of truth

A single model result should drive:
- the displayed answer;
- intermediate readouts;
- visual geometry / diagram labels;
- worked solution;
- trap explanation;
- practice answer checking;
- test assertions where practical.

Never maintain a second hand-written answer in the HTML that can drift from the model.

### 9.3 Randomness and reproducibility

- Do not put `Math.random()` inside the pure solver.
- Inject a random-number function or pass generated parameters into the generator.
- Tests must use fixed inputs and be reproducible.
- When a learner reports a broken question, it should be possible to reproduce it from its parameters or a small seed.
- Avoid question generation that produces awkward fractions or unwieldy arithmetic unless that difficulty is intentional and labelled.

---

## 10. Testing and quality gate

A page cannot be marked `published` merely because it opens in a browser.

### 10.1 Required model tests

Each topic must expose a browser-console-runnable `runSelfTests()` function and execute it on page load. It should return an object like:

```js
{
  passed: 8,
  failed: 0,
  failures: []
}
```

Each published topic must have:
- At least **8 deterministic reference cases** for non-trivial topics; 5 is the minimum for a simple early prototype.
- Independently hand-calculated or logically verified expected results.
- Normal, boundary, and invalid-input cases where applicable.
- Tests for important invariants, not just memorised examples.
- At least one test for the common-trap logic.
- Tests for generated questions, including validity and answer consistency.

Do not create expected values by calling the same solver being tested. That would only test the solver against itself.

### 10.2 Useful invariants

Examples of property-style checks:
- Increasing a positive percentage of a fixed positive base should increase the result.
- For positive rates, adding a worker with a positive rate cannot increase the completion time.
- A train crossing a bridge must travel the sum of the train and bridge lengths under the stated model.
- A direction path's final coordinates must match the sum of its movements.
- A generated seating arrangement must satisfy every clue.
- A generated DI chart's values must match the underlying dataset.
- A probability must remain between 0 and 1 inclusive.

Only apply an invariant when its assumptions hold. Do not test a general statement outside its domain.

### 10.3 Fail visibly

If self-tests fail:
- Show a prominent error banner: **“Model self-tests failed — this lesson may be incorrect.”**
- Disable answer-reveal and practice scoring where continuing could mislead the learner, or clearly mark the page as unsafe for scored practice.
- Log the detailed failure object to the console.
- Never hide failures or downgrade them to a warning just to make the page appear functional.

### 10.4 Manual verification

Before publishing:
- Open the page directly from disk and through GitHub Pages.
- Test every interactive control.
- Compare the visible answer and every step against the model result.
- Test keyboard-only operation.
- Test at a narrow mobile viewport (target at least 360 CSS pixels wide).
- Test with reduced motion enabled.
- Confirm no console errors.
- Confirm offline/local operation and no required external network calls.
- Verify links and status metadata.
- For a puzzle generator, inspect several generated cases and check uniqueness/validity claims.

Do not claim that a test or manual check passed unless it was actually run.

---

## 11. User interface and accessibility

### 11.1 Visual design

Aim for a calm, modern study tool:
- clear typography and generous spacing;
- strong contrast and readable labels;
- restrained colour, not excessive gradients or neon;
- consistent topic navigation and status indicators;
- obvious controls and reset actions;
- diagrams that remain legible on mobile;
- clear separation between example, simulator, solution, and practice.

Avoid a generic dashboard that adds cards without improving learning. The interaction should be the visual centre of each topic page.

### 11.2 Responsive and accessible behaviour

- Use semantic HTML landmarks and headings in order.
- Every input must have a visible label.
- Every button must have a meaningful accessible name.
- Keyboard focus must be visible.
- Do not use colour alone to indicate correctness or relationships.
- SVG diagrams need a title/description or an equivalent text explanation.
- Use text tables or summaries for essential information shown in Canvas.
- Respect `prefers-reduced-motion: reduce`; provide pause/reset for continuous animation.
- Avoid flashing or rapidly moving content.
- Keep touch targets usable on phones.
- Do not require dragging when a keyboard-accessible alternative can provide the same learning outcome.
- Announce important answer feedback through an appropriate live region without making every slider movement excessively chatty.

### 11.3 Performance and offline use

- Avoid large libraries and remote fonts.
- Keep animation paused until the learner starts it.
- Avoid continuous animation when a static diagram communicates the same concept.
- Use local relative asset paths.
- If `localStorage` is unavailable, show a non-blocking message or silently fall back to session-only progress.
- Do not make a network request for every slider movement.

---

## 12. Home page requirements

`index.html` is the entry point and directory for all topics. It should include:

- Project title and short purpose statement.
- A note that visual lessons supplement, rather than replace, exam practice.
- Search or simple filters by topic, section, difficulty, and status where feasible.
- Separate sections for **Quantitative Aptitude**, **Logical Reasoning**, and **Data Interpretation**.
- Each topic link shows title, a short learning outcome, difficulty, and status.
- Clear `Not started`, `Draft`, `Needs review`, and `Published` labels.
- A way to continue to the last visited topic if this can be done without unnecessary complexity; this is optional.
- No fake completion percentages or invented exam-weightage labels.
- A footer with the educational disclaimer.

The index must link only to files that actually exist. A topic not yet implemented should appear as “Planned” text, not as a broken link.

### Why one home page plus separate topic files?

Use **one `index.html` plus one HTML file per topic**. It supports incremental development, independent debugging, shareable URLs, and smaller changes by AI coding agents. A single giant HTML file would become difficult to verify and maintain as topics grow. Shared CSS and helper JavaScript provide consistency without bundling all lessons into one page.

---

## 13. Content sourcing, originality, and copyright

- Prefer official exam notifications for exam claims and standard mathematical definitions for models.
- Record source title, publisher, URL, relevant section, and date accessed when a source is used.
- Create original examples and generated practice questions.
- Do not copy proprietary question banks, paid coaching material, or large collections of past-paper questions verbatim.
- If discussing a publicly available past question, follow applicable copyright rules and link to the official source rather than reproducing a large set.
- Do not cite a source that was not actually consulted.
- Clearly distinguish official syllabus information, standard mathematical facts, and the project's own generated examples.
- A source reference does not automatically validate every answer; model tests remain mandatory.

---

## 14. Authoring workflow for AI coding agents

**One topic per task.** Do not ask an agent to generate 20–50 pages at once.

### Step A — Inspect before editing

- Read `PROJECT.md`, `README.md`, the existing `index.html`, shared assets, and `docs/curriculum.md`.
- Check the current repository structure and GitHub Pages path requirements.
- Preserve existing working code unless a change is required.
- List the exact files planned for modification.
- Never overwrite the repository or replace unrelated work without explicit need.

### Step B — Specify the problem

Create or update `docs/reviews/<topic-id>.md` before or alongside implementation. Include:
- learning objective and prerequisites;
- problem types and valid input ranges;
- mathematical formula or logical procedure;
- assumptions and limitations;
- known common traps;
- at least 5 hand-solved reference cases, preferably 8 or more;
- expected answers and worked steps;
- question-generation strategy and validity checks;
- proposed visualisation and why it helps.

If the topic has ambiguous rules, resolve the convention and document it before coding.

### Step C — Implement the pure model first

- Implement solver functions with no DOM dependency.
- Return intermediate values and an explanation trace.
- Define invalid-input behaviour.
- Write `runSelfTests()` and verify it.
- Do not start with styling or animation.

### Step D — Add question generation

- Keep generated parameters within documented bounds.
- Ensure each generated question has a valid, checked answer.
- Avoid ambiguous series/puzzles unless ambiguity is the lesson.
- Keep random generation out of the solver.
- Make generated examples reproducible for debugging.

### Step E — Build the visual and UI

- Render from model outputs only.
- Add controls, predict-first, reveal, explanation, and practice.
- Use accessible HTML/SVG and responsive CSS.
- Add reset and error states.
- Ensure the page still works if storage is unavailable.

### Step F — Verify

- Run `runSelfTests()` and report actual results.
- Exercise controls and generated problems manually.
- Check mobile, keyboard, reduced motion, local/offline use, and browser console.
- Verify all displayed steps and values agree.
- If something could not be tested, state that explicitly.

### Step G — Integrate and publish

- Add the real topic link to `index.html`.
- Update `docs/curriculum.md` and the review note.
- Set status to `published` only after the quality gate is met.
- Provide a concise implementation report: files changed, tests run/results, manual checks performed/not performed, known limitations, and the next recommended topic.

Suggested commit style:

```text
feat(topic): add percentages visual lesson
fix(topic): handle zero-base percentage change
docs: update aptitude curriculum status
```

---

## 15. Definition of done

A topic is eligible for `published` only when all applicable items pass:

- [ ] Learning objective and prerequisites are clear.
- [ ] Metadata and status are present.
- [ ] Model and renderer are separated.
- [ ] Input ranges and assumptions are documented.
- [ ] At least 8 deterministic reference tests pass (5 minimum for a simple prototype).
- [ ] Boundary and invalid-input cases are covered.
- [ ] Generated questions are valid and answer-checked.
- [ ] Predict-first interaction works.
- [ ] Visualisation communicates the concept and updates correctly.
- [ ] Worked steps come from the same model / reasoning trace.
- [ ] Common trap is mathematically or logically valid.
- [ ] At least 10 verified, varied practice questions are available for a published topic; the question bank has a documented growth target toward 30–50.
- [ ] At least some questions are unseen in the guided lesson and can be solved without hints.
- [ ] Learning mode and independent practice mode are clearly separated.
- [ ] A timed practice option exists where time pressure is relevant.
- [ ] Incorrect answers receive a useful explanation and, where feasible, an error category.
- [ ] Feedback and solution reveal work correctly.
- [ ] Progress distinguishes guided attempts from independent correct answers.
- [ ] A pilot evaluation plan or results are recorded before claiming learning impact.
- [ ] No broken links or console errors.
- [ ] Keyboard and screen-reader basics are addressed.
- [ ] Layout checked at 360px or narrower.
- [ ] Reduced-motion behaviour is respected.
- [ ] Local/offline operation has been checked.
- [ ] Source references and review date are recorded when needed.
- [ ] `index.html` and `docs/curriculum.md` are updated.
- [ ] Footer disclaimer is present.
- [ ] Status reflects the checks actually performed.

---

## 16. Suggested roadmap

### Milestone 0 — Repository skeleton
- Create the GitHub repository.
- Add `PROJECT.md`, `README.md`, `.nojekyll`, and a minimal but usable `index.html`.
- Add shared CSS and small, stable helpers.
- Enable GitHub Pages and confirm the home page loads.

### Milestone 1 — Build one complete vertical slice
Build **percentages only** and make it excellent:
- Interactive proportional bar / numeric controls.
- Predict-first worked example.
- Clear assumptions and step-by-step explanation.
- At least 10 verified questions for the initial release, including unseen no-hint questions.
- Independent practice and an optional timed set.
- Error feedback and local progress.
- Deterministic tests and manual accessibility/mobile checks.

Do not start the next topic until this end-to-end flow works reliably.

### Milestone 2 — Test whether it helps
Use a small pilot with baseline questions, a guided lesson, a fresh independent question set, and a delayed re-test. Record accuracy, time, and common errors. Treat results as directional, not proof. Fix weaknesses before scaling.

### Milestone 3 — Prove three interaction patterns
After the first topic passes the quality gate, build:
1. Time and work — rate comparison and combined-work timeline.
2. Number series — candidate pattern, difference table, and step trace.

The objective is to validate distinct interaction types, not maximise topic count.

### Milestone 4 — Foundational aptitude and reasoning
Add topics based on the verified exam syllabus and learner weaknesses: ratio and proportion, averages, profit/loss/discount, direction sense, blood relations, ranking, and syllogisms.

### Milestone 5 — Practice quality and retention
Improve question diversity, no-hint solving, timed practice, error review, delayed re-tests, and local progress. Review every topic against the quality gate.

### Milestone 6 — Advanced reasoning and DI
Add DI chart types, seating arrangements, constraint puzzles, probability, and counting only after their solvers and explanations are reliable.

### Milestone 7 — Expand by evidence
Use the current official exam syllabus, pilot results, learner feedback, and actual practice weaknesses to decide what to build next. Do not add a topic merely because another website lists it.

---

## 17. Required prompt for the coding agent

Use this prompt when asking Cursor, Antigravity, or another coding agent to implement a topic:

> You are the implementation partner for Aptitude & Reasoning Lab. Read `PROJECT.md` and the existing repository before making changes. The site is a static GitHub Pages project using one home page and one HTML file per topic, with vanilla HTML/CSS/JavaScript and no backend or build step.
>
> Implement **one topic only** per task. First inspect existing files and state the exact files you plan to change. Do not rewrite unrelated files or generate a batch of topic pages.
>
> Implement the pure deterministic solver first. It must return the answer, intermediate values, assumptions, and a comprehensible worked trace. Keep DOM, rendering, event handling, and randomness outside the solver. The visual, displayed answer, explanation, and practice checker must use the same model result.
>
> Include meaningful interactive controls, a predict-first example, a useful visualisation, the general rule and its limitations, and a real common-trap explanation. For a prototype, include at least three verified questions; before publishing, include at least ten varied verified questions and document how the bank will grow toward 30–50. Include unseen no-hint questions, an independent practice mode, and an optional timed set where relevant. Make invalid inputs and ambiguous questions explicit rather than guessing. Do not claim the lesson improves scores until a baseline/fresh-question/delayed-retest evaluation has been run.
>
> Expose `runSelfTests()` on `window`, run it on load, and show a prominent failure banner if tests fail. Do not claim tests passed unless you actually ran them. Test boundary cases and generated-question validity.
>
> Make the page responsive, keyboard accessible, compatible with reduced-motion settings, and usable locally without a server or external runtime dependency. Keep the UI consistent with existing shared assets.
>
> Update `index.html`, `docs/curriculum.md`, and `docs/reviews/<topic-id>.md` as needed. Never mark a page `published` until the definition-of-done checklist is satisfied.
>
> Finish with a report of files changed, exact test results, manual checks actually performed, limitations, and the next suggested topic. If a mathematical convention or logical rule is uncertain, stop and explain the ambiguity instead of silently choosing one.

---

## 18. First actions

1. Create a GitHub repository such as `aptitude-reasoning-lab`.
2. Put this file at the repository root as `PROJECT.md`.
3. Ask the coding agent to inspect the repository and build only the minimal home page, shared stylesheet, and shared helper file needed for the first lesson.
4. Implement **one** first topic (recommended: percentages) and verify the full learning loop.
5. Test the page locally and on GitHub Pages.
6. Only then add the next topic.

Do not ask an AI agent to “build the entire aptitude and reasoning website” in one prompt. A smaller number of correct, explainable lessons is more valuable than a large catalogue of plausible-looking but unverified answers.

---

## 19. Final principle

**Make the concept visible, make the answer verifiable, and make the learner do the thinking.** The purpose of the lab is not to replace timed exam practice. It is to make the reasoning behind a method clear enough that the learner can eventually solve a new problem without the simulation.

**Build depth before breadth.** A small number of accurate lessons that demonstrably help with unfamiliar questions is more valuable than dozens of flashy pages. Keep mock tests, previous-year questions from verified sources, and independent timed practice central to the study plan. The tool supports preparation; it does not guarantee marks or selection.
