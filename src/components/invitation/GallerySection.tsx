"use client";

import { GalleryImage } from "@/types/invitation";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animation/StaggerChildren";

interface Props {
  images: GalleryImage[];
}

export default function GallerySection({ images }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(
    () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1)),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1)),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, close, prev, next]);

  if (!images.length) return null;

  return (
    <section id="gallery" className="relative bg-white px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">Galeri</h2>
            <div className="ornament-line mt-4">
              <div className="deco-dot" />
            </div>
            <p className="section-subtitle mt-4">Momen-momen indah kami</p>
          </div>
        </ScrollReveal>

        <StaggerChildren
          className="columns-2 md:columns-3 gap-3 space-y-3"
          stagger={0.08}
        >
          {images.map((img, i) => (
            <StaggerItem key={img.src}>
              <button
                type="button"
                onClick={() => { setIndex(i); setOpen(true); }}
                className="group relative block w-full overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/50 break-inside-avoid"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width:768px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-burgundy/0 group-hover:bg-burgundy/30 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75 group-hover:scale-100" />
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
          >
            {/* Close */}
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Tutup"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Sebelumnya"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="relative mx-auto h-[80vh] w-[90vw] max-w-4xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <Image
                  src={images[index].src}
                  alt={images[index].alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* Next */}
            <button
              type="button"
              onClick={next}
              className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              aria-label="Berikutnya"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/80">
              {index + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
