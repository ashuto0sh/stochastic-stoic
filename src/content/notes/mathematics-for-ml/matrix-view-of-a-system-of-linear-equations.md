---
title: "Matrix View of a System of Linear Equations"
tags:
  - "type/intuition"
  - "linear-equation"
  - "linear-algebra"
---

##### Core Idea
Recall from [Column View of a System of Linear Equations](/notes/mathematics-for-ml/column-view-of-a-system-of-linear-equations/#extension) that a general system of linear equations can be represented as $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}$. Here, $\boldsymbol{x}$ could be viewed as a vector that gets *transformed* to $\boldsymbol{b}$ using the matrix $\boldsymbol{A}$.

This is the most abstract but perhaps most important view for machine learning. Here, we see the entire matrix A as an operator or function that **transforms** a vector x from an input space into a vector b in an output space.

A acts on x to produce b.

$$
\begin{align}
\boldsymbol{x} \xrightarrow{Apply\; transformation \;\boldsymbol{A}} \boldsymbol{b}
\end{align}
$$

Solving the system $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}$ means finding the vector $\boldsymbol{x}$ in the input space that gets mapped to the vector $\boldsymbol{b}$ in the output space after being transformed by $\boldsymbol{A}$. This is equivalent to "inverting" the transformation, which is why the solution is written as $\boldsymbol{x}=\boldsymbol{A}^{−1}\boldsymbol{b}$ (if the inverse exists).

**The question this view answers is:** "Which input vector $\boldsymbol{x}$, when transformed by $\boldsymbol{A}$, results in the output vector $\boldsymbol{b}$?"

**Conclusion:** Geometrically, a matrix applies a **linear transformation** to space. This means it can stretch, shrink, rotate, reflect, or shear space, but it keeps grid lines parallel and evenly spaced, and the origin always stays in the same place. The matrix view is about understanding the geometry of this mapping from an input space to an output space.

## Connections
* Forward Links: [Row View of a System of Linear Equations](/notes/mathematics-for-ml/row-view-of-a-system-of-linear-equations/), [Column View of a System of Linear Equations](/notes/mathematics-for-ml/column-view-of-a-system-of-linear-equations/)
* Backward Links: [System of Linear Equations](/notes/mathematics-for-ml/system-of-linear-equations/), [Matrix](/notes/mathematics-for-ml/matrix/)
## References
* [Essence of Linear Algebra-3](https://www.youtube.com/watch?v=kYB8IZa5AuE&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=3)
- https://gregorygundersen.com/blog/2018/10/24/matrices/
