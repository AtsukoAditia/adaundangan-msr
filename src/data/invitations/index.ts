import type { InvitationConfig } from "@/types/invitation";
import demoDanDemo from "./demo-dan-demo";
import demoElegant from "./demo-elegant";
import lancelotOdette from "./lancelot-odette";
import modernMinimalist from "./modern-minimalist";
import romanticFloral from "./romantic-floral";
import luxuryGold from "./luxury-gold";
import rusticNatural from "./rustic-natural";
import boldContemporary from "./bold-contemporary";

const invitations: Record<string, InvitationConfig> = {
  [demoDanDemo.slug]: demoDanDemo,
  [demoElegant.slug]: demoElegant,
  [lancelotOdette.slug]: lancelotOdette,
  [modernMinimalist.slug]: modernMinimalist,
  [romanticFloral.slug]: romanticFloral,
  [luxuryGold.slug]: luxuryGold,
  [rusticNatural.slug]: rusticNatural,
  [boldContemporary.slug]: boldContemporary,
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
