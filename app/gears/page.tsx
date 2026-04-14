import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { devices } from '@/config/Gears';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  ...getMetadata('/gears'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function GearsPage() {
  return (
    <Container className="py-16">
      <div className="space-y-10">

        {/* Header */}
        <div className="space-y-3 text-center">
          <h1 className="text-2xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Gears
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base sm:text-lg">
            The hardware I rely on daily to build, ship, and stay productive.
          </p>
        </div>

        <Separator />

        {/* Devices */}
        <section className="space-y-5">
          <h2 className="text-xl font-semibold">Hardware</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {devices.map((device) => (
              <div
                key={device.name}
                className="flex items-start gap-4 rounded-xl border border-border/60 bg-muted/10 px-4 py-3 transition-colors hover:bg-muted/20"
              >
                <div className="bg-muted mt-0.5 flex shrink-0 items-center justify-center rounded-md border border-border/60 p-2 text-muted-foreground">
                  {device.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-snug">{device.name}</p>
                  <p className="text-muted-foreground mt-0.5 text-xs leading-relaxed">
                    {device.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </Container>
  );
}
