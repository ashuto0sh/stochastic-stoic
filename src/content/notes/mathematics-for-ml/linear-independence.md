---
title: "Linear Independence"
tags:
  - "type/definition"
  - "linear-independence"
  - "linear-algebra"
---

##### Formal
###### (Linear Combination)
Consider a vector space $V$ and a finite number of vectors $x_{1}, x_{2},\dots,x_{k}\in V$. Then every $\mathcal{v}\in V$ of the form

$$
\begin{align}
\mathcal{v}=\lambda_{1}x_{1}+\dots+\lambda_{k}x_{k}= \sum_{i=1}^k\lambda_{i}x_{i}\in V \tag{1}
\end{align}
$$

with $\lambda_{1},\dots,\lambda_{k}\in \mathbb{R}$ is a *linear combination* of the vectors $x_{1},\dots,x_{k}$.
###### (Linear Independence)
Consider a vector space $V$ with $k\in\mathbb{N}$ and $x_{1},\dots,x_{n}\in V$. If there is a non-trivial combination, such that $\mathbf{0}=\sum_{i=1}^k\lambda_{i}x_{i}$ with atleast one $\lambda_{i} \neq 0$, the vectors $x_{i},\dots,x_{k}$ are *linearly dependent*. If only a trivial solution exists, i.e., $\lambda_{1}=\dots=\lambda_{k}=0$ the vectors $x_{1},\dots,x_{k}$ are *linearly independent*.
##### Intuition
At its heart, **linear independence** is about **non-redundancy**. A set of vectors is linearly independent if each vector in the set provides new, unique directional information that cannot be created from the others. No vector is "wasted" because it's just a combination of the other vectors. In the context of data, if your feature vectors are linearly independent, it means each feature is capturing a unique aspect of the data that can't be inferred from the others.
##### ML Applications
Linear independence is a critical prerequisite for many concepts and algorithms in machine learning.
- **Basis and Coordinate Systems**: A **basis** of a vector space is a set of vectors that is both linearly independent and spans the entire space. A basis is the most efficient possible description of a vector space—it's a minimal, non-redundant set of "building blocks." When we represent data, we are choosing a basis (often the standard basis like $[1,0,0],[0,1,0],[0,0,1]$) and finding the coordinates of our data points with respect to that basis.
- **Feature Selection and Multicollinearity**: In building linear regression models, we often have a design matrix X where each column is a feature. If some columns are linearly dependent, this is known as **perfect multicollinearity**. For example, if you have a feature for "temperature in Celsius" and another for "temperature in Fahrenheit," they are linearly dependent because one can be perfectly predicted from the other. This makes it impossible for the model to determine the unique effect of each feature, leading to infinitely many possible solutions and unstable model parameters. Feature selection often involves identifying and removing such redundant, linearly dependent features.
- **Rank of a Matrix & Dimensionality**: The **rank** of a matrix is the number of linearly independent columns (or rows). This number tells you the dimension of the subspace that the matrix's columns span (the column space). A matrix is "full rank" if all its columns are linearly independent. If the rank is less than the number of columns, it means the matrix is compressing the space into a lower dimension. This is the central idea behind dimensionality reduction techniques like PCA, which explicitly looks for a lower-rank approximation of the data matrix.
##### Connections
* Forward Links: [Basis](/notes/mathematics-for-ml/basis/), [Rank](/notes/mathematics-for-ml/rank/)
* Backward Links: [Vector Spaces](/notes/mathematics-for-ml/vector-spaces/)
