import Headphones from '@/components/svgs/devices/Headphones';
import Keyboard from '@/components/svgs/devices/Keyboard';
import Laptop from '@/components/svgs/devices/Laptop';
import Monitor from '@/components/svgs/devices/Monitor';
import Mouse from '@/components/svgs/devices/Mouse';
import Phone from '@/components/svgs/devices/Phone';

export const devices = [
  {
    name: 'Apple MacBook Air 13" M4 16GB',
    icon: <Laptop className="size-4" />,
    description: 'Primary machine for all development',
  },
  {
    name: 'Acer SA272U 27" 4K Monitor',
    icon: <Monitor className="size-4" />,
    description: 'External display for focus mode',
  },
  {
    name: 'ASUS Marshmallow KW100 Bluetooth Keyboard',
    icon: <Keyboard className="size-4" />,
    description: 'Quiet, wireless, comfortable for long sessions',
  },
  {
    name: 'Kreo X1 RGB Wired Gaming Mouse',
    icon: <Mouse className="size-4" />,
    description: 'Precise and fast',
  },
  {
    name: 'CMF Earbuds Pro',
    icon: <Headphones className="size-4" />,
    description: 'Active noise cancellation for deep work',
  },
  {
    name: 'iPhone 15 128GB',
    icon: <Phone className="size-4" />,
    description: 'Testing mobile builds and staying reachable',
  },
];

export interface SoftwareTool {
  name: string;
  description: string;
  href: string;
  category?: string;
}

export const software: SoftwareTool[] = [
  {
    name: 'VS Code',
    description: 'Primary code editor. Night Owl theme, Fira Code font.',
    href: 'https://code.visualstudio.com',
  },
  {
    name: 'Claude Code',
    description: 'AI pair programmer for complex tasks and codebase navigation.',
    href: 'https://claude.ai/code',
  },
  {
    name: 'Warp',
    description: 'AI-powered terminal that actually understands commands.',
    href: 'https://www.warp.dev',
  },
  {
    name: 'TablePlus',
    description: 'Clean GUI for PostgreSQL, Redis, and MySQL databases.',
    href: 'https://tableplus.com',
  },
  {
    name: 'Postman',
    description: 'API testing and collection management.',
    href: 'https://www.postman.com',
  },
  {
    name: 'Docker Desktop',
    description: 'Container management for local dev and testing.',
    href: 'https://www.docker.com/products/docker-desktop',
  },
  {
    name: 'Figma',
    description: 'UI design, wireframing, and design system work.',
    href: 'https://www.figma.com',
  },
  {
    name: 'Notion',
    description: 'Notes, project planning, and documentation.',
    href: 'https://www.notion.so',
  },
  {
    name: 'Raycast',
    description: 'Spotlight replacement. Clipboard history, snippets, extensions.',
    href: 'https://www.raycast.com',
  },
  {
    name: 'Arc Browser',
    description: 'Main browser. Spaces for separating work and personal browsing.',
    href: 'https://arc.net',
  },
];

export interface WebExtension {
  name: string;
  description: string;
  href: string;
}

export const webExtensions: WebExtension[] = [
  {
    name: 'React Developer Tools',
    description: 'Inspect React component trees and state in the browser.',
    href: 'https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi',
  },
  {
    name: 'uBlock Origin',
    description: 'Ad and tracker blocker. Keeps browsing clean and fast.',
    href: 'https://ublockorigin.com',
  },
  {
    name: 'Wappalyzer',
    description: "Identify what tech stack any website is running.",
    href: 'https://www.wappalyzer.com',
  },
  {
    name: 'JSON Formatter',
    description: 'Auto-formats raw JSON responses in the browser tab.',
    href: 'https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa',
  },
  {
    name: 'ColorZilla',
    description: 'Eyedropper and color picker directly in the browser.',
    href: 'https://www.colorzilla.com',
  },
  {
    name: 'daily.dev',
    description: 'Developer news feed on every new tab.',
    href: 'https://daily.dev',
  },
];
