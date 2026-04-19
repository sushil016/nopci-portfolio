'use client';

import { projects } from '@/config/Projects';
import { roboticsProjects } from '@/config/ProjectsRobotics';
import { clientProjects } from '@/config/ClientProjects';
import { useMode } from '@/hooks/ModeContext';
import { Link } from 'next-view-transitions';
import { useState } from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ClientProjectCard } from '../projects/ClientProjectCard';
import { ProjectList } from '../projects/ProjectList';
import { Button } from '../ui/button';

type ProjectTab = 'personal' | 'client';

export default function Projects() {
  const { mode } = useMode();
  const [tab, setTab] = useState<ProjectTab>('personal');

  const personalProjects = mode === 'robotics' ? roboticsProjects : projects;

  return (
    <Container className="mt-20">
      <div className="flex items-end justify-between flex-wrap gap-4">
        <SectionHeading subHeading="Featured" heading="Projects" />

        {/* Personal / Client toggle */}
        <div className="flex items-center gap-0.5 rounded-full border border-border bg-muted/40 p-1">
          <button
            onClick={() => setTab('personal')}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${
              tab === 'personal'
                ? 'bg-foreground text-background shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Personal
          </button>
          <button
            onClick={() => setTab('client')}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${
              tab === 'client'
                ? 'bg-foreground text-background shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Client
          </button>
        </div>
      </div>

      {tab === 'personal' ? (
        <>
          <ProjectList className="mt-8" projects={personalProjects.slice(0, 4)} />
          <div className="mt-8 flex justify-center">
            <Button variant="outline">
              <Link href="/projects">Show all projects</Link>
            </Button>
          </div>
        </>
      ) : (
        <div className="mt-8 flex flex-col gap-6">
          {clientProjects.map((project) => (
            <ClientProjectCard key={project.title} project={project} />
          ))}
          {clientProjects.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-8">
              Client projects coming soon.
            </p>
          )}
        </div>
      )}
    </Container>
  );
}
