// Server-side environment access. Never import secrets into client components.
export function isDemoMode(): boolean {
  // Default to demo mode unless explicitly disabled.
  return process.env.DEMO_MODE !== "false";
}

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";
}

export interface GoogleSheetsCredentials {
  email: string;
  privateKey: string;
  sheetId: string;
  sheetName: string;
}

/**
 * Read and validate Google Sheets credentials.
 * Returns null when incomplete (caller decides how to handle).
 * Never logs or returns the secret values themselves.
 */
export function getGoogleSheetsCredentials(): GoogleSheetsCredentials | null {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const sheetName = process.env.GOOGLE_SHEET_NAME || "RSVP";

  if (!email || !rawKey || !sheetId) {
    return null;
  }

  // Normalize escaped newlines in the private key.
  const privateKey = rawKey.replace(/\\n/g, "\n");

  return { email, privateKey, sheetId, sheetName };
}
