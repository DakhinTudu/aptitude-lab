# Topic Review & Curriculum Specification: Simple & Compound Interest Comparison

**Topic ID:** `simple-compound-interest`  
**Category:** Quantitative Aptitude  
**Target Exams:** SEBI Grade A (General & IT Stream), Banking (SBI PO, IBPS PO, RBI Grade B), SSC CGL  
**Status:** In Development Review  
**Date:** 2026-10-29  

---

## 1. Syllabus Scope & Exam Weightage

Interest problems are a mandatory core topic across banking and regulatory examinations:
- **Banking Prelims (SBI / IBPS PO / Clerk):** 2–3 questions per shift testing 2-year and 3-year $CI - SI$ differences, half-yearly compounding, and doubling time rules.
- **SEBI Grade A Phase 1 (Paper 1):** 2 questions focusing on Effective Annual Rate (EAR), installment present-value calculations, and compound growth comparisons.
- **SSC CGL (Tier 1 & Tier 2):** 3–4 questions including 3-year difference shortcuts, successive rate compounding, and simple interest sum transitions.

---

## 2. Core Mathematical Formulations & Axioms

### 2.1 Linear vs. Exponential Growth Models
1. **Simple Interest (Linear):**
   $$SI = \frac{P \times R \times T}{100}$$
   $$\text{Total Amount } A_{SI} = P\left(1 + \frac{RT}{100}\right)$$
   *Invariant:* The interest earned in each period is constant: $\Delta I = P \cdot \frac{R}{100}$.
2. **Compound Interest (Exponential):**
   $$A_{CI} = P\left(1 + \frac{R}{100k}\right)^{k \cdot T}$$
   where $k$ is compounding frequency per year ($k=1$ annually, $k=2$ half-yearly, $k=4$ quarterly).
   $$CI = A_{CI} - P = P\left[\left(1 + \frac{R}{100k}\right)^{k \cdot T} - 1\right]$$

### 2.2 Effective Annual Rate (EAR)
For nominal rate $R\%$ per annum compounded $k$ times a year:
$$\text{EAR} = \left[\left(1 + \frac{R/k}{100}\right)^k - 1\right] \times 100\%$$
- Semi-annual at $10\% \implies \text{EAR} = (1.05)^2 - 1 = 10.25\%$.
- Quarterly at $20\% \implies \text{EAR} = (1.05)^4 - 1 \approx 21.55\%$.

### 2.3 The $CI - SI$ Difference Theorems
1. **For 2 Years:**
   $$\Delta_2 = CI_2 - SI_2 = P\left(\frac{R}{100}\right)^2$$
   *Proof:* In Year 1, $CI_1 = SI_1 = \frac{PR}{100}$. In Year 2, $CI_2 = \frac{PR}{100} + \frac{R}{100} \cdot \left(\frac{PR}{100}\right)$. The excess is strictly the interest on Year 1's interest.
2. **For 3 Years:**
   $$\Delta_3 = CI_3 - SI_3 = P\left(\frac{R}{100}\right)^2 \times \left(\frac{300 + R}{100}\right)$$
3. **The 3-Year to 2-Year Ratio Shortcut:**
   $$\frac{\Delta_3}{\Delta_2} = \frac{300 + R}{100} = 3 + \frac{R}{100}$$

### 2.4 Doubling & Multiplication Laws
- **Simple Interest Multiplication:**
  If a sum becomes $n$-fold in $T$ years, it takes:
  $$T_m = \frac{m - 1}{n - 1} \times T$$
  to become $m$-fold. *(e.g. doubles ($n=2$) in 5 years $\implies$ quadruples ($m=4$) in $\frac{4-1}{2-1} \times 5 = 15$ years).*
- **Compound Interest Multiplication:**
  If a sum becomes $k$-fold in $T$ years, it becomes $k^m$-fold in:
  $$T_{\text{new}} = m \times T\text{ years}$$
  *(e.g. doubles ($k=2$) in 4 years $\implies$ becomes 8-fold ($2^3$) in $3 \times 4 = 12$ years).*

### 2.5 Annual Equal Instalments (Loans)
For loan $P$ repaid in $n$ equal annual installments of ₹$x$ at compound interest $R\%$:
$$P = \frac{x}{1 + \frac{R}{100}} + \frac{x}{\left(1 + \frac{R}{100}\right)^2} + \dots + \frac{x}{\left(1 + \frac{R}{100}\right)^n}$$

---

## 3. Ten Reference Hand-Verified Test Cases

1. **Standard 2-Year Difference:**
   - $P = 5000$, $R = 10\%$, $T = 2$.
   - $SI = 5000 \times 10 \times 2 / 100 = 1000$.
   - $CI = 5000 \times (1.1^2 - 1) = 5000 \times 0.21 = 1050$.
   - $\Delta_2 = 1050 - 1000 = 50$.
   - Formula: $5000 \times (10/100)^2 = 5000 \times 0.01 = 50$. Verified.

2. **Standard 3-Year Difference:**
   - $P = 10000$, $R = 10\%$, $T = 3$.
   - $SI = 10000 \times 10 \times 3 / 100 = 3000$.
   - $CI = 10000 \times (1.1^3 - 1) = 10000 \times 0.331 = 3310$.
   - $\Delta_3 = 3310 - 3000 = 310$.
   - Formula: $10000 \times 0.01 \times (310 / 100) = 100 \times 3.1 = 310$. Verified.

3. **Ratio of 3-Year to 2-Year Difference:**
   - For $R = 12\%$: $\Delta_3 / \Delta_2 = (300 + 12) / 100 = 3.12 = 78 / 25$.
   - For $R = 5\%$: $\Delta_3 / \Delta_2 = 305 / 100 = 61 / 20$. Verified.

4. **Half-Yearly Compounding:**
   - $P = 8000$, $R = 10\%$ p.a., $T = 1$ year, compounded half-yearly.
   - Half-year rate $= 5\%$, periods $n = 2$.
   - $A = 8000 \times (1.05)^2 = 8000 \times 1.1025 = 8820$.
   - $CI = 820$.
   - Annual $SI = 8000 \times 10 \times 1 / 100 = 800$.
   - Excess from semi-annual compounding $= 820 - 800 = ₹20$. Verified.

5. **Quarterly Compounding:**
   - $P = 16000$, $R = 20\%$ p.a., $T = 9$ months ($3$ quarters), compounded quarterly.
   - Quarterly rate $= 5\%$, periods $n = 3$.
   - $A = 16000 \times (1.05)^3 = 16000 \times 1.157625 = 18522$.
   - $CI = 18522 - 16000 = 2522$. Verified.

6. **SI Doubling & Multiplication:**
   - Sum doubles in 8 years at simple interest.
   - $R = 100 / 8 = 12.5\%$.
   - To become 4-fold: $(4 - 1) \times 8 = 3 \times 8 = 24$ years. Verified.

7. **CI Doubling & Multiplication:**
   - Sum doubles in 5 years at compound interest.
   - To become 8-fold ($2^3$): $3 \times 5 = 15$ years.
   - To become 16-fold ($2^4$): $4 \times 5 = 20$ years. Verified.

8. **Finding Principal from 2-Year Difference:**
   - $\Delta_2 = ₹144$, $R = 12\%$. Find $P$.
   - $P = \Delta_2 / (R/100)^2 = 144 / (0.12)^2 = 144 / 0.0144 = 10000$. Verified.

9. **Two Equal Annual CI Instalments:**
   - Borrow $P = ₹2100$ at $10\%$ CI p.a. to be repaid in 2 equal annual installments.
   - $2100 = x / 1.1 + x / (1.1)^2 = x(10/11 + 100/121) = x(210/121)$.
   - $x = 2100 \times 121 / 210 = ₹1210$. Verified.

10. **Rates Differing by Year (Successive Rates):**
    - $P = 10000$, $R_1 = 4\%, R_2 = 5\%, R_3 = 6\%$.
    - $A = 10000 \times 1.04 \times 1.05 \times 1.06 = 10000 \times 1.15752 = 11575.20$.
    - $CI = 1575.20$. Verified.

---

## 4. Common Exam Traps & Misconceptions

| Trap Name | Erroneous Technique | Mathematical Reality | Countermeasure |
| :--- | :--- | :--- | :--- |
| **Half-Yearly Rate Non-Halving** | Using the nominal annual rate $R$ with $2T$ periods. | Semi-annual compounding halves the rate ($R/2$) while doubling periods ($2T$). | Divide rate by 2 and multiply years by 2 simultaneously. |
| **Simple Interest Trebling Shortcut** | Assuming trebling takes $3 \times \text{doubling time}$. | Trebling means earning $2P$ interest, which takes twice the doubling time, NOT three times. | $T_n = (n - 1) \times T_{\text{double}}$ for simple interest. |
| **Linear Extension of CI** | Adding the same rupee gain year after year under compound interest. | Compound interest base expands geometrically each year. | Multiply by $(1 + R/100)$ rather than adding constant rupees. |
| **Instalment Simple Addition** | Dividing total amount by $n$ to find annual installment. | Money paid in future has discounted present value due to interest accrual. | Equate loan principal to sum of discounted present values. |
