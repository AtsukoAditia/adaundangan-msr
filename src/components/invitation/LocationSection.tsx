import { WeddingEvent } from "@/types/invitation";
import { MapPin } from "lucide-react";

interface Props {
  events: WeddingEvent[];
}

export default function LocationSection({ events }: Props) {
  const withMaps = events.filter((e) => e.mapsUrl);
  if (!withMaps.length) return null;

  return (
    <section id="location" className="bg-ivory px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-burgundy">
          Lokasi
        </h2>
        <p className="mb-12 text-center text-sm text-burgundy/60">
          Temukan lokasi acara kami
        </p>
        <div className="space-y-10">
          {withMaps.map((event) => (
            <div key={event.id} className="space-y-4">
              <h3 className="text-center font-display text-xl font-bold text-burgundy">
                {event.title}
              </h3>
              <div className="flex items-start justify-center gap-2 text-sm text-burgundy/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{event.address}</span>
              </div>
              {event.mapsEmbedUrl && (
                <div className="overflow-hidden rounded-lg border border-gold/20">
                  <iframe
                    src={event.mapsEmbedUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Lokasi ${event.title}`}
                  />
                </div>
              )}
              {event.mapsUrl && (
                <div className="text-center">
                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white px-6 py-2 text-sm font-medium text-burgundy shadow-sm transition hover:bg-gold/10"
                  >
                    <MapPin className="h-4 w-4" />
                    Buka di Google Maps
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
