---
title: "Row View of a System of Linear Equations"
tags:
  - "type/intuition"
  - "linear-equation"
  - "linear-algebra"
---

##### Core Idea
###### 2-dimensional
Imagine a system of linear equations in 2-dimensional space.

$$
\begin{align}
a_{11}x_{1}+a_{12}x_{2}=b_{1} \\
a_{21}x_{1}+a_{22}x_{2}=b_{1} \\
a_{31}x_{1}+a_{32}x_{2}=b_{1} \\
\end{align}
$$

Notice that each of the rows is very similar to the familiar equation of a line in a 2-dimensional space ($y=mx+c$).
Notice also that the solution for this system of equations is the set of tuples $x_{1}, x_{2}$ that satisfy all the equations simultaneously.
Since each of the equations represents a line, the solution for this system of linear equation would be all the points between these "lines" that intersect. They could either (a) not intersect at all, (b) intersect at a single point, or (c) overlap and thus have infinitely many solutions.

###### 3-dimensional
Similarly, imagine a system of linear equations in 3-dimensional space.

$$
\begin{align}
a_{11}x_{1}+a_{12}x_{2}+a_{13}x_{3}=b_{1} \\
a_{21}x_{1}+a_{22}x_{2}+a_{23}x_{3}=b_{2} \\
a_{31}x_{1}+a_{32}x_{2}+a_{33}x_{3}=b_{3} \\
\end{align}
$$

Notice that each of these equations represents [a plane](https://en.wikipedia.org/wiki/Euclidean_planes_in_three-dimensional_space) in 3-dimensional space. Drawing the analogy from the previous example, the solution to these set of linear equations would be a set of points $x_{1}, x_{2}, x_{3}$ that simultaneously lie on each of the planes. This could either be (a) non-existent, (b) meet at a single point, or (c) have infinite values (could intersect on a line or a plane).

###### Extension
If interpreted row-wise, each of these equations in a system of $n$ unknowns could be imagined as a [hyperplane in the n dimensional space](https://en.wikipedia.org/wiki/Hyperplane). The solution to these equations therefore would be all the points in any of the hyperplanes that also simultaneously lies on every other hyperplane.

##### Connections
* Forward Links: [Column View of a System of Linear Equations](/notes/mathematics-for-ml/column-view-of-a-system-of-linear-equations/), [Matrix View of a System of Linear Equations](/notes/mathematics-for-ml/matrix-view-of-a-system-of-linear-equations/)
* Backward Links: [System of Linear Equations](/notes/mathematics-for-ml/system-of-linear-equations/)
