---
title: "On the Dichotomy of Control"
description: "Epictetus's first distinction, restated for people who think in policies and distributions."
pubDate: 2026-07-19
category: philosophy
tags: [stoicism, decision-making]
---

Some things are within our power, while others are not. Within our power are
opinion, motivation, desire, aversion — in a word, whatever is of our own
doing. Epictetus opens the *Enchiridion* with this single division, and nearly
everything else in Stoic practice follows from taking it seriously.

The division sounds banal until you notice how much of daily frustration is a
category error: treating outcomes as if they were choices, and choices as if
they were outcomes. The archer, in the classic Stoic image, controls the draw,
the aim, and the release — never the flight of the arrow after it leaves the
string.

## The probabilistic reading

There is a modern restatement that a working engineer might prefer: you control
the *policy*, not the *sample*. Your decisions fix a distribution over
outcomes; the world draws from it. Judging a decision by a single draw is how
people convince themselves that a good process failed or a bad process worked.

> You may fetter my leg, but my will not even Zeus himself can overpower.
>
> — Epictetus, *Discourses* I.1

This is also why regret is such an unreliable teacher. It scores the sample,
not the policy — and the sample is exactly the part that was never yours.

### A small simulation

The claim is easy to make concrete. Run the same decision policy through many
draws and the noise washes out; run it once and the noise *is* the result.

```python
import random

def one_life(policy_quality: float, trials: int = 1) -> float:
    """Average outcome of `trials` draws from a fixed policy."""
    return sum(
        policy_quality + random.gauss(0, 1) for _ in range(trials)
    ) / trials

# One draw tells you almost nothing about the policy...
print(f"single draw:   {one_life(0.1):+.2f}")

# ...ten thousand draws tell you almost everything.
print(f"many draws:    {one_life(0.1, trials=10_000):+.2f}")
```

The practical upshot fits in a list:

- Grade yourself on inputs — the draw, the aim, the release.
- Treat outcomes as data about the distribution, not as verdicts on you.
- When an outcome stings, ask which part of it was ever `within_your_power`.

---

None of this argues for passivity. The Stoics were consuls, merchants, and
soldiers; the dichotomy of control is what let them act decisively *because*
they had already released the part of the result they could not hold. That is
the whole trick, and it takes a lifetime to learn.
