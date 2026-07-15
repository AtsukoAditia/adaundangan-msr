"use client";

import { Person } from "@/types/invitation";
import { Heart } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import ScrollReveal from "@/components/animation/ScrollReveal";

interface Props {
  groom: Person;
  bride: Person;
}

function PersonCard({ person, direction }: { person: Person; direction: "left" | "right" }) {
  const displayName = person.nickname ? `${person.name} (${person.nickname})` : person.name;

  return (
    <ScrollReveal direction={direction} className="flex-1 max-w-sm">
      <div className="flex flex-col items-center gap-5">
        {/* Photo with rotating gold ring */}
        <div className="relative">
          <motion.div
            className="absolute -inset-3 rounded-full border border-dashed border-gold/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative h-48 w-48 md:h-56 md:w-56 overflow-hidden rounded-full border-4 border-gold/40 shadow-gold-md">
            {person.photoUrl ? (
              <Image
                src={person.photoUrl}
                alt={person.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 768px) 192px, 224px"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-burgundy-100 to-burgundy-200 flex items-center justify-center">
                <Heart className="h-12 w-12 text-gold/40" />
              </div>
            )}
          </div>
          {/* Corner accents */}
          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold/50" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-gold/30" />
        </div>

        {/* Name + info */}
        <div className="text-center space-y-2">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-burgundy">
            {displayName}
          </h3>
          {person.childOrder && (
            <p className="text-sm text-gold font-medium capitalize">{person.childOrder}</p>
          )}
          <div className="ornament-line">
            <div className="deco-dot" />
          </div>
          <p className="text-sm text-burgundy/60 leading-relaxed">
            Putra/i dari Bpk. {person.fatherName} & Ibu {person.motherName}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function CoupleSection({ groom, bride }: Props) {
  return (
    <section id="couple" className="relative bg-white px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">Mempelai</h2>
            <div className="ornament-line mt-4">
              <div className="deco-dot" />
            </div>
            <p className="section-subtitle mt-4">
              Dengan penuh rasa syukur, kami memperkenalkan kedua mempelai
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 md:gap-16">
          <PersonCard person={groom} direction="left" />

          {/* Center heart connector */}
          <div className="flex flex-col items-center gap-4 py-4 md:pt-28">
            <div className="hidden md:block h-20 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="h-8 w-8 text-gold fill-gold" />
            </motion.div>
            <div className="hidden md:block h-20 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
          </div>

          <PersonCard person={bride} direction="right" />
        </div>
      </div>
    </section>
  );
}
