"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin , FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";

const rows = [
  {
    label: "Location",
    value: "kg 317 st, Kigali, Rwanda",
    href: "https://www.google.com/maps/search/?api=1&query=KG+317+St+Kigali+Rwanda",
    external: true,
  },
  {
    label: "Email",
    value: "derrickcyubahiroo@gmail.com",
    href: "mailto:derrickcyubahiroo@gmail.com",
  },
  {
    label: "Phone",
    value: "+250 791568677",
    href: "tel:+250123456789",
  },
  {
    label: "GitHub",
    value: "https://github.com/cderry8",
    href: "https://github.com/cderry8",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/cyubahiro-derrick-7071b5386/",
    href: "https://www.linkedin.com/in/cyubahiro-derrick-7071b5386/",
    external: true,
  },
  {
    label: "Instagram",
    value: "@d.e.r.r.y__",
    href: "https://www.instagram.com/d.e.r.r.y__/",
    external: true,
  },
];

export default function ReachChannelList() {
  return (
    <motion.aside
      className="surface-card flex flex-col rounded-2xl p-6 sm:p-8"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.06 }}
    >
      <h2 className="font-heading text-lg font-semibold text-zinc-100">Elsewhere</h2>
      <p className="mt-1 text-xs text-zinc-500">Links and coordinates.</p>

      <ul className="mt-8 space-y-1">
        {rows.map((row, i) => (
          <li key={row.label}>
            <a
              href={row.href}
              target={row.external ? "_blank" : undefined}
              rel={row.external ? "noopener noreferrer" : undefined}
              className="group flex items-start gap-4 rounded-xl px-3 py-3 transition hover:bg-zinc-800/50"
            >
              <span className="w-20 shrink-0 pt-0.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-500 group-hover:text-zinc-400">
                {row.label}
              </span>
              <span className="text-sm text-zinc-300 group-hover:text-emerald-400/90">{row.value}</span>
            </a>
            {i < rows.length - 1 ? <div className="mx-3 h-px bg-zinc-800/80" /> : null}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-3 pt-8">
        <a
          href="https://github.com/cderry8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-10 items-center justify-center rounded-lg border border-zinc-700 text-zinc-400 transition hover:border-emerald-500/40 hover:text-emerald-400"
          aria-label="GitHub"
        >
          <FaGithub className="size-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-10 items-center justify-center rounded-lg border border-zinc-700 text-zinc-400 transition hover:border-emerald-500/40 hover:text-emerald-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="size-4" />
        </a>
        <a
          href="https://www.instagram.com/d.e.r.r.y__/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-10 items-center justify-center rounded-lg border border-zinc-700 text-zinc-400 transition hover:border-emerald-500/40 hover:text-emerald-400"
          aria-label="X"
        >
        <FaInstagram className="size-4" />
        </a>
      </div>
    </motion.aside>
  );
}
