---
title: "Gaussian Elimination"
tags:
  - "type/definition"
  - "linear-equation"
  - "ref"
  - "gaussian-elimination"
  - "linear-algebra"
---

For an equation of the form $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}$, the set of values for $\boldsymbol{x}$ that satisfies the equation is the solution for this System of Linear Equations.
##### Elementary Transformations
For a given set of linear equations, a certain set of operations over the rows that change its form while retaining the set of solutions:
- Exchange two rows.
- Multiply a row with a constant $\lambda \in \mathbb{R} \setminus \{0\}$.
- Addition of two rows.
###### (Row-Echelon Form)
A matrix is in *row-echelon form (REF)* if:
- All rows that contain only zeros are at the bottom of the matrix.
- Looking at the nonzero rows only, the first nonzero number from the left (pivot) is always strictly to the right of the pivot of the row above it.
###### (Pivot and Staircase Structure)
The leading coefficient of a row (first non-zero number from the left) is called a *pivot* and is always strictly to the right of the row above it.

**(Basic and Free variables).** The variables corresponding to the pivots in the REF are called basic variables and the other variables are called free variables. (tip: think about the column view).
###### (Reduced Row-Echelon Form)
A system of equations is in reduced row echelon form if:
- It is in REF.
- Every pivot is 1.
- The pivot is the only nonzero entry in its column.
###### (Gaussian Elimination)
*Gaussian elimination* is an algorithm that elimination performs elementary transformations to bring a system of linear equations into RREF.
###### (Finding the inverse)
Notice that the Gaussian Elimination could be used to find the inverse of a square matrix too.

$$
\begin{align}
\begin{bmatrix}
A|I_{n} 
\end{bmatrix}\rightsquigarrow\dots\rightsquigarrow \begin{bmatrix}
I_{n}|A^{-1}
\end{bmatrix} \tag{1}
\end{align}
$$

##### Connections
* Forward Links: 
* Backward Links: [Matrix](/notes/matrix/), [Inverse and Transpose](/notes/inverse-and-transpose/), [System of Linear Equations](/notes/system-of-linear-equations/)
