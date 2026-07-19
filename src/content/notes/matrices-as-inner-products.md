---
title: "Matrices as Inner Products"
tags:
  - "type/intuition"
  - "analytical-geometry"
  - "inner-products"
  - "matrix"
---

This concept, bridges the gap between abstract vector operations and concrete matrix representations. It shows how matrices can _define_ custom inner products, which allows us to create flexible, data-dependent geometric spaces.

##### 1. The Intuitive Core (The 'Why')
So far, we've treated the standard dot product (x⊤y) as the _only_ way to calculate an inner product. This is like assuming that the only way to measure distance in a city is "as the crow flies" (Euclidean distance).

But what if we wanted a different way to measure the relationship between two vectors? What if we wanted to say that certain directions in our data space are "more important" or "longer" than others?

This is where matrices come in. A **symmetric, positive definite matrix** can be used to define a **custom inner product**. You can think of this matrix as a "rulebook" or a "metric tensor" that redefines the geometry of the vector space. It stretches and rotates the space, changing our fundamental notions of length, angle, and distance.

**Analogy:** Imagine a piece of stretchy fabric.
- The standard inner product ($x^Ty$) is like measuring distances on the flat, unstretched fabric.
- A custom inner product, defined by a matrix $A$ as $\langle x,y\rangle A=x^TAy$, is like stretching and weighting the fabric. Distances and angles change. Two points that were close might now be far apart, and directions that were perpendicular might not be anymore, all according to the "stretching rules" defined by matrix $A$.

The problem this solves is creating **data-dependent geometry**. Instead of using a one-size-fits-all Euclidean space, we can use a matrix (often derived from the data itself) to define an inner product that is tailored to the structure of our specific problem.
##### 2. The Mathematical Deep Dive (The 'How')

The standard Euclidean inner product is:

$$
\langle x,y\rangle=x^TIy=x^Ty
$$

Notice the identity matrix $I$ hidden in the middle. The insight is that we can replace this identity matrix with any **symmetric, positive definite matrix** $A$ to create a new, valid inner product.

This generalized inner product is defined as:

$$
\langle x,y \rangle A:=x^TAy
$$

For this to be a valid inner product, the matrix $A$ _must_ be symmetric and positive definite. Let's see why:
1. **Symmetry**: We need $⟨x,y⟩_A=⟨y,x⟩_A$. Let's check: $⟨y,x⟩_A=y^TAx$. Since the result is a scalar, we can transpose it without changing its value: $(y^TAx)^T=x^TA^Ty$. For this to equal the original $x^TAy$, we must have $A=A^T$. So, **A must be symmetric**.
2. **Linearity**: This property holds due to the distributive property of matrix multiplication. $⟨λx+z,y⟩_A=(λx+z)^TAy=(λx^T+z^T)Ay=λx^TAy+z^TAy=λ⟨x,y⟩_A+⟨z,y⟩_A$.
3. **Positive Definiteness**: We need $⟨x,x⟩_A>0$ for all $x \ne 0$. By definition, $⟨x,x⟩_A=x^TAx$. The condition that this quantity must be positive for any non-zero vector x is precisely the definition of a **positive definite matrix**.

So, any symmetric, positive definite matrix **A** gives rise to a valid inner product. This new inner product, in turn, defines a new norm and distance metric:
- **Induced Norm (Mahalanobis Norm)**: $||x||_{A}=\sqrt{ \langle x,x \rangle _{A} }=\sqrt{ x^TAx }$.
- **Induced Distance (Mahalanobis Distance)**: $d_{A}(x,y)=||x-y||_{A}=\sqrt{ (x-y)^TA(x-y) }$.
##### Connections
* Forward Links: 
* Backward Links: [Matrix](/notes/matrix/), [Matrices as Linear Transformation](/notes/matrices-as-linear-transformation/), [Inner Products](/notes/inner-products/)
