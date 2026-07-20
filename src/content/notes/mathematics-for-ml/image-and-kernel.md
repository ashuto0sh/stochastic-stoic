---
title: "Image and Kernel"
tags:
  - "type/definition"
  - "image"
  - "kernel"
  - "linear-algebra"
---

##### Formal
###### (Image and Kernel)
For $\Phi:V\rightarrow W$, we define the *kernel/null space*

$$
\begin{align}
\text{ker}(\Phi) \coloneqq \Phi^{-1}(\boldsymbol{0}_{W}) = \{v\in V:\Phi(v)=\boldsymbol{0}_{W}\} \tag{1}
\end{align}
$$

and the *image/range*

$$
\begin{align}
\text{Im}(\Phi) \coloneqq \Phi(V) = \{\boldsymbol{w\in W|\exists \boldsymbol{v}\in V:\Phi(\boldsymbol{v}=\boldsymbol{w})}\}.\tag{2}
\end{align}
$$

We also call $V$ and $W$ as domain and codomain of $\Phi$.
###### Properties
Consider a linear mapping $\Phi : V \rightarrow W$, where $V$, $W$ are vector spaces.
- It always holds that $\Phi(\mathbf{0}_{V})=\mathbf{0}_{W}$ and, therefore, $\mathbf{0}_{V}\in \text{ker}(\Phi)$. In particular, the null space is never empty.
- $\text{Im}(\Phi) \subseteq W$ is a subspace of $W$, and $\text{ker}(\Phi) \subseteq V$ is a subspace of $V$.
- $\Phi$ is injective (one-to-one) if and only if $\text{ker}(\Phi)=\{0\}$.
(Null Space and Column Space). Let us consider $A \in \mathbb{R}^{m×n}$ and a linear mapping $\Phi:\mathbb{R}^n\rightarrow\mathbb{R}^m$, $x\mapsto\boldsymbol{A}x$.
- For $\boldsymbol{A} = [a_{1}, \dots,a_{n}]$, where $a_i$ are columns of $\boldsymbol{A}$, we obtain

$$
\begin{align}
\text{Im}(\Phi) = \{\boldsymbol{A}x:x\in\mathbb{R}^n\}=\left\{\sum_{i=1}^nx_{i}a_{i}:x_{1},\dots,x_{n}\in \mathbb{R}\right\} \tag{3}  \\
=\text{span}[a_{1},\dots, a_{n}] \subseteq \mathbb{R}^m \tag{4}
\end{align}
$$

- $\text{rk}(\boldsymbol{A})$=$\text{dim(Im(}\Phi))$.
- The kernel/null space $\text{ker}(\Phi)$ is the general solution to the homogeneous system of linear equations Ax = 0 and captures all possible linear combinations of the elements in Rn that produce 0 ∈ Rm. The kernel is a subspace of Rn , where n is the “width” of the matrix.
###### (Rank-Nullity Theorem)
For vector spaces $V$, $W$ and a linear mapping $\Phi:V\rightarrow W$ it holds that

$$
\begin{align}
\text{dim}(\text{ker}(\Phi)) + \text{dim}(\text{Im}(\Phi)) = \text{dim}(V). \tag{5}
\end{align}
$$

##### Connections
* Forward Links:
* Backward Links: [Matrices as Linear Transformation](/notes/mathematics-for-ml/matrices-as-linear-transformation/), [Linear Mappings](/notes/mathematics-for-ml/linear-mappings/), [Rank](/notes/mathematics-for-ml/rank/)
