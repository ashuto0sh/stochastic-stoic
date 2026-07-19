---
title: "Lengths and Distances"
tags:
  - "type/definition"
  - "analytical-geometry"
  - "length"
  - "distance"
---

##### Formal
*Note:* **An inner product induces a norm.** This phrase simply means that once you have defined an inner product for a vector space, you automatically get a consistent and valid way to measure **length (a norm)**.
###### Cauchy-Schwarz Inequality
*Remark* (Cauchy-Schwarz Inequality). For an inner product vector space $(V, \langle.,.\rangle)$ the induced norm $\parallel \;. \parallel$ satisfies the following inequality

$$
\begin{align}
|\;\langle x,y \rangle\;| \le \;\parallel x \parallel \parallel y \parallel .\tag{1}
\end{align}
$$

###### (Length)
The length of a vector $x$ is defined as its norm. The most common is the **Euclidean length** derived from the $\ell_{2}$-norm:

$$
\begin{align}
\text{length}(x) \coloneqq||x||_{2} = \sqrt{ \langle x,y \rangle }=\sqrt{ \sum_{i}{}x_{i}^{2}} \tag{2}
\end{align}
$$

###### (Distance)
Consider an inner product space $(V, \langle .,.\rangle)$. Then

$$
\begin{align}
d(x,y) \coloneqq \parallel x-y \parallel = \sqrt{\langle x-y, x-y \rangle} \tag{3} 
\end{align}
$$

is called the *distance* between $x$ and $y$ for $x,y \in V$. 
If we use dot product as the inner product, then the distance is called *Euclidean distance*.
###### (Metric)
The mapping 

$$
\begin{align}
d:V\times V\rightarrow\mathbf{R} \tag{4} \\
(x,y) \mapsto d(x,y) \tag{5}
\end{align}
$$

is called a *metric*.
*Remark*. Similar to the length of a vector, the distance between vectors does not require an inner product: a norm is sufficient. If we have a norm induced by an inner product, the distance may vary depending on the choice of the inner product.

A metric $d$ satisfies the following:
1. $d$ is *positive definite*, i.e., $d(x, y) \ge 0 \;\;\forall x, y \in V$ and $d(x, y) = 0 \iff x = y$ .
2. $d$ is *symmetric*, i.e., $d(x, y) = d(y, x) \;\;\forall x, y \in V$ .
3. *Triangle inequality*: $d(x, z) \le d(x, y) + d(y, z) \;\;\forall x, y, z \in V$.
##### Intuition
This is the most straightforward connection we've made so far.
- The **length** of a vector is simply its **norm**. That's it. When we talked about norms, we were already talking about length—the magnitude, the size, the straight-line distance from the origin to the point the vector represents.
- The **distance** between two vectors is the **length of the vector that connects them**. Imagine you have two data points, represented by vectors **a** and **b**. To find out how far apart they are, you first find the "difference" vector that points from **a** to **b** (which is the vector **b** - **a**). The distance between **a** and **b** is just the length of this new vector.

The problem this solves is fundamental to nearly all of machine learning: **quantifying similarity and dissimilarity**. If the distance between two data point vectors is small, they are "close" or "similar". If the distance is large, they are "dissimilar". This simple idea is the basis for classification, clustering, and regression.

Finally, we can also talk about the **angle** between two vectors. While distance tells us about their separation, the angle tells us about their orientation. Are they pointing in the same direction? Are they perpendicular? This gives us a different, often more useful, kind of similarity measure.
##### ML Applications
The concepts of length, distance, and angle are not just theoretical; they are the computational workhorses of many mainstream machine learning algorithms.

- **k-Nearest Neighbors (k-NN):** This classification algorithm is the most direct application of distance metrics. To classify a new data point, k-NN calculates the distance (usually Euclidean) to _every single training data point_. It then identifies the 'k' nearest neighbors and makes a prediction based on a majority vote among them. The choice of distance metric is a critical hyperparameter.
- **Clustering (e.g., k-Means):** The goal of k-Means is to partition data into _k_ clusters. It works by iteratively assigning each data point to the cluster with the nearest **centroid** (mean vector). The algorithm's objective is to minimize the sum of squared Euclidean distances from each point to its assigned centroid.
- **Loss Functions (Error Measurement):** How do we know how well our model is performing? We measure the "distance" between its predictions and the ground truth.
    - **Mean Squared Error (MSE)**, used in linear regression, is the average of the _squared Euclidean distances_ between predicted and actual values.
    - **Mean Absolute Error (MAE)** is the average of the _Manhattan distances_ ($\ell_{1}$ distance).
- **Cosine Similarity:** In applications like document analysis or recommendation systems, we often care more about the orientation (angle) of vectors than their magnitude. The cosine similarity, which is just the $\cos(θ)$ we defined above, is a measure of distance that ignores vector lengths and focuses purely on direction. A similarity of 1 means they point in the same direction, 0 means they are orthogonal (unrelated), and -1 means they are opposites.
##### Connections
* Forward Links:
* Backward Links: [Norms](/notes/norms/), [Symmetric, Positive Definite Matrices](/notes/symmetric-positive-definite-matrices/)
