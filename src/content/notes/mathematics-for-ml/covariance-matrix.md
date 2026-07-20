---
title: "Covariance Matrix"
tags:
  - "type/definition"
  - "probability"
  - "covariance"
  - "linear-algebra"
---

##### Formal
###### (Covariance)
The *covariance* between two random variables $X$ and $Y$ measures how they vary together:

$$
\text{Cov}(X, Y) \coloneqq \mathbb{E}\!\left[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])\right] = \mathbb{E}[XY] - \mathbb{E}[X]\,\mathbb{E}[Y]. \tag{1}
$$

If $X$ and $Y$ are independent, $\text{Cov}(X, Y) = 0$ (but not vice versa in general).

**(Correlation)** — a normalised, dimensionless version of covariance:

$$
\rho_{XY} = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y} \in [-1, 1]. \tag{2}
$$

###### (Covariance Matrix)
For a random vector $\mathbf{X} = [X_1, \dots, X_n]^\top$, the *covariance matrix* is the $n \times n$ matrix:

$$
\boldsymbol{\Sigma} \coloneqq \mathbb{E}\!\left[(\mathbf{X} - \boldsymbol{\mu})(\mathbf{X} - \boldsymbol{\mu})^\top\right], \quad \boldsymbol{\mu} = \mathbb{E}[\mathbf{X}]. \tag{3}
$$

The $(i,j)$ entry is $\Sigma_{ij} = \text{Cov}(X_i, X_j)$, and the diagonal is $\Sigma_{ii} = \text{Var}(X_i)$.

**Properties:**
- $\boldsymbol{\Sigma}$ is always **symmetric**: $\boldsymbol{\Sigma} = \boldsymbol{\Sigma}^\top$.
- $\boldsymbol{\Sigma}$ is always **positive semi-definite**: $\mathbf{v}^\top \boldsymbol{\Sigma}\, \mathbf{v} \geq 0$ for all $\mathbf{v}$.
- If all variables have non-zero variance and no perfect linear dependencies, $\boldsymbol{\Sigma}$ is **positive definite** — a valid inner product (see [Symmetric, Positive Definite Matrices](/notes/mathematics-for-ml/symmetric-positive-definite-matrices/)).

###### (Sample Covariance Matrix)
Given a dataset $\{\mathbf{x}_1, \dots, \mathbf{x}_N\}$ with sample mean $\bar{\mathbf{x}}$, the empirical estimate is:

$$
\hat{\boldsymbol{\Sigma}} = \frac{1}{N-1}\sum_{i=1}^N (\mathbf{x}_i - \bar{\mathbf{x}})(\mathbf{x}_i - \bar{\mathbf{x}})^\top. \tag{4}
$$

The factor $\frac{1}{N-1}$ (Bessel's correction) makes this an unbiased estimator of the population covariance.

##### Intuition
Think of your microservice cluster emitting a vector of metrics per minute: $[p99\_latency, \; error\_rate, \; cpu\_usage]$. The covariance matrix is the **correlation dashboard** for these metrics:

- Diagonal entries: variance of each individual metric (how much it fluctuates).
- Off-diagonal entries: how two metrics move together. If `cpu_usage` and `p99_latency` have high positive covariance, one predicts the other.

The shape of the covariance matrix defines the **geometry of the data cloud**. Its eigenvectors point along the principal axes of the ellipsoid; its eigenvalues are the squared radii along those axes. This is precisely what PCA computes.

##### ML Applications
- **PCA** — decomposes $\hat{\boldsymbol{\Sigma}}$ via eigendecomposition. Eigenvectors = principal components; eigenvalues = variance explained along each component.
- **Multivariate Gaussian** — fully parameterised by $(\boldsymbol{\mu}, \boldsymbol{\Sigma})$. The covariance matrix controls the shape, orientation, and scale of the distribution's ellipsoidal level sets.
- **Gaussian Discriminant Analysis (LDA/QDA)** — models each class as a Gaussian with its own $\boldsymbol{\Sigma}$.
- **Mahalanobis distance** — $d(\mathbf{x}, \boldsymbol{\mu}) = \sqrt{(\mathbf{x}-\boldsymbol{\mu})^\top \boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})}$; a distance metric that accounts for feature correlations and scales. Generalises Euclidean distance.
- **Regularisation of $\boldsymbol{\Sigma}$** — in practice, $\hat{\boldsymbol{\Sigma}}$ is often rank-deficient (more features than samples). Ridge-style regularisation $\hat{\boldsymbol{\Sigma}} + \lambda \mathbf{I}$ ensures positive definiteness.

##### Connections
* Forward Links: [MLE and MAP](/notes/mathematics-for-ml/mle-and-map/), [Geometry of Random Variables](/notes/mathematics-for-ml/geometry-of-random-variables/)
* Backward Links: [Expectation and Variance](/notes/mathematics-for-ml/expectation-and-variance/), [Common Probability Distributions](/notes/mathematics-for-ml/common-probability-distributions/), [Symmetric, Positive Definite Matrices](/notes/mathematics-for-ml/symmetric-positive-definite-matrices/)
