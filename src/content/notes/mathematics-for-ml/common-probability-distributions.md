---
title: "Common Probability Distributions"
tags:
  - "type/reference"
  - "probability"
  - "distributions"
---

##### Formal
A probability distribution specifies the probability (mass or density) over all possible values of a random variable. The distributions below are the standard library of ML.

###### Discrete Distributions

**(Bernoulli($p$))** — A single binary trial.

$$
P(X=1) = p, \quad P(X=0) = 1-p. \quad \mathbb{E}[X]=p,\quad \text{Var}(X)=p(1-p). \tag{1}
$$

**(Binomial($n, p$))** — Number of successes in $n$ independent Bernoulli trials.

$$
P(X=k) = \binom{n}{k}p^k(1-p)^{n-k}. \quad \mathbb{E}[X]=np,\quad \text{Var}(X)=np(1-p). \tag{2}
$$

**(Categorical($\mathbf{p}$))** — Generalises Bernoulli to $K$ mutually exclusive outcomes. $\mathbf{p} \in \mathbb{R}^K$, $\sum_k p_k = 1$. The distribution over class labels in classification.

**(Poisson($\lambda$))** — Number of events in a fixed interval given constant mean rate $\lambda$.

$$
P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}. \quad \mathbb{E}[X] = \text{Var}(X) = \lambda. \tag{3}
$$

###### Continuous Distributions

**(Uniform($a, b$))** — Constant density over $[a,b]$: $f(x) = \frac{1}{b-a}$. Used for uninformative priors and parameter initialisation.

**(Gaussian $\mathcal{N}(\mu, \sigma^2)$)** — The bell curve. Defined entirely by its mean and variance:

$$
f(x) = \frac{1}{\sigma\sqrt{2\pi}}\exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right). \tag{4}
$$

Closed under linear transformations: if $X \sim \mathcal{N}(\mu, \sigma^2)$ then $aX+b \sim \mathcal{N}(a\mu+b, a^2\sigma^2)$. The Central Limit Theorem explains its ubiquity.

**(Multivariate Gaussian $\mathcal{N}(\boldsymbol{\mu}, \boldsymbol{\Sigma})$)** — Generalises to $n$ dimensions. Parameterised by a mean vector $\boldsymbol{\mu} \in \mathbb{R}^n$ and a covariance matrix $\boldsymbol{\Sigma} \in \mathbb{R}^{n \times n}$ (symmetric positive semi-definite):

$$
f(\mathbf{x}) = \frac{1}{(2\pi)^{n/2}|\boldsymbol{\Sigma}|^{1/2}}\exp\!\left(-\frac{1}{2}(\mathbf{x}-\boldsymbol{\mu})^\top\boldsymbol{\Sigma}^{-1}(\mathbf{x}-\boldsymbol{\mu})\right). \tag{5}
$$

Its level sets are ellipsoids shaped by $\boldsymbol{\Sigma}$. Marginals and conditionals of a multivariate Gaussian are also Gaussian.

**(Beta($\alpha, \beta$))** — A distribution *over probabilities*, i.e., $X \in [0,1]$. Conjugate prior for the Bernoulli. Controlled by shape parameters $\alpha$ (successes) and $\beta$ (failures).

**(Exponential($\lambda$))** — Time between events in a Poisson process: $f(x) = \lambda e^{-\lambda x}$ for $x \geq 0$.

##### Intuition
Distributions are the **standard library** of ML — each is a pre-built model for a specific generative process:

| Generative process | Distribution |
|---|---|
| Binary outcome (coin flip, spam/not-spam) | Bernoulli |
| $n$ independent binary trials | Binomial |
| Multi-class label | Categorical |
| Count of events per unit time | Poisson |
| Sum of many independent small effects | Gaussian (CLT) |
| Unknown probability $p$ with prior beliefs | Beta |

The Gaussian is the default noise model because the Central Limit Theorem guarantees it appears whenever you sum many independent contributions — measurement error, financial noise, sensor readings.

##### ML Applications
- **Binary classification** — outputs modelled as Bernoulli; cross-entropy loss is negative log-likelihood of Bernoulli.
- **Multi-class classification** — outputs are Categorical; softmax parameterises $\mathbf{p}$.
- **Regression** — targets modelled as Gaussian; MSE loss is equivalent to MLE under this assumption.
- **Multivariate Gaussian** — the foundation of PCA (data projected onto Gaussian-shaped ellipsoids), Gaussian Processes, and Linear Discriminant Analysis.
- **Conjugate priors** — Beta is conjugate to Bernoulli; Dirichlet is conjugate to Categorical. Using conjugate priors makes Bayesian updating analytically tractable.

##### Connections
* Forward Links: [Covariance Matrix](/notes/mathematics-for-ml/covariance-matrix/), [MLE and MAP](/notes/mathematics-for-ml/mle-and-map/), [Law of Large Numbers and Central Limit Theorem](/notes/mathematics-for-ml/law-of-large-numbers-and-central-limit-theorem/)
* Backward Links: [Random Variables](/notes/mathematics-for-ml/random-variables/), [Expectation and Variance](/notes/mathematics-for-ml/expectation-and-variance/)
