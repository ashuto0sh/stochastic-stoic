---
title: "Geometry of Random Variables"
tags:
  - "type/bridge"
  - "probability"
  - "linear-algebra"
  - "geometry"
created: 2026-04-11
---

##### Formal
Random variables with finite variance form a **Hilbert space** (a vector space equipped with an inner product). This means we can map statistical concepts directly to geometric concepts.

Let $X$ and $Y$ be random variables with finite variance. The general $L^2$ inner product is $\langle X, Y \rangle \coloneqq \mathbb{E}[XY]$, under which $\|X\|^2 = \mathbb{E}[X^2]$ (the second moment). Working with *centered* random variables $\tilde{X} = X - \mu_X$ and $\tilde{Y} = Y - \mu_Y$ shifts the origin to the mean, and under this centering the inner product becomes covariance:

$$
\langle \tilde{X}, \tilde{Y} \rangle \coloneqq \mathbb{E}[\tilde{X}\tilde{Y}] = \text{Cov}(X, Y). \tag{1}
$$

All the geometric properties below hold for centered random variables under this inner product:

###### (Variance as Squared Length)
The squared norm (length) of a centered random variable is its variance:

$$
\|\tilde{X}\|^2 = \langle \tilde{X}, \tilde{X} \rangle = \mathbb{E}[\tilde{X}^2] = \text{Var}(X) \tag{2}
$$

Therefore, the **Standard Deviation** $\sigma_X$ is exactly the Euclidean length of the vector $\tilde{X}$.

###### (Covariance as Inner Product)
The inner product of two centered random variables is their covariance:

$$
\langle \tilde{X}, \tilde{Y} \rangle = \mathbb{E}[\tilde{X}\tilde{Y}] = \text{Cov}(X, Y) \tag{3}
$$

###### (Correlation as Cosine)
The cosine of the angle $\theta$ between two vectors is their inner product divided by their lengths. For centered random variables, this is precisely the Pearson correlation coefficient:

$$
\cos(\theta) = \frac{\langle \tilde{X}, \tilde{Y} \rangle}{\|\tilde{X}\| \|\tilde{Y}\|} = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y} = \rho_{XY} \tag{4}
$$

##### Intuition
If you treat random variables as arrows in a high-dimensional space:
- **Zero mean** means the arrow starts at the origin.
- **High variance** means the arrow is very long.
- **Uncorrelated** means the arrows are exactly perpendicular (orthogonal, $\theta = 90^\circ$). Note: independence implies uncorrelated, but *uncorrelated does not imply independence* — two RVs can have zero covariance yet be dependent (e.g. $X \sim \mathcal{N}(0,1)$, $Y = X^2$).
- **Perfectly correlated** means the arrows point in the exact same direction ($\theta = 0^\circ$).
- **Negatively correlated** means they point in opposite directions ($\theta = 180^\circ$).

As an SWE, this means your entire mental model for vectors and matrices (dot products, projections, orthogonality) applies 1:1 to probability distributions and datasets.

##### ML Applications
- **Principal Component Analysis (PCA)** — PCA finds the orthogonal axes of maximum variance in a dataset. Geometrically, it is just rotating the coordinate system to align with the longest vectors in the covariance matrix.
- **Feature Selection** — If two features (random variables) have a correlation near 1, the angle between them is near 0. They are colinear and carry redundant information. You can drop one without losing predictive power.
- **Word Embeddings (Word2Vec)** — When we compute the "Cosine Similarity" between two word vectors, we are literally computing their statistical correlation $\rho$.

##### Connections
* Forward Links: [Orthogonal Projections as Conditional Expectation](/notes/mathematics-for-ml/orthogonal-projections-as-conditional-expectation/)
* Backward Links: [Inner Products](/notes/mathematics-for-ml/inner-products/), [Expectation and Variance](/notes/mathematics-for-ml/expectation-and-variance/), [Covariance Matrix](/notes/mathematics-for-ml/covariance-matrix/), [Random Variables](/notes/mathematics-for-ml/random-variables/)
