export interface ClientProject {
  title: string;
  description: string;
  bullets?: string[];
  image: string;
  location: string;
  website: string;
  caseStudySlug: string;
  technologies: string[];
  isWorking: boolean;
}

export const clientProjects: ClientProject[] = [
  {
    title: 'RoboRoot — AI Action Layer & RAG Pipeline',
    description:
      'Engineered and launched a secure, stateful AI Action Layer and a hardened RAG pipeline for RoboRoot, enabling automated product lookups, BOM building, live competitor price matching, and secure checkout loops directly within the chat interface.',
    bullets: [
      'Designed a hybrid intent router that classifies incoming requests, executing secure chat action tools under global authentication guards and role-based access controls.',
      'Optimized the RAG retrieval pipeline using batched database lookups, completely eliminating N+1 bottlenecks to query stock and pricing details in real-time.',
      'Implemented robust security policies, including formula-injection-safe CSV ingestion, Winston PCI audit logging, and time-bucketed Redis checkout idempotency.',
    ],
    image: '/roboroot-homepage.png',
    location: 'Remote',
    website: 'https://roboroot.in',
    caseStudySlug: 'roboroot-ai-action-layer',
    technologies: ['Node.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redis', 'Next.js', 'OpenAI', 'Razorpay'],
    isWorking: true,
  },
  {
    title: 'Jain & Iyer — E-commerce Platform',
    description:
      'Dual-model e-commerce platform for Jain & Iyer supporting both individual purchases and scheduled society-based ordering with automated delivery scheduling, admin controls, and Razorpay payments.',
    image: '/jainiyer.webp',
    location: 'Parel, Mumbai',
    website: '#',
    caseStudySlug: 'jain-and-iyer',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Razorpay', 'Tailwind CSS', 'GCP'],
    isWorking: true,
  },
];
