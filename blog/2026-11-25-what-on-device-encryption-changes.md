---
slug: what-on-device-encryption-changes
title: "What On-Device Encryption Changes About Building a Product"
authors: [tyler]
tags: [julian-suite, privacy, engineering, product]
---

Every Julian service encrypts data on your device before it leaves. It's
easy to say that in one line on a product page. Building around it is a
different story, because it removes a tool most software quietly depends
on: the server being able to read your data.

Once the server only ever holds your content as ciphertext, a lot of ordinary
features stop being ordinary. Search, recovery, support, and even debugging
all have to be rethought. Here's how that constraint shapes the way I build
the Julian Suite.

<!-- truncate -->

## Features move to the client

In a typical app, the server does the heavy lifting. It indexes your notes,
runs your searches, generates previews, and figures out what changed. When
the server can't read anything, that work has to happen where the data is
readable: on your device.

Julian Notes is a good example. Instant full-text search is a core part of
the product, and it can't be a server-side query against plaintext. The
search experience has to be built on the client, against data the client
has already decrypted. That pushes real engineering effort into the apps
themselves, and it means performance on a modest phone matters as much as
performance in the cloud.

## The server gets simpler, and dumber on purpose

The flip side is that the backend becomes refreshingly boring. Its job is
to authenticate, store, sync, and relay opaque blobs. It doesn't need to
understand a note, a file, or a password entry.

I treat that as a feature, not a limitation. A server that knows less is a
server that can leak less, and it's easier to reason about when I'm the one
who has to keep it running. Every time I'm tempted to give the backend a
peek at the content "just for this one feature," that's the signal to find
another way.

## Recovery is a product decision, not a support ticket

The hardest conversation in end-to-end encrypted software is about lost
keys. If I can't read your data, I also can't hand it back to you after
you've lost the only thing that unlocks it.

That means recovery has to be designed up front, as part of onboarding,
not bolted on later. People need to understand what protects their data,
what their options are if they lose a device, and what nobody, including
me, can do for them. Being honest about that tradeoff is part of earning
trust. Pretending it doesn't exist would be worse than the tradeoff itself.

## Support and debugging work without seeing the data

On Live From Wisco, when something went wrong, I could look at the
records involved and usually see the problem quickly. With the Julian
Suite, that's not an option, and it shouldn't be.

So observability has to come from the edges: structured logs that describe
what happened without containing what was written, error reports that
carry context but not content, and client-side diagnostics a user can
choose to share. Writing logs this way takes discipline. The rule I hold
myself to is simple: if a log line would be uncomfortable for the user to
read, it doesn't get written.

## Testing has to cover the boundary

Encryption bugs are rarely loud. A subtle mismatch between how one client
writes data and how another reads it can look fine for weeks and then
lock someone out of their own notes.

The tests I care most about sit right on that boundary: data encrypted on
one platform must decrypt on every other, older clients must keep working
with newer data formats, and failed decryption must fail clearly instead
of silently corrupting anything. It's the same pragmatic testing approach
I've always used, pointed at the place where a bug would cost someone the
most.

## The takeaway

On-device encryption isn't a feature you add at the end. It moves work to
the client, simplifies the server, turns recovery into a design problem,
and changes how you support and test the product. For the Julian Suite,
accepting those constraints from day one is what makes privacy a property
of the system rather than a promise in the copy.
