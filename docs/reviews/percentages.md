# Topic Review: Percentages & Percentage Change (`percentages`)

> Status: **published**
> Date: 2026-10-29
> Target Exams: SEBI Grade A (General/IT Stream Paper 1), RBI Grade B, Banking (IBPS PO/Clerk), SSC CGL

---

## 1. Learning Objective & Prerequisites

- **Learning Objective:** The learner will understand percentage as a ratio out of a base of 100, calculate percentage amounts, determine percentage increases and decreases, master multiplier methods ($1 \pm r/100$), recognize base shift traps, and solve exam-style multi-step word problems without relying on rote memory.
- **Prerequisites:** Basic arithmetic (multiplication, division, decimals, and fractional simplification).

---

## 2. Problem Types & Input Ranges

### Problem Types Covered
1. **Quantity Calculation:** Finding $P\%$ of a given Base $B$ ($A = B \times \frac{P}{100}$).
2. **Percentage of a Total:** Expressing Part $A$ as a percentage of Whole $B$ ($P = \frac{A}{B} \times 100\%$).
3. **Percentage Change (Increase / Decrease):** Shift from initial value $B_1$ to final value $B_2$ ($\% \text{ change} = \frac{B_2 - B_1}{B_1} \times 100\%$).
4. **Multiplier Method:** Fast calculation using decimal multipliers (e.g. $+25\% \implies \times 1.25$).
5. **Successive Percentage Changes:** Sequential changes $a\%$ and $b\%$ ($E = a + b + \frac{ab}{100}\%$).
6. **Reversing Changes (Base Shift):** If $A$ is $x\%$ more than $B$, by what percent is $B$ less than $A$? ($\frac{x}{100 + x} \times 100\%$).

### Valid Model Input Ranges
- Base $B$: $B > 0$, typically $1 \le B \le 1,000,000$. (If $B \le 0$, the model returns an explicit invalid error or boundary note).
- Percentage $P$: $-100 \le P \le 1,000$ (allows reductions up to 100% and increases well over 100%).
- Inputs with $B = 0$ return `valid: false` with reason `"Base value cannot be zero for percentage calculations"`.

---

## 3. Mathematical Procedures & Invariants

### Mathematical Formulations
- **Direct amount:** $A = B \times \frac{P}{100}$
- **Multiplier:** $M = 1 + \frac{P}{100}$
- **New Value:** $V_{\text{new}} = B \times M = B + A$
- **Successive Change:** $E = a + b + \frac{ab}{100}\%$ (valid strictly when $b$ is applied to the outcome of $a$, on the same continuous quantity).
- **Fraction Equivalents:**
  - $50\% = \frac{1}{2}$, $25\% = \frac{1}{4}$, $20\% = \frac{1}{5}$, $16.67\% = \frac{1}{6}$, $14.28\% = \frac{1}{7}$, $12.5\% = \frac{1}{8}$, $11.11\% = \frac{1}{9}$, $10\% = \frac{1}{10}$, $33.33\% = \frac{1}{3}$.

### Invariants Verified
1. **Proportional Monotonicity:** For $B > 0$ and $P_2 > P_1$, $A(B, P_2) > A(B, P_1)$.
2. **Identity at 100%:** $A(B, 100) = B$, and $V_{\text{new}} = 2B$.
3. **Identity at 0%:** $A(B, 0) = 0$, and $V_{\text{new}} = B$.
4. **Symmetry in Product:** $P\%$ of $B$ is identical to $B\%$ of $P$ ($P \times B / 100 = B \times P / 100$).
5. **Base Shift Invariance:** If $A$ is increased by $25\%$ ($1.25$), it must decrease by $20\%$ ($1/1.25 = 0.8$) to return to the original base.

---

## 4. Known Common Traps

1. **The Base Shift Trap:**
   - *Example:* "If price increases by 25%, by what percent must consumption reduce to keep expenditure constant?"
   - *Common Trap Choice:* $25\%$ reduction.
   - *Why it's wrong:* The reduction is applied to the *new, higher* price ($125$), not the original ($100$). Correct answer is $\frac{25}{125} \times 100\% = 20\%$.
2. **Successive vs. Simple Addition Trap:**
   - *Example:* "A salary is increased by 20% then decreased by 20%. What is the net change?"
   - *Common Trap Choice:* $0\%$ change.
   - *Why it's wrong:* The 20% decrease acts on the increased salary ($1.20 \times 0.80 = 0.96 \implies 4\%$ net loss).
3. **Different Base Addition Trap:**
   - *Example:* Adding percentages across different populations or bases without weighting.
4. **Change vs. Final Value Trap:**
   - Selecting the amount of change when the question asked for the final total, or vice-versa.

---

## 5. Hand-Solved Deterministic Reference Cases

These cases are embedded directly in `Model.solve()` and tested by `runSelfTests()`:

| Test ID | Input | Expected Output | Tested Principle |
| :--- | :--- | :--- | :--- |
| `TC-01` | Base = 200, P = 25% | Amount = 50, New = 250 | Standard fractional calculation ($1/4$). |
| `TC-02` | Base = 80, P = 12.5% | Amount = 10, New = 90 | Fractional shortcut ($1/8$). |
| `TC-03` | Base = 500, P = 0% | Amount = 0, New = 500 | Zero boundary condition. |
| `TC-04` | Base = 360, P = 100% | Amount = 360, New = 720 | 100% boundary (doubling). |
| `TC-05` | Base = 450, P = -20% | Amount = -90, New = 360 | Negative change (decrease / discount). |
| `TC-06` | Base = 120, P = 150% | Amount = 180, New = 300 | Multiplier > 100%. |
| `TC-07` | Base = 0, P = 25% | `valid: false` | Zero base division handling. |
| `TC-08` | Base = -100, P = 10% | `valid: false` | Negative base rejection. |
| `TC-09` | Base = 100, P = 25%, Trap = 25 | Trap correctly flagged | Base shift trap identification. |
| `TC-10` | Successive a = 20%, b = -20%| Net = -4% ($0.96$) | Net successive formula invariant. |

---

## 6. Visualization Design & Value

- **SVG Proportional Bar:**
  - A primary horizontal proportional bar displaying the whole Base (0% to 100%).
  - A secondary proportional segment representing the percentage amount $A$.
  - When $P > 0$ (increase), the visual highlights an extension beyond the 100% mark.
  - When $P < 0$ (decrease), the visual highlights the subtracted portion and the remaining quantity.
  - Dynamic SVG elements contain full ARIA descriptions and responsive viewBox dimensions (`viewBox="0 0 600 130"`).

---

## 7. Pilot Evaluation Protocol (Retention & Transfer)

To verify educational efficacy (per `PROJECT.md` Section 1.2):
1. **Pre-test (Baseline):** 3 unseen percentage change and base shift questions. Record baseline accuracy and time.
2. **Interactive Intervention:** Learner works through `topics/percentages.html`: manipulates base & slider, tests predict-first mode, observes proportional bar and worked steps.
3. **Immediate Post-test:** 5 varied questions under "Independent Practice" (no hints mode). Target: >80% accuracy.
4. **Retention Test:** 5 questions administered 5–7 days later.
5. **Logged Metric:** Accuracy change, reduction in "Base Shift Trap" error frequency, and time per question.
