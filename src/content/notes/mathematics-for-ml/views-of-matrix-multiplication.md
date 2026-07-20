---
title: "Views of Matrix Multiplication"
tags:
  - "type/intuition"
  - "matrix"
  - "linear-algebra"
---

Generalizing your understanding from `Ax = b` to the full matrix-matrix multiplication `AB = C` is a critical step. It shifts the perspective from solving a static system to composing dynamic transformations, which is at the heart of machine learning.

Let's break down the different ways to view `AB = C`, building directly on the foundation you already have.

##### Setup
Let's define our matrices for clarity throughout this discussion:
- $A$ is an $m×n$ matrix.
- $B$ is an $n×p$ matrix.
- The resulting matrix $C$ will be $m×p$.
---
##### 1. The Standard View: Dot Products (Row-by-Column)
This is the first way matrix multiplication is taught and is the direct implementation you'd write in a naive nested loop.
- **The Intuitive Core:** The entry in the i-th row and j-th column of the output matrix C is the dot product of the i-th row of A and the j-th column of B.
- **The Mathematical Deep Dive:**

$$
c_{ij}=(\text{row }i\text{ of }\boldsymbol{A})⋅(\text{column }j\text{ of }\boldsymbol{B})=\sum_{k=1}^na_{ij}b_{kj}
$$

    
- **Generalizing from $Ax = b$:** You know this as the "row view" of `Ax=b`. Each entry in the output vector `b` is the dot product of a row from `A` with the vector `x`. Matrix multiplication `AB` is simply applying this same logic for _every column_ of `B`. You're essentially solving `p` separate linear systems at once.
- **Strategic Context:** This view is computationally straightforward and maps directly to a `for`-loop implementation. However, it provides the least geometric intuition about the overall transformation. It's how the machine calculates, but not necessarily how we should think.
---
##### 2. The Column View: Transforming Columns
This is arguably the most important view for understanding transformations in machine learning.
- **The Intuitive Core:** The matrix A acts as a transformation on _each column vector_ of B individually to produce the corresponding column of C.
- **The Mathematical Deep Dive:** Let $bj$ be the j-th column of B and $cj$ be the j-th column of C. Then:

$$
c_j=Ab_j
$$

	  This means the j-th column of C is a **linear combination of the columns of A**, where the weights are the entries from the j-th column of B.

$$
cj=b_{1j}a_1+b_{2j}a_2+⋯+b_{nj}a_n
$$

 
	where ak is the k-th column of A. 
- **Generalizing from `Ax = b`:** This is the direct generalization of the column view of `Ax = b`. In that case, the output vector `b` is a single linear combination of the columns of `A`. In `AB`, you are creating `p` such linear combinations—one for each column of `B`—and lining them up to form the new matrix `C`. 
- **Strategic Context (The 'Where'):** This is fundamental to deep learning. If A is the weight matrix of a neural network layer and B is a "batch" of input vectors (each column is one input), then C=AB calculates the output for the entire batch in one operation. This view is essential for understanding how a single transformation (the layer) can act on many data points simultaneously.    
---
##### 3. The Row View: Combining Rows

This is the dual of the Column View and is about how the rows of the output are formed.
- **The Intuitive Core:** Each _row_ of C is a linear combination of the _rows_ of B. The "recipe" for this combination is given by the corresponding row of A.
- **The Mathematical Deep Dive:** Let rowi(A), rowk(B), and rowi(C) denote the respective rows.
    rowi(C)=ai1(row1(B))+ai2(row2(B))+⋯+ain(rown(B))
- **Generalizing from `Ax = b`:** This is a bit more abstract. It's related to how left-multiplication works. When you have xTA, the result is a linear combination of the rows of A. Similarly, in `AB`, the rows of `A` are the weights that combine the rows of `B`.
- **Strategic Context:** This view is useful when thinking about how a change of basis affects a set of data points. If the rows of `B` are your data points, the matrix `A` transforms your entire dataset, and the rows of `C` are your new data points.
---
##### 4. The Outer Product View: Sum of Rank-1 Matrices
This is the most sophisticated view and is key to understanding more advanced concepts like SVD and low-rank approximation.

- **The Intuitive Core:** The final matrix C is constructed by summing a series of simpler, "rank-1" matrices. Each of these simple matrices is formed by the **outer product** of a column from A and a row from B.
    
- **The Mathematical Deep Dive:**
  

$$
\begin{align}  \\
C = \sum_{k=1}^{n} (\text{column } k \text{ of } A) (\text{row } k \text{ of } B)   \\
C = \boldsymbol{a}_1 \boldsymbol{b}_1^T + \boldsymbol{a}_2 \boldsymbol{b}_2^T + \dots + \boldsymbol{a}_n \boldsymbol{b}_n^T
\end{align}
$$

    
    Remember, the outer product of a column vector ak (m×1) and a row vector bkT (1×p) results in an m×p matrix.
- **Generalizing from `Ax = b`:** This view doesn't have a direct parallel in the `Ax = b` system. It's a unique perspective on the matrix-matrix product that describes the decomposition of the entire transformation itself.
- **Strategic Context:** This is the language of matrix decompositions. The Singular Value Decomposition (SVD) expresses a matrix as a weighted sum of rank-1 outer products. In ML, this is used for dimensionality reduction (PCA), recommendation systems (matrix factorization), and topic modeling (LSA). It shows how a complex, high-rank transformation can be built from simpler, rank-1 components.
##### Connections
* Forward Links:[Rank](/notes/mathematics-for-ml/rank/)
* Backward Links: [Matrix](/notes/mathematics-for-ml/matrix/),[Column View of a System of Linear Equations](/notes/mathematics-for-ml/column-view-of-a-system-of-linear-equations/),[System of Linear Equations](/notes/mathematics-for-ml/system-of-linear-equations/)
