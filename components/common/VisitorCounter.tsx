'use client';

import { useEffect, useState } from 'react';

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch('/api/visitors', { method: 'POST' });
        if (!res.ok) return;
        const data = await res.json();
        if (typeof data.count === 'number') {
          setCount(data.count);
        }
      } catch {
        // silently fail — counter is non-critical
      }
    }
    fetchCount();
  }, []);

  if (count === null) return null;

  return (
    <span className="text-[#909092] text-xs">
      {count.toLocaleString()} visitors
    </span>
  );
}
