---
title: Rental platform performance and automation
order: 4
number: "04"
company: Bookmyflat.com Pvt Ltd
tag: BOOKMYFLAT · REAL ESTATE
description: API response halved from 800ms to 400ms on a rental platform, with automated rent reminders, invoicing, and arrears escalation.
metrics:
  - value: "800→400ms"
    label: average API response
  - value: "+25%"
    label: on-time rent collection
stack:
  - Laravel
  - Node.js
  - MySQL
  - Redis
  - AWS Lambda
  - CloudWatch
approach:
  - "Halved average API response from 800ms to 400ms for 20K+ users with N+1 fixes, connection pooling, and Redis caching."
  - "Slow-query work resolved 60% of those incidents. Average DB query time fell from 380ms to 90ms."
  - "12+ production REST APIs for rent collection, tenant onboarding, and KYC. That removed 20+ hours a month of manual back-office work and cut onboarding time by 3 days."
  - "Node.js cron workers and Lambda scheduled events send rent reminders, invoices, and arrears escalation. On-time payment collection rose by 25%."
  - "Led a 4-person backend team through sprint planning, code reviews, and production releases, and introduced structured logging with CloudWatch."
---

On the Bookmyflat rental platform, average API response time fell from 800ms to 400ms for 20K+ users. The change came from N+1 query fixes, connection pooling, and Redis caching. Sixty percent of slow-query incidents were resolved, and average DB query time fell from 380ms to 90ms.

Twelve or more production REST APIs covered rent collection, tenant onboarding, and KYC. That eliminated 20+ hours per month of manual back-office work and reduced onboarding time by 3 days.

Rent reminders, invoicing, and arrears escalation ran on Node.js cron workers and AWS Lambda scheduled events. On-time payment collection increased by 25%. A 4-person backend team ran sprint planning, code reviews, and production releases, with structured logging and CloudWatch monitoring.
