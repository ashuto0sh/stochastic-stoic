---
title: "Inner Products"
tags:
  - "type/definition"
  - "inner-products"
  - "analytical-geometry"
  - "dot-product"
---

##### Formal
###### (Inner Product)
* Allows for intuitive geometrical concepts like length of a vector and distance between two vectors.
* Determines if two vectors are orthogonal.
###### (Dot Product)
The *scalar product/ dot product* in $R^n$ is defined as

$$
\begin{align}
x^Ty\; = \sum_{i=1}^nx_{i}y_{i}.\tag{3.5}
\end{align}
$$

###### (General Inner Product)
Let ${V}$ be a vector space and $\Omega : {V} \times {V} \rightarrow \mathbb{R}$ be a bilinear mapping that takes two vectors and maps them onto a real number. Then
* $\Omega$ is *symmetric* is $\Omega(x,y) = \Omega(y,x) \;\forall\; x,y \in V$  i.e., the order of arguments don't matter.
* $\Omega$ is *positive definite* if 

$$
\forall x \in V\setminus \{0\} : \Omega(x,x) \gt{0},\;\;\; \Omega(0,0) = 0. \tag{3.6}
$$

###### (Inner Product Space)
Let $V$ be a vector space and $\Omega : \mathbb{V} \times \mathbb{V} \rightarrow \mathbb{R}$ be a bilinear mapping that takes two vectors and maps them onto a real number. Then
* A positive definite, symmetric bilinear mapping $\Omega : {V} \times {V} \rightarrow \mathbb{R}$ is called an *inner product* on $V$. We write them as $\langle x,y \rangle$ instead of $\Omega(x,y)$.
* The pair $(V, \langle.,.\rangle)$ is called an *inner product space* or *vector space with inner product*. 
##### Intuition
At its heart, an inner product is a generalization of the familiar **dot product**. It's a single number that answers the question: "How much does vector **a** point in the same direction as vector **b**?"
Think of it like this:
- If you take the inner product of two vectors that point in very similar directions, you get a large positive number. They are "aligned".
- If they are perpendicular (orthogonal), their inner product is zero. They share no directional component.
- If they point in opposite directions, you get a large negative number. They are "anti-aligned".

The problem this solves is fundamental: it allows us to introduce geometric concepts like **angle** and **projection** into vector spaces, especially in high dimensions where we can't visualize things directly. If we can measure the "directional similarity" between vectors, we can determine if they are perpendicular, measure how "close" they are in terms of direction, and project one onto the other. This is the bedrock of geometric intuition in machine learning.

The most common example is the **Euclidean inner product** (or standard dot product) for vectors in $\mathbb{R}^n$:

$$
\begin{align}
\langle x,y \rangle \coloneqq x^Ty=\sum_{i=1}^nx_{i}y_{i}
\end{align}
$$

This is the workhorse inner product in machine learning.

The key geometric insight comes from this equation:

$$
\begin{align}
\langle x,y \rangle \coloneqq ||x||\;||y||\;\cos(\theta)
\end{align}
$$

where $\theta$ is the angle between the two vectors. This formula beautifully connects the algebraic computation $(x^⊤y)$ to the geometric concepts of length and angle. From this, we can define **orthogonality**: two non-zero vectors are orthogonal if their inner product is 0, which implies $\cos(\theta)=0$ and thus $\theta=90\degree$.
##### ML Applications
The inner product is not just an abstract geometric tool; it's a computational primitive in many ML algorithms.
- **Measuring Similarity (Cosine Similarity)**: In fields like Natural Language Processing (NLP), we represent documents or words as high-dimensional vectors. To determine how similar two documents are, we often don't care about their magnitude (e.g., one document being longer than another) but rather their "topic" or direction. By rearranging the inner product formula, we get the cosine similarity, which isolates the angle:

$$
\begin{align}
\cos(\theta) = \frac{x^Ty}{||x||\;||y||}
\end{align}
$$

- **Projections and Decompositions**: The inner product is the tool for calculating the projection of one vector onto another. This operation is at the core of **Principal Component Analysis (PCA)**, where we project data onto a lower-dimensional subspace while preserving as much variance as possible. It is also fundamental to linear regression, where we are effectively projecting a target vector onto the space spanned by the feature vectors.
- **Support Vector Machines (SVMs)**: The decision function for an SVM is $f(x)=sign(w^Tx+b)$. That $w^Tx$ is an inner product. It determines on which side of the decision boundary (a hyperplane defined by the normal vector $w$) the data point $x$ lies. This geometric interpretation is entirely dependent on the properties of the inner product.

In summary, the inner product provides the foundational mathematics for embedding geometric reasoning into machine learning algorithms, allowing us to build models that rely on concepts of similarity, projection, and separation.
##### Connections
* Forward Links: [Symmetric, Positive Definite Matrices](/notes/mathematics-for-ml/symmetric-positive-definite-matrices/), [Inner Product of Functions](/notes/mathematics-for-ml/inner-product-of-functions/)
* Backward Links: [Norms](/notes/mathematics-for-ml/norms/)
