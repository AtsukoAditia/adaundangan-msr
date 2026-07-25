import { getThemeByTemplate, templateRegistry } from "@/lib/theme/registry";
import { getInvitationBySlug } from "@/data/invitations";
import type { InvitationConfig } from "@/types/invitation";
import InvitationPage from "../../[slug]/InvitationPage";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ template: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { template } = await params;
  const theme = getThemeByTemplate(template);

  if (!theme || theme.id !== template) {
    return { title: "Template Tidak Ditemukan" };
  }

  return {
    title: `Preview Template ${theme.name}`,
    description: theme.description,
  };
}

export default async function TemplatePreviewPage({ params }: PageProps) {
  const { template } = await params;

  // Check if template exists
  if (!templateRegistry[template]) {
    notFound();
  }

  // Try to load demo invitation for this template
  const demoSlug = `demo-${template}`;
  let config = getInvitationBySlug(demoSlug);

  // If no specific demo exists, use demo-elegant as fallback
  if (!config) {
    config = getInvitationBySlug("demo-elegant");
  }

  if (!config) {
    notFound();
  }

  // Override theme to match the template being previewed
  const theme = getThemeByTemplate(template);
  const configWithTheme: InvitationConfig = {
    ...config,
    theme: theme.id as InvitationConfig["theme"],
  };

  return (
    <>
      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/template"
          className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 text-sm font-medium text-burgundy shadow-lg hover:bg-white transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Templates
        </Link>
      </div>

      {/* Invitation Preview */}
      <InvitationPage config={configWithTheme} />
    </>
  );
}
