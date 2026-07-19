---
title: "Groups"
tags:
  - "type/definition"
  - "group"
  - "linear-algebra"
---

##### Formal
###### (Group)
Consider a set $\mathcal{G}$ and an operation $\otimes:\mathcal{G}\times\mathcal{G}\rightarrow\mathcal{G}$ defined on $\mathcal{G}$. Then $G \coloneqq (\mathcal{G}, \otimes)$ is called a *group* if the following hold:
1. *Closure* of $\mathcal{G}$ under $\otimes$: $\forall x,y \in \mathcal{G} \;:x\otimes y \in \mathcal{G}$
2. *Associativity*: $\forall x,y,z \in \mathcal{G}\;:\;(x\otimes y)\otimes z=x\otimes(y\otimes z)$
3. *Neutral Element:* $\exists e\in \mathcal{G}\;\forall x \in \mathcal{G}:x\otimes e=x$ and $e\otimes x=x$
4. *Inverse Element:*$\forall x\in \mathcal{G}\;\exists y \in \mathcal{G}: x\otimes y=y\otimes x=e$, where $e$ is the neutral element.
###### (Abelian Group)
Additionally, if $\forall x,y\in \mathcal{G}:x\otimes y=y\otimes x$ then $G=(\mathcal{G}, \otimes)$ is called an Abelian Group. (commutative).

**(Example) Square Matrices**: For the set of $n\times n$-matrices with matrix multiplication defined, i.e., $(\mathbb{R}^{n\times n}, .)$:
- Closure and associativity follow directly from the definition of matrix multiplication.
- $\boldsymbol{I}_{n}$ is the neutral element w.r.t. matrix multiplication.
- If the inverse exists ($\boldsymbol{A}$ is regular), then $\boldsymbol{A}^{-1}$ is the inverse element of $\boldsymbol{A} \in \mathbb{R}^{n\times n}$. And only in this case is $(\mathbb{R}^{n\times n}, .)$ is a group, called the *general linear group*.
###### (General Linear Group).
The set of regular (invertible) matrices $\boldsymbol{A} \in \mathbb{R}^{n×n}$ is a group with respect to matrix multiplication as defined in (2.13) and is called general linear group $GL(n, \mathbb{R})$. However, since matrix multiplication is not commutative, the group is not Abelian.
##### Intuition
At its heart, a **Group** is a formal way of capturing our intuition about **symmetry and transformation**. Think about operations you already know, like addition of numbers or rotation of an object. A group is a set of elements (like numbers, or rotations) and an operation (like addition, or applying one rotation after another) that behaves in a predictable, well-structured way.
Why does this matter? It provides a blueprint for systems that have three key properties:
1. **You can always "undo" an action.** If you add 5, you can always subtract 5 to get back to where you started. If you rotate an object 90 degrees clockwise, you can rotate it 90 degrees counter-clockwise. This is the concept of an **inverse**.
2. **There's a "do nothing" action.** Adding 0 doesn't change a number. Rotating by 0 degrees doesn't change an object's orientation. This is the **identity** element.
3. **The order of grouping operations doesn't matter.** If you're adding three numbers, `(2 + 3) + 4` is the same as `2 + (3 + 4)`. This is **associativity**.
By abstracting these properties, we can prove things about _all_ systems that follow these rules, whether we're talking about integers, rotations in 3D space (crucial for robotics and computer graphics), or the permutations of a dataset. It's a powerful tool for generalization.
##### ML Applications
- **Geometric Transformations**: Many ML algorithms are about finding the right transformation of data. Rotations, reflections, and translations are all group operations. Understanding their properties is key to fields like computer vision and robotics. For example, the set of all 3D rotations forms a special group called SO(3), the special orthogonal group.
- **Symmetry in Data**: If a learning problem has inherent symmetries (e.g., a cat image is still a cat image if you flip it horizontally), this can be formalized using group theory. This leads to techniques in deep learning like **data augmentation** and the architecture of **Convolutional Neural Networks (CNNs)**, which are designed to be invariant to translation.
- **Optimization Landscapes**: The algorithms used to train models, like gradient descent, are navigating a high-dimensional space. The mathematical properties of this space, inherited from its group and vector space structure, determine whether optimization is feasible.
#### Connections
* Forward Links: [Vector Spaces](/notes/vector-spaces/)
* Backward Links: [Matrix](/notes/matrix/), [Closure](/notes/closure/)
