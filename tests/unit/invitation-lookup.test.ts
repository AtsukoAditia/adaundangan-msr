import {
  getAllInvitations,
  getInvitationBySlug,
  getPublishedSlugs,
} from "@/data/invitations/index";
import { describe, expect, it } from "vitest";

describe("getInvitationBySlug", () => {
  it("returns config for valid published slug", () => {
    const result = getInvitationBySlug("demo-dan-demo");
    expect(result).not.toBeNull();
    expect(result!.slug).toBe("demo-dan-demo");
    expect(result!.isPublished).toBe(true);
  });

  it("returns null for unknown slug", () => {
    expect(getInvitationBySlug("tidak-ada")).toBeNull();
  });

  it("normalizes slug with whitespace", () => {
    const result = getInvitationBySlug("  demo-dan-demo  ");
    expect(result).not.toBeNull();
    expect(result!.slug).toBe("demo-dan-demo");
  });

  it("returns null for empty slug", () => {
    expect(getInvitationBySlug("")).toBeNull();
  });

  it("is case-insensitive", () => {
    const result = getInvitationBySlug("DEMO-DAN-DEMO");
    expect(result).not.toBeNull();
    expect(result!.slug).toBe("demo-dan-demo");
  });
});

describe("getPublishedSlugs", () => {
  it("returns array of published slugs", () => {
    const slugs = getPublishedSlugs();
    expect(Array.isArray(slugs)).toBe(true);
    expect(slugs).toContain("demo-dan-demo");
  });

  it("all returned slugs are strings", () => {
    const slugs = getPublishedSlugs();
    slugs.forEach((slug) => {
      expect(typeof slug).toBe("string");
      expect(slug.length).toBeGreaterThan(0);
    });
  });
});

describe("getAllInvitations", () => {
  it("returns all invitations including unpublished", () => {
    const all = getAllInvitations();
    expect(all.length).toBeGreaterThanOrEqual(1);
    expect(all.some((inv) => inv.slug === "demo-dan-demo")).toBe(true);
  });
});
