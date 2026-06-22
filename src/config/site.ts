export const siteConfig = {
  name: "AdaUndangan",
  domain: "adaundangan.id",
  tagline: "Bagikan Hari Bahagia dalam Satu Tautan",
  description:
    "AdaUndangan adalah platform website undangan pernikahan digital yang elegan, modern, dan mudah dibagikan hanya dengan satu tautan.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
    "Halo AdaUndangan, saya ingin bertanya mengenai website undangan pernikahan.",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "halo@adaundangan.id",
};

export function buildWhatsappUrl(message?: string): string {
  const text = encodeURIComponent(message || siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export const SITE_NAME = siteConfig.name;
export const SITE_URL = siteConfig.url;
export const DEMO_SLUG = "demo-dan-demo";
export const WHATSAPP_LINK = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
