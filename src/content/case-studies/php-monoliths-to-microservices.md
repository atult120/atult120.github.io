---
title: Legacy PHP monoliths to microservices
order: 2
number: "02"
company: i-XL Technologies
tag: I-XL TECHNOLOGIES · MIGRATION
description: Four legacy PHP monoliths moved to AWS Lambda and ECS, with deployment time cut by 40% and a year of EC2 over-provisioning removed.
metrics:
  - value: "4"
    label: monoliths moved to Lambda and ECS
  - value: "$15K"
    label: per year EC2 capacity eliminated
stack:
  - Node.js
  - TypeScript
  - AWS Lambda
  - ECS
  - PostgreSQL
  - MongoDB
  - SQS
  - CloudWatch
diagram: microservices
approach:
  - "Broke four PHP monoliths into Lambda and ECS services. Deployment time fell by 40%, and releases moved from monthly to weekly."
  - "The same move eliminated USD 15K/year of over-provisioned EC2 capacity."
  - "15+ cloud-native services stayed at 99.9% uptime, with sub-200ms average response time, across 100K+ monthly transactions."
  - "30+ REST and GraphQL endpoints for web and mobile. Auth used JWT, OAuth 2.0, Passport.js, Helmet.js, bcrypt, RBAC, and rate limiting, with zero authentication-related incidents over 4 years."
  - "Jest and Supertest in CI, plus API contract reviews, reduced post-release bugs by 35%. CloudWatch and SNS pager alerts kept average P1 MTTD under 5 minutes."
---

Owned 15+ cloud-native backend services at i-XL Technologies. They processed 100K+ monthly transactions at 99.9% uptime, with sub-200ms average response time.

Four legacy PHP monoliths moved to AWS Lambda and ECS. Deployment time dropped by 40%, USD 15K/year of over-provisioned EC2 capacity went away, and releases moved from monthly to weekly. The services exposed 30+ REST and GraphQL endpoints to web and mobile clients.

API security used JWT, OAuth 2.0, Passport.js, Helmet.js, bcrypt, RBAC, and rate limiting. There were zero authentication-related security incidents over 4 years. Automated integration tests in CI, and API contract reviews with frontend and QA, reduced post-release bugs by 35%.

Mentored 4 junior developers. A Git branching standard reduced production regressions by 40% and cut new-hire ramp time by 2 weeks. CloudWatch and SNS-based pager alerts kept average MTTD under 5 minutes for P1 incidents.
