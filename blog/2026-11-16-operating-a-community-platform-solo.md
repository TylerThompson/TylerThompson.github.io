---
slug: operating-a-community-platform-solo
title: "Lessons From Running Live From Wisco Solo"
authors: [tyler]
tags: [live-from-wisco, product, engineering, operations]
---

Building a product alone is one thing. Operating it alone, every day, for a
community that depends on it, is something else entirely.

Live From Wisco grew to more than 28,000 users across web, iOS, and Android,
supporting local events, media, and small businesses. I built and ran it as a
team of one, which forced me to treat every decision as an operational
decision: if something breaks, I am the one who gets paged.

<!-- truncate -->

Here are the practices that made that sustainable.

## Shrink the surface area before you scale it

Three platforms can quickly become three products. The biggest lever I had was
keeping as much shared as possible: one API, one data model, one set of
business rules, and thin clients on top. Every feature started with the
question, "Can this live on the server?" If the answer was yes, it shipped to
every platform at once and only had to be fixed in one place.

## Make boring infrastructure the default

When you are solo, novelty is a cost you pay at 2 a.m. I leaned on managed
cloud services, well-understood databases, and predictable deployment
pipelines. The goal was not to build the most interesting system; it was to
build the one I could reason about quickly when I was tired, traveling, or
context-switching from a day job.

## Observability is your teammate

Without coworkers to notice something looks off, the system has to tell you.
Structured logs, error tracking, uptime checks, and a small number of
meaningful alerts did the job a teammate would otherwise do. The rule I
followed: every alert must be actionable, or it gets deleted. Alert fatigue is
dangerous on a team; on a team of one, it is fatal.

## Test the paths that hurt the most

I never had time for exhaustive test coverage, so I prioritized ruthlessly.
Authentication, payments, data writes, and anything a local business relied
on for its event or listing got automated tests. Cosmetic screens did not.
Pragmatic testing is not about a coverage number; it is about protecting the
moments where a bug costs a user their trust.

## Listen to the community, but keep the roadmap

A community platform generates a constant stream of feedback. Much of it is
gold, and some of it pulls in opposite directions. I learned to look for
patterns rather than individual requests, to say "not yet" often, and to
protect time for maintenance work that no user would ever ask for directly but
every user benefits from.

## Protect the operator

The most fragile part of a solo product is the person running it. Automating
releases, writing down runbooks for recurring tasks, and designing features
that do not require manual moderation or hand-holding were all investments in
my own capacity. A product that burns out its builder does not stay online.

## The takeaway

Running Live From Wisco taught me that enterprise discipline and founder speed
are not opposites. Clear boundaries, shared foundations, useful observability,
and focused testing are exactly what let a single engineer move fast without
breaking the community that depends on the product.
