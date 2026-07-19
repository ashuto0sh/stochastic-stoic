---
title: "Rank"
tags:
  - "type/definition"
  - "rank"
  - "linear-algebra"
---

##### Formal
###### (Rank)
The number of linearly independent columns of a matrix $\boldsymbol{A} \in \mathbb{R}^{m\times n}$ equals the number of linearly independent rows and is called the *rank* of $\boldsymbol{A}$ and is denoted by rk($\boldsymbol{A}$).
###### Properties
- rk($\boldsymbol{A}$) = rk($\boldsymbol{A}^T$), i.e., the column rank equals the row rank.
- The columns of $\boldsymbol{A} \in \mathbb{R}^{m×n}$ span a subspace $U \subseteq \mathbb{R}^m$ with dim($U$) = rk($\boldsymbol{A}$). Later we will call this subspace the *image* or *range*. A basis of $U$ can be found by applying Gaussian elimination to $\boldsymbol{A}$ to identify the pivot columns.
- The rows of $\boldsymbol{A} \in \mathbb{R}^{m×n}$ span a subspace $W \subseteq \mathbb{R}^m$ with dim($W$) = rk($\boldsymbol{A}$). A basis of $W$ can be found by applying Gaussian elimination to $\boldsymbol{A}^T$.
- For all $\boldsymbol{A} \in \mathbb{R}^{m×n}$ it holds that $\boldsymbol{A}$ is regular (invertible) if and only if rk($\boldsymbol{A}$) = $n$.
- For all $\boldsymbol{A} \in \mathbb{R}^{m×n}$ and all $\boldsymbol{b} \in \mathbb{R}^{m}$ it holds that the linear equation system $\boldsymbol{Ax = b}$ can be solved if and only if rk($\boldsymbol{A}$) = rk($\boldsymbol{A|b}$), where $\boldsymbol{A|b}$ denotes the augmented system.
- For $\boldsymbol{A} \in \mathbb{R}^{m×n}$ the subspace of solutions for $\boldsymbol{Ax = 0}$ possesses dimension $n$ − rk($\boldsymbol{A}$). Later, we will call this subspace the *kernel* or the *null space*.
- A matrix $\boldsymbol{A} \in \mathbb{R}^{m×n}$ has *full rank* if its rank equals the largest possible rank for a matrix of the same dimensions. This means that the rank of a full-rank matrix is the lesser of the number of rows and columns, i.e., rk($\boldsymbol{A}$) = min($m, n$). A matrix is said to be *rank deficient* if it does not  have full rank.
##### Intuition
The **rank** of a matrix tells you the number of dimensions in the output space after the matrix transformation is applied. Think of a matrix as a machine that takes input vectors from one space and maps them to an output space. The rank is the dimension of the shape that all the possible outputs form.

Imagine a machine that takes any vector in 3D space as input.
- If the machine squashes every input vector onto a single 2D plane, its **rank is 2**.
- If it squashes every input vector onto a single line, its **rank is 1**.
- If the output can still fill the entire 3D space, it is **rank 3** (full rank).

So, the rank is a measure of how much a matrix "flattens" or "collapses" the space. A low-rank matrix causes a significant collapse in dimensionality, while a high-rank (or full-rank) matrix preserves as much dimensionality as possible. It's the "effective number of dimensions" of the matrix's output.
##### ML Applications
Rank is one of the most practical and consequential concepts in applied linear algebra and machine learning.
- **Low-Rank Approximation (PCA)**: Many high-dimensional datasets are "approximately" low-rank. This means that while the data matrix may technically be full rank, most of the information (variance) is contained within a low-dimensional subspace. PCA is an algorithm that finds the best low-rank approximation of a data matrix. Keeping the top k principal components is equivalent to creating a rank-k matrix that is as close as possible to the original. This is the core of image compression, feature extraction, and noise reduction.
- **Recommendation Systems (Matrix Completion)**: In a recommendation system, you might have a massive matrix where rows are users and columns are movies, but most entries are missing (users haven't rated most movies). The assumption is that the "true" complete matrix is low-rank, meaning user preferences can be described by a small number of latent factors (e.g., genre preference, actor preference). The problem then becomes finding the best low-rank matrix that "completes" the one you have, which is used to predict the missing ratings.
- **The Rank-Nullity Theorem**: This theorem provides a deep connection between the dimensions of the input, output, and the "collapsed" space. For an m×n matrix A:
  

$$
rank(\boldsymbol{A})+dim(Null(\boldsymbol{A})) = n
$$

  In words: the dimension of the output space (rank) plus the dimension of the input space that gets mapped to zero (nullity) equals the total dimension of the input space. This is critical for analyzing linear systems and understanding the trade-offs in a linear transformation.
##### Connections
* Forward Links: [Image and Kernel](/notes/image-and-kernel/)
* Backward Links: [Basis](/notes/basis/), [Linear Independence](/notes/linear-independence/)
