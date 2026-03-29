"use client";

import { motion } from "framer-motion";
import StackRegions from "@/components/skills/StackRegions";

export default function SkillsPage() {
  return (
    <div className="page-shell pb-24 pt-24">
      <motion.header
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-12"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500/90">Stack</p>
        <h1 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">Skills</h1>
        <p className="mt-4 max-w-xl text-sm text-zinc-500">
          Grouped by how I work with teams — surface, platform, and how code gets out the door.
        </p>
      </motion.header>

      <StackRegions />
    </div>
  );
}
