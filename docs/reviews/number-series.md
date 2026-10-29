# Topic Review: Number & Letter Series (`number-series`)

> Status: **published**
> Date: 2026-10-29
> Target Exams: SEBI Grade A (General/IT Stream Paper 1), RBI Grade B, Banking (IBPS PO/Clerk), SSC CGL

---

## 1. Learning Objective & Prerequisites

- **Learning Objective:** The learner will identify underlying mathematical and positional patterns in numerical and alphanumeric sequences using systematic multi-tier difference trees, ratio tests, and alternating subsequence checks, avoiding guesswork and recognizing common prime vs. odd traps.
- **Prerequisites:** Basic arithmetic, squares, cubes, prime numbers, and alphabetical positional values (A=1 to Z=26).

---

## 2. Problem Types & Input Ranges

### Problem Types Covered
1. **Tier-1 Constant Difference (Arithmetic Progression):** Sequence differences $d_i = c$.
2. **Tier-2 Double Difference (Quadratic Sequences):** Differences between successive differences are constant ($d_2 = c$). E.g. $+4, +6, +8, +10 \implies +2$.
3. **Prime Number Addition:** Differences follow the sequence of prime numbers ($+2, +3, +5, +7, +11, +13...$). Note: $9$ is NOT prime!
4. **Squares & Cubes Variations:** Differences follow $n^2$, $n^3$, or $n^2 \pm k$.
5. **Multiplication with Additive/Subtractive Drift:** $T_{n+1} = T_n \times k \pm m$ (e.g. $\times 2 + 1, \times 2 + 2, \times 2 + 3...$).
6. **Half-Step Multiplier Series:** Multiplying factor increments by $0.5$ ($\times 0.5, \times 1.0, \times 1.5, \times 2.0, \times 2.5...$).
7. **Alternating / Interleaved Sequences:** Odd positions follow rule $R_1$, even positions follow rule $R_2$.
8. **Cumulative (Fibonacci-type) Sequences:** $T_n = T_{n-1} + T_{n-2}$.
9. **Letter & Alphanumeric Sequences:** Alphabetical position shifts and combined letter-number patterns.

### Valid Model Input Ranges
- Minimum sequence length for deterministic analysis: at least 4 terms. If fewer than 4 terms are provided, the sequence is underdetermined, and the model returns `valid: false` or an underdetermined indicator.
- Sequence elements can be integers, decimals, or standard Latin alphabetical characters.

---

## 3. Mathematical Procedures & Invariants

### Analysis Procedures
- **Tier-1 Difference:** $D_1[i] = A[i+1] - A[i]$ for $i = 0 \dots n-2$.
- **Tier-2 Difference:** $D_2[i] = D_1[i+1] - D_1[i]$ for $i = 0 \dots n-3$.
- **Ratio Test:** $R[i] = A[i+1] / A[i]$. If $R[i] = c$, geometric sequence.
- **Alternating Split:**
  - $A_{\text{odd}} = [A[0], A[2], A[4], \dots]$
  - $A_{\text{even}} = [A[1], A[3], A[5], \dots]$

### Invariants Verified
1. **Monotonicity of Linear Differences:** If $D_1$ is constant and positive, sequence is strictly increasing.
2. **Quadratic Invariant:** If $D_2$ is constant $c$, the sequence represents a second-degree polynomial $a n^2 + b n + c_0$ where $2a = c$.
3. **Alphabetical Position Invariance:** For letter shifts, position maps bijectively to $\{1, \dots, 26\}$ modulo 26.
4. **Underdetermination Notice:** If multiple distinct elementary rules fit a short sequence, the solver explicitly marks the convention or asks for additional terms.

---

## 4. Known Common Traps

1. **The Prime vs. Odd Number Trap:**
   - *Example:* Sequence differences: $+2, +3, +5, +7, [?]$
   - *Common Trap Choice:* $+9$ (assuming all odd numbers).
   - *Why it's wrong:* The sequence started with $+2$ (an even prime). The correct next difference is $+11$ (the next prime), NOT $+9$.
2. **The Constant Multiplier Trap:**
   - *Example:* $8, 4, 4, 6, 12, 30, [?]$
   - *Common Trap Choice:* Assuming no pattern because $8 \to 4$ is $\div 2$ and $4 \to 4$ is $\times 1$.
   - *Correction:* The multiplier increases by $0.5$ at each step ($\times 0.5, \times 1.0, \times 1.5, \times 2.0, \times 2.5, \times 3.0 \implies 30 \times 3 = 90$).
3. **The Single-Track Trap in Alternating Series:**
   - *Example:* $10, 50, 15, 45, 20, 40, [?]$
   - *Common Trap Choice:* Calculating difference $50 - 10 = +40$, $15 - 50 = -35$ and looking for a single complex polynomial.
   - *Correction:* Separate into Track 1 ($10, 15, 20 \implies 25$) and Track 2 ($50, 45, 40$).
4. **The Cube/Square $+/- 1$ Disguise:**
   - Missing patterns like $0, 7, 26, 63 \implies 1^3-1, 2^3-1, 3^3-1, 4^3-1$.

---

## 5. Hand-Solved Deterministic Reference Cases

These cases are embedded directly in `Model.solve()` and tested by `runSelfTests()`:

| Test ID | Input Sequence | Expected Next Term | Tested Principle |
| :--- | :--- | :--- | :--- |
| `TC-01` | `[3, 7, 13, 21, 31]` | `43` | Double difference (+4, +6, +8, +10, +12). |
| `TC-02` | `[2, 4, 7, 12, 19]` | `30` | Prime differences (+2, +3, +5, +7, +11). |
| `TC-03` | `[8, 4, 4, 6, 12, 30]` | `90` | Half-step multiplier (×0.5, ×1, ×1.5, ×2, ×2.5, ×3). |
| `TC-04` | `[2, 5, 12, 27, 58]` | `121` | Hybrid multiplier (×2 + 1, ×2 + 2, ×2 + 3, ×2 + 4, ×2 + 5). |
| `TC-05` | `[10, 50, 15, 45, 20, 40]` | `25` | Alternating subsequence (Track 1: 10, 15, 20 -> 25). |
| `TC-06` | `[1, 8, 27, 64, 125]` | `216` | Pure cubes ($6^3$). |
| `TC-07` | `[2, 3, 5, 8, 13, 21]` | `34` | Fibonacci additive recursive ($13 + 21$). |
| `TC-08` | `['B', 'E', 'H', 'K', 'N']` | `'Q'` | Alphabetical position step (+3 each). |
| `TC-09` | `[3, 7, 13, 21, 31]`, Trap = 41 | Flagged as `tier1_constant_trap` | Trap detection (repeating +10 instead of +12). |
| `TC-10` | `[5, 10]` | `valid: false` | Underdetermined sequence rejection (< 4 terms). |

---

## 6. Visualization Design & Value

- **Multi-Tier SVG Difference Pyramid:**
  - Level 0 (Top): Original sequence elements in distinct rounded nodes.
  - Level 1 (Middle): Tier-1 differences ($D_1$) displayed between connecting branches.
  - Level 2 (Bottom): Tier-2 differences ($D_2$) revealing the constant or underlying progression.
  - Visually clarifies the transition from variable surface numbers to constant fundamental rates.

---

## 7. Pilot Evaluation Protocol (Retention & Transfer)

To verify educational efficacy (per `PROJECT.md` Section 1.2):
1. **Pre-test (Baseline):** 3 unseen series (one double difference, one prime difference, one half-step multiplier). Record accuracy and solving time.
2. **Interactive Intervention:** Learner works through `topics/number-series.html`: inspects the visual difference pyramid, tests predict-first mode, and observes step traces.
3. **Immediate Post-test:** 5 varied questions under "Independent Practice" (no hints mode). Target: >80% accuracy.
4. **Retention Test:** 5 questions administered 5–7 days later.
5. **Logged Metric:** Accuracy change, elimination of the "Prime vs Odd" trap, and time to identify patterns.
