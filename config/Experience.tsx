import ArgoCD from '@/components/technologies/ArgoCD';
import Azure from '@/components/technologies/Azure';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import GCP from '@/components/technologies/GCP';
import JavaScript from '@/components/technologies/JavaScript';
import Kafka from '@/components/technologies/Kafka';
import Kubernetes from '@/components/technologies/Kubernetes';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redis from '@/components/technologies/Redis';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'CREW',
    position: 'SWE Intern',
    location: 'Remote — Sydney, Australia',
    image: '/company/crew.png',
    description: [
      'Deployed Azure Application Gateway with Load Balancer using Docker and Kubernetes, improving routing, SSL handling, and reliability of production traffic.',
      'Migrated production PostgreSQL database from GCP to Azure Flexible Server, achieving zero downtime and a noticeable boost in performance.',
      'Handled microservices deployment on Azure and GCP with Kubernetes, Redis, and Kafka, optimizing scalability and reducing service latency.',
      'Built CI/CD pipelines with GitLab CI and ArgoCD, with Auto migration of SQL Queries in production DB, automating testing, deployment, and rollback for faster, error-free releases.',
      'Secured production secrets using Azure Key Vault, ensuring compliance and smooth integration across Azure, GCP, GitLab CI and GitHub Actions workflows.',
    ],
    startDate: 'January 2025',
    endDate: 'Present',
    technologies: [
      { name: 'Azure', href: 'https://azure.microsoft.com/', icon: <Azure /> },
      { name: 'GCP', href: 'https://cloud.google.com/', icon: <GCP /> },
      { name: 'Docker', href: 'https://www.docker.com/', icon: <Docker /> },
      { name: 'Kubernetes', href: 'https://kubernetes.io/', icon: <Kubernetes /> },
      { name: 'Redis', href: 'https://redis.io/', icon: <Redis /> },
      { name: 'Kafka', href: 'https://kafka.apache.org/', icon: <Kafka /> },
      { name: 'ArgoCD', href: 'https://argoproj.github.io/cd/', icon: <ArgoCD /> },
      { name: 'PostgreSQL', href: 'https://www.postgresql.org/', icon: <PostgreSQL /> },
    ],
    website: '#',
  },
  {
    isCurrent: true,
    company: 'Robomaniac',
    position: 'Co-founder & Tech Lead',
    location: 'Remote / Hybrid',
    image: '/company/robomaniac.png',
    description: [
      'Co-founded Robomaniac, an ed-tech startup dedicated to teaching Robotics and Artificial Intelligence to students aged 6 to 18.',
      'Lead technical curriculum design covering embedded systems, robotics programming, sensors, actuators, and AI fundamentals tailored by age group.',
      'Architecting and building the platform infrastructure supporting student progress tracking, course delivery, and instructor tooling.',
    ],
    startDate: 'November 2025',
    endDate: 'Present',
    technologies: [
      { name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: <JavaScript /> },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/', icon: <TypeScript /> },
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      { name: 'PostgreSQL', href: 'https://www.postgresql.org/', icon: <PostgreSQL /> },
      { name: 'Docker', href: 'https://www.docker.com/', icon: <Docker /> },
    ],
    website: '#',
  },
  {
    isCurrent: true,
    company: 'Innovation and Robotics Lab of BVCOE',
    position: 'Vice President',
    location: 'Navi Mumbai, Maharashtra, India · On-site',
    image: '/company/bvcoe-irl.png',
    description: [
      'Currently serving as Vice President (March 2026 – Present), overseeing club operations, member recruitment, inter-college robotics competitions, and strategic initiatives.',
      'Served as Head of Programming (April 2025 – March 2026), leading the software and robotics programming division and mentoring junior members.',
      'Started as Software and Robotics Programmer (January 2024 – April 2025), building robotics projects and web applications for the club.',
      'Continuous 2+ year contribution to the college robotics community, growing through three progressive roles and representing the college at multiple competitions.',
    ],
    startDate: 'January 2024',
    endDate: 'Present',
    technologies: [
      { name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: <JavaScript /> },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/', icon: <TypeScript /> },
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      { name: 'Express.js', href: 'https://expressjs.com/', icon: <ExpressJs /> },
      { name: 'PostgreSQL', href: 'https://www.postgresql.org/', icon: <PostgreSQL /> },
    ],
    website: '#',
  },
  {
    isCurrent: false,
    company: 'IIT Bombay',
    position: 'Full-Stack Intern',
    location: 'On-Site — IITB',
    image: '/company/iitb.png',
    description: [
      'Developed a comprehensive Procurement Management System for the Aerospace Department at IIT Bombay, serving administrators and project staff involved in research projects.',
      'Built responsive React.js application with TypeScript.',
      'Designed comprehensive PostgreSQL database schema with Prisma ORM.',
      'Containerized the full application stack with Docker for consistent environments across development and production.',
    ],
    startDate: 'October 2024',
    endDate: 'January 2025',
    technologies: [
      { name: 'React', href: 'https://react.dev/', icon: <ReactIcon /> },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/', icon: <TypeScript /> },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: <NodeJs /> },
      { name: 'Express.js', href: 'https://expressjs.com/', icon: <ExpressJs /> },
      { name: 'PostgreSQL', href: 'https://www.postgresql.org/', icon: <PostgreSQL /> },
      { name: 'Prisma', href: 'https://www.prisma.io/', icon: <Prisma /> },
      { name: 'Docker', href: 'https://www.docker.com/', icon: <Docker /> },
    ],
    website: 'https://www.iitb.ac.in',
  },
];
