"use client";

import { buildGoogleCalendarUrl } from "@/lib/calendar";
import { WeddingEvent } from "@/types/invitation";
import { CalendarPlus, Download } from "lucide-react";

interface Props {
  /** Render buttons for a single event (when used inside an event card) */
  event?: WeddingEvent;
  /** Render buttons for all events (when used as standalone section) */
  events?: WeddingEvent[];
  slug: string;
  coupleName: string;
}

export default function CalendarButtons({
  event,
  events,
  slug,
  coupleName,
}: Props) {
  const items = event ? [event] : (events ?? []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {items.map((ev) => (
        <div key={ev.id} className="flex gap-2">
          <a
            href={buildGoogleCalendarUrl(ev, coupleName)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white px-4 py-2 text-sm font-medium text-burgundy shadow-sm transition hover:bg-gold/10"
          >
            <CalendarPlus className="h-4 w-4" />
            Google Calendar
          </a>
          <a
            href={`/api/calendar/${slug}?event=${ev.id}`}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white px-4 py-2 text-sm font-medium text-burgundy shadow-sm transition hover:bg-gold/10"
          >
            <Download className="h-4 w-4" />
            .ics
          </a>
        </div>
      ))}
    </div>
  );
}
