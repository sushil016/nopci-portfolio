'use client';

import { type ClientProject } from '@/config/ClientProjects';
import Image from 'next/image';
import { Link } from 'next-view-transitions';
import { useState } from 'react';

function LocationIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

interface ClientProjectCardProps {
  project: ClientProject;
}

export function ClientProjectCard({ project }: ClientProjectCardProps) {
  const [imgError, setImgError] = useState(!project.image);

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border/60 p-4 transition-all duration-300 hover:border-border hover:shadow-sm">
      {/* Image */}
      <div className="relative aspect-[16/7] w-full overflow-hidden rounded-lg border border-border/40 bg-muted/20">
        {!imgError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-4xl font-bold text-muted-foreground/20">
              {project.title[0]}
            </span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-border/60 bg-muted/20 px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <LocationIcon />
        <span>{project.location}</span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        {project.website && project.website !== '#' && (
          <Link
            href={project.website}
            target="_blank"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border/60 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <ExternalIcon />
            Visit website
          </Link>
        )}
        <Link
          href={`/client-work/${project.caseStudySlug}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border/60 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          <FileIcon />
          Case study of client
        </Link>
      </div>
    </div>
  );
}
