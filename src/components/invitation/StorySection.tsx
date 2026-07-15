"use client";

import { StoryItem } from "@/types/invitation";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { Heart } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animation/StaggerChildren";

interface Props {
  story: StoryItem[];
}

export default function StorySection({ story }: Props) {
  if (!story.length) return null;

  return (
    <section id="story" className="relative bg-ivory px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">Kisah Kami</h2>
            <div className="ornament-line mt-4">
              <div className="deco-dot" />
            </div>
            <p className="section-subtitle mt-4">
              Perjalanan cinta yang membawa kami ke hari bahagia ini
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="relative" stagger={0.15}>
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

          {story.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <StaggerItem key={item.title}>
                <div
                  className={`relative mb-12 flex items-start gap-6 md:gap-10 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 top-1 z-10 -translate-x-1/2">
                    <div className="relative">
                      <Heart className="h-4 w-4 fill-gold text-gold" />
                      <div className="absolute inset-0 animate-ping">
                        <Heart className="h-4 w-4 fill-gold/30 text-gold/30" />
                      </div>
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-14 md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="rounded-2xl bg-white p-5 shadow-sm border border-gold/10 hover:shadow-card-hover transition-shadow duration-300">
                      {/* Date badge */}
                      <div
                        className={`inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-3 py-1 mb-3 ${
                          isLeft ? "md:ml-auto" : ""
                        }`}
                      >
                        <Heart className="h-3 w-3 text-gold fill-gold" />
                        <span className="text-xs font-medium text-gold">
                          {format(new Date(item.date), "dd MMMM yyyy", { locale: localeId })}
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-bold text-burgundy mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-burgundy/70">
                        {item.description}
                      </p>

                      {item.imageUrl && (
                        <div className="mt-4 relative aspect-[4/3] overflow-hidden rounded-lg">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
