import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — AdaUndangan",
  description:
    "Kebijakan privasi platform undangan pernikahan digital AdaUndangan.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-8 font-display text-3xl font-bold text-burgundy">
        Kebijakan Privasi
      </h1>
      <div className="prose prose-burgundy max-w-none space-y-6 text-burgundy/80">
        <section>
          <h2 className="font-display text-xl font-semibold text-burgundy">
            1. Informasi yang Dikumpulkan
          </h2>
          <p>
            AdaUndangan mengumpulkan informasi yang Anda berikan secara sukarela
            melalui formulir RSVP dan buku tamu, termasuk nama, pesan, dan
            konfirmasi kehadiran. Data ini disimpan di Google Spreadsheet milik
            pemilik undangan.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-burgundy">
            2. Penggunaan Informasi
          </h2>
          <p>
            Informasi yang dikumpulkan digunakan semata-mata untuk keperluan
            acara pernikahan, yaitu memproses konfirmasi kehadiran dan
            menampilkan ucapan tamu. Kami tidak menjual atau membagikan data
            Anda kepada pihak ketiga.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-burgundy">
            3. Cookie dan Pelacakan
          </h2>
          <p>
            Situs ini tidak menggunakan cookie pelacakan atau analitik pihak
            ketiga. Preferensi musik disimpan secara lokal di perangkat Anda dan
            tidak dikirim ke server.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-burgundy">
            4. Keamanan Data
          </h2>
          <p>
            Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi
            data Anda, termasuk validasi input, honeypot anti-spam, dan moderasi
            sebelum ucapan ditampilkan.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-burgundy">
            5. Hak Anda
          </h2>
          <p>
            Anda dapat meminta penghapusan data Anda dengan menghubungi pemilik
            undangan atau tim AdaUndangan melalui WhatsApp. Kami akan memproses
            permintaan Anda dalam waktu 7 hari kerja.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-burgundy">
            6. Perubahan Kebijakan
          </h2>
          <p>
            Kebijakan privasi ini dapat diperbarui dari waktu ke waktu.
            Perubahan akan dipublikasikan di halaman ini dengan tanggal
            pembaruan terakhir.
          </p>
        </section>

        <section>
          <h2 className="font-display text-xl font-semibold text-burgundy">
            7. Kontak
          </h2>
          <p>
            Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan
            hubungi kami melalui WhatsApp yang tersedia di halaman utama
            AdaUndangan.
          </p>
        </section>
      </div>
    </main>
  );
}
