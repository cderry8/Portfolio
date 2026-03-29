"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavigationProgress() {
  const pathname = usePathname();
  const skipFirst = useRef(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (skipFirst.current) {
      skipFirst.current = false;
      return;
    }
    setVisible(true);
    const t = window.setTimeout(() => setVisible(false), 600);
    return () => window.clearTimeout(t);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[200] h-[2px] overflow-hidden" aria-hidden>
      <div
        key={pathname}
        className="animate-nav-progress h-full w-full origin-left bg-gradient-to-r from-emerald-600 via-emerald-400 to-teal-400"
      />
    </div>
  );
}
