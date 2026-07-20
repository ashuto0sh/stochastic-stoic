---
title: "MLE and MAP"
tags:
  - "type/concept"
  - "probability"
  - "estimation"
  - "mle"
  - "map"
aliases:
  - "Maximum Likelihood Estimation"
  - "Maximum A Posteriori"
---

##### Formal
Both MLE and MAP are answers to the same question: *given observed data $\mathcal{D} = \{x_1, \dots, x_N\}$ drawn i.i.d. from a model with parameters $\theta$, what is the best estimate of $\theta$?*

###### (Maximum Likelihood Estimation)
Find the $\theta$ that makes the observed data most probable:

$$
\theta_{\text{MLE}} = \underset{\theta}{\arg\max}\; P(\mathcal{D} \mid \theta) = \underset{\theta}{\arg\max}\; \prod_{i=1}^N P(x_i \mid \theta). \tag{1}
$$

In practice, the product is replaced by a sum using the **log-likelihood** (log is monotone, so the argmax is unchanged):

$$
\theta_{\text{MLE}} = \underset{\theta}{\arg\max}\; \sum_{i=1}^N \log P(x_i \mid \theta). \tag{2}
$$

###### (Maximum A Posteriori)
Incorporate a prior belief $P(\theta)$ about the parameters via Bayes' theorem:

$$
\theta_{\text{MAP}} = \underset{\theta}{\arg\max}\; P(\theta \mid \mathcal{D}) = \underset{\theta}{\arg\max}\;\left[\sum_{i=1}^N \log P(x_i \mid \theta) + \log P(\theta)\right]. \tag{3}
$$

MAP is MLE with an additional **log-prior term**. As $N \to \infty$, the data overwhelms the prior and MAP $\to$ MLE.

###### (MLE and Standard Loss Functions)
The connection between MLE and common loss functions:

| Likelihood assumption                                           | MLE objective           | Equivalent loss                   |
| --------------------------------------------------------------- | ----------------------- | --------------------------------- |
| $y \mid x \sim \mathcal{N}(f_\theta(x), \sigma^2)$              | Maximise log-likelihood | Minimise **MSE**                  |
| $y \mid x \sim \text{Bernoulli}(\sigma(f_\theta(x)))$           | Maximise log-likelihood | Minimise **Binary Cross-Entropy** |
| $y \mid x \sim \text{Categorical}(\text{softmax}(f_\theta(x)))$ | Maximise log-likelihood | Minimise **Cross-Entropy**        |

###### (MAP and Regularisation)
The connection between MAP and regularisation:

| Prior on $\theta$ | MAP objective | Equivalent regulariser |
|---|---|---|
| $\theta \sim \mathcal{N}(0, \tau^2 \mathbf{I})$ | Maximise log-posterior | **L2 / Ridge** — $\lambda\|\theta\|_2^2$ |
| $\theta \sim \text{Laplace}(0, b)$ | Maximise log-posterior | **L1 / Lasso** — $\lambda\|\theta\|_1$ |

This shows that regularisation is not a heuristic — it is Bayesian inference with a specific prior.

##### Intuition
MLE asks: *"Given my model structure, what parameter settings would have been most likely to generate the data I actually saw?"* It is **fitting to the evidence**.

MAP asks the same question, but with a constraint: the parameters should also be plausible given prior beliefs. It is **fitting to the evidence, penalised by implausibility**.

The SWE analogy: MLE is maximum-likelihood config tuning based purely on observed traffic. MAP is the same but with a regularisation term that says "don't drift too far from the default config" — a prior over reasonable settings.

##### ML Applications
- **All standard loss functions** — as shown in the table above, minimising MSE or cross-entropy is MLE. This means every gradient-descent training loop is implicitly performing MLE.
- **Ridge and Lasso regression** — follow directly from MAP with Gaussian or Laplace priors respectively.
- **Naive Bayes** — estimates $P(\text{feature} \mid \text{class})$ using MLE (or with Laplace smoothing, MAP).
- **Expectation-Maximisation (EM)** — a coordinate ascent algorithm for MLE when the model has latent variables. Used in GMMs, Hidden Markov Models, etc.
- **Bayesian deep learning** — treats the entire weight vector as a random variable; MAP gives point estimates while full Bayesian inference gives uncertainty estimates.

##### Connections
* Forward Links:
* Backward Links: [Bayes Theorem](/notes/mathematics-for-ml/bayes-theorem/), [Common Probability Distributions](/notes/mathematics-for-ml/common-probability-distributions/), [Covariance Matrix](/notes/mathematics-for-ml/covariance-matrix/)
