"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiArrowLeft, FiGithub, FiLayers, FiLink } from "react-icons/fi";
import { projectsData } from "@/components/data/projects";
import { toYouTubeEmbed } from "@/lib/youtube";
import CaseStudyGallery from "@/components/projects/CaseStudyGallery";
import LivePreviewFrame from "@/components/projects/LivePreviewFrame";

const STATUS = {
  live: "Live",
  maintenance: "Maintenance",
  concept: "Concept",
  demo: "Demo",
};

export default function ProjectDetailsPage() {
  const pathname = usePathname();
  const id = pathname?.split("/").pop();
  const project = projectsData.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center px-4 pt-24">
        <p className="text-zinc-500">Project not found.</p>
        <Link href="/projects" className="mt-4 text-sm font-semibold text-emerald-500 hover:text-emerald-400">
          ← Projects
        </Link>
      </div>
    );
  }

  const embed = toYouTubeEmbed(project.videoUrl);
  const liveHref = `${project.detailsUrl.replace(/\/$/, "")}/live`;

  return (
    <div className="page-shell pb-24 pt-24">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-emerald-400"
      >
        <FiArrowLeft className="size-4" aria-hidden />
        All projects
      </Link>

      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-md bg-emerald-500/12 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-300 ring-1 ring-emerald-500/25">
            {(project.status && STATUS[project.status]) || "Project"}
          </span>
          {project.year ? (
            <span className="rounded-md border border-zinc-700 bg-zinc-900/60 px-2.5 py-1 text-[11px] text-zinc-400">
              {project.year}
            </span>
          ) : null}
        </div>
        <h1 className="font-heading mt-5 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">{project.title}</h1>
        {project.role ? (
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-emerald-500/80">{project.role}</p>
        ) : null}
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">{project.description}</p>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400"
          >
            Live site
            <FaExternalLinkAlt className="size-3" />
          </a>
        ) : null}
        <Link
          href={liveHref}
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 bg-zinc-900/50 px-4 py-2.5 text-sm font-semibold text-zinc-200 hover:border-emerald-500/40"
        >
          <FiLayers className="size-4" />
          Full preview
        </Link>
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-4 py-2.5 text-sm text-zinc-300 hover:border-zinc-500"
          >
            <FiGithub className="size-4" />
            Code
          </a>
        ) : null}
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-4 py-2.5 text-sm text-zinc-300"
          >
            <FiLink className="size-4" />
            Repo
          </a>
        ) : null}
      </div>

      <div className="mt-12 space-y-12">
        <CaseStudyGallery title={project.title} images={project.images} />

        {embed ? (
          <section>
            <h2 className="font-heading text-lg font-semibold text-zinc-100">Video</h2>
            <p className="mt-1 text-xs text-zinc-500">Walkthrough or demo.</p>
            <div className="mt-4 aspect-video overflow-hidden rounded-2xl border border-zinc-800 bg-black">
              <iframe
                title={`${project.title} video`}
                src={embed}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </section>
        ) : (
          <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/30 p-6 text-center text-xs text-zinc-600">
            No <code className="text-emerald-500/80">video</code> For This Project.
          </div>
        )}

        <section className="surface-card rounded-2xl p-6 sm:p-8">
          <h2 className="font-heading text-lg font-semibold text-zinc-100">Highlights</h2>
          <ul className="mt-4 space-y-3">
            {(project.highlights || []).map((line) => (
              <li key={line} className="flex gap-3 text-sm text-zinc-400">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-emerald-500/80" />
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-zinc-800 pt-6 text-sm leading-relaxed text-zinc-500">{project.additionalInfo}</p>
        </section>

        <section>
          <h2 className="font-heading text-lg font-semibold text-zinc-100">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900/50 px-3 py-2 text-xs text-zinc-300"
              >
                <span className="text-emerald-500/90 [&_svg]:size-4">{t.icon}</span>
                {t.label}
              </span>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-heading text-lg font-semibold text-zinc-100">In-portfolio browser</h2>
              <p className="mt-1 max-w-xl text-xs text-zinc-500">
                Same preview as the full-screen page, embedded here for quick checks.
              </p>
            </div>
            <Link href={liveHref} className="text-xs font-semibold text-emerald-500 hover:text-emerald-400">
              Open full-screen →
            </Link>
          </div>
          <LivePreviewFrame url={project.liveUrl} title={project.title} />
        </section>
      </div>
    </div>
  );
}
