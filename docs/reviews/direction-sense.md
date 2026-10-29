# Topic Review: Direction Sense & Distance (`direction-sense`)

> Status: **published**
> Date: 2026-10-29
> Target Exams: SEBI Grade A (General/IT Stream Paper 1), RBI Grade B, Banking (IBPS PO/Clerk), SSC CGL

---

## 1. Learning Objective & Prerequisites

- **Learning Objective:** The learner will track multi-segment spatial paths on a 2D Cartesian coordinate plane, correctly compute turn-relative orientations (specifically when facing South or West), calculate shortest straight-line displacement using the Pythagorean theorem, and distinguish between final facing direction and position relative to the starting origin.
- **Prerequisites:** Cartesian coordinates $(x, y)$, basic right-angle trigonometry / Pythagorean theorem ($a^2 + b^2 = c^2$), and the standard 8-point compass rose.

---

## 2. Problem Types & Input Ranges

### Problem Types Covered
1. **Turn-by-Turn Path Tracking:**
   - Walking fixed distances in cardinal directions (N, S, E, W).
   - Relative turns (Left / Right) with respect to the person's current orientation.
2. **Shortest Distance from Starting Point (Displacement):**
   - Displacement $D = \sqrt{(\Delta x)^2 + (\Delta y)^2}$.
   - Pythagorean triples ($3-4-5$, $5-12-13$, $6-8-10$, $8-15-17$, $7-24-25$).
3. **Direction with Respect to Starting Point:**
   - Octant classification based on final signs of $(\Delta x, \Delta y)$: N, S, E, W, NE, NW, SE, SW.
4. **Final Facing Direction:**
   - The orientation vector at the conclusion of the final movement or turn.
5. **Angular Turns ($45^\circ, 90^\circ, 135^\circ, 180^\circ$ Clockwise / Counter-Clockwise):**
   - Combining directional steps with angular rotations.
6. **Shadow & Sun Direction (Morning / Evening):**
   - Sunrise (East): Shadow falls to the West.
   - Sunset (West): Shadow falls to the East.
   - Facing North in morning $\implies$ Shadow is to the Left (West).

### Valid Model Input Ranges
- Path segments: array of steps `[ { dir/turn, distance } ]`.
- Segment distances $d \ge 0$.
- Empty or zero-step sequences return initial origin state $(0, 0)$.

---

## 3. Mathematical Procedures & Invariants

### Coordinate & Vector Formulations
- Standard Cartesian convention:
  - North $= +y$ ($90^\circ$)
  - East $= +x$ ($0^\circ$)
  - South $= -y$ ($270^\circ$)
  - West $= -x$ ($180^\circ$)
- Relative Turn Transformations:
  - When facing North: Left $\implies$ West ($-x$), Right $\implies$ East ($+x$)
  - When facing South: Left $\implies$ East ($+x$), Right $\implies$ West ($-x$)
  - When facing East: Left $\implies$ North ($+y$), Right $\implies$ South ($-y$)
  - When facing West: Left $\implies$ South ($-y$), Right $\implies$ North ($+y$)
- Net Displacement:
  $$D = \sqrt{x_{\text{final}}^2 + y_{\text{final}}^2}$$
- Total Distance Walked:
  $$D_{\text{total}} = \sum d_i$$

### Invariants Verified
1. **Triangle Inequality / Displacement Invariant:** Straight-line displacement is always less than or equal to total distance walked: $\sqrt{x^2 + y^2} \le \sum d_i$.
2. **Cycle Reversal Invariant:** Walking equal distance $d$ North, then East, then South, then West must return exactly to the starting point $(0, 0)$ with displacement $0$.
3. **South Left-Turn Invariant:** A person walking South and turning Left must end up facing East ($+x$).
4. **Four Consecutive Same Turns:** Four consecutive $90^\circ$ turns in the same direction preserve the original facing orientation.

---

## 4. Known Common Traps

1. **The Facing-South Left/Right Inversion Trap:**
   - *Example:* "A person walks South, then turns Left."
   - *Common Trap Choice:* Turning West (learner's personal left on the page).
   - *Why it's wrong:* The turn is relative to the person's facing direction. When facing South (down), the person's left is to the East (right side of the page).
2. **Total Distance vs. Shortest Distance Trap:**
   - *Example:* "Walks 3 km North, turns right and walks 4 km. How far is he from the start?"
   - *Common Trap Choice:* $7$ km ($3 + 4$).
   - *Why it's wrong:* The question asks for distance *from the starting point* (displacement), which is $\sqrt{3^2 + 4^2} = 5$ km.
3. **Facing Direction vs. Relative Position Trap:**
   - Confusing "Which direction is he facing?" with "In which direction is he relative to the start?".
4. **Shadow Direction Inversion:**
   - Placing morning shadows in the East instead of the West.

---

## 5. Hand-Solved Deterministic Reference Cases

These cases are embedded directly in `Model.solve()` and tested by `runSelfTests()`:

| Test ID | Path | Expected $(x, y)$ | Expected Displacement | Expected Direction from Start |
| :--- | :--- | :--- | :--- | :--- |
| `TC-01` | Walk N 3, Turn Right, Walk E 4 | $(4, 3)$ | $5.0$ km | North-East |
| `TC-02` | Walk S 12, Turn Left, Walk E 5 | $(5, -12)$ | $13.0$ km | South-East |
| `TC-03` | Walk E 10, Turn Left, Walk N 10, Turn Left, Walk W 10 | $(0, 10)$ | $10.0$ km | North |
| `TC-04` | Walk N 8, Walk S 8 | $(0, 0)$ | $0.0$ km | At Starting Point |
| `TC-05` | Walk W 6, Turn Left, Walk S 8 | $(-6, -8)$ | $10.0$ km | South-West |
| `TC-06` | Walk N 3, E 4, Trap = 7 km | Flagged as `scalar_sum_trap` | $5.0$ km | Distance vs displacement trap |
| `TC-07` | Walk S 10, Turn Left (Trap = West) | Facing = East | Flagged as `south_left_trap` | South left-turn trap |
| `TC-08` | 4-turn square: N 5, E 5, S 5, W 5 | $(0, 0)$ | $0.0$ km | At Starting Point |
| `TC-09` | Walk E 24, Turn Right, Walk S 7 | $(24, -7)$ | $25.0$ km | South-East |
| `TC-10` | Empty path `[]` | $(0, 0)$ | $0.0$ km | At Starting Point |

---

## 6. Visualization Design & Value

- **SVG Coordinate Grid & Dynamic Path Tracer:**
  - Labeled axes ($X, Y$) with origin mark $(0, 0)$.
  - 8-point compass rose in the corner (N, S, E, W, NE, NW, SE, SW).
  - Polyline connecting successive path milestones with numbered step badges.
  - Dashed hypotenuse vector showing straight-line displacement from origin to final point.
  - Directional arrowhead showing the final facing orientation.

---

## 7. Pilot Evaluation Protocol (Retention & Transfer)

To verify educational efficacy (per `PROJECT.md` Section 1.2):
1. **Pre-test (Baseline):** 3 unseen direction questions (one multi-turn path, one facing South left turn, one shadow problem). Record accuracy and time.
2. **Interactive Intervention:** Learner works through `topics/direction-sense.html`: creates paths, observes the coordinate vector and compass rose, and tests predict-first mode.
3. **Immediate Post-test:** 5 varied questions under "Independent Practice" (no hints mode). Target: >80% accuracy.
4. **Retention Test:** 5 questions administered 5–7 days later.
5. **Logged Metric:** Accuracy change, elimination of the "South Left Turn" trap, and time to solve.
