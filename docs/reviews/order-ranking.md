# Topic Review & Curriculum Specification: Order & Ranking

**Topic ID:** `order-ranking`  
**Category:** Logical & Analytical Reasoning  
**Target Exams:** SEBI Grade A (General & IT Stream), Banking (SBI PO/Clerk, IBPS PO/Clerk, RBI Assistant), SSC CGL / CHSL  
**Status:** In Development Review  
**Date:** 2026-10-29  

---

## 1. Syllabus Scope & Exam Weightage

Order and ranking questions appear consistently across all banking and regulatory exams:
- **Banking Prelims (SBI / IBPS / RRB):** 2–3 questions per shift (standalone or mini-puzzles with 5–7 persons ranked by weight/marks/height).
- **SEBI Grade A Phase 1 (Paper 1):** 2 questions typically testing position interchange or overlapping minimum count.
- **SSC CGL / CHSL (Tier 1):** 1–2 direct formula-based questions ($N = L + R - 1$ or middle-person count).

---

## 2. Core Mathematical Formulations & Axioms

### 2.1 Single Person from Both Ends
If a single person $P$ occupies rank $L$ from the left end and rank $R$ from the right end of a row:
$$\text{Total Persons } N = L + R - 1$$
$$\text{Rank from Right } R = N - L + 1$$
$$\text{Rank from Left } L = N - R + 1$$
*Axiom:* The $-1$ compensates for counting person $P$ twice.

### 2.2 Two Persons & Between-Count ($M$)

#### Case A: Non-Overlapping (Simple Case)
When $N > L_A + R_B$, persons $A$ and $B$ do not cross each other:
$$\text{Total } N = L_A + R_B + M$$
$$\text{Persons Between } M = N - (L_A + R_B)$$

#### Case B: Overlapping (Cross-Over Case)
When $A$ (counted from Left) and $B$ (counted from Right) cross each other:
$$\text{Total } N = L_A + R_B - (M + 2)$$
$$\text{Persons Between } M = (L_A + R_B) - N - 2$$
*Axiom:* In the overlapping case, $A$, $B$, and the $M$ people between them are counted twice. The "$-2$" subtracts $A$ and $B$ themselves.
*Feasibility Condition for Overlap:* $M \le \min(L_A, R_B) - 2$. If $M > \min(L_A, R_B) - 2$, overlap is physically impossible.

#### Case C: Maximum vs. Minimum Possible Total
When $L_A, R_B,$ and $M$ are given, but total $N$ is unknown:
- **Maximum Total ($N_{\max}$):** Simple case $\implies N_{\max} = L_A + R_B + M$
- **Minimum Total ($N_{\min}$):** Overlapping case $\implies N_{\min} = L_A + R_B - M - 2$ (if feasible)

### 2.3 Position Interchange Dynamics
Person $A$ is $L_1$ from left, person $B$ is $R_1$ from right.
When $A$ and $B$ interchange their seats:
- $A$ occupies $B$'s original seat and is now $L_2$ from left.
- That physical seat is known from both ends: $L_2$ from left and $R_1$ from right!
$$\text{Total Persons } N = L_2 + R_1 - 1$$
$$\text{Persons Between } A \text{ and } B: M = |L_2 - L_1| - 1$$
$$\text{New Rank of } B \text{ from Right } R_2 = R_1 + (L_2 - L_1)$$

### 2.4 Relative Shift within Row
If person $A$ at rank $L$ shifts $k$ places toward the left:
$$\text{New } L' = L - k$$
$$\text{New } R' = R + k$$
The sum $L' + R' = L + R = N + 1$ remains strictly invariant.

---

## 3. Ten Reference Hand-Verified Test Cases

1. **Single Person Standard:**
   - Suresh is 17th from left and 28th from right.
   - $N = 17 + 28 - 1 = 44$. Hand check: $16 + 1 + 27 = 44$. Verified.

2. **Rank from Other End:**
   - In a class of 45 students, Rita ranks 15th from the top.
   - Rank from bottom $= 45 - 15 + 1 = 31$. Verified.

3. **Simple Between Count:**
   - Row of 50 students. Amit is 12th from left, Bina is 18th from right.
   - $12 + 18 = 30 < 50 \implies$ Non-overlapping.
   - $M = 50 - 30 = 20$. Verified.

4. **Overlapping Between Count:**
   - Row of 35 students. Vikas is 22nd from left, Manoj is 19th from right.
   - $22 + 19 = 41 > 35 \implies$ Overlapping.
   - $M = (22 + 19) - 35 - 2 = 41 - 37 = 4$. Verified.

5. **Minimum Total Calculation:**
   - In a row, Kamal is 12th from left and Rohit is 15th from right. There are 5 persons between them.
   - $N_{\min} = 12 + 15 - 5 - 2 = 20$.
   - Feasibility check: $5 \le \min(12, 15) - 2 = 10$ (valid). Verified.

6. **Maximum Total Calculation:**
   - Same parameters: $L = 12, R = 15, M = 5$.
   - $N_{\max} = 12 + 15 + 5 = 32$. Verified.

7. **Position Interchange Total:**
   - Deepak is 9th from left, Vijay is 13th from right.
   - Upon interchanging, Deepak becomes 18th from left.
   - Total $N = 18 + 13 - 1 = 30$. Verified.

8. **Position Interchange New Position:**
   - Same scenario: Deepak shifted from 9th to 18th ($+9$ places).
   - Vijay's new position from right $= 13 + 9 = 22$nd from right.
   - Check: $N = 9 (\text{Deepak's old left}) + 22 (\text{Vijay's new right}) - 1 = 30$. Verified.

9. **Shift Left / Right:**
   - In a row of 30 girls, when Radha was shifted 4 places to the left, she became 10th from the left.
   - Original rank from left $= 10 + 4 = 14$th.
   - Original rank from right $= 30 - 14 + 1 = 17$th. Verified.

10. **Exact Middle Person:**
    - In a row of 40 boys, A is 10th from left, B is 15th from right.
    - C sits exactly halfway between A and B.
    - Non-overlapping: $M = 40 - (10 + 15) = 15$.
    - C is the 8th person among the 15 middle persons.
    - C's rank from left $= 10 + 8 = 18$th.
    - C's rank from right $= 15 + 8 = 23$rd.
    - Total check: $18 + 23 - 1 = 40$. Verified.

---

## 4. Common Exam Traps & Misconceptions

| Trap Name | Erroneous Method | Mathematical Reality | Correct Rule |
| :--- | :--- | :--- | :--- |
| **Off-by-One on Rank from End** | Calculating $R = N - L$. | Person $P$ is omitted from their own count. | Always add 1: $R = N - L + 1$. |
| **Overlap Count Omission (-2)** | Using $M = (L + R) - N$. | Forgets that the 2 reference persons themselves are double-counted. | Always subtract 2: $M = L + R - N - 2$. |
| **Blind Minimum Total** | Computing $N_{\min} = L + R - M - 2$ when $M \ge \min(L, R) - 1$. | You cannot have more people between two people than exist before the front person. | Check $M \le \min(L, R) - 2$; if violated, overlapping is physically impossible. |
| **Swap Shift Direction** | Subtracting the swap shift instead of adding when moving further down the row. | If person A's rank increases, the distance between them is positive, so person B's rank also increases by the exact same amount. | $\Delta = |L_2 - L_1|$; $R_2 = R_1 + \Delta$. |
