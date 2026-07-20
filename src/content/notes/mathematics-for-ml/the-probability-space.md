---
title: "The Probability Space"
tags:
  - "type/concept"
  - "probability"
  - "probability-space"
---

##### Formal
###### (Probability Space)
The *probability space* is a triplet $(\Omega, \mathcal{A}, P)$.
1. The Sample Space $(\Omega)$
	The set of all possible elementary outcomes of an experiment.  For example, for 2 consecutive coin tosses: $HH, HT, TH, TT$.
2. Event Space $(\mathcal{A})$.
	A collection of subsets of $\Omega$. An **Event** is an element $E \in \mathcal{A}$. In our example, an event could be $\{HT\}$ or $\{HH, HT\}$.
	A collection $\mathcal{A}$ of subsets of $\Omega$ is a $\sigma$-algebra if
	- $\Omega \in \mathcal{A}$.
	- If $E \in \mathcal{A}$,then its complement $E^c \in \mathcal{A}$.
	- If $E_{1}, E_{2}, \dots \in \mathcal{A}$ then their countable union $\bigcup_{i=1}^\infty E_{i} \in \mathcal{A}$.
	 *Example of an event space that is $\sigma$-algebra is $\{\emptyset, \Omega, \{HT, HH\}, \{TH, TT\}\}$. Verify why it's a $\sigma$-algebra. **In general, a full power set of sample space with cardinality N, has $2^N$ elements and forms a $\sigma$-algebra.***
3. Probability Measure $(P)$.
	A function $P:\mathcal{A} \rightarrow \mathbb{R}$ that assigns a probability to each event. $P$ must satisfy **Kolmogorov Axioms:**
	- **Non-negativity:** For any event $E\in\mathcal{A}, P(E) \ge 0$.
	- **Normalization:** $P(\Omega)=1$. (Something must happen).
	- **Countable Additivity:** If $E_{1}, E_{2},\dots$ are pairwise disjoint events (i.e., $E_{1} \cap E_{2} = \emptyset$ for $i\ne j$) then 

$$
P\left(\bigcup_{i=1}^\infty E_{i}\right)=\sum_{i=1}^\infty P(E_{i}) \tag{1}
$$

###### (Random Variables)
A **Random Variable (RV)** $X : \Omega \rightarrow \mathbb{R}$ is a function that maps the sample space to the real numbers.

In the Axioms, the sample space $\Omega$ contains raw outcomes. These could be anything: a whole RPC response, log line, state of a coin toss etc. These are hard to do math with.
A Random Variable is essentially a refactoring step. It's a deterministic function that parses the raw outcome and extracts a value (numerical?) of interest.
RV is not random, nor is it variable. All the randomness arises from the sample space $\Omega$.

$$
P(X=x) \equiv P(\{\omega \in \Omega\;|\;X(\omega) = x\})\tag{2}
$$

**Discrete RVs:** The set of possible values $X$ can return is countable. The Image of $X$ ($\mathrm{Im}(X)=\{ X(\omega)\;|\;\omega \in \Omega \}$) is a countable set.
**Continuous RVs:** The set of possible values $X$ can take is uncountable.
##### Connections
* Forward Links: [Bayes Theorem](/notes/mathematics-for-ml/bayes-theorem/)
* Backward Links: [The Landscape of Probability Theory](/notes/mathematics-for-ml/the-landscape-of-probability-theory/)
