---
title: "Conditional Probability"
tags:
  - "type/definition"
  - "probability"
  - "conditional-probability"
---

##### Formal
###### (Conditional Probability)
The *conditional probability* of event $A$ given that event $B$ has occurred is defined as

$$
P(A \mid B) \coloneqq \frac{P(A \cap B)}{P(B)}, \quad P(B) > 0. \tag{1}
$$

Geometrically: we restrict the sample space from $\Omega$ to $B$, and ask what fraction of $B$ is also $A$.

###### (Independence)
Events $A$ and $B$ are *independent* if and only if

$$
P(A \cap B) = P(A)\,P(B), \tag{2}
$$

which implies $P(A \mid B) = P(A)$. Conditioning on $B$ gives no information about $A$.

###### (Chain Rule of Probability)
For any events $A_1, A_2, \dots, A_n$:

$$
P\!\left(\bigcap_{i=1}^n A_i\right) = P(A_1)\,P(A_2 \mid A_1)\,P(A_3 \mid A_1, A_2)\cdots P(A_n \mid A_1,\dots,A_{n-1}). \tag{3}
$$

###### (Law of Total Probability)
If $\{B_1, B_2, \dots, B_k\}$ is a partition of $\Omega$ (disjoint, exhaustive), then for any event $A$:

$$
P(A) = \sum_{i=1}^k P(A \mid B_i)\,P(B_i). \tag{4}
$$

This is the mechanism for *marginalisation* — integrating out an unknown variable.

##### Intuition
Think of the sample space $\Omega$ as a database table of all possible outcomes. Conditioning on $B$ is a **WHERE clause** — it filters the table down to the rows where $B$ is true, and then asks what fraction of those rows satisfy $A$.

The law of total probability is **partitioned aggregation**: sum up contributions from each disjoint partition of the data.

Independence is the absence of correlation between two filters: knowing that row passes filter $B$ tells you nothing about whether it passes filter $A$.

##### ML Applications
- **Bayesian inference** — the posterior $P(\theta \mid D)$ is a conditional probability. All Bayesian ML is an application of eq. (1).
- **Chain rule in generative models** — autoregressive models (GPT, etc.) factorise $P(x_1, x_2, \dots, x_n)$ using eq. (3): generate each token conditioned on all previous ones.
- **Naive Bayes classifier** — assumes features are conditionally independent given the class label (eq. (2)), turning a joint distribution into a product of simple univariate conditionals.
- **Causal inference** — do-calculus and interventional distributions are built on conditional probability and independence.

##### Connections
* Forward Links: [Bayes Theorem](/notes/bayes-theorem/), [Random Variables](/notes/random-variables/)
* Backward Links: [The Probability Space](/notes/the-probability-space/)
