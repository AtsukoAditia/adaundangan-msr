import { generateICS } from "@/lib/ics";
import type { WeddingEvent } from "@/types/invitation";
import { describe, expect, it } from "vitest";

const mockEvent: WeddingEvent = {
  id: "akad",
  title: "Akad Nikah",
  description: "Akad nikah Dan & Demo",
  venue: "Masjid Al-Ikhlas",
  address: "Jl. Mawar No. 10, Jakarta",
  startAt: "2027-01-24T08:00:00+07:00",
  endAt: "2027-01-24T10:00:00+07:00",
  mapsUrl: "https://maps.google.com/?q=Masjid+Al-Ikhlas",
};

describe("generateICS", () => {
  it("starts with BEGIN:VCALENDAR", () => {
    const ics = generateICS(mockEvent, "Dan & Demo");
    expect(ics.startsWith("BEGIN:VCALENDAR")).toBe(true);
  });

  it("ends with END:VCALENDAR", () => {
    const ics = generateICS(mockEvent, "Dan & Demo");
    expect(ics.trimEnd().endsWith("END:VCALENDAR")).toBe(true);
  });

  it("contains VERSION:2.0", () => {
    const ics = generateICS(mockEvent, "Dan & Demo");
    expect(ics).toContain("VERSION:2.0");
  });

  it("contains PRODID", () => {
    const ics = generateICS(mockEvent, "Dan & Demo");
    expect(ics).toContain("PRODID:-//AdaUndangan//ID");
  });

  it("contains SUMMARY with couple name", () => {
    const ics = generateICS(mockEvent, "Dan & Demo");
    expect(ics).toContain("SUMMARY:Akad Nikah - Dan & Demo");
  });

  it("contains LOCATION", () => {
    const ics = generateICS(mockEvent, "Dan & Demo");
    expect(ics).toContain("LOCATION:Masjid Al-Ikhlas");
  });

  it("contains VEVENT block", () => {
    const ics = generateICS(mockEvent, "Dan & Demo");
    expect(ics).toContain("BEGIN:VEVENT");
    expect(ics).toContain("END:VEVENT");
  });

  it("contains UID", () => {
    const ics = generateICS(mockEvent, "Dan & Demo");
    expect(ics).toMatch(/UID:.*@adaundangan\.id/);
  });

  it("contains DTSTAMP", () => {
    const ics = generateICS(mockEvent, "Dan & Demo");
    expect(ics).toContain("DTSTAMP:");
  });

  it("contains DTSTART and DTEND", () => {
    const ics = generateICS(mockEvent, "Dan & Demo");
    expect(ics).toContain("DTSTART:");
    expect(ics).toContain("DTEND:");
  });

  it("uses CRLF line endings", () => {
    const ics = generateICS(mockEvent, "Dan & Demo");
    const lines = ics.split("\r\n");
    expect(lines.length).toBeGreaterThan(1);
  });

  it("escapes commas in venue name", () => {
    const eventComma: WeddingEvent = {
      ...mockEvent,
      venue: "Hotel Grand, Ballroom",
    };
    const ics = generateICS(eventComma, "Dan & Demo");
    expect(ics).toContain("Hotel Grand\\, Ballroom");
  });
});
