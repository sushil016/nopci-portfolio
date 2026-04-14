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
import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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

export function SearchCommand() {
  const [open, setOpen] = useState(false);
  const [isMac, setIsMac] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsMac(/Mac|iPad|iPhone|iPod/.test(navigator.platform));
  }, []);

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
        className="flex items-center gap-2 rounded-md border border-input bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted"
      >
        <SearchIcon className="size-3.5 shrink-0" />
        <span className="hidden sm:inline">Quick search</span>
        <kbd className="pointer-events-none hidden select-none items-center gap-1 rounded border bg-background px-1.5 py-0.5 font-mono text-xs sm:flex">
          {isMac ? '⌘' : 'Ctrl'} K
        </kbd>
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
