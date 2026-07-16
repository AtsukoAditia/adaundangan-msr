"use client";

import { LANDING_FEATURES } from "@/config/landing";
import {
  CalendarDays,
  Gift,
  Heart,
  Images,
  MapPin,
  MessageSquare,
  Music,
  UserCheck,
} from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animation/StaggerChildren";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  UserCheck,
  Music,
  CalendarDays,
  MapPin,
  MessageSquare,
  Images,
  Gift,
};

export default function FeaturesSection() {
  return (
    <section id="fitur" className="relative bg-ivory px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gold/5 blur-3xl rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold/60 mb-3">Fitur</p>
            <h2 className="section-title">Fitur Unggulan</h2>
            <div className="ornament-line mt-4"><div className="deco-dot" /></div>
            <p className="section-subtitle mt-4">
              Semua yang Anda butuhkan untuk undangan digital yang berkesan
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {LANDING_FEATURES.map((f) => {
            const Icon = iconMap[f.icon] ?? Heart;
            return (
              <StaggerItem key={f.title}>
                <motion.div
                  className="group rounded-2xl border border-gold/15 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 hover:border-gold/25"
                  whileHover={{ y: -4 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 group-hover:bg-gold/15 transition-colors">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold text-burgundy">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-burgundy/60">{f.description}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
