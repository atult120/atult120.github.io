export interface Job {
  when: string;
  company: string;
  role: string;
  where: string;
  points: string[];
  stack: string;
}

export const jobs: Job[] = [
  {
    when: 'May 2026 — Present',
    company: 'Persistent Systems',
    role: 'Project Lead',
    where: 'Mumbai Metropolitan Region',
    points: [],
    stack: '',
  },
  {
    when: '2025 — May 2026',
    company: 'Wilco Source',
    role: 'Senior Software Engineer',
    where: 'Mumbai, Maharashtra',
    stack:
      'Node.js · TypeScript · NestJS · AWS Lambda · API Gateway · PostgreSQL (RDS) · S3 · Jest · GitHub Actions',
    points: [
      'Reduced average API response time by 40% by re-architecting backend services for a portable ultrasound imaging platform.',
      'Delivered serverless REST APIs handling 10K+ daily image uploads with zero data-loss incidents, storing ultrasound studies in AWS S3 and PostgreSQL (RDS) with AES-256 encryption.',
      'Cut mean-time-to-detect production issues by 50% by integrating AWS CloudWatch, X-Ray distributed tracing, and Winston structured logging.',
      'Implemented JWT authentication, OAuth 2.0, RBAC, and HIPAA-aligned data handling, passing internal security audit with zero critical findings.',
      'Achieved 90%+ backend test coverage with Jest and Supertest; automated deployment via GitHub Actions, reducing release cycle from weekly to daily.',
    ],
  },
  {
    when: 'May 2024 — Sep 2025',
    company: 'Torinit',
    role: 'Senior Software Engineer',
    where: 'Pune District, Maharashtra',
    stack:
      'Laravel · Node.js · PostgreSQL · MySQL · Redis · AWS · Docker · REST APIs · Git · Microservices',
    points: [
      'Led backend architecture for a multi-tenant SaaS platform used by 100K+ users.',
      'Developed and maintained REST APIs using Laravel, Node.js, and PostgreSQL.',
      'Designed role-based access control (RBAC) and modular field-level permissions.',
      'Built AWS serverless functions with Lambda, RDS, S3, and CloudWatch.',
      'Refactored legacy codebases, reducing technical debt and improving API performance by 60%.',
      'Integrated Redis for caching and queue systems, reducing response times by 45%.',
      'Implemented CI/CD pipelines with GitHub Actions and AWS CodePipeline; worked closely with frontend teams using React and Inertia.js.',
    ],
  },
  {
    when: 'Aug 2020 — May 2024',
    company: 'i-XL Technologies',
    role: 'Back End Developer, then Senior Software Engineer',
    where: 'Mumbai, Maharashtra · 4 years',
    stack:
      'Node.js · Express.js · TypeScript · Laravel/PHP · AWS Lambda · ECS · PostgreSQL · MySQL · MongoDB · Redis · Sequelize · TypeORM',
    points: [
      'Owned 15+ cloud-native backend services processing 100K+ monthly transactions at 99.9% uptime with sub-200ms average response time.',
      'Migrated 4 legacy PHP monoliths to AWS Lambda and ECS microservices: cut deployment time by 40%, eliminated USD 15K/year in over-provisioned EC2 capacity, and moved releases from monthly to weekly.',
      'Designed and shipped 30+ REST API and GraphQL endpoints consumed by web and mobile clients.',
      'Hardened API security with JWT, OAuth 2.0, Passport.js, Helmet.js, bcrypt, RBAC, and rate-limiting, with zero authentication-related security incidents over 4 years.',
      'Reduced post-release bugs by 35% by embedding automated integration tests (Jest, Supertest) into CI and establishing API contract reviews with frontend and QA teams.',
      'Mentored 4 junior developers; a Git branching standard reduced production regressions by 40% and cut new-hire ramp time by 2 weeks.',
      'Built production monitoring and alerting with CloudWatch and SNS-based pager alerts, achieving average MTTD under 5 minutes for P1 incidents.',
    ],
  },
  {
    when: 'May 2018 — Jul 2020',
    company: 'Bookmyflat.com Pvt Ltd',
    role: 'PHP Developer, then Team Lead',
    where: '2 years 3 months',
    stack: 'PHP (Laravel) · Node.js · MySQL · Redis · AWS Lambda · Winston · CloudWatch',
    points: [
      'Halved average API response time from 800ms to 400ms for the rental platform serving 20K+ users, using N+1 query fixes, connection pooling, and Redis caching.',
      'Delivered 12+ production REST APIs for rent collection, tenant onboarding, and KYC workflows, eliminating 20+ hours per month of manual back-office work and reducing onboarding time by 3 days.',
      'Automated rent reminders, invoicing, and arrears escalation with Node.js cron workers and AWS Lambda scheduled events, increasing on-time payment collection by 25%.',
      'Resolved 60% of slow-query incidents; average DB query time fell from 380ms to 90ms.',
      'Led a 4-person backend team: sprint planning, code reviews, production releases; introduced structured logging and CloudWatch monitoring.',
    ],
  },
];
