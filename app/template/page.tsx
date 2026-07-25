import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TemplateSelector from "@/components/landing/TemplateSelector";
import { templateRegistry } from "@/lib/theme/registry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilih Template Undangan",
  description: "Pilih desain yang sesuai dengan gaya pernikahan Anda",
};

export default function TemplateGalleryPage() {
  const templates = Object.values(templateRegistry).map((theme) => ({
    id: theme.id,
    name: theme.name,
    description: theme.description,
    colors: {
      primary: theme.colors.primary,
      secondary: theme.colors.secondary,
      accent: theme.colors.accent,
    },
  }));

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Page Header */}
        <section className="py-16 px-6 bg-gradient-to-b from-ivory to-white">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-display text-4xl font-bold text-burgundy mb-4 sm:text-5xl lg:text-6xl">
              Pilih Template Undangan
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilih desain yang sesuai dengan gaya pernikahan Anda
            </p>
          </div>
        </section>

        {/* Template Grid */}
        <TemplateSelector templates={templates} />
      </main>
      <Footer />
    </>
  );
}
