#!/bin/bash
set -e

cat > src/components/landing/FeaturesSection.tsx << 'XEOF'
import { Heart, Smartphone, Calendar, Image, Music, Shield, MapPin, Clock } from "lucide-react";
import { LANDING_FEATURES } from "@/config/landing";

const iconMap: Record<string, React.ElementType> = {
  Heart, Smartphone, Calendar, Image, Music, Shield, MapPin, Clock,
};

export default function FeaturesSection() {
  return (
    <section id="fitur" className="bg-ivory px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-burgundy sm:text-4xl">Fitur Unggulan</h2>
          <p className="mt-3 text-burgundy/60">Semua yang Anda butuhkan untuk undangan digital yang berkesan</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LANDING_FEATURES.map((f) => {
            const Icon = iconMap[f.icon] ?? Heart;
            return (
              <div key={f.title} className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/10">
                  <Icon size={24} className="text-burgundy" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-burgundy">{f.title}</h3>
                <p className="text-sm text-burgundy/60">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
XEOF

cat > src/components/landing/PricingSection.tsx << 'XEOF'
import { PRICING_PACKAGES } from "@/config/landing";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="paket" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-burgundy sm:text-4xl">Paket Harga</h2>
          <p className="mt-3 text-burgundy/60">Pilih paket yang sesuai kebutuhan Anda</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_PACKAGES.map((pkg) => (
            <div key={pkg.name} className={"relative rounded-2xl border-2 p-6 transition hover:shadow-lg " + (pkg.recommended ? "border-gold shadow-md" : "border-gold/20")}>
              {pkg.recommended && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold text-burgundy">Populer</span>}
              <h3 className="mb-2 font-display text-xl font-bold text-burgundy">{pkg.name}</h3>
              <p className="mb-1 text-3xl font-bold text-burgundy">{pkg.price}</p>
              <p className="mb-6 text-sm text-burgundy/60">{pkg.desc}</p>
              <ul className="mb-6 space-y-2">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-burgundy/70"><Check size={16} className="mt-0.5 shrink-0 text-gold" />{feat}</li>
                ))}
              </ul>
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="block rounded-full bg-burgundy py-2 text-center text-sm font-medium text-ivory transition hover:bg-burgundy/90">Pesan</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
XEOF

cat > src/components/landing/Footer.tsx << 'XEOF'
import Link from "next/link";
import { NAV_LINKS } from "@/config/landing";
import { SITE_NAME } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-burgundy px-4 py-12 text-ivory sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-display text-lg font-bold text-gold">{SITE_NAME}</h3>
            <p className="text-sm text-ivory/70">Undangan pernikahan digital yang elegan dan mudah dibagikan.</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Navigasi</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-ivory/70 hover:text-ivory">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-ivory/70 hover:text-ivory">Kebijakan Privasi</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Kontak</h4>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-sm text-ivory/70 hover:text-ivory">WhatsApp</a>
          </div>
        </div>
        <div className="mt-10 border-t border-ivory/10 pt-6 text-center text-xs text-ivory/50">&copy; 2026 {SITE_NAME}. Hak cipta dilindungi.</div>
      </div>
    </footer>
  );
}
XEOF

cat > app/page.tsx << 'XEOF'
import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PricingSection from "@/components/landing/PricingSection";
import Footer from "@/components/landing/Footer";
import { SITE_NAME, SITE_URL } from "@/config/site";

export const metadata: Metadata = {
  title: SITE_NAME + " — Undangan Pernikahan Digital Elegan",
  description: "Buat website undangan pernikahan digital yang elegan, personal, dan mudah dibagikan. Satu tautan untuk hari bahagia Anda.",
  openGraph: { title: SITE_NAME, description: "Undangan pernikahan digital elegan", url: SITE_URL, type: "website" },
};

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
XEOF

echo "gen5 landing done"
