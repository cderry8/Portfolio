"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "@/components/data/projects";

export default function WorkStrip() {
  const featured = projectsData.slice(0, 3);

  return (
    <section className="page-shell pb-24">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-zinc-100 sm:text-3xl">Selected work</h2>
          <p className="mt-2 max-w-2xl text-sm text-zinc-500">
            Recent case studies — detail pages have full stack and previews.
          </p>
        </div>
        <Link href="/projects" className="text-sm font-semibold text-emerald-400 hover:text-emerald-300">
          Browse all →
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-48px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="surface-card group flex flex-col overflow-hidden rounded-2xl"
          >
            <div className="relative aspect-[5/3] overflow-hidden border-b border-zinc-800/80">
              <Image
                src={p.images[0]}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h3 className="font-heading text-base font-semibold text-zinc-100">{p.title}</h3>
              <p className="line-clamp-2 text-xs leading-relaxed text-zinc-500">{p.description}</p>
              <Link
                href={p.detailsUrl}
                className="mt-auto pt-3 text-xs font-semibold text-emerald-500/90 hover:text-emerald-400"
              >
                Open case study
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
