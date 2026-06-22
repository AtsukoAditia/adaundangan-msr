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
