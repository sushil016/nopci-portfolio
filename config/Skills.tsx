import AWS from '@/components/technologies/AWS';
import ArgoCD from '@/components/technologies/ArgoCD';
import Azure from '@/components/technologies/Azure';
import CPP from '@/components/technologies/CPP';
import Cloudflare from '@/components/technologies/Cloudflare';
import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import Framer from '@/components/technologies/Framer';
import GCP from '@/components/technologies/GCP';
import Grafana from '@/components/technologies/Grafana';
import Helm from '@/components/technologies/Helm';
import JavaScript from '@/components/technologies/JavaScript';
import Kafka from '@/components/technologies/Kafka';
import Kubernetes from '@/components/technologies/Kubernetes';
import Linux from '@/components/technologies/Linux';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import Python from '@/components/technologies/Python';
import ROS from '@/components/technologies/ROS';
import ReactIcon from '@/components/technologies/ReactIcon';
import Redis from '@/components/technologies/Redis';
import Rust from '@/components/technologies/Rust';
import Sklearn from '@/components/technologies/Sklearn';
import Supabase from '@/components/technologies/Supabase';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';

export interface Skill {
  name: string;
  icon: React.ReactNode;
  href: string;
}

export const skillsRow1: Skill[] = [
  { name: 'JavaScript', icon: <JavaScript />, href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: <TypeScript />, href: 'https://www.typescriptlang.org/' },
  { name: 'Python', icon: <Python />, href: 'https://www.python.org/' },
  { name: 'C/C++', icon: <CPP />, href: 'https://isocpp.org/' },
  { name: 'Rust', icon: <Rust />, href: 'https://www.rust-lang.org/' },
  { name: 'Next.js', icon: <NextJs />, href: 'https://nextjs.org/' },
  { name: 'React', icon: <ReactIcon />, href: 'https://react.dev/' },
  { name: 'Express.js', icon: <ExpressJs />, href: 'https://expressjs.com/' },
  { name: 'Node.js', icon: <NodeJs />, href: 'https://nodejs.org/' },
  { name: 'Tailwind', icon: <TailwindCss />, href: 'https://tailwindcss.com/' },
  { name: 'Framer', icon: <Framer />, href: 'https://www.framer.com/' },
  { name: 'Sklearn', icon: <Sklearn />, href: 'https://scikit-learn.org/' },
];

export const skillsRow2: Skill[] = [
  { name: 'Docker', icon: <Docker />, href: 'https://www.docker.com/' },
  { name: 'Kubernetes', icon: <Kubernetes />, href: 'https://kubernetes.io/' },
  { name: 'AWS', icon: <AWS />, href: 'https://aws.amazon.com/' },
  { name: 'Azure', icon: <Azure />, href: 'https://azure.microsoft.com/' },
  { name: 'GCP', icon: <GCP />, href: 'https://cloud.google.com/' },
  { name: 'ArgoCD', icon: <ArgoCD />, href: 'https://argoproj.github.io/cd/' },
  { name: 'Helm', icon: <Helm />, href: 'https://helm.sh/' },
  { name: 'PostgreSQL', icon: <PostgreSQL />, href: 'https://www.postgresql.org/' },
  { name: 'Redis', icon: <Redis />, href: 'https://redis.io/' },
  { name: 'MongoDB', icon: <MongoDB />, href: 'https://www.mongodb.com/' },
  { name: 'Supabase', icon: <Supabase />, href: 'https://supabase.com/' },
  { name: 'Prisma', icon: <Prisma />, href: 'https://www.prisma.io/' },
  { name: 'Kafka', icon: <Kafka />, href: 'https://kafka.apache.org/' },
  { name: 'Grafana', icon: <Grafana />, href: 'https://grafana.com/' },
  { name: 'Cloudflare', icon: <Cloudflare />, href: 'https://www.cloudflare.com/' },
  { name: 'Linux', icon: <Linux />, href: 'https://www.linux.org/' },
  { name: 'ROS', icon: <ROS />, href: 'https://www.ros.org/' },
];
