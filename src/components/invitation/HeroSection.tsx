"use client";

import { InvitationConfig } from "@/types/invitation";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { motion, useScroll, useTransform } from "motion/react";
import { Calendar, Heart, MapPin } from "lucide-react";
import { useRef } from "react";

interface Props {
  config: InvitationConfig;
}

function FloatingParticle({ delay, x }: { delay: number; x: string }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-gold/30"
      style={{ left: x, top: "30%" }}
      animate={{ y: [0, -50, 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.8, 1] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function HeroSection({ config }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const couple = `${config.couple.groom.name} & ${config.couple.bride.name}`;
  const primaryEvent = config.events.find((e) => e.isPrimary) ?? config.events[0];
  const eventDate = primaryEvent ? new Date(primaryEvent.startAt) : null;

  const particles = ["15%", "25%", "40%", "55%", "70%", "85%"];

  return (
    <section ref={ref} className="relative min-h-[85vh] overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: config.hero.backgroundImage
            ? `url(${config.hero.backgroundImage})`
            : undefined,
          y: bgY,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy/80 via-burgundy/60 to-burgundy/80" />
      <div className="absolute inset-0 bg-noise-texture opacity-[0.03]" />

      {/* Floating particles */}
      {particles.map((x, i) => (
        <FloatingParticle key={i} delay={i * 0.6} x={x} />
      ))}

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center gap-5 p-8 text-center">
        {/* Top ornament */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
          <Heart className="h-4 w-4 text-gold fill-gold animate-heartbeat" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        <motion.p
          className="text-xs uppercase tracking-[0.4em] text-gold/80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Pernikahan
        </motion.p>

        <motion.h1
          className="font-display text-5xl md:text-7xl font-bold shimmer-gold"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {couple}
        </motion.h1>

        {eventDate && (
          <motion.div
            className="flex items-center gap-2 text-ivory/80"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <Calendar className="h-4 w-4 text-gold/70" />
            <p className="text-sm tracking-widest">
              {format(eventDate, "EEEE, dd MMMM yyyy", { locale: localeId })}
            </p>
          </motion.div>
        )}

        {primaryEvent && (
          <motion.div
            className="flex items-center gap-2 text-ivory/60"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
          >
            <MapPin className="h-3.5 w-3.5 text-gold/50" />
            <p className="text-sm">{primaryEvent.venue}</p>
          </motion.div>
        )}

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-5 h-8 rounded-full border-2 border-gold/40 flex justify-center pt-1.5">
            <motion.div
              className="w-1 h-1.5 rounded-full bg-gold/60"
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ivory to-transparent" />
    </section>
  );
}
