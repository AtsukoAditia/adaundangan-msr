import { LANDING_FEATURES } from "@/config/landing";
import {
  Calendar,
  Clock,
  Heart,
  Image,
  MapPin,
  Music,
  Shield,
  Smartphone,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Smartphone,
  Calendar,
  Image,
  Music,
  Shield,
  MapPin,
  Clock,
};

export default function FeaturesSection() {
  return (
    <section id="fitur" className="bg-ivory px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-burgundy sm:text-4xl">
            Fitur Unggulan
          </h2>
          <p className="mt-3 text-burgundy/60">
            Semua yang Anda butuhkan untuk undangan digital yang berkesan
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LANDING_FEATURES.map((f) => {
            const Icon = iconMap[f.icon] ?? Heart;
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-gold/20 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/10">
                  <Icon size={24} className="text-burgundy" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-burgundy">
                  {f.title}
                </h3>
                <p className="text-sm text-burgundy/60">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
