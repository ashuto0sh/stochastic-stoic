---
title: "Column View of a System of Linear Equations"
tags:
  - "type/intuition"
  - "linear-equation"
  - "linear-algebra"
---

##### Core Idea
Consider the following system of linear equations in 2-dimensional space

$$
\begin{align}
a_{11}x_{1}+a_{12}x_{2}=b_{1} \\
a_{21}x_{1}+a_{22}x_{2}=b_{1} \\
a_{31}x_{1}+a_{32}x_{2}=b_{1} \\
\end{align} \tag{1}
$$

this could also be synthesized and written as

$$
\begin{align}
\begin{bmatrix}
a_{11} \\
a_{21} \\
a_{31}
\end{bmatrix} 
x_{1}+ \begin{bmatrix}
a_{12} \\
a_{22} \\
a_{32}
\end{bmatrix} x_{2}=\begin{bmatrix}
b_{1} \\
b_{2} \\
b_{3}
\end{bmatrix} \tag{2}
\end{align}
$$

This is the column-view interpretation of the set of linear equations. Here, we now seek linear compositions of two vectors (the ones $x_1$ and $x_2$ are multiplied to) to obtain the third. 

Notice that these are now two 3-dimensional vectors whose combination we are interested in. The two column vectors, $[a_{11}\; a_{21}\;a_{31}]^T$ and $[a_{11}\; a_{21}\;a_{31}]^T$, are vectors in 3D space. The set of all their possible linear combinations (their **span**) forms a **2-D plane** that passes through the origin within this 3D space. The solution $[x_{1}\;x_{2}]$ tells us how much to walk along these vectors to reach our target $[b_{1}\;b_{2}\;b_{3}]^T$.

A solution exists **if and only if** the target vector $b$ also lies on this exact same plane. If $b$ pointed even slightly out of this plane, it would be unreachable, and no solution would exist.

###### Extension
Now restructure the equation (2) to look as follows

$$
\begin{align}
\begin{bmatrix}
a_{11}&a_{12} \\
a_{21}&a_{22} \\
a_{31}&a_{32}
\end{bmatrix} 
\begin{bmatrix}
x_{1} \\
x_{2} \\
\end{bmatrix}=\begin{bmatrix}
b_{1} \\
b_{2} \\
b_{3}
\end{bmatrix} \tag{3}
\end{align}
$$

In short, this is 

$$
\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b} \tag{4}
$$

The best intuition for the column view is **synthesis** or **composition**. Think of the columns of the matrix $\boldsymbol{A}$ as a set of fundamental ingredients, like primary paint colors. The vector $\boldsymbol{x}$ represents the recipe—the amounts of each ingredient to use. The vector $\boldsymbol{b}$ is the final target color you want to create.

The equation $\boldsymbol{A}\boldsymbol{x}=\boldsymbol{b}$, when seen from the column view, asks:
> "Can I mix my available ingredients (the columns of $\boldsymbol{A}$) according to some recipe (the values in $\boldsymbol{x}$) to get my desired final product (the vector $\boldsymbol{b}$)?

This perspective shifts the focus from a set of intersecting constraints (the row view) to a question of **reachability**. What can we build with the tools we have? The set of all possible vectors we can create from our ingredients is called the **span** or the **column space**. It's your entire color palette. If your target color $\boldsymbol{b}$ is on the palette, you have a solution. If it's not, you don't.

###### (Linear Dependence)
In the equations above, if the two columns of $\boldsymbol{A}$ (ingredients) point in the same direction, they are linearly dependent and the **span** would just be the column vector rather than a plane.

###### Basis Transformation
> [!idea]- A matrix $A \in \mathbb{R}^{m\times n}$  represents a a transformation of basis vectors in $\mathbb{R}^n$ to $\mathbb{R}^m$.
##### Connections
* Forward Links: [Row View of a System of Linear Equations](/notes/mathematics-for-ml/row-view-of-a-system-of-linear-equations/), [Matrix View of a System of Linear Equations](/notes/mathematics-for-ml/matrix-view-of-a-system-of-linear-equations/)
* Backward Links: [System of Linear Equations](/notes/mathematics-for-ml/system-of-linear-equations/), [Matrix](/notes/mathematics-for-ml/matrix/)
##### References
- https://gregorygundersen.com/blog/2018/10/24/matrices/
