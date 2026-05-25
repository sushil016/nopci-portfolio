'use client';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { Command, SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useSyncExternalStore } from 'react';

const pages = [
  { label: 'Home | Explore landing page', href: '/', icon: '' },
  { label: 'Work Experience | View My Professional Journey', href: '/work-experience', icon: '' },
  { label: 'Projects | See My Work', href: '/projects', icon: '' },
  { label: 'Blog | Read My Thoughts', href: '/blog', icon: '' },
  { label: 'Journey | About Me', href: '/journey', icon: '' },
  { label: 'Resume | View My Professional Background', href: '/resume', icon: '' },
  { label: 'Setup | Configure Your Environment', href: '/setup', icon: '' },
  { label: 'Contact | Get In Touch', href: '/contact', icon: '' },
];

function getPlatform() {
  if (typeof navigator === 'undefined') return '';

  return navigator.platform;
}

function subscribeToPlatform() {
  return () => {};
}

export function SearchCommand({
  triggerClassName,
  label = 'Quick search',
  showShortcut = true,
}: {
  triggerClassName?: string;
  label?: string;
  showShortcut?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const platform = useSyncExternalStore(
    subscribeToPlatform,
    getPlatform,
    () => '',
  );
  const isApple = /Mac|iPad|iPhone|iPod/.test(platform);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(
          'flex items-center gap-2 rounded-md border border-input bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted',
          triggerClassName,
        )}
      >
        <SearchIcon className="size-3.5 shrink-0" />
        <span>{label}</span>
        {showShortcut && (
          <kbd className="pointer-events-none flex h-5 select-none items-center gap-0.5 rounded-[7px] border border-black/10 bg-white/55 px-1 font-mono text-[10px] font-medium text-zinc-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-zinc-300 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            {isApple ? (
              <Command className="size-2.5" aria-label="Command" />
            ) : (
              <span>Ctrl</span>
            )}
            <span>K</span>
          </kbd>
        )}
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigate">
            {pages.slice(0, 4).map((page) => (
              <CommandItem
                key={page.href}
                onSelect={() => runCommand(page.href)}
                className="cursor-pointer"
              >
                <span className="mr-2">{page.icon}</span>
                {page.label}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="More">
            {pages.slice(4).map((page) => (
              <CommandItem
                key={page.href}
                onSelect={() => runCommand(page.href)}
                className="cursor-pointer"
              >
                <span className="mr-2">{page.icon}</span>
                {page.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
