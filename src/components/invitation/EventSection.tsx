import CalendarButtons from "@/components/invitation/CalendarButtons";
import { WeddingEvent } from "@/types/invitation";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { Calendar } from "lucide-react";

interface Props {
  events: WeddingEvent[];
  slug: string;
  coupleName: string;
}

export default function EventSection({ events, slug, coupleName }: Props) {
  return (
    <section id="event" className="bg-ivory px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-burgundy">
          Waktu & Tempat
        </h2>
        <p className="mb-12 text-center text-sm text-burgundy/60">
          Kami mengundang Anda untuk hadir di momen bahagia kami
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event) => {
            const start = new Date(event.startAt);
            const end = event.endAt ? new Date(event.endAt) : null;
            return (
              <div
                key={event.id}
                className="rounded-2xl border border-gold/20 bg-white p-8 text-center shadow-sm"
              >
                <Calendar className="mx-auto mb-4 h-8 w-8 text-gold" />
                <h3 className="font-display text-xl font-bold text-burgundy">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm text-burgundy/70">
                  {format(start, "EEEE, dd MMMM yyyy", { locale: localeId })}
                </p>
                <p className="text-sm text-burgundy/70">
                  {format(start, "HH:mm")}
                  {end ? ` - ${format(end, "HH:mm")}` : ""} WIB
                </p>
                <p className="mt-2 text-sm text-burgundy/60">{event.venue}</p>
                {event.address && (
                  <p className="text-xs text-burgundy/50">{event.address}</p>
                )}
                {event.mapsUrl && (
                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs text-gold underline underline-offset-2 hover:text-gold/80"
                  >
                    Lihat di Google Maps
                  </a>
                )}
                <div className="mt-5">
                  <CalendarButtons
                    event={event}
                    slug={slug}
                    coupleName={coupleName}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
