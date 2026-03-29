"use client";

import { FiSearch } from "react-icons/fi";

export default function ProjectsFilterField({ value, onChange }) {
  return (
    <div className="relative max-w-md">
      <FiSearch className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-zinc-600" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search projects…"
        className="w-full rounded-xl border border-zinc-700/90 bg-zinc-900/50 py-3.5 pl-11 pr-4 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500/45 focus:ring-1 focus:ring-emerald-500/25"
      />
    </div>
  );
}
