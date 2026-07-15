"use client";

import { WeddingEvent } from "@/types/invitation";
import { ExternalLink, MapPin } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animation/StaggerChildren";
import { motion } from "motion/react";

interface Props {
  events: WeddingEvent[];
}

export default function LocationSection({ events }: Props) {
  const withMaps = events.filter((e) => e.mapsUrl);
  if (!withMaps.length) return null;

  return (
    <section id="location" className="relative bg-ivory px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/15"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <MapPin className="h-7 w-7 text-gold" />
            </motion.div>
            <h2 className="section-title">Lokasi</h2>
            <p className="section-subtitle mt-3">Temukan lokasi acara kami</p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="space-y-12" stagger={0.2}>
          {withMaps.map((event) => (
            <StaggerItem key={event.id}>
              <div className="group">
                <h3 className="text-center font-display text-xl font-bold text-burgundy mb-3">
                  {event.title}
                </h3>

                <div className="flex items-start justify-center gap-2 text-sm text-burgundy/70 mb-5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/60" />
                  <span>{event.address}</span>
                </div>

                {event.mapsEmbedUrl && (
                  <div className="overflow-hidden rounded-2xl border border-gold/15 shadow-sm group-hover:shadow-card-hover transition-shadow duration-300">
                    <iframe
                      src={event.mapsEmbedUrl}
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Lokasi ${event.title}`}
                    />
                  </div>
                )}

                {event.mapsUrl && (
                  <div className="text-center mt-4">
                    <a
                      href={event.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white px-6 py-2.5 text-sm font-medium text-burgundy shadow-sm transition-all duration-200 hover:bg-gold/10 hover:shadow-gold-sm hover:-translate-y-0.5"
                    >
                      <MapPin className="h-4 w-4" />
                      Buka di Google Maps
                      <ExternalLink className="h-3 w-3 text-burgundy/40" />
                    </a>
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
