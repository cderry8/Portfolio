"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiLayers } from "react-icons/fi";

const badgeFor = {
  live: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/25",
  maintenance: "bg-amber-500/12 text-amber-200 ring-amber-500/25",
  concept: "bg-zinc-700/50 text-zinc-300 ring-zinc-600",
  demo: "bg-teal-500/12 text-teal-200 ring-teal-500/25",
};

export default function ProjectMosaicCard({ project, index = 0, visible = true }) {
  const thumb = project.images?.[0] ?? "/pic.jpg";
  const status = project.status || "live";
  const badge = badgeFor[status] || badgeFor.live;
  const previewHref = `${project.detailsUrl.replace(/\/$/, "")}/live`;
  const tags = (project.technologies || []).slice(0, 3);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 22 }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="surface-card flex flex-col overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-[16/10] border-b border-zinc-800/90">
        <Image src={thumb} alt="" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ring-1 ${badge}`}>
            {status}
          </span>
          {project.year ? (
            <span className="rounded-md bg-black/55 px-2 py-0.5 text-[10px] font-medium text-zinc-200 backdrop-blur-sm">
              {project.year}
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-heading text-lg font-semibold text-zinc-50">{project.title}</h3>
          {project.role ? <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-emerald-500/80">{project.role}</p> : null}
        </div>
        <p className="line-clamp-3 text-xs leading-relaxed text-zinc-500">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t.label} className="rounded-md bg-zinc-800/80 px-2 py-0.5 text-[10px] text-zinc-400">
              {t.label}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 border-t border-zinc-800/80 pt-4">
          <Link
            href={project.detailsUrl}
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-emerald-500/15 px-3 py-2 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/25 hover:bg-emerald-500/25"
          >
            Case study
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1 rounded-lg border border-zinc-600/90 px-3 py-2 text-xs font-semibold text-zinc-300 hover:border-zinc-500"
            >
              Live
              <FiExternalLink className="size-3" />
            </a>
          ) : null}
          <Link
            href={previewHref}
            className="inline-flex flex-1 min-w-[6rem] items-center justify-center gap-1 rounded-lg border border-zinc-600/90 px-3 py-2 text-xs font-semibold text-zinc-300 hover:border-emerald-500/35 hover:text-emerald-400"
          >
            <FiLayers className="size-3" />
            Preview
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
