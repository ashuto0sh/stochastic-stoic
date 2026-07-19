---
title: "Expectation and Variance"
tags:
  - "type/definition"
  - "probability"
  - "expectation"
  - "variance"
---

##### Formal
###### (Expectation)
The *expectation* (mean) of a random variable $X$ is its probability-weighted average value:

$$
\mathbb{E}[X] = \begin{cases} \displaystyle\sum_x x\,p_X(x) & \text{discrete} \\[6pt] \displaystyle\int_{-\infty}^{\infty} x\,f_X(x)\,dx & \text{continuous} \end{cases} \tag{1}
$$

Key property — **Linearity of Expectation**: for any RVs $X, Y$ and scalars $a, b$:

$$
\mathbb{E}[aX + bY] = a\,\mathbb{E}[X] + b\,\mathbb{E}[Y]. \tag{2}
$$

This holds even when $X$ and $Y$ are *dependent*. It is one of the most powerful and frequently used results in probability.

###### (Variance)
The *variance* measures how spread out $X$ is around its mean $\mu = \mathbb{E}[X]$:

$$
\text{Var}(X) = \mathbb{E}\!\left[(X - \mu)^2\right] = \mathbb{E}[X^2] - \mathbb{E}[X]^2. \tag{3}
$$

The *standard deviation* $\sigma_X = \sqrt{\text{Var}(X)}$ is in the same units as $X$.

Key properties:

$$
\text{Var}(aX + b) = a^2\,\text{Var}(X). \tag{4}
$$

For **independent** $X, Y$: $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$.

###### (Law of the Unconscious Statistician)
For any function $g$:

$$
\mathbb{E}[g(X)] = \int g(x)\,f_X(x)\,dx. \tag{5}
$$

This means you don't need to find the distribution of $g(X)$ first — just integrate $g(x)$ against the density of $X$.

##### Intuition
Think of a production service emitting a metric (e.g., request latency in ms):
- **Expectation** is the **long-run average** — the number you'd see on a p50 or mean dashboard panel after many requests.
- **Variance** is the **jitter** — how far individual readings deviate from that average. High variance means unpredictable, bursty behaviour.
- **Standard deviation** is variance in interpretable units: "on average, latency deviates from the mean by $\sigma$ ms."

Linearity of expectation is like the additive property of latency in a call chain: $\mathbb{E}[\text{total latency}] = \mathbb{E}[\text{service A}] + \mathbb{E}[\text{service B}]$, regardless of whether the two services are correlated.

##### ML Applications
- **Loss functions** — almost every loss function is an expectation: $\mathcal{L}(\theta) = \mathbb{E}_{(x,y)}[\ell(f_\theta(x), y)]$. Minimising training loss approximates minimising the true expected loss.
- **Bias–variance tradeoff** — the mean squared error of an estimator decomposes as $\text{MSE} = \text{Bias}^2 + \text{Variance}$. Regularisation trades higher bias for lower variance to reduce overall error.
- **Stochastic gradient descent** — computes a noisy, unbiased estimate $\hat{\nabla}\mathcal{L}$ of the true gradient $\mathbb{E}[\nabla\mathcal{L}]$. The variance of this estimate determines how large the learning rate can be.
- **Moments in distributions** — the mean and variance are the first two moments. They fully characterise a Gaussian distribution, and approximating a complex distribution by matching its moments is a common technique.

##### Connections
* Forward Links: [Covariance Matrix](/notes/covariance-matrix/), [Common Probability Distributions](/notes/common-probability-distributions/), [Geometry of Random Variables](/notes/geometry-of-random-variables/), [Orthogonal Projections as Conditional Expectation](/notes/orthogonal-projections-as-conditional-expectation/), [Law of Large Numbers and Central Limit Theorem](/notes/law-of-large-numbers-and-central-limit-theorem/)
* Backward Links: [Random Variables](/notes/random-variables/)
