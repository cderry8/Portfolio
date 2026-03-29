"use client";

import { useMemo, useState, useCallback } from "react";
import { FiExternalLink, FiRefreshCw } from "react-icons/fi";

function normalizeUrl(raw) {
  if (!raw || typeof raw !== "string") return "";
  const t = raw.trim();
  if (!t) return "";
  if (/^https?:\/\//i.test(t)) return t;
  return `https://${t}`;
}

export default function LivePreviewFrame({ url, title }) {
  const href = useMemo(() => normalizeUrl(url), [url]);
  const [key, setKey] = useState(0);
  const reload = useCallback(() => setKey((k) => k + 1), []);

  if (!href) {
    return (
      <div className="surface-card flex min-h-[200px] items-center justify-center rounded-2xl p-8 text-center text-sm text-zinc-500">
        No live URL configured for this project.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-700/90 bg-zinc-900/40 shadow-lg shadow-black/40">
      <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800 bg-zinc-950/90 px-3 py-2.5">
        <div className="flex gap-1 pl-1">
          <span className="size-2.5 rounded-full bg-red-500/90" />
          <span className="size-2.5 rounded-full bg-amber-400/90" />
          <span className="size-2.5 rounded-full bg-emerald-500/90" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-lg border border-zinc-800 bg-black/50 px-3 py-1.5 font-mono text-[11px] text-zinc-500">
          {title ? `${title} · ` : ""}
          {href}
        </div>
        <button
          type="button"
          onClick={reload}
          className="rounded-lg border border-zinc-700 p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-200"
          aria-label="Reload"
        >
          <FiRefreshCw className="size-4" />
        </button>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-lg border border-emerald-500/35 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-semibold text-emerald-300 hover:bg-emerald-500/20"
        >
          Open
          <FiExternalLink className="size-3" />
        </a>
      </div>

      <div className="relative aspect-[16/10] min-h-[240px] w-full bg-zinc-950 sm:min-h-[380px] md:min-h-[min(62vh,560px)]">
        <iframe
          key={key}
          title={title || "Preview"}
          src={href}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="border-t border-zinc-800 px-4 py-3 text-center text-[11px] leading-relaxed text-zinc-600">
        Some sites block embedding. If the preview is empty, use <strong className="text-zinc-500">Open</strong>.
      </p>
    </div>
  );
}
