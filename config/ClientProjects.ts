export interface ClientProject {
  title: string;
  description: string;
  image: string;
  location: string;
  website: string;
  caseStudySlug: string;
  technologies: string[];
  isWorking: boolean;
}

export const clientProjects: ClientProject[] = [
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
