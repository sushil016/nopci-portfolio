import { clientProjects } from '@/config/ClientProjects';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { ClientProjectCard } from '../projects/ClientProjectCard';

export default function ClientProjects() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Freelance & Contract" heading="Client Projects" />

      <div className="mt-8 flex flex-col gap-6">
        {clientProjects.map((project) => (
          <ClientProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Container>
  );
}
