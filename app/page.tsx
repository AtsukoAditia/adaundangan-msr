import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PricingSection from "@/components/landing/PricingSection";
import OrderStepsSection from "@/components/landing/OrderStepsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
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
      <OrderStepsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
