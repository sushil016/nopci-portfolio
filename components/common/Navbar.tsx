import {
  BriefcaseBusiness,
  Cog,
  Home,
  IdCard,
  Tags,
} from 'lucide-react';
import { Link } from 'next-view-transitions';

import { ModeToggle } from './ModeToggle';
import { SearchCommand } from './SearchCommand';
import { ThemeToggleButton } from './ThemeSwitch';

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
];

const rightNavItems = [
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

export default function Navbar() {
  const shellClassName =
    'pointer-events-auto flex w-full max-w-[800px] items-center gap-1.5 rounded-full border border-black/[0.1] bg-white/[0.52] p-1.5 text-zinc-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.75),inset_0_-18px_30px_rgba(0,0,0,0.035),0_18px_50px_rgba(0,0,0,0.14)] ring-1 ring-white/40 backdrop-blur-2xl dark:border-white/[0.16] dark:bg-black/[0.18] dark:text-[#bfc0c4] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-18px_30px_rgba(255,255,255,0.035),0_18px_50px_rgba(0,0,0,0.28)] dark:ring-black/10';
  const itemClassName =
    'group flex h-8 items-center gap-1 rounded-[13px] border border-black/[0.1] bg-white/[0.42] px-2.5 text-[11px] font-medium leading-none text-zinc-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.62),inset_0_-12px_20px_rgba(0,0,0,0.035)] transition duration-200 hover:border-black/15 hover:bg-white/65 hover:text-zinc-950 active:scale-[0.98] dark:border-white/[0.13] dark:bg-white/[0.045] dark:text-[#bfc0c4] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-14px_22px_rgba(255,255,255,0.032)] dark:hover:border-white/25 dark:hover:bg-white/[0.09] dark:hover:text-white';
  const iconClassName =
    'size-3.5 stroke-[2.05] text-zinc-600 transition group-hover:text-zinc-950 dark:text-[#d4d4d7] dark:group-hover:text-white';
  const dividerClassName = 'h-6 w-px bg-black/[0.1] dark:bg-white/[0.13]';

  return (
    <header className="pointer-events-none sticky top-0 z-40 flex h-16 items-start justify-center px-4 pt-3">
      <nav
        aria-label="Primary navigation"
        className={shellClassName}
      >
        <Link
          href="/"
          aria-label="Home"
          className="group flex size-8 shrink-0 items-center justify-center rounded-full border border-black/[0.1] bg-white/[0.42] text-zinc-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.62),inset_0_-12px_20px_rgba(0,0,0,0.035)] transition duration-200 hover:border-black/15 hover:bg-white/65 hover:text-zinc-950 active:scale-95 dark:border-white/[0.13] dark:bg-white/[0.045] dark:text-[#e1e1e5] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.13),inset_0_-12px_20px_rgba(255,255,255,0.035)] dark:hover:border-white/25 dark:hover:bg-white/[0.09] dark:hover:text-white"
        >
          <Home className="size-4 stroke-[2.15]" />
        </Link>

        <div className={dividerClassName} />

        <div className="flex min-w-0 flex-1 items-center justify-center gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                className={itemClassName}
                key={item.label}
                href={item.href}
              >
                <Icon className={iconClassName} />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <ModeToggle variant="nav" />
          {rightNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                className={itemClassName}
                key={item.label}
                href={item.href}
              >
                <Icon className={iconClassName} />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <SearchCommand
            label="Quick Search"
            triggerClassName={`${itemClassName} [&_svg]:size-3.5 [&_svg]:text-zinc-600 dark:[&_svg]:text-[#d4d4d7]`}
          />
        </div>

        <div className={dividerClassName} />

        <ThemeToggleButton
          icon="moon"
          variant="circle"
          start="top-right"
          blur
          className="size-8 shrink-0 rounded-full border border-black/[0.1] bg-white/[0.42] p-0 text-zinc-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.62),inset_0_-12px_20px_rgba(0,0,0,0.035)] hover:border-black/15 hover:bg-white/65 hover:text-zinc-950 dark:border-white/[0.13] dark:bg-white/[0.045] dark:text-[#e3e3e6] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-14px_22px_rgba(255,255,255,0.032)] dark:hover:border-white/25 dark:hover:bg-white/[0.09] dark:hover:text-white"
          iconClassName="size-4"
        />
      </nav>
    </header>
  );
}
