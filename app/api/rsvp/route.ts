import { getRepository } from "@/lib/get-repository";
import { rsvpSchema } from "@/lib/rsvp-schema";
import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, error: "Content-Type tidak sesuai" },
        { status: 415 },
      );
    }

    const raw = await request.json();
    if (!raw || typeof raw !== "object") {
      return NextResponse.json(
        { success: false, error: "Payload tidak valid" },
        { status: 400 },
      );
    }

    // Honeypot check
    if (raw.website && raw.website.length > 0) {
      return NextResponse.json({ success: true, id: "ok" });
    }

    const parsed = rsvpSchema.safeParse(raw);
    if (!parsed.success) {
      const messages = parsed.error.issues.map((i) => i.message);
      return NextResponse.json(
        { success: false, error: messages.join("; ") },
        { status: 422 },
      );
    }

    const data = parsed.data;
    const id = crypto.randomUUID();
    const timestamp = new Date().toISOString();
    const repo = await getRepository();
    await repo.createEntry(
      {
        slug: data.slug || "unknown",
        guestName: data.guestName,
        attendance: data.attendance,
        guestCount: data.guestCount,
        message: data.message,
      },
      id,
      timestamp,
    );

    return NextResponse.json({ success: true, id });
  } catch (err) {
    console.error("[RSVP API]", err);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
