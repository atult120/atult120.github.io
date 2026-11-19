---
title: Multi-tenant platform with RBAC
order: 3
number: "03"
company: Torinit
tag: TORINIT · SAAS
description: Backend architecture for a multi-tenant SaaS platform used by 100K+ users, with RBAC, Redis caching, and CI/CD.
metrics:
  - value: "100K+"
    label: users on the platform
  - value: "45%"
    label: lower response times with Redis
stack:
  - Laravel
  - Node.js
  - PostgreSQL
  - Redis
  - AWS Lambda
  - CodePipeline
  - GitHub Actions
diagram: cicd
approach:
  - "Led the backend architecture for a multi-tenant SaaS platform used by 100K+ users."
  - "RBAC with modular field-level permissions, so access is a product rule rather than a one-off check in each handler."
  - "REST APIs on Laravel, Node.js, and PostgreSQL. Legacy refactors improved API performance by 60%."
  - "Redis for caching and queues, which reduced response times by 45%."
  - "GitHub Actions and AWS CodePipeline for CI/CD, with Lambda, RDS, S3, and CloudWatch on AWS. Frontend work sat next to React and Inertia.js."
---

Led backend architecture at Torinit for a multi-tenant SaaS platform used by 100K+ users. REST APIs were built and maintained with Laravel, Node.js, and PostgreSQL.

Access used role-based access control and modular field-level permissions. AWS serverless functions ran on Lambda, with RDS, S3, and CloudWatch. Refactoring legacy code reduced technical debt and improved API performance by 60%. Redis caching and queues reduced response times by 45%.

CI/CD ran through GitHub Actions and AWS CodePipeline, alongside frontend teams using React and Inertia.js.
