import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

// Base site configuration
export const siteConfig = {
  name: heroConfig.name,
  title: 'Sushil Sahani — Full Stack Developer & DevOps Engineer',
  description:
    'Sushil Sahani — Full Stack Developer, Cloud/DevOps Engineer, and Robotics enthusiast from India. Building scalable web applications, AI systems, and production-grade infrastructure.',
  url: process.env.NEXT_PUBLIC_URL || 'https://sushilsahani.dev',
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: about.name,
    twitter: '@not_aspirant',
    github: 'sushil016',
    linkedin: 'sushil-sahani-46235527b',
    email: 'sahanisushil325@gmail.com',
  },
  keywords: [
    'Sushil Sahani',
    'sushil sahani portfolio',
    'sushil016',
    'full stack developer india',
    'devops engineer',
    'cloud engineer',
    'react developer',
    'nextjs developer',
    'typescript',
    'nodejs',
    'kubernetes',
    'docker',
    'azure',
    'robotics',
    'web development',
    'iit bombay intern',
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  // Home page
  '/': {
    title: `Sushil Sahani — Full Stack Developer & DevOps Engineer`,
    description: `${about.description} Explore my projects, work experience, and the systems I've built — from AI pipelines to robotics.`,
    keywords: [
      'Sushil Sahani',
      'full stack developer',
      'devops engineer',
      'cloud engineer',
      'react developer',
      'nodejs',
      'kubernetes',
      'robotics',
      'india',
      'portfolio',
    ],
    ogImage: '/meta/hero.png',
    twitterCard: 'summary_large_image',
  },

  // Contact page
  '/contact': {
    title: 'Contact Sushil Sahani — Hire or Collaborate',
    description:
      "Get in touch with Sushil Sahani for freelance projects, collaborations, or engineering roles. Open to remote opportunities worldwide.",
    keywords: [
      'contact Sushil Sahani',
      'hire developer',
      'hire devops engineer',
      'freelance developer india',
      'collaboration',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary',
  },

  // Work Experience page
  '/work-experience': {
    title: 'Work Experience — Sushil Sahani',
    description:
      'Professional experience of Sushil Sahani — DevOps Intern at Crew, IIT Bombay research intern, and Robotics Club Programming Head.',
    keywords: [
      'Sushil Sahani work experience',
      'iit bombay intern',
      'devops intern',
      'crew devops',
      'software developer experience',
    ],
    ogImage: '/meta/work.png',
    twitterCard: 'summary_large_image',
  },

  // Projects page
  '/projects': {
    title: 'Projects — Sushil Sahani',
    description:
      "Sushil Sahani's projects — AI content moderation pipelines, smart queue systems, real-time location tracking, 2D metaverse platforms, and more.",
    keywords: [
      'Sushil Sahani projects',
      'ai pipeline',
      'content moderation',
      'queue management system',
      'gps tracking app',
      'full stack projects',
    ],
    ogImage: '/meta/projects.png',
    twitterCard: 'summary_large_image',
  },

  // Blog page
  '/blog': {
    title: 'Blog — Sushil Sahani',
    description:
      'Technical writing by Sushil Sahani on robotics, ROS2, full stack development, DevOps, and system design.',
    keywords: [
      'Sushil Sahani blog',
      'ros2 guide',
      'robotics tutorial',
      'devops blog',
      'system design',
      'technical writing',
    ],
    ogImage: '/meta/blogs.png',
    twitterCard: 'summary_large_image',
  },

  // Journey page
  '/journey': {
    title: "Journey — Sushil Sahani's Engineering Story",
    description:
      "The story of Sushil Sahani's engineering journey — from zero to IIT Bombay intern, DevOps engineer, and Robotics Club lead.",
    keywords: [
      'Sushil Sahani journey',
      'engineering student india',
      'iit bombay internship',
      'robowars',
      'robotics club',
      'self taught developer',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary_large_image',
  },

  // Certificates page
  '/journey/certificates': {
    title: 'Certificates & Achievements — Sushil Sahani',
    description:
      'Certificates and achievements of Sushil Sahani — IIT Bombay internship, Robowars 2025 3rd place, Plutonium 2026 national hackathon finalist.',
    keywords: [
      'Sushil Sahani certificates',
      'iit bombay certificate',
      'robowars 2025',
      'plutonium hackathon',
      'achievements',
    ],
    ogImage: '/meta/opengraph-image.png',
    twitterCard: 'summary_large_image',
  },

  // Resume page
  '/resume': {
    title: 'Resume — Sushil Sahani CV',
    description: `Download Sushil Sahani's resume — Full Stack Developer, DevOps Engineer, and Robotics enthusiast with experience at IIT Bombay and Crew.`,
    keywords: [
      'Sushil Sahani resume',
      'sushil sahani cv',
      'developer resume download',
      'devops engineer cv',
    ],
    ogImage: '/meta/resume.png',
    twitterCard: 'summary',
  },

  // Gears page
  '/gears': {
    title: 'Gears & Setup — Sushil Sahani',
    description:
      'The hardware and software Sushil Sahani uses daily — MacBook Air M4, VS Code, Claude Code, Warp, Docker, Figma, and more.',
    keywords: [
      'developer setup',
      'macbook air m4',
      'vs code setup',
      'developer tools',
      'productivity setup',
      'Sushil Sahani setup',
    ],
    ogImage: '/meta/gears.png',
    twitterCard: 'summary_large_image',
  },

  // Setup page
  '/setup': {
    title: 'VS Code Setup Guide — Sushil Sahani',
    description:
      'Complete VS Code setup guide by Sushil Sahani — extensions, fonts, settings.json, and Night Owl theme configuration.',
    keywords: [
      'vscode setup',
      'vscode extensions',
      'night owl theme',
      'fira code font',
      'developer environment',
    ],
    ogImage: '/meta/setup.png',
    twitterCard: 'summary_large_image',
  },
};

// Helper function to get metadata for a specific page
export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

// Helper function to generate complete metadata object for Next.js
export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords?.join(', '),
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
      images: [
        {
          url: pageMeta.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: pageMeta.title,
        },
      ],
    },
    twitter: {
      card: pageMeta.twitterCard || 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: [pageMeta.ogImage || siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
