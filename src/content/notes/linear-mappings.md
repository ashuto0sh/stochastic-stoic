---
title: "Linear Mappings"
tags:
  - "type/definition"
  - "linear-mapping"
  - "vector-spaces"
  - "linear-algebra"
---

##### Formal
###### (Linear Mapping)
For vector spaces $V$ and $W$, a mapping $\Phi:V\rightarrow W$ is called a *linear mapping* (or *vector space homomorphism/linear transformation*) if

$$
\begin{align}
\forall x,y \in V\;\forall \lambda,\psi \in \mathbb{R}: \Phi(\lambda x+\psi y)=\lambda\Phi(x)+\psi\Phi(y). \tag{1}
\end{align}
$$

###### (Injective, Surjective, Bijective)
Consider a mapping $\Phi:\mathcal{V}\rightarrow \mathcal{W}$, where $\mathcal{V,W}$ can be arbitrary sets. Then $\Phi$ is called
- *Injective* if $\forall x,y\in\mathcal{V}\;:\Phi(x)=\Phi(y) \implies x=y$.
- *Surjective* if $\Phi(\mathcal{V})=\mathcal{W}$.
- *Bijective* if it is injective and surjective.

**(Theorem)** *Finite dimensional vector spaces $V$ and $W$ are isomorphic if and only if $\text{dim}(V)=\text{dim}(W)$*. It states that there exists a linear, bijective mapping between two vector spaces of the same dimension. Intuitively, this means that vector spaces of the same dimension are kind of the same thing, as they can be transformed into each other without incurring any loss.
##### Intuition
A **linear mapping** (or linear transformation) is a special type of function that transforms vectors from one vector space to another in a way that preserves the grid lines of the space. Imagine a sheet of graph paper. A linear mapping can stretch it, shrink it, rotate it, or shear it, but it must keep the grid lines parallel and evenly spaced. Crucially, the **origin must stay in the same place**.

What it _cannot_ do is curve the space, tear it, or shift the origin. There are two fundamental rules it must obey:
1. **Additivity**: Transforming two vectors and then adding them is the same as adding them first and then transforming the result. `T(v + w) = T(v) + T(w)`.
2. **Homogeneity (Scaling)**: Scaling a vector and then transforming it is the same as transforming it first and then scaling the result. `T(cv) = cT(v)`.

From a software engineering perspective, you can think of a linear mapping as a well-behaved API for a vector space. It guarantees that the core operations of addition and scaling are preserved through the transformation. This predictability is what makes linear algebra so powerful and computable.
###### The Matrix Connection
This is the most critical link: **Every linear mapping can be represented by a matrix, and every matrix represents a linear mapping.**

As we discussed previously, a matrix A encodes a linear mapping because the operation of matrix-vector multiplication, Ax, inherently satisfies the properties of additivity and homogeneity:
- A(x+y)=Ax+Ay
- A(λx)=λ(Ax)

The matrix A is the concrete, computable implementation of the abstract concept of a linear mapping Φ. The columns of the matrix, as we've seen, are simply the result of applying the mapping to the basis vectors of the input space.

Two important subspaces associated with a linear mapping are:
- **Image (or Range)**: The set of all possible output vectors in W. This is equivalent to the **column space** of the transformation matrix A.
- **Kernel (or Null Space)**: The set of all input vectors in V that are mapped to the zero vector in W. This is the **null space** of the matrix A.
##### Connections
* Forward Links:[Matrices as Linear Transformation](/notes/matrices-as-linear-transformation/)
* Backward Links: [Vector Spaces](/notes/vector-spaces/), [Rank](/notes/rank/),
