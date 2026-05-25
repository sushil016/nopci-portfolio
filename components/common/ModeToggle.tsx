'use client';

import { useMode } from '@/hooks/ModeContext';
import { cn } from '@/lib/utils';

export function ModeToggle({
  variant = 'default',
}: {
  variant?: 'default' | 'nav';
}) {
  const { mode, setMode } = useMode();

  if (variant === 'nav') {
    return (
      <div className="flex h-8 items-center gap-0.5 rounded-[13px] border border-black/[0.1] bg-white/[0.48] p-0.5 text-[11px] font-medium leading-none text-zinc-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.62),inset_0_-12px_20px_rgba(0,0,0,0.035)] backdrop-blur-2xl dark:border-white/[0.13] dark:bg-white/[0.045] dark:text-[#bfc0c4] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-14px_22px_rgba(255,255,255,0.035)]">
        <button
          type="button"
          onClick={() => setMode('software')}
          className={cn(
            'h-6 rounded-[10px] px-2 transition duration-200 hover:text-zinc-950 active:scale-[0.97] dark:hover:text-white',
            mode === 'software'
              ? 'bg-zinc-950/[0.08] text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_8px_18px_rgba(0,0,0,0.08)] dark:bg-white/[0.16] dark:text-white dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_20px_rgba(0,0,0,0.24)]'
              : 'text-zinc-500 dark:text-[#aaaab0]',
          )}
        >
          Software
        </button>
        <button
          type="button"
          onClick={() => setMode('robotics')}
          className={cn(
            'h-6 rounded-[10px] px-2 transition duration-200 hover:text-zinc-950 active:scale-[0.97] dark:hover:text-white',
            mode === 'robotics'
              ? 'bg-zinc-950/[0.08] text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_8px_18px_rgba(0,0,0,0.08)] dark:bg-white/[0.16] dark:text-white dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_20px_rgba(0,0,0,0.24)]'
              : 'text-zinc-500 dark:text-[#aaaab0]',
          )}
        >
          Robotics
        </button>
      </div>
    );
  }

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
