import { navbarConfig } from '@/config/Navbar';
import { Link } from 'next-view-transitions';

import Container from './Container';
import MobileMenu from './MobileMenu';
import { ModeToggle } from './ModeToggle';
import { SearchCommand } from './SearchCommand';
import { ThemeToggleButton } from './ThemeSwitch';

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between px-3 sm:px-6">
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className="font-bold text-sm tracking-tight transition-opacity hover:opacity-70"
          >
            Home
          </Link>
          <div className="hidden sm:flex items-center justify-center gap-4">
            {navbarConfig.navItems.map((item) => (
              <Link
                className="text-sm transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
                key={item.label}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <ModeToggle />
          <SearchCommand />
          <ThemeToggleButton variant="circle" start="top-right" blur />
          <MobileMenu />
        </div>
      </div>
    </Container>
  );
}
