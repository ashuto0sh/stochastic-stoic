---
title: "Trace"
tags:
  - "matrix-decomposition"
  - "type/definition"
  - "trace"
---

##### Formal
###### (Trace)
The *trace* of a square matrix $A$ is defined as

$$
\text{tr}(A) \coloneqq \sum_{i=1}^na_{ii}, \tag{1}
$$

i.e., the trace is the sum of the diagonal elements of $A$.
###### (Properties)
1. **Linearity**: The trace is a linear operator.
    - $\text{tr}(A+B)=\text{tr}(A)+\text{tr}(B)$
    - $\text{tr}(cA)=c⋅\text{tr}(A)$
2. **Invariance to Transposition**: The trace of a matrix is equal to the trace of its transpose.
    - $\text{tr}(A)=\text{tr}(A⊤)$
3. **Cyclic Property**: This is one of its most powerful features. The trace of a product of matrices is invariant to cyclic permutations of the matrices.
    - $\text{tr}(AB)=\text{tr}(BA)$
    - $\text{tr}(ABC)=\text{tr}(BCA)=\text{tr}(CAB)$
    - Note: This does _not_ mean $\text{tr}(ABC)=\text{tr}(ACB)$. The order must be a cycle.
4. **Connection to Eigenvalues**: This is the most profound property and links the simple definition to the geometric intuition. The trace of a matrix is equal to the **sum of its eigenvalues**:

$$
\text{tr}(A) = \sum_{i=1}^n\lambda_{i}
$$

Trace of a linear mapping could be obtained by considering [Matrix Representation of Linear Mappings](/notes/matrix-representation-of-linear-mappings/). Note that while the matrix representation for a transformation is dependent on the Basis, the trace is independent of the choice of basis.
##### Intuition
The **trace** is the simplest possible measure of a matrix's overall "magnitude". If the [Determinant](/notes/determinant/) tells you how the matrix scales _volume_ (a product of expansions/contractions), the trace tells you about its "net expansion" in a linear, additive sense.

You can think of it as a first-order approximation of the matrix's "stretching power". For a transformation matrix, if you were to sum up the scaling factors along each of its principal stretch directions (the eigenvectors), you would get the trace.

While the determinant is a product of these factors $(\lambda_{1}\times\lambda_{2}\times\dots)$, the trace is a **sum** $(\lambda_{1}+\lambda_{2}+\dots)$. This makes it a different, but equally fundamental, descriptor of the transformation's behavior. It solves the problem of getting a quick, single-number summary of how much a matrix expands or contracts space on average across its special "eigen-directions".
##### ML Applications
The trace is a practical tool that appears frequently in machine learning, often because of its connection to eigenvalues and its convenient algebraic properties.
- **Principal Component Analysis (PCA)**: The trace of a covariance matrix $C$ represents the **total variance** of the dataset. Since the trace is also the sum of the eigenvalues, and the eigenvalues of C represent the variance captured by each principal component, this gives a neat identity: Total Variance = $\sum _{i}$ Variance of Component $i$. This allows us to calculate the percentage of total variance explained by the top $k$ principal components.
- **Measuring Error with the Frobenius Norm**: The Frobenius norm is a way to measure the "size" of a matrix, defined as the square root of the sum of the squares of all its elements. It is often used in loss functions, especially in matrix factorization and recommender systems. The squared Frobenius norm can be conveniently calculated using the trace:

$$
∣∣A∣∣_F^2=\sum_{i,j}A_{ij}^2=\text{tr}(A^TA)
$$

    This identity is used extensively when deriving optimization algorithms.
- **Optimization and Derivations**: When you need to take the derivative of a complex matrix expression with respect to a matrix (a common task when deriving learning rules), the trace provides a powerful simplification tool. Because the derivative of a scalar with respect to a matrix is well-defined, we often formulate loss functions as the trace of a matrix expression to make the calculus more tractable.
##### Connections
* Forward Links: [Characteristic Polynomial](/notes/characteristic-polynomial/)
* Backward Links: [Matrix Representation of Linear Mappings](/notes/matrix-representation-of-linear-mappings/), [Determinant](/notes/determinant/)
