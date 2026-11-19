---
title: From 800ms to 400ms on a rental platform
description: Draft outline on query tuning, Redis, and scheduled rent workflows at Bookmyflat. Not a finished essay.
date: 2026-11-17
draft: true
---

This is a draft outline, not a finished post.

## What this note will cover

- The N+1 queries, the connection pool, and the Redis cache that cut average API response from 800ms to 400ms.
- How average query time moved from 380ms to 90ms, and what "60% of slow-query incidents" meant in practice.
- The cron and Lambda schedule for reminders, invoices, and arrears, and the 25% change in on-time collection.
- What a 4-person backend team needed in sprint planning once structured logs existed.

## Still to write

One slow query, before and after, with the index that mattered. No new numbers beyond the resume.
