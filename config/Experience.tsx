import ArgoCD from '@/components/technologies/ArgoCD';
import Azure from '@/components/technologies/Azure';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import GCP from '@/components/technologies/GCP';
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
    isCurrent: false,
    company: 'IIT Bombay',
    position: 'Full-Stack Intern',
    location: 'On-Site — IITB',
    image: '/company/iitb.png',
    description: [
      'Developed a comprehensive Procurement Management System for the Aerospace Department at IIT Bombay, serving administrators and project staff involved in research projects.',
      'Built responsive React.js application with TypeScript.',
      'Designed comprehensive PostgreSQL database schema.',
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
