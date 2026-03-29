"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeSpotlight() {
  return (
    <section
      className="page-shell flex min-h-[calc(100dvh-0.75rem)] flex-col justify-center gap-8 pb-8 pt-[5.25rem] sm:gap-9 sm:pb-10 sm:pt-[5.5rem] md:gap-10 lg:flex-row lg:items-center lg:gap-10 lg:pb-12 lg:pt-24 xl:gap-14 xl:pt-28"
    >
      {/* Copy — stays visually centered; not dragged to the bottom */}
      <motion.div
        className="order-1 flex w-full flex-1 flex-col justify-center lg:order-1 lg:min-h-0 lg:max-w-xl xl:max-w-2xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.04 }}
      >
        <div className="space-y-5 sm:space-y-6 xl:space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/50 px-3 py-1 text-[11px] font-medium text-zinc-400">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            Currently Freelancing
          </div>

          <h1 className="font-heading text-3xl font-semibold leading-[1.08] tracking-tight text-zinc-50 sm:text-4xl lg:text-[2.5rem] xl:text-5xl">
            Cyubahiro Derrick
            <span className="mt-1 block text-xl font-medium text-emerald-400/90 sm:text-2xl lg:text-3xl">
              Software engineer
            </span>
          </h1>

          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-zinc-400 sm:text-[0.95rem]">
Full-stack engineer from Kigali, Rwanda. I build APIs, dashboards, and
            end-to-end web products using React, Next.js, and Node.js — focused on
            clean code and shipping things that actually work.
          </p>

          <div className="flex flex-col gap-2.5 pt-1 sm:flex-row sm:flex-wrap sm:gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-400 sm:py-3"
            >
              View work
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-600 bg-zinc-900/40 px-6 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-emerald-500/45 hover:text-emerald-300 sm:py-3"
            >
              Contact
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-sm font-medium text-zinc-500 underline-offset-4 hover:text-zinc-300 hover:underline sm:py-3"
            >
              About
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Portrait — shorter + capped height so it fits above the fold */}
      <motion.div
        className="order-2 flex w-full shrink-0 justify-center lg:order-2 lg:max-w-[min(100%,440px)] lg:flex-1 lg:justify-end xl:max-w-[min(100%,460px)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full max-w-[min(100%,360px)] sm:max-w-[380px] lg:max-w-none">
          <div className="animate-hero-float will-change-transform">
            <motion.div
              className="group relative"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.995 }}
            >
              <div
                className="absolute -bottom-1.5 -right-1.5 left-5 top-5 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-600/5 ring-1 ring-emerald-500/20 transition duration-500 group-hover:from-emerald-500/30 group-hover:ring-emerald-400/35 sm:left-6 sm:top-6"
                aria-hidden
              />
              <div
                className="absolute -left-1 top-10 hidden h-12 w-1 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 opacity-90 lg:block"
                aria-hidden
              />

              <div className="relative overflow-hidden rounded-2xl border border-zinc-600/60 bg-zinc-950 shadow-[0_20px_60px_-24px_rgba(0,0,0,0.85),0_0_0_1px_rgba(255,255,255,0.06)_inset]">
                <div className="flex items-center gap-1.5 border-b border-zinc-800/80 bg-zinc-900/80 px-3 py-2 sm:px-4 sm:py-2">
                  <span className="size-1.5 rounded-full bg-zinc-600 sm:size-2" />
                  <span className="size-1.5 rounded-full bg-zinc-500 sm:size-2" />
                  <span className="size-1.5 rounded-full bg-emerald-500/70 sm:size-2" />
                  <span className="ml-2 flex-1 truncate text-center font-mono text-[9px] uppercase tracking-[0.16em] text-zinc-500 sm:text-[10px]">
                    profile — cderrick
                  </span>
                </div>

                <div className="p-2 sm:p-3">
                  <div className="rounded-lg bg-gradient-to-br from-zinc-100/[0.14] via-zinc-100/[0.06] to-transparent p-[2px] ring-1 ring-inset ring-white/[0.12] sm:rounded-xl">
                    {/* Shorter aspect + hard max height so the card never dominates the viewport */}
                    <div
                      className="relative mx-auto aspect-[4/5] w-full max-h-[min(52dvh,340px)] overflow-hidden rounded-[9px] bg-zinc-900 sm:max-h-[min(48dvh,380px)] sm:rounded-[10px] md:max-h-[min(46dvh,400px)] lg:aspect-[5/6] lg:max-h-[min(42dvh,380px)] xl:max-h-[min(44dvh,420px)]"
                    >
                      <Image
                        src="/me.jpg"
                        alt="Cyubahiro Derrick"
                        fill
                        priority
                        sizes="(max-width: 1024px) 85vw, 400px"
                        className="object-fill object-top transition duration-700 group-hover:scale-[1.02]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-white/[0.06]" />
                      <div className="pointer-events-none absolute left-1.5 top-1.5 size-5 border-l-2 border-t-2 border-white/25 sm:left-2 sm:top-2 sm:size-6" />
                      <div className="pointer-events-none absolute bottom-1.5 right-1.5 size-5 border-b-2 border-r-2 border-emerald-400/35 sm:bottom-2 sm:right-2 sm:size-6" />
                    </div>
                  </div>
                </div>

                <div className="flex items-stretch border-t border-zinc-800/90 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900">
                  <div className="w-1 shrink-0 bg-gradient-to-b from-emerald-400 to-emerald-600" />
                  <div className="flex min-w-0 flex-1 items-center justify-between gap-3 px-3 py-3 sm:gap-4 sm:px-5 sm:py-3.5">
                    <div className="min-w-0">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-500 sm:text-[10px] sm:tracking-[0.22em]">
                        Identity
                      </p>
                      <p className="font-heading truncate text-xs font-semibold text-zinc-50 sm:text-sm">
                        Cyubahiro Derrick
                      </p>
                    </div>
                    <div className="hidden h-8 w-px shrink-0 bg-zinc-700/90 sm:block sm:h-9" />
                    <div className="shrink-0 text-right">
                      <p className="text-[9px] font-medium uppercase tracking-wider text-zinc-500 sm:text-[10px]">Focus</p>
                      <p className="text-[11px] font-semibold text-emerald-400 sm:text-xs md:text-sm">Full-stack build</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
