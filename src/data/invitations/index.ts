import type { InvitationConfig } from "@/types/invitation";
import demoDanDemo from "./demo-dan-demo";
import lancelotOdette from "./lancelot-odette";

// Registry of all invitation configurations, keyed by slug.
// To add a new invitation: create a new file in this folder and register it here.
const invitations: Record<string, InvitationConfig> = {
  [demoDanDemo.slug]: demoDanDemo,
  [lancelotOdette.slug]: lancelotOdette,
};

export function getInvitationBySlug(slug: string): InvitationConfig | null {
  const normalized = slug.trim().toLowerCase();
  const invitation = invitations[normalized];
  if (!invitation) return null;
  if (!invitation.isPublished) return null;
  return invitation;
}

export function getPublishedSlugs(): string[] {
  return Object.values(invitations)
    .filter((invitation) => invitation.isPublished)
    .map((invitation) => invitation.slug);
}

export function getAllInvitations(): InvitationConfig[] {
  return Object.values(invitations);
}
