---
title: "Eigenvalues and eigenvectors"
tags:
  - "type/concept"
  - "matrix-decomposition"
  - "eigenvalues"
  - "eigenvectors"
---

##### Formal
###### (Eigenvalues and Eigenvectors)
Let $A \in \mathbb{R}^{n\times n}$ be a square matrix. Then $\lambda \in \mathbb{R}$ is an *eigenvalue* of $A$ and $x \in \mathbb{R}^n \setminus \{ 0 \}$ is the corresponding eigenvector of $A$ if 

$$
Ax=\lambda x. \tag{1}
$$

###### (Theorem)
$\text{rk}(A-\lambda I) = 0$
> [!note]- Proof
> 1. The equation for an eigenvector is `Ax = λx`. Rearranging it gives us: `(A - λI)x = 0`
> 
> 2. Let's call the new matrix `M = (A - λI)`. The equation is now `Mx = 0`. 
> 
> 3. This equation asks a simple question: "What vectors **x** does the transformation **M** send to the zero vector?" For _any_ matrix `M`, the zero vector (`x = 0`) is always a solution.
> 
> 4. This is the "trivial" solution. But by definition, an **eigenvector must be non-zero**.
> 
> 5. So, for `λ` to be a valid eigenvalue, there must be some **non-zero** vector `x` that the matrix `M = (A - λI)` squashes completely down to the origin.
> 
> 6. What kind of transformation can squash a non-zero vector to zero? Only a transformation that is "destructive"—one that **collapses the space**. A transformation that collapses space loses at least one dimension.

###### (Collinearity and Codirection)
Two vectors that point in the same direction are called *codirected*. Two vectors are *collinear* if they point in the same or the opposite direction.
###### (Theorem):
$\lambda \in \mathbb{R}$ is an eigenvalue of $A \in \mathbb{R}^{n\times n}$ if and only if $\lambda$ is a root of the characteristic polynomial $p_A(λ)$ of $A$. ref: [Characteristic Polynomial](/notes/mathematics-for-ml/characteristic-polynomial/)
###### (Eigenspace and Eigenspectrum)
For $A \in \mathbb{R}^{n\times n}$, the set of all eigenvectors of $A$ associated with an eigenvalue $\lambda$ span a subspace of $\mathbb{R}^n$, which is called the *eigenspace* of $A$ w.r.t. $\lambda$  and is denoted by $E_{\lambda}$. The set of all eigenvalues of $A$ is called *eigenspectrum* of $A$.
> [!note]- Proof
> Any $z \in E_{\lambda}$ can be represented as $z = mx+ny$ where $x,y$ are eigenvectors of $A$ w.r.t. $\lambda$.  (take only two eigenvectors here, easy to extend to a higher number of eigenvectors w.r.t. $\lambda$)
> $Az = A(mx) + A(ny)$
> $= mAx + nAy$
> $= m\lambda x+n\lambda y$
> $=\lambda (mx + ny)$
> $=\lambda z$
###### (Geometric multiplicity)
The **dimension** of the eigenspace $E_λ$ is called the **geometric multiplicity** of the eigenvalue $λ$. It tells you how many linearly independent eigenvectors exist for that eigenvalue.
###### (Theorem)
The eigenvectors $x_{1},\dots, x_n$ of a matrix $A \in \mathbb{R}^{n\times n}$ with $n$ distinct eigenvalues $λ_1,\dots, λ_n$ are linearly independent.
> [!note]- Proof
> Imagine you have two eigenvectors $x_{1}, x_{2}$ corresponding to two eigenvalues $\lambda_{1}, \lambda_{2}$ for a transformation matrix $A$.
> Suppose that they are not linearly independent. This means that $\exists k\in \mathbb{R} | x_{1} = kx_{2}$.
> But, if $x_{1}$ is a multiple of $x_{2}$ (viz., they are pointing in the same direction) then the matrix $A$ would have to stretch them by same value (definition of Eigenvalue). Hence, we arrive at a contradiction and $\lambda_{1} \ne \lambda_{2}$.
###### (Defective Matrices)
A square matrix $A \in \mathbb{R}^{n\times n}$ is said to be *defective* if it possesses fewer than $n$ linearly independent eigenvectors.
> [!info]- Defective matrices hinder with matrix decomposition.
> - This is due to the implication that for the decomposition of for $PDP^{-1}$, a linearly independent set of eigenvectors guarantees that $D$ is a diagonal matrix.
> - But if P is still invertible, we can still get a decomposition of the form $PJP^{-1}$ where $J$ is kind of diagonal but not completely. Note that $PDP^{-1}$ decomposition is ideal but $PJP^{-1}$ always exists when $P$ is invertible.
###### (Spectral Theorem)
If $A \in \mathbb{R}^{n \times n}$ is symmetric, there exists an orthonormal basis of the corresponding vector space $V$ consisting of eigenvectors of $A$, and each eigenvalue is real.
Due to [Angles and Orthogonality](/notes/mathematics-for-ml/angles-and-orthogonality/#orthogonal-matrix), this leads to a supercharged decomposition of the form $PDP^T$ (since $P^{-1}=P^T$).
###### (Theorem)
The determinant of a square matrix is the product of its eigenvalues. (think of it from volume perspective)

$$
\det(A) = \prod_{i=1}^n\lambda_{i}. \tag{2}
$$

The trace of the matrix is the sum of the eigenvalues.

$$
\text{tr}(A) = \sum_{i=1}^n\lambda_{i}. \tag{3}
$$

##### Intuition
Decomposition the the overall objective of all these concepts.
###### How defectiveness hinders decomposition
Geometrically, eigendecomposition finds the axes along which the transformation matrix acts purely by stretching/shrinking. A defective matrix, however, represents a transformation that includes shearing. Shearing skews the space in a way that cannot be represented merely by scaling along fixed axes. 

Imagine a linear transformation as a function that takes a vector and maps it to a new vector. For a given transformation matrix **A**, most vectors will be knocked off their original direction when multiplied by **A**. However, there exist special vectors, **eigenvectors**, that do not change their direction under this transformation. They are only scaled—stretched, shrunk, or flipped. The factor by which an eigenvector is scaled is its corresponding **eigenvalue**.

Think of it this way: applying a linear transformation to a vector space is like stretching or rotating a sheet of rubber. The eigenvectors are the directions that are only stretched or shrunk, not rotated. The eigenvalue tells you how much stretching or shrinking occurs in that direction.

This concept is crucial because it allows us to identify the principal axes of a transformation, the directions along which the transformation acts purely by scaling. In machine learning, this is invaluable for understanding the variance in data and for dimensionality reduction.
##### ML Applications
Eigenvalues and eigenvectors are not just mathematical curiosities; they are at the heart of many machine learning algorithms and concepts:
- **Principal Component Analysis (PCA):** In PCA, eigenvectors of the covariance matrix of the data are the principal components. The eigenvalues give the variance of the data along these principal components. By selecting the eigenvectors with the largest eigenvalues, you can reduce the dimensionality of the data while preserving the most variance. This is a cornerstone of dimensionality reduction.
- **Understanding Data Variance:** Eigen-decomposition of a covariance matrix reveals the directions of maximum variance in your data. This is crucial for understanding the structure of your data and for feature engineering.
- **Spectral Clustering:** This clustering technique uses the eigenvectors of a similarity matrix of the data to perform dimensionality reduction before clustering in a lower-dimensional space.
- **Google's PageRank Algorithm:** The PageRank of a webpage is related to the eigenvector of the link matrix of the web, corresponding to the largest eigenvalue.
##### Connections
* Forward Links: [Eigendecomposition and Diagonalization](/notes/mathematics-for-ml/eigendecomposition-and-diagonalization/)
* Backward Links: [Determinant](/notes/mathematics-for-ml/determinant/), [Trace](/notes/mathematics-for-ml/trace/), [Characteristic Polynomial](/notes/mathematics-for-ml/characteristic-polynomial/), [Angles and Orthogonality](/notes/mathematics-for-ml/angles-and-orthogonality/), [Matrix decomposition landscape](/notes/mathematics-for-ml/matrix-decomposition-landscape/), [Symmetric, Positive Definite Matrices](/notes/mathematics-for-ml/symmetric-positive-definite-matrices/)
