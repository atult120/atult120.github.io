export interface WorkMetric {
  value: string;
  label: string;
}

export interface WorkItem {
  n: string;
  slug: string;
  tag: string;
  title: string;
  metrics: WorkMetric[];
  body: string;
  stack: string;
}

export const work: WorkItem[] = [
  {
    n: '01',
    slug: 'ultrasound-imaging',
    tag: 'WILCO SOURCE · HEALTHCARE',
    title: 'Portable ultrasound imaging platform',
    metrics: [
      { value: '40%', label: 'faster average API response' },
      { value: '10K+', label: 'daily image uploads, zero data loss' },
    ],
    body: 'Serverless REST APIs on Lambda and API Gateway ingest, process, and store studies in S3 and PostgreSQL with AES-256 encryption, HIPAA-aligned handling, and X-Ray tracing.',
    stack: 'NestJS · AWS Lambda · API Gateway · S3 · PostgreSQL · X-Ray',
  },
  {
    n: '02',
    slug: 'php-monoliths-to-microservices',
    tag: 'I-XL TECHNOLOGIES · MIGRATION',
    title: 'Legacy PHP monoliths to microservices',
    metrics: [
      { value: '4', label: 'monoliths moved to Lambda and ECS' },
      { value: '$15K', label: 'per year EC2 capacity eliminated' },
    ],
    body: 'Deployment time cut by 40% and release frequency moved from monthly to weekly across 15+ cloud-native services.',
    stack: 'Node.js · TypeScript · AWS Lambda · ECS · CloudWatch',
  },
  {
    n: '03',
    slug: 'multi-tenant-rbac',
    tag: 'TORINIT · SAAS',
    title: 'Multi-tenant platform with RBAC',
    metrics: [
      { value: '100K+', label: 'users on the platform' },
      { value: '45%', label: 'lower response times with Redis' },
    ],
    body: 'Backend architecture with role-based access control and modular field-level permissions, plus a 60% API performance gain from refactoring legacy code.',
    stack: 'Laravel · Node.js · PostgreSQL · Redis · Lambda · CodePipeline',
  },
  {
    n: '04',
    slug: 'rental-platform',
    tag: 'BOOKMYFLAT · REAL ESTATE',
    title: 'Rental platform performance and automation',
    metrics: [
      { value: '800→400ms', label: 'average API response' },
      { value: '+25%', label: 'on-time rent collection' },
    ],
    body: 'Query tuning, indexing, and Redis caching, plus automated reminders, invoicing, and arrears escalation for 20K+ users.',
    stack: 'Laravel · Node.js · MySQL · Redis · Lambda scheduled events',
  },
];
