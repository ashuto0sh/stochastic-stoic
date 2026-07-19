---
title: "Gambler's Ruin and the Mathematics of Runway"
description: "Why a positive edge is not enough: the classic ruin probabilities, and what they say about bankrolls, startups, and burnout."
pubDate: 2026-07-12
category: mathematics
tags: [probability, stochastic-processes, risk]
math: true
---

The gambler's ruin problem is two centuries old and still the best short
argument against confusing *expected value* with *survival*. The setup: you
start with a bankroll of $i$ units and bet one unit at a time, winning with
probability $p$ and losing with probability $q = 1 - p$. You stop when you
reach a target of $N$ units — or when you hit zero and are ruined.

## The ruin probabilities

Let $P_i$ be the probability of reaching $N$ before ruin, starting from $i$.
Conditioning on the first bet gives a linear recurrence:

$$
P_i = p \, P_{i+1} + q \, P_{i-1}, \qquad P_0 = 0, \quad P_N = 1.
$$

Solving it (the characteristic root is $r = q/p$) yields the closed form:

$$
P_i =
\begin{cases}
\dfrac{1 - (q/p)^i}{1 - (q/p)^N} & \text{if } p \neq q, \\[2ex]
\dfrac{i}{N} & \text{if } p = q = \tfrac{1}{2}.
\end{cases}
$$

Two things in this formula deserve to be stared at.

### The fair game is not safe

Set $p = 1/2$. Your chance of doubling a bankroll of $i = 10$ to $N = 20$ is
exactly $10/20 = 1/2$ — fair enough. But let the target grow, $N \to \infty$,
and $P_i = i/N \to 0$. A fair game played indefinitely against a much richer
opponent ends in ruin with probability one. The casino does not need an edge
to beat you; it only needs more chips and more patience.

### A small edge compounds — in both directions

Now set $p = 0.49$, barely unfavorable. With $i = 10$ and $N = 20$,

$$
P_{10} = \frac{1 - (0.51/0.49)^{10}}{1 - (0.51/0.49)^{20}} \approx 0.40,
$$

and the miss compounds brutally as the horizon stretches: the ruin
probability from a finite bankroll against an infinite opponent is
$(p/q)^i$ when $p < q$... which tends to certainty fast. Symmetrically, a
*favorable* game ($p > 1/2$) leaves ruin probability $\left(q/p\right)^i$ —
exponentially small in the bankroll $i$, but never zero. Edge does not
protect you; *capitalization* protects you.

## Runway is a ruin problem

Replace "bankroll" with months of runway, "bet" with a month of operations,
and the theorem reads differently: a venture with positive expected value and
thin reserves is still overwhelmingly likely to die if variance is high and
the horizon is long. The same holds for personal energy — a sustainable pace
with reserves beats a brilliant sprint at $i = 1$.

The Stoic angle, because this blog owes you one: Seneca's *praemeditatio
malorum* is bankroll management for the psyche. You rehearse losses in
advance not to be gloomy, but so that no single draw — however bad — takes
your $i$ to zero.
