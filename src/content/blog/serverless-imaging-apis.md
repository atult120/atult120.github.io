---
title: How a serverless imaging API stays boring in production
description: Draft outline for a note on the Wilco Source ultrasound platform. Not a finished essay.
date: 2026-11-19
draft: true
---

This is a draft outline, not a finished post.

## What this note will cover

- Why the upload path is Lambda and API Gateway in front of S3 and PostgreSQL, rather than a long-lived upload server.
- Where AES-256 encryption and HIPAA-aligned handling sit on that path.
- How CloudWatch, X-Ray, and Winston changed mean-time-to-detect.
- What 90%+ Jest and Supertest coverage changed about a weekly release cycle.

## Still to write

The trade-offs, the failure cases, and any diagram that is not already on the ultrasound case study. Numbers stay the ones on the resume: 40% faster average API response, 10K+ daily uploads with zero data-loss incidents, 50% faster detection.
