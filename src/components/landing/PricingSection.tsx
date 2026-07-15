"use client";

import { PRICING_PACKAGES } from "@/config/landing";
import { Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animation/StaggerChildren";

export default function PricingSection() {
  return (
    <section id="paket" className="relative bg-white px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-burgundy/5 blur-3xl rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold/60 mb-3">Harga</p>
            <h2 className="section-title">Paket Harga</h2>
            <div className="ornament-line mt-4"><div className="deco-dot" /></div>
            <p className="section-subtitle mt-4">
              Pilih paket yang sesuai kebutuhan Anda
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {PRICING_PACKAGES.map((pkg) => (
            <StaggerItem key={pkg.name}>
              <motion.div
                className={`relative rounded-2xl p-6 h-full flex flex-col transition-all duration-300 ${
                  pkg.highlight
                    ? "border-2 border-gold bg-white shadow-gold-md scale-[1.02]"
                    : "border border-gold/15 bg-white shadow-sm hover:shadow-card-hover"
                }`}
                whileHover={{ y: -4 }}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold px-4 py-1 text-xs font-bold text-burgundy">
                      <Sparkles className="h-3 w-3" />
                      Populer
                    </span>
                  </div>
                )}

                <div className="mb-1">
                  <h3 className="font-display text-xl font-bold text-burgundy">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-burgundy mt-2">{pkg.price}</p>
                  <p className="text-xs text-burgundy/40 mt-1">{pkg.features.length} fitur tersedia</p>
                </div>

                <ul className="my-6 space-y-3 flex-1">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-burgundy/70">
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <Check size={11} className="text-gold" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full rounded-full py-3 text-center text-sm font-medium transition-all ${
                    pkg.highlight
                      ? "bg-gold text-burgundy hover:bg-gold/90 shadow-gold-sm hover:shadow-gold-md"
                      : "bg-burgundy text-ivory hover:bg-burgundy-600"
                  }`}
                >
                  Pesan
                </a>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
