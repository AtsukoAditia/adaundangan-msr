"use client";

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
import StorySection from "@/components/invitation/StorySection";
import { getGuestName } from "@/lib/utils";
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
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const coupleName = `${config.couple.groom.name} & ${config.couple.bride.name}`;

  return (
    <>
      {!isOpen && (
        <InvitationCover
          config={config}
          guestName={guestName}
          onOpen={handleOpen}
        />
      )}

      {isOpen && config.audio && (
        <MusicController audio={config.audio} autoPlay />
      )}

      {isOpen && (
        <main>
          <HeroSection config={config} />

          {config.quote && <QuoteSection quote={config.quote} />}

          <CoupleSection
            groom={config.couple.groom}
            bride={config.couple.bride}
          />

          <EventSection
            events={config.events}
            slug={config.slug}
            coupleName={coupleName}
          />

          {/* <CalendarButtons
            events={config.events}
            slug={config.slug}
            coupleName={coupleName}
          /> */}

          <Countdown targetDate={config.events[0]?.startAt ?? ""} />

          {config.story && config.story.length > 0 && (
            <StorySection story={config.story} />
          )}

          {config.gallery && config.gallery.length > 0 && (
            <GallerySection images={config.gallery} />
          )}

          <LocationSection events={config.events} />

          {config.gift && <GiftSection gift={config.gift} />}

          {config.rsvp?.enabled && (
            <RSVPForm
              slug={config.slug}
              maxGuestCount={config.rsvp.maxGuestCount ?? 2}
            />
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
