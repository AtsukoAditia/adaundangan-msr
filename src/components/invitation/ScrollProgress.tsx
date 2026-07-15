"use client";

import { motion, useScroll, useSpring } from "motion/react";

interface Props {
  color?: string;
}

export default function ScrollProgress({ color }: Props) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{
        scaleX,
        background:
          color ?? "linear-gradient(90deg, #7B1D2A, #D4AF37)",
      }}
    />
  );
}
