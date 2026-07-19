---
title: "Vector Spaces"
tags:
  - "type/definition"
  - "vector-spaces"
  - "linear-algebra"
---

##### Formal
###### (Vector Spaces)
A real-valued *vector space* $V = (\mathcal{V}, +, .)$ is a set $\mathcal{V}$ with two operations

$$
\begin{align}
+:\mathcal{V}\times\mathcal{V}\rightarrow\mathcal{V} \tag{1} \\
.:\mathbb{R}\times\mathcal{V}\rightarrow\mathcal{V} \tag{2}
\end{align}
$$

where
1. $(\mathcal{V}, +)$ is an Abelian group.
2. Distributivity:
	1. $\forall\lambda \in \mathbb{R}, \boldsymbol{x}, \boldsymbol{y} \in \mathcal{V}: \lambda \;.(\boldsymbol{x} + \boldsymbol{y}) = \lambda\;.\boldsymbol{x} + \lambda\;.\boldsymbol{y}$ 
	2. $\forall\lambda,\psi \in \mathbb{R}, \boldsymbol{x} \in \mathcal{V}: (\lambda+\psi) \;.\boldsymbol{x} = \lambda\;.\boldsymbol{x} + \psi\;.\boldsymbol{x}$
3. Associativity (outer operation $.$): $\forall\lambda,\psi\in \mathbb{R}, \boldsymbol{x}\in \mathcal{V}:\lambda\;.(\psi.\boldsymbol{x})=(\lambda\psi).\boldsymbol{x}$
4. Neutral element w.r.t. the outer operation ($.$): $\forall\boldsymbol{x}\in\mathcal{V}:1.\boldsymbol{x}=\boldsymbol{x}$
The elements $\boldsymbol{x}\in \mathcal{V}$ are called *vectors*. The neutral element of $(\mathcal{V}, +)$ is the $\boldsymbol{0} =[0,\dots,0]^T$, and the inner operation $+$ is called *vector addition*. The elements $\lambda\in \mathbb{R}$ are called *scalars* and the outer operation $.$ is a *multiplication by scalars*.

###### (Vector Subspaces)
Let $V=(\mathcal{V}, +, .)$ be a vector space and $\mathcal{U} \subseteq \mathcal{V}, \mathcal{U} \neq\emptyset$. Then $U=(\mathcal{U}, +, .)$ is called a vector subspace of $V$ if $U$ is a vector space with vector space operations $+$ and $.$ restricted to $\mathcal{U}\times\mathcal{U}$ and $\mathbb{R}\times\mathcal{U}$. We write $U \subseteq V$ to denote a subspace $U$ of $V$.
Note that the **zero vector 0 must be in the subspace $U$**.
##### Intuition
Think of a **Vector Space** as a well-defined "playground" for your data. It's a universe where two fundamental actions are guaranteed to work in a sensible, predictable way:
1. **Adding things together**: If you have two data points (vectors), you can add them to get a third valid data point in the same universe.
2. **Scaling things**: You can take any data point and stretch or shrink it by any real number, and the result is still a valid data point in that universe.

Why is this formal definition so important? As a software engineer, you can think of a Vector Space as an **API or an interface**. It's a contract that guarantees a certain set of behaviors. If you can prove your data lives in a vector space, you immediately know that a vast library of powerful tools from linear algebra (like linear mappings, basis changes, and decompositions) can be applied to it.

Essentially, it's the formal abstraction that allows us to treat a list of house features (size, number of bedrooms, location), the pixels of an image, or even the weights of a neural network as "vectors" and manipulate them using the same consistent set of rules. It’s the framework that lets algebra operate on data.
##### ML Applications
The concept of a vector space is not just abstract; it is the fundamental data structure for almost all of machine learning.

- **Feature Spaces**: This is the most direct application. When we represent a data point, we create a **feature vector**. For example, a house might be represented by the vector $\boldsymbol{x} = [\text{area}, \text{bedrooms}, \text{age}]^T \in \mathbb{R}^3$. The set of all possible such vectors forms a vector space. Our entire dataset is a collection of points in this space. Machine learning models then operate on this space to find patterns.
- **Model Parameters as Vectors**: The weights and biases of a neural network or a linear regression model can be collected into a single, massive vector $θ$. The process of training (optimization) is essentially a search for the optimal vector $\theta$ in this parameter space. Gradient descent is an algorithm that navigates this vector space by taking steps in the direction opposite to the gradient.
- **Function Spaces**: This is a more advanced but powerful idea. In some areas of ML, like Gaussian Processes or models using Kernel Methods (like the Support Vector Machine), the "vectors" are actually _functions_. Because you can define rules for adding two functions together $((f+g)(x)=f(x)+g(x))$ and scaling them $((λf)(x)=λf(x))$, the set of all possible functions (with certain properties) forms an infinite-dimensional vector space. This allows us to use the tools of linear algebra to reason about and work with functions.
- **Embeddings**: In Natural Language Processing (NLP) and recommendation systems, we represent items like words, sentences, or products as vectors in a high-dimensional "embedding space" (e.g., Word2Vec, GloVe). The goal is to learn a vector space where geometric relationships between vectors correspond to semantic similarities. For example, the famous result vec("King")−vec("Man")+vec("Woman")≈vec("Queen") is an operation that only makes sense because these word representations live in a meaningful vector space.

In short, vector spaces provide the universal API for representing and manipulating data, parameters, and even functions in machine learning.

**The Four Fundamental Subspaces**: Every matrix $A∈\mathbb{R}^{m×n}$ defines four fundamental subspaces that tell a complete story about the linear mapping it represents:
1. **Column Space, C(A)**: The subspace spanned by the columns of A. It represents the entire set of possible outputs of the transformation Ax.
2. **Null Space, N(A)**: The subspace of all input vectors x that get mapped to the zero vector (Ax=0). This tells you about the "ambiguities" or "degeneracies" in the mapping. We saw this with the Minus-1 trick.
3. **Row Space, C(AT)**: The subspace spanned by the rows of A. It represents the domain of the transformation, orthogonal to the null space.
4. **Left Null Space, N(AT)**: The null space of the transpose
##### Connections
* Forward Links: [Linear Independence](/notes/linear-independence/), [Basis](/notes/basis/)
* Backward Links: [Groups](/notes/groups/), [Vectors](/notes/vectors/)
