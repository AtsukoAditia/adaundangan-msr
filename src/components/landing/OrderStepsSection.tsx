"use client";

import { orderSteps as ORDER_STEPS } from "@/config/landing";
import { MessageCircle, Package, Pencil, Share2 } from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animation/StaggerChildren";

const stepIcons = [Package, MessageCircle, Pencil, Share2];

export default function OrderStepsSection() {
  return (
    <section id="cara-pesan" className="relative bg-ivory px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold/60 mb-3">Proses</p>
            <h2 className="section-title">Cara Pesan</h2>
            <div className="ornament-line mt-4"><div className="deco-dot" /></div>
            <p className="section-subtitle mt-4">
              Empat langkah mudah untuk memiliki undangan digital impian
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {ORDER_STEPS.map((s, i) => {
            const Icon = stepIcons[i] ?? Package;
            return (
              <StaggerItem key={s.step}>
                <motion.div
                  className="relative flex flex-col items-center text-center"
                  whileHover={{ y: -4 }}
                >
                  {/* Step number circle */}
                  <div className="relative mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-burgundy shadow-burgundy-md">
                      <Icon size={28} className="text-gold" />
                    </div>
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-bold text-burgundy">
                      {s.step}
                    </span>
                    {/* Connector line */}
                    {i < ORDER_STEPS.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-gold/40 to-transparent" />
                    )}
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-burgundy">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-burgundy/60 max-w-[220px]">
                    {s.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
