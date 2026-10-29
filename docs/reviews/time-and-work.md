# Topic Review: Time, Work & Efficiency (`time-and-work`)

> Status: **published**
> Date: 2026-10-29
> Target Exams: SEBI Grade A (General/IT Stream Paper 1), RBI Grade B, Banking (IBPS PO/Clerk), SSC CGL

---

## 1. Learning Objective & Prerequisites

- **Learning Objective:** The learner will understand that work completion depends on the sum of work rates (speed of work), not the addition or average of completion times. They will master the LCM (Unit Work) method, product-over-sum shortcut, efficiency-to-wage ratios, negative rates (leaks/pipes), and multi-stage work problems (workers leaving/joining, alternate days).
- **Prerequisites:** Fractions, ratios, HCF & LCM calculation, and basic linear equations.

---

## 2. Problem Types & Input Ranges

### Problem Types Covered
1. **Two Workers Combined:** A takes $D_A$ days, B takes $D_B$ days $\implies$ Combined time $T = \frac{D_A D_B}{D_A + D_B}$.
2. **Three Workers Combined:** A, B, and C with individual times $\implies$ Combined rate $r = \frac{1}{D_A} + \frac{1}{D_B} + \frac{1}{D_C}$.
3. **One Worker Missing:** Given $A$ alone and $(A+B)$ together, find $B$ alone: $r_B = r_{AB} - r_A$.
4. **Efficiency Ratios:** If A is $k$ times as efficient as B, then A takes $1/k$ of the time B takes. Wages are shared in the ratio of efficiency (rates), not days.
5. **Negative Work / Pipes & Cisterns:** Inflow pipe fills at rate $+r$, leak drains at rate $-r_{\text{leak}}$.
6. **Leaving / Joining Work:** A and B work together for $k$ days, then one leaves.
7. **Alternate Day Cycles:** A and B work on alternate days.

### Valid Model Input Ranges
- Individual completion times $D_A, D_B > 0$. Typically $1 \le D \le 300$ days.
- Inputs with $D \le 0$ return `valid: false` with reason `"Days must be strictly positive"`.
- If an opposing rate (leak) exceeds or equals inflow rate, net work cannot complete, returning `valid: false` or infinite time indicator.

---

## 3. Mathematical Procedures & Invariants

### Mathematical Formulations
- **Rate Formulation:** $r_i = \frac{1}{D_i}$ (fraction of work done per day).
- **Unit Work (LCM) Formulation:**
  - Let Total Work $W = \text{LCM}(D_A, D_B)$ units.
  - Rate of A: $u_A = W / D_A$ units/day.
  - Rate of B: $u_B = W / D_B$ units/day.
  - Combined Rate: $u_{AB} = u_A + u_B$ units/day.
  - Combined Days: $T = \frac{W}{u_{AB}} = \frac{W}{u_A + u_B} = \frac{D_A D_B}{D_A + D_B}$.
- **Wages Distribution:** When workers work together for the full duration, Wages $\propto$ Rates: $\text{Wage}_A : \text{Wage}_B = r_A : r_B = D_B : D_A$.

### Invariants Verified
1. **Strictly Faster Invariant:** For any two workers with positive rates ($D_A > 0, D_B > 0$), combined time $T_{AB} < \min(D_A, D_B)$. Working together must take less time than either worker working alone.
2. **Symmetry:** $T(D_A, D_B) = T(D_B, D_A)$. Swapping worker labels does not change completion time.
3. **Equal Workers Identity:** If $D_A = D_B = D$, then $T_{AB} = D / 2$.
4. **Monotonicity:** If worker B becomes faster ($D_B$ decreases), combined time $T_{AB}$ must strictly decrease.
5. **Rate Additivity:** $r_{AB} = r_A + r_B$.

---

## 4. Known Common Traps

1. **The Average Time Trap:**
   - *Example:* "A takes 10 days, B takes 15 days. How long together?"
   - *Common Trap Choice:* $12.5$ days (arithmetic mean $(10+15)/2$).
   - *Why it's wrong:* Averaging time implies working together is slower than A working alone (10 days)! Times do not average; rates add. Correct is $\frac{10 \times 15}{25} = 6$ days.
2. **The Sum of Days Trap:**
   - *Common Trap Choice:* $25$ days ($10 + 15$).
   - *Why it's wrong:* Adding times implies two people take longer than one person.
3. **The Wages-in-Ratio-of-Days Trap:**
   - *Common Trap Choice:* Dividing wages in the ratio of individual days $D_A : D_B$.
   - *Why it's wrong:* Faster workers take fewer days, so they do more work per day! Wages must be split in the ratio of rates $r_A : r_B$ (or inversely $D_B : D_A$).
4. **The Alternate Day Fractional Step Trap:**
   - Dividing remaining work by combined 2-day work without checking who works on the final day.

---

## 5. Hand-Solved Deterministic Reference Cases

These cases are embedded directly in `Model.solve()` and tested by `runSelfTests()`:

| Test ID | Input | Expected Output | Tested Principle |
| :--- | :--- | :--- | :--- |
| `TC-01` | $D_A = 10, D_B = 15$ | $T = 6.0$ days, $\text{LCM} = 30$, Rates: $3, 2$ units/day | Standard clean integer LCM. |
| `TC-02` | $D_A = 12, D_B = 18$ | $T = 7.2$ days, $\text{LCM} = 36$, Rates: $3, 2$ units/day | Non-integer fractional days ($36/5$). |
| `TC-03` | $D_A = 20, D_B = 30$ | $T = 12.0$ days, $\text{LCM} = 60$, Rates: $3, 2$ units/day | Standard exam numbers. |
| `TC-04` | $D_A = 10, D_B = 10$ | $T = 5.0$ days | Equal workers identity ($D/2$). |
| `TC-05` | $D_A = 12, D_B = 24, D_C = 8$| $T = 4.0$ days, $\text{LCM} = 24$, Rates: $2, 1, 3$ | Three workers combined. |
| `TC-06` | $D_A = 12, D_B = 18$, Trap = 15 | Trap correctly flagged as `average_trap` | Average time trap detection. |
| `TC-07` | $D_A = 12, D_B = 18$, Trap = 30 | Trap correctly flagged as `sum_trap` | Sum of days trap detection. |
| `TC-08` | $D_A = 0, D_B = 10$ | `valid: false` | Zero days rejection. |
| `TC-09` | $D_A = -5, D_B = 10$ | `valid: false` | Negative days rejection. |
| `TC-10` | $D_A = 10, D_{\text{leak}} = 15$ (Drain)| $T = 30.0$ days, Net rate = $3 - 2 = 1$ unit/day | Pipe & cistern leak/negative rate. |

---

## 6. Visualization Design & Value

- **SVG Combined Work Timeline & Unit Grid:**
  - Displays Total Work as a discrete block grid based on $\text{LCM}(D_A, D_B)$.
  - Contrasts daily rate contributions: Worker A's daily output vs Worker B's daily output.
  - Side-by-side completion bars for Worker A alone, Worker B alone, and Both together.
  - Visually proves that combined time is strictly less than either worker's individual time.

---

## 7. Pilot Evaluation Protocol (Retention & Transfer)

To verify educational efficacy (per `PROJECT.md` Section 1.2):
1. **Pre-test (Baseline):** 3 unseen time & work questions (one basic 2-worker, one worker-leaving, one wage-ratio). Record baseline accuracy and time.
2. **Interactive Intervention:** Learner works through `topics/time-and-work.html`: changes individual days, predicts combined days, inspects unit-work grid and worked steps.
3. **Immediate Post-test:** 5 varied questions under "Independent Practice" (no hints mode). Target: >80% accuracy.
4. **Retention Test:** 5 questions administered 5–7 days later.
5. **Logged Metric:** Accuracy change, elimination of the "Average Time" trap, and time per question.
