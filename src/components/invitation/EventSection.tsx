import CalendarButtons from "@/components/invitation/CalendarButtons";
import { WeddingEvent } from "@/types/invitation";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { Calendar, Clock, MapPin } from "lucide-react";
import ScrollReveal from "@/components/animation/ScrollReveal";
import StaggerChildren, { StaggerItem } from "@/components/animation/StaggerChildren";

interface Props {
  events: WeddingEvent[];
  slug: string;
  coupleName: string;
}

export default function EventSection({ events, slug, coupleName }: Props) {
  return (
    <section id="event" className="relative bg-ivory px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="section-title">Waktu & Tempat</h2>
            <div className="ornament-line mt-4">
              <div className="deco-dot" />
            </div>
            <p className="section-subtitle mt-4">
              Kami mengundang Anda untuk hadir di momen bahagia kami
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid gap-8 md:grid-cols-2" stagger={0.15}>
          {events.map((event) => {
            const start = new Date(event.startAt);
            const end = event.endAt ? new Date(event.endAt) : null;
            return (
              <StaggerItem key={event.id}>
                <div className="group rounded-2xl bg-white/80 backdrop-blur-md border border-white/50 p-8 text-center shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  {/* Icon */}
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors">
                    <Calendar className="h-7 w-7 text-gold" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-burgundy mb-3">
                    {event.title}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center justify-center gap-2 text-sm text-burgundy/70">
                    <Calendar className="h-3.5 w-3.5 text-gold/60" />
                    <span>{format(start, "EEEE, dd MMMM yyyy", { locale: localeId })}</span>
                  </div>

                  {/* Time */}
                  <div className="flex items-center justify-center gap-2 text-sm text-burgundy/70 mt-1">
                    <Clock className="h-3.5 w-3.5 text-gold/60" />
                    <span>
                      {format(start, "HH:mm")}
                      {end ? ` - ${format(end, "HH:mm")}` : ""} WIB
                    </span>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start justify-center gap-2 text-sm text-burgundy/60 mt-3">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold/50" />
                    <span>{event.venue}</span>
                  </div>

                  {event.address && (
                    <p className="text-xs text-burgundy/40 mt-1">{event.address}</p>
                  )}

                  {event.dressCode && (
                    <p className="text-xs text-gold/70 mt-2 font-medium">
                      Dress Code: {event.dressCode}
                    </p>
                  )}

                  {event.mapsUrl && (
                    <a
                      href={event.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-xs text-gold underline underline-offset-2 hover:text-gold/80 transition"
                    >
                      Lihat di Google Maps
                    </a>
                  )}

                  {/* Maps embed */}
                  {event.mapsEmbedUrl && (
                    <div className="mt-5 overflow-hidden rounded-xl border border-gold/15 shadow-sm">
                      <iframe
                        src={event.mapsEmbedUrl}
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Lokasi ${event.title}`}
                      />
                    </div>
                  )}

                  <div className="mt-5">
                    <CalendarButtons event={event} slug={slug} coupleName={coupleName} />
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
