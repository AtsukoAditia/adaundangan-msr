"use client";

import { Button } from "@/components/ui/Button";
import { InvitationConfig } from "@/types/invitation";
import { format } from "date-fns";
import { id as localeId } from "date-fns/locale";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  config: InvitationConfig;
  guestName: string;
  onOpen: () => void;
}

export default function InvitationCover({ config, guestName, onOpen }: Props) {
  const [mounted, setMounted] = useState(false);
  const couple = `${config.couple.groom.name} & ${config.couple.bride.name}`;
  const primaryEvent =
    config.events.find((e) => e.isPrimary) ?? config.events[0];
  const eventDate = primaryEvent ? new Date(primaryEvent.startAt) : null;

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Prevent hydration mismatch: render default on server, real guest name after mount
  const displayGuest = mounted ? guestName : "Bapak/Ibu/Saudara/i";

  return (
    <section
      id="cover"
      className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center bg-no-repeat bg-burgundy"
      style={{
        backgroundImage: config.hero.backgroundImage
          ? `url(${config.hero.backgroundImage})`
          : undefined,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-burgundy/80 to-burgundy/60 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col items-center gap-6 p-8 text-center text-white max-w-md">
        <div className="flex items-center gap-3 text-gold">
          <span className="h-px w-12 bg-gold" />
          <Heart className="h-5 w-5 fill-current" />
          <span className="h-px w-12 bg-gold" />
        </div>
        <p className="text-sm uppercase tracking-[0.3em] text-gold">
          Undangan Pernikahan
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-gold">
          {couple}
        </h1>
        {eventDate && (
          <p className="text-sm tracking-widest text-ivory/80">
            {format(eventDate, "dd MMMM yyyy", { locale: localeId })}
          </p>
        )}
        <div className="mt-2 rounded-full bg-white/10 px-6 py-3 backdrop-blur-sm border border-white/20">
          <p className="text-xs uppercase tracking-widest text-ivory/60">
            Kepada Yth.
          </p>
          <p className="mt-1 text-lg font-medium text-ivory">{displayGuest}</p>
        </div>
        <Button
          onClick={onOpen}
          className="mt-4 bg-gold text-burgundy hover:bg-gold/90 focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Buka undangan"
        >
          Buka Undangan
        </Button>
        <p className="text-xs text-ivory/40 mt-2">Powered by AdaUndangan</p>
      </div>
    </section>
  );
}
