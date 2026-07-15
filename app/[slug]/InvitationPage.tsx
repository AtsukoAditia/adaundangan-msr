"use client";

import BackToTop from "@/components/invitation/BackToTop";
import ClosingSection from "@/components/invitation/ClosingSection";
import Countdown from "@/components/invitation/Countdown";
import CoupleSection from "@/components/invitation/CoupleSection";
import EventSection from "@/components/invitation/EventSection";
import GallerySection from "@/components/invitation/GallerySection";
import GiftSection from "@/components/invitation/GiftSection";
import GuestBook from "@/components/invitation/GuestBook";
import HeroSection from "@/components/invitation/HeroSection";
import InvitationCover from "@/components/invitation/InvitationCover";
import LocationSection from "@/components/invitation/LocationSection";
import MusicController from "@/components/invitation/MusicController";
import QuoteSection from "@/components/invitation/QuoteSection";
import RSVPForm from "@/components/invitation/RSVPForm";
import ScrollProgress from "@/components/invitation/ScrollProgress";
import SectionDivider from "@/components/invitation/SectionDivider";
import ShareButtons from "@/components/invitation/ShareButtons";
import StorySection from "@/components/invitation/StorySection";
import { getGuestName } from "@/lib/utils";
import { THEMES } from "@/config/themes";
import type { InvitationConfig } from "@/types/invitation";
import { useCallback, useEffect, useState } from "react";

interface Props {
  config: InvitationConfig;
}

export default function InvitationPage({ config }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const guestName = getGuestName();

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Inject theme CSS variables
  useEffect(() => {
    const theme = THEMES[config.theme] ?? THEMES.elegant;
    document.documentElement.style.cssText = theme.css;
    return () => {
      document.documentElement.style.cssText = "";
    };
  }, [config.theme]);

  const coupleName = `${config.couple.groom.name} & ${config.couple.bride.name}`;
  const siteUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      {/* Progress bar — always visible after open */}
      {isOpen && <ScrollProgress />}

      {/* Cover */}
      {!isOpen && (
        <InvitationCover
          config={config}
          guestName={guestName}
          onOpen={handleOpen}
        />
      )}

      {/* Music */}
      {isOpen && config.audio && (
        <MusicController audio={config.audio} autoPlay />
      )}

      {/* Share + Back to top — visible after open */}
      {isOpen && (
        <>
          <ShareButtons url={siteUrl} coupleName={coupleName} guestName={guestName} />
          <BackToTop />
        </>
      )}

      {/* Main invitation content */}
      {isOpen && (
        <main>
          <HeroSection config={config} />

          {config.quote && (
            <>
              <QuoteSection quote={config.quote} />
              <SectionDivider variant="dots" />
            </>
          )}

          <CoupleSection groom={config.couple.groom} bride={config.couple.bride} />

          <SectionDivider variant="heart" />

          <EventSection
            events={config.events}
            slug={config.slug}
            coupleName={coupleName}
          />

          <Countdown targetDate={config.events[0]?.startAt ?? ""} />

          {config.story && config.story.length > 0 && (
            <>
              <StorySection story={config.story} />
              <SectionDivider variant="floral" />
            </>
          )}

          {config.gallery && config.gallery.length > 0 && (
            <>
              <GallerySection images={config.gallery} />
              <SectionDivider variant="wave" />
            </>
          )}

          <LocationSection events={config.events} />

          {config.gift && <GiftSection gift={config.gift} />}

          {config.rsvp?.enabled && (
            <>
              <SectionDivider variant="heart" />
              <RSVPForm
                slug={config.slug}
                maxGuestCount={config.rsvp.maxGuestCount ?? 2}
              />
            </>
          )}

          {config.guestBook?.enabled && (
            <GuestBook slug={config.slug} enabled={config.guestBook.enabled} />
          )}

          <ClosingSection
            coupleName1={config.couple.groom.name}
            coupleName2={config.couple.bride.name}
            closingMessage={config.closing?.message}
          />
        </main>
      )}
    </>
  );
}
