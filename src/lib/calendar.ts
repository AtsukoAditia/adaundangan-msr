import type { WeddingEvent } from "@/types/invitation";

/**
 * Build a Google Calendar URL for a wedding event.
 */
export function buildGoogleCalendarUrl(
  event: WeddingEvent,
  coupleName: string,
): string {
  const start = new Date(event.startAt);
  const end = new Date(event.endAt);

  const fmt = (d: Date) =>
    d
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${event.title} - ${coupleName}`,
    dates: `${fmt(start)}/${fmt(end)}`,
    details: event.description || `${event.title} pernikahan ${coupleName}`,
    location: `${event.venue}, ${event.address}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
