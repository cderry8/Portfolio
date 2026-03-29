"use client";

import { motion } from "framer-motion";
import {
  Html,
  Css,
  JavaScript,
  Tailwind,
  Next,
  ReactJS,
  TypeScript,
  NodeJS,
  Express,
  Figma,
  PHP,
  SQL,
  MongoDB,
  Flutter,
  Git,
  AWS,
  Python,
} from "@/components/data/technologies";

const REGIONS = [
  {
    title: "Frontend",
    caption: "Interfaces and client apps.",
    items: [Html, Css, JavaScript, TypeScript, Tailwind, ReactJS, Next, Figma, Flutter],
  },
  {
    title: "Backend & data",
    caption: "Services, APIs, persistence.",
    items: [NodeJS, Express, PHP, Python, SQL, MongoDB, AWS],
  },
  {
    title: "Delivery",
    caption: "Shipping and collaboration.",
    items: [Git],
  },
];

export default function StackRegions() {
  return (
    <div className="space-y-12">
      {REGIONS.map((region, ri) => (
        <motion.section
          key={region.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: ri * 0.04 }}
          className="surface-card rounded-2xl p-6 sm:p-8"
        >
          <h2 className="font-heading text-lg font-semibold text-zinc-100">{region.title}</h2>
          <p className="mt-1 text-xs text-zinc-600">{region.caption}</p>

          <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {region.items.map((tech, ti) => (
              <motion.li
                key={tech.label}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: ti * 0.02 }}
                className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/50 px-3 py-3"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-zinc-900 text-emerald-400 [&_svg]:size-5">
                  {tech.icon}
                </span>
                <span className="text-[11px] font-medium leading-tight text-zinc-300 sm:text-xs">{tech.label}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      ))}
    </div>
  );
}
