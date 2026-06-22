/* ------------------------------------------------------------------ */
/*  Repository interface — canonical source                            */
/* ------------------------------------------------------------------ */

import type { GuestBookEntry, RSVPInput } from "@/types/invitation";

export type { GuestBookEntry, RSVPInput } from "@/types/invitation";

export interface GuestbookRepository {
  createEntry(input: RSVPInput, id: string, timestamp: string): Promise<void>;
  listApproved(slug: string, limit?: number): Promise<GuestBookEntry[]>;
}
