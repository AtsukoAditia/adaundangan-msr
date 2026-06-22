import type { WeddingEvent } from "@/types/invitation";

/**
 * Escape special characters for ICS format.
 */
function icsEscape(str: string): string {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;")
    .replace(/\n/g, "\\n");
}

/**
 * Format a Date to ICS datetime string (local timezone).
 */
function toICSDate(dateStr: string): string {
  const d = new Date(dateStr);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

/**
 * Generate ICS content for a wedding event.
 */
export function generateICS(event: WeddingEvent, coupleName: string): string {
  const uid = `${event.id}-${event.startAt.replace(/[^0-9]/g, "")}@adaundangan.id`;
  const dtstamp = toICSDate(new Date().toISOString());
  const dtstart = toICSDate(event.startAt);
  const dtend = toICSDate(event.endAt);

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//AdaUndangan//ID",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `DTSTART:${dtstart}`,
    `DTEND:${dtend}`,
    `SUMMARY:${icsEscape(event.title)} - ${icsEscape(coupleName)}`,
    `DESCRIPTION:${icsEscape(event.description || `${event.title} pernikahan ${coupleName}`)}`,
    `LOCATION:${icsEscape(`${event.venue}, ${event.address}`)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
