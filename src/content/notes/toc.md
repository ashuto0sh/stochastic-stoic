---
title: "TOC"
tags:
  - "type/index"
aliases:
  - "Table of Contents"
  - "Index"
---

Notes are grouped by conceptual cluster and ordered from foundational to advanced within each cluster. Each cluster feeds into the next.

---

## I. Algebraic Structures

The algebraic scaffolding that everything else is built on.

1. [Vectors](/notes/vectors/) — The basic objects: what they are and how they behave
2. [Closure](/notes/closure/) — When an operation keeps you inside the set
3. [Groups](/notes/groups/) — Sets with a well-behaved operation (closure, inverse, identity)
4. [Vector Spaces](/notes/vector-spaces/) — Groups of vectors with scalar multiplication
5. [Linear Independence](/notes/linear-independence/) — Non-redundancy; each vector adds new information
6. [Basis](/notes/basis/) — A minimal, spanning set; the coordinate system of a space

---

## II. Matrices & Linear Systems

How equations are represented and solved using matrices.

7. [Matrix](/notes/matrix/) — Rectangular arrays; the language of linear algebra
8. [System of Linear Equations](/notes/system-of-linear-equations/) — The central problem: find x such that Ax = b
   - [Row View of a System of Linear Equations](/notes/row-view-of-a-system-of-linear-equations/) — Each equation as a hyperplane
   - [Column View of a System of Linear Equations](/notes/column-view-of-a-system-of-linear-equations/) — Finding the right linear combination of columns
   - [Matrix View of a System of Linear Equations](/notes/matrix-view-of-a-system-of-linear-equations/) — A as an operator transforming x into b
9. [Gaussian Elimination](/notes/gaussian-elimination/) — The algorithmic workhorse for solving linear systems
10. [Inverse and Transpose](/notes/inverse-and-transpose/) — Undoing a matrix transformation; flipping rows and columns
11. [Rank](/notes/rank/) — The effective dimensionality of a matrix's output
12. [Image and Kernel](/notes/image-and-kernel/) — The output space (image) and collapse space (kernel); rank-nullity theorem
13. [Determinant](/notes/determinant/) — Volume scaling factor; zero iff non-invertible
14. [Trace](/notes/trace/) — Sum of diagonal elements; sum of eigenvalues

---

## III. Linear Mappings & Transformations

How matrices encode functions between vector spaces.

15. [Linear Mappings](/notes/linear-mappings/) — Functions preserving addition and scalar multiplication
16. [Matrices as Linear Transformation](/notes/matrices-as-linear-transformation/) — The matrix as a geometric operator on space
17. [Matrix Representation of Linear Mappings](/notes/matrix-representation-of-linear-mappings/) — Encoding a linear map as a matrix w.r.t. a basis
18. [Views of Matrix Multiplication](/notes/views-of-matrix-multiplication/) — Four perspectives: dot product, column, row, outer product
19. [Rotations](/notes/rotations/) — Linear transformations that preserve distances and angles

---

## IV. Geometry & Inner Products

Measuring length, distance, angles, and projections.

20. [Inner Products](/notes/inner-products/) — Bilinear maps that generalize the dot product
21. [Norms](/notes/norms/) — Length functions derived from inner products
22. [Lengths and Distances](/notes/lengths-and-distances/) — Inner products induce norms; Cauchy-Schwarz inequality
23. [Angles and Orthogonality](/notes/angles-and-orthogonality/) — Angles between vectors; orthogonal and orthonormal bases
24. [Orthogonal Projections](/notes/orthogonal-projections/) — Projecting a vector onto a subspace; least-squares geometry
25. [Gram-Schmidt Orthogonalization](/notes/gram-schmidt-orthogonalization/) — Constructing an orthonormal basis from any basis
26. [Inner Product of Functions](/notes/inner-product-of-functions/) — Extending inner products to function spaces via integration
27. [Matrices as Inner Products](/notes/matrices-as-inner-products/) — SPD matrices define custom geometries; Mahalanobis distance
28. [Symmetric, Positive Definite Matrices](/notes/symmetric-positive-definite-matrices/) — The matrices that define valid inner products

---

## V. Matrix Decompositions

Factoring matrices to reveal structure and enable computation.

29. [Matrix decomposition landscape](/notes/matrix-decomposition-landscape/) — Overview and taxonomy of decomposition methods
30. [Characteristic Polynomial](/notes/characteristic-polynomial/) — det(A − λI) = 0; isolates eigenvalues as roots
31. [Eigenvalues and eigenvectors](/notes/eigenvalues-and-eigenvectors/) — Directions scaled but not rotated; spectral structure
32. [Eigendecomposition and Diagonalization](/notes/eigendecomposition-and-diagonalization/) — A = PDP⁻¹; powers, dynamics, PCA
33. [Cholesky Decomposition](/notes/cholesky-decomposition/) — A = LLᵀ for SPD matrices; efficient system solving
34. [Singular Value Decomposition](/notes/singular-value-decomposition/) — A = UΣVᵀ; the universal factorization for any matrix

---

## VI. Calculus

Derivatives generalized to multiple variables and vector-valued functions.

35. [Univariate Calculus Refresher](/notes/univariate-calculus-refresher/) — Derivative as a limit; Taylor series; differentiation rules
36. [Partial Derivative](/notes/partial-derivative/) — Differentiating with respect to one variable at a time; the gradient
37. [Gradients of Vector-Valued Functions](/notes/gradients-of-vector-valued-functions/) — The Jacobian matrix; generalizing gradient to f: Rⁿ → Rᵐ
38. [The Jacobian Determinant](/notes/the-jacobian-determinant/) — Local volume scaling factor for nonlinear transformations
39. [Hessian Matrix](/notes/hessian-matrix/) — Matrix of second-order partials; curvature; identifying critical points

---

## VII. Probability Theory

The mathematical framework for reasoning under uncertainty.

40. [The Landscape of Probability Theory](/notes/the-landscape-of-probability-theory/) — Mindmap overview of the full probability landscape
41. [The Probability Space](/notes/the-probability-space/) — The triplet (Ω, A, P); Kolmogorov axioms
42. [Conditional Probability](/notes/conditional-probability/) — P(A|B); independence; chain rule; law of total probability
43. [Random Variables](/notes/random-variables/) — RVs as functions Ω → ℝ; PMF, PDF, CDF
44. [Expectation and Variance](/notes/expectation-and-variance/) — E[X], Var(X); linearity of expectation; bias-variance
45. [Common Probability Distributions](/notes/common-probability-distributions/) — Bernoulli, Gaussian, Categorical, Poisson, Beta and more
46. [Law of Large Numbers and Central Limit Theorem](/notes/law-of-large-numbers-and-central-limit-theorem/) — Sample mean converges to E[X]; sums of i.i.d. RVs become Gaussian
47. [Covariance Matrix](/notes/covariance-matrix/) — Cov(X,Y); the Σ matrix as an SPD matrix; Mahalanobis distance
48. [MLE and MAP](/notes/mle-and-map/) — MLE as log-likelihood maximisation; MAP as MLE + prior; connection to loss functions and regularisation
49. [Bayes Theorem](/notes/bayes-theorem/) — Posterior ∝ likelihood × prior; the engine of Bayesian ML

---

## VIII. Bridges

Notes that connect two clusters. Each lives at the intersection of two bodies of knowledge.

*Linear Algebra ↔ Probability:*

50. [Geometry of Random Variables](/notes/geometry-of-random-variables/) — Variance = squared length; correlation = cosine angle; RVs form a Hilbert space
51. [Orthogonal Projections as Conditional Expectation](/notes/orthogonal-projections-as-conditional-expectation/) — E[Y|X] is the orthogonal projection of Y onto the subspace of functions of X; why MSE loss targets the conditional mean

*Calculus ↔ Probability:*

52. [Transformations of Probability Densities](/notes/transformations-of-probability-densities/) — How a PDF changes under a nonlinear map; the Jacobian determinant as a density scaling factor

---

## Cross-Cluster Connections

Key conceptual bridges between clusters:

| From                                      | To                                                    | Why                                                                 |
| ----------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------- |
| [Symmetric, Positive Definite Matrices](/notes/symmetric-positive-definite-matrices/) | [Inner Products](/notes/inner-products/)                                    | SPD matrices define valid inner products                            |
| [Determinant](/notes/determinant/)                           | [Characteristic Polynomial](/notes/characteristic-polynomial/)                         | det(A − λI) defines the char. poly                                  |
| [Eigenvalues and eigenvectors](/notes/eigenvalues-and-eigenvectors/)          | [Eigendecomposition and Diagonalization](/notes/eigendecomposition-and-diagonalization/)            | Eigenvalues/vectors are the ingredients                             |
| [Rank](/notes/rank/)                                  | [Image and Kernel](/notes/image-and-kernel/)                                  | rank(A) = dim(Im(Φ)); rank-nullity theorem                          |
| [Orthogonal Projections](/notes/orthogonal-projections/)                | [Gram-Schmidt Orthogonalization](/notes/gram-schmidt-orthogonalization/)                    | G-S iteratively applies projections                                 |
| [Basis](/notes/basis/)                                 | [Matrix Representation of Linear Mappings](/notes/matrix-representation-of-linear-mappings/)          | A basis is needed to write down a transformation matrix             |
| [Angles and Orthogonality](/notes/angles-and-orthogonality/)              | [Rotations](/notes/rotations/)                                         | Rotations preserve angles and distances                             |
| [The Probability Space](/notes/the-probability-space/)                 | [Bayes Theorem](/notes/bayes-theorem/)                                     | Conditional probability from the probability space                  |
| [Inner Products](/notes/inner-products/)                        | [Geometry of Random Variables](/notes/geometry-of-random-variables/)                      | RVs with finite variance form an inner product space                |
| [Covariance Matrix](/notes/covariance-matrix/)                     | [Symmetric, Positive Definite Matrices](/notes/symmetric-positive-definite-matrices/)             | The covariance matrix is always symmetric positive semi-definite    |
| [Orthogonal Projections](/notes/orthogonal-projections/)                | [Orthogonal Projections as Conditional Expectation](/notes/orthogonal-projections-as-conditional-expectation/) | Conditional expectation IS an orthogonal projection in L²           |
| [The Jacobian Determinant](/notes/the-jacobian-determinant/)              | [Transformations of Probability Densities](/notes/transformations-of-probability-densities/)          | The Jacobian determinant scales density under a change of variables |
| [Expectation and Variance](/notes/expectation-and-variance/)              | [Law of Large Numbers and Central Limit Theorem](/notes/law-of-large-numbers-and-central-limit-theorem/)    | LLN and CLT are theorems about limits of sample means               |
