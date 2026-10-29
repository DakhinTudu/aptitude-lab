# Topic Review & Curriculum Specification: Ratio, Proportion & Variation

**Topic ID:** `ratio-proportion`  
**Category:** Quantitative Aptitude  
**Target Exams:** SEBI Grade A (General & IT Stream), Banking (SBI PO, IBPS PO, RBI Grade B), SSC CGL  
**Status:** In Development Review  
**Date:** 2026-10-29  

---

## 1. Syllabus Scope & Exam Weightage

Ratios and proportions form the foundational grammar of quantitative reasoning:
- **Banking (SBI / IBPS PO / Clerk / RBI):** 2–3 direct questions (ratios, mixtures, ages, partnership shares), and powers 80% of Data Interpretation table/chart questions.
- **SEBI Grade A Phase 1:** 2–3 questions testing compound ratios, proportional dividing, and coin/denomination combinations.
- **SSC CGL / CHSL:** 3–4 questions including mean/third/fourth proportional, direct/inverse variation, and equal additions to terms.

---

## 2. Core Concepts & Mathematical Models

### 2.1 Part-to-Part vs. Part-to-Whole
- **Part-to-Part:** If Milk to Water is $3 : 5$, the ratio of components is $3 : 5$.
- **Part-to-Whole:** 
  $$\text{Fraction of Milk} = \frac{3}{3 + 5} = \frac{3}{8} = 37.5\%$$
  $$\text{Fraction of Water} = \frac{5}{3 + 5} = \frac{5}{8} = 62.5\%$$
- **The Classic Denominator Trap:** Misinterpreting $3:5$ as $\frac{3}{5}$ (60%) Milk.

### 2.2 Unifying Chained Ratios ($A:B$ and $B:C \implies A:B:C$)
Given $A:B = a:b$ and $B:C = c:d$:
- Find the LCM of the common entity $B$: $L = \text{lcm}(b, c)$.
- Scale $A:B$ by $\frac{L}{b}$ and $B:C$ by $\frac{L}{c}$.
- Equivalent matrix cross-multiplication:
  $$A : B : C = (a \times c) : (b \times c) : (b \times d)$$
- For four variables ($A:B, B:C, C:D$):
  $$A:B:C:D = (a \cdot c \cdot e) : (b \cdot c \cdot e) : (b \cdot d \cdot e) : (b \cdot d \cdot f)$$

### 2.3 Proportional Division & Unit-Scale Invariant
To divide quantity $T$ among entities in ratio $a : b : c$:
$$\text{Sum of Ratio Units} = S = a + b + c$$
$$\text{Value of 1 Unit} = u = \frac{T}{S}$$
$$\text{Entity Shares} = a \cdot u,\; b \cdot u,\; c \cdot u$$
- **Conservation of Total:** $\sum (\text{shares}) = T$ strictly.

### 2.4 Classical Proportion Types
Four quantities $a, b, c, d$ are in proportion ($a:b :: c:d$) if:
$$\frac{a}{b} = \frac{c}{d} \iff a \cdot d = b \cdot c$$
1. **Mean Proportional ($x$) of $a$ and $b$:**
   $$\frac{a}{x} = \frac{x}{b} \implies x^2 = ab \implies x = \sqrt{ab}$$
2. **Third Proportional ($x$) of $a$ and $b$:**
   $$\frac{a}{b} = \frac{b}{x} \implies x = \frac{b^2}{a}$$
3. **Fourth Proportional ($x$) of $a, b, c$:**
   $$\frac{a}{b} = \frac{c}{x} \implies x = \frac{bc}{a}$$

### 2.5 Cross-Product Method for Ratio Transitions
If two numbers are initially in ratio $a : b$, and quantities $p$ and $q$ are added to them such that the new ratio becomes $c : d$:
$$\frac{ax + p}{bx + q} = \frac{c}{d} \implies (ad - bc)x = cq - dp \implies x = \frac{cq - dp}{ad - bc}$$

### 2.6 Denomination & Coin Ratio Invariant
If coins of denominations $v_1, v_2, v_3$ (e.g. ₹1, 50p, 25p) are in count ratio $c_1 : c_2 : c_3$, the value contributed by each is:
$$\text{Value Ratio} = (c_1 \cdot v_1) : (c_2 \cdot v_2) : (c_3 \cdot v_3)$$

---

## 3. Ten Reference Hand-Verified Test Cases

1. **Unifying $A:B$ and $B:C$:**
   - $A:B = 2:3$, $B:C = 4:5$.
   - $A:B:C = (2 \times 4) : (3 \times 4) : (3 \times 5) = 8 : 12 : 15$.
   - Hand check: $8/12 = 2/3$, $12/15 = 4/5$. Verified.

2. **Unifying $A:B, B:C, C:D$:**
   - $A:B = 1:2, B:C = 3:4, C:D = 5:6$.
   - $A:B:C:D = (1 \times 3 \times 5) : (2 \times 3 \times 5) : (2 \times 4 \times 5) : (2 \times 4 \times 6) = 15 : 30 : 40 : 48$.
   - Hand check: $15:30 = 1:2$, $30:40 = 3:4$, $40:48 = 5:6$. Verified.

3. **Proportional Division of ₹1200 in $2:3:5$:**
   - Sum of units $= 2 + 3 + 5 = 10$.
   - Unit value $= 1200 / 10 = 120$.
   - Shares: $240, 360, 600$.
   - Sum check: $240 + 360 + 600 = 1200$. Verified.

4. **Mean Proportional:**
   - Mean proportional between $4$ and $16$:
   - $x = \sqrt{4 \times 16} = \sqrt{64} = 8$. Verified.

5. **Third Proportional:**
   - Third proportional of $9$ and $12$:
   - $x = 12^2 / 9 = 144 / 9 = 16$.
   - Check: $9/12 = 3/4$; $12/16 = 3/4$. Verified.

6. **Fourth Proportional:**
   - Fourth proportional of $4, 9, 12$:
   - $x = (9 \times 12) / 4 = 108 / 4 = 27$.
   - Check: $4/9 = 12/27$. Verified.

7. **Cross-Product Addition to Terms:**
   - Initial ratio $3:5$. Add 10 to each term. New ratio becomes $5:7$.
   - $(3 \times 7 - 5 \times 5)x = 5 \times 10 - 7 \times 10 \implies (21 - 25)x = 50 - 70 \implies -4x = -20 \implies x = 5$.
   - Initial numbers: $3 \times 5 = 15$, $5 \times 5 = 25$.
   - Check: $(15 + 10) / (25 + 10) = 25 / 35 = 5 / 7$. Verified.

8. **Coin Denominations:**
   - Bag contains ₹1, 50p, 25p coins in ratio $3 : 4 : 8$. Total value $= ₹420$.
   - Value per coin in rupees: $1, 0.50, 0.25$.
   - Value per unit of ratio: $(3 \times 1) + (4 \times 0.50) + (8 \times 0.25) = 3 + 2 + 2 = ₹7$.
   - Ratio multiplier $= 420 / 7 = 60$.
   - Coin counts: ₹1 $= 180$, 50p $= 240$, 25p $= 480$.
   - Value check: $180(1) + 240(0.5) + 480(0.25) = 180 + 120 + 120 = ₹420$. Verified.

9. **Inverse Variation:**
   - $Y$ is inversely proportional to $X$. When $X = 6$, $Y = 8$. Find $Y$ when $X = 12$.
   - $k = X \times Y = 6 \times 8 = 48$.
   - $Y = 48 / 12 = 4$. Verified.

10. **Equal Subtraction for Continuous Proportion:**
    - What number must be subtracted from $14, 17, 34, 42$ so that remainders are proportional?
    - $(14 - x)(42 - x) = (17 - x)(34 - x)$
    - $588 - 56x + x^2 = 578 - 51x + x^2 \implies 10 = 5x \implies x = 2$.
    - Check: $(14-2)/(17-2) = 12/15 = 4/5$; $(34-2)/(42-2) = 32/40 = 4/5$. Verified.

---

## 4. Common Exam Traps & Conceptual Pitfalls

| Trap Name | Typical Fallacy | Mathematical Reality | Countermeasure |
| :--- | :--- | :--- | :--- |
| **Part-to-Part as Denominator** | In ratio $2:3$, Milk is thought to be $2/3$ of mixture. | Total parts $= 2 + 3 = 5$. Milk fraction is $2/5$ ($40\%$), not $66.7\%$. | Always sum parts ($a+b$) before taking fractions. |
| **Direct Addition to Ratio** | Adding 5 to both terms in $2:3$ creates ratio $7:8$, assumed equal to $2:3$. | Adding a constant changes the ratio unless both terms are equal ($1:1$). | Never treat $(a+k)/(b+k)$ as $a/b$. |
| **Middle Term LCM Omission** | In $A:B = 2:3$ and $B:C = 4:5$, stating $A:B:C = 2:4:5$. | $B$ has different unit scales in the two ratios and must be synchronized. | Match $B$ by scaling to $\text{lcm}(3, 4) = 12$. |
| **Coin Count vs Value Mixup** | Multiplying coin counts directly by total amount without weighting denominations. | Value depends on denomination value: $Count \times Denomination = Value$. | Compute unit value of a ratio bundle first. |
| **Inverse vs Direct Variation** | Setting $x_1/y_1 = x_2/y_2$ when quantities vary inversely. | Inverse variation preserves the product: $x_1 y_1 = x_2 y_2$. | Check if increasing one quantity decreases the other. |
