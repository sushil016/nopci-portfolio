'use client';

import { useMode } from '@/hooks/ModeContext';

export function ModeToggle() {
  const { mode, setMode } = useMode();

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border bg-muted/40 p-1">
      <button
        onClick={() => setMode('software')}
        className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${
          mode === 'software'
            ? 'bg-foreground text-background shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Software
      </button>
      <button
        onClick={() => setMode('robotics')}
        className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${
          mode === 'robotics'
            ? 'bg-blue-600 text-white shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        Robotics
      </button>
    </div>
  );
}
