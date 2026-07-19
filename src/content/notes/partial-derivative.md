---
title: "Partial Derivative"
tags:
  - "vector-calculus"
  - "type/definition"
  - "jacobian"
  - "gradient"
aliases:
  - "Jacobian"
  - "The Gradient Generalizes the Derivative to Multiple Dimensions"
---

##### Formal
The generalization of [Univariate Calculus Refresher](/notes/univariate-calculus-refresher/#derivative) to functions of several variables is the *gradient*.
###### (Partial Derivative)
For a function $f:\mathbb{R}^n \rightarrow \mathbb{R}, x \mapsto f(x), x \in \mathbb{R}^n$ of $n$ variables $x_1, \dots, x_{n}$ we define *partial derivative* as 

$$
\begin{align}
\frac{\partial f}{\partial x_{1}} &= \lim_{ h \to 0 } \frac{f(x_{1}+h,\dots,x_{n})-f(x)}{h} \\
&\ \vdots \\
\frac{\partial f}{\partial x_{n}} &= \lim_{ h \to 0 } \frac{f(x_{1},\dots,x_{n}+h)-f(x)}{h}
\end{align} \tag{1}
$$

and collect them in a row vector

$$
\nabla_{x} f = \text{grad}f = \frac{df}{dx} =\begin{bmatrix}
\dfrac{\partial f}{\partial x_{1}} \dfrac{\partial f}{\partial x_{2}}\dots \dfrac{\partial f}{\partial x_{n}}
\end{bmatrix} \in \mathbb{R}^{1 \times n}, \tag {2}
$$

 where $n$ is the number of variables and $1$ is the dimension of the image/range/codomain of $f$.
###### Rules of Partial Differentiation
- Product Rule: 

$$
\frac{\partial}{\partial x}(f(x)g(x)) = \frac{\partial f}{\partial x}g(x)+f(x) \frac{\partial g}{\partial x} \tag{3}
$$

- Sum Rule: 

$$
\frac{\partial}{\partial x}(f(x)+g(x)) = \frac{\partial f}{\partial x} + \frac{\partial g}{ \partial x} \tag{4}
$$

- Chain Rule: 

$$
\frac{\partial}{\partial x}(g \circ f)(x) = \frac{\partial}{\partial x}(g(f(x))) = \frac{\partial g}{\partial f} \frac{\partial f}{\partial x} \tag{5}
$$

##### Intuition
###### Chain Rule
Think of it as a **dependency graph for rates of change**. Imagine a simple computation graph like the one in Figure 5.10 from the text: an input $x$ produces an intermediate value $a$, which produces $b$, which finally produces an output $y$. $x \rightarrow a \rightarrow b \rightarrow y$. The chain rule answers the question: "If I slightly nudge the input $x$, how much does the final output $y$ change?" It tells us that the total change in $y$ with respect to $x$ is the _product_ of the rates of change at each step along the path.

$$
\begin{align}
\dfrac{dy}{dx} = \dfrac{\text{change in y}}{\text{change in b}} \times \dfrac{\text{change in b}}{\text{change in a}} \times \dfrac{\text{change in a}}{\text{change in x}}
\end{align}
$$

If $f$ is a function in two variables $x_{1}, x_{2}$ which in turn are functions of $t$, then the gradient of $f$ w.r.t. $t$ is

$$
\frac{df}{dt} = \begin{bmatrix}
\dfrac{\partial f}{\partial x_{1}} & \dfrac{\partial f}{\partial x_{2}}
\end{bmatrix} \begin{bmatrix}
\dfrac{\partial x_{1}(t)}{\partial t} \\
\dfrac{\partial x_{2}(t)}{\partial t}
\end{bmatrix}=\dfrac{\partial f}{\partial x_{1}}\dfrac{\partial x_{1}}{\partial t} + \dfrac{\partial f}{\partial x_{2}}\dfrac{\partial x_{2}}{\partial t}, \tag{6}
$$

##### ML Applications
**Connection to Backpropagation:** A deep neural network is a deeply nested composite function, $y=(f_K\circ f_{K−1}\circ \dots\circ f_1)(x)$. To train the network, we minimize a loss function $L$ that depends on the final output. This requires computing the gradient of the loss with respect to the parameters $\theta_i$ of _each_ function (layer) $f_i$.
##### Connections
* Forward Links:
* Backward Links: [Univariate Calculus Refresher](/notes/univariate-calculus-refresher/)
