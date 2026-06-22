#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

cat > app/globals.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #FFFDF7;
  --foreground: #2a1a1c;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--background);
  color: var(--foreground);
  -webkit-font-smoothing: antialiased;
}

.no-scroll {
  overflow: hidden;
  height: 100vh;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}

.font-script {
  font-family: var(--font-cormorant), Georgia, serif;
}
EOF

cat > app/layout.tsx <<'EOF'
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { Toaster } from "sonner";
import { siteConfig } from "@/src/config/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
EOF

cat > app/robots.ts <<'EOF'
import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
EOF

cat > app/sitemap.ts <<'EOF'
import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/config/site";
import { getPublishedSlugs, getInvitationBySlug } from "@/src/data/invitations";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  ];
  // Only include published invitations that are not marked noIndex.
  const invitationRoutes: MetadataRoute.Sitemap = getPublishedSlugs()
    .filter((slug) => {
      const inv = getInvitationBySlug(slug);
      return inv && !inv.metadata.noIndex;
    })
    .map((slug) => ({
      url: `${base}/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  return [...staticRoutes, ...invitationRoutes];
}
EOF

cat > app/manifest.ts <<'EOF'
import type { MetadataRoute } from "next";
import { siteConfig } from "@/src/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FFFDF7",
    theme_color: "#7B1D2A",
    icons: [{ src: "/brand/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
EOF

cat > app/not-found.tsx <<'EOF'
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-ivory px-6 text-center">
      <p className="font-script text-6xl text-gold">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-burgundy">Halaman Tidak Ditemukan</h1>
      <p className="mt-2 max-w-md text-burgundy-700/70">
        Undangan yang Anda cari tidak tersedia atau belum dipublikasikan.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-burgundy px-6 py-3 text-sm font-medium text-ivory transition hover:bg-burgundy-600"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
EOF

cat > app/error.tsx <<'EOF'
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
EOF

echo "gen2 app shell done"
