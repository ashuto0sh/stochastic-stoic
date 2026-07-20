---
title: "Mathematics for Machine Learning"
description: "A Zettelkasten on the mathematics behind machine learning: linear algebra, matrix decompositions, calculus, and probability."
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

1. [Vectors](/notes/mathematics-for-ml/vectors/) — The basic objects: what they are and how they behave
2. [Closure](/notes/mathematics-for-ml/closure/) — When an operation keeps you inside the set
3. [Groups](/notes/mathematics-for-ml/groups/) — Sets with a well-behaved operation (closure, inverse, identity)
4. [Vector Spaces](/notes/mathematics-for-ml/vector-spaces/) — Groups of vectors with scalar multiplication
5. [Linear Independence](/notes/mathematics-for-ml/linear-independence/) — Non-redundancy; each vector adds new information
6. [Basis](/notes/mathematics-for-ml/basis/) — A minimal, spanning set; the coordinate system of a space

---

## II. Matrices & Linear Systems

How equations are represented and solved using matrices.

7. [Matrix](/notes/mathematics-for-ml/matrix/) — Rectangular arrays; the language of linear algebra
8. [System of Linear Equations](/notes/mathematics-for-ml/system-of-linear-equations/) — The central problem: find x such that Ax = b
   - [Row View of a System of Linear Equations](/notes/mathematics-for-ml/row-view-of-a-system-of-linear-equations/) — Each equation as a hyperplane
   - [Column View of a System of Linear Equations](/notes/mathematics-for-ml/column-view-of-a-system-of-linear-equations/) — Finding the right linear combination of columns
   - [Matrix View of a System of Linear Equations](/notes/mathematics-for-ml/matrix-view-of-a-system-of-linear-equations/) — A as an operator transforming x into b
9. [Gaussian Elimination](/notes/mathematics-for-ml/gaussian-elimination/) — The algorithmic workhorse for solving linear systems
10. [Inverse and Transpose](/notes/mathematics-for-ml/inverse-and-transpose/) — Undoing a matrix transformation; flipping rows and columns
11. [Rank](/notes/mathematics-for-ml/rank/) — The effective dimensionality of a matrix's output
12. [Image and Kernel](/notes/mathematics-for-ml/image-and-kernel/) — The output space (image) and collapse space (kernel); rank-nullity theorem
13. [Determinant](/notes/mathematics-for-ml/determinant/) — Volume scaling factor; zero iff non-invertible
14. [Trace](/notes/mathematics-for-ml/trace/) — Sum of diagonal elements; sum of eigenvalues

---

## III. Linear Mappings & Transformations

How matrices encode functions between vector spaces.

15. [Linear Mappings](/notes/mathematics-for-ml/linear-mappings/) — Functions preserving addition and scalar multiplication
16. [Matrices as Linear Transformation](/notes/mathematics-for-ml/matrices-as-linear-transformation/) — The matrix as a geometric operator on space
17. [Matrix Representation of Linear Mappings](/notes/mathematics-for-ml/matrix-representation-of-linear-mappings/) — Encoding a linear map as a matrix w.r.t. a basis
18. [Views of Matrix Multiplication](/notes/mathematics-for-ml/views-of-matrix-multiplication/) — Four perspectives: dot product, column, row, outer product
19. [Rotations](/notes/mathematics-for-ml/rotations/) — Linear transformations that preserve distances and angles

---

## IV. Geometry & Inner Products

Measuring length, distance, angles, and projections.

20. [Inner Products](/notes/mathematics-for-ml/inner-products/) — Bilinear maps that generalize the dot product
21. [Norms](/notes/mathematics-for-ml/norms/) — Length functions derived from inner products
22. [Lengths and Distances](/notes/mathematics-for-ml/lengths-and-distances/) — Inner products induce norms; Cauchy-Schwarz inequality
23. [Angles and Orthogonality](/notes/mathematics-for-ml/angles-and-orthogonality/) — Angles between vectors; orthogonal and orthonormal bases
24. [Orthogonal Projections](/notes/mathematics-for-ml/orthogonal-projections/) — Projecting a vector onto a subspace; least-squares geometry
25. [Gram-Schmidt Orthogonalization](/notes/mathematics-for-ml/gram-schmidt-orthogonalization/) — Constructing an orthonormal basis from any basis
26. [Inner Product of Functions](/notes/mathematics-for-ml/inner-product-of-functions/) — Extending inner products to function spaces via integration
27. [Matrices as Inner Products](/notes/mathematics-for-ml/matrices-as-inner-products/) — SPD matrices define custom geometries; Mahalanobis distance
28. [Symmetric, Positive Definite Matrices](/notes/mathematics-for-ml/symmetric-positive-definite-matrices/) — The matrices that define valid inner products

---

## V. Matrix Decompositions

Factoring matrices to reveal structure and enable computation.

29. [Matrix decomposition landscape](/notes/mathematics-for-ml/matrix-decomposition-landscape/) — Overview and taxonomy of decomposition methods
30. [Characteristic Polynomial](/notes/mathematics-for-ml/characteristic-polynomial/) — det(A − λI) = 0; isolates eigenvalues as roots
31. [Eigenvalues and eigenvectors](/notes/mathematics-for-ml/eigenvalues-and-eigenvectors/) — Directions scaled but not rotated; spectral structure
32. [Eigendecomposition and Diagonalization](/notes/mathematics-for-ml/eigendecomposition-and-diagonalization/) — A = PDP⁻¹; powers, dynamics, PCA
33. [Cholesky Decomposition](/notes/mathematics-for-ml/cholesky-decomposition/) — A = LLᵀ for SPD matrices; efficient system solving
34. [Singular Value Decomposition](/notes/mathematics-for-ml/singular-value-decomposition/) — A = UΣVᵀ; the universal factorization for any matrix

---

## VI. Calculus

Derivatives generalized to multiple variables and vector-valued functions.

35. [Univariate Calculus Refresher](/notes/mathematics-for-ml/univariate-calculus-refresher/) — Derivative as a limit; Taylor series; differentiation rules
36. [Partial Derivative](/notes/mathematics-for-ml/partial-derivative/) — Differentiating with respect to one variable at a time; the gradient
37. [Gradients of Vector-Valued Functions](/notes/mathematics-for-ml/gradients-of-vector-valued-functions/) — The Jacobian matrix; generalizing gradient to f: Rⁿ → Rᵐ
38. [The Jacobian Determinant](/notes/mathematics-for-ml/the-jacobian-determinant/) — Local volume scaling factor for nonlinear transformations
39. [Hessian Matrix](/notes/mathematics-for-ml/hessian-matrix/) — Matrix of second-order partials; curvature; identifying critical points

---

## VII. Probability Theory

The mathematical framework for reasoning under uncertainty.

40. [The Landscape of Probability Theory](/notes/mathematics-for-ml/the-landscape-of-probability-theory/) — Mindmap overview of the full probability landscape
41. [The Probability Space](/notes/mathematics-for-ml/the-probability-space/) — The triplet (Ω, A, P); Kolmogorov axioms
42. [Conditional Probability](/notes/mathematics-for-ml/conditional-probability/) — P(A|B); independence; chain rule; law of total probability
43. [Random Variables](/notes/mathematics-for-ml/random-variables/) — RVs as functions Ω → ℝ; PMF, PDF, CDF
44. [Expectation and Variance](/notes/mathematics-for-ml/expectation-and-variance/) — E[X], Var(X); linearity of expectation; bias-variance
45. [Common Probability Distributions](/notes/mathematics-for-ml/common-probability-distributions/) — Bernoulli, Gaussian, Categorical, Poisson, Beta and more
46. [Law of Large Numbers and Central Limit Theorem](/notes/mathematics-for-ml/law-of-large-numbers-and-central-limit-theorem/) — Sample mean converges to E[X]; sums of i.i.d. RVs become Gaussian
47. [Covariance Matrix](/notes/mathematics-for-ml/covariance-matrix/) — Cov(X,Y); the Σ matrix as an SPD matrix; Mahalanobis distance
48. [MLE and MAP](/notes/mathematics-for-ml/mle-and-map/) — MLE as log-likelihood maximisation; MAP as MLE + prior; connection to loss functions and regularisation
49. [Bayes Theorem](/notes/mathematics-for-ml/bayes-theorem/) — Posterior ∝ likelihood × prior; the engine of Bayesian ML

---

## VIII. Bridges

Notes that connect two clusters. Each lives at the intersection of two bodies of knowledge.

*Linear Algebra ↔ Probability:*

50. [Geometry of Random Variables](/notes/mathematics-for-ml/geometry-of-random-variables/) — Variance = squared length; correlation = cosine angle; RVs form a Hilbert space
51. [Orthogonal Projections as Conditional Expectation](/notes/mathematics-for-ml/orthogonal-projections-as-conditional-expectation/) — E[Y|X] is the orthogonal projection of Y onto the subspace of functions of X; why MSE loss targets the conditional mean

*Calculus ↔ Probability:*

52. [Transformations of Probability Densities](/notes/mathematics-for-ml/transformations-of-probability-densities/) — How a PDF changes under a nonlinear map; the Jacobian determinant as a density scaling factor

---

## Cross-Cluster Connections

Key conceptual bridges between clusters:

| From                                      | To                                                    | Why                                                                 |
| ----------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------- |
| [Symmetric, Positive Definite Matrices](/notes/mathematics-for-ml/symmetric-positive-definite-matrices/) | [Inner Products](/notes/mathematics-for-ml/inner-products/)                                    | SPD matrices define valid inner products                            |
| [Determinant](/notes/mathematics-for-ml/determinant/)                           | [Characteristic Polynomial](/notes/mathematics-for-ml/characteristic-polynomial/)                         | det(A − λI) defines the char. poly                                  |
| [Eigenvalues and eigenvectors](/notes/mathematics-for-ml/eigenvalues-and-eigenvectors/)          | [Eigendecomposition and Diagonalization](/notes/mathematics-for-ml/eigendecomposition-and-diagonalization/)            | Eigenvalues/vectors are the ingredients                             |
| [Rank](/notes/mathematics-for-ml/rank/)                                  | [Image and Kernel](/notes/mathematics-for-ml/image-and-kernel/)                                  | rank(A) = dim(Im(Φ)); rank-nullity theorem                          |
| [Orthogonal Projections](/notes/mathematics-for-ml/orthogonal-projections/)                | [Gram-Schmidt Orthogonalization](/notes/mathematics-for-ml/gram-schmidt-orthogonalization/)                    | G-S iteratively applies projections                                 |
| [Basis](/notes/mathematics-for-ml/basis/)                                 | [Matrix Representation of Linear Mappings](/notes/mathematics-for-ml/matrix-representation-of-linear-mappings/)          | A basis is needed to write down a transformation matrix             |
| [Angles and Orthogonality](/notes/mathematics-for-ml/angles-and-orthogonality/)              | [Rotations](/notes/mathematics-for-ml/rotations/)                                         | Rotations preserve angles and distances                             |
| [The Probability Space](/notes/mathematics-for-ml/the-probability-space/)                 | [Bayes Theorem](/notes/mathematics-for-ml/bayes-theorem/)                                     | Conditional probability from the probability space                  |
| [Inner Products](/notes/mathematics-for-ml/inner-products/)                        | [Geometry of Random Variables](/notes/mathematics-for-ml/geometry-of-random-variables/)                      | RVs with finite variance form an inner product space                |
| [Covariance Matrix](/notes/mathematics-for-ml/covariance-matrix/)                     | [Symmetric, Positive Definite Matrices](/notes/mathematics-for-ml/symmetric-positive-definite-matrices/)             | The covariance matrix is always symmetric positive semi-definite    |
| [Orthogonal Projections](/notes/mathematics-for-ml/orthogonal-projections/)                | [Orthogonal Projections as Conditional Expectation](/notes/mathematics-for-ml/orthogonal-projections-as-conditional-expectation/) | Conditional expectation IS an orthogonal projection in L²           |
| [The Jacobian Determinant](/notes/mathematics-for-ml/the-jacobian-determinant/)              | [Transformations of Probability Densities](/notes/mathematics-for-ml/transformations-of-probability-densities/)          | The Jacobian determinant scales density under a change of variables |
| [Expectation and Variance](/notes/mathematics-for-ml/expectation-and-variance/)              | [Law of Large Numbers and Central Limit Theorem](/notes/mathematics-for-ml/law-of-large-numbers-and-central-limit-theorem/)    | LLN and CLT are theorems about limits of sample means               |
