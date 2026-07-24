"use client";

import { GuestBookEntry } from "@/types/invitation";
import { Heart, RefreshCw, MessageCircle } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "@/components/animation/ScrollReveal";

interface Props {
  slug: string;
  enabled: boolean;
}

function EntryBubble({ entry, index }: { entry: GuestBookEntry; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl p-4 border ${
        index % 2 === 0
          ? "bg-white border-gold/15"
          : "bg-ivory border-gold/10"
      }`}
    >
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-gold/15 flex items-center justify-center">
            <Heart className="h-3 w-3 text-gold fill-gold/50" />
          </div>
          <p className="font-display font-bold text-burgundy text-sm">{entry.guestName}</p>
        </div>
        <div className="flex items-center gap-2">
          {entry.attendance === "HADIR" && (
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-medium text-green-700">
              Hadir
            </span>
          )}
          <span className="text-xs text-burgundy/30">
            {new Date(entry.timestamp).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
            })}
          </span>
        </div>
      </div>
      {entry.message && (
        <p className="text-sm leading-relaxed text-burgundy/70 pl-0">
          {entry.message}
        </p>
      )}
      {entry.guestCount > 0 && (
        <p className="mt-1 text-xs text-burgundy/30">
          +{entry.guestCount} tamu
        </p>
      )}
    </motion.div>
  );
}

export default function GuestBook({ slug, enabled }: Props) {
  const [entries, setEntries] = useState<GuestBookEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const fetchEntries = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/guestbook?slug=${encodeURIComponent(slug)}`);
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
    <section id="guestbook" className="relative bg-white px-6 py-24 overflow-hidden">
      <div className="absolute inset-0 bg-noise-texture opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">Buku Tamu</h2>
            <div className="ornament-line mt-4"><div className="deco-dot" /></div>
            <p className="section-subtitle mt-4">
              Ucapan dan doa dari para tamu undangan
            </p>
          </div>
        </ScrollReveal>

        {loading && (
          <div className="flex flex-col items-center gap-3 py-12">
            <RefreshCw className="h-6 w-6 animate-spin text-gold" />
            <p className="text-sm text-burgundy/40">Memuat...</p>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-100 bg-red-50 p-6 text-center">
            <p className="mb-3 text-sm text-red-500">{error}</p>
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
          <motion.div
            className="flex flex-col items-center gap-4 py-16"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="relative">
              <MessageCircle className="h-12 w-12 text-burgundy/15" />
              <Heart className="absolute -bottom-1 -right-1 h-4 w-4 text-gold/50 fill-gold/30 animate-heartbeat" />
            </div>
            <p className="text-sm text-burgundy/40">
              Belum ada ucapan. Jadilah yang pertama!
            </p>
          </motion.div>
        )}

        {!loading && !error && entries.length > 0 && (
          <div className="space-y-3">
            <AnimatePresence initial={false}>
              {entries.map((entry, i) => (
                <EntryBubble key={entry.id} entry={entry} index={i} />
              ))}
            </AnimatePresence>
            <div ref={bottomRef} />
          </div>
        )}
      </div>
    </section>
  );
}
