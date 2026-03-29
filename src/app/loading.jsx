export default function Loading() {
  return (
    <div className="page-shell flex min-h-[50vh] flex-col items-center justify-center gap-6 pt-28 pb-16">
      <div
        className="size-10 rounded-full border-2 border-zinc-700 border-t-emerald-400 animate-spin"
        aria-hidden
      />
      <div className="flex w-full max-w-md flex-col gap-3">
        <div className="h-3 w-3/4 animate-pulse rounded-md bg-zinc-800" />
        <div className="h-3 w-full animate-pulse rounded-md bg-zinc-800/80" />
        <div className="h-3 w-5/6 animate-pulse rounded-md bg-zinc-800/60" />
      </div>
      <p className="text-xs font-medium text-zinc-500">Loading…</p>
    </div>
  );
}
