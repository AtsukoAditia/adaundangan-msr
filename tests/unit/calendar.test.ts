import { buildGoogleCalendarUrl } from "@/lib/calendar";
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

describe("buildGoogleCalendarUrl", () => {
  it("returns a valid Google Calendar URL", () => {
    const url = buildGoogleCalendarUrl(mockEvent, "Dan & Demo");
    expect(url).toContain("https://calendar.google.com/calendar/render");
  });

  it("includes event title with couple name", () => {
    const url = buildGoogleCalendarUrl(mockEvent, "Dan & Demo");
    const params = new URL(url).searchParams;
    expect(params.get("text")).toContain("Akad Nikah");
    expect(params.get("text")).toContain("Dan & Demo");
  });

  it("includes location", () => {
    const url = buildGoogleCalendarUrl(mockEvent, "Dan & Demo");
    const params = new URL(url).searchParams;
    expect(params.get("location")).toContain("Masjid Al-Ikhlas");
  });

  it("includes formatted dates", () => {
    const url = buildGoogleCalendarUrl(mockEvent, "Dan & Demo");
    const params = new URL(url).searchParams;
    const dates = params.get("dates")!;
    expect(dates).toMatch(/^\d{8}T\d{6}Z\/\d{8}T\d{6}Z$/);
  });

  it("uses description when provided", () => {
    const url = buildGoogleCalendarUrl(mockEvent, "Dan & Demo");
    const params = new URL(url).searchParams;
    expect(params.get("details")).toBe("Akad nikah Dan & Demo");
  });

  it("falls back to default description when empty", () => {
    const eventNoDesc = { ...mockEvent, description: "" };
    const url = buildGoogleCalendarUrl(eventNoDesc, "Dan & Demo");
    const params = new URL(url).searchParams;
    expect(params.get("details")).toContain("pernikahan");
  });
});
