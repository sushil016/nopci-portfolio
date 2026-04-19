import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

interface CaseStudy {
  title: string;
  client: string;
  location: string;
  image: string;
  tech: string[];
  website: string;
  sections: { number: string; title: string; body: string }[];
}

const caseStudies: Record<string, CaseStudy> = {
  'jain-and-iyer': {
    title: 'Designing a Dual-Model E-commerce Platform for Individuals & Residential Societies',
    client: 'Jain & Iyer',
    location: 'Parel, Mumbai',
    image: '/jainiyer.webp',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Razorpay', 'Tailwind CSS', 'META API', 'GCP'],
    website: '#',
    sections: [
      {
        number: '01',
        title: 'Problem Statement',
        body: 'Traditional e-commerce platforms are not built for recurring household needs or society-based ordering. Jain & Iyer required a system that could support both instant individual purchases and scheduled society-level ordering with grouped society-wise deliveries as per schedule, while maintaining efficiency, automation, and full administrative control—without relying on slow or rigid off-the-shelf solutions.',
      },
      {
        number: '02',
        title: 'Understanding the Business Reality',
        body: 'Jain & Iyer is a high-end e-commerce brand and manufacturer of authentic food batters (Idli, Dosa, Vada), flours, and instant pre-mixes. All products are preservatives and chemical free. The business operates in two distinct ways: individual customers who order anytime, and residential societies that prefer fixed weekly delivery schedules. The real challenge was translating these real-world buying behaviors into a single, scalable digital platform.',
      },
      {
        number: '03',
        title: 'Defining the Dual Ordering Model',
        body: 'To keep the system clear and scalable, the platform was designed around two independent ordering models:\n\nIndividual Model: Customers can place orders anytime with standard doorstep delivery.\n\nSociety Model: Orders are placed under a society with predefined delivery days (1–2 days per week), enabling group benefits and coordinated deliveries.',
      },
      {
        number: '04',
        title: 'Planning Before Designing',
        body: 'Before starting UI design, the entire business logic was mapped out:\n\n• Each society has specific delivery days and cut-off times\n• Orders placed after the cut-off automatically move to the next valid delivery date\n• Admins must be able to override schedules without affecting existing orders\n• Society orders must be grouped for delivery efficiency',
      },
      {
        number: '05',
        title: 'UX Strategy & Wireframing',
        body: 'User journeys were designed separately for individual buyers, society buyers, and admins. The UX focus was on clarity, speed, and repeat usage.\n\n• Clear separation between society and individual ordering\n• Mobile-first design for frequent customers\n• Minimal checkout steps for recurring orders\n• Transparent communication of delivery dates and scheduling',
      },
      {
        number: '06',
        title: 'Automated Delivery Scheduling System',
        body: 'The core innovation of the platform is its automated delivery engine. The system dynamically validates delivery availability based on society rules and automatically reschedules orders placed outside allowed windows. Orders are grouped society-wise to simplify delivery planning and reduce operational effort.\n\nThis automation removes manual coordination while keeping the system flexible.',
      },
      {
        number: '07',
        title: 'Admin Control & Multi-Role Access',
        body: 'The platform includes a robust admin system with multi-role access.\n\nAdmins can:\n• Create and manage societies\n• Define delivery days and cut-off times\n• Override delivery schedules when required\n• Manage inventory and products\n• View and process society-wise grouped orders',
      },
      {
        number: '08',
        title: 'Technology & Performance Focus',
        body: 'The platform was built with performance and scalability in mind.\n\nFrontend: Next.js\nBackend: Node.js\nDatabase: PostgreSQL\nPayments: Razorpay\nStyling: Tailwind CSS\nSMS/Notifications: META API\nHosting: Google Cloud Platform (GCP)',
      },
      {
        number: '09',
        title: 'Outcome & Impact',
        body: 'The final system enables effortless recurring ordering for both individuals and residential societies. It reduces operational complexity, improves delivery efficiency, and provides a scalable foundation for future growth.\n\nThis project demonstrates the ability to translate complex business rules into a clean, high-performance, production-ready full-stack solution.',
      },
    ],
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function ClientCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) notFound();

  return (
    <Container className="py-16">
      <div className="space-y-10">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to portfolio
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest">
            <span>Client Work</span>
            <span>·</span>
            <span>{study.client}</span>
            <span>·</span>
            <span>{study.location}</span>
          </div>
          <h1 className="text-2xl font-bold leading-tight sm:text-3xl">
            {study.title}
          </h1>
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 pt-1">
            {study.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border/60 bg-muted/20 px-2.5 py-0.5 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <Separator />

        {/* Hero image */}
        <div className="relative aspect-[16/7] w-full overflow-hidden rounded-xl border border-border/40">
          <Image
            src={study.image}
            alt={study.client}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Case study sections */}
        <div className="space-y-12">
          {study.sections.map((section) => (
            <div key={section.number} className="space-y-3">
              <div className="flex items-start gap-4">
                <span className="text-[#909092] font-mono text-sm shrink-0 mt-0.5">
                  #{section.number}
                </span>
                <div className="space-y-3">
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                  <div className="space-y-2">
                    {section.body.split('\n').filter(Boolean).map((line, i) => (
                      <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <Separator className="mt-8 opacity-40" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-xl border border-dashed border-border/60 p-8 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            Interested in working together on a similar project?
          </p>
          <a
            href="mailto:sahanisushil325@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-foreground text-background px-6 py-2.5 text-sm font-medium transition-colors hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </div>
    </Container>
  );
}
