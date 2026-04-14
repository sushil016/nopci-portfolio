import Discord from '@/components/svgs/Discord';
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import YouTube from '@/components/svgs/YouTube';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
};

export const heroConfig = {
  // Personal Information
  name: 'Sushil Sahani',
  title: 'Software Developer with 2+ years of experience',
  avatar: '/favicon.jpeg',

  // Skills Configuration
  skills: [
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
  ],

  // Description Configuration
  description: {
    template:
      'Building scalable web applications and cloud infrastructure. Expertise in <b>Cloud</b>, <b>DevOps</b> and <b>AI Infrastructure</b>I co-founded <b>Robomaniac</b>A Ed-tech <b>STEM Ai & robotics startup focused on delevering education to students.</b>I also have a passion for technology and love sharing knowledge through my <b>blog</b> and <b>YouTube channel</b>.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'My journey',
      href: '/journey',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/not_aspirant',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sushil-sahani-46235527b/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/sushil016',
    icon: <Github />,
  },
  {
    name: 'Discord',
    href: 'https://discord.com/users/sushilz16',
    icon: <Discord />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCKhgnThKZcPt6Nw2oPJm6tg',
    icon: <YouTube />,
  },
  {
    name: 'Email',
    href: 'mailto:sahanisushil325@gmail.com',
    icon: <Mail />,
  },
];
