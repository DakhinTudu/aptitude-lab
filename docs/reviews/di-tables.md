# Topic Review & Curriculum Specification: Table DI & Percentage Comparison

**Topic ID:** `di-tables`  
**Category:** Data Interpretation (DI)  
**Target Exams:** SEBI Grade A (General & IT Stream), Banking (SBI PO, IBPS PO, RBI Grade B), SSC CGL  
**Status:** In Development Review  
**Date:** 2026-10-29  

---

## 1. Syllabus Scope & Exam Weightage

Data Interpretation accounts for **30% to 50% of the Quantitative Aptitude section** in modern banking and regulatory body exams:
- **SBI / IBPS PO Mains:** 35 questions dedicated entirely to Data Analysis & Interpretation.
- **SEBI Grade A Phase 1 (Paper 1):** 1–2 full DI sets (5–10 questions) based on tabular financial data, operational revenue, and growth percentages.
- **SBI / IBPS PO Prelims:** 1 tabular DI set (5 questions) testing rapid percentage comparison, ratios, and averages under extreme time pressure (20 minutes for 35 questions).

---

## 2. Core Concepts & Mathematical Tools

### 2.1 The Single-Source Dataset
A single structured dataset of 5 Companies ($A, B, C, D, E$) across 4 Fiscal Years (2021, 2022, 2023, 2024) recording **Revenue in ₹ Crore**:

| Company | FY 2021 | FY 2022 | FY 2023 | FY 2024 | Total |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Alpha (A)** | 120 | 150 | 180 | 225 | 675 |
| **Beta (B)** | 200 | 240 | 270 | 324 | 1034 |
| **Gamma (C)** | 160 | 180 | 216 | 270 | 826 |
| **Delta (D)** | 250 | 275 | 330 | 396 | 1251 |
| **Epsilon (E)** | 180 | 200 | 220 | 264 | 864 |
| **Total** | **910** | **1045** | **1216** | **1479** | **4650** |

### 2.2 Standard Query Archetypes
1. **Percentage Contribution / Share:**
   $$\text{Share of } X = \frac{\text{Value of } X}{\text{Total}} \times 100\%$$
2. **Percentage More / Less Than:**
   $$\% \text{ More} = \frac{\text{Larger} - \text{Smaller}}{\text{Base (than \dots)}} \times 100\%$$
   *Crucial Rule:* The entity following "than" is strictly the denominator.
3. **Year-on-Year (YoY) Percentage Growth:**
   $$\text{YoY Growth Rate} = \frac{\text{Value}_{t} - \text{Value}_{t-1}}{\text{Value}_{t-1}} \times 100\%$$
4. **Ratio of Totals vs. Averages:**
   $$\frac{\text{Avg of } X}{\text{Avg of } Y} = \frac{\text{Total of } X / k}{\text{Total of } Y / k} = \frac{\text{Total of } X}{\text{Total of } Y}$$
   *Shortcut:* Since the number of years $k$ is identical, never divide by $k$ when finding the ratio of averages!
5. **Fast Approximation / Base-Split Method:**
   - Instead of tedious long division, split denominators into $10\%, 5\%, 1\%$.
   - To compute $\frac{180}{675}$: $10\%$ of $675 = 67.5 \implies 20\% = 135 \implies 25\% = 168.75 \implies 26.67\%$.

---

## 3. Ten Reference Hand-Verified Test Cases

1. **Total Revenue of Alpha across all 4 years:**
   - $120 + 150 + 180 + 225 = 675$. Verified.

2. **Total Revenue of all companies in FY 2022:**
   - $150 + 240 + 180 + 275 + 200 = 1045$. Verified.

3. **Alpha's YoY Growth from FY 2021 to FY 2022:**
   - $\frac{150 - 120}{120} \times 100\% = \frac{30}{120} \times 100\% = 25.0\%$. Verified.

4. **Ratio of Gamma's revenue in 2023 to Delta's revenue in 2023:**
   - Gamma (2023) $= 216$, Delta (2023) $= 330$.
   - Ratio $= 216 : 330 = 36 : 55$. (Dividing by 6). Verified.

5. **Percentage share of Beta in FY 2021:**
   - Beta (2021) $= 200$, Total (2021) $= 910$.
   - $\frac{200}{910} \times 100\% = 21.98\%$. Verified.

6. **Delta's 2024 revenue compared to Alpha's 2024 revenue:**
   - Delta (2024) $= 396$, Alpha (2024) $= 225$.
   - \% More than Alpha $= \frac{396 - 225}{225} \times 100\% = \frac{171}{225} \times 100\% = 76.0\%$. Verified.

7. **Average revenue of Epsilon across all 4 years:**
   - Total $= 180 + 200 + 220 + 264 = 864$.
   - Average $= 864 / 4 = 216.0$ Cr. Verified.

8. **Difference between Total of Delta and Total of Alpha:**
   - Delta Total $= 1251$, Alpha Total $= 675$.
   - Difference $= 1251 - 675 = 576$ Cr. Verified.

9. **Company with highest percentage growth from 2023 to 2024:**
   - Alpha: $(225 - 180) / 180 = 45 / 180 = 25.0\%$.
   - Beta: $(324 - 270) / 270 = 54 / 270 = 20.0\%$.
   - Gamma: $(270 - 216) / 216 = 54 / 216 = 25.0\%$.
   - Delta: $(396 - 330) / 330 = 66 / 330 = 20.0\%$.
   - Epsilon: $(264 - 220) / 220 = 44 / 220 = 20.0\%$.
   - Highest growth $= \text{Alpha and Gamma tied at } 25.0\%$. Verified.

10. **Overall Industry Growth from 2021 to 2024:**
    - Total 2021 $= 910$, Total 2024 $= 1479$.
    - Growth $= \frac{1479 - 910}{910} \times 100\% = \frac{569}{910} \times 100\% \approx 62.53\%$. Verified.

---

## 4. Common Exam Traps & Misconceptions

| Trap Name | Erroneous Thinking | Mathematical Reality | Countermeasure |
| :--- | :--- | :--- | :--- |
| **Wrong Denominator Base** | Using the larger or target value as denominator in "% more/less". | The phrase "more than X" strictly requires X as the base denominator. | Anchor denominator to the entity following "than". |
| **Redundant Average Division** | Dividing totals by 4 before taking the ratio of averages. | $\frac{\text{Total}_A / 4}{\text{Total}_B / 4} \equiv \frac{\text{Total}_A}{\text{Total}_B}$. | Cancel the common divisor directly. |
| **Absolute Growth vs % Growth** | Confusing largest numerical increase with largest percentage increase. | Delta grew by ₹66 Cr (20%), while Alpha grew by ₹45 Cr (25%). Alpha had higher % growth! | Always divide increase by the initial base. |
| **Unit Misalignment** | Forgetting Crores vs Lakhs in mixed table prompts. | Reading values without checking column units leads to $10\times$ or $100\times$ errors. | Check scale notation in table headers. |
