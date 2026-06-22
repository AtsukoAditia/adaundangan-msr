import type { GuestbookRepository } from "./repository";
import { isDemoMode, getGoogleSheetsCredentials } from "./env";

let _repo: GuestbookRepository | null = null;

export async function getRepository(): Promise<GuestbookRepository> {
  if (_repo) return _repo;
  if (isDemoMode()) {
    const { DemoRepository } = await import("./demo-repository");
    _repo = new DemoRepository();
  } else {
    const creds = getGoogleSheetsCredentials();
    if (!creds) {
      // Fall back to demo so app doesn't crash on missing config.
      const { DemoRepository } = await import("./demo-repository");
      _repo = new DemoRepository();
    } else {
      const { SheetsRepository } = await import("./sheets-repository");
      _repo = new SheetsRepository(creds);
    }
  }
  return _repo;
}
