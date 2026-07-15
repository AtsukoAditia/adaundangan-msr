"use client";

import { Button } from "@/components/ui/Button";
import { InvitationConfig } from "@/types/invitation";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

interface Props {
  config: InvitationConfig;
  guestName: string;
  onOpen: () => void;
}

export default function InvitationCover({ config, guestName, onOpen }: Props) {
  const [mounted, setMounted] = useState(false);
  const couple = `${config.couple.groom.name} & ${config.couple.bride.name}`;
  const primaryEvent =
    config.events.find((e) => e.isPrimary) ?? config.events[0];
  const eventDate = primaryEvent ? new Date(primaryEvent.startAt) : null;

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const displayGuest = mounted ? guestName : "Bapak/Ibu/Saudara/i";

  return (
    <AnimatePresence>
      <motion.section
        id="cover"
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-burgundy"
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Background image with parallax feel */}
        {config.hero.backgroundImage && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${config.hero.backgroundImage})` }}
          />
        )}

        {/* Gradient overlay with subtle texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-burgundy/80 via-burgundy/60 to-burgundy/80" />
        <div className="absolute inset-0 bg-noise-texture opacity-[0.03]" />

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gold/30"
              style={{
                left: `${15 + i * 14}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        {/* Top ornament */}
        <motion.div
          className="absolute top-16 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="text-center">
            <Sparkles className="mx-auto h-6 w-6 text-gold/60 animate-float" />
            <div className="mt-2 h-px w-24 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-6 p-8 text-center text-white max-w-md">
          {/* Ornamental lines */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
            <div className="w-2 h-2 rounded-full bg-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          <motion.p
            className="text-xs uppercase tracking-[0.4em] text-gold/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Undangan Pernikahan
          </motion.p>

          <motion.h1
            className="font-display text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="shimmer-gold">{couple}</span>
          </motion.h1>

          {eventDate && (
            <motion.p
              className="text-sm tracking-widest text-ivory/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {format(eventDate, "dd MMMM yyyy", { locale: localeId })}
            </motion.p>
          )}

          {/* Guest envelope */}
          <motion.div
            className="mt-2 rounded-2xl bg-white/10 backdrop-blur-md px-8 py-4 border border-white/20 shadow-inner-gold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-widest text-ivory/50">
              Kepada Yth.
            </p>
            <p className="mt-1 text-lg font-medium text-ivory font-display">
              {displayGuest}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
          >
            <Button
              onClick={onOpen}
              className="mt-2 bg-gold text-burgundy hover:bg-gold/90 focus-visible:ring-2 focus-visible:ring-white shadow-gold-md transition-all hover:shadow-gold-lg hover:scale-105"
              aria-label="Buka undangan"
            >
              ✉ Buka Undangan
            </Button>
          </motion.div>

          <motion.p
            className="text-[10px] text-ivory/30 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            Powered by AdaUndangan
          </motion.p>
        </div>

        {/* Bottom ornament */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/30 to-transparent mx-auto" />
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
