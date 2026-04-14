import Docker from '@/components/technologies/Docker';
import ExpressJs from '@/components/technologies/ExpressJs';
import Expo from '@/components/technologies/Expo';
import GCP from '@/components/technologies/GCP';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import ReactNative from '@/components/technologies/ReactNative';
import Sklearn from '@/components/technologies/Sklearn';
import Supabase from '@/components/technologies/Supabase';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'Notewrite',
    description:
      'Full-stack education platform managing 15+ engineering courses with automated content management system for educational resources and study materials. Implements secure user authentication and payment gateway for course purchases.',
    image: '/notewrite.png',
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
    image: '/mod-X.jpeg',
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
  {
    title: 'CrewArcade — Arcade Engine',
    description:
      'Innovative platform that transforms simple prompts into interactive games and flowchart videos using advanced AI algorithms and game development frameworks. Built scalable architecture with React.js frontend, Supabase backend, and PostgreSQL database, enabling users to create engaging interactive content without technical expertise.',
    image: '',
    link: '#',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'JavaScript', icon: <JavaScript key="js" /> },
      { name: 'TypeScript', icon: <TypeScript key="ts" /> },
      { name: 'Supabase', icon: <Supabase key="supabase" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="pg" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
    ],
    github: '#',
    live: '#',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Robonauts — College Robotics Team',
    description:
      "Official website for Bharati Vidyapeeth's College of Engineering robotics team showcasing team achievements, projects, and upcoming events. Developed responsive web application with dynamic content management, team member profiles, and event registration system.",
    image: '',
    link: '#',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="js" /> },
      { name: 'TypeScript', icon: <TypeScript key="ts" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="pg" /> },
    ],
    github: '#',
    live: '#',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Robomania — Competition Platform',
    description:
      "Comprehensive competition registration website for Bharati Vidyapeeth's robotics competitions with real-time registration tracking and participant management. Implemented secure user authentication, payment integration, and automated email notifications.",
    image: '',
    link: '#',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="js" /> },
      { name: 'TypeScript', icon: <TypeScript key="ts" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="pg" /> },
    ],
    github: '#',
    live: '#',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'LumaDev — Web Dev Agency',
    description:
      'Professional web development agency website showcasing services, portfolio, and team expertise with modern design and seamless user experience. Built with scalable architecture featuring dynamic content management, client testimonials, and service booking system.',
    image: '',
    link: '#',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="js" /> },
      { name: 'TypeScript', icon: <TypeScript key="ts" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="pg" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
    ],
    github: '#',
    live: '#',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'getChecked — Location Tracker',
    description:
      'Real-time location tracking app where users can pin locations, set radius, and track movements with detailed insights on time spent in different zones. AI-powered attendance management for organizations with automated weekly reports combining manual and system check-in/out data.',
    image: '',
    link: '#',
    technologies: [
      { name: 'React Native', icon: <ReactNative key="rn" /> },
      { name: 'TypeScript', icon: <TypeScript key="ts" /> },
      { name: 'Expo', icon: <Expo key="expo" /> },
      { name: 'PostgreSQL', icon: <PostgreSQL key="pg" /> },
      { name: 'Express.js', icon: <ExpressJs key="expressjs" /> },
    ],
    github: '#',
    live: '#',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
  {
    title: 'Solution AI — Learning Platform',
    description:
      'AI-driven personalized learning platform that recommends tailored question sets using Scikit-learn and collaborative filtering for adaptive learning. Integrated ML models into a Next.js full-stack application with PostgreSQL and Prisma ORM, enhancing engagement by 30% through personalized study plans.',
    image: '',
    link: '#',
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="ts" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongo" /> },
      { name: 'Scikit-learn', icon: <Sklearn key="sklearn" /> },
      { name: 'Docker', icon: <Docker key="docker" /> },
    ],
    github: '#',
    live: '#',
    details: false,
    projectDetailsPageSlug: '',
    isWorking: true,
  },
];
