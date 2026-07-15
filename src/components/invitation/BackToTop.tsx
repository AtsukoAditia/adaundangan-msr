"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, 1]);

  return (
    <motion.div style={{ opacity }} className="fixed bottom-4 right-20 z-40">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gold/30 text-burgundy transition hover:bg-gold/10 hover:scale-110"
        aria-label="Kembali ke atas"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </motion.div>
  );
}
