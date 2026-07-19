---
title: "Basis"
tags:
  - "type/definition"
  - "basis"
  - "linear-independence"
---

##### Formal
###### (Generating Set and Span)
Consider a vector space $V=(\mathcal{V}, +, .)$ and a set of vectors $\mathcal{A}=\{x_{1},\dots,x_{k}\} \subseteq \mathcal{V}$. If every vector $v\in V$ can be expressed as a linear combination of $x_{1},\dots,x_{k}$, $\mathcal{A}$ is called a *generating set* of $V$.
Given a set of vectors $\mathcal{A}$ with properties as above, the set of all linear combinations of vectors in $\mathcal{A}$ is called the *span* of $\mathcal{A}$. If $\mathcal{A}$ spans the vector space $V$, we write $V$=span\[$\mathcal{A}$].
###### (Basis)
Consider a vector space $V=(\mathcal{V}, +,.)$ and $\mathcal{A}\subseteq \mathcal{V}$. A generating set $\mathcal{A}$ of $V$ is called *minimal* if there exists no smaller set $\tilde{\mathcal{A}} \subseteq \mathcal{A} \subseteq \mathcal{V}$ that spans $V$. Every linearly independent generating set of $V$ is minimal and is called a *basis* of $V$.

**Key Properties:**
- All bases for a given vector space have the same number of vectors. This number is the **dimension** of the vector space.
- A vector space can have infinitely many different bases.
##### Intuition
A **basis** is a minimal and complete "recipe book" for a vector space. It's the smallest set of fundamental ingredients (vectors) you need to create every single vector in that space, with no redundant ingredients.

To be a basis, a set of vectors must satisfy two crucial conditions:
1. **It must span the space.** This means you can reach any point in the entire space just by adding and scaling your basis vectors. Your set of ingredients is _complete_.
2. **It must be linearly independent.** This means no vector in your basis can be made from the others. Your set of ingredients is _minimal_ and non-redundant. Each one provides a unique direction.
##### ML Applications
The idea of a basis isn't just about defining a space; it's about transforming it into a more useful representation. This is a core strategy in machine learning.
- **Change of Basis: The Heart of PCA**: Principal Component Analysis (PCA) is fundamentally an algorithm for finding a better basis for your data. It computes a new basis (the principal components) where the axes are aligned with the directions of maximum variance. When you express your data in this new basis (a "change of basis"), the most important information is concentrated in the first few coordinates. This allows you to discard the later coordinates (dimensionality reduction) with minimal loss of information.
- **Feature Engineering as Basis Selection**: When you perform feature engineering, you are implicitly trying to find a new representation—a new basis—for your data that makes the learning task easier. For example, transforming from Cartesian coordinates (x,y) to Polar coordinates (r,θ) is a change of basis. In this new basis, a problem that looked like a circle might become a simple rectangle, making it trivial for a linear model to solve.
- **Matrix Decompositions (Eigen and SVD)**: Techniques like Eigendecomposition and Singular Value Decomposition (SVD) are powerful because they find special bases related to a matrix.
    - **Eigendecomposition**: For a symmetric matrix, this finds an orthonormal basis made of its eigenvectors. In this basis, the transformation represented by the matrix becomes a simple scaling along the new axes.
    - **SVD**: This finds two different orthonormal bases (one for the input space and one for the output space) that neatly describe the transformation of a matrix as a rotation, a scaling, and another rotation. This is one of the most versatile tools in numerical linear algebra.
##### Connections
* Forward Links: [Gram-Schmidt Orthogonalization](/notes/gram-schmidt-orthogonalization/), [Matrix Representation of Linear Mappings](/notes/matrix-representation-of-linear-mappings/)
* Backward Links: [Vector Spaces](/notes/vector-spaces/), [Vectors](/notes/vectors/), [Linear Independence](/notes/linear-independence/)
