/** Utility to merge Tailwind class names. Simple concat; use clsx/tailwind-merge if needed later. */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

const DEFAULT_GUEST = "Bapak/Ibu/Saudara/i";
const MAX_GUEST_NAME_LENGTH = 100;

/** Read the `to` query parameter from the current URL as a safe guest display name. */
export function getGuestName(): string {
  if (typeof window === "undefined") return DEFAULT_GUEST;
  const sp = new URLSearchParams(window.location.search);
  const raw = sp.get("to");
  if (!raw) return DEFAULT_GUEST;
  const trimmed = decodeURIComponent(raw)
    .trim()
    .slice(0, MAX_GUEST_NAME_LENGTH);
  return trimmed || DEFAULT_GUEST;
}
