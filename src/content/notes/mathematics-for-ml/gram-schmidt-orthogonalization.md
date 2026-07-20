---
title: "Gram-Schmidt Orthogonalization"
tags:
  - "analytical-geometry"
  - "type/concept"
  - "orthogonality"
  - "basis"
---

##### Intuition
Imagine you are given a set of random, skewed, and stretched basis vectors. They span a space, but they're messy to work with. The Gram-Schmidt process is an algorithm that takes this messy set of vectors and neatly straightens them out, one by one, into a perfect orthonormal basis.

**Analogy: Building a Perpendicular Frame** Think of building a wooden frame. You are given a pile of wooden beams (your initial basis vectors). They are all different lengths and are leaning against each other at odd angles.
1. **First Beam:** You take the first beam and fix it in place. This will be the first axis of your new, clean coordinate system. You then cut it down to a standard length of 1 meter (normalization).
2. **Second Beam:** You take the second beam. Before fixing it, you need to make sure it's perpendicular to the first one. You measure the "shadow" (projection) that the second beam casts onto the first beam and subtract that shadow from the second beam. The leftover piece _must_ be perpendicular to the first beam. You then fix this new, perpendicular beam in place and cut it down to 1 meter (normalization).
3. **Third Beam:** You take the third beam. You measure its shadow on the first beam and subtract it. Then you measure its shadow on the _second_ (newly placed) beam and subtract that too. The leftover piece is now guaranteed to be perpendicular to both of the first two. You fix it in place and, again, normalize its length to 1 meter.

You continue this process, and at the end, you have a perfectly perpendicular, standardized frame—an orthonormal basis. The Gram-Schmidt process is the mathematical formalization of this "subtract the shadow" procedure.
##### Formal
Let's say we start with a basis $\{\mathbf{a}_{1},…,\mathbf{a}_{k}\}$ for a subspace $U$. We want to produce an orthonormal basis $\{\mathbf{b}_{1},…,\mathbf{b}_{k}\}$.
**Step 1: The first vector**
We take the first vector, $\mathbf{a}_{1}$, and it becomes the first direction for our new basis. We'll call the unnormalized version $\mathbf{u}_{1}$. 

$$
\mathbf{u}_{1}=\mathbf{a}_{1} \tag{1}
$$

To get the first orthonormal basis vector, we normalize it:

$$
\mathbf{b}_{1} = \frac{\mathbf{u}_{1}}{||\mathbf{u}_{1}||}\tag{2}
$$

**Step 2: The second vector**
Now we take the second vector, $\mathbf{a}_{2}$. We subtract its projection onto the subspace spanned by our first new vector, $\mathbf{u}_{1}$. This leaves only the component of $\mathbf{a}_{2}$ that is orthogonal to $\mathbf{u}_{1}$.

$$
\mathbf{u}_{2} = \mathbf{a}_{2} - \pi_{u_{1}}(\mathbf{a}_{2})=\mathbf{a}_{2}-\frac{\langle \mathbf{a}_{2}, \mathbf{u}_{1 \rangle}}{||\mathbf{u}_{1}||^2} \mathbf{u}_{1}\tag{3}
$$

Now we can normalize $\mathbf{u}_{2}$ to get $\mathbf{b}_{2}$ following step (2).
**Step 3: The general step for the j-th vector**
For any subsequent vector $a_j$, we subtract its projections onto the subspaces spanned by _all_ the previously constructed orthogonal vectors $\{u_1,…,u_{j−1}\}$.

$$
\mathbf{u}_{j}=\mathbf{a}_{j}-\sum_{i=1}^{j-1}\pi_{\mathbf{u}_{i}}(\mathbf{a}_{j}) \tag{4}
$$

The resulting vector $\mathbf{u}_j$ is orthogonal to all previous vectors. We then normalize it to get $\mathbf{b}_{j}$.
##### ML Applications
The Gram-Schmidt process is a fundamental constructive algorithm in numerical linear algebra and has direct implications for machine learning.
- **Foundation for Other Algorithms**: It is the theoretical basis for creating the orthonormal matrices used in decompositions like the **QR factorization**, which is a workhorse in numerical computing and is used in many least-squares solvers. While numerically superior methods often replace it in production code (due to rounding errors), Gram-Schmidt provides the conceptual blueprint.
- **Building Custom Orthonormal Bases**: In many areas, from computer graphics to robotics and signal processing, we need to define a coordinate system relative to some objects or data. Gram-Schmidt is the direct algorithm to take a set of spanning vectors for that system and turn them into a stable, usable orthonormal basis.
- **Conceptual Tool**: For a machine learning practitioner, the most important role of Gram-Schmidt is conceptual. It solidifies the idea that _any_ subspace has an orthonormal basis and provides a clear, step-by-step method for finding it. It demonstrates that the power of orthogonal projections is not just analytical but also constructive, allowing us to build the ideal coordinate systems that algorithms like PCA and SVD rely on.
##### Connections
* Forward Links:
* Backward Links: [Angles and Orthogonality](/notes/mathematics-for-ml/angles-and-orthogonality/), [Orthogonal Projections](/notes/mathematics-for-ml/orthogonal-projections/), [Inner Products](/notes/mathematics-for-ml/inner-products/), [Basis](/notes/mathematics-for-ml/basis/)
