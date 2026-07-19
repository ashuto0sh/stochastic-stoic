---
title: "Parse, Don't Validate — a TypeScript Field Guide"
description: "How to make illegal states unrepresentable at the boundary, with branded types, discriminated unions, and Zod."
pubDate: 2026-07-05
category: software-engineering
tags: [typescript, types, zod]
---

Alexis King's essay "Parse, Don't Validate" is usually filed under Haskell,
but the discipline ports cleanly to TypeScript: **check your data once, at
the boundary, and let the type system remember the check happened.** A
validator returns a boolean and throws away what it learned; a parser returns
a *narrower type* that makes the re-check unnecessary — and the illegal state
unrepresentable.

## The validator trap

Here is the shape of the problem. This function "works," and every caller
pays for it forever:

```ts
function isValidEmail(s: string): boolean {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s);
}

function sendWelcome(email: string) {
  // Is this validated? Who knows! Better check again...
  if (!isValidEmail(email)) throw new Error("invalid email");
  // ...
}
```

The type of `email` is `string` before the check and `string` after it. The
knowledge evaporates, so every layer re-validates defensively — or worse,
trusts blindly.

## Branded types: making the check stick

TypeScript has no nominal types, but an intersection with a phantom property
gets you there:

```ts
type Email = string & { readonly __brand: "Email" };

function parseEmail(s: string): Email {
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s)) {
    throw new Error(`not an email: ${s}`);
  }
  return s as Email;
}

// The only way to obtain an Email is through the parser,
// so this signature is a *proof requirement*, not a hint:
function sendWelcome(email: Email) {
  /* no re-check needed, ever */
}
```

Now `sendWelcome("bob")` is a compile error. The `as Email` cast appears in
exactly one place — the parser — which is the whole point: one auditable
boundary instead of a hundred scattered `if`s.

## Discriminated unions: parsing structure, not just strings

The same move works on shapes. Don't model a payment as one bag of optional
fields; parse it into a union whose variants are internally consistent:

```ts
type Payment =
  | { kind: "card"; last4: string; expiry: string }
  | { kind: "upi"; vpa: string }
  | { kind: "netbanking"; bankCode: string };

function settle(p: Payment) {
  switch (p.kind) {
    case "card":
      return chargeCard(p.last4, p.expiry); // p.vpa doesn't exist here
    case "upi":
      return collectUpi(p.vpa);
    case "netbanking":
      return redirect(p.bankCode);
  }
}
```

The `switch` is exhaustive: add a fourth variant and the compiler walks you
to every site that must handle it.

## Zod: the parser you don't have to write

At real boundaries — HTTP bodies, env vars, frontmatter — hand-rolled parsers
get tedious. Zod is the standard answer, and it follows the doctrine exactly:
`parse` returns the narrowed type or throws.

```ts
import { z } from "zod";

const Signup = z.object({
  email: z.string().email().brand<"Email">(),
  age: z.coerce.number().int().min(13),
  plan: z.enum(["free", "pro"]).default("free"),
});

type Signup = z.infer<typeof Signup>;

export function handleSignup(body: unknown): Signup {
  return Signup.parse(body); // one boundary, typed forever after
}
```

Note the input type: `unknown`, not `any`. `unknown` is honest — it forces
the parse — while `any` is a promise you can't keep.

This blog eats its own cooking, incidentally: every post's frontmatter is
parsed by a Zod schema at build time, so a typo'd category is a build
failure, not a silently broken archive page.

## The one-sentence version

Push every check to the edge, return evidence instead of booleans, and make
the middle of your program a place where bad data *cannot exist* — then
delete the defensive checks the types just made unnecessary.
