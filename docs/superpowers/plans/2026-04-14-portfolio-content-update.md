# Portfolio Content Update — aspirant op (Sushil Sahani) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace all personal content in this Next.js portfolio template (originally ramxcodes) with Sushil Sahani / aspirant op's information, and create all missing SVG + tech icon components.

**Architecture:** All personal content lives in `config/` files — no component logic changes needed. Missing tech icons are created as zero-prop SVG components following the exact pattern of `components/technologies/TypeScript.tsx`. Social icons follow `components/svgs/X.tsx` pattern with `fill="currentColor"`.

**Tech Stack:** Next.js 14, TypeScript, React, SVG

---

## File Map

**Create (SVG social icons):**
- `components/svgs/Discord.tsx`
- `components/svgs/YouTube.tsx`

**Create (tech icon components):**
- `components/technologies/Docker.tsx`
- `components/technologies/Kubernetes.tsx`
- `components/technologies/Azure.tsx`
- `components/technologies/GCP.tsx`
- `components/technologies/Redis.tsx`
- `components/technologies/Kafka.tsx`
- `components/technologies/ArgoCD.tsx`
- `components/technologies/Grafana.tsx`
- `components/technologies/Helm.tsx`

**Modify (config files):**
- `config/Hero.tsx`
- `config/About.tsx`
- `config/Experience.tsx`
- `config/Projects.tsx`
- `config/Meta.tsx`
- `config/CTA.tsx`
- `config/Footer.tsx`
- `config/Github.tsx`
- `config/Resume.ts`
- `config/ChatPrompt.ts`

---

## Task 1: Create tech icon components

**Files:**
- Create: `components/technologies/Docker.tsx`
- Create: `components/technologies/Kubernetes.tsx`
- Create: `components/technologies/Azure.tsx`
- Create: `components/technologies/GCP.tsx`
- Create: `components/technologies/Redis.tsx`
- Create: `components/technologies/Kafka.tsx`
- Create: `components/technologies/ArgoCD.tsx`
- Create: `components/technologies/Grafana.tsx`
- Create: `components/technologies/Helm.tsx`

- [ ] **Step 1: Create `components/technologies/Docker.tsx`**

```tsx
export default function Docker() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#2496ED"
        d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"
      />
    </svg>
  );
}
```

- [ ] **Step 2: Create `components/technologies/Kubernetes.tsx`**

```tsx
export default function Kubernetes() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#326CE5"
        d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 01-2.075-2.597l2.578-.437.004.005zm4.412.024l.008-.012 2.574.44a5.174 5.174 0 01-2.066 2.585l-.994-2.402.478-.611zm-4.8-3.88l-.003.016-2.674-.001a5.184 5.184 0 01.801-2.944l1.925 1.904-.049 1.025zm2.954-2.776l-.007.004-1.08-2.292A5.2 5.2 0 0112 5.258c.476 0 .935.066 1.37.186l-1.08 2.29-.72.984zm2.157 2.76l-.05-1.024 1.921-1.9a5.185 5.185 0 01.806 2.927l-2.677.001v-.004zm-1.795 6.75l-.12-.23.997 2.404a5.21 5.21 0 01-3.17.085l.993-2.394.3-.865zM12 3C7.032 3 3 7.032 3 12s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9z"
      />
    </svg>
  );
}
```

- [ ] **Step 3: Create `components/technologies/Azure.tsx`**

```tsx
export default function Azure() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#0078D4"
        d="M13.05 4.24l-6.552 16.22H0L6.09 8.433 13.05 4.24zm.718.63L24 20.46H6.83l9.363-1.804 3.43-8.318-5.855-5.463z"
      />
    </svg>
  );
}
```

- [ ] **Step 4: Create `components/technologies/GCP.tsx`**

```tsx
export default function GCP() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#4285F4"
        d="M12.19 2.38a9.344 9.344 0 00-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006.005a6.79 6.79 0 004.073 1.38H19.9a6.665 6.665 0 006.498-5.101 6.505 6.505 0 00-3.444-7.188A9.349 9.349 0 0012.19 2.38zm0 3.087a6.262 6.262 0 016.24 7.836l-.08.33.337-.02a3.418 3.418 0 013.455 3.464 3.438 3.438 0 01-3.44 3.44H6.785a3.545 3.545 0 01-.274-.012l-.006-.013-.015.013a3.706 3.706 0 01-2.451-.726c-1.786-1.413-1.786-4.021.046-5.412l.398-.299-.149-.469a6.255 6.255 0 017.86-7.132z"
      />
    </svg>
  );
}
```

- [ ] **Step 5: Create `components/technologies/Redis.tsx`**

```tsx
export default function Redis() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#DC382D"
        d="M10.612 13.891l-7.285-3.164 7.285-3.031 7.285 3.031-7.285 3.164zm0-10.457l-7.285 3.03 7.285 3.164 7.285-3.164-7.285-3.03zm0 4.196L5.398 5.836l5.214 2.3 5.214-2.3-5.214 1.794zm0 6.527l-9.282-4.026v1.597l9.282 4.026 9.282-4.026v-1.597l-9.282 4.026zm0 3.034l-9.282-4.026v1.597l9.282 4.026 9.282-4.026v-1.597l-9.282 4.026z"
      />
    </svg>
  );
}
```

- [ ] **Step 6: Create `components/technologies/Kafka.tsx`**

```tsx
export default function Kafka() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#231F20"
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-4.5 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm9 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-4.5 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-2.56-8.57l1.06 1.07-4.5 4.5-1.06-1.07 4.5-4.5zm5.12 0l4.5 4.5-1.06 1.07-4.5-4.5 1.06-1.07zm-5.12 5.64l4.5 4.5-1.06 1.07-4.5-4.5 1.06-1.07zm5.12 0l1.06 1.07-4.5 4.5-1.06-1.07 4.5-4.5z"
      />
    </svg>
  );
}
```

- [ ] **Step 7: Create `components/technologies/ArgoCD.tsx`**

```tsx
export default function ArgoCD() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#EF7B4D"
        d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 3.692c4.593 0 8.308 3.715 8.308 8.308S16.593 20.308 12 20.308 3.692 16.593 3.692 12 7.407 3.692 12 3.692zm0 2.77a5.538 5.538 0 100 11.076A5.538 5.538 0 0012 6.46zm0 2.77a2.77 2.77 0 110 5.54 2.77 2.77 0 010-5.54z"
      />
    </svg>
  );
}
```

- [ ] **Step 8: Create `components/technologies/Grafana.tsx`**

```tsx
export default function Grafana() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#F46800"
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.54 0 4.894-.79 6.834-2.135l-1.146-1.756A9.754 9.754 0 0112 21.75C6.615 21.75 2.25 17.385 2.25 12S6.615 2.25 12 2.25 21.75 6.615 21.75 12a9.73 9.73 0 01-1.188 4.69l1.76 1.146A11.972 11.972 0 0024 12c0-6.627-5.373-12-12-12zm0 5.25a6.75 6.75 0 100 13.5A6.75 6.75 0 0012 5.25zm0 2.25a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z"
      />
    </svg>
  );
}
```

- [ ] **Step 9: Create `components/technologies/Helm.tsx`**

```tsx
export default function Helm() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#0F1689"
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 3.22V12H3.22A8.782 8.782 0 0110.5 3.22zm3 0A8.782 8.782 0 0120.78 12H13.5V3.22zM3.22 13.5H10.5v7.28A8.782 8.782 0 013.22 13.5zm10.28 7.28V13.5h7.28A8.782 8.782 0 0113.5 20.78z"
      />
    </svg>
  );
}
```

- [ ] **Step 10: Commit tech icon components**

```bash
git add components/technologies/Docker.tsx components/technologies/Kubernetes.tsx components/technologies/Azure.tsx components/technologies/GCP.tsx components/technologies/Redis.tsx components/technologies/Kafka.tsx components/technologies/ArgoCD.tsx components/technologies/Grafana.tsx components/technologies/Helm.tsx
git commit -m "feat: add tech icon components for Docker, Kubernetes, Azure, GCP, Redis, Kafka, ArgoCD, Grafana, Helm"
```

---

## Task 2: Create SVG social icon components

**Files:**
- Create: `components/svgs/Discord.tsx`
- Create: `components/svgs/YouTube.tsx`

- [ ] **Step 1: Create `components/svgs/Discord.tsx`**

```tsx
import React from 'react';

export default function Discord() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
```

- [ ] **Step 2: Create `components/svgs/YouTube.tsx`**

```tsx
import React from 'react';

export default function YouTube() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
```

- [ ] **Step 3: Commit SVG social icons**

```bash
git add components/svgs/Discord.tsx components/svgs/YouTube.tsx
git commit -m "feat: add Discord and YouTube SVG social icon components"
```

---

## Task 3: Update config/Hero.tsx

**Files:**
- Modify: `config/Hero.tsx`

- [ ] **Step 1: Replace full file content**

Replace `config/Hero.tsx` with:

```tsx
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
  title: 'A Full Stack Developer & Cloud/DevOps Engineer.',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'Typescript',
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
      'Full stack developer, expertise in <b>Cloud</b>, <b>DevOps</b> and <b>AI Infrastructure</b>. Building and Deploying Scalable Application.',
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
      text: 'Get in touch',
      href: '/contact',
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
```

- [ ] **Step 2: Commit**

```bash
git add config/Hero.tsx
git commit -m "feat: update Hero config for aspirant op (Sushil Sahani)"
```

---

## Task 4: Update config/About.tsx

**Files:**
- Modify: `config/About.tsx`

- [ ] **Step 1: Replace About config content**

Replace `config/About.tsx` with:

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add config/About.tsx
git commit -m "feat: update About config for Sushil Sahani"
```

---

## Task 5: Update config/Experience.tsx

**Files:**
- Modify: `config/Experience.tsx`

- [ ] **Step 1: Replace full file content**

Replace `config/Experience.tsx` with:

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add config/Experience.tsx
git commit -m "feat: update Experience config with CREW and IIT Bombay roles"
```

---

## Task 6: Update config/Projects.tsx

**Files:**
- Modify: `config/Projects.tsx`

- [ ] **Step 1: Replace full file content**

Replace `config/Projects.tsx` with:

```tsx
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
```

- [ ] **Step 2: Commit**

```bash
git add config/Projects.tsx
git commit -m "feat: update Projects config with Notewrite and Content Moderation Pipeline"
```

---

## Task 7: Update remaining config files

**Files:**
- Modify: `config/Meta.tsx`
- Modify: `config/CTA.tsx`
- Modify: `config/Footer.tsx`
- Modify: `config/Github.tsx`
- Modify: `config/Resume.ts`

- [ ] **Step 1: Update `config/Meta.tsx` author block**

In `config/Meta.tsx`, replace the `siteConfig` object:

```tsx
export const siteConfig = {
  name: heroConfig.name,
  title: 'aspirant op — Portfolio',
  description: 'Full Stack Developer & Cloud/DevOps Engineer — Sushil Sahani',
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  ogImage: '/meta/opengraph-image.png',
  author: {
    name: about.name,
    twitter: '@not_aspirant',
    github: 'sushil016',
    linkedin: 'sushil-sahani-46235527b',
    email: 'sahanisushil325@gmail.com',
  },
  keywords: [
    'portfolio',
    'developer',
    'full-stack',
    'cloud',
    'devops',
    'react',
    'nextjs',
    'typescript',
    'web development',
    heroConfig.name.toLowerCase(),
  ],
};
```

- [ ] **Step 2: Update `config/CTA.tsx`**

Replace full file:

```tsx
export const ctaConfig = {
  profileImage: '/assets/logo.png',
  profileAlt: 'Sushil Sahani',
  linkText: 'Book a Free Call',
  calLink: '#',
  preText: "Hey, you scrolled this far, let's talk.",
};
```

- [ ] **Step 3: Update `config/Footer.tsx`**

Replace full file:

```tsx
export const footerConfig = {
  developer: 'aspirant op',
  text: 'Design & Developed by',
  copyright: 'All rights reserved.',
};
```

- [ ] **Step 4: Update `config/Github.tsx`** — replace full file:

```tsx
export const githubConfig = {
  username: 'sushil016',
  apiUrl: 'https://github-contributions-api.deno.dev',

  title: 'GitHub Activity',
  subtitle: 'coding journey over the past year',

  blockSize: 11,
  blockMargin: 3,
  fontSize: 12,
  maxLevel: 4,

  months: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  weekdays: ['', 'M', '', 'W', '', 'F', ''],
  totalCountLabel: '{{count}} contributions in the last year',

  theme: {
    dark: [
      'rgb(22, 27, 34)',
      'rgb(14, 68, 41)',
      'rgb(0, 109, 50)',
      'rgb(38, 166, 65)',
      'rgb(57, 211, 83)',
    ],
    light: [
      'rgb(235, 237, 240)',
      'rgb(155, 233, 168)',
      'rgb(64, 196, 99)',
      'rgb(48, 161, 78)',
      'rgb(33, 110, 57)',
    ],
  },

  errorState: {
    title: 'Unable to load GitHub contributions',
    description: 'Check out my profile directly for the latest activity',
    buttonText: 'View on GitHub',
  },

  loadingState: {
    title: 'Loading contributions...',
    description: 'Fetching your GitHub activity data',
  },
};
```

- [ ] **Step 5: Update `config/Resume.ts`**

Replace full file:

```ts
export const resumeConfig = {
  url: '/sushil-resume-asp.pdf',
};
```

- [ ] **Step 6: Commit all**

```bash
git add config/Meta.tsx config/CTA.tsx config/Footer.tsx config/Github.tsx config/Resume.ts
git commit -m "feat: update Meta, CTA, Footer, Github, Resume configs for aspirant op"
```

---

## Task 8: Update config/ChatPrompt.ts

**Files:**
- Modify: `config/ChatPrompt.ts`

- [ ] **Step 1: Replace full file content**

Replace `config/ChatPrompt.ts` with:

```ts
import { about } from './About';
import { experiences } from './Experience';
import { heroConfig, socialLinks } from './Hero';
import { projects } from './Projects';

function generateSystemPrompt(): string {
  const skillNames = heroConfig.skills.map((skill) => skill.name).join(', ');
  const socialLinksText = socialLinks
    .map((link) => `${link.name}: ${link.href}`)
    .join('\n- ');
  const experienceText = experiences
    .map(
      (exp) =>
        `${exp.position} at ${exp.company} (${exp.startDate} - ${exp.endDate})`,
    )
    .join('\n- ');
  const projectsText = projects
    .map(
      (project) =>
        `${project.title}: ${project.description}${project.live && project.live !== '#' ? ` - ${project.live}` : ''}`,
    )
    .join('\n- ');

  return `You are ${about.name}'s Portfolio Assistant representing ${about.name}.

ABOUT: ${about.description}

SKILLS: ${skillNames}

EXPERIENCE:
- ${experienceText}

PROJECTS:
- ${projectsText}

SOCIAL LINKS:
- ${socialLinksText}

RESPONSE RULES:
- Keep responses under 100 words
- Use markdown formatting for better readability
- Make all links clickable using markdown link syntax [text](url)
- Use **bold** for emphasis when needed
- Use bullet points (-) for lists when appropriate
- Be conversational and helpful
- Focus on Sushil's expertise and projects
- For work inquiries, direct to email: [sahanisushil325@gmail.com](mailto:sahanisushil325@gmail.com), X: [@not_aspirant](https://x.com/not_aspirant), LinkedIn: [LinkedIn](https://www.linkedin.com/in/sushil-sahani-46235527b/)
- Answer questions about technical skills, experience, and projects
- If unsure about details, suggest visiting the portfolio sections
- You are not a bot, you are a human. you are ${about.name}. you talk in first person.
- Refer ${about.name} as "Me" or "I"

Your goal: Help visitors learn about your work in a friendly, concise way.`;
}

export const systemPrompt = generateSystemPrompt();

export const chatSuggestions = [
  'What technologies do you work with?',
  'Tell me about your recent projects',
  'How can I contact you for work?',
];
```

- [ ] **Step 2: Commit**

```bash
git add config/ChatPrompt.ts
git commit -m "feat: update ChatPrompt persona to Sushil Sahani / aspirant op"
```

---

## Task 9: Verify build

- [ ] **Step 1: Run the dev build to check for TypeScript/import errors**

```bash
cd /Users/sushilsahani/devsushil/nopci-portfolio && pnpm build
```

Expected: build completes with no TypeScript errors. Warnings about missing image files (`/company/crew.png`, `/project/notewrite.png` etc.) are expected and OK — these are placeholder paths for future images.

- [ ] **Step 2: If build passes, commit final state**

```bash
git add -A
git commit -m "chore: portfolio content update complete — aspirant op (Sushil Sahani)"
```

- [ ] **Step 3: If build fails on TypeScript errors**, check the error, identify which file has the issue, and fix the import or type mismatch before re-running `pnpm build`.
