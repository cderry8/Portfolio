"use client";

import { motion } from "framer-motion";

export default function ContactLeadIn() {
  return (
    <motion.header
      className="mb-10 sm:mb-12"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500/90">Contact</p>
      <h1 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        Start a conversation
      </h1>
      <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-base">
        Hiring, freelance, or a product idea — send a concise note with scope and timing. I usually respond within a
        business day.
      </p>
      <div className="mt-6 h-px max-w-xs bg-gradient-to-r from-emerald-500/50 to-transparent" />
    </motion.header>
  );
}
