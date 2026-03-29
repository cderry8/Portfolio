"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "End-to-end ownership",
    body: "I don't hand off — I take a feature from database schema to deployed UI and own it throughout.",
  },
  {
    title: "Clean, readable code",
    body: "Code written for the next developer, not just to pass a test. Structure and clarity matter.",
  },
  {
    title: "Real delivery",
    body: "I've shipped real products used by real people — not just side projects that never launched.",
  },
];

export default function ValueTriad() {
  return (
    <motion.section
      className="mt-16 grid gap-5 sm:grid-cols-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {ITEMS.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="surface-card rounded-2xl p-5"
        >
          <h2 className="font-heading text-base font-semibold text-zinc-100">{item.title}</h2>
          <p className="mt-3 text-xs leading-relaxed text-zinc-500 sm:text-sm">{item.body}</p>
        </motion.div>
      ))}
    </motion.section>
  );
}
