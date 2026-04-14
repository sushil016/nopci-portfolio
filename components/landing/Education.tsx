import { educationList, type Education } from '@/config/Education';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

function EducationCard({ edu }: { edu: Education }) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-border/60 bg-muted/10 px-5 py-3.5 transition-colors hover:border-border hover:bg-muted/20 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <div className="flex flex-col gap-0.5">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-semibold">{edu.institution}</h3>
          {edu.isCurrent && (
            <span className="flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-0.5 text-xs text-blue-600 dark:text-blue-400">
              <span className="size-1.5 animate-pulse rounded-full bg-blue-500" />
              Ongoing
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground">
          {edu.degree} · {edu.field}
        </p>
      </div>

      <div className="shrink-0 text-xs text-muted-foreground sm:text-right">
        <p>{edu.startDate} — {edu.isCurrent ? 'Expected ' + edu.endDate : edu.endDate}</p>
        <p>{edu.location}</p>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Academic" heading="Education" />
      <div className="mt-4 flex flex-col gap-4">
        {educationList.map((edu) => (
          <EducationCard key={edu.institution} edu={edu} />
        ))}
      </div>
    </Container>
  );
}
