export interface SkillGroup {
  name: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { name: 'Languages', items: ['TypeScript', 'Node.js', 'PHP'] },
  { name: 'Frameworks', items: ['NestJS', 'Express.js', 'Laravel', 'React', 'Inertia.js'] },
  {
    name: 'Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Sequelize', 'TypeORM'],
  },
  {
    name: 'Architecture',
    items: [
      'Microservices',
      'Serverless Computing',
      'Distributed Systems',
      'WebSocket',
      'REST APIs',
      'GraphQL',
      'Multi-tenant systems',
      'System Design',
    ],
  },
  {
    name: 'Cloud and DevOps',
    items: [
      'AWS Lambda',
      'API Gateway',
      'SQS',
      'SNS',
      'S3',
      'RDS',
      'ECS',
      'CloudWatch',
      'X-Ray',
      'Docker',
      'GitHub Actions',
      'CodePipeline',
    ],
  },
  {
    name: 'Security and quality',
    items: [
      'JWT',
      'OAuth 2.0',
      'RBAC',
      'Passport.js',
      'Helmet.js',
      'bcrypt',
      'Rate limiting',
      'HIPAA-aligned handling',
      'Jest',
      'Supertest',
      'Winston',
    ],
  },
  {
    name: 'Leadership',
    items: ['Team leadership', 'Mentoring', 'Code reviews', 'Sprint planning', 'API contract reviews'],
  },
];
