import { InvitationConfig } from "@/types/invitation";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";

interface Props {
  config: InvitationConfig;
}

export default function HeroSection({ config }: Props) {
  const couple = `${config.couple.groom.name} & ${config.couple.bride.name}`;
  const primaryEvent =
    config.events.find((e) => e.isPrimary) ?? config.events[0];
  const eventDate = primaryEvent ? new Date(primaryEvent.startAt) : null;

  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: config.hero.backgroundImage
          ? `url(${config.hero.backgroundImage})`
          : undefined,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy/70 to-burgundy/50" />
      <div className="relative z-10 flex flex-col items-center gap-4 p-8 text-center text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">
          Pernikahan
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-gold">
          {couple}
        </h1>
        {eventDate && (
          <p className="mt-2 text-lg tracking-widest text-ivory/90">
            {format(eventDate, "EEEE, dd MMMM yyyy", { locale: localeId })}
          </p>
        )}
        {primaryEvent && (
          <p className="text-sm text-ivory/70">{primaryEvent.venue}</p>
        )}
      </div>
    </section>
  );
}
