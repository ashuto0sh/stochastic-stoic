---
title: "Inner Product of Functions"
tags:
  - "type/definition"
  - "analytical-geometry"
  - "inner-products"
---

##### Formal
###### (Inner Product of Functions)
The inner product of two functions $u : \mathbb{R} \rightarrow \mathbb{R}$ and $v:\mathbb{R} \rightarrow \mathbb{R}$ can be defined as integral

$$
\begin{align}
\langle u,v\rangle \coloneqq \int_{a}^b u(x)v(x)\,dx \tag{1}
\end{align}
$$

for lower and upper limits $a,b < \infty$, respectively. if (1) evaluates to 0, the functions $u$ and $v$ are orthogonal.
Notice the generalization of inner product as defined for finite-dimensional vectors.
##### Intuition
The inner product of two functions `f(x)` and `g(x)` is a measure of their overall **overlap** or **correlation**. If both functions are large and positive in the same regions, their inner product will be a large positive number. If they have opposite signs in the same regions, their inner product will be a large negative number. If their positive and negative parts cancel each other out, their inner product will be close to zero, suggesting they are "uncorrelated" or **orthogonal**.
##### Connections
* Forward Links:
* Backward Links: [Inner Products](/notes/mathematics-for-ml/inner-products/)
