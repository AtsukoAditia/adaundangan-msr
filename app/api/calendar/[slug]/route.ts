import { getInvitationBySlug } from "@/data/invitations/index";
import { generateICS } from "@/lib/ics";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const invitation = getInvitationBySlug(slug);

  if (!invitation) {
    return NextResponse.json(
      { success: false, error: "Undangan tidak ditemukan" },
      { status: 404 },
    );
  }

  const { searchParams } = new URL(request.url);
  const eventId = searchParams.get("event");
  const coupleName = `${invitation.couple.groom.name} & ${invitation.couple.bride.name}`;

  let event = invitation.events[0];
  if (eventId) {
    const found = invitation.events.find((e) => e.id === eventId);
    if (found) event = found;
  }

  const icsContent = generateICS(event, coupleName);
  const filename = `${invitation.slug}-${event.id}.ics`;

  return new NextResponse(icsContent, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
