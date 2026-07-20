---
title: "Hessian Matrix"
tags:
  - "vector-calculus"
  - "type/concept"
  - "hessian"
  - "curvature"
aliases:
  - "Curvature of a twice differentiable function"
---

##### Formal
###### (Hessian Matrix)
For a scalar-valued function $f:\mathbb{R}^n \rightarrow \mathbb{R}$ that is twice-differentiable, the *Hessian Matrix* $\boldsymbol{H}$ is an $n\times n$-matrix.  

$$
\boldsymbol{H}_{ij}= \frac{\partial^2f}{\partial x_{i}\partial x_{j}}, \text{where } i, j \in {1,\dots,n}. \tag{1}
$$

For a function of two variables, $f(x,y)$, the Hessian is

$$
\mathbf{H} = \begin{bmatrix} \dfrac{\partial^2 f}{\partial x^2} & \dfrac{\partial^2 f}{\partial x \partial y} \\ \dfrac{\partial^2 f}{\partial y \partial x} & \dfrac{\partial^2 f}{\partial y^2} \end{bmatrix}
$$

> [!note] Hessian matrix is always symmetric.
##### Intuition
The Hessian matrix is the collection of all second-order partial derivatives of a scalar-valued function. In essence, while the gradient tells you about the function's slope, the Hessian tells you about the function's **curvature**.

Imagine you are standing on a hilly terrain described by a function $f(x_{1}, x_{2})$ where the height is the function's value.
- The **gradient** $\nabla f$ is a vector that points in the direction of the steepest ascent (the slope).
- The **Hessian** $\boldsymbol{H}$ is a matrix that describes the shape of the hill under your feet. It tells you whether you are in a valley, on a peak, or on a saddle point. It answers the question: "How is the slope changing as I move around?"
##### ML Applications
The Hessian is fundamental to optimization and understanding the nature of a model's loss landscape.
- **Second-Order Optimization:** The Hessian is the core component of **Newton's method** for optimization. While gradient descent (a first-order method) follows the steepest slope, Newton's method uses the Hessian's curvature information to find a more direct path to a minimum, often converging much faster.
- **Characterizing Critical Points:** At a point where the gradient is zero (a critical or stationary point), the Hessian tells you what kind of point it is:
    - If the Hessian is **positive definite**, the point is a **local minimum** (the function is curving upwards in all directions).
    - If the Hessian is **negative definite**, the point is a **local maximum** (curving downwards in all directions).
    - If the Hessian is **indefinite** (having both positive and negative eigenvalues), the point is a **saddle point**.
- **Approximating Functions:** The Hessian provides the quadratic term in the multivariate Taylor series expansion. This allows for a more accurate local approximation of a function than the linear approximation provided by the gradient alone. This is used in methods like the **Laplace approximation** in Bayesian inference to approximate a complex posterior distribution with a Gaussian.
##### Connections
* Forward Links:
* Backward Links: [Gradients of Vector-Valued Functions](/notes/mathematics-for-ml/gradients-of-vector-valued-functions/), [Partial Derivative](/notes/mathematics-for-ml/partial-derivative/), [Symmetric, Positive Definite Matrices](/notes/mathematics-for-ml/symmetric-positive-definite-matrices/)
