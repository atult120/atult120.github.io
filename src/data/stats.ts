export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '1M+', label: 'monthly requests served at 99.95% uptime' },
  { value: '8', label: 'engineers led as Tech Lead' },
  { value: '40%', label: 'faster deployments through CI/CD automation' },
  { value: '$3.5K', label: 'saved per month on cloud infrastructure' },
];
