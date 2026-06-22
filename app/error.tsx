"use client";

import { useEffect } from "react";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Avoid logging sensitive details; generic message only.
    console.error("Terjadi kesalahan pada halaman.");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ivory px-6 text-center">
      <h1 className="text-2xl font-semibold text-burgundy">Terjadi Kesalahan</h1>
      <p className="mt-2 max-w-md text-burgundy-700/70">
        Maaf, terjadi kesalahan saat memuat halaman. Silakan coba lagi.
      </p>
      <button
        onClick={reset}
        className="mt-8 rounded-full bg-burgundy px-6 py-3 text-sm font-medium text-ivory transition hover:bg-burgundy-600"
      >
        Coba Lagi
      </button>
    </main>
  );
}
