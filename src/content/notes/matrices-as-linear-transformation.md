---
title: "Matrices as Linear Transformation"
tags:
  - "type/intuition"
  - "linear-mapping"
  - "matrix"
  - "linear-transformation"
  - "linear-algebra"
---

You are absolutely correct in your interpretation of $A\mathbf{x}=\mathbf{b}$. While this equation is often used to *solve* for an unknown $\mathbf{x}$, the deeper way to view it is exactly as you described:

**The matrix $A$ is a function (a transformation) that takes vector $\mathbf{x}$ as input and outputs vector $\mathbf{b}$.**
We can write this using function notation as $T(\mathbf{x}) = A\mathbf{x}$, where $T$ is the transformation defined by matrix $A$.
Here is a breakdown of how to visualize these transformations and how the rank of the matrix dictates the nature of the transformation.

---
##### Part 1: Visualizing the Transformation
To visualize a linear transformation, we must think about how the matrix moves the *entire* space (e.g., the entire 2D plane), not just a single vector.
###### 1. Properties of Linear Transformations
When a matrix transforms a space, it does so uniformly. These are called *linear* transformations, and they must obey specific geometric rules:
1. **The origin remains fixed.** (The zero vector is always mapped to the zero vector).
2. **Lines remain lines.** (No curves or bending).
3. **Grid lines remain parallel and evenly spaced.**
A linear transformation involves scaling, rotating, reflecting, or shearing the space.
###### 2. The Key Insight: Tracking the Basis Vectors
How do we know *which* transformation a specific matrix represents? The crucial concept is tracking the **basis vectors**.
In 2D space, these are the fundamental unit vectors that define the grid:
$\hat{i} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$ (Unit vector on the x-axis)
$\hat{j} = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ (Unit vector on the y-axis)
Every vector is a linear combination of these. For example, $\mathbf{v} = \begin{pmatrix} 3 \\ 2 \end{pmatrix}$ is $3\hat{i} + 2\hat{j}$.
Because the transformation is linear (grid lines remain evenly spaced), the transformed vector $A\mathbf{v}$ will be $3$ times the transformed $\hat{i}$ plus $2$ times the transformed $\hat{j}$.

$$
A\mathbf{v} = A(3\hat{i} + 2\hat{j}) = 3(A\hat{i}) + 2(A\hat{j})
$$

Therefore, a linear transformation is completely determined by where it moves the basis vectors.
###### 3. The Columns Tell the Story
This is where the visualization clicks into place: **The columns of a matrix tell you exactly where the basis vectors land after the transformation.**
Let's look at a matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$.
* If we multiply $A$ by $\hat{i}$: $A\hat{i} = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} a \\ c \end{pmatrix}$. This is the first column.
* If we multiply $A$ by $\hat{j}$: $A\hat{j} = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} b \\ d \end{pmatrix}$. This is the second column.
**The Visualization Process:**
To visualize what a matrix $A$ does, imagine the standard coordinate grid. Move $\hat{i}$ to the location specified by the first column of $A$, and move $\hat{j}$ to the location specified by the second column of $A$. As you move them, imagine the entire grid stretching and shearing uniformly to match.
###### 4. Examples
**A. Rotation (90 degrees counter-clockwise)**
$\hat{i}$ (1,0) should move to (0,1).
$\hat{j}$ (0,1) should move to (-1,0).
The matrix is: $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$
**B. Shear (Horizontal)**
We want to slant the vertical lines.
$\hat{i}$ stays at (1,0).
$\hat{j}$ moves from (0,1) to (1,1).
The matrix is: $S = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$

---
##### Part 2: The Impact of Rank on the Transformation
The rank of the matrix provides a powerful geometric interpretation of the transformation.
Recall the definition of **Rank**: The rank of a matrix is the maximum number of linearly independent columns. It is also the dimension of the **Column Space**—the set of all possible outputs ($A\mathbf{x}$).
**Geometrically, the rank of a matrix is the dimension of the output of the transformation.**
The rank tells us whether the transformation preserves the dimensionality of the input space or "compresses" it.
###### Visualizing Rank in 2D
Let's consider a 2x2 matrix $A$. This matrix transforms the 2D plane.
**Case 1: Rank 2 (Full Rank)**
If the rank is 2, the columns are linearly independent. The transformed basis vectors point in different directions and still span the entire plane.
* **Example:** $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ (The Shear example).
* **Transformation:** The grid is warped, but it remains a 2D grid.
* **Output Space:** The entire 2D plane.
* **Invertibility:** The transformation is invertible. You can "undo" the transformation because no information was lost.
**Case 2: Rank 1**
If the rank is 1, the columns are linearly dependent (one is a multiple of the other). The transformed basis vectors land on the same line.
* **Example:** $B = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$. (Column 2 is 2x Column 1).
* **Transformation:** The entire 2D input plane is **squashed** or projected onto a single 1D line (in this case, the line defined by the vector (1, 2)).
* **Output Space:** A 1D line passing through the origin.
* **Invertibility:** The transformation is *not* invertible. Information is lost during the compression. Many different input vectors map to the same output vector on the line, so you cannot uniquely reverse the process.
**Case 3: Rank 0**
The only matrix with rank 0 is the zero matrix.
-  **Example:** $Z = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$.
* **Transformation:** Everything is squashed to the origin.
* **Output Space:** A 0D point (the origin).
###### Generalizing Rank
This concept extends perfectly to higher dimensions. Consider a 3x3 matrix (transforming 3D space):
* **Rank 3 (Full Rank):** The 3D space is transformed but remains 3D. It is invertible.
* **Rank 2:** The entire 3D space is squashed onto a 2D plane passing through the origin. It is not invertible.
* **Rank 1:** The entire 3D space is squashed onto a 1D line passing through the origin. It is not invertible.
##### Summary
The shift from viewing $A\mathbf{x}=\mathbf{b}$ as a system of equations to viewing it as a transformation is fundamental to linear algebra.
1. **Matrices as Actions:** Matrices are recipes for linear transformations, acting as functions that move vectors.
2. **Visualization Key:** The columns of the matrix dictate where the basis vectors (like $\hat{i}$ and $\hat{j}$) land, defining how the entire coordinate grid moves.
3. **Role of Rank:** The rank tells you the dimension of the output space. If the rank is less than the input dimension, the transformation has compressed the space into a lower dimension, resulting in an irreversible loss of information.
##### Connections
* Forward Links: [Matrices as Inner Products](/notes/matrices-as-inner-products/)
* Backward Links: [Matrix](/notes/matrix/), [Linear Mappings](/notes/linear-mappings/),[Column View of a System of Linear Equations](/notes/column-view-of-a-system-of-linear-equations/),[Rank](/notes/rank/),[Basis](/notes/basis/)
