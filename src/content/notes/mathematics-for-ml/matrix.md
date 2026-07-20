---
title: "Matrix"
tags:
  - "type/definition"
  - "matrix"
  - "linear-algebra"
---

##### (Matrix)
With $m,n \in \mathbb{R}$ a real-valued $(m,n)$ *matrix* $\mathbf{A}$ is an $m.n$-tuple of elements $a_{ij}, i=1,\dots,m,j=1\dots,n$, which is ordered according to the rectangular scheme consisting of $m$ rows and $n$ columns:

$$
\begin{align}
\mathbf{A} = \begin{bmatrix}
a_{11}&a_{12}&\dots &a_{1n}\\
a_{21}&a_{22}&\dots &a_{2n}\\
\vdots&\vdots&&\vdots \\
a_{m1}&a_{m2}&\dots&a_{mn}
\end{bmatrix}, a_{ij} \in \mathbb{R}. \tag{2.11}
\end{align}
$$

(1, $n$)-matrices are called *rows* and ($m$,1)-matrices are called *columns*. These are also called *row/column vectors*.

##### (Matrix Operations)
###### Addition
The sum of two matrices $\mathbf{A} \in \mathbb{R}^{m\times n}, \mathbf{B} \in \mathbb{R}^{m\times n}$ is defined as element-wise sum. i.e.,

$$
\begin{align}
\mathbf{A}+\mathbf{B} \coloneqq 
\begin{bmatrix}
a_{11}+b_{11} &\dots& a_{1n}+b_{1n} \\
\vdots&\vdots&\vdots \\
a_{m1}+b_{m1}&\dots&a_{mn}+b_{mn}
\end{bmatrix} \in \mathbb{R}^{m\times n}. \tag{2.12}
\end{align}
$$

###### Multiplication
For matrices $\mathbf{A} \in \mathbb{R}^{m\times n}, \mathbf{B} \in \mathbb{R}^{n\times k}$, the elements $c_{ij}$ of the product $\mathbf{C} = \mathbf{A}\mathbf{B} \in \mathbb{R}^{m \times n}$ are computed as

$$
\begin{align}
c_{ij} = \sum_{l=1}^n a_{il}b_{lj}, \;\;i=1,\dots,m, \;j=1,\dots, k. \tag{2.13}
\end{align}
$$

##### (Identity Matrix)
In $\mathbb{R}^{n\times n}$, we define the *identity matrix* as a square matrix which

$$
\begin{align}
\mathbf{I}_{n} \coloneqq \begin{bmatrix}
1&0&\dots&0&\dots&0 \\
0&1&\dots&0&\dots&0 \\
\vdots&\vdots&\ddots&\vdots&\ddots&\vdots \\
0&0&\dots&1&\dots&0 \\
\vdots&\vdots&\ddots&\vdots&\ddots&\vdots \\
0&0&\dots&0&\dots&1
\end{bmatrix} \in \mathbf{R}^{n\times n} \tag{2.17}
\end{align}
$$

contains $1$ on the diagonal and $0$ everywhere else.
##### Properties
* *Associativity:*

$$
\begin{align}
\forall\mathbf{A}\in\mathbb{R}^{m \times n},\mathbf{B}\in\mathbb{R}^{n \times p}, \mathbf{C}\in\mathbb{R}^{p \times q} : (\mathbf{A}\mathbf{B})\mathbf{C} = \mathbf{A}(\mathbf{B}\mathbf{C}) \tag{2.18}
\end{align}
$$

* *Distributivity*:

$$
\forall \mathbf{A}, \mathbf{B}\in\mathbb{R}^{m \times n}, \mathbf{C},\mathbf{D}\in\mathbb{R}^{n \times p}: \begin{align*}
(\mathbf{A}+\mathbf{B})\mathbf{C} = \mathbf{A}\mathbf{C}+\mathbf{B}\mathbf{C}  \\
\mathbf{A}(\mathbf{C}+\mathbf{D}) = \mathbf{A}\mathbf{C}+\mathbf{A}\mathbf{D} 
\end{align*}
$$

* *Multiplication with Identity*:

$$
\begin{align}
\forall \mathbf{A} \in \mathbb{R}^{m\times n}: \mathbf{I}_{m}\mathbf{A} = \mathbf{A}\mathbf{I}_{n} = \mathbf{A} \tag{2.20}
\end{align}
$$

## Connections
* Forward Links: [Inverse and Transpose](/notes/mathematics-for-ml/inverse-and-transpose/)
* Backward Links: [Vectors](/notes/mathematics-for-ml/vectors/), [System of Linear Equations](/notes/mathematics-for-ml/system-of-linear-equations/)
