# Topic Review: Linear & Circular Seating Arrangements

## 1. Domain & Exam Requirements
- **Primary Exam Targets:** SEBI Grade A (General & IT Streams), Banking (IBPS PO/Clerk, SBI PO, RBI Grade B Phase 1), SSC CGL Tier 1/2.
- **Core Skill Tested:** Constraint Satisfaction Logic, Spatial Coordinate Invariance, Orientation Disambiguation (Facing Centre vs. Facing Outward, Facing North vs. Facing South), Circular Modulo Arithmetic, and Branch-and-Prune Elimination.

---

## 2. Mathematical & Spatial Invariants

### A. Linear Seating Geometry
1. **Indexation & Distance:**
   - In a row of $N$ seats indexed $0, 1, \dots, N-1$:
   - If facing **North**: Left = decreasing index (towards index $0$); Right = increasing index (towards index $N-1$).
   - If facing **South**: Left = increasing index (towards index $N-1$); Right = decreasing index (towards index $0$).
   - "$k$-th to the left/right of $X$": Position index shift is exactly $\pm k$. The number of persons seated *between* them is exactly $k - 1$.
   - Extreme ends: Position $0$ (extreme left when facing North) and Position $N-1$ (extreme right when facing North).

2. **Parallel Rows (Dual Linear Arrangement):**
   - Row 1 faces South (seats $A_0, \dots, A_{N-1}$ from left to right of observer).
   - Row 2 faces North (seats $B_0, \dots, B_{N-1}$ directly opposite $A_0, \dots, A_{N-1}$).
   - A person in Row 1 facing South has their **right** pointing towards observer's left (index $0$), and **left** pointing towards observer's right (index $N-1$).

### B. Circular Seating Geometry
1. **Equidistant Circular Layout:**
   - $N$ seats positioned at angles $\theta_i = \frac{2\pi \cdot i}{N}$ around a circle of radius $R$.
2. **Directional Orientations:**
   - **Facing Inward (Centre):**
     - Moving **Right** = Anti-Clockwise (Counter-Clockwise, CCW) $\implies \text{Index}_{\text{right } k} = (i - k + N) \pmod N$ (or CCW depending on angular convention; consistently: observer looking from chair towards center turns left/right).
     - Moving **Left** = Clockwise (CW).
   - **Facing Outward:**
     - Moving **Right** = Clockwise (CW).
     - Moving **Left** = Anti-Clockwise (CCW).
3. **Opposite Pairs:**
   - When $N$ is even (e.g. $N = 8$), every seat $i$ has an exact diametrically opposite seat:
     $$\text{Opposite}(i) = \left(i + \frac{N}{2}\right) \pmod N$$
   - When $N$ is odd, no two people sit directly opposite to each other.
4. **Immediate Neighbors:**
   - Seats $(i - 1 + N) \pmod N$ and $(i + 1) \pmod N$.

---

## 3. Systematic 4-Stage Deduction Algorithm (Human Solver Flow)
1. **Anchor Identification:**
   - Start with a definite positional clue (e.g., "A sits 3rd to the left of B", "X sits at an extreme end", "P faces the center and sits opposite Q").
   - In circular symmetry, placing the first person (e.g. B at seat 0) breaks rotational symmetry without loss of generality.
2. **Branching (Case 1 vs. Case 2):**
   - If a clue has at most 2 possibilities (e.g., "C sits either immediate left or immediate right of D"), spin off two lightweight candidate branches.
3. **Negative & Exclusion Propagation:**
   - Apply negative constraints ("F does not sit next to A", "P does not face outward") to immediately invalidate inconsistent branches.
4. **Final Closure:**
   - Slot the remaining individuals into the remaining unfilled positions. Verify all $M$ clues against the completed arrangement.

---

## 4. Classic Traps & Pedagogical Guardrails
1. **The Between-Count Fallacy:**
   - *Trap:* Thinking "P sits 3rd to the right of Q" means 3 people sit between P and Q.
   - *Truth:* Exactly $3 - 1 = 2$ people sit between P and Q.
2. **The Outward Clockwise Inversion Trap:**
   - *Trap:* Treating clockwise as "left" even when a person is facing outward.
   - *Truth:* When facing the center, clockwise is Left. When facing outward, clockwise is Right.
3. **Extreme End Ambiguity:**
   - *Trap:* Assuming "sits at an extreme end" means the left end.
   - *Truth:* It could be either the left end ($0$) or the right end ($N-1$).
4. **Relative vs Absolute Directions in Linear Rows:**
   - *Trap:* Mixing up observer's right with the subject's right when facing South.
