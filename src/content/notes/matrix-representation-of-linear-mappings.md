---
title: "Matrix Representation of Linear Mappings"
tags:
  - "linear-transformation"
  - "type/definition"
  - "linear-mapping"
  - "linear-algebra"
  - "change-of-basis"
---

##### Formal
*(Notation)* $B=(\boldsymbol{b}_{1},\dots,\boldsymbol{b}_{n})$ is an ordered basis. $\mathcal{B}=\{\boldsymbol{b}_{1},\dots,\boldsymbol{b}_{n}\}$ is an unordered basis. $\boldsymbol{B} = [\boldsymbol{b}_{1},\dots,\boldsymbol{b}_{n}]$ is a matrix whose columns are the vectors $\boldsymbol{b}_{1},\dots,\boldsymbol{b}_{n}$.
###### (Coordinates)
Consider a vector space $V$ and an ordered basis $B=(\boldsymbol{b}_{1},\dots,\boldsymbol{b}_{n})$ of $V$. For any $\boldsymbol{x} \in V$ we obtain a unique representation (linear combination)

$$
\begin{align}
\boldsymbol{x} = \alpha_{1}\boldsymbol{b}_{1},\dots,\alpha_{n}\boldsymbol{b}_{n} \tag{1}
\end{align}
$$

of $\boldsymbol{x}$ w.r.t. $B$. Then $\alpha_{1},\dots,\alpha_{n}$ are the *coordinates* of x w.r.t. $B$, and the vector

$$
\begin{align}
\alpha=\begin{bmatrix}\alpha_{1} \\
\vdots \\
\alpha_{n}
\end{bmatrix} \in \mathbb{R}^n
\end{align} \tag{2}
$$

is called the *coordinate vector/coordinate representation* of $\boldsymbol{x}$ w.r.t. ordered basis $B$.
###### (Transformation Matrix)
Consider the vector spaces $V$ and $W$ and their corresponding ordered bases $B=(\boldsymbol{b}_{1},\dots,\boldsymbol{b}_{n})$ and $C=(\boldsymbol{c}_{1},\dots,\boldsymbol{c}_{n})$. Moreover, consider a linear mapping $\Phi:V\rightarrow W$. For $j \in \{1,\dots,n\}$,

$$
\begin{align}
\Phi(\boldsymbol{b}_{j})= \alpha_{1j}\boldsymbol{c}_{1}+,\dots,+\alpha_{m1}\boldsymbol{c}_{m} = \sum_{i=1}^ma_{ij}\boldsymbol{c}_{i} \tag{3}
\end{align}
$$

is the unique representation of $\Phi(\boldsymbol{b}_{j})$ w.r.t. $C$. Then we call the $m\times n$-matrix $\boldsymbol{A}_{\Phi}$, whose elements are given by

$$
\begin{align}
A_{\Phi}(i,j)=\alpha_{ij}\;, \tag{4}
\end{align}
$$

the transformation matrix of $\Phi$.
###### (Change of Basis)
A change of basis is simply **changing the coordinate system** used to describe a vector. The vector itself—its actual direction and length in space—remains unchanged. What changes are the numbers we use to represent it.

Think about describing a specific color.
- In the **RGB basis**, you might describe it as `(218, 165, 32)`. This is a recipe: "start with black, add 218 units of red, 165 units of green, and 32 units of blue."
- In the **HSL basis** (Hue, Saturation, Lightness), you might describe the exact same color as `(43°, 74%, 49%)`. This is a different recipe for the same result.

Neither description is "wrong"; they are just different languages. The HSL basis is often more useful for artists because it aligns better with human perception. A change of basis in linear algebra is the same idea: we move from a default language (the standard basis) to a new one that makes our problem easier to solve or understand. The goal is to find a new coordinate system where the structure of our data becomes simple and obvious.
> [!note]- The change of basis matrix that translates *from* a custom basis $\mathcal{B}$ to standard basis $E$ is constructed simply by making vectors of $\mathcal{B}$ the columns of the transformation matrix $P$.
##### Example of Transformation Matrix Construction
Let's construct a transformation matrix for a specific example by following the formal definition.

The core principle is that the **columns of a transformation matrix are the coordinates of where the original basis vectors land**.

Let's define a transformation $Φ$ in 2D that does two things in order:
1. Rotates a vector 90 degrees counter-clockwise.
2. Then, scales the resulting vector's y-component by a factor of 3.
We'll use the standard basis in $\mathbb{R}^2$:
- $e_{1}=\begin{bmatrix}1\\0\end{bmatrix}$ (the x-direction vector)
- $e_{2}=\begin{bmatrix}0\\1\end{bmatrix}$ (the y-direction vector)
---
###### Step 1: Find the Destination of the First Basis Vector ($e_1$)
We apply our transformation $\Phi$ to $e_1$:
1. **Rotate** $\begin{bmatrix}1\\0\end{bmatrix}$by 90 degrees counter-clockwise. This moves it to $\begin{bmatrix}0\\1\end{bmatrix}$.
2. **Scale** the y-component of the result by 3. The vector becomes $\begin{bmatrix}0\\1\times 3\end{bmatrix}=\begin{bmatrix}0\\3\end{bmatrix}$.
This resulting vector, $\begin{bmatrix}0\\3\end{bmatrix}$, is the **first column** of our transformation matrix.
---
###### Step 2: Find the Destination of the Second Basis Vector ($e_2$)
Now we apply the same transformation $\Phi$ to $e_2$:
1. **Rotate** $\begin{bmatrix}0\\1\end{bmatrix}$ by 90 degrees counter-clockwise. This moves it to $\begin{bmatrix}-1\\0\end{bmatrix}$.
2. **Scale** the y-component of the result by 3. The vector becomes $\begin{bmatrix}-1\\0\times 3\end{bmatrix}=\begin{bmatrix}-1\\0\end{bmatrix}$.
This resulting vector, $\begin{bmatrix}-1\\0\end{bmatrix}$, is the **second column** of our transformation matrix.
---
###### Step 3: Assemble the Matrix
Now we simply place the resulting vectors from Step 1 and Step 2 as the columns of our matrix A.

$$
\begin{align}
A=\begin{bmatrix}0&&-1\\3&&0\end{bmatrix}
\end{align}
$$

This is the transformation matrix for our defined operation.
###### Verification
Let's test this matrix on an arbitrary vector, say $v=\begin{bmatrix}2\\1\end{bmatrix}$.
**Using the matrix:**

$$
\begin{align}
A\mathcal{v}=\begin{bmatrix}
0&&-1 \\
3&&0
\end{bmatrix} \begin{bmatrix}
2 \\
1
\end{bmatrix}=\begin{bmatrix}
-1 \\
6
\end{bmatrix}
\end{align}
$$

**Applying the transformation steps directly to v:**
1. **Rotate** $\begin{bmatrix}2\\1\end{bmatrix}$ by 90 degrees. This moves it to $\begin{bmatrix}-1\\2\end{bmatrix}$.
2. **Scale** the y-component by 3. This results in $\begin{bmatrix}-1\\2\times 3\end{bmatrix}=\begin{bmatrix}-1\\6\end{bmatrix}$.
The results match perfectly. The matrix correctly encodes the entire transformation.
##### Intuition
A **transformation matrix** is a "recipe book" that contains all the instructions for a specific linear transformation. The most critical insight, and the key to how it works, is that if you know where your fundamental directions (the basis vectors) go, you can determine where any other vector will end up.

Think of it this way:
- The **first column** of the matrix is the exact address where the first basis vector (e.g., `[1, 0, 0]`) lands after the transformation.
- The **second column** is the address for the second basis vector (e.g., `[0, 1, 0]`).
- ...and so on.

The matrix is simply a compact and organized way of storing the "after" picture of your basis vectors. Once you have this recipe, applying the transformation to _any_ vector just means combining these transformed basis vectors in the same way you would have combined the original ones.

In short, the matrix encodes the entire geometric transformation—be it a rotation, a shear, a scaling, or a combination thereof—into a single grid of numbers.
##### ML Application
The transformation matrix is the workhorse that powers linear algebra in nearly all computational contexts, especially machine learning.
- **Neural Networks**: As mentioned before, a dense layer in a neural network _is_ a transformation matrix (the weight matrix) that represents a learned linear mapping, followed by a non-linearity. The process of training is essentially finding the numbers for this matrix that best transform the data to make it more separable or predictable.
- **Composing Transformations**: One of the most elegant properties is that the composition of two linear mappings corresponds to the multiplication of their transformation matrices. If you want to rotate an image and then scale it, you can multiply the rotation matrix by the scaling matrix to get a single new matrix that performs both operations at once. This is computationally efficient and fundamental to both deep learning (stacking layers) and computer graphics.
- **Change of Basis**: When we want to change the coordinate system of a vector (e.g., from the standard basis to the PCA basis), we multiply the vector by a **change-of-basis matrix**. This matrix is a specific type of transformation matrix whose columns are the basis vectors of the new coordinate system expressed in the old system's coordinates.
##### Connections
* Forward Links:
* Backward Links: [Matrices as Linear Transformation](/notes/matrices-as-linear-transformation/)[Basis](/notes/basis/)[Linear Mappings](/notes/linear-mappings/)
