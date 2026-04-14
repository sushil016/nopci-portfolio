'use client';

import { useEffect, useRef, useState } from 'react';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

const PROMPT = 'aspirant@portfolio:~$';
const PROMPT_SHORT = '~$';

const COMMANDS: Record<string, () => string> = {
  help: () =>
    `Available commands:
  whoami      — About Sushil
  skills      — Tech stack
  experience  — Work history
  projects    — Notable projects
  contact     — Get in touch
  clear       — Clear terminal

  Try: ros launch drone.launch`,

  whoami: () =>
    `Sushil Sahani — aspirant op

  Full-stack developer & robotics engineer.
  Building developer tools, autonomous systems, and AI-powered apps.

  Currently:
    ↳ SWE Intern @ CREW (Sydney, AU)
    ↳ Co-founder & Tech Lead @ Robomaniac
    ↳ Vice President @ BVCOE Innovation & Robotics Lab`,

  skills: () =>
    `Tech Stack:

  Languages  →  JavaScript · TypeScript · Python · C/C++ · Rust
  Frontend   →  Next.js · React · TailwindCSS · Framer
  Backend    →  Node.js · Express.js · PostgreSQL · Redis · MongoDB
  DevOps     →  Docker · Kubernetes · Azure · GCP · ArgoCD · Helm
  ML/AI      →  Scikit-learn · Anthropic Claude · Google Gemini
  Robotics   →  ROS 2 · Embedded C · Linux · Autonomous Systems`,

  experience: () =>
    `Work History:

  ├─ CREW — SWE Intern
  │    Jan 2025 – Present · Remote (Sydney, AU)
  │    Azure/GCP · Kubernetes · Kafka · ArgoCD · PostgreSQL
  │
  ├─ Robomaniac — Co-founder & Tech Lead
  │    Nov 2025 – Present
  │    EdTech startup: Robotics & AI for students aged 6–18
  │
  ├─ BVCOE Innovation & Robotics Lab — Vice President
  │    Jan 2024 – Present
  │    Robotics Club · Event Lead · Technical Curriculum
  │
  └─ IIT Bombay — Research Intern
       Oct 2024 – Jan 2025`,

  projects: () =>
    `Notable Projects:

  → Notewrite          Full-stack education platform (15+ courses)
  → Content Moderation  AI pipeline — Claude + GCP Vision, 85% LLM savings
  → CrewArcade         Real-time multiplayer arcade engine
  → Robonauts          Autonomous drone system (ROS 2)
  → LumaDev            AI-powered developer tools
  → getChecked         Health tracking app (React Native)
  → Solution AI        AI pair programmer CLI`,

  contact: () =>
    `Get in touch:

  GitHub   →  github.com/sushilsahani
  LinkedIn →  linkedin.com/in/sushilsahani
  X        →  @aspirantop`,
};

const EASTER_EGGS: Record<string, () => string> = {
  'ros launch drone.launch': () =>
    `[roslaunch] Launching autonomous drone mission...

  ✓ roscore started
  ✓ Flight controller node initialized
  ✓ IMU calibrated (gyro bias: 0.001 rad/s)
  ✓ GPS lock acquired (12 satellites, HDOP: 0.8)
  ✓ Obstacle avoidance armed (LiDAR + depth cam)
  ✓ Mission planner loaded: SURVEY_GRID_50x50m

           ╭──────────╮
      ↑    │  ✈  ≋≋≋  │    ↑
     /|\\   ╰──────────╯   /|\\
    / | \\                / | \\

  [INFO] Altitude: 0m → 50m ... ████████░░ 80%
  [INFO] Heading: 045° NE
  [INFO] ETA: 12 min 34 sec
  [INFO] Telemetry: nominal

  ✓ Drone is airborne. Mission: ACTIVE.`,

  'sudo make me a sandwich': () =>
    `[sudo] password for aspirant: ••••••••

  Making sandwich...
  ████████████████████ 100%

  🥪 Here's your sandwich. (Because sudo.)`,

  ls: () =>
    `drwxr-xr-x  projects/
  drwxr-xr-x  experience/
  drwxr-xr-x  education/
  drwxr-xr-x  blog/
  -rw-r--r--  resume.pdf
  -rw-r--r--  README.md`,

  pwd: () => `/home/aspirant/portfolio`,

  date: () => new Date().toString(),

  uname: () => `Portfolio OS 2.0.0 #1 SMP x86_64 GNU/Linux`,
};

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: 'output',
      content: `Welcome to aspirant op's portfolio terminal.
Type "help" to see available commands.`,
    },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();

    if (!cmd) return;

    setHistory((h) => [cmd, ...h]);
    setHistoryIdx(-1);

    const newLines: TerminalLine[] = [{ type: 'input', content: raw }];

    if (cmd === 'clear') {
      setLines([]);
      return;
    }

    if (COMMANDS[cmd]) {
      newLines.push({ type: 'output', content: COMMANDS[cmd]() });
    } else if (EASTER_EGGS[cmd]) {
      newLines.push({ type: 'output', content: EASTER_EGGS[cmd]() });
    } else {
      newLines.push({
        type: 'error',
        content: `command not found: ${cmd}\nType "help" to see available commands.`,
      });
    }

    setLines((prev) => [...prev, ...newLines]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, history.length - 1);
      setHistoryIdx(next);
      setInput(history[next] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(historyIdx - 1, -1);
      setHistoryIdx(next);
      setInput(next === -1 ? '' : history[next] ?? '');
    }
  };

  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Interactive" heading="Terminal" />
      <p className="text-muted-foreground mt-2 text-sm">
        Explore my work like a developer. Type a command to get started.
      </p>

      {/* Terminal window */}
      <div
        className="mt-6 overflow-hidden rounded-xl border border-border/60 bg-zinc-950 font-mono text-xs sm:text-sm shadow-2xl dark:border-zinc-800"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
          <span className="size-3 rounded-full bg-red-500" />
          <span className="size-3 rounded-full bg-yellow-500" />
          <span className="size-3 rounded-full bg-green-500" />
          <span className="mx-auto text-xs text-zinc-500">aspirant@portfolio — zsh</span>
        </div>

        {/* Output area */}
        <div ref={scrollRef} className="max-h-96 overflow-y-auto p-4 leading-relaxed">
          {lines.map((line, i) => (
            <div key={i} className="mb-1">
              {line.type === 'input' && (
                <div className="flex gap-2">
                  <span className="shrink-0 text-green-400">
                    <span className="hidden sm:inline">{PROMPT}</span>
                    <span className="sm:hidden">{PROMPT_SHORT}</span>
                  </span>
                  <span className="text-zinc-100">{line.content}</span>
                </div>
              )}
              {line.type === 'output' && (
                <pre className="whitespace-pre-wrap text-zinc-300">{line.content}</pre>
              )}
              {line.type === 'error' && (
                <pre className="whitespace-pre-wrap text-red-400">{line.content}</pre>
              )}
            </div>
          ))}

          {/* Active prompt */}
          <div className="mt-1 flex items-center gap-2">
            <span className="shrink-0 text-green-400">
              <span className="hidden sm:inline">{PROMPT}</span>
              <span className="sm:hidden">{PROMPT_SHORT}</span>
            </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-zinc-100 outline-none caret-green-400"
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal input"
            />
          </div>
        </div>
      </div>

      {/* Quick hints */}
      <div className="mt-3 flex flex-wrap gap-2">
        {['help', 'whoami', 'skills', 'projects', 'experience'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => {
              handleCommand(cmd);
              inputRef.current?.focus();
            }}
            className="rounded-md border border-border/60 bg-muted/20 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-border hover:text-foreground"
          >
            {cmd}
          </button>
        ))}
      </div>
    </Container>
  );
}
