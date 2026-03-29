"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="page-shell flex min-h-[70vh] flex-col items-center justify-center pb-16 pt-28">
      <motion.div
        className="max-w-sm text-center"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="mx-auto mb-8 max-w-[200px] opacity-90">
          <Image src="/404.png" alt="" width={200} height={200} className="mx-auto" />
        </div>
        <h1 className="font-heading text-2xl font-semibold text-zinc-100">404</h1>
        <p className="mt-3 text-sm text-zinc-500">That page does not exist or moved.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-400"
        >
          Home
        </Link>
      </motion.div>
    </div>
  );
}
