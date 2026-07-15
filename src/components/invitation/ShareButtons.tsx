"use client";

import { motion } from "motion/react";
import { Share2, MessageCircle, Copy, Check } from "lucide-react";
import { useState, useCallback } from "react";

interface Props {
  url: string;
  coupleName: string;
  guestName?: string;
}

export default function ShareButtons({ url, coupleName, guestName }: Props) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const message = `Undangan Pernikahan ${coupleName}${
    guestName && guestName !== "Bapak/Ibu/Saudara/i"
      ? `\nYth. ${guestName}`
      : ""
  }\n\n${url}`;

  const copyLink = useCallback(async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [url]);

  const waUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-4 left-4 z-40 flex flex-col items-start gap-2">
      {/* Expanded buttons */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          className="flex flex-col gap-2"
        >
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:scale-110"
            aria-label="Bagikan via WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={copyLink}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-burgundy text-white shadow-lg transition hover:scale-110"
            aria-label="Salin tautan"
          >
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        </motion.div>
      )}

      {/* Toggle button */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gold/30 text-burgundy transition hover:bg-gold/10"
        whileTap={{ scale: 0.9 }}
        aria-label="Bagikan undangan"
      >
        <Share2 className="h-5 w-5" />
      </motion.button>
    </div>
  );
}
