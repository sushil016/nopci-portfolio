'use client';

import { type Experience } from '@/config/Experience';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { useState } from 'react';

import Skill from '../common/Skill';
import Github from '../svgs/Github';
import LinkedIn from '../svgs/LinkedIn';
import Website from '../svgs/Website';
import X from '../svgs/X';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ExperienceCardProps {
  experience: Experience;
}

const parseDescription = (text: string): string => {
  return text.replace(/\*(.*?)\*/g, '<b>$1</b>');
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [imgError, setImgError] = useState(!experience.image);

  return (
    <div className="group space-y-5 rounded-2xl border border-border/50 bg-card p-5 transition-colors hover:border-border sm:p-6">

      {/* Header: logo + company info + dates */}
      <div className="flex gap-4">
        {/* Logo */}
        <div className="shrink-0">
          {!imgError ? (
            <Image
              src={experience.image}
              alt={experience.company}
              width={48}
              height={48}
              className="size-11 rounded-xl object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="bg-muted flex size-11 items-center justify-center rounded-xl text-sm font-bold">
              {experience.company[0]}
            </div>
          )}
        </div>

        {/* Company + role + socials */}
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3
              className={cn(
                'text-base font-semibold leading-tight',
                experience.isBlur ? 'blur-[5px]' : '',
              )}
            >
              {experience.company}
            </h3>

            {/* Social icons — small, inline */}
            <div className="flex items-center gap-1.5">
              {experience.website && experience.website !== '#' && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={experience.website} target="_blank" className="text-muted-foreground hover:text-foreground size-3.5 transition-colors">
                      <Website />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Visit Website</TooltipContent>
                </Tooltip>
              )}
              {experience.x && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={experience.x} target="_blank" className="text-muted-foreground hover:text-foreground size-3.5 transition-colors">
                      <X />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Follow on X</TooltipContent>
                </Tooltip>
              )}
              {experience.linkedin && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={experience.linkedin} target="_blank" className="text-muted-foreground hover:text-foreground size-3.5 transition-colors">
                      <LinkedIn />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
              )}
              {experience.github && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={experience.github} target="_blank" className="text-muted-foreground hover:text-foreground size-3.5 transition-colors">
                      <Github />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>GitHub</TooltipContent>
                </Tooltip>
              )}
            </div>

            {experience.isCurrent && (
              <span className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-700 dark:text-green-400">
                <span className="size-1.5 animate-pulse rounded-full bg-green-500" />
                Current
              </span>
            )}
          </div>

          {/* Position + dates row */}
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-0.5">
            <p className="text-sm text-muted-foreground">{experience.position}</p>
            <p className="text-xs text-muted-foreground tabular-nums">
              {experience.startDate} — {experience.isCurrent ? 'Present' : experience.endDate}
            </p>
          </div>

          {/* Location */}
          <p className="text-xs text-muted-foreground/70">{experience.location}</p>
        </div>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5">
        {experience.technologies.map((technology, i) => (
          <Skill key={i} name={technology.name} href={technology.href}>
            {technology.icon}
          </Skill>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-border/40" />

      {/* Description */}
      <ul className="space-y-2 text-sm text-muted-foreground">
        {experience.description.map((desc, i) => (
          <li
            key={i}
            className="flex gap-2 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: `<span class="shrink-0 select-none text-muted-foreground/40 mt-0.5">▸</span> ${parseDescription(desc)}` }}
          />
        ))}
      </ul>
    </div>
  );
}
