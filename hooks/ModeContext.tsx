'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Mode = 'software' | 'robotics';

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType>({
  mode: 'software',
  setMode: () => {},
});

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>('software');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-mode') as Mode | null;
    if (saved === 'software' || saved === 'robotics') {
      setModeState(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-mode', mode);
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode: setModeState }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  return useContext(ModeContext);
}
