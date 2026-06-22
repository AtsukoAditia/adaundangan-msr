'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK } from '@/config/landing';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-gold/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold text-burgundy font-display">AdaUndangan</Link>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-burgundy/80 hover:text-burgundy transition-colors">{l.label}</Link>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-burgundy px-5 py-2 text-sm font-medium text-ivory hover:bg-burgundy/90 transition-colors">Pesan Sekarang</a>
          </div>
          <button type="button" className="md:hidden p-2 text-burgundy" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="px-3 py-2 text-sm text-burgundy/80" onClick={() => setIsOpen(false)}>{l.label}</Link>
              ))}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mx-3 mt-2 rounded-full bg-burgundy px-5 py-2 text-center text-sm font-medium text-ivory">Pesan Sekarang</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
