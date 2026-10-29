# Question Quality & Pedagogical Standards

> Standards for writing, verifying, and categorizing questions in Aptitude & Reasoning Lab.

## 1. Ground Truth and Verification

- **Never rely on unverified LLM calculation:** Every practice question must be hand-calculated or independently verified by algebraic substitution before being added.
- **No Ambiguous Number Series or Puzzles:** If a sequence or puzzle admits multiple mathematically sound patterns, it is invalid for competitive practice unless the specific disambiguating rule is part of the problem statement.
- **Explicit Units and Bases:** In percentage and profit-loss problems, clearly specify the base ("percentage of what?"). Never leave the base implicit.

## 2. Realistic Distractors & Common Traps

Every multiple-choice practice question must feature intentionally crafted options:
1. **The Correct Answer:** Unambiguous and derived through verified steps.
2. **The Common Conceptual Trap:** E.g., computing a percentage increase relative to the *new* value instead of the *original* value; or adding percentages of different bases directly ($20\% \text{ of } 100 + 30\% \text{ of } 200 \neq 50\% \text{ of } 300$).
3. **The Arithmetic / Sign Slip Trap:** E.g., subtracting when increasing, or off-by-one in ranking.
4. **The Plausible Alternative:** Close magnitude or misread question condition (e.g., finding the change rather than the final amount).

## 3. Error Categorization Framework

When a learner answers incorrectly, provide or prompt for one of 5 distinct error categories to drive reflective meta-cognition:
- **Concept Misunderstanding:** Did not grasp the underlying rule or relationship.
- **Wrong Setup / Method:** Chosen formula or setup does not fit the problem condition.
- **Arithmetic Slip:** Setup was correct, but calculation or decimal placement was inaccurate.
- **Misread Question:** Solved for the wrong variable (e.g., asked for remaining, found spent).
- **Time Pressure / Guessing:** Rushed without full deduction.

## 4. Growth Targets

- **Prototype Stage:** Minimum 3 verified questions to validate the interactive engine.
- **Published Minimum:** Minimum 10 varied questions across difficulty tiers (Basic, Applied, Exam-Style).
- **Target Maturity:** Expand topic banks progressively to 30–50 verified questions.
