import type { InvitationConfig } from "@/types/invitation";
import demoDanDemo from "./demo-dan-demo";

// Registry of all invitation configurations, keyed by slug.
// To add a new invitation: create a new file in this folder and register it here.
const invitations: Record<string, InvitationConfig> = {
  [demoDanDemo.slug]: demoDanDemo,
};

/**
 * Look up an invitation by slug.
 * Returns the config only if it exists AND is published.
 * Unpublished or unknown slugs return null so callers can trigger notFound().
 */
export function getInvitationBySlug(slug: string): InvitationConfig | null {
  const normalized = slug.trim().toLowerCase();
  const invitation = invitations[normalized];
  if (!invitation) return null;
  if (!invitation.isPublished) return null;
  return invitation;
}

/**
 * Return all published invitation slugs (used for sitemap / static params).
 * Unpublished invitations are intentionally excluded.
 */
export function getPublishedSlugs(): string[] {
  return Object.values(invitations)
    .filter((invitation) => invitation.isPublished)
    .map((invitation) => invitation.slug);
}

/**
 * Return all invitation configs (including unpublished). Server use only.
 */
export function getAllInvitations(): InvitationConfig[] {
  return Object.values(invitations);
}
