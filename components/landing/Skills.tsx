'use client';

import { skillsRow1, skillsRow2, type Skill } from '@/config/Skills';
import { roboticsSkillsRow1, roboticsSkillsRow2 } from '@/config/SkillsRobotics';
import { useMode } from '@/hooks/ModeContext';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={skill.href}
          target="_blank"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-border/60 bg-muted/20 px-3 py-2 text-sm font-medium transition-colors hover:border-border hover:bg-muted/60"
        >
          <span className="size-5 shrink-0">{skill.icon}</span>
          <span className="text-foreground/80">{skill.name}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent>{skill.name}</TooltipContent>
    </Tooltip>
  );
}

const marqueeStyle = (reverse: boolean): React.CSSProperties => ({
  display: 'flex',
  gap: '0.75rem',
  width: 'max-content',
  animation: `${reverse ? 'marquee-right' : 'marquee-left'} 30s linear infinite`,
});

function MarqueeRow({ skills, reverse }: { skills: Skill[]; reverse?: boolean }) {
  const doubled = [...skills, ...skills];
  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16"
        style={{ background: 'linear-gradient(to right, var(--background), transparent)' }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16"
        style={{ background: 'linear-gradient(to left, var(--background), transparent)' }}
      />
      <div style={marqueeStyle(!!reverse)}>
        {doubled.map((skill, i) => (
          <SkillPill key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { mode } = useMode();
  const isRobotics = mode === 'robotics';
  const row1 = isRobotics ? roboticsSkillsRow1 : skillsRow1;
  const row2 = isRobotics ? roboticsSkillsRow2 : skillsRow2;

  return (
    <Container className="mt-20">
      <SectionHeading
        subHeading="What I use"
        heading={isRobotics ? 'Robotics Stack' : 'Tech Stack'}
      />
      <p className="text-muted-foreground mt-2 text-sm">
        {isRobotics
          ? 'Hardware, frameworks, and tools I use for autonomous systems and robotics.'
          : 'Languages, frameworks, databases, and infrastructure I work with.'}
      </p>

      <div className="mt-6 flex flex-col gap-3">
        <MarqueeRow skills={row1} />
        <MarqueeRow skills={row2} reverse />
      </div>
    </Container>
  );
}
