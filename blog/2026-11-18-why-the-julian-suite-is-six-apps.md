---
slug: why-the-julian-suite-is-six-apps
title: "Why the Julian Suite Is Six Apps, Not One"
authors: [tyler]
tags: [julian-suite, product, architecture, privacy]
---

The Julian Suite covers notes, meetings, chat, storage, two-factor
authentication, and passwords. The obvious move would be one big app with
six tabs and a single account. I'm deliberately not building it that way.

Each Julian service is standalone: its own product, its own data, and
encryption that happens on your device before anything leaves it. You can
use Julian Vault without ever touching Julian Notes. That decision shapes
almost everything about how the suite is designed and built.

<!-- truncate -->

Here is the reasoning behind it.

## Privacy is easier to keep when there is less to protect

A bundled suite tends to grow a shared core: one account, one profile, one
place where everything about a person comes together. That's convenient,
and it also makes a single target. If the suite's whole point is keeping
private work data private, piling all of it in one spot is working against
the goal.

Keeping the services separate limits the blast radius. A problem in one
product stays in that product, and nobody's notes are exposed because of a
bug in a chat feature.

## Trust is earned one product at a time

Asking someone to move their passwords, files, and conversations to a new
vendor all at once is a big ask. Asking them to try one encrypted notes app
is a small one.

Standalone products let people adopt the suite at their own pace. Someone
might start with Julian Auth for two-factor codes, decide they trust how it
handles their data, and only then look at Julian Vault. Each product has to
earn its place on its own, and I think that's a healthy pressure.

## Boundaries keep a solo builder honest

I learned on Live From Wisco and SocialFlare that the biggest risk in a
growing system is accidental coupling: one shortcut that lets one feature
reach into another's data, and then a dozen more that follow it. With six
products and one engineer, that drift would be fatal.

Treating each service as its own product makes the boundaries explicit.
Shared code lives in libraries with clear interfaces, not in a common
database. When I change how Julian Meetings handles a call, I don't have to
wonder whether I've broken Julian Storage.

## Independent services ship independently

Separate products also mean separate release cycles. Julian Notes can get a
better search experience without waiting for Julian Chat to be ready. If a
service needs a security fix, it can go out on its own, without bundling it
into an unrelated release.

That matters more than it sounds. Release trains slow down the product that
is ready and pressure the product that isn't. Independence lets each one
move at the speed it actually needs.

## The tradeoffs are real

This approach isn't free. Six products means six onboarding flows, six sets
of store listings, and more repeated work than a monolith would need. Some
conveniences that a bundled app gets for free, like a single sign-in that
unlocks everything, have to be designed carefully or skipped on purpose.

I accept those costs because they buy something more important: every
product stays small enough to reason about, audit, and trust.

## The takeaway

For privacy-first software, architecture is part of the product's promise.
Building the Julian Suite as six standalone, on-device-encrypted services is
how I make that promise structural instead of just a line in the marketing.
