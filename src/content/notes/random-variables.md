---
title: "Random Variables"
tags:
  - "type/definition"
  - "probability"
  - "random-variables"
---

##### Formal
###### (Random Variable)
A *random variable* $X$ is a measurable function $X : \Omega \rightarrow \mathbb{R}$ that maps outcomes in the sample space to real numbers. All randomness comes from $\Omega$; the function $X$ itself is deterministic.

$$
P(X = x) \equiv P\!\left(\{\omega \in \Omega \mid X(\omega) = x\}\right). \tag{1}
$$

###### (Discrete Random Variable)
$X$ is *discrete* if its image $\text{Im}(X) = \{X(\omega) \mid \omega \in \Omega\}$ is countable. It is characterised by a **Probability Mass Function (PMF)**:

$$
p_X(x) = P(X = x), \quad \sum_{x} p_X(x) = 1. \tag{2}
$$

###### (Continuous Random Variable)
$X$ is *continuous* if its image is uncountable. It is characterised by a **Probability Density Function (PDF)** $f_X(x) \geq 0$ such that

$$
P(a \leq X \leq b) = \int_a^b f_X(x)\,dx, \quad \int_{-\infty}^{\infty} f_X(x)\,dx = 1. \tag{3}
$$

Note: $P(X = x) = 0$ for any specific $x$ in the continuous case.

###### (Cumulative Distribution Function)
The **CDF** is defined for both discrete and continuous RVs:

$$
F_X(x) = P(X \leq x). \tag{4}
$$

For continuous RVs: $f_X(x) = \frac{d}{dx}F_X(x)$.

##### Intuition
A Random Variable is a **type-safe parser** for raw outcomes. The sample space $\Omega$ contains unstructured events — a coin toss result, an HTTP response, a user action. A random variable extracts a single numeric value of interest from that event.

```
raw outcome ω  ──[X : Ω → ℝ]──►  numeric value x
"packet arrived late"    ──►  latency_ms = 340
```

The PMF or PDF is then the **frequency histogram** of those numeric values across all possible outcomes, weighted by their probability.

##### ML Applications
- **Features and labels** — every input feature and output label in supervised learning is an RV. Training a model is estimating the joint distribution $P(Y, X_1, \dots, X_d)$.
- **Model outputs** — a classifier outputs $P(Y = k \mid X = x)$, a conditional PMF over class labels. A regression model outputs an estimate of $\mathbb{E}[Y \mid X = x]$.
- **Loss functions as expectations** — the expected loss $\mathbb{E}_{(x,y) \sim P}[\ell(f(x), y)]$ is an expectation of an RV. Minimising training loss is an approximation of minimising this.
- **Latent variables** — in models like GMMs and VAEs, hidden structure is represented as unobserved RVs that the model must infer.

##### Connections
* Forward Links: [Expectation and Variance](/notes/expectation-and-variance/), [Common Probability Distributions](/notes/common-probability-distributions/), [Geometry of Random Variables](/notes/geometry-of-random-variables/), [Transformations of Probability Densities](/notes/transformations-of-probability-densities/)
* Backward Links: [The Probability Space](/notes/the-probability-space/), [Conditional Probability](/notes/conditional-probability/)
