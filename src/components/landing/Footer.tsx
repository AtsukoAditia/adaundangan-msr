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
