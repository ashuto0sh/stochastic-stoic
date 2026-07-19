---
title: "Orthogonal Projections"
tags:
  - "analytical-geometry"
  - "type/concept"
  - "orthogonality"
---

##### Formal
###### (Projection)
Let $V$ be a vector space and $U \subseteq V$ a subspace of $V$. A linear mapping $\pi : V \rightarrow U$ is called a *projection* if $\pi^2 = \pi \circ \pi=\pi$.
Since Linear mappings can be expressed as matrices ([Matrix Representation of Linear Mappings](/notes/matrix-representation-of-linear-mappings/)), the preceding definition applies to a special kind of transformation matrices called *projection matrices* $\boldsymbol{P}_{\pi}$ which exhibit the property that $\boldsymbol{P}_{\pi}^2=\boldsymbol{P}_{\pi}$.
###### (Projections onto 1-dimensional subspaces)
We want to project a vector $x\in V$ onto a subspace $U \subseteq V$ where $U$ has exactly one basis vector $b$ (owing to the subspace being 1-dimensional). Any point on the line (element of vector space $U$) can be expressed as a scaled version of $b$.

Therefore, the projection of $x$ onto the line, which we call $\pi_{b}(x)$, must be a multiple of $b$:

$$
\pi_{b}(x) = \lambda b.\tag{1}
$$

Our goal is to find the scalar coefficient $\lambda$.

Notice that the "error vector" connecting the projection to the original vector, which is $(x-\pi_{b}(x))$, must be orthogonal to the direction of line, $b$.

$$
\langle x-\lambda b, b \rangle=0.
$$

 Using the linearity of inner product, we can expand this:

$$
\begin{align}
\langle x, b \rangle-\langle \lambda b, b \rangle=0 \\
\langle x, b \rangle-\lambda\langle b, b \rangle=0 \\
\langle x, b \rangle-\lambda||b||^2=0
\end{align}
$$

Therefore,

$$
\lambda=\frac{\langle x, b \rangle}{||b||^2}\tag{2}.
$$

Substituting (2) back in (1), we get

$$
\pi_{b}(x) = \underbrace{\frac{\langle x, b \rangle}{||b||^2}}_{\text{Scalar coefficient}}\;\underbrace{b}_{Direction}. \tag{3}
$$

Now, if the basis vector were a unit vector $||b||=1$,

$$
\pi_{b}(x)=\langle x, b \rangle b.
$$

###### (Projections onto general subspaces)
The key to projecting onto a general _k_-dimensional subspace _U_ is to first find an **orthonormal basis** $\{b_1,…,b_k\}$ for that subspace. As we discussed, this is like finding a perfect, perpendicular coordinate system for our subspace where every axis vector has a length of one.

Once you have this orthonormal basis, the magic happens: the complex problem of projecting onto a high-dimensional subspace breaks down into a series of simple projections onto lines.

The orthogonal projection of a vector **x** onto the subspace _U_ is simply the **sum of its individual projections onto each of the orthonormal basis vectors**.

$$
\pi_{U}(x) = \pi_{b_{1}}(x)+\pi_{b_{2}}(x)+\dots+\pi_{b_{k}}(x)
$$

Since we know the simple formula for projecting onto a line spanned by a unit vector $\pi_{b}(x)=\langle x, b \rangle b.$, we can substitute it in for each term:

$$
\pi_{U}(x)=\sum_{i=1}^k\langle x, b_{i} \rangle b_{i}
$$

This result states that to find the best approximation of **x** in _U_, you just need to:
1. Calculate the coordinate (the scalar inner product $⟨x,b_i⟩$) of **x** along each basis direction of $U$.
2. Scale each basis vector $b_i$ by its corresponding coordinate.
3. Sum these scaled basis vectors together.
The vector you create, $\pi_{U}(x)$, is guaranteed to be the vector in $U$ that is closest to the original vector $x$.
**Matrix form:** The **projection matrix** for a subspace with an orthonormal basis **B** is:

$$
\mathbf{P}=\mathbf{B}\mathbf{B}^T.
$$

##### ML Applications
This matrix form is not just a notational convenience; it is the exact formula used in the solution to many machine learning problems.
- **Linear Regression**: The solution for the optimal weight vector β in Ordinary Least Squares is given by $\beta=(X^TX)^{−1}X^Ty$, where $\mathbf{X}$ is the matrix of features and **y** is the target vector. The vector of predicted values, $\hat{y}$, is then given by $\hat{y}=\mathbf{X}y$. If you substitute the formula for $\beta$ in, you get:

$$
\hat{y} = \mathbf{X}((\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^Ty)
$$

 This is exactly the projection formula! The matrix $\mathbf{P}=\mathbf{X}(\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T$ is known in statistics as the **hat matrix**, because it "puts the hat on y" $(\hat{y}=\mathbf{P}y)$. It is the projection matrix that orthogonally projects the vector of true outcomes **y** onto the subspace spanned by the features in **X**.
##### Connections
* Forward Links: [Gram-Schmidt Orthogonalization](/notes/gram-schmidt-orthogonalization/)
* Backward Links: [Angles and Orthogonality](/notes/angles-and-orthogonality/), [Inner Products](/notes/inner-products/)
