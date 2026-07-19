---
title: "Bayes Theorem"
tags:
  - "conditional-probability"
  - "bayes-theorem"
---

#### Formal
Definition of conditional probability:

$$
P(A|B) \triangleq \frac{P(A \cap B)}{P(B)} \tag{1}
$$

**The Derivation:** 
1. By the definition, we can write the joint probability $P(A \cap B)$ in two ways (swapping $A$ and $B$): 

$$
\begin{align}
P(A \cap B) = P (A|B)P(B)  \\
P(B \cap A) = P(B|A)P(A)
\end{align}
$$

2. Since $P(A\cap B) = P(B\cap A)$: 

$$
P(A|B)P(B)=P(B|A)P(A)
$$

3. Divide by $P(B)$: 

$$
P(A|B)=\frac{P(B|A)P(A)}{P(B)}. \tag{2}
$$

>[!ML Context] 
>$A \rightarrow \theta$ (Model Parameters / Hypothesis)
> $B \rightarrow D$ (Observed Data / Evidence)

$$
\underbrace{P(\theta | D)}_{\text{Posterior}} = \frac{\underbrace{P(D | \theta)}_{\text{Likelihood}} \cdot \underbrace{P(\theta)}_{\text{Prior}}}{\underbrace{P(D)}_{\text{Evidence}}} \tag{3}
$$

##### Connections
* Forward Links:
* Backward Links: [The Probability Space](/notes/the-probability-space/), [The Landscape of Probability Theory](/notes/the-landscape-of-probability-theory/)
