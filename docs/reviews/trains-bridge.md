# Topic Review: Trains, Bridges & Relative Speed (`trains-bridge`)

> Status: **published**
> Date: 2026-10-29
> Target Exams: SEBI Grade A (General/IT Stream Paper 1), RBI Grade B, Banking (IBPS PO/Clerk), SSC CGL

---

## 1. Learning Objective & Prerequisites

- **Learning Objective:** The learner will master time, speed, and distance relationships specific to trains, understand why clearance distance requires adding train length to stationary/moving obstacles ($D = L_{\text{train}} + L_{\text{obstacle}}$), apply unit conversions ($\text{km/h} \leftrightarrow \text{m/s}$) reliably, and solve relative speed problems (same vs. opposite directions and sitting passengers) without formula confusion.
- **Prerequisites:** Speed-distance-time relation ($D = S \times T$), fraction simplification, and linear equation substitution.

---

## 2. Problem Types & Input Ranges

### Problem Types Covered
1. **Train Crossing an Object of Negligible Length (Pole, Tree, Person):**
   - Distance $D = L_{\text{train}}$.
   - Time $T = L_{\text{train}} / S$.
2. **Train Crossing an Object of Known Length (Bridge, Platform, Tunnel):**
   - Distance $D = L_{\text{train}} + L_{\text{bridge}}$.
   - Time $T = (L_{\text{train}} + L_{\text{bridge}}) / S$.
3. **Unit Conversion ($\text{km/h} \leftrightarrow \text{m/s}$):**
   - $S_{\text{m/s}} = S_{\text{km/h}} \times \frac{5}{18}$.
   - $S_{\text{km/h}} = S_{\text{m/s}} \times \frac{18}{5}$.
4. **Two Trains Crossing in Opposite Directions:**
   - Relative Speed $S_{\text{rel}} = S_1 + S_2$.
   - Distance $D = L_1 + L_2$.
   - Time $T = (L_1 + L_2) / (S_1 + S_2)$.
5. **Two Trains Crossing in Same Direction (Overtaking):**
   - Relative Speed $S_{\text{rel}} = |S_1 - S_2|$.
   - Distance $D = L_1 + L_2$.
   - Time $T = (L_1 + L_2) / |S_1 - S_2|$.
6. **Train Passing a Passenger in Another Moving Train:**
   - The passenger has 0 physical length.
   - Distance $D = L_{\text{passing train}}$ (the passenger's train length is completely ignored!).
   - Relative speed is based on both train speeds.
7. **Two-Stationary Crossing (Finding Speed / Train Length):**
   - Crossing pole in $t_1$ and platform of length $P$ in $t_2 \implies S = P / (t_2 - t_1)$.

### Valid Model Input Ranges
- Train length $L_{\text{train}} > 0$ (typically $50 \le L \le 1000$ meters).
- Bridge length $L_{\text{bridge}} \ge 0$ ($0$ represents a pole/person).
- Speed $S > 0$ (typically $18 \le S \le 200$ km/h).
- In same-direction overtaking, speeds must not be equal ($S_1 \neq S_2$); equal speeds return `valid: false` or infinite time indicator.

---

## 3. Mathematical Procedures & Invariants

### Mathematical Formulations
- **Conversion Factor:** $1\text{ km/h} = \frac{1000\text{ m}}{3600\text{ s}} = \frac{5}{18}\text{ m/s}$.
- **Clearance Invariant:**
  $$\text{Clearance Distance} = L_{\text{train}} + L_{\text{bridge}}$$
- **Relative Speed Rules:**
  - Opposite Directions: $S_{\text{rel}} = S_1 + S_2$
  - Same Direction: $S_{\text{rel}} = |S_1 - S_2|$

### Invariants Verified
1. **Clearance Distance Invariant:** Total distance travelled by the front of the train from entering to tail exiting must equal $L_{\text{train}} + L_{\text{bridge}}$.
2. **Speed Monotonicity:** For fixed lengths, doubling speed strictly halves the crossing time.
3. **Opposite vs Same Direction Invariant:** For two moving trains with positive speeds, opposite direction crossing time is strictly faster than same direction crossing time ($T_{\text{opp}} < T_{\text{same}}$).
4. **Pole as 0-Length Bridge:** When $L_{\text{bridge}} = 0$, the formula degenerates smoothly to $L_{\text{train}} / S$.

---

## 4. Known Common Traps

1. **The Bridge-Only Distance Trap:**
   - *Example:* "A 200m train at 72 km/h crosses a 300m bridge. Time taken?"
   - *Common Trap Choice:* $15$ seconds ($300 / 20$).
   - *Why it's wrong:* The learner used only the bridge length ($300$m), forgetting that the tail must travel another $200$m to clear the bridge. Correct distance is $200 + 300 = 500$m $\implies 25$ seconds.
2. **The Unit Conversion Omission Trap:**
   - *Common Trap Choice:* Dividing meters directly by km/h (e.g. $500 / 72 = 6.94$ s).
   - *Why it's wrong:* Incompatible units! $72$ km/h must be multiplied by $5/18$ to get $20$ m/s before dividing.
3. **The Passenger in Another Train Trap:**
   - Adding both train lengths when a train passes a *person* sitting in another train. The person has no length, so only the passing train's length is counted!
4. **Relative Speed Direction Inversion:**
   - Subtracting speeds for opposite direction or adding speeds for same direction.

---

## 5. Hand-Solved Deterministic Reference Cases

These cases are embedded directly in `Model.solve()` and tested by `runSelfTests()`:

| Test ID | Input | Expected Output | Tested Principle |
| :--- | :--- | :--- | :--- |
| `TC-01` | $L_t = 200, L_b = 300, S = 72$ km/h | $S_{\text{m/s}} = 20, D = 500, T = 25.0$ s | Standard bridge clearance. |
| `TC-02` | $L_t = 150, L_b = 0, S = 54$ km/h | $S_{\text{m/s}} = 15, D = 150, T = 10.0$ s | Pole / person (0 length obstacle). |
| `TC-03` | $L_t = 120, L_b = 280, S = 36$ km/h | $S_{\text{m/s}} = 10, D = 400, T = 40.0$ s | Clean integer speed conversion. |
| `TC-04` | $L_1 = 120, L_2 = 180, S_1 = 45, S_2 = 27$ (Opp) | $S_{\text{rel}} = 72 \implies 20$ m/s, $D = 300, T = 15.0$ s | Two trains, opposite direction. |
| `TC-05` | $L_1 = 100, L_2 = 150, S_1 = 72, S_2 = 54$ (Same) | $S_{\text{rel}} = 18 \implies 5$ m/s, $D = 250, T = 50.0$ s | Two trains, same direction. |
| `TC-06` | $L_t = 200, L_b = 300, S = 72$, Trap = 15 | Flagged as `bridge_only_trap` | Forgetting train length trap. |
| `TC-07` | $L_t = 200, L_b = 300, S = 72$, Trap = 6.94 | Flagged as `no_conversion_trap` | Omission of 5/18 conversion trap. |
| `TC-08` | $L_t = 0, S = 72$ | `valid: false` | Zero train length rejection. |
| `TC-09` | $S \le 0$ | `valid: false` | Zero or negative speed rejection. |
| `TC-10` | $L_{\text{pass}} = 160$, Person in train at 36 km/h (Opp), $S_{\text{pass}} = 54$ km/h | $S_{\text{rel}} = 90 \implies 25$ m/s, $D = 160, T = 6.4$ s | Passenger in moving train (0-length person). |

---

## 6. Visualization Design & Value

- **SVG Dynamic Track & Clearance Model:**
  - Track line with distance ruler.
  - Bridge structure rendered with clear span demarcations ($L_{\text{bridge}}$).
  - Train body with distinct engine, carriages, and red tail lamp ($L_{\text{train}}$).
  - Clearance Distance Vector showing the exact traversal path required ($L_{\text{train}} + L_{\text{bridge}}$).
  - Visual position indicator showing why the train is NOT clear when the engine reaches the end of the bridge.

---

## 7. Pilot Evaluation Protocol (Retention & Transfer)

To verify educational efficacy (per `PROJECT.md` Section 1.2):
1. **Pre-test (Baseline):** 3 unseen train questions (one bridge crossing, one relative speed opposite, one passenger in moving train). Record baseline accuracy and time.
2. **Interactive Intervention:** Learner works through `topics/trains-bridge.html`: adjusts train & bridge lengths, tests predict-first mode, observes clearance vector and unit conversions.
3. **Immediate Post-test:** 5 varied questions under "Independent Practice" (no hints mode). Target: >80% accuracy.
4. **Retention Test:** 5 questions administered 5–7 days later.
5. **Logged Metric:** Accuracy change, elimination of the "Bridge-Only" trap and "Unit Conversion" omission, and time per question.
