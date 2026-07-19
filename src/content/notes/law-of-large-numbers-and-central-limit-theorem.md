---
title: "Law of Large Numbers and Central Limit Theorem"
tags:
  - "type/concept"
  - "probability"
  - "limit-theorems"
aliases:
  - "LLN"
  - "CLT"
---

##### Formal
Both theorems describe what happens to the sample mean $\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i$ as the number of i.i.d. observations $n \to \infty$.

###### (Law of Large Numbers)
Let $X_1, X_2, \dots$ be i.i.d. random variables with finite mean $\mu = \mathbb{E}[X]$. The **Weak LLN** states that the sample mean converges *in probability* to $\mu$:

$$
\bar{X}_n \xrightarrow{p} \mu \quad \text{as } n \to \infty. \tag{1}
$$

That is, for any $\varepsilon > 0$: $P(|\bar{X}_n - \mu| > \varepsilon) \to 0$.

The **Strong LLN** strengthens this to almost sure convergence:

$$
P\!\left(\lim_{n \to \infty} \bar{X}_n = \mu\right) = 1. \tag{2}
$$

###### (Central Limit Theorem)
Let $X_1, X_2, \dots$ be i.i.d. with mean $\mu$ and finite variance $\sigma^2 > 0$. Then the standardised sample mean converges *in distribution* to a standard Gaussian:

$$
\frac{\bar{X}_n - \mu}{\sigma / \sqrt{n}} \xrightarrow{d} \mathcal{N}(0, 1) \quad \text{as } n \to \infty. \tag{3}
$$

Equivalently: $\bar{X}_n \approx \mathcal{N}\!\left(\mu,\; \frac{\sigma^2}{n}\right)$ for large $n$, regardless of the original distribution of $X$.

##### Intuition
Think of running a distributed load test against your service. Each request produces a latency measurement $X_i$.

- **LLN** says: average enough requests and the sample mean latency will converge to the true population mean. The noise in any individual measurement averages out. *You can trust your benchmark.*
- **CLT** says: not only does the average converge, but the *distribution of the average* becomes bell-shaped regardless of how bizarre the distribution of individual request latencies is. Even if latencies are highly skewed (Pareto-distributed), the mean of a batch of 1000 follows a Gaussian. *You can build confidence intervals.*

The key insight: CLT does not say individual $X_i$ are Gaussian. It says the *aggregate* (their mean) is.

##### ML Applications
- **Justification for training loss** — The empirical training loss $\frac{1}{N}\sum_{i=1}^N \ell(f(x_i), y_i)$ is a sample mean. By LLN, it converges to the true expected loss $\mathbb{E}[\ell(f(X), Y)]$ as $N \to \infty$. This is the formal justification for why minimising training loss generalises.
- **Stochastic gradient descent** — The minibatch gradient $\frac{1}{B}\sum_{i \in \text{batch}} \nabla \ell_i$ is a sample mean of per-example gradients. LLN makes it an unbiased estimator of the true gradient; CLT characterises its noise as approximately Gaussian, justifying Gaussian noise models in SGD analysis.
- **Gaussian noise assumption** — Measurement errors, residuals in regression, weight perturbations — all are often modelled as Gaussian. The CLT provides the theoretical justification: errors are typically the sum of many small, independent effects.
- **Bootstrap and confidence intervals** — The CLT underlies the sampling distribution of estimators, enabling construction of confidence intervals for model parameters.
- **Batch normalisation** — Normalising activations within a minibatch uses sample mean and variance. The approximation works well because CLT ensures these are stable estimates.

##### Connections
* Forward Links:
* Backward Links: [Expectation and Variance](/notes/expectation-and-variance/), [Common Probability Distributions](/notes/common-probability-distributions/)
