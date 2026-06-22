// Input normalization helpers. Used on both client and server.

export function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  // Collapse whitespace, strip control characters, trim, and clamp length.
  const cleaned = value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned.slice(0, maxLength);
}

const FALLBACK_GUEST_NAME = "Bapak/Ibu/Saudara/i";

/**
 * Decode and sanitize a guest name coming from the `?to=` query parameter.
 * Safe against malformed encoding; never returns HTML; clamps length.
 */
export function parseGuestName(raw: string | null | undefined): string {
  if (!raw) return FALLBACK_GUEST_NAME;
  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw);
  } catch {
    decoded = raw;
  }
  const cleaned = sanitizeText(decoded, 80);
  return cleaned.length > 0 ? cleaned : FALLBACK_GUEST_NAME;
}

export { FALLBACK_GUEST_NAME };
