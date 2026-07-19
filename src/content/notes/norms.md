---
title: "Norms"
tags:
  - "type/definition"
  - "norm"
  - "analytical-geometry"
---

##### Formal
###### (Norm)
A *norm* on a vector space $V$ is a function

$$
\begin{align}
||\;.|| : V \rightarrow \mathbb{R}, \tag{1} \\
{x} \rightarrow ||x||, \tag{2}
\end{align}
$$

which assigns each vector $x$ to its *length* $||x|| \in \mathbb{R}$, such that $\forall \lambda \in \mathbb{R}$ and $x,y \in V$ the following hold:
- *Absolutely Homogeneous:* $||\lambda x||= |\lambda|\;||x||$
- *Triangle Inequality:* $||x+y|| \le ||x||+||y||$
- *Positive Definite:* $||x|| \ge 0$ and $||x|| = 0 \iff x = \mathbf{0}$
###### (Manhattan Norm)
The *Manhattan Norm* on $\mathbb{R}^n$ id defined for $x\in \mathbb{R}^n$ as

$$
\begin{align}
||x||_{1} = \sum_{i=1}^n|x_{i}|, \tag{3}
\end{align}
$$

where $|\;.|$ is the absolute value. Manhattan Norm is also called $\ell_{1}$ *norm*.
###### (Euclidean Norm)
The *Euclidean Norm* on $\mathbb{R}^n$ id defined for $x\in \mathbb{R}^n$ as

$$
\begin{align}
||x||_{2} \coloneqq \sqrt{\sum_{i=1}^nx_{i}^2}=\sqrt{x^Tx} \tag{4} \\
\end{align}
$$

and computes the *Euclidean distance* of $x$ from the origin. This is also called $\ell_{2}$ *norm*. This is the <u>default</u>.
##### Intuition
Imagine you have a data structure, like an array or a list, that represents something—say, a user's engagement score across different features on a website. This is a vector. Now, you want to answer a simple but crucial question: how "big" is this vector? How significant is this user's overall engagement? A **norm** is precisely that: a function that takes a vector and gives you a single number representing its **length** or **magnitude**.

It solves the problem of quantifying the abstract "length" of a vector in any number of dimensions. Once we can measure the length of vectors, we can start to measure the **distance** between them. This is the foundation for determining the similarity between data points, which is a cornerstone of many machine learning algorithms.
##### ML Applications
In the machine learning landscape, norms are not just an abstract concept; they are fundamental to how many algorithms work and are optimized. Here's where you'll see them in action:
- **Regularization**: In models like Linear Regression or Logistic Regression, we often add a penalty to the loss function to prevent overfitting. This penalty is typically the $\ell_{1}$ norm (Lasso regularization) or the $\ell_2$ norm (Ridge regularization) of the model's weight vector. A large norm for the weight vector often indicates a more complex model that might be overfitting. By penalizing this norm, we encourage the model to find simpler solutions that generalize better.
- **Loss Functions**: Many loss functions are defined using norms. The Mean Squared Error (MSE), a common loss function for regression, is essentially the squared $\ell_{2}$ norm of the difference between the predicted and actual values. The Mean Absolute Error (MAE) is the $\ell_{1}$ norm of this difference.
- **Distance and Similarity**: Algorithms like k-Nearest Neighbors (k-NN) rely on measuring the distance between data points to classify a new point. This distance is calculated using a norm, most commonly the Euclidean norm ($\ell_2$ distance).

In essence, norms provide the mathematical toolkit to measure size, distance, and error, which are critical for optimizing and evaluating machine learning models.
##### Connections
* Forward Links:[Inner Products](/notes/inner-products/), [Lengths and Distances](/notes/lengths-and-distances/)
* Backward Links: [Vectors](/notes/vectors/)
