import { rsvpSchema } from "@/lib/rsvp-schema";
import { describe, expect, it } from "vitest";

describe("rsvpSchema (server-side)", () => {
  const validBase = {
    slug: "demo-dan-demo",
    guestName: "Budi Santoso",
    attendance: "HADIR" as const,
    guestCount: 2,
    message: "Selamat menempuh hidup baru!",
  };

  it("accepts valid payload", () => {
    const result = rsvpSchema.safeParse(validBase);
    expect(result.success).toBe(true);
  });

  it("rejects empty guestName", () => {
    const result = rsvpSchema.safeParse({ ...validBase, guestName: "" });
    expect(result.success).toBe(false);
  });

  it("rejects invalid attendance value", () => {
    const result = rsvpSchema.safeParse({ ...validBase, attendance: "MAYBE" });
    expect(result.success).toBe(false);
  });

  it("rejects guestCount above max", () => {
    const result = rsvpSchema.safeParse({ ...validBase, guestCount: 11 });
    expect(result.success).toBe(false);
  });

  it("rejects negative guestCount", () => {
    const result = rsvpSchema.safeParse({ ...validBase, guestCount: -1 });
    expect(result.success).toBe(false);
  });

  it("accepts guestCount of 0", () => {
    const result = rsvpSchema.safeParse({ ...validBase, guestCount: 0 });
    expect(result.success).toBe(true);
  });

  it("accepts TIDAK_HADIR with guestCount 0", () => {
    const result = rsvpSchema.safeParse({
      ...validBase,
      attendance: "TIDAK_HADIR",
      guestCount: 0,
    });
    expect(result.success).toBe(true);
  });

  it("rejects empty slug", () => {
    const result = rsvpSchema.safeParse({ ...validBase, slug: "" });
    expect(result.success).toBe(false);
  });

  it("accepts optional message", () => {
    const result = rsvpSchema.safeParse({ ...validBase, message: undefined });
    expect(result.success).toBe(true);
  });

  it("trims guestName whitespace", () => {
    const result = rsvpSchema.safeParse({
      ...validBase,
      guestName: "  Budi  ",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.guestName).toBe("Budi");
    }
  });
});
