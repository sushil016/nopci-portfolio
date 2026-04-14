import ExpressJs from '@/components/technologies/ExpressJs';
import GCP from '@/components/technologies/GCP';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Notewrite',
    description:
      'Full-stack education platform managing 15+ engineering courses with automated content management system for educational resources and study materials. Implements secure user authentication and payment gateway for course purchases.',
    image: '/project/notewrite.png',
    link: '#',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="postgresql" /> },
      { name: 'Prisma', icon: <Prisma key="prisma" /> },
    ],
    github: '#',
    live: '#',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Content Moderation Pipeline',
    description:
      'Scalable moderation API using Google Cloud Vision for fast screening and Anthropic Claude for context-aware analysis, with smart escalation reducing LLM usage by ~85%. Supports images, GIFs, and videos via parallel FFmpeg frame analysis.',
    image: '/project/content-moderation.png',
    link: '#',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'GCP', icon: <GCP key="gcp" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
    ],
    github: '#',
    live: '#',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
];
