---
title: What changed when four PHP monoliths became services
description: Draft outline for the i-XL migration from PHP monoliths to Lambda and ECS. Not a finished essay.
date: 2026-11-18
draft: true
---

This is a draft outline, not a finished post.

## What this note will cover

- How four monoliths were split across Lambda and ECS without inventing a new product along the way.
- Where the $15K/year of EC2 capacity actually was, and why it disappeared with the move.
- How monthly releases became weekly once deployment time dropped by 40%.
- What JWT, OAuth 2.0, Helmet, and rate limiting were protecting across 4 years with zero authentication incidents.
- How contract reviews with frontend and QA sat next to Jest in CI.

## Still to write

The sequence of the migration, what stayed in PHP for a while, and what the team of juniors changed in the branching rules. The case study already has the figures.
