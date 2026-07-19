---
title: "Angles and Orthogonality"
tags:
  - "analytical-geometry"
  - "type/definition"
  - "orthogonality"
  - "angles"
---

##### Formal
###### (Angles)
From [Lengths and Distances](/notes/lengths-and-distances/#cauchy-schwarz-inequality), it follows that 

$$
\begin{align}
-1\le \frac{\langle x,y \rangle}{||x||\;||y||} \le 1. \tag{1}
\end{align}
$$

Therefore, there exists a unique $\omega \in [0, \pi]$,

$$
\begin{align}
\cos \omega =\frac{\langle x, y \rangle}{||x||\;||y||}. \tag{2}
\end{align}
$$

The number $\omega$ is the *angle* between the vectors $x$ and $y$. Intuitively, the angle between two vectors tells us how similar their orientations are.
###### (Orthogonality)
Two vectors $x$ and $y$ are *orthogonal* if and only if $\langle x,y \rangle = 0$ written as $x \perp y$. Additionally if $\parallel x \parallel = \parallel y \parallel = 1$, i.e., the vectors are unit vectors, then $x$ and $y$ are *orthonormal*.
###### (Orthogonal Matrix)
A square matrix $A \in \mathbf{R}^{n \times n}$ is an *orthogonal matrix* if and only if its columns are orthonormal so that

$$
\begin{align}
AA^T = I = A^TA, \tag{3}
\end{align}
$$

which implies that

$$
\begin{align}
A^{-1} = A^T, \tag{4}
\end{align}
$$

i.e., the inverse is obtained by transposing the matrix.
*<u>Note</u>*: Transformations using orthogonal matrices does not alter the length of the vector.
<u>Note</u>: Angle between two vectors remains unchanged as long as they both are transformed using the same orthogonal matrix.
###### (Orthonormal Basis)
Consider an $n$-dimensional vector space $V$ and a basis $\{\mathbf{b}_{1},\dots,\mathbf{b}_{n}\}$ of $V$. If

$$
\begin{align}
\langle \mathbf{b}_{i}, \mathbf{b}_{j} \rangle = 0\;\; \text{for} \;i\ne j \tag{5} \\
\langle \mathbf{b}_{i}, \mathbf{b}_{i} \rangle=0 \tag{6}
\end{align}
$$

 for all $i,j=1,\dots,n$, then the basis is called an *Orthonormal basis (ONB)*.
###### (Orthogonal Complement)
Consider a $D$-dimensional vector space $V$ and an $M$-dimensional subspace $U \subseteq V$. Then its *orthogonal complement* $U^{\perp}$ is a $D-M$-dimensional subspace of $V$ which contains all the vectors in $V$ that are orthogonal to every vector in $U$. 
##### Intuition
At its heart, an **orthogonal matrix** represents a **rigid transformation**. When you apply it to a vector or a set of data points, it can only do two things: **rotate** them or **reflect** them. It _cannot_ stretch, shrink, or skew the data.

Imagine you have a set of data points. Multiplying them by an orthogonal matrix is like picking up the entire coordinate system and rotating it. The key is that all the intrinsic geometric properties of the data are preserved:
- The **length** of any individual vector remains unchanged.
- The **angle** between any two vectors remains unchanged.
- The **distance** between any two points remains unchanged.

This property is incredibly desirable in machine learning. We often want to change the basis or viewpoint of our data to make a problem easier (e.g., align it with axes of maximum variance) without fundamentally distorting the data's internal structure. An orthogonal matrix is the perfect tool for this job. It's a transformation that preserves geometry.

**Orthogonal Complement (The "What's Left Over" Space)**
- **What it is:** If you have a subspace (like a plane in 3D), its orthogonal complement is everything that is perpendicular to it (like a line sticking straight out of the plane).
- **ML Intuition:** This is the foundation of **Linear Regression**. The model makes a prediction that lives in the "feature subspace." The error (the residual) must live in the **orthogonal complement**. This guarantees that the error is uncorrelated with the features, meaning our model has explained everything it possibly can.
##### Connections
* Forward Links: [Gram-Schmidt Orthogonalization](/notes/gram-schmidt-orthogonalization/), [Orthogonal Projections](/notes/orthogonal-projections/)
* Backward Links: [Lengths and Distances](/notes/lengths-and-distances/), [Basis](/notes/basis/)
