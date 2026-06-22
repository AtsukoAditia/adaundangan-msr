import Link from 'next/link';
import { DEMO_SLUG } from '@/config/site';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center bg-gradient-to-br from-burgundy via-burgundy/90 to-burgundy/80 px-4 pt-16 text-center text-ivory">
      <div className="absolute inset-0 bg-[url('/images/landing/hero-bg.svg')] bg-cover bg-center opacity-10" />
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gold">Undangan Pernikahan Digital</p>
        <h1 className="mb-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Bagikan Hari Bahagia dalam Satu Tautan
        </h1>
        <p className="mb-10 text-lg text-ivory/80 sm:text-xl">
          Buat website undangan pernikahan yang elegan, personal, dan mudah dibagikan.
          Tanpa aplikasi, tanpa ribet — cukup satu link.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={`/${DEMO_SLUG}`} className="inline-flex items-center rounded-full bg-gold px-8 py-3 text-base font-semibold text-burgundy shadow-lg transition hover:bg-gold/90 hover:shadow-xl">Lihat Demo</Link>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border-2 border-ivory/30 px-8 py-3 text-base font-semibold text-ivory transition hover:bg-ivory/10">Pesan Sekarang</a>
        </div>
      </div>
    </section>
  );
}
