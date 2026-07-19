---
title: "Gradients of Vector-Valued Functions"
tags:
  - "type/concept"
  - "vector-calculus"
  - "jacobian"
  - "vector-fields"
aliases:
  - "The Jacobian Matrix as the Gradient of a Vector-Valued Function"
  - "The Jacobian"
---

##### Formal
> [!definition] A vector field or a vector-valued function is a function $f:\mathbb{R}^n \rightarrow \mathbb{R}^m$.

For a function $f:\mathbb{R}^n \rightarrow \mathbb{R}^m$ and a vector $x =[x_{1},\dots,x_{n}]^T \in \mathbb{R}^n$, the corresponding vector of function values is given by

$$
\begin{align}
f(x) = \begin{bmatrix}
f_{1}(x) \\
\vdots \\
f_{n}(x)
\end{bmatrix} \in \mathbb{R}^m. \tag{1}
\end{align}
$$

Therefore, the partial derivative of a vector-valued function $f:\mathbb{R}^n\rightarrow \mathbb{R}^m$ w.r.t. $x_{i} \in \mathbb{R}, i=1,\dots,n$is given as vector

$$
\frac{df}{dx_{i}} = \begin{bmatrix}
\frac{\partial f_{1}}{\partial x_{i}} \\
\vdots \\
\frac{\partial f_{m}}{\partial x_{i}}
\end{bmatrix}=\begin{bmatrix}
\lim_{ h \to 0 } \dfrac{f_{1}(x_{1},\dots x_{i}+h,\dots,x_{n})-f_{1}(x)}{h} \\
\vdots \\
\lim_{ h \to 0 } \dfrac{f_{m}(x_{1},\dots x_{i}+h,\dots,x_{n})-f_{m}(x)}{h}
\end{bmatrix} \in \mathbb{R}^m \tag{2}
$$

**Note** that the derivation in (2) is for $x_i$. This could be generalized to a vector $x \in \mathbb{R}^n$ ($n$-valued vector) by stacking $\begin{bmatrix} \frac{df}{dx_{i}}&\dots& \frac{df}{dx_{n}}\end{bmatrix}$.
###### (Jacobian)
The collection of all first-order partial derivatives of a vector-valued function $f : \mathbb{R}^n \rightarrow \mathbb{R}^m$ is called the *Jacobian*. The Jacobian $J$ is an $m\times n$ matrix, defined as follows

$$
\begin{align}
J&=\nabla_{x}f= \frac{df(x)}{dx}=\left [ \frac{df}{dx_{i}}\;\dots\; \frac{df}{dx_{n}} \right] \\
&=\begin{bmatrix}
\dfrac{\partial f_{1}(x)}{\partial x_{1}}&\dots&\dfrac{\partial f_{1}(x)}{\partial x_{n}} \\
\vdots & & \vdots \\
\dfrac{\partial f_{m}(x)}{\partial x_{1}}&\dots&\dfrac{\partial f_{m}(x)}{\partial x_{n}}
\end{bmatrix},  \\

x&=\begin{bmatrix}
x_{1} \\
\vdots \\
x_{n}
\end{bmatrix}, \;\; J(i,j) = \dfrac{\partial f_{i}(x)}{\partial x_{j}}.
\end{align}
$$

> [!note] The gradient of $Ax$ with respect to $x$ is simply the matrix $A$. This is the vector calculus equivalent of the simple scalar rule $\dfrac{d}{dx}(ax) =a$.
##### Intuition
Gradient of a scalar-valued function ($f: \mathbb{R}^n \rightarrow \mathbb{R}$), which is a vector that tells you the direction of steepest ascent. Now, consider a function that takes an $n$-dimensional vector and outputs an $m$-dimensional vector, $f: \mathbb{R}^n \rightarrow \mathbb{R}^m$.

The core question becomes more complex: "How does the _entire output vector_ change when we slightly change _one_ of the input variables?" And we must be able to answer this for _every_ input variable.

**Analogy:** Imagine a sound mixing board. You have `n` input sliders (the vector `x`) that control `m` output meters (the vector `f(x)`).
- A scalar function's gradient ($f: \mathbb{R}^n \rightarrow \mathbb{R}$) would be like having all $n$ sliders control a single "master volume" meter. The gradient vector tells you which slider has the most impact on that single master volume.
- For a vector-valued function ($f: \mathbb{R}^n \rightarrow \mathbb{R}^m$), each of the $n$ sliders can affect all $m$ output meters, and each effect can have a different magnitude. We need a way to capture all these relationships simultaneously.

The **Jacobian matrix** is the object that does this. Each entry in the Jacobian matrix acts as a partial derivative that answers a specific question: "What is the rate of change of output meter $i$ with respect to a change in input slider $j$?" It captures the complete local linear behavior of the vector-to-vector mapping.
##### ML Applications
The Jacobian matrix is a cornerstone of multivariate calculus and appears in several critical areas of machine learning.
- **Backpropagation in Neural Networks:** Each layer of a neural network performs a vector-to-vector mapping (from the activations of the previous layer to its own activations). The Jacobian of this mapping is essential for the chain rule, allowing gradients to be propagated backward through the network. The matrix multiplication in the chain rule, `∂L/∂x = ∂L/∂a * ∂a/∂x`, involves the Jacobian `∂a/∂x` of the current layer.
- **Change of Variables for Probability Distributions:** When you transform a random variable $X$ via a function $Y = f(X)$, the probability density of $Y$ depends on the density of $X$ and how much $f$ stretches or compresses space. This local change in volume is measured by the **determinant of the Jacobian** of the transformation. This is critical for advanced generative models like normalizing flows.
- **Local Linear Approximation:** The Jacobian provides the best linear approximation of a complex vector-valued function $f$ near a point $x_{0}$.

$$
f(x)≈f(x_0)+J_f(x_0)(x−x_0)
$$

This is the multivariate equivalent of the first-order Taylor expansion and is used in advanced optimization algorithms.
##### Connections
* Forward Links: [The Jacobian Determinant](/notes/the-jacobian-determinant/)
* Backward Links: [Partial Derivative](/notes/partial-derivative/), [Univariate Calculus Refresher](/notes/univariate-calculus-refresher/)
