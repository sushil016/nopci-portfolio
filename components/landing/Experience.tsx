import { type Experience, experiences } from '@/config/Experience';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Button } from '../ui/button';

function formatDateRange(startDate: string, endDate: string, isCurrent: boolean) {
  return `${startDate} — ${isCurrent ? 'Present' : endDate}`;
}

export default function Experience() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Experience" />

      <div className="mt-8 relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/60" />

        <div className="flex flex-col gap-0">
          {experiences.map((exp: Experience, idx: number) => (
            <div key={exp.company} className="relative flex gap-5 pb-8 last:pb-0">
              {/* Dot */}
              <div className="relative z-10 mt-[5px] flex-shrink-0">
                <div
                  className={`size-[15px] rounded-full border-2 ${
                    exp.isCurrent
                      ? 'border-foreground bg-foreground'
                      : 'border-border bg-background'
                  }`}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pt-0">
                {/* Date + badge */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-muted-foreground tracking-wide">
                    {formatDateRange(exp.startDate, exp.endDate, exp.isCurrent)}
                  </span>
                  {exp.isCurrent && (
                    <span className="inline-flex items-center rounded-sm border border-foreground/20 bg-foreground/5 px-1.5 py-px text-[10px] font-medium uppercase tracking-widest text-foreground/60">
                      Current
                    </span>
                  )}
                </div>

                {/* Role at Company */}
                <h3 className="text-sm font-semibold leading-snug">
                  {exp.position}{' '}
                  <span className="text-muted-foreground font-normal">at</span>{' '}
                  {exp.company}
                </h3>

                {/* First bullet as summary */}
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {exp.description[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/work-experience">View full experience</Link>
        </Button>
      </div>
    </Container>
  );
}
