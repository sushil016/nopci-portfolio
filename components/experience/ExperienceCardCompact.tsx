'use client';

import { type Experience } from '@/config/Experience';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { Link } from 'next-view-transitions';
import { useState } from 'react';

import Skill from '../common/Skill';

interface ExperienceCardCompactProps {
  experience: Experience;
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

export function ExperienceCardCompact({ experience }: ExperienceCardCompactProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-border/60 transition-colors hover:border-border">
      {/* Compact header — always visible, click to expand */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 p-4 text-left transition-colors hover:bg-muted/20"
      >
        {/* Left: company + badge (+ position/location on sm+) */}
        <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
          <span className={cn('font-semibold', experience.isBlur ? 'blur-[5px]' : '')}>
            {experience.company}
          </span>

          {experience.isCurrent && (
            <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-xs">
              <span className="size-1.5 animate-pulse rounded-full bg-green-500" />
              Current
            </span>
          )}

          <span className="text-muted-foreground hidden sm:inline text-sm">·</span>
          <span className="hidden sm:inline text-sm">{experience.position}</span>
          <span className="text-muted-foreground hidden md:inline text-sm">·</span>
          <span className="text-muted-foreground hidden md:inline text-xs">
            {experience.location}
          </span>
        </div>

        {/* Right: dates (hidden on mobile) + chevron */}
        <div className="flex shrink-0 items-center gap-2">
          <span className="text-muted-foreground hidden sm:block whitespace-nowrap text-xs">
            {experience.startDate} — {experience.isCurrent ? 'Present' : experience.endDate}
          </span>
          <ChevronDown
            className={cn(
              'size-4 text-muted-foreground transition-transform duration-200',
              open && 'rotate-180',
            )}
          />
        </div>
      </button>

      {/* Expandable full details */}
      {open && (
        <div className="space-y-4 border-t border-border/40 px-4 pb-5 pt-4">
          {/* Mobile-only: position, dates, location */}
          <div className="sm:hidden space-y-0.5">
            <p className="text-sm font-medium">{experience.position}</p>
            <p className="text-muted-foreground text-xs">
              {experience.startDate} — {experience.isCurrent ? 'Present' : experience.endDate}
            </p>
            <p className="text-muted-foreground text-xs">{experience.location}</p>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="mb-2 text-sm font-medium">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <Skill key={i} name={tech.name} href={tech.href}>
                  {tech.icon}
                </Skill>
              ))}
            </div>
          </div>

          {/* Full description bullets */}
          <div className="text-muted-foreground flex flex-col gap-1.5 text-sm">
            {experience.description.map((desc, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{ __html: `• ${parseDescription(desc)}` }}
              />
            ))}
          </div>

          {/* Website link */}
          {experience.website && experience.website !== '#' && (
            <Link
              href={experience.website}
              target="_blank"
              className="text-primary text-xs hover:underline"
            >
              Visit {experience.company} →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
