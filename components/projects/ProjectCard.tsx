'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { type Project } from '@/types/project';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React, { useState } from 'react';

import Github from '../svgs/Github';
import PlayCircle from '../svgs/PlayCircle';
import Website from '../svgs/Website';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [imgError, setImgError] = useState<boolean>(!project.image);
  const [hovered, setHovered] = useState(false);

  return (
    <Card className="group flex h-full w-full flex-col border-border/60 p-0 shadow-none transition-all duration-300 hover:border-border hover:shadow-sm dark:border-gray-800">
      {/* Image with bottom-right hinge rotation on hover */}
      <CardHeader className="p-0">
        <div
          className="relative aspect-video overflow-hidden rounded-t-xl"
          style={{
            transformOrigin: 'bottom right',
            transform: hovered
              ? 'perspective(700px) rotateX(3deg) rotateY(-5deg) translateY(-6px)'
              : 'perspective(700px) rotateX(0deg) rotateY(0deg) translateY(0px)',
            transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {!imgError ? (
            <Image
              className="h-full w-full object-cover"
              src={project.image}
              alt={project.title}
              width={1920}
              height={1080}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="from-primary/10 to-muted flex h-full w-full items-center justify-center bg-gradient-to-br">
              <span className="text-muted-foreground text-4xl font-bold opacity-20">
                {project.title[0]}
              </span>
            </div>
          )}

          {project.video && (
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button className="flex size-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30">
                    <PlayCircle />
                  </button>
                </div>
              </DialogTrigger>
              <DialogContent className="w-full max-w-4xl border-0 p-0">
                <div className="aspect-video w-full">
                  <video
                    className="h-full w-full rounded-lg object-cover"
                    src={project.video}
                    autoPlay
                    loop
                    controls
                  />
                </div>
                <DialogTitle className="sr-only">{project.title}</DialogTitle>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="flex flex-1 flex-col gap-3 px-5 pt-4 pb-0">
        {/* Title */}
        <Link href={project.projectDetailsPageSlug} className="min-w-0">
          <h3 className="group-hover:text-primary text-base font-semibold leading-tight transition-colors sm:text-lg">
            {project.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
          {project.description}
        </p>
      </CardContent>

      {/* Footer: tech pills + action buttons */}
      <CardFooter className="flex flex-col items-start gap-3 px-5 pt-3 pb-5">
        {/* Tech name pills */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="rounded-md border border-border/60 bg-muted/20 px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          {project.link && project.link !== '#' && (
            <Link
              href={project.link}
              target="_blank"
              className="flex items-center gap-1.5 rounded-md border border-border/60 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
            >
              <Website className="size-3.5" />
              Website
            </Link>
          )}
          {project.github && project.github !== '#' && (
            <Link
              href={project.github}
              target="_blank"
              className="flex items-center gap-1.5 rounded-md border border-border/60 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
            >
              <Github className="size-3.5" />
              Source
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
