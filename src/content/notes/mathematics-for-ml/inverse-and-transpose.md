---
title: "Inverse and Transpose"
tags:
  - "type/definition"
  - "inverse"
  - "transpose"
  - "linear-algebra"
---

##### (Inverse)
Consider a square matrix $\boldsymbol{A} \in \mathbb{R}^{n\times n}$. Let matrix $\boldsymbol{B} \in \mathbb{R}^{n\times n}$ have the property that $\boldsymbol{A}\boldsymbol{B} = \boldsymbol{I}_{n} = \boldsymbol{B}\boldsymbol{A}$. $\boldsymbol{B}$ is called the *inverse* of $\boldsymbol{A}$ and is denoted by $\boldsymbol{A}^{-1}$.

If the inverse of a matrix does not exist, its called *singular/non-invertible*.  Otherwise, it's called *regular/invertible/nonsingular*.

###### (Inverse of a $2 \times 2$-matrix)
Consider a matrix

$$
\begin{align}
\boldsymbol{A} \coloneqq \begin{bmatrix}
a_{11}&a_{12} \\
a_{21}&a_{22}
\end{bmatrix} \in \mathbb{R}^{2\times2}.
\end{align}
$$

if we multiply $\boldsymbol{A}$ with

$$
\begin{align}
\boldsymbol{A^′} \coloneqq \begin{bmatrix}
a_{22}&-a_{12} \\
-a_{21}&a_{11}
\end{bmatrix}
\end{align}
$$

we obtain 

$$
\begin{align}
\boldsymbol{A}\boldsymbol{A^′} \coloneqq \begin{bmatrix}
a_{11}a_{22}-a_{12}a_{21}&0 \\
0&a_{11}a_{22}-a_{12}a_{21}
\end{bmatrix} = (a_{11}a_{22}-a_{12}a_{21})\boldsymbol{I}.
\end{align}
$$

Therefore,

$$
\begin{align}
\boldsymbol{A^{-1}} \coloneqq \frac{1}{(a_{11}a_{22}-a_{12}a_{21})}\begin{bmatrix}
a_{11}a_{22}-a_{12}a_{21}&0 \\
0&a_{11}a_{22}-a_{12}a_{21}
\end{bmatrix} 
\end{align}
$$

if and only if $(a_{11}a_{22}-a_{12}a_{21})\neq 0$.
##### (Transpose)
For $\boldsymbol{A} \in \mathbb{R}^{m\times n}$, the matrix $\boldsymbol{B} \in \mathbb{R}^{n\times n}$ with $b_{ij}=a_{ji}$ is called the *transpose* of $\boldsymbol{A}$. We write $\boldsymbol{B} = \boldsymbol{A^T}$.
##### Properties of Inverses and Transpose

$$
\begin{align}
\boldsymbol{A}\boldsymbol{A^{-1}} = \boldsymbol{I} = \boldsymbol{A^{-1}}\boldsymbol{A} \tag{2.26} \\
(\boldsymbol{A}\boldsymbol{B})^{-1} = \boldsymbol{B^{-1}}\boldsymbol{A^{-1}} \tag{2.27} \\
(\boldsymbol{A}+\boldsymbol{B})^{-1} \neq \boldsymbol{A^{-1}}+\boldsymbol{B^{-1}} \tag{2.28} \\
(\boldsymbol{A^T})^T=\boldsymbol{A} \tag{2.29} \\
(\boldsymbol{A}\boldsymbol{B})^T=\boldsymbol{B}^T\boldsymbol{A^T} \tag{2.30} \\
(\boldsymbol{A}+\boldsymbol{A})^T=\boldsymbol{A}^T+\boldsymbol{B}^T \tag{2.31}
\end{align}
$$

**(Symmetric Matrix).** A square matrix is *symmetric* iff $\boldsymbol{A}=\boldsymbol{A}^T$. If $\boldsymbol{A}$ is invertible, so is $\boldsymbol{A}^T$.
## Connections
* Forward Links: [Gaussian Elimination](/notes/mathematics-for-ml/gaussian-elimination/#finding-the-inverse)
* Backward Links: [Matrix](/notes/mathematics-for-ml/matrix/)
