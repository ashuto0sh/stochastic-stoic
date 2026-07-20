---
title: "Characteristic Polynomial"
tags:
  - "type/concept"
  - "eigenvalues"
  - "matrix-decomposition"
  - "determinant"
---

##### Intuition
We know that an eigenvector of a matrix $A$ is a special vector that, when transformed by $A$, only gets scaled, not knocked off its direction. The scaling factor is the eigenvalue, $\lambda$. The core problem is, how do we find these special scaling factors, the eigenvalues?

Trying to solve the equation $Ax=\lambda x$ directly is difficult because we have two unknowns, the vector $x$ and the scalar $\lambda$.

The characteristic polynomial provides a brilliant strategy to solve this. It isolates the unknown scalar $\lambda$. It transforms the matrix-vector problem into a standard polynomial equation, like $a\lambda^2+b\lambda+c=0$, where λ is the only unknown. We can then solve this polynomial to find the eigenvalues.

In short, the characteristic polynomial is a tool that lets us find the "magic numbers" (eigenvalues) of a matrix by turning the search into a familiar root-finding problem from high school algebra.
##### Formal

$$
\begin{align}
Ax=\lambda x \\
(\text{since x is an eigenvector}) \\ \\
 \\
Ax-\lambda I x = 0 \\
(A-\lambda I)x=0 \\
(\text{for x to have non-trivial solutions, }(A-\lambda I)\text{ must be singular}) \\ \\

\therefore \; \det(A-\lambda I) = 0 \tag{1}
\end{align}
$$

The left side of equation (3) $p(\lambda) = \det(A-\lambda I)$ is a polynomial in variable $\lambda$, and it is called the **characteristic polynomial**.
##### ML Application
While in practice, for large matrices, we use iterative numerical methods to find eigenvalues, the characteristic polynomial is the theoretical foundation and has several key roles:
- **Foundation of Eigendecomposition**: It is the fundamental algebraic tool used to prove the existence of eigenvalues and to find them for small matrices by hand. The entire process of eigendecomposition, which is central to PCA, starts with this step.
- **Theoretical Analysis**: The characteristic polynomial is used to analyze the properties of a transformation. For example, in studying dynamical systems or Markov chains, the roots of the characteristic polynomial of the system's transition matrix determine the long-term stability and behavior of the system.
- **Connecting Key Matrix Properties**: As seen in the $2\times 2$ example, the characteristic polynomial provides a direct link between the eigenvalues ($λ_i$), the determinant ($∏ λ_i$), and the trace ($∑λ_i$), which are three of the most important single-number descriptors of a square matrix.
##### Connections
* Forward Links: [Eigenvalues and eigenvectors](/notes/mathematics-for-ml/eigenvalues-and-eigenvectors/)
* Backward Links: [Determinant](/notes/mathematics-for-ml/determinant/), [Trace](/notes/mathematics-for-ml/trace/)
