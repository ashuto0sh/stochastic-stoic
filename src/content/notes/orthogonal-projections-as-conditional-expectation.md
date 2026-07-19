---
title: "Orthogonal Projections as Conditional Expectation"
tags:
  - "type/bridge"
  - "probability"
  - "linear-algebra"
  - "regression"
created: 2026-04-11
---

##### Formal
Suppose we want to predict a random variable $Y$ using information from another random variable (or vector of variables) $X$. We seek a function $g(X)$ that minimizes the Mean Squared Error (MSE):

$$
\text{MSE} = \mathbb{E}\left[(Y - g(X))^2\right] \tag{1}
$$

The mathematical theorem states that the unique function $g^*(X)$ that minimizes this MSE is the **conditional expectation**:

$$
g^*(X) = \mathbb{E}[Y \mid X] \tag{2}
$$

###### The Geometric Interpretation (Orthogonality)
Because random variables form a Hilbert space (see [Geometry of Random Variables](/notes/geometry-of-random-variables/)), we can view this purely geometrically.
- $Y$ is a vector in the full space.
- The set of all possible functions of $X$ forms a **subspace**.
- The error of our prediction is the vector $\mathbf{e} = Y - g(X)$.

To minimize the length (norm) of the error vector $\|\mathbf{e}\|^2$, the error must be **orthogonal** to the subspace of $X$. This is the **Orthogonality Principle**:

$$
\langle Y - \mathbb{E}[Y \mid X], h(X) \rangle = 0 \quad \text{for any function } h \tag{3}
$$

Therefore, the conditional expectation $\mathbb{E}[Y \mid X]$ is exactly the **orthogonal projection** of $Y$ onto the subspace spanned by $X$.

##### Intuition
Imagine you are a shadow on a 2D floor (the subspace $X$), trying to get as close as possible to a bird flying in the 3D air above you (the target variable $Y$). 

If you stand directly beneath the bird, the distance between you and the bird is a straight vertical line. That vertical line is **orthogonal** (perpendicular) to the floor. Any other position on the floor would result in a longer diagonal distance.

Linear Regression is just an algorithm that finds the "shadow" of $Y$ on the "floor" of $X$.

##### ML Applications
- **Linear Regression (OLS)** — Ordinary Least Squares is the most direct application. The formula $\hat{\beta} = (X^T X)^{-1} X^T Y$ is literally the projection matrix projecting the vector $Y$ onto the column space of $X$.
- **Why we use MSE** — When we train a neural network with an MSE loss function, we are explicitly asking the network to approximate the conditional expectation $\mathbb{E}[Y \mid X]$. If we used MAE (L1 loss) instead, the network would approximate the conditional *median*.
- **The Bias-Variance Tradeoff** — $\mathbb{E}[Y \mid X]$ represents the theoretical limit of how good a model can be (the irreducible error). Our model $f(x)$ is just trying to approximate that projection.

##### Connections
* Forward Links: 
* Backward Links: [Orthogonal Projections](/notes/orthogonal-projections/), [Expectation and Variance](/notes/expectation-and-variance/), [Conditional Probability](/notes/conditional-probability/), [Geometry of Random Variables](/notes/geometry-of-random-variables/)
