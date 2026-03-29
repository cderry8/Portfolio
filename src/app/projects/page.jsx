"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/components/data/projects";
import ProjectsFilterField from "@/components/projects/ProjectsFilterField";
import ProjectMosaicCard from "@/components/projects/ProjectMosaicCard";

export default function ProjectsPage() {
  const [q, setQ] = useState("");

  const filtered = useMemo(
    () =>
      projectsData.filter(
        (p) =>
          p.title.toLowerCase().includes(q.toLowerCase()) ||
          p.description.toLowerCase().includes(q.toLowerCase()) ||
          (p.role || "").toLowerCase().includes(q.toLowerCase())
      ),
    [q]
  );

  return (
    <div className="page-shell pb-24 pt-24">
      <motion.header initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500/90">Work</p>
        <h1 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">Projects</h1>
        <p className="mt-4 max-w-xl text-sm text-zinc-500">
          Case studies with stack, outcomes, and in-portfolio previews. Use search to filter by name or role.
        </p>
      </motion.header>

      <div className="mt-10">
        <ProjectsFilterField value={q} onChange={setQ} />
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length ? (
          filtered.map((project, index) => (
            <ProjectMosaicCard key={project.id} project={project} index={index} visible />
          ))
        ) : (
          <p className="col-span-full py-16 text-center text-sm text-zinc-500">No matches.</p>
        )}
      </div>
    </div>
  );
}
