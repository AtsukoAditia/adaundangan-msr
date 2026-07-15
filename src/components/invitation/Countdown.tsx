"use client";

import { motion, AnimatePresence } from "motion/react";
import { Heart } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

interface Props {
  targetDate: string;
}

function calcDiff(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

function FlipUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  const [prev, setPrev] = useState(display);
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (display !== prev) {
      setFlipping(true);
      const t = setTimeout(() => {
        setPrev(display);
        setFlipping(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [display, prev]);

  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flip-card">
        <div className="relative w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 rounded-xl bg-gradient-to-b from-burgundy-600 to-burgundy overflow-hidden shadow-burgundy-md">
          {/* Top half */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-burgundy-500/50 to-burgundy-600 overflow-hidden flex items-end justify-center rounded-t-xl border-b border-burgundy-800/50">
            <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gold translate-y-1/2">
              {display}
            </span>
          </div>
          {/* Bottom half */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-burgundy overflow-hidden flex items-start justify-center rounded-b-xl">
            <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gold/90 -translate-y-1/2">
              {display}
            </span>
          </div>
          {/* Center divider */}
          <div className="absolute inset-x-0 top-1/2 h-px bg-burgundy-800/60 z-10" />
          {/* Flip overlay */}
          <AnimatePresence>
            {flipping && (
              <motion.div
                className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-burgundy-500/60 to-burgundy-600 rounded-t-xl origin-bottom flex items-end justify-center overflow-hidden"
                initial={{ rotateX: 0 }}
                animate={{ rotateX: -180 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
              >
                <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gold translate-y-1/2">
                  {prev}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        </div>
      </div>
      <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-ivory/70 font-medium">
        {label}
      </span>
    </motion.div>
  );
}

export default function Countdown({ targetDate }: Props) {
  const target = useMemo(() => new Date(targetDate), [targetDate]);
  const [remaining, setRemaining] = useState(() => calcDiff(target));
  const rafRef = useRef<number>(0);

  useEffect(() => {
    let last = 0;
    const tick = (time: number) => {
      if (time - last >= 1000) {
        setRemaining(calcDiff(target));
        last = time;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target]);

  if (!remaining) {
    return (
      <section className="relative overflow-hidden bg-burgundy px-6 py-20 text-center">
        <div className="absolute inset-0 bg-noise-texture opacity-[0.03]" />
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heart className="mx-auto mb-4 h-10 w-10 text-gold fill-gold animate-heartbeat" />
          <p className="font-display text-2xl font-bold text-gold">Acara telah berlangsung</p>
          <p className="mt-2 text-sm text-ivory/60">Terima kasih atas kehadiran Anda</p>
        </motion.div>
      </section>
    );
  }

  const units = [
    { label: "Hari", value: remaining.days },
    { label: "Jam", value: remaining.hours },
    { label: "Menit", value: remaining.minutes },
    { label: "Detik", value: remaining.seconds },
  ];

  return (
    <section className="relative overflow-hidden bg-burgundy px-6 py-16 sm:py-20">
      <div className="absolute inset-0 bg-noise-texture opacity-[0.03]" />
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-lg">
        <motion.h2
          className="mb-8 text-center font-display text-lg tracking-widest text-gold/80 uppercase"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Menghitung Hari
        </motion.h2>
        <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
          {units.map((u) => (
            <FlipUnit key={u.label} value={u.value} label={u.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
