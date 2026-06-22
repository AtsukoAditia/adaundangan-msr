import { PRICING_PACKAGES } from "@/config/landing";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="paket" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-burgundy sm:text-4xl">
            Paket Harga
          </h2>
          <p className="mt-3 text-burgundy/60">
            Pilih paket yang sesuai kebutuhan Anda
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={
                "relative rounded-2xl border-2 p-6 transition hover:shadow-lg " +
                (pkg.highlight ? "border-gold shadow-md" : "border-gold/20")
              }
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold text-burgundy">
                  Populer
                </span>
              )}
              <h3 className="mb-2 font-display text-xl font-bold text-burgundy">
                {pkg.name}
              </h3>
              <p className="mb-1 text-3xl font-bold text-burgundy">
                {pkg.price}
              </p>
              <p className="mb-6 text-sm text-burgundy/60">
                {pkg.features.length} fitur tersedia
              </p>
              <ul className="mb-6 space-y-2">
                {pkg.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2 text-sm text-burgundy/70"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-burgundy py-2 text-center text-sm font-medium text-ivory transition hover:bg-burgundy/90"
              >
                Pesan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
