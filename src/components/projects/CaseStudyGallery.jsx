"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CaseStudyGallery({ title, images }) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const open = useCallback((index) => {
    setActive(index);
    setLightbox(true);
  }, []);

  const close = useCallback(() => setLightbox(false), []);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close]);

  if (!images?.length) return null;

  const current = images[active];

  return (
    <>
      <div className="surface-card rounded-2xl p-3 sm:p-4">
        <button
          type="button"
          onClick={() => open(active)}
          className="relative block w-full overflow-hidden rounded-xl bg-zinc-950 outline-none ring-offset-2 ring-offset-zinc-950 focus-visible:ring-2 focus-visible:ring-emerald-500/50"
        >
          <div className="relative aspect-video w-full max-h-[min(70vh,560px)]">
            <Image
              src={current}
              alt={`${title} screenshot ${active + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-contain"
              priority={active === 0}
            />
          </div>
          <span className="absolute bottom-3 right-3 rounded-md bg-black/65 px-2 py-1 text-[10px] font-medium text-zinc-300 backdrop-blur-sm">
            Click to expand
          </span>
        </button>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 pt-1">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={`relative size-14 shrink-0 overflow-hidden rounded-lg ring-2 transition sm:size-16 ${
                i === active ? "ring-emerald-500/70" : "ring-transparent hover:ring-zinc-600"
              }`}
            >
              <Image src={src} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox ? (
          <motion.div
            role="dialog"
            aria-modal
            aria-label="Image preview"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] w-full max-w-[min(100%,72rem)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={close}
                className="absolute -top-10 right-0 rounded-lg border border-zinc-600 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-200 sm:-right-2 sm:top-0"
              >
                Esc / close
              </button>
              <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 p-2">
                <img
                  src={current}
                  alt=""
                  className="max-h-[82vh] w-auto max-w-full object-contain"
                />
              </div>
              <div className="mt-3 flex justify-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`size-2 rounded-full ${i === active ? "bg-emerald-400" : "bg-zinc-600"}`}
                    aria-label={`Image ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
