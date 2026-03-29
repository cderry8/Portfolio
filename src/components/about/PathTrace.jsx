"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const STEPS = [
  { label: "Early start", text: "Started coding young and went straight to real projects — no tutorial paralysis, just building." },
  { label: "Growth", text: "Expanded across React, Next.js, Node.js, MongoDB, and TypeScript through freelance clients and personal projects." },
  { label: "Now", text: "Taking on end-to-end systems — owning the API, the database, and the UI from start to deployment." },
];

export default function PathTrace() {
  return (
    <section className="mt-20">
      <h2 className="font-heading text-xl font-semibold text-zinc-100">Timeline</h2>
      <div className="relative mt-8 space-y-8 border-l border-zinc-800 pl-8">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="relative"
          >
            <span className="absolute -left-[34px] top-1.5 size-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(52,211,153,0.5)]" />
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-500/90">{s.label}</p>
            <p className="mt-2 max-w-xl text-sm text-zinc-500">{s.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-14 flex flex-wrap gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400"
        >
          Work
          <FiArrowRight className="size-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:border-emerald-500/40"
        >
          Contact
        </Link>
      </motion.div>
    </section>
  );
}
