"use client";

import { GuestBookEntry } from "@/types/invitation";
import { MessageCircle, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface Props {
  slug: string;
  enabled: boolean;
}

export default function GuestBook({ slug, enabled }: Props) {
  const [entries, setEntries] = useState<GuestBookEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEntries = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/guestbook?slug=${encodeURIComponent(slug)}`,
      );
      if (!res.ok) throw new Error("Gagal memuat buku tamu");
      const data = await res.json();
      setEntries(data.entries ?? []);
    } catch {
      setError("Gagal memuat buku tamu");
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    if (enabled) fetchEntries();
  }, [enabled, fetchEntries]);

  if (!enabled) return null;

  return (
    <section id="guestbook" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-center font-display text-3xl font-bold text-burgundy">
          Buku Tamu
        </h2>
        <p className="mb-12 text-center text-sm text-burgundy/60">
          Ucapan dan doa dari para tamu undangan.
        </p>

        {loading && (
          <div className="flex justify-center py-8">
            <RefreshCw className="h-6 w-6 animate-spin text-gold" />
          </div>
        )}

        {error && (
          <div className="py-8 text-center">
            <p className="mb-4 text-sm text-red-500">{error}</p>
            <button
              type="button"
              onClick={fetchEntries}
              className="text-sm text-gold underline hover:text-gold/80"
            >
              Coba lagi
            </button>
          </div>
        )}

        {!loading && !error && entries.length === 0 && (
          <div className="py-8 text-center">
            <MessageCircle className="mx-auto mb-4 h-10 w-10 text-burgundy/20" />
            <p className="text-sm text-burgundy/40">
              Belum ada ucapan. Jadilah yang pertama!
            </p>
          </div>
        )}

        {!loading && !error && entries.length > 0 && (
          <div className="space-y-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="rounded-lg border border-gold/20 bg-ivory p-4"
              >
                <div className="mb-2 flex items-center justify-between">
                  <p className="font-display font-bold text-burgundy">
                    {entry.guestName}
                  </p>
                  <p className="text-xs text-burgundy/40">
                    {new Date(entry.timestamp).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                {entry.message && (
                  <p className="text-sm text-burgundy/70">{entry.message}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
