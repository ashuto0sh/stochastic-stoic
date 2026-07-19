---
title: "Transformations of Probability Densities"
tags:
  - "type/bridge"
  - "probability"
  - "vector-calculus"
created: 2026-04-11
---

##### Formal
If we have a continuous random vector $\mathbf{X} \in \mathbb{R}^n$ with a known probability density function (PDF) $p_X(\mathbf{x})$, and we pass it through an invertible, differentiable non-linear transformation $\mathbf{Y} = f(\mathbf{X})$, what is the new PDF $p_Y(\mathbf{y})$?

Because total probability mass must be conserved (it must sum to 1), stretching or compressing the space changes the density. The scaling factor for this change in volume is the determinant of the Jacobian matrix.

The PDF of the transformed variable $\mathbf{Y}$ is:

$$
p_Y(\mathbf{y}) = p_X(f^{-1}(\mathbf{y})) \cdot \left| \det \mathbf{J}_{f^{-1}}(\mathbf{y}) \right| \tag{1}
$$

Alternatively, using the Jacobian of the forward transformation $f$:

$$
p_Y(\mathbf{y}) = \frac{p_X(\mathbf{x})}{\left| \det \mathbf{J}_f(\mathbf{x}) \right|} \quad \text{where} \quad \mathbf{x} = f^{-1}(\mathbf{y}) \tag{2}
$$

###### Why the absolute value?
The determinant can be negative (indicating a reflection/inversion of the space). However, probability density must be strictly non-negative $p(\mathbf{y}) \geq 0$, so we take the absolute value of the volume scaling factor.

##### Intuition
Imagine spreading 1 kg of dough (probability mass) over a 1x1 meter square table (the sample space). The density is 1 kg/m². 

If your transformation $f(x)$ stretches the table to be 2x2 meters, the same 1 kg of dough is now spread over 4 m². The new density must drop to 0.25 kg/m². 

The Jacobian determinant $\det \mathbf{J}_f$ tells you exactly how much the "table" was stretched locally at every single point. If a region was expanded (Jacobian > 1), the probability density there must decrease. If a region was compressed (Jacobian < 1), the probability density there must spike.

##### ML Applications
- **Normalizing Flows** — A class of generative models that start with a simple distribution (like a standard Gaussian) and apply a sequence of invertible transformations $f_1, f_2, \dots, f_k$ to warp it into a highly complex data distribution (like images of faces). The loss function directly optimizes equation (1).
- **Reparameterization Trick (VAEs)** — In Variational Autoencoders, we cannot backpropagate through random sampling. We use a transformation $z = \mu + \sigma \cdot \epsilon$ (where $\epsilon \sim \mathcal{N}(0,1)$) to make sampling differentiable. Because this is a *linear* transformation of a Gaussian, the density of $z$ is simply $\mathcal{N}(\mu, \sigma^2)$ analytically — the change-of-variables formula is not needed here. The formula in this note is what enables **Normalizing Flows**, which compose a sequence of *nonlinear* invertible transformations where the Jacobian determinant must be tracked explicitly at each step.
- **Sampling from non-standard distributions** — Inverse Transform Sampling uses the CDF as the transformation function $f$ to turn uniform noise $U(0,1)$ into any target distribution.

##### Connections
* Forward Links: 
* Backward Links: [Random Variables](/notes/random-variables/), [The Jacobian Determinant](/notes/the-jacobian-determinant/), [Gradients of Vector-Valued Functions](/notes/gradients-of-vector-valued-functions/)
