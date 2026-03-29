"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

function pathMatches(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const notifyResumeDownload = () => {
    emailjs
      .send(
        "service_uqztmaj",
        "template_3cs4qrm",
        {
          name: "Portfolio",
          email: "derrickcyubahiroo@gmail.com",
          message: "Resume downloaded from site.",
        },
        "NynwdPUsUgbrIajXY"
      )
      .catch(() => { });
  };

  return (
    <header className="fixed left-0 right-0 top-0 px-4 z-50 pt-3 sm:pt-4">
      <div className="page-shell flex items-center justify-between gap-3 rounded-2xl surface-card px-3 py-2.5 sm:px-4">
        <Link
          href="/"
          className="font-heading flex min-w-0 items-baseline gap-2 text-lg font-semibold tracking-tight text-zinc-100"
        >

          <span className="hidden rounded-md bg-emerald-500/12 px-1.5 py-0.5 text-[15px] font-medium uppercase tracking-wider text-emerald-400/90 sm:inline">
            C.D
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Main">
          {NAV.map((item) => {
            const on = pathMatches(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${on ? "text-emerald-400" : "text-zinc-400 hover:text-zinc-200"
                  }`}
              >
                {on ? (
                  <motion.span
                    layoutId="header-dot"
                    className="absolute inset-0 -z-10 rounded-lg bg-emerald-500/10 border border-emerald-500/60"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                ) : null}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/derrickresume.pdf"
            onClick={notifyResumeDownload}
            className="hidden rounded-lg border border-zinc-600/80 bg-zinc-800/50 px-3 py-2 text-xs font-semibold text-zinc-200 transition hover:border-emerald-500/40 hover:text-emerald-300 sm:inline-flex"
          >
            Résumé
          </a>
          <button
            type="button"
            className="inline-flex rounded-lg border border-zinc-600/80 p-2 text-zinc-300 md:hidden"
            aria-expanded={open}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="page-shell mt-2 flex flex-col gap-0.5 rounded-2xl surface-card p-2 md:hidden"
          >
            {NAV.map((item) => {
              const on = pathMatches(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${on ? "bg-emerald-500/12 text-emerald-300" : "text-zinc-300"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="/derrickcv.pdf"
              onClick={() => {
                notifyResumeDownload();
                setOpen(false);
              }}
              className="mt-1 rounded-xl border border-zinc-600 py-3 text-center text-sm font-semibold text-zinc-200"
            >
              Download résumé
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
