import { type Experience, experiences } from '@/config/Experience';
import { ExperienceCardCompact } from '@/components/experience/ExperienceCardCompact';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { Button } from '../ui/button';

export default function Experience() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Featured" heading="Experience" />
      <div className="mt-4 flex flex-col gap-4">
        {experiences.slice(0, 2).map((experience: Experience) => (
          <ExperienceCardCompact key={experience.company} experience={experience} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Link href="/work-experience">View full experience</Link>
        </Button>
      </div>
    </Container>
  );
}
