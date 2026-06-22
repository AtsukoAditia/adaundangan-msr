"use client";

import { GalleryImage } from "@/types/invitation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

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
    <section id="gallery" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-burgundy">
          Galeri
        </h2>
        <p className="mb-12 text-center text-sm text-burgundy/60">
          Momen-momen indah kami
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width:768px) 50vw, 33vw"
                className="object-cover transition group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 text-white"
            aria-label="Tutup"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            type="button"
            onClick={prev}
            className="absolute left-4 text-white"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <div className="relative mx-auto h-[80vh] w-[90vw] max-w-3xl">
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            onClick={next}
            className="absolute right-4 text-white"
            aria-label="Berikutnya"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      )}
    </section>
  );
}
