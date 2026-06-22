import { getRepository } from "@/lib/get-repository";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug")?.trim().toLowerCase() || "";

    if (!slug) {
      return NextResponse.json(
        { success: false, error: "Parameter slug diperlukan" },
        { status: 400 },
      );
    }

    const limitParam = searchParams.get("limit");
    const limit = limitParam
      ? Math.min(Math.max(parseInt(limitParam, 10) || 20, 1), 50)
      : 20;

    const repo = await getRepository();
    const entries = await repo.listApproved(slug, limit);

    return NextResponse.json({ success: true, entries });
  } catch (err) {
    console.error("[GuestBook API]", err);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan server" },
      { status: 500 },
    );
  }
}
