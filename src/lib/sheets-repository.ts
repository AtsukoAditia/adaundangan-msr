import type { GuestbookRepository } from "./repository";
import type { RSVPInput, GuestBookEntry, AttendanceStatus } from "@/types/invitation";
import type { GoogleSheetsCredentials } from "./env";

export class SheetsRepository implements GuestbookRepository {
  private credentials: GoogleSheetsCredentials;

  constructor(credentials: GoogleSheetsCredentials) {
    this.credentials = credentials;
  }

  private async getAuth() {
    const { google } = await import("googleapis");
    const auth = new google.auth.JWT({
      email: this.credentials.email,
      key: this.credentials.privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    return auth;
  }

  async createEntry(input: RSVPInput, id: string, timestamp: string): Promise<void> {
    const { google } = await import("googleapis");
    const auth = await this.getAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const values = [
      [
        id,
        timestamp,
        input.slug,
        input.guestName,
        input.attendance,
        input.attendance === "TIDAK_HADIR" ? 0 : input.guestCount,
        input.message,
        "FALSE",
      ],
    ];
    await sheets.spreadsheets.values.append({
      spreadsheetId: this.credentials.sheetId,
      range: `${this.credentials.sheetName}!A:H`,
      valueInputOption: "RAW",
      requestBody: { values },
    });
  }

  async listApproved(slug: string, limit = 20): Promise<GuestBookEntry[]> {
    const { google } = await import("googleapis");
    const auth = await this.getAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: this.credentials.sheetId,
      range: `${this.credentials.sheetName}!A:H`,
    });
    const rows = response.data.values ?? [];
    if (rows.length < 2) return [];
    // Header: ID | Timestamp | Slug | Guest Name | Attendance | Guest Count | Message | Approved
    const data = rows.slice(1); // skip header row
    const results: GuestBookEntry[] = [];
    for (const row of data) {
      const [id, timestamp, rowSlug, guestName, attendance, guestCount, message, approved] = row as string[];
      if (rowSlug !== slug) continue;
      if ((approved ?? "").toUpperCase() !== "TRUE") continue;
      results.push({
        id: id ?? "",
        guestName: guestName ?? "",
        attendance: (attendance ?? "RAGU") as AttendanceStatus,
        guestCount: parseInt(guestCount ?? "0", 10) || 0,
        message: message ?? "",
        timestamp: timestamp ?? "",
      });
    }
    // Sort newest first, limit output.
    return results.reverse().slice(0, limit);
  }
}
