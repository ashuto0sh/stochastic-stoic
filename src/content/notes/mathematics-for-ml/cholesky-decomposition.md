---
title: "Cholesky Decomposition"
tags:
  - "type/definition"
  - "matrix-decomposition"
  - "cholesky"
---

##### Formal
###### (Cholesky Decomposition)
A symmetric, positive definite matrix $A$ can be factorized into a product $A=LL^T$ where $L$ is a lower-triangular matrix with positive diagonal elements:

$$
\begin{align}
\begin{bmatrix}
a_{11}&\dots&a_{1n} \\
\vdots&\ddots&\vdots \\
a_{n1}&\dots&a_{nn}
\end{bmatrix}=\begin{bmatrix}
l_{11}&\dots&0 \\
\vdots&\ddots&\vdots \\
l_{n1}&\dots&l_{nn}
\end{bmatrix}\begin{bmatrix}
l_{11}&\dots&l_{1n} \\
\vdots&\ddots&\vdots \\
0&\dots&l_{nn}
\end{bmatrix}.
\end{align} \tag{1}
$$

$L$ is called the *Cholesky factor* of $A$ and $L$ is unique.
###### (Requirements)
* **Symmetric:** The matrix is *balanced*. $A=A^T$.
* **Positive Definite:** This means that the matrix is "purely constructive". it only stretches space outwards, it never reverses dimensions and never squashes anything flat.
##### Intuition
At its heart, the Cholesky decomposition is the matrix equivalent of taking the square root of a positive number. For a positive scalar $a$, its square root $l$ satisfies $a = l * l = l^2$*. The Cholesky decomposition extends this idea to a special class of matrices.

Specifically, if you have a **symmetric, positive-definite matrix A**, the Cholesky decomposition finds a unique **lower triangular matrix L** such that:

$$
A = LL^\intercal
$$

where **Lᵀ** is the transpose of **L** (which will be an upper triangular matrix).

Why is this useful? Think about solving a simple equation like _ax = b_. You could find _x = b/a_. If _a_ is positive, you could also write $x = b/(ll)$. This might seem more complicated, but in the world of matrices, decomposing $A$ into two simpler triangular matrices ($L$ and $L^T$) makes solving the system of linear equations $Ax = b$ much, much faster and more numerically stable. You are essentially trading one hard problem for two easy ones.
##### ML Applications
Cholesky decomposition is not just an academic exercise; it's a computational workhorse in machine learning. 
* **Solving Normal Equations in Linear Regression:** The solution to linear regression is often expressed as $θ = (XᵀX)⁻¹Xᵀy$. 
* **Sampling from a Multivariate Normal Distribution.*
* **Numerical Libraries:** You will almost never implement this yourself. Highly optimized and numerically stable versions are available in standard libraries. In Python, NumPy provides a straightforward implementation. 
* **Computational Complexity:** For an *n x n* matrix, Cholesky decomposition has a complexity of **O(n³)**. This is significantly better—by a factor of two—than other general-purpose decompositions like LU decomposition for this class of matrices. The subsequent forward and backward substitutions to solve a linear system are much faster, at **O(n²)**. 
* **Stability:** Cholesky decomposition is renowned for its excellent numerical stability. The process of taking square roots acts as a check; if the matrix is not positive definite, the algorithm will fail when it encounters the square root of a negative number. This makes it a reliable way to test for positive definiteness.
##### Connections
* Forward Links: 
* Backward Links: [Matrix decomposition landscape](/notes/mathematics-for-ml/matrix-decomposition-landscape/), [Symmetric, Positive Definite Matrices](/notes/mathematics-for-ml/symmetric-positive-definite-matrices/)
