"use client";

import { motion } from "motion/react";
import { Heart } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";

interface Props {
  coupleName1: string;
  coupleName2: string;
  closingMessage?: string;
}

export default function ClosingSection({ coupleName1, coupleName2, closingMessage }: Props) {
  const message =
    closingMessage ??
    "Atas kehadiran dan doa restu yang telah diberikan, kami mengucapkan terima kasih yang sebesar-besarnya.";

  return (
    <section className="relative bg-ivory px-6 py-24 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold/20"
          style={{ left: `${20 + i * 15}%`, top: `${30 + (i % 3) * 15}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.15, 0.4, 0.15], scale: [1, 1.3, 1] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-xl text-center">
        <ScrollReveal>
          {/* Heart */}
          <motion.div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="h-7 w-7 text-gold fill-gold/30" />
          </motion.div>

          {/* Message */}
          <p className="mb-8 text-sm leading-relaxed text-burgundy/70">
            {message}
          </p>

          {/* Names */}
          <div className="ornament-line mb-6">
            <div className="deco-dot" />
          </div>

          <p className="font-display text-4xl font-bold text-burgundy shimmer-gold mb-3">
            {coupleName1} & {coupleName2}
          </p>

          <p className="text-xs uppercase tracking-[0.3em] text-burgundy/40 mt-4">
            Kami yang berbahagia
          </p>

          <div className="ornament-line mt-6">
            <div className="deco-dot" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
