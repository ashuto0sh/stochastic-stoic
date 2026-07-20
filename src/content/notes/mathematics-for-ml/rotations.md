---
title: "Rotations"
tags:
  - "type/definition"
  - "analytical-geometry"
  - "rotations"
---

##### Formal
###### (Rotation)
A *rotation* is a linear mapping (more specifically, an automorphism of rotation a Euclidean vector space) that rotates a plane by an angle θ about the origin, i.e., the origin is a fixed point.
###### (Rotations in $\mathbb{R}^2$)
Deriving from trigonometry, the standard basis in $\mathbb{R}^2$ get transformed as follows when rotated by angle $\theta$

$$
\Phi(\mathbf{e}_{1}) = \begin{bmatrix}
\cos \theta \\
\sin \theta
\end{bmatrix}, \;\;\;\Phi(\mathbf{e}_{2})=\begin{bmatrix}
- \sin \theta \\
\cos \theta
\end{bmatrix} \tag{1}
$$

###### (Givens Rotation)
For formal definition, refer MML (Definition 3.11).

A Givens rotation is a "minimalist" rotation. While a general rotation matrix can reorient a vector in any complex way, a Givens rotation performs the simplest possible rotation: it rotates a vector within a single **2D plane**, leaving everything outside of that plane completely untouched.

**Analogy: Tuning a Guitar String** Imagine you have a vector in a high-dimensional space. Most of its components (coordinates) are perfectly fine, but you want to adjust just two of them. A Givens rotation is like a fine-tuning knob on a guitar. You pick one string (one dimension) and a second string (a second dimension), and you adjust them relative to each other. All the other strings remain exactly as they were.

The problem this solves is **precision targeting**. We often don't want to perform a big, complex rotation on our data. Instead, we want to make a specific, targeted change. The most common use is to **introduce a zero** at a specific coordinate of a vector. A Givens rotation is the perfect tool to rotate a vector within a plane until one of its components in that plane becomes zero, without causing any collateral damage to the other dimensions.
###### (Properties of Rotations)
Rotations exhibit a number of useful properties, which can be derived by considering them as orthogonal matrices ([Angles and Orthogonality](/notes/mathematics-for-ml/angles-and-orthogonality/#orthogonal-matrix)): 
* Rotations preserve distances, i.e., $∥x−y∥ = ∥R_{\theta}(x)−R_{\theta}(y)∥$. In other words, rotations leave the distance between any two points unchanged after the transformation.
* Rotations preserve angles, i.e., the angle between $R_{\theta}x$ and $R_{\theta}y$ equals the angle between x and y. 
* Rotations in three (or more) dimensions are generally not commutative. Therefore, the order in which rotations are applied is important, even if they rotate about the same point. Only in two dimensions vector rotations are commutative, such that $R(ϕ)R(θ) = R(θ)R(ϕ)$ for all $ϕ, θ ∈ [0, 2π)$. They form an [Groups](/notes/mathematics-for-ml/groups/#abelian-group) (with multiplication) only if they rotate about the same point (e.g., the origin).
##### Intuition
At its heart, a **rotation** is a transformation that pivots a vector or a set of data points around a fixed point (usually the origin) without changing their intrinsic geometry. Think of it as spinning a record on a turntable. Every point on the record moves, but its distance from the center and its distance from every other point on the record remain exactly the same.

A rotation matrix is the operator that performs this action. Why is this so important? Because we often want to change our _perspective_ on the data without distorting the data itself. A rotation allows us to look at the data from a different angle.

For example, maybe a dataset is easier to classify if we rotate it so that the main clusters of points are aligned with the x and y axes. A rotation allows us to do this "re-orientation" while preserving all the crucial geometric relationships—distances, angles, and lengths—within the data. It's a **rigid transformation**, meaning it doesn't stretch, shear, or shrink the space.
##### ML Applications
Rotations are a fundamental tool for manipulating and interpreting data in machine learning.
- **Data Augmentation**: In computer vision, if you are training a model to recognize cats, you don't want it to fail just because a cat is slightly tilted. To make the model more robust, you can **augment** your training data by creating slightly rotated copies of your original images. This teaches the model that a cat is still a cat, regardless of its orientation. The transformation applied to the image pixels is a rotation.
- **Principal Component Analysis (PCA)**: As we've discussed, PCA is fundamentally a **rotation** of the data. It finds a new coordinate system (the principal components) and rotates the data to align with these new axes. The transformation matrix in PCA is an orthogonal matrix, representing the specific rotation that maximizes the variance along the new axes.
- **Computer Graphics and Robotics**: While not strictly ML, these related fields rely heavily on rotations. A robot arm's movement is a sequence of rotations and translations. 3D graphics engines are constantly performing rotations to change the camera's viewpoint or move objects in a scene. The underlying mathematics is identical.

In essence, rotation matrices provide the precise, computationally efficient tool to change the coordinate system or orientation of our data in a way that preserves the data's fundamental geometric truth.
##### Connections
* Forward Links:
* Backward Links: [Angles and Orthogonality](/notes/mathematics-for-ml/angles-and-orthogonality/), [Matrices as Linear Transformation](/notes/mathematics-for-ml/matrices-as-linear-transformation/)
