import { getInvitationBySlug } from "@/data/invitations";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InvitationPage from "./InvitationPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = getInvitationBySlug(slug);

  if (!config) {
    return { title: "Undangan Tidak Ditemukan — AdaUndangan" };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adaundangan.id";

  return {
    title: config.metadata.title,
    description: config.metadata.description,
    robots: config.metadata.noIndex
      ? { index: false, follow: false }
      : undefined,
    openGraph: {
      title: config.metadata.title,
      description: config.metadata.description,
      url: `${baseUrl}/${config.slug}`,
      images: config.metadata.ogImage ? [config.metadata.ogImage] : [],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.metadata.title,
      description: config.metadata.description,
      images: config.metadata.ogImage ? [config.metadata.ogImage] : [],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const config = getInvitationBySlug(slug);

  if (!config) {
    notFound();
  }

  return <InvitationPage config={config} />;
}
