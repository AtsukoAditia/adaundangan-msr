import type { GuestbookRepository } from "./repository";
import type { RSVPInput, GuestBookEntry } from "@/types/invitation";
import { demoGuestbook } from "@/data/demo-guestbook";

export class DemoRepository implements GuestbookRepository {
  async createEntry(_input: RSVPInput, _id: string, _timestamp: string): Promise<void> {
    // In demo mode we do nothing — no persistence.
    return Promise.resolve();
  }

  async listApproved(slug: string, limit = 20): Promise<GuestBookEntry[]> {
    return demoGuestbook
      .filter((entry) => entry.slug === slug)
      .slice(0, limit)
      .map(({ id, guestName, attendance, guestCount, message, timestamp }) => ({
        id,
        guestName,
        attendance,
        guestCount,
        message,
        timestamp,
      }));
  }
}
