---
title: "Univariate Calculus Refresher"
tags:
  - "vector-calculus"
  - "taylor-series"
  - "type/definition"
---

##### Formal
###### (Derivative)
For $h>0$ the *derivative* of $f$ at $x$ is defined as the limit

$$
\begin{align}
\frac{d f}{dx} \coloneqq \lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}, \tag{1}
\end{align}
$$

> [!tip] The derivative of $f$ points in the direction of steepest ascent of $f$.
###### (Taylor Polynomial)
The *Taylor Polynomial* of degree $n$ of $f:\mathbb{R} \rightarrow \mathbb{R}$ at $x_0$ is defined as

$$
\begin{align}
T_{n}(x) \coloneqq \sum_{k=1}^n \frac{f^k(x_{0})}{k!}(x-x_{0})^k, \tag{2}
\end{align}
$$

where $f^k(x_{0})$ is the $k$-th derivative of $f$ at $x_0$ and $\frac{f_{k(x_{0})}}{k!}$ are the coefficients of the polynomial.
###### (Taylor Series)
For a smooth function $f \in \mathcal{C}^\infty, f : \mathbb{R} \rightarrow \mathbb{R}$, the *Taylor Series* of $f$ at $x_0$ is defined as

$$
\begin{align}
T_{\infty}(x_{0}) = \sum_{k=0}^\infty \frac{f^k(x)}{k!}(x-x_{0})^k. \tag{3}
\end{align}
$$

> [!info] $\mathcal{C}^\infty$ means that the function $f$ is continuously differentiable infinitely many times.

> [!tip] For $x_{0} = 0$, we obtain the *Maclaurin series* as a special instance of the Taylor Series. Also, if $f(x) = T_{\infty}$, then $f$ is called *analytic*.
###### (Differentiation Rules)
- Product Rule: $(f(x)g(x))' = f'(x)g(x)+f(x)g'(x)$ 
- Quotient Rule: $\left( \frac{f(x)}{g(x)}\right)'=\frac{(f(x)g(x))'}{(g(x))^2}$
- Sum Rule: $(f(x) +g(x))' = f'(x) +g'(x)$
- Chain Rule: $((g\circ f)(x))'=(g\circ f)'(x) = g'(f(x))f'(x)$
##### Intuition
At its core, the **Taylor series** is a method for approximating any complex, smooth function with a much simpler function—a polynomial—around a specific point. Imagine you're looking at a complicated curve on a graph. If you zoom in very close to one point, the curve starts to look like a straight line. If you zoom out a bit, it might look like a parabola. The Taylor series formalizes this idea.

The $k$-th coefficient represents the curvature of $k$-th degree for the function. So, fist coefficient for $k=0$ is the value of $f$ at $x_{0}$
**The 1st coefficient represents the slope of the function at $x_{0}$, the second coefficient represents the shape of the curve (parabola etc) and so on**.

##### Connections
* Forward Links: [Partial Derivative](/notes/partial-derivative/)
* Backward Links:
