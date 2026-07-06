'use client';

import {
  BriefcaseBusiness,
  Cog,
  IdCard,
  Menu,
  Tags,
  X,
} from 'lucide-react';
import { Link } from 'next-view-transitions';
import { useEffect, useRef, useState } from 'react';

const navItems = [
  {
    label: 'About',
    href: '/journey',
    icon: Tags,
  },
  {
    label: 'Work',
    href: '/work-experience',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Gears',
    href: '/gears',
    icon: Cog,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: IdCard,
  },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div ref={ref} className="relative md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Toggle navigation"
        className="flex size-8 items-center justify-center rounded-full border border-black/[0.1] bg-white/[0.42] text-zinc-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.62),inset_0_-12px_20px_rgba(0,0,0,0.035)] transition-colors hover:border-black/15 hover:bg-white/65 hover:text-zinc-950 dark:border-white/[0.13] dark:bg-white/[0.045] dark:text-[#e3e3e6] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-14px_22px_rgba(255,255,255,0.032)] dark:hover:border-white/25 dark:hover:bg-white/[0.09] dark:hover:text-white"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[180px] rounded-2xl border border-black/[0.08] bg-white/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl dark:border-white/[0.12] dark:bg-black/85">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-black/[0.04] hover:text-zinc-950 dark:text-[#d4d4d7] dark:hover:bg-white/[0.08] dark:hover:text-white"
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
