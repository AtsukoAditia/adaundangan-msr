// Date/time formatting helpers for Indonesian locale.
const ID_DAYS = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];
const ID_MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

/** Format an ISO datetime to a long Indonesian date, e.g. "Minggu, 24 Januari 2027". */
export function formatLongDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${ID_DAYS[d.getDay()]}, ${d.getDate()} ${ID_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

/** Format an ISO datetime to "HH.mm WIB-ish" using the offset embedded in the string. */
export function formatTimeRange(startIso: string, endIso: string): string {
  const fmt = (iso: string) => {
    const match = iso.match(/T(\d{2}):(\d{2})/);
    if (!match) return "";
    return `${match[1]}.${match[2]}`;
  };
  const start = fmt(startIso);
  const end = fmt(endIso);
  if (!start) return "";
  return end ? `${start} - ${end} WIB` : `${start} WIB`;
}

/** Short numeric date for compact display, e.g. "24.01.2027". */
export function formatShortDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`;
}
