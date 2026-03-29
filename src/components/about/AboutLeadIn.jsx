"use client";

import { motion } from "framer-motion";
import { FiMapPin } from "react-icons/fi";

export default function AboutLeadIn() {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500/90">About</p>
      <h1 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        Software, shipped carefully
      </h1>
      <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
      I&apos;m Cyubahiro Derrick — a software engineer from Kigali, Rwanda. I
started building real projects early and grew through freelance work,
an internship, and shipping things that actually get used. I work
across the full stack — backend APIs, databases, and frontend
interfaces.
      </p>
      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-700/90 bg-zinc-900/50 px-4 py-2 text-xs text-zinc-400">
        <FiMapPin className="size-3.5 text-emerald-500" aria-hidden />
        Kigali, Rwanda · remote-friendly
      </div>
    </motion.div>
  );
}
