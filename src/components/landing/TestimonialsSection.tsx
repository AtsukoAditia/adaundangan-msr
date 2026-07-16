"use client";

import { testimonials as TESTIMONIALS } from "@/config/landing";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animation/StaggerChildren";

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="relative bg-white px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-gold/5 blur-3xl rounded-full" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold/60 mb-3">Kata Mereka</p>
            <h2 className="section-title">Testimoni</h2>
            <div className="ornament-line mt-4"><div className="deco-dot" /></div>
            <p className="section-subtitle mt-4">
              Kepuasan pasangan yang telah menggunakan AdaUndangan
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.15}>
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.name}>
              <motion.div
                className="group relative rounded-2xl border border-gold/15 bg-ivory p-6 shadow-sm transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
                whileHover={{ y: -4 }}
              >
                {/* Quote icon */}
                <div className="absolute -top-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                  <Quote size={18} className="text-gold" />
                </div>

                {/* Stars */}
                <div className="mb-3 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="mb-6 text-sm leading-relaxed text-burgundy/70 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-burgundy text-sm font-bold text-ivory">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-burgundy">{t.name}</p>
                    <p className="text-xs text-burgundy/50">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
