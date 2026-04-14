# Portfolio Content Update — aspirant op (Sushil Sahani)

**Date:** 2026-04-14  
**Status:** Approved  
**Original template owner:** Ram / ramxcodes (Ramkrishna Swarnkar)  
**New owner:** Sushil Sahani / aspirant op

---

## Goal

Replace all personal content in this Next.js portfolio template (originally by ramxcodes) with Sushil Sahani's information. Also create missing SVG and technology icon components needed for the new content.

---

## Personal Info

| Field | Value |
|-------|-------|
| Display name | Sushil Sahani |
| Handle / brand | aspirant op |
| GitHub username | sushil016 |
| Email | sahanisushil325@gmail.com |
| Location | Mumbai, Maharashtra |
| Profile summary | Full stack developer, expertise in Cloud, DevOps and AI Infrastructure. Building and Deploying Scalable Application. |
| Resume file | `/public/sushil-resume-asp.pdf` |

---

## Social Links

| Platform | URL |
|----------|-----|
| GitHub | https://github.com/sushil016 |
| LinkedIn | https://www.linkedin.com/in/sushil-sahani-46235527b/ |
| X (Twitter) | https://x.com/not_aspirant |
| Discord | https://discord.com/users/sushilz16 |
| YouTube | https://www.youtube.com/channel/UCKhgnThKZcPt6Nw2oPJm6tg |
| Email | mailto:sahanisushil325@gmail.com |

---

## Section 1 — Config File Changes

### config/Hero.tsx
- `name`: `'Sushil Sahani'`
- `title`: `'A Full Stack Developer & Cloud/DevOps Engineer.'`
- `avatar`: `/assets/logo.png` (unchanged until layout overhaul)
- `skills`: TypeScript, React, Next.js, Node.js, PostgreSQL (existing components)
- `description.template`: `"Full stack developer, expertise in <b>Cloud</b>, <b>DevOps</b> and <b>AI Infrastructure</b>. Building and Deploying Scalable Application."` (exact text from resume, no {skills:X} inline — skills shown via the skills icon row above)
- `socialLinks`: GitHub (sushil016), LinkedIn, X (@not_aspirant), Email, Discord (new), YouTube (new)

### config/About.tsx
- `name`: `'Sushil Sahani'`
- `description`: `"I'm a Full Stack Developer with expertise in Cloud, DevOps and AI Infrastructure. I build and deploy scalable applications on Azure and GCP using Kubernetes and Docker."`

### config/Experience.tsx
Replace all 5 existing experiences with 2 from resume:

**1. CREW — SWE Intern** (January 2025 – Present)
- Location: Remote — Sydney, Australia
- `isCurrent: true`
- Description bullets (5):
  1. Deployed Azure Application Gateway with Load Balancer using Docker and Kubernetes, improving routing, SSL handling, and reliability of production traffic.
  2. Migrated production PostgreSQL database from GCP to Azure Flexible Server, achieving zero downtime and a noticeable boost in performance.
  3. Handled microservices deployment on Azure and GCP with Kubernetes, Redis, and Kafka, optimizing scalability and reducing service latency.
  4. Built CI/CD pipelines with GitLab CI and ArgoCD, with Auto migration of SQL Queries in production DB, automating testing, deployment, and rollback for faster, error-free releases.
  5. Secured production secrets using Azure Key Vault, ensuring compliance and smooth integration across Azure, GCP, GitLab CI and GitHub Actions workflows.
- Tech icons: Docker, Kubernetes, Azure, GCP, Redis, Kafka, ArgoCD, PostgreSQL
- `website`: `'#'`, `image`: `/company/crew.png` (placeholder path)

**2. IIT Bombay — Full-Stack Intern** (Oct 2024 – January 2025)
- Location: On-Site — IITB
- `isCurrent: false`
- Description bullets (3):
  1. Developed a comprehensive Procurement Management System for the Aerospace Department at IIT Bombay, serving administrators and project staff involved in research projects.
  2. Built responsive React.js application with TypeScript.
  3. Designed comprehensive PostgreSQL database schema.
- Tech icons: ReactIcon, TypeScript, NodeJs, ExpressJs, PostgreSQL, Prisma, Docker
- `website`: `'https://iitb.ac.in'`, `image`: `/company/iitb.png` (placeholder path)

### config/Projects.tsx
Replace all 12 existing projects with 2 from resume:

**1. Notewrite**
- Description: Full-stack education platform managing 15+ engineering courses with automated content management system for educational resources and study materials.
- Tech: Next.js, TypeScript, React, Node.js, PostgreSQL, Prisma
- `github`: `'#'` (placeholder)
- `live`: `'#'` (placeholder)
- `isWorking`: true

**2. Content Moderation Pipeline**
- Description: Scalable moderation API using Google Cloud Vision for fast screening and Anthropic Claude for context-aware analysis, with smart escalation reducing LLM usage by ~85%.
- Tech: React, Node.js, Express.js, GCP, TypeScript
- `github`: `'#'` (placeholder)
- `live`: `'#'` (placeholder)
- `isWorking`: true

### config/Meta.tsx
- `author.twitter`: `'@not_aspirant'`
- `author.github`: `'sushil016'`
- `author.linkedin`: `'sushil-sahani-46235527b'`
- `author.email`: `'sahanisushil325@gmail.com'`
- `description`: Remove "Sleek Portfolio Template by @Ramxcodes" references

### config/CTA.tsx
- `calLink`: `'#'` (placeholder until Cal.com account set up)
- `profileAlt`: `'Sushil Sahani'`

### config/Footer.tsx
- `developer`: `'aspirant op'`

### config/Github.tsx
- `username`: `'sushil016'`

### config/Resume.ts
- `url`: `'/sushil-resume-asp.pdf'`

### config/ChatPrompt.ts
- Update all references from Ram/ramxcodes to Sushil Sahani
- Update contact email to `sahanisushil325@gmail.com`
- Update social links to Sushil's

---

## Section 2 — New SVG Components

Two new files in `components/svgs/`, following the pattern of existing `X.tsx`, `Github.tsx`:

| File | Notes |
|------|-------|
| `components/svgs/Discord.tsx` | Discord blurple (#5865F2) logo SVG |
| `components/svgs/YouTube.tsx` | YouTube red (#FF0000) play-button logo SVG |

Both accept `className?: string` prop, render as `<svg>` with `width="20" height="20"` default, matching existing icon size.

---

## Section 3 — New Technology Icon Components

Nine new files in `components/technologies/`, each following the exact pattern of existing ones (e.g. `TypeScript.tsx` — accepts `className?: string`, renders branded SVG):

| File | Brand color | Used in |
|------|------------|---------|
| `Docker.tsx` | #2496ED | CREW, IIT Bombay |
| `Kubernetes.tsx` | #326CE5 | CREW |
| `Azure.tsx` | #0078D4 | CREW |
| `GCP.tsx` | #4285F4 | CREW, Content Moderation project |
| `Redis.tsx` | #DC382D | CREW |
| `Kafka.tsx` | #231F20 / white | CREW |
| `ArgoCD.tsx` | #EF7B4D | CREW |
| `Grafana.tsx` | #F46800 | Resume skills |
| `Helm.tsx` | #0F1689 | Resume skills |

Each component also gets registered in `heroConfig.skillComponents` map in `Hero.tsx`.

---

## What is NOT changing (scope boundary)

- Layout, UI, animations — deferred to future overhaul
- Blog posts / data files in `data/` — not touched
- `config/Journey.tsx`, `config/Achievements.tsx`, `config/Gears.tsx`, `config/Setup.tsx` — not touched
- Public assets (logo, company images) — placeholder paths used; real images added later
- Cal.com booking link — left as `'#'` placeholder

---

## Implementation Order

1. Create 9 technology icon components
2. Create 2 SVG social icon components
3. Update `config/Hero.tsx` (depends on new components)
4. Update `config/About.tsx`
5. Update `config/Experience.tsx` (depends on new tech components)
6. Update `config/Projects.tsx`
7. Update `config/Meta.tsx`
8. Update `config/CTA.tsx`, `config/Footer.tsx`, `config/Github.tsx`, `config/Resume.ts`
9. Update `config/ChatPrompt.ts` (depends on all other configs)
