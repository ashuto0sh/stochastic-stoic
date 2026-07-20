---
title: "Determinant"
tags:
  - "type/concept"
  - "matrix-decomposition"
  - "determinant"
---

##### Intuition
At its geometric heart, the determinant of a matrix tells you the **volume scaling factor** of the linear transformation that the matrix represents.

Imagine you have a unit square in 2D space (with an area of 1). If you apply a matrix **A** to every point in that square, it will transform the square into a parallelogram. The **absolute value of the determinant**, $∣\det(A)∣$, is the **area of this new parallelogram**.
- If $∣\det(A)∣=2$, the transformation doubles the area of any shape.
- If $∣\det(A)∣=0.5$, it shrinks the area by half.
- If $∣\det(A)∣=0$, it means the transformation has squashed the shape flat into a line or a point, completely collapsing its volume. This is a critical case.

The **sign** of the determinant tells you whether the transformation has **flipped the orientation** of the space.
- A **positive determinant** means the orientation is preserved (e.g., a rotation).
- A **negative determinant** means the orientation is flipped (e.g., a reflection, like looking in a mirror).

The determinant solves a crucial problem: it provides a simple, single-number test to see if a transformation is "destructive" or "invertible". If the determinant is zero, the transformation is destructive—you've collapsed the space and lost a dimension. You cannot undo this operation, which means the matrix is **singular** (not invertible).
##### Formal
Determinants are only defined for square matrices.
###### (Theorem)
A square matrix $\mathbf{A} \in \mathbb{R}^{n\times n}$ is invertible iff $\det(\mathbf{A}) \ne 0$.
###### ($2\times 2$-matrix)

$$
\begin{align}
\det(\mathbf{A}) = \begin{vmatrix}
a_{11}&a_{12} \\
a_{21}&a_{22}
\end{vmatrix}=a_{11}a_{22}-a_{12}a_{21}. \tag{1}
\end{align}
$$

###### (Upper Triangular Matrix)
A square matrix $\boldsymbol{T}$ is called an *upper-triangular matrix* if $T_{ij}=0 \;\text{for}\;i>j$, i.e., the matrix is 0 below its diagonal. Similarly, *lower-triangular matrix* is defined.
For a triangular matrix $\boldsymbol{T} \in \mathbb{R}^{n\times n}$, the determinant is the product of diagonal elements,

$$
\det(\boldsymbol{T}) = \prod_{i=1}^nT_{ii}. \tag{2}
$$

###### (Laplace Expansion)
Consider a matrix $A \in \mathbb{R}^{n \times n}$, Then for all $j=1,\dots,n$:
1. Expansion along column j

$$
\det(\mathbf{A})=\sum_{k=1}^n(-1)^{k+j}a_{kj}\det(\mathbf{A}_{k,j}). \tag{3}
$$

2. Expansion along row j 

$$
\det(\mathbf{A})=\sum_{k=1}^n(-1)^{k+j}a_{jk}\det(\mathbf{A}_{j,k}). \tag{3}
$$

Where $\mathbf{A}_{k,j} \in \mathbf{R}^{n-1 \times n-1}$ is the submatrix of $\mathbf{A}$ that is obtained by deleting row $k$ and column $j$.
###### (Properties)
* The determinant of a matrix product is the product of the corresponding determinants, $\det(AB) = \det(A)\det(B)$.
* Determinants are invariant to transposition, i.e., $\det(A) = \det(A^T)$. 
* If A is regular (invertible), then $\det(A^{−1} ) = \frac{1}{\det(A)}$.
* Similar matrices possess the same determinant. Therefore, for a linear mapping $Φ : V → V$ all transformation matrices $A_Φ$ of $Φ$ have the same determinant. Thus, the determinant is invariant to the choice of basis of a linear mapping.
* Adding a multiple of a column/row to another one does not change $\det(A)$.
* Multiplication of a column/row with $λ ∈ R$ scales $\det(A)$ by $λ$. In particular, $det(λA) = λ^n \det(A)$
* Swapping two rows/columns changes the sign of $\det(A)$ *(look at (3))*.
###### (Theorem)
A square matrix $A \in \mathbf{R}^{n \times n}$ has $\det(A) \ne 0$ if and only if $\text{rk}(A) = n$. In other words, $A$ is invertible if and only if it is full rank.

Gaussian elimination is the standard _algorithmic_ way to compute a determinant, and it's far more efficient than the recursive cofactor expansion for any matrix larger than $3 \times 3$:
1. Determinant of a triangular matrix is product of diagonal elements.
2. [Gaussian Elimination](/notes/mathematics-for-ml/gaussian-elimination/#gaussian-elimination) can be used to convert any matrix to triangular form (REF).
##### Connections
* Forward Links: [Trace](/notes/mathematics-for-ml/trace/), [Characteristic Polynomial](/notes/mathematics-for-ml/characteristic-polynomial/)
* Backward Links: [Matrix](/notes/mathematics-for-ml/matrix/), [Inverse and Transpose](/notes/mathematics-for-ml/inverse-and-transpose/#inverse), [Gaussian Elimination](/notes/mathematics-for-ml/gaussian-elimination/)
