import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

const docs = [
  {
    emoji: '',
    title: 'ROS2 Setup & Concepts',
    description:
      'Deep dive into Robot Operating System 2 — nodes, topics, services, actions, and DDS communication explained from a developer perspective.',
    tags: ['Robotics', 'ROS2', 'Systems'],
    href: '/blog',
  },
  {
    emoji: '',
    title: 'Building Projects with ROS 2',
    description:
      'Hands-on guide to building real robotics projects — from workspace setup and package creation to deploying nodes on hardware.',
    tags: ['ROS2', 'Project', 'Robotics'],
    href: '/blog',
  },
  {
    emoji: '',
    title: 'Building Autonomous Kamikaze Drones with ROS2',
    description:
      'Designing, programming, and flying autonomous drones — covering flight controllers, PID tuning, sensor fusion, and mission planning.',
    tags: ['Drone', 'Embedded', 'Autonomy'],
    href: '/blog',
  },
  {
    emoji: '',
    title: 'ROS2 Integration with Cloud Services',
    description:
      'Learn how to integrate ROS2 with cloud platforms for remote monitoring, data processing, and collaborative robotics.',
    tags: ['ROS2', 'Cloud', 'Integration'],
    href: '/blog',
  },
  {
    emoji: '',
    title: 'Building Developer Tools of Robotics',
    description:
      'How to craft CLIs, build automation scripts, and create tools that supercharge developer workflows and save hours of repetitive work.',
    tags: ['CLI', 'Tooling', 'DX'],
    href: '/blog',
  },
  {
    emoji: '',
    title: 'VS Code Extension Development',
    description:
      'From zero to published — building, packaging, and shipping VS Code extensions with the Extension API and TypeScript.',
    tags: ['VS Code', 'Extension', 'TypeScript'],
    href: '/blog',
  },
];

export default function DevDocs() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Dev Writing" heading="Documentation & Deep Dives" />
      <p className="text-muted-foreground mt-2 text-sm">
        Technical explorations I&apos;m writing — software, robotics, developer tooling, and systems engineering.
      </p>

      <div className="mt-6 flex flex-col gap-2">
        {docs.map((doc) => (
          <Link
            key={doc.title}
            href={doc.href}
            className="group flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-muted/10 px-5 py-3.5 transition-all duration-200 hover:border-border hover:bg-muted/30"
          >
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-lg shrink-0">{doc.emoji}</span>
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate transition-colors group-hover:text-primary">
                  {doc.title}
                </p>
                <div className="flex flex-wrap gap-1 mt-0.5">
                  {doc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-primary/10 px-1.5 py-px text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <span className="shrink-0 rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
              Writing
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
