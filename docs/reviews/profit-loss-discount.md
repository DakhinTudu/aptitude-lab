# Topic Review: Profit, Loss & Marked Price (`profit-loss-discount`)

> Status: **published**
> Date: 2026-10-29
> Target Exams: SEBI Grade A (General/IT Stream Paper 1), RBI Grade B, Banking (IBPS PO/Clerk), SSC CGL

---

## 1. Learning Objective & Prerequisites

- **Learning Objective:** The learner will master the commercial arithmetic chain ($CP \to MP \to SP$), understand why profit/loss is anchored strictly to Cost Price while discount is anchored to Marked Price, calculate equivalent successive discounts ($d_1 + d_2 - \frac{d_1 d_2}{100}$), handle dishonest dealer false-weight shortcuts, and understand why selling two items at equal $SP$ with equal profit/loss percentages always results in a net loss of $(x/10)^2\%$.
- **Prerequisites:** Percentages, multiplier methods, ratios, and basic fractional arithmetic.

---

## 2. Problem Types & Input Ranges

### Problem Types Covered
1. **Three-Pillar Price Chain ($CP \to MP \to SP$):**
   - Markup on $CP$: $MP = CP \times (1 + m/100)$.
   - Discount on $MP$: $SP = MP \times (1 - d/100)$.
   - Net Profit/Loss on $CP$: $\text{Profit}\% = \frac{SP - CP}{CP} \times 100\%$.
2. **Successive Discounts:**
   - Single equivalent discount for discounts $d_1, d_2$:
     $$D_{\text{eq}} = d_1 + d_2 - \frac{d_1 \times d_2}{100}\%$$
3. **Equal Selling Price with Equal Gain/Loss ($x\%$ Profit & $x\%$ Loss):**
   - When two items have the SAME $SP$:
     $$\text{Net Result} = \text{Always a Loss of } \left(\frac{x}{10}\right)^2\% = \frac{x^2}{100}\%$$
   - (Contrast: When two items have the SAME $CP$, net result is $0\%$).
4. **Dishonest Dealer / False Weights:**
   - A trader claims to sell at cost price but uses a false weight of $w_{\text{false}}$ instead of $w_{\text{true}}$:
     $$\text{Gain}\% = \frac{w_{\text{true}} - w_{\text{false}}}{w_{\text{false}}} \times 100\%$$
5. **Cost Price Equals Selling Price of Different Quantities:**
   - If $CP$ of $x$ articles equals $SP$ of $y$ articles:
     $$\frac{SP}{CP} = \frac{x}{y} \implies \text{Gain/Loss}\% = \frac{x - y}{y} \times 100\%$$
6. **Profit Calculated on Selling Price (Exam Variation):**
   - Converting profit on $SP$ to standard profit on $CP$.

### Valid Model Input Ranges
- Cost Price $CP > 0$ (typically ₹10 to ₹100,000).
- Markup percentage $m \ge 0$ (typically 0% to 300%).
- Discount percentage $0 \le d \le 100\%$.
- Inputs with $CP \le 0$ return `valid: false`.

---

## 3. Mathematical Procedures & Invariants

### Mathematical Formulations
- $MP = CP \times \left(1 + \frac{m}{100}\right)$
- $SP = MP \times \left(1 - \frac{d}{100}\right) = CP \times \left(1 + \frac{m}{100}\right) \times \left(1 - \frac{d}{100}\right)$
- $\text{Net Profit} = SP - CP$
- $\text{Net Profit}\% = \left[\left(1 + \frac{m}{100}\right)\left(1 - \frac{d}{100}\right) - 1\right] \times 100\% = m - d - \frac{m \times d}{100}\%$

### Invariants Verified
1. **Base Invariant:** Profit/Loss % is strictly relative to $CP$; Discount % is strictly relative to $MP$.
2. **Successive Discount Bound:** For positive discounts $d_1, d_2 > 0$, the equivalent single discount is strictly less than their arithmetic sum ($D_{\text{eq}} < d_1 + d_2$).
3. **Equal SP Loss Invariant:** If two items are sold at equal $SP$, one at $+x\%$ and one at $-x\%$, the overall transaction is strictly a loss of $(x/10)^2\%$, regardless of the numerical value of $SP$.
4. **Zero Discount Identity:** When discount $d = 0\%$, $SP = MP$ and Net Profit % = Markup %.

---

## 4. Known Common Traps

1. **The Discount on Cost Price Trap:**
   - *Example:* "Item cost ₹500, marked up 40%, then discounted by 20%."
   - *Common Trap Choice:* Calculating 20% discount on ₹500 (₹100) instead of on the Marked Price ₹700 (₹140).
   - *Why it's wrong:* Discounts are ALWAYS given on the *Marked Price*, never on the Cost Price!
2. **The Direct Addition of Successive Discounts:**
   - *Common Trap Choice:* Believing two successive discounts of 20% and 10% equal a 30% discount.
   - *Correction:* Equivalent discount = $20 + 10 - \frac{200}{100} = 28\%$.
3. **The Same SP vs. Same CP Trap:**
   - When two items are sold at same $SP$ (+20% and -20%), guessing "No profit, no loss" (0%).
   - The correct answer is a 4% loss! ($0\%$ applies only if Cost Prices were equal).
4. **False Weight Denominator Trap:**
   - Dividing the weight error by the nominal weight (1000g) instead of the actual goods given (e.g. 900g).

---

## 5. Hand-Solved Deterministic Reference Cases

These cases are embedded directly in `Model.solve()` and tested by `runSelfTests()`:

| Test ID | Input | Expected Output | Tested Principle |
| :--- | :--- | :--- | :--- |
| `TC-01` | $CP = 500, m = 40\%, d = 20\%$ | $MP = 700, SP = 560, \text{Profit} = ₹60 (+12\%)$ | Standard $CP \to MP \to SP$ chain. |
| `TC-02` | $CP = 800, m = 25\%, d = 20\%$ | $MP = 1000, SP = 800, \text{Profit} = ₹0 (0\%)$ | Breakeven markup & discount ($+25\%, -20\%$). |
| `TC-03` | $CP = 1000, m = 20\%, d = 30\%$ | $MP = 1200, SP = 840, \text{Loss} = -₹160 (-16\%)$ | Net loss condition ($SP < CP$). |
| `TC-04` | Successive discounts $20\%$ & $10\%$ | $D_{\text{eq}} = 28.0\%$ | Equivalent discount formula. |
| `TC-05` | Successive discounts $30\%$ & $20\%$ | $D_{\text{eq}} = 44.0\%$ | Successive discount formula. |
| `TC-06` | Equal $SP$ with $\pm 20\%$ | Net Loss $= 4.0\%$ | $(x/10)^2\%$ loss rule. |
| `TC-07` | Equal $SP$ with $\pm 10\%$ | Net Loss $= 1.0\%$ | $(10/10)^2 = 1\%$ loss. |
| `TC-08` | False weight: claims 1000g, gives 900g | Gain $= 11.11\%$ ($100/900 \times 100$) | Dishonest dealer formula. |
| `TC-09` | $CP \le 0$ | `valid: false` | Invalid Cost Price rejection. |
| `TC-10` | $CP = 500, m = 40\%, d = 20\%$, Trap = 20% | Flagged as `additive_markup_discount_trap` | Direct addition trap ($40 - 20 = 20\%$). |

---

## 6. Visualization Design & Value

- **SVG Cascading Price Waterfall & Bar Breakdown:**
  - Blue bar: Cost Price ($CP$).
  - Yellow extension: Markup amount ($m\% \times CP$) reaching Marked Price ($MP$).
  - Red segment: Discount deducted from Marked Price ($d\% \times MP$) arriving at Selling Price ($SP$).
  - Emerald highlight: Net Profit margin ($SP - CP$) or Crimson bar for Net Loss.
  - Visually proves why discount deducted from a higher base ($MP$) is larger than the markup on the lower base ($CP$).

---

## 7. Pilot Evaluation Protocol (Retention & Transfer)

To verify educational efficacy (per `PROJECT.md` Section 1.2):
1. **Pre-test (Baseline):** 3 unseen profit-loss questions (one markup-discount chain, one successive discount, one equal SP problem). Record baseline accuracy and time.
2. **Interactive Intervention:** Learner works through `topics/profit-loss-discount.html`: adjusts CP, markup, and discount sliders, observes the cascading price waterfall, and tests predict-first mode.
3. **Immediate Post-test:** 5 varied questions under "Independent Practice" (no hints mode). Target: >80% accuracy.
4. **Retention Test:** 5 questions administered 5–7 days later.
5. **Logged Metric:** Accuracy change, elimination of the "Discount on CP" and "0% Net Result" traps, and time per question.
