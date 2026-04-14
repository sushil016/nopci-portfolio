import Bun from '@/components/technologies/Bun';
import Docker from '@/components/technologies/Docker';
import JavaScript from '@/components/technologies/JavaScript';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export const mySkills = [
  <ReactIcon key="react" />,
  <TypeScript key="typescript" />,
  <NextJs key="nextjs" />,
  <NodeJs key="nodejs" />,
  <PostgreSQL key="postgresql" />,
  <Prisma key="prisma" />,
  <Docker key="docker" />,
  <JavaScript key="javascript" />,
  <Bun key="bun" />,
];

export const about = {
  name: 'Sushil Sahani',
  description: `I'm a Full Stack Developer with expertise in Cloud, DevOps and AI Infrastructure. I build and deploy scalable applications on Azure and GCP using Kubernetes and Docker.`,
};
