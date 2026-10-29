# Topic Review: Blood Relations & Family Tree (`blood-relations`)

> Status: **published**
> Date: 2026-10-29
> Target Exams: SEBI Grade A (General/IT Stream Paper 1), RBI Grade B, Banking (IBPS PO/Clerk), SSC CGL

---

## 1. Learning Objective & Prerequisites

- **Learning Objective:** The learner will construct multi-generational family trees, deduce unambiguous relationships using node-edge graph traversal, avoid assuming genders from names or sibling links, parse coded expressions (e.g. $A + B \times C$), and distinguish definite relations from "Cannot be determined" (CBD).
- **Prerequisites:** Basic logical deduction, set relations, and standard family tree genealogical conventions.

---

## 2. Problem Types & Input Ranges

### Problem Types Covered
1. **Pointing to a Photograph / Conversation Riddles:**
   - Statements like *"His mother is the only daughter of my father."*
   - Parsing possessives from the inside out.
2. **Coded Blood Relations:**
   - Symbols representing relations (e.g. $A + B \implies A$ is father of $B$, $A - B \implies A$ is sister of $B$).
   - Evaluating expressions like $P \times Q + R - S$.
3. **Multi-Member Family Puzzle:**
   - 6 to 8 individuals across 3 generations with married couples, brothers, sisters, and children.
4. **Gender-Undetermined Traps:**
   - When a person's gender is unknown, relations like "Brother" vs. "Sister" or "Son" vs. "Daughter" cannot be uniquely determined.
5. **Maternal vs. Paternal Distinctions:**
   - Paternal uncle/aunt (father's siblings) vs. maternal uncle/aunt (mother's siblings).
6. **In-Law Relationships:**
   - Brother-in-law (spouse's brother OR sister's husband).
   - Daughter-in-law (son's wife), Son-in-law (daughter's husband).

### Valid Model Input Ranges
- Family members: 2 to 12 persons.
- Generations: up to 4 generational levels (Great-grandparent to Grandchild).
- Genders: strictly `'M'` (Male), `'F'` (Female), or `'U'` (Undetermined/Unknown). No inferred genders without explicit clues.

---

## 3. Mathematical & Graph Procedures

### Standard Notation
- Male: $[+]$ (Square / Blue)
- Female: $[-]$ (Circle / Pink)
- Undetermined: $[?]$ (Dashed Box / Slate)
- Married Couple: Horizontal double line ($=$)
- Siblings: Horizontal single line ($-$)
- Parent-Child: Vertical generation line ($\mid$)

### Deduction Invariants Verified
1. **Gender Invariance Rule:** If person $X$ is stated to be the brother of $Y$, $X$'s gender is definitely Male ($[+]$), but $Y$'s gender remains Undetermined ($[?]$) unless independently specified.
2. **"Only Child" Identity:**
   - If a Woman says *"The only daughter of my mother"*, she refers to **herself**.
   - If a Man says *"The only daughter of my mother"*, he refers to **his sister**.
   - If a Man says *"The only son of my father"*, he refers to **himself**.
3. **Symmetric Relations:** Sibling and Spouse relations are symmetric, but directed generational relations (Parent $\to$ Child) are anti-symmetric.
4. **Cannot Be Determined (CBD) Invariant:** If target gender is `'U'`, queries asking for gendered titles (Son vs. Daughter, Brother vs. Sister, Uncle vs. Aunt) must return CBD or dual title.

---

## 4. Known Common Traps

1. **The Sibling Gender Assumption Trap:**
   - *Example:* "A is the brother of B. How is B related to A?"
   - *Common Trap Choice:* "Brother".
   - *Why it's wrong:* B can be A's brother OR A's sister! B's gender was never stated. The answer is **Cannot be determined** (or Brother/Sister).
2. **The Speaker Gender Trap in "Only Daughter":**
   - Assuming the speaker is female when the problem states a man is speaking, or vice-versa.
3. **Relation Direction Inversion:**
   - Answering how B is related to A when asked "How is A related to B?".
4. **Nephew vs. Niece Gender Trap:**
   - Selecting Nephew when the child's gender is unknown.

---

## 5. Hand-Solved Deterministic Reference Cases

These cases are embedded directly in `Model.solve()` and tested by `runSelfTests()`:

| Test ID | Input Clues / Expression | Query | Expected Answer | Tested Principle |
| :--- | :--- | :--- | :--- | :--- |
| `TC-01` | A is father of B; B is brother of C | A to C | `Father` | Paternal propagation. |
| `TC-02` | A is father of B; B is brother of C | C to A | `Cannot be determined` (Son or Daughter) | Target gender undetermined. |
| `TC-03` | Woman: "His mother is the only daughter of my mother" | Woman to Boy | `Mother` | "Only daughter of my mother" identity. |
| `TC-04` | Man: "His mother is the only daughter of my mother" | Man to Boy | `Maternal Uncle` | Man speaking "only daughter" = sister. |
| `TC-05` | Coded: $A + B$ (father), $B - C$ (sister) | A to C | `Father` | Coded relation chain. |
| `TC-06` | A is brother of B; Trap = Brother for B to A | B to A | Flagged as `gender_assumption_trap` | Sibling gender assumption trap. |
| `TC-07` | P is married to Q; Q is mother of R | P to R | `Father` | Spouse of mother = father. |
| `TC-08` | M is brother of N; N is sister of O; O is brother of P | M to P | `Brother` | Extended sibling chain (M is male). |
| `TC-09` | A is father of B; B is mother of C | A to C | `Maternal Grandfather` | Grandparent maternal distinction. |
| `TC-10` | Empty graph | Query | `valid: false` | Invalid query on empty members. |

---

## 6. Visualization Design & Value

- **SVG Generational Family Tree Graph:**
  - Distinct vertical generational tiers (Gen 1: Parents, Gen 2: Children).
  - Explicit gender styling: Blue rounded square for Male, Purple circle for Female, Slate dashed box for Undetermined.
  - Double horizontal bar for marriages ($=$) and single bar for siblings ($-$).
  - Clear highlighting of the query subject and target with an animated connection path.

---

## 7. Pilot Evaluation Protocol (Retention & Transfer)

To verify educational efficacy (per `PROJECT.md` Section 1.2):
1. **Pre-test (Baseline):** 3 unseen blood relation questions (one pointing riddle, one coded expression, one gender-undetermined trap). Record accuracy and solving time.
2. **Interactive Intervention:** Learner works through `topics/blood-relations.html`: explores family trees, tests predict-first mode, and observes gender deduction traces.
3. **Immediate Post-test:** 5 varied questions under "Independent Practice" (no hints mode). Target: >80% accuracy.
4. **Retention Test:** 5 questions administered 5–7 days later.
5. **Logged Metric:** Accuracy change, elimination of the "Gender Assumption" trap, and time to parse coded relations.
