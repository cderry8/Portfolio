"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { projectsData } from "@/components/data/projects";
import LivePreviewFrame from "@/components/projects/LivePreviewFrame";

export default function ProjectLivePreviewPage() {
  const params = useParams();
  const raw = params?.projectId;
  const pid = raw != null ? parseInt(String(raw), 10) : NaN;
  const project = projectsData.find((p) => p.id === pid);

  if (!project) {
    return (
      <div className="flex min-h-[40vh] flex-col items-center justify-center px-4 pt-24">
        <p className="text-zinc-500">Not found.</p>
        <Link href="/projects" className="mt-3 text-sm font-semibold text-emerald-500">
          Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="page-shell pb-20 pt-24">
      <motion.div
        className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <Link
            href={project.detailsUrl}
            className="mb-3 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-emerald-400"
          >
            <FiArrowLeft className="size-4" />
            Case study
          </Link>
          <h1 className="font-heading text-2xl font-semibold text-zinc-50 sm:text-3xl">{project.title}</h1>
          <p className="mt-2 max-w-xl text-sm text-zinc-500">{project.description}</p>
        </div>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl border border-zinc-600 bg-zinc-900/60 px-4 py-2.5 text-center text-sm font-semibold text-zinc-200 hover:border-emerald-500/40"
          >
            Open live
          </a>
        ) : null}
      </motion.div>

      <LivePreviewFrame url={project.liveUrl} title={project.title} />
    </div>
  );
}
