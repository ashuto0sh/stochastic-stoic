---
title: "Eigendecomposition and Diagonalization"
tags:
  - "type/concept"
  - "matrix-decomposition"
  - "eigendecomposition"
---

##### Formal
###### (Diagonal Matrix)
A matrix where all the non-diagonal elements are $0$. Given a diagonal matrix $D$:
- $D^k$ is given by each diagonal entries raised to the power $k$.
- $\det(D) = \prod d_{ii}$
- $D^{-1}$ is given by reciprocal of each diagonal entry, if it's non-zero.
###### (Diagonalizable)
A matrix $A \in \mathbb{R}^{n\times n}$ is *diagonalizable* if it is similar to a diagonal matrix, i.e., if there exists an invertible matrix $P \in \mathbb{R}^{n\times n}$ such that $D=P^{-1}AP$.

> [!info]- What does $D = P^{-1}AP$ mean geometrically?
> Think of $P$ and $P^{-1}$ as translators between the standard coordinate system and the "eigenvector coordinate system".
> If you apply the sequence $P^{-1}AP$ to a vector $x$ (reading right-to-left):
> 1. **$P$**: Translate $x$ from the eigen-coordinate system to the standard coordinate system.
> 2. **$A$**: Apply the complex transformation $A$ in the standard coordinate system.
> 3. **$P^{-1}$**: Translate the result back into the eigen-coordinate system.
> 
> The equation states: *"If you wrap the complex transformation $A$ in these translators, the resulting operation is exactly identical to a simple diagonal scaling matrix $D$."* It answers: *"What does $A$ look like if I am standing in the eigenvector coordinate system?"*

> [!note]- Properties of similar matrices
> Because similar matrices describe the same underlying linear mapping, they share several key properties that are independent of the chosen basis:
>- **Same Determinant**: They have the same determinant, which geometrically represents how the transformation scales volume.
>- **Same Trace**: They share the same trace, which is the sum of the diagonal elements.  
>- **Same Eigenvalues**: They possess the same eigenvalues, which describe the scaling factors along the transformation's principal axes.
> 
> This means that while the matrices themselves look different, the fundamental characteristics of the transformation they represent—like scaling, rotation, and shearing properties—are identical.

>[!tip] Diagonalizing a matrix $A \in \mathbb{R}^{n×n}$ is a way of expressing the same linear mapping but in another basis.
###### (Eigendecomposition)
A square matrix $A \in \mathbb{R}^{n\times n}$ can be factored into 

$$
A=PDP^{-1} \tag{1}
$$

if and only if eigenvectors of $A$ form a basis in $\mathbb{R}^{n\times n}$.
* The columns of $P$ are the $n$ linearly independent eigenvectors of $A$.
* $D$ is a diagonal matrix containing the corresponding eigenvalues.
###### (Theorem)
A symmetric matrix $S \in \mathbb{R}^{n\times n}$ can always be diagonalized. Also, since the eigenvectors of $S$ form an orthonormal basis, $P^{-1}=P^T$, $\therefore S=PDP^T$.
##### Intuition
At its heart, **eigendecomposition** is a way of breaking down a complex matrix transformation into its most fundamental components. Imagine a square matrix A as a function that transforms vectors in a space—it might rotate, stretch, shear, or reflect them. While its effect on an arbitrary vector can be complex, there often exist "special" vectors.

When the matrix $A$ is applied to one of these special vectors, the vector's direction does not change. It is simply scaled—stretched, shrunk, or flipped. These special, directionally-invariant vectors are called **eigenvectors**, and the corresponding scaling factors are the **eigenvalues**.

**Diagonalization** is the ultimate payoff of this process. If a matrix has enough linearly independent eigenvectors to form a basis for the space, we can switch into a new coordinate system defined by these eigenvectors. In this new coordinate system, the complex transformation A becomes a simple diagonal matrix D. A diagonal matrix is computationally trivial—it only performs scaling along its axes.

The full operation, $A=PDP^{−1}$, can be intuitively understood as a three-step process:
1. **$P^{-1}$ (Change of Basis):** The matrix $P^{-1}$ transforms a vector from the standard coordinate system into the coordinate system of the eigenvectors.
2. **$D$ (Simple Scaling):** The diagonal matrix $D$ performs a simple scaling operation along each of the new eigenvector axes. This is the core, simplified action of the original transformation.
3. **$P$ (Change of Basis Back):** The matrix $P$ transforms the scaled vector back into the original, standard coordinate system.
So, diagonalization simplifies a complex problem by changing the perspective to one where the problem is trivial to solve, and then translating the solution back to the original perspective.
###### Computational Benefits
Once a matrix is diagonalized, certain computations become very efficient:
- **Matrix Powers:** Calculating $A^k$ becomes trivial:

$$
A^k=(PDP^{-1})^k=PDP^{-1}PDP^{-1}\dots PDP^{-1} = PD^kP^{-1} \tag{2}
$$

Computing $D^k$ simply involves raising the diagonal elements to the power of $k$.    
- **Determinant:** The determinant of A is the product of its eigenvalues:

$$
\det(A)=\det(PDP^{-1})=\det(P)\det(D)\det(P^{-1})=\det(D)=\prod_{i=1}^n\lambda_{i}. \tag{3}
$$

##### ML Applications
Eigendecomposition is not just a mathematical curiosity; it is the analytical engine behind several key machine learning algorithms.
- **Principal Component Analysis (PCA):** This is the quintessential application. The goal of PCA  is to find the directions of maximum variance in a dataset. These directions are precisely the **eigenvectors** of the data's covariance matrix (which is symmetric by construction). The corresponding **eigenvalues** quantify the amount of variance captured along each of these principal directions. By keeping only the eigenvectors associated with the largest eigenvalues, we achieve effective dimensionality reduction.
- **Spectral Methods:** Eigendecomposition is the core of a class of algorithms known as spectral methods. For instance, in **spectral clustering**, the eigenvectors of a graph Laplacian matrix are used to find clusters in data by embedding the data into a lower-dimensional space where the clusters become more apparent.
- **Understanding Gaussian Distributions:** The shape of a multivariate Gaussian distribution is defined by its covariance matrix Σ. The eigenvectors of $Σ$ are the principal axes of the elliptical probability contours, and the square roots of the eigenvalues give the standard deviation (spread) of the data along these axes.
- **Analyzing Optimization Surfaces:** In optimization the Hessian matrix (the matrix of second derivatives) describes the local curvature of the loss function. The eigenvalues of the Hessian at a stationary point can tell you if it's a minimum (all positive eigenvalues), maximum (all negative eigenvalues), or saddle point (mixed eigenvalues).
## Connections
* Forward Links: [Singular Value Decomposition](/notes/mathematics-for-ml/singular-value-decomposition/)
* Backward Links: [Matrix decomposition landscape](/notes/mathematics-for-ml/matrix-decomposition-landscape/), [Eigenvalues and eigenvectors](/notes/mathematics-for-ml/eigenvalues-and-eigenvectors/), [Determinant](/notes/mathematics-for-ml/determinant/), [Matrix Representation of Linear Mappings](/notes/mathematics-for-ml/matrix-representation-of-linear-mappings/)
