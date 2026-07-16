"use client";

import { useState } from "react";
import { faqs as FAQS } from "@/config/landing";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "@/components/animation/ScrollReveal";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gold/15 rounded-2xl bg-white overflow-hidden shadow-sm transition-all hover:shadow-card-hover">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-display text-base font-semibold text-burgundy">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown size={20} className="text-gold" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 text-sm leading-relaxed text-burgundy/60">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative bg-ivory px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="mb-16 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold/60 mb-3">Tanya Jawab</p>
            <h2 className="section-title">FAQ</h2>
            <div className="ornament-line mt-4"><div className="deco-dot" /></div>
            <p className="section-subtitle mt-4">
              Pertanyaan yang sering ditanyakan oleh calon pengantin
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
