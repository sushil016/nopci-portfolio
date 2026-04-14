'use client';

import { navbarConfig } from '@/config/Navbar';
import { Menu, X } from 'lucide-react';
import { Link } from 'next-view-transitions';
import { useEffect, useRef, useState } from 'react';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative sm:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center rounded-md p-1.5 transition-colors hover:bg-muted"
        aria-label="Toggle navigation"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[140px] rounded-xl border border-border/60 bg-background/95 p-2 shadow-lg backdrop-blur-sm">
          <nav className="flex flex-col gap-0.5">
            {navbarConfig.navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
