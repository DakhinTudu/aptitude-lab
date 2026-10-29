# Topic Review & Curriculum Specification: Averages, Mixtures & Alligation

**Topic ID:** `averages-alligation`  
**Category:** Quantitative Aptitude  
**Target Exams:** SEBI Grade A (General & IT Stream), Banking (SBI PO/Clerk, IBPS PO, RBI Grade B), SSC CGL  
**Status:** In Development Review  
**Date:** 2026-10-29  

---

## 1. Syllabus Scope & Exam Weightage

Averages, mixtures, and alligation form one of the highest-yield topics in arithmetic:
- **Banking Prelims & Mains (SBI / IBPS / RBI):** 2–3 standalone arithmetic questions (mixtures, age replacement, bowling average) and underpins 40% of complex DI questions (weighted averages across departments/years).
- **SEBI Grade A Phase 1 (Paper 1):** 2–3 questions testing the alligation shortcut on commercial profit mixes, speed mixtures, and repeated replacement formulas.
- **SSC CGL (Tier 1 & Tier 2):** 3–4 questions including consecutive number averages, erroneous recording adjustments, and dilution formulas.

---

## 2. Theoretical Foundations & Pure Model Architecture

### 2.1 The Deviation Axiom (Assumed Mean)
For any set of $N$ values $\{x_1, x_2, \dots, x_N\}$ with mean $A$:
$$\sum_{i=1}^N (x_i - A) = 0$$
Every unit above the average must be exactly balanced by units below the average.

### 2.2 Weighted Average & The Alligation Lever Rule
When two groups with sizes $n_1, n_2$ and averages $A_1, A_2$ (with $A_1 < A_2$) are combined, the resulting mixture average $A_m$ satisfies:
$$A_m = \frac{n_1 A_1 + n_2 A_2}{n_1 + n_2}$$
Multiplying by $(n_1 + n_2)$ and rearranging:
$$n_1 (A_m - A_1) = n_2 (A_2 - A_m)$$
$$\frac{n_1}{n_2} = \frac{A_2 - A_m}{A_m - A_1} = \frac{\text{Deviation}_2}{\text{Deviation}_1}$$
- **Physical Interpretation:** A balance beam (seesaw) where masses $n_1$ and $n_2$ are placed at positions $A_1$ and $A_2$. The fulcrum sits at $A_m$, satisfying Archimedes' law of the lever: $w_1 d_1 = w_2 d_2$.
- The mixture average $A_m$ must strictly lie strictly between the extremes: $A_1 < A_m < A_2$.

### 2.3 Group Dynamics: Inclusion, Exclusion, and Replacement
1. **Replacement:** When a person of weight $W_{\text{old}}$ is replaced by $W_{\text{new}}$ in a group of $N$ persons, altering the mean by $\Delta$:
   $$W_{\text{new}} - W_{\text{old}} = N \times \Delta$$
2. **Inclusion:** When an extra person of weight $W$ joins a group of $N$ persons with initial average $A$, resulting in new average $A'$:
   $$W = A' + N(A' - A) = A + (N+1)(A' - A)$$
3. **Exclusion:** When a person leaves a group of $N$ persons, altering the average to $A'$:
   $$W = A - (N - 1)(A' - A)$$

### 2.4 Repeated Dilution / Replacement Invariant
From a container containing $C$ units of pure liquid (e.g. Milk), $x$ units are drawn and replaced with water. If this process is repeated $n$ times:
$$\text{Remaining Pure Liquid } Q_{\text{rem}} = C \times \left(1 - \frac{x}{C}\right)^n$$
$$\text{Water Present } Q_{\text{water}} = C - Q_{\text{rem}}$$

---

## 3. Ten Reference Hand-Verified Test Cases

1. **Simple Alligation Ratio:**
   - Rice A costs ₹40/kg, Rice B costs ₹60/kg. Desired mixture price = ₹54/kg.
   - Deviation 1 (lower): $54 - 40 = 14$.
   - Deviation 2 (higher): $60 - 54 = 6$.
   - Ratio $n_1 : n_2 = 6 : 14 = 3 : 7$.
   - Check: $(3 \times 40 + 7 \times 60) / 10 = (120 + 420) / 10 = 540 / 10 = 54$. Verified.

2. **Weighted Average of Two Classes:**
   - Class 1: 30 students, average marks 70.
   - Class 2: 20 students, average marks 80.
   - Total $= (30 \times 70 + 20 \times 80) / 50 = (2100 + 1600) / 50 = 3700 / 50 = 74$. Verified.

3. **Group Replacement:**
   - 10 people. One person weighing 60 kg is replaced by a newcomer. Average weight increases by 1.5 kg.
   - $W_{\text{new}} = 60 + (10 \times 1.5) = 60 + 15 = 75$ kg. Verified.

4. **Group Inclusion (Teacher & Students):**
   - Average age of 24 students is 14 years. When teacher's age is included, average increases by 1 year.
   - New average $= 15$, new total people $= 25$.
   - Teacher's age $= 14 + (25 \times 1) = 39$ years (or $25 \times 15 - 24 \times 14 = 375 - 336 = 39$). Verified.

5. **Repeated Replacement (Milk & Water):**
   - 80 liters of pure milk. 8 liters drawn and replaced with water, repeated 2 times total ($n = 2$).
   - $Q_{\text{rem}} = 80 \times (1 - 8/80)^2 = 80 \times (0.9)^2 = 80 \times 0.81 = 64.8$ liters.
   - Water $= 80 - 64.8 = 15.2$ liters. Verified.

6. **Alligation with Profit/SP Conversion:**
   - Merchant mixes two varieties of pulses (₹15/kg and ₹20/kg) and sells mixture at ₹19.80/kg making 10% profit.
   - CP of mixture $= 19.80 / 1.10 = ₹18/kg$.
   - Ratio of mixing $= (20 - 18) : (18 - 15) = 2 : 3$. Verified.

7. **Error Correction in Averages:**
   - Average marks of 50 students was calculated as 40. Later discovered that a score of 83 was misread as 33.
   - Difference $= 83 - 33 = +50$.
   - Corrected average $= 40 + (50 / 50) = 41$. Verified.

8. **Consecutive Even Numbers Average:**
   - Average of 5 consecutive even numbers is 28.
   - Sequence: $24, 26, 28, 30, 32$. Largest number $= 32$. Verified.

9. **Bowling Average Dynamics:**
   - Bowler's average is 12.4 runs/wicket. In next match takes 5 wickets for 26 runs, improving average by 0.4 (new average 12.0).
   - Match average $= 26 / 5 = 5.2$.
   - Alligation: Initial average $= 12.4$, Match average $= 5.2$, New combined $= 12.0$.
   - Ratio $= (12.0 - 5.2) : (12.4 - 12.0) = 6.8 : 0.4 = 17 : 1$.
   - Match wickets $= 5$ (1 part). Initial wickets $= 17 \times 5 = 85$. Verified.

10. **Speed-Time Alligation:**
    - Person travels 90 km in 9 hours partly on foot at 8 km/h and partly on bicycle at 17 km/h.
    - Overall speed $= 90 / 9 = 10$ km/h.
    - Alligation on speeds gives ratio of **Times**:
      $\text{Time on foot} : \text{Time on bicycle} = (17 - 10) : (10 - 8) = 7 : 2$.
    - Total time $= 9$ hours $\implies 7$ hours on foot, $2$ hours on bicycle.
    - Distance on foot $= 7 \times 8 = 56$ km; on bicycle $= 2 \times 17 = 34$ km.
    - Total $= 56 + 34 = 90$ km. Verified.

---

## 4. Common Exam Traps & Misconceptions

| Trap Name | Erroneous Technique | Mathematical Reality | Correct Action |
| :--- | :--- | :--- | :--- |
| **Alligation on Selling Price** | Placing SP in the center of alligation when component prices are CP. | SP includes profit margin and distorts unit balance. | Convert SP to mean Cost Price ($CP = SP / (1 + P\%)$) before alligating. |
| **Speed Alligation Quantity Base** | Assuming alligation on speeds gives the ratio of distances. | Speed is $\text{km}/\text{h}$. The denominator unit is **hours** (time). | Alligation on speeds strictly yields the ratio of **times taken**, not distances! |
| **Denominator Inflation in Bowling Average** | Dividing runs conceded by matches instead of wickets. | Bowling average is defined as $\text{Runs} / \text{Wickets}$. | Weight by wickets taken. |
| **Arithmetic Mean of Averages** | Calculating average speed or combined average by simply averaging the two numbers $\frac{A_1 + A_2}{2}$. | Only valid if group sizes/times are equal. | Always weight by quantities: $A_m = \frac{n_1 A_1 + n_2 A_2}{n_1 + n_2}$. |
