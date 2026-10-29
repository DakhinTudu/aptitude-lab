# Topic Review: Permutations, Combinations & Counting Principles

## 1. Domain & Exam Requirements
- **Primary Exam Targets:** SEBI Grade A (General & IT Streams), Banking (SBI PO, IBPS PO, RBI Grade B Phase 1), SSC CGL Tier 1/2.
- **Core Skill Tested:** Fundamental Counting Principles (Multiplicative vs. Additive rules), Order-dependence ($^n P_r$) vs. Group-selection ($^n C_r$), Repeated Items Multiset Factorials, Block/String Method, Gap Method, Restricted Digit Formation, and Geometric Combinatorics (handshakes, diagonals, collinear points).

---

## 2. Mathematical Foundations & Invariants

### A. Fundamental Counting Principles
1. **Multiplication Principle (AND):**
   - If event $A$ occurs in $m$ distinct ways, and following $A$, event $B$ occurs in $n$ independent ways, both events occur in sequence in:
     $$N_{\text{total}} = m \times n$$
2. **Addition Principle (OR):**
   - If event $A$ can occur in $m$ ways and mutually exclusive event $B$ can occur in $n$ ways, either $A$ or $B$ occurs in:
     $$N_{\text{total}} = m + n$$

### B. Permutations (Arrangements — Order Matters)
1. **Linear Arrangement of $r$ from $n$ distinct objects:**
   $$^n P_r = \frac{n!}{(n - r)!} = n(n - 1)(n - 2)\dots(n - r + 1)$$
2. **Permutation with Indistinguishable (Repeated) Elements:**
   - In a multiset of $n$ elements with duplicates $p_1!, p_2!, \dots, p_k!$:
     $$\text{Permutations} = \frac{n!}{p_1! \cdot p_2! \cdots p_k!}$$
3. **Circular Permutations:**
   - $n$ distinct persons around a circular table: $(n - 1)!$ (breaks rotational symmetry by fixing 1 person).
   - Necklaces, garlands, key rings (clockwise and anti-clockwise indistinguishable by flipping over):
     $$\text{Arrangements} = \frac{(n - 1)!}{2}$$

### C. Combinations (Selections — Order Does Not Matter)
1. **Standard Unordered Selection:**
   $$^n C_r = \frac{n!}{r!(n - r)!} = \frac{^n P_r}{r!}$$
2. **Key Invariants & Symmetries:**
   - Complementary Symmetry: $^n C_r = ^n C_{n-r}$
   - Pascal's Identity: $^n C_r + ^n C_{r-1} = ^{n+1} C_r$
   - Total Subsets: $\sum_{r=0}^n {^n C_r} = 2^n$
   - "At least one item chosen": $2^n - 1$

### D. Canonical Exam Methodologies
1. **Block / String Method ("Always Together"):**
   - Tie the constrained items together into a single composite "super-item".
   - Total ways = $(\text{Remaining items} + 1)! \times (\text{Internal permutations of the block})!$
2. **Gap Method ("Never Together"):**
   - Arrange the unconstrained items first in $k!$ ways, creating $k + 1$ spaces/gaps (including ends).
   - Select and arrange the $m$ constrained items into the $k + 1$ gaps in $^{k+1} P_m$ ways.
3. **Geometric Combinatorics:**
   - Handshakes among $n$ people: $^n C_2 = \frac{n(n-1)}{2}$.
   - Diagonals of an $n$-sided polygon: $^n C_2 - n = \frac{n(n-3)}{2}$.
   - Triangles from $n$ points with $m$ collinear: $^n C_3 - ^m C_3$.

---

## 3. Classic Traps & Pedagogical Guardrails
1. **Permutation vs. Combination Confusion:**
   - *Trap:* Using $^n P_r$ for committee selection or handshake count.
   - *Truth:* A committee of (Alice, Bob) is identical to (Bob, Alice); order does not matter $\implies ^n C_r$.
2. **The "Never Together" Subtraction Fallacy:**
   - *Trap:* Thinking "No two vowels together" equals "Total arrangements minus all vowels together".
   - *Truth:* "All vowels together" is only a small subset of disallowed states (e.g. 2 vowels together and 1 separate is also disallowed). "Never together" strictly requires the **Gap Method**.
3. **Leading Zero Trap in Digit Formation:**
   - *Trap:* Arranging digits $\{0, 2, 4, 6, 8\}$ into 4-digit numbers using $^5 P_4$.
   - *Truth:* The thousands place cannot be $0$ ($4$ choices); remaining 3 places take $^4 P_3$. Total $= 4 \times 24 = 96$.
4. **Circular Garland Division Trap:**
   - *Trap:* Using $(n-1)!$ for beads on a ring.
   - *Truth:* A ring can be flipped upside down, making clockwise and anti-clockwise rotations identical $\implies \frac{(n-1)!}{2}$.
