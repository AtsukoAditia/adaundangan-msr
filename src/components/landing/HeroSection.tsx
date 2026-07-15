"use client";

import Link from "next/link";
import { DEMO_SLUG } from "@/config/site";
import { motion } from "motion/react";
import { ArrowRight, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-burgundy via-burgundy-600 to-burgundy-700">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-gold/30"
          style={{ left: `${10 + i * 12}%`, top: `${20 + (i % 4) * 20}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        {/* Top badge */}
        <motion.div
          className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Heart className="h-3.5 w-3.5 text-gold fill-gold" />
          <span className="text-xs uppercase tracking-widest text-ivory/80">Undangan Pernikahan Digital</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="shimmer-gold">Bagikan Hari Bahagia</span>
          <br />
          <span className="text-ivory">dalam Satu Tautan</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl text-ivory/75 max-w-2xl mx-auto leading-relaxed mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Buat website undangan pernikahan yang elegan, personal, dan mudah dibagikan.
          Tanpa aplikasi, tanpa ribet — cukup satu link.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={`/${DEMO_SLUG}`}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-burgundy shadow-gold-md transition-all hover:bg-gold/90 hover:shadow-gold-lg"
            >
              Lihat Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm px-8 py-4 text-base font-semibold text-ivory transition-all hover:bg-white/15 hover:border-white/30"
          >
            Pesan Sekarang
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-ivory/30">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-ivory/20 flex justify-center pt-1.5">
              <motion.div
                className="w-1 h-1.5 rounded-full bg-ivory/40"
                animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
